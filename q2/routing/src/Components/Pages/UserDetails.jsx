import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
const getUserById = (id) => {
    return axios.get("http://localhost:3000/data/" + id);
  };
  
  // HOOkS
  function UserDetails() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const isMounted = useRef(null);
    const handleGetUser = async () => {
      try {
        setIsLoading(true);
        const { data } = await getUserById(id);
        if (!isMounted.current) {
          return;
        }
        setData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      handleGetUser();
      if (!isMounted.current) {
        isMounted.current = true;
      }
      return () => {
        // * cleanup
        isMounted.current = false;
      };
    }, [id]);
  
    if (isLoading) return <div>...loading</div>;
    console.log(data);
    return (
      <div>
        <h3> User ID: {id} </h3>
        <UserCard
          id={id}
          name={`${data?.name} `}
          price={data?.data?.price}
        />
        {id !== "1" && <Link to={`/users/${Number(id) - 1}`}>Prev</Link>}
        <Link to={`/users/${Number(id) + 1}`}>Next</Link>
      </div>
    );
  }
  
  export default UserDetails;