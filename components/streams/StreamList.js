import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams ,signIn} from '../../actions';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';


class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {

        if (this.props.signStatus && stream.userID === this.props.currentUserID) {
            return (<div className="right floated content">
                <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                    EDIT
                </Link>
                <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                    DELETE
                </Link>
                <Link to={`/streams/watch/${stream.id}`} className="ui button purple">
                     <i className="eye icon"></i>
                     Watch
                </Link>
            </div>)
        }
        else {
            return (
                <div className="right floated content">
                     <Link to={`/streams/watch/${stream.id}`} className="ui button purple">
                     <i className="eye icon"></i>
                     Watch
                </Link>
                </div>
            )
        }
    }

    renderList() {

        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/watch/${stream.id}`}>
                        {stream.title}
                        </Link>

                    <div className="description" style={{color:'white'}}>{stream.description}</div>
                    </div>

                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.signStatus) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create your own Stream
                </Link>
                </div>)
        }
        
                return(
                    <div style={{ textAlign: 'center' }}>
                   <GoogleAuth detail="Sign in to stream"/>
                </div>  
                )
        
       
        
    }

    render() {

        return (
            <div>
                <h2 style={{textAlign:'center'}}>Avialable Streams</h2>
                <div className="ui celled list"> {this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserID: state.auth.userID,
        signStatus: state.auth.isSignedIn
    };
}


export default connect(mapStateToProps, { fetchStreams,signIn })(StreamList);