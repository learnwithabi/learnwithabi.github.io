# react-src

Source for the React portfolio app. Content lives in `src/data.js` — edit that file to update experience, skills, projects, or certifications instead of touching the components.

Built output is committed to `../app/` (repo root) and served by GitHub Pages at `learnwithabi.github.io/app/`.

## Develop

```
npm install
npm run dev
```

## Deploy

After making changes, rebuild and commit the output:

```
npm run build
cd ..
git add app/ react-src/
git commit -m "Update react app"
git push
```

`vite.config.js` sets `base: '/app/'` and `build.outDir: '../app'` so the build lands in the right place with the right asset paths.
