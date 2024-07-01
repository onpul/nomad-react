// 타입 만드는 방법1
type Words = {
  [key: string]: string;
};

// 타입 만드는 방법2
// Word 클래스의 역할: 타입 정의를 위한 변수 선언
// 생성자에서 term, def를 초기화
class Word {
  constructor(
    public term: string, // 용어
    public def: string, // 의미
  ) {}
}

/**
 *  접근 제한자(Access modifier)
 * public: 어디에서나 접근 가능, default
 * protected: 해당 클래스 혹은 서브클래스의 인스턴스에서만 접근 가능
 * private: 해당 클래스의 인스턴스에서만 접근 가능
 */

// Dict 클래스의 역할: 단어의 생성, 수정, 삭제 처리
class Dict {
  // property가 constructor로부터 바로 초기화되지 않는 부분
  // 중요1-property를 만들고 -> 생성자에서 원하는대로 초기화
  // private로 설정하여 생성자 내부에서만 초기화하도록. 이유 -> 정보은닉?
  private words: Words;

  // 질문: 생성자가 왜 필요하지? -> 수동으로 초기화
  // 생성자 내부에 전역 변수 words 를 두면 왜 안 되지?
  constructor() {
    this.words = {};
  }

  // 테스트용 더미 데이터 생성
  setData() {
    // 더미 데이터 객체에 직접 추가함
    this.words = {
      ...this.words,
      dummy1: "더미데이터def1",
      dummy2: "더미데이터def2",
      dummy3: "더미데이터def3",
      dummy4: "더미데이터def4",
      dummy5: "더미데이터def5",
    };

    // this.add(new Word("dummy1", "더미데이터def1"));
    // this.add(new Word("dummy2", "더미데이터def2"));
    // this.add(new Word("dummy3", "더미데이터def3"));
    // this.add(new Word("dummy4", "더미데이터def4"));
    // this.add(new Word("dummy5", "더미데이터def5"));
  }

  // 전체 데이터 확인
  getData() {
    console.log("--- getData() 호출 ---");
    console.log(JSON.stringify(this.words));
    return "" + JSON.stringify(this.words);
  }

  // 중요3-Word 클래스를 타입으로 사용
  // #메소드1 : add / 역할: 단어를 추가함, 반환값 없음
  add(word: Word): void {
    console.log("--- add() 호출 ---");
    // debugger;
    if (this.words[word.term] === undefined) {
      // 매개변수로 넘겨받은 단어가 전역에 없으면
      this.words[word.term] = word.def; // 전역에 추가
    }

    // 테스트용
    // this.getData();
  }

  // #메소드2 : get / 역할: 단어의 정의를 리턴함, 반환값 있음
  get(word: string) {
    console.log("--- get() 호출 ---");
    return this.words[word];
  }

  // #메소드3: delete / 역할: 단어를 삭제함.
  delete(word: string) {
    console.log("--- delete() 호출 ---");
    // !TODO: 넘겨받은 key 값에 해당하는 index 삭제 후 리턴
    return [...[this.words], delete this.words[word]];
  }

  // #메소드4: update / 역할: 단어를 업데이트 함.
  update(word: Word) {
    // 키 값 모두 필요
    // debugger
    console.log("--- update() 호출 ---");
    if (this.words[word.term]) {
      // 용어가 같고, 의미를 수정할 경우
      this.words[word.term] = word.def; // 의미만 수정
    } else if (this.words[word.def]) {
      this.words[word.def] = word.term; // 용어만 수정
    }

    // !TODO: 용어 수정인지, 의미 수정인지 추후 추가 구현하면 좋을 듯~
  }

  // #메소드5: showAll / 역할: 사전 단어를 모두 보여줌.
  showAll() {
    console.log("--- showAll() 호출 ---");
    // console.log(JSON.stringify(this.words));

    // 이후 REACT 구현 코드가 오겠지?
    let showData =
      "--- 모든 단어 노출 start ---\n" +
      JSON.stringify(this.words) +
      "\n--- 모든 단어 노출 end ---";
    return console.log(showData);
  }

  // #메소드6: count / 역할: 사전 단어들의 총 갯수를 리턴함.
  count() {
    console.log("--- count() 호출 ---");
    console.log(Object.keys(dict.words).length);
    return Object.keys(dict.words).length;
  }

  // #메소드7: upsert / 역할: 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
  upsert(word: Word) {
    console.log("--- upsert() 호출 ---");
    if (this.words[word.term] || this.words[word.def]) {
      // 단어, 뜻 중 하나라도 있을 경우
      this.update(word); // 업데이트 실행
    } else {
      this.add(word); // add 실행
    }
  }

  // #메소드8: exists / 역할: 해당 단어가 사전에 존재하는지 여부를 알려줌.
  exists(word: string) {
    console.log("--- exists() 호출 ---");
    if (this.words[word]) {
      console.log("'" + word + "' 는 사전에 존재하는 단어입니다.");
      return true;
    } else {
      console.log("'" + word + "' 는 사전에 존재하지 않습니다.");
      return false;
    }
  }

  // #메소드9: bulkAdd / 역할: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
  bulkAdd(arr: Words[]) {
    // [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
    console.log("--- bulkAdd() 호출 ---");
    arr.map((val) => {
      this.add(new Word(val.term, val.definition));
    });
    // new Word();
  }

  // #메소드10: bulkDelete / 역할: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
  bulkDelete(arr: string[]) {
    // ["김치", "아파트"]
    console.log("--- bulkDelete() 호출 ---");
    arr.map((val) => {
      this.delete(val);
    });
  }
}

// const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();
// dict.add(kimchi);

// 테스트용 로그
console.log("--- 진입 ---");
console.log("--- 더미데이터생성 ---");
dict.setData(); // 테스트 더미데이터 생성

// 실행 예시
dict.add(new Word("어쩌구1", "어쩌구의뜻은저쩌구"));
dict.get("어쩌구1");
dict.delete("어쩌구1");
dict.update(new Word("dummy1", "더미1수정합니다"));
dict.showAll();
dict.count();
dict.upsert(new Word("없음", "없는단어추가했음"));
dict.upsert(new Word("dummy1", "더미1수정2번합니다"));
dict.exists("dummy1");
dict.exists("온풀");
dict.bulkAdd([
  { term: "김치", definition: "대박이네~" },
  { term: "아파트", definition: "비싸네~" },
]);
dict.bulkDelete(["김치", "아파트"]);
