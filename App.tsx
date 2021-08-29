import React from 'react'
import { RootNavigator } from '@Navigation'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@Redux'

import { ApolloProvider } from '@apollo/client'
import { client } from '@Api'

import { Provider as PaperProvider } from 'react-native-paper'
import { theme } from '@Theme'

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <PaperProvider theme={theme}>
          <RootNavigator />
        </PaperProvider>
      </ApolloProvider>
    </ReduxProvider>
  )
}

export default App
