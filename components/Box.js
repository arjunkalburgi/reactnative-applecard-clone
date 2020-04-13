import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import variables from '../assets/style';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#eee',
        borderRadius: 5,
        height: 150
    },
});

const Box = () =>{

    return (
        <View style={variables.box}>
            <View style={styles.container}>
                <Text>Box</Text>
            </View>
        </View>
    );
}
export default Box;