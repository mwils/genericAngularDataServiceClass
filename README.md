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
      baseURL: 'http://my.api',
      resourceURL: 'user'
    }, http);

    console.log(this.pluralResourceURL); // -> 'users'
  }
  
}
```
Provides Methods
getOne(id) // This would call GET http://my.api/user/{id}
getAll() // -> GET http://my.api/users
create(item) // -> POST http://my.api/user with item as json
update(id, updates) // -> PUT http://my.api/user/{id} with updates as json
destroy(id) // -> DELETE http://my.api/user/{id}