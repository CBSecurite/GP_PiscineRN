import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { useFonts } from 'expo-font';

import { styles } from './assets/styleCss';


export default function App() {
  const [loaded] = useFonts({
    poppins: require('./assets/poppins/Poppins-Regular.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.blockGris}>
        <Image style={styles.imgCroix} source={require("./assets/croix.png")} />
        <Image style={styles.imgChaussure} source={require("./assets/chaussure.png")} />
      </View>
      <View style={styles.blockBlanc}>
        <Text style={styles.marque}>Adidas</Text>
        <Text style={styles.model}>Yeezy Boost 350 V2 Black Red</Text>
        <View style={styles.blockBoutons}>
          <Text style={styles.boutonGauche}>
            <Text>42</Text>
            <Text>340 €</Text>
          </Text>
          {/*<Button style={styles.boutonDroit}*/}
          {/*  title="Right button"*/}
          {/*  onPress={() => Alert.alert('Right button pressed')}*/}
          {/*/>*/}
          <Text style={styles.boutonDroit}>
            <Image style={styles.imgPanier} source={require("./assets/panier.png")} />
            <Text style={styles.textBuy}>BUY</Text>
          </Text>
        </View>
        <View  style={styles.blockText}>
          <span>The
          <strong> Yeezy 350 Boost V2 Bred </strong>
          stands out for its sobriety and simplicity. Unlike most V2 shoes that feature a patterned
            print, this shoes has a monochrome black upper with red stitching Yeezy has a monochrome
            black upper with
          <strong> red stitching </strong>
          that reads SPLY-350. The silhouette is set on a black boost sole semi-translucent.</span>
        </View>
        <View>
          <Text style={ styles.textFin }> SKU: CP9652</Text>
          <Text style={ styles.textFin }> Release date: February 2017</Text>
          <Text style={ styles.textFin }> Colorway: CORE BLACK/CORE BLACK/RED</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}