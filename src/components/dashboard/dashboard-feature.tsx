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
    "24STQopxPc2wa9eP4SUTBSSi9AcL37anQdVt5FJQWQbvHREwjAouMEu4PnjZVMq5wnu1Pxi6LD4LviBCD9PDZatz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GgQ28G184BqoS4ceL4nNDiiEHASYUMBJsH8ouS6bBx4PbBDCtRiN9Pbs9Qi1gx7Dyh5rG5t9GirYPpu1Kd56P5b",
  "key1": "41YvVh2urNhs6rELGiuiN5biMjbPCdxZUASnJLXqFPJVFYYghrzXwQoSCGRzCkyvCXMdXq3izgDKB8NnZ3TR5qgA",
  "key2": "4BgeXPdBLjfQs1947vSxZPaanynmyoJefQiCTBamsdoD9ga3Y7Cm8aHFWofnSmPsJzo3YnbV8kdhY7CubBB6RPGa",
  "key3": "2kPSfcyCsiW48fr78wB1zk5yrTVkhQr5HeenznRLZ4kLACQ8X8vXftmc4593uCBJDwE5nimSfHkAuin59bWLbNpr",
  "key4": "2RtPUuoJqzZSaVuGkdKjemmUUhNF46exAUAQHLNNaXo5zobrHnV9nhyCRdVwteGhWyst3mTmdt9yhZG7yLZkDD4C",
  "key5": "mV9R1RWFowkdUUSPgSqigukYZrV8CVCQPtiB7u2urHGFbtzpjWizRSbyqCpMN59hh9ZS9bhGjmnQBt48uaN26PM",
  "key6": "X1Ryc8tN8nwTTJmtQunxW4JM8d8JFbbs84vPuH1QTxn5mnv1voHwbQprVqPQyo5cNHT4p2GQaFbsyznXf5jPjUc",
  "key7": "3nW2VmqaLs6Se2JeJiZJa7xgm1gnbdB7C4VKeqH7Dzet93hpX8YkFT9qMCJSaZ8rsVUCuvS9WDBaxjfRo916Ftmz",
  "key8": "4AVFUH1b5HZByXuqMdbVPPfsU5vmwJUBN1UvNfLiMahuFp8A1aUyuGVRXvFXWfLU4MtG9XbkqAJuNPwbLHYhhH8Q",
  "key9": "3hccUkfCVcxZDiqpnkJZZWGSEWFeBDGzN8JeRptXjaDQunC7UEkvxhprDnHkG86ie3KAfu6q6T9xX5c6mpUHUE7e",
  "key10": "2kmg1LqooVx1ev6WrMP7a5jnAPhSkPfWJns5sLG8Z8xMviJzEkJ1x3ivhQE4EcYgFHRTqS9wvPi2MpmonLi5Paja",
  "key11": "WWkj2BbNuLDPqPDdwK4oftJVKNmoNVtfmaYrrhJWfqLDzg8JYot7cfq9eFMbTCUJqwDdEgjQo5s7T1wTDzKkmfw",
  "key12": "3FaSGhoShRKEzpoXXKfVHMQBdHu1UT2ivjukr2DAW2R6NRiE5id6X84hGM2EZrHvtyUhCf1ECUT6uNjLDUGkxLWN",
  "key13": "KJ8FvSxDZHPtsmTyTiSypmdiTaxQ1WwvFdu8dG4g4dMKGB5QBFqHmBNM6Rni2yYJSpY4c2xww62eW78CseRv5Ea",
  "key14": "45fVCGYuqzNF1R2hAn1UZ59wWXphYN5dudKGjrFdZwaAwHtNmq6uuFmv4ELfR9Qv5Pm1eS77WocGxVQiuLDksHHX",
  "key15": "cnYgnFjBuPWKhPaGRtGKTA92KEuwGLyimZrbRTc8Mn8QKYi8MBufdD6XitPkU7dABWa76YiBXefr1xz73A5rfte",
  "key16": "5pDSr5KppZVKix7rVC31azNwikqr23pk3zTd8qNfKGNmnzMBA2fyJFQ54rsimRfPPMQvhTuDDeknnwZMkM9Wexht",
  "key17": "564nsw8couHuugrSTA6d2pQC1p6rVjPqmEHnS6xcKwWJqTUXcCwbDKEXyG5Ya63Eh1i1is3EQCbWcnfrSrM9XnFg",
  "key18": "3CpNJL3o5tBs8fKMnB6s8tmM7ugxoXvUJbVbmF8Vw8dv9YHQFfGiA2hEJs2mRSTC5VZTcRrbkYXBPyd4uKTw38Ns",
  "key19": "32fAWTkfkoPY4m2tho2c4g14R1PzoBAansPx3nJhVnra6UemYvTg7Y7WPReB9Rcv6BHGy86TgPNNoG5MRD3dJEcK",
  "key20": "3sQFX5JVwPSYFzAd9NHW8z7VpmPMUsFi3b2WyjDDeTwZLyuYsqidUhqKgJirymLD5EogDdW9nCb4Tu65bYUAKsx8",
  "key21": "2r2Gryr8tsM5tMYggyvse6ctbJVpTDCnD2jgo25EWj8vCDjg1f69eAbHvpct9QngfmEADkr6VPeNRaTojmU8WJNX",
  "key22": "4dLjFrcG2oaZzbBELbYwztNXW5QdQsdFndZ5XJniF5aeM6gMoopBQZbfNTMqFGC3nSs3XmxPsHYtPtM2mAjGgE9v",
  "key23": "5tbCJQThpaw2Xazsd1vo4GPrLWkWtyZZcE5SMgtKAkk8hd5S8GF4CqAyx6c82XwsmV1D6UbXmjQbnL6DTX8s7qp",
  "key24": "4JH5cVCEfYzgrX6iTK3Ts6Sfrsg4ZXWLsY7DYBBs1tVdciguqbb8u5XPSKiuUuhsUJbkBsR7MsGe9nqXTMiqJYHm",
  "key25": "429sYvrN4VkYBwQHBab6f1kwB7UnwtVZrvNbsXEFxinWBNucipr71Kj9UMvn2i6mYtTiLwidSqWbrDFVG8Bw6MF5",
  "key26": "nMAwM95VkTcbWQDAgAtKagpATZgf5CEFZ7JGFHTkXqupA9tvCY4aWKgYbeiycDYjTgwNDPswub8UJbvW2CDRw7c"
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
