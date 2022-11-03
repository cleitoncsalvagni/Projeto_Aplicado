﻿using ProjAplicado.Business.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace ProjAplicado.Api.Dtos
{
    public class UsuarioDto
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo de Usuário é obrigatório!")]
        [StringLength(30, MinimumLength = 4)]
        public string User { get; set; }

        [Required(ErrorMessage = "O campo de Email é obrigatório!")]
        [DataType(DataType.EmailAddress)]
        public string UserEmail { get; set; }

        [Required(ErrorMessage = "O campo de Senha é obrigatório!")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "O campo Tipo Usuário é obrigatório!")]
        public int TipoUsuario { get; set; }

    }
}
