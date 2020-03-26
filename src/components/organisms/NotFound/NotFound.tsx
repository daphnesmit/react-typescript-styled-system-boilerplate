import { Box, Column, Contain, Flex, Heading, Row, Text } from '@components/system'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const NotFound: FC = () => {
  return (
    <Flex flexDirection="column" height="100%">
      <Box my="auto">
        <Contain>
          <Row>
            <Column col={[12, 10, 8]} inset={[null, 1, 2]}>
              <Flex alignItems="center" justifyContent="center" flexDirection="column">
                <Heading as="h1" mb="s">
                  Pagina niet gevonden
                </Heading>
                <Text textAlign="center" mb="m">
                  404
                </Text>
                <Link to="/">Ga naar dashboard</Link>
              </Flex>
            </Column>
          </Row>
        </Contain>
      </Box>
    </Flex>
  )
}
