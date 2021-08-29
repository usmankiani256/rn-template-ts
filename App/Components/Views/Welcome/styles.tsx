import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingVertical: '33%',
    },
  })

export default useStyles
