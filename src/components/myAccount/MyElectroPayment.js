import React,{useRef, useState, useEffect} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { Container, Header, Content, Icon, Card, CardItem, Left, Picker, Body , Input,Button, Title, Right} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';

const { width, height } = Dimensions.get("window");
export default function MyElectroPayment ({navigation}){

    return (
      <View style={{
        padding :30
      }}>
           
       <View>
         <Text style={{
           color:'#02496B',
           fontSize:16,
           fontFamily:'DinNextBold'
         }}>
           باقتي
         </Text>

       </View>
      
       <View style={{marginTop:15,}}>
         <Text style={{
           
           color:'#000000',
           fontSize:20,
           fontFamily:'DinNextLight'
         }}>
           انت غير مشترك في اي باقة
         </Text>
         
       </View>
      
      <TouchableOpacity>
       <View style={{
         flexDirection:'row',
         justifyContent:'flex-end',
         alignItems:'center',
         marginTop:15,
       }}>

        <Icon 
         type="MaterialIcons"
         name="arrow-back"
         style={{color:'#208ABD',}}
         />

         <Text style={{
           color:'#208ABD',
           fontSize:18,
           fontFamily:'DinNextBold'
         }}>
           اشتك الان 
         </Text>
        </View>
       </TouchableOpacity>



       <View>
         <Text style={{
           color:'#02496B',
           fontSize:16,
           fontFamily:'DinNextBold',
           marginTop:30,
           marginBottom:10
         }}>
           بطاقتي
         </Text>

       </View>


      <View style={{ flexDirection:'row', alignItems:'center', }}>

            <TouchableOpacity style={{ flex:1, flexDirection:'row', justifyContent:'center'}} onPress={()=>navigation.navigate("AddCard")}>
              <View style={{flex:1, flexDirection:'row', justifyContent:'center' }}>
                  <View>
                    <Icon name="plussquareo" type="AntDesign" style={{color:'#200E32', textAlign:'center'}}  />
                    <Text style={{color:'#200E32', fontFamily:'DinNextRegular', fontSize:11,textAlign:'center'}}> بطاقة جديدة</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ flex:3 , }}>
              <Image
                source={require('../assets/Card2.png')}
                 style={{width:width*.690625, height:height*.196054}}
                 resizeMode='contain'
              />
            </View>

      </View>

      </View>
      
      

        );

}
