import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
    container: {
        fontSize: 40,
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center'
    },
    formWrap: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center'
    },
    textInput: {
        height: 60,
        fontSize: 16,
        marginTop: 20,
        paddingLeft: 20,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    button: {
        marginTop: 20,
        height: 60,
        padding: 10,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D50000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        textAlign: 'center',
        width: 200,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});

export { AppStyles }