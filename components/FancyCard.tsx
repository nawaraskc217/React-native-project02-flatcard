import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card,styles.cardElevated]}>

            <Image source={

                {
                    uri: 'https://media.digitalnomads.world/wp-content/uploads/2021/07/20115822/kathmandu-digital-nomads.jpg'
               
                }} style={styles.cardImage}
                
                />
            
                  <View style={styles.cardBody}>
                    
                    <Text style={styles.cardTitle}>Nepal</Text>
                    <Text style={styles.cardLabel}>Kathmandu</Text>
                    <Text style={styles.cardDesc}>Kathmandu, officially the Kathmandu Metropolitan City, is the seat of federal government and the most populous city in Nepal. As of the 2021 Nepal censu</Text>
                    <Text style={styles.cardFooter}>12 min ago</Text>
                     </View>    
             

        </View>
    </View>
  )
}


const styles = StyleSheet.create({

    headingText : {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal : 8,
      textAlign: 'center'
    },
    card: {

    },
    cardElevated : {

    },
    cardImage : {
        height: 150
    },
    cardBody: {

    },
    cardTitle: {

    },
    cardLabel: {

    },
    cardDesc: {

    },
    cardFooter: {

    }
})

