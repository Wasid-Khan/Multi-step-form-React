export interface FormData {
    personalInfo: {
        firstname: string;
        lastname: string;
        email: string;
    },
    addressInfo: {
        street: string;
        city: string;
        zip: string;
    }, 
    preference:{
        newsletter: boolean;
        notifications: boolean;
        theme: "light" | "dark" ;
    };
}

export type FormAction = 
| {type: "UPDATE_PERSONAL_INFO";payload: Partial<FormData["personalInfo"]>} 
| {type: "UPDATE_ADDRESS_INFO";payload: Partial<FormData["addressInfo"]>} 
| {type: "UPDATE_PREFERENCES";payload: Partial<FormData["preference"]>}
| {type: "RESET_FORM"}; 
