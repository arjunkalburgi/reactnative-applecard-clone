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
    },
    boxBody: {
        padding: theme.spacing.s,
    }
});

const PaymentDueCard = () => {
    return (
        <View style={theme.card}>
            <Text variant="cardTitle">Payment Due In</Text>
            <Text variant="cardMain">6 Days</Text>
            <Text variant="detail">Pay Button</Text>
            <View style={theme.shadow}></View>
        </View>
    );
};
export default PaymentDueCard;
