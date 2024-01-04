'use client'
import * as React from 'react'
// const StyledButton =

const onClick = (e: React.MouseEvent) => alert('버튼이유')

export const Button = () => {
  return (
    <button className="text-3xl font-bold underline" onClick={onClick}>
      버튼 눌러보3
    </button>
  )
}
