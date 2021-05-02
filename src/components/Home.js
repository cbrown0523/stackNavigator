import React, { Component } from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';



class HomeScreen extends Component {

    render() {
        return (
          
          <View >
                   
                   <Image
  source={{ uri: "https://miro.medium.com/max/5000/1*tqlsrfxiy0owv8VEDmPK8A.jpeg"  
}}
  style={styles.image}
/>
    <View>      
  <Text style={styles.heading}>Template Information</Text>                     
    </View>    
        <Text>  lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit gravida rutrum. Bibendum ut tristique et egestas quis ipsum suspendisse. Quis vel eros donec ac odio. Facilisi cras fermentum odio eu. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Pellentesque massa placerat duis ultricies lacus sed. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Elit duis tristique sollicitudin nibh sit. A arcu cursus vitae congue mauris rhoncus aenean.

          </Text>
                <TouchableOpacity style={styles.buttonContainerStyle} onPress={() => this.props.navigation.navigate('Second')}>
                <Text style={styles.buttonTextStyle}>Open Second Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
buttonContainerStyle: {
    backgroundColor: '#3910ef',
    borderRadius: 5,
    padding: 10,
    margin: 20,
},
heading:{
    fontSize : 24,
    color:"#3910ef",
    paddingRight: 10

},
buttonTextStyle: {
    fontSize: 20,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
},
image: {
  width: 500,
   height: 250 ,       
  resizeMode: "stretch",
  justifyContent: "center",
  alignItems: "center"
             
  },
})

export default HomeScreen;