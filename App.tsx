import React from 'react'
import { SafeAreaView , ScrollView, Text} from 'react-native'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'


function App() {
  return (
    
      <SafeAreaView >

      <ScrollView scrollEnabled={true}>

      <FlatCard />
      <ElevatedCards/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>

      </ScrollView>
    

      </SafeAreaView>
    
  )
}

export default App
