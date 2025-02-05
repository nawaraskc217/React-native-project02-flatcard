import React from 'react'
import { SafeAreaView , ScrollView, Text} from 'react-native'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'


function App() {
  return (
    
      <SafeAreaView>

      <ScrollView>

      <FlatCard />
      <ElevatedCards/>
      <FancyCard/>

      </ScrollView>
    

      </SafeAreaView>
    
  )
}

export default App
