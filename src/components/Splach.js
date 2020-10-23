import React,{useState, useEffect} from 'react';
import {  View } from 'react-native';
import { Image, StyleSheet } from 'react-native';

export default function Splach ({navigation}){
   
    const styles = StyleSheet.create({
      container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      },
      image: {
      height: 250,
      width: 250
      }
  });
  
  
  
  
  useEffect(() => {
    setTimeout(()=>{
      // Add your logic for the transition
      navigation.navigate("Login");
    }, 5000);
  
  });
  
  
  
  return (

    <View style={styles.container}>
            <Image style={styles.image} 
            source={{uri:'https://media2.giphy.com/media/MaaaYoyYTMjuIct0wD/giphy.webp' }} />
    </View>

  );

}