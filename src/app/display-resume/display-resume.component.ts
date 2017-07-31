import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DisplayResumeService } from './display-resume.service';
import { DisplayResumeInterface } from './display-resume.interface';
import { ChartModule } from 'angular2-highcharts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-display-resume',
  templateUrl: './display-resume.component.html',
  styleUrls: ['./display-resume.component.css'],
  providers: [DisplayResumeService]
})
export class DisplayResumeComponent implements OnInit,OnDestroy {

  constructor(private _displayResumeService: DisplayResumeService) {
  
   }
  public subscription: Subscription[] = [];
  public data: DisplayResumeInterface;
  public  options: Object;
  public chart: Chart;
 
  loadChart(data : DisplayResumeInterface){
    var skillNames = [];
    var proficiency = [];
    for(var i=0; i<data.skills.length ;i++){
        skillNames.push(data.skills[i].skillName);
        proficiency.push(data.skills[i].proficiency);
    }
      this.chart = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
       xAxis: {
        categories: skillNames
       },
       yAxis: {
        min: 0,
        max: 10,
        title: {
            text: 'Proficiency'
        }
      },
      series: [
        {
          "name":"Skill Proficiency Level",
          "data":proficiency
        }
      ]
    });
  }
  ngOnInit() {
   this.subscription.push(
    this._displayResumeService.fetchDisplayResumeInf()
      .subscribe(response => {
        this.data = response.results[0];
        console.log(this.data.education);
        this.loadChart(this.data);
      })
   );
  

  }

  ngOnDestroy(){
     this.subscription.forEach(sub => sub.unsubscribe());
  }

}
