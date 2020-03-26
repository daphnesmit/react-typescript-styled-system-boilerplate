import * as iconComponents from '@components/atoms/icons'
import { ThemeGrid } from '@components/system'
import { darken } from 'polished'
import { DefaultTheme } from 'styled-components'

import { colors } from './colors'
import { grid } from './grid'

const fontSizes = {
  xxxs: 12,
  xxs: 16,
  xs: 20,
  s: 30,
  m: 40,
  l: 60,
  xl: 80,
  xxl: 100,
}

const space = {
  xxxs: 8,
  xxs: 10,
  xs: 20,
  s: 40,
  m: 60,
  l: 80,
  xl: 100,
  xxl: 120,
}

const buttonBase = {
  fontWeight: 'bold',
  border: '1px solid',
  borderColor: 'primary',
  padding: '0 20px',
  height: 50,
  borderRadius: 50,
}

export const buttons = {
  primary: {
    ...buttonBase,
    bg: 'primary',
    color: 'white',
    ['&:hover, &:focus']: {
      backgroundColor: darken(0.2, colors.primary),
    },
  },
  secondary: {
    ...buttonBase,
    color: 'black',
  },
  clear: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0',
    height: 'auto',
  },
}

const fonts = {
  primary: 'Work Sans, sans-serif',
  secondary: 'Helvetica',
}

const shadows = {
  small: '0 0 4px rgba(0, 0, 0, .125)',
  large: '0 0 24px rgba(0, 0, 0, .125)',
  outline: '0px 0px 0px 4px rgba(0, 0, 0, 0.1);',
}

export const icons = iconComponents

export type IconOption = keyof typeof icons

export interface CustomTheme {
  breakpoints: string[]
  fontSizes: typeof fontSizes
  colors: typeof colors
  space: typeof space
  fonts: typeof fonts
  shadows: typeof shadows
  buttons: typeof buttons
  outline?: string
  grid: ThemeGrid
}

export const theme: DefaultTheme = {
  breakpoints: ['40em', '52em', '64em', '80em'],
  fontSizes,
  space,
  fonts,
  shadows,
  outline: `5px auto #5E9ED6`,
  colors,
  buttons,
  grid,
}
