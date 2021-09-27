import {Box, Card, CardContent, Divider, Grid, Typography, useTheme} from "@material-ui/core";
import {Rating} from "@material-ui/lab"
import {Build, Create, DeveloperMode, ImportantDevices, Mood} from "@material-ui/icons";
import React from "react";
import {useTranslation} from "react-i18next";

function CreateSkillList(props){
    const theme = useTheme();

    const items=[];
    for (let l of props.list){

        items.push(
            <Box display="flex" alignItems="center">
                <Box p={1} flexGrow={1}> <Typography variant="body1" style={{justifySelf:"left"}}>{l.name}</Typography></Box>
                <Box><Rating value={l.value} precision={0.5} readOnly size="small" style={{color: props.color? theme.palette.secondary.light : theme.palette.primary.light , justifySelf:"right"}}/></Box>
            </Box>)
        items.push(<Divider style={{backgroundColor: props.color? "white": ""}}/>)

    }
    return(
        items
    )
}


export default function Skills(){
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Box id="Skills" m={3}>
            <Typography variant="h2" align="center" style={{ fontWeight: 400 }}>{<Create/>}{t("skills.title")}</Typography>
            <Grid container spacing={1} alignItems="stretch" style={{ marginTop: 8 }}>
                <Grid item md={1}/>
                <Grid item component={Card} xs={12} md={5} style={{ margin: 8 ,backgroundColor: theme.palette.primary.main, color: "white"  }}>
                    <CardContent>
                        <Typography variant="h3" align="center"><DeveloperMode/>{t("skills.programming_languages.title")}</Typography>
                        <Typography variant="body1">
                            <CreateSkillList list={[
                                {name:"Java", value:4.5},
                                {name:"Javascript", value:4},
                                {name:"Python", value:3.5},
                                {name:"Android", value:3.5},
                                {name:"Kotlin", value:3},
                                {name:"Dart", value:3},
                                {name:"C", value:2.5},
                            ]} color={true}/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={5} style={{ margin: 8}}>

                    <CardContent>
                        <Typography variant="h3" align="center"><ImportantDevices/>{t("skills.design.title")}</Typography>
                        <Typography variant="body1">
                            <CreateSkillList list={[
                                {name:"Material Design", value:4.5},
                                {name:"Wordpress", value:4},
                                {name:"React", value:4},
                                {name:t("skills.design.responsive_design"), value:3.5},
                                {name:"Flutter", value:3},
                                {name:t("skills.design.adobeDX"), value:2.5},
                                {name:t("skills.design.gui"), value:2.5},
                            ]} color={false}/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item md={1}/>

                <Grid item component={Card} xs={12} md={5} style={{ margin: 8}}>

                    <CardContent>
                        <Typography variant="h3" align="center"><Build/>{t("skills.technical.title")}</Typography>
                        <Typography variant="body1">
                            <CreateSkillList list={[
                                {name:"GCP & Firebase", value:4},
                                {name:"Git", value:4},
                                {name:t("skills.technical.databases"), value:4},
                                {name:t("skills.technical.engineering"), value:3.5},
                                {name:t("skills.technical.management"), value:3.5},
                                {name:"Agile & Scrum", value:3.5},
                            ]} color={false}/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={5} style={{ margin: 8 ,backgroundColor: theme.palette.primary.main, color: "white" }}>

                    <CardContent>
                        <Typography variant="h3" align="center"><Mood/>{t("skills.personal.title")}</Typography>
                        <Typography variant="body1">
                            <CreateSkillList list={[
                                {name:t("skills.personal.dedication"), value:5},
                                {name:t("skills.personal.critical_thinking"), value:4.5},
                                {name:t("skills.personal.autonomy"), value:4.5},
                                {name:t("skills.personal.teamwork"), value:4},
                                {name:t("skills.personal.communication"), value:4},
                                {name:t("skills.personal.adaptability"), value:4},
                            ]} color={true}/>
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Box>

    )

}