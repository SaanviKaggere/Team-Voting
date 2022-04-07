import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends Component {
  team1() {
    //update vote values of Team A in the database
    db.ref('/').update({
      team1: 1,
    });
  }

  team2() {
    db.ref('/').update({
      team2: 2,
    });
  }

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>Vote Here</Text>
            <TouchableOpacity style={styles.buttons} onPress={this.team1()}>
              <Text style={{ fontSize: 20, fontFamily:'sans Serif' }}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={this.team2()}>
              <Text style={{ fontSize: 20, fontFamily:'sans Serif' }}>Team B</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor: '#009C95',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    width: 150,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
