import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {AppDispatch} from '../../../redux/store';
import {useDispatch} from 'react-redux';
import { setCode } from '../../../redux/login/LoginSlice';
import { setEmail } from '../../../redux/login/LoginSlice';

const ForgotScreen = ({navigation}: any) => {
  const [useremail, setUseremail] = useState<any>('');
  const [error, setError] = useState<any>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = () => {
    if (!useremail) {
      setError('Please fill in all fields');
      return;
    }
    axios.post('http://192.168.0.112:3000/registiration/forgot-password', {
        email: useremail,
      })
      .then(async response => {
        if (response.data?.sucess == false) {
          setError('Invalid email or password.');
          return;
        }
        dispatch(setCode(response.data.verificationCode));
        dispatch(setEmail(useremail));
        navigation.navigate('ConfirmForUpdate');
        setError('');
      })
      .catch(error => {
        console.log(error);
        setError('Invalid email.');
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://www.bootdey.com/image/280x280/20B2AA/20B2AA'}}
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
          }}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Find Account</Text>
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={useremail}
              onChangeText={setUseremail}
              placeholder="Email"
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
            <Text style={styles.buttonText}>Find Account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {error ? (
          <Text style={{textAlign: 'center', fontSize: 20, color: 'red'}}>
            {error}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default ForgotScreen;

const styles: any = {
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 120,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'contain',
  },

  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    marginTop: 20,
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#333',
    paddingLeft: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
};
