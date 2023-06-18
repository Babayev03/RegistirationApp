import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';
import {AppDispatch} from '../../../redux/store';
import {useDispatch} from 'react-redux';
import {setCode, setEmail} from '../../../redux/login/LoginSlice';

const RegisterScreen = ({navigation}: any) => {
  const [username, setUsername] = useState<any>('');
  const [useremail, setUseremail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [error, setError] = useState<any>();

  const dispatch = useDispatch<AppDispatch>();

  const showAlert = () => {
    if (!username || !useremail || !password) {
      setError('Please fill in all fields');
      return;
    }
    axios.post('http://192.168.0.112:3000/registiration/register', {
        username: username,
        email: useremail,
        password: password,
      })
      .then(async response => {
        if (response.data?.sucess == false) {
          setError('Invalid email or password.');
          return;
        }
        dispatch(setCode(response.data.verificationCode));
        dispatch(setEmail(useremail));
        navigation.navigate('Confirm');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{
            uri: 'https://img.icons8.com/ios-glyphs/512/user-male-circle.png',
          }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Username"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          placeholderTextColor={'gray'}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{
            uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png',
          }}
        />
        <TextInput
          style={styles.inputs}
          placeholderTextColor={'gray'}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={setUseremail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://img.icons8.com/ios-glyphs/512/key.png'}}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={'gray'}
          underlineColorAndroid="transparent"
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.signupButton]}
        onPress={() => showAlert()}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.error}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:"500"}}>Already have an account? </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 5,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    color: '#000',
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: '#FF4DFF',
  },
  signUpText: {
    color: 'white',
  },
  error: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 20,
  },
});
