import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import axios from 'axios';

const UpdatePassword = ({navigation}:any) => {
  const [newPassword, setNewPassword] = useState<any>();
  const [repeatPassword, setRepeatPassword] = useState<any>();
  const [error, setError] = useState<any>();

  const email = useSelector((state: RootState) => state.login.email);  

  const handleSubmit = () => {
    if (!newPassword || !repeatPassword) {
      setError('Please fill in all fields');
      return;
    } else if (newPassword != repeatPassword) {
      setError('Passwords do not match');
      return;
    } else {
      axios.post("http://192.168.0.112:3000/registiration/update-password",{
        email: email,
        password: newPassword
      })
      .then((res)=>{
        if (res.data?.sucess == false) {
          setError('password.');
          return;
        }
        setError('');
        navigation.navigate('Login');
      }
      )
      .catch((err)=>{
        console.log(err);
        setError('Invalid Password');
      }
      )
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://www.bootdey.com/img/Content/avatar/avatar8.png',
          }}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>New password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a new password"
          placeholderTextColor={'gray'}
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Repeat new password</Text>
        <TextInput
          style={styles.input}
          placeholder="Repeat your new password"
          value={repeatPassword}
          placeholderTextColor={'gray'}
          onChangeText={setRepeatPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.buttonText}>Change password</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color: 'red',fontSize:20,marginTop:10}}>{error}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    color: '#1E90FF',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    color: '#000',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  avatarContainer: {
    marginTop: 10,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default UpdatePassword;
