import React from 'react';
import { View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from './assets/styleCss';
import { InputEmail, InputPassword, ButtonLogin } from './modules/elementsForm';

export default function App() {
  const [loaded] = useFonts({
    poppins: require('./assets/poppins/Poppins-Regular.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.blockForm}>
        <Image style={styles.imgLogo} source={require("./assets/logoItAkademy.png")} />
        <InputEmail />
        <InputPassword />
        <ButtonLogin />
      </View>
    </View>
  );
}
