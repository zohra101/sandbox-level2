### IMAGE MAP WITH ORDERED LIST
Use map and area to define an image map
map needs the name attribute
img needs the usemap attribute
usemap should start with # and match name

<area shape="poly">
area needs the shape attribute
shape can be rect, circle, or poly

<area coords="12,34, 56,78">
area needs the coords attribute
coords can be obtained with Luna Paint or Pix Spy

<area target="_blank">
add href to area to make it clickable
add title to area for tooltip popups
add target="_blank" to area so links open in a new tab

<script>imageMapResize();</script>
add link to image resizer JSDelivr CDN
Call imageMapResize() to automatically scale image maps

### SUB-LEVEL LISTS
Create a list `<ol>`
Add a `<li>`
Insert a list into `<li>`
Add `<li>` to the sub-level list

### HTML Entities  (https://www.freeformatter.com/html-entities.html)
Special characters rendered by a special code
Always starts with `&` and ends with `;`
The code goes in between
&lt; === less than sign
&gt; === greater than sign
Example:
&lt;map&gt; ===<map>
### CODE EMPHASIS <code></code>
`<code>` adds emphasis by using monospace font and changing the color

### PREFORMATTED TEXT
 `<pre>` renders all spaces and line breaks