/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5s2hyPNWes2CzFwddv61ba9MsUskH4bp1SXSkcmJTRf8nYvG5mzyHMRgC61X2KdG4fZfzuBbQGiB1vJzdhNWC6vP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NyLZp81iKVNWRY3Ab36raU4jZxUarWGgyLoGex6kwGzTytLXYkxHJr7iCurhZgY2JCzXNvPxEfrjB1BzpWE15Df",
  "key1": "5ioAyY23ZxT7LwA7Kppd9dokZai2EC5u7z6CbBtqx3PsPifpbDjesUkxbViHb6wzixmtDLir3xb5uLHbPeMFgjvX",
  "key2": "2HDqn1HY1w29HJUyWjz6b7nCTcvX8UVbWCL73QuWPbf85SKWygNTufJ6QWRZmhLHUo9USxeEFsYQVt7xWYth2G2E",
  "key3": "3NMUNKzBZexCUVoSiuDChjQ9MAyAEALquaJCAfBzhMccCTU9wRGXhsTjMAVxtwBKmXYPZJXfHY33jUPV6A3JgT2d",
  "key4": "h9eKx4868UQan9GKYMdBCBNccWyr8BwSwP1YiJyp2N3WGq6me7JvPjofGnEu66S64An8iqcTGUp1VtFw1mY638L",
  "key5": "5CaF8tMAvRDB6dzEcCUxpKoyBroyJ1SjV333MT98TGeeMS5K74Kfy67m2JBeLHbeZKiMLhPSyLSQLmSaeJQoY4Rj",
  "key6": "3LFkgXvEE9aGa3kPcuX3wGaPDokUpxhYBLs7BhPkS1A7eGSMndsP5HSby6d2iQrhSioC1zncs5p6XZqraw8E9NdP",
  "key7": "3hXKcjLRJMcLzkk6cb5Dw7Vdys1pBA83i2YUoyFM23PYGqruPiRV8T344NgzQdEv4kHZhaqyFYj3b22UgbQPyrMB",
  "key8": "5rZjhzbTUA2U1RXgctKymwARFVJgjFmEV7th1soxJtD1rCiwMxXEL49Z2QPQJ2jiEuyrhc5xHAhRiQeJM5owuGdF",
  "key9": "48rRG2S3NWYjchcySKYRQoS8NqV1XgAQAy4rsYSJjZuVNLp6D64XUUeFCYLRuHcqRA6pXk9WMMdrf4rW3Ka6AuYq",
  "key10": "2SHHToETHTKo4EA9DoV5mKH6b9YDJ8MfkJBwBqjHZLQZSzBy4GwXknJSNDXUNZnXQLGz8xQXrpnY6xQGaskoQHz5",
  "key11": "36FqWUNYARNa4DRKWH7tvghw5qqY6M4q93YNvV1XhrUjvMxxaiQtNGYQT1B1MAYE4KFQL8BgLCQb9TwC74rK2WDQ",
  "key12": "C8qWtth61p6yZi43xLnzx71oEDCcjC1s7VVyPxzxthPQPzqpvEXeEBMQfc3mTsGi4fbjy92wtgCnHks4UHVwHW7",
  "key13": "447KB6wWSGZuzAkw4p8Tc5zZBEABre3yz17bRyuxD9qRj1mDdVS2QRCwdrPTdq9htmgT4yrE6Xtsvq4mnZPKugAP",
  "key14": "5ej62SHHc5bzTb7TFm72SnAHEdwQt2WS8wG5XobJUHxxDMwzk2cXj7zaNiQHHk17nLXhqyFzZZbi8saYyHTDoxsV",
  "key15": "2SaAPsN2aZvGFdRbHdXnsuPEVttnN8koEJTTdoEKZ7UHX26Lyga3JHz6jaYM9btQevK7ju5cfhAYzjf19f45yBGt",
  "key16": "5h5jKE1jXkzVYQxFRGmFyqGBQquhwLu7tz35YqpyCeWgBzzkseCvrNGyqMgXBHpF2YUdjYizqjsbbEstZMoP48gd",
  "key17": "4VqfJhAobSKvgtNrUDewZsKbnXiLA8GUwnWyQjMzGiYGKjrq6tYrmNLPpDBRJUqzBaKVhcaRuVe2ke5fH7xnSoS2",
  "key18": "3EdrgPLUu63hWxk6uAHb2mDSEeB4QkmgoTdMuUkePR7DeZiRY8y4ZrUaUc7PJJ6no2rUYfKNvZ31JuXXx9oy79Km",
  "key19": "4XmgBG68NLpZkTGLUqJmV6ZGuA1utEQhrwRevDLfZvSFvjfxcgxrpdYXwdXBt7GZedxB9Y7STTKnDncKGc8kGoUb",
  "key20": "4epc2gYaTFWkMJ1tY7S21pyhokK9z65gqKeqqcCEtF94oLVvb3apq5TSowGqfnw91J7Ze8qmP8uLDkREz8EfibUy",
  "key21": "24EwFcuLyqFVZoaeKoCboECKmnunK2XfigjfhVPgoK6qMdy6yR7CkbqfQ8XdVduDCfQKfU5xqPFta5ZDdBSK8DJS",
  "key22": "4K5CYRXcFF27We6cpiZcqZz2si62kwaG6YJyyxfYahj6A4mf4wzG4iFFW2WMZ5TWj1V7n2kDnDzZ5xzPTfKavccn",
  "key23": "5Vq1p7W9xXmfwVj5uDu97CvodDS2vLWgrJEyBFjLuQiXmsi9RcL1i9j1BW7HSC9F7qa8M7TFsp5spm6EKFxNj644",
  "key24": "AYiAASfptxSx7t9Nx2bfUCQfQJEDeMjUrxAGCHMADaB8n9zNijqm9PS2jbnk8aNt3jZEKs5ThQonjyx67spw2GM",
  "key25": "3njApTVYeJwsaoctwdwBEDDoLexvLXaBaCMSREdRtxsBgRg6QeurprfhYuoQLPn7nYL3FJfouxD6hRcj9tJnYkDV",
  "key26": "4qRFkw29ssjJDuPPBPDE7cBynLHjFerMRnYoK2BMzmXqtMxi2hXaZrYxQ7Z6TbJzY3E8YSrwAtRVoX3HTvvxwJeq",
  "key27": "4AC74DmxqqWwpfpe75WN3D1HB5vs3YgfYFjtbh5qZQmrrmu9mwrgeQQNrvckRXpn9gxeQaNvg9dzcmJAF5a5qiDN",
  "key28": "sHYtQmmjKmQuuYqSJpD9rpM8mj1eVNA75FPzqNpbLtJ8SoTKXiYdLWqRLsp5QhPHck6BqSeuCwBMiC7qpbCVDpd",
  "key29": "3XkvJV4ujaA2sh49qkqpd9qBWNt8mfkWEjicwJQWAZPd1sc7zUgJN9sbKavDucNjuUikRxJyJH3EDLm5TvDRevS",
  "key30": "4rNKUyLrdQuDhJ3pEyuzK4GCG5nkkaRnTwrh6FyoLy7y3iHajDxd3XLobqQW7MCeN4KspcZhcvnivPm1mTeiCbqx",
  "key31": "2adASCZBNbuFsiAQ8hM1NBmmmRbMTrWNbZ9A7XLUZ2jiNu4wmSa2BiD89QyYk2Ua8LRsd7ZJNwWaj45UM9Ew4kp8",
  "key32": "5EGEuGbj6KNKKc4Wt5RjC1T2BnnCjNqdta5jQmi7wji4i4xg3VA4LZdwtYfi2bEER1C62oejqS19Xmho1cwNu9GC",
  "key33": "3S43qVzLbTAX3diFdHRVRJoMe1PbCAC1GjFgevDJnZ7A5FXGWNVnsqvXEVLGBc7CUeEcWqEBZTeWLFr4eRr91Di5",
  "key34": "28gfELSkXcsBb4932Lk6FoGBDHMqh8R5y49w9m1vmCMzySBymUVCHuJji8XAV3q7hy1MbfKxMdneoy5SdbuWtzK7",
  "key35": "5Qku7J8kxMdRZNXtk2pGFmDjuX3DNDKf8SE37BdJrnM3XV2R85vFbdfzn9pz6JXuanhCnmof23VQoAuyzHLATw6d",
  "key36": "3ExAAUaEoodPvb7yKKcUtLmqCZHb8LfZ6eMQVt9fdH1WfYGvikxY2Eaxsf7fzTSsZzNfJD7cGCSAiHes3ijPHwTk"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
