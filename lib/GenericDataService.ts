import { Observable } from "rx";

export class GenericDataService {
    _http: any;
    _baseURL: string;
    _resourceURL: string;
    _pluralResourceURL: string;

    constructor(config: any, httpLib: any) {
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

    getOne(id: string | number): Observable<any> {
        return this._http.get(`${this._baseURL}/${this._resourceURL}/${id}`)
    }

    getAll(): Observable<any> {
        return this._http.get(`${this._baseURL}/${this._pluralResourceURL ? this._pluralResourceURL : this._resourceURL + 's'}`)
    }

    create(item: string | number): Observable<any> {
        const httpOptions = {
          headers: {
            'Content-Type':  'application/json'
          }
        };
        
        return this._http.post(`${this._baseURL}/${this._resourceURL}`, item, httpOptions);
    }

    update(id: string | number, updates: any): Observable<any> {
        const httpOptions = {
          headers: {
            'Content-Type':  'application/json'
          }
        };
        
        return this._http.put(`${this._baseURL}/${this._resourceURL}/${id}`, updates, httpOptions);
    }

    destroy(id: string | number): Observable<any> {
        return this._http.delete(`${this._baseURL}/${this._resourceURL}/${id}`);
    }
}