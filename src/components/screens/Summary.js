import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Bar from './addons/Bar';
import formatPrice from '../accessory/formatPrice';

export default class Summary extends Component {
  componentDidMount() {

  }

  render() {
    const selection = this.props.dataSelection;
    const pic = {uri: selection.color.uri};

    return (
      <View style={styles.container}>
        <View><Bar
          title='Готово'
          back={true}
          onBack={(screen) => {this.props.navigate('Color')}}
        /></View>

        <View style={styles.headerContainter}>
          <Text style={styles.header}>Ваш автомобиль</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={pic} />
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText} key={selection.model.name}>
            <Text style={{fontWeight: '500', color: '#262F3D'}}>{`Модель: `}</Text>{`${selection.model.name}`}
          </Text>
          <Text style={styles.summaryText} key={selection.equipment.name}>
            <Text style={{fontWeight: '500', color: '#262F3D'}}>{`Комплектация: `}</Text>{`${selection.equipment.name}`}
          </Text>
          <Text style={styles.summaryText} key={selection.color.name}>
            <Text style={{fontWeight: '500', color: '#262F3D'}}>{`Цвет: `}</Text>{`${selection.color.name}`}
          </Text>
        </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            <Text style={{fontWeight: '500', color: '#262F3D'}}>{`Итого: `}</Text>{`${formatPrice(selection.equipment.price)} ₽`}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>КУПИТЬ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  headerContainter: {
    height: 80,
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

  summaryContainer: {
    width: 400,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  summaryText: {
    marginLeft: 30,
    fontSize: 24,
    color: 'rgba(51,51,51,0.95)',
  },

  priceContainer: {
    flex: 1,
    // marginTop: 30,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  priceText: {
    // marginLeft: 30,
    fontSize: 40,
    color: 'rgba(51,51,51,0.95)',
  },

  buttonContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8F3C3C',
    width: 180,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
  },


});
