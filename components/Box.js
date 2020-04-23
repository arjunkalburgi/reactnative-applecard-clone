import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import theme from '../assets/style';

const styles = StyleSheet.create({
    container: {
        margin: theme.box.margin,
        borderRadius: theme.box.borderRadius,
        width: theme.box.width,
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