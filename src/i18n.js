import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: false,
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    header:{
                        home:"Home",
                        skills:"Skills",
                        experience:"Experience",
                        projects:"Projects",
                        achievements:"Achievements",
                        contact:"Contact",
                        french:"Français",
                        english:"English"
                    },
                    about:{
                        location:"Conakry, Guinea",
                        profile:"Bilingual (French & English) Computer Science graduate from Lancaster University Ghana",
                        date:"Date of birth: 09/1993",
                        nationality:"Nationality: Guinean",
                        gender:"Gender: Male",
                        interests:"Interests: Programming, Reading, Football, Anime",
                        cv:"Download CV"
                    },
                    skills:{
                        title:" Skills",
                        programming_languages: {
                            title: " Programming",
                            java:"Java",
                            javascript:"Javascript",
                            python:"Python",
                            android:"Android",
                            kotlin:"Kotlin",
                            node:"Node JS",
                            c:"C"
                        },
                        design: {
                            title: " UI design",
                            material_design:"Material Design",
                            wordpress:"Wordpress",
                            react:"React JS",
                            responsive_design: "Responsive Design",
                            bootstrap:"Bootstrap",
                            adobeDX: "Adobe XD Prototyping",
                            gui:"JavaFX & Swing GUIs"
                        },
                        technical:{
                            title:" Technical Skills",
                            gcp:"GCP & Firebase",
                            git:"Git",
                            databases:"Databases (SQL, NoSQL)",
                            engineering:"Software Engineering",
                            management:"Project Management",
                            agile:"Agile & Scrum",
                        },
                        personal: {
                            title: " Personal skills",
                            dedication: "Dedication",
                            critical_thinking: "Critical Thinking",
                            autonomy: "Autonomy",
                            teamwork: "Teamwork",
                            communication: "Communication",
                            adaptability: "Adaptability"
                        }
                    },
                    experience:{
                        title_experience:" Experience",
                        title_education:" Education",
                        title_journey:" My Journey",
                        show_more:"Show More",
                        show_less:"Show Less",
                        london:{
                            h3:"Master of Science in Computer Science",
                            sub1:"(Online)",
                            h4:"University of East London",
                            sub2:"UNICAF Scholarship",
                            date:"2022 (Ongoing)",
                            list: {
                                l0:"Advanced Software Engineering",
                                l1:"Big Data Analytics",
                                l2:"Artificial Intelligence and Machine Vision",
                                l3:"Cloud Computing",
                            }
                        },lancaster:{
                            h3:"Honours Bachelor of Science in Computer Science",
                            sub1:"(Accra, Ghana)",
                            h4:"Lancaster University Ghana",
                            sub2:"Ghanaian campus of a renowned British university",
                            date:"2021",
                            list: {
                                l0:"First Class Degree. GPA: 20.4/24",
                                l1:"Advanced Programming Concepts",
                                l2:"Software Design",
                                l3:"Internet Applications Engineering",
                                l4:"Artificial Intelligence",
                                l5:"Databases, Cybersecurity & Risk",
                                l6:"Computer Networks",
                                l7:"Human computer Interaction",
                            }
                        },
                        devhoster:{
                            h3:"Web Developer",
                            sub1:"(Conakry, Guinea)",
                            h4:"DevHoster",
                            sub2:"Small digital marketing agency from Guinea",
                            date:"2018 Jan-Jul",
                            list: {
                                l0:"Website development using WordPress and PrestaShop",
                                l1:"Establishing requirements",
                                l2:"Configuring email addresses via the WMH cPanel and Microsoft Outlook",
                                l3:"Administration of clients´ websites",
                                l4:"Maintenance of computer equipment and the NAS server",
                            }
                        },
                        icls: {
                            h3: "Intensive English Language Program Certification – ACTFL",
                            sub1: "(Washington DC, USA)",
                            h4: "International Center for Language Studies",
                            sub2: "International language school in Washington DC",
                            date:"2017",
                            list: {
                                l0:"Reading: Advanced",
                                l1:"Listening: Advanced",
                                l2:"Speaking: Intermediate",
                            }
                        },
                        lyon3:{
                            h3:"Bachelor in Management and Social Sciences*",
                            sub1:"(Lyon, France)",
                            h4:"IAE Lyon 3",
                            sub2:"French public university in Lyon",
                            date:"2016",
                            list: {
                                l0:"*Completed up to 2nd year. GPA: 9.85/20",
                                l1:"Project Management",
                                l2:"Information Systems, Algorithms and Databases",
                                l3:"Algebra & Statistics",
                                l4:"Strategic Marketing",
                                l5:"Fundamentals of Economics & Finance",
                                l6:"Introductions to Civil Law & Accounting",
                            }
                        },
                        oxygene:{
                            h3:"Internship in Communication",
                            sub1:"(Lyon, France)",
                            h4:"Association Génération Oxygène",
                            sub2:"Local association, mostly ran by interns, in charge of organising the marathon of Lyon",
                            date:"2015 Jul-Sep",
                            list: {
                                l0:"Recruiting helpers via telemarketing",
                                l1:"Creating and distributing information flyers",
                                l2:"Marking screenshots using Microsoft Publisher to indicate the roads to be blocked for the race",
                                l3:"Administrative maintenance",
                                l4:"Recruitment and formation of the next batch of intern",
                            }
                        }
                    },
                    projects:{
                        title:" Projects",
                        learn_more:"Learn More",
                        see_code:"See Code",
                        coming_soon:"Coming Soon!",
                        wemath:{
                            sub1:"2nd Year Group Project",
                            description:"WeMath is an Android application for teaching mathematics to middle and high school Ghanaian students, with a focus on crowdlearning.",
                            list:{
                                l0:"Leader of a team of 4 for the project",
                                l1:"Responsible for the architectural & UI designs of the app and the backend",
                                l2:"It has features such as math lessons, custom quiz creation and commenting"
                            }
                        },
                        fredbot:{
                            sub1:"Final Year Project",
                            description:"This project saw the construction of an intelligent tutoring system in the form of a chatbot called Fredbot to teach French vocabulary to English speakers.",
                            list:{
                                l0:"Created using Google Dialogflow",
                                l1:"Key features include vocabulary lessons, scenario rehearsal, story reading and TTS replies",
                                l2:"Accompanying research on chatbots for e-learning won an award for the best STEM presentation at the Lancaster Global Undergraduate Conference"
                            }
                        }
                    },
                    achievements:{
                        title:" Achievements",
                        provost:"Awards Rewarding Academic Excellency",
                        websites:"Websites Created During Internships",
                        conference_award:"International Conference Award",
                        scientific_publication:"Scientific Publication",
                        scientific_publication_date:"(Nov 2021?)"
                    },
                    contact:{
                        title:" Get In Touch",
                        name:"Name",
                        email:"Email",
                        subject:"Subject",
                        message:"Message",
                        send_message:"Send Message",
                        thankyou:" Thank you for your feedback!"
                    },
                    footer:{
                        made_using:"Made using",
                        and:"and",
                    }
                }
            },

            fr: {
                translation: {
                    header:{
                        home:"Accueil",
                        skills:"Compétences",
                        experience:"Expérience",
                        projects:"Projets",
                        achievements:"Réalisations",
                        contact:"Contact",
                        french:"Français",
                        english:"English"
                    },
                    about:{
                        location:"Conakry, Guinée",
                        profile:"Diplômé bilingue (français et anglais) en informatique scientifique de l'université de Lancaster au Ghana.",
                        date:"Date de naissance: 09/1993",
                        nationality:"Nationalité: Guinéen",
                        gender:"Genre: Homme",
                        interests:"Intérêts : Programmation, Lecture, Football, Anime",
                        cv:"Télécharger CV"
                    },
                    skills:{
                        title:" Compétences",
                        programming_languages: {
                            title: " Programmation",
                            java:"Java",
                            javascript:"Javascript",
                            python:"Python",
                            android:"Android",
                            kotlin:"Kotlin",
                            node:"Node JS",
                            c:"C",
                        },
                        design: {
                            title: " Design",
                            material_design:"Material Design",
                            wordpress:"Wordpress",
                            react:"React JS",
                            responsive_design: "Design réactif",
                            bootstrap:"Bootstrap",
                            adobeDX: "Prototypage Adobe XD",
                            gui:"Interfaces JavaFX & Swing"
                        },
                        technical:{
                            title:" Compétences Techniques",
                            gcp:"GCP & Firebase",
                            git:"Git",
                            databases:"Bases de données",
                            engineering:"Conception de logiciels",
                            management:"Management de Projets",
                            agile:"Agile & Scrum",
                        },
                        personal: {
                            title: " Aptitudes Personnelles",
                            dedication: "Dévouement",
                            critical_thinking: "Réflexion critique",
                            autonomy: "Autonomie",
                            teamwork: "Esprit d'équipe",
                            communication: "Communication",
                            adaptability: "Adaptabilité"
                        }
                    },
                    experience:{
                        title_experience:" Expérience",
                        title_education:" Éducation",
                        title_journey:" Mon parcours",
                        show_more:"Voir Plus",
                        show_less:"Voir Moins",
                        london:{
                            h3:"Master of Science in Computer Science",
                            sub1:"(Online)",
                            h4:"University of East London",
                            sub2:"UNICAF Scholarship",
                            date:"2022 (En cours)",
                            list: {
                                l0:"Advanced Software Engineering",
                                l1:"Big Data Analytics",
                                l2:"Artificial Intelligence and Machine Vision",
                                l3:"Cloud Computing",
                            }
                        },lancaster:{
                            h3:"License en informatique scientifique",
                            sub1:"(Accra, Ghana)",
                            h4:"Lancaster University Ghana",
                            sub2:"Campus ghanéen d'une université britannique renommée",
                            date:"2021",
                            list: {
                                l0:"Mention Très Bien. Moyenne: 20.4/24",
                                l1:"Programmation avancée",
                                l2:"Conception de logiciels",
                                l3:"Ingénierie des applications Internet",
                                l4:"Intelligence artificielle",
                                l5:"Bases de données, cybersécurité et risques",
                                l6:"Réseaux informatiques",
                                l7:"Interaction homme-machine",
                            }
                        },
                        devhoster:{
                            h3:"Développeur web",
                            sub1:"(Conakry, Guinée)",
                            h4:"DevHoster",
                            sub2:"Petite agence de marketing numérique de Guinée",
                            date:"2015 Jan-Juil",
                            list: {
                                l0:"Développement de sites web avec WordPress et PrestaShop",
                                l1:"Établissement du cahier des charges",
                                l2:"Configuration d’adresses e-mail via le cPanel WMH et Microsoft Outlook",
                                l3:"Administration des sites web des clients",
                                l4:"Maintenance du matériel informatique et du serveur NAS",
                            }
                        },
                        icls: {
                            h3: "Certification de programme d'anglais intensif - ACTFL",
                            sub1: "(Washington DC, USA)",
                            h4: "International Center for Language Studies",
                            sub2: "École de langue internationale à Washington DC",
                            date:"2017",
                            list: {
                                l0:"Lecture: Avancé",
                                l1:"Écoute: Avancé",
                                l2:"Discours: Intermédiaire",
                            }
                        },
                        lyon3:{
                            h3:"Licence en gestion et sciences sociales*",
                            sub1:"(Lyon, France)",
                            h4:"IAE Lyon 3",
                            sub2:"Université publique française de Lyon",
                            date:"2016",
                            list: {
                                l0:"*Complété jusqu'à la 2ème année. Moyenne: 9.85/20",
                                l1:"Gestion de projet",
                                l2:"Systèmes d'information, algorithmes et bases de données",
                                l3:"Algèbre & Statistique",
                                l4:"Marketing stratégique",
                                l5:"Fondamentaux de l'économie et de la finance",
                                l6:"Introductions au droit civil et à la comptabilité",
                            }
                        },
                        oxygene:{
                            h3:"Stage en Communication",
                            sub1:"(Lyon, France)",
                            h4:"Association Génération Oxygène",
                            sub2:"Association locale, principalement animée par des stagiaires, chargée d'organiser le marathon de Lyon",
                            date:"2015 Juil-Sep",
                            list: {
                                l0:"Recrutement de bénévoles par télémarketing",
                                l1:"Création et distribution de flyers",
                                l2:"Réalisation de captures d'écran à l'aide de Microsoft Publisher pour indiquer les routes à bloquer pour la course",
                                l3:"Maintenance administrative",
                                l4:"Recrutement et formation de la prochaine promotion de stagiaires",
                            }
                        }
                    },
                    projects:{
                        title:" Projets",
                        learn_more:"En Savoir Plus",
                        see_code:"Voir Code",
                        coming_soon:"Bientôt disponible!",
                        wemath:{
                            sub1:"Projet de 2ème année",
                            description:"WeMath est une application Android destinée à enseigner les mathématiques aux élèves ghanéens des collèges et lycées, en mettant l'accent sur le crowdlearning.",
                            list:{
                                l0:"Chef d'une équipe de 4 personnes pour le projet",
                                l1:"Responsable de la conception de l'architecture et de l'interface utilisateur de l'app et du backend",
                                l2:"A des fonctionnalités telles que des leçons de mathématiques, la création de quiz personnalisés et des commentaires"
                            }
                        },
                        fredbot:{
                            sub1:"Projet de dernière année",
                            description:"Ce projet a vu la construction d'un système de tutorat intelligent sous la forme d'un chatbot appelé Fredbot pour enseigner le vocabulaire français aux anglophones",
                            list:{
                                l0:"Créé à l'aide de Google Dialogflow",
                                l1:"Les principales fonctionnalités comprennent des leçons de vocabulaire, la répétition de scénarios, la lecture d'histoires et des réponses TTS",
                                l2:"La recherche connexe sur les chatbots et l'e-learning a été récompensée par le prix de la meilleure présentation STEM à la Conférence Globale de université Lancaster"
                            }
                        }
                    },
                    achievements:{
                        title:" Réalisations",
                        provost:"Prix récompensant l'excellence académique",
                        websites:"Sites web créés pendant les stages",
                        conference_award:"Prix à une conférence internationale",
                        scientific_publication:"Publication scientifique",
                        scientific_publication_date:"(Nov 2021?)"
                    },
                    contact:{
                        title:" Prendre contact",
                        name:"Nom",
                        email:"E-mail",
                        subject:"Sujet",
                        message:"Message",
                        send_message:"Envoyer Message",
                        thankyou:" Merci pour vos commentaires!"
                    },
                    footer:{
                        made_using:"Conçu avec",
                        and:"et",
                    }
                }

            }
        }
    });

export default i18n;