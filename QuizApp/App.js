import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from "socket.io-client";

export default function App() {
  const [message, setMessage] = useState('initial message');

  useEffect(()=>{
    this.socket = io("http://localhost:3000");
    this.socket.on("message", msg => {
        this.setState({ message: msg + message  });
    })
  }, [])
  return (
    <View style={styles.container}>
      <Text>{chatMessages}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
