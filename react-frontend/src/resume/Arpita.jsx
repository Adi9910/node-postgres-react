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
import TCSlogo from './TCS.jpg'; // Assuming you have a TCS logo in the same directory
import aircanada from './aircanada.jpg'; // Assuming you have a TCS logo in the same directory
import zf from './ZF.jpg'; // Assuming you have a TCS logo in the same directory
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

const ApexChart = (
    <Grid container spacing={1}>
      <Grid size={6}>
        <Box paddingLeft={2} mb={2}>
          <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>IT Infrastructure & Support Tools</Box>
          <Box pl={1} textAlign="left" fontSize={14}>
            <Box display="flex" flexDirection="column" justifyContent="space-between" textAlign={'left'}>                            
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                Windows OS (Client/Server)
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                Microsoft Outlook & Exchange Server
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                Antivirus & Patch Management Tools
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                SCCM (System Center Configuration Manager)
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                Active Directory & Group Policy Management
                </Box>
            </Box>
          </Box>
        </Box>

        <Box paddingLeft={2} my={3}>
          <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>Programming & Scripting</Box>
          <Box pl={1} textAlign="left" fontSize={14}>
            <Box display="flex" flexDirection="column" justifyContent="space-between" textAlign={'left'}>                            
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                    Python (Scripting, Automation) - LabelImg
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                    Automation for Annotation Pipelines
                </Box>
            </Box>
          </Box>
        </Box>

      </Grid>

      <Grid size={6}>
        <Box paddingLeft={2} mb={2}>
          <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>Networking & ITSM Tools</Box>
          <Box pl={1} textAlign="left" fontSize={14} sx={{lineHeight:0.8}}>
            <Box display="flex" flexDirection="column" justifyContent="space-between" textAlign={'left'}>                            
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                IP Configuration, DNS, DHCP
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                GHD / ITSM Ticketing Tools
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                Network Connectivity Diagnostics
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                Firewall and Zscaler configuration
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                VPN and Remote Access Support
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                LAN/WAN Troubleshooting
                </Box>
            </Box>
          </Box>
        </Box>

        <Box paddingLeft={2} my={3}>
          <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>Cloud & Database Technologies</Box>
          <Box pl={1} textAlign="left" fontSize={14}>
            <Box display="flex" flexDirection="column" justifyContent="space-between" textAlign={'left'}>                            
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                    AWS Dynamo DB
                </Box>
                <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                    NoSQL Data Modeling
                </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
  </Grid>
)

const ApexChartPie = ({series, labels, wide}) => {
    const state = ({      
        series: series,
        options: {
          chart: {
            width: '80%',
            height: '70%',
            type: 'pie',
          },
          labels: labels,
          theme: {
            monochrome: {
              enabled: true,
            },
          },
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5,
              },
            },
          },
          grid: {
            padding: {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            },
          },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            },
          },
          legend: {
            show: false,
          },
        },      
    });

    return (
      <div>
        <div id="chart" style={{ width:wide, height: wide }}>
            <ReactApexChart options={state.options} series={state.series} type="pie" />
          </div>
        <div id="html-dist"></div>
      </div>
    );
}


const EducationDetails = [
    { pad:0.7, degree: "Master of Computer Applications(MCA)", percentage: 62, Institute:'Mangalayatan University, Beswan Aligarh, U.P.', board:'MU', year: '2024-present (distance)' },
    { pad:0.7, degree: "Bachelor of Computer Applications(BCA)", percentage: 60.89, Institute:'Institute of Technology and Science, Ghaziabad, U.P.', board:'CCS', year: '2018-21' },
    { pad:0.7, degree: "Class XII", percentage: 60.6, Institute:'National Public Senior Secondary School, Ghaziabad, U.P.', board:'CBSE', year: '2017-18' },
    { pad:0.7, degree: "Class X", percentage: 72.2, Institute:'St. Thomas School, Ghaziabad, U.P.', board:'CBSE', year: '2015-16' },
];

const Resume = ({ resume }) => {
return (
    <Box p={3} fontFamily="sans-serif">
        
        <Grid container alignItems="center" my={3}>

            <Grid
                item
                size={12}
                sx={{
                    backgroundColor: "#8fd4fb",
                    padding: 2,
                    borderRadius: "10px 0 0 10px",
                }}
            >
                <Typography variant="h2" sx={{color: '#000000bd'}}>
                    {resume?.split(" ")[0]}{" "}
                    <span style={{ fontWeight: "300" }}>{resume?.split(" ")[1]}</span>
                </Typography>
            </Grid>

            {/* <Grid item size={2.3}>
                <img
                    src={mypic}
                    style={{
                        width: 138,
                        height: 160,
                        borderRadius: 15,
                        border: "5px solid #8fd4fb",
                    }}
                />
            </Grid> */}
        </Grid>

        <Grid container spacing={1} pt={3} >
            <Grid size={5} xs={5} pt={3}>
                <List>
                    <ListItem>
                        <Phone fontSize="small" sx={{mt:-2, mr: 1, color:'#000000bd' }} />
                        <ListItemText primary="9910345624" sx={{mt:-2, color: '#000000bd' }} />
                    </ListItem>
                    <ListItem>
                        <Email fontSize="small" sx={{mt:-2, mr: 1, color:'#000000bd' }} />
                        <ListItemText primary="arpita140b@gmail.com" sx={{mt:-2, color: '#000000bd' }}  />
                    </ListItem>
                    <ListItem>
                        <Email fontSize="small" sx={{mt:-2, mr: 1, color:'#fff' }} />
                        <ListItemText primary="DOB : 27-Dec-2000" sx={{mt:-2, color: '#000000bd' }}  />
                    </ListItem>
                    <ListItem>
                        <LocationOn fontSize="small" sx={{mt:-1, mr: 1, color:'#000000bd' }} />
                        <ListItemText primary="G-2, 147A, Rose park society, Ext-1, Shalimar garden, Sahibabad, Ghaziabad, Uttar Pradesh, 201005" sx={{mt:-1, color: '#000000bd' }}  />
                    </ListItem>
                </List>
            </Grid>

            <Grid size={7} xs={7} pt={2} sx={{borderLeft: '1px solid #000000bd', pl:2}}>
                <Typography variant="h4" gutterBottom color={'#000000bd'}>
                    Profile
                </Typography>
                <Typography sx={{fontSize:14}} color={'#000000bd'}>
                Experienced IT professional and core networking team member at TCS
                 with expertise in network configuration, firewall troubleshooting, 
                 infrastructure setup, and security protocols. Skilled in optimizing 
                 network performance, and end-user support. Strong in 
                 communication, analytical thinking, multi-tasking, project management,
                  and mentoring. A dedicated and proactive team player focused on
                   achieving organizational goals through effective planning and prioritization.
                </Typography>
            </Grid>

        </Grid>

        <Grid container spacing={1} sx={{borderTop: '1px solid #000000bd', pt:2, mt:1}}>

            <Grid size={12} mt={2}>
                <Item>
                    <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", py:0.4 }} fontWeight={600} gutterBottom>
                        TECHNOLOGY STACK
                    </Typography>
                </Item>
                <Box sx={{mt:1}}>
                    <Item>{ApexChart}</Item>
                </Box>
            </Grid>

            <Grid size={12} mt={2}>
                <Grid size={12}>
                    <Item>
                        <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000bd'}>
                            SOFT SKILLS
                        </Typography>
                    </Item> 
                </Grid>
                <Grid size={12} mt={1}>
                    <Item>
                        <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>                            
                            <Box mt={1} width="50%"><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                            Team leadership and mentoring
                            </Box>
                            <Box mt={1} width="50%"><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                            Cross-functional collaboration
                            </Box>
                        </Box>
                        <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>                            
                            <Box mt={1} width="50%"><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                            Analytical and problem-solving mindset
                            </Box>
                            <Box mt={1} width="50%"><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                            Effective communication and interpersonal skills
                            </Box>
                        </Box>
                    </Item>
                </Grid>
            </Grid>

            <Grid size={12} mt={2} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Item>
                    <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", textAlign:'center', py:0.4 }} fontWeight={600} gutterBottom color={'#000000bd'}>
                       EDUCATION & QUALIFICATIONS
                    </Typography>
                </Item> 
                <Box sx={{mt:1}}></Box>
                    <Grid  container spacing={1} sx={{ position:'relative'}}>
                        {EducationDetails.map((edu, index) =>(
                            <Grid size={6} pt={edu.pad} key={index}>
                                <Item>
                                    <Box height={60}>
                                        <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                            <Box sx={{fontWeight:600}}>{edu.degree}</Box><Box sx={{fontWeight:600}}>{edu.percentage + "%"}</Box>
                                        </Box>
                                        <Box px={2} display="flex" flexDirection="column" justifyContent="space-between" textAlign={'left'}>
                                            <Box sx={{fontSize:'12px'}}>{edu.Institute}</Box>
                                        </Box>
                                        <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
                                            <Box sx={{fontWeight:500}}>{edu.board}</Box><Box sx={{fontWeight:600}}>{edu.year}</Box>
                                        </Box>
                                    </Box>
                                </Item>
                            </Grid>
                        ))}
                        <Box sx={{position:'absolute',height:'100%', width:'100%', top:0, opacity:0.2, left:0, backgroundSize:'cover', backgroundPosition:'center', backgroundImage: `url(${colorpic})` }}></Box>
                    </Grid>
            </Grid>

        </Grid>

        <Grid container spacing={1} sx={{ position:'relative', pt:2, mt:15}}>
        <Box sx={{position:'absolute', height:'100%', width:'100%', top:30, opacity:0.2, left:10, backgroundSize:'cover', backgroundPosition:'center', backgroundImage: `url(${TCSlogo})` }}></Box>

            <Grid size={12}>
                <Item>
                    <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000'}>
                        WORK EXPERIENCE
                    </Typography>
                </Item> 
            </Grid>

            <Grid size={12}>
                <Item>
                    <Box width={'100%'} py={2}>
                        <Typography sx={{ fontSize:'20px', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000bd'}>
                            TCS (Tata Consultancy Services)
                        </Typography>
                        <Typography sx={{ fontSize:'13px', my: "-8px", textAlign:'center', py:0.4, width:'100%', color:'#0009' }} gutterBottom >
                            Assistant System Engineer (29-Nov-2021 - Present)
                        </Typography>
                    </Box>
                    <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
                        <Box width={'70%'} pr={2} borderRight={'1px dotted grey'} sx={{color:'#000000'}}>
                        At TCS, in ZF project, I was responsible for handling 
                        image data received from the client for object annotation purposes. I performed 
                        detailed object annotations on multiple images to extract meaningful metadata and
                         structured information. The annotated data was then transformed into a 
                         NoSQL-compatible format and efficiently stored in AWS DynamoDB. 
                         This enabled scalable, high-performance data retrieval and integration 
                         with downstream systems, supporting the project's data-driven objectives.
                        <br/>
                        <br/>
                        As part of the Digital Infrastructure (DIS) team at TCS, I played a key role
                         in delivering comprehensive IT support and ensuring the smooth operation of
                          infrastructure services. My responsibilities included troubleshooting technical
                          issues, providing end-user assistance, and maintaining high system availability.
                         I actively participated in helpdesk coordination, managed corporate mail systems,
                         and supported network-related tasks to ensure uninterrupted connectivity.
                         Additionally, I contributed to team coordination, problem resolution,
                         and fostering a collaborative work environment to meet service-level
                         objectives efficiently.</Box>
                            
                        <Box width={'30%'} sx={{display:'flex', justifyContent:'center', alignContent:'center', flexWrap:'wrap'}}>
                            <Box pl={2}><ApexChartPie series={[30, 70]} labels={['ZF', 'DIS']} wide={250}/></Box>
                            <Box mt={-5} pl={2}>The chart highlights my contributions to each project since joining TCS.</Box>
                        </Box>
                    </Box>
                     
                </Item>
            </Grid>

        </Grid>


        <Grid container spacing={1} sx={{pt:2, mt:1}}>
                            
            <Grid size={12}>
                <Item>
                    <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000bd'}>
                        KEY PROJECTS
                    </Typography>
                </Item> 
            </Grid>

            <Grid size={12}>
                <Item>
                    <Box width={'100%'} py={1}>
                        <Typography component={'span'} sx={{ fontSize:'20px', my: "-8px", textAlign:'center', py:0.4, width:'100%',color:'#000000bd' }} fontWeight={600} gutterBottom >
                            ZF friedrichshafen (2021-2022)
                        </Typography>
                    </Box>
                    <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
                        <Box width={'30%'} borderRight={'1px dotted grey'} sx={{display:'flex', justifyContent:'center', alignContent:'center', flexWrap:'wrap'}}>
                            <Box pr={2}><ApexChartPie series={[40, 60]} labels={['AWS', 'Object Annotation']} wide={250}/></Box>
                            <Box mt={-3} pr={2}>The chart illustrates the technologies I worked with during the ZF project.</Box>
                        </Box>
                        <Box width={'70%'} pl={2} sx={{position:'relative', color:'#000000'}}>
                        <Box sx={{position:'absolute', height:'100%', width:'60%', top:0, opacity:0.2, right:'15%', backgroundSize:'cover', backgroundPosition:'center', backgroundImage: `url(${zf})` }}></Box>

                            <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000' }} />
                            Performed Object Detection & Annotation using image processing tools to identify and label key components in client-provided image datasets, enabling accurate metadata extraction for machine-readable use.
                            </Box>

                            <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000' }} />
                            Developed Custom Annotation Scripts using Python and open-source libraries (e.g., OpenCV, LabelImg) to automate parts of the annotation process and standardize output formats like JSON for NoSQL ingestion.
                            </Box>

                            <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000' }} />
                            Transformed Annotated Data into NoSQL Schema, designing flexible, scalable document structures compatible with AWS DynamoDB to support unstructured data ingestion and querying.
                             </Box>

                            <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                            Partnered with cross-disciplinary teams to streamline deployments and enhance application performance through continuous feedback loops and performance tuning.
                            </Box>

                            <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000' }} />
                            Collaborated with Cross-Functional Teams, including data scientists and AWS architects, to align annotation output with model training requirements and ensure cloud infrastructure best practices were followed.
                            </Box>
                        </Box>
                    </Box>
                </Item>
            </Grid>

            <Grid size={12}>
                <Item>
                    <Box width={'100%'} py={1}>
                        <Typography component={'span'} sx={{ fontSize:'20px', my: "-8px", textAlign:'center', py:0.4, width:'100%', color:'#000000bd' }} fontWeight={600} gutterBottom >
                            Digital Infrastructure Services(2022–Present)
                        </Typography>
                    </Box>
                    <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
                        <Box width={'70%'} pl={2}sx={{ borderRight:'1px dotted grey',position:'relative', color:'#000000'}}>
                    
                            <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                            Provided Tier-1 and Tier-2 IT Support, diagnosing and resolving hardware, software, and system-related issues across Windows and enterprise environments, reducing downtime and improving user productivity.
                            </Box>

                            <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                            Managed and Monitored Corporate Mail Systems (e.g., Outlook, Exchange), handling mailbox creation, configuration, and troubleshooting to ensure uninterrupted email communication and compliance with IT policies.
                            </Box>

                            <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                            Performed Network Support and Diagnostics, including IP configuration, LAN/WAN troubleshooting, and resolving connectivity issues, ensuring continuous and stable network operations across user environments.
                            </Box>

                            <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                            Led Helpdesk Coordination and Ticket Management, utilizing ITSM tools such as ServiceNow to track, prioritize, and resolve user-raised incidents and service requests in adherence to SLAs.
                            </Box>

                            <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                            Ensured High System Availability and Maintenance, conducting routine health checks, OS patch updates, antivirus monitoring, and preventive maintenance to minimize disruptions and security risks.
                            </Box>

                        </Box>
                        <Box width={'30%'} sx={{display:'flex',flexDirection:"column", justifyContent:'center', alignContent:'center', flexWrap:'wrap'}}>
                            <Box pl={2}><ApexChartPie series={[20, 30, 30, 20]} labels={['Networking','IT support','Mail management', 'User Interaction']} wide={250} /></Box>
                            <Box mt={-4} pl={4}>The chart illustrates the technologies I worked with during the DIS project.</Box>
                        </Box>
                    </Box>
                </Item>
            </Grid>

            

           {/*  <Grid size={8.5} mt={9}>
                <Grid size={12}>
                    <Item>
                        <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000bd'}>
                           TECHNICAL SKILLS
                        </Typography>
                    </Item> 
                </Grid>
                <Grid size={12} mt={1}>
                    <Item>
                        <Box px={2} display="flex" flexDirection="column" justifyContent="space-between" textAlign={'left'}>                            
                            <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                                <span style={{fontWeight:'bold'}}>Technical Support & Troubleshooting</span>  – Proficient in IT support, system maintenance, and resolving technical issues efficiently.
                            </Box>
                            <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                               <span style={{fontWeight:'bold'}}> Network & System Expertise</span> - Experienced in network support, system upkeep, and ensuring stable IT environments.
                            </Box>
                            <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                                <span style={{fontWeight:'bold'}}>End-User & Mail Assistance </span> - Skilled in end-user support, mail management, and helpdesk coordination to ensure smooth operations.
                            </Box>
                            <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
                               <span style={{fontWeight:'bold'}}> Problem Solving & Team Coordination</span> - Strong abilities in analytical problem-solving and effective team collaboration.
                            </Box>
                        </Box>
                    </Item>
                </Grid>
            </Grid> */}

        </Grid>

    </Box>
);

};

export default Resume;
