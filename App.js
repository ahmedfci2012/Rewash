import 'react-native-gesture-handler';

import React,{useState, useEffect} from 'react';
import {  Text, View } from 'react-native';

import { Container, Header, Content, Icon, Card, CardItem, Left, Thumbnail, Body } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splach  from './src/components/Splach';
import Login  from './src/components/login';
import Code  from './src/components/loginCode';
import Inputs  from './src/components/loginInputs';
import MyAccount  from './src/components/myAccount';
import AddCard from './src/components/newcard';

const Stack = createStackNavigator();


export default function App (){
   
return (

        <NavigationContainer>
            <Stack.Navigator>
            
            <Stack.Screen name="AddCard" component={AddCard} 
              options={{
                headerShown:false
              }}
              /> 
            <Stack.Screen name="MyAccount" component={MyAccount} 
              options={{
                headerShown:false
              }}
              /> 
              
            <Stack.Screen name="Login" component={Login} 
              options={{
                headerShown:false
              }}
              />
            <Stack.Screen name="Inputs" component={Inputs} 
              options={{
                headerShown:false
              }}
              />
             
              <Stack.Screen name="Code" component={Code} 
              options={{
                headerShown:false
              }}
              />
             
              
            

           
              

              
               
              <Stack.Screen name="Splach" component={Splach} />
              
            </Stack.Navigator>
      </NavigationContainer>
 
 );
}


{/*    <Container>
       
    <View style={{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#1f2c33',
      height:45
    }}>
      <View style={{
        flex:3,
        justifyContent:'flex-start'
      }}>
       <Text
       style={{
         color:"#FFFFFF60",
         fontWeight:'bold',
         fontSize:16,
         marginLeft:10
       }}
       > WhatsApp</Text>
      </View>
      
      <View style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
      }}>
        <Icon
         name="search" 
         type="MaterialIcons"
         style={{marginRight:10, color:"#FFFFFF60",}}
       />

       <Icon
         name="more-vert" 
         type="MaterialIcons"
         style={{marginRight:4, color:"#FFFFFF60",}}

       />




      </View>

    </View>
 
      <View
      style={{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#1f2c33',
        height:45
      }}
      >

      <View style={{
        flex:1,
        marginLeft:10

      }}>

      <Icon
         name="photo-camera" 
         type="MaterialIcons"
         style={{ color:"#FFFFFF60",}}
       />
       
      </View>



      <View style={{
        flex:2
      }}>
        <View>
          <Text style={{
            paddingBottom:5,
            color:'#28b09c',
            fontWeight:'bold',
            textAlign:'center',
            fontSize:16
          }}>CHATS</Text> 
          <View style={{ height:3, backgroundColor:'#28b09c'}} />
        </View>
      </View>




      <View style={{
        flex:2
      }}>
        <View>
          <Text style={{
            paddingBottom:5,
            color:'#28b09c',
            fontWeight:'bold',
            textAlign:'center',
            fontSize:16
          }}>STATUS .</Text> 
          <View style={{ height:3, backgroundColor:'#1f2c33'}} />
        </View>
      </View>




      <View style={{
        flex:2
      }}>
        <View>
          <Text style={{
            paddingBottom:5,
            color:'#28b09c',
            fontWeight:'bold',
            textAlign:'center',
            fontSize:16
          }}>CALLS</Text> 
          <View style={{ height:3, backgroundColor:'#1f2c33'}} />
        </View>
      </View>
      </View>

 


      <Content  >
          <Card style={{flex: 0}} transparent>
            <CardItem  >
              <Left> 
                <Thumbnail source={{uri: 'http://clipart-library.com/image_gallery/320477.png'}} />
                <Body>
                  <Text>Ahmed Said</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            

            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://clipart-library.com/data_images/196359.jpg'}} />
                <Body>
                <Text>Whatsapp message </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>


            


            

            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://clipart-library.com/image_gallery/320477.png'}} />
                <Body>
                <Text>Whatsapp message </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://clipart-library.com/data_images/255784.jpg'}} />
                <Body>
                <Text>Whatsapp message </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://clipart-library.com/image_gallery/320477.png'}} />
                <Body>
                <Text>Whatsapp message </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>


            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://img.pokemondb.net/artwork/pumpkaboo.jpg'}} />
                <Body>
                  <Text>Whatsapp message </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://clipart-library.com/image_gallery/320477.png'}} />
                <Body>
                <Text>Whatsapp message </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://clipart-library.com/image_gallery/575794.jpg'}} />
                <Body>
                <Text>Whatsapp message </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
        </Card>    
      </Content> */}
 //</Container>