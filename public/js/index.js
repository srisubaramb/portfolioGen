let skill = 1
let education = 1
let project = 1
document.getElementById('add-skill').addEventListener('click', () => {
    const newSkillItem = document.createElement('div')
    newSkillItem.className = 'skill-item'
    
    const newSkillItemTitle = document.createElement('input')
    newSkillItemTitle.type = 'text'
    newSkillItemTitle.placeholder = 'Your Skill (eg: web Development)'
    newSkillItemTitle.name = `skill[${skill}][title]`

    const newSkillItemSubtitle = document.createElement('input')
    newSkillItemSubtitle.type = 'text'
    newSkillItemSubtitle.placeholder = 'subtitle (eg: HTML, CSS, JS)'
    newSkillItemSubtitle.name = `skill[${skill}][subtitle]`

    newSkillItem.appendChild(newSkillItemTitle)
    newSkillItem.appendChild(newSkillItemSubtitle)
    document.getElementById('skill-container').appendChild(newSkillItem)

    skill++
})

document.getElementById('add-education').addEventListener('click' , () => {

    const newEducationItem = document.createElement('div')
    newEducationItem.className = 'education-item'

    const newEducationItemTitle = document.createElement('input')
    newEducationItemTitle.type = 'text'
    newEducationItemTitle.placeholder = 'Your Education(title)'
    newEducationItemTitle.name = `education[${education}][title]`

    const newEducationItemSubtitle = document.createElement('input')
    newEducationItemSubtitle.type = 'text'
    newEducationItemSubtitle.placeholder = 'subtitle(eg: University/college/school)'
    newEducationItemSubtitle.name = `education[${education}][subtitle]`

    newEducationItem.appendChild(newEducationItemTitle)
    newEducationItem.appendChild(newEducationItemSubtitle)
    document.getElementById('education-container').appendChild(newEducationItem)

    education++
})

document.getElementById('add-project').addEventListener('click' , () => {
    const newProjectItem = document.createElement('div')
    newProjectItem.className = 'project-item'

    // use innerHTML
    const newProjectItemTitle = document.createElement('input')
    newProjectItemTitle.type = 'text'
    newProjectItemTitle.placeholder = 'Your Project(title)'
    newProjectItemTitle.name = `project[${project}][title]`

    const newProjectItemUrl = document.createElement('input')
    newProjectItemUrl.type = 'url'
    newProjectItemUrl.placeholder = 'url of your project'
    newProjectItemUrl.name = `project[${project}][url]`

    const newProjectItemProjectPic = document.createElement('input')
    newProjectItemProjectPic.type = 'file'
    newProjectItemProjectPic.name = `project[${project}][projectpic]`
    newProjectItemProjectPic.accept = 'image/*'
    newProjectItemProjectPic.id = `projectpic${project}`

    const newProjectItemProjectPicLabel = document.createElement('label')
    newProjectItemProjectPicLabel.htmlFor = `projectpic${project}`
    newProjectItemProjectPicLabel.textContent = "Project pic"

    newProjectItem.appendChild(newProjectItemTitle)
    newProjectItem.appendChild(newProjectItemUrl)
    newProjectItem.appendChild(newProjectItemProjectPicLabel)
    newProjectItem.appendChild(newProjectItemProjectPic)

    document.getElementById('project-container').appendChild(newProjectItem)

    project++;
})