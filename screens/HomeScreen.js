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
import TopNavBar from '../components/TopNavBar';
import mainStyles from '../constants/MainStyles';
import { MonoText } from '../components/StyledText';
import DisplayCard from '../components/DisplayCards';
let fullWidth = Dimensions.get('window').width;
let fullHeight = Dimensions.get('window').height;
let cardHeight = 100;
let headerImageWidth = fullWidth * .45;

export default class HomeScreen extends React.Component {


  static navigationOptions = {
    header: null,
  };



  render() {
    return (
      <View style={styles.mainContainer}>
        <TopNavBar/>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
          <DisplayCard name='Maggie B.' time='Mon, June 7 | 10:32pm' ounces={6} imageSource={require('../assets/images/profilePic2.jpg')}/>
          <DisplayCard name='Benjamin B.' time='Fri, June 2 | 12:02pm' ounces={8}/>
          <DisplayCard name='Maggie B.' time='Sat, June 7 | 10:32pm' imageSource={require('../assets/images/profilePic2.jpg')}/>
          <DisplayCard name='Maggie B.' imageSource={require('../assets/images/profilePic2.jpg')}/>

          <DisplayCard/>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }


}

const styles = StyleSheet.create({
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
  flexBoxWrap:{

    height:50,
    width:50,
    marginRight:1,
    borderRightWidth:1,
    borderColor:'#dfdfdf',
    borderRadius:cardHeight,
    overflow:'hidden',
    backgroundColor:'green',
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop:0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
