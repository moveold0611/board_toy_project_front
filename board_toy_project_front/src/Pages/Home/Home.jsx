import React from 'react';
import RootContainer from '../../component/Root/Container/RootContainer'
import * as S from './Style';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

function Home(props) {

    return (
        <RootContainer >
            <div css={S.SLayout}>
                Home Test
            </div>
        </RootContainer>
    );
}

export default Home;