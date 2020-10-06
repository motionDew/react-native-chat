import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


const Home = ({navigation}) => {
    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <TouchableHighlight 
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
            <Text>Try again</Text>
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
  