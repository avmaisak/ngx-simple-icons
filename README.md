<p align="center">
<a href="https://simpleicons.org/">
<img src="https://simpleicons.org/icons/simpleicons.svg" alt="Simple Icons" width=64 height=64>
</a>
<h3 align="center">Angular Module for SimpleIcons</h3>
<p align="center">
Over 2100 Free SVG icons for popular brands. See them all on one page at <a href="https://simpleicons.org">SimpleIcons.org</a>. Contributions, corrections & requests can be made on GitHub.</p>
</p>


## Installation

```
npm i ngx-simple-icons --save
```

## Usage

### Import module

```typescript
import { NgxSimpleIconsModule } from 'ngx-simple-icons';
```

### Import needed icons

```typescript
import { activision, adobexd } from 'ngx-simple-icons';
```

### Use method pick for using selected icons

```typescript
import { 
  NgxSimpleIconsModule, 
  activision,
  adobexd,
} from 'ngx-simple-icons';

@NgModule ({
  imports: [
    NgxSimpleIconsModule.pick({ activision, adobexd })
  ],
})
MyModule
```

### Usage in component

```html
<si icon="adobexd"></si>
<!-- use tag -->
<span si icon="adobexd"></span>

```

In component, you can use Enum or Type

```typescript
import { IconNameEnum } from 'ngx-simple-icons';

public iconNames = IconNameEnum;
```

```html
<si [icon]="iconNames.adobexd"></si>
```
