import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";

export default function PersonalInfoPage(){

const {state, dispatch} = useFormContext();
const navigate = useNavigate();

function nextPage(e: React.FormEvent){
    e.preventDefault()
    navigate("/address")
}
    return (
        <form onSubmit={nextPage} className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">Personal Information</h1>
        <div className="flex flex-col gap-y-2">
            <label className="font-bold" htmlFor="firstname">First Name</label>
            <input 
            className="border-l border-[#FFEB00] focus:bg-[#FFEB00]
            outline-none p-2 focus:rounded-sm focus:text-[#2A004E]
            text-[#FFEB00] font-bold"
            type="text" 
            id="firstname"
            value={state.personalInfo.firstname}
            onChange={(e) => dispatch({
                type: "UPDATE_PERSONAL_INFO",
                payload: { firstname: e.target.value }
            })}
            required
            />
        </div>

        <div className="flex flex-col gap-y-2">
            <label className="font-bold" htmlFor="lastname">Last Name</label>
            <input 
            className="border-l border-[#FFEB00] focus:bg-[#FFEB00]
            outline-none p-2 focus:rounded-sm focus:text-[#2A004E]
            text-[#FFEB00] font-bold"
            type="text" 
            id="firstname"
            value={state.personalInfo.lastname}
            onChange={(e) => dispatch({
                type: "UPDATE_PERSONAL_INFO",
                payload: { lastname: e.target.value }
            })} 
            required
            />
        </div>

        <div className="flex flex-col gap-y-2">
            <label htmlFor="email">Email</label>
            <input 
            className="border-l border-[#FFEB00] focus:bg-[#FFEB00]
            outline-none p-2 focus:rounded-sm focus:text-[#2A004E]
            text-[#FFEB00] font-bold"
            type="email" 
            id="email" 
            value={state.personalInfo.email}
            onChange={(e) => dispatch({
                type: "UPDATE_PERSONAL_INFO",
                payload: { email: e.target.value }
            })}
            required/>
        </div>
        <button 
        className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00]
        hover:text-[#2A004E]"
        type="submit">Next</button>
    </form>
    )
}

