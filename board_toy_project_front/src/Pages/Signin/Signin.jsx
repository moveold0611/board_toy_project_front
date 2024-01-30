import React, { useEffect } from 'react';
import RootContainer from '../../component/Root/Container/RootContainer';

function Signin(props) {

    useEffect(() => {

    }, []);


    const handleGoogleLogin = () => {

    }

    const handleKakaoLogin = () => {

    }

    const handleNaverLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver"
    }


    return (
        <RootContainer>
            <div>
                    <div>
                        <h1>로그인</h1>
                    </div>
                    <div>
                        <button onClick={handleGoogleLogin}>
                            <img alt="구글 로그인" />
                            Google로 시작하기
                        </button>
                    </div>
                    <div>
                        <button onClick={handleKakaoLogin}>
                            <img alt="카카오 로그인" />
                            카카오로 시작하기
                        </button>
                    </div>
                    <div>
                        <button onClick={handleNaverLogin}>
                            <img alt="네이버 로그인" />
                            네이버로 시작하기
                        </button>
                    </div>
            </div>
        </RootContainer>
    );
}

export default Signin;