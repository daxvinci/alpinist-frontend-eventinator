const Button = ({name,isDisabled}) => {
    return ( 
        <>
    <button type="submit" disabled={isDisabled} className="bg-blue-600 w-[100px] self-end rounded-3xl p-2">{name}</button>
        </>
     );
}
 
export default Button;