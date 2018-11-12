var GenericDataService = /** @class */ (function () {
    function GenericDataService(config, httpLib) {
        this._http = httpLib;
        this._baseURL = config.baseURL;
        this._resourceURL = config.resourceURL;
        this._pluralResourceURL = config.pluralResourceURL;
    }
    Object.defineProperty(GenericDataService.prototype, "baseURL", {
        get: function () {
            return this._baseURL;
        },
        set: function (url) {
            this._baseURL = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericDataService.prototype, "resourceURL", {
        get: function () {
            return this._resourceURL;
        },
        set: function (url) {
            this._resourceURL = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericDataService.prototype, "pluralResourceURL", {
        get: function () {
            return this._pluralResourceURL;
        },
        set: function (url) {
            this._pluralResourceURL = url;
        },
        enumerable: true,
        configurable: true
    });
    GenericDataService.prototype.getOne = function (id) {
        return this._http.get(this._baseURL + "/" + this._resourceURL + "/" + id);
    };
    GenericDataService.prototype.getAll = function () {
        return this._http.get(this._baseURL + "/" + (this._pluralResourceURL ? this._pluralResourceURL : this._resourceURL + 's'));
    };
    GenericDataService.prototype.create = function (item) {
        var httpOptions = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return this._http.post(this._baseURL + "/" + this._resourceURL, item, httpOptions);
    };
    GenericDataService.prototype.update = function (id, updates) {
        var httpOptions = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return this._http.put(this._baseURL + "/" + this._resourceURL + "/" + id, updates, httpOptions);
    };
    GenericDataService.prototype.destroy = function (id) {
        return this._http.delete(this._baseURL + "/" + this._resourceURL + "/" + id);
    };
    return GenericDataService;
}());
export { GenericDataService };
