import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useStyles from './styles'
import { RootStackParamList } from './types'
import { WelcomeScreen, UserScreen } from '@Views'

const Stack = createNativeStackNavigator<RootStackParamList>()

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
        <Stack.Screen name="User" component={UserScreen} {...headerHidden} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
