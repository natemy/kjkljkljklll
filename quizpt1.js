function corrigir() {
    let q = 1;
    if (document.quiz1.questao1[0].checked) {


        var etecs = [
            "Etec Abdias do Nascimento-Morumbi (Paraisópolis)-São Paulo<br>\n<br>Etec Albert Einstein-Casa Verde-São Paulo<br>\n<br>Etec Carlos de Campos-Brás-São Paulo<br>\n<br>Etec Carlos de Campos-Extensão EE Presidente Roosevelt-Liberdade-São Paulo<br>\n<br>Etec Carolina Carinhato Sampaio (antiga Etec Zona Sul)-Jd. São Luís-São Paulo<br>\n<br>Etec Carolina Carinhato Sampaio-Extensão Ceu Cantos do Amanhecer-Campo Limpo-São Paulo<br>\n<br>Etec Carolina Carinhato Sampaio-Extensão CEU Capão Redondo-Capão Redondo-São Paulo<br>\n<br>Etec Carolina Carinhato Sampaio-Extensão Ceu Três Lagos-Grajaú-São Paulo<br>\n<br>Etec CEPAM (Centro de Estudos e Pesquisas de Administração Municipal)-Cidade Universitária-Butantã-São Paulo<br>\n<br>Etec de Artes-Santana-São Paulo<br>\n<br>Etec de Cidade Tiradentes-Cidade Tiradentes-São Paulo<br>\n<br>Etec de Cidade Tiradentes-Extensão Ceu Alto Alegre-São Mateus-Iguatemi-São Paulo<br>\n<br>Etec de Cidade Tiradentes-Extensão CEU São Mateus-Parque Boa Esperança-São Paulo<br>\n<br>Etec de Esportes Curt Walter Otto Baumgart-Parque Novo Mundo-São Paulo<br>\n<br>Etec de Guaianazes-Extensão CEU Jambeiro-Guaianases-São Paulo<br>\n<br>Etec de Guaianazes-Extensão CEU Lajeado-Lajeado-São Paulo<br>\n<br>Etec de Guaianazes-Guaianases-São Paulo<br>\n<br>Etec de Heliópolis-Extensão CEU Meninos-São João Climaco-São Paulo<br>\n<br>Etec de Heliópolis-São João Clímaco-São Paulo<br>\n<br>Etec de Itaquera-Extensão CEU Inácio Monteiro-Guaianases-São Paulo<br>\n<br>Etec de Itaquera-Extensão CEU Parque Veredas-Itaim Paulista-São Paulo<br>\n<br>Etec de Itaquera-Extensão CEU Vila Curuça-Itaim Paulista-São Paulo<br>\n<br>Etec de Itaquera-Itaquera-São Paulo<br>\n<br>Etec de São Paulo-Bom Retiro-São Paulo<br>\n<br>Etec de São Paulo-Extensão Ceu Butantã-Butantã-São Paulo<br>\n<br>Etec de Sapopemba-Extensão CEU São Rafael-Conj. Promorar Rio Claro-São Paulo<br>\n<br>Etec de Sapopemba-Extensão CEU Sapopemba-Jardim Sapopemba-São Paulo<br>\n<br>Etec de Sapopemba-Extensão EE Stefan Zweig-Vila Ema (Vila Ivone)-São Paulo<br>\n<br>Etec de Sapopemba-Sapopemba (Fazenda da Juta)-São Paulo<br>\n<br>Etec de Tiquatira-Penha-São Paulo<br>\n<br>Etec de Vila Formosa-Extensão CEU Aricanduva-Jardim Santa Teresinha-São Paulo<br>\n<br> Para saber mais informações sobre as Etec's acesse: <br>"
        ];

        const linkElement = document.createElement('a');
        linkElement.href = 'https://www.vestibulinhoetec.com.br/unidades-cursos/?q=S%C3%A3o+Paulo'; // Substitua pelo URL desejado
        linkElement.textContent = 'https://www.vestibulinhoetec.com.br/unidades-cursos/?q=S%C3%A3o+Paulo'; // Substitua pelo texto do link desejado

        document.body.appendChild(linkElement);
        linkElement.classList.add('meu-link'); 
        linkElement.target = '_blank';

        document.getElementById('resposta').innerHTML = etecs;
        document.getElementById('resposta').style.color = 'white';

    } else {
        while (document.quiz1.questao1[q].checked == false) {
            q++
        }
        window.location.href = "quizpt2.html";
    }
}