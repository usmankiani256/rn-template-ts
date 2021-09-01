import AsyncStorage from '@react-native-community/async-storage'
import Item from './items'

export type AsyncItem = string

// TODO: Shift it back to class and remove it as a custom hook
const useAsync = () => {
  async function setItem(item: AsyncItem, data: JSON) {
    let parsedData = JSON.stringify(data)

    await AsyncStorage.setItem(item, parsedData)
    console.debug(`Async:\nItem "${item}" set to ${data}`)
  }

  async function getItem(item: AsyncItem) {
    const data = await AsyncStorage.getItem(item)
    return data ? JSON.parse(data) : null
  }

  async function removeItem(item: AsyncItem) {
    return await AsyncStorage.removeItem(item)
  }

  return { getItem, setItem, removeItem, Item }
}

export default useAsync
