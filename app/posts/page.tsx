import React from 'react'

export default function PostsPage() {
  const title = '애국가'
  const contant = '동해물과 백두산이...'
  return (
    <div>
      <h1
        className="text-3xl font-bold
      text-red-700"
      >
        {title}
      </h1>
      <p>동해물과 백두산이....</p>
      <p>Content: {contant}</p>
    </div>
  )
}
