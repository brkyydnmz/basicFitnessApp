import React from 'react';
import {SafeAreaView, Text, StyleSheet, Image} from 'react-native';
import Button from '../components/Button';

function Welcome(props) {
  function goToMemberSign() {
    props.navigation.navigate('MemberSignScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./logo.jpg')} style={styles.image} />
      <Text style={styles.header}>Bullseye Athletics</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  image: {
    margin: 50,
    borderRadius: 200,
  },
});

export default Welcome;
