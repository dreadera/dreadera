import React from 'react'

interface Props {}

interface Theme {
    main: string
}

const useTheme = (props: Props): Theme => {
    return { main: '#fff' }
}

export { useTheme }
export type { Props as ThemeHookProps, Theme as ThemeProps }
