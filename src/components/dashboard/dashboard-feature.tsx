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
    "4x3mkebmGAqNDiHcjd4iLPnWnqcpUJosV4JHvmmwF6ZuddAKVhFo1XrPBikmx3LpRSCY8awb1DdT5AitifaXtBab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEL2ySvBTzQio7ezmt1aLownn8aZiZ9vYnKpvvoFCgdSbNXGwXtxCEH9HEuE8oUtik3Hfg8bdsfriXKybB4vkFy",
  "key1": "5zHY6HCXqoNfwpGKUJimGWnG3CsBw8zt2tiKfp5do5xdwQhiEFJVa2fs64RScpNpnDFczkyFfHntWJ42eMkwVcuS",
  "key2": "L1vnoKRFTantx8vyXT9UL2fWCenz9Y5wHoDqjgvLfYz7EcEzEJi75PSu59hXj2G1MS4Ht9R3KhYSR6Qa357Aiig",
  "key3": "5fXa1tFQEdHcRSkqPwtW7EVBE89CmMw74NzaZQFuGttdrkrFC1stqDX5mKqfdB6xpN42vnvD7eE1qdV9yQ5adUcU",
  "key4": "3o2odjZuZPXbSr69Wc4obvw2sXRRfGU3CXBWvhgaxtQSxKvdhsFCiETHNhHQCiwmZTsUS5WgHwSzYbAP4te5BWrA",
  "key5": "9UpYdWEN6FrnJ2P34XrrDBT6qSdSXuEe3DoePxU5sBk7ZFkBjgicXBt3tt5FxTqQPHENxBMwtKGkfCkohmJo2E6",
  "key6": "3BMFanPfFyRDEEY4ZbgiFE24ZnwUNeUZ18GNq2ng5TLyHPxLkHaGCfNAsztKqiwbJn6tFPVpGAnmPPS2FHUj7zTe",
  "key7": "5GXwqtyrD2vPf6J1jHPRYUPMEJvoRxHYQxQz5KUMuGk2VLNsCXcAaJ5P3w4AhNnhk8yP3VRPBqYj2cin5ujWgB7o",
  "key8": "2oXMoUkPXoCLcTSNXJ9FEAfCsFRM3rk1nKoGAokZiW9WsS5Z8DvyXG1xaJc7eTCNcybkZBkxSTiXkbUSNmcHka3s",
  "key9": "BUJsDovsMaVvmepUTJbNtENehVJMwrLxLSXpdU9BWgqLJDW7MNxaTmcup3YNzF84ei7NVMmH83WvwPYo5fkM5Ux",
  "key10": "UKc7NSRcyum83QDPwEwgw272hFio2picVQQ93Xb76BEDnypgc94jRqXmSiZ8dtpqfbe5doaQCEmUXiMFE1cE9Hr",
  "key11": "419BDvx43SVfPeXzkW6kiCsFRQw6KVGMcuFRK5nWzJjitYq4bV8HBMmDo72BNpDEnnPVfktNtZqNoYhNmwFKJS2o",
  "key12": "mk4aqj2timfbEhnyhRfuXQb316Rn8aR9T29u38WLbH1NEkmKiV1EngBBPypHNFgx4hJUcHCayB8nUWSrCvqswaw",
  "key13": "4cUM97F1oz3zTMSQ1hPXJ1TU6TgHFwcf2QvRDBS73Uaoud4XAbebusDbt5Dwbh6HV5KdunerpdKxkKT6qWMguEJW",
  "key14": "TZTknw3vx3vh7wUGgQmkkD4Tnjc37y8kA4Lz44tJwUS7Y2fDkjUeJyUKUCgNQWRpUV7hkaJpmMkFBVgyCC57s91",
  "key15": "J9nvKfZRRTSjUCu7MJQNj4fgV7V6LvRW7dGB3KNjWQjy72wbPm3XaepVjYzMEZrzJKZtSeRUPF8m9GShxReqFgd",
  "key16": "4KWgiFXFnjzAGu6FZKATbPnrgUoqh7GvRVLbXaec1mmxSo4GKJNcXu53Z9D7QbAuZ86YBBstgxJAU9QAJEXwjki9",
  "key17": "4XRXoSVp1W8cazN1LY5jdCabjBJTpYxDKtfHrppRJWmGfJR2xqezo88DSgkqLLdwsyt6CA5RxRb42QXDXSfPd5z3",
  "key18": "4Y3cCDedYyvECZv2g4vBBcbMqcTCmaMyiAw58c7XSbzBKe8o1Q1eoc7j73HM7fT52qYKVzZiGV16ApUuqZNVvfyF",
  "key19": "3U4ZMGp6Tzwh4DACT7Kao2GALeUG1qEFiE8XeKut6nUoSnMwnpWdvFznRGaKiQWBGA7MpM3GUWmcqKQtmM2UvHVo",
  "key20": "5GJJA4AP1gLbjDWiDuRuMQsoUV5DTXuUzt2io9h5k2JAKYxDmvr61tcMESrjk6ot9hMzg88KzZvNuZtf6k8mdxFj",
  "key21": "5YEbE2Hv25zQeB64hwK5CVFKk7NUBc5a27BxDsvS2RUu9uikGeLNvq3eJSZUnNgEu7tQLp9GWh1tbMFZt5mkmnRL",
  "key22": "yDX6Fnztc2mLvwmWipiPyJmiGijbV38YWe8U5W7UkocxAKXEHwUomJcHnJQaetoFR6AUgQCrd2SZb31nNsBbtQx",
  "key23": "4N27TnwN7yCWrZYpMttfeKAJLFeWZURUvYV447FzWRSMWLXnprGoozcp49sUJUqYcV5wLRjaP1qTNQA3U8PKzTGS",
  "key24": "4fdyaVBZckkrLAycEwG3aV38Lpb4jZDanU7YFw5fNCzr4jwXbAuH3AXuP73aywoyLz9EKS9zVPgGissRYE7wTA8m",
  "key25": "2gmbs6NcQsea1MTsKQ2t8bPvTpG8GNJcfoGd5kgX3fco4MSXSH4cRMVEkr1DFebpm72DSRddp8Jx6WNc4RdGmH5s",
  "key26": "59qMJrb1SPN7aADQ1DqS34iw79fcDVBiej3Sd8rknvgBptYJRvTM2P68RG8fcnWFVJFzh7epzARpW4n4Zu5PYUaq",
  "key27": "4pMF6hMzdVbH3fmBS25hjPGvbzsAo1N36WuLtpgUSCfSbEb4iKSzmvqsSWK57aPYd3vqm5dk8juY62aT6avpsvkd",
  "key28": "3zgonmkwiaZvsJcZ7WTJo4xB8emnN9bczEzPP4jZK8dmrrJXU2pnuTfrtNeLHK6suYGhVAEUkgEZstrE747fvayc",
  "key29": "4GUKWWCAfmRcCGCWdRPosu4xdeKorB4XBKxUdvcoDNGqyrR12bKJqNPSZ875ZYpo4TuVCiY2HdQD56h9XKSbJC2F",
  "key30": "5Gupgz4Pih4U2HUaYjA98kx2qXqKkexwcphcmYGzEpWvSDUWk8WRgDrBfg6GRywVRKTf3ey7BKa2h4xjmjnQMsLK",
  "key31": "5LBpmWvDx7i8GagJxsNydoRXCwFQMJRTqHHvuVVZrB3ywuWMykt94nxa5qdLaggtH2GdsYNPRWyu1PcCHGc5dUTX",
  "key32": "59EKUsg4QDF29BjSPuQ4bJrKL5msUAx67icEV8qb6wB23T9Kt4RzjsxD1okkQ2MFivSrmmaJLsgbc9sSomXhzauN",
  "key33": "3Bo7nfdrvonj7X1SwmQz7P3cMmFZc4JzrK2QwBzXTGfcWVtKC1rZ8VeFUk5mNXPcMYLgA9R4exnDrSgUzykc2iCa",
  "key34": "JmMJMZetKUumgh9ioGtMEXn5QQwKDEb14U1CUarDqX7QhhxPVqYVYNTeaJV4bqun3siXT6Hz27otNAZybiwGp89",
  "key35": "pyABF5ADHYRHLFVuhpvnhdzvyRTk3n8yKdDzJeCDJz3KDD1XUtG5b8k1STKVGrCQhBMRtTgdGjTsPUsAY58s6wr",
  "key36": "59ZCCmhL9MKzagYY9prB24usAfdXs7qH2M8rPR14UDAzpCEDCLKNqGSn2xCdjwQxRrZ2VASdJqGLDS9SdScFn1Zc",
  "key37": "3ergtyYQ88H28Gx2Jf2g3ZatwWZNM2PsqtQEoaZy8jMgVRDgMNhWa5yFy9JP8iPFpmH6xJCVmKKVmAdsPoHgkECF",
  "key38": "25kJHqsjaWr5AJxNLms258ruRqknKoqFajJJ9FDwrLmYh9ahE1RkBS7rHq4e9kUpfHuU55d3gvA2fpB4kfFyFX5R",
  "key39": "2LY7aG8JaQyPRWVu6dx7cH7pw5FCnw7FCMSspD6vX9FMoJ4pmEGxyzQoZDFuhxjPmTW2ZPD7P6qGKyFqK9pGe1Wg",
  "key40": "Q7h1p4tvYH47CRUBMdErUw1DXJSHaQ9QhaDaptT19nFC8aEf35zCC9Z2CWJBjnU1kdni2uaL2srQtT1VmeUwWQ1",
  "key41": "txuhHv7NQRqMnF8hNPXZfunA1vryfjuf7zQAtmyP48AZQ7kS46jCkfqQxG2ccJsVUXq4qRFReDCgFaBhCHAm9QF",
  "key42": "gib41RSTYqs93uQfvwvdszAzvUm3s52f3PCoMd8eqFNGQXKCqJjM3RiLPS4Z6CrMoVyLq7Xt6qKiEcXjHgaSvdx",
  "key43": "2KY9UCqQUcwUkeaxP2aU4PZo3zjxy6SmHWdL2LTD1RNgtzQLB5cBmdjfSjmkvssH6WvF4nwL4EVS6H2dWPv48Zbv",
  "key44": "5YjiS67KgcRJyhnHpkUSJnwyMt1UY8GF6NTaAxRPHxDREC7Vh85dWUVSfNh57FhX4M8s6J7svZc3oFeQD2xfCo3t",
  "key45": "4vJrFR1YxKRXNpsKe6YtS9TR5wG36M8oRv66RRAYW3DErswhckmu6ddj53WvuruXtQs4UmFaFor3mQTebTbvzdz4",
  "key46": "42ZD1DahwrGHdRKhwKeXsXAh971MfyN2HmQBrPEy2CxHRey3sLM11C3Az5x3fqwVEiz8WTro1efuTWNRoNY7ngcm"
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
