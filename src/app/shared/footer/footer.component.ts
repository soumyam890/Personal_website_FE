import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();
    @ViewChild('about') public about:ElementRef;
    @ViewChild('skills') public skills:ElementRef;
    constructor() { }

    ngOnInit() {}
}
