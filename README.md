### fed-e-task-01-01 作业
1. 简答题

2. 代码题
    1. 将下面异步代码使用Promise的方式改进

    2. 基于以下代码完成下面的四个练习
        1. 使用函数组合fp.flowRright()重新实现下面这个函数

        2. 使用fp.flowRight()、fp.prop()和fp.first()获取第一个car的name

        3. 使用帮助函数_average重构averageDollorValue，使用函数组合的方式实现

        4. 使用flowRight写一个sannitizeNames()函数，返回一个下划线链接的小字符串，把数组中的name转换为这种形式。例如：sanitizeNames(["Hello World"] => ["hello_world"])
    
    3. 基于下面提供的代码，完成后续的四个练习
        1. 使用fp.add(x, y)和fp.map(f, x)创建一个能让functor里的值增加的函数ex1

        2. 实现一个函数ex2，能够使用fp.first获取列表的第一个元素

        3. 实现一个函数ex3，使用sageProp和fp.first找到user的名字的首字母

        3. 使用Maybe重写ex4,不要有if语句
    
    4. 手写实现MyPromise源码