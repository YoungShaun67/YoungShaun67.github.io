ARCADEHAUS site: how to use
1. Test it: open index.html, or run "python -m http.server" in this folder and visit localhost:8000
2. Edit text in the .html files. Edit colors at the top of css/style.css.
3. Before publishing: replace YOURSITE in sitemap.xml and robots.txt with your real web address.
4. Publish: put this folder in a public GitHub repo, then Settings > Pages > Deploy from a branch.
5. When the Swing City browser build is ready: put it in games/swing-city/play/ and in games/swing-city/index.html swap the COMING SOON button for the PLAY link (see the comment there).
6. Add a game: copy games/swing-city, edit it, add a card to games.html, add its URL to sitemap.xml.
