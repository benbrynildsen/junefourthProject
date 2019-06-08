import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { WebBrowser } from 'expo';
import {Card} from 'react-native-elements';
import RF from 'react-native-responsive-fontsize';
import Font from 'expo';
import { material, systemWeights} from 'react-native-typography';
import PropTypes from 'prop-types';
let fullWidth = Dimensions.get('window').width;
let fullHeight = Dimensions.get('window').height;
let cardHeight = 75;
let headerImageWidth = fullWidth * .45;


export default class DisplayCard extends React.Component {
  constructor(props){
    super(props)
    this.imageSource;
  }
  render(){
    return(
      <View style={styles.containerCard}>
        <View style={[styles.containerFlexBoxes, {flex:1}]}>
          <View style={[styles.flexBoxWrap, {borderRadius:cardHeight}]}>
            <Image
            style={[styles.flexBoxImage, {}]}
            source={this.props.imageSource} />

          </View>
        </View>
        <View style={[styles.containerFlexBoxes, {flex:3, flexDirection: 'column'}]}>
          <View style={[styles.containerTextBoxes, {flex:1}]}><Text style={[styles.containerTextStyleTop, systemWeights.light]}>{this.props.name}</Text></View>
          <View style={[styles.containerTextBoxes, {flex:1}]}><Text style={[styles.containerTextStyleBottom, systemWeights.light]}>{this.props.time}</Text><Text style={[styles.containerTextStyleRight, systemWeights.light]}>{this.props.ounces}oz</Text></View>
        </View>
      </View>
    )
  }
}

DisplayCard.propTypes = {
  name:PropTypes.String,
  time:PropTypes.String,
  ounces:PropTypes.number,
  imageSource:PropTypes.func,
}


DisplayCard.defaultProps =
{
  name: "Anonymous",
  time: "Mon, June 7 | 10:32pm",
  ounces: 7,
  imageSource: require("../assets/images/profilePic.jpg"),
}

const styles = StyleSheet.create({

  containerCard:{
    width:fullWidth,
    minHeight:cardHeight,
    backgroundColor:'transparent',
    borderBottomWidth:1,
    borderColor:'#dfdfdf',
    marginBottom:0,
    flexDirection:'row'
  },
  containerFlexBoxes:{
    height:cardHeight,
    overflow:'hidden',
    //resizeMode:'contain',
    justifyContent:'center'


  },
  containerTextBoxes:{
    justifyContent: 'center',




  },
  containerTextStyleTop:{
    position:'absolute',
    marginLeft: 0,
    textAlign: 'left',
    fontSize: RF(2),
    top:5,




  },
  containerTextStyleRight:{
    position:'absolute',
    alignSelf:'flex-end',
    right: 25,
    fontSize: RF(2),
    bottom:5,


  },
  containerTextStyleBottom:{
    position:'absolute',
    marginLeft: 0,
    textAlign: 'left',
    fontSize: RF(2),
    bottom:5,

  },

  flexBoxWrap:{

    height:50,
    width:50,
    marginRight:1,
    borderRightWidth:1,
    borderColor:'#dfdfdf',
    borderRadius:cardHeight,
    overflow:'hidden',
    backgroundColor:'grey',
    justifyContent:'center',
    alignSelf:'center',

  },
  flexBoxImage:{
    width:50,
    alignSelf:'center',
    borderRadius:50,
    resizeMode:'contain',
    margin:0,
  },

})
