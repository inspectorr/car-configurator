import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Bar from './addons/Bar';
import ForwardButton from './addons/ForwardButton';
import ImageSelector from './addons/ImageSelector';

import arrayFromOrderedObject from '../accessory/arrayFromOrderedObject';

export default class Color extends Component {
  state = {
    forwardEnabled: true,
    activeImageIndex: this.props.dataSelection.color ? this.props.dataSelection.color.order : 0,
    images: arrayFromOrderedObject(this.props.dataSelection.model.images),
    imagesComps: null,
  }

  setImage(index) {
    this.setState({
      activeImageIndex: index,
    });
  }

  render() {
    const images = this.state.images;

    const colors = images.map((item, i) => {
      const borderColor = this.state.activeImageIndex === i ? '#2196F3' : '#D1E3F6';
      const shadowColor = this.state.activeImageIndex === i ? '#2196F3' : '#D1E3F6';
      const shot = i;
      return (
        <TouchableOpacity
          key={item.name}
          onPress={() => {
            this.setState({activeImageIndex: shot});
          }}
          style={{
            backgroundColor: item.color,
            opacity: 0.85,
            width: 60,
            borderRadius: 100,
            borderColor,
            shadowColor,
            shadowRadius: 10,
            borderWidth: 4,
        }}>
        </TouchableOpacity>
      );
    });

    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View><Bar
          title='Цвет'
          back={true}
          onBack={() => {this.props.navigate('Equipment')}}
        /></View>


        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainter}>
          <Text style={styles.header}>Выберите цвет</Text>
        </View>
        <View style={styles.imageContainer}>

          <ImageSelector
            width={330}
            height={250}
            images={images}
            activeImageIndex={this.state.activeImageIndex}
          />

        </View>
        <View style={styles.colorsContainer}>
          <View style={styles.colorPanel}>
            {colors}
          </View>
        </View>
        <View style={styles.colorNameContainer}>
          <Text style={styles.colorName}>
            {images[this.state.activeImageIndex].name}
          </Text>
        </View>
        </ScrollView>



        <View>
          <ForwardButton
              onPress={() => {
                this.props.navigate('Summary', 'color', images[this.state.activeImageIndex]);
              }}
              title='Далее'
              enabled={this.state.forwardEnabled}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 500,
  },

  headerContainter: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 40,
  },

  imageContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 330,
    height: 250,
  },

  colorsContainer: {
    // flex: 1,
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  colorPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    height: 60,
  },
  colorNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorName: {
    fontSize: 50,
  },
});
