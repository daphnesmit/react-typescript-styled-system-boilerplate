import React, { FC, useContext, useMemo, useReducer } from 'react'

import { reducer } from './reducer'
import { Toast, ToastType } from './types'

interface ToastProviderProps {}

interface AddToastProps {
  type: ToastType
  content: string
  timeout?: number
}

interface ToastContextStore {
  addToast: (props: AddToastProps) => void
  removeToast: (id: number) => void
  toasts: Toast[]
}

let toastCount = 0

export const ToastContext = React.createContext({} as ToastContextStore)
export const ToastContextConsumer = ToastContext.Consumer
export const useToasts = () => useContext(ToastContext)

export const ToastProvider: FC<ToastProviderProps> = (props) => {
  const [toasts, dispatch] = useReducer(reducer, [])

  const removeToast = (id: number) => {
    dispatch({ type: 'REMOVE', id })
  }

  const addToast = ({ content, type, timeout = 3000 }: AddToastProps) => {
    const id = toastCount++
    const toast = { content, id, type }
    dispatch({ type: 'ADD', toast })

    if (timeout) {
      setTimeout(() => removeToast(id), timeout)
    }
  }

  const store: ToastContextStore = useMemo(
    () => ({
      toasts,
      addToast,
      removeToast,
    }),
    [toasts],
  )
  return <ToastContext.Provider {...props} value={store} />
}
