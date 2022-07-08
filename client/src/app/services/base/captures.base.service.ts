/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE capturesBaseService PLEASE EDIT ../captures.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Captures } from '../../domain/test_db/captures';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../captures.service.ts
 */

/*
 * SCHEMA DB captures
 *
	{
		cType: {
			type: 'Number',
			required : true,
			enum : ["c", "r", "s"]
		},
		captures: {
			type: 'String',
			required : true
		},
		filterOutC: {
			type: 'Custom'
		},
		filterOutR: {
			type: 'Custom'
		},
		filterOutS: {
			type: 'Custom'
		},
		url: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class CapturesBaseService {

    contextUrl: string = environment.endpoint + '/captures';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * capturesService.create
    *   @description CRUD ACTION create
    *   @param String cType
    *   @param String captures
    *   @param String filterOutC
    *   @param String filterOutR
    *   @param String filterOutS
    *   @param String url
    *
    */
    create(item: Captures): Observable<Captures> {
        return this.http
            .post<Captures>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * capturesService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id captures
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * capturesService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id captures
    *   @returns captures
    *
    */
    get(id: string): Observable<Captures> {
        return this.http
            .get<Captures>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * capturesService.list
    *   @description CRUD ACTION list
    *   @returns ARRAY OF captures
    *
    */
    list(): Observable<Captures[]> {
        return this.http
            .get<Captures[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * capturesService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id captures
    *   @returns captures
    *
    */
    update(item: Captures): Observable<Captures> {
        return this.http
            .post<Captures>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}