import { View, Text,Dimensions,StatusBar,StyleSheet,SafeAreaView, Platform ,TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width
const PreferedFieldScreen = () => {

    const topPadding = Platform.OS === 'android' ? StatusBar.currentHeight : 0

  return (
    <SafeAreaView style={[{width:screenWidth, flex:1, paddingTop:topPadding}, tw`flex justify-center gap-10`]} >
        <View  style={tw`flex justify-around`} >
       
             <Text style={tw`text-center text-4xl font-bold`}>Choose One</Text>
        </View>

    <View style={tw`flex justify-around`} >
        <View  style={tw`flex justify-around items-center flex-row`}>
            
            <TouchableOpacity 
            activeOpacity={0.8}
            style={[tw`flex justify-center items-center w-1/3 bg-white p-4 rounded-lg` , styles.shadow]} >
            <Entypo  name="briefcase" size={screenWidth/6} color="#00ACEE" />
            <Text style={tw`text-xl font-bold`}>Inprov</Text>
            </TouchableOpacity>
            

            <TouchableOpacity
            activeOpacity={0.8}
             style={[tw`flex justify-center items-center w-1/3 bg-white p-4 rounded-lg`, styles.shadow]}>
            <MaterialCommunityIcons name="book-edit-outline" size={screenWidth/ 6} color="#00ACEE" /> 
            <Text style={tw`text-xl font-bold`}>Intract</Text>
            </TouchableOpacity>
            
        </View>
        
        <View style={tw`flex justify-around items-start flex-row`}>
            
            <View style={tw`flex justify-center items-center w-1/3 mt-[5%] `} >
            <AntDesign name="infocirlce" size={24} color="#00ACEE" />
            <Text style={tw`text-center text-lg`}>An intract is a client who hires talented inprovs on the Inserviz platform to complete various tasks or projects.</Text>
            </View>
            

            <View style={tw`flex justify-center items-center w-1/3 mt-[5%]`} >
            <AntDesign name="infocirlce" size={24} color="#00ACEE" />
            <Text style={tw`text-center text-lg`}>An intract is a client who hires talented inprovs on the Inserviz platform to complete various tasks or projects.</Text>
            </View>
            
        </View>
        </View>

    </SafeAreaView>
  )
}

export default PreferedFieldScreen

const styles = StyleSheet.create({
shadow: {
    elevation: 20,
          shadowColor: '#AEAEC0',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
     },
});