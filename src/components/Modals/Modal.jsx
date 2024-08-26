// import axios from "axios"
// import { useState } from "react"
// import { toast } from "react-hot-toast"

const Modal = ({ saveBook, handleChange, closeModal, title, author, summary }) => {
    // const [book, setBook] = useState({
    //     title: '',
    //     author: '',
    //     summary: ''
    // })

    // const saveBook = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:8000/books', book)
    //         .then(response => {
    //             toast.success(response.data.message)
    //             // setBook(response.data.data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
        
    // }

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setBook(prevBook => ({
    //         ...prevBook,
    //         [name]: value
    //     }))
    // }

    return (
        <div className="absolute w-full flex justify-center items-center">
            <div className="relative shadow-md bg-primaryColor shadow-primaryColor rounded px-8 py-12 z-10 w-[50rem] max-w-[90%] text-neutral">
            <img src="/close-outline.svg" alt="" className="h-8 absolute top-2 right-2 cursor-pointer" onClick={closeModal}/>
                <h1 className="text-center text-2xl font-heading">Add a book</h1>
                <form className="flex flex-col">
                    <label className="font-bold" htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="input-field" value={title} onChange={e=> handleChange(e)} />

                    <label className="font-bold" htmlFor="author">Author</label>
                    <input type="text" name="author" id="author"  className="input-field" value={author} onChange={e=> handleChange(e)}  />

                    <label className="font-bold" htmlFor="summary">Summary</label>
                    <textarea className="input-field" name="summary" id="summary" cols="30" rows="5" value={summary} onChange={e=> handleChange(e)} />

                    <button onClick={e=>saveBook(e)} className="btn">Create Book</button>
                </form>
            </div>
            
        </div>
    )
}

export default Modal