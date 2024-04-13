import { Link } from "expo-router";
import {  Text, View } from "react-native";

export default function App(){
    return(
        <View className="flex-1 bg-black text-white items-center justify-center" >
            <Text className="font-semibold text-primary">Open uo App.js to start working</Text>
            <Link href="/home" className="text-blue-700">Go To Home</Link>
        </View>
    )
}