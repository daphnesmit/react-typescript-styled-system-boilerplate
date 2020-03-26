import { number, select, withKnobs } from '@storybook/addon-knobs'
import { IconOption, icons } from '@theme/theme'
import React from 'react'

import { Icon } from './Icon'

export default { title: 'Atoms|Icon', component: Icon, decorators: [withKnobs] }

export const example = () => (
  <Icon icon={select('Icon', Object.keys(icons), 'Logo') as IconOption} color="black" size={number('Size', 50)}>
    Go to a page
  </Icon>
)
