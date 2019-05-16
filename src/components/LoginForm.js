import  React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Image,
    CheckBox,
 }
 from 'react-native';

 export default class LoginForm extends Component {
     render() {
        const {
            container, 
            logoStyle, 
            imageStyle,
            inputUsernameStyle,
            inputPasswordStyle,
            labelStyle,
            
        } = styles
         return(
            <View style={container}>
                <View style={logoStyle}>
                    <Image source={require('../images/logo.png')} 
                           style={imageStyle} />
                </View>
                <View>
                    <Text style={labelStyle}>Username</Text>
                    <TextInput 
                        style={inputUsernameStyle}
                    />
                </View>
                <View>
                    <Text style={labelStyle} >Password</Text>
                    <TextInput 
                        secureTextEntry={true} 
                        style={inputPasswordStyle}  
                    />
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <CheckBox style={{marginTop: 10,}}/>
                        <Text style={{marginTop: 15,}}> Remember Me</Text>
                    </View>
                    <View>
                    <Button 
                        title={'Log in'} 
                     />
                    </View>
                </View>
                <View style={{marginTop: 30,marginBottom: 20,}}>
                    <Text>Register | Lost your password?</Text>
                </View>
                <View>
                    <Text> Go back to Your Website</Text>
                </View>
            </View>
         )
     }
 }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        margin: 20,
    },
    logoStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    imageStyle: {
        width: 100,
        height: 100,
        
    },
    inputUsernameStyle: {
        borderWidth:1,
        color: '#000',
        padding: 12,
    },
    inputPasswordStyle: {
        borderWidth:1,
        color: '#000',
        padding: 12,
        marginBottom: 25,
    },
    labelStyle: {
        fontSize: 19,
        fontWeight: 'bold',
        padding: 10,
    },
   
});