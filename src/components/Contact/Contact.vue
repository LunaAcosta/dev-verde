<script setup></script>

<template>
  <!-- Seccion Contacto Inicio -->
  <section class="section-init">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 pb-5 d-flex flex-column justify-content-center">
          <h1 class="titulo">Coordinación</h1>
          <h1 class="subtitulo">Mtra. Nurian Yamileth Luna de Quintanilla</h1>
          <p>Responsable del Observatorio</p>
        </div>
        <div
          class="col-lg-6 d-flex flex-column justify-content-center align-items-center"
        >
          <img
            src="../../../public/img/SectionContact/coordinador.jpg"
            class="imgContact"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Seccion Contacto Coordinador -->
  <section class="contact-coordinator">
    <div>
      <div class="container">
        <div class="contact-coordinator-title">
          <h2 class="text-center">Coordinación</h2>
        </div>
        <div class="card-coordinator">
          <div class="card" style="width: 400px">
            <img
              src="../../../public/img/SectionContact/coordinador.jpg"
              class="card-img-top"
            />
            <div class="card-body text-center">
              <h4 class="card-title">
                Mtra. Nurian Yamileth Luna de Quintanilla
              </h4>
              <span>Responsable del Observatorio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Seccion formas de contactos -->
  <section class="seccion-forma-contacto">
    <div class="container">
      <div>
        <h2 class="text-center">Formas de <span>Contactarnos</span></h2>
      </div>
      <div
        class="container text-center card-formas-contactos d-flex justify-content-evenly"
      >
        <div class="row">
          <div class="col-12 col-md-4 seccion-titulo">
            <h3>Observatorio Verde</h3>
          </div>
          <div class="col-12 col-md-4 seccion-descripcion">
            <p>
              Puedes contactarnos a través de las redes sociales de la
              Universidad Gerardo Barrios.
            </p>
          </div>
          <div class="col-12 col-md-4">
            <a href="#">
              <i class="bi bi-twitter iconos"></i>
            </a>
            <a href="#">
              <i class="bi bi-facebook iconos"></i>
            </a>
            <a href="#">
              <i class="bi bi-instagram iconos"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Seccion formas de contacto mapa -->
  <section class="seccion-mapa">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="contenedor-info">
            <div class="info">
              <div class="info-text">
                <i class="bi bi-geo-alt"></i>
                <p>
                  <strong>UBG Campos San Miguel</strong><br />
                  Calle Las Flores y Avenida Las Magnolias, <br />
                  Avenida Colonia Escalon, San Miguel
                </p>
              </div>
              <div class="info-text">
                <i class="bi bi-geo-alt"></i>
                <p>
                  <strong>UBG Campos Salitre</strong><br />
                  Calle Antigua a Quelepa, Caserío El Salitre, San Miguel.
                  <br />
                  Entrada contigua a Centro Escolar el Salitre
                </p>
              </div>
              <div class="info-text">
                <i class="bi bi-envelope-fill"></i>
                <p>observatorio@ugb.edu.sv</p>
              </div>
              <div class="info-text">
                <i class="bi bi-telephone-fill"></i>
                <p>
                  +503 2645 – 6585 <br />
                  +503 7743 – 4301
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 justify-content-center align-items-center">
          <div class="contenedor-info-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.758631478354!2d-88.19462332573701!3d13.488965303326193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7b2a58d2095515%3A0xfb0914d1181e605f!2sUniversidad%20Gerardo%20Barrios!5e0!3m2!1ses-419!2ssv!4v1688014473014!5m2!1ses-419!2ssv"
              width="620"
              height="455"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Seccion Contacto inicio  */

.section-init {
  display: flex;
  align-items: center;
  padding: 30px 0;
  height: 80vh;
  background-image: url(../../../public/img/SectionContact/22.svg);
  background-size: cover;
  background-position: center;
}
.section-init .titulo {
  color: var(--black);
  font-size: 3rem;
  font-weight: bold;
  font-family: var(--font);
}
.section-init .subtitulo {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  color: var(--greenB);
  text-align: left;
  letter-spacing: var(--letter-spacing);
}
.section-init .imgContact {
  max-width: 70%;
  height: auto;
}

/* Seccion Contacto Coordinador  */
.contact-coordinator {
  padding: 30px;
  background: #f4f4f4;
}
.contact-coordinator-title h2 {
  color: var(--font);
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: var(--font);
}
.card-coordinator {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-body {
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(#020202, #0202);
  color: white;
  transition: 0.5s;
  visibility: hidden;
  opacity: 0;
}
.card:hover {
  cursor: pointer;
}
.card:hover .card-body {
  visibility: visible;
  opacity: 1;
}

/* Formas de contacto  */
.seccion-forma-contacto {
  padding: 60px 0;
}
.seccion-forma-contacto .container {
  max-width: 1100px;
  min-height: 200px;
  padding: 20px 0;
}
.seccion-forma-contacto h2 {
  font-size: 32px;
  font-weight: bold;
  padding: 2rem 0;
  color: #66bb6a;
  letter-spacing: 1px;
}
.seccion-forma-contacto span {
  color: #27303f;
}
.seccion-forma-contacto .card-formas-contactos {
  background: white;
  border-radius: 0px;
  box-shadow: 12px 10px 26px rgba(0, 0, 0, 0.08);
  position: relative;
}
.seccion-forma-contacto .row {
  width: 100%;
  display: flex;
  align-items: center;
}

.seccion-titulo h3 {
  font-size: 28px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1px;
  color: #66bb6a;
}
.seccion-descripcion p {
  font-size: 1.2rem;
  line-height: 24px;
  color: #27303f;
  font-weight: 500;
}
.iconos {
  font-size: 25px;
  display: inline-block;
  background: #66bb6a;
  color: white;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 45px;
  height: 45px;
  border: 2px solid #66bb6a;
  transition: all 0.2s ease-in-out;
}
.iconos:hover {
  color: #66bb6a;
  background: white;
}
.iconos i {
  color: white;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;
  padding: 4rem;
}

/* Seccion mapa */
.seccion-mapa {
  /* margin-top: -10rem; */
  padding: 40px;
  background: #27303f;
}
.contenedor-info {
  padding: 48px;
  margin: 5px;
  background: white;
}
.contenedor-info-mapa {
  margin: 5px;
  overflow: hidden;
}

.info {
  color: #66bb6a;
}
.info-text {
  display: block;
}
.info i {
  font-size: 32px;
  float: left;
  line-height: 1;
  color: #27303f;
}
.info p {
  padding: 0 0 10px 42px;
  line-height: 28px;
  font-size: 15px;
  font-weight: 500;
  color: #27303f;
}

.info p strong {
  font-weight: 700;
  color: #66bb6a;
  font-size: 19px;
  letter-spacing: 2px;
}

@media (max-width: 992px) {
  .section-init {
    background: none;
  }
  .section-init .imgContact {
    width: 340px;
    height: auto;
  }
}

@media (max-width: 380px) {
  .contact-coordinator h2 {
    font-size: 25px;
  }
  .card-body {
    position: relative;
    background: white;
    color: black;
    visibility: visible;
    opacity: 1;
  }
  .seccion-forma-contacto h2 {
    font-size: 25px;
  }
  .seccion-titulo h3 {
    font-size: 20px;
  }
  .seccion-descripcion p {
    font-size: 0.8rem;
  }
}
</style>
