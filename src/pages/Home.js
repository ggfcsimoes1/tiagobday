/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

export function Home() {
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (
      e.currentTarget[0].value.length === 0 &&
      e.currentTarget[1].value.length === 0
    )
      alert("por favor preencha as suas informaçoes de pagamento");
    else setClicked(true);
  }
  const handleImageClick = (e) => {
    e.preventDefault();
    console.log("e");
    setImage(true);
  };
  return (
    <>
      <div className="center">
        {image ? (
          <>
            <img src="scamalizado.png" />
            <h1 className="tab blink">(depois combinamos)</h1>
          </>
        ) : (
          <>
            <h1 className="tab blink">parabens tiago!</h1>
            {clicked ? (
              <>
                <h2>clique no cupão para resgatar!</h2>
                <img
                  className="clickable-image"
                  src="tiago.png"
                  onClick={(e) => handleImageClick(e)}
                />
              </>
            ) : (
              <>
                <h2>
                  insira os seus dados de pagamento para resgatar o seu
                  presente!
                </h2>
              </>
            )}
            <h2>
              {!clicked && (
                <form onSubmit={(e) => handleSubmit(e)} required>
                  <label>
                    Número:
                    <input type="tel" name="name" />
                    CVV:
                    <input type="tel" name="name" />
                  </label>
                  <div>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              )}
            </h2>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
