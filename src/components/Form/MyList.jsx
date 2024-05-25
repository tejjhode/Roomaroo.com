import React ,{useState} from "react";
import Ad from "../Profile/Ad";
import appwriteServices from '../../appwrite/config';


function MyList() {
    const [list, setList] = useState([])
    appwriteServices.getPost([]).then((posts) => {
        if (posts) {
            setList(posts.documents)
        }
       
    })
    
    
  return (
    <div className="absolute top-16 h-full w-full bg-white ">
        
    {list.map((post) => (
        <div key={post.$id} >
            <Ad {...post} />
        </div>
        
    ))}
   
</div>
  );
}

export default MyList;