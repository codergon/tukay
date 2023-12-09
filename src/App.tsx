import { Suspense } from "react";
import { useTheme } from "contexts";
import Airdrop from "pages/airdrop";
import Topbar from "components/topbar";
import Giveaways from "pages/giveaways";
import Sidebar from "components/sidebar";
import { Route, Routes } from "react-router-dom";
import { Flex, Theme, ThemePanel } from "@radix-ui/themes";

const App = function () {
  const { theme } = useTheme();

  return (
    <>
      <Theme
        radius="full"
        scaling="100%"
        grayColor="sand"
        accentColor="indigo"
        style={{ width: "100%", height: "100%" }}
        appearance={theme === "system" ? "inherit" : theme}
      >
        <Flex gap="0" direction="row">
          <Suspense fallback=".">
            <Sidebar />
          </Suspense>

          {/* <ThemePanel /> */}

          <div className="app-container">
            <div className="app-container__inner">
              <Topbar />

              <Routes>
                <Route path="/" element={<Airdrop />} />
                <Route path="/giveaways" element={<Giveaways />} />
                <Route path="/crowdfund" element={<Airdrop />} />
              </Routes>
            </div>
          </div>
        </Flex>
      </Theme>
    </>
  );
};

export default App;
