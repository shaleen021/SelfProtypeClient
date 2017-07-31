export interface WorkExperience{
 companyName: string;
 fromDate: string;
 endDate: string;
 designation: string;
 currCompInd: number;
}

export interface Skills{
     skillName:string,
     proficiency: number
}

export interface Projects{
 projectName:string;
 skillsUsed:string;
 fromDate: string;
 endDate: string;
}

export interface Education{
 fromDate: string;
 endDate: string;
 percentage: string;
 projectName: string;
 skillsUsed: string;
}

export interface Awards{
 awardName: string;
 organizationName: string;
}

export interface DisplayResumeInterface{
description:string;    
name:string;
dob:string;
address1:string;
designation:string;
address2:string;
street:string;
city:string;
pin:string;
languagesknow:string;              
workExperience : WorkExperience[];
skills: Skills[];
projects: Projects[];
education: Education[];
awards: Awards[];
}

export interface Res {
    msg: string;
    statusCd: number;
    results: any;
}
