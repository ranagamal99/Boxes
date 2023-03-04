import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Surface, Stack } from "@react-native-material/core";
import { Button, Card, List } from 'react-native-paper';
import { AppBar, IconButton,ListItem } from '@react-native-material/core';
import { Flex, Spacer } from 'react-native-flex-layout';






export function MeduimBox({navigation}) {

   

  return (
    <View >
      <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <View style={{alignItems:'center',}}>
          <Image
          style={styles.boxImg}
          source={{uri :'https://i.pinimg.com/236x/c5/5a/31/c55a31a7c8f68786b5c1ad89e8ae6288.jpg', width:300,
          height:270,}}
        />
        </View>
         
         <View style={styles.contentName}>
         <Text style={styles.names}>Meduim Box</Text>
        </View>
        <Text style={styles.title}>Ingredient</Text>
        <View >

    
    
    
        </View>
   <Stack fill center spacing={4}>
    
    <Surface
      elevation={2}
      category="medium"
      style={{ width: 250, height: 70 , padding:10,}} 
    >
        <Text>name</Text>
        <Text>wietght</Text>
        </Surface>
  </Stack>
  <View> 


  </View>
         
        </Card.Content>
       </Card>
    
       </ScrollView>
    </View>
  )

      }
const styles = StyleSheet.create({

  card:{
    marginTop: 15,
    marginBottom:15,
    padding: 10,
    backgroundColor:"white"
  },
  names:{
    textAlign:'center',
     fontSize:20,
    
      margin:10,
      
      fontWeight:'bold' , 
      
    },
    title:{
        textAlign:'center',
         fontSize:20,
         color:'#78A206',
          margin:10,
          
          fontWeight:'bold' , 
          
        },
})

