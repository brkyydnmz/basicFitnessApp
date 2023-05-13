import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../components/Button';

function MemberResult({navigation, route}) {
  const {user} = route.params;
  function goToWelcome() {
    navigation.navigate('WelcomeScreen');
  }

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.message}>Kayıt Tamamlandı!</Text>
      <SafeAreaView style={styles.resultTable}>
        <SafeAreaView style={styles.rows}>
          <Text style={styles.label}>Üye Adı: </Text>
          <Text style={styles.innerText}>{user.userName}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.rows}>
          <Text style={styles.label}>Üye Soyadı: </Text>
          <Text style={styles.innerText}>{user.userSurname}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.rows}>
          <Text style={styles.label}>Üye Yaşı: </Text>
          <Text style={styles.innerText}>{user.userAge}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.rows}>
          <Text style={styles.label}>Üye Kilosu: </Text>
          <Text style={styles.innerText}>{user.userWeight}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.rows}>
          <Text style={styles.label}>Üye Maili: </Text>
          <Text style={styles.innerText}>{user.userMail}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.rows}>
          <Text style={styles.label}>Üye Adresi: </Text>
          <Text style={styles.innerText}>{user.userHometown}</Text>
        </SafeAreaView>
      </SafeAreaView>
      <Button text="Yeni Kayıt" onPress={goToWelcome} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    textAlign: 'left',
  },
  resultTable: {
    width: 400,
    height: 350,
    marginTop: 80,
    borderColor: '#c6003f',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    overflow: 'scroll',
  },
  rows: {
    flexDirection: 'row',
    margin: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  innerText: {
    fontSize: 18,
    maxWidth: 300,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
});
export default MemberResult;
