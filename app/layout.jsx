import { View, Text } from "react-native"
import { Link, useLocalSearchParams, Stack } from "expo-router"

const RootLayout = () => {

  return 
    <Stack>
        <Stack.Screen 
        name='index'
        options={{
            headerTitle: 'Home',
            headerStyle:{
                backgroundColor: 'blue'
            }
        }}
        />
        <Stack.Screen name='users' />
        <Stack.Screen name='users/[id]' />
    </Stack>
}

export default RootLayout