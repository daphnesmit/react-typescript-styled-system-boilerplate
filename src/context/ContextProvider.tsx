import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AnnouncementProvider } from './Announcement'
import { ToastProvider } from './Toast'

interface ContextProviderProps {}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <AnnouncementProvider>
        <ToastProvider>{children}</ToastProvider>
      </AnnouncementProvider>
    </BrowserRouter>
  )
}
