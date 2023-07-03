import React, { useState } from 'react'
import { View, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth'

export default function Login({ setScreen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async () => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response) {
        console.log(response);
        alert("Login Successful!");
        setScreen("UsersList")
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <ImageBackground source={require("../assets/bg.png")} style={styles.bgImg}>
      <Icon name="person-circle-outline" size={100} color="white" />
      <Text style={styles.title}>Log in to your account</Text>
      <View style={styles.inputs}>
        <TextInput placeholder="Phone, email or username" placeholderTextColor="white" style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
        <TextInput placeholder="Password" placeholderTextColor="white" secureTextEntry={true} style={styles.input} value={password} onChangeText={(text) => setPassword(text)} />
      </View>
      <TouchableOpacity onPress={() => loginUser()}>
        <Text style={styles.login}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.create} onPress={() => setScreen("Register")}>Create a new account</Text>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 30,
    color: "white"
  },
  input: {
    elevation: 1,
    borderRadius: 100,
    padding: 10,
    margin: 10,
    width: 350,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "skyblue",
    color: "white"
  },
  login: {
    elevation: 1,
    borderRadius: 100,
    padding: 10,
    margin: 10,
    width: 350,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "white",
    color: "skyblue"
  },
  create: {
    fontSize: 20,
    color: "white",
    margin: 10
  },
  inputs: {
    margin: 30
  }
})