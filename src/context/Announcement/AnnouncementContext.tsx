import React, { FC, useMemo, useReducer } from 'react'

import { Announcement, reducer } from './reducer'

interface AnnouncementContextStore {
  announcements: Announcement[]
  addAnnouncement: ({}: Announcement) => void
}

let announcementCount = 0

export const AnnouncementContext = React.createContext({} as AnnouncementContextStore)

export function useAnnouncement() {
  const context = React.useContext(AnnouncementContext)
  if (context === undefined) {
    throw new Error(`useAnnouncement must be used within a AnnouncementProvider`)
  }
  return context
}

export const AnnouncementProvider: FC = ({ children }) => {
  const [announcements, dispatch] = useReducer(reducer, [])

  const addAnnouncement = ({ message, timeOut = 500 }: Announcement) => {
    const announcementId = announcementCount++

    const announcement = {
      message,
      id: announcementId,
    }

    dispatch({ type: 'ADD', data: announcement })

    if (timeOut) {
      setTimeout(() => removeAnnouncement(announcementId), timeOut)
    }
  }

  const removeAnnouncement = (id: number) => {
    dispatch({ type: 'REMOVE', id: id })
  }

  const store: AnnouncementContextStore = useMemo(
    () => ({
      announcements,
      addAnnouncement,
    }),
    [announcements],
  )

  return <AnnouncementContext.Provider value={store}>{children}</AnnouncementContext.Provider>
}
