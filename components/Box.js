import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import variables from '../assets/style';

const styles = StyleSheet.create({
    container: {
        margin: variables.box.margin,
        borderRadius: variables.box.borderRadius,
        width: variables.box.width,
        padding: 20,
        backgroundColor: '#eee',
    },
});

const Box = () =>{
    return (
        <View style={styles.container}>
            <Text>Box</Text>
        </View>
    );
}
export default Box;