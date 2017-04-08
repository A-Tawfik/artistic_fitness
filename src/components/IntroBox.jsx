import React from 'react';


export default class IntroBox extends React.Component {

  playVideo(e) {
    var video = e.target
    video.play()
  }

  stopVideo(e) {
    var video = e.target
    video.pause()
  }

  handleClick(){
    this.props.changePage(this.props.data.className)
  }

    render(){
        return(
            <div className={this.props.data.className + " box col-xs-12 col-sm-6"} onClick={this.handleClick.bind(this)}>
              <div className="row box-title"><h2>{this.props.data.title}</h2></div>
              <div className="row box-img">
                <video src={this.props.data.video} type="video/mp4" loop onMouseOver={this.playVideo} onMouseLeave={this.stopVideo}>
                  {/* <source  type="video/mp4" /> */}
                </video>
              </div>
              <div className="quote">
                <h2>{this.props.data.quote.map((line,i)=>{return(<span key={i}>{line}</span>)})}</h2>
              </div>
            </div>
        )
    }
}
