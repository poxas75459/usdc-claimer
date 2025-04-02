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
    "2NiaqRTgfSNK2rGWcciEAdhq8zLCh5TusZLLBYFNArSZZueCWfdF7pFmbuQGpSgpWvrBEeDjHPaxNLBHy91mT7tY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48exFLxsnne8zXFN7VKyv36ZvULLyjHq1XdmFxFJBHEiTQvddhwX7UVM5b1B41ix6DB5UBbBQxd4jriTUjcVkBAh",
  "key1": "tr3a1apYk9zWQY64qeSBweu49f7rnsk1S3CNi7sLaRE8GwHAtyQuwyq3f81STnxFBisbiVRpyxfsj3xRHHM2Zfv",
  "key2": "4w7hYzwPh3p9NzmvLMmGzVceKfwSETfgPiSnJwUFhsGKZqK8V3ZEUCuZw1641oFLuWvWgnJ15MBTVciY5yZqRUXg",
  "key3": "5msTHscbxjj8znZgU7HxZpht7Lh9pitt8Yg2F4wVjAjfv3ZGCMjSAuPXF4xqqbjAVvyqyq9RE2zP8WGe64Ki961y",
  "key4": "5FfYFoJcQVgkdyNkreB3xbf8kaarHBEqBhaapXv3fekLAT8PTnPLm1JoLS1LPnL2BhKgRzdLbkHLSbXZuzbaSGy",
  "key5": "5vrfzFYgjYmA83Vyg3qtMTJETky9fuicMDW7BQcEowMszs5sKiNUvsHVzTonmxiBicVNzKMEB3LUgenxLzeyjG7Q",
  "key6": "2GTatEuc7MiWKJCyJGNFWEZgBuyZWvUtcZe1wfQc1og2zFHSDTbrWLURQ94zSX3FMF6vrEnKJHJ764iWPNAynxR7",
  "key7": "a27VHcwdberPEja1rRsnE1Y7Q8X1HksNc5FebcQLDcCKELs8K71CYspyUo1GRzBrCbXTH3eVX59T9LfrNgA8KBk",
  "key8": "5CaJq7P7UFpVxX36L2KsAAm9FsK7a2HDBSGMEfBdKPBccE6n2GDJkbEpbtWt3he3adHjPuNndDZ7NACLRSVod6kp",
  "key9": "5dsXLg1u6oArZtxqLdKeasFfU5YYRA6DZWbSE889SN6xhFdJkfLXYpnpBVnBa6di8VMamWk4uvrTRGH3Zd71EsMx",
  "key10": "3MAxPRAyqq6tWAXrU1mykZT9a4PYJ8DETzKBqmFQxPzxsfuiBddFgMd69Mj5xecD3Z69nWZJsp5iSCHmGrFAVr7P",
  "key11": "hKUv4Q6CqXSdSjGK1aQK7C8HgkUQ62osB6oUTNu3MicHLKurZejYb63ZtGxyByjxZehwTd8nG6QBinJM8p7vjyt",
  "key12": "4ywkZ1EbRXMP1yQzb88emWUR2AgoJJApEU53FyvFvAR29L665JFZbvh3MY1GdKYALwSisofSWL68TT99G9tsVbqW",
  "key13": "2DGxVYJMj1Ku3NWLStPvSHKdycD6yAwqJBQQt2v2Gvj9abFTMHN4RrJL6bpRDx8dwHiXoAossjyVrVWBMy4HHx19",
  "key14": "4Rc2QCRzR3hX7XFG76N2UZpqTb3QWV4K4f3VhFNr3AM7cZaom3HhM2DKfUrHEk9cGxodN9DKvGQUVJTnxxmfFgFG",
  "key15": "3eF4xmMP29P1hEarYF6YMCwVMM3pz61rDpW82NghMzqUNrUs7QT2BRdtsL2TkY5T9GctmQUqggA3Uk3fwpCFYBU5",
  "key16": "2hJNCFs5Yi3NjRSz17zxTQhLMoS4ehKzozRbs56zKZxmsfRttJNppFteHVBJo4ec2Hb5qcUJL2VwSFC9TxiEjzwj",
  "key17": "24mPnXeSNiW5x7i4Qvd8C3KisQkvzvvDj1ssdhGdkfUe75kJWWjjSAP9REp9PYPBJdnMFWDzViU552PpCxp8ZDSC",
  "key18": "2SfvZsFJyifxKz8hdbirZu21bMiReJNPu6Et93iJyJQjg3BVChtut64ZAQmuDEMpEXMogHH8t4JZWHjaiQyfpKS6",
  "key19": "3a5chHrtHbfK3xvFuqgaN9dQY2HXJdhvNNKBPG6LyiB2vxkkPL7ExCLLmZn3MFa1XeqLFGsp3XwrfaFkEZSu8ABv",
  "key20": "5wrjoYsPvPjdRWK7Ga9mbsmwxmUDfuuK8qsVTi6pg9eJ1rJCVApTxv5F4XsnrBpAUj4z1You8UuUAEPG6D5dufVF",
  "key21": "43WKNnDrsHnrVH8o72MWcn4Z3KsmvxMbYnMeaJKfGC7htkNHA2vzzENaZMQyCrAfD4SbihV46VBeWBB7uECzdd15",
  "key22": "3VJm31GsZXmvmW9BSZ6DiHhnaGURMGup1SZjY8LzsUH56vVHsDnHDsB5U9rf7bYaoPcRyjyvJtRdKqf7ZMcMuES6",
  "key23": "4EF6MrVid4f8UNb1QcDMgsnhmMxS4WXWM1Z1Bi3r9SSoPhb9cwsDxfNsigKM3iDeQXD1zbfgN41ApSjP3zZLUFfc",
  "key24": "5UmJLikTiEqzVwUrSWY6tvtAjLL4FFTKGEXTetrvkMmwMASrLRz5gjpufSmUw6JQa1BZYx6MYSBWZnHSRan6Eb2Q",
  "key25": "2ZbBLvpsnjHfiDrYCvY6END1WgAVBcbDHEVNpS6pueut69i1Aw8mSgE6Mx4AYTWobW6W1w4bwKQcEgMANpdmTM2C",
  "key26": "45pdithsLP6uyNGLGhTHHYEQhnbnPHG2BPvkAgFrRVm82CPKyLnFCLe6kdWrZ58Pixf59KbmfAJJXqcTKJewjNG2",
  "key27": "2x93wY6cbNRJzVapHU4t4mr8cHvRZA94nRDy1qkKVhX72waggGkvHUPmX9yWLAyWwQfki1cnNDVWpUBLgEY2VLci",
  "key28": "3vJNBQHMELCwrRmsMfRc6e9jv4LFvWATUKqqh5swKxTBA6ZdAps1juKeSY7oRCgi4ZXtJmsamv69bcoqhB6cVzD6",
  "key29": "2XDAPkX7pBRCPxpBFhsMHyNEwCGNAfbwcS6GDWNFQjRJdqS7dW5UG3Sj568H6GSSMvPLbfU9mtgpqk1yAW5QPbEn",
  "key30": "3pWJiyLQhM7bG3o6fZJvrXv4aQmzQD9Kd7KcYVFFjbQ79sqdu65TtfmgS9fa3ihop4SbQqxjnKuMEbbgKgfQKjGh",
  "key31": "nCihaqEm7b6rJAYMFfPHoWV5BgfityLu2ErZwHinhZvWqFSyFQDLdqD9YkmALwhVr5KbQKjD85C5htczJj5FRod",
  "key32": "556rS95juYRDwKPtGXttwYEjsJuZYDfDT5iHQYrSwdkj2rKf8AUDKkf8GZN42Cq2jUmzFkh18RwRPy1xoGSx4ZGu",
  "key33": "8E8UQmNGK46NemxdQ6pjAR18ZaazgzMzMdVCvhGUvPnRw7F5A27e6f2MrpscGRSd8SPLcY5mba1hrhUFZ2Yeoib",
  "key34": "3Ut9g2nF7emz84pS2HKB9Gmb7ZqgAQVt1Kv7YuumL4qNfWiXhD2sXa2jn52hv32bjq5gsarPAwYGgdnuTnDwNsi6",
  "key35": "7y2oBqvnZsuvU2wENLVEHFSwXfZMuhCj7dvpVoAirzxpPCUDdgmDYuyrYGb2F38dQFAFcuKA4D8EFmn4g9WUpbb",
  "key36": "541JFq5s9Wq3TwZQuuB1dfiiwbnxzeBvrUMWJPxmzEH4QY5XUjRfXz7HnnymxPEfbVJ8W7Dz9YY1aL5cZmpQa3nF",
  "key37": "VbDiK6Pfj7NjNm7hNJ3gvZQLYpW6wkuHHAn9MYZHkyGKdg1g8Mz7uRFEpCBxD9ufGkB8wZZvHevhMPDQ8gufGAi",
  "key38": "5SVh3Xr3EdfpRCDUuxfWqQskEGtRnk6D1ubcAghSfjYGFyDRKXkwUvMg2nKSkW7Au6FifqJXvz3n6TLFpmXTdiBu",
  "key39": "MQLJPUDuJ4hGrv6WrQmvXTsyCyjmms8qKJUua2S4AyJv4bJHdMy4th19CkiTqN54pnJAtdQr9CSpySxtcMPK3DE",
  "key40": "66SVH1S2RYqiPUeztwypB8o4q8pVJFAJTJ9NE1cXW8owWqKWnrPoVbB1fJPhApqKfdMdxEExgZotsBniWkL3hGPT",
  "key41": "3B5V8kCHkMU99jRFx21SJXreTkkMQqsG1ew9n8E9X8e8EMyNrxj3VPAEkn464XCUjLzv4o6yNHEZcuqBhrctsPPE",
  "key42": "2oihDd8U4yaKVr99bZXTJKKFoFL6zy9p2fbPY24XNAKVZxDfLxnWy4SbAQYqvzX78epjATciFERmfKX41YokTLyT",
  "key43": "4WSR8DFWgzMGAZpkZYzaWdgVZeZYvQ3tM85MMCwaytGuWxJAHkxnHk4PE4EwyhWdN5eLBfTShMBy2STSuEkfEuj",
  "key44": "5ygEDN7bYUGXq4VfE2fiAvneCFNM9ojoT5m2bQdR97UevQBfkBZjzNawHdiGtf4jWdTXCLHsPykYoTuWaucpHQpj",
  "key45": "317scSN99BWhMMpMUW92gsPvD18qLKsV1FYNKPCB9UALFmwQKG5QdBZcwggtCnug8NZ474BzHN5QKW2yp8gBKUvm",
  "key46": "59MN9fkNajv7RLQrznxs24RkL9xVtTnUvXXAfTqXnojioeNiZ8fV7uFovtCdX28jt68VxCkCBpMuNiCMWU41T2Qr"
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
