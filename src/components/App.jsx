import React from 'react';
import { PageHeader} from 'react-bootstrap';
import IntroBox from  './IntroBox.jsx';
import VideoPage from './VideoPage.jsx';
import NavBar from './NavBar.jsx';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      content: "intro",
      lefts: [],
      rights: [],
      centers: []
    }
    this.changePage = this.changePage.bind(this)
  }

  changePage(target){
    this.setState({content: target})
  }



  toIntro(){
          for (var i = 0; i < this.state.lefts.length; i++) {
            this.state.lefts[i].classList.add("left")
            this.state.lefts[i].classList.remove("center")
          }

          for (var i = 0; i < this.state.rights.length; i++) {
            this.state.rights[i].classList.add("right")
            this.state.rights[i].classList.remove("center")
          }

          for (var i = 0; i < this.state.centers.length; i++) {
            this.state.centers[i].classList.add("center")
            this.state.centers[i].classList.remove("left")
            this.state.centers[i].classList.remove("right")
          }

  }

  toHim(){
        for (var i = 0; i < this.state.rights.length; i++) {
          this.state.rights[i].classList.add("center")
          this.state.rights[i].classList.remove("right")
        }

        for (var i = 0; i < this.state.centers.length; i++) {
          this.state.centers[i].classList.add("left")
          this.state.centers[i].classList.remove("right")
          this.state.centers[i].classList.remove("center")

        }
  }

  toHer(){
        for (var i = 0; i < this.state.lefts.length; i++) {
          this.state.lefts[i].classList.add("center")
          this.state.lefts[i].classList.remove("left")

        }

        for (var i = 0; i < this.state.centers.length; i++) {
          this.state.centers[i].classList.add("right")
          this.state.centers[i].classList.remove("left")
          this.state.centers[i].classList.remove("center")

        }
  }

  componentDidMount(){
    this.setState({rights: document.getElementsByClassName(this.props.data[0].name)})
    this.setState({lefts: document.getElementsByClassName(this.props.data[1].name)})
    this.setState({centers: document.getElementsByClassName("intro")})

    if (this.state.content == "him") {
     this.toHim();
    }
    else if (this.state.content == "her") {
     this.toHer();
    }
    else {
     this.toIntro();
    }
  }

  componentDidUpdate(){
    if (this.state.content == "him") {
     this.toHim();
    }
    else if (this.state.content == "her") {
     this.toHer();
    }
    else {
     this.toIntro();
    }
  }

   render() {
    var intros = this.props.data.map((data, i)=>{return(<IntroBox key={i} data={data} changePage={this.changePage}/>)})
    var videos = this.props.data.map((data, i)=>{return(<VideoPage key={i} data={data}/>)})


      return (
        <div className="app-wrap">
          <PageHeader>ARTISTIC FITNESS </PageHeader>
          <div>
            <NavBar />
          </div>
        <div className="content col-xs-12">
          <div className="center intro">
            {intros}
            <div className="cert col-xs-12"> <img src="assets/NASM_cert.gif" alt="" /></div>
          </div>
            {videos}

        </div>

      </div>
      );
   }
}
