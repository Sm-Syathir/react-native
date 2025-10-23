import { router } from 'expo-router';
import { Platform, StyleSheet, Text,Button, Image,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={{color:'red', fontSize:30}}>HELLO, WORLD</Text>

      <Button
        title="please press me"
        onPress={() => {alert('This is a button!')}}
        color='red'>
      </Button>

      <Image source={require('@/assets/images/icon.png')}
      style={{width:100, height:100, marginTop:20}}></Image>

      <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
      style={{marginTop:20,width:100, height:100}}></Image>

      <View style={{marginTop:20, backgroundColor:'red', width:100, height:100}}></View>

      <View style={[styles.bulat, {marginTop:20}]}></View>

      <Button title='go explore' onPress={() => {router.push('/about')}}
        color={'red'}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bulat: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
});