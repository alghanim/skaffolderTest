// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CapturesService } from '../../services/captures.service';
// Import Models
import { Captures } from '../../domain/test_db/captures';

// START - USED SERVICES
/**
* capturesService.list
*	@description CRUD ACTION list
*	@returns ARRAY OF captures
*
* capturesService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id captures
*
* capturesService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id captures
*	@returns captures
*
* capturesService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id captures
*	@returns captures
*
* capturesService.create
*	@description CRUD ACTION create
*	@param String cType
*	@param String captures
*	@param String filterOutC
*	@param String filterOutR
*	@param String filterOutS
*	@param String url
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Captures
 */
@Component({
    selector: 'app-captures-edit',
    templateUrl: 'captures-edit.component.html',
    styleUrls: ['captures-edit.component.css']
})
export class CapturesEditComponent implements OnInit {
    item: Captures;
    model: Captures;
    formValid: Boolean;

    constructor(
    private capturesService: CapturesService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Captures();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.capturesService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Captures
     *
     * @param {boolean} formValid Form validity check
     * @param Captures item Captures to save
     */
    save(formValid: boolean, item: Captures): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.capturesService.update(item).subscribe(data => this.goBack());
            } else {
                this.capturesService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



