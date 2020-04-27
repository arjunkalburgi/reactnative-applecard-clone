import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import AccountDetailsCard from './../components/AccountDetailsCard';

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

const Card = createRestyleComponent<VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>>([createVariant({ themeKey: 'cardVariants' })], Box);

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        paddingVertical: theme.spacing.xl,
    },
    section: {
        paddingVertical: theme.spacing.s,
        marginVertical: theme.spacing.s
    },
    card: {
        // margin: theme.box.margin,
        margin: theme.spacing.s, 
        borderRadius: theme.box.borderRadius,
        width: theme.box.width,
        padding: theme.spacing.s,
        backgroundColor: theme.colors.mainBackground,

        // shadowColor: 'white',
        // shadowRadius: 8,
        // shadowOpacity: 0.5,
        // shadowOffset: {
        //     width: -9,
        //     height: -9
        // },
    },
    row: {
        // backgroundColor: theme.colors.mainBackground,
        // shadowColor: '#a3b1c6',
        // shadowRadius: 10,
        // shadowOpacity: 0.3,
        // shadowOffset: {
        //     width: 9,
        //     height: 9
        // },
        // justifyContent: 'center',
        // alignItems: 'center'
    }
});

const Home = () => {
    return (
        <Box style={styles.bg}>
            <Text variant="header"> Welcome </Text>
            <Box style={styles.section}>
                <Card style={styles.card}>
                    <Text variant="body">Card goes here</Text>
                </Card>
            </Box>
            <Grid style={styles.section}>
                <Col>
                    <Row>
                        <AccountDetailsCard style={styles.card}>
                            <Text variant="body">Something</Text>
                        </AccountDetailsCard>
                    </Row>
                    <Row>
                        <Card style={styles.card}>
                            <Text variant="body">Something</Text>
                            <Text variant="body">Something</Text>
                        </Card>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Card style={styles.card}>
                            <Text variant="body">Something</Text>
                        </Card>
                    </Row>
                </Col>
            </Grid>
            <Box style={styles.section}>
                <Card style={styles.card}>
                    <Text variant="body">More</Text>
                </Card>
                <Card style={styles.card}>
                    <Text variant="body">More</Text>
                </Card>
            </Box>
        </Box>
    );
};
export default Home;
