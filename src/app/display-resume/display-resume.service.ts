import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, Headers, RequestOptions, URLSearchParams ,ResponseContentType} from '@angular/http';
import { AppProgressBarService } from '../app.progressbar.service';
import { DisplayResumeInterface } from './display-resume.interface';
import { Observable } from 'rxjs/Observable';
import { Res } from './display-resume.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DisplayResumeService {
    private _fetchResumeInformation = environment.fetchResumeInformationURL;
    public data: DisplayResumeInterface;

    constructor(private _http: Http, private proService: AppProgressBarService) {}

    public fetchDisplayResumeInf() : Observable<Res> {
        this.proService.start();
        let params = new URLSearchParams();
       
        return this._http.get(this._fetchResumeInformation, { search: params })
            .map((response: Response) => <Res>response.json())
            .do(response => this.proService.done())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}