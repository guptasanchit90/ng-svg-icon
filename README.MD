# ng-svg-icon

* GITHUB : https://github.com/guptasanchit90/ng-svg-icon

* NPM : https://www.npmjs.com/package/ng-svg-icon

* Demo : https://ng-svg-icons.netlify.com/

## Status
[![Build Status](https://travis-ci.org/guptasanchit90/ng-svg-icon.svg?branch=master)](https://travis-ci.org/guptasanchit90/ng-svg-icon)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fguptasanchit90%2Fng-svg-icon.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fguptasanchit90%2Fng-svg-icon?ref=badge_shield)

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
    NgSvgIconModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// To pass default config while importing
NgSvgIconModule.forRoot({
  defaultColor: '#000',
  defaultSize: 50,
  defaultViewBox: '0 0 24 24'
})
```


Once library is imported, you can use its components in your Angular application:

```xml
<!-- Pass custom config to each icon -->
<ng-svg-icon name="help" color="white" size="24" viewBox="0 0 24 24"></ng-svg-icon>
```

```xml
<!-- Pass dynamic icon name -->
<ng-svg-icon [name]="iconName"></ng-svg-icon>
```

## License

MIT © [Sanchit Gupta](mailto:gupta.sanchit90@gmail.com)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fguptasanchit90%2Fng-svg-icon.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fguptasanchit90%2Fng-svg-icon?ref=badge_large)