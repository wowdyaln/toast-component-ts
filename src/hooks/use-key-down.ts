import { useEffect } from "react"

const useKeyDown = (keyname: string, callback: (event: KeyboardEvent) => void) => {
  useEffect(() => {

    const keyPress = (ev: KeyboardEvent) => {
      if (ev.key === keyname) {
        console.warn(`${keyname} press`)
        callback(ev)
      }
    }

    window.addEventListener('keydown', keyPress, false)
    return () => { window.removeEventListener('keydown', keyPress, false) }
  }, [callback, keyname])
}

export default useKeyDown