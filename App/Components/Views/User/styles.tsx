import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    spacing: {
      height: height * 0.033,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width * 0.8,
    },
  })

export default useStyles
