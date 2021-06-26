import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ToastAndroid} from 'react-native';
import db from '../config'

export default class WriteStory extends React.Component{
    //To add
    //db.collection("*collection name*"").add({*what u want to store*})
    submitStory = ()=>{
        db.collection("stories").add({title:this.state.title,author:this.state.author,content:this.state.content})
        alert('Your story has been submitted! Hope you included bob')
        // ToastAndroid.show("Story has been submitted! Hope you included B O B", ToastAndroid.SHORT);
    }

    constructor(){
        super()
        this.state = {
            title:'',
            author:'',
            content:''
        }
    }

    render(){
        return(
            <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style = {{justifyContent:'center', alignItems:'center', backgroundColor:'pink'}}>
                    <Text style = {styles.text}>Write a story</Text>
                    <TextInput placeholder = 'Title' value = {this.state.title} onChangeText = {(val)=>{
                        this.setState({title:val})
                    }} style = {styles.input}/>
                    <TextInput placeholder = 'Author' value = {this.state.author} onChangeText = {(val)=>{
                        this.setState({author:val})
                    }} style = {styles.input}/>
                    <TextInput multiline placeholder = 'Content' value = {this.state.content} onChangeText = {(val)=>{
                        this.setState({content:val})
                    }} style = {styles.input2}/>
                    
                    <TouchableOpacity style = {styles.button}><Text style = {{textAlign:'center'}} onPress = {this.submitStory}>Submit Story</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    text: {fontSize:75, marginTop:20, textAlign:'center', backgroundColor:'pink',color:'blue'},
    input:{borderWidth:1, width:500,height:50, textAlign:'center', marginTop:50},
    input2:{borderWidth:1, width:500,height:300, textAlign:'center', marginTop:50},
    button:{borderWidth:1,borderRadius:250, borderColor:'black', width:250, height:250, justifyContent:'center', alignItems:'center', marginTop:50, backgroundColor:'red'}
}) 