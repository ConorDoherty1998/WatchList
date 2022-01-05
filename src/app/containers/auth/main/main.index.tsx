import React from 'react';
import Ripple from 'react-native-material-ripple';
import { Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppStyles } from '../../../../../App.styles'
import { Styles }  from './main.styles'

type AuthProps = {
    navigation: any
}

const Auth: React.FC<AuthProps> = ({ navigation }) => {
    return (
        <View style={ AppStyles.container }>
            <StatusBar style="light" />
            <View style={ Styles.imageWrap }>
                <Image
                    style={ Styles.image } 
                    source={ require('../../../../assets/Logo_Main_Dark.png') }  
                />
            </View>
            <View style={ AppStyles.formWrap }>
                <Ripple
                    rippleDuration={1000}
                    style={ AppStyles.button }
                    onPress={ () => navigation.navigate('Login') }>
                    <Text style={ AppStyles.buttonText }>Login</Text>
                </Ripple>
                <Ripple
                    style={ AppStyles.button }
                    onPress={ () => navigation.navigate('Register') }>
                    <Text style={ AppStyles.buttonText }>Register</Text>
                </Ripple>
            </View>
        </View>
    )
}

export { Auth };