import React from 'react';
import { Pressable, Text, TextInput} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../assets/styleCss";

export const InputEmail = () => {
  const [email, onChangeText] = React.useState('');
  return (
    <TextInput style={styles.input} placeholder='Email' placeholderTextColor='#e5e5e5' onChangeText={onChangeText} value={email} />
  )
}

export const InputPassword = () => {
  const [password, onChangeText] = React.useState('');
  return (
    <TextInput style={styles.input} placeholder='Password' placeholderTextColor='#e5e5e5' onChangeText={onChangeText} value={password} secureTextEntry={true} />
  )
}

export const ButtonLogin = (props) => {
  const { onPress, title = 'Login' } = props;
  return (
    <LinearGradient style={styles.button}  colors={['#E84710','#FF865C']} >
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </LinearGradient>
  );
}