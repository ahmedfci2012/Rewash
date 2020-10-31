import React,{useRef, useState, useEffect} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { Container, Header, Content, Icon, Card, CardItem, Left, Picker, Body , Input,Button, Title, Right} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';

const { width, height } = Dimensions.get("window");
export default function Headers (){

    return (
    
<Header transparent style={{ borderBottomColor:'#E1E8E8', borderBottomWidth:1, backgroundColor:'#F4F6FB'}}>
          <Left>
            <Button transparent style={{ borderWidth:1, borderRadius:20, borderColor:'#E1E8E8',}} onPress={()=>alert('الاشعارات')}>
              <Icon name='notifications-none' type="MaterialIcons" style={{ color:'#000'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{ color:'#000', fontSize:18, justifyContent:'center', fontFamily:"DinNextBold"}}>بطاقة جديدة</Title>
          </Body>
          <Right>
            <Button transparent>
              <Image source={require('../assets/Rectangle.png')}
                style={{ width:31, height:31}}
              />
            </Button>
          </Right>
        </Header>
  

        );

}
