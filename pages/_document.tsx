import Document, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext,
} from "next/document";

class HTMLDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const originalRenderPage = context.renderPage;

    context.renderPage = () => {
      return originalRenderPage({
        enhanceApp: (App) => App,
      });
    };

    const initialProps = await Document.getInitialProps(context);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default HTMLDocument;
