/*jshint unused:false*/

(function(){
  'use strict';

  $(document).ready(init);

  function init(){

    $('#login').click(login);
    $('#seed').click(seed);
    $('#getForest').click(getForest);
    $('#forest').on('click', '.tree.alive', grow);
    $('#forest').on('click', '.tree.alive.adult .chop', chop);
  }

  function chop(e){
    var tree = $(this).parent();
    var treeId = tree.data('id');

    $.ajax({
      url: `/tree/${treeId}/chop/${userId}`,
      type: 'PUT',
      dataType: 'html',
      success: t => {
        tree.replaceWith(t);

        //another ajax call
      }
    });
    e.stopPropogation();
  }

  function grow(){
    var tree = $(this).parent();
    var treeId = $(this).data('id');

    $.ajax({
      url: `/tree/${treeId}/grow`,
      type: 'PUT',
      dataType: 'html',
      success: t => {
        tree.replaceWith(t);
      }
    });
  }

  function getForest(){
    var userId = $('#username').attr('data-id');

    $.ajax({
      url: `/forest/${userId}`,
      type: 'GET',
      dataType: 'html',
      success: trees=>{
        $('#forest').empty().append(trees);
      }
    });

  }

  function seed(){
    var userId = $('#username').data('id');

    $.ajax({
      url: '/seed',
      type: 'POST',
      dataType: 'html',
      data: {userId: userId},
      success: tree=>{
        $('#forest').append(tree);
      }
    });
  }


  function login(e){
    var data = $(this).closest('form').serialize();
    console.log(data);

    $.ajax({
      url: '/login',
      type:'POST',
      data: data,
      success: r=>{
        $('#login').prev().val('');
        $('#username').attr('data-id', r._id);
        $('#username').text(r.username);
      }
    });
    e.preventDefault();
  }












})();
