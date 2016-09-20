class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };

  }

  render () {
    // console.log('current', this.state.currentVideo);
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer currentVideo={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList data={this.state.videos}/>
      </div>
    </div>);
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// var App = () => {
//  return (
//     <div>
//       <Nav />
//       <div className="col-md-7">
//         <VideoPlayer currentVideo={window.exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList data={window.exampleVideoData}/>
//       </div>
//     </div>
//   );
// };