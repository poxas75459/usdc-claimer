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
    "2zinSgogaf9WH3mGB9rAePmcbfa2BmaER3sQcrQh178p74oP1umEnVH4Unze96A9mJBtJe9xzZ4F6zBXUfqo7Zsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gx7bGF6b9Gf3HeMNedUhjRxYRUiSmfUGfMf31B5i4FFbygKZ4NdFSGyjbWWn2ZzzJSoAqR889aQNghySt7Co7sg",
  "key1": "8mpUQMxdCwfiPqqgGfoNyYmMdfgjQdiAnXxZN3VtHDKy7gDGAsqbsavTK86dTCeFkpoUMUfmmLYNtyvEdzegHRX",
  "key2": "3FWt8PuZHM6oJkooQFD1BHktNX5m7jnCqBAvT7yHA5ySLiH7Gep7B9tXLfALRN5L3TMm5VkRoudvM5vUWSf3bHnf",
  "key3": "3cxJ7EAn176qvyQKgdm4vj2d78uXHYf8EnuJRXeC3BpPh8ifHMz441dahgotcgZ3EFHs4KVv1qtrheGJU9aLCR4X",
  "key4": "5133VKVgW9e69e8TUN9937hqDCsrWesBCGn9EUkra9pBtLdiaGGXVQFYXAdF9Kuag1RUsQY5Sn9SatuEJjem6vUh",
  "key5": "5jF4A3sqMwWvpa91QLgDNv5t7FCi74boUDKWJWcAnASJWMmpYd4uWiDZ7cy5YE8vRryxDQFEerqWRJQsjn6Zd7GG",
  "key6": "3vZkGi5Prfia2nsimrtxXPfDsj7ct27S3q6MQrcKGXcoFsKYvbhjV1S6QrGeEnskQenqeMDKoneABvEiiPKiXiUj",
  "key7": "4ovJcSEDEKUfWMNKx7Bg89YVJ8M3x3sFS77hDQadFr9Q3Wk4cfdCpbUhTLTcvCukda7MRfPBbpSV1ZCQ9PtyQdqa",
  "key8": "mnfgVmTL9qxLPbyM6qFv3mD2aXC2aFKSCB3wSa4ydYh7zDL8SbNnmGWV2ya4s2K9SudSwQPZvmA3huW5gKzp7mk",
  "key9": "2TzJoqYjF1C5QQBiKHB1y2kdHbp93rt6hWviwr7PHa46To15xgWHwbBdD5Sbi7HsDq3WieSUuMyMM4672MAdqa3Y",
  "key10": "3sQZHeTECqpRExb8s1vuW7fnkLfcurd2zxJGKyjzRGQURWd2oJFmmSvRgZFB6Y5TkzqBgrzRTAjCie2uF1AhoJT1",
  "key11": "NZzYTVzW8ABYtJHE6dRZGbiqd5YKWz2enihoTX5pAhJwSwbN5P2Mhu3KU6bu5BdroE1VGjF7aMHtvZsQ6FyBMm7",
  "key12": "3FEZiXE4kiEaTYoEbJHKhx6axqBvnd7izcgDKRPB9AiuG6CCaNt2nWYDJSze5NcAbYvHatgV9iyvRnw7zT4evGUP",
  "key13": "5JvP2tZqcHYTWEdiQMcfAR4epgkno79BAMBzJGTJSjhAdtfbk9oAjPJur9JSpfLcKb5JCfrL5mzZ5RJaSch9F1d3",
  "key14": "4ebwxQRsnY8gUSMkAfEhcy1ZVZYcTAzxMdo6RJ6cmZieHRBX6AVXQGZHFvS4CZwg3MQHDnCm64gz3JvkkyfU1ngm",
  "key15": "3MAUNpCpw1Lx35WEvkXHUfnkLZAAqWpUP6dMXLsQbsDWBvktUpTaEo2ti8H3rZ2JCMFNt9mzsPRkRsLaczb54boW",
  "key16": "2VtWWiN9FtBjaTQZFYs47sSg7r7ETfnyQAKtQNhFtkh4eLS5HAXNb2SBgdLpDGrF4zM9PNjjCju7q5h1Doj4KK89",
  "key17": "4e5odMWWE7cGSWeGfbWgHvMmSgdvdSv11NhnLop2kj4mzUYbE27DdpjZdbzAZCQi2oKwkPyJ19bsLz8U8Lxv9R4G",
  "key18": "9xou5Mc87YbNS1k2SBxZQ9T5K54KSd4D7GJTdT89YUiRhJWvpWkmw6hF8fdQ5wTeEr9L16VaCe6or1xa2LWHruv",
  "key19": "3QnWNtTzoHBAngb5PSs2UaNZer4rc8pJ56sG7RrxLeSx7BvwRPw9884hL2dsTcayPN4nHRFNT3o4dR72PZY61v5z",
  "key20": "2Aj73rN9RPpDQbEkiMWvMufaFcknDcfr5Xwu567BGoeYsyoFiE1n4fpBVvabiXMdFhB7SdSwykBGzY5HEp1miv5k",
  "key21": "L1yUGoVfLLWW1ahD78ChbcS6m8kiqVkwwtWGbVys16h5bF8BcLjDmvjrbtk3bLDCJfoASd1CtXPvQA9LNbxkz5r",
  "key22": "4JmyJjtDdD9yF5YHveuxYKxyf62eR4X6K8U7ct5WhNCVejeHEVYzus96BReYmPmbL9CiWsnbVHvGeogKvxbx4DBA",
  "key23": "5KLetzJJEuNmcmUAyDJodwU3hoZWYEQssr4L7nuYhyzR1fNuZYtSy23f6WyrmQCM57Gr9NWuAEmCWHJ9Bn6wwKV6",
  "key24": "2qkTXcb8GCmwghoicn8g9Fqkgj3fhjQ9p4XocLcFFmSERumS64CpFSE6Kkbv6QLpGrsX5nHoq3Tbb4GkHhn3FBq4",
  "key25": "5jzwa8uNqMu3kF19DtsQbnVGbok58WfXkqBPLGav3WyGtTyUosyas21HRpUUTwgg1rfzdQxgx4FtWLWbykVFVrGL",
  "key26": "48bQZ6pKcHeF63rApq5xo5ukeiPRrxqF5MVpHjjzpDPDZU1KJpqmu9kkKiob3EE8BpkPGdCshinJcnfEX2drkMsD",
  "key27": "mM3Cf4Y8AiGUvemoQCfhmMc4uQgUcHW6gaySFWEdtHfcQzaLsXQ5G5FCiDUC4sho6n2fSbmwJTKn9J5HEn2xR33",
  "key28": "5j3E4KdNZbDCaYrmgAarsnCAMCPFeyFoHemTqFWKju5Lizfk9qhSWbWReniizkwUkNoV2n9FDvnqBQECXyms1XTt",
  "key29": "Z6Rw21rDZBenFmaMmiZzv86cUwGusqURyjAxBQB7utr2jguYJf85HWUKspXr7CGpgMTYcSsbxAhgiHNkQebAxgZ",
  "key30": "5Hg1nRtm6GPGqEumo2PHjjMBoNXUnfnf3BqAGVCVHw4Y74uKJ3E8PaK1bzj8bZZeKYoarXvHkynh116qR1KksHTo",
  "key31": "278pHKJH8zPwzEkyW7n9jgLvUCjLbZfgYXoVYDWgo3XHmyHymwj9NWjYQHfiQW1k7FCHok5Nc7ovUomk2f8tcYn7",
  "key32": "3hS8Jz3rFEbNfXJJPSzjZugwQusixiRra9EebK5kJzpWKpnfbuDSwiqtmiopshsYYL94yu2NgTG9wfw8m98RCXXB",
  "key33": "4UU9ArmJWb73WM4ArqQExBDoei58Mh2aFZc11cM5G8kY9Z8PrBgZRtWXBXCA3t7md7gyaPdLSQXxoJZU1H7t5sUq",
  "key34": "3Q2jM8PjzBw9XZ55hw2nXewcKrtFBt5HYVz3KbXvzxhUsyKNDc2afqDMuugXDs27hb6Y7P5cy6tUNMe24HTyzb96",
  "key35": "szrGF4QSiMKYNGRzGhE8r6xnw5oTcuu5eXRjnqeT31s5QMrF7oCZcZtBqBf6W13iTPcedQ81fgvqwUWCNn5Sjgw",
  "key36": "5AT2J3fpBWPGPRnKT7QK6HFfyXiXfWxh8STcbMSfzJcVXaNFb912WmvN2KveXPE4DnJFjNf32cQZLRotKd1pzLSY",
  "key37": "3uUGQtGtJSaM6qqPkU88teekauqR4ERRwJKkQNJpZUX34g6oG4T6PSZVb5mMod1hBbexrJXdYxNpJQoY3owCm3oc",
  "key38": "5kS4pJu8TjQBrb7EbVE7q5cajwh845H1qyfEFWrx1R7xJ7s8sa7J4UeSwFjmMYc418MK42DKmwatiHEnPhTzPa3r",
  "key39": "5gtNakhLMF9k6jPLoJsg5EmDDcaTYLRT9SdXGxZpv7dic1937BCdmYwMoEHPg83RXUzqfwjRzzXHHtnKPkUVkctE",
  "key40": "4jdZnQpEJTRtQ3sqg6U9f2d3tbJMW6XiogUgx1jxJDXJZ8vtf9uHu7jVzxCL1M9bcUH8VWZVQgLhnfgTx11zT2X8",
  "key41": "5EFhRAXTPAzHjTM5ZZtUZxVQuCaSqBtXBPw6BaZcJRgMFouDRaMZ7UJ2ytQ4xj1aVuzHxc1Xc2DwnnkkmwopYMMc",
  "key42": "GSomVdYdWQTaCT3jpo96kbAc3vG8ZUq1yAcnEXjiHGYRgdZswKadWGUq3Gfq4dfXWmLA1LBEXWizhofNWkvkjpf",
  "key43": "5e8WyqyQAHgDJrPq67hX6mDkhx5jcavFEVzxnSdTeMp5uZCoCn38UcX6ctAiHjBvvES7jWkcoyz9eCFNiR3c3yzX",
  "key44": "3mKB8VkqnL6DqP4345P41WsiKyVP5nbQzX26q5TWgvKSeiLRxQ8T7YuqUSTjt89u699ud8bBnaE8fRmKDrcFFcbU",
  "key45": "uWLHSKcd7QDox2DNdxronapupCCWd3XsdQ2CZBPTmkCGdiHTq4DZBAv8NEJZ8ii7mNMK5WaVpRUaNmsSEBgCsco"
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
