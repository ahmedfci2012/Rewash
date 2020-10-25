import React,{useState} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Icon, Card, CardItem, Left, Thumbnail, Body , Input,Picker} from 'native-base';
import { Image, StyleSheet } from 'react-native';


const { width, height } = Dimensions.get("window");
export default function Login ({navigation}){
   
   
console.log(height);
return (


<Container style={{
    backgroundColor:'#F4F6FB'
}}>
    <Content>
 <View style={{
     alignItems:'center',
     paddingTop:40,
     height:163,
      
 }}>
     <Image 
     source={require('../assets/logo.png')}
     
     />
 </View>

 <View style={{
     alignItems:'flex-end',
     paddingRight:40
  }}>
     <Text style={{ fontFamily:'DinNextMedium', fontSize:24, color:'#000', }}>
        مرحباً
     </Text>
 </View>

 <View style={{
     alignItems:'flex-end',
     paddingRight:40
     
  }}>
     <Text style={{ fontFamily:'DinNextLight', fontSize:24, color:'#000', }}>
       انت علي بعد خطوة واحدة فقط
     </Text>
 </View>



<View style={{
    alignItems:'center',
    marginTop:12
}}>
    
 <View 
        style={{
          backgroundColor:'#F4F6FB',
          borderWidth:1, 
          borderColor:'#E8E6EA',
          borderTopEndRadius:10,
          borderTopLeftRadius:10,
          borderBottomWidth:0,
          paddingBottom:4,
          width:width*.80
        }}>
            <View style={{ flexDirection:'row',  }}>
                    <View style={{   height:30}}>
                       <Icon name="keyboard-arrow-down" type="MaterialIcons"  style={{
                           marginTop:10 , color:'#02496B'
                     }}/>
                   </View> 
                    <View style={{ flex:1 , justifyContent:'flex-start', marginRight:15}}>
                        <Text style={{fontFamily:'DinNextRegular'}}>الدولة/المنطقة</Text>
                    </View> 

                    
            </View>

     <Picker
              iosHeader="اختيار الدولة "
             // iosIcon={<Icon name="arrow-down" />}
              style={{
                flex:1,
                height:25, 
                marginTop:-10,
                marginRight: (height >= 630 && height<=650)?-8:-40,
                fontFamily:'DinNextRegular',
                backgroundColor:'transparent'
             }}
              selectedValue={""}
              //onValueChange={(value)=>this.onValueChange(value)}

              itemStyle={{
                fontFamily:'DinNextRegular'
            }}
            textStyle= {{
              fontFamily: 'DinNextRegular'
            }}
            
            >
                
              <Picker.Item label="السعودية(+966)" value="id0" 
              itemStyle={{
                  fontFamily:'DinNextRegular'
              }}
              textStyle= {{
                fontFamily: 'DinNextRegular'
              }}

              />
              <Picker.Item label="مصر(+20)" value="id1" />
              
             

            </Picker>
            </View>


<View style={{
        marginTop:-1,
        borderWidth:1,
        borderColor:'#E8E6EA',
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10,
        width:width*.80,

}}>
   
    <Input
            placeholder="0501234567"
            //value="0501234567"
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
              fontFamily:'DinNextRegular',
              //fontWeight:'400'
            }}
            maxLength={15}
          />

  </View>

<View style={{ paddingTop:20}}>
    <Text style={{
        color:'#02496B',
        fontSize:14,
        fontFamily:'DinNextBold',
    }}>
        آوافق علي الشروط و الآحكام
    </Text>
</View>


</View>

<TouchableOpacity onPress={()=>navigation.navigate("Code")}>
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
                            <Text style={{fontSize:16,color:'#FFF',fontFamily:'DinNextRegular', paddingBottom:2}}> تسجيل الدخول </Text>
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
