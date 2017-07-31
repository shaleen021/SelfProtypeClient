import { Injectable } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';

@Injectable()
export class AppProgressBarService {

    private _counter = 0;
    constructor(private proService: NgProgressService) { }

    start() {
        this._counter++;
        this.proService.start();
    }

    done() {
        this._counter--;
        if (this._counter === 0) {
            this.proService.done();
        }
    }
}
