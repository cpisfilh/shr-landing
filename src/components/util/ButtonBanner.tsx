import './styles/ButtonBanner.css';

type Props = {
  texto: string;
  textColor?: string;
  iconColor?: string;
  buttonColor?: string;
};

// Función sencilla para validar contraste (simplificada)
function isContrastAcceptable(bgColor: string, textColor: string): boolean {
  // Aquí podrías usar librerías para hacer el cálculo exacto, o hardcodear algunos pares
  // Ejemplo simple: si fondo oscuro, texto claro
  // Esto es solo para darte una idea
  const darkBg = ['#226752', 'rgb(34, 103, 82)']; // verde oscuro
  const lightText = ['#FFFFFF', '#FFF', '#FFF0D1', 'rgb(255,255,255)'];

  if (darkBg.includes(bgColor) && lightText.includes(textColor)) return true;
  if (!darkBg.includes(bgColor) && !lightText.includes(textColor)) return true;
  return false;
}

const ButtonBanner = ({
  texto,
  textColor = "#000000",
  iconColor = "#000000",
  buttonColor = "#FFF0D1",
}: Props) => {
  // Por ejemplo, si el contraste no es bueno, forzamos un color que sí sea legible
  let finalTextColor = textColor;
  if (!isContrastAcceptable(buttonColor, textColor)) {
    finalTextColor = '#000000'; // negro por defecto si el contraste no es adecuado
  }

  return (
    <div className="buttonBanner" style={{ backgroundColor: buttonColor }}>
      <div className="buttonBanner-wrapper">
        <div className="text" style={{ color: finalTextColor }}>
          {texto}
        </div>
        <span className="icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ButtonBanner;
