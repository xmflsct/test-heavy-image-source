import { Image } from 'expo-image'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

export default function App() {
  const [randomKey, setRandomKey] = useState(Math.random())
  const [uri, setUri] = useState('https://apng.onevcat.com/assets/elephant.png')

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
      }}
    >
      <Text>Demo expo-image failed to cache APNG properly</Text>
      <View key={randomKey} style={{ flexDirection: 'row', gap: 8 }}>
        {Array.from({ length: 4 }, (_, a) => (
          <View key={a} style={{ gap: 4 }}>
            {Array.from({ length: 15 }, (_, b) => (
              <Image
                key={b}
                source={{
                  uri: 'https://media.cmx.edu.kg/custom_emojis/images/000/142/951/original/f313d89547511f48.png'
                }}
                style={{ width: 32, height: 32, backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                cachePolicy='disk'
              />
            ))}
          </View>
        ))}

        {Array.from({ length: 4 }, (_, a) => (
          <View key={a} style={{ gap: 4 }}>
            {Array.from({ length: 15 }, (_, b) => (
              <Image
                key={b}
                source={{ uri }}
                style={{ width: 32, height: 32, backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                cachePolicy='disk'
              />
            ))}
          </View>
        ))}
      </View>

      <View style={{ flexDirection: 'row', gap: 16 }}>
        <Pressable
          style={{ borderColor: 'black', borderWidth: 1, padding: 8 }}
          onPress={() => setRandomKey(Math.random())}
        >
          <Text>Reload</Text>
        </Pressable>

        <Pressable
          style={{ borderColor: 'black', borderWidth: 1, padding: 8 }}
          onPress={() => {
            uri.includes('unsplash')
              ? setUri('https://apng.onevcat.com/assets/elephant.png')
              : setUri(
                  'https://unsplash.com/photos/hfV9tSBEvlU/download?ixid=MnwxMjA3fDB8MXxhbGx8NHx8fHx8fDJ8fDE2ODE0MjMyMjQ'
                )
            setRandomKey(Math.random())
          }}
        >
          <Text>Change source</Text>
        </Pressable>
      </View>
    </View>
  )
}
