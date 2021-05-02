import React from 'react';
import { Linking,StyleSheet, Text, View, ScrollView, TouchableHighlight, SafeAreaView } from 'react-native';

export default function Nav() {
    return ( 
      <SafeAreaView style = {styles.container}>
<View style={styles.navContainer} >
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt2}>LandscapeTitles</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>About</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Portfolio</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Prices</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>About</Text>
</TouchableHighlight>
</View>
</View>
</SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container : {
      flexDirection : "column",
    },
    
        navContainer: {
          flexDirection: "row",
          flex: 1,
          backgroundColor:"white",
          padding:40
          },
          navButton: {
              
        paddingRight:30,           
 
        alignItems:"flex-end",
        
            color: "#fff",
  
            },
            navBtnTxt: {
              color:"#3910ef",
              fontSize:12,
              fontWeight:"600",
              width:50
            },
            navBtnTxt2: {
            color:"#3910ef",
              fontSize:18,
              fontWeight:"600",
              margin:-10

            },
      
       
    
  });