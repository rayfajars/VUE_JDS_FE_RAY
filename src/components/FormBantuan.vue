<template>
    <div class="container">
 <div class="row">
        <div class="mx-auto col-sm-10">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="mb-0">Form Bantuan Warga Dampak Pandemi Covid-19 </h4>
                            <h4 class="mt-2">Komplek Panghegar</h4>
                        </div>
                        <div class="card-body">
                            <form id="form-bantuan" v-on:submit.prevent="submitForm" enctype="multipart/form-data">
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Nama Lengkap</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="text" name="nama" placeholder="Masukan nama lengkap anda disini" required v-model="nama">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">NIK</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="number" name="nik" placeholder="Masukan NIK anda disini" required v-model="nik">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Nomor Kartu Keluarga</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="number" name="kartu_keluarga" placeholder="Masukan Nomor Kartu Keluarga anda disini" required v-model="no_kk">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Foto KTP</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" name="foto_ktp" type="file"  required accept="image/*" ref="foto_ktp">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Foto Kartu Keluarga</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" name="foto_kartu_keluarga" type="file"  required accept="image/*" ref="foto_kk">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Umur</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="number" name="umur" placeholder="Masukan Umur anda disini" required min="25" v-model="umur">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Jenis Kelamin</label>
                                    <div class="col-lg-9">
                                        <select name="jenis_kelamin" class="form-control" required v-model="jenis_kelamin">
                                            <option value="" disabled selected>Pilih jenis kelamin</option>
                                            <option value="laki-laki">Laki-laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Alamat Lengkap</label>
                                    <div class="col-lg-9">
                                         <textarea  name="alamat" maxlength="255" rows="4" cols="79" style="max-width: 100%;" required placeholder="Masukan alamat lengkap anda.." v-model="alamat"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">RT</label>
                                    <div class="col-lg-3">
                                        <input class="form-control" type="number" name="rt" placeholder="Masukan No RT" required v-model="rt">
                                    </div>
                                     <label class="col-lg-3 col-form-label form-control-label">RW</label>
                                    <div class="col-lg-3">
                                        <input class="form-control" type="number" name="rw" placeholder="Masukan No RW" required v-model="rw">
                                    </div>
                                </div>
                                 <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Penghasilan Sebelum Pandemi</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="number" name="penghasilan_sebelum" placeholder="Masukan Penghasilan" required v-model="penghasilan_sebelum">
                                    </div>
                                </div>
                                 <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Penghasilan Sesudah Pandemi</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="number" name="penghasilan_sesudah" placeholder="Masukan Penghasilan" required v-model="penghasilan_sesudah">
                                    </div>
                                </div>
                                   <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Alasan membutuhkan bantuan</label>
                                    <div class="col-lg-9">
                                        <select name="alasan" class="form-control" required v-model="alasan" @change="onChange($event)">
                                            <option value="" disabled selected>Pilih alasan</option>
                                            <option value="Kehilangan pekerjaan">Kehilangan pekerjaan</option>
                                            <option value="Kepala keluarga terdampak atau korban Covid">Kepala keluarga terdampak atau korban Covid</option>
                                            <option value="Tergolong fakir/miskin semenjak sebelum Covid">Tergolong fakir/miskin semenjak sebelum Covid</option>
                                            <option value="Lainnya">Lainnya</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row" v-if="alasan == 'Lainnya'">
                                    <label class="col-lg-3 col-form-label form-control-label"></label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="text" name="lainnya" placeholder="Masukan alasan lainnya  disini" required v-model="alasanlainnya">
                                    </div>
                                </div>
                                <div class="form-group row mt-5">
                                     <div class="col-lg-12">
                                     <label  class="col-form-label form-control-label" for="persetujuan"> <input type="checkbox"  name="persetujuan"  v-model="persetujuan" required> Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut </label>
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <div class="col-lg-12">
                                        <input type="submit" class="btn btn-primary" value="Kirim">
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
        </div>
    </div>
            </div>
    
</template>

<script>
export default {
    name:"FormBantuan",
    data() {
      return {
            nama: "",
              nik: '',
              no_kk: '',
              foto_ktp: '',
              foto_kk: '',
              umur: '',
              jenis_kelamin: '',
              alamat: '',
              rt: '',
              rw: '',
              penghasilan_sebelum: '',
              penghasilan_sesudah: '',
              alasan: '',
              persetujuan: '',
              alasanlainnya:''
      }
  },
  methods: {
   submitForm(e) {
       
    // console.log(e)
       var foto_ktp = this.$refs.foto_ktp.files[0]
       var foto_kk = this.$refs.foto_kk.files[0]
       
       var isi_alasan = ''
       if(this.alasanlainnya == ""){
           isi_alasan = this.alasan
       }else{
           isi_alasan = this.alasanlainnya
       }
       
       if (foto_ktp.size > 2 * 1024 * 1024) {
        alert('Ukuran file foto KTP terlalu besar Max : 2MB');
        return;
      } else if(foto_kk.size > 2 * 1024 * 1024){
          alert('Ukuran file foto KK terlalu besar Max : 2MB');
        return;
      }else {
          var formBantuan = {
              nama: this.nama,
              nik: this.nik,
              no_kk: this.no_kk,
              foto_ktp: foto_ktp,
              foto_kk: foto_kk,
              umur: this.umur,
              jenis_kelamin: this.jenis_kelamin,
              alamat: this.alamat,
              rt: this.rt,
              rw: this.rw,
              penghasilan_sebelum: this.penghasilan_sebelum,
              penghasilan_sesudah: this.penghasilan_sesudah,
              alasan: isi_alasan,
              persetujuan: this.persetujuan,
          }
          console.log(formBantuan)
          alert('Sukses mengirim Data!');
     e.target.reset();
      }
     e.preventDefault();    
     
  },onChange(event) {
            console.log(event.target.value)
        }
}
}
</script>