import React from 'react';
import { View } from "react-native";
import { styles } from "../assets/styleCss";

export const Rond = () => {
  return (
    <View style={ styles.rond }> </View>
  )
}

export const BarreCourte = () => {
  return (
    <View style={ styles.barreCourte }> </View>
  )
}

export const BarreLongue = () => {
  return (
    <View style={ styles.barreLongue }> </View>
  )
}

export const BarreMoyenne = () => {
  return (
    <View style={ styles.barreMoyenne }> </View>
  )
}

export const CarreBlanc = () => {
  return (
    <View style={ styles.carreBlanc }> </View>
  )
}

export const CarreGris = () => {
  return (
    <View style={styles.carreGrisBlanc1}>
      <View style={ styles.carreGris }> </View>
      <View style={ styles.carreGrisBlanc }>
        <BarreLongue />
        <BarreCourte />
      </View>
    </View>
  )
}