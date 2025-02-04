import React from 'react'
import { SafeAreaView , ScrollView, Text} from 'react-native'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'


function App() {
  return (
    
      <SafeAreaView>

      <ScrollView>

      <FlatCard />
      <ElevatedCards/>

      </ScrollView>
    

      </SafeAreaView>
    
  )
}

export default App
