// import AuthLayout from "../../components/AuthLayout"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { userContext } from "../../components/Contexts/userContext"

const Login = () => {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
    })
    // const [errorState, setErrorState] = useState(null)
    // const [result, setResult] = useState(null)

    const { setUserInfo } = useContext(userContext)

    const submitForm = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/users/login', userDetails)
            .then(response => {
                setUserInfo(response.data)
                toast.success(response.data.message)
                if(response.data.data.role === 'admin') {
                    navigate('/admin')
                } else {
                    navigate('/user')
                }
                
            })
            .catch(err => {
                toast.error(err.response.data.message)
            })
        
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }))
    }

    return (
        <div className="flex justify-between font-text ">
            <div className="w-[54%] h-[100dvh] sticky top-0 flex items-center" style={{backgroundImage: 'url(skylark11.jpg)'}}>
                <h1 className="text-9xl text-primaryColor bg-neutral bg-opacity-60 px-2 py-6 "><span className="font-heading text-tertiaryColor7">Elva Bookshop: </span><br /> Where Every <br /> Page Holds <br /> Magic.</h1>
                {/* <img src="skylark11.jpg" alt="a bookshop" className="h-full "/> */}
            </div>
            <div className="bg-primaryColor w-[46%] flex flex-col pt-6 px-6">
                <img src="elva_logo.png" alt="" className="h-44 object-contain"/>
                <h1 className="text-center text-4xl mb-4 text-neutral font-heading">Log into your Account</h1>
                <p className="text-center text-sm">Don&apos;t have an account yet? <Link to='signup' className="underline text-tertiaryColor bg-neutral p-1 rounded">Signup Instead</Link></p>
                {/* {errorState && <p className=" text-[#dd0202] text-center">{errorState.message ? errorState.message : errorState}</p>} */}
                <form className="flex flex-col px-28 py-2 items-center">
                    <label className="text-xl self-start" htmlFor="email">E-Mail:</label>
                    <input type="email" name="email" id="email" className="input-field" placeholder="john@gmail.com" onChange={handleChange} value={userDetails.email}/>

                    <label className="text-xl self-start" htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" className="input-field" placeholder="At Least 8 characters" onChange={handleChange} value={userDetails.password}/>
                    
                    <button onClick={submitForm} type="submit" className="btn mt-3 px-6 bg-neutral text-primaryColor transition-transform active:scale-[0.9]">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login