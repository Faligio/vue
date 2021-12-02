<template>
  <div class="row">
    <div class="col mt-3">
      <div class="card">
        <div class="card-header">Configuration Globale</div>
        <div class="card-body">
          <div class="form-row">
            <label for="inputName">Nom</label>
            <input type="text" class="form-control" id="inputName" v-model="propName" />
          </div>
          <div class="form-row">
            <label for="inputDescription">Description</label>
            <textarea
              class="form-control"
              id="inputDescription"
              rows="3" v-model="propDescription"
            ></textarea>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputTemplateID">ID du Template</label>
              <input type="text" class="form-control" id="inputTemplateID" v-model="propTemplateID"/>
            </div>
            <div class="form-group col-md-6">
              <label for="inputHostnameTemplate">Nom d'hôte du Template</label>
              <input
                type="text"
                class="form-control"
                id="inputHostnameTemplate" v-model="propNameTemplate"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="inputMemory">Memoire</label>
              <input type="text" class="form-control" id="inputMemory" v-model="propMemory" />
            </div>
            <div class="form-group col-md-3">
              <label for="inputDisksize">Taille du HDD</label>
              <input type="text" class="form-control" id="inputDisksize" v-model="propDisksize" />
            </div>
            <div class="form-group col-md-3">
              <label for="inputCore">Coeur</label>
              <input type="text" class="form-control" id="inputCore" v-model="propCore"/>
            </div>
            <div class="form-group col-md-3">
              <label for="inputSocket">Socket</label>
              <input type="text" class="form-control" id="inputSocket" v-model="propSocket" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputLogin">Login</label>
              <input type="text" class="form-control" id="inputLogin" v-model="propLogin"/>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword">Mot de passe</label>
              <input type="text" class="form-control" id="inputPassword" v-model="propPassword" />
            </div>
          </div>
          <div class="form-row">
            <label for="inputSSHKey">Clé SSH</label>
            <textarea class="form-control" id="inputSSHKey" rows="3" v-model="propSSHKey"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from '../const.js'
export default {
  name: 'Formulaire',
  computed: {
    propName: {
      get () {
        return store.name
      },
      set (propVal) {
        store.name = propVal
      }
    },

    propDescription: {
      get () {
        return store.description
      },
      set (propVal) {
        store.description = propVal
      }
    },

    propTemplateID: {
      get () {
        return store.TemplateID
      },
      set (propVal) {
        store.TemplateID = propVal
      }
    },

    propNameTemplate: {
      get () {
        return store.NameTemplate
      },
      set (propVal) {
        store.NameTemplate = propVal
      }
    },

    propMemory: {
      get () {
        return store.Memory
      },
      set (propVal) {
        store.Memory = propVal
      }
    },

    propDisksize: {
      get () {
        return store.Disksize
      },
      set (propVal) {
        store.Disksize = propVal
      }
    },

    propCore: {
      get () {
        return store.Core
      },
      set (propVal) {
        store.Core = propVal
      }
    },

    propSocket: {
      get () {
        return store.Socket
      },
      set (propVal) {
        store.Socket = propVal
      }
    },

    propLogin: {
      get () {
        return store.Login
      },
      set (propVal) {
        store.Login = propVal
      }
    },

    propPassword: {
      get () {
        return store.Password
      },
      set (propVal) {
        store.Password = propVal
      }
    },

    propSSHKey: {
      get () {
        return store.SSHKey
      },
      set (propVal) {
        store.SSHKey = propVal
      }
    }
  }
}
</script>
