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
    "3471fzgHngkz1Nj4mKmQrrCC61Jk3qQcSuSXep69rH48aLASYnnMbzknRMKUyAChpVs2gPR8xHZ2dnv9kaEbYnqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7EU5yMDEUCay8Soxmcwvw64L1QRHiTiGeaq44MNCm19Yj8NfpZ1t1cyyosRxyfnjzysR9q6wjQsPsJuh8yxJCP",
  "key1": "35w6sYWLzZfVXVXzi99dbXEjHxoB7mkiXZ3diip9vf1LucQkvvaP4VALy5X97XvbPCuCe7qnXnG2cqWYeF8C2TFb",
  "key2": "VWUPXCZ4kC4JcWoZm9W9KmYbVFHpwJESy1bfJrRcT99KcDCKewBbnav2w53ms6j3aGCfbbdo6rNZgeRv7uYq9Hz",
  "key3": "3EDMfFXjbQVWFXaWPmk4D8fQyBFLhYKz27XgCbdwaR3GVLbb6RwPMqDPRJUN58ALJ7zLzYwa57DhXf3BrxMxtjah",
  "key4": "2Y29Qs7YvUm991nSZ3gzutGPEZqsDAE5ReKJEfithd3xdfKbKCKWk2n3VHzhS4D18xHyCGhoZhfCGdx4SGRuDbjG",
  "key5": "2pxnqjdpMbwAsppzoMHgVaRKJrWdxTqwZDiZmQHBLpCBrrQVhTnQQkUwmDzFPddDNi3yrY1JjLpP5fpHvpoZw8C",
  "key6": "JV6W2dgYcTT7gQEwpHtsiXMTJLgvJ6RyfXKthXWNHLd5abGspLSu1GsFfgff49T6NN3JeCQKjuwKGEM6jjHdSww",
  "key7": "4W9pJSnHo5FQRLnUHmnmAqX4Mbuwoi5EAQ5HmHgrhLCRpk9xgqsJ5UCu2WmZhTydcaq3FMZKTKisM4J1ZWmBho56",
  "key8": "3J53SceuiBzzwKQhewWh9w8UAnw5CfrBxT2r453ugrjFRRWJQBRVzm7xhsfn4NyVS4a9hwmPVUjweGf8YAtsie9F",
  "key9": "3xH1k1HQteoaaFe5dePEY6hVoS1mrhNr2jt4kexztu8x7Ybptgo5mSbHAdvALnM8oHHgAYaFJj3Zr14jEQDbGBAN",
  "key10": "16UEEpuwMVt85vXh7U6KWoEfd8L7Nv2JAsFxGRqraktuVuEctaAuaGbz5f82xpg9ixrhvdSRA7u6rBqxeotdd6z",
  "key11": "58jnx6wm3B89rFM4NmZ4XYX7BoANmX1qvtLfReGB52pXzSmmv2FspHTDQsJu4GpZXcEfzBucVAF5Z6MqRLyxLEfD",
  "key12": "48xGCkvDyNxv9ZicQtuC4E1P6aHsdg2aWYFQL9XnCwsa4cuEFYiJHLQcaaM3ji16MMEsvUUWGL3dj81nvXrGw15D",
  "key13": "MCnQm9figuSjMWbHSEK6x3U6XbakcUhMAwWED5BF9NxPDPVjr8wC8vrPNZuJ9hRnC8rAEHMMoLwke5zke86Cep8",
  "key14": "2wXpT9sqHc9gWdCwySsX835tTjWmsGUr37qxGQHYzDTDETn7EvhWnJatnveh2h8RcXCqH9zmekGn1ahZEvEDJCs3",
  "key15": "2QGJAPpL6oBgf28Frq53YZ8gRGcZxYz3wJWsP4wpS8vXsvomvy3rcA7vagvidHkHWPQKeATEby7fYbKT5aWkJFqS",
  "key16": "4c1F2JiE3PgcWYA6KEmFrCq2BKP6KoVjJPDMiCZmAPzgpCsmEjQUPzbrp4C79KTEzFu3uyof593tDgCbQMQ5oicA",
  "key17": "4uEsdBu6kt6kJX2LnXrFLU2HSpmRbXA7ExgiX6wYKNz2X6BxGDbmJoS9S1zFMkx4uxZwfATRTSueqJQKoL5Vfrxp",
  "key18": "G4UVeiHUzRFwjrYSkzBLtsMxDd6F9SttU5Bm9UYxfR7LDgwDNsfoEpwVAbocvmATPsKaULQeHZmdcaaCnfnjwHU",
  "key19": "5g7UKuzqjAcRxZzyoPXwK9An6mRMzGfaHoafGxnRv6dMpDDEyNeHY57QREZRX2SmMtvNgxrqy7sZHRoEEbWYqii",
  "key20": "51XkNieFSFG6aKEV1D6Sw7fMpZUJkZbTqXiJHcnTLuXWrEGnDWV5LZtD9QWTXtRZR8b5ceJnFuFXMQdHiuJETiu1",
  "key21": "wBuPnbnQPnXeEWS12WgpzgJxbCHjqggtZPjNZVwmVfUVNvAVmNrxmrCKtQcc1ZYcA9EvBydNp5q7gaRjAYkpR9k",
  "key22": "4GK4mxEVUvaGcyEdeoJygacK5hbWtdWnU2ftJoqUA5rKHiT3QJ5qFBvqXU2zW1gncjdP5fTdxrfejGrz2bC3SwAZ",
  "key23": "36CeLAx8nHVip6afMQmdbT3rGXtLdcbe2XdSdzSE2JBVzRoF7353pszqf4BstZXB49uMTUeJcKQ6bc9FnKziQ3B4",
  "key24": "5JxqqX6YTbcdRzgGkt7aU8X6JAKCR77fWarMxmzS13oMTvBvpkfKH4nVngNvNYNsiKxt1xGEzptUhvkBHWDWi7we",
  "key25": "5CM9n2NaqZea8hfdB6gF3erNTx6cXPERyxm6GSza9Y6dFy36opcE1tPcyD8ynpz1SCZodV7X4tTsF89rX9UVgsoo",
  "key26": "24HyApzD864mLhcQ1qiMq9zVXzCCtoYaJooR9karkZAtkjZtawGSf7fZFRw2o3LKFrd856pUiJL38NxaNgXbiHrp",
  "key27": "2WiW7TTJQASMkKFjRgnJGb2iNupURDN2A6idFcAt3KiMhWGxMLrSBepkixamk68rgBjXXdyorCju1yszK4aQxLKp",
  "key28": "5dMJFPwiBg2uBC6qb8LhdbbvGdgVBzNv3i9xociEfixHTdC28LoqRyhSzXvsBz4vTc7QuH45WNvdaA293VsUBKGf",
  "key29": "2m44eRbqRL3kTZ2dc9Esr5Wqe6Md8eXWp5dQVjMG527nYDowU8Fh72ZCnkykWrap3kUusXGYFMerfwgPCRGUJ7Yo",
  "key30": "e7322EfRT3tAW9nktjqG7ukiFDnV51PV6wSg3g43Fq69jKpThRTWoid8wFJm8Mi89CELGdwsubZGasqfsXLiGef",
  "key31": "45WP1baqR8s2BmHh6FUZvBLhkiFStnZoBVBG7w1aB5HQYeXdCWLeDMHDdb5tfcgNRXSdCxN6P4bnYvGXqftUPF5R",
  "key32": "2iecj6pf5E2PzhvVHFY1LMV2rwZv3PoMgwJAAvMa7TPH4m1fsNk8KGeyBQz6zjPkECQWxy6k4GrfvsRt8TXPkiqW",
  "key33": "26KpUaavBunC8Kq1ZhK7mxSx2bcRd7cK9JpQavwdj48VeJrVRMYCGYMfgHXhAjvm98dnLEGiGvYLsx1hBfFE9DCe",
  "key34": "4MDyGViF4GArgR4s5jHopmiTT1xWBZZbpjuF6EtjAibzkMpKgsRRXf6bu1xLHhcgfLUwVL4SXLeFnvfC4vE3Dtj4",
  "key35": "4aTPJRBszdH2kwEDC6b5bWmdAcU3jW14mzDh2jBqWZRs9ZJdcoRq7EFE7gVkPFtyK9EhNQJMNrGKcearKkFSoher",
  "key36": "53PRBNwxeJNam1Eipyj3ck1fv4XWtHfd7EUVsedntMzHm3844LzR4evLtJNSXPjTdTy92xiF7XK5EkihXpi6SidJ",
  "key37": "5y9ru9dqRQtUSFQauU9zs2NuGCxWa4eawitnuseRwWdomgGDE5YZHoqFtXekQcbCHBG1dTpyH9dBgDMHajLBr6qg",
  "key38": "4juUTWs4RZjz8PnqmPtCatKtHBWhu48JBrHqpsHc7YotMGTuwPsA79nSHub5Swqucxfhp3JDj1USLprzkgYTWnwi",
  "key39": "3Eeahu9FqNVxvTWLCZwvsFXNq5XS8LmtHxcLJm1mN7wuQWD3AaD9DUmBisaidHsY62rFpessUVu4jtL9pSSnmkGP",
  "key40": "4E9Qo1mzctAtXe37aDcDTSZkiiHNAwfcM5kbNwxeDgghiTT48txHxXm1xCFPHUrMWdKHPsxyYpokBwb3MF2TqhN5",
  "key41": "7PxiQJT4Gt6qSsgrj6guBESZCQ1vE9WqNPG4WVZhVF3BVse2yUFkjDbbwsZx83qv9BSnCwsTPqHUrTe8L243jb9",
  "key42": "3Jd5JZzubdywMbLAgd8NDgFZrgfCVS8tJZjGYd7LrEJKDuZVFBAk4mB97LWFjVx9ayLebAUpAqrStQUHiHqPUtm5",
  "key43": "dhuXwTQwxJnHcAeShQ5oeYgHx284RRiusVV1uECub5eJXVxwXTd58ygKS7d31SBCVn8xNLScCuKYQND3JSmCxEV",
  "key44": "ApMAdXkDnTkhm5Lcj9yePUkmhXyGLEWG9yoY7AqMqZC3Vn2xtaeUaqVMs1yrFWz2fVq7aJExk2c2CxNzHDEowM5",
  "key45": "JPQxVqm2NzUUMqYoifNiLeLogMvuDPoQSuHPPq1Gg5jvLEfQDDFgT8p8gE4rREdDbC5oGbv981W8FfgYx2qdUco",
  "key46": "3RhvTHfTQ12Qs9hGsMnobfAvA2G6nSTLfuTHHBxmPz4hc9uZKZR28j5G6mNo82bfJGrEpUg99s8ZHWWXMAuNoPxg",
  "key47": "4HNcqFqgc8LdXjFf1UeoGyCvbwdx2UULCWhaGrTVAXR9kGCdZHPYcfFAAVzfQjSJfnV3AFwpUkS4Y82vuG7jG6oL",
  "key48": "2A46CeTBDMQzDS5FhWH4WYRRoZV2qL65GREZx1SmpZM9Yb7WcMuHt6iQiwtt7ju9adqzPyDJRMnCgdi7NkX3WXxu"
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
