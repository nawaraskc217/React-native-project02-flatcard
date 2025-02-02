import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const FlatCard = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Flat Card</Text>
    //   <View style={styles.cardContainer}>
    //     <View style={[styles.card, { backgroundColor: '#FF6F61' }]}>
    //       <Text style={styles.cardText}>Card 1</Text>
    //     </View>
    //     <View style={[styles.card, { backgroundColor: '#6B8E23' }]}>
    //       <Text style={styles.cardText}>Card 2</Text>
    //     </View>
    //     <View style={[styles.card, { backgroundColor: '#4682B4' }]}>
    //       <Text style={styles.cardText}>Card 3</Text>
    //     </View>
    //   </View>
    // </View>

    <SafeAreaView>
      <Text>OUUUUUGGGG</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FlatCard;
