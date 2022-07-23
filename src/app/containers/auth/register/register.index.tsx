import React, { Component, ReactElement } from 'react';
import Ripple from 'react-native-material-ripple';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { AppStyles } from '../../../../../App.styles'
import { AuthStyles } from '../auth.styles'
import { Props, State } from './register.interfaces';
import { register } from '../../../api';

export class Register extends Component<Props, State> {

    public constructor(props: any) {
        super(props);

        this.state = {
            preferred_username: '',
            email: '',
            password: '',
            passwordConfirmed: ''
        };
    }

	public render(): ReactElement {
        return (
            <KeyboardAvoidingView  style={AppStyles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{height: '100%', paddingVertical: 100}}>
                        <View style={ AuthStyles.headingWrap }>
                            <Text style={ AuthStyles.heading }>Create {"\n"}Account</Text>  
                        </View> 
                        <View style={ AppStyles.formWrap }>
                            <TextInput 
                                textContentType='name' 
                                style= {AppStyles.textInput } 
                                placeholder={'Display Name'} 
                                onChangeText={(preferred_username: string): void => {
                                    this.setState({preferred_username})
                                }}
                            ></TextInput>
                            <TextInput 
                                textContentType='emailAddress' 
                                style= {AppStyles.textInput } 
                                placeholder={'Email'}
                                onChangeText={(email: string): void => {
                                    this.setState({email})
                                }}
                            ></TextInput>
                            <TextInput 
                                textContentType='password' 
                                style= {AppStyles.textInput } 
                                placeholder={'Password'} 
                                secureTextEntry={true}
                                onChangeText={(password: string): void => {
                                    this.setState({password})
                                }}
                            ></TextInput>
                            <TextInput 
                                textContentType='password' 
                                style= {AppStyles.textInput } 
                                placeholder={'Password'} 
                                secureTextEntry={true}
                                onChangeText={(passwordConfirmed: string): void => {
                                    this.setState({passwordConfirmed})
                                }}
                            ></TextInput>
                            
                            <Ripple 
                                style={ AppStyles.button }
                                onPress={async () => {
                                    const res = await register('conordoherty980@gmail.com', 'Conor1', 'Password12$')
                                    console.log(res);
                                    // console.log(this.state)
                                    // if (this.state.password == this.state.passwordConfirmed) {
                                    //     register(this.state.email, this.state.preferred_username, this.state.password);
                                    //     console.log("Match");
                                    // }
                                }}
                            >
                                <Text style={ AppStyles.buttonText }>Register</Text>
                            </Ripple>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}



// export { Register };