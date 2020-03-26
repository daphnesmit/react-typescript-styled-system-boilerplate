export type ToastType = 'warning' | 'error' | 'success'
export interface Toast {
  content: string
  id: number
  type: ToastType
  isModalToast?: boolean
}
