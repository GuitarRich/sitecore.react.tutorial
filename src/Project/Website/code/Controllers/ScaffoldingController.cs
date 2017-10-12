using Sitecore.React.Mvc.Controllers;
using System.Web.Mvc;

namespace Project.Sitecore.React.Website.Controllers
{
    public class ScaffoldingController : Controller
    {
        public ActionResult MainLayout()
        {
            return this.React("MainLayout");
        }
    }
}