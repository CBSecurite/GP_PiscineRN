import React from 'react';
import { View } from 'react-native';
import { styles } from "./assets/styleCss";
import { Rond, BarreCourte, BarreLongue, CarreBlanc, CarreGris, BarreMoyenne } from "./modules/fomes";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={ styles.bloc1 }>
        <Rond />
        <View style={{justifyContent: 'center'}}>
          <BarreLongue />
          <BarreCourte />
        </View>
      </View>
      <View style={ styles.bloc2}>
        <CarreBlanc />
        <CarreBlanc />
        <CarreBlanc />
      </View>
      <View style={ styles.bloc3}>
        <BarreCourte />
      </View>
      <View style={ styles.bloc4}>
        <CarreGris />
        <CarreGris />
      </View>
      <View style={styles.bloc5}>
        <BarreMoyenne />
      </View>
      <View style={ styles.bloc4}>
        <CarreGris />
      </View>
    </View>
  );
}

