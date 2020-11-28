import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  something: any;
  constructor(public router: Router) { 
    
  }
  ngAfterViewInit(): void {
    this.something = anime({
      targets: '.css-transforms-demo .el',
      'scale':{
        value: 1.1,
        duration: 2000,
        easing: 'easeInOutSine'
      },
      direction: 'alternate',
      loop: true,
       easing: 'easeInOutSine'
    });
  }

  ngOnInit() {
  }
  
  hacerRegistro(){
    this.router.navigate(['/registro']);
  }

}
