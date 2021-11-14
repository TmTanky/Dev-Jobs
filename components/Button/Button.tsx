import React from 'react'
import { ButtonBase } from './Button.styles'

type ButtonProps = {
  name: string
  bgColor?: string
  borderRadius?: string
  fontSize?: string
  color?: string
}

export const Button = ({
  name,
  bgColor,
  borderRadius,
  fontSize,
  color
}: ButtonProps) => {
  return (
    <ButtonBase
      style={{
        backgroundColor: bgColor,
        borderRadius,
        fontSize,
        color 
      }}
    >
      {name}
    </ButtonBase>
  )
}
