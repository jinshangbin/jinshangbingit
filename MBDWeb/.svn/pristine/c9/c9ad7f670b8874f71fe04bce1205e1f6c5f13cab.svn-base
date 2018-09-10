/**
 * Theme: Montran Admin Template
 * Author: Coderthemes
 * Component: Editable
 *
 */
(function( $ ) {

	'use strict';

	var EditableTable = {
		options: {
			addButton: '.addToTable',
			table: '.datatable-editable-one',    /*****ckl********/
			dialog: {
				wrapper: '#dialog',
				cancelButton: '#dialogCancel',
				confirmButton: '#dialogConfirm',
			},
		},
		initialize: function() {
			this
				.setVars()
				.build()
				.events();
		},
		setVars: function() {
			this.$table				= $( this.options.table );
			this.$addButton			= $( this.options.addButton );

			// dialog
			this.dialog				= {};
			this.dialog.$wrapper	= $( this.options.dialog.wrapper );
			this.dialog.$cancel		= $( this.options.dialog.cancelButton );
			this.dialog.$confirm	= $( this.options.dialog.confirmButton );

			return this;
		},

		build: function() {    /**************xkl **************************/
		this.datatable = this.$table.DataTable({
			aoColumns: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				{ "bSortable": false }
			],
			"dom": 'tprl',
			'language': {
				'emptyTable': '没有数据',
				'loadingRecords': '加载中...',
				'processing': '查询中...',
				'search': '搜索:',
				'lengthMenu': '显示 _MENU_ 条目',
				'zeroRecords': '没有数据',
				'paginate': {
					'first':      '第一页',
					'last':       '最后一页',
					'next':       '下一页',
					'previous':   '上一页'
				},
				'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
				'infoEmpty': '没有数据',
				'infoFiltered': '(过滤总件数 _MAX_ 条)'
			}
		});
			window.dt = this.datatable;
			return this;
		},

		events: function() {
			var _self = this;

			this.$table
				.on('click', 'a.save-row', function( e ) {
					e.preventDefault();
					_self.rowSave( $(this).closest( 'tr' ) );
				})
				.on('click', 'a.cancel-row', function( e ) {
					e.preventDefault();

					_self.rowCancel( $(this).closest( 'tr' ) );
				})
				.on('click', 'a.edit-row', function( e ) {
					e.preventDefault();

					_self.rowEdit( $(this).closest( 'tr' ) );
				})
				.on( 'click', 'a.remove-row', function( e ) {
					e.preventDefault();
					var $row = $(this).closest( 'tr' );
				});

			this.$addButton.on( 'click', function(e) {
				e.preventDefault();
				_self.rowAdd();
				$('.form_date').datetimepicker({
					language:  'zh-CN',
					weekStart: 1,
					todayBtn:  1,
					autoclose: 1,
					todayHighlight: 1,
					startView: 2,
					minView: 2,
					forceParse: 0,
					pickerPosition: "bottom-left"
				});
			});

			this.dialog.$cancel.on( 'click', function( e ) {
				e.preventDefault();
				$.magnificPopup.close();
			});

			return this;
		},

		// ==========================================================================================
		// ROW FUNCTIONS
		// ==========================================================================================
		rowAdd: function() {
			this.$addButton.attr({ 'disabled': 'disabled' });
			var actions,
				data,
				$row;
			actions = [
				'<a href="#" class="hidden on-editing save-row"><i class="fa fa-save"></i></a>',
				'<a href="#" class="hidden on-editing cancel-row"><i class="fa fa-times"></i></a>',
				'<a href="#" class="on-default edit-row"><i class="fa fa-pencil"></i></a>',
				'<a href="#" class="on-default remove-row sa-warning"><i class="fa fa-trash-o"></i></a>'
			].join(' ');
			data = this.datatable.row.add([  '', '','','','','','','','', actions ]);
			$row = this.datatable.row( data[0] ).nodes().to$();
			$row
				.addClass( 'adding' )
				.find( 'td:last' )
				.addClass( 'actions' );
			this.rowEdit( $row );
			this.datatable.order([0,'asc']).draw(); // always show fields
		},
		rowCancel: function( $row ) {
			var _self = this,
				$actions,
				i,
				data;

			if ( $row.hasClass('adding') ) {
				this.rowRemove( $row );
			} else {

				data = this.datatable.row( $row.get(0) ).data();
				this.datatable.row( $row.get(0) ).data( data );

				$actions = $row.find('td.actions');
				if ( $actions.get(0) ) {
					this.rowSetActionsDefault( $row );
				}

				this.datatable.draw();
			}
		},

		rowEdit: function( $row ) {
			var _self = this,
				data;
			data = this.datatable.row( $row.get(0) ).data();

			$row.children( 'td' ).each(function( i ) {
				var $this = $( this );

				if ( $this.hasClass('actions') ) {
					_self.rowSetActionsEditing( $row );
				} else {
					if($this.index()==8 )
					{
						var riqi=' <div class="input-group controls input-append date form_date" data-date="" data-date-format="yyyy-mm-dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd"> <input type="text" class="form-control" placeholder="mm/dd/yyyy" > <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span> </div>';
						$this.html( riqi );
						$('.form_date').datetimepicker({
							language:  'zh-CN',
							weekStart: 1,
							todayBtn:  1,
							autoclose: 1,
							todayHighlight: 1,
							startView: 2,
							minView: 2,
							forceParse: 0,
							pickerPosition: "bottom-left"
						});
					}
					else if($this.index()==1 || $this.index()==5 || $this.index()==6 || $this.index()==7 ){
						var riqi='<select  class="form-control"><option>下拉插件</option></select>';
						$this.html( riqi );
					}
					else{
						$this.html( '<input type="text" class="form-control input-block" value="' + data[i] + '"/>' );
					}
				}
			});
		},

		rowSave: function( $row ) {
			var _self     = this,
				$actions,
				values    = [];

			if ( $row.hasClass( 'adding' ) ) {
				this.$addButton.removeAttr( 'disabled' );
				$row.removeClass( 'adding' );
			}

			values = $row.find('td').map(function() {
				var $this = $(this);

				if ( $this.hasClass('actions') ) {
					_self.rowSetActionsDefault( $row );
					return _self.datatable.cell( this ).data();
				} else {
					return $.trim( $this.find('input').val());
				}
			});
			this.datatable.row( $row.get(0) ).data( values );
			$actions = $row.find('td.actions');
			if ( $actions.get(0) ) {
				this.rowSetActionsDefault( $row );
			}
			this.datatable.draw();
		},

		rowRemove: function( $row ) {
			if ( $row.hasClass('adding') ) {
				this.$addButton.removeAttr( 'disabled' );
			}

			this.datatable.row( $row.get(0) ).remove().draw();
		},

		rowSetActionsEditing: function( $row ) {
			$row.find( '.on-editing' ).removeClass( 'hidden' );
			$row.find( '.on-default' ).addClass( 'hidden' );
		},

		rowSetActionsDefault: function( $row ) {
			$row.find( '.on-editing' ).addClass( 'hidden' );
			$row.find( '.on-default' ).removeClass( 'hidden' );
		}

	};
	var EditableTable_tow= {
		options: {
			addButton: '.addToTable_tow',
			table: '.datatable-editable_tow',    /*****ckl********/
			dialog: {
				wrapper: '#dialog',
				cancelButton: '#dialogCancel',
				confirmButton: '#dialogConfirm',
			},
		},
		initialize: function() {
			this
				.setVars()
				.build()
				.events();
		},
		setVars: function() {
			this.$table				= $( this.options.table );
			this.$addButton			= $( this.options.addButton );

			// dialog
			this.dialog				= {};
			this.dialog.$wrapper	= $( this.options.dialog.wrapper );
			this.dialog.$cancel		= $( this.options.dialog.cancelButton );
			this.dialog.$confirm	= $( this.options.dialog.confirmButton );

			return this;
		},

		build: function() {    /**************xkl **************************/
		this.datatable = this.$table.DataTable({
			aoColumns: [
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				{ "bSortable": false }
			],
			"dom": 'tprl',
			'language': {
				'emptyTable': '没有数据',
				'loadingRecords': '加载中...',
				'processing': '查询中...',
				'search': '搜索:',
				'lengthMenu': '显示 _MENU_ 条目',
				'zeroRecords': '没有数据',
				'paginate': {
					'first':      '第一页',
					'last':       '最后一页',
					'next':       '下一页',
					'previous':   '上一页'
				},
				'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
				'infoEmpty': '没有数据',
				'infoFiltered': '(过滤总件数 _MAX_ 条)'
			}
		});
			window.dt = this.datatable;
			return this;
		},

		events: function() {
			var _self = this;

			this.$table
				.on('click', 'a.save-row', function( e ) {
					e.preventDefault();
					_self.rowSave( $(this).closest( 'tr' ) );
				})
				.on('click', 'a.cancel-row', function( e ) {
					e.preventDefault();

					_self.rowCancel( $(this).closest( 'tr' ) );
				})
				.on('click', 'a.edit-row', function( e ) {
					e.preventDefault();

					_self.rowEdit( $(this).closest( 'tr' ) );
				})
				.on( 'click', 'a.remove-row', function( e ) {
					e.preventDefault();
					var $row = $(this).closest( 'tr' );
				});

			this.$addButton.on( 'click', function(e) {
				e.preventDefault();
				_self.rowAdd();
				$('.form_date').datetimepicker({
					language:  'zh-CN',
					weekStart: 1,
					todayBtn:  1,
					autoclose: 1,
					todayHighlight: 1,
					startView: 2,
					minView: 2,
					forceParse: 0,
					pickerPosition: "bottom-left"
				});
			});

			this.dialog.$cancel.on( 'click', function( e ) {
				e.preventDefault();
				$.magnificPopup.close();
			});

			return this;
		},

		// ==========================================================================================
		// ROW FUNCTIONS
		// ==========================================================================================
		rowAdd: function() {
			this.$addButton.attr({ 'disabled': 'disabled' });
			var actions,
				data,
				$row;
			actions = [
				'<a href="#" class="hidden on-editing save-row"><i class="fa fa-save"></i></a>',
				'<a href="#" class="hidden on-editing cancel-row"><i class="fa fa-times"></i></a>',
				'<a href="#" class="on-default edit-row"><i class="fa fa-pencil"></i></a>',
				'<a href="#" class="on-default remove-row sa-warning"><i class="fa fa-trash-o"></i></a>'
			].join(' ');
			data = this.datatable.row.add([  '', '','','','','','','','', actions ]);
			$row = this.datatable.row( data[0] ).nodes().to$();
			$row
				.addClass( 'adding' )
				.find( 'td:last' )
				.addClass( 'actions' );
			this.rowEdit( $row );
			this.datatable.order([0,'asc']).draw(); // always show fields
		},
		rowCancel: function( $row ) {
			var _self = this,
				$actions,
				i,
				data;

			if ( $row.hasClass('adding') ) {
				this.rowRemove( $row );
			} else {

				data = this.datatable.row( $row.get(0) ).data();
				this.datatable.row( $row.get(0) ).data( data );

				$actions = $row.find('td.actions');
				if ( $actions.get(0) ) {
					this.rowSetActionsDefault( $row );
				}

				this.datatable.draw();
			}
		},

		rowEdit: function( $row ) {
			var _self = this,
				data;
			data = this.datatable.row( $row.get(0) ).data();

			$row.children( 'td' ).each(function( i ) {
				var $this = $( this );

				if ( $this.hasClass('actions') ) {
					_self.rowSetActionsEditing( $row );
				} else {
					if($this.index()==8 )
					{
						var riqi=' <div class="input-group controls input-append date form_date" data-date="" data-date-format="yyyy-mm-dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd"> <input type="text" class="form-control" placeholder="mm/dd/yyyy" > <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span> </div>';
						$this.html( riqi );
						$('.form_date').datetimepicker({
							language:  'zh-CN',
							weekStart: 1,
							todayBtn:  1,
							autoclose: 1,
							todayHighlight: 1,
							startView: 2,
							minView: 2,
							forceParse: 0,
							pickerPosition: "bottom-left"
						});
					}
					else if($this.index()==1 || $this.index()==5 || $this.index()==6 || $this.index()==7 ){
						var riqi='<select  class="form-control"><option>下拉插件</option></select>';
						$this.html( riqi );
					}
					else{
						$this.html( '<input type="text" class="form-control input-block" value="' + data[i] + '"/>' );
					}
				}
			});
		},

		rowSave: function( $row ) {
			var _self     = this,
				$actions,
				values    = [];

			if ( $row.hasClass( 'adding' ) ) {
				this.$addButton.removeAttr( 'disabled' );
				$row.removeClass( 'adding' );
			}

			values = $row.find('td').map(function() {
				var $this = $(this);

				if ( $this.hasClass('actions') ) {
					_self.rowSetActionsDefault( $row );
					return _self.datatable.cell( this ).data();
				} else {
					return $.trim( $this.find('input').val());
				}
			});
			this.datatable.row( $row.get(0) ).data( values );
			$actions = $row.find('td.actions');
			if ( $actions.get(0) ) {
				this.rowSetActionsDefault( $row );
			}
			this.datatable.draw();
		},

		rowRemove: function( $row ) {
			if ( $row.hasClass('adding') ) {
				this.$addButton.removeAttr( 'disabled' );
			}

			this.datatable.row( $row.get(0) ).remove().draw();
		},

		rowSetActionsEditing: function( $row ) {
			$row.find( '.on-editing' ).removeClass( 'hidden' );
			$row.find( '.on-default' ).addClass( 'hidden' );
		},

		rowSetActionsDefault: function( $row ) {
			$row.find( '.on-editing' ).addClass( 'hidden' );
			$row.find( '.on-default' ).removeClass( 'hidden' );
		}

	};

	$(function() {
		EditableTable.initialize();
		EditableTable_tow.initialize();

	});

}).apply( this, [ jQuery ]);