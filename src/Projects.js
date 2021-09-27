import React from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Collapse,
    Divider,
    Grid,
    Typography
} from "@material-ui/core";
import {Code, GitHub} from "@material-ui/icons";
import wemath from "./media/wemath.png";
import fredbot from "./media/fredbot.png";
import {useTranslation} from "react-i18next";

export default function Projects(){

    const [expanded, setExpanded] = React.useState(false);
    const { t } = useTranslation();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Box textAlign="center" m={3} id="Projects">
            <Typography variant="h2" style={{fontWeight: 400}}>{<Code/>}{t("projects.title")}</Typography>
            <Grid container spacing={1} alignItems="stretch" style={{ marginTop: 8 }}>
                <Grid item component={Card} xs={12} md style={{ margin: 8 }}>
                    <CardMedia
                        image={wemath}
                        title="Wemath"
                        style={{height:200, paddingTop: '56.25%', marginBottom:8}}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" >
                            WeMath
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" color="primary">
                            {t("projects.wemath.sub1")}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {t("projects.wemath.description")}
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="primary" onClick={handleExpandClick}>
                            {t("projects.learn_more")}
                        </Button>
                        <Button variant="outlined" color="primary" rel="noopener noreferrer" href="https://github.com/condeL/WeMath" startIcon={<GitHub/>}>
                            {t("projects.see_code")}
                        </Button>
                    </CardActions>
                    <CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Typography gutterBottom variant="body2">{t("projects.wemath.list.l0")}</Typography>
                            <Divider/>
                            <Typography gutterBottom variant="body2">{t("projects.wemath.list.l1")}</Typography>
                            <Divider/>
                            <Typography variant="body2">{t("projects.wemath.list.l2")}</Typography>
                            <Divider/>
                        </Collapse>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md style={{ margin: 8 }}>
                    <CardMedia
                        image={fredbot}
                        title="Fredbot"
                        style={{height:200, paddingTop: '56.25%', marginBottom:8}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3">
                            Fredbot
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" color="primary">
                            {t("projects.fredbot.sub1")}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {t("projects.fredbot.description")}
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="primary" onClick={handleExpandClick}>
                            {t("projects.learn_more")}
                        </Button>

                        <Button variant="contained" color="secondary" startIcon={<GitHub/>} disabled>
                            {t("projects.coming_soon")}
                        </Button>
                    </CardActions>
                    <CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Typography gutterBottom variant="body2">{t("projects.fredbot.list.l0")}</Typography>
                            <Divider/>
                            <Typography gutterBottom variant="body2">{t("projects.fredbot.list.l1")}</Typography>
                            <Divider/>
                            <Typography variant="body2">{t("projects.fredbot.list.l2")}</Typography>
                        </Collapse>
                    </CardContent>
                </Grid>
            </Grid>
        </Box>
    )
}