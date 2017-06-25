# Easy-download-git-repo
[![NPM version](https://img.shields.io/npm/v/easy-download-git-repo.svg?style=flat)](https://www.npmjs.com/package/easy-download-git-repo)
[![NPM download](https://img.shields.io/npm/dm/easy-download-git-repo.svg?style=flat)](https://www.npmjs.com/package/easy-download-git-repo)

## Setup
```shell
npm i -g easy-download-git-repo 
```
## Usage
### Archive
```shell
inp https://github.com:kuangyeheng/easy-download-git-repo#master my-project
```
### Git clone
```shell
inp -c https://github.com:kuangyeheng/easy-download-git-repo#master my-project
```

### Local directory
```shell
inp -l D:\projects\project-seed my-project
```

### Interactive
```shell
#Archive
inp

#Git clone
inp -c
 
#Local directory
inp -l

#Example

inp -l
*********************************** Attention ***********************************
* Tips: url split by ":"                                                        *
* For example:                                                                  *
* https://mygitlab.com:kuangyeheng/my-project#master                            *
*********************************************************************************

? Please,input your project name: my-project
? Please,input your project-seed path: D:\project-seed\vue
projectName: my-project

projectSeedPath: D:\project-seed\vue

isFromLocal: true

clone: false

Project init done!

```
> [Click here to read more](https://github.com/flipxfx/download-git-repo)
