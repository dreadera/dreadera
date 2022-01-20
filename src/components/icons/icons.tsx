import React, { useMemo } from 'react'
import { Github } from './github'
import { Twitter } from './twitter'
import { Linkedin } from './linkedin'

import type { Icon } from '@dreadera/types'

interface Props extends Icon {
    type: 'github' | 'twitter' | 'linkedin'
}

const Icons: React.FC<Props> = ({ type, size }) => {
    const render = useMemo((): JSX.Element => {
        switch (type) {
            case 'github':
                return <Github size={size} />
            case 'linkedin':
                return <Linkedin size={size} />
            case 'twitter':
                return <Twitter size={size} />
        }
    }, [type, size])

    return render
}

export { Icons }
export type { Props as IconsProps }
