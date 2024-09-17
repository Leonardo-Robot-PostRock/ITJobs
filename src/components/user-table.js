$(document).ready(function () {

  function fetchUsers() {
    $.ajax({
      url: 'http://localhost:9090/api/users',
      method: 'GET',
      dataType: 'json',
      success: function (users) {
        updateTable(users);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error('Error fetching users:', textStatus, errorThrown);
      }
    });
  }

  function updateTable(users) {
    const tableBody = $('#user-table tbody');
    tableBody.empty();

    users.forEach(function (user) {
      const row = `
        <tr>
          <td>${user.name}</td>
          <td>${user.surname}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
        </tr>
      `;
      tableBody.append(row);
    });

    $('#user-table').DataTable();
  }

  fetchUsers();
});
