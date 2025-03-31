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
    "5YdQukQfDTXFSxS4fBQKZSu2ExpTvuLhKxMr6ipWX7T4reYcGAFkhuiLwiguqDADfVrVWuCZtq6kzuL7d9Xfapox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGc6GcADHXcMAP4mqE4ckissLSfGhk2YTs9KrtQyFuZQN4w1UY867519UGBLonmZxKHPvmd8pPHw5FF7SPtvsk7",
  "key1": "ieYtj3Nrk89VP93D9UsYERACb6N7VduUJzcQDYeFUDpWJ6xH4MkouQ32YsSHUNH8HGvns68Q7BfwSVSZYLsxPeB",
  "key2": "5NVSg33CFchkHrTAmnb9hUSjvughgXMhdmYFYRfZp97VQHefQxQ8i2GPvqVZxHX4Z8Db3Ad3bg7qF2ojpMVNMB72",
  "key3": "4zDxyRjCRXXPWhzY2Aa2yFRa9GuHuXbrfNe6BCammnnqq6FS55uqjbwdKwbtm81L6CexT8E12SMMSHhMT6YNYFA6",
  "key4": "49vK3h4FYdHBWh3bgyjXmx5ZnjiSyqac2cfw3LytUb8xzQKvTYH8ZntWdXkKQvavfxriKKw3ERteK7WKM8HMsSkJ",
  "key5": "3uZPdDRqZuJkvduAS1anFVn8M9f4xA9u9QBXr153pk3rNVASVqoDKnNi6gHMpSmzq4HBL3D343xUYizQjkaRSSZm",
  "key6": "466QweBvHFZzUQnZpQBz3ywS8CKHAeP9wQPie6tPddPWhExew4pM5XuDhuX7T2svvwWK2YdvLn3A2zUL7ixRmrRg",
  "key7": "3KbM5jM6WKF459yogoN7KRQiQc37wwi6VNQN1uvgaxgPjz1NVERNZJD8K5MV64W3XgLJ1JbzrSfSZdB2wx2hg9fV",
  "key8": "3RYQVviQsvwkv9tCAckwxqcHuHvAk3nWDKndtiVKFTom6n5Ht1eRZN21NFy4PwEFmC4feS4gkDFuRHvPSNwUEtBm",
  "key9": "2s9knQF7keomm3rYDdDBPVXKJZub4m8vWyZG8767o3pVywWgRLfrzgM8dqDo6zXeLzbmhKNKMTQKKLhMbd4iQBRi",
  "key10": "3FwFYPzB6BaqjhcogUeDcnDBDasiw5fQGJdoJTbg7kfMHFVn4gL8AyuFABY7mZGDqhE1yhVPbhrzsW53sVAYkMsQ",
  "key11": "4dyrzxLjcSfiEBcmbeYEXnPTid4BGhojWGbLmjx3qb2Mur7h1GkWc52Yf658QhyifS3z2oVbFHx3VyRx6eY87PXn",
  "key12": "5rh1m23qZfxbTYA47iVm7wNhA43PuUdfoVebkY7yHVZvXz5s9FdeGxxctAzFyziB9YmWXjca77cThPdjrumXufZh",
  "key13": "3wXvR7Qkm5dRgvBFKMgjm6CLiQbrTd7SFrn3GguDezFdhrgc9nPqWkw9McmxyHzShVWbw8JqrDtS7GhjcM4WBR1a",
  "key14": "4bAtnWXvFC3LGQHVLnP6s4SaUowXjmzyFfqKzTVcLrmWEHNngBQZQbgPvvgzGikRBxWma2X62QqU1kQv9BHLzfZu",
  "key15": "2ASN4bCB3M9i1nCupuHRPSJgKNH9KB7xyM1rEeXzKQPEyDxE65vrwLW6AdUEDtG8XeujzEM1qN5t4y2cntiveCRd",
  "key16": "5GpKRtRogexs8VZckSJwZGrH6HJumiZTeveUhGf75xBF6neQq5iDUwAErqCt1gyvtUFwzx1TXQhcGuFoMJLFnnRK",
  "key17": "3QTyUtLewqRfY81s6UhbGUkdRJhGo6uXC32FWtHXjjVtXknTrWFBGNpfGfxJNGyvmwLi2TuGpgmvWbRNUDnqjL1w",
  "key18": "3FiXJ47CQx3tCQbD2tyQAJze8xDFXL2f3jZZQLhYs8QSELvTzG6qgtTduhEzaVX5j1Yu6tCxE52teTCRcxUhB8rF",
  "key19": "4qaSAEtTf6pWc44Zt16g7tFEfCijYsju2k3N3y8RQraZmwsA47Xh7h3z2yns6DfwGHs5fqwJr2wve56hHvqFkPhc",
  "key20": "4BYBFPkaYy483BRQi21EyCe94BPGceYptoSZx9MtEmWnz573L7XCUGBDtc9MFdLiHeEEWy5g2JNLHqnS8zL1sbKY",
  "key21": "554wSMeZhMSNQxpLjJ64rEcKWkYnJNGXYQjwZ6yLk6YqQpyFu6bBQTC5A9gDWxsS1bbAh39yUaAXnYvAiXX6WGVw",
  "key22": "3WMTdUu9fmXarrZrzKZb11dodprpfJq4F6areJAbepUndoVnMsBnNq7xmvr7wfw7UtFnBLSvqBvq49beXd347BDm",
  "key23": "3drK9bZaTAP9MNPtp9ws8QggQEMkpLbarkezPbfsyZ82ANxubiP9LVp43HWXcXDb8BkLwuUuTdERo1sGGWoRjWb4",
  "key24": "2aENFvr4iDR9Sms8tnLu26QxUyPSu1XQyk1Lm1QkMdCup9ZWCKVnkdKWLTtkcEoUjunbGf9rKPftc6npjS4F4uPD",
  "key25": "5Duk1wHdoLpUNorjaZFL9eUBbSP8Yz4thN4poxPkw9P3AfHWzeguGP39GrbNjhYAWHPgCQrJAFpK3xFUB5xepr4a",
  "key26": "dHjw9X21J7F2AAgXyJ7kNTJXSptJF7nM5yAg6fKkvEno4AzMU3oyxN7uc1nokPYNo8sRXbgKcbgspqLGMBUUGe6",
  "key27": "32syatgJPcqG6nHQbqVcXgeJNaDdigQouQtzw43EHQatatGsvzss3sJg9iqh5Cr3L6KTCVL9S8FjTDkhQgNTH4Dh",
  "key28": "cVs4jVmA7MfBsjipNMrggjsd6aWFggEYxKGUPfm3PHAhjaKhUyCvPaFG1v6rDb8iZHijZrFu1YtsDnG1wJz68aG",
  "key29": "4CEhQK9b5ScUfdbgjwP5T7JSmMJFjDKVaDpdR36xyMDbm9BRe6ZWos1TFo6AHh7Q1wSVob1h1UJu9rvhd2hjnbom",
  "key30": "4g8Ce5NZ1BDvvmwUNJ8q1H4p36BPAxzuguYfMquxeT4KAKyv79btikRNeTNt2iUH3sXhn1t6ZBv2gHcJX9hrsPDo",
  "key31": "iTpoLQiHDripAH4tXudytRX5fBP3BYt9KcHEMEN4mo9Cqt1SsR3wGjWQqMhkhmP1HfLsijrm8fo7saxryggypaE",
  "key32": "3XtJS8LcjULgMqiQSV3w4ok9dbHRLkn3sTSEePKijYzaDJ725CGTQAnSSJRXHn1rU9JAASmEhFFnMDiAeLh8DbEp",
  "key33": "3FKwcDnY1JA8Z7iHjBHuq982u5Jocd5kiGFEEjbUW9LiDYYkbK8ms6kNiLYUUKMQjzviBRH1KAx3ovh5Uh8qZD9M",
  "key34": "2YcYxRxRF7oL2ceTNjncqkmQhNZ6TPLFmGWNUKedKbLmi4CsotTVUowi4S8HX6tAhpD56JrRbXpizH6YuH5Grk2V",
  "key35": "36jB6YeFtaBbY9CfmKvcpRBY9ucWdRDUZTWSKjB7G16kkxH54uyXvbs1Z5n4oWcUcwA7D41aZTmrv4c7syV5HoAw",
  "key36": "4v8y3FaZmvAaRZ9LcunuRHrnAduduijhkmYaXN4FNc8iTecjo3VuVnQvZFjLE4MMuKsewakwQSUeeVsLLQs3x829",
  "key37": "4A6JR6ZjkDZRUZ6FQ5WpqYBm9HNUogsFnhGKaNneYC7FrL22yB98fW5Xhj5ZiMTdBHAog51uCyUNp6kWzipFLxjy",
  "key38": "4GWmW9f6Gx1P92DwEmN3wsT9JcQQAJgvdGijsMwoSp363XtJr6i7NXVZY67yfKgqyyrUf1g1uspJAcMAYnpUZ3yL",
  "key39": "4Dr9UEu7tKSG2QjvyPXkNpN9wBzDjArV7kxHWkgwVtLzfFKgJAM2j3UxfaSS9qSt9xgKcwMK9MyEBzHB2Y9joZnE",
  "key40": "2ubozpvidp8TB5gP8kyU2NFV4tRNhPfoGuCcgwEudTL6ZFJw3SbeHGbeiTyuasFvQM22aoW5dnTMpQTc7Tabf5Aw",
  "key41": "JgKPY7WbQuDotF6bKQ5WXYEC281snq6dtzKsoUALHyMhJWw6rSsyM1K7CfW8h6Chyxfh4tozLqbfKqv65Z1LSsm",
  "key42": "5Gus5fpbeePS5o8wQb6ZM8SY5rbneZh3X8GoLKTuoMiyCfZkL686DWiAMiL6i9D8G6hwK8qWjHsXLbcHfPrb1CcT",
  "key43": "5T4R2PJUdeTdwuHkJxcCJydN6fHtnYUGj3LPsg4s6tSgF64Fen4B2SipLYH3RwV65zgtqSBWwT3S6FdFkriAZ3eP",
  "key44": "477F1XD7oRnGjWPiYu62AV85X9AJycctUqjRxxAmTNGwzMamvsHVhzxVja1AqfVxVssqCnoNpuN9KukhE9gX99mJ",
  "key45": "5BJs8pMLNPy9ygBUFaQbLvMS8LbCXHX5aKFswh9SjeYFcvTkaqFrRnGkWHCGWMfuo2rydqqcK157jKShtE4HBbzS"
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
