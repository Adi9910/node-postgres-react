// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Avatar,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Paper,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { Phone, Email, LocationOn, Language } from "@mui/icons-material";
// import ReactApexChart from "react-apexcharts";
// import mypic from "./mypic.jpg"; // Assuming you have a profile picture in the same directory
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import CircleIcon from '@mui/icons-material/Circle';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));

// const ApexChart = (
//     <Grid container spacing={1}>
//         <Grid size={6}>
//             <Box pt={1}>
//                 <Item>
//                     <Box paddingLeft={2} mb={2}>
//                         <Box display='flex' justifyContent={'space-between'} >
//                             <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>React</Box>
//                             <Box display='flex'>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#fff" border="2px solid #0590ff"></Box>
//                             </Box>
//                             </Box>
//                         <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1}}>
//                             React Router, Redux Toolkit, Material UI, Recharts, ChartJS, AG Grid and context API
//                         </Box>
//                     </Box>
//                 </Item>
//             </Box>
//             <Box pt={1}>
//                 <Item>
//                     <Box paddingLeft={2} mb={2}>
//                         <Box display='flex' justifyContent={'space-between'} >
//                             <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>Amazon Web Services</Box>
//                             <Box display='flex'>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} sx={{background:"linear-gradient(to right, #2ab6f1 55%, white 45%)"}} border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#fff" border="2px solid #0590ff"></Box>
//                             </Box>
//                             </Box>
//                         <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1}}>
//                             AWS SDK, EC2, S3, Lambda, CloudWatch, API Gateway, DynamoDB, Athena and RDS(Relational Database Service)
//                         </Box>
//                     </Box>
//                 </Item>
//             </Box>
//             <Box pt={1}>
//                 <Item>
//                     <Box paddingLeft={2} mb={2}>
//                         <Box display='flex' justifyContent={'space-between'} >
//                         <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>SQL</Box>
//                             <Box display='flex'>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} sx={{background:"linear-gradient(to right, #2ab6f1 55%, white 45%)"}} border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#fff" border="2px solid #0590ff"></Box>
//                             </Box>
//                             </Box>
//                         <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1}}>
//                             MySQL, PostgreSQL, joins, indexing, query optimization and schema design
//                         </Box>
//                     </Box>
//                 </Item>
//             </Box>
//             <Box pt={1}>
//                 <Item>
//                     <Box paddingLeft={2} mb={2}>
//                         <Box display='flex' justifyContent={'space-between'} >
//                         <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>Git</Box>
//                             <Box display='flex'>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#fff" border="2px solid #0590ff"></Box>
//                             </Box>
//                             </Box>
//                         <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1}}>
//                             Git CLI, GitLab CI, branching strategies, conflict resolution, and merging methods
//                         </Box>
//                     </Box>
//                 </Item>
//             </Box>
//         </Grid>

//         <Grid size={6}>
//             <Box pt={1}>
//                 <Item>
//                     <Box paddingLeft={2} mb={2}>
//                         <Box display='flex' justifyContent={'space-between'} >
//                         <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>NodeJS</Box>
//                             <Box display='flex'>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} sx={{background:"linear-gradient(to right, #2ab6f1 55%, white 45%)"}} border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#fff" border="2px solid #0590ff"></Box>
//                             </Box>
//                             </Box>
//                         <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1}}>
//                             Express.js, JWT, Mongoose, nodemailer, RESTful APIs, middleware and authentication
//                         </Box>
//                     </Box>
//                 </Item>
//             </Box>
//             <Box pt={1}>
//                 <Item>
//                     <Box paddingLeft={2} mb={2}>
//                         <Box display='flex' justifyContent={'space-between'}>
//                         <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>Next.js</Box>
//                             <Box display='flex'>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} sx={{background:"linear-gradient(to right, #2ab6f1 55%, white 45%)"}} border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#fff" border="2px solid #0590ff"></Box>
//                             </Box>
//                             </Box>
//                         <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1}}>
//                             Next Auth, styled-components, tailwind(CSS), SSG , SSR, API routes, routing, Styling React libraries and apexcharts
//                         </Box>
//                     </Box>
//                 </Item>
//             </Box>
//             <Box pt={1}>
//                 <Item>
//                     <Box paddingLeft={2} mb={2}>
//                         <Box display='flex' justifyContent={'space-between'} >
//                         <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>Python</Box>
//                             <Box display='flex'>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} sx={{background:"linear-gradient(to right, #2ab6f1 55%, white 45%)"}} border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#fff" border="2px solid #0590ff"></Box>
//                             </Box>
//                             </Box>
//                         <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1}}>
//                             NumPy, Pandas, Scikit-learn, logger and FAST APIs(to create APIs for data transition)
//                         </Box>
//                     </Box>
//                 </Item>
//             </Box>            
//             <Box pt={1}>
//                 <Item>
//                     <Box paddingLeft={2} mb={2}>
//                         <Box display='flex' justifyContent={'space-between'} >
//                         <Box fontSize={20} color='#000000db' textAlign='left' mb={1}>Angular v12+</Box>
//                             <Box display='flex'>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#2ab6f1" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} sx={{background:"linear-gradient(to right, #2ab6f1 55%, white 45%)"}} border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#fff" border="2px solid #0590ff"></Box>
//                                 <Box height="12px" width="12px" borderRadius={'50%'} margin={'6px 3px'} bgcolor="#fff" border="2px solid #0590ff"></Box>
//                             </Box>
//                             </Box>
//                         <Box borderLeft={'1px solid grey'} pl={2} textAlign="left" fontSize={14} sx={{lineHeight:1.1}}>
//                             RxJS, Angular Material, components, services, observables, reactive forms, SPA architecture
//                         </Box>
//                     </Box>
//                 </Item>
//             </Box>
//         </Grid>
//     </Grid>
// )

// const ApexChartPie = ({series, labels, wide}) => {
//     const state = ({      
//         series: series,
//         options: {
//           chart: {
//             width: '50%',
//             height: '30%',
//             type: 'pie',
//           },
//           labels: labels,
//           theme: {
//             monochrome: {
//               enabled: true,
//             },
//           },
//           plotOptions: {
//             pie: {
//               dataLabels: {
//                 offset: -5,
//               },
//             },
//           },
//           grid: {
//             padding: {
//               top: 0,
//               bottom: 0,
//               left: 0,
//               right: 0,
//             },
//           },
//           dataLabels: {
//             formatter(val, opts) {
//               const name = opts.w.globals.labels[opts.seriesIndex]
//               return [name, val.toFixed(1) + '%']
//             },
//           },
//           legend: {
//             show: false,
//           },
//         },      
//     });

//     return (
//       <div>
//         <div id="chart" style={{ width:wide, height: wide }}>
//             <ReactApexChart options={state.options} series={state.series} type="pie" />
//           </div>
//         <div id="html-dist"></div>
//       </div>
//     );
// }

// const EducationDetails = [
//     { pad:0.7, degree: "Master of Computer Applications(MCA)", percentage: 63, Institute:'Mangalayatan University, Beswan Aligarh, U.P.', board:'MU', year: '2024-present (Distance)' },
//     { pad:0.7, degree: "Bachelor of Technology(B.Tech)", percentage: 63.77, Institute:'Raj Kumar Goel Institute of Technology, Ghaziabad, U.P.', board:'AKTU', year: '2017-21' },
//     // { pad:0.7, degree: "Class XII", percentage: 63.5, Institute:'Flora Dale Senior Secondary School, Delhi', board:'CBSE', year: '2016-17' },
//     // { pad:0.7, degree: "Class X", percentage: 71, Institute:'Flora Dale Senior Secondary School, Delhi', board:'CBSE', year: '2014-15' },
// ];

// const Resume = ({ resume }) => {
// return (
//     <Box mt={5} p={3} fontFamily="sans-serif">
        
//         <Grid container alignItems="center">

//             <Grid
//                 item
//                 size={9.7}
//                 sx={{
//                     backgroundColor: "#8fd4fb",
//                     padding: 2,
//                     borderRadius: "10px 0 0 10px",
//                 }}
//             >
//                 <Typography variant="h2" sx={{color: '#000000bd'}}>
//                     {resume?.split(" ")[0]}{" "}
//                     <span style={{ fontWeight: "300" }}>{resume?.split(" ")[1]}</span>
//                 </Typography>
//             </Grid>

//             <Grid item size={2.3}>
//                 <img
//                     src={mypic}
//                     style={{
//                         width: 138,
//                         height: 160,
//                         borderRadius: 15,
//                         border: "5px solid #8fd4fb",
//                     }}
//                 />
//             </Grid>
//         </Grid>

//         <Grid container spacing={1} >
//             <Grid size={5} xs={5} pt={3}>
//                 <List>
//                     <ListItem>
//                         <Phone fontSize="small" sx={{mt:-2, mr: 1, color:'#000000bd' }} />
//                         <ListItemText primary="9910282537" sx={{mt:-2, color: '#000000bd' }} />
//                     </ListItem>
//                     <ListItem>
//                         <Email fontSize="small" sx={{mt:-2, mr: 1, color:'#000000bd' }} />
//                         <ListItemText primary="informarcialaditya@gmail.com" sx={{mt:-2, color: '#000000bd' }}  />
//                     </ListItem>
//                     <ListItem>
//                         <Email fontSize="small" sx={{mt:-2, mr: 1, color:'#fff' }} />
//                         <ListItemText primary="DOB : 22-Dec-2000" sx={{mt:-2, color: '#000000bd' }}  />
//                     </ListItem>
//                     <ListItem>
//                         <LocationOn fontSize="small" sx={{mt:-1, mr: 1, color:'#000000bd' }} />
//                         <ListItemText primary="G-2, 147A, Rose park society, Ext-1, Shalimar garden, Sahibabad, Ghaziabad, Uttar Pradesh, 201005" sx={{mt:-1, color: '#000000bd' }}  />
//                     </ListItem>
//                 </List>
//             </Grid>

//             <Grid size={7} xs={7} pt={2} sx={{borderLeft: '1px solid #000000bd', pl:2}}>
//                 <Typography variant="h4" gutterBottom color={'#000000bd'}>
//                     Profile
//                 </Typography>
//                 <Typography sx={{fontSize:14}} color={'#000000bd'}>
//                     Highly skilled Full Stack Developer with 3+ years of expertise in 
//                     building scalable web applications using React.js, Next.js, Node.js, 
//                     Python, and AWS. Proven track record of designing and deploying 
//                     high-performance dashboards and APIs using RESTful APIs and FastAPIs. 
//                     Adept at leading end-to-end development while 
//                     optimizing for scalability, security, and user experience.
//                 </Typography>
//             </Grid>

//         </Grid>

//         <Grid container spacing={1} sx={{borderTop: '1px solid #000000bd', pt:2, mt:1}}>

//             <Grid size={12}>
//                 <Item>
//                     <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", py:0.4 }} fontWeight={600} gutterBottom>
//                         TECHNOLOGY STACK
//                     </Typography>
//                 </Item>
//                 <Box sx={{mt:1}}>
//                     {ApexChart}
//                 </Box>
//             </Grid>

//             <Grid size={6} mt={2}>
//                 <Grid size={12}>
//                     <Item>
//                         <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000bd'}>
//                            CERTIFICATIONS
//                         </Typography>
//                     </Item> 
//                 </Grid>
//                 <Grid size={12} mt={1}>
//                     <Item>
//                         <Box px={2} display="flex" flexDirection="column" justifyContent="space-between" textAlign={'left'}>                            
//                             <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
//                             Azure cloud fundamentals - Microsoft
//                             </Box>
//                             <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
//                             Digital Marketing - Google
//                             </Box>
//                             <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
//                             AWS cloud practitioner - Amazon Web Services
//                             </Box>
//                             <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#fff' }} />
//                             {" "}
//                             </Box>
//                         </Box>
//                     </Item>
//                 </Grid>
//             </Grid>

//             <Grid size={6} mt={2}>
//                 <Grid size={12}>
//                     <Item>
//                         <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000bd'}>
//                             SOFT SKILLS
//                         </Typography>
//                     </Item> 
//                 </Grid>

//                 <Grid size={12} mt={1}>
//                     <Item>
//                         <Box px={2} display="flex" flexDirection="column" justifyContent="space-between" textAlign={'left'}>                            
//                             <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
//                             Team leadership and mentoring
//                             </Box>
//                             <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
//                             Cross-functional collaboration
//                             </Box>
//                             <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
//                             Analytical and problem-solving mindset
//                             </Box>
//                             <Box mt={1}><CircleIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
//                             Effective communication
//                             </Box>
//                         </Box>
//                     </Item>
//                 </Grid>
//             </Grid>           

//             <Grid size={12} mt={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
//                 <Item>
//                     <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", textAlign:'center', py:0.4 }} fontWeight={600} gutterBottom color={'#000000bd'}>
//                        EDUCATION & QUALIFICATIONS
//                     </Typography>
//                 </Item> 
//                 <Box sx={{mt:1}}></Box>
//                     <Grid  container spacing={1} sx={{ position:'relative'}}>
//                         {EducationDetails.map((edu, index) =>(
//                             <Grid size={6} pt={edu.pad} key={index}>
//                                 <Item>
//                                     <Box height={60}>
//                                         <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
//                                             <Box sx={{fontWeight:600}}>{edu.degree}</Box><Box sx={{fontWeight:600}}></Box>
//                                         </Box>
//                                         <Box px={2} display="flex" flexDirection="column" justifyContent="space-between" textAlign={'left'}>
//                                             <Box sx={{fontSize:'12px'}}>{edu.Institute}</Box>
//                                         </Box>
//                                         <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
//                                             <Box sx={{fontWeight:500}}>{edu.board}</Box><Box sx={{fontWeight:600}}>{edu.year}</Box>
//                                         </Box>
//                                     </Box>
//                                 </Item>
//                             </Grid>
//                         ))}
//                     </Grid>
//             </Grid>

//         </Grid>

//         <Grid container spacing={1} sx={{ pt:2, mt:2}}>
        
//             <Grid size={12}>
//                 <Item>
//                     <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000'}>
//                         WORK EXPERIENCE
//                     </Typography>
//                 </Item> 
//             </Grid>

//             <Grid size={12}>
//                 <Item>
//                     <Box width={'100%'} py={2}>
//                         <Typography sx={{ fontSize:'20px', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000bd'}>
//                             TCS (Tata Consultancy Services)
//                         </Typography>
//                         <Typography sx={{ fontSize:'13px', my: "-8px", textAlign:'center', py:0.4, width:'100%', color:'#0009' }} gutterBottom >
//                             System Engineer  (16-Dec-2021 – Present)
//                         </Typography>
//                     </Box>
//                     <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
//                         <Box width={'70%'} position={'relative'} pr={2} borderRight={'1px dotted grey'} sx={{color:'#000000'}}>
//                         <Box sx={{position:'absolute', height:'100%', width:'100%', top:0, opacity:0.2, left:10, backgroundSize:'cover', backgroundPosition:'center', backgroundImage: `url(${TCSlogo})` }}></Box>
//                             <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
//                                 I have developed scalable web apps using AWS, NodeJS, and ReactJS, collaborating with teams to optimize performance and ensure smooth deployments.                            
//                                 Mentored 5+ junior developers on React best practices to improving team productivity.
//                             </Box>
//                             <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
//                                 <span style={{fontWeight:'bold'}}> Air Canada: </span> Built cloud services, implemented secure APIs, and enhanced system scalability.
//                             </Box>
//                             <Box><ArrowForwardIosIcon sx={{fontSize:"10px", fontWeight:600, mt:0.5, mr: 1, color:'#000000bd' }} />
//                                 <span style={{fontWeight:'bold'}}>Amgen :</span> Led dynamic web app development, optimized code, and mentored junior developers, ensuring high performance and user satisfaction.
//                             </Box>
//                             <Box width={'100%'} pt={2} textAlign={'left'} color={'#000000'}><EmojiEventsIcon sx={{fontSize:"19px", mb:-0.4, mr: 1, color:'#000000' }} />
//                                 I successfully cracked the TCS Digital exam, showing my expertise in Angular and MERN 
//                                 technologies. This resulted in a significant hike in my package.
//                             </Box>
//                         </Box>                            
//                         <Box width={'30%'} sx={{display:'flex', justifyContent:'center', alignContent:'center', flexWrap:'wrap'}}>
//                             <Box pl={2}><ApexChartPie series={[30, 70]} labels={['Air Canada', 'Amgen']} wide={200}/></Box>
//                         </Box>
//                     </Box>

                   
//                 </Item>
//             </Grid>

//         </Grid>

//         <Grid container spacing={1} sx={{pt:2, mt:2}}>
                            
//             <Grid size={12}>
//                 <Item>
//                     <Typography variant="subtitle1" sx={{backgroundImage:'linear-gradient(to right, #fff, #8fd4fb, #fff)', my: "-8px", textAlign:'center', py:0.4, width:'100%' }} fontWeight={600} gutterBottom color={'#000000bd'}>
//                         KEY PROJECTS
//                     </Typography>
//                 </Item> 
//             </Grid>

//             <Grid size={12}>
//                 <Item>
//                     <Box width={'100%'} py={2}>
//                         <Typography component={'span'} sx={{ fontSize:'20px', my: "-8px", textAlign:'center', py:0.4, width:'100%',color:'#000000bd' }} fontWeight={600} gutterBottom >
//                             Air Canada (2021-2022)
//                         </Typography>
//                     </Box>
//                     <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
//                         <Box width={'30%'} borderRight={'1px dotted grey'} sx={{display:'flex', justifyContent:'center', alignContent:'center', flexWrap:'wrap'}}>
//                             <Box pr={2}><ApexChartPie series={[40, 50]} labels={['AWS', 'NODEJS']} wide={200}/></Box>
//                         </Box>
//                         <Box width={'70%'} pl={2} sx={{position:'relative', color:'#000000'}}>
//                         <Box sx={{position:'absolute', height:'100%', width:'100%', top:-30, opacity:0.2, right:0, backgroundSize:'cover', backgroundPosition:'center', backgroundImage: `url(${aircanada})` }}></Box>

//                             <Box sx={{mb:1}}>
//                             <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000000bd' }} />
//                             Built serverless solutions using AWS Lambda, API Gateway, and DynamoDB, reducing costs while improving scalability.
//                             </Box>
//                             <Box sx={{mb:1}}>
//                             <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000000bd' }} />
//                             Processed 3TB+ datasets with Athena/RDS and monitored performance logs of lambda via CloudWatch.
//                             </Box>
//                             <Box sx={{mb:1}}>
//                             <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000000bd' }} />
//                             Secured AWS resources by configuring IAM roles and security groups, complying with enterprise security standards.
//                             </Box>
//                             <Box>
//                             <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000000bd' }} />
//                             Collaborated cross-functionally to deploy APIs and Lambda integrations, reducing delivery time.
//                             </Box>
                            
//                         </Box>
//                     </Box>
//                 </Item>
//             </Grid>

//             <Grid size={12} mt={1}>
//                 <Item>
//                     <Box width={'100%'} py={2}>
//                         <Typography component={'span'} sx={{ fontSize:'20px', my: "-8px", textAlign:'center', py:0.4, width:'100%', color:'#000000bd' }} fontWeight={600} gutterBottom >
//                             Amgen (2022-Present)
//                         </Typography>
//                     </Box>
//                     <Box px={2} display="flex" flexDirection="row" justifyContent="space-between" textAlign={'left'}>
//                         <Box width={'70%'} pl={2}sx={{ borderRight:'1px dotted grey',position:'relative', color:'#000000'}}>
//                         <Box sx={{position:'absolute', height:'60%', width:'100%', top:'20%', opacity:0.2, left:0, backgroundSize:'cover', backgroundPosition:'center', backgroundImage: `url(${amgen})` }}></Box>

//                            <Box sx={{mb:1}}>
//                             <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000000bd' }} />
//                             Developed responsive web apps with React/Redux and an Office Add-ins for MS-Word that create document using predefined templates.
//                             </Box>
//                             <Box sx={{mb:1}}>
//                             <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000000bd' }} />
//                             Built scalable backend services using Python FastAPI, AWS RDS for data table storage, for seamless data transition.
//                             </Box>
//                             <Box sx={{mb:1}}>
//                             <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000000bd' }} />
//                             Optimized application performance, reducing load times by 50% through code improvements and caching strategies.
//                             </Box>
//                             <Box>
//                             <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: 600, mt: 0.5, mr: 1, color: '#000000bd' }} />
//                             Collaborated cross-functionally with UX, QA testers, and DevOps teams to ensure seamless deployments and rapid issue resolution.
//                             </Box>

//                         </Box>
//                         <Box width={'30%'} sx={{display:'flex',flexDirection:"column", justifyContent:'center', alignContent:'center', flexWrap:'wrap'}}>
//                             <Box pl={2}><ApexChartPie series={[20, 60, 30]} labels={['AWS','React','Python']} wide={200} /></Box>
//                         </Box>
//                     </Box>
//                 </Item>
//             </Grid>

            

//         </Grid>

//     </Box>
// );

// };

// export default Resume;
