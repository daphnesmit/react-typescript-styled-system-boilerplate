import styled from 'styled-components'
import {
  border,
  BorderProps,
  ShadowProps,
  shadow,
  compose,
} from 'styled-system'

import { Box, BoxProps } from './Box'

export type CardProps = BoxProps & BorderProps & ShadowProps

export const Card = styled(Box)<CardProps>(compose(border, shadow))
