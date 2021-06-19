import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,ToastAndroid, Image, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config.js';

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
        ToastAndroid.show('STORY SUBMITTED', ToastAndroid.SHORT)
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Header 
                    backgroundColor = {'pink'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'black', fontSize: 30,}
                    }}
                />

                <TextInput 
                    placeholder="STORY TITLE"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="AUTHOR"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="WRITE STORY"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                  onPress= {this.submitStory}>
                    <Text style={styles.buttonText}
                    onPress={()=>Alert.alert("Your Story has Submitted")}>Submit</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
  },
  storyText: {
      height: 200,
      borderWidth: 2,
      margin: 10,
  },
  submitButton:{
      borderWidth : 2, 
      padding : 5, 
      margin : 20, 
      justifyContent : 'center', 
      alignItems : 'center',
      alignSelf : 'center', 
      height : 50, 
      width : '42%',
      backgroundColor : 'pink',
  },
  buttonText: {
      fontWeight:'bold', fontSize:20
  },
  downText : {
    color : 'red'
  }
});
