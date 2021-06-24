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

const Unity3 = () => {
	return (
		<div className="container border my-5">
			<div className="row">
				<InfoContainer className="col col-12">
					<h1>Unidad 3</h1>
					<h2>Selección de componentes para ensamble de equipo de cómputo</h2>
					<hr></hr>
					<h4>Unidad Central de Procesamiento (CPU)</h4>
					<p>
						Su trabajo es interpretar las instrucciones de un programa informático mediante la realización de las operaciones básicas aritméticas, lógicas y externas (provenientes de la unidad de entrada/salida). Su diseño y avance ha variado notablemente desde su creación, aumentando su eficiencia y potencia, y reduciendo aspectos como el consumo de energía y el costo.
					</p>
					<p>
						Los componentes de la CPU son:
					</p>
					<ul>
						<li>
							Unidad aritmético lógica (ALU): realiza operaciones aritméticas y lógicas.
						</li>
						<li>
							Unidad de control (CU): dirige el tráfico de información entre los registros de la CPU y conecta con la ALU las instrucciones extraídas de la memoria.
						</li>
						<li>
							Registros internos: no accesibles (de instrucción, de bus de datos y bus de dirección) y accesibles de uso específico (contador programa, puntero pila, acumulador, flags, etc.) o de uso general.
						</li>
					</ul>
					<h4>Controlador del Bus</h4>
					<p>
						El Bus de Administración del Sistema, o SMBus es esencialmente un cable en la placa madre de una computadora que se usa para transferir información entre el procesador y varios dispositivos periféricos.
					</p>
					<p>
						El controlador de bus SM significa administración del sistema, lo que significa administración del sistema. El chipset intercambia los datos del sistema a través de este controlador. Estos pueden ser, por ejemplo:
					</p>
					<ul>
						<li>
							Monitoree el voltaje y la temperatura de la placa
						</li>
						<li>
							Temperatura del procesador
						</li>
						<li>
							Velocidad del ventilador - Velocidad del ventilador
						</li>
						<li>
							Visualización del estado del modo de ahorro de energía
						</li>
						<li>
							mostrar diferentes tipos de errores
						</li>
					</ul>
					<h4>Puertas de Entrada Salida E/S</h4>
					<p>
						Un periférico de entrada/salida o E/S es aquel tipo de dispositivo periférico de un computador capaz de interactuar con los elementos externos a ese sistema de forma bidireccional, es decir, que permite tanto que sea ingresada información desde un sistema externo, como emitir información a partir de ese sistema. Los Dispositivos Periféricos de entrada son todos aquellos dispositivos que permiten introducir datos o información en una computadora para que esta los procese u ordene.
					</p>
					<p>
						Dispositivos o periféricos de comunicación entre computadoras, tales como módems y tarjetas de red, por lo general sirven para entrada y salida. También, los dispositivos de almacenamiento de datos, como los discos rígidos, la unidad de estado sólido, las memorias flash, las disqueteras, entre otros, se pueden considerar periféricos de entrada/salida.
					</p>
					<h4>Controlador de Interrupciones</h4>
					<p>
						Un controlador programable de interrupciones es un dispositivo usado para combinar varias fuentes de interrupciones sobre una o más líneas del CPU, mientras que permite que los niveles de prioridad sean asignados a sus salidas de interrupción (no confundir con el microcontrolador PICmicro de Microchip Technology). Cuando el dispositivo tiene múltiples salidas de interrupción a imponer, las impondrá en orden de su prioridad relativa. Los modos comunes de un PIC incluyen prioridades duras, prioridades rotativas, y prioridades en cascada.[cita requerida] Los PICs a menudo permiten la conexión en cascada de sus salidas a las entradas entre uno y otro.
					</p>
					<p>
						Los PICs típicamente tienen un conjunto común de registros: Interrupt Request Register (IRR), In-Service Register (ISR), Interrupt Mask Register (IMR). El IRR especifica qué interrupciones están pendientes de reconocimiento, y es típicamente un registro interno que no puede ser accesado directamente. El registro ISR especifica qué interrupciones han sido reconocidas, pero todavía están esperando por un final de interrupción (EOI). El IMR especifica qué interrupciones deben ser ignoradas y no ser reconocidas. Un esquema simple de registros como este, permite hasta dos distintas peticiones de interrupción estén pendientes a un tiempo, una esperando por reconocimiento, y una esperando por EOI.
					</p>
					<h4>Controlador de Acceso Directo a Memoria</h4>
					<p>
						El acceso directo a memoria (DMA, del inglés direct memory access) permite a cierto tipo de componentes de una computadora acceder a la memoria del sistema para leer o escribir independientemente de la unidad central de procesamiento principal.
					</p>
					<p>
						El coalescentes DMA permite que el NIC recoja los paquetes antes de que inicie un evento DMA. Esto puede aumentar la latencia de la red, pero también aumenta las probabilidades de que el sistema consuma menos energía. Los adaptadores y dispositivos de red basados en el controlador Ethernet Intel® I350 (y controladores posteriores) Asistencia la fusión de DMA.
					</p>
					<h4>Circuitos de temporización</h4>
					<p>
						El temporizador es un circuito digital, dispone de dos salidas al igual que un flip flop, una salida es la inversa de la otra, a diferencia del flip flop quién cuenta con dos estados estables, el temporizador solamente posee un estado estable, el otro estado es inestable, permanece en su estado estable, hasta que se activa con un pulso de entrada, una vez que se activa cambia a su estado inestable y ahí permanece por un periodo fijo de tiempo tw , este tiempo lo determina una constante de tiempo RC externa que se conecta al temporizador, después de que transcurre el tiempo tw , las salidas dos salidas del temporizador regresan a su estado estable, hasta que se activan otra vez. La finalidad de la temporización es retardar el paso de una señal desde un nodo del circuito hasta otro punto, el diseño de este circuito se realiza con un dispositivo que se conoce con el nombre de “monoestable” ó “temporizador”, éste elemento electrónico dispone de una entrada “E” y una salida “S”, se tienen tres temporizadores básicos que se denominan; el primero, temporización a la activación, el segundo se llama temporización a la desactivación y el tercero es una combinación de las dos anteriores, temporización a la “activación y desactivación” simultaneas. Se dispone de dos tipos de comportamiento en que se manifiestan las salidas de los temporizadores, "redisparables" y "no redisparables" y su entrada responde a dos tipos de disparo, "activación" y "desactivación".
					</p>
					<h4>Circuitos de Control</h4>
					<p>
						Un circuito de control es el componente fundamental de los sistemas de control industrial. Se refiere a todos los componentes físicos y funciones de control necesarios para ajustar automáticamente el valor de una variable de proceso medida (PV) para igualar el valor de un punto de ajuste deseado (SP). Incluye el sensor de proceso, la función del controlador y el elemento de control final (FCE) que se requieren para el control automático.
					</p>
					<h4>Controladores de video</h4>
					<p>
						Un controlador de vídeo o VDC es un circuito integrado que es elprincipal componente de un generador de señal de vídeo, un dispositivoencargado de la producción de una señal de vídeo en informática o unsistema de juego. Algunos de Desarrollo de Aldea también generar unabuena señal, pero en ese caso no es su función principal. La mayoría delos CDA se utilizan a menudo en la antigua casa-ordenadores de los años80, sino también en algunos de los primeros sistemas de video juego.
					</p>
					<h2>Aplicaciones.</h2>
					<hr></hr>
					<h4>Entrada/Salida</h4>
					<p>
						Las aplicaciones utilizan los dispositivos (devices) para realizar la I/O (entrada-salida). Estos dispositivos son variados y trabajan de manera diferente: secuencialmente, random; transfieren datos asincrónicamente o sincrónicamente; pueden ser de sólo lectura (read- only) o lectura-escritura (read-write), etc.
					</p>
					<h4>Almacenamiento</h4>
					<p>
						Mientras la memoria se refiere a la ubicación de los datos a corto plazo, el almacenamiento es el componente de su computadora que le permite almacenar y acceder a datos a largo plazo. Usualmente, el almacenamiento se da en forma de una unidad de estado sólido o un disco duro. El almacenamiento le permite acceder y almacenar sus aplicaciones, sistema operativo y archivos por un tiempo indefinido.
					</p>
					<p>
						Mientras que el escritorio representa la memoria de la computadora, el archivador representa el almacenamiento de su computadora. Los elementos que se deben guardar, pero no necesariamente acceder, se guardan en el archivador. Debido al tamaño del archivador muchas cosas se pueden guardar.
					</p>
					<p>
						Mientras que el escritorio representa la memoria de la computadora, el archivador representa el almacenamiento de su computadora. Los elementos que se deben guardar, pero no necesariamente acceder, se guardan en el archivador. Debido al tamaño del archivador muchas cosas se pueden guardar.
					</p>
					<h4>Fuentes de Alimentación</h4>
					<p>
						Las fuentes de alimentación para dispositivos electrónicos, pueden clasificarse básicamente como fuentes de alimentación lineales y conmutadas.2​ Las lineales tienen un diseño relativamente simple, que puede llegar a ser más complejo cuanto mayor es la corriente que deben suministrar, sin embargo su regulación de tensión es poco eficiente. Una fuente conmutada, de la misma potencia que una lineal, será más pequeña y normalmente más eficiente pero será más compleja y por tanto más susceptible a averías.
					</p>
				</InfoContainer>
			</div>
		</div>
	)
}

export default Unity3