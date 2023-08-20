import { ReactNode } from 'react'

const LayoutBasePage = ({ children }: { children: ReactNode }) => {
    return <div id="body">{children}</div>
}

export default LayoutBasePage
