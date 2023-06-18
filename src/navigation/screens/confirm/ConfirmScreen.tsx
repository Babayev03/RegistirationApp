import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {RootState} from '../../../redux/store';
import {useSelector} from 'react-redux';
import axios from 'axios';

const TwoFactorAuthView = ({navigation}: any) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState<any>();
  const code = useSelector((state: RootState) => state.login.code);
  const email = useSelector((state: RootState) => state.login.email);

  const onSubmit = () => {
    if (!verificationCode) {
      setError('Please fill in all fields');
      return;
    } else if (verificationCode != code) {
      setError('Invalid  code');
      return;
    } else {
      axios
        .post('http://192.168.0.112:3000/registiration/confirm-email', {
          email: email,
          verificationCode: verificationCode,
        })
        .then(async response => {
          navigation.navigate('Login');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
          }}
        />
      </View>
      <Text style={styles.title}>Two-Factor Authentication</Text>
      <Text style={styles.description}>
        Enter the code sent to your email to complete the login process.
      </Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Enter Code"
          keyboardType="number-pad"
          onChangeText={setVerificationCode}
          placeholderTextColor={'gray'}
          maxLength={6}
        />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        {error && <Text style={{color: 'red'}}>{error}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00CED1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  logoContainer: {
    overflow: 'hidden',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  card: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 5,
    shadowColor: '#00CED1',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  button: {
    backgroundColor: '#00CED1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TwoFactorAuthView;
