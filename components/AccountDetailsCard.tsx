import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
    createBox,
    createText,
    createRestyleComponent,
    createVariant,
    VariantProps,
} from '@shopify/restyle';

// See the "Defining Your Theme" readme section below
import theme, { Theme } from '../assets/style';

const Box = createBox<Theme>();
const Text = createText<Theme>();

const styles = StyleSheet.create({
    card: {
        // margin: theme.box.margin,
        margin: theme.spacing.s,
        borderRadius: theme.box.borderRadius,
        width: theme.box.width,
        padding: theme.spacing.s, //`${} ${theme.spacing.s} 0 0`,
        backgroundColor: theme.colors.cardPrimaryBackground,

        // shadowColor: 'white',
        // shadowRadius: 8,
        // shadowOpacity: 0.5,
        // shadowOffset: {
        //     width: -9,
        //     height: -9
        // },
    },
    shadow: {
        height: '100%',
        margin: 0,
        padding: 0,
        zIndex: -1,
        width: '100%',
        position: 'absolute',
        borderRadius: theme.box.borderRadius,

        // backgroundColor: theme.colors.mainBackground,
        // shadowColor: '#a3b1c6',
        // shadowRadius: 10,
        // shadowOpacity: 0.3,
        // shadowOffset: {
        //     width: 9,
        //     height: 9
        // },
    }, 
    boxBody: {
        padding: theme.spacing.s,
    }
});

const AccountDetailsCard = () => {
    return (
        <View style={styles.card}>
            <Text variant="cardTitle">Card Balance</Text>
            <Text variant="cardMain">$1,682.55</Text>
            <Text variant="detail">$8,317.45 Available</Text>
            <View style={styles.shadow}></View>
        </View>
    );
};
export default AccountDetailsCard;
