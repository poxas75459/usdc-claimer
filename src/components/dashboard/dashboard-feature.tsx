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
    "35zzBZsthmcgN7BveA8PvGNJXEYnqYkJo8Kw8TiCycZPeUgNUsDFEAg2zmoESsL4TDSh38QYHmRGaeBT5cpMTmdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PrRgJxBbL1Ui9rHz1PoXQ6xFTUfSdqbP27hnWQCzn8LJtihsxjrd2We9UU85tXG9FyFBkguFzNnHapDngWfVrdh",
  "key1": "4gqzn3Njd1SgoVmoUypRzB5CdknChF3xoTsm7zqAG5hjmGi1G18eATkV1bjXjqWXHbepmXmZqTnNPNuYAxDAGy5f",
  "key2": "2mF6s4pZ13BJ6WE66ni7DdueiMeEMXyMh5752KLq31aSbcfZHPDLdjhdgKbjs4qfcwCPTcCzTBjbh7ueBLJ8eQrs",
  "key3": "32zzVgene2curwjg7mnffDTxVQSsquWDB7CQRBMmXGYbmyLhjW3oRiLKLk3gVaLzVi691ECnFVNcaxZFey8i6JMo",
  "key4": "No2LdUhFwGRWVJ4BsvZdbdTYuULrVA6dbAqQRiSUWZuwWzSnQoVFES4jthzCMdF3sAThuiYh69QZFHJzKZdPdHg",
  "key5": "draXSapci5hwnbycKoWSDbPRgnw3AcqY6ApxiCZQWShbDiQXa5mSjxcXwjuEzr9wp5QAFbqdDHVMJ1WYeCi1qEM",
  "key6": "4dv464ycjKLJaqKVGJqGi9BT1xWAP84CF92yzYHX1vDdu2Ndz6o3ACBhZkg19BhTSYNCvkEXnD1RvaDBARdzuBse",
  "key7": "3pDDbuawXKn8FVMfFyfbaeQaoPEkXXwDN8j2Vbfp37B1mLsqM7FARDWK6od7De3UycJwjqTfngphtabqfZ3zZyiN",
  "key8": "Fot6YeTXbospkeXeUEEqHCLjr8RFeJbCjnUjLSKKT7pGEaeh8t1pY2ieRjrWzKFpT7FT14RRvTY9DX94Um4rZW5",
  "key9": "24zjmhKehw6knEkRWS4JNq9VUg5kjgcsftUYeqeCbHdFJhhfhTkX3yyT5Wjq23Dpy1UyGswQprtjwntTjkM67Zjm",
  "key10": "3BTkdn5FHEdZJj6g8MLcy676tFYTSFLSGjy4HLZAmWXEKsQUju6gUH9YX2ZvP9ErmETAyZchj6hBmLNSffc8vagx",
  "key11": "U74tm54wjxm1siiAGde24tXzfN14iWX5FVAYYefRdhqJwEXWTkgA5ZKRHtRDHdS738KjVNZEgT7pu7CXGueFbVa",
  "key12": "3ci8Ji1CGqRgFTq869Dsmey6Dx8NrA2QFJ7TScRoUaVPGV8KBEe3UPktVToZ99WKtyKP1d7Nn635mUuxsca45Ap1",
  "key13": "4rvaC8eyS1YqnntKjhG8s4doURF3V8xqoZUEM34GsF3iadkz6Ty5jVe3i1wdCFxK2DH6WzeDKmUdyRMq8GE6VWyP",
  "key14": "LYdqF89VFpzVzeSVz2ekg6Fpdqb2328U417VLRwqF1BkujMy584QGyU9Ar4qK7aNJfVFwWr43et7hKBm1CgzAfM",
  "key15": "VDJJrqpmcduqecZrbcXyd8eddJ12WdcHawnYSe1gAVzsQoBXTZEWNQic7MdcLd1AgmgEPLaKwxPdyGwGD9jeGv5",
  "key16": "2Es77rKmt3tYVSMaLAUDaF6Yjrs3vzCURy1c5ZMjP9DfyyqAqnYejWyHe2EMfHGefr6RasXP4sdJvoLnXTXchgZb",
  "key17": "JJ3tZ96NX2PEn5Nq4qTi1xX4kqqqTeb6hjKx5kPpAVGRsvEjPm2bGvtX9zA5yjrhe4mS3aPKHEccoh2YRv9dpf5",
  "key18": "4NoJWYQgHhRQBsBgWc3DkMfgpeRgaAC6spJMoP3HxitQjhoFpA3XaKt6WZG37bMdSdGzydUUsk2anhCFBBGU8cRn",
  "key19": "3svamaPJXjNX5JC3DiPMm5fjQoa6gRfPofUaVsWLknX34fRDagZtji8kwwgXqsChZGM5KfsfSnqvYU4QuAKajN2G",
  "key20": "5vPofjHwBR5ukE8GD2VaLC6jdoUUpaFtZ3B9DErqE9ceRYrGVNVop72U5N6Nt2Not6PDjRoQyPGAPyDebqgPShL6",
  "key21": "22vz52DTM8CxWFeUXmCBCVJ6Dxaj3mCoJJbFuLVrNRmj6i8DJnbPizgueDv9TkAXCQBbS3ijvMrEgCZGUZcR63q2",
  "key22": "2N7ER9C7F7eK1552aWnNhs6majmaCwQGax4AS5o5PBpnZV1x1u9o8ATE82N5HESjptKqth8MADowNwDYq4EjoR1h",
  "key23": "ndKMz5iT54yFXFxDpmdY8o8KYdkGsWZHgmhvYHqx8fPQYBbYi3WkA3fCKCiS7bhvV73qiqAsAqW7TTbr1fCBiqb",
  "key24": "4mcf7gCMCkJH5FLZGjGUvAMDiedZJKfJn9FL7G2WyC1cTWJdmpwQHs4J4ncRg69AL62y7abotH38T7hFKpk3Ymx1",
  "key25": "4HK19aL9BDmcUjBJUz7jbCgm458ELSJxJzshptD76rrEckDJD7vsoQJFNtAPau3U4n1wXH1yAzkuFT92kdXPHSiB",
  "key26": "4eWAPjvhP13bLmTYSv1dVD6n4N2ygnix3J9WaapcVsTjXrqspXL3VgJknbcHLqfopndjQyMZmhhgzENhvaAtJ4sa",
  "key27": "3kUzWs8L7z6SwdAkGxjW3up1Hg7bg7nq81NPJFAkbLrWHTxRh1KfzTMFZzCkxGE82BWKU2LLB5SmG7XnJYVQScPE",
  "key28": "5Lo95SA5oGDZ4bzwEwXBXb1agNsETXWS1fj454Hp6z5Rf8HMAczLtVQD7xyNX9ANhGHrPatu5jWp3TJknkYtrscu",
  "key29": "3ZiQi12oe9fJ3vdwS9GoScwPPZ6Sm7iSLPWL55hVd6GzEVp3gKUVoxqRGZFzdPKYy2BsgDarBanRrvrHReEGCpQs",
  "key30": "2KKUaNHXXQsy3GnKX7Gjc8rHbk9m82M1oNiGZNBoeTHQUyz5tscr4FrdfGmUyg97WbqnmUBuDbHdLdRkmTm8eJtT",
  "key31": "41faWrYo5WgSM3wzcEHeEWxJon6dPLDW8AQytVmuATYyQXd3kTm4GLiyQoYrrEh5N1hiDNQFnvsyZtQzffTPeNRd",
  "key32": "5cyJ9JUcbb1rj12c6KtPp9uTxujWdNxRCUQFHzgkXssmFfrzi5wfYU5XU4pK1f3nK9y6JoAARnRsTZpcP8sEBxCf",
  "key33": "8usSb3h2MDCuCyuWBb3XDagJLreeywF7C9C9mbJxB86i9se1sp2fu37RY5n1cYu29oYWCBGazE2QDRGt5tdo2rC",
  "key34": "5ieVCKH2ujCH9GZyhVeTmcmSQkirqryFYDvyHLNnQibQu93m9tBxvqaw7DNwyBTUSCbZAqV7NaS2cXPFMaSHRP66",
  "key35": "redqoQs3s5ZBFZyUUqzupfXHw2rLYFFJNJMi5z7NrVuZwE27cVBnuzanKr5na4yiYENzusjo9Szmg11MLU9fmQ5",
  "key36": "3EpZ4bD2YgAKt9mgtfbxYpbNzoUCKtsuJm5vpXSxW4JdBXKL1XnfUQhq7LWZkvQrG9JLxxcntK8hEjxAa3HU9etx",
  "key37": "32RqbDksBYhskHog2wDLYPKw1ts5moq6ucBnrHLE4KdS7PhVQob95XB87F4L5cu3M7N1ekbPZpHJcyC6mUQ6vksk",
  "key38": "3qUxuBUviLFgz7YCNGghjJ1bEzhWeJsYVeRfSngc8Gn58Xe7J72FLfGfpFmNqX2V4Ao8EixR6wv3Mqn3dC2epy3w",
  "key39": "38ikkwzNQKEC4ZGo6cS4ufSzqkz7TscStFSALKfj8nZYa7T2WF2RjaneCbALEpsxK8ie9Lako65NTiJCDwNr9koS",
  "key40": "4QtT8LMBn6Hu8cZs5kvNgueMcrYQhEusAXTXZLnJyPyq56zjw52oyQLSSpTGundbKFUKXCGWfJZPjqLrWBDAcpaN",
  "key41": "5YgQ1msbNv4m7fue1jgMQ5PaiHH87pMK8MbXUHLV2JJcFd4c9uCSgHWpgLppGDGsof2R1fVq2nJHF8N78NpaMzBb",
  "key42": "4MM42c6wvWv3748ResqW4XXuMQuKCKz1nHkNbmHvnwR7qF4ApQbNXRfFU7j2oprUuXn4dRBESs4xe4u1hGuYw25z",
  "key43": "5UncjMYN7xdENGUVvaBcFRmYLDP82McgAxmXkfUZ5SBeovX4T2vESDLep47ZaEhwGJ7DuiUi91EhYYdjZTijYy8M"
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
