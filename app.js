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

app.post('/submit',upload.fields([
    {name: 'profilepic', maxCount: 1},
    {name: 'aboutpic', maxCount: 1},
    {name: 'cv', maxCount: 1}
        ]),(req, res) => {
    const {name, role, linkedinUrl, githubUrl,about} = req.body
    const profilepic = req.files['profilepic'] ? `/uploads/${req.files['profilepic'][0].filename}` : null
    const aboutpic = req.files['aboutpic'] ? `/uploads/${req.files['aboutpic'][0].filename}` : null
    const cv = req.files['cv'] ? `/uploads/${req.files['cv'][0].filename}` : null
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

    res.render('portfolio',{name, role, profilepic, cv, linkedinUrl, githubUrl, about, aboutpic,education, skill})
})

app.listen(3000,() => {console.log("Server atarts at port 3000")})