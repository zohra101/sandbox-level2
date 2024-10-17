### MERGE TEST
1. `git init`
2. `touch index.html`
3. `git add .`
4. `git commit -m "added files"`
5. GITHUB: Create a new repository called merge-test
6. `git remote add origin https://myRepository`
7. `git push --set-upstream origin main`
8. `git branch myBranch`
9. `git switch myBranch`
10. add `<p>Hello World!</p>` to the index.html file
11. Save the changes CTRL + S
12. `git add .`
13. `git commit -m "updated file`
14. `git switch main`
15. Change the history from `Auto` to `All`
16.  `git merge myBranch`
17.  `git push`
18.  `git switch myBranch`
19.  Add `<p> Amazing World!</p>` to index.html file
20.  Save the changes CTRL + S
21.  `git add .`
22.  `git commit -m "updated file"`
23.  `git switch main`
24.  Add the file about.html with `touch about.html
25.  `git add .`
26.  `git commit -m "added a file"`
27.  `git merge myBranch`
28.  Approve the merge by closing the merge editor or the VIM editor by typing `:qa` then `enter`
29.  `git rebase myBranch`
30.  `git push`
31.  `git switch myBranch`
32.  `git rebase main`
33.  Add `<h1>About Page</h1> to about.html
34.  Save the changes CTRL +S
35.  `git add .`
36.  `git commit -m "added heading"`
37.  `git switch main`
38.  Add `<h2>About Page</h2> to about.html
39.  Save the changes CTRL +S.
40.  `git add .`
41.  `git commit -m "added heading"`
42.  `git merge myBranch`
43.  Select a resolution at the top of the screen.
44.  Save the changes CTRL +S.
45. `git add .`
46. `git commit -m "merged conflicting headings"`
47. `git push`

### REBASE TO CORRECT CONFLICTS
48. `git rebase branch1`
49. Select a resolution at the top of the screen.
50. Save the changes CTRL +S.
51. `git add .`
52. `git rebase --continue`
53. `git push` 
54. `git push --force*`
   
### RESTORE A SAVE POINT
55. Select a commit to restore.
56. Copy its id.
57. `git reset --hard id123456789*`
58. `git push` will result in an error
59. `git push --force*`
    
### PUSH A BRANCH TO GITHUB
60. `git push origin branch1`

### DELETE A BRANCH
62. `git branch --delete branch1`
63. `git branch -D branch1`
64. 
### RESTORE A BRANCH FROM GITHUB
65. `git branch`
66. `git branch branch1 origin/branch1`
67. `git branch`git branc   
  