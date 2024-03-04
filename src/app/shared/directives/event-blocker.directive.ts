import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[app-event-blocker]'
})
export class EventBlockerDirective {

  @HostListener('drop', ['$event'])
  @HostListener('dragover', ['$event'])
  public handleEvent(event: Event) {
    event.preventDefault()
    event.stopPropagation()
  }

  //One way to get handle multiple of the same event, example of just dropping an object, sometimes dragging over will open it too
  // @HostListener('dragOver', ['$event'])
  // public handleEvent2(event: Event) {
  //   event.preventDefault()
  //   event.stopPropagation()
  // }

}
