import React,{useRef, useState, useEffect} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { Container, Header, Content, Icon, Card, CardItem, Left, Thumbnail, Body , Input,Picker} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';

const { width, height } = Dimensions.get("window");
export default function Code ({navigation}){
   
    
    

       
return (


<Container style={{
    backgroundColor:'#F4F6FB'
}}>
    <Content>
 <View style={{
     alignItems:'flex-start',
     paddingTop:30,
     paddingLeft:30
 }}>
     <TouchableOpacity onPress={()=>navigation.navigate("MyAccount")}>
        <View style={{
            height:40,
            width:40,
            justifyContent:'center',
            alignItems:'center'
        }}>
                <Text style={{
                  color:'#02496B',
                  fontFamily:'DinNextBold',
                  fontSize:16
                }}>
                  تخطي
                </Text>
        </View>
    </TouchableOpacity>    
 </View>

         
 <View style={{
     marginTop:26,
     paddingRight:50
 }}>
         <Text style={{
             fontSize:35,
             color:'#000000',
             fontFamily:'DinNextBold',
         }}>
           حسابي
         </Text>
         
 </View>
        


<View style={{
    flex:1,
    alignItems:'center',
    marginTop:height*.15043,
}}> 
      <ImageBackground
        source={require('../assets/Rectangle.png')}
        style={{
          width:90,
          height:90,
        }}
        resizeMode="contain"
      >
        <TouchableOpacity style={{
           width:34,
           height:34,
           position:'absolute',
           bottom:-5,
           right:-3,
            
        }}>
        <View style={{
          width:'100%',
          height:'100%',
          position:'absolute',
          borderRadius:17,
          borderColor:'#02496B',
           
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
        </TouchableOpacity>
    </ImageBackground>
</View>

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


</View>

<TouchableOpacity onPress={()=>navigation.navigate("MyAccount")}>
                <View style={{
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
