import { Observable } from "rxjs";

export class GenericDataService {
    _http;
    _baseURL;
    _resourceURL;
    _pluralResourceURL;

    constructor(config, httpLib) {
        this._http = httpLib;
        this._baseURL = config.baseURL;
        this._resourceURL = config.resourceURL;
        this._pluralResourceURL = config.pluralResourceURL;
    }

    set baseURL(url) {
        this._baseURL = url;
    }

    set resourceURL(url) {
        this._resourceURL = url;
    }

    set pluralResourceURL (url) {
        this._pluralResourceURL = url;
    }

    get baseURL() {
        return this._baseURL;
    }

    get resourceURL() {
        return this._resourceURL;
    }

    get pluralResourceURL () {
        return this._pluralResourceURL;
    }

    getOne(id): Observable<any> {
        return this._http.get(`${this._baseURL}/${this._resourceURL}/${id}`)
    }

    getAll(): Observable<any> {
        return this._http.get(`${this._baseURL}/${this._pluralResourceURL ? this._pluralResourceURL : this._resourceURL + 's'}`)
    }

    create(item): Observable<any> {
        const httpOptions = {
          headers: {
            'Content-Type':  'application/json'
          }
        };
        
        return this._http.post(`${this._baseURL}/${this._resourceURL}`, item, httpOptions);
    }

    update(id, updates): Observable<any> {
        const httpOptions = {
          headers: {
            'Content-Type':  'application/json'
          }
        };
        
        return this._http.put(`${this._baseURL}/${this._resourceURL}/${id}`, updates, httpOptions);
    }

    destroy(id): Observable<any> {
        return this._http.delete(`${this._baseURL}/${this._resourceURL}/${id}`);
    }
}