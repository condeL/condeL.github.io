import banner from './media/banner.jpg';
import avatar from './media/avatar.jpg';
import wemath from './media/wemath.png';
import fredbot from './media/fredbot.png';


import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
    BusinessCenter,
    CloudDownload, Code,
    Create,
    EmojiEvents,
    Home,
    LinkedIn,
    Mail,
    School,
    Send,
    Work
} from "@material-ui/icons";
import {GitHub} from "@material-ui/icons";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'
import MenuIcon from '@material-ui/icons/Menu';


import {
    AppBar,
    Avatar,
    Box,
    Button,
    Card, CardActionArea,
    CardActions,
    CardContent, CardMedia, Collapse,
    Container, Dialog, Divider, FilledInput, FormControl, FormHelperText,
    Grid, IconButton, Input, InputLabel, LinearProgress,
    Link, List, ListItem, ListItemText, OutlinedInput,
    Paper, TextField, Toolbar,
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
import {blue, yellow} from "@material-ui/core/colors";

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
            <Header/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Achievements/>
            <Contact/>
            <Copyright/>
        </Container>
    );
}


function Header(){
    return(
        <AppBar position = "sticky" >
            <Toolbar variant="dense" style={{ justifyContent: "center"}}>
                {/*<IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>*/}
                <Button variant="text" href="#Home" startIcon={<Home/>} style={{color: "white"}}>Home</Button>
                <Button variant="text" href="#Skills" style={{color: "white"}}>Skills</Button>
                <Button variant="text" href="#Experience" style={{color: "white"}}>Experience</Button>
                <Button variant="text" href="#Projects" style={{color: "white"}}>Projects</Button>
                <Button variant="text" href="#Awards" style={{color: "white"}}>Achievements</Button>
                <Button variant="text" href="#Contact" style={{color: "white"}}>Contact</Button>
            </Toolbar>
            <LinearProgress variant="determinate" color="secondary" value={50} />

        </AppBar>
    )
}

function About (){

    return (
        <Paper elevation={2} id="Home">
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

function Skills(){
    const theme = useTheme();

    return (
        <Box textAlign="center" id="Skills" m={3}>
            <Typography variant="h2"  style={{ fontWeight: 400 }}>{<Create/>} Skills</Typography>
            <Grid container spacing={1} alignItems="stretch" style={{ marginTop: 8 }}>
                <Grid item sm={1}/>
                <Grid item component={Card} xs={12} sm={5} style={{ margin: 8  }}>
                    <CardContent>
                        <Typography variant="h3">Software Development</Typography>
                        <Typography variant="body1">
                            <CreateCardList list={[
                                "Java (Enterprise and Android)",
                                "Python",
                                "Kotlin",
                                "Dart",
                                "Erlang,",
                                "Godot",
                            ]}/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} sm={5} style={{ margin: 8 , backgroundColor: theme.palette.primary.main, color: "white" }}>

                    <CardContent>
                        <Typography variant="h3">Front end Web Development</Typography>
                        <Typography variant="body1">
                            <CreateCardList list={[
                                "HTML5",
                                "CSS3",
                                "JS",
                                "Wordpress",
                                "Joomla,",
                                "Prestashop",
                            ]}/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item sm={1}/>
                <Grid item component={Card} xs={12} sm={5} style={{ margin: 8 ,backgroundColor: theme.palette.primary.main, color: "white" }}>

                    <CardContent>
                        <Typography variant="h3">UI Design</Typography>
                        <Typography variant="body1">
                            <CreateCardList list={[
                                "Flutter",
                                "Mobile-First, Responsive Design",
                                "Material Design paradigms",
                                "Adobe DX prototyping",
                                "Erlang,",
                                "JavaFX & Swing GUIs",
                            ]}/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} sm={5} style={{ margin: 8 }}>

                    <CardContent>
                        <Typography variant="h3">Workflow</Typography>
                        <Typography variant="body1">
                            <CreateCardList list={[
                                "Google cloud platform & Firebase",
                                "Git",
                                "Agile Development & Scrum",
                                "Intermediate knowledge in Project & HR management",
                                "Basic knowledge in Economics, Finance, Statistics, Accounting, Law and Marketing,",
                            ]}/>

                        </Typography>
                    </CardContent>
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

    const list = props.content.list;
    return(
        <Card>
            <CardContent>
                <Typography variant="h3" >{props.content.h3}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{props.content.sub1}</Typography>
                <Typography variant="h4" color="primary">{props.content.h4}</Typography>
                <Typography variant="subtitle2">{props.content.sub2}</Typography>

            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" color="primary" onClick={handleExpandClick}
                >{expanded? "Show Less":"Show More"}</Button>

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





class Experience extends React.Component{

    render(){
        return(

            <Box textAlign="center" id="Experience">
                <Timeline align="alternate">

                    <TimelineItem style={{ marginBottom: -75 }}>
                        <TimelineOppositeContent style={{textAlign:"center"}}>
                            <Typography variant="h2" style={{ fontWeight: 400, textAlign:"center"}}>{<BusinessCenter/>} Experience</Typography>

                        </TimelineOppositeContent>
                        <TimelineSeparator>

                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h2" style={{fontWeight: 400, textAlign:"center"}}>{<School/>} Education</Typography>

                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                        </TimelineSeparator>
                        <TimelineContent>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
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
                                h3:"Lancaster University Ghana",
                                sub1:"(Accra, Ghana)",
                                h4:"Honours Bachelor of Science in Computer Science",
                                sub2:"September 2021",
                                list:[
                                    "GPA:20.4/24",
                                ]
                            }}/>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                2018
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{textAlign:"center"}}>
                            <CreateCard content={{
                                h3:"Internship in Web Development",
                                sub1:"January-July 2018",
                                h4:"DevHoster",
                                sub2:"Small digital marketing agency from Guinea",
                                list:[
                                    "Website development using the WordPress and PrestaShop software",
                                    "Establishing requirements",
                                    "Configuring email addresses via the WMH cPanel and Microsoft Outlook",
                                    "Administration of clients´ websites",
                                    "Maintenance of computer equipment and the NAS server",
                                ]
                            }}/>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
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
                                h3:"International Center for Language Studies",
                                sub1:"(Washington, USA)",
                                h4:"Intensive English Language Program Certification – ACTFL",
                                sub2:"December 2018",
                                list:[
                                    "Reading: Advanced",
                                    "Listening: Advanced",
                                    "Speaking: Intermediate",
                                ]
                            }}/>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem style={{ marginTop: -15 }}>
                        <TimelineSeparator>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
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
                                h3:"IAE Lyon 3",
                                sub1:"(Lyon, France)",
                                h4:"Bachelor in Management and Social Sciences",
                                sub2:"September 2016",
                                list:[
                                    "GPA: 9.85/20"
                                ]
                            }}/>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                2015
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary"/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{textAlign:"center"}}>
                            <CreateCard content={{
                                h3:"Internship in Communication",
                                sub1:"July-September 2015",
                                h4:"Association Génération Oxygène",
                                sub2:"Local association in charge of organising the marathon of Lyon(France), mostly run by interns",
                                list:[
                                    "Recruiting helpers via telemarketing",
                                    "Creating and distributing information flyers",
                                    "Marking screenshots using Microsoft Publisher to indicate the roads to be blocked for the race",
                                    "Administrative maintenance",
                                    "Recruitment and formation of the next batch of intern",
                                ]
                            }}/>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        )
    }
}


function Projects(){

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Box textAlign="center" m={3} id="Projects">
            <Typography variant="h2" style={{fontWeight: 400}}>{<Code/>} Projects</Typography>
            <Grid container spacing={1} alignItems="stretch" style={{ marginTop: 8 }}>
                <Grid item component={Card} xs style={{ margin: 8 }}>
                    <CardMedia
                        image={wemath}
                        title="Wemath"
                        style={{height:200, paddingTop: '56.25%', marginBottom:8}}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            WeMath
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Led the development of a mobile Android application for teaching mathematics to Ghanaian students in the context of Lancaster University’s 2nd year group project module:
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="primary" onClick={handleExpandClick}>
                            Learn More
                        </Button>
                        <Button variant="outlined" color="primary" href="https://github.com/condeL/WeMath" startIcon={<GitHub/>}>
                            See Code
                        </Button>
                    </CardActions>
                    <CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Typography variant="body2">Responsible for the architectural & UI designs of the app, the backend, and the coordination of the team</Typography>
                            <Divider/>
                            <Typography variant="body2">Features include math lessons, commenting and custom quiz creation by the users</Typography>
                            <Divider/>
                        </Collapse>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs style={{ margin: 8 }}>
                    <CardMedia
                        image={fredbot}
                        title="Fredbot"
                        style={{height:200, paddingTop: '56.25%', marginBottom:8}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Fredbot
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="secondary" startIcon={<GitHub/>} disabled>
                            Coming Soon!
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Box>
    )
}



function Achievements(){
    const theme = useTheme();

    return (
        <Box id="Achievements" textAlign="center" m={3}>
            <Typography variant="h2" style={{ fontWeight: 400 }}>{<EmojiEvents/>} Achievements</Typography>
            {/*<Box >
                    <Typography variant="h2" style={{ fontWeight: 400 }}>Achievements</Typography>
                    <Typography>Directed the project <Link color="secondary" href="https://www.camguinee.org">www.camguinee.org</Link> as an on-site consultant for an NGO</Typography>
                    <Divider/>
                    <Typography>Won Lancaster University Ghana’s <b>2019 , 2020 & 2021 Provost’s List Award</b> rewarding academic excellency</Typography>
                    <Divider/>
                </Box>*/}
            <Grid container spacing={1} >
                <Grid item component={Card} xs={12} sm style={{margin:8}}>
                    <CardContent>
                        <Typography variant="body1"   style={{ fontWeight: 400 , fontSize:48}}>3</Typography>
                        <Typography variant="body2"   style={{ fontSize:18}}> Awards Rewarding Academic Excellency</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} sm style={{ backgroundColor: theme.palette.primary.main, margin:8,color:"white"}}>
                    <CardContent>
                        <Typography variant="body1"   style={{ fontWeight: 400 , fontSize:48}}>7</Typography>
                        <Typography variant="body2"   style={{ fontSize:18}}> Websites Created During Internships</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} sm style={{ margin:8}}>
                    <CardContent>
                        <Typography variant="body1"    style={{ fontWeight: 400 , fontSize:48}}>1</Typography>
                        <Typography variant="body2"    style={{ fontSize:18}}>International Conference Award</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} sm style={{ backgroundColor: theme.palette.primary.main, margin:8,color:"white"}}>
                    <CardContent>
                        <Typography variant="body1"   style={{ fontWeight: 400 , fontSize:48}}>1</Typography>
                        <Typography variant="body2"    style={{ fontSize:18}}>Scientific Publication</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Box>
    )
}

class Contact extends React.Component{
    render(){
        return(
            <Box id="Contact"  m={3} >
                <Typography variant="h2" align={"center"} style={{ fontWeight: 400 }}>{<Mail/>} Contact me</Typography>
                <Paper style={{margin:16}}>
                    <Box  p={1} style={{marginLeft:16}}>

                        <TextField id="name" label="Name" variant="filled" margin="dense" size="small" required={true}  style={{marginRight:40}} />

                        <TextField id="email" label="Email" variant="filled" margin="dense" size="small" required={true} />
                    </Box>
                    <Box  p={1} style={{marginLeft:16}}>

                        <TextField id="subject" label="Subject" variant="filled" margin="dense" size="small" required={true} />
                    </Box>
                    <Box  p={1} style={{marginLeft:16, marginRight:16}}>
                        <TextField id="message" label="Message" variant="filled" margin="dense" size="small" required={true} fullWidth={true} multiline={true} minRows={5} />
                    </Box>
                    <Box  p={1} style={{marginLeft:16, paddingBottom:16}}>
                    <Button type="submit" variant="contained" color="primary" endIcon={<Send/>}>Send</Button>
                    </Box>


                </Paper>
            </Box>
        )
    }
}

function Copyright() {
    return (
        <Box m={1}>
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://lancineconde.me/">
                Lanciné Condé
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
        </Box>
    );
}

export default App;
