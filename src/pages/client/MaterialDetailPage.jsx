import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MaterialDetailPage = () => {
    const [book, setBook] = useState({})
    const { materialId }= useParams()

    useEffect(()=> {
        axios.get(`http://localhost:8000/books/${materialId}`)
            .then(response => setBook(response.data))
            .catch(err => console.log(err))
    }, [materialId])

    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col items-center gap-y-1">
                <img src="/elva_logo.png" alt="" />
                <h2 className="font-heading text-2xl">{book.title}</h2>
                <h3 className="font-text text-xl">{book.author}</h3>
                <div className="flex flex-col gap-y-2">
                    <button className="btn btn-primary">Buy {book.title}</button>
                    <button className="btn btn-secondary">Loan {book.title}</button>
                </div>
            </div>
            <div className="flex flex-col items-center py-6">
                <h1 className="text-3xl font-text underline underline-offset-4">Summary of {book.title}</h1>
            </div>
        </div>
    )
}

export default MaterialDetailPage