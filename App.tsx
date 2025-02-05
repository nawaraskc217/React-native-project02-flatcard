import React from 'react'
import { SafeAreaView , ScrollView, Text} from 'react-native'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'


function App() {
  return (
    
      <SafeAreaView>

      <ScrollView>

      <FlatCard />
      <ElevatedCards/>
      <FancyCard/>
      <ActionCard/>

      </ScrollView>
    

      </SafeAreaView>
    
  )
}

export default App
