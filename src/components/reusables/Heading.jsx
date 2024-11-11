const Heading = ({name, filterName}) => {
    return ( 
        <>
            <h1 className="text-4xl md:block flex justify-center font-semibold text-gray-800 dark:text-white tracking-tight mb-6 transition-all duration-300 ease-in-out hover:text-blue-600 hover:scale-105">
                {name} {filterName && <span className="text-sm font-normal text-blue-200">Filter- {filterName}</span>}
            </h1>
        </>
     );
}
 
export default Heading;