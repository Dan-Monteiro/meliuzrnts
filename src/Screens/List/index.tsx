import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import api from '../../service/api';
import {IStore, IPosition} from '../../Types';

const List: React.FC = () => {
  const [list, setList] = useState<IStore[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    api
      .get<IStore[]>('stores')
      .then(response => {
        console.log(response);
        setList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [position, setPosition] = useState<IPosition>({
    latitude: -23.673081449999998,
    longitude: -46.677047406643354,
    latitudeDelta: 0.0911,
    longitudeDelta: 0.0411,
  });

  const handlePosition = () => {
    setPosition({
      latitude: -23.673081449999998,
      longitude: -46.677047406643354,
      latitudeDelta: 0.0911,
      longitudeDelta: 0.0411,
    });
  };

  const handleNameNavigation = (route: string) => route as never;

  const handleOnPressLogo = (id: number) => {
    navigation.navigate(handleNameNavigation('Details'), {id} as never);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={position}>
        {list.map(store => (
          <Marker
            key={store.id}
            coordinate={{
              latitude: Number(store.localization.lat),
              longitude: Number(store.localization.lng),
            }}>
            <Callout onPress={() => handleOnPressLogo(store.id)}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{height: 50, width: 80}}
                  source={{uri: store.logo}}
                  resizeMode="contain"
                />
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});

export default List;
