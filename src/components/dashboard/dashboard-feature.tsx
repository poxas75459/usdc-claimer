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
    "3ejNvS2NQQzyrtDg8fEJBjEQWDm9twCBagSt9ZmENLBsjugtRTjsL5XY6mMgAJxtj1WyAG4hc2CMxeUBdnCwQ6nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f7zUgJ9DFB9T6U19vi473ULdpT89Y3bXRLNf3CLXXgf4a2HhVbrpj9BCcdJJkKe2cMfRySwLM599uEzicueTeC3",
  "key1": "2n5dRBVqB1eNKiRDoE5sErdfu7imQjo8HScH5KRmB1bfumMXxQauG8cS2sueZ5bq9tRfBgLj1kF17FYVXi6bqF1u",
  "key2": "4JPHVgAEF1op7unru2MWfQvtxr3jg8sC6ixRpvaUGjVwJSs3fzWE1Q9MTKiFxfstBfvSeB98npxx1EQpeeYUDt2F",
  "key3": "3gJBSLUF3DrZyr6WsYzmuZxwdEjANS6AM8RptaDF9NtPmeHHnfHvZENq2KNLGxR1ehfsstAFQRxf2HWTWnotGE1y",
  "key4": "bNoF1q6k8Q9pC3t4t3pRBHQBkSaThxJgLzz4suAvz9CAYTBtfzJaZpaF1qF2hgph71MCQAcNyHMw9dWX1Eqjg6q",
  "key5": "3wircL2RcLb6EAzqr658oBaewHSL6bwEazC6fCNTuiXeo9AVBXNYPzfVhxHDFBTxvWQv5KFJjCpf8DjRRpYvWdxo",
  "key6": "3c8sXeCAfXnrmL98dSUDnqHbfiztiHBH6P7L9Qe5y7hwZWpg9RYrcb1XzS6sNvakm5DBvMJutnxuZHXZeoyfebv9",
  "key7": "4r1onMAxfx18wRsmQZGzsbnz6LuLTFHAzbFs3f3io2gNFHsYU7s8bEdNB9gZgps72a461D4ehMtMGnHMpFRXLxzh",
  "key8": "5ogZ8rzC5Y3rNqepH3tQZSLrH1tdC8LSEbxvNNcDbzFz2TTUEm6sjKJaNxFtsgZmCaKPVqrdVbzx6knAiK14jTaw",
  "key9": "4212kwHcUKDkjNQo5GGQrfyS3TWricccwpABDN26Zn9DSbRfEfJ5qu3WHwLkiopy21JTeTMBwytwYAATqCN9zTwe",
  "key10": "2Fb8tGhhZxzfcT2evWng6VZDZs8pkj6TvUaEcTxEW27XKKQS3XhKBRzVEvU3iLmmmZ3JAm2mJr6AV3YhAryMJWbp",
  "key11": "3s1tRuSmRVj4QNRetfuVDJbupf9HKxcnL6ehKbybCRd8kh3V1pspVZjftX73784m8q9qZcUHLQDLjGjfJDDK44tp",
  "key12": "4dauKYexVpLbvLZrBJeDdxtGRsdKegqKzWsjc3u5mXR88KkxEAXeDHoKFhaXKMBKWE99oT7dPX9WZgBxryMBbAxL",
  "key13": "4qBktxiGd1jbXgQVUwjoPqQLutKifoFQ5c7uGfzMdjiTkyoQLLznMv1cGeGYgPv4mfpwNsFcMXcaw3FbhxQaz3Ps",
  "key14": "296oTtVWEvPNLoCtbvPoRzwmTzSYNq9SaTSMLBQTiQU22NNKa8hW2PzEKP3qQXiKks7cnhMNjdA9qG2fQJccnRwX",
  "key15": "5B1yz6EocCAFMPzVqWRNB8WcDZ9WzoLbChXFGtrRPiBYcC32UpxvVSfNuua8z5zUZN3zsq16j2X2xbGUoLUSw7TC",
  "key16": "43ZuRaErS3r4WHi7KLGHVq3pGgqGGgzaZm9Svp1hCdGrKiwWSz4UKE5cSmYUjY8SEt6c77eSkL6d5G7G7Fszk1kM",
  "key17": "XXeKLEvH7tXQvqJZk2GyVn4guZkeNSU8N6L8Z3JT7G8MnJ3SYQNFeE8Rc17imegjSQnnHELiLdgFLFXvsdmSuL7",
  "key18": "34L9hnYo8wXXMkQhs79XUaoCNPiEcPWopy6E4za6yTj3krcAdB79gmSGgaA6MXFy5ZeuPbu19PUhKMvSt51EFC2i",
  "key19": "hrnQ5fkE7mncB3xxbPCQTVAmXsrBvzriJYYtAbEAhppDDEJKdYxS1TYCiQxTfwFiws8RNj6uHJcwQguuARUvEEb",
  "key20": "666gxS2JU7bwwag2uhnhRSvUN4Rk8Ad32czsBYE3jVprznqZapDoH1tpwBn7u9wXH1LHFaV12fusecVoTTED12rX",
  "key21": "4j7pt4469ha9y5aS7xhCLjYwqZYTpDkBqwavjt9SHu7t1xqhZScxeVArTwYyfbzJBDKRkVo9BN94JH9VX5GqteyH",
  "key22": "7PZWpfW9BBb4Bzr6vsfA32Vkevdrs8F3PLHhJ8naVbsF8reqUc33YrAtkzGzYtu5xjdqJDe8jB4gtipGaU77yD7",
  "key23": "4XTNPXacPChgL6GYGfzVWTi93aEdfGU3dVVq1CjfmVSApbTPrAuU1Bi6gknbhb2tXBUASCCi57vcu6kxRSMzSpr1",
  "key24": "2RDkfbZF2uYhTw9ejdEsSh4MZU26Yy975e8TZLpZYG7i6iDbRUSUV6PkUY3jQoBAWANDzDdtMJG7DKmffd64xz1F",
  "key25": "38YxQ2kcGHjAC4iJn366ZvFBQzbG2CCZBvubS8iXA6Zz3AiLMepu1kqDk9SqPXypQ36vKmFtuEk15Tvba2rpD2bS",
  "key26": "4aaGYyV4kSL4g79KWbE3UTxzHkrjMso41TQxdXwKbHbqscH4T7SdPpzvg8ZSs4aBSqTKkFpoytMMdzHian9ftRcZ",
  "key27": "udVSpD1s41icz1DAtkNXAdDom42kCS7zaqtHFGBH73pVsPqxfaHcvEEHZMH3B5NuBRCgpvdYaXPrfUq18fwLpxR",
  "key28": "1sYHqxAxtSnq76wDVZTgByW17ju9cyLezRhQMBSeky8EnjuThj6CL4YjrB5MFhBfwNYz1r9PgUcwdppdR4MjWDE",
  "key29": "5DfabDjTpUuRM8XuMdZFCCiH9y8PYXcAJiRtiQMYuKLHFK143KVKAJkoQbzSezeNQwzejaFKR7SUTW89XNQqKpq6",
  "key30": "2niEJrUwAsAoPmioexpmgyVKv8jUsEwZbpzpkiM2WNuLGaAqJumphiyMH641hFsnjQcnFWr6NDpPurk2HR1mJ5eB",
  "key31": "5cudEvkK2Ucgg6cVSNdok4tj2ZGAoZ8nuWTdnACxhR9KDwUJUHXvq6KoBmViQjCq39Syri76UQtW6CMiZp3go6mH",
  "key32": "4ZFRB9KMrGKZYJtjZEeUuBYyzpB48mHR1oRAxWhnZN8dbnkTVuFS3QQpvGr3WUBsmcdZXSGUjhzJh45DnEn2MMKg",
  "key33": "2K4k4ecw7M2FrGXrRZpemMsULX7peABEmqCdbbiHogxqfVTmTFvUEofzKjtFrUtFfGMNTtwMQv1MvPRhZPBcx94R",
  "key34": "2PwaYdwsJREVxbsFnF1hhXaN6ZjnutUKmQxXR4XwJC5fUsiZn2ira5jFA1YARZ8gtK6dVKJZRHjuPpyWwmBUZUcc",
  "key35": "3sC5fdudxYYrUgfYSkcqxSmaJVXnLHmNDLh2LTrXJ42BgpUNw6XEbsBxGjQiuQ79NfEoQci7P8khVUAvSzh67W5m",
  "key36": "2fNZW8z8f8quQXh3ES6U3C7EhprZQ4MSxqGhChZzn6TRX23zAmm5GxpW9hMC4d1mzMbf9esWzkY6pnYDzgvPKP4N"
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
