(()=>{
    class Review{
        //初期化
        constructor(){
            const $doc = document.getElementById('js-rev');             //js-revの情報
            const $columns = $doc.querySelectorAll('[data-column]');    //列情報
            const $rows = $doc.querySelectorAll('[data-row]');           //行情報]

            let index = 0;
            const len = $columns.length;
            while(index < len){
                $columns[index].addEventListener('click',(e)=>this.columnsHandleClick(e));
                index++;
            }
            //クラスにするとforEachだとcolumnsHandleClickが読み込めない。eをyにしてみてもいいかも
            // $columns.forEach(function(e){
            //     console.log(e);
            //     e.addEventListener('click',(e)=> this.columnsHandleClick(e));
            // })
        
            $rows.forEach(function(e){
                e.addEventListener('click',(e)=> this.rowsHandleClick(e));
            })
        }

        //列が分割しているものをクリックした際の処理
        columnsHandleClick(e){
            e.preventDefault();
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
            const $targetIdx = $content.dataset.column;

            if($content.style.display == "" || $content.style.display === 'none' ){
                //クラスにすると$columnsが読み込めない。ここあとで対応
                $columns[$targetIdx].style.display = 'block';
            } else {
                $columns[$targetIdx].style.display = 'none';
            }
        }

        //行が分割しているものをクリックした際の処理
        rowsHandleClick(e){
            e.preventDefault();
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
            const $targetIdx = $content.dataset.row;
            
            if($content.style.display == "" || $content.style.display === 'none' ){
                $rows[$targetIdx].style.display = 'block';
            } else {
                $rows[$targetIdx].style.display = 'none';
            }
        }
    }

    const review = new Review({});
})();