import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { View } from 'react-native'
import { Text } from '@Atoms'
import { Button } from '@Molecules'

const Welcome = (props: StackScreenProps) => {
  const { onContinue } = useService(props)
  const { container } = useStyles()

  return (
    <View style={container}>
      <Text>Welcome to the React Native Template TS</Text>
      <Button onPress={onContinue}>Continue</Button>
    </View>
  )
}

export default Welcome
