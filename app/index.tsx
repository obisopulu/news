import { View, Text, Pressable } from "react-native"
import { Link, router } from "expo-router"

const HomePage = () => {
  return (
    <View>
        <Text>Home Page</Text>
        <Link href='/users'>Users</Link>
        <Link href='/users/1'>User with ID</Link>
        <Pressable onPress={() => router.push({
          pathname: '/users/[id]',
          params: { id: 2 }
        })}>
          <Text>Go to User 2</Text>
        </Pressable>
    </View>
  )
}

export default HomePage