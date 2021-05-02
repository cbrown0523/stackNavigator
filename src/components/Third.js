import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

;

class Third extends Component {

    render() {
        return (

                
               <View>          
                <Image
  source={{ uri: "https://th.bing.com/th/id/R211126640106e32ab0fccf3e874257e0?rik=%2brB%2f2fKZ851tOw&riu=http%3a%2f%2fcdn.wallpaperhi.com%2f1920x1080%2f20120301%2fmountains+landscapes+nature+valley+mist+rivers+1920x1080+wallpaper_www.wallpaperhi.com_99.jpg&ehk=y7SPOhxey1pObjzB4AypQ5QxnIEwUyZ%2b2A6K5%2fif4ys%3d&risl=&pid=ImgRaw"  
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
                 <TouchableOpacity style={styles.buttonContainerStyle} onPress={() => this.props.navigation.navigate('Fourth')}>
                <Text style={styles.buttonTextStyle}>Open Fourth Screen</Text>
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
export default Third;