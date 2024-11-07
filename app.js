async function fetchExercises() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const selectedMuscles = Array.from(document.querySelectorAll('input[name="muscle"]:checked')).map(el => el.value);
    if (selectedMuscles.length === 0) {
        resultsDiv.innerHTML = "Vennligst velg minst én muskelgruppe.";
        return;
    }

    for (let muscle of selectedMuscles) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/strength/${muscle}`);
            const data = await response.json();
            displayExercises(muscle, data);
        } catch (error) {
            resultsDiv.innerHTML += `<p>Kunne ikke hente data for ${muscle}</p>`;
        }
    }
}

function displayExercises(muscle, exercises) {
    const resultsDiv = document.getElementById("results");
    const muscleDiv = document.createElement("div");
    muscleDiv.innerHTML = `<h3>${muscle}</h3><ul>${exercises.map(ex => `<li>${ex}</li>`).join('')}</ul>`;
    resultsDiv.appendChild(muscleDiv);
}

function showNextQuestion(selectedOption) {
    document.querySelectorAll('.question').forEach(function (element) {
        element.classList.add('hidden');
    });

    if (selectedOption === 'pain') {
        document.getElementById('painQuestion').classList.remove('hidden');
    }

}