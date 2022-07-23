import React from 'react';
import Ripple from 'react-native-material-ripple';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { AppStyles } from '../../../../../App.styles'
import { AuthStyles } from '../auth.styles'

type LoginProps = {
    navigation: any
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
    return (
        <KeyboardAvoidingView  style={AppStyles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={{height: '100%', paddingVertical: 100}}>
                    <View style={ AuthStyles.headingWrap }>
                        <Text style={ AuthStyles.heading }>Welcome {"\n"}Back</Text>  
                    </View> 
                    <View style={ AppStyles.formWrap }>
                        <TextInput textContentType='emailAddress' style= {AppStyles.textInput } placeholder={'Email'}></TextInput>
                        <TextInput textContentType='password' style= {AppStyles.textInput } placeholder={'Password'} secureTextEntry={true}></TextInput>
                        <Ripple style={ AppStyles.button }>
                            <Text style={ AppStyles.buttonText }>Login</Text>
                        </Ripple>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export { Login };