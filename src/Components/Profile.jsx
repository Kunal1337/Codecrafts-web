// src/Profile.js

import alanImg from '../assets/Alan_L_Hart.jpeg'

export default function Profile() {
  return (
    <img
      src={alanImg}
      alt="Alan L. Hart"
      style={{ width: '200px', borderRadius: '8px' }}
    />
  )
}