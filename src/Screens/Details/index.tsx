import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import api from '../../service/api';
import {IDiscount, IStore} from '../../Types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Details = ({route, navigation}: any) => {
  const [storeValue, setStoreValue] = useState<number>(0);
  const [storeData, setStoreData] = useState<IStore>({} as IStore);
  const [discount, setDiscount] = useState<IDiscount[]>([]);

  useEffect(() => {
    const {id} = route.params;
    setStoreValue(id);
  }, [route.params]);

  useEffect(() => {
    api
      .get(`stores/${discount[0]?.store}`)
      .then(response => {
        console.log('Store', response.data);
        setStoreData(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [discount, storeValue]);

  useEffect(() => {
    api
      .get(`discounts?store=${storeValue}`)
      .then(response => {
        console.log('data:', response.data);
        setDiscount(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [storeValue]);

  const dateParse = (date: string) => {
    return Intl.DateTimeFormat('pt-BR').format(new Date(date));
  };

  return (
    <View style={styles.default}>
      {discount.map((item_discount, index) => {
        return (
          <View key={index} style={styles.default}>
            <Text style={styles.title}>{storeData.label}</Text>
            <Image source={require('../../Assets/Images/desconto-exit.png')} />
            <Text style={styles.discountableLabel}>
              Desconto de {item_discount.value}%
            </Text>
            <Text style={styles.expireDate}>
              Expira em {dateParse(item_discount.expires_in)}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    color: '#d64c2d',
  },
  discountableLabel: {
    fontWeight: '400',
    fontSize: 20,
    color: 'red',
    marginVertical: 10,
  },
  expireDate: {
    color: '#423a38',
  },
});

export default Details;
