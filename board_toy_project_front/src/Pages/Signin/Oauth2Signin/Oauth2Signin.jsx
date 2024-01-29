import React from 'react';
import { useQueryClient } from 'react-query';
import { useSearchParams, Navigate, useNavigate } from 'react-router-dom';

function Oauth2Signin(props) {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const queryClient = useQueryClient();

    useEffect(() => {
        if(!searchParams.get("token")) {
            alert("정상적인 접근이 아닙니다.")
            navigate("/")
        } else {
            localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));
            queryClient.refetchQueries("getPrincipal");
        }
    }, []);

    return <Navigate to={"/"}/>
}

export default Oauth2Signin;