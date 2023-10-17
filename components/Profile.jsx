import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Ionicons'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

    const navigation = useNavigation();
    return (
        <View style={tw`flex flex-row items-center  gap-x-2 `}>
            <Image style={tw`h-12 w-12 rounded-full`} source={require('../assets/profile.jpg')} />
            <View style={tw`flex flex-col`}>
                <Text style={tw`text-xl text`}>Daniel Boadu</Text>
                <View style={tw`flex flex-row items-center gap-x-1`}>
                    <Text style={tw``}>Top Level Inprov</Text>
                    <Icon name='star' color='orange' size={17} />
                </View>

            </View>
            <View style={tw`flex flex-row gap-x-4 pl-32`}>
                <Icon1 name='carryout' color="#00ACEE" size={17} />
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')} >
                    <Icon2 name='notifications-outline' color="#00ACEE" size={17} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

