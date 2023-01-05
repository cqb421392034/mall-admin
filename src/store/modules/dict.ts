import { defineStore } from 'pinia';
import { DictState } from './types';
import { listDictItemPages } from '@/api/system/dict';
 

const useDictStore = defineStore({
  id: 'dict',
  state: (): DictState => ({
    dictItems:undefined
  }),
  actions: {
    async RESET_STATE() {
      this.$reset();
    },
    /**
     * 获取全部的字典列表
     */
    getAllDictItems() {
      // const { username, password, verifyCode, verifyCodeKey } = data;
      return new Promise((resolve, reject) => {
        listDictItemPages({
           pageNum: 1,
            pageSize: 100000,
        })
          .then((response) => {
            const { list } = response.data;
            this.dictItems = list;
            resolve(list);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }, 
  },
});

export default useDictStore;
