import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { View } from 'react-native'
import { Text } from '@Atoms'
import { Button } from '@Molecules'

const User = (props: StackScreenProps) => {
  const { loading, success, user, setRandomID } = useService(props)
  const { container, spacing, row } = useStyles()

  if (loading) {
    return (
      <View style={container}>
        <Text>Fetching data...</Text>
      </View>
    )
  }

  if (!success) {
    return (
      <View style={container}>
        <Text>Failed to fetch</Text>
      </View>
    )
  }

  return (
    <View style={container}>
      <Text>Random User:</Text>

      <View>
        <View style={row}>
          <Text>ID:</Text>
          <Text>{user?.id}</Text>
        </View>

        <View style={spacing} />

        <View style={row}>
          <Text>Name:</Text>
          <Text>{user?.name}</Text>
        </View>

        <View style={spacing} />

        <View style={row}>
          <Text>Username:</Text>
          <Text>{user?.username}</Text>
        </View>

        <View style={spacing} />

        <View style={row}>
          <Text>Email:</Text>
          <Text>{user?.email.toLowerCase()}</Text>
        </View>

        <View style={spacing} />

        <View style={row}>
          <Text>Phone</Text>
          <Text>{user?.phone}</Text>
        </View>
      </View>

      <Button onPress={setRandomID}>Get Random User</Button>
    </View>
  )
}

export default User
