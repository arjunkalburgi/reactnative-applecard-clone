import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default function App() {
  return (
    <ScrollView>
      <View>
        <Text>Card goes here</Text>
      </View>
      <Grid>
        <Col>
          <Row><Text>Open up App.tsx to start working on your app!</Text></Row>
          <Row><Text>Open up App.tsx to start working on your app!</Text></Row>
        </Col>
        <Col>
          <Row><Text>Open up App.tsx to start working on your app!</Text></Row>
        </Col>
      </Grid>
      <View>
        <Text>Card goes here</Text>
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
