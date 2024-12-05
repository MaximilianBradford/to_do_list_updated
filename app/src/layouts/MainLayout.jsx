import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View>
      <Text>Created By Max Bradford</Text>
    </View>
  )
}

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;