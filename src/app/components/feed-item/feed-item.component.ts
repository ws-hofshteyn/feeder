import { Component, OnInit, Input } from '@angular/core';
import { FeedModel } from './../../models/feed.model';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: ['./feed-item.component.scss']
})

export class FeedItemComponent {
    
    @Input() item: FeedModel;
    
    constructor () {}

    ngOnInit () { }
}

