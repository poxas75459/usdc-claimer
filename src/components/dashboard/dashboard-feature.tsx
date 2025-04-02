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
    "3DTQy7dpG47UUt4BmC7j6bkGx2tUCt5xASmuRp9ewX1fWUVm8ZTfY1X2qrQXhSFYaDe4XHH9aNKCk7eg6wBoUFv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ibvS2zKG28jeYGnUiaP9gkFZf4FbaitNjGSUYq4Gw4n7W6CgoB8T18DERT7TnRoEn6dWShShLFnQZqe3N71cWL",
  "key1": "QqPqvaBb3Vs4Txk2Ct7ipjWBGuqAQLCmne9e22tuEA2suVRcSTdTVgaWEiRvanntrJJqPswAArm3X9fYYp92BUW",
  "key2": "216rbdvcug1Epssi8NcLWkYtMGGEJXQVxsz4oAaEj4Fwg1ZNQPbVB7VUjSS8Js2nWKrsY2B4TyCJiKKo31g8wFNz",
  "key3": "5xnNggDuw5anohWgxkZ16U5zJvSw8JKNnTxbQJssf3411ufkRryq9jmWfs4HuWAN4ZpVP8dW2KC4MR5rgKWapgZk",
  "key4": "3PSqxjrVE5FGkLFCwE89WZB3QcwisQb4b95vXeEAMrTW6mNBidszNMU75CXaYiH8VtzEot1GhhadScVo7j3FCHh1",
  "key5": "2NB1EprC823TTBjueevEdKJYVg77UpiXb4LD7bb4tS95kFDi7QrwSpi1ksoYNn2zRCbUoanRLuekg99mBeC7GSTM",
  "key6": "hQSs6j6mvqVoi1ueyArFDS72PyQfGNEXPW5YcM3bLFeLFDRzNZqvARa1pdNE4aQVxCyiNH78cfvMLhzNHQAecs4",
  "key7": "2gQVQASSQej6sFS5AsodMpzQ86V9qTjSrfKkXA5xPPWS65xzVNXtGN1FTyV4CVynhnbZmrEvszrqAze999pMDUFe",
  "key8": "4pv8hAM12xFPtnhHAEmwh1RwfJuBmXEfFVDiJV2XVntWPRzg5zFP8vYGSjhf3t4CLNGcdRcBuqz8k7F6YcCcrF1s",
  "key9": "239sgPZx1vYeQMSqq3RMSPgDxVGxFNFn8zJ8khvwsoUAawtsj2SxvTFjbnwJ2o3QzxQEkXSgnhZxBzfZxEmrQiCK",
  "key10": "5JVRgG1AU93t2J4n9VvYD6RgqEf86D8YLXrdPgmPDVt6yJLJEghi22cNBnH94WRpEPi11EbamzToyaY9kS7y1Vfu",
  "key11": "3tEkxTPvPA4FwWcLH612PMwTiKMFQ2D4SjweD8e69hmPYcxpWkwq9KzTGQNgY4wg2j1dpqpzZQFGBLMzZbuWcByd",
  "key12": "zqApUGyXCny2AHykoGV3WsYw8NhVLZMSLBMLB3X2eu4Qz9whTTsiWNiAVuktfELsMxkn1gWbdGYjheZpsxP4jvs",
  "key13": "4nCuiSkNiE1LHTDsCY19F1X76ydVEmYVYFxYvfnCbZs65CH7AV8BaHLJv7GVXyFuDGqZcAAfY58d5gEQQ9g55Y35",
  "key14": "45RcVcrznr8Dg348vyoTEsgTdSEfup8a3SSYkhWVGWWZkGnMyECTb4NfavZBiyiNi1wrLQJztprsQjMm6sR46XNy",
  "key15": "3rjdDWGDLjeCTSKfEaMBCv45Q8pwLxVNgBxmmbvuoBMvU56tazWwGVdLUEz7C9bdJQWZw2ufFfqsD5GavSk4g7hm",
  "key16": "tqqhDzpJDAGN4DyJzh5xBe4PkftpKfhvXRbH3ZKsFdnKekTgxG9Pc6L4v39WHtg3bzjKSmamu3tDHqpQaXNFEny",
  "key17": "5yhnTXecLBBUWtNCbz8bFgpNGhYuXsV9YsijmRigNJ4DnKBiaLJX2TTZufNA8RJf5hCK5nJPRSvH69uQSuP2kaB1",
  "key18": "2GemvMi48n5rE16ndwFbWFkbghAc2kVtjBpW46mdDCmQoqjwW97QU8xmFgznXEyySSjNTLdH6H7NzQFW2aWyfb31",
  "key19": "642t77BgUZvfLQ93LX4Brd82nZ8c3su8zAUziFFBG6yugPdg8WuuEqExkNKyWUexch4kwktAddsJjF1YXy5iBnRe",
  "key20": "2cUq1EywTgAWRv4RHB7eiL7Cfpu6QRPxzSGqxQwnod9L33oR84DQXY1YdsJ16pcP6F68swDaZ67a4x2kwxTQUDuw",
  "key21": "4rkE456WjyCbnUAtHNabYhsuaD6RjCnSphABTM5NVWnPoeQHoLAML3nGsKGZnc65mTTezKUruD8EvQLhECyYAiGJ",
  "key22": "KyG7qjhDexJhWTJQARpvsxcJWorvj9BqR3VNEPT3D9777Gm97XULuiSMi1CNCi2tB6oryngvKG6SNwGmqRqncZn",
  "key23": "5SA2apqzrsjMw9StM1TiR7uZySoW7Yhu8cbYTcb8isTsS6i3HmEvS1LmK5EYhjfNYxdFQpGCzXRPKKyUkS872YYZ",
  "key24": "4jXduwywXt4ddKRePABbe7KdX6EBfz424dHkdTh9eW1LUA2qDYRuDmoUTC8BprXfmjpcJfJtwiKb467VrHPjDEwR",
  "key25": "4KnXg3CaTDUnLf6d9ijyMuEVpozCNmV9mULDTtXgYsJTDwTTiMD5pBC7mwXKhXpY6yafLGMXyDYRRnGEyhfXeW4",
  "key26": "F9twH1Y9xXcpsDfMMuZip2NYeALaAfMsZuVEtxW1iQk2oZVFBBq3m6fMPyWNvQ2a4UeNhGSCSZZpbEVqDZF5uew",
  "key27": "3o2ucdqJjHobPNZvdJRV4e4fMD9tczgBp8muvTej52xy2jGFRPCqmRjo2cNNUrN3W7W4t86Ukv9EWNpFAvLkC32n",
  "key28": "5LskAw8aoDTQGqwzCcMMTTVAKoSD3QaTANqtE7gfcdJQvkSATKQCv3FhKtPCBqwTJ2BSAhwXYTHokFmiwBQ2LswV",
  "key29": "2v2ryWQjux5661CkDXFxZBe9dcbWvSniX9QgdGwEfZYQkBmopg4R24Ey9zEw2Gn9sKhuMnm52QJRhS8DYQxQwh1v",
  "key30": "2LczLQY8pkEoGGAaRxpAtdpkMfGH2ays2bjysuzoH5JrCzoQNxVZNVAqu3TQbqvbokxqQJrReKY2kyaCJQbw8RSN",
  "key31": "2Yv4dMmGnFkWuv4PbY9t2nra7VwQGXYEhvZV2zT9WMXeXZap4HnjTM5Kq5AwT5fvTL8wXUfZMjX5LJQ2aH5F4JJi",
  "key32": "4mEZmAsZ6Lj9AHCwyZTBtfjrZL2Qcj6qWxPivAPJq6aRup73MpaNzgb8RRZpcfZphRUWTzNy6J66jfaGbFTM29Cy",
  "key33": "3HJb6WaqyMx1SHwqVxpspnbqdm8bdBo7quYCR9vLHHEm5sLaF26Hp3ZyrcNffgTsFAmEYYGkYRWGgU6zRuRzK2hS",
  "key34": "mJD6CPYg6ciBBGXAEuzmePxUfqTyEmJTexkLGdENxdB9zwb2Q4BeBe2pt9ydiB9wTu1FX5bZXdbSJAG8eafoWLw",
  "key35": "2Y3soqnUCmVGgsAUrNQjrjSW7qEyxe2SpPUFRsjcWTZW95mbJ6y8UK25q9Ti6dUNZi6LNJk1q7bnHXCYJ1T666gm",
  "key36": "55uBqLFFkCwA5yCa6nhGFbrCmZnwRRqWTK7ebzLCVgnoHLeCUNN72Px9FJVzfTR8YybjDC3vV5t8KaMkz3d2Mi6x",
  "key37": "5ekB7jkz68GtGxKutj2dmTXwdhX2hXNtovhvuyTECGH2BQSB5GWvMVVcVYSdnzdsWuHcxbQLAV4nJuLNLif5d32",
  "key38": "3TJr2p6Tx9FAKh9Sp38JLqrry3MXze8ZcqAGs4zsvD3ypmgYkzumPitXZZDiCMoBmeQHSPEFocRt8mFjuGu6KtzP",
  "key39": "57m7Sj6DhVEKzkdrS4AFAmbeyaXKx8ZcURJEb7sK6i769EynZzn1CwDtb6Yx4RC2csZozCRJhzNTpexgfnKMP3KE",
  "key40": "3N2uTLvEKxJxKFKepGzP5Mdyn2J8hqs5xCZTk7PJE6L2ERZ5HYkNSLF3YTYXJgjLL6kfC5ZnDMnA6oyVfQrFD5BK",
  "key41": "cYon6eQBrKs7Q2RbhF8KipMdkd9NR1L22iRf3nZcUEDMbVMUA9GEkYpBBAmc4Hv2sLXRTUx9hYnFfuCZHdRWsdM",
  "key42": "5vGPyvgwARP3vewR4mqAfbfEXEQhsyP6MMmK3YGSFvwNJgzn5Xor2oMr5fn1qaMxn81YZSS3PWSS3jtCvAw4egxM",
  "key43": "4y7iSm8rW86CPvYeALXQGMCftKhUdodQLzhztmu857ECjWMqgD8xnXSrUsNfyfrpJsCtWmy9Rwk1H9zTFP3R1hdG",
  "key44": "5ehZganWjRBwqJ6Huso8NA9z8CUrafudCgmkgWtU4weCCSDgzPZWqDwKyDyHEKLt6U6AeHhYGCP6YWkcGwEKb21t"
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
