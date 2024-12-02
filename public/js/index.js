let skill = 1
let education = 1
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