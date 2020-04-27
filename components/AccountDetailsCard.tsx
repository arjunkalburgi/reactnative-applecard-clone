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
    boxBody: {
        padding: theme.spacing.s,
    }
});

const AccountDetailsCard = () => {
    return (
        <View style={theme.card}>
            <Text variant="cardTitle">Card Balance</Text>
            <Text variant="cardMain">$1,682.55</Text>
            <Text variant="detail">$8,317.45 Available</Text>
            <View style={theme.shadow}></View>
        </View>
    );
};
export default AccountDetailsCard;
