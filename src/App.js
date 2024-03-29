import React, { useState, useEffect, useRef } from "react";
import styles from "./App.module.css"; // Ensure this path matches your CSS module file
import ReactCurvedText from "react-curved-text";
import { Modal, Grid, Button, IconButton } from "@mui/material"; // Import Modal, Grid, and Button from Material-UI
import assets from "./assets/index";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef([]); // Stores references to sections
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [openContactPopUp, setOpenContactPopUp] = useState(false);

  const handleOpenContactPopUp = () => {
    setOpenContactPopUp(true);
  };

  const handleCloseContactPopUp = () => {
    setOpenContactPopUp(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Adjust this value based on your needs
      }
    );

    // Observe all sections
    sectionRefs.current.forEach((ref) => observer.observe(ref));

    // Cleanup observer on component unmount
    return () => sectionRefs.current.forEach((ref) => observer.unobserve(ref));
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to handle smooth scrolling
  const scrollToSection = (e) => {
    e.preventDefault();
    const hrefAttribute = e.target.getAttribute("href");
    const targetId = hrefAttribute ? hrefAttribute.slice(1) : "section1";
    console.log(targetId);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to add section refs
  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <nav>
          <ul style={{ fontSize: "0.8rem" }}>
            <li
              className={activeSection === "section1" ? styles.active : ""}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F7EEDD",
              }}
            >
              <a
                href="#section1"
                onClick={scrollToSection}
                aria-label="svg icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M12,2.09961l-11,9.90039h3v9h7v-6h2v6h7v-9h3zM12,4.79102l6,5.40039v0.80859v8h-3v-6h-6v6h-3v-8.80859z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li
              className={activeSection === "section2" ? styles.active : ""}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F7EEDD",
              }}
            >
              <a href="#section2" onClick={scrollToSection}>
                Gallery
              </a>
            </li>
            <li
              className={activeSection === "section3" ? styles.active : ""}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F7EEDD",
              }}
            >
              <a href="#section3" onClick={scrollToSection}>
                Location
              </a>
            </li>
            <li
              className={activeSection === "section4" ? styles.active : ""}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F7EEDD",
              }}
            >
              <a href="#section4" onClick={scrollToSection}>
                Credits
              </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F7EEDD",
              }}
              onClick={handleOpenContactPopUp}
            >
              Contact
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section
          id="section1"
          ref={addSectionRef}
          className={styles.sectionWithBackground}
        >
          <div className={styles.sectionOneContainer}>
            <div>
              <ReactCurvedText
                width="350" // Increased width
                height="auto" // Increased height
                cx={180}
                cy={250} // Center position adjusted if necessary
                rx={180} // Adjusted radius
                ry={180} // Adjusted radius
                startOffset="10%" // Keep or adjust this value as needed
                reversed={true}
                text=""
                textProps={{
                  style: {
                    fontSize: "37px", // Consider adjusting if still out of bounds
                    letterSpacing: "1px",
                    fontFamily: "Great Vibes, cursive",
                    fontWeight: 600,
                    fontStyle: "normal",
                  },
                }}
              />
            </div>
            <p
              style={{
                fontSize: "35px", // Consider adjusting if still out of bounds
                letterSpacing: "1px",
                fontFamily: "Great Vibes, cursive",
                fontWeight: 400,
                fontStyle: "normal",
                marginBottom: "5px",
              }}
            >
              Summer is Hot & Fun
            </p>

            <p className={styles.heading}>Our Little G is turning ONE !!!</p>
            <p
              style={{
                margin: "0",
                marginTop: "20px",
                fontFamily: "Great Vibes, cursive",
                fontSize: "40px",
                marginBottom: "0px",
              }}
            >
              Birthday Party
            </p>

            <p className={styles.info}>Please join us to celebrate</p>
            <p
              className={styles.name}
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              Ganan's 1st birthday
            </p>
          </div>
        </section>
        <section id="section2" ref={addSectionRef}>
          <div
            className={styles.sectionTwoContainer}
            style={{ visibility: showModal ? "hidden" : "visible" }}
          >
            <div style={{ marginTop: "450px" }}>
              <Button
                onClick={toggleModal}
                sx={{
                  minWidth: "100px",
                  color: "white",
                  borderColor: "White",
                  height: "auto",
                  marginBottom: "10px",
                }}
                variant="outlined"
              >
                View
              </Button>
              <div>
                <a href="https://www.instagram.com/ganan_sagar?igsh=azZpdGsybnVmZmpj&utm_source=qr">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="section3" ref={addSectionRef}>
          <div className={styles.sectionThreeContainer}>
            <p
              style={{
                margin: "0",
                marginTop: "70%",
                fontSize: "2rem",
                fontFamily: "Great Vibes, cursive",
              }}
            >
              See you soon..
            </p>
            <div className={styles.rowMain}>
              <div className={styles.rowContainer}>When</div>
              <div className={styles.rowContainer}>April 3rd 2024</div>
            </div>
            <div className={styles.rowMain}>
              <div className={styles.rowContainer}>Where</div>
              <div className={styles.rowContainer}>
                <a
                  style={{ color: "#4682B4" }}
                  href="https://maps.app.goo.gl/RRe9G3mg52eLvMwTA?g_st=iw"
                >
                  <svg
                    height="20"
                    viewBox="0 0 48 48"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                    <path d="M0 0h48v48h-48z" fill="none" />
                  </svg>
                  Woodrose club
                </a>
              </div>
            </div>

            <div className={styles.rowMain}>
              <div className={styles.rowContainer}>How</div>
              <div className={styles.rowContainer}>Pastel colors</div>
            </div>
            <div className={styles.rowMain} style={{ marginTop: "20px" }}>
              <div className={styles.rowContainer} style={{ flex: "1" }}>
                Event Flow
              </div>
              <div style={{ flex: "2" }}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <p style={{ margin: "0" }}>6:00 pm Start</p>
                  <p style={{ margin: "0" }}>6:30 pm Fun Activities</p>
                  <p style={{ margin: "0" }}>7:30 pm Cake Cutting</p>
                  <p style={{ margin: "0" }}>8:15 pm Dinner</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section4" ref={addSectionRef}>
          <div className={styles.sectionFourContainer}>
            <p
              style={{
                margin: "0",
                marginTop: "70%",
                fontSize: "2rem",
                fontFamily: "Great Vibes, cursive",
                fontWeight: 500,
              }}
            >
              Special thanks...
            </p>
            <div
              style={{
                marginTop: "7%",
                fontSize: "25px",
                fontFamily: "Single Day",
                fontWeight: 400,
                fontStyle: "normal",
                color: "#808080",
              }}
            >
              <div style={{ marginBottom: "5px" }}>
                Monika from Eventssy Decor
              </div>
              <div style={{ marginBottom: "5px" }}>
                Suresh from Woodrose Club
              </div>
              <div style={{ marginBottom: "5px" }}>Pavan from Art Focus</div>
              <div style={{ marginBottom: "5px" }}>
                Divina from Divina-Bakery
              </div>
              <div style={{ marginBottom: "5px" }}>
                Manasa from Fashion Statement
              </div>
              <div style={{ marginBottom: "5px" }}>
                Madhushree from Makeup-by-Madhushree
              </div>
              <div style={{ marginBottom: "5px" }}>
                Little G's special team Anirudh,Prerana
              </div>
              <div style={{ marginBottom: "5px" }}>E-invite from Kishan</div>
            </div>
            {/* <div>Contact :- sagar-9980981723, sowmya-9945461723</div> */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "Single Day",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            ></div>
          </div>
        </section>
      </main>
      <Modal
        open={showModal}
        onClose={toggleModal}
        aria-labelledby="gallery-modal-title"
        aria-describedby="gallery-modal-description"
      >
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2 id="gallery-modal-title" style={{ fontFamily: "Amatic SC" }}>
              His Journey !!
            </h2>
            <IconButton onClick={toggleModal} className={styles.closeButton}>
              <CloseIcon sx={{ color: "#fff" }} />
            </IconButton>
          </div>
          <Grid container spacing={2} style={{ padding: 20 }}>
            {/* Add your gallery images here */}
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.one}
                alt="Gallery-1"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.two}
                alt="Gallery-2"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.three}
                alt="Gallery-3"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.four}
                alt="Gallery-4"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.five}
                alt="Gallery-5"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.six}
                alt="Gallery-6"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.seven}
                alt="Gallery-7"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.eight}
                alt="Gallery-8"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.nine}
                alt="Gallery-9"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.ten}
                alt="Gallery-10"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.eleven}
                alt="Gallery-11"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.twelve}
                alt="Gallery-12"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.thirteen}
                alt="Gallery-13"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img
                className={styles.img}
                src={assets.images.fourteen}
                alt="Gallery-14"
              />
            </Grid>

            {/* Add more images as needed */}
          </Grid>
        </div>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openContactPopUp}
        autoHideDuration={6000}
        onClose={handleCloseContactPopUp}
        message="Contact :- Sagar-9980981723, Sowmya-9945461723"
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseContactPopUp}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}

export default App;
