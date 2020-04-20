import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import TranscationScreen from "./screens/TransactionScreen";
import SearchScreen from "./screens/SearchScreen";
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.displayText}>Dummy QR Code Output</Text>
      <TouchableOpacity style = {styles.scanButton}> 
      <Text> Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}
const tabNavigator = createBottomTabNavigator({

  Transaction : {screen : TranscationScreen},
  Search : {screen : Searchscreen},
},

{
  defaultNavigationOptions : ({navigation}) => ({

tabBarIcon : ({}) => {
  const routeName = navigation.state.routeName

  if (routeName === 'Transaction') {
    return (
    <Image
    source = {require('./assets/book.png')}
    style = {{width : 40, height : 40}}/>
    )
  }

else if(routeName == 'Search'){
 
  return (
    <Image
    source = {require('./assets/searchingbook.png')}
    style = {{width : 40, height : 40}}/>
  )
}
}
  })
}

)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayText : {
fontSize :  15,
fontColor : "red",
padding : 30,
textDecorationLine : 'underline'
  },
  scanButton :{
    backgroundColor : "yellow",
    padding : 10,
    marging : 10,
    
  }
});
