import React, { useState } from 'react'
import { ToastType } from '../../types'

export type ToastContextType = {
  useTextarea: [string, React.Dispatch<React.SetStateAction<string>>]
  useVariant: [string, React.Dispatch<React.SetStateAction<string>>]
  useToasts: [ToastType[], React.Dispatch<React.SetStateAction<ToastType[]>>]
}

export const ToastContext = React.createContext<ToastContextType | null>(null)

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastProvider({ children }: { children: JSX.Element }) {
  const [textarea, setTextarea] = useState<string>('')
  const [variant, setVariant] = useState<string>(VARIANT_OPTIONS[0])
  const [toasts, setToasts] = useState<ToastType[]>([])

  return (
    <ToastContext.Provider
      value={{
        useTextarea: [textarea, setTextarea],
        useVariant: [variant, setVariant],
        useToasts: [toasts, setToasts],
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
