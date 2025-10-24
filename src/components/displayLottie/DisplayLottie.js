import React, {Component} from "react";
import Lottie from "lottie-react";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;

    return <Lottie animationData={animationData} loop={true} autoplay={true} />;
  }
}
