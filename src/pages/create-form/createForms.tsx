import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom"

interface createFormData{
    title: string;
    description: string;
}

export const CreateForm = () =>{

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("you must enter the title"),
        description: yup.string().required("you must enter the description"),
    });

    const { register, handleSubmit, formState: {errors}} = useForm<createFormData>({
        resolver: yupResolver(schema),
    });

    const postRef = collection(db, "posts");

    const onCreatePost = (data: createFormData) => {
        addDoc(postRef, {
            ...data,
            user: user?.displayName,
            userId: user?.uid
        });
        navigate("/");
    }


    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..." {...register("title")}/>
            <p style={{color: "red"}}>{errors.title?.message}</p>
            <textarea placeholder="Description..." {...register("description")}/>
            <p style={{color: "red"}}>{errors.description?.message}</p>
            <input className="btn" type="submit" />
        </form>
    );
}