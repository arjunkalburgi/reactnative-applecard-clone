import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import theme from './assets/style';
import { ThemeProvider } from '@shopify/restyle';

import { Col, Row, Grid } from "react-native-easy-grid";
import Box from './components/Box';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView style={styles.app}>
        <View>
          <Text>Card goes here</Text>
        </View>
        <Grid>
          <Col>
            <Row>
              <Box />
            </Row>
            <Row>
              <Box />
            </Row>
          </Col>
          <Col>
            <Row>
              <Box style={styles.longBox} />
            </Row>
          </Col>
        </Grid>
        <View>
          <Text>More stuff goes here</Text>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  app: {
    marginLeft: theme.app.marginLeft,
    marginRight: theme.app.marginRight,
  },
  longBox: {
    height: theme.longBox.height,
  }
});
