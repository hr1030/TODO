<template>
    <div id="app">
      <el-container>
      <el-header height="20">
          <!-- 标题 -->
        <h1>ToDoList</h1>
      </el-header>
      <el-main>
          <!-- 输入框 -->
        <el-input placeholder="回车添加待办事项" class="todoinput" @keyup.enter.native="add" v-model="newtodo.content"></el-input>
        <p>进行中：{{ nonenum}} 已完成：{{ donenum }}     全部：{{todolist.length}} </p>
        <!-- 列表 -->
        <el-row v-for="(item, index) in todolist" :key="index" class="list-row">
            <!-- 复选框   -->
          <el-col  :span="6" class="check" :class="{ 'red': !todolist[index].done, 'green': todolist[index].done }">
            <el-checkbox size="mini" v-model="item.done"></el-checkbox>
          </el-col>
          <!-- 编辑输入框 -->
          <el-col  :span="12">
            <input type="text" v-model="item.content" class="ipcont">
          </el-col>
          <!-- 删除操作 -->
          <el-col  :span="6" class="close">
            <i class="el-icon-close" @click="del(index)"></i>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    </div>
</template>
<script>


import storageUtil from '../util/StorageUtil'
export default {
    name:'app',
    data(){
        return {
          // 调用存储优化get函数
        todolist:storageUtil.get(),
        //  [
        //   {
        //     content: '现在开始吧',
        //     done: false
        //   }
        // ],
        // 双向数据：添加数据的属性：内容，状态
        newtodo: {
          content: '',
          done: false  //默认未完成
        },
        }
    },

       methods: {
        add: function () {
            // 去掉首尾空格
            let content=this.newtodo.content.trim();
          if (content) {//判断是否为空
            //   列表数据添加新内容
            this.todolist.push(this.newtodo)
            // input复位
            this.newtodo = { content: '', done: false }
          }
        },
        // 删除指定的index索引
        del: function (index) {
            // 找到所在的索引下标，删除一个
          this.todolist.splice(index, 1)
        }
      },
      computed: {
        //   已完成   返回true
         donenum: function () {
          return this.todolist.filter(val=> val.done ).length
        },
        // 未完成   false变成true返回
        nonenum: function () {
          return this.todolist.filter(val=> !val.done ).length
        }
      },
      watch: {
        todolist: {
        handler(items) {
          // 调用存储优化save函数
          storageUtil.save(items)
        },
        deep: true //深度监视
      }
      }

     

};


   
    
  </script>

  <style scope>

    #app {
      font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      color: #756C83;
    }

    .el-header {
      text-align: center;
    }

    .todoinput {
      margin-bottom: 40px;
    }

    .list-row {
      height: 40px;
      background-color: #fbfbfb;
      margin-bottom: 5px;
    }

    .check {
      text-align: center;
      line-height: 40px;
    }

    .red {
      border-left: #ef5f65 2px solid;
    }

    .green {
      border-left: #B9E1DC 2px solid;
    }

    .ipcont {
      width: 90%;
      margin-top: 8px;
      border: 0;
      line-height: 24px;
      background-color: transparent;
      font-size: 16px;
      color: #756C83;
    }

    .close {
      text-align: center;
      line-height: 40px;
    }

    .el-icon-close {
      cursor: pointer;
    }

    .el-icon-close:hover {
      color: #ef5f65;
    }

    .done {
      text-decoration: line-through;
    }
  </style>
