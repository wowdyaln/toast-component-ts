import { Icon, AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather'

import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'

const ICONS_BY_VARIANT: Record<string, Icon> = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

//* 特別的技巧來了！！！
// [javascript - When to use JSX.Element vs ReactNode vs ReactElement? - Stack Overflow](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement)
const IconComp = ({ icon: IconPic, size = 24 }: { icon: Icon; size?: number }) => {
  return <IconPic size={size} />
}

function Toast({
  textarea,
  variant,
  deleteToast,
}: {
  textarea: string
  variant: string
  deleteToast: () => void
}) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconComp icon={ICONS_BY_VARIANT[variant]} size={24} />
      </div>
      <p className={styles.content}>{textarea}</p>
      <button
        className={styles.closeButton}
        onClick={() => {
          deleteToast()
        }}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast
