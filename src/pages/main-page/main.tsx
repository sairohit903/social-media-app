import { getDocs, collection} from "firebase/firestore"
import { db } from "../../config/firebase"
import { useEffect, useState } from "react";
import { Post } from "../main-page/post"

export interface Post{
    id: string;
    userId: string;
    title: string;
    user: string;
    description: string
}

export const Main = () => {
    const [postsLists ,setPostsLists] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");
    

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsLists(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]);
        console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})) )
    }

    useEffect(() => {
        getPosts();
    }, []);
    return (
        <div>{postsLists?.map((post) => (
            <Post post={post}/>
        ))}</div>
    );
}