import { Footer, Header } from '@components/organisms'
import { Box, Contain, Flex } from '@components/system'
import React from 'react'

interface BaseLayoutProps {}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Flex flexDirection="column" height="100vh">
      <Header />
      <Box as="main" flex={'1 0 auto'} display="block">
        <Contain>{children}</Contain>
      </Box>
      <Footer />
    </Flex>
  )
}
