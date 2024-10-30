const btn = document.getElementById('button');

        document.getElementById('form')
            .addEventListener('submit', function (event) {
                event.preventDefault();

                btn.value = 'Enviando...';

                const serviceID = 'default_service';
                const templateID = 'template_udns3sj';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        btn.value = 'Contactar';
                        alert('Mensaje enviado!');
                    }, (err) => {
                        btn.value = 'Contactar';
                        alert(JSON.stringify(err));
                    });
            });