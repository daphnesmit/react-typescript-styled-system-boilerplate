import { NotFound } from '@components/organisms'
import { useAnnouncement } from '@context/Announcement'
import { routes } from '@utils/routes'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, RouteProps, Switch, useLocation } from 'react-router-dom'

export const Router = () => {
  const { addAnnouncement } = useAnnouncement()
  const location = useLocation()

  useEffect(() => {
    const titleObj = routes.find((route) => route.path === location.pathname)

    addAnnouncement({
      message: `Navigated to: ${titleObj?.title || 'Dashboard'}`,
    })
  }, [location])

  const RouteType: React.FC<RouteProps> = ({ children, ...rest }) => {
    return <Route {...rest}>{children}</Route>
  }
  return (
    <>
      <Switch>
        {routes &&
          routes.map((route) => {
            const { title, path, description, RouteComponent, redirect, ...rest } = route

            return (
              <RouteType exact path={path} key={title} {...rest}>
                <Helmet>
                  <title>{title}</title>
                  <meta name="description" content={description} />
                </Helmet>

                <RouteComponent redirect={!!redirect} />
              </RouteType>
            )
          })}

        <Route path="*">
          <Helmet>
            <title>Pagina niet gevonden</title>
            <meta name="description" content="404" />
          </Helmet>
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}
