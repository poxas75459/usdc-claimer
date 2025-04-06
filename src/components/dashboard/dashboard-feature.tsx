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
    "zWuUbpW1ecVHm8tm6tGhNxXTw3mFDnLaed9vH7bGCFpJVBTKaggLaTBnznLJV3A9UeTjExvuwvHzZd8EFWjzmVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ryHBnhVFcLSNhpXthyiW4rdWVeZPUaC63GCqAe8UN9bJLfWLynh8jP82ozXbEB3Zkq41dfgCunSAZsWiAoYRX2B",
  "key1": "4cLK8fWKr8MuQPTdGT6ieSfPwEPxFR2KusnYorA7vD9bhdov7yKKYoiLsPABKQauLDEBEwoMEsQo2CVRGt4moD28",
  "key2": "Q2vN76a25b7v1n3mFPVUieGpYDbWU2RzbiAjQWGyvxhw2rJ3oQZDej7JLsye84YwbdJuV8gDAeJxiQm3jMozYWu",
  "key3": "2VDd3o3psQjRGJAFAZF8eFoG7GRQDjueUePyVNqQpcJ4mtTxZsYRWjZrK6kYwE6vM77W6qZHLV5j3oyn5pMwAGa9",
  "key4": "PNXpcCMwQAMMkRVgt1ujMCLL7hK5c6ZYxzMyMYvGCgBeXgb6Hm2kMydA5PQhriUWtjSLQya7qJx427bbDPJeJxk",
  "key5": "5xeEL77ys31VQjna7wvQigVRyz1hcQnCnJ49gJij6pL8RcbQ7Lumc7KWax1iAkaXzymyAC72dPY6ukZFhfkRKDFF",
  "key6": "pKbRsZyKpWKvdKJKXFStZ2poNkedC4fqAXbJe55W4K67SSC8LUvWpiaJPoR7XxoPkp84FvPXcNk94uWeLifMhL7",
  "key7": "5X38MasnhVbQ8W5qTGXttqqAyrmdAfwejfgVTJq74mtoKvfxRh84uaaqZUtRYTHbbMa48axWJtywyYZPZWgfFctq",
  "key8": "3kSrDguLF1TnuUYHQv2BJ8zexMABTRkzWyRNsNjqENEQH2s3G9MuBorW9K68FMN5F2dHHV58TRKJzMSEzQAy8D9x",
  "key9": "62XCTXoP2VsDvUx9meKGAYaLb6QuZR7Bceids2KduvWuQPFLnw7iw1XECd4d3Rw68yTP7S7j5vS9WA7GKEoeXJHj",
  "key10": "58JDLgkqybetTHoDdoptdDMHu6yDWkTJdZ2NeFgsW7UEpc3x1e4E8uE1knVGHotaU8cpSTX8CoFvrRnaXEzX623A",
  "key11": "3AZowKLjrxicpRMx4nU2qbgoH9zXXRc8x79iaFm3C9RrnNWPy8y5CAw39aMy1C6kDrUr6nwvjj8YMS5NJL4nnbLN",
  "key12": "5o6ajyojZinzA2rAFAWhP3XvpA9EyCbUq1YN4LaPAeY8hfXqAcSi24QpqzxbV4KZrLg3QVSFCeTKTSLRUcezRFky",
  "key13": "4WKg1zTVkKVB5T2z9nJVuDZCPyPGBuXf7vJez2miZZUZmp2uww3r633P1jM7QHcqTnqTBFDrVJTQkWHY3XMT8nNE",
  "key14": "2JpTkPKf8fZP929x1N2NX6H97MJ9E6UpnyLyT5DxoMRkVpiVL6Dgce8ARhdU3XG5puc4CmtPVc3aVxPhrmhiStMb",
  "key15": "2vWRC773iPMGB57qpfzXSAYozkzUi9XFBpdhdrb8fjnDrEGHFHB62QKgzHzExUTJsqoHuixP6tBJmHmu6cDKtna4",
  "key16": "3SZL8534gHbebV65HF6hc89JHhLixPB5eeQH11GsUPDFx6PY4i4KhRRUsHfRKiw6ovZX1U4aToi2vjX3wvS7wxqV",
  "key17": "3fM21n9VVwhN83kj79JN2QhFN7bfAYmjuA8ARuK3LrQQz9nS194JquBDMN4K3t6z2QKiH1KhfbGtVLEmwNbg77zE",
  "key18": "VSUJrZvJxRPoRytgiFpxNWdGrawqxMsgFxhGhE3Nn6pKtcgkFmZuCw5MY1ZXQWGYV5VdyieMgFFhbY7k8gTjkCW",
  "key19": "3CWuhnzZSMyEDwfsn912kaJhFmfLt2PpnfbDH1Hgqx8aGEM7no7FpjoShLHLK4pFZ75a8i1ivXjZS6XiQwQhKPsi",
  "key20": "2xZ6qYFicHDbXxrm1CuqEUXsF1QTJ7zWk49iKh9SH5D6T3mMY1WsV2yp5aztdtjcJvzBeYhrE4cQQ2Cm4fuX3ZcS",
  "key21": "5K2hiwJstDqygm34Badb4HqWsjqaWiBHb7e16bTf1pgqaBAxJKVbvzdzBt1LUTf7wMwxRLDYVK1UYukJHt2WnAsN",
  "key22": "5uNrP48bRNjZMM4RLDjoXKh5zaXgubWNvzgBdafSjFeBNmkQUjuRnm1QUoUBGzT5bdfjcnXtdzKheP3onKpFp8F8",
  "key23": "53gmLgLm7c9zGPoTsakKe3wk56XrvSeLxwfAGjb89mvTkyL75bmzpf3kNQDzFcbLkUTHDr3RqqDNU8JRa3R1BHeR",
  "key24": "22WvWz7ofq4pAeqiFaimV9Za9w7XmJbWzxdBztiLDNFZUZtdTUEnS3x9LVxSX1gqmT1uvYr5RZKnqxfcWnp9LMPh",
  "key25": "3A3kZuQBHf8sM8nu8S6Ve37E8jfH74AxoDuUrtGMYfueP43rdFK2Lf5dQENhZUdhhJnTG9hSWB1zSHmMu1XGsTL6",
  "key26": "2ejpoN8q54iutCnn4vJs7Ty4hLyMUWLv1b1M8GaAURQKMcVdmxk7Cmt2EzgPBZya3rtw2Rr7Y7qDaxsH8Pxgy1BR",
  "key27": "4bWo7Fdq5GwAbquZEYc4jEQYEvtFNUtkhdAnWbXLESo9Thc7nKA5gyJuvSTRuzKdhJcn1aCzsi6H7J73MZr12mxF",
  "key28": "4phimC3HVdoXUpFLe8TeWXiYWjU8EwXFrEghvdguRCBuE3g1yavgYjN2thQwCSusDtWaeqGfSNKSpY1JRdEUKLnt",
  "key29": "42kbXnySg8JW1vHrp2QTf5hSxSQkYYkJ3XW3sP6apFnsDMUoc3cY8DzD2xLuGnGe6b264WbJka6oruXc1Tuhahju",
  "key30": "4Bi6v2pLRqvhXtxGsMEjZVhb7jiRS3qfGNGSb8QqfBPBuH5aseQ7pMkDrwJ9yuRr9ZcBw9avvy5DzzDX5RkyXssj",
  "key31": "FzUT1ifAxEMgrnt5LBpAw4S5fHSbGwimKYB3bcEC3MkVuU4ueBc5xDkKLiyH51vyEB6kdCDgD9oLHLYqnt7BENy",
  "key32": "5soQSVciXkfCDf3DXciWXMH6NXNq8cHQk8xFtY3Khb1wQp6nACwdj9givKWHb7qdGyz9WtbirQ93AUTqGMr8YDUC",
  "key33": "rTwU8ZJnkJF3DzKpVLyiq6jRYKLFPyr2gWF9u7mbj6wtTQsY1nfuYHEUXEPyGuEiFjhz5KNT1WECjHfB8WWyLME",
  "key34": "2XrGJw71BwsAYJgC1FYch2Hyj4h25KqgRHx5FQv938WSYWp7XCsh7riHBdKYJZ9ugLQyaVwKcKMZRDeE6gNB1P98",
  "key35": "3nWzFznW7Lhh6xXKvxRpfPhEw7abrwFTooc4D4CNhoCKu7BzvKipqPrhoZabTsUXbJv53FUsEGXwgT2y6udjJqBc",
  "key36": "2TXZL67hD8z7d9BzqrQFBncogCyNPzaxAehQNG3muyjroffzYKtsLKw2Xe9d2QEqR9i1n6dEkEquGJ68woSjspja",
  "key37": "zTLFPCXxKSU1ULnxVFqXhPqFhv2bSLoxEwzHQ6vERr1xAgL2rPr6p7cXuFtNd9mzJTWCjUHTHyhH1bTtQZXSmti",
  "key38": "3PuzUqHF24KX4wgi6wqr74xPWZZdE59yAgLxMFBM7MMDDn7TGWXS9WJk7eWspG1TFNDoF4qmkXWYWVSUPfCfSnf2",
  "key39": "5WPQopoHCEtAq75u2V2HaqPCKreySnA9odCEjf44MWxR9fSXcLSrzot4VwYdebbAVGUzip4E8xDyq9kXamZXLS5q",
  "key40": "VdCTf8LkWMksLBANAgHVSECoCGcF2kxERZ2dzuo4kRG9z5YRMfViTPt7ZARACQbAS1MwP1BHF4TRegzb7szaeYd",
  "key41": "5Xp9xHyt3P2ZX1AJQbPT7cv45h9q2qmxbobMkzY9tZS7U3Q3G5EWjfgDNqtr446eGWbfb2VzPB5k8Ung7q3QZVAr",
  "key42": "5BHwnxPV7zwNvfJVHF7aqJAqG1tK52ki74c15nP5e9PwWoT47jUUNeR7zEdXtgsZVD5wPyoGhfxcMrGhkBEwABED"
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
