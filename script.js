const app = document.getElementById("app");
const infoPanel = document.getElementById("infoPanel");
const infoTitle = document.getElementById("infoTitle");
const infoPurpose = document.getElementById("infoPurpose");
const infoPrinciple = document.getElementById("infoPrinciple");
const infoFact = document.getElementById("infoFact");

const closeInfo = document.getElementById("closeInfo");
const backButton = document.getElementById("backButton");
const homeButton = document.getElementById("homeButton");

let currentScreen = "external";

const externalDevices = {
  monitor: {
    title: "Монитор",
    purpose: "Назначение: монитор выводит изображение, текст, видео, интерфейс программ и игр.",
    principle: "Принцип работы: видеокарта передаёт видеосигнал, а матрица монитора формирует изображение из множества пикселей.",
    fact: "Интересный факт: чем выше частота обновления монитора, тем плавнее может выглядеть движение на экране."
  },

  keyboard: {
    title: "Клавиатура",
    purpose: "Назначение: клавиатура используется для ввода текста, команд и управления компьютером.",
    principle: "Принцип работы: при нажатии клавиши формируется электрический сигнал, который передаётся компьютеру.",
    fact: "Интересный факт: клавиатуры бывают мембранные, механические и оптические."
  },

  mouse: {
    title: "Мышь",
    purpose: "Назначение: мышь помогает управлять курсором, выбирать объекты и взаимодействовать с интерфейсом.",
    principle: "Принцип работы: оптический сенсор отслеживает движение поверхности и передаёт координаты компьютеру.",
    fact: "Интересный факт: игровые мыши часто имеют более точные сенсоры и дополнительные кнопки."
  },

  speakers: {
    title: "Колонки",
    purpose: "Назначение: колонки выводят звук — музыку, речь, системные уведомления и звуки игр.",
    principle: "Принцип работы: электрический аудиосигнал преобразуется в колебания динамика, создающие звуковые волны.",
    fact: "Интересный факт: качество звука зависит от динамиков, усилителя и корпуса колонок."
  }
};

const internalParts = {
  ram: {
    title: "Оперативная память — RAM / ОЗУ",
    purpose: "Назначение: ОЗУ временно хранит данные, с которыми компьютер работает прямо сейчас.",
    principle: "Принцип работы: когда программа запускается, её данные загружаются из SSD или HDD в оперативную память, чтобы процессор мог быстро к ним обращаться.",
    fact: "Почему важна: чем больше ОЗУ, тем комфортнее работать с несколькими программами одновременно."
  },

  cpu: {
    title: "Процессор — CPU",
    purpose: "Назначение: процессор выполняет основные вычисления и управляет работой программ.",
    principle: "Принцип работы: CPU получает инструкции, обрабатывает данные и передаёт результат другим компонентам.",
    fact: "Почему важен: от процессора зависит скорость работы программ, системы и многих задач."
  },

  gpu: {
    title: "Видеокарта — GPU",
    purpose: "Назначение: видеокарта отвечает за обработку графики и вывод изображения на монитор.",
    principle: "Принцип работы: GPU выполняет множество параллельных вычислений, связанных с изображением, 3D-графикой и видео.",
    fact: "Почему важна: видеокарта особенно важна для игр, монтажа видео, 3D-моделирования и нейросетей."
  },

  ssd: {
    title: "SSD / накопитель",
    purpose: "Назначение: SSD хранит операционную систему, программы, игры и файлы пользователя.",
    principle: "Принцип работы: данные хранятся в микросхемах флеш-памяти без движущихся частей.",
    fact: "Почему важен: SSD сильно ускоряет запуск Windows, программ и загрузку файлов."
  },

  power: {
    title: "Блок питания",
    purpose: "Назначение: блок питания преобразует электричество из розетки в напряжения, нужные компонентам ПК.",
    principle: "Принцип работы: он распределяет питание между материнской платой, процессором, видеокартой, накопителями и вентиляторами.",
    fact: "Почему важен: слабый или некачественный блок питания может вызвать нестабильную работу компьютера."
  },

  cooling: {
    title: "Система охлаждения",
    purpose: "Назначение: охлаждение отводит тепло от процессора, видеокарты и других компонентов.",
    principle: "Принцип работы: радиатор забирает тепло, а вентилятор рассеивает его потоком воздуха.",
    fact: "Почему важна: без охлаждения компоненты могут перегреваться и снижать производительность."
  }
};

const componentDetails = {
  ram: {
    title: "Детальное строение оперативной памяти",
    description: "ОЗУ состоит из печатной платы, микросхем памяти, контактов и специального выреза-ключа.",
    model: "ram",
    parts: {
      chips: {
        title: "Чипы памяти",
        text: "Чипы памяти временно хранят данные программ и системы. Именно в них находятся данные, к которым процессор обращается во время работы."
      },
      contacts: {
        title: "Контакты",
        text: "Контакты соединяют планку ОЗУ с материнской платой. Через них передаются данные, команды и питание."
      },
      board: {
        title: "Печатная плата",
        text: "Печатная плата соединяет все элементы ОЗУ между собой и направляет электрические сигналы между микросхемами и контактами."
      },
      key: {
        title: "Вырез / ключ",
        text: "Вырез нужен, чтобы пользователь не смог вставить ОЗУ неправильной стороной или в неподходящий слот."
      }
    }
  },

  cpu: {
    title: "Детальное строение процессора",
    description: "Процессор выполняет вычисления, обрабатывает команды и управляет работой программ.",
    model: "cpu",
    parts: {
      cover: {
        title: "Крышка процессора",
        text: "Металлическая крышка защищает внутренний кристалл процессора и помогает передавать тепло на систему охлаждения."
      },
      core: {
        title: "Кристалл и ядра",
        text: "Внутри процессора находятся ядра, которые выполняют вычисления. Чем больше ядер, тем лучше процессор справляется с параллельными задачами."
      },
      contacts: {
        title: "Контактная часть",
        text: "Контакты соединяют процессор с сокетом материнской платы. Через них проходят сигналы и питание."
      },
      cache: {
        title: "Кэш-память",
        text: "Кэш хранит самые часто используемые данные, чтобы процессор мог обращаться к ним быстрее, чем к оперативной памяти."
      }
    }
  },

  gpu: {
    title: "Детальное строение видеокарты",
    description: "Видеокарта обрабатывает графику, видео и сложные параллельные вычисления.",
    model: "gpu",
    parts: {
      gpuChip: {
        title: "Графический процессор",
        text: "GPU — главный чип видеокарты. Он обрабатывает графику, 3D-сцены, эффекты, видео и вычисления."
      },
      vram: {
        title: "Видеопамять",
        text: "VRAM хранит текстуры, кадры, модели и другие графические данные, нужные видеокарте."
      },
      fans: {
        title: "Вентиляторы",
        text: "Вентиляторы охлаждают радиатор видеокарты и помогают не допустить перегрева GPU."
      },
      pcie: {
        title: "PCIe-разъём",
        text: "Через PCIe-разъём видеокарта подключается к материнской плате и обменивается данными с системой."
      }
    }
  },

  ssd: {
    title: "Детальное строение SSD-накопителя",
    description: "SSD хранит операционную систему, программы, игры и файлы пользователя в микросхемах флеш-памяти.",
    model: "ssd",
    parts: {
      memory: {
        title: "Чипы памяти",
        text: "Чипы памяти хранят данные: операционную систему, программы, игры и файлы пользователя. В отличие от HDD, в SSD нет движущихся механических частей."
      },
      controller: {
        title: "Контроллер",
        text: "Контроллер управляет работой SSD: распределяет данные по чипам памяти, следит за скоростью чтения и записи, а также помогает продлить срок службы накопителя."
      },
      contacts: {
        title: "Контакты",
        text: "Контакты соединяют SSD с материнской платой. Через них передаются данные и питание."
      },
      board: {
        title: "Печатная плата",
        text: "Печатная плата объединяет контроллер, чипы памяти и контакты в одно устройство, по которому проходят электрические сигналы."
      }
    }
  },

  power: {
    title: "Детальное строение блока питания",
    description: "Блок питания преобразует электричество из розетки и распределяет его между компонентами компьютера.",
    model: "power",
    parts: {
      fan: {
        title: "Вентилятор",
        text: "Вентилятор выводит нагретый воздух из корпуса блока питания и не даёт его внутренним элементам перегреваться."
      },
      transformer: {
        title: "Трансформатор",
        text: "Трансформатор участвует в преобразовании напряжения сети в значения, подходящие для компонентов компьютера."
      },
      capacitors: {
        title: "Конденсаторы",
        text: "Конденсаторы накапливают электрический заряд и помогают сглаживать колебания напряжения, чтобы питание оставалось стабильным."
      },
      cables: {
        title: "Кабели питания",
        text: "Через кабели блок питания передаёт электричество материнской плате, процессору, видеокарте и накопителям."
      }
    }
  },

  cooling: {
    title: "Детальное строение системы охлаждения",
    description: "Система охлаждения отводит тепло от процессора и рассеивает его, чтобы компьютер работал стабильно.",
    model: "cooling",
    parts: {
      fan: {
        title: "Вентилятор",
        text: "Вентилятор создаёт поток воздуха и помогает отводить тепло от радиатора."
      },
      radiator: {
        title: "Радиатор",
        text: "Радиатор состоит из множества металлических пластин. Благодаря большой площади поверхности он быстрее отдаёт тепло окружающему воздуху."
      },
      pipes: {
        title: "Тепловые трубки",
        text: "Тепловые трубки переносят тепло от контактной площадки к пластинам радиатора."
      },
      base: {
        title: "Контактная площадка",
        text: "Контактная площадка прилегает к крышке процессора. Термопаста между поверхностями помогает передавать тепло эффективнее."
      }
    }
  },

  motherboard: {
    title: "Детальное строение материнской платы",
    description: "Материнская плата соединяет основные компоненты компьютера и позволяет им обмениваться данными и получать питание.",
    model: "motherboard",
    parts: {
      socket: {
        title: "Сокет процессора",
        text: "Сокет удерживает процессор и соединяет его с материнской платой через множество электрических контактов."
      },
      ramSlots: {
        title: "Слоты оперативной памяти",
        text: "В слоты оперативной памяти устанавливаются планки RAM. Через них процессор получает быстрый доступ к временно хранящимся данным."
      },
      pcie: {
        title: "PCIe-разъём",
        text: "PCIe-разъём используется для подключения видеокарты и других плат расширения."
      },
      m2: {
        title: "M.2-разъём",
        text: "В разъём M.2 устанавливаются компактные SSD-накопители, которые обмениваются данными с системой через материнскую плату."
      },
      powerConnectors: {
        title: "Разъёмы питания",
        text: "Через разъёмы питания материнская плата получает электричество от блока питания и распределяет его между установленными компонентами."
      },
      chipset: {
        title: "Чипсет",
        text: "Чипсет помогает координировать обмен данными между процессором, накопителями, портами и другими устройствами."
      }
    }
  }
};

const externalSceneVisual = {
  // Укажите путь к фотографии первого слоя, например: "images/external/workspace.png".
  image: "images/external/workspace.png",
  devices: [
    { className: "monitor", label: "Монитор", action: "showInfo('monitor')" },
    { className: "keyboard", label: "Клавиатура", action: "showInfo('keyboard')" },
    { className: "mouse", label: "Мышь", action: "showInfo('mouse')" },
    { className: "speaker-left", label: "Колонка", action: "showInfo('speakers')" },
    { className: "speaker-right", label: "Колонка", action: "showInfo('speakers')" },
    { className: "system-unit", label: "Системный блок", action: "showInternalView()" }
  ]
};

const internalSceneVisual = {
  // Укажите путь к фотографии второго слоя, например: "images/internal/pc-inside.jpg".
  image: "images/internal/pc-inside.png"
};

const detailVisuals = {
  ram: {
    image: "images/details/ram.png?v=20260601-200435",
    hotspots: [
      { part: "chips", label: "Чипы памяти", button: [5, 10], target: [28, 45] },
      { part: "contacts", label: "Контакты", button: [7, 78], target: [36, 66] },
      { part: "board", label: "Плата", button: [70, 10], target: [76, 35] },
      { part: "key", label: "Вырез / ключ", button: [72, 78], target: [50, 66] }
    ]
  },
  cpu: {
    image: "images/details/cpu.png?v=20260601-201605",
    hotspots: [
      { part: "cover", label: "Крышка", button: [6, 8], target: [24, 28] },
      { part: "core", label: "Ядра", button: [72, 8], target: [72, 28] },
      { part: "contacts", label: "Контакты", button: [6, 80], target: [24, 70] },
      { part: "cache", label: "Кэш", button: [72, 80], target: [72, 70] }
    ]
  },
  gpu: {
    image: "images/details/gpu.png?v=20260601-224342",
    hotspots: [
      { part: "fans", label: "Вентиляторы", button: [6, 8], target: [25, 43] },
      { part: "gpuChip", label: "GPU", button: [72, 8], target: [73, 45] },
      { part: "pcie", label: "PCIe", button: [6, 80], target: [30, 66] },
      { part: "vram", label: "VRAM", button: [72, 80], target: [65, 31] }
    ]
  },
  ssd: {
    image: "images/details/ssd.png?v=20260601-231228",
    hotspots: [
      { part: "controller", label: "Контроллер", button: [6, 8], target: [20, 49] },
      { part: "memory", label: "Чипы памяти", button: [70, 8], target: [65, 48] },
      { part: "contacts", label: "Контакты", button: [72, 80], target: [93, 49] },
      { part: "board", label: "Плата", button: [6, 80], target: [48, 58] }
    ]
  },
  power: {
    image: "images/details/power.png?v=20260601-225517",
    hotspots: [
      { part: "fan", label: "Вентилятор", button: [6, 8], target: [23, 48] },
      { part: "transformer", label: "Трансформатор", button: [68, 8], target: [48, 42] },
      { part: "capacitors", label: "Конденсаторы", button: [6, 80], target: [67, 48] },
      { part: "cables", label: "Кабели питания", button: [70, 80], target: [88, 52] }
    ]
  },
  cooling: {
    image: "images/details/cooling.png?v=20260601-232402",
    hotspots: [
      { part: "fan", label: "Вентилятор", button: [6, 8], target: [28, 44] },
      { part: "radiator", label: "Радиатор", button: [70, 8], target: [73, 38] },
      { part: "pipes", label: "Тепловые трубки", button: [6, 80], target: [63, 69] },
      { part: "base", label: "Контактная площадка", button: [67, 80], target: [50, 80] }
    ]
  },
  motherboard: {
    image: "images/details/motherboard.png?v=20260601-205116",
    hotspots: [
      { part: "socket", label: "Сокет CPU", button: [4, 8], target: [43, 35] },
      { part: "ramSlots", label: "Слоты RAM", button: [68, 8], target: [63, 32] },
      { part: "pcie", label: "PCIe", button: [4, 80], target: [39, 66] },
      { part: "m2", label: "M.2", button: [35, 80], target: [40, 58] },
      { part: "powerConnectors", label: "Питание", button: [78, 43], target: [74, 32] },
      { part: "chipset", label: "Чипсет", button: [72, 80], target: [63, 73] }
    ]
  }
};

function showExternalView() {
  currentScreen = "external";
  backButton.classList.add("hidden");
  hideInfo();

  app.innerHTML = `
    <div class="screen-title">
      <h2>Внешнее строение компьютера</h2>
      <p>Нажми на устройство, чтобы узнать о нём больше. Нажми на системный блок, чтобы перейти внутрь.</p>
    </div>

    <div class="external-scene${externalSceneVisual.image ? " has-photo" : ""}">
      ${getExternalSceneImage()}
      ${getExternalDevices()}
    </div>
  `;
}

function getExternalSceneImage() {
  if (!externalSceneVisual.image) {
    return "";
  }

  return `<img class="external-scene-image" src="${externalSceneVisual.image}" alt="Рабочее место с компьютером">`;
}

function getExternalDevices() {
  return externalSceneVisual.devices.map(device => `
    <div class="device ${device.className}" onclick="${device.action}">${device.label}</div>
  `).join("");
}

function showInternalView() {
  currentScreen = "internal";
  backButton.classList.remove("hidden");
  hideInfo();

  app.innerHTML = `
    <div class="screen-title">
      <h2>Внутреннее устройство системного блока</h2>
      <p>Нажми на компонент, чтобы перейти к его подробному изучению.</p>
    </div>

    <div class="internal-scene${internalSceneVisual.image ? " has-photo" : ""}">
      ${getInternalSceneImage()}
      <div class="motherboard" onclick="showComponentDetail('motherboard')">
        <span class="motherboard-label">Материнская плата</span>
      </div>

      <div class="pc-part cpu" onclick="showComponentDetail('cpu')">CPU<br>Процессор</div>
      <div class="pc-part ram" onclick="showComponentDetail('ram')">RAM<br>ОЗУ</div>
      <div class="pc-part gpu" onclick="showComponentDetail('gpu')">GPU<br>Видеокарта</div>
      <div class="pc-part ssd" onclick="showComponentDetail('ssd')">SSD<br>Накопитель</div>
      <div class="pc-part power-supply" onclick="showComponentDetail('power')">Блок питания</div>
      <div class="pc-part cooling" onclick="showComponentDetail('cooling')">Охлаждение</div>
    </div>
  `;
}

function showComponentDetail(componentName) {
  currentScreen = "detail";
  backButton.classList.remove("hidden");
  hideInfo();

  const component = componentDetails[componentName];

  app.innerHTML = `
    <div class="detail-screen">
      <div class="screen-title">
        <h2>${component.title}</h2>
        <p>${component.description}</p>
      </div>

      <div class="detail-layout">
        <div class="component-model">
          ${getComponentVisual(component.model)}
          ${getDetailHotspots(component.model)}
        </div>

        <div class="detail-info">
          <h3 id="partTitle">Выбери часть компонента</h3>
          <p id="partText">Нажми на синюю подпись на изображении, чтобы узнать назначение выбранной части.</p>
        </div>
      </div>
    </div>
  `;

  window.currentComponent = componentName;
  requestAnimationFrame(updateConnectorAnchors);
}

function getInternalSceneImage() {
  if (!internalSceneVisual.image) {
    return "";
  }

  return `<img class="internal-scene-image" src="${internalSceneVisual.image}" alt="Внутреннее строение системного блока">`;
}

function getComponentVisual(model) {
  const visual = detailVisuals[model];

  if (visual && visual.image) {
    return `
      <img class="component-photo" src="${visual.image}" alt="" onerror="this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden')">
      <div class="component-photo-fallback hidden">${getComponentModel(model)}</div>
    `;
  }

  return getComponentModel(model);
}

function getComponentModel(model) {
  if (model === "ram") {
    return `
      <div class="ram-model">
        <div class="ram-chip chip-1"></div>
        <div class="ram-chip chip-2"></div>
        <div class="ram-chip chip-3"></div>
        <div class="ram-chip chip-4"></div>
        <div class="ram-chip chip-5"></div>
        <div class="ram-contacts"></div>
      </div>
    `;
  }

  if (model === "cpu") {
    return `
      <div class="cpu-model">
        <div class="cpu-core"></div>
      </div>
    `;
  }

  if (model === "gpu") {
    return `
      <div class="gpu-model">
        <div class="gpu-fan fan-1"></div>
        <div class="gpu-fan fan-2"></div>
      </div>
    `;
  }
  if (model === "ssd") {
    return `
      <div class="ssd-model">
        <div class="ssd-controller"></div>
        <div class="ssd-memory-chip ssd-chip-1"></div>
        <div class="ssd-memory-chip ssd-chip-2"></div>
        <div class="ssd-memory-chip ssd-chip-3"></div>
        <div class="ssd-contacts"></div>
      </div>
    `;
  }

  if (model === "power") {
    return `
      <div class="power-model">
        <div class="power-fan"></div>
        <div class="power-transformer"></div>
        <div class="power-capacitor capacitor-1"></div>
        <div class="power-capacitor capacitor-2"></div>
        <div class="power-capacitor capacitor-3"></div>
        <div class="power-cables">
          <span class="power-cable cable-1"></span>
          <span class="power-cable cable-2"></span>
          <span class="power-cable cable-3"></span>
        </div>
      </div>
    `;
  }

  if (model === "cooling") {
    return `
      <div class="cooling-model">
        <div class="cooling-radiator">
          <span class="cooling-fin fin-1"></span>
          <span class="cooling-fin fin-2"></span>
          <span class="cooling-fin fin-3"></span>
          <span class="cooling-fin fin-4"></span>
          <span class="cooling-fin fin-5"></span>
          <span class="cooling-fin fin-6"></span>
          <span class="cooling-fin fin-7"></span>
          <span class="cooling-fin fin-8"></span>
        </div>
        <div class="cooling-fan">
          <span class="cooling-fan-center"></span>
        </div>
        <div class="cooling-pipe pipe-1"></div>
        <div class="cooling-pipe pipe-2"></div>
        <div class="cooling-pipe pipe-3"></div>
        <div class="cooling-base"></div>
      </div>
    `;
  }

  if (model === "motherboard") {
    return `
      <div class="motherboard-model">
        <div class="mb-socket"></div>
        <div class="mb-ram-slot slot-1"></div>
        <div class="mb-ram-slot slot-2"></div>
        <div class="mb-ram-slot slot-3"></div>
        <div class="mb-ram-slot slot-4"></div>
        <div class="mb-pcie"></div>
        <div class="mb-m2"></div>
        <div class="mb-power-connectors"></div>
        <div class="mb-chipset"></div>
      </div>
    `;
  }
}

function getDetailHotspots(model) {
  const visual = detailVisuals[model];

  if (!visual || !visual.hotspots) {
    return getLegacyDetailHotspots(model);
  }

  const connectors = visual.hotspots.map(hotspot => `
    <line class="connector-line" data-hotspot="${hotspot.part}" x1="${hotspot.button[0]}" y1="${hotspot.button[1]}" x2="${hotspot.target[0]}" y2="${hotspot.target[1]}"></line>
    <circle class="connector-dot connector-label-dot" data-hotspot="${hotspot.part}" cx="${hotspot.button[0]}" cy="${hotspot.button[1]}" r="1.3"></circle>
    <circle class="connector-dot" cx="${hotspot.target[0]}" cy="${hotspot.target[1]}" r="1.6"></circle>
  `).join("");

  const buttons = visual.hotspots.map(hotspot => `
    <button class="part-hotspot" data-hotspot="${hotspot.part}" style="left: ${hotspot.button[0]}%; top: ${hotspot.button[1]}%;" onclick="showPartInfo('${hotspot.part}', this)">
      ${hotspot.label}
    </button>
  `).join("");

  return `
    <svg class="connectors" viewBox="0 0 100 100" preserveAspectRatio="none">
      ${connectors}
    </svg>
    ${buttons}
  `;
}

function updateConnectorAnchors() {
  const model = document.querySelector(".component-model");

  if (!model) {
    return;
  }

  const modelRect = model.getBoundingClientRect();

  document.querySelectorAll(".connector-line[data-hotspot]").forEach(line => {
    const hotspot = line.dataset.hotspot;
    const button = document.querySelector(`.part-hotspot[data-hotspot="${hotspot}"]`);

    if (!button) {
      return;
    }

    const buttonRect = button.getBoundingClientRect();
    const targetX = Number(line.getAttribute("x2"));
    const targetY = Number(line.getAttribute("y2"));
    const centerX = ((buttonRect.left + buttonRect.width / 2 - modelRect.left) / modelRect.width) * 100;
    const centerY = ((buttonRect.top + buttonRect.height / 2 - modelRect.top) / modelRect.height) * 100;
    const halfWidth = (buttonRect.width / modelRect.width) * 50;
    const halfHeight = (buttonRect.height / modelRect.height) * 50;
    const deltaX = targetX - centerX;
    const deltaY = targetY - centerY;

    if (deltaX === 0 && deltaY === 0) {
      return;
    }

    const scale = Math.min(
      deltaX === 0 ? Infinity : halfWidth / Math.abs(deltaX),
      deltaY === 0 ? Infinity : halfHeight / Math.abs(deltaY)
    );
    const anchorX = centerX + deltaX * scale;
    const anchorY = centerY + deltaY * scale;
    const anchorDot = document.querySelector(`.connector-label-dot[data-hotspot="${hotspot}"]`);

    line.setAttribute("x1", anchorX);
    line.setAttribute("y1", anchorY);

    if (anchorDot) {
      anchorDot.setAttribute("cx", anchorX);
      anchorDot.setAttribute("cy", anchorY);
    }
  });
}

function getLegacyDetailHotspots(model) {
  if (model === "ram") {
    return `
      <svg class="connectors" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line class="connector-line" x1="18" y1="18" x2="25" y2="45"></line>
        <circle class="connector-dot" cx="25" cy="45" r="1.6"></circle>

        <line class="connector-line" x1="22" y1="84" x2="42" y2="68"></line>
        <circle class="connector-dot" cx="42" cy="68" r="1.6"></circle>

        <line class="connector-line" x1="76" y1="18" x2="80" y2="45"></line>
        <circle class="connector-dot" cx="80" cy="45" r="1.6"></circle>

        <line class="connector-line" x1="80" y1="84" x2="78" y2="68"></line>
        <circle class="connector-dot" cx="78" cy="68" r="1.6"></circle>
      </svg>

      <button class="part-hotspot" style="left: 5%; top: 10%;" onclick="showPartInfo('chips', this)">
        Чипы памяти
      </button>

      <button class="part-hotspot" style="left: 7%; top: 78%;" onclick="showPartInfo('contacts', this)">
        Контакты
      </button>

      <button class="part-hotspot" style="left: 70%; top: 10%;" onclick="showPartInfo('board', this)">
        Плата
      </button>

      <button class="part-hotspot" style="left: 72%; top: 78%;" onclick="showPartInfo('key', this)">
        Вырез / ключ
      </button>
    `;
  }

  if (model === "cpu") {
    return `
      <svg class="connectors" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line class="connector-line" x1="28" y1="18" x2="50" y2="28"></line>
        <circle class="connector-dot" cx="50" cy="28" r="1.6"></circle>

        <line class="connector-line" x1="72" y1="48" x2="50" y2="50"></line>
        <circle class="connector-dot" cx="50" cy="50" r="1.6"></circle>

        <line class="connector-line" x1="28" y1="82" x2="50" y2="75"></line>
        <circle class="connector-dot" cx="50" cy="75" r="1.6"></circle>

        <line class="connector-line" x1="76" y1="20" x2="58" y2="44"></line>
        <circle class="connector-dot" cx="58" cy="44" r="1.6"></circle>
      </svg>

      <button class="part-hotspot" style="left: 12%; top: 10%;" onclick="showPartInfo('cover', this)">
        Крышка
      </button>

      <button class="part-hotspot" style="left: 66%; top: 42%;" onclick="showPartInfo('core', this)">
        Ядра
      </button>

      <button class="part-hotspot" style="left: 10%; top: 76%;" onclick="showPartInfo('contacts', this)">
        Контакты
      </button>

      <button class="part-hotspot" style="left: 70%; top: 12%;" onclick="showPartInfo('cache', this)">
        Кэш
      </button>
    `;
  }

  if (model === "gpu") {
    return `
      <svg class="connectors" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line class="connector-line" x1="16" y1="18" x2="25" y2="48"></line>
        <circle class="connector-dot" cx="25" cy="48" r="1.6"></circle>

        <line class="connector-line" x1="80" y1="18" x2="70" y2="45"></line>
        <circle class="connector-dot" cx="70" cy="45" r="1.6"></circle>

        <line class="connector-line" x1="42" y1="84" x2="40" y2="55"></line>
        <circle class="connector-dot" cx="40" cy="55" r="1.6"></circle>

        <line class="connector-line" x1="82" y1="84" x2="82" y2="70"></line>
        <circle class="connector-dot" cx="82" cy="70" r="1.6"></circle>
      </svg>

      <button class="part-hotspot" style="left: 7%; top: 10%;" onclick="showPartInfo('gpuChip', this)">
        GPU
      </button>

      <button class="part-hotspot" style="left: 72%; top: 10%;" onclick="showPartInfo('vram', this)">
        VRAM
      </button>

      <button class="part-hotspot" style="left: 32%; top: 78%;" onclick="showPartInfo('fans', this)">
        Вентиляторы
      </button>

      <button class="part-hotspot" style="left: 76%; top: 78%;" onclick="showPartInfo('pcie', this)">
        PCIe
      </button>
    `;
  }
  if (model === "ssd") {
    return `
      <svg class="connectors" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line class="connector-line" x1="18" y1="18" x2="15" y2="38"></line>
        <circle class="connector-dot" cx="15" cy="38" r="1.6"></circle>

        <line class="connector-line" x1="78" y1="18" x2="50" y2="38"></line>
        <circle class="connector-dot" cx="50" cy="38" r="1.6"></circle>

        <line class="connector-line" x1="80" y1="82" x2="84" y2="45"></line>
        <circle class="connector-dot" cx="84" cy="45" r="1.6"></circle>

        <line class="connector-line" x1="20" y1="82" x2="55" y2="55"></line>
        <circle class="connector-dot" cx="55" cy="55" r="1.6"></circle>
      </svg>

      <button class="part-hotspot" style="left: 8%; top: 10%;" onclick="showPartInfo('controller', this)">
        Контроллер
      </button>

      <button class="part-hotspot" style="left: 70%; top: 10%;" onclick="showPartInfo('memory', this)">
        Чипы памяти
      </button>

      <button class="part-hotspot" style="left: 72%; top: 76%;" onclick="showPartInfo('contacts', this)">
        Контакты
      </button>

      <button class="part-hotspot" style="left: 10%; top: 76%;" onclick="showPartInfo('board', this)">
        Плата
      </button>
    `;
  }

  if (model === "power") {
    return `
      <svg class="connectors" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line class="connector-line" x1="17" y1="18" x2="22" y2="47"></line>
        <circle class="connector-dot" cx="22" cy="47" r="1.6"></circle>

        <line class="connector-line" x1="78" y1="18" x2="55" y2="45"></line>
        <circle class="connector-dot" cx="55" cy="45" r="1.6"></circle>

        <line class="connector-line" x1="18" y1="84" x2="68" y2="57"></line>
        <circle class="connector-dot" cx="68" cy="57" r="1.6"></circle>

        <line class="connector-line" x1="79" y1="84" x2="86" y2="51"></line>
        <circle class="connector-dot" cx="86" cy="51" r="1.6"></circle>
      </svg>

      <button class="part-hotspot" style="left: 7%; top: 10%;" onclick="showPartInfo('fan', this)">
        Вентилятор
      </button>

      <button class="part-hotspot" style="left: 67%; top: 10%;" onclick="showPartInfo('transformer', this)">
        Трансформатор
      </button>

      <button class="part-hotspot" style="left: 8%; top: 78%;" onclick="showPartInfo('capacitors', this)">
        Конденсаторы
      </button>

      <button class="part-hotspot" style="left: 70%; top: 78%;" onclick="showPartInfo('cables', this)">
        Кабели питания
      </button>
    `;
  }

  if (model === "cooling") {
    return `
      <svg class="connectors" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line class="connector-line" x1="17" y1="18" x2="26" y2="48"></line>
        <circle class="connector-dot" cx="26" cy="48" r="1.6"></circle>

        <line class="connector-line" x1="79" y1="18" x2="70" y2="43"></line>
        <circle class="connector-dot" cx="70" cy="43" r="1.6"></circle>

        <line class="connector-line" x1="18" y1="84" x2="58" y2="61"></line>
        <circle class="connector-dot" cx="58" cy="61" r="1.6"></circle>

        <line class="connector-line" x1="79" y1="84" x2="65" y2="70"></line>
        <circle class="connector-dot" cx="65" cy="70" r="1.6"></circle>
      </svg>

      <button class="part-hotspot" style="left: 7%; top: 10%;" onclick="showPartInfo('fan', this)">
        Вентилятор
      </button>

      <button class="part-hotspot" style="left: 70%; top: 10%;" onclick="showPartInfo('radiator', this)">
        Радиатор
      </button>

      <button class="part-hotspot" style="left: 8%; top: 78%;" onclick="showPartInfo('pipes', this)">
        Тепловые трубки
      </button>

      <button class="part-hotspot" style="left: 67%; top: 78%;" onclick="showPartInfo('base', this)">
        Контактная площадка
      </button>
    `;
  }

  if (model === "motherboard") {
    return `
      <svg class="connectors" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line class="connector-line" x1="14" y1="16" x2="34" y2="36"></line>
        <circle class="connector-dot" cx="34" cy="36" r="1.6"></circle>

        <line class="connector-line" x1="78" y1="16" x2="70" y2="38"></line>
        <circle class="connector-dot" cx="70" cy="38" r="1.6"></circle>

        <line class="connector-line" x1="13" y1="84" x2="48" y2="69"></line>
        <circle class="connector-dot" cx="48" cy="69" r="1.6"></circle>

        <line class="connector-line" x1="39" y1="84" x2="58" y2="58"></line>
        <circle class="connector-dot" cx="58" cy="58" r="1.6"></circle>

        <line class="connector-line" x1="80" y1="16" x2="87" y2="44"></line>
        <circle class="connector-dot" cx="87" cy="44" r="1.6"></circle>

        <line class="connector-line" x1="79" y1="84" x2="75" y2="67"></line>
        <circle class="connector-dot" cx="75" cy="67" r="1.6"></circle>
      </svg>

      <button class="part-hotspot" style="left: 5%; top: 8%;" onclick="showPartInfo('socket', this)">
        Сокет CPU
      </button>

      <button class="part-hotspot" style="left: 68%; top: 8%;" onclick="showPartInfo('ramSlots', this)">
        Слоты RAM
      </button>

      <button class="part-hotspot" style="left: 5%; top: 78%;" onclick="showPartInfo('pcie', this)">
        PCIe
      </button>

      <button class="part-hotspot" style="left: 35%; top: 78%;" onclick="showPartInfo('m2', this)">
        M.2
      </button>

      <button class="part-hotspot" style="left: 76%; top: 43%;" onclick="showPartInfo('powerConnectors', this)">
        Питание
      </button>

      <button class="part-hotspot" style="left: 70%; top: 78%;" onclick="showPartInfo('chipset', this)">
        Чипсет
      </button>
    `;
  }
}

function showPartInfo(partName, clickedButton) {
  const component = componentDetails[window.currentComponent];
  const part = component.parts[partName];

  document.getElementById("partTitle").textContent = part.title;
  document.getElementById("partText").textContent = part.text;

  const buttons = document.querySelectorAll(".part-hotspot");
  buttons.forEach(button => button.classList.remove("active"));

  if (clickedButton) {
    clickedButton.classList.add("active");
  }
}

function showInfo(deviceName) {
  const device = externalDevices[deviceName];

  infoTitle.textContent = device.title;
  infoPurpose.textContent = device.purpose;
  infoPrinciple.textContent = device.principle;
  infoFact.textContent = device.fact;

  infoPanel.classList.remove("hidden");
}

function showInternalInfo(partName) {
  const part = internalParts[partName];

  infoTitle.textContent = part.title;
  infoPurpose.textContent = part.purpose;
  infoPrinciple.textContent = part.principle;
  infoFact.textContent = part.fact;

  infoPanel.classList.remove("hidden");
}

function hideInfo() {
  infoPanel.classList.add("hidden");
}

closeInfo.addEventListener("click", hideInfo);

homeButton.addEventListener("click", showExternalView);

window.addEventListener("resize", updateConnectorAnchors);

backButton.addEventListener("click", () => {
  if (currentScreen === "internal") {
    showExternalView();
  } else if (currentScreen === "detail") {
    showInternalView();
  }
});

showExternalView();
