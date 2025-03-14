import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useFormContext } from "../context/formContext";

export default function SummaryPage(){
    const {state, dispatch} = useFormContext();
    const navigate = useNavigate();

    function handleSubmit(){
        dispatch({ type: "RESET_FORM" });

        alert("Form submitted successfully!");
        
        navigate("/");
    }
    return (
        <section className="flex flex-col gap-8">
            <div className="space-y-4">
            </div>
            <div className="space-y-4 border-b pb-4">
                <h2 className="text-2xl font-light-bold">Personal Information</h2>
                <div>
                    <p>{state.personalInfo.firstname}</p>
                    <p>{state.personalInfo.lastname}</p>
                    <p>{state.personalInfo.email}</p>
                </div>
            </div>

            <div className="space-y-4 border-b pb-4">
                <h2 className="text-2xl font-light-bold">Address Information</h2>
                <div>
                    <p>{state.addressInfo.street}</p>
                    <p>{state.addressInfo.city}</p>
                    <p>{state.addressInfo.zip}</p>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-light-bold">Preferences</h2>
                {
                    state.preference.newsletter || state.preference.notifications ? (
                        <div>
                            {state.preference.newsletter && 
                            ( <p><CheckCircle className="size-5 text-[#FFEB00]"/>
                            Subscribe to newsletter.
                            </p>
                        )}

                            {state.preference.notifications && 
                            (<p> 
                                <CheckCircle className="size-5 text-[#FFEB00]" />
                                Receive notifications. 
                            </p>
                            )}
                        </div>
                    )
                    : "No preference."
                }
            </div>

                <div className="space-y-4 border-b pb-4">
                    <h2 className="text-2xl font-light ">Theme Preference <span>{state.preference.theme}</span></h2>
                </div>

                <div className="flex *:basis-1/2 gap-4">
                <button 
                className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00]
                hover:text-[#2A004E]"
                type="button"
                onClick={() => navigate("/preferences")}>Back</button>
                <button 
                className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00]
                hover:text-[#2A004E]"
                onClick={handleSubmit}>Submit</button>
                </div>
        </section>
    );
}