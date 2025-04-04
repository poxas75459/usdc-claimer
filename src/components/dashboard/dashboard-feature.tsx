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
    "5Mj13ktouzyPXAxmHqye6EGXnHQJoRE5k5ToX2csz45ejye7c7bPqCCMSU5KiBUuWdaaX8gL8AUAqvRAfwunkyBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WkWK97nCQrKSyJeCJfxKa8QBdrM8LSmn3UTLWrfhsHVs2diHsNdihWrtu3DCtgEScFgwhQcEE8Hkkzyzq6gj8tY",
  "key1": "5QBsguRAMYFRESW5EPLEJH4ftUdSf7Z6pX6kdm634Tnzk9czPtHkEk6w1qkz7twvjrDVDhtM9sMMCKCxJLhLyB2A",
  "key2": "3Rfpderf6g9TQfEoKrEU3pexn8mr79NpehwKfDuDbccczirdACWMUPuKnT5b5MoPGg2fKHcp4QZvvMbcB2TeEbbf",
  "key3": "4uNuDaC8DeT7qcnd2DyZCg27mfjNYSWhqRkBXDWqmyAJmxRHYTqztvddy9P4mtfiN6EVrP2KQ8XR1AevgcjQgfSZ",
  "key4": "4hyBXjnP5hn48trxUuZS8yCd4i2HvsiFFdoNVKiQowRfEzXT1gCE6tsmwVfqnKkoaBHTGR3gRz7yGbeMvySfjruB",
  "key5": "5TZnyz23HdYnSGi9eaLn4UUYkEH59VhJQyLf6cqy8upSKaYaV6ecC5VDG1e9iKdU3dqC3Htg3U5h7PWNshuQkGeu",
  "key6": "3J5cpjzgqQWQuXr1RQajMcULDnf88FNMTDYnAiDL94HeFZxrpZsy66P474jTftvC1RRJbjJZbUdLGYEqWQfGfCPW",
  "key7": "2jKDkBtketkvEZMi2dyMWSTLP1t942hZ7jcYmi7zVEqV7cfMN9E1EBde5NAEWHYTA4AokY982gw527zYMVEwLG4m",
  "key8": "XfSywRnTZfeTwiuitMDLK1NrZVSwS5vTFexAQEoncKLdK33i6PSr3LeauNzbG4V5nLn6erZu43bkKZCage4fUVR",
  "key9": "2A41NvCG62ALZg19fbwYw2VSe2Cn4TX7zdnQ2197gQtCis1JAJiFGjFGP7MNS2P5peB4FwwtkNwp3ykXF336AHbX",
  "key10": "2YSS1w5aPkDqiBgN5qNLyvvfU1mNKVL19HqZSskjNQ2A99rL1utqk35SZmtAUvYYbkG7CsuUHWyPRJ7RdheYfHJX",
  "key11": "33BRV2CKCFShx8bPCz6279TVfrxxKHvDjV7g9h2mPxxPfrVjLRVpvbZt2R9w7rUSCzvT8LpFCJeLzmG9ybaEkj46",
  "key12": "34w5yxy5FTbX2p3ZH5Z78TgRW1BVC7uDBaAMaBHR46rNAHMboqPVNRGxto8mJpCPCbJTnq7r1h55iDML7eEzyw95",
  "key13": "55LzrWFLVpViZDuhyrnNmAW9q11cYwcPn2NLU1zfJatCrzZsA4pi8sH3p87SBErD5pJuy2huLPhe8ALJJS1C6dkT",
  "key14": "4CsEfwcNmgUcD6dGNLfCoHLhMa2qmMLU8SMKvy8DZepDMJU7Xmy2P33d8gZ4U4gCHMmS5quaZAs8FEGFBWcqcEFY",
  "key15": "4Z39nPAhW7yFLMhPrET6uc4iKvd3yJWjMPBmgycEUWLP5FuSgnXPWZyveny8hxfgJmCckrhkRYjtBLjDYoRD1bkc",
  "key16": "4r5zuWaPFZmetApMSbXrn3ro3RxXjRw8AZqh2EiT7SVyZ3dGvtyx5YtVJxvcJY7K8Vyscv5KsRHSNM1C566wAVia",
  "key17": "37UocPvfHk3JnHFXVFPRj9CRfaqUDGDAezGx8Ky8inSxSZx4TuXfhr6QsQDxjN3sN5BaVAmZY4t5XWyigAyYLuFE",
  "key18": "2NBaRwwwtxyEhQTEVcNG5YRi3qvvPfsuTaGUJSpMjMDN3cTKSKbRAYrAiayD47cBAMANq7aPVGb6n9BuNGqd7w77",
  "key19": "3skCYTpZz9cXmvuZ7XcSvwXehBssAwVYN33h7uG4jPHpdaKS8q1qd4seV5Yc7eSMXEYEDFnU7DArvBRFQvgKo5fF",
  "key20": "4mco84b5gmZxaf2qNrYyUyUtg6mJDN7ybaxCARgiDVtuBGBeJFSRrxKiWaM7gEX6ceU7sa12MxYeQzmLkVw1vmZh",
  "key21": "N6aysKYvL1f1kacunzRMUuLrYGB3WyfNCajiCCpTRcrHSm58AxHMvw2a7nhYjpQomgPdmZw17tJvSFJW3BD65Wa",
  "key22": "5czQeFd9kMBrBgrF21Js3YWsQWsWCSNfNgZqGGQNYUMCJ4Rcf1JvYxaekEMp6XUxXrcxUJ7MpzhpYC1r1KbnJrvR",
  "key23": "41TJHndbTf5MC2ivLanvTJpBdtmUBBBgQow7Redpbz2wE3eraQJRhtB7xN7seaTfWn9TkWmby53At4UbVqBhcUxC",
  "key24": "2qZa5rfeks1ttu2LzLn3HqgYVq7u9PYG9NyiSzFN1vg5KDdvE69ncpwBPrAXVbyhnQFagYkd4rfi5w3KiqbfDw5g",
  "key25": "ANyTQ8N1KtYhrpuGzjqrra92aQaqgyFTtp4GFzKAqNk7aEsYKSYPDnZaMwMLQV8WWS4KXAMppN2hCxQZ5xjjMxN",
  "key26": "4LwkW14MVETmLbaDFWoPnTR6vV3P9NSeAyKJtymahzi6fdupShLaCYNnnFdmuWK7yHWKWa4mQBEPNJzqeQwrkuNg",
  "key27": "kVgcij31ujbFGiZonoedJc4FajE9xQ7irK3MdMDTEFMwKfoJvQRYy7ph9fvpcYtWbFa6dPsvP2kRVvhAJbJKTbj",
  "key28": "3KBQNKE3URiauMZzvswBr3NpJH12YR1GrHpdb8teE9nmPogx9dug1HrAKb5gwf4XWjcA2YFNdJ8ZeHMqnGt2fQAV",
  "key29": "5smUvwqAou5JwRHA3EfsrgkfDfYrHc74vSqZGgWYS1uc3wgbjyUZdKAPxbJB9j2YXM98fgSG6wihqqSkTQdSHvZZ",
  "key30": "5UEYis4kSbDMmTaygjAbVwbp3n5rRccoNKGRWAhXeZLTeTYbHKc2x9UmyPqUDJGi5igzx8xirx9pf7aBsLAnZSWH",
  "key31": "3jNadRoCbvrtkdQdTUqa14WqB7d7PgDyUG9Dh5acc7JCCwH2n9NndhHcGHu9Ks7Px2cVLEWEyu8WaMjDfYzxY7xT",
  "key32": "5cvTwQ2TQHibRv9ZmfNDyUoSM1j9r66SqgUhcTu4HKKLpcbmgCfjUfZ23fAyvHc8ZTuNQPdzTE96stmiyBZas4yh",
  "key33": "3G6TH5XrbN5kpCtvifRJcwVr7CMvFGTNWpqc4ck7XVxLWSfDikgfY7roSTks4tA1MwMp77S2QSJzCeNPd2LYzeoD",
  "key34": "4UW9dZ8iUra1guZumkTo512j9Lf1zjMfLUM3bVBP9fhyVBE6qcQmypj43yrz9MHuP8eHn8kqNzd1qabK3NMRramx",
  "key35": "SzR9wrPftTbNHeRvzaFyqebteLB81pQ4JAhSBRLftvQpURmj8yyKmFEFhQJUsZqCbf6k7jrCipcWs4angrTaD3K",
  "key36": "5EeJ2xisJ5PM4YSKEWUpCPnxTUcDpCHHVwDKQnTqTf2PCVX3u7STN18kLA6QGcUfswUffWtjPj2ACJheA1LThNys",
  "key37": "4NrUxJoWq29aGn8kAK7HynpzYgAaw6EEVPXnrEg7fZXZy62zz7Fauxt2efSdwyzGGREF9ETW8oLAJqQT7BqEUH4K",
  "key38": "5jDcMqMHZ6jZUjFCwae3XYv8yG7XsGPzMmAcGVPdhp3Mdmhk72ymrpL52BTDye5WA1r5VhKcbJvHurzm1539xt4Y",
  "key39": "Nuwr8Gwt9XK4rw7g4f1b4WYUGvchHQVy4tHv1R3drN8BAijEg3epa5JM15PqcKfL4X1wc9jvLWcQE6yWrzaxMnK",
  "key40": "YVsWCmKPfxdF1x1cGc3xarUodeJ5zP5WrWWywccg9gsod4Jeabgg1meQ5AT8QAV5ZUYDu7qEwLVJYehtUhshPDL"
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
