import {Image, Pressable, Text, View} from "react-native";
import {styles} from "../assets/styleCss";
import {DrawerActions} from "@react-navigation/native";
import React from "react";

export default function ModelX({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.navbar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={styles.menu}>
          <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text>Menu</Text>
          </Pressable>
        </View>
      </View>
      <Image source={require('../assets/ModelX.jpeg')} style={styles.img}/>
      <View style={styles.blocTitre}>
        <Text style={styles.titre}>Model X</Text>
        <Text style={styles.sousTitre}>Order Online for Touchless Delivery</Text>
      </View>
      <View style={styles.blocOrder}>
        <Pressable style={styles.order}>
          <Text style={styles.orderText}>Custom order</Text>
        </Pressable>
      </View>
    </View>
  );
}