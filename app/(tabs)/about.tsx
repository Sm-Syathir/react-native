import { Platform, StyleSheet, Text,Button, Image,View,Switch} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import React, {useState} from 'react';


export default function TabTwoScreen() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((prev) => !prev);  
  return (
   <>
   <SafeAreaView>
       <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
            style={{marginTop:20,width:100, height:100}}></Image>

      <Text style={{color:'white', fontSize:20, marginTop:20, marginLeft:30}}>Sulthan Muhammad Syathir</Text>

      <Text style={{color:'white', fontSize:20, marginTop:20, marginLeft:30}}>23/03/2009</Text>

      <Text style={{color:'white', fontSize:20, marginTop:20, marginLeft:30}}>XI RPL 4</Text>


    <Button title='go explore' onPress={() => {router.push('/')}}
            color={'blue'}></Button>

      
      <View style={{ marginTop: 20 }}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{ color: 'white', marginTop: 10 }}>
          {isEnabled ? 'Switch is ON' : 'Switch is OFF'}
        </Text>
      </View>

   </SafeAreaView>
   </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
});