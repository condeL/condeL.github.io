import {Box, Card, CardContent, Divider, Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {Rating} from "@material-ui/lab"
import {Build, Create, DeveloperMode, ImportantDevices, Mood} from "@material-ui/icons";
import React from "react";
import {useTranslation} from "react-i18next";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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

function CreateSkillCard(props){
    const theme = useTheme();

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return(
        <Grid item component={motion.div} animate={ inView? { x:0} : ""} initial={props.left? {x:"-50%"} : {x:"50%"}} xs={12} md={5} ref={ref} style={{ marginTop:8, padding:0, opacity: inView ? 1 : 0 }}>
            <Card style={{ margin: 8 ,backgroundColor: props.color? theme.palette.primary.main : "white", color: props.color? "white" : "black", height:"100%"  }}>
                <CardContent>
                    <Typography variant="h3" align="center">{props.icon}{props.title}</Typography>
                    <Typography variant="body1">
                        <CreateSkillList list={props.list} color = {props.color}/>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default function Skills(){

    const theme = useTheme();
    const { t } = useTranslation();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box id="Skills" m={3}>
            <Typography variant="h2" align="center" style={{ fontWeight: 400 }}>{<Create/>}{t("skills.title")}</Typography>
            <Grid container spacing={1} alignItems="stretch">

                <Grid item md={1}/>

                <CreateSkillCard title={t("skills.programming_languages.title")}
                                 icon={<DeveloperMode/>}
                                 list={[
                                     {name:"Java", value:4.5},
                                     {name:"Javascript", value:4},
                                     {name:"Python", value:3.5},
                                     {name:"Android", value:3.5},
                                     {name:"Node JS", value:3},
                                     {name:"Kotlin", value:3},
                                     {name:"C", value:2.5},
                                 ]}
                                 color={true}
                                 left={true}
                />


                <CreateSkillCard title={t("skills.design.title")}
                                 icon = {<ImportantDevices/>}
                                 list={[
                                    {name:"Material Design", value:4.5},
                                    {name:"Wordpress", value:4},
                                    {name:"React", value:4},
                                    {name:"Bootstrap", value:4},
                                    {name:t("skills.design.responsive_design"), value:3.5},
                                    {name:t("skills.design.adobeDX"), value:2.5},
                                    {name:t("skills.design.gui"), value:2.5},
                                ]}
                                color={false}
                                 left={false}
                />

                <Grid item md={1}/>
                <Grid item md={1}/>

                <CreateSkillCard title={t("skills.technical.title")}
                                 icon={<Build/>}
                                 list={[
                                     {name:"GCP & Firebase", value:4},
                                     {name:"Git", value:4},
                                     {name:t("skills.technical.databases"), value:4},
                                     {name:t("skills.technical.engineering"), value:3.5},
                                     {name:t("skills.technical.management"), value:3.5},
                                     {name:"Agile & Scrum", value:3.5},
                                 ]}
                                 color={matches? false:true}
                                 left={true}
                />


                <CreateSkillCard title={t("skills.personal.title")}
                                 icon={<Mood/>}
                                 list={[
                                     {name:t("skills.personal.dedication"), value:5},
                                     {name:t("skills.personal.critical_thinking"), value:4.5},
                                     {name:t("skills.personal.autonomy"), value:4.5},
                                     {name:t("skills.personal.teamwork"), value:4},
                                     {name:t("skills.personal.communication"), value:4},
                                     {name:t("skills.personal.adaptability"), value:4},
                                 ]}
                                 color={matches? true:false}
                                 left={false}
                />
            </Grid>
        </Box>

    )

}