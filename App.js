import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/writeScreen.js';
import ReadScreen from './screens/readScreen.js';

export default class App extends React.Component{
  render(){
    return(
        <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
   WriteStory: {screen: WriteScreen},
  ReadStory: {screen: ReadScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName == "ReadStory"){
      return(
        <Image
         source = {require('./assets/read.png')}
         style = {{width: 40, height: 40}}
        />
      )
    }
    else if(routeName == "WriteStory"){
      return(
        <Image
         source = {require('./assets/write.png')}
         style = {{width: 40, height: 40}}
        />
      )
    }
   }
  })
}
)

const AppContainer = createAppContainer(TabNavigator);