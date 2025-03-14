import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/formContext";

export default function PreferencesPage(){

    const {state, dispatch} = useFormContext();
    const navigate = useNavigate();

    function nextPage(e: React.FormEvent){
        e.preventDefault();
        navigate("/summary")
    }

    return (
        <form onSubmit={nextPage} className="flex flex-col gap-8">
    <h1 className="text-4xl font-bold">Preferences</h1>

    <div className="flex gap-2 items-center">
    <label className="order-1 font-bold cursor-pointer" htmlFor="newsletter">Newsletter</label>
    <input 
    className="appearance-none size-5 bg-[#9ACBD0] hover:bg-[#F39E60] rounded-full checked:bg-[#FFEB00]
    duration-75 cursor-pointer"
    type="checkbox" 
    id="newsletter"
    checked={state.preference.newsletter}
    onChange={(e) => dispatch({
        type: "UPDATE_PREFERENCES",
        payload: { newsletter: e.target.checked }
    })}
    />
</div>

<div className="flex gap-2 items-center">
    <label className="order-1 font-bold cursor-pointer" htmlFor="notifications">Notifications</label>
    <input 
    className="appearance-none size-5 bg-[#9ACBD0] hover:bg-[#F39E60] rounded-full checked:bg-[#FFEB00]
    duration-75 cursor-pointer"
    type="checkbox" 
    id="notifications"
    checked={state.preference.notifications}
    onChange={(e) => dispatch({
        type: "UPDATE_PREFERENCES",
        payload: { notifications: e.target.checked }
    })} 
    />
</div>


<div className="flex flex-col gap-4">
    <label className="font-bold" htmlFor="theme">Theme Preference</label>

    <div>
    <input 
    className="appearance-none size-5 bg-[#9ACBD0] hover:bg-[#F39E60] rounded-full checked:bg-[#FFEB00]
    duration-75 cursor-pointer"
    type="radio" 
    id="theme"
    value="light"
    checked={state.preference.theme === "light"}
    onChange={(e) => dispatch({
        type: "UPDATE_PREFERENCES",
        payload: { theme: e.target.value as "light" | "dark"},
    })} 
    />
    <span className="cursor-pointer"> Light</span>
    </div>

    <div>
    <input 
    className="appearance-none size-5 bg-[#9ACBD0] hover:bg-[#F39E60] rounded-full checked:bg-[#FFEB00]
    duration-75 cursor-pointer"
    type="radio" 
    id="theme"
    value="dark"
    checked={state.preference.theme === "dark"}
    onChange={(e) => dispatch({
        type: "UPDATE_PREFERENCES",
        payload: { theme: e.target.value as "light" | "dark"},
    })} 
    />
    <span className="cursor-pointer"> Dark</span>
    </div>
</div>


<div className="flex *:basis-1/2 gap-4">
<button 
className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00]
hover:text-[#2A004E]"
type="button"
onClick={() => navigate("/address")}>Back</button>
<button 
className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00]
hover:text-[#2A004E]"
type="submit">Next</button>
</div>
</form>
    );
}