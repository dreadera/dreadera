import React from 'react'

interface Props {}

interface Config {
    development: boolean
    construction: boolean
    redirect?: string
}

const useConfig = (props: Props): Config => {
    return {
        development: true,
        construction: !!process.env.IS_UNDER_CONSTRUCTION,
        redirect: undefined
    }
}

export { useConfig }
export type { Props as ConfigHookProps, Config as ConfigProps }
