import React from 'react'

interface Props {}

const useConfig = (props: Props) => {
    return {
        development: true,
        construction: process.env.IS_UNDER_CONSTRUCTION,
        redirect: undefined
    }
}

export { useConfig }
export type { Props as ConfigProps }
