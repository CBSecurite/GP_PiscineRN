import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ModelS, Model3, ModelX, ModelY } from './';
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();
export default function NavigationApp() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerPosition: 'right', headerShown: false, }}
      drawerContent={(props) => <CustomDrawerContent {...props}  />}
    >
      <Drawer.Screen name="Model S" component={ModelS} />
      <Drawer.Screen name="Model 3" component={Model3} />
      <Drawer.Screen name="Model X" component={ModelX} />
      <Drawer.Screen name="Model Y" component={ModelY} />
    </Drawer.Navigator>
  );
}