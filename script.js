class LinkedList {
  constructor() {
    this.next = null;
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    if (this.next === null) {
        this.next = new Node(value);
        this.head = this.next;
        this.tail = this.next;
    } else {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
    }
    this.size++;
  }

  prepend(value) {
    if (this.next === null) {
        this.next = new Node(value);
        this.tail = this.next;
    } else {
        this.next = new Node(value, this.next);
    }
    this.head = this.next;
    this.size++;
  }

  at (index) {
    if (index >= this.size) return;
    let result = this.next;
    for (let i = 0; i < index; i++) {
        result = result.next;
    }
    return result;
  }
}
// const myList = new LinkedList();
// myList.append("haiiii helloooo !!!")
// myList.prepend("hello yes")

class Node {
  constructor(content, next = null) {
    this.value = content;
    this.next = next;
  }
}
