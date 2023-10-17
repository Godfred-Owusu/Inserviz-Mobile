import { StyleSheet, Text, View,ImageBackground,Image,AppRegistry,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Onboarding = (prop) => {
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height
 
  const navigation = useNavigation();
  return (
    // props for the swiper

  <SafeAreaView>
    {/* background Image prop */}
    <ImageBackground  style={[tw` relative`, {height:screenHeight}]} source={prop.backgroundImage} resizeMode='cover'>

 {/* Logo prop */}
   <View style={tw`flex justify-center items-center`}>
      <Image style={tw`flex justify-center items-center`} source={require('../assets/Inserviz.png')}/>

   </View>
   {/* Text prop */}
   <View style={[tw`absolute bottom-20`,{width: screenWidth}]} > 
      <Text style={tw`text-white text-3xl font-bold text-center`}>{prop.text}</Text>
      <View style={tw`flex justify-center items-center`}>

        {/* Button props */}
     <TouchableOpacity
     onPress={()=>navigation.navigate('SignUp')}
      activeOpacity={0.8} 
      style={[tw`${prop.signUpButtonSyle}`, {width: screenWidth/1.4}]} >
      <Text style={tw`text-center text-xl text-[#00ACEE]`}>{prop.signIn}</Text>
     </TouchableOpacity>

     <TouchableOpacity
     onPress={()=>navigation.navigate('Login')}
      activeOpacity={0.8}
       style={[tw`${prop.loginInButtonSyle}`, {width: screenWidth/1.4}]}>
      <Text style={tw`text-white text-xl`}>{prop.login}</Text>
     </TouchableOpacity>
     </View>
     </View>
   
    </ImageBackground>
  </SafeAreaView>
 
  )
}

AppRegistry.registerComponent('inserviz_App', () => Onboarding);

export default Onboarding

