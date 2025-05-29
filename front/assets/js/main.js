const url = 'http://localhost:3001';

const createbutton = (label, type) => {
    return $('<button>').addClass(`btn btn-${type}`).html(label)
}

const renderRows = cadastros => {
  const rows = cadastros.map(c => {
    const excluirBtn = $('<button>')
      .addClass('btn btn-sm btn-danger')
      .text('Excluir')
      .click(() => removeCadastro(c.id));

    return $('<tr>')
      .append($('<td>').text(c.nome))
      .append($('<td>').text(c.email))
      .append($('<td>').text(c.telefone))
      .append($('<td>').text(c.valor))
      .append($('<td>').text(c.projeto))
      .append($('<td>').append(excluirBtn));
  });

  $('#clientsRows').html(rows);
};

const removeCadastro = (id) => {
    $.ajax({
        method: 'DELETE',
        url: `${url}/${id}`,
        success: function () {
            getCadastros();
            const msg = document.getElementById('exclusao-msg');
            msg.classList.remove('d-none');
            setTimeout(() => msg.classList.add('d-none'), 5000);
        },
        error: function (err) {
            console.error('Erro ao excluir:', err);
        }
    });
};

const getCadastros = () => {
    $.ajax({
        url: `${url}/`,
        success: cadastros => {
            console.log(cadastros);
            renderRows(cadastros);
        }
    });
};



const saveCadastro = () => {
  const id        = document.getElementById('id').value;
  const nome      = document.getElementById('name').value;
  const telefone  = document.getElementById('telefone').value;
  const email     = document.getElementById('email').value;
  const valor     = document.getElementById('valordoacao').value;
  const projeto   = document.getElementById('test').value;

  const dados = id
    ? { id, nome }
    : { nome, telefone, email, valor, projeto };

  $.ajax({
    method: id ? 'PUT' : 'POST',
    url: `${url}${id ? '/' + id : ''}`,
    contentType: 'application/json',
    data: JSON.stringify(dados),
    success: function (response) {
      getCadastros();
      const msg = document.getElementById('sucesso-msg');
      msg.classList.remove('d-none');
      setTimeout(() => msg.classList.add('d-none'), 5000);
      document.getElementById('meuformulario').reset();
    },
    error: function (err) {
      console.error('Erro ao enviar doação:', err);
    }
  });
};

$(() => {
  getCadastros();
  $('[save]').click(function (e) {
    e.preventDefault();
    saveCadastro();
  });
});
