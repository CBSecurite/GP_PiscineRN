import React, { useEffect, useState } from "react";
import axios from "axios";
import { ScrollView, Text, View, Pressable, Picker, Image } from "react-native";
import { styles, Key } from "../index";
import { AntDesign } from "@expo/vector-icons";

async function refreshData (setData, setUSDtoEUR) {

  const resultA = await axios(`https://rest.coinapi.io/v1/assets?apikey=${Key()}`);
  const resultB = await axios(`https://rest.coinapi.io/v1/assets/EUR?apikey=${Key()}`)
  let datas = [];
  let numero = 1;
  resultA.data
    .sort((a, b) => a.price_usd < b.price_usd ? -1 : 1)
    .map(data => {
      if(data.type_is_crypto >= 1 && data.price_usd && data.id_icon) {
        data.number = numero
        datas.push(data);
        numero++;
      }
    });
  setData(datas);
  setUSDtoEUR(resultB.data[0].price_usd);

  // A activer si on veut mettre a jour toute les 5 secondes
  // setTimeout( () => refreshData (setData, setUSDtoEUR), 5000);
}

export default function ListeCryptoMonnaie(props) {
  const [data, setData] = useState([]);
  const [typeMonnaie, setTypeMonnaie] = useState('USD');
  const [maxPage, setMaxPage] = useState(50);
  const [numPage, setNumPage] = useState(1);
  const [USDtoEUR, setUSDtoEUR] = useState(0);

  useEffect(() => refreshData(setData, setUSDtoEUR), [])

  const ConvUsdToEur = ({value}) => {
    const calc = (value / USDtoEUR);
    return (calc.toFixed(10) + ' €');
  }

  const precedent = () => {
    if(numPage > 1) {
      setNumPage(numPage-1);
    }
  }

  const suivant = () => {
    if(numPage < Math.ceil((data.length) / maxPage)) {
      setNumPage(numPage+1);
    }
  }

  const vuMaxPage = Math.ceil((data.length) / maxPage);

  return (
    <>
      <Text style={styles.blocMenu}>Liste des cryptomonnaies</Text>
      <View style={styles.blocSelect}>
        <View style={styles.blocBtn}>
          <Pressable style={numPage === 1 ? {visibility: 'hidden'} : {visibility: 'visible'}}  onPress={precedent}>
            <AntDesign name="caretleft" size={24} color="black" />
          </Pressable>
          <Text>Page {numPage} / { vuMaxPage === 0 ? 1 : vuMaxPage }</Text>
          <Pressable style={numPage === vuMaxPage || vuMaxPage === 0 ? {visibility: 'hidden'} : {visibility: 'visible'}} onPress={suivant}>
            <AntDesign name="caretright" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.blocBtn}>
          <Picker
            selectedValue={typeMonnaie}
            style={{ width: 60 }}
            onValueChange={itemValue => setTypeMonnaie(itemValue)}
          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="EUR" value="EUR" />
          </Picker>
          <Picker
            selectedValue={maxPage}
            style={{ width: 100 }}
            onValueChange={itemValue => setMaxPage(itemValue)}
          >
            <Picker.Item label="50" value="50" />
            <Picker.Item label="100" value="100" />
            <Picker.Item label="250" value="250" />
            <Picker.Item label="500" value="500" />
            <Picker.Item label="1000" value="1000" />
            <Picker.Item label="Tous" value="100000" />
          </Picker>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#000000', padding: '0.5rem', marginTop: 80, }}>
        <ScrollView>
          {
            data
              .sort((a, b) => a.price_usd < b.price_usd ? 1 : -1)
              .slice(((numPage - 1) * maxPage), (numPage * maxPage))
              .map(item => {

                return (
                  <Pressable key={item.asset_id + '0'}
                             style={styles.blocMonnaie}
                             onPress={() => props.navigation.navigate('Détails', {data: item, USDtoEUR, typeMonnaie})}
                  >
                    <View key={item.asset_id + 'V'} style={styles.blocImg}>
                      <Image style={styles.img} key={item.asset_id + 'Img'} source={{ uri: `https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${item.id_icon.replace(/-/g, '')}.png`}} />
                      <Text style={{fontWeight: "bold", marginLeft: '0.5rem'}} key={item.asset_id + 'N'}>{item.name}</Text>
                    </View>
                    <View  key={item.asset_id + 'P'} style={styles.prix}>
                      {
                        typeMonnaie === 'USD'
                          ? <Text>{(item.price_usd).toFixed(10)} $</Text>
                          : <Text><ConvUsdToEur value={item.price_usd}/></Text>
                      }
                    </View>
                  </Pressable>
                )
              })
          }
        </ScrollView>
      </View>
    </>
  )
}