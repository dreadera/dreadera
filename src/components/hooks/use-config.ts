import React from 'react'

interface Props {}

const useConfig = (props: Props) => {
    return { development: true }
}

export { useConfig }
export type { Props as ConfigProps }
