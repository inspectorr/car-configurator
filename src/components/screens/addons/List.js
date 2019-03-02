import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

export default class List extends Component {
  render() {
    const title = this.props.title;
    const data = this.props.data;
    const ListItem = this.props.ListItem;

    const itemSelection = this.props.itemSelection;

    return (
        <FlatList
          ListHeaderComponent={
            <View style={styles.titleContainer}>
              <Text style={{fontSize: this.props.titleFontSize}}>{title}</Text>
            </View>
          }

          contentContainerStyle={styles.list}
          data={data}
          renderItem={({item, index}) => {
            return (
              <ListItem
                item={item}
                selected={itemSelection ? itemSelection[index] : null}
                selectItem={(i) => this.props.selectItem(i)}
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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  // header: {
  //   fontSize: 35
  // }
});
