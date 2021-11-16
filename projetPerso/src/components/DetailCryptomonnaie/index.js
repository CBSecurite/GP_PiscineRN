import React, { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles, Key } from "../index";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import PureChart from 'react-native-pure-chart';

async function refreshDatas (setDatas, typeMonnaie, asset_id) {
  const date = new Date();
  const dateJour = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
  const listeData = await axios(`https://rest.coinapi.io/v1/exchangerate/${asset_id}/${typeMonnaie}/history?period_id=1HRS&time_start=${dateJour}T00:00:00&time_end=${dateJour}T23:59:59&apikey=${Key()}`);
  setDatas(listeData.data);
}

export default function DetailCryptomonnaie (props) {
  const [datas, setDatas] = useState([]);
  const date = new Date();
  const dateJourFr = date.getDate() + "/" + (date.getMonth()+1) + "/" +date.getFullYear();

  useEffect( () => refreshDatas(setDatas, props.route.params.typeMonnaie, props.route.params.data.asset_id) , []);

  let minRate = null;
  for (let i=0 ; i<datas.length ; i++) {
    if(minRate === null || datas[i].rate_low < minRate) {
      minRate = datas[i].rate_low;
    }
  }

  let maxRate = null;
  for(let i=0; i<datas.length; i++) {
    if(maxRate === null || datas[i].rate_high > maxRate) {
      maxRate=datas[i].rate_high;
    }
  }

  const ConvUsdToEur = ({value}) => {
    const calc = (value / props.route.params.USDtoEUR);
    return (calc.toFixed(10) + ' €');
  }

  let valueDatas = [];
  datas.forEach(data => {
    const dateClose = new Date(data.time_open);
    const dateCloseData = dateClose.getHours()-1;
    let dataRateClose = data.rate_close;
    if(dateClose.getMinutes() === 0) {
      valueDatas.push({x: dateCloseData + 'h00', y: dataRateClose});
    }
  });

  return (
    <>
      <Pressable style={styles.blocMenu} onPress={() => props.navigation.goBack()} >
        <AntDesign name="arrowleft" size={20} color="black" />
        <Text style={{ marginLeft: '0.5rem', fontSize: '20px', fontWeight: 'bold' }}>Details</Text>
      </Pressable>
      <View style={{ flex: 1, backgroundColor: '#000000', padding: '0.5rem', marginTop: 40 }}>
        <ScrollView>
          <View style={{ backgroundColor: '#ffffff', marginBottom: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem' }}>
            <View style={{ flexDirection: "row", marginTop: '10px',}}>
              <Image style={ styles.img } source={{ uri: `https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${props.route.params.data.id_icon.replace(/-/g, '')}.png`}} />
              <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: '18px'}}>Cours {props.route.params.data.name}</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#ffffff', marginBottom: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem' }}>
            <View>
              <Text style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '0.5rem', borderBottom: '1px solid #cccccc' }}>Cout pour 1 {props.route.params.data.name}</Text>
              {
                props.route.params.typeMonnaie === 'USD'
                  ? <Text style={{ fontSize: '14px' }}>{props.route.params.data.price_usd.toFixed(10)} $</Text>
                  : <Text style={{ fontSize: '14px' }}><ConvUsdToEur value={props.route.params.data.price_usd}/></Text>
              }
            </View>
            <View style={{ marginTop: '10px', }}>
              <Text style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '0.5rem', borderBottom: '1px solid #cccccc' }}>Rating du jour</Text>
              <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                <Text style={{ fontSize: '14px' }}>Rating faible :</Text>
                <Text style={{ fontSize: '14px' }}>{minRate > 0 ? minRate.toFixed(10) : 0} {props.route.params.typeMonnaie === 'USD' ? '$' : '€'}</Text>
              </View>
              <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{ fontSize: '14px' }}>Rating fort :</Text>
                <Text style={{ fontSize: '14px' }}>{maxRate > 0 ? maxRate.toFixed(10) : 0} {props.route.params.typeMonnaie === 'USD' ? '$' : '€'}</Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: '#ffffff', marginBottom: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem' }}>
            <View>
              <Text style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '0.5rem', borderBottom: '1px solid #cccccc' }}>Evolution au {dateJourFr}</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <PureChart data={valueDatas} type='line' />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}