import React,{useRef, useState, useEffect} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { Container, Header, Content, Icon, Card, CardItem, Left, Picker, Body , Input,Button, Title, Right} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';

const { width, height } = Dimensions.get("window");
export default function Headers (){

    return (
    
      <View style={{ flexDirection:'row',justifyContent:'space-around',paddingLeft:70, paddingRight:70 }}>
      <View style={{ justifyContent:'center'}}>
        <Image
          source={require('../assets/Category.png')}
          //style={{width:24, height:24}}
        />
      </View>
      
      <View style={{justifyContent:'center'}}>
        <Image
          source={require('../assets/rewash.png')}
          //style={{width:48, height:55}}
        />
      </View>
  
      <View style={{justifyContent:'center'}}>
        <Image
          source={require('../assets/Home.png')}
         // style={{width:24, height:24}}
        />
      </View>
  
    </View>
  

        );

}
