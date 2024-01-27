import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import RootHeader from '../Header/RootHeader';

function RootRayout({ children }) {


    return (
        <div css={S.SLayout}>
            <RootHeader/>
            {children}
        </div>
    );
}

export default RootRayout;