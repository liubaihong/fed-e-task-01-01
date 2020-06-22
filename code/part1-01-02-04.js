const PENDING = "pending"	// 等待
const FULFILLED = "fulfilled"	// 成功
const REJECTED = "rejected"	// 失败

class MyPromise {
	constructor(executor){
		executor(this.resolve, this.reject)
	}
	// promise状态
	status = PENDING
	// 成功后的值
	value = undefined
	// 失败后的原因
	resson = undefined
	// 成功回调
	successCallback = []
	// 失败回调
	failCallback = []
	resolve = value => {
		// 如果状态不是等待，阻止程序向下执行
		if(this.status !== PENDING) return
		// 将状态更改为成功
		this.status = FULFILLED
		// 保存成功之后的值
		this.value = value
		// 判断成功回调是否存在，如果存在就调用
		// this.successCallback && this.successCallback(this.value)
		while(this.successCallback.length) this.successCallback.shift()(this.value)
	}
	reject = reason => {
		// 如果状态不是等待，阻止程序向下执行
		if(this.status !== PENDING) return
		// 将状态更改为失败
		this.status = REJECTED
		// 保存失败后的原因
		this.reason = reason
		// 判断失败回调是否存在，如果存在就调用
		// this.failCallback && this.failCallback(this.reason)
		while(this.failCallback.length) this.failCallback.shift()(this.reason)
	}
	then(successCallback, failCallback) {
		// 链式调用，返回Promise对象
		let promise2 = new MyPromise((resolve, reject) => {
			// 判断状态
			if(this.status === FULFILLED) {
				let x = successCallback(this.value)
				resolve(x)
			} else if(this.status === REJECTED){
				failCallback(this.reason)
			} else { 
				//等待
				//将成功回调，和失败回调存储起来
				this.successCallback.push(successCallback)
				this.failCallback.push(failCallback)
			}
		})
		return promise2
	}
}

// 测试代码
let promise = new MyPromise((resolve, reject) => {
	resolve("成功")
})

promise.then(val => {
	console.log(val)
	return 100
}, err => {
	console.log(err)
}).then(val => {
	console.log(val)
}, err => {
	console.log(err)
})












