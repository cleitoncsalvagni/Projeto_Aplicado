﻿using ProjAplicado.Business.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjAplicado.Business.Interfaces
{
    public interface IUsuarioService
    {
        Task Adicionar(Usuario usuario);
    }
}
