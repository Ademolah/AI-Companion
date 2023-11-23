//it is important to put this layout in the auth folder outside the rest of the folders so that the configuration can affect the routes inside it

const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex items-center justify-center h-full">
            {children}
        </div>
    )
}

export default Layout





