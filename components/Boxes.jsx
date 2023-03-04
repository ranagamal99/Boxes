import React from 'react'
import { TouchableOpacity,StatusBar,ScrollView , Image ,Text, View ,StyleSheet} from 'react-native';
import { Surface, Stack ,AppBar, HStack, IconButton } from "@react-native-material/core";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { Card, } from 'react-native-paper';




export function Boxes({navigation}) {
    return (
        <View>
      <StatusBar backgroundColor='black' style="light" />
      <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
        <Text style={styles.title}>Our Boxes</Text>
       {/* start large box */}
       <Card style={styles.card}>
        <Card.Content>
         
        
     <View style={styles.box1}>
        <View style={styles.boxes}>
        <Image
          style={styles.boxImg}
          source={{uri :'https://i.pinimg.com/236x/c5/5a/31/c55a31a7c8f68786b5c1ad89e8ae6288.jpg', width:300,
      height:270,}}
        />
        

        </View>

        <View style={styles.contentName}>
         <Text style={styles.names}>Large Box</Text>
         <Text style={styles.price}>Price: 50$</Text>
        </View>

      
        <View style={styles.btns}>
         <TouchableOpacity
        onPress={() => {
            navigation.push("LargeBox");
        }}>
         <Text style={styles.btn}> Show More </Text>
         </TouchableOpacity>
        </View> 
{/* 
       <View style={styles.contentCart}>
        <MaterialIcons name="shopping-cart" size={40} color="#78A20f" style={styles.icon} />
       </View> */}
       
       

     </View> 
     </Card.Content>
  </Card>  
     {/* end large box */} 
       {/* start Meduim  box */}
       <Card style={styles.card}>
        <Card.Content>
         
        
     <View style={styles.box1}>
        <View style={styles.boxes}>
         <Image
          style={styles.boxImg}
          source={{uri :'https://i.pinimg.com/236x/c5/5a/31/c55a31a7c8f68786b5c1ad89e8ae6288.jpg', width:300,
      height:270,}}
        />
        </View>

        <View style={styles.contentName}>
         <Text style={styles.names}>Meduim  Box</Text>
         <Text style={styles.price}>Price: 35$</Text>
        </View>

      
        <View style={styles.btns}>
         <TouchableOpacity
        onPress={() => {
            navigation.push("MeduimBox");
        }}>
         <Text style={styles.btn}> Show More </Text>
         </TouchableOpacity>
        </View> 
{/* 
       <View style={styles.contentCart}>
        <MaterialIcons name="shopping-cart" size={40} color="#78A20f" style={styles.icon} />
       </View> */}
       
       

     </View> 
     </Card.Content>
  </Card>  
     {/* end Meduim box */} 
    
       {/* start small box */}
       <Card style={styles.card}>
        <Card.Content>
         
        
     <View style={styles.box1}>
        <View style={styles.boxes}>
         <Image
          style={styles.boxImg}
          source={{uri :'https://i.pinimg.com/236x/c5/5a/31/c55a31a7c8f68786b5c1ad89e8ae6288.jpg', width:300,
          height:270,}}
        />
        </View>

        <View style={styles.contentName}>
         <Text style={styles.names}>Small Box</Text>
         <Text style={styles.price}>Price: 15$</Text>
        </View>

      
        <View style={styles.btns}>
         <TouchableOpacity
        onPress={() => {
            navigation.push("SmallBox");
        }}>
         <Text style={styles.btn}> Show More </Text>
         </TouchableOpacity>
        </View> 
{/* <View style={styles.contentCart}>
        <MaterialIcons name="shopping-cart" size={40} color="#78A20f" style={styles.icon} />
       </View> */}
     </View> 
     </Card.Content>
  </Card>  
     {/* end small box */} 
     
                  
    </View>
  </ScrollView>

 </View>
    );
}

//style for page


const styles = StyleSheet.create({
    // container: {
        // flex:1,
    // },

    card:{
        margin:20,
        backgroundColor:'white'
    
    },
    

    boxes:{
        alignItems: 'center',
      justifyContent: 'center',
    },
   
      title:{
      color:'#333' , 
      fontSize:30 , 
      fontWeight:'bold' , 
      textAlign:'center',
      borderRadius:5,
      marginTop:10,
    
    },
    
  
    names:{
    textAlign:'center',
     fontSize:30,
    
      margin:10,
      
      fontWeight:'bold' , 
      
    },
//    contentCart:{
//    flexDirection:'row-reverse',
//    marginLeft:300,
//     borderTopWidth:1,
//     borderRightWidth:1,
//     borderTopEndRadius:1,
//     paddingLeft:5,
//     borderColor:'black',
//     },

    price:{
      fontSize:15,
      textAlign:'center',
    },
   
    btn:{
      textAlign:'center',
      backgroundColor: "#78A206",
      padding: 15,
      marginHorizontal:100,
      margin:20,
      width: 120,
      borderRadius: 4,
      color: "white",
      fontSize:16,
      
     },
  
  });