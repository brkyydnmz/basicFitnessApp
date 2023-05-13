import React, {useState} from 'react';
import {SafeAreaView, Text, Alert, StyleSheet} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userWeight, setUserWeight] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHometown, setUserHometown] = useState(null);

  function handleSubmit() {
    if (
      !userName ||
      !userSurname ||
      !userAge ||
      !userWeight ||
      !userMail ||
      !userHometown
    ) {
      Alert.alert('Bullseye Athletics', 'Bilgiler boş bırakılamaz!');
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userWeight,
      userMail,
      userHometown,
    };

    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView>
      <Text style={styles.header}>Üye Kayıt Formu</Text>
      <Input
        label="Ad"
        placeholder="Üyenin ismini giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Soyad"
        placeholder="Üyenin soyismini giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Yaş"
        placeholder="Üyenin yaşını giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Kilo"
        placeholder="Üyenin kilosunu giriniz..."
        onChangeText={setUserWeight}
      />
      <Input
        label="E-posta"
        placeholder="Üyenin e-posta adresini giriniz.."
        onChangeText={setUserMail}
      />
      <Input
        label="Adres"
        placeholder="Üyenin adresini giriniz.."
        onChangeText={setUserHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
});

export default MemberSign;
