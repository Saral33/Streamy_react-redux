import React, { Component } from 'react';
import Modal from '../modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderButton() {
        return (
            <>
                <button onClick={()=>this.props.deleteStream(this.props.match.params.id)} className="ui red button">Delete</button>
                <Link to="/" className="ui cancel button">Cancel</Link>
            </>
        )
    }

    renderContent() {
        return (
            (!this.props.stream) ? 'Are you sure want to delete this stream?' : `Are you sure want to delete the stream called "${this.props.stream.title}"?`)
    }


    render() {

        return (

            <Modal
                header="Delete"
                content={this.renderContent() }
                buttons={this.renderButton()}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}




export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);