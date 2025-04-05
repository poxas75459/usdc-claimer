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
    "3UrpZ6KH1KKtsoCLXHdXL3LVRRF29Adc1ForHRKAdRnSEkG4MM5bi5VGn1SaCT4FLUL4fAjjtsiFLnvAsy4YWKZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VSYQ6CjACLQrX5ietUDYopTz4VVQrVhx6ACaKoSA1DRi2QV5wQ5v4qQa4MiVU8diTbHMDAiBkhTjgv9rA4W6zAk",
  "key1": "4qW8W6qpg7BdzPbrEgv4EigoJNvcjbRxButDm5sdfxJSkRrSZX1keDw9cud9rrTkJRdR9jFTFkoqVWhrTwFquvUB",
  "key2": "5fUVWbrBuX17HECo9A4wM3Ddihx1KjwzGcuDi2bQPYHNzwdViJyFLU9z6jTeW4m8E5MULTWq6rdpS8RSKgZPDtXz",
  "key3": "5noECu1AQd1WxgwZnA6n7eiNdh3rjydEv1gZnEKj5ipCfptRoEndqonBmxM2GjzQub4M4QDq9oUqAnryvr6CY1qm",
  "key4": "5hG3YNFDs1AQtgmHMeUhAXQ2sFdMirjunfbVQJgSCXLMKdAF1kd61FdYdaLHgThsxp55P6pLFtGpRFFvS5DbxRav",
  "key5": "4mb8o2355Gabe3eyQ2YiJ1PsZQKMKVSr86snhKw2d9ADzXSXuKLw553JSy254DuCDsBLcrrbizrgzfqGsV8DcCGz",
  "key6": "4okVLC7wk6Du3vKtcxMenL7DL5k7MXGF8taanoJYcHiFcCq1zP7kqacjJGY3PkjJVXMk8n17HVnqqgXduHMsXVrb",
  "key7": "3xSAz6bVnNqjum3ha4v77BxzAyRLSgB8tXingYPapTVuuRqhvTVkQga3n785HsH1NmCyWmTV2LUg1gE6njghkyNg",
  "key8": "5JpFVsURcPgjfuNjgXcLXYsaR9wC2fC6iJsNCigPSiSDR2po53AbYQMjfJpunb6jWpNpreY6rLP8pyvjTXGMu3fu",
  "key9": "XskgVsqU7ELxqsCmAosGxX6JamozLRV9Da86J9ZVBuwEwhrmUwh6eTC96pRM7XKmcDdhzhexQY5z1sVoVTtnhpv",
  "key10": "2YiXTr829mRPGhu1a1jSLYoGoh9ABp5MJHaF2YQQ2w8KXxoT6CMY8iRG2M2kZygAJ38bn5pHyZAwU8hYfQVuDCfX",
  "key11": "2WmWh3krqcoqyviXXVAnTsmjZe4uMKoLQ6mTK8FdXBzpBQykr8HeAa6ErTn7g69u3WnSfgxiL81yQ25D3oYS3TEF",
  "key12": "65pm1cnbB6RoXz21zvQZWwVZMH6cjsrcthNhoDhHJtV17LABhyJBmXAAaCTvB6VugEDtvmeTU2d95gfzrQbjrj7W",
  "key13": "3jsbh8VHnQnbYsGYdxjvEU2jaeND5KM8ArVQE3ARdr5acJ3upBfjMuyXfMwozENbdxaJQpK9st6dVdzbF1Um1VFC",
  "key14": "4tBakRDyxdKxhT8cb6RHF5AaiCZFcaY7e5Tqo19q2hhYwmoJ2X54Z4NNRY38z4FS3fJk3XUk1yCzeSNwPHKFnRt3",
  "key15": "2Z1V1GnwEP5XM773uN5kFSVtVmcp8u8rbCELQYQUNWDueMZBXDss6jRVvyMUyYdpFoWoE7X157ZJkHL4H1pqkf3t",
  "key16": "P4jREmeHwYPpzBZ8cbmzMt8CEKgJKX3Lg3sSvdMtBkyfYw1JxRQHTC5vY5NMTMCgo9WswtPRbP9bo6mhmfakAyu",
  "key17": "42X48dofkpxTXz4fWAHdSuP4Lq2VeGWSakTgc1GgR8KF5BJKSZE9z5VrA3zq7tMtQhKgYR9WL1hkdSRdC2Hecz5L",
  "key18": "kXqsCbqcfTviWhBgBPthGHMZHrznaxLDjriJ1bM12CnfZ7j1noubWRUVH5PrKsEtPG5KtnuU77RiyVou6BSG1fZ",
  "key19": "5Nec2rVZVfNnMH8sueKWPQdC13nXWZumwBeMdTxP5Ym9jZsv5d48NMqLJNWFaJsXkPNSJpLs348CaiGsmt5jrtUA",
  "key20": "4rj7Z9rQXPFpM5U3UPzXsc6BqLkGkFDNTXAG9S25prsCZz8eabY6anEs6vYpUdD2q9ocQGrB813aHMEABEWXgT5P",
  "key21": "3JyaHpoRtZGeyNJ8etN1wtuzogNqwaBggbXgeUnc3k1QZG7kPpKAMo6SjPAp1QubZwo3kBUvi9UmJoQckzVRMJ7M",
  "key22": "5jo1vtbUBbFWNaWdtyTDa89A3MWHGQ24FzHq7WMaVDVVHEjyhcbB3kLHcNaZBBnaWEbDVC2n4uosytdSQUypbiQC",
  "key23": "5ichfTjkkrmkq7c7UTnmAwy9LsCd5Y1QnwhsuSvDMnGjqGZ3yuDttxMjEE1kBJygDDHeywG22AjvhXmvKL47dnoA",
  "key24": "2AzuwUGmkQZr7qLQCfRFYPWM2eThb1dZJ6uto3pBJ4ETydHL4V91kZGskJytrsTVJ7cvMzcvxbjhtr6dJFcQEdAz",
  "key25": "kDGLFJuYghVNVmi7pz9qb85czY3kfic7YAaEKCEo1kT7QjWxpGu5RbnwWt5EZMBrrR12vjFtFCXzj6vfeLKy3sL",
  "key26": "3GzBtPjYrNhFBdfnCz6EuboLBS5vWHFo8pzRsj185ZSDH9cUAg1oMxR435sxrWGYRkSsXXNeBcsc6JCUa2QycqNU",
  "key27": "5Wekm6J5Szraz2MwemV5FF7uxoFKYDzRTiqe9EMxtibBo2BeNrJMTjsumESpFKPqbftJ4hw2aMcgRqwUjfX2JGXw",
  "key28": "3NLqoyYwewyB21nGTLR31rjm95MawR1BRfXSo2F8cuV1LVpUS99MDwGXDcG8EaxPAgjQx8oxFzejHRHH3hCkmbex",
  "key29": "4ufyn2LYSjgvzhUDWRyj4fg8jjtQxKN7Vuwd9mqUtbhsSVPuhKe2tisKgNg9xhS9mpvQYmCQgqvwBfWqTeb5rX6h",
  "key30": "4b6XPczLCk1FNtZWt7mYWX28zX6UpTEYK2unG2cxfLCApAbXeCAYMZxgAqRwmNZy41H1PoNFNZdGzm3yYQSq8WFW",
  "key31": "QWtGFozzU8HQ73HusucGLLPAd1zxWwJdbXH9w8depZca13nxAUMEMxdpNHVUXUZYwFeWpmh7wBefKvMTQB6f1fi",
  "key32": "5svC8bArNh1ATwJMEdpgTnZs2Jq4NYxEihefaerXQzzuZob5Ho7c6GMod9ujyswhcNewGy6QWJqxqifkfT5Mk22e",
  "key33": "26W6gudVB2GURHRNyeYn1G2zut3WTtovgbcT9ABzhvzN6RSHKDbVyBbcDWiTDEx2Z72ZV5Qb258Z9e3VVAHUyPgq",
  "key34": "3BVxg4DN5HzR5m9SmkE7GtX8DZ1kVaFbz9Q8gFGovDAXA3HDgh6vkDHC2NeBuvuQ8x8naGrCEEwJGqfd8Ftstvgk",
  "key35": "3ryQLTdbJF5TNz5vjYqCdur1XQGw53heoFKrg28kN6hQDfHq8v69u8UKYiqwvr3H4wcdnsTeGzzmF5dK8swXWeg2",
  "key36": "DibTcKthfNHN5M87AtJrBAyB4C9DvwTUL4yZuf5zdDFWmUPQ4uDZm92wcip4TVsaFcYBFMX3Cd4j6YP9KaBJSgN",
  "key37": "64WUDt3siy8P4qh5ecaJ1J8o4CYUGfapJxRjETBZv26yKX4KvF4EYUqJFz45nR6r5ra63rw3ca69uKfKF9SXK4SB",
  "key38": "63KWAuKyCSbLqyQBDUW3XKAj4AZvyDqAc8SEVCWm2YW3UcEFmPpyxyBbXpcyJEF4AdWgF9aifMVBg4r5LYfbEJMe",
  "key39": "2CTkgpsHhwP1wWd2wYyCCeiTXtDMfkWuJfsLu21CVAfRnqdE4MJFeF5VkVhsj4TNnkNWZ4DCDg51HJBGUhf2eT2K",
  "key40": "33xbKy2t9XyPvC3V8131JekWGoviPzjMeu7KKGnBAN3eLcE28umoVhuFvBuqjGr9NuNWRf5CS9UDV71Nh1iFjbS7",
  "key41": "4ErBQB3h8Dy4JnuQxFSN5umeg3B2rHWRmsD57rzwitzBwERSdADQbMktNyCGbWWyGXJMimmfSBnheUGKW1dyETGB",
  "key42": "FqiYzvC8ho1c4u9KEHLjhvq3XwTfbE6Y5WcHy9wyoUoyoYxwngwtgeZ9abRwam6w9uqkBPwF4D2qtGKwe7nwH2C",
  "key43": "38B9X9AcWA8wUVEWTdA7jCx9KoPKKiHRynURtmGhrdiHaedXwqcq5i1v28GZctAyjmKJXU14F3BhBaFV9kCiSRgM",
  "key44": "4NbJUwzNA3kRMkdvq9VeTALjYvMZB6fw1QpWsze3ogXnAGgaioawPNJj1opdWLQdhnsxhnszjt8Ak4fPHA73AVhJ"
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
