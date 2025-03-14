import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/formContext";

export default function AddressPage(){

    const {state, dispatch} = useFormContext();
    const navigate = useNavigate();


    function nextPage(e: React.FormEvent){
        e.preventDefault();
        navigate("/preferences")
    }

    return (
    <form onSubmit={nextPage} className="flex flex-col gap-8">
    <h1 className="text-4xl font-bold">Address Information</h1>
    <div className="flex flex-col gap-y-2">
    <label className="font-bold" htmlFor="street">Street</label>
    <input 
    className="border-l border-[#FFEB00] focus:bg-[#FFEB00]
    outline-none p-2 focus:rounded-sm focus:text-[#2A004E]
    text-[#FFEB00] font-bold"
    type="text" 
    id="street"
    value={state.addressInfo.street}
    onChange={(e) => dispatch({
        type: "UPDATE_ADDRESS_INFO",
        payload: { street: e.target.value }
    })}
    required
    />
</div>

<div className="flex flex-col gap-y-2">
    <label className="font-bold" htmlFor="city">City</label>
    <input 
    className="border-l border-[#FFEB00] focus:bg-[#FFEB00]
    outline-none p-2 focus:rounded-sm focus:text-[#2A004E]
    text-[#FFEB00] font-bold"
    type="text" 
    id="city"
    value={state.addressInfo.city}
    onChange={(e) => dispatch({
        type: "UPDATE_ADDRESS_INFO",
        payload: { city: e.target.value }
    })} 
    required
    />
</div>

<div className="flex flex-col gap-y-2">
    <label htmlFor="zip">Zip Code</label>
    <input 
    className="border-l border-[#FFEB00] focus:bg-[#FFEB00]
    outline-none p-2 focus:rounded-sm focus:text-[#2A004E]
    text-[#FFEB00] font-bold"
    type="text" 
    id="zip" 
    value={state.addressInfo.zip}
    onChange={(e) => dispatch({
        type: "UPDATE_ADDRESS_INFO",
        payload: { zip: e.target.value }
    })}
    required/>
</div>
<div className="flex *:basis-1/2 gap-4">
<button 
className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00]
hover:text-[#2A004E]"
type="button"
onClick={() => navigate("/")}>Back</button>
<button 
className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00]
hover:text-[#2A004E]"
type="submit">Next</button>
</div>
    </form>
    );
}
