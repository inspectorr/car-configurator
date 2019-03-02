import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';

import ModelItem from './ModelItem';

export default class ModelsList extends Component {
  render() {
    const cars = this.props.cars;
    return (
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Выберите модель</Text>
            </View>
          }

          contentContainerStyle={styles.list}
          data={cars}
          renderItem={({item}) => {
            return (
              <ModelItem
                model={item}
                navigate={(screen, userData) => this.props.navigate(screen, userData)}
              />
            );
          }}
          keyExtractor={(item) => item.name}

          ListFooterComponent={
            <View style={{height: 20}}></View>
          }
        />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    zIndex: 0,
    paddingTop: 10,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 40
  }
});
