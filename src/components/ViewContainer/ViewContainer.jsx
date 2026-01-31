export const ViewContainer = ({ children, bgColor = false }) => {
    return (
        <div
            className={`w-full min-h-screen ${bgColor ? 'bg-purple-100' : ''}`}
        >
            <div
                className="
        flex
        flex-col
        md:flex-row
        gap-12
        justify-center
        items-center
        md:items-start
        w-5/6
        max-w-6xl
        mx-auto
        py-16
      "
            >
                {children}
            </div>
        </div>
    )
}
