import { createContext, useContext, useReducer } from "react";
import { initialFormState } from "../reducers/formreducer";
import { formReducer } from "../reducers/formreducer";
import { FormAction } from "../types";


interface FormContextType {
    state: typeof initialFormState;
    dispatch: React.Dispatch<FormAction>;
    }

const FormContext = createContext<FormContextType | undefined>(undefined);

export default function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext(){
    const context = useContext(FormContext);
    if(!context){
        throw new Error("useFormContext must be used within FormProvider");
    }
    return context;
}