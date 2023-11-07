import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import app from '../firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(app);

    const logar = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate('Home', {usuario:user.email})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.caixas}>
                <TextInput
                    placeholder='email'
                    onChangeText={setEmail}
                    value={email}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='password'
                    onChangeText={setPassword}
                    value={password}
                    style={styles.caixa}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={logar}
                >
                    <Text style={{ fontSize: 25 }}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={()=>navigation.navigate('SignUp')}
                >
                    <Text style={{ fontSize: 25 }}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}


export default Login