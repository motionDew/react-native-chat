import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch( (error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            navigation.navigate('Oops')
        });
        navigation.navigate('Home');
    }

    const loginUserWithGoogle = () => {
        firebase.auth().signInWithPopup(provider).then( (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            navigation.navigate('Home');
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    return (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome, please log in.</Text>
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
          onPress={loginUser}
        >
            <View style={styles.button}>
                <Text>Login</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight 
          disabled={true}
          onPress={loginUserWithGoogle}
        >
            <View style={styles.button}>
                <Text>Login with Google</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={ () => navigation.navigate('Register')}>
            <View style={styles.button}>
                <Text>Register</Text>
            </View>
          </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
    );
}
 
export default Login;

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
        padding: 5,
        marginBottom:5,
        marginTop: 5,
        width:150,
        borderRadius: 4
    }
});
  