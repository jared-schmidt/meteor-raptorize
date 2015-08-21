# meteor-raptorize

This is a meteor version of the jquery-raptorize from zurb.com. That I created.

I have no affiliation with zurb.com

Original jQuery Plugin: http://zurb.com/playground/jquery-raptorize

# Installation

`$ meteor add jschmidt:raptorize`

# Start

Call `Raptorize();` in a function.


# Example

example.js

```javascript
Template.hello.events({
    'click button': function() {
        Raptorize();
    }
});
```

example.html
```html
<body>
    {{> hello}}
</body>

<template name="hello">
    <button>Click Me</button>
</template>
```
