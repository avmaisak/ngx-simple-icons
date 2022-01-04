# Angular Module for SimpleIcons.

## Installation

```
npm i ngx-simple-icons --save-dev
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
