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
    "4ywGBPBdWCYq2KKL9bMu39NhibPamNmsvyJC3t9Duvqy6vQiRzSoSYpXzSAZHoQTQBktLbqmMkQ5WD3hs5K9ACw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oogXmcGYWryqE2j8reJCPDZtYVM9aXixFYwBtecY9JE5219H695twP6eyntvF5Z3RCo6xpbUHo1TX9aUGyFZAi",
  "key1": "3bqDiJwgQocNuaf536w2SYQWmKPgm7z7S4gooNWqzUj53w7HvAFSi2YSSvkxj2wgdkna7uRQhXn9mQ1RpeiknfDY",
  "key2": "124L8rYg6hBCudE6o9zgjPxjb7AgnWWRzggjA1SNbwkPehwQK4Rw9Ra5ZhcmZvGRgmssTUnngpZ34n4sLGj8oYGK",
  "key3": "5G1MbEpdS9Z8Uw4EyPgxtCn4qq3nSxBbuSVVCAezGQFTsp9sZDzNaZxficA7F3bgNib5Jk2ktKnaNFd4KxnTjZZC",
  "key4": "28MECWApWGG5LSfTXbYoGDTcfTzihPbnjiQqWDkRxnMmaPPTpeAQsN5Vqor7cDGDwd2wKSFmjvjzQcq3tJXBJNxj",
  "key5": "4BpuJeb3nCETeZCSVqR1MkdgtM1THeksQxmNs3E58YxK1qzwsSwxgQfk1stqNJecstdcTn2ySQQLi2HgecbB8UNh",
  "key6": "3sJtd7ry6iwbMQ31cRHjqVbPq2hKZQ1umFpKkVWNEAov6yf5wrJUC3FdaRKNqMvg1oyVsajc2NbHb5caFgFJeGRi",
  "key7": "5nrbK7w7Gqz55bSBsCMPjTCDo7Znnytvhud7RseE4gm1p7EcyuAa5taXQ61kuKk1EhjrJGnNjJzUuveYKfTaNMrm",
  "key8": "2W1P5j6Pmb3kXPMo9QGTiK8jZpBq12pYwa1p5sDai9EdY3fM6w6TAPzCseT6FJyMoCVLqX9oiGdhRJcgMEDZL9DF",
  "key9": "3GbRhCAL8Qte7QkjcEg8rfaoQUTx21ydpBfN71gt8wjHrLof2378ziXVAmWPgXsBAjVNsAaZysY3gvTozzXBrsb1",
  "key10": "2uuxrAscSpSgFhvya6BHgmzw6GU8tnaaNe6w3sckR3ULzt7qeWa3fRfeuCwT6ihpK67sk8vz5wiMJazq5Fx7LLDK",
  "key11": "26ajTVaaLj9zstB5nkMPBGRDWCF1eUaL3emGxgF3G41EoMoS4R5utGaygPiXuCQgdb73azpEWQrJ6jfyxATrSxMz",
  "key12": "5yzX4qE6fT6mr1ZBsXweKhdwQZbUcVz85cstTE8yPowaDXaLzj7XHyFZk6inQmEZBSwtS5UW5vuzuZ29GMi36Up1",
  "key13": "5efgmu58JddpziZp6bUj1ArJNoNW7S4o23xp9zgP83mJwWCH1NbdBeqx565yPAZ4YYEy4cqNW6W7Puoe9iiAvyTu",
  "key14": "5X2mKKaqWX4H1Kcz3ZVBYVmS8T35DPJMhzQUuYAG1Q3akxUERCSh8aDdDiphP1t9ARKzeFHX4AHQP44RFHug1xSp",
  "key15": "4VWT6J7pZsYGmPj7rRxNZfCjUr367ADqc7PA1RbhYxSNVfwe1zbj6AaNzvTG722QwYEd3FKAq6bwLxWkDZNSAdfe",
  "key16": "4ZJWXb24RWFexgg5aqdBFRWaT3xU4rXUpDgYGrbtNmfrrsSiwne49Vmq543den3i6nnb7rMYQ6mpfL45uMQ96gPL",
  "key17": "3MjtJehGE6fZVqaDLUymogo6qgcNdT5EQ6aCEcCFUXHFg7J627RuWRhJjGK99nBafDqev7hiXKFqAZR5yU5Yz8sN",
  "key18": "4BsafqFXwCVTeDkzwMbTjW5jPn4mDqKBWpoRsSFbAmu1n4WF2QXnHjNLXD2yguxynmgenGHpTEEMBjME8BtwTwHA",
  "key19": "HiQ3daAwPRWCMSo4J1TkoYKKUvXWJQu5XVN1fm6E845Xu7m8wFcHWPB6dZaw44bgNjYVeKCZFwyCDuA2icuCeFZ",
  "key20": "233u9bUsia2cKzgQXkoEQjXeEYU9pUDcgYZs1wpNd3sSdrNVYGB7N57C5zKPrQrdSFxb7BitJFzFZgf8Nmskwov6",
  "key21": "gqDzQb82gbreBm5LRdmuaMsxXhtBasZEDaCoEYd8WC7gX2Js23RkAKFGRcnXewDZ7xkgS71vt7zT2HqHReKGCAz",
  "key22": "4TNJgfAouzvVcc11DBMDQfJ3aWALqD5uzNR1Tc2HTS4KgpAxiM6GLjUmjA5569tFHBX82uPoJTs2YxNfQJnxt5w9",
  "key23": "2sGUmuhHRbqmxUFdr4ZJsL5wt37fMe2ieP6XmEvjJNEm9eJ6oXVUScWNmBXpowSxSFgTYYwx5a4utjQ1JtRuvZER",
  "key24": "1bn4WgzW7qfPkhJbgWbsa44N6te9zE4N5gXvjXiGfHNSJ2quWSnLy5iFxmqtSo71wmxvVTdgXsU7A4fkoUpNzkD",
  "key25": "2sHT62tXNVn1wcksP9Ro1ne9g4DHZLaoYnRRFKA3rqxXKNaQo6Rkfs6ngjuET8m6PySEy2vyw2rxmL1DGrnQq1jF",
  "key26": "5P8nPLX3Rv1Uzt9heCqS9Tafo1fSZ54b5k4mq8ZT11dTmRkt9SVLiw9rYeu3p5SXKMdEKv6TVx4wYARELY97DSNh",
  "key27": "332fxDVrmC6S3u2As97TwXLfgGKnEYqu6FZG739ZP6uH59axozV4ABg2pzvqTN2jAiUx4hnCVFLYJHUaMtWJCQA2",
  "key28": "2GVPD6hpF4pDv7ccsdhko8kAfbrcXdjQ2qTHPRBH8SU2QcWXC98fbHMYX2SeJiCg1yyULdgySrgC5wwa7BWybkRn",
  "key29": "NQYsChpNSP2cVMjvPT13PDRZzcutF7CqoTPDUyy65Z29miBi6uRRB7bfyyhAeTYenykw4EsYaaCnQQGYCsVvUuM",
  "key30": "3CVUVtmmXcpnCro9dpZdLy3C4GC6tiNKAid4Ko8csBqr25S71YERXSXuRfV4qBDqq6eMDHCUL7PZ9qL2knirhhbq",
  "key31": "352sXD6EJkoa3jth4MSMyHzY49MAb6SHkkMgM4fUWtLdtnzDbVc5h4K1n5aCYUqmgr6frNqEiBWA7xQ2ZKvzKZ1S",
  "key32": "2jPuaEyKuqe687LFMGtHu87rvbj3SgqpgkcAuEJ9LcgxhgLu996Jhhafdnam1Pz9p1PF2Yn8axp8eiGcgeSFVbKs"
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
