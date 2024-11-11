const Loading = () => {
    return ( 
        <>
            <button type="button" className="bg-[#4b55631a] text-white px-4 py-2 rounded flex items-center" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>

                </svg>
                Loading...
            </button>
        </>
     );
}
 
export default Loading;