import React from 'react'
import { Text as RNText } from 'react-native'

interface TextProps {
  children: React.ReactNode
}

const Text = (props: TextProps) => {
  const { children } = props

  return <RNText>{children}</RNText>
}

export default Text
