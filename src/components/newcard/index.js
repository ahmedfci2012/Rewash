import React,{useRef, useState, useEffect} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { Container, Content, Icon, Card, CardItem, Left, Picker, Body , Input,Button, Title, Right} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';
import Headers from './Headers';
import Footers from './Footers';

const { width, height } = Dimensions.get("window");
export default function AddCard ({navigation}){
   
    
return (

<Container style={{
    backgroundColor:'#F4F6FB'
}}>
  
    <Headers/>

  <Content>

<View style={{
  marginTop:20,
  padding:14
}}>

<Image 
 source={require('../assets/Card3.png')}
 style={{ height:200, width:'100%'}}
/>

</View>

<View style={{
  paddingTop :30,
  paddingRight:20,
  paddingLeft:20,
  flexDirection:'row',
  justifyContent:'space-around'

}}>

  <View style={{
    flex:1,
    marginRight:10
  }}>

  
  <FieldSet 
    label="Expires" 
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
      <View style={{flexDirection:'row'}}>
        <Input 
          placeholder="MM" 
          placeholderTextColor='#C4C4C4'
          keyboardType="decimal-pad"
          //value="محمد"
          style={{
            textAlign:'left', 
            fontFamily:'DinNextRegular'
          }} 
          maxLength={2}
        />
        <View
         style={{
           width:1,
           borderWidth:1,
           marginTop:10,
           marginBottom:10,
           borderColor:'#C4C4C480',
           justifyContent:'center',
           alignItems:'center'
         }}
        />
        <Input 
          placeholder="YY" 
          placeholderTextColor='#C4C4C4'
          keyboardType="decimal-pad"
          style={{
            textAlign:'left',
            fontFamily:'DinNextRegular'
          }}
          maxLength={2}
        />
      </View>
</FieldSet>
</View>



<View style={{
    flex:2
  }}>

  
  <FieldSet 
    label="Card Number" 
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
          placeholder="**** **** **** ****" 
          //value="محمد"
          keyboardType="decimal-pad"
          secureTextEntry={true}
          style={{
            textAlign:'left',
            fontFamily:'DinNextRegular'
          }}
          maxLength={16}
        />

</FieldSet>
</View>


</View>





<View style={{
  paddingTop :30,
  paddingRight:20,
  paddingLeft:20,
  flexDirection:'row',
  justifyContent:'space-around'

}}>

  <View style={{
    flex:1,
    marginRight:10
  }}>
  
  <FieldSet 
    label="CVV" 
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
          placeholder="1234" 
          placeholderTextColor='#C4C4C4'
          keyboardType="decimal-pad"
          style={{
            textAlign:'left',
            fontFamily:'DinNextRegular'
          }}
          maxLength={4}
        />
      
</FieldSet>
</View>



<View style={{
    flex:2
  }}>

   
  <FieldSet 
    label="Name" 
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
          placeholder="محمد الراشد" 
          //value="محمد"
          style={{
            textAlign:'right',
            fontFamily:'DinNextRegular'
          }}
        />

</FieldSet>
</View>


</View>
<TouchableOpacity onPress={()=>navigation.navigate("MyAccount")} >
                <View style={{
                        marginBottom:30,
                        height:48,
                        width:width*.80,
                        marginLeft:width*.10,
                        marginRight:width*.10,
                        marginTop:27,
                        flex:1,
                        flexDirection:'row',
                        borderRadius:10,
                        backgroundColor:'#02496B',
                        justifyContent:'flex-start', 
                        alignItems:'center',
                        shadowColor: "#F4F6FB",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 1.00,
                    }}>
                        <View style={{ flex:1 , justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:14,color:'#FFF',fontFamily:'DinNextBold', paddingBottom:2}}> تاكيد </Text>
                        </View>
                        </View>
                
           </TouchableOpacity> 


</Content>

<Footers/>  
</Container>
 
         
        
);
}

