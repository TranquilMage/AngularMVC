using System;
using System.Collections.Generic;
using System.Linq;

namespace AngularAndMVC.Models
{
    public class ProductModel
    {
        public int ProductId { get; set; }
        public string Description { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
