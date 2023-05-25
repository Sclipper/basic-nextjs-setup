'use client'

import { useColorMode } from '@chakra-ui/react'

export default function Home() {
  const { toggleColorMode } = useColorMode()
  return (
    <button type="button" onClick={toggleColorMode}>
      Toggle color
    </button>
  )
}
