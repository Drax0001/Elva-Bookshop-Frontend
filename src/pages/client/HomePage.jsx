import { userContext } from "../../components/Contexts/userContext"
import { useContext } from "react"

const HomePage = () => {
    const { userInfo } = useContext(userContext)
    
    return (
        <div className="grid h-full place-content-center">
            <h1>{userInfo.data.username}</h1>
            <div className="infinite-loader"></div> 
        </div>
    )
}

export default HomePage