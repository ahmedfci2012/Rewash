import React,{useRef, useState, useEffect} from 'react';
import {  Text, View , SafeAreaView, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { Container, Header, Switch, Icon, Card, CardItem, Left, Picker, Body , Input,Button, Title, Right} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';

const { width, height } = Dimensions.get("window");
export default function MySetings (){


    return (
      <View style={{
        padding :30
      }}>
           
        <View style={{ 
          borderColor:'#00000082',
          borderBottomWidth:.5,
          paddingBottom:8,
          paddingRight:15
        }}>
          <Text style={{
            fontFamily:'DinNextMedium',
            fontSize:14,
            color:'#000000D1'
          }}> حسابي  </Text>
       </View>

        <TouchableOpacity>
        <View style={{
          flexDirection:'row',
          paddingTop:13,
        }}>  
              <View style={{   flex:1, paddingBottom:8  }}>
                  <Icon  type="MaterialIcons" name="keyboard-arrow-left" />
              </View>
              <View style={{  flex:1, }}>
                  <Text style={{
                    fontFamily:'DinNextMedium',
                    fontSize:14,
                    color:'#00000087'
                  }}> اللغات  </Text>
              </View>
            </View>
        </TouchableOpacity> 

        <TouchableOpacity>
        <View style={{
              flexDirection:'row',
              paddingBottom:13,
              paddingTop:13,
            }}>  
            <View style={{   flex:1, paddingBottom:8  }}>
                <Icon  type="MaterialIcons" name="keyboard-arrow-left" />
            </View>
            <View style={{  flex:1, }}>
                <Text style={{
                  fontFamily:'DinNextMedium',
                  fontSize:14,
                  color:'#00000087'
                }}> الخصوصية و الامان  </Text>
            </View>
       </View>

    </TouchableOpacity> 




    <View style={{
          flexDirection:'row',
          borderColor:'#00000082',
          borderBottomWidth:.5,
          paddingBottom:8,
          justifyContent:'flex-end'
        }}>
          <Text style={{
            fontFamily:'DinNextMedium',
            fontSize:14,
            color:'#000000D1'
          }}> الاشعارات  </Text>
          
          <Icon  type="MaterialIcons" name="notifications-none" style={{ color:'#02496B'}} />
            
       </View>

            <View style={{
              flexDirection:'row',
              paddingTop:20,
            }}>  
              <View style={{     }}>

              <Switch
              trackColor={{ true: "#02496B", false: "#aeb4bc" }}
              thumbColor={ "#FFF"}
              // style={{
              //   transform: [
              //     { scaleX: Platform.OS === "ios" ? 0.9 : 1.1 },
              //     { scaleY: Platform.OS === "ios" ? 0.8 : 1.2 }
              //   ]
              // }}
              //onValueChange={onPressSwitchNotifications}
              value={false}
            />

              </View>
              <View style={{  flex:1, }}>
                  <Text style={{
                    fontFamily:'DinNextMedium',
                    fontSize:14,
                    color:'#00000087'
                  }}> اشعارات جديدة  </Text>
              </View>
            </View>

            <View style={{
                flexDirection:'row',
                paddingTop:13,
              }}>  
              <View style={{     }}>

              <Switch
              trackColor={{ true: "#02496B", false: "#aeb4bc" }}
              thumbColor={ "#FFF"}
              // style={{
              //   transform: [
              //     { scaleX: Platform.OS === "ios" ? 0.9 : 1.1 },
              //     { scaleY: Platform.OS === "ios" ? 0.8 : 1.2 }
              //   ]
              // }}
              //onValueChange={onPressSwitchNotifications}
              value={true}
            />

              </View>
              <View style={{  flex:1, }}>
                  <Text style={{
                    fontFamily:'DinNextMedium',
                    fontSize:14,
                    color:'#00000087'
                  }}> الانشطة  </Text>
              </View>
            </View>

            <View style={{
                flexDirection:'row',
                paddingTop:13,
              }}>  
              <View style={{     }}>

              <Switch
              trackColor={{ true: "#02496B", false: "#aeb4bc" }}
              thumbColor={ "#FFF"}
              // style={{
              //   transform: [
              //     { scaleX: Platform.OS === "ios" ? 0.9 : 1.1 },
              //     { scaleY: Platform.OS === "ios" ? 0.8 : 1.2 }
              //   ]
              // }}
              //onValueChange={onPressSwitchNotifications}
              value={true}
            />

              </View>
              <View style={{  flex:1, }}>
                  <Text style={{
                    fontFamily:'DinNextMedium',
                    fontSize:14,
                    color:'#00000087'
                  }}> اتمام الدفع  </Text>
              </View>
            </View>

     

            <View style={{
          flexDirection:'row',
          borderColor:'#00000082',
          borderTopWidth:.5,
          paddingTop:8,
          justifyContent:'flex-end',
          marginTop:20
        }}>
          <Text style={{
            fontFamily:'DinNextMedium',
            fontSize:14,
            color:'#00000087',
            marginRight:5
          }}> من نحن   </Text>
          
          <Icon  type="MaterialCommunityIcons" name="information-outline" style={{ color:'#02496B'}}/>
            
       </View>


       <View style={{
          flexDirection:'row',
          paddingTop:20,
          justifyContent:'flex-end'
        }}>
          <Text style={{
            fontFamily:'DinNextMedium',
            fontSize:14,
            color:'#00000087',
            marginRight:5
          }}> الشروط و الاحكام   </Text>
          
          <Icon  type="Entypo" name="text-document" style={{ color:'#02496B'}} />
            
       </View>




       <View style={{
          flexDirection:'row',
          paddingTop:20,
          justifyContent:'flex-end'
        }}>
          <Text style={{
            fontFamily:'DinNextMedium',
            fontSize:14,
            color:'#00000087',
            marginRight:5
          }}> الشروط و الاحكام   </Text>
          
          <Icon  type="Feather" name="navigation" style={{ color:'#02496B'}} />
            
       </View>




      </View>
        );

}
