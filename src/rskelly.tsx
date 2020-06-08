import React from 'react'
import ContentLoader from 'react-content-loader'

const Blocks = {
  button:
  {
    element: 'rect',
    width: 100,
    height: 40,
    rx: 10,
    ry: 10
  },
  header:
  {
    element: 'rect',
    width: 200,
    height: 20,
    rx: 10,
    ry: 10
  },
  text:
  {
    element: 'rect',
    width: 400,
    height: 20,
    rx: 10,
    ry: 10
  }
}

export const RSkelly = ({ type: skellyType }) => {
  const gap = 20

  const verticals = skellyType.split(', ')
  const blocks = verticals.map(v => {
    const [blockType, count] = v.split('@') as [string, number]
    if (count) {
      return new Array(parseInt(count)).fill(Blocks[blockType])
    } else {
      return [Blocks[blockType]]
    }
  })

  let x, y, mHeight
  x = y = mHeight = 0

  const GetSkellyWithIt = <React.Fragment>
    {
      blocks.map(row => {
        y += (gap + mHeight)

        x = mHeight = 0

        return <React.Fragment key={y}>
          {
            row.map(b => {
              const { element, ...props } = b

              x += x > 0 ? gap + props.width : gap
              mHeight = props.height > mHeight ? props.height : mHeight



              const renderProps = { ...props, x, y, key: `${x}-${y}` }

              switch (element) {
                case 'rect':
                  return <rect {...renderProps} />
                case 'circle':
                  return <circle {...renderProps} />
              }
            })
          }
        </React.Fragment>
      })
    }
  </React.Fragment>


  return <ContentLoader
    width={600}
    height={800}
    viewBox="0 0 600 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {GetSkellyWithIt}
  </ContentLoader>
}