import { Icon } from '@components/atoms/Icon'
import { Box, Flex } from '@components/system'
import React from 'react'
import { Link, RouteProps } from 'react-router-dom'
import styled from 'styled-components'

interface HeaderProps {}
interface NavigationProps {
  direction: 'left' | 'right'
}

const NavigationLink = styled(Link)`
  --border-color: transparent;
  display: block;
  padding-top: 15px;
  padding-bottom: 10px;
  border-bottom: 5px solid var(--border-color);
  &.active {
    --border-color: black;
  }
`

const Navigation: React.FC<NavigationProps> = ({ direction }) => {
  const leftItems = [
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/blog',
      title: 'Blog',
    },
  ]

  const rightItems = [
    {
      href: '/example',
      title: 'Example',
    },
    {
      href: '/contact',
      title: 'Contact',
    },
  ]

  const items = direction === 'left' ? leftItems : rightItems

  return (
    <Flex as="nav">
      {items.map((item) => {
        return (
          <Box key={item.title}>
            <NavigationLink to={item.href}>
              <Box px={15} mx={10}>
                {item.title}
              </Box>
            </NavigationLink>
          </Box>
        )
      })}
    </Flex>
  )
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Flex
      as="header"
      bg="primary"
      color="black"
      px={30}
      justifyContent="center"
      alignItems="center">
      <Navigation direction="left" />
      <Box mx={50}>
        <Link to="/">
          <Box>
            <Icon icon="Logo" color="black" />
          </Box>
        </Link>
      </Box>
      <Navigation direction="right" />
    </Flex>
  )
}
