export default class Data {
    static getData(templateName, callback) {
        var jsonUrl = "/data/json/" + templateName + ".json";
        fetch(jsonUrl)
            .then(response => response.json())
            .then((data) => {
                callback(data);
            });
    }
}