import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import auth from '@react-native-firebase/auth'
const Login = ({navigation}:any) => {
    const [emai, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const DK=()=>{
        auth()
        .signInWithEmailAndPassword(emai, password)
        .then(() => {
            Alert.alert('Bạn đã đăng nhập!');
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
      <TextInput style={styles.boder} placeholder='Mật khẩu' onChangeText={(text)=>{setPassword(text)}}></TextInput>
        <View>
            <Button title='Login' onPress={DK}/>
        </View>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('Resister')}>
            <Text>Resister</Text>
          </TouchableOpacity>
         
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    boder:{
        borderRadius:10,
        borderWidth:1,
        margin:10
    }
})