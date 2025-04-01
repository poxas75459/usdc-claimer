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
    "3r9GrwpTuatAb8Pq46xuYPLnpQJozfswpVTdyCbUdWpAxPZzuEivZVg6h7xhoJgkEu59Jqd9gWpxW2HLPAAr4qjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BsacdufKecGm4V3c3RdU1xENc9vcjW3jkAHKuny3MjEFDPChwWXuCQ24SBLG79kckWJ36LcXd8ZT8JM3XGxjsoS",
  "key1": "5fQLrXspyJjPwpZwtVbqx7kxYw7GiyLyY3LmYJcCoxJSMsvi83J8HTPNDZ5tnmJSFJ8u2wuPy9UMw1hmZM33mfG6",
  "key2": "585jA1zFqgLRcJ38NSon6pUCEngaDYn746djaoETMYsBsBCtzYAQN2bxiuDf74zhM6yA7vZZnFwCrDnhFG1XPbfz",
  "key3": "5bA1Yv6VdjivognJpmC1HLywxWerWE2yyJe31569Q83vu85Dh5dAcVH7Xgnbpm3VeUJEZeREvfVAzMUUyr5srCNE",
  "key4": "5fPaoowRKghTnWMAmCXL8whU5q1V7zuzCvMo4hzwe2NCQL3EuTE35vNMQ4mw8pNhYiSHWuc1c2Cm1vnzQBZePBK9",
  "key5": "3gudFZthNZWmkXNGby77BC6c3wupmVY95m9MLR9Wv79kEWfFqywV7AnMUkttrWL8A6DkPJwKzZPC8gPftQzYopF8",
  "key6": "4yLfP8USb8PL1PSPg7N8gPPsFPZjvnLcYkkEit8qkdmznk1gxL4pZfqoXZo1VtXVcyqRWwhn1JJdkjUtByfp27yc",
  "key7": "tPPMJNUKRcdBHyN82hXUZkJZ7pUSnkaRQqw5BXsVMYPqUsZYLpu3Rzp9khWPC57HccQktHCNzDvvdhEKjFNbci2",
  "key8": "5htR8R3TSr5rbauW6rSz1Zz21y53iS5vWqeNtfmpXWd49R3trAzwwbfwAXSZZnquViFXXSuZPEBBAF9yX3aqiSmA",
  "key9": "5jcNnNwktwRQVY2DJsREwCLsMvPxd38Zid4zf627zPWLjTNQyWVdtmqfP7yrhX575JKMH3CGNhM9KV9Cv57AjfiS",
  "key10": "7GyAmBhv1gSJ2gvPYEDL94Cj2JuCfG1ZWUy7YN35yGUJHXTx2wW2MyckHkpuTAMKRcDbhai3dcLh8iQZyWetTAf",
  "key11": "3CEbsM3syAwxPMfPb9QmmTCfn1eMYEriBnsxAig1x444ZvKz4Q47mnUmD9ADNQjdhWRqTUK7PV3PG7y66zk1tnzk",
  "key12": "yTaU6RNTWZxmzM5kEHyW4p636vGscE7e7frEBoFcXVQh15SveHKQGhNXAHcFTPFNPahYtuTPVtGNzNw5ihTU3Um",
  "key13": "2xvi5wkpXh2KMxbakyK3sNd2o72GtHcCsAHYab9aYxhj6bHF5eZvs4i9aL43EGpL5ukpPR88cxcmsTm78351A555",
  "key14": "5MPLWD5KaZtyAEJgBFuqQaRq4pBgLAM4jYAxRztGaLWGusmfg192M9TS9LDpzvj78pyArowEbUskcjVsaAbBeL2u",
  "key15": "2U8XGQ4VFonDsmsxn5DsxpoYmrvVsSVVABMYoCosukS7x6b2k5dJ5KirAXTWuAuU6eriquRQk3dA2vjwTYzindnZ",
  "key16": "XoZDrBUrV53YJxLGDVgJtU1ErTMGs9PUdqLJ4FBQAbF45nDVe6iWYa9AhXwwiXBip77wxhE6UrH7a9TWkhuSCUz",
  "key17": "4peJTeHV7kFbUSPcCmNKhdwxSmei7MigphxvHoP3P6p61sQyqJj1WkcVHYtxQmFYGUhUuCapg1teeJBsQpNWsKcn",
  "key18": "5YzuMrpdiYJFE6RMTp4JAescHVXgGEhhoQYSgbYiSxwoVFNgapXuaKQR4h84UuBJPpwYGB5c8kUHg84WBQZUaw6F",
  "key19": "58N22gJKt6PaZPuFGbjgvKvBrA8WoWyBy9w4DJ7JPrycuvWBWVpW1gB6dANb8jrTr5hj5DZaRtdeEi3Z1QXE8CVt",
  "key20": "4rReEDFwUb33xumDgXBBABB2ZeW51E1jmZzeWiDzTm9ibQfogdeuJ3gYUVXaZ5KoXQ6eQdjxZFcAjRjxYWPkR7fa",
  "key21": "2hBdwgcywgXphVRkV6dE4SX5rqWbuXbkXe1S4r7SR7jeoEuFnb9Yd6UXt4AQH8s6fnWYvyQD3og2bvFeXNkCbug4",
  "key22": "2J7STNfJBLmu7BMC3nkBQcHH67xVhyidpyER1P1kGfZ6aLhpGs8x2Ch9HfFBZeMCcowtEhv9Wddgzyhjr1tscWjS",
  "key23": "wTE9WrnEamubvsMBmEDnpfiu6LNcBn3632UuZKpb9vWCAfE7WUCT6qigUD7Cjd256jSMTGL9aVScM9kx6PpTSPR",
  "key24": "2saBAyh4mtFXxcvR7Gzt2G8Bmb4uw29SdxCUgLNyDZgTX4YZyJW3JnDut7YVUV56jHcZRo5WfswuySZYSxtdKQ1h",
  "key25": "5Hk8z2t2KeknCyqdbeGusXtho33oKxZoHsJWZT7V8Hu7bjyXhBhwyvgvHtqRZrrJzJMhLhDmn3G1apRLSAUNMvDV",
  "key26": "2osXV94FZrno11QsKn6KuTzfdfgNKr5h1Qw4fwQte4j3pVWEWVEYcGQToxKzGHuRSiNyt22Aike1cpdWdi31ChZn",
  "key27": "2VTnbRvoU4uknXvCPEJzHYAeoxDjZ9YhU1teNhCP6N9vkAXiNYD1XS4NnX3FHDWuSi31zMkvD9iASaPXzvYc1MLV",
  "key28": "2pcZvRGdfQdk348vFPsDZ1gjMJwqepFFfz5ks3XE9Qd9wHNQsvZTgoxxAcbQ3nFzruYoZdMUWnnpsYtdQ32Ronp1",
  "key29": "4i1j4kDfvCLmxMRoL9nvzDf4T6YhDargCSv5fsK42gBCEaDQ6A8QkJZsoZ2sk73VEXBZSmN4Z26aKdrsfRVrGWvQ",
  "key30": "3RGevbK1E5MPZqGZzjAYJx1bmuiyyVfRUjzLRjtdVg5rVffiH9m8jJ2cdmXS7DGXJtztdwMR4RuvqrFxb2K9t5rR",
  "key31": "4hvFHXLDBMakjBruA6rvtBRPnzVjUnmLkLoX9RzBmXXeuR4zcznUbjr1CK2XQ8Cb52yBopMDMXfNkycHQ5aCPuki",
  "key32": "2HXi3JXVEvMFEiRdUU4r79TrhVa5xzvk7hjTiob3dppbNrH2nv68CWpSdoUkSqdakA2jcPn7TC6JcP4f6dPxv9qE",
  "key33": "29M4XefTcSn1gWizU4M9Bq4kouKGpqkos2oeB9QKMzPUji4aiyGudfZyWsvSgxuCgpq7quy3BbkBq2aNjMgAAVcp",
  "key34": "3PgjfcZhLWLzLUbPgLsqRZ1X6KLjgmHeBGZdzDsUMh785zpif3VvbgQt8NZGHfNkdkYn7J3iqVmW4dCB3rt2NDyD",
  "key35": "2mSKLns69mng9wqLFStPigvp5DHyHd3w5iBj7Moft8y3MfqDJHgbYkd7rnnuNkmXCQFSHRsAdWZZ8idxiVGzKuz6",
  "key36": "VvRFHFEcvXZBqVy4pnGBimDj1fKv75UUM9cPono4bZSfRdDXu1rfuWXwgg9n6Z1RkqM8f6snWEaY36kpbgJvgtJ",
  "key37": "3XbnU7jswLrE4a1M7aSPLFW1KMgiy22d5NRJsgQZsNPVadEJP4z8sVdo6L4pGeyqcJQydiQ1Yw2KozFyKYpZMpC4",
  "key38": "2wjYjBz8vkqiUEWmkawLy4idcWhEdGfhaSMGdLVToyt7RgfJL13YFCHku95u9LMNMzPSpNHftBTax98JeioQ9pA1",
  "key39": "5gSmCjkCurbBvSQVWJdUGRotAZinktjj3DrDpdcG42tzDyF955A7j6wjjAYffEWgi2kTJnWSbQoCJDuSbHSAAUTQ",
  "key40": "2NWjCaq45xrUPbAwYXUoXqufJd7Hkz4BWLPuvKBJdsXaHDejHt5qNqWAsonjGGeZNx4W9dBBs2jGLtAK4ZyiM545",
  "key41": "3XHhqgCMhokMmff6YP6r9TQ3RLJEaCNf9BTVoQhPPpiEH3WMWQ7BZzAuqyPotkXZzCfjtiP6RPqeJuohddxAgyCB",
  "key42": "4S8Fgt3SYgXugDAK2iXrJUVvERVVExBaTTZxtD9qcw86JTYprmTXF6jkLARgCGvqaiyNV3cQpLU1ChgeLzCEYD2i",
  "key43": "2BhTNS6AHX3MyCRDVjNBgAv7Eci4bZZxw2b4NbB7so5U4Gw1hBxhWu7UxWTQQtPi5y93dLCeLzzRUW5qHu8y5QA5",
  "key44": "2fMHamkbsM6VaDs3hMjtdy9uuzmwfwp7wH4z12H6REnTnHekciMQY1VjXfjPE37YGFNsWG2g8jmwBPJLy41nxsWR",
  "key45": "vsotw59zVLCu6fMXTTkSaieeY9TRKcbKp6xJZi8KEKp47iyjv12FZAEhB6bpj57vcPbuTyvq3dNwovBbGTzqKrU"
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
