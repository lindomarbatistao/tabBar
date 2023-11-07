import {View, Text, StyleSheet} from 'react-native'
import styles from './styles'

export default function Home({navigation, route}){
    const usuario = route.params.usuario

    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Página Home</Text>
            <Text>{usuario}</Text>
        </View>       
    )
}

