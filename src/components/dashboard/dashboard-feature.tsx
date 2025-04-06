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
    "3HsHk3Zf9iibndz1Eb29oQ9S4G7c9nRXyY6N9ABpjo6bWXUyscMMfowH8cUNurhQgaJixBMteRJGb4iQtvWdFucT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mw85ThWAL788yzQ1zQxKJKkyK2AcFu1e7JvSP9G31vdKqbm7zw3ejf6iNUy9zAdxLE52B5irpotUdzJSCRibk5t",
  "key1": "2X8v1SkTzmf7Z3U44qJfWa6ctzYGc8HUF2UMn5H2ihEePSGGEdSMDR8fK8YkUKVKjuTAMfAk62YLRHttroCX2oZZ",
  "key2": "seKkgry49VYDnxXWdUUWkCHMwcCsDc1Ju7gi4NtBRP5XcpcWbDDjgaVa13Y3XYYUkaeuirCae6iSP1KDyd5iAZr",
  "key3": "4w4g7VV1CN4Kzw1tRHSZmyeAtsvbqTnsMcbofvHXrrSMvpaP7LfpKxMBquw1EUvwNNX46hdmTQFhS1WAB9J7Mvx1",
  "key4": "3zZstLTuiuUe5Mec1ojr4iTY111RZ9oSQngt7yDKm2jaRzPzAcCg5tCAZdktmKnVxQEwBrCrRmevGVWxGoVL7WBs",
  "key5": "5uqLy8wQbix4zh1n8ZzBvtR75G83hEpVTbCCE3DuXpQVxRVEtTZiWn2W4K5DUGQWzQ5RPmt3XGpYN6TzwsNuYCtr",
  "key6": "kkq1FBP5Q6x2sJgq9gZvbQAvULfE21mRkaP3jAQHksv4PnZ8XJ6sxupw2rfiEM9EB25MLXmGg7craqGJ8gkFfUJ",
  "key7": "bAD1nfue9BaEueLEjYKe1XCkUtTJYL6tyyXgDSeHYsh17t3WmVFruCw2GovnpBes4NAQVyBTBmi2YK5CQC9ZYaG",
  "key8": "2dRmedzyEXWGZM79qc7hjvsNosZMXmrvMz8znk7MwRdLccGN4LX9Eun5r3b4FaHnufg13aND37JJRRActznuLsNc",
  "key9": "22gPEyr9umv2AgJtbm3sNYkWxN3FM4DjtjfgtMTnKKen87GHjBfeQQuTMF7Bw89X3CWYWr66fAFqvhewHggwvb33",
  "key10": "3Yafqx9cYn9U4LNN5yaF4Ni28KNDczG5mbD4vcCyXonW98xs7jwTjSXAuE6WzmX3kK5vfENbuK8h3RTr1p8nhBmi",
  "key11": "4K7nVXqHvW6a63Vdta4CnPd9mkHsqmhDx3GovEufvWZF6dXAHJiLJpPNtkMHevAnRZ5UioyUUk5v9qUxVFuaTgVJ",
  "key12": "5oXwuc8KD5Yf2MrqtL7TcUsFNtYdzYercLMFtgD1hNNLQuBUYfjqCQ7B1ttMNgvaTqCTnNUp3Vvge8GeWQs2DC54",
  "key13": "5WQHU7WTt1Z6n18ZUBadADXbxpvwRxpz9Nenbfwwx9mhk9F4EiqXXNuTcD72ChxJ1Dxb1wzsAyxKtEHpLgHvSgiU",
  "key14": "S96TF8Y2oZsFnmU4Kz1rafsTg82t1JMuW9VxLmgehZpBfGCVWxpBpYcEiMskZ46sLAmUF6UrPHJDMuAfyL78q9d",
  "key15": "48VHzuWUci1H6j7PE3CDWMokGGo9rRJMe7rCd2qzi86efWcQ3hFD6jf2gF227J6kNjE6wSThNqq7dLswDtKK4f6u",
  "key16": "2M52sf74nGbHNusPNAsTVBS6ATYeftkwt61uyZPDZaKkyhX32J6r8KJWkmHUn5YFRrfDWqZFgPcp4aB19HVHuks2",
  "key17": "39JbVNjCzBUTWDzD3amFiDSSEXP4yjiQqEs8V6UZLt1GG7SrpjA8Z8UEDT16cfxxx2m3GzbURZYN3WsDdbsW5J3U",
  "key18": "1qJbxNWqVeznKzxzgJHhABTe7tTYWRbBDhyUmUWjH84totdjWmjiZHGzewki3enRsv1X3aJD6cDbvgKYw4kbuck",
  "key19": "4TQA2y3pEkCAP9Xeb5vPtb2xMB3RKyMHCZQ76m3Sest3hghF3jZtvZK3Gc48zg2tng7MDJ34LbKFDP1epdpw9Y89",
  "key20": "643vyvMWVWY2kzCEN1i3qCrx1mxfcS4R3Q3bN7fu1kB36eYH3QYw4cyJdyMvGnZhxRe246aH57V6kQ5VhPv4p63V",
  "key21": "5EdB4xnP5QNgyqWNho2f9cmjAytpnrztzNinz4rnafc9db6txBEJ3wF5NvrUwCR5z13SviKqjk1KuCs2RVvdqWJv",
  "key22": "2djdffukJL5spi7m68X1vsdvHAVxjoHzGgWn9yXWBcGS9PFQPKMtpQEZrDcA3sYCczGcm6eYTX2WnVNUmPg5sMws",
  "key23": "4GhPN7cvEP4vRHbdAZSywPNWzAW6DffEFaun34EYve4iDcbECPkjiTjunksNKMWWswusE4mgSeqHV62XyYERGc2q",
  "key24": "5kiVhPhCoNNTdKE1SekjvdAUbdCTomrJDPgtyGDx3TC9owFP34qLHJvPCFneFMFGCJ4in1PmNT38aYywp9q1yLnp",
  "key25": "vVFYbyakjLZNsmxF7o3KsPDuJSC1JKhuc5uqXRXTeEMjFG3kKKQLqE7NrSsu8hzgCjFBHsjyQcKqZxaafS7xfwo",
  "key26": "3sdu4fuQeYnoF5AxiaZWxjrHCBz8N4XoFFahNGseBWPBJ92EZZ52ZYP2CSm164WATNa73DDVGJrmKw59vrYzf8b5",
  "key27": "3BWwZFkYF6heMTqXMjxLWNaKxgZRuvLq7rY94hxXsscRrFBpWQAkXNtJr4QLKytL8fp17TRr2iBs1eZZqCMFErVK",
  "key28": "2BXVtGcwdKfBcbdouS2U7SC8aFxfm6v8o6Ng3MkBmoumhoXd5vssnUksWc1FaxqqVrpkBhVQPuWknXYd7CrkQ6zC",
  "key29": "W3jE5o63vxR5Qo4hqniWCgUvuZMLRhexT5dvVthbYqQVMea6zkZuPzVEr41zj8NaUAfjkGCeHkUEqbfT4cnWm2r",
  "key30": "66juscZvkuBUpSC55y6h3J7ejgFUUVFAu1eLcQAveQGyd7ZzGMhWvaqtEzFGi2XVxFxuQdxxSQYaZ1EEZFW7aaDi",
  "key31": "2Lmcr7hco1tUauFjQyqX8mHYcUquoPVQbs9jpRMC3SrfMDQW5ZJL5iE3k8bZfADVESxcFg5xAGpoSwLL28zgxVvg",
  "key32": "4nCRyKUkgY6X7ewymxJLhuAH8iuNvx2nCCkaghgyYDy2bwkEaYJxqJFQRbHJwmdJgWS6vVDY6uGDHJRVDXdP146y",
  "key33": "3UXVKaNBAEVG7384YGgFysYm7ZGYykuwEnUo4vaDeC9foH6qE23WLoFp3bfkiPitMKCRBNniWGeHis56ijywVcyt",
  "key34": "QCptgucDZ2ftUcnj6Y9Lu3dpHTsAQUJtfVfjqgvMeTRHDstiNPGYiJwyn48E8VJFUuo4eVZz89BH3c8D5TEy6vP",
  "key35": "2XsFt3SbyQUpvG9gaZYqKvPaPyuJtRJBjmH9eRb35HyRj2etrxyAbpCkZdkgafcHvdf2DK5knBAsDL37EDP39hoM",
  "key36": "5shDDLzttNJrPVYFgiu99r7843TAYgKXLL3BTXdxSJR4bGKRa6fNmtKCu5qu6x66FSvVmgrkgvpSqrNN8FX2A7SQ",
  "key37": "ymnNoea6j3jzt7dbUSaxNmth2XzSD4TkRiei5pyUQrYActAxmkUbKDcqYEUoMKCGpE3xtjNFEdXFoT1Nwfho1bE",
  "key38": "2Wj4UiZmD27X4gzhNZS3d8BYpgs9HQgMLRDunoomeyCb81kmzznkxjL5Y1nPCUQmPz71qCGGgQ4KoSK3gb485P5M",
  "key39": "5HVhjaFV79j1hDTCVgQdJnso6moZYhhXRbX1DYhBv6DjPyU796QRMgvVcUFi2ueLimyco22WmZQBuFUVF1XGna1L",
  "key40": "2jF1VgV9AE92hLbTJMoRrnxeU16zmHKqtujAVgP3ydy5SzRjsKeTgnXktFUwPyG2V26MfjVCjpSG8rYki21khsd5",
  "key41": "2SSVfo5MEjzaPVU3z4zhn87jZq69xb11BS7ugVVNuZS7f3FmF8JqE4TDHdZKc2BxXGBcsMkXJGbWjc68oYqFPvzA",
  "key42": "QAihRFmQkG94c5NLmFnfgVMxgTNqDn8Tjf9jLvSmmkaHPDqhiy64aEiecmE9jjWpzSnq3dhc6kfq5cWu4gDjG44",
  "key43": "3ySqno42uWQNwyPBYnYnatfRsbsgCNcX2R3hLQk32xB98BWcW6aKfBSaLp5GcSyYYoqFT7gJnqYjF7zjrM3NLk5f",
  "key44": "5RXsWQmStVyapeiUzm8pEAhvYCAWugtXs2AxkzyrTWD4bZYpC8bCcAXhwS3Up5RWBD7zpwNNqB87WyCd5n7gYf5P",
  "key45": "Lxgzmd256qiD2sGnqxdZ4KTECDptXezh1tbmEbm7jSVrXX2iNnamKNMWZuV8wCJ4Fn61Ld72ABGasD2gzQJFUEE",
  "key46": "bc6ixkNLTAbdpiAniaRimQSjCR5jgq7LyzhduFdvBcKfw8ZQH3xmds3iz9GXrg7WMJjTcEAtUKXPWcRTWy5FDeh",
  "key47": "5ZntcWCkYd4bw8KjZAnuYtVubYoGokWbbmQ11C9QGWcUVbofL7DvfV3yL5FcSD5WwE1dGHUuZyznLze5gFCFPJzD"
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
