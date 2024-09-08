function openGift() {
    const newWindow = window.open('', '', 'width=800,height=600');
    newWindow.document.write(`
      <html>
      <head>
        <title>¡Feliz Cumpleaños!</title>
        <style>
          body {
            background-color: #fce4ec;
            text-align: center;
            font-family: 'Arial', sans-serif;
          }
          h1 {
            color: #ff69b4;
            font-size: 2em;
            margin-top: 20px;
          }
          img {
            width: 200px;
            margin-top: 20px;
          }
          .lyrics {
            font-size: 1.2em;
            color: #555;
            margin: 20px auto;
            width: 80%;
            line-height: 1.6;
          }
          canvas {
            position: absolute;
            top: 0;
            left: 0;
          }
        </style>
      </head>
      <body>
        <h1>¡Feliz Cumpleaños, BuBu!</h1>
        <div class="lyrics">
          <p>Estas son las mañanitas<br>
          Que cantaba el rey David<br>
          Hoy por ser día de tu cumpleaños<br>
          Te las cantamos aquí</p>
          <p>Despierta, mi bebita, despierta<br>
          Mira que ya amaneció<br>
          Ya los pajaritos cantan<br>
          La Luna ya se metió</p>
          <p>Qué linda está la mañana<br>
          En que vengo a saludarte<br>
          Venimos todos con gusto<br>
          Y placer a felicitarte</p>
          <p>El día en que tú naciste<br>
          Nacieron todas las flores<br>
          En la pilar del bautismo<br>
          Cantaron los Ruiseñores</p>
          <p>Ya viene amaneciendo<br>
          Ya la luz del día nos dio<br>
          Levántate de mañana<br>
          Mira que ya amaneció</p>
          <p>Si yo pudiera bajarte<br>
          Las estrellas y un lucero<br>
          Para poder demostrarte<br>
          Lo mucho que yo te quiero</p>
          <p>Con jazmines y flores<br>
          Este día quiero adornar<br>
          Hoy, por ser día de tu santo<br>
          Te venimos a cantar</p>
        </div>
        <img src="bebitos.png" alt="bebitos">
        <canvas id="my-canvas"></canvas>
        <script src="https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js"></script>
        <script>
          const confettiSettings = { target: 'my-canvas' };
          const confetti = new ConfettiGenerator(confettiSettings);
          confetti.render();
        </script>
        <p>Te amo mucho mi amor, deseo mucho que pasemos muchos cumpleaños juntos, deseo este día sea para ti lleno de felicidad, estaré a tu lado siempre siempre!!</p>
        <h2>Sigue creciendo mi amor, no te detengas nunca, el exito te espera!!</h2>
        <h1>FELIZ CUMPLEAÑOS MI AMOR</h1>
        <h1>FELIZ CUMPLEAÑOS MI BUBU</h1>
        <h1>FELIZ CUMPLEAÑOS MI BEBITA</h1>
        <h1>FELIZ CUMPLEAÑOS MI PRINCESA</h1>
        <h8>Con mucho amor, atentamente tu bebito</h8>
      </body>
      </html>
    `);
  
    // Asegura que la página se cargue correctamente antes de agregar el confeti
    newWindow.document.close();
  }
  