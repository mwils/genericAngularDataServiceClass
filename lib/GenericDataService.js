export class GenericDataService {
    http;
    baseURL;
    resourceURL;
    pluralResourceURL;

    constructor(config, httpLib) {
        this.http = httpLib;
        this.baseURL = config.baseURL;
        this.resourceURL = config.resourceURL;
        this.pluralResourceURL = config.pluralResourceURL;
    }

    getOne(id) {
        return this.http.get(`${this.baseURL}/${this.resourceURL}/${id}`)
    }

    getAll() {
        return this.http.get(`${this.baseURL}/${this.pluralResourceURL ? this.pluralResourceURL : this.resourceURL + 's'}`)
    }

    create(item) {
        const httpOptions = {
          headers: {
            'Content-Type':  'application/json'
          }
        };
        
        return this.http.post(`${this.baseURL}/${this.resourceURL}`, item, httpOptions);
    }

    update(id, updates) {
        const httpOptions = {
          headers: {
            'Content-Type':  'application/json'
          }
        };
        
        return this.http.put(`${this.baseURL}/${this.resourceURL}/${id}`, updates, httpOptions);
    }

    destroy(id) {
        return this.http.delete(`${this.baseURL}/${this.resourceURL}/${id}`);
    }
}