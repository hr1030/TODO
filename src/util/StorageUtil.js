

// 存储数据优化
const STORAGE_KEY = 'todolist'
export default {


      get(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)
          || '[]')
      },
      save(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
      }

}