
#!/usr/bin/env sh
# abort on errors
set -e

# build
yarn run build
# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'b2nh.tintamarre.be' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:tintamarre/b2nh-front master:gh-pages
cd -
echo "Visit b2nh.tintamarre.be"