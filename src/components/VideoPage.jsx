import React from 'react';
import MyButton from './MyButton.jsx';
import DemoVideo from './DemoVideo.jsx';

export default class VideoPage extends React.Component {

  constructor(){
    super();
    this.state = {
      video: ""
    }
    this.changeVideo = this.changeVideo.bind(this)
  }

  changeVideo(clickedVideo){
    this.setState({video: clickedVideo})
  }

    render(){
      var extraButtons = this.props.data.extraButtons.map((button, i)=>{return(<MyButton key={i} button={button} changeVideo={this.changeVideo}/>)})
      var buttons = this.props.data.buttons.map((button, i)=>{return(<MyButton key={i} button={button} changeVideo={this.changeVideo}/>)})
        return(
            <div className={"col-xs-12" + this.props.data.videoPosition + " video-page " + this.props.data.name}>
              <div className="video-block" style={{float: this.props.data.videoPosition}}>
                <DemoVideo video={this.state.video} />
              </div>
              <div className="buttons-block">
                {buttons}
              </div>
              <div className="extra-buttons-block">
                {extraButtons}
              </div>
            </div>
        )
    }
}
