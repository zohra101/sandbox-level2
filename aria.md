# ARIA
ARIA is an attribute used in many Bootstrap components.

It's a way to make websites more accessible to people with disabilities.

### ARIA attributes

1. `aria-current`
   - Indicates that an item is currently selected.
   - `"page"` indicates that the item is a page.
   - `"true"` that the item is currently selected.
   - Other valid values: `"step" "location" "date" "time"`
   - Use on elements that can be selected.
2. `aria-disabled`
   - Indicates the status of an item.
   - `"true"` indicates that the item is disabled.
   - Switch it to `"false"` when the item is enabled.
   - Use on elements that can be disabled and enabled.
3. `aria-label`
   - Describes an item without a label.
   - `"Close"` is describing a button that has a meaning, but no label.
   - Use on icons or images that have a meaning but no label.

### Enable the accessibility tree in developer tools

1. Open developer tools
2. Elements tab
3. Accessibility tab
4. Enable full-page accessibility tree
5. Refresh the page

### Accessibility tree

The accessibility tree:

- Represents the structure of a web page.
- Only includes accessibility elements.
- How assistive technologies interpret and describe a web page to a user.

### Semantic elements

1. header
2. main
3. footer
4. section
5. headings
6. `<p>`
7. `<label>`
8. `<article>`
   - Use for blog posts, news articles, and other independent self-contained content.
   - Example: recipe cards
9. `<section>`
   - Use to enclose themes, categories, and content with headings.
   - Example: recipe ingredients, recipe instructions
10. `<dialog>`

- Use this for a box or window that can be opened or closed.
- Example: Bootstrap alert
- Note: Use the open attribute to show the `<dialog>` content.

11. `<output>`
    - Use this for the result of a calculation or showing feedback.
    - Example: The form has been successfully submitted.

### Semantic attributes

1. Attributes that begin with `aria`
   - aria-current
   - aria-disabled
   - area-label
2. `type`
   - type="password"
   - type="tel"
3. `role`
   - role="alert"
4. `for` and `id`
   - for="phone"
   - id="phone"
   - `for` should match the `id`

### `aria-current="page"`
ARIA for navbars.
• This ARIA indicates that an item is currently selected.
• "page" indicates that the item is a page.
• Use on elements that can be selected.

### `aria-current="true"`
ARIA for list groups.
• This ARIA indicates the status of an item.
• "true" indicates that the item is currently selected.
• Use on items that can be selected.

### Other valid values for aria-current:
• "page"
• "true" or "false"
• "step"
• "location"
• "date"
• "time"

### `aria-disabled`
missing a bunch of notes here

### `aria-label="Close"`
ARIA for alerts.
• This ARIA describes an item without a label.
• "Close" is describing a button that has a meaning, but no label.
• Use on icons or images that have a meaning but no label.

### `aria-role`

### `aria-type`

### Enable the accessibility tree in developer tool to display accessible elements and their attributes. 
1. Load the generic-elements.html file from your sandobx.
2. In the browser, open the developer tools.
3. Go to the Elements tab.
4. Accessibility tab.
5. Enable full-page accessibility tree.
6. Refresh page.

### Senantic elements
1. Header
2. Main
3. Footer
4. nav bar
5. list group
6. alert
7. <p>
8. <label>
9. <article>
10. <section>
11. dialog
12. output

### Senantic attributes
1. something
2. something else