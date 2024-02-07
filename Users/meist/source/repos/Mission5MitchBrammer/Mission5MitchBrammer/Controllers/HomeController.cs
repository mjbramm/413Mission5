using Microsoft.AspNetCore.Mvc;

namespace Mission5MitchBrammer.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Hire()
        {
            return View();
        }
    }
}
