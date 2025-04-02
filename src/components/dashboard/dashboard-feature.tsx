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
    "4xbEYRJCWGfJSEGAvBayX6unyAm1ANWZWptXkuh5bj8mRpnj9RdYgEACrYiEL17EU2QEeDQNAbeTSdcVMmjWLKfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KhgVteDqoQhfb3vetcNXRVauUKqSF5rfjgAKvrL9hiBhz2yAr3wgYnEEDMctse2U2zA8tXadQyLLT27Uy8Ym6Mt",
  "key1": "2bhGwwb8Lym8Cj3d6fFwvYDC3qTHBP3Qc54gL5MWiCm5m2PX9eGvigGDWxharfR39dwmQU37XwxzLm68Mowi5xwE",
  "key2": "5K13jrPUKaWG3uxr5jkPe8Chqo8h499CkYqdMD5TfRC7yqTmdu1KBdUUcKpi2hsWQDCi6jZBndmJXG8TtYWBnFzB",
  "key3": "x25iuUEYh8RimxwQ6aDVDwfssgdNYJn2tmbybTshtsvdrUuzaN9wfWbfcW3dVUEPMqxWEFJLZhtSuAceRdfyGfZ",
  "key4": "23Gfr6shafP15UbQrsdg24fNyuhqXeS9TZ3ohkHgVV3xJie2qTM1YVBrQ2bCHjEN8yropmXHrdmxntBvwwSv9c5o",
  "key5": "6r4M5URBKLmxeNLypJgKF9AgjZxgJzcqjGtiApT6N3qELtqp4SW5txyqj1j7Xhsi7xwLQ5ZHa8fidKusr2VkPZb",
  "key6": "3Da2o95WtQ6Wcm1zFhGpwgysHdTuLqnAdcvbNZzytrVHwFhzV9QQXPo71aCajM4bRZrWJiqSyQtFKZUcLZjFWs35",
  "key7": "5qpukfueST8EWUNMCqDyDwZWc7AU2vPrF6tQ3uofnEnG5h1bENK1dKfeesoaV8RWVFF6134QXMXHUmrWPzWdNDab",
  "key8": "4AYHBw2wcru5UpfMtKsrX3qts7Yis8AhX7ruggVTdYewnMqKoLEbJDBQawCEoSasuER6AkZR1ywQM7gb7jMPH2ME",
  "key9": "pFsSaToTVinVVqK1PRMwR9FxpzEcrqoMUrcAWfzAJ6ivxwwSW8YsfU7t4ikLuUkan8Z67tZUgJ3XFzZ58LUsRWL",
  "key10": "2CLTXhg3fubUq3z2QQFQgndvZowBQTm2Ju9CqDgEfHkU5C3n4xabvYwUZUP6dByMx7p9aTrdfePKqzd4EjfYgDZP",
  "key11": "65kd5vJ89yi5Mattj7zbnHEkCWZQkA8kDiG527RfFcYz8QrTdVkwSutNCJbpuAwRWQ5t9cM5uZXdWyyHq5T2pchs",
  "key12": "33cQbJBTh23kkRMxXCjVBNq7bp7xoPXu1eGHvbEtCMJuoyT867Xe1Yf7HVbp8mCZ6J1ndK6Fu4dGJHq2cACgLaGz",
  "key13": "49PBtrGJ5u8192VeZDCzGzKefRGpcrGv8AifoLx1VsifYScZ6Qt42pNdcaFEWBH3wLqMExNYq6C9pzdTAMwVhk7h",
  "key14": "3hEBS5TksYCYLm6QKucS69ejJrBxJTvahcADpoP62asFyEi6xxGMyYpxNU5nuyCoHhKJvAhzCjD2LsNjwRfRvgRy",
  "key15": "55fnqiADmzM3WkJFKt9JgZvH4WvYyxZuCyyvf9paoFjqRPcTU8HTktmrQo4nM6aLYnJHMEdrEDzmmqqRmD86RCqs",
  "key16": "5LV2PA3dNQD2PYrpC2YPoxtDA4nWWzSvPZ4c1GijoNqgdg6bsSZi6Z7t4jhqazBsZLae7bnhKVQdYYowXaL5bEqX",
  "key17": "5uJNackPvrKa7GcVZMnWvYpz7sqpm4Z1jvbCrejm5Zc43tWVCzN57FciLKBguNjgVYzMUoiA3sqzh39AmaiZV4Bv",
  "key18": "5osDwGFsvGrMYvNra5nvBU7C5mgE348J4PfGB3fZmVnJefe5rQvn8K1SVN79BB7pjirRK5ZoHArYDsKcADvccU7h",
  "key19": "5DFEKkKhwXWQojuVNGzkkXzkS7FKVEwSiixz5zL5eLxMiUttCyjcSt5F92NZK4cmDquCtuw9tH6PsKEgEcbdSK8f",
  "key20": "3r5xiTbgvujpFwMTiPwnsKQAiRq6nATbiafxvyG8pEYTAxMrXHNehUquryTUH1GWVXvGu6eAtNJWW2pU3MT6qbHC",
  "key21": "3w8UXAKSAopLmd6YbNjaD2cR43wpnLYuzHj5pFmnYyPkFL21orjFGMrGMvgZ6Z1hzbeyxncU5ojESxFab9yYykaq",
  "key22": "4UFVYS1VmuxCX9fKvdsYT9rsVSc2rHYUKNGzR3ZvQyE8AZfXoy3cRzrYWJNRBY5GRfGqeH2FzTwS2bXf3LTTEjNy",
  "key23": "4XSdV8VQBkCbdHZqhpKjRHXbAdhsyTjmCHCQJJdTgZCAq6ngR3rJt7xSGUbTkZWcYwM1ZcevDQ6nsqbi1oq7aqFV",
  "key24": "4ugfoJ7neE4t35pUaFgyvw7AisYWSjjwceAT2wF2WMd5JhXQcJjbbCzJQqyLzJG582deXdMD26kz6t3H8ey7SchH",
  "key25": "4fJPPN8nmLmgrSNhodRFhqcZdyHM3YnBNSc3RTzF2gy8YdL9yZUqTqRNzhTF1BeptAYUovEdr4fu9ArccgTgwePL",
  "key26": "215vRvPvQxLDSQCo7etAVJPFeKdqvvqkjZ4SG2epLtEej8DU2jEyWyiWm1xk8aKXQ6eAomLku6QtVFpgqBxMMWPm",
  "key27": "43C4smSke1SZbk4guAkDptsPAE7sUhMRQFYGwq75qH4tFGFgmMFD9oWXyayL7FupxsQunM8Lpv6wAcjLLUQy5qgt",
  "key28": "36CRvv59VTrHNYx971aiv4Kmwu1zZDqZTokVePeoypYe9TGqS2FPwCsjEUkdtgnLoFNxMjJkSTmQUnL1xzb15QpS",
  "key29": "3Dc5D5MXHaRmpRrijjuNTvkEXeVMJMz72aaFJkybjgrPppJGK7oDvte1rUF8EA3EF8d9o4QDeVFGTGe8WXjrXbXk",
  "key30": "92ixGcyXcMpHNxopy8yzS1tzk1trCXcqgEPZVaVdrBszYMBkrkpiBNPc9r8ydPwpR9mrFqiAQL5zCs3BZwjjfii",
  "key31": "3QfmaNUdgMpHhVMsF6gHwDgR5eRELudFAmRJjymtL68NYh3WicLY4j21BDE4tE8hNNrWoBBbvuWw5HGHMMev8z43",
  "key32": "2iiFLr7uzcdhQEh3g9qGh1v6ZMYr3irhLtZz4KxWhUxMGYvd4kp9jVSpT1sGwjg1mqi9xmviv9CKbEkF8WrqPA2L",
  "key33": "653tvhtcmq2HtLrBotzvnjE7zTo9kPDdX4VjYRCu3VsJptr8NU8MXbAXVA6Rkp5w6wbaZYbjMHBa7DYriUuikujP"
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
