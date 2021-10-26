import React from 'react'

const PageWrapper = ({ children }) => {
    return(
        <div className="fixed top-0 left-0 w-full h-full">
            {children}
        </div>
    )
}

export { PageWrapper }