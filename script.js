// Eindopdracht Frontend Development

// Esmée Kramer
// 500704684
//V106

//Docent: Vasilis & Michiel
//Datum: 6 november 2015

var button = document.querySelector('#button');
var content = document.querySelector('#content');

content.classList.add('hidden');

button.addEventListener("click", function () {

        if (button.checked) {
            content.classList.remove('hidden');

        } else {
            content.classList.add('hidden');
        }
});

var radioButtonProject = document.querySelector('input[value="project"]');
var radioButtonStage = document.querySelector('input[value="stage"]');

var projectFieldset = document.getElementById('project');
var stageFieldset = document.getElementById('stage');

function stageUitProjectAan() {
    stageFieldset.classList.remove('active');
    projectFieldset.classList.add('active');
}

function projectUitStageAan() {
    stageFieldset.classList.add('active');
    projectFieldset.classList.remove('active');
}

radioButtonProject.addEventListener('click', stageUitProjectAan);
radioButtonStage.addEventListener('click', projectUitStageAan);

