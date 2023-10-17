import { StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
const LoginScreen = ({navigation}) => {
    const screenWidth = Dimensions.get('window').width
  return (
    <SafeAreaView style={[{width:screenWidth}, ]}>
     <View style={tw`p-5`}>
      <TouchableOpacity
      onPress={()=> navigation.navigate('BottomNavigation')}
       style={tw`bg-[#00ACEE]`}>
        <Text style={tw`text-center p-3 text-3xl text-white font-bold`}>Login</Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})