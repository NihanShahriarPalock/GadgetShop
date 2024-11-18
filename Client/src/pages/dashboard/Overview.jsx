import { useAuth } from "../../hooks/useAuth"


const Overview = () => {
    const { user } = useAuth(); 
  return (
      <div>
          <h1 className="font-bold text-2xl">Email : { user.email}</h1>
    </div>
  )
}

export default Overview