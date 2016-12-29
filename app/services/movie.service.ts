import { Injectable } from '@angular/core';

import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Movie } from '../models/movie';
import { Query, QueryByTitle } from '../models/query';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {
    private apiUrl = 'http://www.omdbapi.com/?';

    movies: Movie[] = [];

    constructor(public http: Http) {
    }

    getAll(): Observable<any[]> {
        return this.http.get(this.apiUrl, new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' }
            )
        }))
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    search(query: any): Observable<any[]> {

        let params = new URLSearchParams();
        for (let prop in query) {
            if (query.hasOwnProperty(prop)) {
                params.set(prop, query[prop]);
            }
        }

        return this.http.get(this.apiUrl, {
            search: params
        })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getMovieByTitle(query: any): Observable<any[]> {

        let params = new URLSearchParams();
        for (let prop in query) {
            if (query.hasOwnProperty(prop)) {
                params.set(prop, query[prop]);
            }
        }

        return this.http.get(this.apiUrl, {
            search: params
        })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
