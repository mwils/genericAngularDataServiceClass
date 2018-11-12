/// <reference types="rx-core" />
/// <reference types="rx-core-binding" />
/// <reference types="rx-lite" />
/// <reference types="rx-lite-aggregates" />
/// <reference types="rx-lite-backpressure" />
/// <reference types="rx-lite-coincidence" />
/// <reference types="rx-lite-experimental" />
/// <reference types="rx-lite-joinpatterns" />
/// <reference types="rx-lite-time" />
import { Observable } from "rx";
export declare class GenericDataService {
    _http: any;
    _baseURL: string;
    _resourceURL: string;
    _pluralResourceURL: string;
    constructor(config: any, httpLib: any);
    baseURL: any;
    resourceURL: any;
    pluralResourceURL: any;
    getOne(id: string | number): Observable<any>;
    getAll(): Observable<any>;
    create(item: string | number): Observable<any>;
    update(id: string | number, updates: any): Observable<any>;
    destroy(id: string | number): Observable<any>;
}
