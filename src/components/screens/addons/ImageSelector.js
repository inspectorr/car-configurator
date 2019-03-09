import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class ImageSelector extends Component {
  render() {
    const activeImageIndex = this.props.activeImageIndex;
    let images = this.props.images;

    images = images.map((item, i) => {
      return (
        <Image
          key={item.name}
          source={{uri: item.uri}}
          style={{
          width: this.props.width,
          height: this.props.height,
          display: activeImageIndex === i ? 'flex' : 'none',
        }}/>
      );
    })

    return images;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
