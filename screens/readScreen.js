import * as React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadScreen extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        search:''
      }
    }

    render(){
        return(
          
            <View style={{backgroundColor: 'white'}}>
                <Text style={{fontSize: 30,alignItems: 'center',justifyContent: 'center', backgroundColor :                'pink', textAlign : 'center', color : 'white',}}>
                Bed Time Story
                </Text>

          <View>
         <TextInput 
         style={styles.searchBar}
          placeholder = "Type here...."
          onChangeText={(text)=>{this.setState({search:text})}}/>
           <TouchableOpacity
            style = {styles.searchButton}
            onPress={()=>{this.searchTransactions(this.state.search)}}>
            <Text style={styles.bar}>Search</Text>
          </TouchableOpacity>
          </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({ 
    searchBar:{
      flexDirection:'row',
      height:50,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'black',
      fontSize:20,
      color:'white'
    },
    searchButton:{
      height:50,
      width:100,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'black',
      marginTop:-50,
      marginLeft:240,
      fontSize:20,
      borderWidth:1
    },
    bar:{
      fontSize:20,
      fontWeight:'bold',
      color:"white", 
      },
});