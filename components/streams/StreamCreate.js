import React from 'react';

import {connect} from 'react-redux';
import {createStream} from '../../actions/index';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

 

  submitForm = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div style={{backgroundColor:'white', height:'80vh'}}>
        <h3 style={{color:"black"}}>Create a stream</h3>
        <StreamForm submitForm={this.submitForm} />
      </div>
    );
  }
}


export default connect(null,{createStream})(StreamCreate);