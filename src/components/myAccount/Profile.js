import React,{useRef, useState, useEffect} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { Container, Header, Content, Icon, Card, CardItem, Left, Picker, Body , Input,Button, Title, Right} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';

const { width, height } = Dimensions.get("window");
export default function Headers (){

    return (
    
<View style={{
    flex:1,
    alignItems:'center',
    marginTop:25,
}}> 
      <ImageBackground
        source={require('../assets/Rectangle.png')}
        style={{
          width:90,
          height:90,
        }}
        resizeMode="contain"
      >
        <View style={{
          width:34,
          height:34,
          borderRadius:17,
          borderColor:'#02496B',
          position:'absolute',
          bottom:-5,
          right:-3,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'#02496B',

        }}>
          <Icon
          name="camera-alt"
          type="MaterialIcons"
          style={{color:'#F4F6FB', 
              fontSize:20
            }}
          />
        </View>
    </ImageBackground>
</View>
  

        );

}
