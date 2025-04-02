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
    "4ddEWhRrb5S9BHjN3BCa7ZsnTbtMKekZXghwdqmpMti72Dhr77g7ERuToFvY9ShGXYdPEv2fQEfinRwDZ1eckP17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wFUk4AWX1tN7xovMYA1YJL2bEXjc9Ugm42cNsXZinJfFcfLqSks8wQuifqjiYATz1Sg3GEGiU4nf2jBrtuxVqoX",
  "key1": "24vHUarZZvqpcCt5SYLY4dYcVC3C22YmmL5edNN1yXjuBWHWadVRmnnjsRwiEmghHgYTx1vBWqrYj5tgvjkDA3WM",
  "key2": "5eCXHr6jDmJBo2v2FYnoQyKvo1DHqzfGkXQgsrS6Arn2d5puBrYJ5uvkyfhJbEdAobqe33dhk5ngyYU9iGaC1jsF",
  "key3": "3DZURocVianyxWLLNDvzckvKyaHuuoJc91G1PVTN61pCwuCaV5W54Utxz82aq2r9i8ezSiz6r2BaWckvgQHesn3H",
  "key4": "2Lq2RymAQgXeUoyYLxF2MDUM7A1UaAoFBBAKsrxwWLKy34WfE7mS6v2cBVJJqCoQyLpAro4qgFzGUYwHtwckrcns",
  "key5": "2jpkPrSfLd3C5cA7SGwEQ4i9HX991KAgXHF2h5iygWazCVgTe69gBrLzf7fhHbk5Xp1m9pXj22VSNaZaz63dd3hH",
  "key6": "3BmbK5U9WFKoBbE78osVYs6rLcnWirX9pBzjg8KmGmKUPB4S8XieQqsNG1NDzkP1YpSAfV1VH5MTJQ3r8BhcPaLf",
  "key7": "4HE99HgDZEsnhYhFAnUVx9Sg4LVTG9TfdsUt2xMqtJJBswWqajbwfpz1cYToHGXcE78qdkEAS42waXqvpusEFywo",
  "key8": "NwsKhf96oXVrkpzAiyzXuHLKgQqKVDGBaLtYn8nAZH7Vxa2MtQA7mNBRJcQsDxjunXoSQPpsTyLqb7SeJFSPAFy",
  "key9": "5ZmPktwHMr9iHstbrU89GdscXrKmBgMHWmAMRyWhFXLR7P1VSaMhEuAzTZdLAwBodaTPvBCfQ6DRW5E1Xrb9VLoZ",
  "key10": "3oVk35QjvhWU7N75pAXKHAQ2qQ4iV24NfZkPUSq9RuBZxoquvcTczTLis2q6cZFmHMDkw6NwbC6GUuyJcNBwfb8c",
  "key11": "5jDmahQquxdJKBf3Y8vnzWdwA4vfakBBuuCiPYJz96k8G58GuC7zNGRv5AdKBaUNYJH8nvKfu3neQunX1Y9K4czU",
  "key12": "3aLKyXxHn5Hm6ae2W2dhqdhhz86jQPpLT2B9RNpqB7x8V2BAb2hyDymhQvpSu4bMA38JMG3YzMxvzzFwSkRugHZ6",
  "key13": "4PydTeVMLPTFmgpo5Duj3zHZ4xaPedJif4XVXPqzdbcPHNeJLfu5Mam2wKp49mfMDZooUbgTJrnac4iZXPN97B8E",
  "key14": "4AecgYyh6K6dFEzkaT4sbMXC9gMhzdjFLYHhqmPhWM8DuadnxYWCPoQNNrMeTNm3dFRmaJxKCbs6smkMEobF1M35",
  "key15": "5au5FHWUVcFYmmUQfAyPCeREXnuJQePHgP8QfHt2AEsLkYoP878iJiRdNaJSWZHJ3apJRzkV2782Uvnjp7tamrZJ",
  "key16": "4cVF6QCV5HAzUT1eVM1mgk2bHSPSwX3SjFfPHeUvyL9miyZse25s4HfnBN5anZFecj9AaCKxxXnVEf5nKY1nea9s",
  "key17": "58rKb86sVVBGxUSQyDbRzsTpL9VhypueoZiCfNjvWp7vDcZz2VnwzvqbZRnZg9QWfAHftjoSFXYEQkoKZxkUpzex",
  "key18": "3Beo57oFyKPVhsCfBdswMNczkdrEFk7QZxtv3FAa1ydUFaWF7Mg2EaoCM13B3BfGSwsbHrvwgR6fs1YFQHfmPGRf",
  "key19": "aWB79Yop8tw75nxSZcydjNa4a4UsDa52bzRYnc3nVi6YS4qBf73knVn2wykVWPvbdeoudDnVr17yS5QaFyATtqC",
  "key20": "2VtPpY6bFN7xKMZDDbV15St4TF6qCKniB5Ru9HCW1xEfjCST1VvvZyjujcsgusMu1PU8ea5GWENetyEPv542LCwM",
  "key21": "2YsCv5C31tNZ5jZvqFy5c1twkMXyvyEx4TxnKET9zUe3kCUMVgJamLYfrpzprEBRKjQz8pRcayTC4A3f2ZGqJvHd",
  "key22": "4v37EE9ptUfSZjFoXyCVKB33epBWBAEDAyh2eX2afXjDbxDBB6kEMPqRiMqueCJDubji9EkyDZQEUeRd7kSmt1jH",
  "key23": "2w2swFPLpmNfRpyEUGvENWzQd9GAukSr4y5TuoFtGqiJvtA5h1eCyv1etnLRaK5X29ytdg8XEFkZ6NMCVEeWzYtz",
  "key24": "4AkbFpXki7QLobkXGn9aPbFgV3cru9k4fVh8gbr2dYitnUbbx7B91PwtSHSaJXH4tmphasCF3BCVM6L2cPyCsiFu",
  "key25": "363qWFYZ9LXazDThwLJz9oFnUX1QLqYorHdzbkdr2ajMn7nrnEZ5CUT8hPmmqYyB6CYrenfpwq2fDaA2kcahChir",
  "key26": "Wo19BnDUnpAPsAmgMDPErLQmnvmeRXBdux3eaU6ooMUwF9ZzGYE9hnLs7cyLKQYRXVhxae8abP2THkfPgu4Y5B7",
  "key27": "2w53LLw3ZBciqihGemYUnxC6bFRBdan53yLJb3FmgYPFe966VQPQMQYCWTZ9LMi96AgnH41RqX4Rb7hSrKXX6X4Z",
  "key28": "3ctEuXpeiiFRpVK6F8enyrLEgw6VinGWUwrQHqBkTxgaQENQ94ZkZBwszpbJ2M9vhAif83mRW5tRyr9Gj2D99sFZ",
  "key29": "4L3RySubmio8NFuaYyZmtpXxSwqvDCZgXkkADriqwFzPwP23NCQKuLwr5ssY5exW5qnedERExPAeRdmQyCaozPWK",
  "key30": "4NoD1wxYcU9i4CUYVF3NbjNAgDb5FoJrLcP42BvHY5XgE2nbfgVCVt42euT12MWWj5wc9oFpPqoq1J5JZ74PmpuX",
  "key31": "5RvYRMLzqXdkWwJduxySStAMX4QFoWiRW5kn9pafBvsyc6djX4RPDzU6DzaUgzQnWF7GzvMJRQpy2Qvx1Cv4Agg6",
  "key32": "3mBELLtQQEomZEnQ1E9nR4ztNrAALCd8RHPxmLKFyvHKXLw1oeXQdEeMkpoXhz4irVf11ord9eU8YkY9pwLEJ3W9",
  "key33": "3mBUhBNfNGgR17fXjTxMCxyfZbn3SNa9rpjN2mTZEZrvpJJpcUoFELZjHqHDcqdYG73ZutPBt4FfMrnifty6fPZy",
  "key34": "5V7Y8ZnWADo2iHatetUnXbjac6kWKHd4weTMeFKACniGNHTXontUmSrS4zzFcBJ2ZtWKHisCaRSvuyVwg1uST52t",
  "key35": "38GXcf5pCELeVkeXE6BPdRHrMo7pZPKeZcwBSSrRmQ5wWo9trfcwcL4inKvyykE9N1PMbwZSPhnNngFE5kWqFK2e",
  "key36": "5tzHaSiGRA9X2tSaMvuDH4HzwdxJUMK38QpaJ3jnMrEBFDAbWsPe7TJnF8VJEtNKYT5pCTCiTqpQjKsNG7kkj8iH",
  "key37": "MnDsFov7YJVogizmaxB9yeRfzVQEXtbFvFYAcxNtRZhJBsCzSvhgWNanVPPWwyfSkvfRLuwQ6zgpL6qYL5Ny4M2",
  "key38": "omLSR58NdZjyuyfXPqsSc7YKqpDSXQ8nndoossCm7715AbxhkKhbdqTtaQvHt7EP8yMCCWNUJNBsvuYFSiQP8WH",
  "key39": "2CJB6wZSs1NADXhaPSERgzUKpND6zoPY7GQ3xFYEr12a5SFhp6U1jRphXyxB46uEPJ2jo8bSdm9nd2PPWv2exjPc"
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
