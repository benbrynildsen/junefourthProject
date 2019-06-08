import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, Dimensions, Vibration, PushNotification, Keyboard } from 'react-native';
let fullWidth = Dimensions.get('window').width;
let fullHeight = Dimensions.get('window').height;
let cardHeight = 100;
let headerImageWidth = fullWidth * .45;


const mainStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#5cdb95',
    paddingTop:35,
    margin:0,
  },
  headerImage:{
    width:headerImageWidth,
    position:'absolute',
    alignSelf:'center',
    resizeMode:'contain',
    marginTop:-38,
    overflow:'visible'




  },
  mainContainerText:{
    textAlign:'center',
    fontSize:20,
    color:'white',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding:0,
    margin:0,
  },
  containerCard:{
    width:fullWidth,
    minHeight:cardHeight,
    backgroundColor:'transparent',
    borderWidth:1,
    borderColor:'gray',
    marginBottom:0,
    flexDirection:'row'
  },
  containerFlexBoxes:{
    flex:1,
    height:cardHeight,
    marginRight:1,
  },

})
