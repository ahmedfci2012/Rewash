import React,{useRef, useState, useEffect} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { Container, Header, Content, Icon, Card, CardItem, Left, Picker, Body , Input,Button, Title, Right} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';

const { width, height } = Dimensions.get("window");
export default function MyInformation (){

    return (
      <View style={{
        padding :30
      }}>
           
      <FieldSet 
          label="الاسم الاول" 
          labelPosition="end" 
          labelBackgroundColor="#F4F6FB"  
          labelColor="#999CAD"
          borderColor="#E8E6EA"
          labelFontSize={14}
          labelStyle={{
            marginBottom:8,
           fontFamily:'DinNextRegular'
         }}
          >
              <Input 
                placeholder="محمد" 
                //value="محمد"
                style={{
                  textAlign:'right',
                  fontFamily:'DinNextRegular'
                }}
              />
      </FieldSet>
      
      <FieldSet 
          label="الاسم الاخير" 
          labelPosition="end" 
          labelBackgroundColor="#F4F6FB"  
          labelColor="#999CAD"
          borderColor="#E8E6EA"
          labelFontSize={14}
          labelStyle={{
            marginBottom:8,
           fontFamily:'DinNextRegular'
         }}
          >
              <Input 
                placeholder="الراشد" 
                //value="محمد"
                style={{
                  textAlign:'right',
                  fontFamily:'DinNextRegular'
                }}
              />
      </FieldSet>
      
      
      <FieldSet 
          label="البريد الاليكتروني" 
          labelPosition="end" 
          labelBackgroundColor="#F4F6FB"  
          labelColor="#999CAD"
          borderColor="#E8E6EA"
          labelFontSize={14}
          labelStyle={{
            marginBottom:8,
           fontFamily:'DinNextRegular'
         }}
          >
              <Input 
                placeholder="mohammed@takwen.sa" 
                //value="محمد"
                style={{
                  textAlign:'right',
                  fontFamily:'DinNextRegular'
                }}
              />
      </FieldSet>
      
      
          
       <View 
              style={{
                backgroundColor:'#F4F6FB',
                borderWidth:1, 
                borderColor:'#E8E6EA',
                borderTopEndRadius:10,
                borderTopLeftRadius:10,
                borderBottomWidth:0,
                paddingBottom:4,
                marginTop:10
                
              }}>
                  <View style={{ flexDirection:'row',  }}>
                          <View style={{  marginLeft:10, height:30}}>
                             <Icon name="keyboard-arrow-down" type="MaterialIcons"  style={{
                                 marginTop:10 , color:'#02496B'
                           }}/>
                         </View> 
                          <View style={{ flex:1 ,   justifyContent:'flex-start', marginRight:15, paddingTop:4}}>
                              <Text style={{ fontSize:12, fontFamily:'DinNextRegular'}}>الدولة/المنطقة</Text>
                          </View> 
      
                          
                  </View>
      
           <Picker
                    iosHeader="اختيار الدولة "
                   // iosIcon={<Icon name="arrow-down" />}
                    style={{ 
                      height:25,
                      marginRight:-40,
                      marginTop:-10,
                   }}
                    selectedValue={""}
                    onValueChange={(value)=>this.onValueChange(value)}
                  >
                      
                    <Picker.Item label="السعودية(+966)" value="id0"/>
                    <Picker.Item label="السعودية " value="id0" />
                    <Picker.Item label=" السعودية " value="id0" />
                    
                   
      
                  </Picker>
                  </View>
      
      
      <View style={{
              marginTop:-1,
              borderWidth:1,
              borderColor:'#E8E6EA',
              borderBottomEndRadius:10,
              borderBottomLeftRadius:10
      
      }}>
         
          <Input
                  placeholder=" رقم التليفون"
                  value="0501234567"
                  // onChangeText={this.changeField("productName")}
                  placeholderTextColor="#999999"
                  autoCorrect={true}
                  style={{
                    //borderWidth: 1,
                    //borderColor: "#0000003D",
                    textAlign: 'right',
                    height: 44,
                    //color: "#999999",
                    //fontSize: 18,
                    paddingRight: 16,
                    //fontWeight:'400',
                    fontFamily:'DinNextRegular'
                  }}
                  maxLength={15}
                />
      
        </View>
      
      
      
      
      </View>
      
      

        );

}
