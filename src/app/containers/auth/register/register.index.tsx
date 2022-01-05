import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type RegisterProps = {

}

const Register: React.FC<RegisterProps> = () => {
    return (
        <View 
        style={styles.container}
        >
            <Text style={{color: 'white'}}>Register Page</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 40,
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

export { Register };