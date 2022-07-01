import * as React from 'react';
import type {NextPage} from 'next';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {
    Features,
    Services,
    Teaser,
    Process,
    Team
} from './../components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CustomContainer from './../components/Container/Container';
import {createTheme} from "@mui/material/styles";
import { styled, alpha } from '@mui/material/styles';
import {colors, useMediaQuery} from '@mui/material';
import imgSrc from './../images/img3.png';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {useEffect} from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCVg6rIBusqjD1JoUSNHUwoe-LJCN4xSu8",
    authDomain: "vesta-software.firebaseapp.com",
    projectId: "vesta-software",
    storageBucket: "vesta-software.appspot.com",
    messagingSenderId: "716816042596",
    appId: "1:716816042596:web:ec7951197c25eb6e5fed71",
    measurementId: "G-3NX7RLDCM0"
};

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const HomeImgWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Home: NextPage = () => {
    const theme = createTheme({palette: {mode: 'dark'}});
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const app = initializeApp(firebaseConfig);
    const analytics = () => {
        if (typeof window !== "undefined") {
            return getAnalytics(app);
        } else {
            return null
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Vesta Software
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            <CustomContainer maxWidth="lg">
                <Box
                    sx={{
                        position: 'relative',
                        '&::after': {
                            position: 'absolute',
                            content: '""',
                            width: '30%',
                            zIndex: 1,
                            top: 0,
                            right: 0,
                            height: '100%',
                            backgroundSize: '18px 18px',
                            backgroundImage: `radial-gradient(${theme.palette.primary.dark} 20%, transparent 20%)`,
                            opacity: 0.2,
                        },
                    }}
                >
                    <Box position="relative" zIndex={2}>
                        <Box marginBottom={2}>
                            <Typography
                                variant="h2"
                                align={'center'}
                                sx={{
                                    fontWeight: 700,
                                }}
                            >
                                Vesta Software
                            </Typography>
                        </Box>
                        <Box marginBottom={4}>
                            <Typography variant="h6" align={'center'} color={'textSecondary'}>
                                We design & develop robust and scalable AWS SaaS products
                                <br />
                                for startups, companies and ourselves.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <HomeImgWrapper >
                        <img
                            src={imgSrc.src}
                            className="img-fluid animated"
                            alt="HomeImg"
                        />
                    </HomeImgWrapper>
                </Box>
                <Box>
                    <CustomContainer>
                        <Services/>
                    </CustomContainer>
                    <CustomContainer>
                        <Features/>
                    </CustomContainer>
                    <CustomContainer>
                        <Process/>
                    </CustomContainer>
                    <Divider/>
                    <CustomContainer>
                        <Teaser/>
                    </CustomContainer>
                    <Box>
                        <CustomContainer>
                            <Team/>
                        </CustomContainer>
                    </Box>
                </Box>
            </CustomContainer>
        </>
    );
};

export default Home;
