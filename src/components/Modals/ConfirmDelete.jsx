
const ConfirmDelete = ({ deleteBook, cancelDelete}) => {
    return (
        <div className=" absolute pt-48 w-full flex justify-center items-center">
            <div className="flex bg-neutral border-2 shadow-md shadow-neutral border-tertiaryColor rounded flex-col mx-auto w-72 max-w-[90%] px-4 py-6">
                <div>
                    <h1>Do you really want to delete This Book?</h1>
                </div>
                <div className="flex justify-end mt-4 gap-x-4">
                    <button onClick={cancelDelete} className="btn bg-[#dd2222]">No</button>
                    <button onClick={deleteBook} className="btn bg-[#22dd22]">Yes</button>
                </div>
            </div>
        </div>
        
    )
}

export default ConfirmDelete