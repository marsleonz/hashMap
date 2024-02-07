function Node(key, value = null, next = null) {
  return { key, value, next };
}

function hashMap() {
  let loadFactor = 0.75;
  let bigBucket = new Array(16).fill(null);
  let capacity = bigBucket.length;
  let occupied = 0;
  const hash = (key) => {
    let hashKey = 0;
    const prime = 11;
    for (let i = 0; i < key.length; i += 1) {
      hashKey += key.charCodeAt(i) * prime;
    }
    return hashKey % bigBucket.length;
  };

  const resize = () => {
    const prevBigBucket = bigBucket;
    capacity *= 2;
    bigBucket = new Array(capacity).fill(null);
    occupied = 0;
    prevBigBucket.forEach((bucket) => {
      let current = bucket;
      while (current !== null) {
        set(current.key, current.value);
        current = current.next;
      }
    });
  };

  const set = (key, value) => {
    if (occupied / capacity >= loadFactor) {
      resize();
    }
    const bucket = hash(key);
    if (!has(key)) {
      const newNode = Node(key, value);
      if (bigBucket[bucket] === null) {
        occupied += 1;
        bigBucket[bucket] = newNode;
      } else {
        let current = bigBucket[bucket];
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    } else {
      let current = bigBucket[bucket];
      while (current !== null && current.key !== key) {
        current = current.next;
      }
      if (current !== null) {
        current.value = value;
      }
    }
  };

  const get = (key) => {
    let bucket = hash(key);
    if (has(key)) {
      let current = bigBucket[bucket];
      while (current !== null && current.key !== key) {
        current = current.next;
      }
      while (current !== null) {
        return current.value;
      }
    } else {
      return null;
    }
  };

  const has = (key) => {
    const bucket = hash(key);
    let current = bigBucket[bucket];
    while (current !== null) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  const remove = (key) => {
    let bucket = hash(key);
    let current = bigBucket[bucket];
    let previous = null;
    while (current !== null && current.key !== key) {
      previous = current;
      current = current.next;
    }

    if (current === null) {
      return false;
    }

    if (previous === null && current.next === null) {
      occupied--;
      bigBucket[bucket] = null;
    } else if (previous === null) {
      bigBucket[bucket] = current.next;
    } else {
      previous.next = current.next;
    }
  };

  const lengthy = () => {
    let keyLength = 0;
    bigBucket.forEach((bucket) => {
      let current = bucket;
      while (current !== null) {
        current = current.next;
        keyLength++;
      }
    });
    return keyLength;
  };

  const clear = () => {
    bigBucket = new Array(16).fill(null);
    occupied = 0;
  };

  const keys = () => {
    let keys = [];
    bigBucket.forEach((bucket) => {
      let current = bucket;
      while (current !== null) {
        keys.push(current.key);
        current = current.next;
      }
    });
    return keys;
  };

  const values = () => {
    let values = [];
    bigBucket.forEach((bucket) => {
      let current = bucket;
      while (current !== null) {
        values.push(current.value);
        current = current.next;
      }
    });
    return values;
  };

  const entries = () => {
    let entries = [];
    bigBucket.forEach((bucket) => {
      let current = bucket;
      while (current !== null) {
        entries.push([current.key, current.value]);
        current = current.next;
      }
    });
    return entries;
  };
  return {
    bigBucket,
    hash,
    set,
    get,
    has,
    remove,
    lengthy,
    clear,
    keys,
    values,
    entries,
  };
}

let map = hashMap();
map.set("name", "Bogdan");
map.set("a", "Bogdan");
map.set("sadasd", "Bogdan");
map.set("asdada", "Bogdan");
map.set("namei", "Salut");
map.set("name", "Bogdan");

map.set("age", 25);
map.set("city", "New York");
map.set("job", "Engineer");
map.set("hobby", "Reading");
map.set("language", "JavaScript");
map.set("color", "Blue");
map.set("fruit", "Banana");
map.set("car", "Tesla");
map.set("animal", "Lion");
map.set("sport", "Soccer");
map.set("music", "Classical");
map.set("movie", "Inception");
map.set("book", "The Great Gatsby");
map.set("country", "Japan");
map.set("drink", "Coffee");
map.set("programming", "Python");
map.set("school", "MIT");
map.set("subject", "Physics");
map.set("team", "Lakers");
map.set("computer", "MacBook");
map.set("game", "Chess");
map.set("holiday", "Christmas");
map.set("weather", "Sunny");
map.set("food", "Pizza");
map.set("emotion", "Happy");
map.set("continent", "Africa");
map.set("instrument", "Piano");
map.set("company", "Google");
map.set("currency", "Euro");
map.set("planet", "Mars");
map.set("flower", "Rose");
map.set("shoe", "Sneaker");
map.set("constellation", "Orion");
map.set("element", "Gold");
map.set("time", "Midnight");
map.set("city2", "Paris");
map.set("drink2", "Tea");
map.set("sport2", "Tennis");
map.set("subject2", "History");
map.set("planet2", "Earth");
map.set("animal2", "Elephant");
map.set("book2", "To Kill a Mockingbird");
map.set("city3", "London");
map.set("food2", "Sushi");
map.set("emotion2", "Sad");
map.set("drink3", "Orange Juice");
map.set("instrument2", "Violin");
map.set("job2", "Teacher");
map.set("color2", "Green");
map.set("subject3", "Mathematics");
map.set("language2", "Python");
map.set("company2", "Microsoft");
map.set("team2", "Yankees");
map.set("movie2", "The Shawshank Redemption");
map.set("sport3", "Basketball");
map.set("holiday2", "Thanksgiving");
map.set("weather2", "Rainy");
map.set("time2", "Noon");
map.set("music2", "Rock");
map.set("flower2", "Tulip");
map.set("shoe2", "High Heels");
map.set("element2", "Silver");
map.set("currency2", "Dollar");
map.set("fruit2", "Apple");
map.set("game2", "Monopoly");
map.set("car2", "Ford");
map.set("constellation2", "Ursa Major");
map.set("school2", "Harvard");
map.set("country2", "Australia");
map.set("continent2", "Antarctica");
map.set("job3", "Doctor");
map.set("music3", "Hip Hop");
map.set("drink4", "Coca Cola");
map.set("animal3", "Kangaroo");
map.set("book3", "1984");
map.set("city4", "Tokyo");
map.set("food3", "Pasta");
map.set("emotion3", "Excited");
map.set("element3", "Platinum");
map.set("team3", "Red Sox");
map.set("movie3", "The Godfather");
map.set("subject4", "Chemistry");
map.set("color3", "Purple");
map.set("language3", "Java");

console.log("get:", map.get("element3"));
console.log("has:", map.has("element3"));
map.remove("element3");
console.log("length:", map.lengthy());
// map.clear();
console.log("values:", map.values());
console.log("entries:", map.entries());
console.log("has:", map.has("element3"));
