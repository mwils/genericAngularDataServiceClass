# Purpose
Provide a standard data service class for simple front end apps
Not meant for production on large apps

## Usage
Usage: import GenericDataService and create your service class as an extended class.

Call super and add the required objects to your constructor

Example:
```
import { Injectable } from '@angular/core';
import { GenericDataService } from 'GenericDataService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HourService extends GenericDataService{
  constructor(public http: HttpClient) {
    super({
      baseURL: apiBase,
      resourceURL: 'user'
    }, http);

    console.log(this.pluralResourceURL); // -> 'users'
  }
  
}
```
Provides Methods
getOne(id)
getAll()
create(item)
update(id, updates)
destroy(id)