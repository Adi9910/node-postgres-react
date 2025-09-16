import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Phone, Email, LocationOn, Language } from "@mui/icons-material";
import ReactApexChart from "react-apexcharts";
import mypic from "./mypic.jpg"; // Assuming you have a profile picture in the same directory
import mypic2 from "./Aipic.jpg"; // Assuming you have a profile picture in the same directory
import colorpic from "./color.jpg";  // Assuming you have a profile picture in the same directory
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TCSlogo from './tcs2.jpg'; // Assuming you have a TCS logo in the same directory
import aircanada from './aircanada.jpg'; // Assuming you have a TCS logo in the same directory
import amgen from './amgen.jpg'; // Assuming you have a TCS logo in the same directory
import CircleIcon from '@mui/icons-material/Circle';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Bolding = ({text}) => {
    return (
        <span style={{ fontWeight: "bold" }}>{text}</span>
    )
};

const ApexChart = (
    <Grid container spacing={1}>

        <Grid size={12} sx={{display: 'flex', mt:1, mb:0, justifyContent: 'center', width:'100%'}}>
            <Box pt={1} sx={{width: '50%'}}>                
                <Box paddingLeft={2}>
                    <Box fontSize={20} color='#000' textAlign='left' mb={1} >React</Box>
                    <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1, py:1}}>
                        <Box><Box component="span" sx={{fontWeight:'bold',lineHeight:1.4}}>Libraries : </Box>Material UI, Recharts, ChartJS, Apexcharts, AG Grid</Box>
                        <Box mt={1}><Box component="span" sx={{fontWeight:'bold',lineHeight:1.4}}>Concepts : </Box>Redux Toolkit, Context API</Box>
                    </Box>
                </Box>                
            </Box>
            <Box  sx={{width: '50%'}}>                
                <Box paddingLeft={2}>
                    <Box fontSize={20} color='#000' textAlign='left' mb={1} >Next.js</Box>
                    <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1, py:1}}>
                        <Box><Box component="span" sx={{fontWeight:'bold',lineHeight:1.4}}>Libraries : </Box>Material UI, Recharts, ChartJS, Apexcharts, AG Grid</Box>
                        <Box mt={1}><Box component="span" sx={{fontWeight:'bold',lineHeight:1.4}}>Concepts : </Box>Page & route handling, SSG , SSR, Redux Toolkit, Context API</Box>
                    </Box>
                </Box>                
            </Box>            
        </Grid>

        <Grid size={12} sx={{display: 'flex', mt:1, mb:0, justifyContent: 'center', width:'100%'}}>
            <Box sx={{width: '50%'}}>                
                <Box paddingLeft={2}>
                <Box fontSize={20} color='#000' textAlign='left' mb={1} >Python</Box>
                    <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1, py:1}}>
                        <Box><Box component="span" sx={{fontWeight:'bold',lineHeight:1.4}}>Libraries : </Box>NumPy, Pandas, logger, Fastapi</Box>
                        <Box mt={1}><Box component="span" sx={{fontWeight:'bold',lineHeight:1.4}}>Concepts : </Box>FAST APIs(to create APIs for data transition)</Box>
                    </Box>
                </Box>                
            </Box>
            <Box  sx={{width: '50%'}}>                
                <Box paddingLeft={2}>
                    <Box fontSize={20} color='#000' textAlign='left' mb={1} >NodeJS</Box>
                    <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1, py:1}}>
                        <Box><Box component="span" sx={{fontWeight:'bold',lineHeight:1.4}}>Libraries : </Box>Express.js, Nodemailer, Mysql</Box>
                        <Box mt={1}><Box component="span" sx={{fontWeight:'bold',lineHeight:1.4}}>Concepts : </Box>RESTful APIs, Middleware</Box>
                    </Box>
                </Box>                
            </Box>
        </Grid>

        <Grid size={12} sx={{display: 'flex', mt:1, mb:0, justifyContent: 'center', width:'100%'}}>
            <Box sx={{width: '50%'}}>                
                <Box paddingLeft={2}>
                    <Box fontSize={20} color='#000' textAlign='left' mb={1} >Amazon Web Services</Box>
                    <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1, py:1}}>
                        <Box><Box component="span" sx={{fontWeight:'bold',lineHeight:1.7}}>Services : 
                            </Box>AWS SDK, EC2, S3, Lambda, CloudWatch, API Gateway, DynamoDB, Athena, RDS(Relational Data Base)</Box>
                    </Box>
                </Box>                
            </Box>            
            <Box sx={{width: '50%'}}>          
                <Box paddingLeft={2}>
                    <Box fontSize={20} color='#000' textAlign='left' mb={1} >OTHERS</Box>
                    <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1, py:1}}>
                        <Box><Box component="span" sx={{fontWeight:'bold',lineHeight:1.7}}> 
                            </Box>SQL, GitLab, Jira, Bitbucket, Miro board, ALM (testing tool), 3D experience ENOVIA</Box>
                    </Box>
                </Box>
            </Box>
        </Grid>

    </Grid>
)

const EducationDetails = [
    { pad:0.7, degree: "Master of Computer Applications(MCA)", percentage: 63, Institute:'Mangalayatan University, Beswan Aligarh, U.P.', board:'MU', year: '2024-present (Distance)' },
    { pad:0.7, degree: "Bachelor of Technology(B.Tech)", percentage: 63.77, Institute:'Raj Kumar Goel Institute of Technology, Ghaziabad, U.P.', board:'AKTU', year: '2017-21' },
    { pad:0.7, degree: "Class XII", percentage: 63.5, Institute:'Flora Dale Senior Secondary School, Delhi', board:'CBSE', year: '2016-17' },
    { pad:0.7, degree: "Class X", percentage: 71, Institute:'Flora Dale Senior Secondary School, Delhi', board:'CBSE', year: '2014-15' },
];

export const Format = () => {
return (
    <Box mt={2} p={3} fontFamily="sans-serif">
        
        <Grid container alignItems="center">

            <Grid size={12} mb={4} sx={{borderRadius: "9px 0 0 9px",textAlign: "center"}}>
                <Typography variant="h3" sx={{color: '#000'}}>
                    Aditya <span style={{ fontWeight: "300", marginLeft:18 }}>Choudhary</span>
                </Typography>
            </Grid>
        </Grid>

        <Grid container spacing={1} >
            <Grid size={5} xs={5} pt={3}>
                <List>
                    <ListItem>
                        <Phone fontSize="small" sx={{mt:-2, mr: 1, color:'#000' }} />
                        <ListItemText primary="9910282537" sx={{mt:-2, color: '#000' }} />
                    </ListItem>
                    <ListItem>
                        <Email fontSize="small" sx={{mt:-2, mr: 1, color:'#000' }} />
                        <ListItemText primary="informarcialaditya@gmail.com" sx={{mt:-2, color: '#000' }}  />
                    </ListItem>
                    <ListItem>
                        <Email fontSize="small" sx={{mt:-2, mr: 1, color:'#fff' }} />
                        <ListItemText primary="DOB : 22-Dec-2000" sx={{mt:-2, color: '#000' }}  />
                    </ListItem>
                    <ListItem>
                        <LocationOn fontSize="small" sx={{mt:-1, mr: 1, color:'#000' }} />
                        <ListItemText primary="G-2, 147A, Rose park society, Ext-1, Shalimar garden, Sahibabad, Ghaziabad, Uttar Pradesh, 201005" sx={{mt:-1, color: '#000' }}  />
                    </ListItem>
                </List>
            </Grid>

            <Grid size={7} xs={7} pt={2} mb={2} sx={{borderLeft: '1px solid #000', pl:2}}>
                <Typography variant="h5" gutterBottom color={'#000'}>
                    Professional Summary
                </Typography>
                <Typography sx={{fontSize:14}} color={'#000'}>
                    Highly skilled Full Stack Developer with expertise in 
                    building scalable web applications using React.js, Next.js, NodeJS, 
                    Python, and AWS. Proven track record of designing and deploying 
                    high-performance dashboards and APIs using RESTful APIs (NodeJS) and FastAPIs (Python). 
                    Adept at leading end-to-end development while 
                    optimizing for scalability, security, and user experience.
                </Typography>
            </Grid>

        </Grid>

        <Grid size={12} mt={3}>
            <Grid size={12}>
                <Typography variant="h6" sx={{ my: "-8px",borderBottom:'1px solid black', textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000'}>
                    TECHNICAL SKILLS
                </Typography>
            </Grid>
            <Box sx={{mt:1}}>
                {ApexChart}
            </Box>
        </Grid>

        <Grid container spacing={1} sx={{ pt:2, mt:5}}>
        
            <Grid size={12}>
                <Typography variant="h6" sx={{ my: "-8px",borderBottom:'1px solid black', textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000'}>
                    WORK EXPERIENCE
                </Typography>
            </Grid>

            <Grid size={12}>

                <Box width={'100%'} py={2}>
                    <Typography sx={{ fontSize:'20px', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000'}>
                        TCS (Tata Consultancy Services)
                    </Typography>
                    <Typography sx={{ fontSize:'13px', my: "-8px", textAlign:'center', py:0.4, width:'100%', color:'#000' }} gutterBottom >
                        System Engineer  (16-Dec-2021 – Present)
                    </Typography>
                </Box>

                <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
                    <Box width={'95%'} fontSize={14} pl={2} position={'relative'} pr={2} sx={{color:'#000000'}}>
                    {/* <Box sx={{position:'absolute', height:'100%', width:'100%', top:0, opacity:0.2, left:10, backgroundSize:'cover', backgroundPosition:'center', backgroundImage: `url(${TCSlogo})` }}></Box> */}
                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        As a software engineer at TCS, I have contributed to designing, developing, and deploying scalable web applications by leveraging modern technologies such as AWS, NodeJS, ReactJS, and Python. My role involved cross-functional collaboration, performance optimization, and end-to-end system integration.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        I have worked on enterprise-grade solutions, integrated APIs, and ensured secure and reliable deployments through CI/CD pipelines.
                        </Box>
                        <Box width={'100%'} pt={1} textAlign={'left'} color={'#000000'}><EmojiEventsIcon sx={{fontSize:"19px", mb:-0.4, mr: 1, color:'#000000' }} />
                            I successfully cracked the TCS Digital exam, showing my expertise in Python and MERN 
                            technologies. This resulted in a significant hike in my package.
                        </Box>
                    </Box>
                </Box>

                <Box width={'100%'}  pt={3} pb={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Box width={'80%'} textAlign={'left'} pl={3}>
                        <Typography component={'span'} sx={{ fontSize:'17px', my: "-8px", py:0.4, width:'100%', color:'#000' }} fontWeight={600} gutterBottom >
                            Project 1 : A Canadian airlines company
                        </Typography>
                    </Box>
                    <Box width={'20%'} textAlign={'right'}>
                        <Typography component={'span'} sx={{ fontSize:'17px', my: "-8px", py:0.4, width:'100%', color:'#000' }} fontWeight={600} gutterBottom >
                            (2021 - 2023)
                        </Typography>
                    </Box>
                </Box>

                <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>                    
                    <Box width={'95%'} fontSize={14} pl={2} sx={{position:'relative', color:'#000000'}}>
                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Built and deployed serverless solutions using <Bolding text="AWS Lambda, API Gateway, and DynamoDB"/> to improve scalability and reduce infrastructure costs.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Designed RESTful APIs and integrated them with Lambda functions to enable seamless communication between microservices.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Processed and analyzed 3TB+ of data using <Bolding text="AWS Athena and RDS"/>, optimizing queries for performance and cost-efficiency.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Monitored and debugged AWS Lambda performance issues using CloudWatch Logs and metrics dashboards for real-time insights.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Implemented policies, and security groups to secure services in compliance with organizational standards.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Collaborated with cross-functional teams to design and deploy end-to-end Lambda-based integrations, reducing delivery timelines and enhancing productivity.
                        </Box>

                        <Box mt={1}>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#fff' }} />
                        <span style={{fontWeight:'bold'}}>Extra :{"  "}</span> JIRA, BitBucket, AWS IAM, AWS AppSync.
                        </Box>
                        
                    </Box>
                </Box>

                <Box width={'100%'} pt={1} pb={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Box width={'80%'} textAlign={'left'} pl={3}>
                        <Typography component={'span'} sx={{ fontSize:'17px', my: "-8px", py:0.4, width:'100%', color:'#000' }} fontWeight={600} gutterBottom >
                            Project 2 : An American multinational pharmaceutical company
                        </Typography>
                    </Box>
                    <Box width={'20%'} textAlign={'right'}>
                        <Typography component={'span'} sx={{ fontSize:'17px', my: "-8px", py:0.4, width:'100%', color:'#000' }} fontWeight={600} gutterBottom >
                            (2023 - Present)
                        </Typography>
                    </Box>
                </Box>

                <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
                    <Box width={'95%'} fontSize={14} pl={2} position={'relative'} pr={2} sx={{color:'#000000'}}>
                    
                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Developed responsive and dynamic web applications using <Bolding text="ReactJS, Redux, and Material UI"/>, ensuring mobile-friendly design and consistent component architecture.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Integrated MS Word Office Add-ins using React Taskpane for document generation workflows, leveraging content controls and real-time interaction with user inputs.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Built scalable backend APIs with Python FastAPI and connected them to <Bolding text="AWS RDS for structured data management"/> and efficient CRUD operations.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Utilized React Hooks, Context API, and state management best practices to streamline component interactions.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Optimized frontend performance by implementing <Bolding text="lazy loading, memoization, and efficient DOM rendering"/> techniques, significantly reducing load times.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Followed clean code principles and reusable component design to ensure maintainable React codebase, improving long-term scalability and readability.
                        </Box>

                        <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000' }} />
                        Collaborated with cross-functional teams (UX, QA, and DevOps) for CI/CD integration, user acceptance testing, and fast-tracked deployment cycles.
                        </Box>

                        <Box mt={1}>
                        <ArrowForwardIosIcon sx={{ fontSize: "9px", fontWeight: 600, mt: 0.5, mr: 1, color: '#fff' }} />
                        <span style={{fontWeight:'bold'}}>Extra :{"  "}</span>JIRA, Git, ALM (testing tool), Miro board, 3D experience ENOVIA.
                        </Box>

                    </Box>
                </Box>
            </Grid>

        </Grid>
        
        <Grid container spacing={1} sx={{ pt:2}}>

            <Grid size={6} mt={2}>                
                <Grid size={12}>
                    <Typography variant="h6" sx={{ my: "-8px",borderBottom:'1px solid black', textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000'}>
                        CERTIFICATIONS
                    </Typography>
                </Grid>
                <Grid size={12} mt={1}>
                    <Box px={2} display="flex" fontSize={14} flexDirection="column" justifyContent="space-between" textAlign={'left'}>                            
                        <Box mt={0.5}><CircleIcon sx={{fontSize:"9px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                        Azure cloud fundamentals - Microsoft
                        </Box>
                        <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                        Digital Marketing - Google
                        </Box>
                        <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                        Cloud practitioner classroom - AWS
                        </Box>
                        <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                        Courses certificates
                        </Box>
                        <Box ml={4}>
                            <Box><CircleIcon sx={{fontSize:"8px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                            AWS developer associate - Linkedin Learning
                            </Box><Box><CircleIcon sx={{fontSize:"8px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                            AWS cloud practitioner - Udemy
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid size={6} mt={2} pl={1}>                
                <Grid size={12}>
                    <Typography variant="h6" sx={{ my: "-8px",borderBottom:'1px solid black', textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000'}>
                        SOFT SKILLS
                    </Typography>
                </Grid>
                <Grid size={12} mt={1}>
                    <Box px={2} display="flex" fontSize={14} flexDirection="column" justifyContent="space-between" textAlign={'left'}>                            
                        <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                        Strategic thinking and decision-making
                        </Box>
                        <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                        Empathetic team collaboration
                        </Box>
                        <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                        Initiative and ownership mindset
                        </Box>
                        <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                        Presentation and communication skills
                        </Box>
                        <Box mt={1} mb={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000' }} />
                        Adaptability in fast-paced environments
                        </Box>
                    </Box>
                </Grid>
            </Grid>           

        </Grid>

        <Grid container spacing={1} sx={{pt:2, mt:3}}>
            <Grid size={12}  sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>                
                <Typography variant="h6" sx={{ my: "-8px",borderBottom:'1px solid black', textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000'}>
                    EDUCATION & QUALIFICATIONS
                </Typography>

                <Box sx={{mt:2}}></Box>
                    <Grid  container spacing={1} sx={{ position:'relative'}}>
                        {EducationDetails.map((edu, index) =>(
                            <Grid size={6} pt={edu.pad} key={index}>
                                <Box height={60} sx={{borderRadius:'5px', padding:'9px 2px', border:'1px solid #0005'}}>
                                    <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                        <Box sx={{color:"#000", fontWeight:600}}>{edu.degree}</Box><Box sx={{fontWeight:600}}></Box>
                                    </Box>
                                    <Box px={2} display="flex" flexDirection="column" justifyContent="space-between" textAlign={'left'}>
                                        <Box sx={{color:"#000", fontSize:'12px'}}>{edu.Institute}</Box>
                                    </Box>
                                    <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
                                        <Box sx={{color:"#000", fontWeight:500}}>{edu.board}</Box><Box sx={{fontWeight:600}}>{edu.year}</Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
            </Grid>
        </Grid>

    </Box>
)};


