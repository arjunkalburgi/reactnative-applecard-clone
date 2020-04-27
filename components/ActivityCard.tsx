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

const ActivityCard = () => {
    return (
        <View style={theme.card}>
            <Text variant="cardTitle">Weekly Activity</Text>
            <View style={theme.shadow}></View>
        </View>
    );
};
export default ActivityCard;
