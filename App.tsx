import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import variables from './assets/style';

import { Col, Row, Grid } from "react-native-easy-grid";
import Box from './components/Box';

export default function App() {
  return (
    <ScrollView style={variables.app}>
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
            <Box />
          </Row>
        </Col>
      </Grid>
      <View>
        <Text>More stuff goes here</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
