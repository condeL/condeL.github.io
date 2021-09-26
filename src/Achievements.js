import {Box, Card, CardContent, Grid, Typography, useTheme} from "@material-ui/core";
import {EmojiEvents} from "@material-ui/icons";
import React from "react";
import {useTranslation} from "react-i18next";

export default function Achievements(){
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Box id="Achievements" textAlign="center" m={3}>
            <Typography variant="h2" style={{ fontWeight: 400 }}>{<EmojiEvents/>}{t("achievements.title")}</Typography>
            <Grid container spacing={1} style={{ marginTop: 8 }} >
                <Grid item component={Card} xs={12} md style={{margin:8}}>
                    <CardContent>
                        <Typography variant="body1"   style={{ fontWeight: 400 , fontSize:48}}>3</Typography>
                        <Typography variant="body2"   style={{ fontSize:18}}>{t("achievements.provost")}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md style={{ backgroundColor: theme.palette.primary.main, margin:8,color:"white"}}>
                    <CardContent>
                        <Typography variant="body1"   style={{ fontWeight: 400 , fontSize:48}}>6</Typography>
                        <Typography variant="body2"   style={{ fontSize:18}}>{t("achievements.websites")}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md style={{ margin:8}}>
                    <CardContent>
                        <Typography variant="body1"    style={{ fontWeight: 400 , fontSize:48}}>1</Typography>
                        <Typography variant="body2"    style={{ fontSize:18}}>{t("achievements.conference_award")}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md style={{ backgroundColor: theme.palette.primary.main, margin:8,color:"white"}}>
                    <CardContent>
                        <Typography variant="body1" style={{ fontWeight: 400 , fontSize:48}}>1</Typography>
                        <Typography variant="body2" style={{ fontSize:18}}>{t("achievements.scientific_publication")}</Typography>
                        <Typography variant="body2" style={{ fontSize:16}}>{t("achievements.scientific_publication_date")}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Box>
    )
}