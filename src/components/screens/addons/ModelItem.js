import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import arrayFromOrderedObject from '../../accessory/arrayFromOrderedObject';
import formatPrice from '../../accessory/formatPrice';

export default class ModelItem extends Component {
  render() {
    const model = this.props.item;
    const images = arrayFromOrderedObject(model.images);

    const name = model.name.toUpperCase();
    const pic = {
      uri: images[0].uri,
    }

    let maxPrice = 0, minPrice = Infinity;
    for (let key in model.equipment) {
      let price = model.equipment[key].price;
      if (maxPrice < price) maxPrice = price;
      if (minPrice > price) minPrice = price;
    }

    return (
      <View style={styles.container}>
      <TouchableOpacity
        delayPressIn={250}
        onPress={() => {
          this.props.navigate('Equipment', 'model', model);
      }}>
        <View style={styles.itemContainer}>

          <View style={styles.briefContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.prices}>{`${formatPrice(minPrice)}-${formatPrice(maxPrice)} ₽`}</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={pic}/>
          </View>

        </View>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    width: 300,
    height: 200,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    shadowColor: '#333',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 15,
    overflow: 'hidden',
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 150,
  },

  briefContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  prices: {
    fontSize: 17,
    color: 'rgba(204,204,204,0.85)'
  },
});
