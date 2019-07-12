using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;

namespace SealReportIntg.Controllers
{
    public class ReportController : Controller
    {
        // GET: Report
        public ActionResult ShowReport()
        {
            string url = ConfigurationManager.AppSettings["SealUrl"].ToString();
            string report = ConfigurationManager.AppSettings["ReportPath"].ToString();
            ViewBag.SealUrl = "'" + url + "'";
            ViewBag.Report = "'" + report + "'";
            return View();
        }

    }
}