import React from "react"
import styled from "styled-components"

const InfoContainer = styled.div`
	h1{
		color: black;
	}
	h2{
		color: black;
	}
	h4{
		color: royalblue;
	}
	span{
		color: royalblue;
	}
`

const Unity1 = () => {
	return (
		<div className="container border my-5">
			<div className="row">
				<InfoContainer className="col col-12">
					<h1>Unidad 1</h1>
					<h2>Arquitecturas de cómputo</h2>
					<hr></hr>
					<h4>Modelos de arquitecturas de cómputo</h4>
					<p>
						Es un modelo y una descripción funcional de los requerimientos y las implementaciones de diseño para varias partes de una computadora, con especial interés en la forma en que la unidad central de proceso (CPU) trabaja internamente y accede a las direcciones de memoria.
					</p>
					<p>
						<span>Arquitecturas Clásicas.</span> Estas arquitecturas se desarrollaron en las primeras computadoras electromecánicas y de tubos de vacío.Arquitectura Mauchly-Eckert (Von Newman)
						3 La principal desventaja de esta arquitectura, El bus de datos y direcciones único se convierte en un cuello de botella por el cual debe pasar toda la información que se lee de o se escribe a la memoria, obligando a que todos los accesos a esta sean secuenciales.Limita el grado de paralelismo (acciones que se pueden realizar al mismo tiempo) y por lo tanto, el desempeño de la computadora.Este efecto se conoce como el cuello de botella de Von Newman
					</p>
					<p>
						<span>Arquitecturas Segmentadas.</span> Las arquitecturas segmentadas o con segmentación del cauce buscan mejorar el desempeño realizando paralelamente varias etapas del ciclo de instrucción al mismo tiempo.Un ciclo de instrucción (también llamado ciclo de fetch-and-execute o ciclo de fetch-decode-execute en inglés) es el período que tarda la unidad central de proceso (CPU) en ejecutar una instrucción de lenguaje máquina.Comprende una secuencia de acciones determinada que debe llevar a cabo la CPU para ejecutar cada instrucción en un programa.Cada instrucción del juego de instrucciones de una CPU puede requerir diferente número de ciclos de instrucción para su ejecución.Un ciclo de instrucción está formado por uno o más ciclos máquina.
						5 Un ciclo máquina El funcionamiento básico de una computadora se basa en el ciclo máquina que realiza los siguientes pasos 1) Extrae de la memoria la siguiente instrucción y la lleva al registro de instrucción.2) Cambia el Contador de Programa de modo que señale la siguiente instrucción.3) Determina el tipo de instrucción que acaba de extraer.4) Verifica si la instrucción requiere datos de la memoria y, si es así, determina donde están situados.5) Extrae los datos -si los hay- y los carga en los registros internos de la CPU.6) Ejecuta la instrucción.7) Almacena los resultados en el lugar apropiado.Vuelve al punto 1 para empezar: la ejecución de la instrucción siguiente
					</p>
					<p>
						<span>Arquitecturas de multiprocesamiento.</span> Cuando se desea incrementar el desempeño más aya de lo que permite la técnica de segmentación del cauce (limite teórico de una instrucción por ciclo de reloj), se requiere utilizar más de un procesador para la ejecución del programa de aplicación.Un reloj del sistema reside en la tarjeta madre.Éste envía una señal a todos los componentes de la computadora en ritmo, como un metrónomo.Generalmente, este ritmo se genera como una onda cuadrada
					</p>
					<h2>Análisis de los componentes</h2>
					<hr></hr>
					<h4>Unidad Central de Procesamiento.</h4>
					<p>
						La CPU se la suele llamar coloquialmente como microprocesador o simplemente procesador, y puedes considerarla como el cerebro de cualquier dispositivo.Se encarga de procesar todas las instrucciones del dispositivo, leyendo las órdenes y requisitos del sistema operativo, así como las instrucciones de cada uno de los componentes y las aplicaciones.
					</p>
					<h4>Unidad Aritmética lógica</h4>
					<p>
						Es la parte encargada de procesar los datos, se conoce también como ALU (Arithmetic-Logic Unit).Las operaciones que realiza son de tipo aritmético: suma, resta, multiplicación y división; y de tipo lógico: igual, mayor que o menor que.
					</p>
					<h4>Registros</h4>
					<p>
						Un registro es una memoria de alta velocidad y poca capacidad, integrada en el microprocesador, que permite guardar transitoriamente y acceder a valores muy usados, generalmente en operaciones matemáticas.
						Los registros están en la cumbre de la jerarquía de memoria, y son la manera más rápida que tiene el sistema de almacenar datos.Los registros se miden generalmente por el número de bits que almacenan; por ejemplo, un "registro de 8 bits" o un "registro de 32 bits".Los registros generalmente se implementan en un banco de registros, pero antiguamente se usaban biestables individuales, memoria SRAM o formas aún más primitivas.
					</p>
					<h4>Buses</h4>
					<p>
						Es un sistema digital que transfiere datos entre los componentes de una computadora.Está formado por cables o pistas en un circuito impreso, dispositivos como resistores y condensadores, además de circuitos integrados.
					</p>
					<h2>Memoria</h2>
					<hr></hr>
					<h4>Conceptos básicos del manejo de la memoria</h4>
					<p>
						La unidad de gestión de memoria,​ unidad de administración de memoria o unidad de manejo de memoria​ (del inglés Memory Management Unit, MMU) es un dispositivo de hardware formado por un grupo de circuitos integrados, responsable del manejo de los accesos a la memoria por parte de la Unidad de Procesamiento Central
					</p>
					<h4>Memoria Principal</h4>
					<p>
						Es la memoria de la computadora donde se almacenan temporalmente tanto los datos como los programas que la unidad central de procesamiento (CPU) está procesando o va a procesar en un determinado momento.Por su función, la MP debe ser inseparable del microprocesador o CPU, con quien se comunica a través del bus de datos y el bus de direcciones.El ancho del bus determina la capacidad que posea el microprocesador para el direccionamiento de direcciones en memoria.
					</p>
					<h4>Memoria Caché</h4>
					<p>
						La caché es un tipo de memoria a la que el procesador tiene acceso directo, casi instantáneo, y en la que se almacenan los datos e instrucciones que más utiliza para «tenerlos a mano» de manera inmediata.
					</p>
					<h2>Manejo de la entrada/salida</h2>
					<hr></hr>
					<h4>Módulos de entrada/salida</h4>
					<p>
						Los módulos de Entrada / Salida, son dispositivos de estado sólido que permiten adaptar diferentes niveles de tensión desde o hacia un sistema lógico.
						Módulos de entrada: convierten una señal alterna o continua en una señal de nivel lógico continuo.
						Módulos de salida: convierten una señal de mando lógico en una señal de salida alterna o continua.
					</p>
					<h4>Entrada/salida programada</h4>
					<p>
						Los datos se intercambian entre el CPU y el módulo de E/S.El CPU ejecuta un programa que controla directamente la operación de E/S, incluyendo la comprobación del estado del dispositivo, el envío de la orden de lectura o escritura y la transferencia del dato.Cuando el CPU envía la orden debe esperar hasta que la operación de E/S concluya.Si el CPU es más rápido, éste estará ocioso.El CPU es el responsable de comprobar periódicamente el estado del módulo de E/S hasta que encuentre que la operación ha finalizado.
					</p>
					<h4>Entrada/salida mediante interrupciones</h4>
					<p>
						En el caso de la entrada/salida por interrupciones, es el dispositivo quien establece el momento en que se realiza la transferencia de los datos, avisando a la CPU de que ha ocurrido un evento (por ejemplo, que el usuario haya presionado una tecla).
					</p>
					<h2>Buses</h2>
					<hr></hr>
					<h4>Tipos de buses</h4>
					<p>
						<span>Bus de memoria </span>Como su propio nombre indica, este bus es el encargado de comunicar el controlador de memoria, actualmente insertado en el procesador, con la memoria RAM del sistema.Este bus ha tomado diferentes nombres según la marca fabricante del procesador, ya fueran Hyper Transport (HT), Quick Path Interconnect (QPI) o Direct Media Interface (DMI).
					</p>
					<p>
						<span>Front Side Bus (FSB, extinto) </span>
						Este es el bus de datos que se encargaba de comunicar el procesador con el North Bridge, donde se ubicaba el controlador de memoria. Dado que ahora el controlador de memoria se ha integrado en el propio procesador, este bus ya no existe. De hecho, la modificación de este bus de datos es lo que se empleaba originalmente para realizar overclock en los ordenadores.
					</p>
					<p>
						<span>Peripheral Computer Interconnect (PCI) </span>
						Este bus de datos, que data del año 1992, se empleaba originalmente para dar servicio tanto a las tarjetas gráficas como a las tarjetas auxiliares que se podían conectar a un ordenador. A diferencia del bus PCIe, se trata de un bus paralelo y no seriado como este.
					</p>
					<p>
						<span>Bus Advanced Graphics Interface (AGP, extinto) </span>
						Aunque, en realidad, no es un bus como tal, sí es importante incluirlo en la lista. El bus AGP se desarrolló como una derivación del bus PCI, cuando en los PC comenzaron a tener una mayor preponderancia los gráficos. La principal ventaja frente al bus PCI es que se conectaba directamente al procesador, sin tener que compartir ancho de banda con el bus PCI
					</p>
					<h4>Estructura de los buses</h4>
					<p>
						Cada bus se compone de tres partes distintas. El bus de datos, el de direcciones y el de control. El bus de datos es al que la mayoría de personas se refiere cuando habla de un bus. Estas son las líneas que llevan los datos que se transfieren. El bus de direcciones es el conjunto de líneas que transportan la información del sitio en la memoria de donde o hacia donde se transfieren los datos. Finalmente, el bus de control como su nombre lo indica, lleva las señales que controlan las funciones y operación del bus.
					</p>
					<h4>Interrupciones</h4>
					<p>
						Una interrupción es una suspensión temporal de la ejecución de un proceso, para pasar a ejecutar una subrutina de servicio de interrupción, la cual, por lo general, no forma parte del programa, sino que pertenece al sistema operativo o al BIOS. Una vez finalizada dicha subrutina, se reanuda la ejecución del programa.
						Las interrupciones son generadas por los dispositivos periféricos habilitando una señal del CPU (llamada IRQ del inglés "interrupt request") para solicitar atención del mismo. Por ejemplo. cuando un disco duro completa una lectura solicita atención al igual que cada vez que se presiona una tecla o se mueve el ratón.
					</p>
				</InfoContainer>
			</div>
		</div>
	)
}

export default Unity1