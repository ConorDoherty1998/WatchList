import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    imageWrap: {
        padding: 35,
        height: '65%',
        justifyContent: 'flex-end',
        alignContent: 'center'
    },
    image: {
        width: '100%', 
        height: undefined,
        aspectRatio: 100 / 90,
        justifyContent: 'center',
        alignContent: 'center'
    }
  });

export { Styles }