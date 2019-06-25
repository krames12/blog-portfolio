---
path: '/node-sass-gyp-error-and-how-to-fix-it'
title: Node-SASS gyp error and how to fix it
published: false
date: '2019-06-15'
---

## Frustrations
I have done development on Windows (WSL and command prompt), Linux (CentOS & Ubuntu based), and MacOS, and just about every time I go back into an old project where `node-sass` is used I run into issues! It's almost always the dreaded `gyp ERR! stack Error: `gyp` failed with exit code: 1`

![node-gyp error in the console](https://res.cloudinary.com/dndefcztu/image/upload/v1561473625/portfolio/Screen_Shot_2019-06-15_at_6.25.13_AM.png)

## How do I fix it?
From what I've found from talking to friends and googling the same thing at least 30 times (`gyp node-sass rebuild`) at this point, is to do a rebuild or re-install of the package.

These posts have helped me in the past, so credit to them for getting me out of this bind many many times.

#### Links
https://stackoverflow.com/questions/33896511/npm-install-fails-with-node-gyp
https://github.com/nodejs/node-gyp/issues/809#issuecomment-155019383

```
npm uninstall node-sass
npm install node-sass
```

I will update this when I actually figure out what is actually going on with this and WHY.