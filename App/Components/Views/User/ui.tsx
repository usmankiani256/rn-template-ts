import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { View } from 'react-native'
import { Text } from '@Atoms'
import { Button } from '@Molecules'

const User = (props: StackScreenProps) => {
  const { loading, success, user, setRandomID } = useService(props)
  const { container, row, button, root } = useStyles()

  if (loading) {
    return (
      <View style={container}>
        <Text w5>Fetching data...</Text>
      </View>
    )
  }

  if (!success) {
    return (
      <View style={container}>
        <Text w5>Failed to fetch</Text>
      </View>
    )
  }

  return (
    <View style={root}>
      <Text h3 w4>
        Random User:
      </Text>

      <View>
        <View style={row}>
          <Text w3>ID:</Text>
          <Text w5>{user?.id}</Text>
        </View>

        <View style={row}>
          <Text w3>Name:</Text>
          <Text w5>{user?.name}</Text>
        </View>

        <View style={row}>
          <Text w3>Username:</Text>
          <Text w5>{user?.username}</Text>
        </View>

        <View style={row}>
          <Text w3>Email:</Text>
          <Text w5>{user?.email.toLowerCase()}</Text>
        </View>

        <View style={row}>
          <Text w3>Phone</Text>
          <Text w5>{user?.phone}</Text>
        </View>
      </View>

      <Button style={button} onPress={setRandomID}>
        Get Random User
      </Button>
    </View>
  )
}

export default User
