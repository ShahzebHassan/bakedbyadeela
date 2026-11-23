# Bakedbyadeela

Responsive luxury floral cake and cupcake bouquet website.

Draft: https://bakedbyadeela.netlify.app/

## Open in Visual Studio Code

Choose File > Open Folder and select this project folder.
No npm dependencies are required.

## Preview locally

With Python installed, run in the VS Code terminal:

```sh
python -m http.server 4174 --directory dist
```

Visit http://localhost:4174 in your browser.
You can also open dist/index.html directly for a quick preview.

## Edit

- Shared layouts and page content: build.py. Run `python build.py` after editing.
- Styling: dist/style.css
- Interactions: dist/app.js
- Images, logo and local fonts: dist/assets/

## Deploy to Netlify

Import this repository. Leave the build command empty and use `dist` as the publish directory.
Alternatively drag the dist folder to Netlify Drop.
Generated HTML is committed, so Python is only needed when regenerating pages.

## Draft details

The enquiry form prepares a message for Instagram; it does not send email or store enquiries.
Phone and email are placeholders. Business copy and flavours need final confirmation.
Product images are AI-created illustrations, not actual portfolio photography.
Font licences are included in dist/assets.
