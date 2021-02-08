import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

const Fetti = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
    />
  )
};

export default Fetti;
