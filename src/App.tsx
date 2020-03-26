import '@utils/detectTouch'
import '@utils/detectKeyboardFocus'

import { Router } from '@components/organisms/Router'
import { BaseLayout } from '@components/templates/BaseLayout'
import { ContextProvider } from '@context/ContextProvider'
import { GlobalStyle } from '@theme/GlobalStyle'
import { theme } from '@theme/theme'
import React, { FC } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <ContextProvider>
          <>
            <GlobalStyle />
            <BaseLayout>
              <Router/>
            </BaseLayout>
          </>
        </ContextProvider>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default hot(App)
