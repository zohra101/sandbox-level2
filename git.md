# Git Commands

## Setup
### INSTALL GIT BASH
1. Run the command `git --version`.
2. If there's an error, install Git Bash from https://git-scm.com/.
3. Choose default options, but override the branch name with main.
4. Reload VS Code to apply changes.

### INSTALL GITHUB CLI
1. Run the command `gh --version`.
2. If there's an error, install GitHub CLI from https://cli.github.com/.
3. Choose default options.
4. Reload VS Code to apply changes.

### CONFIGURE USER NAME
1. Run the command `git init`.
2. Run the command `git config user.name`.
3. If it's not correct, run the command `git config user.name "myUserName"`.

### CONFIGURE USER EMAIL
1. Run the command `git init`.
2. Run the command `git config user.email`.
3. If it's not correct, run the command `git config user.email "my@email.com`.

### GLOBAL EMAIL (DEFAULT EMAIL)
1. Run the command `git init`.
2. Run the command `git config --global user.email`.
3. If it's not correct, run the command `git config --global user.email "my@email.com`.
   
### COPY THE REPOSITORY LINK
1. Open GitHub.
2. Open the repository.
3. Click on the green Code button.
4. Copy the HTTPS link.

### PULL FROM GITHUB
1. Run the command `git init`.
2. Run the command `git remote add origin https://github.com/myRepositoryLink`.
3. Run the command `git pull origin main`.

### CREATE A NEW REPOSITORY IN GITHUB
1. Click on the cat icon at the top left.
2. Click on the green new button at the top left.
3. Enter the repository name.
4. Click Create repository.
5. Do not change the default settings.
   
### IF BRANCH IS MASTER
`git branch -M main`
--renames the branch from master to main
`git add .`
`git commit -m "renamed the branch"`
`git push --set-upstream origin main`

### PUSH TO GITHUB FOR THE FIRST TIME
1. `gh auth login`
2. `git remote set-url origin https://github.com/myRepositoryLink2`
3. `git add .`
4. `git commit -m "added files"`
5. `git push --set-upstream origin main`

## Working with Git

### DELETE UNUSED FILES
If there are files that VS Code doesn't need (like Glitch files), delete those.

### GLOBAL MAIN
`git config --global init.defaultBranch main`

### Make git use vs code instead of vim text editor:​
`git config --global core.editor "code --wait"`

### PUSH TO GITHUB REGULARLY
1. `git add .`
2.` git commit -m "the changes I made"`
3. `git push`

### DELETE SOURCE CONTROL
 ```
 ls -a
 m -r
 ```

### COMMAND DESCRIPTIONS
1. `git init`: Initializes source control
3. `git pull origin main`: Copies files from the origin
4. `gh auth login`: Grants authorization to push to your repository
5. `git remote set-url origin`: Sets the origin
6. `git push --set-upstream origin main`: Pushes files to GitHub and makes origin and main the default options
7. `git branch -M main`: rename default branch to Main
8. `git branch`: View the branches

### FORCE DELETE REPOSITORY
rm -rf .git

### VIEW BRANCHES
`git branch`
- Will list all branches, (*) signals which branch you are currently using.

### CREATE A BRANCH
`git branch [branchName]`

### SWITCH TO A BRANCH
`git switch [branchName]`

### SWITCH TO A BRANCH IN GLITCH
`git checkout myBranch`
- git switch command does not work in Glitch

### MERGE BRANCHES
1. Switch to the target branch (main): `git switch [branchName]`
2. Merge the other branch (myBranch): `git merge myBranch`.

### REBASE TO CORRECT CONFLICTS
`git rebase myBranch`
`git push`
`git push --force`
