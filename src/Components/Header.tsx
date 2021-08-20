/** @jsxImportSource @emotion/react */
import { jsx, css, withTheme } from '@emotion/react'
import React from 'react';
import { AppBar, Theme, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'

type Props = {
    theme: Theme
}

const HeaderBase = (props: Props) => {
    return (
        <AppBar
            position="sticky"
            css={{
                padding: 8,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}
        >
            <Typography
                variant="h1"
                fontSize="2rem"
            >Welcome to MaximumTravel</Typography>
            <Button
                css={{ color: props.theme.palette.primary.contrastText }}
            >
                NightMode
            </Button>
        </AppBar>
    );
};
const Header = withTheme(HeaderBase);
export default Header;
