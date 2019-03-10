import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import formatPrice from '../../accessory/formatPrice';

export default class EquipmentItem extends Component {

  render() {
    const equipment = this.props.item;
    const index = equipment.order;

    const name = equipment.name;
    const price = equipment.price;
    const brief = equipment.brief;

    const selected = this.props.selected;

    return (
      <View style={styles.container}>
      <TouchableOpacity
        delayPressIn={250} 
        onPress={() => {
        this.props.selectItem(index);
      }}>
        <View style={[styles.item, selected && styles.itemSelected]}>

          <View style={[styles.header, selected && styles.headerSelected]}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{`${formatPrice(price)} ₽`}</Text>
          </View>

          <View style={styles.briefContainer}>
            <Text style={styles.brief}>
              {brief}
            </Text>
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
  item: {
    flex: 1,
    margin: 10,
    width: 300,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderRadius: 10,
    shadowColor: '#333',
    shadowOpacity: 0.6,
    shadowRadius: 15,
    overflow: 'hidden',
  },
  itemSelected: {
    shadowColor: '#2196F3',
    shadowOpacity: 1,
  },

  header: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#262F3D',
  },
  headerSelected: {
    backgroundColor: '#2196F3',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  price: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)'
  },

  briefContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  brief: {
    fontSize: 15,
  },

});
