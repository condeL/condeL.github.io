import {Box, Card, CardContent, Grid, Typography, useTheme} from "@mui/material";
import {EmojiEvents} from "@mui/icons-material";
import React from "react";
import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

function CreateAchievementCard(props){
    const theme = useTheme();

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return(
        <Grid item component={motion.div} xs={12}  md animate={ inView? { x:0} : ""} initial={{x:props.initial}} ref={ref} style={{margin:8, opacity: inView ? 1 : 0,  }}>
            <Card style={{backgroundColor: props.color? theme.palette.primary.main : "white", color: props.color? "white" : "", height:"100%"}}>
                <CardContent>
                    <Typography variant="body1"   style={{ fontWeight: 400 , fontSize:48}}>{props.number}</Typography>
                    <Typography variant="body2"   style={{ fontSize:18}}>{props.description}</Typography>
                    <Typography variant="body2" style={{ fontSize:16}}>{props.caption}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default function Achievements(){
    const { t } = useTranslation();

    return (
        <Box id="Achievements" textAlign="center" m={3}>
            <Typography variant="h2" style={{ fontWeight: 400 }}>{<EmojiEvents/>}{t("achievements.title")}</Typography>
            <Grid container spacing={1} style={{ marginTop: 8 }} >
                <CreateAchievementCard number={3} description={t("achievements.provost")} initial={"-50%"}/>

                <CreateAchievementCard number={6} description={t("achievements.websites")} initial={"-50%"} color={true}/>

                <CreateAchievementCard number={1} description={t("achievements.conference_award")} initial={"50%"}/>

                <CreateAchievementCard number={6} description={t("achievements.scientific_publication")} caption={t("achievements.scientific_publication_date")} initial={"50%"} color={true}/>

            </Grid>
        </Box>
    )
}