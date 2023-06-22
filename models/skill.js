const skills = [
    {id: 23950, skill: 'HTML', proficient: true},
    {id: 23506, skill: 'CSS', proficient: true},
    {id: 30450, skill: 'Javascript', proficient: true}, 
    {id: 34903, skill: 'Express Framework', proficient: false}
    ]; 

module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne
}


function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.proficient = false;
    skills.push(skill); 
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1); 
}