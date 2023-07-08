'use client'

import * as React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: blue;
`

const onClick = (e: React.MouseEvent) => alert('버튼이유')

export const Button = () => {
  return <StyledButton onClick={onClick}>버튼 눌러보3</StyledButton>
}
