import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, FlatList} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class HelloWorldApp extends Component {

  constructor(){
    super();
    this.state = {
      movies:[]
    }
  }
  componentDidMount(){
    this.getMovieList();
    console.warn("------movies : ", this.state.movies);
    
  }

  async getMovieList () {
    let resp = await fetch('https://reactnative.dev/movies.json');
    let rspData = await resp.json();
    console.warn("------movies : ", rspData.movies.length);
    this.setState({
      movies:rspData.movies
    });
  }

  render() {
    return (
    <>
      <SafeAreaView>
        <View style={styles.body}>

          <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Movies</Text>
              <Text style={styles.sectionDescription}>
              </Text>
          </View>
          <View style={styles.sectionContainer}>
            <FlatList
            data={this.state.movies}
            renderItem={ ({item}) => <Text style={styles.movieItem}>{item.title}</Text>}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
    )
  }
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  movieItem: {
    backgroundColor: 'skyblue',
    margin: 3,
    padding:10,
    fontSize: 18,
    fontWeight: '600',
  }
});
