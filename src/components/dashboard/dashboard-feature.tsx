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
    "2bvqxZ6krmyzma6E6Emi2vFzn3GPKgyvXb7HqndaF1BysktM8TkmqMnpHofEr1g8m9TQjk4UnntXyyZhy6qFW7Mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28i7qtPN7cxZmB5WbrhordPiTxRxgwVKySgcT2amx3HUSqfiSMdWFNxX878W6hWtsVoHHfoXgJyhGdd4JmghjmkP",
  "key1": "4NFFtZjHe7jAtspNwZBp2PqFb5sMCLMLYw9g5MgoQpjHNioLQTMmMvSP9NYWKAMUzPaiPxobaZ7EE4P38oaKPTdE",
  "key2": "9CWMwc4jH6QdNAP7tJY9h6zBkuHbxYrFtzswxSMkt31Wq3YVdfNYKcdpesaHSzAgucfTWRLWMkyrMTKU2arTpT3",
  "key3": "5qiYMzj5QiaEMAKGH3oJu2KHRcYWT5Vu8S1Qs2EqRpyw1avWFxiFeABxuk7X8hvNJEeseamj9bVqh5TekQxSL8Yx",
  "key4": "uGdhyEsVs132eVFmWRBRgb7wDMn8qKxyY6LggyURSKRguDhvzRBUDn1VTyCQnAMdYhXYWHvffuDwJpQsZYky1Zs",
  "key5": "3csDzNpC3UxZszv3ZbBSugaUjWfhuexJMEzGJCre4dzZQkorsjTGSiF5NugJkx1wP2BZkUERiQdZawLeCGzhUB7E",
  "key6": "2SWJN58opbwy8hkJ4bQEXjYE9BdgXTZGW2wVyi93KsD66RpsojShjJBnXwA3AxRHoSgBayJBvDJu1ZtZvbCmQsMB",
  "key7": "67gSzRz4rWBkWhH3XXmy9a8CGEJ9dwuK9U2RUCAjC7Wmw6qF5WQz1R3yJpdYEjBvsgjTNascWPvEwK48eBxLBfZW",
  "key8": "4zGxTqoxy8mp1Xw6t23diUgA4JvfoXfVwaiJafFjxkaSR9MU1M92YnNEXEPPKV3NhsKwerERUQWvSFNSwNp4VeJK",
  "key9": "3wCZcJHruBPmQwobmhC36uJrmCKZtHzefgxtebekZ9WbMqVWQh2MmVqRgGDJ5EwQxkwTzc3j71p4vMMRtnqhphmc",
  "key10": "5UHYT2Ca85skU4oZDchw4YwR5MNwU9csHZmoCPSVamhrUpQLsGZ78caAeweoZYxZBnYrrnBUTf6ezLxGgVMnEBvE",
  "key11": "AaCGYuH4icC7QoRhXEqFsTxoLTN8jyc5r43fboZnG3bFjLGW1PBGsurkYkPyZYUcWhh5aJqJLKRDsgtiMv3p2bD",
  "key12": "nUARqbqgnFPFNd8BohWqYAzstNhQv5YPVitGRiqsmQ4XWucCqyqUs6tNPXAXhtVEDpDwj367BMaHLNsHpQqqYSK",
  "key13": "597qMnGYH7HAR5MSBjAmky2Vj7vuhUyzmKdSs6KtNAQzLWwasCXYua1NH9GHEaUBWHn9V8gRhEAzYwsA7CxvxpWb",
  "key14": "3X3JdTyY2abiAKbdJCEy9kzFz9b7ERR4XTTnWcs1V68bsy5t6dbT9QGY1BX3ZrW27hqDG5UN1XqY9Vzmkk4fPKbt",
  "key15": "5CyPUZGxhRtcKxz8szNQShfBfgXFTn4A3gujkVwYJRbYVEJ6CJWs7ajZLeNtgYj13hvmjEQa1Aj3Fer3jf4NFEes",
  "key16": "2pvG8br6Mmx4CV9S2qnjttuan63kvGe5Z9YDi4AvgWtWtbo2syTdKK14RLLABtLhrozUjB7LjoFB3W4ct1JrPGEU",
  "key17": "3gx4cwXpBndZsE9swu3BkzswGyj2vLbvX3ztC8ggMGCS9VghvRYcHefGpFec3gham5CbuaJtgJaidw5bCUyvG8yz",
  "key18": "4YrLuAiaHyJHgRoMmPbYDfRzg7NXsS4ga5MJgGMcBnpCcAnX1kmBgqx7Q8Hxi3BJJhVBYESahafZomeF6QrCSe4w",
  "key19": "dWBzP96sX526cgfLDq7AeEsMoh7MzgvD4gFqNJeAxzVULCiePMVMudSjQ67Yhhe3kDryij3FehmgnjCzxeyjR8Y",
  "key20": "4oEGqP8jtjAnoquwKFMrsSZo5rfjsaGd7RbK5yr4FFuw1LfV7M6stvmDMin2yooQmqhZeT2pkQiPSCG9xEPqMqxv",
  "key21": "64kDphd2aVokJqzJfSJhuKBwhT41Jp3bswRD2CVfFaQ7TowSUSPDq8uuUC9ENqq7fpAtjB63fTCZnSAH1QjQ2q5s",
  "key22": "4mCcpXyvAPRLfmf5Vnv6GmL6jUdSr4yeyV73EBKFqY3RB1FYN7CS5Wi1ZfD9Zk7F5DcfeCcyEr3mRbWRrNxxcogv",
  "key23": "49nEez37m9SWqkHKnMiY5D9PyEDFpwoTLx7M4FXaQNbr9jXPkmGLc2P8ooBRXmSNTRrZHJC2mmR3HpmMHz3i7S2g",
  "key24": "5JFnsRCDzsUFkkLAQWrroVyN2MVBoq7z4RcGuynhK7s7fwN7wGJfpDnFnqTesiQepMg1gpnbBoXsMRCtSUTJ21Vw",
  "key25": "2G6qadZe6RCmihGqKegKHTDj3LuMXgVyxNcqpnHb9xukZEvj1jYMUxfvgXVw7bkB8YT86ZPVemAgdCdGNFDDtuyx",
  "key26": "nKVSEFktMXmMBZ6iL91CRjo9EZZbGo273msih7SQLuWLfouuVZwiYth3cL9PkNJcrTWSu9NrPEj4P54wBNvT74W",
  "key27": "Xvqg1wFU7bnSDGZu88JNySHXxqkbQXmucENvkDsp4yXM7trVYWEEJ63bsdA9BjZHcyDYhLLAkBNAE84LRnGRDMB",
  "key28": "ttiy2p8UiUKXiQaHf4r32DVNTEjFdAWLAUB1buA34ZaPJHzyALFCWXsckbqKZop3nPTETrDQ1whXswMQcX5SPZK",
  "key29": "79bNifXvmqTU9oDQHcHGNWJQ37f1NR2xHUzuCAjzdkcDjcjMGKhcbsfaYtr1E8EuZmAFm52wsDkizBLynPWtbmu",
  "key30": "4LDJsr5FXhgeU94i8mE3nXWib2Hx4jyYr1gZmFpxsvbM7KwYTxNeEXhWhvk5aB98oK4umg7EbMXUHxjBFwj1WJJW",
  "key31": "34o4c9wWy5eLWNM3Aiw26icz598PtLE7D45PWFeWV84LQCUquPZ9sDSDT6CjMxtvYCmoDpipFKpzrM2PPEHquNQx",
  "key32": "2vAh5bfor4r7jczDnzoLVXpvS5YgBybjEjmZKLDwuHZ2bQsnasxteQf3ErZBBpPR1hTguVEAKbmXzf1MdhxdkNqg",
  "key33": "66dWk1swBawUpuAUDVLPEWPUzTi1RQJv5iSJ2S89JPjppVzUeNRv33UuctaPbcTaq7mFH1UmgvpH12eisn6xh6AH",
  "key34": "3WX2MzgArkn3bzznG3QmVpbvcRkfBj5mjA286o6VdRasFVxLSEwxAAyusG4KQZhN8dRpTyZiF8Dv71eM4bQWhgk",
  "key35": "gpHwtVGSBEmuBHaAq7jgUnHg4LCa35U1rcsHyMHbAjQVMFhgJsNsUUirQ4LtvEMx32a38QtDQfgyskrKTz1DYRr",
  "key36": "LUYZYjAvqDugzSBZho322AgLsYZnrWxyWssC32Z7fgNHoSgcF3tindxCD4wdGAjvEt9Cb86esqpAdMQV3UzQcrU",
  "key37": "3Ts5cV8mwzmy1P8Q7VRt2dteMCP1s2FSiBCJt4MyXyLxNuPG4uQL25Rcp9SYHk3xb15w4DbWm6HsHQ2tDQZKdDev",
  "key38": "5FHoctSf44xqAs1fMFhkaiGenehjpKg8du5rMMMx7bavGkfffk4TwMsFYWhMhz7fBaWWgNEpsVk99hbnpFtUsWT7",
  "key39": "5su2A1FrhKAqQqiUxxGLWau5CLuBttUNc3xRmg1ai5Uj362QDKQXTnbf5QWn5qfGdBjNKV3v86d1X34qU21AuuNN",
  "key40": "2qHkKuZ42WKbEXAT3VHfiNk7mtj7d5wKnFzJDvTLLrXCg4fM2L6zsfWAL6t9bW6hLwAou8iLaDEauGVeiRhaZTnw",
  "key41": "5wbCsEkGoJFs6GBDXMWQv46fEjTdXzWe6BBx4nv3WUXGjJW4boZVqWpjsPERSmW9sbbDi9mzAZYnkng3hmnzh2rn",
  "key42": "5AJkWexfPHoXV9w4LgVwfejEyAkWaChssXxzhQUeCH9YJLjTC5YfhhiGoDjdVpT925ege34Jagi1aybHS1Z5biQ7",
  "key43": "5bPhhAjXDjLAQ8TtGa2pHcDsyuCviFeWHrhhdmvVpy2tkNcrhWcTbFiZzksG8CMuBhVthrNXe39NL795W6aaVrDQ",
  "key44": "5tFXCfcWU4TtSZuaAMpc9hHJXWm6fEADbE7qSo8X9LTpoxq1uc9DtA9X1Ej2JfvAGS8zYk4cEAQoFGQiEC9zorv9",
  "key45": "5DjiLtdo8eduLR5LibRypiNJfLDE7x9AuoFxt5jBtDJGzgf2UyYkaF8p3YLEjfLxBygtfWLKJjsUY9pw1tfJfs8J"
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
