
# TUS.Marker

TUS.Marker is jquery plugin to highlight word within content.

## Plugin Parameters

1.  **text** - keyword to highlighted.
2.  **css** - define class name for css purpose.
3.  **caseSensitive** - to control case sensitive during search. default true.
4.  **inWord** - to find keyword within string. default false.

## Sample Code

Below sample code.
```
$('#content').tusmarker({
	text:  "as",
	css:  "highlight",
	caseSensitive:  true,
	inWord:  false,
});
```
