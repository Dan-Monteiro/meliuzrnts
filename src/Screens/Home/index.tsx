
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image } from 'react-native';

const Home: React.FC = () => {

  const navigation = useNavigation();

  /*
  const handleNavigation = (screen: any) => {
    navigation.navigate(screen);
  }
  */
  
  return (
    <View style={styles.container}>
        <Image source={require('../../Assets/Images/desconto-exit.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default Home;

