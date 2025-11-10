"use client";
import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
  RPTheme,
} from "@pdf-viewer/react";

const AppPdfViewer = () => {
  return (
    <RPTheme
      // Set your styles to the CSS variables
      customVariables={{
        "--rp-text-color": "red",
        "--rp-toolbar-background": "#FFFFE0",
        "--rp-pages-background-color": "#F8F8FF",
      }}
      // Set your dark mode styles to the CSS variables
      customDarkVariables={{
        "--rp-text-color": "#FFFFE0",
        "--rp-toolbar-background": "#666600",
        "--rp-pages-background-color": "#5C4033",
      }}
    >
      <RPProvider src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf">
        <RPDefaultLayout>
          <RPPages />
        </RPDefaultLayout>
      </RPProvider>
    </RPTheme>
  );
};

export default AppPdfViewer;
