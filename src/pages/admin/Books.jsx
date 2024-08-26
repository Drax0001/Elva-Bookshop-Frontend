import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Modal from "../../components/Modals/Modal"
import ConfirmDelete from "../../components/Modals/ConfirmDelete"

const Books = () => {
    const [allBooks, setAllBooks] = useState([])
    const [openModal, setOpenModal] = useState({
        addbook: false,
        deleteBook: false
    })
    const [book, setBook] = useState({
        title: '',
        author: '',
        summary: ''
    })
    const [bookId, setBookId] = useState(null)

    const closeModal = () => {
        setOpenModal(false)
    }

    const saveBook = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/books', book)
            .then(response => {
                toast.success(response.data.message)
                // setBook(response.data.data)
                setAllBooks(prevBooks => [...prevBooks, response.data.data])
                setOpenModal(prevState => ({
                    ...prevState,
                    addbook: false
                }))
            })
            .catch(err => {
                toast.error(err.response.data.message)
            })
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setBook(prevBook => ({
            ...prevBook,
            [name]: value
        }))
    }


    useEffect(() => {
        // toast.loading('📘 Loading Books from Database')
        axios.get('http://localhost:8000/books')
            .then(response => {
                setAllBooks(response.data.data)
            })
            .catch(err => {
                toast.error(err.response.data.message);
            })
    }, [])

    const editBook = (id) => {
        // axios.put(`http://localhost:8000/books/${id}`)
        //     .then(response => setAllBooks(response.data))
        console.log(id);
    }

    const openDeleteModal = (id) => {
        // axios.delete(`http://localhost:8000/books/${id}`)
        //     .then(response => {
        //         toast.success(response.data.message);
        //         setAllBooks(response.data.data)
        //     })
        //     .catch(err => {
        //         console.log(err.message);
        //         toast.error(err.message)
        //     });
        setOpenModal(prevState => ({
            ...prevState,
            deleteBook: true
        }))
        setBookId(id)
    }
    
    const deleteBook = () => {
        axios.delete(`http://localhost:8000/books/${bookId}`)
            .then(response => {
                toast.success(response.data.message);
                setAllBooks(response.data.data)
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message)
            });
        setOpenModal(prevState => ({
            ...prevState,
            deleteBook: false
        }))
    }

    const cancelDelete = () => {
        setOpenModal(prevState => ({
            ...prevState,
            deleteBook: false
        }))
    }

    const openBookCreate = () => {
        setOpenModal(prevState => ({
            ...prevState,
            addbook: true
        }))
    }

    const bookEl = allBooks.map(book => {
        return (
            <div key={book._id} className="border-2 border-tertiaryColor rounded flex flex-col px-4 py-2">
                <Link to={`${book._id}`} className="block">
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.summary}</p>
                </Link>
                <div className="flex w-full justify-end gap-x-5 bg-primaryColor py-1 px-3 rounded mt-4">
                    <img src="/eye-outline.svg" alt="view more" className="h-5 cursor-pointer" title="View Book"/>
                    <img onClick={()=> editBook(book._id)} src="/pencil-outline.svg" alt="edit" className="h-5 cursor-pointer" title="Edit Book"/>
                    <img onClick={()=> openDeleteModal(book._id)}  src="/trash-bin-outline.svg" alt="delete" className="h-5 cursor-pointer" title="Delete Book"/>
                </div>
            </div>
        )
    })

    return (
        <div className="relative">
            {openModal.deleteBook && <ConfirmDelete deleteBook={deleteBook} cancelDelete={cancelDelete} />}
            { openModal.addbook && <Modal saveBook={saveBook} handleChange={handleChange} title={book.title} author={book.author} summary={book.summary} closeModal={closeModal} />}
            <div className="flex w-full justify-between items-center py-4">
                <h1 className="text-2xl font-heading">Books</h1>
                <div className="bg-tertiaryColor p-1 rounded">
                    <img onClick={openBookCreate} src="/create-outline.svg" alt="add a book" className=" h-10 cursor-pointer" title="Create New book"/>
                </div>
                
            </div>
            
            <div className="flex gap-x-3">
                {bookEl}
            </div>
        </div>
    )
}

export default Books