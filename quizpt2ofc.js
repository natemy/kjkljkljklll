function abrirPopUp() {
    let Exatas = 0; // as variaveis são inicializadas valendo 0 para que elas possam ser somadas a elas mesmas
    let Humanas = 0;
    let Biológicas = 0;


    //questão 01
    if (document.signo.question1[0].checked) {
        //questão 02

        if (document.signo.question2[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question2[3].checked || document.signo.question2[4].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question2[2].checked || document.signo.question2[1].checked) {
            Biológicas = Biológicas + 10;
        }

        //questão 03
        if (document.signo.question3[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question3[2].checked || document.signo.question3[3].checked || document.signo.question3[4].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question3[1].checked) {
            Biológicas = Biológicas + 10;
        } else if (document.signo.question3[5].checked || document.signo.question2[1].checked) {
            Biológicas = Biológicas + 0;
            Humanas = Humanas + 0;
            Exatas = Exatas + 0;
        }



        //questão 04

        if (document.signo.question4[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question4[2].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question4[1].checked) {
            Biológicas = Biológicas + 10;
        } else if (document.signo.question4[3].checked) {
            Biológicas = Biológicas + 0;
            Humanas = Humanas + 0;
            Exatas = Exatas + 0;
        }

        //questão 05 

        if (document.signo.question5[0].checked) {
            Exatas = Exatas + 10;
        } else {
            Biológicas = Biológicas + 10;
            Humanas = Humanas + 10;

        }

        //resultado
        if (Exatas > Humanas && Exatas > Biológicas) {

            alert("Constatamos que você é de EXATAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Automação Industrial"+"\n"+"Contabilidade"+"\n"+"Desenvolvimento de Sistemas"+"\n"+"Eletroeletrônica"+"\n"+"Eletrônica"+"\n"+"Eletrotécnica"+"\n"+"Logística"+"\n"+"Mecânica"+"\n"+"Mecatrônica"+"\n"+"Programação de Jogos Digitais"+"\n"+"Química"+"\n"+"Segurança do Trabalho.");
        } else if (Humanas > Exatas && Humanas > Biológicas) {

            alert("Constatamos que você é de HUMANAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Administração"+"\n"+"Design de Interiores"+"\n"+"Design Gráfico"+"\n"+"Edificações"+"\n"+"Eventos"+"\n"+"Gastronomia"+"\n"+"Hospedagem"+"\n"+"Informática"+"\n"+"Informática para Internet"+"\n"+"Lazer"+"\n"+"Marketing"+"\n"+"Modelagem do Vestuário"+"\n"+"Recursos Humanos"+"\n"+"Secretariado"+"\n"+"Serviços Jurídicos.");
        }
        else if (Biológicas > Exatas && Biológicas > Humanas) {


            alert("Constatamos que você é de BIOLÓGICAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Agronegócio"+"\n"+"Agropecuária"+"\n"+"Alimentos"+"\n"+"Biotecnologia"+"\n"+"Florestas"+"\n"+"Meio Ambiente"+"\n"+"Nutrição e Dietética.");
        } else if (Biológicas = Humanas) {
            alert("Constatamos os cursos mais compatíveis com você são: Agronegócio"+"\n"+"Agropecuária"+"\n"+"Alimentos"+"\n"+"Biotecnologia"+"\n"+"Florestas"+"\n"+"Meio Ambiente"+"\n"+"Nutrição e Dietética"+"\n"+"Administração"+"\n"+"Design de Interiores"+"\n"+"Design Gráfico"+"\n"+"Edificações"+"\n"+"Eventos"+"\n"+"Gastronomia"+"\n"+"Hospedagem"+"\n"+"Informática"+"\n"+"Informática para Internet"+"\n"+"Lazer"+"\n"+"Marketing"+"\n"+"Modelagem do Vestuário"+"\n"+"Recursos Humanos"+"\n"+"Secretariado"+"\n"+"Serviços Jurídicos.");

        } else if (Biológicas = Exatas) {
            alert("Constatamos os cursos mais compatíveis com você são: Agronegócio"+"\n"+"Agropecuária"+"\n"+"Alimentos"+"\n"+"Biotecnologia"+"\n"+"Florestas"+"\n"+"Meio Ambiente"+"\n"+"Nutrição e Dietética"+"\n"+"Automação Industrial"+"\n"+"Contabilidade"+"\n"+"Desenvolvimento de Sistemas"+"\n"+"Eletroeletrônica"+"\n"+"Eletrônica"+"\n"+"Eletrotécnica"+"\n"+"Logística"+"\n"+"Mecânica"+"\n"+"Mecatrônica"+"\n"+"Programação de Jogos Digitais"+"\n"+"Química"+"\n"+"Segurança do Trabalho.");

        } else if (Exatas = Humanas) { alert("Constatamos os cursos mais compatíveis com você são: Automação Industrial"+"\n"+"Contabilidade"+"\n"+"Desenvolvimento de Sistemas"+"\n"+"Eletroeletrônica"+"\n"+"Eletrônica"+"\n"+"Eletrotécnica"+"\n"+"Logística"+"\n"+"Mecânica"+"\n"+"Mecatrônica"+"\n"+"Programação de Jogos Digitais"+"\n"+"Química"+"\n"+"Segurança do Trabalho"+"\n"+"Administração"+"\n"+"Design de Interiores"+"\n"+"Design Gráfico"+"\n"+"Edificações"+"\n"+"Eventos"+"\n"+"Gastronomia"+"\n"+"Hospedagem"+"\n"+"Informática"+"\n"+"Informática para Internet"+"\n"+"Lazer"+"\n"+"Marketing"+"\n"+"Modelagem do Vestuário"+"\n"+"Recursos Humanos"+"\n"+"Secretariado"+"\n"+"Serviços Jurídicos."); }








    } else if (document.signo.question1[1].checked) {

        //questão 02
        if (document.signo.question2[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question2[3].checked || document.signo.question2[4].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question2[2].checked || document.signo.question2[1].checked) {
            Biológicas = Biológicas + 10;
        }

        //questão 03
        if (document.signo.question3[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question3[2].checked || document.signo.question3[3].checked || document.signo.question3[4].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question3[1].checked) {
            Biológicas = Biológicas + 10;
        } else if (document.signo.question3[5].checked || document.signo.question2[1].checked) {
            Biológicas = Biológicas + 0;
            Humanas = Humanas + 0;
            Exatas = Exatas + 0;
        }

        //questão 04
        if (document.signo.question4[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question4[2].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question4[1].checked) {
            Biológicas = Biológicas + 10;
        } else if (document.signo.question4[3].checked) {
            Biológicas = Biológicas + 0;
            Humanas = Humanas + 0;
            Exatas = Exatas + 0;
        }

        //questão 05 
        if (document.signo.question5[0].checked) {
            Exatas = Exatas + 10;
        } else {
            Biológicas = Biológicas + 10;
            Humanas = Humanas + 10;

        }

        //resultado
        if (Exatas > Humanas && Exatas > Biológicas) {

            alert("Constatamos que você é de EXATAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Administração de Banco de Dados"+"\n"+"Agrimensura"+"\n"+"Automação Industrial"+"\n"+"Automação Predial"+"\n"+"Biotecnologia"+"\n"+"Cálculos Trabalhistas"+"\n"+"Celulose e Papel"+"\n"+"Centro Cirúrgico e Instrumentação Cirúrgica"+"\n"+"Composição e Arranjo"+"\n"+"Contabilidade"+"\n"+"Desenho de Construção Civil"+"\n"+"Desenvolvimento de Sistemas"+"\n"+"Eletroeletrônica"+"\n"+"Eletromecânica"+"\n"+"Eletrônica"+"\n"+"Eletrotécnica"+"\n"+"Geoprocessamento"+"\n"+"Gestão de Energia"+"\n"+"JAVA-WR"+"\n"+"Logística.");
        } else if (Humanas > Exatas && Humanas > Biológicas) {

            alert("Constatamos que você é de HUMANAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Administração"+"\n"+"Agenciamento de Viagem"+"\n"+"Arquivo"+"\n"+"Assessoria Parlamentar"+"\n"+"Biblioteconomia"+"\n"+"Comércio"+"\n"+"Comércio Exterior"+"\n"+"Desenvolvimento Comunitário"+"\n"+"Design Gráfico"+"\n"+"Ensino Médio com ênfase em Ciências Humanas e Sociais Aplicadas"+"\n"+"Eventos"+"\n"+"Finanças"+"\n"+"Gestão Ambiental"+"\n"+"Gestão de Projetos"+"\n"+"Guia de Turismo"+"\n"+"Guia de Turismo Internacional"+"\n"+"Higiene Ocupacional"+"\n"+"Legislativo"+"\n"+"Logística Reversa.");
        }
        else if (Biológicas > Exatas && Biológicas > Humanas) {
            alert("Constatamos que você é de BIOLÓGICAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Agente Comunitário de Saúde"+"\n"+"Agroecologia"+"\n"+"Agroindústria"+"\n"+"Agronegócio"+"\n"+"Agropecuária"+"\n"+"Alimentos"+"\n"+"Análise de Dados para Questões Sociais"+"\n"+"Assistente de Recursos Humanos"+"\n"+"Enfermagem"+"\n"+"Enfermagem do Trabalho"+"\n"+"Enfermagem na Assistência ao Idoso"+"\n"+"Enfermagem no Atendimento em Urgência e Emergência Intra e Extra-Hospitalar"+"\n"+"Farmácia"+"\n"+"Gastronomia"+"\n"+"Gastronomia Hospitalar"+"\n"+"Florestas"+"\n"+"Gestão de Unidades de Alimentação e Nutrição"+"\n"+"Hospedagem.");

        } else if (Biológicas = Humanas) {
            alert("Constatamos os cursos mais compatíveis com você são: Agente Comunitário de Saúde"+"\n"+"Agroecologia"+"\n"+"Agroindústria"+"\n"+"Agronegócio"+"\n"+"Agropecuária"+"\n"+"Alimentos"+"\n"+"Análise de Dados para Questões Sociais"+"\n"+"Assistente de Recursos Humanos"+"\n"+"Enfermagem"+"\n"+"Enfermagem do Trabalho"+"\n"+"Enfermagem na Assistência ao Idoso"+"\n"+"Enfermagem no Atendimento em Urgência e Emergência Intra e Extra-Hospitalar"+"\n"+"Farmácia"+"\n"+"Gastronomia"+"\n"+"Gastronomia Hospitalar"+"\n"+"Florestas"+"\n"+"Gestão de Unidades de Alimentação e Nutrição"+"\n"+"Hospedagem"+"\n"+"Administração"+"\n"+"Agenciamento de Viagem"+"\n"+"Arquivo"+"\n"+"Assessoria Parlamentar"+"\n"+"Biblioteconomia"+"\n"+"Comércio"+"\n"+"Comércio Exterior"+"\n"+"Desenvolvimento Comunitário"+"\n"+"Design Gráfico"+"\n"+"Ensino Médio com ênfase em Ciências Humanas e Sociais Aplicadas"+"\n"+"Eventos"+"\n"+"Finanças"+"\n"+"Gestão Ambiental"+"\n"+"Gestão de Projetos"+"\n"+"Guia de Turismo"+"\n"+"Guia de Turismo Internacional"+"\n"+"Higiene Ocupacional"+"\n"+"Legislativo"+"\n"+"Logística Reversa.");
        } else if (Biológicas = Exatas) {
            alert("Constatamos os cursos mais compatíveis com você são: Administração de Banco de Dados"+"\n"+"Agrimensura"+"\n"+"Automação Industrial"+"\n"+"Automação Predial"+"\n"+"Biotecnologia"+"\n"+"Cálculos Trabalhistas"+"\n"+"Celulose e Papel"+"\n"+"Centro Cirúrgico e Instrumentação Cirúrgica"+"\n"+"Composição e Arranjo"+"\n"+"Contabilidade"+"\n"+"Desenho de Construção Civil"+"\n"+"Desenvolvimento de Sistemas"+"\n"+"Eletroeletrônica"+"\n"+"Eletromecânica"+"\n"+"Eletrônica"+"\n"+"Eletrotécnica"+"\n"+"Geoprocessamento"+"\n"+"Gestão de Energia"+"\n"+"JAVA-WR"+"\n"+"Logística"+"\n"+"Agente Comunitário de Saúde"+"\n"+"Agroecologia"+"\n"+"Agroindústria"+"\n"+"Agronegócio"+"\n"+"Agropecuária"+"\n"+"Alimentos"+"\n"+"Análise de Dados para Questões Sociais"+"\n"+"Assistente de Recursos Humanos"+"\n"+"Enfermagem"+"\n"+"Enfermagem do Trabalho"+"\n"+"Enfermagem na Assistência ao Idoso"+"\n"+"Enfermagem no Atendimento em Urgência e Emergência Intra e Extra-Hospitalar"+"\n"+"Farmácia"+"\n"+"Gastronomia"+"\n"+"Gastronomia Hospitalar"+"\n"+"Florestas"+"\n"+"Gestão de Unidades de Alimentação e Nutrição"+"\n"+"Hospedagem");
        } else if (Exatas = Humanas) { alert("Constatamos os cursos mais compatíveis com você são: Administração de Banco de Dados"+"\n"+"Agrimensura"+"\n"+"Automação Industrial"+"\n"+"Automação Predial"+"\n"+"Biotecnologia"+"\n"+"Cálculos Trabalhistas"+"\n"+"Celulose e Papel"+"\n"+"Centro Cirúrgico e Instrumentação Cirúrgica"+"\n"+"Composição e Arranjo"+"\n"+"Contabilidade"+"\n"+"Desenho de Construção Civil"+"\n"+"Desenvolvimento de Sistemas"+"\n"+"Eletroeletrônica"+"\n"+"Eletromecânica"+"\n"+"Eletrônica"+"\n"+"Eletrotécnica"+"\n"+"Geoprocessamento"+"\n"+"Gestão de Energia"+"\n"+"JAVA-WR"+"\n"+"Logística"+"\n"+"Administração"+"\n"+"Agenciamento de Viagem"+"\n"+"Arquivo"+"\n"+"Assessoria Parlamentar"+"\n"+"Biblioteconomia"+"\n"+"Comércio"+"\n"+"Comércio Exterior"+"\n"+"Desenvolvimento Comunitário"+"\n"+"Design Gráfico"+"\n"+"Ensino Médio com ênfase em Ciências Humanas e Sociais Aplicadas"+"\n"+"Eventos"+"\n"+"Finanças"+"\n"+"Gestão Ambiental"+"\n"+"Gestão de Projetos"+"\n"+"Guia de Turismo"+"\n"+"Guia de Turismo Internacional"+"\n"+"Higiene Ocupacional"+"\n"+"Legislativo"+"\n"+"Logística Reversa."); }







    } else if (document.signo.question1[2].checked) {

        //questão 02
        if (document.signo.question2[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question2[3].checked || document.signo.question2[4].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question2[2].checked || document.signo.question2[1].checked) {
            Biológicas = Biológicas + 10;
        }

        //questão 03
        if (document.signo.question3[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question3[2].checked || document.signo.question3[3].checked || document.signo.question3[4].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question3[1].checked) {
            Biológicas = Biológicas + 10;
        } else if (document.signo.question3[5].checked || document.signo.question2[1].checked) {
            Biológicas = Biológicas + 0;
            Humanas = Humanas + 0;
            Exatas = Exatas + 0;
        }

        //questão 04
        if (document.signo.question4[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question4[2].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question4[1].checked) {
            Biológicas = Biológicas + 10;
        } else if (document.signo.question4[3].checked) {
            Biológicas = Biológicas + 0;
            Humanas = Humanas + 0;
            Exatas = Exatas + 0;
        }

        //questão 05 
        if (document.signo.question5[0].checked) {
            Exatas = Exatas + 10;
        } else {
            Biológicas = Biológicas + 10;
            Humanas = Humanas + 10;

        }


        //resultado
        if (Exatas > Humanas && Exatas > Biológicas) {

            alert("Constatamos que você é de EXATAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Desenvolvimento de Sistemas"+"\n"+"Edificações"+"\n"+"Eletrônica"+"\n"+"Logística"+"\n"+"Química.");
        } else if (Humanas > Exatas && Humanas > Biológicas) {

            alert("Constatamos que você é de HUMANAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Administração.");
        }
        else if (Biológicas > Exatas && Biológicas > Humanas) {
            alert("Constatamos que você é de BIOLÓGICAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Nutrição e Dietética.");
        } else if (Biológicas = Humanas) {
            alert("Constatamos os cursos mais compatíveis com você são: Administração"+"\n"+"Nutrição e Dietética.");
        } else if (Biológicas = Exatas) {
            alert("Constatamos os cursos mais compatíveis com você são: Desenvolvimento de Sistemas"+"\n"+"Edificações"+"\n"+"Eletrônica"+"\n"+"Logística"+"\n"+"Química"+"\n"+"Nutrição e Dietética.");
        } else if (Exatas = Humanas) {
            alert("Constatamos os cursos mais compatíveis com você são: Administração"+"\n"+"Desenvolvimento de Sistemas"+"\n"+"Edificações"+"\n"+"Eletrônica"+"\n"+"Logística"+"\n"+"Química.");
        }






    } else if (document.signo.question1[3].checked) {

        //questão 02
        if (document.signo.question2[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question2[3].checked || document.signo.question2[4].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question2[2].checked || document.signo.question2[1].checked) {
            Biológicas = Biológicas + 10;
        }

        //questão 03
        if (document.signo.question3[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question3[2].checked || document.signo.question3[3].checked || document.signo.question3[4].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question3[1].checked) {
            Biológicas = Biológicas + 10;
        } else if (document.signo.question3[5].checked || document.signo.question2[1].checked) {
            Biológicas = Biológicas + 0;
            Humanas = Humanas + 0;
            Exatas = Exatas + 0;
        }

        //questão 04
        if (document.signo.question4[0].checked) {
            Exatas = Exatas + 10;
        } else if (document.signo.question4[2].checked) {
            Humanas = Humanas + 10;
        } else if (document.signo.question4[1].checked) {
            Biológicas = Biológicas + 10;
        } else if (document.signo.question4[3].checked) {
            Biológicas = Biológicas + 0;
            Humanas = Humanas + 0;
            Exatas = Exatas + 0;
        }

        //questão 05 
        if (document.signo.question5[0].checked) {
            Exatas = Exatas + 10;
        } else {
            Biológicas = Biológicas + 10;
            Humanas = Humanas + 10;

        }

        //resultado
        if (Exatas > Humanas && Exatas > Biológicas) {

            alert("Constatamos que você é de EXATAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Química"+"\n"+"Logística e Desenvolvimento de Sistemas.");
        } else if (Humanas > Exatas && Humanas > Biológicas) {

            alert("Constatamos que você é de HUMANAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Adiministração.")
        }
        else if (Biológicas > Exatas && Biológicas > Humanas) {
            alert("Constatamos que você é de BIOLÓGICAS.  Aqui temos alguns cursos que combinam com você:"+"\n"+"\n"+" Agronegócio.")

        } else if (Biológicas = Humanas) {
            alert("Constatamos os cursos mais compatíveis com você são: Agronegócio"+"\n"+"Adiministração.")
        } else if (Biológicas = Exatas) {
            alert("Constatamos os cursos mais compatíveis com você são: Agronegócio"+"\n"+"Química"+"\n"+"Logística e Desenvolvimento de Sistemas.")
        } else if (Exatas = Humanas) { alert("Constatamos os cursos mais compatíveis com você são: Adiministração"+"\n"+"Química"+"\n"+"Logística e Desenvolvimento de Sistemas.") }
    }







}