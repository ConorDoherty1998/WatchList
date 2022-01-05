import React from 'react';
import Ripple from 'react-native-material-ripple';
import { Text, TextInput, View } from 'react-native';
import { AppStyles } from '../../../../../App.styles'
import { Styles } from './login.styles'

type LoginProps = {

}

const Login: React.FC<LoginProps> = () => {
    return (
        <View style={AppStyles.container}>
            <View style={ Styles.headingWrap }>
                <Text style={ Styles.heading }>Welcome {"\n"}Back</Text>  
            </View> 
            <View style={ AppStyles.formWrap }>
                <TextInput style= {AppStyles.textInput } placeholder={'Email'}></TextInput>
                <TextInput style= {AppStyles.textInput } placeholder={'Password'} secureTextEntry={true}></TextInput>
                <Ripple style={ AppStyles.button }>
                    <Text style={ AppStyles.buttonText }>Login</Text>
                </Ripple>
            </View>
        </View>
    )
}

export { Login };