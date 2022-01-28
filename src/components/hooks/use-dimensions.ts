import React, { useState, useEffect } from 'react'

interface Props {}

interface Dimensions {
    height: number
    width: number
}

const useDimensions = (props: Props): Dimensions => {
    const [dimensions, setDimensions] = useState<Dimensions>({
        height: undefined,
        width: undefined
    })

    function performResize(): void {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', performResize)
        performResize()

        return () => window.removeEventListener('resize', performResize)
    }, [])

    return dimensions
}

export { useDimensions }
export type { Props as DimensionsHookprops, Dimensions as DimensionsProps }
