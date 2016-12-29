import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { Query } from '../models/query';

@Injectable()
export class QueryService {

    public query: ReplaySubject<any> = new ReplaySubject(1);

    setQuery(query: Query) {
        this.query.next(query);
    }
}
