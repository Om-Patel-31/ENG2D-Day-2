document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const group = params.get("group");

  const groupLinks = {
    1: "https://docs.google.com/presentation/d/e/2PACX-1vRwCGsj8dGjz5f8CIBz_VaWtNQ7Ms0NTfGNydbXgyAHDLc2Ie4q2vsbG3cV4xut6DBUx4LukYzF75gO/pub?start=false&loop=false&delayms=3000",
    2: "https://docs.google.com/presentation/d/e/2PACX-1vRukSOrUADXuVQv3nF7dfvE36E8Md6VEmr-Ochu0XBTEVqdXGy-ypsCJEeYwJn6rbNE6KKE3xZUqRoA/pub?start=false&loop=false&delayms=3000",
    3: "https://docs.google.com/presentation/d/e/2PACX-1vSotGh3upkZKDtdVF-fr1QFjNJFE5tGpEMQxBiD34X5ukCc0dLc3Htmh7UTOrA0WKoL86wwBCNE1Hf7/pub?start=false&loop=false&delayms=3000",
    4: "https://docs.google.com/presentation/d/e/2PACX-1vQdw6q46iGxQKzoaT52k00vovL-hTP5ec4-liYeIgH1_H4hg9SDLLQX_lXX-uVp772KaWFOekFnFdCI/pub?start=false&loop=false&delayms=3000",
    5: "https://docs.google.com/presentation/d/e/2PACX-1vQqev37wPw8UHNvPt8nxAMdWnA7U_6eNAIxV9Avp4gQQf7s0bHdbOI3Z2du1wG33sKHeRJ6V8y1ux46/pub?start=false&loop=false&delayms=3000",
    6: "https://docs.google.com/presentation/d/e/2PACX-1vQieSR4JEmOE55NVh_o9ntKaYHgVerVrl1Ypm-a5w2_gacnRBNlHKmMTMhU6rwrlr9BqxS-WS5OCkuW/pub?start=false&loop=false&delayms=3000",
  };

  for (let i = 1; i <= 6; i++) {
    const btn = document.getElementById(`group${i}Btn`);
    if (btn) {
      if (group == i.toString()) {
        btn.style.display = "block";
        btn.addEventListener("click", () => {
          window.location.href = groupLinks[i];
        });
      } else {
        btn.style.display = "none";
      }
    }
  }
});