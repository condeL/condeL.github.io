import {Avatar, Box, Button, Link, Paper, Typography} from "@material-ui/core";
import avatar from "./media/avatar.jpg";
import {CloudDownload, GitHub, LinkedIn, Mail, Place, WhatsApp} from "@material-ui/icons";
import {green, red} from "@material-ui/core/colors";
import cv_en from "./files/Lanciné Condé CV_en.pdf";
import cv_fr from "./files/Lanciné Condé CV_fr.pdf";

import React from "react";
import {useTranslation} from "react-i18next";

export default function About (){
    const { t, i18n } = useTranslation();

    return (
        <Paper elevation={2} id="Home" m={3}>
            <Box p={2}  m={2} textAlign="center">
                <Box style={{ justifyContent: "center", display: "flex" }}>
                    <Avatar src={avatar} style={{ width: 200, height:200}}/>
                </Box>

                <Typography variant="h1" display="inline">Lanciné{' '}
                    <Typography variant="h1" color="primary" display="inline" style={{ fontWeight: 400 }}>Condé</Typography>
                </Typography>

                <Box alignItems="center" justifyContent="center" display="flex" flexWrap="wrap">
                    <Box>
                        <Typography display="inline" variant="subtitle1" style={{marginRight:10}}>{<Place style={{ color: red[500] }}/>}{t("about.location")}</Typography>
                    </Box>
                    <Box>
                        <Typography display="inline" variant="subtitle1" style={{marginRight:10}}>{<WhatsApp style={{ color: green[500] }}/>} (+224) 610 39 13 93</Typography>
                    </Box>
                    <Box>
                        <Link variant="subtitle1" href="mailto:lancine.condee@gmail.com" style={{marginRight:10}}>{<Mail/>} lancine.condee@gmail.com</Link>
                    </Box>
                </Box>
                <Typography variant="body1" paragraph="true">
                    <p>{t("about.profile")}<br/>
                        {t("about.date")}<br />
                        {t("about.nationality")}<br />
                        {t("about.gender")}<br />
                        {t("about.interests")}</p>
                </Typography>
                <Box m={1}>
                    <Link href="https://github.com/condeL" rel="noopener noreferrer"><GitHub fontSize="large"/></Link>
                    <Link href="https://www.linkedin.com/in/lanciné-condé-493511214/" rel="noopener noreferrer"><LinkedIn fontSize="large" /></Link>
                </Box>
                <box>
                    <Button variant="contained"
                            startIcon={<CloudDownload/>}
                            color="primary"
                            style={{color: "white"}}
                            rel="noopener noreferrer"
                            onClick={() => {window.open(i18n.resolvedLanguage==="fr"? cv_fr: cv_en, "_blank")}
                            }>
                        {t("about.cv")}
                    </Button>
                </box>
            </Box>
        </Paper>
    )

}