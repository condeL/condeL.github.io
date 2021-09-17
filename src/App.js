import avatar from './media/avatar.jpg';
import wemath from './media/wemath.png';
import fredbot from './media/fredbot.png';
import cv from './files/Lanciné Condé CV.pdf'


import React, {useState} from 'react';
import './App.css';
import {
    Build,
    BusinessCenter,
    CloudDownload,
    Code,
    Create,
    DeveloperMode,
    Email,
    EmojiEvents,
    GitHub,
    Home,
    ImportantDevices,
    LinkedIn,
    Mail,
    Mood,
    School,
    Send,
    WhatsApp,
} from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import {useForm} from '@formspree/react';


import {
    AppBar,
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Collapse,
    Container,
    Divider,
    Drawer,
    Grid,
    IconButton,
    LinearProgress,
    Link,
    List,
    ListItemText,
    Paper,
    TextField,
    Toolbar,
    Typography,
    useTheme
} from "@material-ui/core";
import {
    Rating,
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@material-ui/lab";

const useStyles =  makeStyles(theme => ({
    paper: {
        background: theme.palette.primary.main,
        color: 'white'
    }
}));

function App() {
    return (
        <Container maxWidth="md">
            <Header/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Achievements/>
            <Contact/>
            <Footer/>
        </Container>
    );
}


function Header(){

    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;


    React.useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    return(
        <AppBar position = "sticky" >
            {mobileView ? <HeaderMenuMobile/> : <HeaderMenuDesktop/>}

            <LinearProgressBar/>
        </AppBar>
    )
}

function LinearProgressBar(){
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {

        let computeProgress = () => {
            // The scrollTop gives length of window that has been scrolled
            const scrolled = document.documentElement.scrollTop;
            // scrollHeight gives total length of the window and
            // The clientHeight gives the length of viewport
            const scrollLength = document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = `${100*scrolled/scrollLength}`;

            setProgress(progress);
        }

        // Adding event listener on mounting
        window.addEventListener("scroll", computeProgress);

        // Removing event listener upon unmounting
        return () => window.removeEventListener("scroll", computeProgress);
    })
    return(
        <LinearProgress variant="determinate" color="secondary" value={progress} />

    )
}

function HeaderMenuDesktop(){
    return(
        <Toolbar variant="dense" style={{ justifyContent: "center"}}>
            <Button variant="text" href="#Home" startIcon={<Home/>} style={{color: "white"}}>Home</Button>
            <Button variant="text" href="#Skills" style={{color: "white"}}>Skills</Button>
            <Button variant="text" href="#Experience" style={{color: "white"}}>Experience</Button>
            <Button variant="text" href="#Projects" style={{color: "white"}}>Projects</Button>
            <Button variant="text" href="#Achievements" style={{color: "white"}}>Achievements</Button>
            <Button variant="text" href="#Contact" style={{color: "white"}}>Contact</Button>
        </Toolbar>
    )
}

function HeaderMenuMobile() {

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const styles = useStyles();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <Toolbar variant="dense">
            <>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={handleDrawerClose}
                    classes={{ paper: styles.paper }}
                    onClick={handleDrawerClose}
                >
                    <Button variant="text" href="#Home" startIcon={<Home/>} style={{color: "white"}}>Home</Button>
                    <Button variant="text" href="#Skills" style={{color: "white"}}>Skills</Button>
                    <Button variant="text" href="#Experience" style={{color: "white"}}>Experience</Button>
                    <Button variant="text" href="#Projects" style={{color: "white"}}>Projects</Button>
                    <Button variant="text" href="#Achievements" style={{color: "white"}}>Achievements</Button>
                    <Button variant="text" href="#Contact" style={{color: "white"}}>Contact</Button>
                </Drawer>
            </>
        </Toolbar>
    )
}

function About (){

    return (
        <Paper elevation={2} id="Home" m={3}>
            <Box p={2}  m={2} textAlign="center">
                <Box style={{ justifyContent: "center", display: "flex" }}>
                    <Avatar src={avatar} style={{ width: 200, height:200}}/>
                </Box>
                <Typography variant="h1" display="inline">Lanciné{' '}
                    <Typography variant="h1" color="primary" display="inline" style={{ fontWeight: 400 }}>Condé</Typography>
                </Typography>
                <Box>
                    <Typography variant="subtitle1" display="inline">Kountia, Conakry, Guinea
                        <Typography variant="subtitle1" display="inline"> | (+224) 610 39 13 93 |{' '}</Typography>

                        <Link href="mailto:lancine.condee@gmail.com">lancine.condee@gmail.com</Link>

                    </Typography>
                </Box>
                <Typography variant="body1" paragraph="true">
                    <p>Bilingual (French & English) Computer Science graduate from Lancaster University Ghana<br />
                        Date of birth: 09/1993<br />
                        Nationality: Guinean<br />
                        Gender: Male<br />
                        Interests: Programming, Reading, Anime</p>
                </Typography>
                <Box m={1}>
                    <Link href="https://github.com/condeL" rel="noopener noreferrer"><GitHub /></Link>
                    <Link href="https://www.linkedin.com/in/lanciné-condé-493511214/" rel="noopener noreferrer"><LinkedIn /></Link>
                </Box>
                <box>
                    <Button variant="contained"
                            startIcon={<CloudDownload/>}
                            color="primary"
                            style={{color: "white"}}
                            onClick={() => {window.open(cv, "_blank")}
                            }>
                        Download CV
                    </Button>
                </box>
            </Box>
        </Paper>
    )

}

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


function Skills(){
    const theme = useTheme();

    return (
        <Box id="Skills" m={3}>
            <Typography variant="h2" align="center" style={{ fontWeight: 400 }}>{<Create/>} Skills</Typography>
            <Grid container spacing={1} alignItems="stretch" style={{ marginTop: 8 }}>
                <Grid item md={1}/>
                <Grid item component={Card} xs={12} md={5} style={{ margin: 8 ,backgroundColor: theme.palette.primary.main, color: "white"  }}>
                    <CardContent>
                        <Typography variant="h3" align="center"><DeveloperMode/> Programming Languages</Typography>
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
                        <Typography variant="h3" align="center"><ImportantDevices/> UI Design</Typography>
                        <Typography variant="body1">
                            <CreateSkillList list={[
                                {name:"Material Design", value:4.5},
                                {name:"Wordpress", value:4},
                                {name:"React", value:4},
                                {name:"Responsive Design", value:3.5},
                                {name:"Flutter", value:3},
                                {name:"Adobe DX Prototyping", value:2.5},
                                {name:"JavaFX & Swing GUIs", value:2.5},
                            ]} color={false}/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item md={1}/>

                <Grid item component={Card} xs={12} md={5} style={{ margin: 8}}>

                    <CardContent>
                        <Typography variant="h3" align="center"><Build/> Technical Skills</Typography>
                        <Typography variant="body1">
                            <CreateSkillList list={[
                                {name:"GCP & Firebase", value:4},
                                {name:"Git", value:4},
                                {name:"Databases (SQL, NoSQL)", value:4},
                                {name:"Software Engineering", value:3.5},
                                {name:"Project management", value:3.5},
                                {name:"Agile & Scrum", value:3.5},
                            ]} color={false}/>

                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={5} style={{ margin: 8 ,backgroundColor: theme.palette.primary.main, color: "white" }}>

                    <CardContent>
                        <Typography variant="h3" align="center"><Mood/> Personal skills</Typography>
                        <Typography variant="body1">
                            <CreateSkillList list={[
                                {name:"Dedication", value:5},
                                {name:"Critical Thinking", value:4.5},
                                {name:"Autonomy", value:4.5},
                                {name:"Teamwork", value:4},
                                {name:"Communication", value:4},
                                {name:"Adaptability", value:4},
                            ]} color={true}/>
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
            <Box textAlign="center" id="Experience" m={3}>
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
                                h3:"Honours Bachelor of Science in Computer Science",
                                sub1:"(Accra, Ghana)",
                                h4:"Lancaster University Ghana",
                                sub2:"Ghanaian campus of a renowned British university",
                                list:[
                                    "First Class Degree. GPA: 20.4/24",
                                    "Advanced Programming Concepts",
                                    "Software Design",
                                    "Internet Applications Engineering",
                                    "Artificial Intelligence",
                                    "Databases, Cybersecurity & Risk",
                                    "Computer Networks",
                                    "Human computer Interaction",
                                ]
                            }}/>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                2018 January - July
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
                                sub1:"(Conakry, Guinea)",
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
                                h3:"Intensive English Language Program Certification – ACTFL",
                                sub1:"(Washington DC, USA)",
                                h4:"International Center for Language Studies",
                                sub2:"International language school in Washington DC",
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
                                h3:"Bachelor in Management and Social Sciences*",
                                sub1:"(Lyon, France)",
                                h4:"IAE Lyon 3",
                                sub2:"French public university in Lyon",
                                list:[
                                    "*Completed up to 2nd year. GPA: 9.85/20",
                                    "Project Management",
                                    "Information Systems, Algorithms and Databases",
                                    "Algebra & Statistics",
                                    "Strategic Marketing",
                                    "Fundamentals of Economics & Finance",
                                    "Introductions to Civil Law & Accounting",
                                ]
                            }}/>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                2015 July - September
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary"/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{textAlign:"center"}}>
                            <CreateCard content={{
                                h3:"Internship in Communication",
                                sub1:"(Lyon, France)",
                                h4:"Association Génération Oxygène",
                                sub2:"Local association, mostly ran by interns, in charge of organising the marathon of Lyon",
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
                        <Typography gutterBottom variant="h3" >
                            WeMath
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" color="primary">
                            2nd Year Group Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            WeMath is an Android application for teaching mathematics to middle and high school Ghanaian students,
                            with a focus on crowdlearning.
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
                            <Typography gutterBottom variant="body2">Leader of a team of 3 for the project</Typography>
                            <Divider/>
                            <Typography gutterBottom variant="body2">Responsible for the architectural & UI designs of the app and the backend</Typography>
                            <Divider/>
                            <Typography variant="body2">It has features such as math lessons, custom quiz creation and commenting</Typography>
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
                        <Typography gutterBottom variant="h3">
                            Fredbot
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" color="primary">
                            Final Year Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            This project saw the construction of an intelligent tutoring system in the form of a chatbot
                            called Fredbot to teach French vocabulary to English speakers.
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="primary" onClick={handleExpandClick}>
                            Learn More
                        </Button>

                        <Button variant="contained" color="secondary" startIcon={<GitHub/>} disabled>
                            Coming Soon!
                        </Button>
                    </CardActions>
                    <CardContent>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Typography gutterBottom variant="body2">Created using Google Dialogflow</Typography>
                            <Divider/>
                            <Typography gutterBottom variant="body2">Key features include vocabulary lessons, scenario rehearsal, story reading and TTS replies</Typography>
                            <Divider/>
                            <Typography variant="body2">Accompanying research on chatbots for e-learning won an award
                                for the best STEM presentation at the Lancaster Global Undergraduate Conference</Typography>
                        </Collapse>
                    </CardContent>
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
            <Grid container spacing={1} style={{ marginTop: 8 }} >
                <Grid item component={Card} xs={12} sm style={{margin:8}}>
                    <CardContent>
                        <Typography variant="body1"   style={{ fontWeight: 400 , fontSize:48}}>3</Typography>
                        <Typography variant="body2"   style={{ fontSize:18}}> Awards Rewarding Academic Excellency</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} sm style={{ backgroundColor: theme.palette.primary.main, margin:8,color:"white"}}>
                    <CardContent>
                        <Typography variant="body1"   style={{ fontWeight: 400 , fontSize:48}}>6</Typography>
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
                        <Typography variant="body1" style={{ fontWeight: 400 , fontSize:48}}>1</Typography>
                        <Typography variant="body2" style={{ fontSize:18}}>Scientific Publication</Typography>
                        <Typography variant="body2" style={{ fontSize:16}}>(Nov 2021)</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Box>
    )
}

function Contact(){

    const [state, handleSubmit] = useForm("xknkyodn");
    if (state.succeeded) {
        return (
            <Box id="Contact"  m={3} >
                <Typography variant="h2" align={"center"} style={{ fontWeight: 400 }}>{<Mail/>} Get In Touch</Typography>
                <Paper style={{margin:16}}>
                    <Typography variant="h3" align={"center"} style={{ fontWeight: 300, padding:40 }}> Thank you for your feedback!</Typography>
                </Paper>
            </Box>
        )
    }

    return(
        <Box id="Contact"  m={3} >
            <Typography variant="h2" align={"center"} style={{ fontWeight: 400 }}>{<Mail/>} Get In Touch</Typography>
            <Paper style={{margin:16}}>
                <form onSubmit={handleSubmit}>

                    <Box  p={1} style={{marginLeft:16}}>
                        <TextField id="name" label="Name" name="name" variant="filled" margin="dense" size="small"  style={{marginRight:40}} />

                        <TextField id="email" label="Email" name="email" type="email" variant="filled" margin="dense" size="small" required={true} />
                    </Box>

                    <Box  p={1} style={{marginLeft:16}}>

                        <TextField id="subject" label="Subject" name="subject" variant="filled" margin="dense" size="small" required={true} />
                    </Box>

                    <Box  p={1} style={{marginLeft:16, marginRight:16}}>
                        <TextField id="message" label="Message" name="message" variant="filled" margin="dense" size="small" required={true} fullWidth={true} multiline={true} minRows={5} />
                    </Box>

                    <Box  p={1} style={{marginLeft:16, paddingBottom:16}}>
                        <Button type="submit" variant="contained" color="primary" disabled={state.submitting} onSubmit={ () => {handleSubmit()} } endIcon={<Send/>}>Send Message</Button>
                    </Box>

                </form>

            </Paper>
        </Box>
    )
}


function Footer(){
    const theme = useTheme();

    return(
        <Box textAlign="center">
            <Paper style={{ backgroundColor: theme.palette.primary.main, margin:8,color:"white"}}>
                <Box display="flex" p={1} justifyContent="center">
                    <Typography variant="body1"  display="inline" style={{fontSize:18, fontWeight: 400, marginRight:20}}>{<WhatsApp/>} (+224) 610 39 13 93</Typography>
                    <Typography variant="body1"  display="inline" style={{fontSize:18, fontWeight: 400}}> {<Email/>} {<Link href="mailto:lancine.condee@gmail.com" color="inherit">lancine.condee@gmail.com</Link>}</Typography>
                </Box>
                <Divider variant="middle" style={{backgroundColor:"white"}}/>
                <Box p={1}>
                    <Typography variant="body1" style={{color:"white"}}>{'Copyright © '}
                        <Link color="inherit" href="https://lancineconde.me/">
                            Lanciné Condé
                        </Link>{' '}
                        {new Date().getFullYear()}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}


export default App;
