import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: '5%',
    },
    image: {
      height: 200,
      width: width * 0.8,
      marginTop: 70,
      marginBottom: 50,
      alignSelf: 'center',
    },
    button: {
      marginTop: 100,
      paddingHorizontal: 25,
    },
  })

export default useStyles
