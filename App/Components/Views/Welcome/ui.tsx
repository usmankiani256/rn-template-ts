import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { StatusBar, View } from 'react-native'
import { Text } from '@Atoms'
import { Button } from '@Molecules'
import { Colors } from '@Theme'

const Welcome = (props: StackScreenProps) => {
  const { onContinue } = useService(props)
  const { container } = useStyles()

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />
      <View style={container}>
        <Text h3 center>
          Welcome to the React Native Template TS
        </Text>
        <Button onPress={onContinue}>Continue</Button>
      </View>
    </>
  )
}

export default Welcome
