import React from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Divider,
    List,
    ListItemText,
    Typography, useMediaQuery, useTheme
} from "@material-ui/core";
import {BusinessCenter, School} from "@material-ui/icons";
import {
    Timeline,
    TimelineConnector, TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@material-ui/lab";
import {useTranslation} from "react-i18next";

function CreateCard(props){
    const [expanded, setExpanded] = React.useState(false);
    const { t } = useTranslation();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const list = props.content.list;

    return(
        <Card style={{minWidth:1}}>
            <CardContent>
                <Typography variant="h4" >{props.content.h3}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{props.content.sub1}</Typography>
                <Typography variant="h5" color="primary">{props.content.h4}</Typography>
                <Typography variant="subtitle2">{props.content.sub2}</Typography>

            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" color="primary" onClick={handleExpandClick}
                >{expanded? t("experience.show_less"):t("experience.show_more")}</Button>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body1">
                        <List>{}
                            <CreateCardList list={list}/>
                        </List>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

function CreateCardList(props){
    const items=[];
    for (let l of props.list){
        items.push(<ListItemText primary={l}/>)
        items.push(<Divider/>)
    }
    return(
        items
    )
}

export default function Experience (){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const { t } = useTranslation();

    return(
        <Box textAlign="center" id="Experience" m={3}>
            {matches?
                <Box display="flex">
                    <Box flexGrow={1}>
                        <Typography variant="h2" style={{ fontWeight: 400, textAlign:"center"}}>{<BusinessCenter/>}{t("experience.title_experience")}</Typography>

                    </Box>
                    <Box flexGrow={1}>
                        <Typography variant="h2" style={{fontWeight: 400, textAlign:"center"}}>{<School/>}{t("experience.title_education")}</Typography>

                    </Box>
                </Box>
                : <Typography variant="h2" style={{ fontWeight: 400, textAlign:"center"}}>{<School/>}{t("experience.title_journey")}</Typography>
            }

            <Timeline align={matches? "alternate" : "left"}>
                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            2021
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <CreateCard content={{
                            h3:t("experience.lancaster.h3"),
                            sub1:t("experience.lancaster.sub1"),
                            h4:t("experience.lancaster.h4"),
                            sub2:t("experience.lancaster.sub2"),
                            list:[
                                t("experience.lancaster.list.l0"),
                                t("experience.lancaster.list.l1"),
                                t("experience.lancaster.list.l2"),
                                t("experience.lancaster.list.l3"),
                                t("experience.lancaster.list.l4"),
                                t("experience.lancaster.list.l5"),
                                t("experience.lancaster.list.l6"),
                                t("experience.lancaster.list.l7")
                            ]
                        }}/>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            2018 Jan-Jul
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{textAlign:"center"}}>
                        <CreateCard content={{
                            h3:t("experience.devhoster.h3"),
                            sub1:t("experience.devhoster.sub1"),
                            h4:t("experience.devhoster.h4"),
                            sub2:t("experience.devhoster.sub2"),
                            list:[
                                t("experience.devhoster.list.l0"),
                                t("experience.devhoster.list.l1"),
                                t("experience.devhoster.list.l2"),
                                t("experience.devhoster.list.l3"),
                                t("experience.devhoster.list.l4")
                            ]
                        }}/>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            2017
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <CreateCard content={{
                            h3:t("experience.icls.h3"),
                            sub1:t("experience.icls.sub1"),
                            h4:t("experience.icls.h4"),
                            sub2:t("experience.icls.sub2"),
                            list:[
                                t("experience.icls.list.l0"),
                                t("experience.icls.list.l1"),
                                t("experience.icls.list.l2")
                                ]
                        }}/>
                    </TimelineContent>
                </TimelineItem>

                { matches===true &&
                <TimelineItem style={{ marginTop: -15 }}>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                </TimelineItem>}

                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            2016
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <CreateCard content={{
                            h3:t("experience.lyon3.h3"),
                            sub1:t("experience.lyon3.sub1"),
                            h4:t("experience.lyon3.h4"),
                            sub2:t("experience.lyon3.sub2"),
                            list:[
                                t("experience.lyon3.list.l0"),
                                t("experience.lyon3.list.l1"),
                                t("experience.lyon3.list.l2"),
                                t("experience.lyon3.list.l3"),
                                t("experience.lyon3.list.l4"),
                                t("experience.lyon3.list.l5"),
                                t("experience.lyon3.list.l6")
                            ]
                        }}/>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            2015 Jul-Sep
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{textAlign:"center"}}>
                        <CreateCard content={{
                            h3:t("experience.oxygene.h3"),
                            sub1:t("experience.oxygene.sub1"),
                            h4:t("experience.oxygene.h4"),
                            sub2:t("experience.oxygene.sub2"),
                            list:[
                                t("experience.oxygene.list.l0"),
                                t("experience.oxygene.list.l1"),
                                t("experience.oxygene.list.l2"),
                                t("experience.oxygene.list.l3"),
                                t("experience.oxygene.list.l4"),
                            ]
                        }}/>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    )
}
