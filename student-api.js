const express = require('express'); 
const bodyparser = require('body-parser');
const cors = require('cors'); 
const app = express(); 
const port = 3000; 


let students = [ 
    { 
        studID:"1", 
        studName:"Bindhu", 
        StudGrade: "8",
        stuAddress:"Gandhi street", 
        Location:"Chennai", 
        Course:"Maths", 
        Phone:"9883456629"
    }, 
    { 
        
        studID:"2",
        studName:"Abhimanyu", 
        StudGrade: "9",
        stuAddress:"TK street", 
        Location:"Chennai", 
        Landmark:"Express Avuneue", 
        Phone:"9884485099"
    }, 
    { 
         
        studID:"3",  
        studName:"Kiranmayi",
        StudGrade: "9",
        stuAddress:"A.G Street", 
        Location:"Chennai", 
        Landmark:"Shenoy Nagar", 
       Phone:"9223455499"
    } 

] 

app.use(cors()); 
app.use(bodyparser.urlencoded({ extended: false})); 
app.use(bodyparser.json()); 


                   //get
app.get('/student',(req,res)=> { 
res.json(students);
 });

app.get('/student/:studID', (req,res) => { 
const studID = req.params.studID; 
//searching students for the studID 
for(let student of students) { 
if(student.studID === studID) { 
res.json(student); 
return;
}
}  
res.status(404).send('student not found'); 
}); 
                 


             //post
app.post('/student/:studID',(req,res)=> { 
//redaing studID from url 
const studID = req.params.studID; 
const newstudent = req.body;
//remove item from the students array 
for(let i=0; i< students.length; i++) 
{ 
let student = students[i]; 
if(student.studID === studID)
{ 
students[i] = newstudent;
}
}
res.send('student array is edited');
 }); 

app.post('/student',(req,res)=> { 
const student=req.body; 
console.log(student); 
students.push(student); 
res.send('New object added to db');
}); 

                     //put 
app.put('/student/:studID',(req,res)=>{
const studID=req.params.studID;
const newstudent=req.body;
for(let i=0;i<students.length;i++){
let student=students[i]
if(student.studID===studID)
{
students[i]=newstudent;
}
}
res.send('student array is edited');
});


                        //DELETE
app.delete('/student/:studID', (req,res) => { 
//reading studID from the url
const studID = req.params.studID; 
//remove items from the students array 
students = students.filter(i => { 
if(i.studID !== studID) { 
return true; 
}
return false;
}); 
res.send('student is deleted');
});
                        


                     
 app.listen(port, () => {
 console.log(`hello .we are listening on port ${port}`); 
 }); 
                    
