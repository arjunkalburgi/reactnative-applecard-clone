import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import theme from './assets/style';
import { ThemeProvider } from '@shopify/restyle';

import Home from './pages/home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView style={styles.app}>
        <Home />
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
    // backgroundColor: theme.colors.mainBackground,
    margin: theme.spacing.m, 
  },
  longBox: {
    height: theme.longBox.height,
  }
});
