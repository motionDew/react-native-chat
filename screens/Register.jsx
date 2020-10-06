import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';

import * as firebase from 'firebase';

const Register = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = () => {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then( () => navigation.navigate('Home'))
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    return (
    <View style={styles.container}>
        <Text style={styles.header}>New here? Create an account</Text>
        <TextInput
            value={email}
            onChangeText={(email) => setEmail(email)}
            placeholder={'Email'}
            style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableHighlight 
          style={styles.button}
          disabled={true}
          onPress={registerUser}
        >
            <Text>Register</Text>
        </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
    );
}
 
export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header : {
        fontSize: 22,
        marginBottom: 50
    },  
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 4
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginBottom:5,
        marginTop: 5,
        width:150,
        borderRadius: 4
    }
  });
  