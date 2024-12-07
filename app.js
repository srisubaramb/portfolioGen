import express from 'express'
import { engine } from 'express-handlebars'
import multer from 'multer'
const app = express()
//index file and form reading
app.use(express.static('public'))

// Engine setup
app.engine('handlebars',engine({
    defaultLayout: 'portfolio',
    layoutsDir: './views',
    partialsDir: './views/partials'
}))
app.set('view engine', 'handlebars')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./public/uploads')
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + file.originalname)
    }
}
)
const upload = multer({storage})


app.use(express.urlencoded({extended: true}))

app.post('/submit',upload.any(),(req, res) => {
    const {name, role, linkedinUrl, githubUrl,about} = req.body
    const profilepic = req.files.find(files => files.fieldname === 'profilepic') ? 
    `/uploads/${req.files.find(file => file.fieldname === 'profilepic').filename}` : null
    const cv = req.files.find(files => files.filename === 'cv') ? 
    `/uploads/${req.files.find(file => file.filename === 'cv').filename}` : null
    const aboutpic = req.files.find(files => files.findname === 'aboutpic') ?
    `/uploads/${req.files.find(file => file.findname === 'aboutpic').filename}` : null
    console.log()
    const projects = []
    if(req.body.project) {
        for(const key in req.body.project) {
            const project = req.body.project[key]
            const projectImageField = `project[${key}][projectpic]`

            const projectepicfile = req.files.find(file => file.fieldname === projectImageField);
            const projectpicfilepath =  projectepicfile ? `/uploads/${projectepicfile.filename}` : null

            projects.push({
                projecttitle: project.title,
                projecturl: project.url,
                projectpic: projectpicfilepath
            })
        }
    }
    // () force the js interpretur to treat {} as object to be return
    // isArray to check the presense of array ele
    const skill = Array.isArray(req.body.skill) ?
    req.body.skill.map(skill => ({
        title: skill.title,
        subtitle: skill.subtitle
    })) : []
    console.log(skill)

    const education = Array.isArray(req.body.education) ?
    req.body.education.map(education => ({
        title: education.title,
        subtitle: education.subtitle
    })) : []
    console.log(education)

    
    res.render('portfolio',{name, role, profilepic, cv, linkedinUrl, githubUrl, about, aboutpic,education, skill, projects})
})

app.listen(3000,() => {console.log("Server atarts at port 3000")})