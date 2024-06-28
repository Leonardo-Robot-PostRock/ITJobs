$(document).ready(function () {
  // Función para obtener datos de la API y actualizar la tabla
  
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

  // Función para actualizar la tabla con los datos obtenidos
  function updateTable(users) {
    const tableBody = $('#user-table tbody');
    tableBody.empty(); // Limpiar cualquier dato previo

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

    // Inicializar DataTables
    $('#user-table').DataTable();
  }

  // Llamar a la función fetchUsers cuando el documento esté listo
  fetchUsers();
});
