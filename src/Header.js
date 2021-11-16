import React, {useState} from "react";
import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    LinearProgress,
    ListItemIcon,
    Menu,
    MenuItem,
    Toolbar
} from "@material-ui/core";
import {Home, Translate} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {IconFlagUK, IconFlagFR} from 'material-ui-flags';

const useStyles =  makeStyles(theme => ({
    paper: {
        background: theme.palette.primary.main,
        color: 'white'
    }
}));
export default function Header(){

    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;


    React.useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    return(
        <AppBar position = "sticky" >
            {mobileView ? <HeaderMenuMobile/> : <HeaderMenuDesktop/>}
            <LinearProgressBar/>
        </AppBar>
    )
}

function LinearProgressBar(){
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {

        let computeProgress = () => {
            // The scrollTop gives length of window that has been scrolled
            const scrolled = document.documentElement.scrollTop;
            // scrollHeight gives total length of the window and
            // The clientHeight gives the length of viewport
            const scrollLength = document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = `${100*scrolled/scrollLength}`;

            setProgress(progress);
        }

        // Adding event listener on mounting
        window.addEventListener("scroll", computeProgress);

        // Removing event listener upon unmounting
        return () => window.removeEventListener("scroll", computeProgress);
    })
    return(
        <LinearProgress variant="determinate" color="secondary" value={progress} />

    )
}

function HeaderMenuDesktop(){
    return(
        <Toolbar variant="dense" style={{ justifyContent: "center"}}>
            <MenuButtons/>
            <TranslateButton/>
        </Toolbar>
    )
}

function HeaderMenuMobile() {

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const styles = useStyles();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                classes={{ paper: styles.paper }}
                onClick={handleDrawerClose}
            >
                <MenuButtons/>
            </Drawer>
            <TranslateButton/>
        </Toolbar>
    )
}

function MenuButtons(){
    const { t } = useTranslation();

    return(
        <>
            <Button variant="text" href="#Home" startIcon={<Home/>} style={{color: "white"}}>{t("header.home")}</Button>
            <Button variant="text" href="#Skills" style={{color: "white"}}>{t("header.skills")}</Button>
            <Button variant="text" href="#Experience" style={{color: "white"}}>{t("header.experience")}</Button>
            <Button variant="text" href="#Projects" style={{color: "white"}}>{t("header.projects")}</Button>
            <Button variant="text" href="#Achievements" style={{color: "white"}}>{t("header.achievements")}</Button>
            <Button variant="text" href="#Contact" style={{color: "white"}}>{t("header.contact")}</Button>
        </>
    )
}

function TranslateButton(){
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { t, i18n } = useTranslation();

    return(
        <>
            <IconButton  edge="end" color="inherit" aria-label="translate" onClick={handleClick}>
                <Translate/>
            </IconButton>
            <Menu
                id="translation-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <MenuItem onClick={() => i18n.changeLanguage("en").then(handleClose)}>
                    <ListItemIcon><IconFlagUK/></ListItemIcon>{t("header.english")}</MenuItem>
                <MenuItem onClick={() => i18n.changeLanguage("fr").then(handleClose)}>
                    <ListItemIcon><IconFlagFR/></ListItemIcon> {t("header.french")}</MenuItem>
            </Menu>
        </>
    )
}
