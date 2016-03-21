using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularAndMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Customer()
        {
            ViewBag.Message = "Customer Section";

            return View();
        }

        public ActionResult Product()
        {
            ViewBag.Message = "Product Section";

            return View();
        }

        public ActionResult Order()
        {
            ViewBag.Message = "Orders Section";

            return View();
        }
    }
}