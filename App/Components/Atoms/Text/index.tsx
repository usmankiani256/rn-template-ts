import React from 'react'
import { Text as RNText } from 'react-native'

interface TextProps {
  children: React.ReactNode
}

const Text = (props: TextProps) => {
  const { children } = props

  const textStyle = {
    fontSize: 18,
  }

  return <RNText style={textStyle}>{children}</RNText>
}

export default Text
