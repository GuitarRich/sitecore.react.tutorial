module.exports = function () {
    var instanceRoot = "C:\\inetpub\\wwwroot\\sitecorereact1";
    var config = {
        websiteRoot: instanceRoot + "\\Website",
        sitecoreLibraries: instanceRoot + "\\Website\\bin",
        licensePath: instanceRoot + "\\Data\\license.xml",
        solutionName: "sitecore.react.tutorial",
        buildConfiguration: "Debug",
        buildPlatform: "Any CPU",
        buildToolsVersion: 15.0, //change to 15.0 for VS2017 support
        publishPlatform: "AnyCpu",
        runCleanBuilds: false
    };
    return config;
}