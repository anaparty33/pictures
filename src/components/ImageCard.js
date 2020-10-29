import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    const state = { spans: 0 };
  }

  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.findHeight);
  }

  findHeight = () => {
    console.log(this.imgRef.current.clientHeight);
    const height = this.imgRef.current.clientHeight;
    const spansNeeded = Math.ceil(height / 10);
    this.setState({ spans: spansNeeded });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.spans}` }}>
        <img
          ref={this.imgRef}
          src={this.props.image.urls.regular}
          alt={this.props.image.description}
        />
      </div>
    );
  }
}

export default ImageCard;
