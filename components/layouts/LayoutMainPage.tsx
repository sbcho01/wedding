import { ReactNode } from 'react'
import LayoutBasePage from './LayoutBasePage'

const LayoutMainPage = ({ children }: { children: ReactNode }) => {
    return (
        <LayoutBasePage>
            <div className="flex flex-col min-h-screen">
                <header></header>
                <main>{children}</main>
                <footer className="mt-auto">{/* <Footer /> */}</footer>
            </div>
        </LayoutBasePage>
    )
}

export default LayoutMainPage
