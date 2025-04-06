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
    "5LY3s5vdBKNSkgT2wMMKu8uc3qUiwHkeaUJVqY7g2XTxaRr9dkNyQFRFZ96zdKdg5TeoLxokWNfZr96juDsyxeGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QqH26GytiNv3V3h3NawkcKqrjiwRXt3LyHYEdo453exswnXK9pJDuTfiz3dkXCNzMaU2aNwnXiecggR3ciYcXcd",
  "key1": "8YFV321ddWM2aTGtFQiCrqcuYQLsiAvVDUbkkRA781T4iuVGc8dHJg6DSiCNW5pcCMKLCQYbnyBBq1miGe4xbF6",
  "key2": "3uJ7k1jK5EXEDn2KW6prULxgJ4zMZGvBzRKgkd9nbsc7xcvRum9koiEiDVGtkz1Gz7Lyf6G6nVn4QDbU4M4D4mWR",
  "key3": "3c6AaWQLQXHsenZVSWq3MRC7tY8ei8865ggqzKuSCg8pyMe2xGroWc8PJoA5eEcNwPWgNAvcRmR3nDkMJ3hDcy3X",
  "key4": "5KttF42GNdGzUZD9FzK7698Yg7L6Fcs9HJCmmtbQhYjyDixTjtR9h31E7VxUnzk13QSbMTrLpZMSkbMZqZnDL1vK",
  "key5": "1tW6T2Din7FPjDNdStPyfGKEamQm7zqBYiASvygjHj8rLYJ52xSdh5wER2Tu2p4jjXVYQyc2umCJLZJU7DESMUM",
  "key6": "2kF3iWNdAoyqjxn9iySZk5VqbvnfoHRDDRjtt2CeQ4SMxsFDZ8bSs9w5bEyDsFUZKCQszPRueg1SB9QHcVXg2DY8",
  "key7": "uhnpeMiJgzqVeCNZt3vyksafgEnBkL88yjkMVp2hATaRC881ts9jS3ggqv4J5eqXRHkPDA8VzHKRvMU6jp2aJcF",
  "key8": "33Xv6T2mozhWzvEFdzM6LBT5nyeMGbVgGhiyn6qf6ckK9cTcn6yNhUsEpT6UEuNsZuMicBYi3HvjxntzRrENiUar",
  "key9": "5UJ3Jcz1w574WbLKEoZ6iikdWCsPX7raePKUJ1zTnbC8TtrE9eNdgt858gANzojpkeTGREcU1pfhZK5TddxLxJUa",
  "key10": "3CXkbi7P73bkPZHmEcfXdGSpm7o6XnWWMXKiQZH5B3yLmPiKXJGNJZBje95pcFPxTsKDD1yqtqarF3h8o3SK1RjS",
  "key11": "G5zaprkprdnebi7f43qYnR5LoejYpB1FL9aUY83X56LvJJ69J6idvhWhZKov17nnAVsadxRM3ajwFYegyiAJK1j",
  "key12": "5PG8N2aTuKFXEtuwLjSmpQ3ZiMGVYx3PMZNz9Y3h5eTr975YY85FM2PuJ52UQWa1Z3v9QZqi3rDPYRGNriNqN2Db",
  "key13": "3wdM2Rcfz9gRYee5NQ5gT2zqxNamx9XUmLa8pG9oKAF1CW2p1RRMnG77gBGxKdxsXcyn1inGaaMSiEkFy8eQABKQ",
  "key14": "538tdZctS6pQ4ekcnDWTQrDKVtZYGhPKXz2EzoJuvHno9Rk7MGLBTvauTkcKqM4eCwgQPZPoS9KK6tZoWCHWnznt",
  "key15": "4FLs8qTcPHoBsdfHTNZFiZYqTJbfGiY63GmWEMW5bimTvxwDQGEc96DiZubxX1YRguVpKqHXcaxsXVEk1xycyNCU",
  "key16": "58dvnMN3suhBsW9GpPKXmsarPUGtfhvFQdfWH859yKf1PrSoE8Pw9Vfh68mN5G1vjcSv5aj9VvfZS1dZBUvxC9yj",
  "key17": "2KQTB5xRa6a2PD8yJEz611LRR2hmtHt36YQiQCtGaL7EmbGkwfw29GtSbCUdKCPjD22TZ3pYiMeswcXSu1yTmQFi",
  "key18": "591cPu424ZjvJWM2Zc1m3ghBCJ5Ydj9cAVjACkRNh5G34FkWUomMKvhpUgfCvAhP9kiyykctBVPsYCewExHHZ5tJ",
  "key19": "4UB9JbQJePSPULMXSMosZt1zUwkHKXfRWdfMPPSUCaWGubgaREFeyfb1na9qnp1ZyzVPuanjAX19ZUttQnmMPgoy",
  "key20": "CUcUZYzuY9UimVZzngESE6Ztk2Aso5psiXJhBFDRD7qahnKk8giqdWypA11JnyJCk3NV5n1jhDyJixTLC9MaTmc",
  "key21": "4iRnCnBGPchPZvVQzhM11Tqh6Q8NRRVbnaU3veGryKPbpTGqZNtFyp6hN3TYrRb6yDQbcFLBKgMAP9gnx3cBMHKX",
  "key22": "3JipZmWFLCn5PProfkc6V922X75rfHijJLPKfNJmPGzYgXJhAJYu9FmXfycFUVVWt9m6x9FDuVJLYv35JpxKrpGN",
  "key23": "3Hdrif2dQYdmUqGtM5A5aCxGRKbrcqovK1N1MjCin8ahYAFpN422GVdXmTGfmTVuncq2TwjfAu8a5fPB3NZfnAnk",
  "key24": "3ri24MYE3m7NF214F8H42zwAbcuF2WypYVVkK6dxyLpsY7vubScv9Qt4uuoWLPqyba3SLM7Xefmcn8t2dBQY5yhd",
  "key25": "22uHyQuhdE8WtomsPxN3XJJgTmyyHzgTCia3qy3DGRUVqW2zvqpA7GDxAyfMhMPt4HuKtBtKrqYQ4yN1S6kgVqhB",
  "key26": "fihH8zrgeRtUMVcYu34r37k9MdA5yWo7h6M94swYTzqSdUytFyoACEycQAmrm49frd9NtqCZotCN8SqtzHgN4DW",
  "key27": "Lpv56BcA5xihNaKsY9nsK28Hd3K3yQ5Kd2qpsG3bdRoCmxYEF1CGLDMjcDr194LMA2YoXU7xZzLZTwinayMDpnW",
  "key28": "65s55oYhKq5veQpR5wSBpCgBJtFuF634ri3ocH13523uSrrJoeLh7x2ymNWZh1wSKWoifzF2bx7LoVw1cUncaCTn",
  "key29": "2CnkGtji6Bz9Wty71ynhvsBQnq9dnqb3D35kSf3ATzmapkuqo1muj8uemkzmfdejP3h3PtaGedAkxPu24khJn92k",
  "key30": "5FPerJGRxZ1x9iLhMVCdohdk7RLNGKsuhmeLUwn64YFsUAs3pNW6gkxogkbLGw2Svu91JXvcpdeWCuJEuDLrav7n",
  "key31": "2XnPpn76Yv3nseM1jdMe7EpLNPFiiHfXsw72fMkqLfvDmViNTydL7s2nuQTieAHNvZHbKVV8mxvmZky1ua59xTcT",
  "key32": "4XvxdGaBhWkekQ9sBKsbQViAQwQEQV7QUtXA54EJLchTUF9LhsXjA8vBQs4cBgAt8Myy4kKcZgXvb23LSJmhAYLG",
  "key33": "2GsdiEL94mnm5iBM9MyQJHgvTEvtq6KqsbrnS2sfmp7yDExgQKaDEUXoqM33EvDiJZMVLQGp6vY6QxHyViA1gej2",
  "key34": "2s7kvUvhD1Nmx3twLdxyiYn9w8qx4Q7ihdHi4rGKpFtqCTgsHgzTPtLDzvJ4UuDnSt9ztyUCENnGhAezebPEViUh",
  "key35": "HvUC32kfsWUVhJSZcvTctmiWpd4QmZE2J2PhaViJCXfsbxAbBLreuM4GAWCsBuuVWfQKzs1rG3kZxC9sAzVvuLy",
  "key36": "EiUAVjDpnZpWJ7VUawN9etwaK6b2hyDZCX18oS2bhupdkr3fcfW81ksKaVXdc9QAbmosTWRqcGmaKwJXumYdpTJ",
  "key37": "3dBUzWgS5d4WpJ3BHdxeQKfRptALvi9enGWHtR7RKbTHhMHygKGMWCKWrRceynxryTf1qEFGvLPLxK3GH1vbTjfj",
  "key38": "4XqXgULWrfPHA35wfJVvvTVbPBqFNcbx5uPZaUFA85uF3Y8MZA3LjXpoerLyg7eP6zGNBAem94j6wC2ZYxqn8vx2",
  "key39": "5rei71ATTGsdvTdwF9Do3PJe6jBetbsMPtUZJEiAXcdyRHFEHRPVQtCuPCZsW4hPpFT5GEjSdBKsMQu6pDLSLg7C",
  "key40": "3D5eQpc7knnVEX3dbY1ZHnAtkd146t35Ppdez2rvukQrNHc65JR3B9bZCUfUHsRkuZSVQy2o7undFZe77PTNKTCK",
  "key41": "ozMxgdyAj1nxbha3tH5T7tpxhHR4sVX8C1GPSbwthKjC4u6Ak9PvFcXjZc4WGCZEAqey8Q7pxjcGTRh2jMVhKLs",
  "key42": "2FSaLmVnvLvmePjT6VcU5nXi9qChvnnuMP6D77v8ffmFuZMZXdt5yKNtEk1WXf1yHSWRsrks1ZX82jf4jY2Jvpui",
  "key43": "3PWwxxfvMYovjdFK63AT3sLKBFrQ1g8ZZe9ywYU745zPV8BNtRxQ3Ui8HpT91GtLC9kwFvmXCeWSTvzbaLFeomou",
  "key44": "3NMBT4RdwCeC8YUWtQfYSayJZPGAks2n1kWfmx9jTpwrhNmTSqjvfEzGRsUeXdQ98TN7Hfg1cQY13qB7AgA83hso",
  "key45": "64A587jGB2z7Jjnmu6Kmv2WQLiYbpCFAg5QXbBmYSdSxpkMmxEEGyRQffzYjLtTASAULmLt7VhEgUJLGy59ndz12"
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
