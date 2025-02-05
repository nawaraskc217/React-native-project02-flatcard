import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    const linkkk='https://unsplash.com/images/stock/high-resolution'

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)

    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={[styles.card,styles.elevatedCard]}>
      
            <View style={styles.headingContainer}>

            <Text style={styles.headerText}>
                
                What new in Java? </Text>
            
            </View>
             <Image source={
            
                            {
                                uri: 'https://media.digitalnomads.world/wp-content/uploads/2021/07/20115822/kathmandu-digital-nomads.jpg',
                           

                            }} style={styles.cardImage}
                            
                            />
                            <View style={styles.bodyContainer}>

                                <Text numberOfLines={5}>

                                The economy of Nepal is a developing category and is largely dependent on agriculture and remittances.[6] Until the mid-20th century Nepal was an isolated pre-industrial society, which entered the modern era in 1951 without schools, hospitals, roads, telecommunications, electric power, industry, or civil service. The country has, however, made progress toward sustainable economic growth since the 1950s. The country was opened to economic liberalization, leading to economic growth and improvement in living standards when compared to the past. 
                                </Text>
                            </View>
                            <View style={styles.footerContainer}>

                            <TouchableOpacity 
                            onPress={()=>openWebsite(linkkk)}>
                                
                                <Text style={styles.socialLinks}>
                                    Read more
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            onPress={()=>openWebsite(linkkk)}>
                                
                                <Text>
                                    Follow Me
                                </Text>
                            </TouchableOpacity>
        </View>
         </View>
    </View>
  )
}

const styles = StyleSheet.create({


    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal : 8,
        textAlign: 'center'
    },
    card: {

    },

    elevatedCard: {

    },

    headingContainer: {

    },
    headerText:{

    },

    cardImage:{
        height: 100
    },
    bodyContainer: {

    },
    footerContainer:{},
    socialLinks: {
        color: 'red'
    }

})