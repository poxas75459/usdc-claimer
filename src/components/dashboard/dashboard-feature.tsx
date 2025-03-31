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
    "3U3q1WcJQbXm6ECmT8yJcCQvR4Td6iipnboL28qj8fNRGTvV2FkAsjRxkuJBScrukbXk1W6YRcmAt54oMXMQiCkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSwdENDhCrppZpnXYPyHsNcD5hNHXb1QewDgFhW5ocMphXNDAp6C4JbnYQbGSxd4Ryb9tg7zAiu1tSgDdTNtGAb",
  "key1": "4jFBq1wE9E8B3cr2naL7k8hdepgZJR5ZYo3o8c6fq34bV3zuj6USYVh8Rujv2Pxm4QVDi6gPq7HkrJ78NW8iYRgw",
  "key2": "2drZnGnjGfHZVDowvQiQGnYnPrkLovvfswfe6kJTyzrwRr6yG5aTmc98kvjTjchLFkkQqyh9WsZi7hn5FBnox8FK",
  "key3": "67HUE1onSkueh7j8NrjKeQh4gcA2mDjvUfBTXFJRkWDZsh4cKZDZukyeokXS5gRMcoF58m8uyj4SUmUuh4ETJitU",
  "key4": "2KZfgZCLaQgzsptocP2mb5y9MRpZKGPUcuYzusVQNcwWBtRH5crFzFf1vBekfNeURnXhwKuNCCFUF5zvtJHz8YpH",
  "key5": "49TxJfmbupGZT53M1gsiZDpssbpn4yyybRxVf294Fu5EwYsPNJHvXKX8mCbag75rKXtgg6hPXD32UjhotS21GES8",
  "key6": "pWZtZWKpsPu3cHKYnKF7kYmTbxKCxtQe8M8cwjyvY19XJDvamMZMWqCTnRorhrNQW53AC44Z7kgXPqeegxFtBhb",
  "key7": "499HaFCHF2ESnx9MNk8FatJEDNqXmEEX8p74u1ca46AkNvCS5mLDgucLiF5W5bEgZhtwTL4QhKwvdn8j8dqdd4V8",
  "key8": "2dY4fJhwm1PSnNqScuStVv4gdAPUZT7uaHDv1k1hWc7XRuBRSDCTAG529wQoi9SC58Gts8imuaARSkFYUtHRgSD8",
  "key9": "4zPzFTYUX9rcKJkK2S7bPZT3fMJVnnCnfTL1pmZouTFsoUr3hwFWVBNveawyrwEVEAkzsvGwHMA2ru8AGxQXjt9X",
  "key10": "2uBbYPfhwjmZmVmj3hkLTzMzJzzFdVgKEp7g49tXSMur8cjFcwmKaDL6QEJEBhVniD7JQ59awVmCu5sm6tHP5z3a",
  "key11": "5mYtCkwvWKdAMgFnEMo5hP5NUeyNVE3rtFRKfXRTmhMcqBfkjysyahRM5qCY9KMyeLK1fEWGSsMtEZ82rbJwp2nz",
  "key12": "5vMRezBZJXmixbjU6JMCgztcNoJM9RYtKDEpaXMCXH6424Y2dxNqQFaLbsLfoFDneXiGk9vvRZJmCMGRqWbQthnD",
  "key13": "4SDYuT5m8NxTTFgXHpNsTVQgNrewFm9m1pdB4huayYhcQjSxDjthvZPF4kLf1LYzxtfbvTHdzkHsB7hJADdRXFgT",
  "key14": "2QpwAgBHZoCsP9pwb6DAVBgVYbPf48iMAAEotEcrcR8XHQZtVg8zPtaXGRERvr1sqn9ZguUvY5tNNmtrk2pNc3Gp",
  "key15": "hsCFtRfocXwZKQVwn3qQmLD7jehBSnfRLoHbVTFPvVfgn75T1ayJtzjaxYsJUnq1Fw1LkRKzA2Ma6qMrzz8Cjoh",
  "key16": "ueychEAFfjjsi6svJGkbUqHXdZtGYcgGuZvKzAuiDhQaZXZxMdnaMDsTVbVjVS2A8QK4L7TjHaEcjWpRTjANM3k",
  "key17": "2cpYU3dPN7wg5vjwynYyyzLEw9XinnJQoiZYj3HaCyhc6rdXK5wd2qzVJrbZvMrUGWXhUHL1KpZ38TbLEedyVw9",
  "key18": "3EDGpTHivoJV1FVQmJNbruE1iZUcoFywXmXGxMpmZD3cqMYngYdWaUPVwnfCoe74yyXYFkR53sHWZ87VvZLUXc4",
  "key19": "48pJfsNkW9g1mFD4FGyeMmd6pV7qhgDCJUgFzWHE2PUFXL9jou5S54RpUK1KKfg9eRqAtSpFxwgAp4BZC2QCkgyn",
  "key20": "3DFrXMa1UFCkyPBrh7ct94toDzYANNEXYGXy8e8dTf9WuT1hTjPN8WB1XsYgocSjgREFZRQS3ZzwYX6ATEKsKRes",
  "key21": "5Lg8X9gu8A9PFJN5KstVZRE8aB5RSy6kWJyyQ2aMq5BkmFm9GhL6mrc2ivNHw6MefMTVcX3DhMSnnkJWAvUfHvzW",
  "key22": "2YnCMP6hD8fYfnBNxJDDmQjpT1tSZHDEfZmeDSUNAXD4AP8fpdj7KAFuuAkQeLqiurU6hcAnR445nYDPNMJxoFt6",
  "key23": "3QdzsEZSfqs1vp9hxZchAWFfuhAYPTedzVxWqTkyznSaYAR9PY4Ce4TkAuCQwwr35EqagL6ax4i1JDVpYZwskSN5",
  "key24": "mze9twisq9iDiyWyHcx9B1KQXjhHHUm6ChRmJpZ6ZmSGYgHE88bbiGVDSwGy6AyTdJeXXuSDs9towKjgMkH8cbB",
  "key25": "2xLVnJeqmvXm5uw5Y1WpJLQUSupxKUrc3HnbDKCrnj1FZVHjTptucj2dm3MJj37Y4qg13uCAV2R5FfkxM7VVLfSB",
  "key26": "2DeQUYQndSAzrruQQeqjiJ34in9gqnFUgAnNvSwGiXWuyrd76vnPs2XTi11TKmy8RXTH1ZnpMMxgYfuPujuDoC7Q",
  "key27": "wAb4ZWsGkepn2HAcHGPGm74qQCbGaz7uQQNaC4FgUsHzwxqZFQrisW36AazWtDDMfMDHwNBbMH6FR1Y3rWypCvi",
  "key28": "JxWjm3PpYkTUayv8HuSVoksQGpDsddxzhfp88fsav1gVJi1vwb3j7q9BKjipPciaRcRFKFp54GPvbqesGBwYfgh",
  "key29": "51tNvQJQ2C5Zm6HREAUuoSmhyqZZQUGLgxMCrpAPf6Hi4XGNSx8CfFHXGcouUMk4qzpqDYCjrox5g5m4foAWSe34",
  "key30": "SPrpizBho2GdR8iAr6nthYeaN5WPCSrPvtPxHvN8RAk5So5JK6VMcJtQnwufruEWXSgcrFmtbB3QoggwGYyhze9",
  "key31": "qYqo6jmTCxk39piVCNHFUwfnNjEw9kJQ16g5GmTE5bGAocBxGMpsaS8gSFc1Kczko68VLRd7tn9diGZXBHxM4g3",
  "key32": "62h87DPZ4vF32z7kM3JPJq9MJVevaz6HzWJPWwgU8CzK9W6QsmRhvGccNJmUUag1Lwtk6qcxnRSUHyUVgJuMAT8U",
  "key33": "5mH8hsKGG4ZXnrHfikeLSg5uMGMoEXXd6zYLXm6b44Xjk1r8xUQzk5SFqPGm6aiKfTptZeAzJZJi3am4kMRaimSo",
  "key34": "C7RSYND1wt5osnKxFFLwrjFYg72KtHR6iGAEA4H7LAaAePz8Q6gQRL9QPRtF3cAquVq7nBJSdJTXGNbD5tPg25e",
  "key35": "5BwJrk6YkrxE1254GoyMwRUGzwd1DXzj3DeM85Wv71Zpgojf8NpZcwvNdjEpYmucHrHYNFUtvNEPFm9sYfrK8NDR",
  "key36": "2boiJHNqSJ7X3TYoduWhhea4yoYp2Yy8dVhW7xp18EsWEetDg35b8puSL69qdJpgy6piL6aEXWu8zu3tT2K5jESf",
  "key37": "3x7C55Vc4H8BjGyPuAavfS9JThhDDTeKzwWixbsZmV5sC4hwfjyARL44LPtAWDuCZDbaNY7snZDD4qfpPNfbUYzK",
  "key38": "2fMXFQATXJTr1UMZTfJVABiNKscSExydh2Jgtn1dNoDh63MBv5eBy3NzZsB1Q9YZsan44rxH4DzhTBuWLEHQCeST",
  "key39": "35YCjVnL7UcD5CwFCiMnRimPfNXF4q7S2pzD21RSugpkTQs2DCGCZ4X42EuCdphFhbSf5MqikwMf3SvY4376CK6L",
  "key40": "5tQysQiJAPF6mY7gSAtSPCtDxgVjfbtqG9noZXmTQH32xcDimvLoYSLRDDQVsM7RQbbev59peQSQxXdWcCaffEnK",
  "key41": "3nsESzgFRZHw7D1ZMgM8TSbjt9CWes579WSetgrJt4X2Xr6U6zWbXzuUxc3TKxuHLGrf45UDmn7JFf95gCh7ZiYG",
  "key42": "5RdnDQRQr8ffKbEqsWLiS1RBEvEqog4jCqtj5fdE7USsCKB6ZTqGuCkwxo1dFhTQktaTYxaKG8aczW5eCPLhtTne",
  "key43": "3pNuLVsazzKY2zEQoqtWewP6dQ1H7HZ978trXdQthQrBYBjPTwRTJHvXtepfXJoYuo8Hc8J2gEYBJSfh5u5vEDxG",
  "key44": "65mWAQwM6vwpjaQhbVTkGzUZqxVZgw8wq9Qsb9uuaoKk5G27gXWsDSa9ckazT6L1oTXn3BTcesQP6RvVzTbwsFeu"
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
