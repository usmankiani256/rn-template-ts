import React from 'react'
import { RootNavigator } from '@Navigation'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@Redux'

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <RootNavigator />
    </ReduxProvider>
  )
}

export default App
