import React,{useRef, useState, useEffect} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { Container, Content, Icon, Card, CardItem, Left, Picker, Body , Input,Button, Title, Right} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';
import Headers from './Headers';
import Profile from './Profile';
import MyInformation from './MyInformation';
import MyElectroPayment from './MyElectroPayment';

import Footers from './Footers';

const { width, height } = Dimensions.get("window");
export default function MyAccount (){
   
    
const [ myInfo, setMyInfo ]= useState(true); 
const [ mySeting, setMySeting ]= useState(false);
const [ myPayment, setMyPayment ]= useState(false);

       
return (

<Container style={{
    backgroundColor:'#F4F6FB'
}}>
  
    <Headers/>

  <Content>
    <Profile />



<View style={{
  marginTop:25,
  flexDirection:'row',
  marginLeft:30,
  marginRight:30,
  justifyContent:'space-around',
  alignItems:'center',
  backgroundColor:'#edeff4',
  borderRadius:50,
  height:34
}}>

{mySeting?
  <TouchableOpacity onPress={()=>(setMySeting(true),setMyInfo(false),setMyPayment(false)) }>
  <View style={{ backgroundColor:'#FFF', width:97,height:28, alignItems:'center',justifyContent:'center', borderRadius:50}}>
    <Text style={{fontSize:14, color:'#02496B', fontFamily:'DinNextBold', marginBottom:4}}>
      اعدادات
    </Text>
  </View>
</TouchableOpacity>
:
<TouchableOpacity onPress={()=>(setMySeting(true),setMyInfo(false),setMyPayment(false)) }>
  <View>
    <Text style={{
      fontSize:14, fontFamily:'DinNextRegular', marginBottom:4
    }}>
      اعدادات
    </Text>
  </View>
</TouchableOpacity>
}


{myInfo?
  <TouchableOpacity onPress={()=>(setMySeting(false),setMyInfo(true),setMyPayment(false)) }>
<View style={{ backgroundColor:'#FFF', width:97,height:28, alignItems:'center',justifyContent:'center', borderRadius:50}}>
  <Text style={{fontSize:14, color:'#02496B', fontFamily:'DinNextBold', marginBottom:4}}>
    بياناتي
  </Text>
</View>
</TouchableOpacity>
:
<TouchableOpacity onPress={()=>(setMyInfo(true),setMySeting(false),setMyPayment(false)) }>
  <View>
    <Text style={{fontSize:14,fontFamily:'DinNextRegular', marginBottom:4}}>
    بياناتي
    </Text>
  </View>
</TouchableOpacity>
}


{myPayment?
<TouchableOpacity onPress={()=>(setMyInfo(false),setMySeting(false),setMyPayment(true)) }>
<View style={{ backgroundColor:'#FFF', width:97,height:28, alignItems:'center',justifyContent:'center', borderRadius:50}}>
  <Text style={{fontSize:14, color:'#02496B', fontFamily:'DinNextBold', marginBottom:4}}>
    الباقة والدفع
  </Text>
</View>
</TouchableOpacity>
:
<TouchableOpacity onPress={()=>(setMyInfo(false),setMySeting(false),setMyPayment(true)) }>
  <View>
    <Text style={{fontSize:14,fontFamily:'DinNextRegular', marginBottom:4}}>
    وسائل الدفع
    </Text>
  </View>
</TouchableOpacity>
}


</View>



{myInfo? <MyInformation/>:null}
{myPayment? <MyElectroPayment/>:null}


</Content>

<Footers/>  
</Container>
 
         
        
);
}

/**

<View style={{
                height:80,
                width:80,
                marginLeft:width*.38,
                borderRadius:40,
                backgroundColor:'#E5E5E5',
                justifyContent:'center',
                marginBottom:-40,
                zIndex:5
                }}>

            <View style={{
                height:40,
                width:40,
                borderRadius:20,
                backgroundColor:'red',
                alignSelf:'center',
                 
                }}>
                    
           </View>

           </View>
           <View style={{
                height:80,
                backgroundColor:'red'
                }}>
           </View>
 
 */
