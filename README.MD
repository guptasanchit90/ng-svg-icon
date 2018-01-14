# ng-svg-icon

## Installation

To install this library, run:

```bash
$ npm install ng-svg-icon --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng-svg-icon
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgSvgIconModule } from 'ng-svg-icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once library is imported, you can use its components in your Angular application:

```xml
<ng-svg-icon name="help" color="white" size="24" viewBox="0 0 24 24"></ng-svg-icon>
```

```xml
<ng-svg-icon [name]="iconName"></ng-svg-icon>
```

## License

MIT © [Sanchit Gupta](mailto:gupta.sanchit90@gmail.com)