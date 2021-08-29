import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useStyles from './styles'

import { WelcomeScreen } from '@Views'

const Stack = createNativeStackNavigator()

const StackNavigator: React.FC = () => {
  const { headerHidden } = useStyles()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          {...headerHidden}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
