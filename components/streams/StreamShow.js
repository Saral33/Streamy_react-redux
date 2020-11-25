import React, { Component } from 'react';
import {fetchStream} from '../../actions';
import {connect} from 'react-redux';
import flv from 'flv.js';

class StreamShow extends Component{
    constructor(props){
        super(props);
        this.videoref= React.createRef();
        
    }

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
       
    }

    componentDidUpdate(){
        this.buildPlayer();
    }

    componentWillUnmount(){
        this.player.destroy();
    }

    buildPlayer(){
        if(this.player || !this.props.stream){
            return
        }
        this.player= flv.createPlayer({
            type:'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        });
        this.player.attachMediaElement(this.videoref.current);
        this.player.load();
    }
     
    render(){

        if(!this.props.stream){return<div>Loading....</div>}
        return(
            <div style={{backgroundColor:'#333333'}}>
                <video ref={this.videoref} style={{width:'100%'}} controls/>
                <h2>{this.props.stream.title}</h2>
        <h5>{this.props.stream.description}</h5>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}



export default connect(mapStateToProps,{fetchStream})(StreamShow);