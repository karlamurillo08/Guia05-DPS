import React from 'react';
import { ScrollView, Image, Text, StyleSheet, View } from 'react-native';
import { Card, Header } from 'react-native-elements';

const dishes = [
  {
    name: 'Pupusas',
    calories: '250 kcal',
    image: require('./src/img/pupusas.jpg'), // Asegúrate de que la ruta sea correcta
  },
  {
    name: 'Tamales',
    calories: '300 kcal',
    image: require('./src/img/tamales.jpg'),
  },
  {
    name: 'Yuca Frita',
    calories: '200 kcal',
    image: require('./src/img/yuca.jpg'),
  },
  {
  name: 'Torrejas',
    calories: '350 kcal',
    image: require('./src/img/torrejas.jpg'), // Asegúrate de que la ruta sea correcta
  },
  {
    name: 'Enchiladas',
    calories: '250 kcal',
    image: require('./src/img/enchiladas.jpg'),
  },
  {
    name: 'Atol de chilate',
    calories: '150 kcal',
    image: require('./src/img/chilate.jpg'),
  },
];

const App = () => {
  return (

    <View style={styles.container}>
    <Header
      centerComponent={{ text: 'Comidas Típicas Salvadoreñas', style: styles.headerText }}
    />

<ScrollView>
        {dishes.map((dish, index) => (
          <Card key={index}>
            <View style={styles.row}>
              <Image source={dish.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{dish.name}</Text>
                <Text style={styles.calories}>{dish.calories}</Text>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  calories: {
    marginTop: 5,
    fontSize: 16,
    color: '#444',
  },
});

export default App;

