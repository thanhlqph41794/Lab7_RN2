import { Alert, Button, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '89856325911-qtr7aar9tg1ujl3v7jk83b0sqgql8b02.apps.googleusercontent.com',
});
const Resignter = ({navigation}:any) => {
    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }
    const [emai, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    const DK=()=>{
        auth()
        .createUserWithEmailAndPassword(emai, password)
        .then(() => {
            Alert.alert('Tài khoản của bạn đã được tạo và đăng nhập!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Email của bạn đã tồn tại!');
            }

            if (error.code === 'auth/invalid-email') {
                Alert.alert('Email không tồn tại!');
            }
           Alert.alert(error);
        });
    }
  return (
    <View>
      <TextInput style={styles.boder} placeholder='Tài khoản Email' onChangeText={(text)=>{setEmail(text)}}></TextInput>
      <TextInput style={styles.boder} placeholder='Mật khẩu'  onChangeText={(text)=>{setPassword(text)}}></TextInput>
        <View>
            <Button title='Resignter' onPress={DK}/>
            <Button title='Login with  Google' onPress={()=>{onGoogleButtonPress().then(()=>Alert.alert('Signin with google'))}}/>
            
        </View>
        <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Resignter

const styles = StyleSheet.create({
    boder:{
        borderRadius:10,
        borderWidth:1,
        margin:10
    }
})