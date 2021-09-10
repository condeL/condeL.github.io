import banner from './banner.jpg';
import avatar from './avatar.jpg';

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {CloudDownload, LinkedIn} from "@material-ui/icons";
import {GitHub} from "@material-ui/icons";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'

import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent, Collapse,
    Container, Divider,
    Grid, IconButton,
    Link, List, ListItem, ListItemText,
    Paper,
    Typography, useTheme
} from "@material-ui/core";
import {
    Timeline,
    TimelineConnector, TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    dark: { backgroundColor: theme.palette.primary.dark }
}));
function App() {

    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            See React
          </a>
        </header>
      </div>
    );*/

    return (

        <Container maxWidth="md">
            <About/>
            <Skills/>
            <Education/>
            <Experience />
            <Awards/>
            <Projects/>
            <Contact/>
            <Copyright/>
        </Container>
    );
}



function About (){
    const theme = useTheme();

    return (
        <Paper elevation={2}>
            <Box p={2}  m={2} textAlign="center">
                <Box style={{ justifyContent: "center", display: "flex" }}>
                    <Avatar src={avatar} style={{ width: 200, height:200}}/>
                </Box>
                <Typography variant="h1" display="inline">Lanciné{' '}
                    <Typography variant="h1" color="primary" display="inline" style={{ fontWeight: 400 }}>Condé</Typography>
                </Typography>

                <Typography variant="subtitle1">Kountia, Conakry, Guinea | (+224) 610 39 13 93 |{' '}
                    <Link href="mailto:lancine.condee@gmail.com">lancine.condee@gmail.com</Link>
                </Typography>
                <Typography variant="body1" paragraph="true">
                    <p>Bilingual (French & English) Computer Science graduate from Lancaster University Ghana<br />
                        Date of birth: 15/09/1993<br />
                        Nationality: Guinean<br />
                        Gender: Male<br />
                        Interests: Programming, Reading</p>
                </Typography>
                <Box m={1}>
                    <Link href="https://github.com/condeL"><GitHub /></Link>
                    <Link href="https://www.linkedin.com/in/lanciné-condé-493511214/"><LinkedIn /></Link>
                </Box>
                <box>
                    <Button variant="contained"
                            startIcon={<CloudDownload/>}
                            color="primary"
                            style={{color: "white"}}
                            onClick={() => { alert('clicked') }}>
                        Download CV
                    </Button>
                </box>
            </Box>
        </Paper>
    )

}

function Education() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Box textAlign="center" m={3}>
            <Typography variant="h2" style={{fontWeight: 400}}>Education</Typography>
            <Grid container spacing={1} alignItems="stretch" style={{marginTop: 8}}>
                <Grid item component={Card} xs={12} md style={{margin: 8}}>
                    <CardContent>
                        <Typography variant="h3">Lancaster University Ghana </Typography>
                        <Typography variant="subtitle1">(Accra, Ghana)</Typography>
                        <Typography variant="subtitle2" color="textSecondary">September 2021</Typography>
                        <Typography variant="h4" color="primary">Honours Bachelor of Science <br/> Computer
                            Science</Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="secondary" onClick={handleExpandClick}
                        >See More</Button>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body1">GPA:20.4/24</Typography>
                            <Divider/>
                        </CardContent>
                    </Collapse>
                </Grid>

                <Grid item component={Card} xs={12} md style={{margin: 8}}>
                    <CardContent>
                        <Typography variant="h3">International Center for Language Studies</Typography>
                        <Typography variant="subtitle1">(Washington, USA)</Typography>
                        <Typography variant="subtitle2" color="textSecondary">December 2018</Typography>
                        <Typography variant="h4" color="primary">Intensive English Language Program
                            Certification – ACTFL</Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="secondary" onClick={handleExpandClick}
                        >See More</Button>

                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body1">
                                <List>
                                    <ListItemText primary="Reading: Advanced"/>
                                    <Divider  component="li"/>
                                    <ListItemText primary="Listening: Advanced"/>
                                    <Divider  component="li"/>
                                    <ListItemText primary="Speaking: Intermediate"/>
                                    <Divider  component="li"/>
                                </List>
                            </Typography>
                        </CardContent>
                    </Collapse>


                </Grid>
                <Grid item component={Card} xs={12} md style={{margin: 8}}>
                    <CardContent>
                        <Typography variant="h3">IAE Lyon 3</Typography>
                        <Typography variant="subtitle1">(Lyon, France)</Typography>
                        <Typography variant="subtitle2" color="textSecondary">September 2016</Typography>
                        <Typography variant="h4" color="primary">Bachelor in Management and Social
                            Sciences</Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="secondary" onClick={handleExpandClick}>
                            See More</Button>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body1">GPA: 9.85/20</Typography>
                            <Divider/>
                        </CardContent>
                    </Collapse>
                </Grid>
            </Grid>
        </Box>


    )

}

function Experience(){
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box textAlign="center" m={3}>
            <Typography variant="h2" style={{ fontWeight: 400 }}>Experience</Typography>
            <Grid container spacing={1} alignItems="stretch" style={{ marginTop: 8 }}>
                <Grid item component={Card} xs={12} md style={{ margin: 8 }}>

                    <CreateCard content={{h3:"Internship in Web Development",
                        sub1:"January-July 2018",
                        h4:"DevHoster",
                        sub2:"Small digital marketing agency from Guinea",
                        list:{
                            l1:"Website development using the WordPress and PrestaShop software",
                            l2:"Establishing requirements",
                            l3:"Configuring email addresses via the WMH cPanel and Microsoft Outlook",
                            l4:"Administration of clients´ websites",
                            l5:"Maintenance of computer equipment and the NAS server",
                        }
                    }}/>
                    {/*<CardContent>
                        <Typography variant="h3" >Internship in Web Development</Typography>
                        <Typography variant="subtitle1" color="textSecondary">January-July 2018</Typography>
                        <Typography variant="h4" color="primary">DevHoster</Typography>
                        <Typography variant="subtitle2">Small digital marketing agency from Guinea</Typography>

                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="secondary" onClick={handleExpandClick}
                        >See More</Button>

                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body1">
                                <List>
                                    <ListItemText primary="Website development using the WordPress and PrestaShop software"/>
                                    <ListItemText primary="Configuring email addresses via the WMH cPanel and Microsoft Outlook"/>
                                    <ListItemText primary="Establishing requirements"/>
                                    <ListItemText primary="Administration of clients´ websites"/>
                                    <ListItemText primary="Maintenance of computer equipment and the NAS server"/>
                                </List>
                            </Typography>
                        </CardContent>
                    </Collapse>*/}
                </Grid>
                <Grid item component={Card} xs={12} md style={{ margin: 8 }}>
                    <CardContent>
                        <Typography variant="h3" >Internship in Communication</Typography>
                        <Typography variant="subtitle1" color="textSecondary">July-September 2015</Typography>
                        <Typography variant="h4" color="primary">Association Génération Oxygène</Typography>
                        <Typography variant="subtitle2">Local association in charge of organising the marathon of Lyon(France), mostly run by interns</Typography>

                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="secondary" onClick={handleExpandClick}
                        >See More</Button>

                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body1">
                                <List>
                                    <ListItemText primary="Recruiting helpers via telemarketing"/>
                                    <ListItemText primary="Creating and distributing information flyers"/>
                                    <ListItemText primary="Marking screenshots using Microsoft Publisher to indicate the roads to be blocked for the race"/>
                                    <ListItemText primary="Administrative maintenance"/>
                                    <ListItemText primary="Recruitment and formation of the next batch of interns"/>
                                </List>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Grid>
            </Grid>
        </Box>

    )
}

function CreateCard(props){
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Box>
            <CardContent>
                <Typography variant="h3" >{props.content.h3}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{props.content.sub1}</Typography>
                <Typography variant="h4" color="primary">{props.content.h4}</Typography>
                <Typography variant="subtitle2">{props.content.sub2}</Typography>

            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" color="secondary" onClick={handleExpandClick}
                >See More</Button>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body1">
                        <List>
                            <ListItemText primary={props.content.list.l1}/>
                            <ListItemText primary={props.content.list.l2}/>
                            <ListItemText primary={props.content.list.l3}/>
                            <ListItemText primary={props.content.list.l4}/>
                            <ListItemText primary={props.content.list.l5}/>
                        </List>
                    </Typography>
                </CardContent>
            </Collapse>
        </Box>
    )
}

class Skills extends React.Component{
    render() {
        return (
            <Box textAlign="center" m={3}>
                <Typography variant="h2" style={{ fontWeight: 400 }}>Skills</Typography>
                <Grid container spacing={1} alignItems="stretch" style={{ marginTop: 8 }}>
                    <Grid item sm={1}/>
                    <Grid item component={Card} xs={12} sm={5} style={{ margin: 8 }}>
                        <CardContent>
                            <Typography variant="h3">Software Development</Typography>
                            <Typography variant="body1">
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Java (Enterprise and Android)"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Python"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Kotlin"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Dart"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Erlang"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Godot"/>
                                    </ListItem>
                                </List>
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} sm={5} style={{ margin: 8 }}>
                        <CardContent>
                            <Typography variant="h3">Front end Web Development</Typography>
                            <Typography variant="body1">
                                <List>
                                    <ListItem>
                                        <ListItemText primary="HTML5"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="CSS3"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="JS"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Wordpress"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Joomla"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Prestashop"/>
                                    </ListItem>
                                </List>
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item sm={1}/>
                    <Grid item component={Card} xs={12} sm={5} style={{ margin: 8 }}>
                        <CardContent>
                            <Typography variant="h3">UI Design</Typography>
                            <Typography variant="body1">
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Flutter"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Mobile-First, Responsive Design"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Material Design paradigms"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Adobe DX prototyping"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="JavaFX & Swing GUIs"/>
                                    </ListItem>

                                </List>
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} sm={5} style={{ margin: 8 }}>
                        <CardContent>
                            <Typography variant="h3">Workflow</Typography>
                            <Typography variant="body1">
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Google cloud platform & Firebase"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Git"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Agile Development & Scrum"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Intermediate knowledge in Project & HR management"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Basic knowledge in Economics, Finance, Statistics, Accounting, Law and Marketing"/>
                                    </ListItem>
                                </List>
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Box>

        )
    }
}

class Awards extends React.Component{
    render() {
        return (
            <Paper>
                <Box textAlign="center" p={2} m={3}>
                    <Typography variant="h2" style={{ fontWeight: 400 }}>Awards</Typography>
                    <Typography variant="body1">
                        <List>
                            <ListItem>
                                <ListItemText primary="Led the development of a mobile Android application for teaching mathematics to Ghanaian students in the context of Lancaster University’s 2nd year group project module:"/>
                                <Collapse in="true" timeout="auto" unmountOnExit>
                                    <List>
                                        <ListItemText primary="GitHub repository:"/> <Link href="https://github.com/condeL/WeMath">https://github.com/condeL/WeMath</Link>
                                        <ListItemText primary="Responsible for the architectural & UI designs of the app, the backend, and the coordination of the team"/>
                                        <ListItemText primary="Features include math lessons, commenting and custom quiz creation by the users"/>
                                    </List>
                                </Collapse>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Directed the project"/> <Link href="https://www.camguinee.org">www.camguinee.org</Link> as an on-site consultant for an NGO
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Won Lancaster University Ghana’s <b>2019 & 2020 Provost’s List Award</b> rewarding academic excellency"/>
                            </ListItem>
                        </List>
                    </Typography>
                </Box>
            </Paper>


        )
    }
}

class Projects extends React.Component{

    render(){
        return(
            <Box  textAlign="center">
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                9:30 am
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <LinkedIn />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3}>
                                <Typography variant="h6" component="h1">
                                    Eat
                                </Typography>
                                <Typography>Because you need strength</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                10:00 am
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <GitHub />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} >
                                <Typography variant="h6" component="h1">
                                    Code
                                </Typography>
                                <Typography>Because it&apos;s awesome!</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <LinkedIn />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} >
                                <Typography variant="h6" component="h1">
                                    Sleep
                                </Typography>
                                <Typography>Because you need rest</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <GitHub />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} >
                                <Typography variant="h6" component="h1">
                                    Repeat
                                </Typography>
                                <Typography>Because this is the life you love!</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        )
    }
}

class Contact extends React.Component{
    render(){
        return(
            <Paper>
                <Box  textAlign="center" m={3} p={3}>
                    <Typography variant="h2" style={{ fontWeight: 400 }}>Contact me</Typography>
                </Box>
            </Paper>
        )
    }
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://lancineconde.me/">
                Lanciné Condé
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default App;
