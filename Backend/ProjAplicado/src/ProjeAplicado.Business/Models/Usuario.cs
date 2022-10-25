﻿using ProjAplicado.Business.Models.Enums;

namespace ProjAplicado.Business.Models
{
    public class Usuario : Entity
    {

        public string User { get; set; }

        public string UserEmail { get; set; }

        public string Password { get; set; }

        public TipoUsuario TipoUsuario { get; set; }
    }
}
