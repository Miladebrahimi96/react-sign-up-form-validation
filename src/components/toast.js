import { ToastContainer, toast } from 'react-toastify';

export const notify = (type) => {
    if(type === "success"){
        toast.success("Signed Up successfully", {theme: "colored"})
    }else {
        toast.error("Invalid data", {theme: "colored"})
    }
}