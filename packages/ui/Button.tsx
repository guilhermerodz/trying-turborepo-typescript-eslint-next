import { HTMLProps } from 'react'

type IntrinsicButton = JSX.IntrinsicElements['button']

interface ButtonProps extends IntrinsicButton {
  style?: React.HTMLAttributes<HTMLButtonElement>['style']
}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} style={props.style}>
      {props.children}
    </button>
  )
}
