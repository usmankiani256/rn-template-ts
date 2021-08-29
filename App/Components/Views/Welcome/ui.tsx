import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { View } from 'react-native'
import { Text } from '@Atoms'

const Welcome = (props: StackScreenProps) => {
  const {} = useService(props)
  const { container } = useStyles()

  return (
    <View style={container}>
      <Text>Hello, world!</Text>
    </View>
  )
}

export default Welcome
