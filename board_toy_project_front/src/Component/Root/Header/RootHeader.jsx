import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


function RootHeader(props) {
    const navigate = useNavigate();

    const handleButtonClick = (e) => {
        navigate(e);
    }

    return (
        <div css={S.SLayout}>
            <h1 css={S.STitle} onClick={() => handleButtonClick("/")}>게시판</h1>
            <div css={S.SButtonContainer}>
                <Link to={"/"}>
                    <h3>홈</h3>
                </Link>
                <Link to={"/announcement"}>
                    <h3>공지사항</h3>
                </Link>
                <Link to={"/board"}>
                    <h3>게시판</h3>
                </Link>
                <Link to={"/login"}>
                    <h3>로그인</h3>
                </Link>
            </div>
        </div>
    );
}


export default RootHeader;