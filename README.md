### fed-e-task-01-01 作业
1. 简答题
    1. 谈谈你是如何理解JS异步编程的，EventLoop、消息队列都是做什么的，什么是宏任务，什么是微任务？

    答：异步编程就是不会等待这个任务的结束才开始下一个任务，后续逻辑一般会通过回调函数的方式定义，任务完成后自动执行回调函。

    EventLoop是事件循环机制，用来监听调用栈和消息队列，当调用栈中的任务执行完后，EventLoop就会把消息队列中的任务放入到调用栈中执行

    消息队列可以理解成待执行异步回调任务列表，当异步执行完成后，会将回调任务放入消息队列中，当调用栈任务完成后，会按顺序执行将消息队列中的任务放入调用栈执行。

    宏任务就是正常的异步回调任务，异步执行完成后，回调任务进入消息队列，但是微任务是特殊回调任务，异步执行完成后，直接进入调用栈，不用到消息队列等待。
    

2. 代码题
    1. 将下面异步代码使用Promise的方式改进
    答：./code/part1-01-02-01.js

    2. 基于以下代码完成下面的四个练习
        1. 使用函数组合fp.flowRright()重新实现下面这个函数
        答：./code/part1-01-02-01.js

        2. 使用fp.flowRight()、fp.prop()和fp.first()获取第一个car的name
        答：./code/part1-01-02-02.js

        3. 使用帮助函数_average重构averageDollorValue，使用函数组合的方式实现
        答：./code/part1-01-02-03.js

        4. 使用flowRight写一个sannitizeNames()函数，返回一个下划线链接的小字符串，把数组中的name转换为这种形式。例如：sanitizeNames(["Hello World"] => ["hello_world"])
        答：./code/part1-01-02-04.js
    
    3. 基于下面提供的代码，完成后续的四个练习
        1. 使用fp.add(x, y)和fp.map(f, x)创建一个能让functor里的值增加的函数ex1
        答：./code/part1-01-02-03-01.js

        2. 实现一个函数ex2，能够使用fp.first获取列表的第一个元素
        答：./code/part1-01-02-03-02.js

        3. 实现一个函数ex3，使用sageProp和fp.first找到user的名字的首字母
        答：./code/part1-01-02-03-03.js

        3. 使用Maybe重写ex4,不要有if语句
        答：./code/part1-01-02-03-04.js
    
    4. 手写实现MyPromise源码
    答：./code/part1-01-02-04.js