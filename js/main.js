function saveData() {
    let student = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        address: document.getElementById('address').value,
        email: document.getElementById('email').value
    };

    localStorage.setItem('student', JSON.stringify(student));
    alert('Data saved!');

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
}

function loadData() {
    let student = JSON.parse(localStorage.getItem('student'));

    if (student) {
        let tableBody = document.getElementById('studentTable');
        tableBody.innerHTML = `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.address}</td>
                <td>${student.email}</td>
                <td><button class="delete-btn" onclick="deleteData()">Delete</button></td>
            </tr>`;
    } else {
        alert('No data found!');
    }
}

function deleteData() {
    localStorage.removeItem('student');
    alert('Data deleted!');
    document.getElementById('studentTable').innerHTML = '';
}