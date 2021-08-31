import React from 'react'
import {} from 'react-native'
import { StackScreenProps } from '@Navigation/Stack/types'
import { fetchRandomUser } from '@Api/Core'

const useService = (props: StackScreenProps) => {
  const fetch = async () => {
    try {
      const data = await fetchRandomUser()
      console.log('Users', data)
    } catch (error) {
      console.log(error)
    }
  }

  fetch()

  return {}
}

export default useService
