
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CatalogPage = () => {
    const [catalogBooks, setCatalogBooks] = useState([])
    const [booksCount, setBooksCount] = useState(0)
    const [query, setQuery] = useState('')
    
    useEffect(() =>{
        axios.get('http://localhost:8000/books')
            .then((response) => {
                setCatalogBooks(response.data.data)
                setBooksCount(response.data.booksCount)
            })
            .catch((error) => console.log(error))
        if(query.length === 0 || query.length > 1) {
            axios.get(`http://localhost:8000/search?q=${query}`)
            .then((response) => {
                setCatalogBooks(response.data.data)
                setBooksCount(response.data.booksCount)
            })
            .catch((error) => console.log(error))
        }
    }, [query])

    const bookList = catalogBooks.map(bookData => {
        return (
            <div key={bookData._id} className=' border-2 border-neutral rounded px-1 w-80 h-56 overflow-clip text-center font-text bg-tertiaryColor text-neutral' >
                <Link to={`${bookData._id}`} className='flex items-center h-full'>
                        <img src="/elva_logo.png" alt="book cover" className='w-1/3 object-contain'/>
                        <div className='flex flex-col gap-y-2'>
                            <h1 className='text-2xl font-heading'>{bookData.title}</h1>
                            <h2 className=' font-bold'>{bookData.author}</h2>
                            <p className=' p-1 italic '>{bookData.summary}</p>
                        </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="relative flex flex-col gap-y-6">
            <div className="flex justify-between">
                <input 
                type="search" 
                name="search" 
                placeholder="Browse our wide range of books" 
                className="border-b-2 border-b-secondaryColor py-2 px-3 w-96"
                onChange={e=> setQuery(e.target.value.toLocaleLowerCase())}
                value={query} />
            </div>
            <div className='flex items-center gap-x-4'>
                <h3 className='text-2xl font-heading text-primaryColor bg-neutral p-4 rounded'>{booksCount} Books available</h3>
                <img src="/book-outline.svg" alt="" className='inline h-12' />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-4 border-t-4 border-neutral py-6 px-12">
                {bookList}
            </div>
        </div>
    )
}

export default CatalogPage