import { ComponentType } from 'react'

import { About, Blog, Contact, Dashboard, Example } from '../pages'

interface RouteComponentTypeProps {
  redirect?: boolean
}

interface RouteObj {
  label: string
  title: string
  description: string
  path: string
  redirect?: boolean
  RouteComponent: ComponentType<RouteComponentTypeProps>
}

export const routes: RouteObj[] = [
  {
    label: 'Dashboard',
    title: 'Dashboard',
    description:
      'Welcome to the official unofficial react-typescript-styled-system-boilerplate setup',
    path: '/',
    RouteComponent: Dashboard,
  },
  {
    label: 'Blog',
    title: 'Blog',
    description: 'Blog description',
    path: '/blog',
    RouteComponent: Blog,
  },
  {
    label: 'Contact',
    title: 'Contact',
    description: 'Contact description',
    path: '/contact',
    RouteComponent: Contact,
  },
  {
    label: 'About',
    title: 'About',
    description: 'About description',
    path: '/about',
    RouteComponent: About,
  },
  {
    label: 'Example',
    title: 'Example',
    description: 'Example description',
    path: '/example',
    RouteComponent: Example,
  },
]
