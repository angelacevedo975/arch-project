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

const Unity2 = () => {
	return (
		<div className="container border my-5">
			<div className="row">
				<InfoContainer className="col col-12">
					<h1>Unidad 2</h1>
					<h2>Estructura y funcionamiento de la Unidad Central de
						Procesamiento</h2>
					<hr></hr>
					<h4>El Procesador</h4>
					<p>
						El procesador es el cerebro del sistema, justamente procesa todo lo que ocurre en la PC y ejecuta todas las acciones que existen. Cuanto más rápido sea el procesador que tiene una computadora, más rápidamente se ejecutarán las órdenes que se le den a la máquina. Este componente es parte del hardware de muchos dispositivos, no solo de tu computadora.
						El procesador es una pastilla de silicio que va colocada en el socket sobre la placa madre dentro del gabinete de la computadora de escritorio, la diferencia en una portátil es que está directamente soldado. El procesador está cubierto de algo que llamamos encapsulado, y de lo cual existen 3 tipos: PGA, LGA y BGA.
						El procesador es uno de los componentes de la computadora que más ha evolucionado, dado a que se les exige a los ingenieros que cada vez ofrezcan mejores procesadores para que las computadoras funcionen más rápidas y de forma más eficaz. Su evolución no ha sido solo interna, sino que también su forma externa fue modificada. Los fabricantes de procesadores de PC más populares son Intel y AMD.
					</p>
					<h4>Estructura De Registros</h4>
					<p>
						Los registros vienen de tres tipos: datos, direcciones e índice, que tiene lugar en casi todos los aspectos de la operación del CPU. El tamaño de un registro depende del CPU; los más simples tienen registros que aceptan 8 o 16 bits de datos y los más complejos tienen registros de 32, 48 o 64 bits.
					</p>
					<h4>Registros visibles para el usuario</h4>
					<p>
						Un registro visible al usuario es aquél que puede ser referenciado por medio del lenguaje máquina que ejecuta la CPU. Prácticamente todos los diseños contemporáneos de CPUs están provistos de varios registros visibles al usuario, en oposición a disponer de un único acumulador.
						Podemos clasificarlos en:
					</p>
					<ul>
						<li>Uso General</li>
						<li>Datos</li>
						<li>Direcciones</li>
						<li>Códigos de Condición</li>
					</ul>
					<h4>Registros de control y de estados</h4>
					<p>
						Son utilizados por la unidad de control para controlar el fun- cionamiento del procesador y por programas privilegiados del sistema operativo para con- trolar la ejecución de programas. Hay diversos registros del procesador que se emplean para controlar su funcionamiento.
					</p>
					<h4>Ejemplos de registros de CPU reales</h4>
					<p>
						El  MC68000  distribuye  sus  registros de   32 bits   en ocho  de  datos  y   nueve  dedirecciones.   Los   ocho   registros   de   datos   se   usan   principalmente   paramanipulación  de  datos y   también   se   usan   en direccionamiento como   registros índice.
					</p>
					<p>
						El Intel 8086 usa un enfoque diferente para la organización de los registros. Cadauno de los registros tiene un uso especial, aunque algunos registros se puedenemplear también para un uso general. El 8086 contiene cuatro registros de datosde 16 bits que son direccionables como registros de bytes o como registros de 16bits,   y   cuatro   registros   punteros   e   índices   de   16   bits.   Los   registros   de   datospueden utilizarse como de  uso general  en algunas instrucciones. En otras, losregistros se usan implícitamente.
					</p>
					<h4>Ciclo Fetch-Decode-Execute</h4>
					<p>
						Con este ciclo se ejecutan todas las tareas que una computadora puede realizar.
						Este ciclo tiene algunas variantes y conforme ha avanzado el tiempo y la tecnología ha sufrido algunos cambios, pero el ciclo básico se conforma de las siguientes etapas:
					</p>
					<ul>
						<li>
							Traer la instrucción: Se obtiene la instrucción desde memoria y se almacena en el registro del CPU para instrucciones.
						</li>
						<li>
							Decodificar la instrucción: Se identifica el modo de direccionamiento de la instrucción y la ubicación de los datos a tratar, ya sea de memoria, registro o instrucción directamente.
						</li>
						<li>
							Carga de Parámetros: Se ejecuta la lectura, cargando todos los datos identificados en el paso anterior.
						</li>
						<li>
							Ejecutar: Se ejecuta la instrucción ya configurada, realiza la tarea indicada, ya sea una suma, resta, almacenar información, extraer información etc.
						</li>
						<li>
							Almacenar: Se almacena el resultado obtenido de ejecutar la instrucción, por ejemplo, el resultado de una suma o un índice (Número) como resultado de éxito de almacenar u obtener información de un archivo, entre otros.
						</li>
						<li>
							Actualizar PC: Esta etapa es la de actualizar el registro PC (Program Counter) que contiene la siguiente dirección a ejecutar.
						</li>
					</ul>
					<h4>Segmentación de instrucciones</h4>
					<p>
						La segmentación de instrucciones es una técnica que permite implementar el paralelismo a nivel de instrucción en un único procesador. La segmentación intenta tener ocupadas con instrucciones todas las partes del procesador dividiendo las instrucciones en una serie de pasos secuenciales que efectuarán distintas unidades de la CPU, tratando en paralelo diferentes partes de las instrucciones. Permite una mayor tasa de transferencia efectiva por parte de la CPU que la que sería posible a una determinada frecuencia de reloj, pero puede aumentar la latencia debido al trabajo adicional que supone el propio proceso de la segmentación.
					</p>
					<h4>Conjunto de instrucciones. Características y funciones</h4>
					<p>
						Comprende una secuencia de acciones determinada que debe llevar a cabo la CPU para ejecutar cada instrucción en un programa. Cada instrucción del juego de instrucciones de una CPU, puede requerir diferente número de ciclos de instrucción para su ejecución. Un ciclo de instrucción está formado por uno o más ciclos máquina.
					</p>
					<ul>
						<li>Funciones de busqueda</li>
						<li>Funciones de decodificacion</li>
						<li>Funciones de ejecucion</li>
						<li>Funciones de almacenamiento</li>
					</ul>
					<h4>Modos de direccionamiento</h4>
					<p>
						Implícito:
						En este modo de direccionamiento no es necesario poner ninguna dirección de forma explícita, ya que en el propio código de operación se conoce la dirección de el/los operando/s al (a los) que se desea acceder o con el/los que se quiere operar.
					</p>
					<p>
						Inmediato:
						En este modo el operando es especificado en la instrucción misma. En otras palabras, una instrucción de modo inmediato tiene un campo de operando en vez de un campo de dirección. El campo del operando contiene el operando actual que se debe utilizar en conjunto con la operación especificada en la instrucción. Las instrucciones de modo inmediato son útiles para inicializar los registros en un valor constante.
					</p>
					<p>
						Directo o absoluto:
						En este modo la dirección efectiva es igual a la parte de dirección de la instrucción. El operando reside en la memoria y su dirección es dada directamente por el campo de dirección de la instrucción. En una instrucción de tipo ramificación el campo de dirección especifica la dirección de la rama actual.
					</p>
					<p>
						Indirecto:
						Si hace referencia a un registro de la máquina, la dirección de memoria (dirección efectiva) que contiene el dato estará en este registro y hablaremos de direccionamiento indirecto a registro; si hace referencia a una posición de memoria, la dirección de memoria (dirección efectiva) que contiene el dato estará almacenada en esta posición de memoria y hablaremos de direccionamiento indirecto a memoria.
					</p>
					<p>
						Indirecto recursivo:
						Unos pocos sistemas como el PDP-6 o el PDP-10 tenían la posibilidad de direccionamiento indirecto recursivo. Tal dirección de memoria indirecta tenía un campo de registro para indexación y posiblemente un otro bit indirecto, de modo que el proceso de direccionamiento indirecto con indexación podría teóricamente repetirse cualquier número de veces hasta que se encontrara una dirección sin un bit indirecto en la cadena.
					</p>
				</InfoContainer>
			</div>
		</div >
	)
}

export default Unity2