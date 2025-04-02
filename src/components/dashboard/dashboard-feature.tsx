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
    "t3PvX4377N8qz6E6ELGEWLAT1Z9kYQyUuHjBDz4GJBQEZRN2Lq8wU2uEqVrqN1HWsg9xNgFMdGmpj9yPLGYedCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zwYV5BYK4NKK9ZxMn9zCAhPQRnmMfgLUdAXBeDYU1QuJDHhGUBUue4za3SXcZ5BCsZQvTuAzGznN43FLrkGzyzd",
  "key1": "4yzKAiXjofXYtwSYMz6R231bm6kYJD8dpZTv3PMgRHm6yc8KHHcTUQzxYrYs2KUTHZkomPkq3Epbr7o6XsNCxo6a",
  "key2": "22vpaMirXZKDU76cbeNU6SyXGvRyZrEqfcNR1g5448eXSHGhZSiK4116N9RwHJXEP4Q6bTEMhurkVeCnmzjCs1SM",
  "key3": "34zUosqh6NNwACcRNzxB71WWWisbaqBTfnqZsEx8EtiY5QqDnkXLzzK2eFYuXsDoEJsWmrTBRMCVddSncRXXopZP",
  "key4": "5KCYv685Z9K2XCaPAdpiJn6phTqaEmLvcUrs8wgWukBLkbKJf18f2gFNKCL4LEu2zM461vhncGwbN8BNwKmkv5s3",
  "key5": "5khd7pEfR6ekyj97kega7ZF7SiJxiriLKjECC5Px9BPFy2NyY2LdpnRqQip2WXgQpr7Uz4CgG5CCpuwiWmvfVSGY",
  "key6": "2vSYb3A9z56hwgNqnf28W7M9q164FtTXyZBgLoWBCDoz1yyLzDGkCmvSCS8bByVtzjVHNSnwDqufKu7ZwH32TPJJ",
  "key7": "5szrAru2J3KfVY8wzDuwKwALuR2U77gmN6GhNpWe6kbHXM5wJnDLT4jUbKn5CQJTXUdDtkBVhaCks1JpQ4ontB2n",
  "key8": "4pSpNTMVVoUUBU4jrPYFfqx4PTtpmMaQQKaFGofYmpdFweLvmotfq7HUEUKdRYGdg8BQjoz3MYSx4A8zLDBeQ9sN",
  "key9": "3dbbkBZ1PKFnfdeAsJ8sXMe3XDHVkWeX7rWT5f8tnHaq5A5rjBKhxGYiTv6dGreFmkBuyVy2ezJaSAd3ekRqKttT",
  "key10": "9VHEjJwrxw2ZT3ZFKzHNPdXn5nU9t1uTRUvqV9syu7ijiEUEgM9GZ8HLigpaAWr8zZPPwPN4uBexiLHCfWLZHfT",
  "key11": "36cEiRGc7wgEPpsXnyjdchQ1GKsXPsZQo4aS5LM2yxU25mNkft7G6W9nqH4c27DAjh3CSnYTjyHa79ef7jhhWvbg",
  "key12": "2r6KngCuwf5ByWzZNgSU6afcxGVpyrb8iQwu649DjTaqKS3EzH3KiqHDUqQdEzkEvQwEcqi3naaqy5G58z5ELheP",
  "key13": "28oxWndZEH8BJ81MoL7iucTExCCjsrc9G5k77PhHobhvpXdAkFynVoAzyuvKvaQRW6V5qcJmKJ6SNRtfvkLHtJFC",
  "key14": "42XhnboZA7NqcPHqUjSEDRpUmoGWHeWzCJukX3vzRYQHRkjvtes9mJxzoLwQ8MNdf5iFfVuvnA7CTjUHZLH41Pi",
  "key15": "bPLPQ2S4U5VeQvQ3nqKHNjU8TrRYgfGzr9gkhEwfC3fbjTfqUsSoDcoByGwrKjCSbuENJdMuh775X86mNSZeLc4",
  "key16": "44VDvNRRTyhn8NvfCD3AYgqttqJCXarbznLxdaAzoaxPDJm1Ah6XdTVm2m3P76dx5owTWV4QGMbLu2a3r85fg3wA",
  "key17": "4VrWCYBrWjRdKeYcDMydAqzEzTTEaocwu4NEEXkcXFg6RCLmaCWkQGyLLt61AKiuR2VwFjEpvFDKVRkBsArsLbSV",
  "key18": "3ecAYC8JCUbyAa3TuaT6arc289qygMRBEuL2a94XUi4Tw8T6QZQnCzdz6AYL5xGz3S92m1J8mJqi1xRkLik6oTH3",
  "key19": "5274XccT7aSgRmNJbnpZgRsQP4LeCXHjmh1emcytjgooTTdJEH1oVuSmyypAPrVoUbnxmdbtdnMD9JJLLaxkbn13",
  "key20": "4F3MXcTsNpMFAqaoT3hsDrmsgbwCimDEgdepYdRWFmBwHYGYPwhoGbgwzgt8UbLKox45EpGiGw6XBWANUNVBNDUJ",
  "key21": "5uvAFr5TsS1Whb8GpKPZHzxbQ7gUY2kFj74JFpUieK3DsPYeKwozRxvPGv7VXGGxEKizvmiqQmvgx52TZPfbXibj",
  "key22": "5Cvj3KZZyCwYxfsbpMim4uUCGhdnkbJojJ2ZjCYUojAPyRDBfRXKZT3HsfgRkEWfmvD37auB3GxwSSTZ3fU5Ft2g",
  "key23": "3k4KVAPWQLYbg28cyQVNSgGhTuASiAnXSEriaZUZ1Qppvnq5BCwRLDhb7PEVvjAun6KBHDp9fLM2auG4YqYpNjZd",
  "key24": "5gP6ozwxkE8nSmsWZiyogJFUTm6u3tzh4FN5js22qthnqYA74wVCN8pYiprVBYuUSGkJjCTfXFRSTcZaMgfpk5Ur",
  "key25": "4dHXWcKFL1PGu6xCD7H6UqBDKjGJuSCSLkMYj5n7Fek3omzzRGRkoYxahm7KSBwPPtvki9cRe2r1NqSbETHxvc4n",
  "key26": "5ByUpwjm8NcBEJyoAHgNSHXXL1tqo2URXgfxqdYJJcW97bX4b2WAHPUSAZqSqAP3jiD8w6FXJHLZ7mVmzaY55pVX",
  "key27": "2XzJ1KCibaisb8wqa15SzB2xfDKdrWtooswuybzgH4zDNfUyoK5QxPqxVsrgvZXfQtmf4fjpRXuLD4mdx5uHy5sW",
  "key28": "baAxg8H28GZDojGRwwcZ7jHzSZsWcMaNV4G3hWdNLNjBcSAH3Gae5Ky7HzxYuF4K7rgB4kMRTsduo4q7JN1fadR",
  "key29": "2A9oueKzGBKXL5m4bUs2PKwwz7CuATx7KgyJdPjANAcu6KCnEcCVaQ7yT4fJH2NGNGeG9hXkasBmacZ7zS41UUX9",
  "key30": "4EhPvrxnrTH9KJ8dNuYaw9Bw8N7GNw9rsAiTYbQxyKTrBPt5h7iDK5m4r7HGvNnFvmmri2B5n6Rjt6BLZMmwRcpG",
  "key31": "5k5aiGNg5Y7afBCTyNZPqx8K31qjNP3TCeMAcG62745ufoxufgJsgF3edPAYr3uSTp1QHNjijY6R1MB2XyEYeRHP",
  "key32": "3SkmJmB1DRGX1BzkPg1NhubidGQUTgxNH8JUDt6E9qn6bubu7GypRvCzBjfTP5r6ecaQN1Pf2JNz9xp6gVo2WCrW",
  "key33": "4a2gM7LFEmMhnQcdPvH43En5hAzqn19FQ7d3Et5gu5s1HtEdJnScxu6z46goLTDEzfm16pr9rbk9ian6iFVQ1jeo",
  "key34": "4qmRr5BgitDgoWjQD58Q4J9Mv481a8nEbWodbdU5D1TVeaJbb746pFVRBM9iEoWbSC6H7SJjhDLfXqQvptFihoXu",
  "key35": "32cYKuTCeoAMvPHoeQnvuaUxdkY76ode9wD1a59RLiiKmXGPi2mgJYRyqJ1V6UCbLJLWzQbBXEQrXgCHxxYqu2dC",
  "key36": "ARo2psCshA4QYXYSn82d3RdszBbKGYBrv8uubsfXQEK5o6UMAhBePdowSnfUihhYYcmxTj2D4TPyQrLFC3TVqNJ",
  "key37": "2WLvWSxyrdy2SQGyVNYMrx2zQEd4kEyZ7f4pVBmpx5XQ9Mnq9QgE1n6DveYWEq36Ure1aWuFeUFBq24fERtvdMhY",
  "key38": "2Lx9c7z2SqZJxtJkHWUqd5zr2eXoVZsJcaYk6VxffxRNihQALpspv78C3FPi4AfkzDR2XYKWZVNcPBp6nZtpBeev"
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
