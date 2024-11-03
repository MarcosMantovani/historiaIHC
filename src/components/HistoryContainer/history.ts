import inicio from '../../assets/inicio.jpg'
import caminho_conversar_competidores from '../../assets/caminho_conversar_competidores.jpg'
import fim_incorporar_ideias from '../../assets/fim_incorporar_ideias.jpg'
import fim_estilo_diferente from '../../assets/fim_estilo_diferente.jpg'
import fim_musica_planejada from '../../assets/fim_musica_planejada.jpg'
import fim_solo_improvisado from '../../assets/fim_solo_improvisado.jpg'
import compartilhar_uma_história_sobre_sua_jornada_musical from '../../assets/compartilhar_uma_história_sobre_sua_jornada_musical.jpg'
import perguntar_sobre_o_estilo_musical_deles from '../../assets/perguntar_sobre_o_estilo_musical_deles.jpg'
import caminho_treinar_video from '../../assets/caminho_treinar_video.jpg'
import caminho_enviar_video from '../../assets/caminho_enviar_video.jpg'
import caminho_buscar_conselhos from '../../assets/caminho_buscar_conselhos.jpg'
import caminho_conversar_jurados from '../../assets/caminho_conversar_jurados.jpg'
import caminho_focar_audicao from '../../assets/caminho_focar_audicao.jpg'
import caminho_focar_emocao from '../../assets/caminho_focar_emocao.jpg'
import caminho_focar_tecnica from '../../assets/caminho_focar_tecnica.jpg'
import caminho_impressionar_rafael from '../../assets/caminho_impressionar_rafael.jpg'
import caminho_manter_calma from '../../assets/caminho_manter_calma.jpg'
import caminho_nervoso_audicao from '../../assets/caminho_nervoso_audicao.jpg'

type Option = {
  name: string
  text: string
}

export type History = {
  name: string
  image: string
  text: React.ReactNode
  opcoes?: Option[]
}

export const history: History[] = [
  {
    name: 'inicio',
    image: inicio,
    text: 'Você é Lucas, um guitarrista talentoso que sonha em tocar com a banda Tempestade de Aço, uma das maiores bandas de rock da atualidade.\n\nA parede do seu quarto é decorada com pôsteres da banda, e sua guitarra, reluzente e bem cuidada, repousa ao lado da sua cama.\n\nDepois de anos acompanhando a banda e tocando suas músicas, você finalmente vê uma oportunidade de ouro: há uma vaga aberta para guitarrista principal.\n\nSeu coração dispara, e sua mente começa a imaginar o palco, as luzes e a multidão cantando junto com você.\n\nO que você faz primeiro?',
    opcoes: [
      {
        name: 'caminho_enviar_video',
        text: 'Enviar imediatamente um vídeo com sua melhor performance.'
      },
      {
        name: 'caminho_treinar_video',
        text: 'Treinar por uma semana para garantir que você esteja impecável.'
      },
      {
        name: 'caminho_buscar_conselhos',
        text: 'Buscar conselhos com outros músicos amigos para entender como impressionar a banda.'
      }
    ]
  },
  {
    name: 'caminho_enviar_video',
    image: caminho_enviar_video,
    text: "Você decide gravar e enviar seu vídeo imediatamente, sem perder tempo.\n\nSua sala de ensaio é pequena, mas você sente o poder em cada nota que toca. Você grava várias versões até que, exausto, escolhe a melhor.\n\nEnquanto clica em 'Enviar', suas mãos suam e a ansiedade começa a dominar.\n\nDias depois, você recebe um e-mail. Foi selecionado para a audição! A emoção é tão grande que você quase deixa o celular cair.\n\nNo entanto, ao chegar à audição, seu coração afunda ao ver Rafael, um guitarrista famoso da cena underground, também competindo.\n\nEle é carismático e parece ter uma confiança inabalável.\n\nO que você faz?",
    opcoes: [
      {
        name: 'caminho_focar_audicao',
        text: 'Tenta ignorar Rafael e se concentrar na sua audição.'
      },
      {
        name: 'caminho_impressionar_rafael',
        text: 'Tenta impressionar Rafael para ganhar sua confiança e obter dicas.'
      },
      {
        name: 'caminho_conversar_competidores',
        text: 'Conversa com os outros competidores para tentar entender mais sobre o estilo de Rafael e encontrar uma vantagem.'
      }
    ]
  },
  {
    name: 'caminho_treinar_video',
    image: caminho_treinar_video,
    text: 'Você decide que uma semana de treino será o suficiente para polir suas habilidades.\n\nDurante os dias seguintes, você se isola no estúdio, seus dedos deslizam sobre as cordas até ficarem doloridos, mas você sabe que está dando o melhor de si.\n\nA cada erro corrigido, sua confiança aumenta, e no final da semana você se sente pronto.\n\nDepois de gravar e enviar seu vídeo, a resposta finalmente chega: você foi selecionado para a audição!\n\nAo chegar na audição, o estresse toma conta de você ao ver outros guitarristas talentosos.\n\nA sala está cheia de energia, e cada um parece mais preparado que o outro.\n\nO que você faz?',
    opcoes: [
      {
        name: 'caminho_manter_calma',
        text: 'Mantém a calma e se concentra na sua performance.'
      },
      {
        name: 'caminho_nervoso_audicao',
        text: 'Fica ansioso e nervoso ao ver tantos concorrentes talentosos.'
      },
      {
        name: 'caminho_conversar_jurados',
        text: 'Decide conversar com os jurados antes de se apresentar para tentar criar uma conexão.'
      }
    ]
  },
  {
    name: 'caminho_conversar_jurados',
    image: caminho_conversar_jurados,
    text: 'Você se aproxima dos jurados, sentindo um misto de nervosismo e empolgação que faz seu coração acelerar. À medida que se aproxima, percebe que eles estão imersos em uma discussão animada sobre os detalhes do projeto que apresentaram. Você hesita por um momento, mas a vontade de participar é maior. Com um sorriso cordial, você decide se juntar à conversa, tentando captar o tom da discussão enquanto se prepara para contribuir com suas ideias e impressões. É uma oportunidade única de mostrar seu conhecimento e paixão pelo que fez, e você não quer deixá-la passar.',
    opcoes: [
      {
        name: 'perguntar_sobre_o_estilo_musical_deles',
        text: 'Perguntar sobre o estilo musical deles.'
      },
      {
        name: 'compartilhar_uma_história_sobre_sua_jornada_musical',
        text: 'Compartilhar uma história sobre sua jornada musical.'
      }
    ]
  },
  {
    name: 'perguntar_sobre_o_estilo_musical_deles',
    image: perguntar_sobre_o_estilo_musical_deles,
    text: 'Você pergunta sobre o estilo musical que eles preferem, e a resposta dos jurados é instantânea. Eles se iluminam ao compartilhar suas opiniões, seus rostos refletindo a paixão pela música que os une. Cada um começa a falar animadamente sobre suas bandas favoritas, desde os clássicos que moldaram suas juventudes até as novas revelações que têm feito sucesso nas paradas. A conversa flui naturalmente, com risadas e trocas de experiências, e você percebe que esse clima descontraído ajuda a diminuir sua ansiedade. O ambiente se torna mais acolhedor, e você sente que ganhou a simpatia deles. Quando finalmente chega a sua vez de se apresentar, você se sente mais calmo e confiante, pronto para brilhar no palco.',
    opcoes: [
      {
        name: 'caminho_manter_calma',
        text: 'Mantém a calma e se concentra na sua performance.'
      }
    ]
  },
  {
    name: 'compartilhar_uma_história_sobre_sua_jornada_musical',
    image: compartilhar_uma_história_sobre_sua_jornada_musical,
    text: 'Você decide compartilhar uma história sobre sua jornada musical. Os jurados ouvem atentamente, e um deles menciona que aprecia pessoas que têm uma conexão verdadeira com a música. Isso cria um clima amigável, e você se sente mais relaxado para a sua apresentação. Quando chega a sua vez de se apresentar, você está mais calmo e confiante.',
    opcoes: [
      {
        name: 'caminho_manter_calma',
        text: 'Mantém a calma e se concentra na sua performance.'
      }
    ]
  },
  {
    name: 'caminho_manter_calma',
    image: caminho_manter_calma,
    text: 'Você respira fundo e se concentra, lembrando-se de que se preparou bem para esse momento tão aguardado. Todos os treinos, a dedicação e as horas de prática valeram a pena, e agora é hora de brilhar. Ao iniciar sua apresentação, sua mão se move com confiança, e a música flui de forma suave e clara, preenchendo o ambiente com suas notas envolventes.\n\nVocê sente a energia da sala, as expectativas dos jurados pairando no ar. Eles observam atentamente cada movimento, cada expressão sua, e você percebe que está conseguindo capturar a atenção deles de maneira eficaz. À medida que avança, a confiança cresce dentro de você, e cada acorde que toca parece ressoar não apenas em seus ouvidos, mas também em seus corações. É um momento mágico, onde você se conecta profundamente com o público, e sabe que está criando uma experiência inesquecível.',
    opcoes: [
      { name: 'fim_solo_improvisado', text: 'Adicionar um solo improvisado.' },
      {
        name: 'fim_musica_planejada',
        text: 'Continuar com a música planejada.'
      }
    ]
  },
  {
    name: 'fim_solo_improvisado',
    image: fim_solo_improvisado,
    text: 'Você decide arriscar e adicionar um solo improvisado que realmente destaque seu talento e originalidade. Com cada nota, você sente a energia da plateia crescendo, e os jurados observam com expressões de surpresa e admiração. Sua criatividade brilha à medida que você incorpora elementos inesperados em sua performance, mostrando não apenas suas habilidades técnicas, mas também sua capacidade de se conectar emocionalmente com a música.\n\nAo final da sua apresentação, a plateia explode em aplausos, e os jurados se levantam, aplaudindo de pé, visivelmente impressionados com o que acabaram de testemunhar. Com um sorriso de satisfação, você recebe o reconhecimento por sua dedicação e talento, e é escolhido como o novo guitarrista da Tempestade de Aço! Parabéns! Você conquistou não apenas o coração dos jurados, mas também a chance de brilhar ao lado de músicos incríveis!',
    opcoes: [
      {
        name: 'inicio',
        text: 'Parabéns! Reinicie a história.'
      }
    ]
  },
  {
    name: 'fim_musica_planejada',
    image: fim_musica_planejada,
    text: 'Você decide seguir o plano e continuar com a música que ensaiou. Sua confiança brilha à medida que você toca cada acorde, e logo a plateia começa a se envolver com a sua performance. Ao final, os jurados não apenas elogiam sua técnica impecável, mas também reconhecem a maneira como você se manteve focado e emocionalmente conectado à canção. Eles ressaltam sua habilidade de capturar a essência da música e transmitir isso ao público. Após deliberarem, os jurados anunciam com entusiasmo que você foi escolhido como o novo guitarrista da Tempestade de Aço! Essa é uma conquista que você sempre sonhou. Parabéns! Você acaba de dar um grande passo na sua carreira musical!',
    opcoes: [
      {
        name: 'inicio',
        text: 'Parabéns! Reinicie a história.'
      }
    ]
  },
  {
    name: 'caminho_nervoso_audicao',
    image: caminho_nervoso_audicao,
    text: 'Você fica tão nervoso que suas mãos começam a tremer, e a primeira nota que toca sai desafinada.\n\nOs jurados olham para você com uma mistura de compaixão e desapontamento.\n\nNo entanto, você tenta se recompor e continuar, mas a pressão é grande e você acaba se perdendo na música.\n\nAo final, você termina sua apresentação, mas sabe que não deu o seu melhor.\n\nDias depois, você recebe a notícia de que não foi escolhido.\n\nMas essa experiência te ensina sobre a importância de controlar o nervosismo e se preparar melhor para a próxima vez.',
    opcoes: [
      {
        name: 'inicio',
        text: 'Infelizmente não foi dessa vez. Reinicie a história.'
      }
    ]
  },
  {
    name: 'caminho_buscar_conselhos',
    image: caminho_buscar_conselhos,
    text: 'Você decide buscar conselhos com outros músicos que conhece.\n\nDurante a semana, você se encontra com João, um guitarrista que já tocou em várias bandas, e com Ana, uma vocalista talentosa.\n\nJoão te aconselha a focar na técnica, enquanto Ana fala sobre a importância de emocionar a plateia.\n\nVocê absorve cada palavra e ajusta sua estratégia.\n\nFinalmente, você grava seu vídeo e o envia com uma nova confiança. Dias depois, você recebe a resposta: está dentro!\n\nNo dia da audição, você se sente preparado, mas ainda há uma dúvida no ar: focar na técnica ou na emoção.\n\nO que você faz?',
    opcoes: [
      {
        name: 'caminho_focar_tecnica',
        text: 'Focar na técnica e impressionar com sua habilidade.'
      },
      {
        name: 'caminho_focar_emocao',
        text: 'Focar na emoção e tentar tocar o coração dos jurados.'
      }
    ]
  },
  {
    name: 'caminho_focar_audicao',
    image: caminho_focar_audicao,
    text: 'Você decide focar na sua audição, ouvindo atentamente os outros guitarristas que estão se apresentando. Enquanto eles tocam, você se concentra nas nuances de cada performance, prestando atenção não apenas nas notas que eles escolhem, mas também nas emoções que transmitem através de sua música. Você analisa o que funciona e o que não funciona, observando como cada guitarrista interage com a plateia e como a energia do ambiente muda conforme suas execuções.\n\nAo chegar sua vez, você se sente mais preparado e confiante, embasado nas lições que aprendeu ao observar seus colegas. Sua mente está clara, e você se lembra de cada detalhe que pode agregar à sua apresentação. A experiência de ouvir e aprender com os outros enriquece sua performance, e você está pronto para dar o seu melhor.',
    opcoes: [
      {
        name: 'fim_estilo_diferente',
        text: 'Fazer algo totalmente diferente do que viu.'
      },
      {
        name: 'fim_incorporar_ideias',
        text: 'Incorporar algumas ideias que você gostou.'
      }
    ]
  },
  {
    name: 'fim_estilo_diferente',
    image: fim_estilo_diferente,
    text: 'Você opta por um estilo totalmente diferente, trazendo uma abordagem única e inovadora para a sua performance. Sua escolha de riffs e melodias inusitadas faz com que sua apresentação se destaque, capturando a atenção de todos presentes. Os jurados, surpreendidos pela sua originalidade e pela ousadia de sua execução, trocam olhares admirados enquanto você toca. Cada nota parece ressoar com uma energia contagiante que enche a sala. Ao final da sua apresentação, não há dúvida de que você conquistou o público. Eles se levantam em uníssono, aplaudindo com entusiasmo e reconhecimento. Com isso, você é escolhido como o novo guitarrista da Tempestade de Aço! Parabéns! Essa é uma conquista que com certeza marcará o início de uma nova e emocionante fase em sua carreira musical.',
    opcoes: [
      {
        name: 'inicio',
        text: 'Parabéns! Reinicie a história.'
      }
    ]
  },
  {
    name: 'fim_incorporar_ideias',
    image: fim_incorporar_ideias,
    text: 'Você decide incorporar algumas ideias que gostou.\n\nOs jurados notam a sua habilidade de adaptação e a conexão com o estilo deles.\n\nAo final, eles elogiam sua apresentação e você é escolhido como o novo guitarrista da Tempestade de Aço! Parabéns!',
    opcoes: [
      {
        name: 'inicio',
        text: 'Parabéns! Reinicie a história.'
      }
    ]
  },
  {
    name: 'caminho_focar_emocao',
    image: caminho_focar_emocao,
    text: 'Você decide mergulhar de cabeça na emoção da música, fazendo com que cada nota ressoe profundamente no coração dos jurados. Durante sua apresentação, não apenas toca a guitarra, mas se conecta de forma intensa com a melodia, permitindo que a energia flua através de cada acorde. Os jurados, envolvidos pela sua interpretação apaixonada, parecem hipnotizados pela entrega genuína que você oferece. À medida que você avança, a sala vibra com a sua performance, e a tensão se transforma em um clima de expectativa e admiração. Ao final, os aplausos ecoam como um estrondoso reconhecimento da sua arte, e você é escolhido como o novo guitarrista da Tempestade de Aço! Parabéns! Essa é uma conquista que você sempre sonhou, e agora se torna realidade!',
    opcoes: [
      {
        name: 'inicio',
        text: 'Parabéns! Reinicie a história.'
      }
    ]
  },
  {
    name: 'caminho_focar_tecnica',
    image: caminho_focar_tecnica,
    text: 'Você decide focar na técnica, mostrando cada nuance e habilidade.\n\nDurante sua apresentação, os jurados ficam impressionados com sua precisão e domínio.\n\nNo entanto, alguns parecem estar buscando algo mais emocional.\n\nAo final, você é parabenizado pela habilidade, mas os jurados não te escolhem.\n\nEssa experiência te ensina que é importante equilibrar técnica e emoção na música.',
    opcoes: [
      {
        name: 'inicio',
        text: 'Reinicie a história!'
      }
    ]
  },
  {
    name: 'caminho_impressionar_rafael',
    image: caminho_impressionar_rafael,
    text: '\nVocê tenta impressionar Rafael, elogiando suas habilidades e pedindo dicas.\nEle se mostra amigável e compartilha alguns conselhos valiosos.\nNo entanto, você se distrai e acaba perdendo um pouco do foco na sua apresentação.\nAo final, os jurados reconhecem seu potencial, mas decidem não te escolher desta vez.\n\nDeseja tentar novamente?',
    opcoes: [
      {
        name: 'inicio',
        text: 'Reinicie a história!'
      }
    ]
  },
  {
    name: 'caminho_conversar_competidores',
    image: caminho_conversar_competidores,
    text: 'Você decide se aproximar e conversar com os outros competidores que também estão esperando por sua vez. Enquanto alguns deles estão abertos e dispostos a compartilhar suas experiências e truques, outros optam por ficar mais reservados e concentrados. Você aproveita essa oportunidade para coletar informações valiosas, aprendendo sobre diferentes abordagens e estratégias que podem ser úteis. À medida que as conversas avançam, você percebe que a pressão está aumentando, não apenas pela concorrência, mas também pela atmosfera de expectativa que paira no ar. Ao final da audição, mesmo sabendo que se preparou intensamente para esse momento, a competição se revela mais acirrada do que você imaginava. Os jurados, ao reconhecerem seu talento, fazem alguns comentários encorajadores, mas infelizmente, você não é escolhido desta vez. Sentindo uma mistura de emoções, você se pergunta se deve se arriscar novamente e tentar outra vez em futuras oportunidades. O que você decidirá fazer?',
    opcoes: [
      {
        name: 'inicio',
        text: 'Reinicie a história!'
      }
    ]
  }
]

export default history
