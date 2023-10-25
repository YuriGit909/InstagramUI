import {View, ScrollView, StyleSheet} from 'react-native'
import { Header } from './src/components/Header'
import { Storys } from './src/components/Storys'
import { YourStory } from './src/components/YourStory'
import { Post } from './src/components/Post'
import { Card } from './src/components/Card'
import { StatusBar } from 'expo-status-bar'
import { MoreCard } from './src/components/MoreCard'

export default function App(){
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor='white'/>
      <View>
        <Header />
      </View>
      <ScrollView style={styles.story} horizontal showsHorizontalScrollIndicator={false}>
          <YourStory />
          <Storys/>
          <Storys/>
          <Storys/>
          <Storys/>
      </ScrollView>
        <Post/>
      <ScrollView style={styles.cards} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.interCards}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <MoreCard/>
        </View>
      </ScrollView>
        <Post/>
        <Post/>
        <Post/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  story: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 5,
    marginBottom: 10
  },

  cards: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    paddingVertical: 16,
  },

  interCards: {
    paddingLeft: 16, 
    flexDirection: 'row'
  },
})