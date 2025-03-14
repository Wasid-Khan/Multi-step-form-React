import { CheckCircle2, Circle } from "lucide-react";
import { useLocation } from "react-router-dom";

const steps = [
    { path: "/", label: "Personal"},
    { path: "/address", label: "Address"},
    { path: "/preferences", label: "Preferences"},
    { path: "/summary", label: "Summary"},
]

export default function ProgressIndicator(){
    const location = useLocation()
    const currentStepIndex = steps.findIndex((step) => step.path === location.pathname)
    return (
        <section className="grid grid-cols-2 gap-x-8 gap-y-4 place-items-center 
        sm:grid-cols-4 sm:justify-items-start">
            {steps.map((step, index) => 
            <div key={step.label} className="flex relative ">
                <figure className={`flex flex-col items-center rounded-full p-1 
                ${
                    //If I crossed the step make it yellow, 
                    // if not check the remaining 2 options, equal and less
                    index < currentStepIndex 
                    ? "text-[#FFEB00]" //yellow
                    : index === currentStepIndex 
                    ? "text-[#f39e60]" 
                    : "text-[#9acbd0]"
                }`}>
                    {
                        index < currentStepIndex 
                        ? (<CheckCircle2 className="size-8"/>) 
                        : (<Circle className="size-8"/>)
                    }
                    <figcaption>
                        {
                            step.label
                        }
                    </figcaption>
                </figure>

                    {/* { index < steps.length - 1 && (
                        <div className={`absolute h-1 sm:w-8 bottom-4 -right-16 rounded-sm
                    ${
                        index < currentStepIndex 
                        ? "bg-[FFEB00]" 
                        : index === currentStepIndex 
                        ? "bg-[#F39E60]"
                        : "bg-[#9ACBD0]"
                    }`}
                    >
                    </div>)
                    } */}
                  
            </div>
                )
            }
        </section>
    );
}