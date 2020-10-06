import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableHighlight, TextInput } from 'react-native';

import * as firebase from 'firebase';

const Home = ({navigation}) => {
    
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if (user) {
                setUser(user);
            }
        });
        user && setUsername(user.displayName);
    });

    const updateProfile = () => {
        firebase.auth().currentUser.updateProfile({
            displayName: username
          }).then(function() {
            // Update successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    const signOut = () => {
        firebase.auth().signOut();
        navigation.navigate('Login');
    }
   
    return (
    <View style={styles.container}>
        {username ? <Text>{username.displayName}</Text> : <ActivityIndicator/>}
        <TextInput
            value={username}
            onChangeText={(username) => setUsername(username)}
            placeholder={'Username'}
            style={styles.input}
        />
        <TouchableHighlight 
          onPress={() => updateProfile()}
        >
            <View style={styles.button}>
                <Text>Set username</Text>
            </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
        <TouchableHighlight 
          style={styles.button}
          onPress={() => signOut()}
        >
            <Text>Sign out</Text>
        </TouchableHighlight>
    </View>
    );
    
}
 
export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
  