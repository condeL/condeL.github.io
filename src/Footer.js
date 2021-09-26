import {Box, Divider, Link, Paper, Typography, useTheme} from "@material-ui/core";
import {Email, WhatsApp} from "@material-ui/icons";
import React from "react";
import {useTranslation} from "react-i18next";

export default function Footer(){
    const theme = useTheme();
    const { t } = useTranslation();

    return(
        <Box textAlign="center">
            <Paper style={{ backgroundColor: theme.palette.primary.main, margin:8,color:"white"}}>
                <Box display="flex" flexWrap="wrap" p={1} justifyContent="center">
                    <Box >
                        <Typography variant="body1"  display="inline" style={{fontSize:18, fontWeight: 400, marginRight:20}}>{<WhatsApp/>} (+224) 610 39 13 93</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1"  display="inline" style={{fontSize:18, fontWeight: 400}}> {<Email/>} {<Link href="mailto:lancine.condee@gmail.com" color="inherit">lancine.condee@gmail.com</Link>}</Typography>
                    </Box>
                </Box>
                <Divider variant="middle" style={{backgroundColor:"white"}}/>
                <Box p={1}>
                        <Typography variant="body1" style={{color:"white"}}>{'Copyright © '}
                        <Link color="inherit" href="https://lancineconde.me/">
                            Lanciné Condé
                        </Link>{' '}
                        {new Date().getFullYear()}
                    </Typography>
                    <Typography variant="body2" style={{color:"white"}}>{t("footer.made_using")} <Link color="inherit" href="https://reactjs.org">React.js</Link> 🚀 {t("footer.and")} <Link color="inherit" href="https://mui.com">Material UI</Link> ❤️</Typography>

                </Box>
            </Paper>
        </Box>
    )
}