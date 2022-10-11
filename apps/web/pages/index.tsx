import { useState } from 'react'
import { Button } from 'ui'

export default function Web() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Web</h1>

      <p>Value: {count}</p>

      <Button>
        The source code for this button lives inside a repo within a monorepo
        The source 
      </Button>
    </div>
  )
}
