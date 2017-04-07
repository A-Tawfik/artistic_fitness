import React from 'react';

export default class DemoVideo extends React.Component {

  render(){
    return(
      <div className="demo-video">
        <iframe src={this.props.video} frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }

}
