using System.Web.Mvc;
using Feature.Content.Models;
using Sitecore.Mvc.Presentation;
using Sitecore.React.Mvc.Controllers;
using Sitecore.Web.UI.WebControls;

namespace Feature.Content.Controllers
{
    public class ContentController : Controller
    {
        public ActionResult PageTitle()
        {
            if (string.IsNullOrEmpty(RenderingContext.Current.Rendering.DataSource))
            {
                return null;
            }

            var item = RenderingContext.Current.Rendering.Item;

            var viewModel = new PageTitleViewMode
            {
                PageTitle = FieldRenderer.Render(item, "PageTitle")
            };

            return this.React("PageTitle", viewModel);
        }

        public ActionResult PageBody()
        {
            if (string.IsNullOrEmpty(RenderingContext.Current.Rendering.DataSource))
            {
                return null;
            }

            var item = RenderingContext.Current.Rendering.Item;

            var viewModel = new PageBodyViewTitle
            {
                PageBody = FieldRenderer.Render(item, "PageBody")
            };

            return this.React("PageBody", viewModel);
        }
    }
}