import React,{useRef, useState, useEffect} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Icon, Card, CardItem, Left, Thumbnail, Body , Input,Picker} from 'native-base';
import { Image, StyleSheet } from 'react-native';


const { width, height } = Dimensions.get("window");
export default function Code ({navigation}){
   
    const input1 =useRef();
    const input2=useRef();
    const input3=useRef();
    const input4=useRef();

    const [field1, changeField1] = useState("");
    const [field2, changeField2] = useState("");
    const [field3, changeField3] = useState("");
    const [field4, changeField4] = useState("");

    const changeField11 = (value)=>{
        changeField1(value);
        input2.current._root.focus();
    }

    const changeField22 = (value)=>{
        changeField2(value);
        input3.current._root.focus();
    }

    const changeField33 = (value)=>{
        changeField3(value);
        input4.current._root.focus();
    }

    const  changeField44  = (value4)=>{
        changeField4(value4);
        console.log(field1 , field2 , field3 , value4);
        navigation.navigate("Inputs");
    }


    const [secs, setSecs] = useState(30);
    const [mins, setMins] = useState(1);
    const [resend, setResend] = useState(true);

    
  useEffect(() => {
    const timerId = setInterval(() => {
        
      if(secs==0 && mins == 0){
         setResend(false);
         alert('انتهي الوقت ');
         clearInterval(timerId); 
      }else if(secs == 0 && mins == 1){
        setMins(m => m - 1)
        setSecs(s => s + 59)      
        }else{
         setSecs(s => s - 1)
        }
    }, 1000)
    return () => clearInterval(timerId);
  }, [secs, mins])  
       
 
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
     <TouchableOpacity>
        <View style={{
            borderWidth:1,
            height:40,
            width:40,
            borderRadius:10,
            borderColor:'#E8E6EA',
            justifyContent:'center',
            alignItems:'center'
        }}>
                <Icon name="keyboard-arrow-left" type="MaterialIcons"  style={{
                                color:'#2934D0',
                                fontSize:20 
                        }}/>
        </View>
    </TouchableOpacity>    
 </View>

         
 <View style={{
     alignItems:'center',
     marginTop:height*.05425,
     paddingLeft:30
 }}>
         <Text style={{
             fontSize:36,
             color:'#000',
             fontFamily:"DinNextBold",
         }}>
           0{mins}:{secs<10?0:''}{secs}
         </Text>
         <Text style={{
             fontSize:16,
             fontFamily:"DinNextBold",
             marginTop:5,
             color:'#000'
         }}>
           قم بآدخال الكود الملحق الي جوالك
         </Text>
 </View>
        
<View style={{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:height*.07925,
    paddingLeft:20,
    paddingRight:20
}}>


<View style={{
        borderRadius:10,
        backgroundColor:'#FFF',
        width:width*.183333,
        height:height*.086313

}}>
   
    <Input
            ref={input1}
           // onSubmitEditing={()=>{input2.current._root.focus();}}
            value={field1}
            onChangeText={changeField11}
            placeholderTextColor="#999999"
            autoCorrect={true}
            style={{
              textAlign: 'center',
              color: "#000000",
              fontSize: 20,
              paddingRight: 16,
              fontFamily:"DinNextRegular",
            }}
            maxLength={1}
            keyboardType={'numeric'}
            
          />

  </View>


  <View style={{
        borderRadius:10,
        backgroundColor:'#FFF',
        width:width*.183333,
        height:height*.086313

}}>
   
    <Input
            ref={input2}
            //onSubmitEditing={()=>{input3.current._root.focus();}}
            value={field2}
            onChangeText={changeField22}
            placeholderTextColor="#999999"
            autoCorrect={true}
            style={{
                textAlign: 'center',
                color: "#000000",
                fontSize: 20,
                paddingRight: 16,
                fontFamily:"DinNextRegular",
              }}
            maxLength={1}
            keyboardType={'numeric'}
            
            //returnKeyType = {'next'}

          />

  </View>

  <View style={{
        borderRadius:10,
        backgroundColor:'#FFF',
        width:width*.183333,
        height:height*.086313

}}>
   
    <Input
             ref={input3}
            //onSubmitEditing={()=>{input4.current._root.focus();}}
            value={field3}
            onChangeText={changeField33}
            placeholderTextColor="#999999"
            autoCorrect={true}
            style={{
                textAlign: 'center',
                color: "#000000",
                fontSize: 20,
                paddingRight: 16,
                fontFamily:"DinNextRegular",
              }}
            maxLength={1}
            keyboardType={'numeric'}
          />

  </View>

  <View style={{
        borderRadius:10,
        backgroundColor:'#FFF',
        width:width*.183333,
        height:height*.08631319358

}}>
   
    <Input
             ref={input4}
             value={field4}
             onChangeText={changeField44}
            //onSubmitEditing={collect}
            placeholderTextColor="#999999"
            autoCorrect={true}
            style={{
                textAlign: 'center',
                color: "#000000",
                fontSize: 20,
                paddingRight: 16,
                fontFamily:"DinNextRegular",
              }}
            maxLength={1}
            keyboardType={'numeric'}
          />

  </View>


  </View>

<TouchableOpacity disabled={resend} onPress={ ()=> navigation.replace("Code")}>
  <View style={{
      flex:1,
      alignItems:'center',
      marginTop:40,

  }}>
      <Text style={{
          color:'#02496B',
          fontSize:16,
          fontFamily:"DinNextBold",
      }}>
          اعادة الارسال
      </Text>
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
