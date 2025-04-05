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
    "4tg4qMjZ76qDRxmbftd9XQ8vzWQLXLV8vUQGyf455Cf6ghjH7QyutbathP3AdMeTe6GMday1R58iMTjehiTSXBLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7dCdqwjMbVuakV9GHZXQ5YYSgzh4gi4eEeetcgDvYsJ7x7N5hUvqbrthAsmM5jM7TTqcV2Hi8wyqFX1KAS2vaj",
  "key1": "52doGpsZa9HynpHWmresJLQB3iTGKRMSfwk2gMfPjAWhkbjpnf5QWMXXAuZoYg4BLz5hirv7WCeE4bCm8qHy83gH",
  "key2": "43nJKTievXVbNbpYR1GDMzmNxM4CSpiFbhBNGibwsm64HiFTWDkAX4AmbT1fzrbRCXQhrXJskzCteWzUj7eqARdG",
  "key3": "4YMnvn9TFATgpgBXkcRTpCwbED9wGVRWokGiK9tJ18cVwXNBBYCKY9U279jF5gFcuwvAJZwevQnmqUiiNdiB8ovy",
  "key4": "kQWSfHfQQgNcAy1SGMhJMKvPSvT4RW7VWpsNJivpgKoU4Asi2ukFPJqDU4FESRDdxv484utobaWyj5J1AYamdxh",
  "key5": "24DaEFxBGt4dioPFH4owCJCT4apgpbnmyzNjuqFF1FYsrPKGWuxif5xrqkTCYP9VUjosTsWMWQUX9YSov7Uz94Ux",
  "key6": "2Pb2aTLoEW5U7JmX6R6sKBPsbdYW4okPBTqM9UNvZ92gcT27k2sgxJRY72UqUxmLQtMpwDMp43myrAfr9aKKx6qj",
  "key7": "2CEM2EfKXdHquowWsUhKR77vzgstHnQEdB3Wz3G8tvkumqWGgxra1kHmdhCrLUgdpvgo21rhtfBPRynDPH9Zup5V",
  "key8": "3NvkQKMy4uvfyHTDf6Anf8xbTu7bbycJwvKkssJUpdYFrnxFj5JkAXPb6Kc4iisJFCMdBmMZSvt2jmF7YeCAyQmf",
  "key9": "65KD7rAD7MMXyLuTsEmEqG8d1LitALsefRT9Lo8zm1CSmoTDXFYmKML6bbnz2jy4Vu63LY8oymG55Egq9c8hqxeG",
  "key10": "u6NrUy4TQU5zBGGAoTRe3VvVCXUFTfoUJn4DD1N9fRZ4tGKdYQtRkukSy7mEiasQ7RnquTiAAREtXWkEt5gYSaU",
  "key11": "4E91M4jPKFGky8nDKaDSyH9dMyDadXbfYPf2gLAGNvqzG6dM4hQ1yDDJSBhjF8zWawQDMeAAUAXTZhXqsXEcaMEW",
  "key12": "3jXMDV8KAAi4jKgS5xnZitcYe8MwpEjCQB5m2DqVZBE6cUDBr62rUWzkg2bKrPjpFWEtBGDZc2c1PB9J7XsXkDJx",
  "key13": "3BJPeLbVWSXoCPoMBoTvsavULZZyC8EAEoZZNbgwRwAPTbLXfA9YezqiX3YukRv3txeNtkJTEWpBe6Rz2dkuyo6W",
  "key14": "5M3Ezqg9n4EjEabe1gQMvJujdfJh2qzR7Z5ivWQi4GfTbysQEgqpDHphgfUFkFBMoWSvRAFqNhhngn49BrxQpxtL",
  "key15": "2KUG4yrf6rNs4UzjkrHNqZcQqLPPU35btA7dPmXuZm5Z1T6mqFU8MFHGGKbvEwRUWPgBy1TNGsbthNcrBdh6gMs8",
  "key16": "51djvFcr4GQQy1QLXPoNo36sZd31AnJHvLVdCDWWFXyy9fo9YY5eWyR9Y1bGVjCjjgYpAwMdfBJdLmHLEikyFSTR",
  "key17": "3bV2pXTTrzu7XQCMgaVgsXPqoQbGxcAD6NBbDh5Ff9rf8wETm8bqxQbMMQ4wFUA6VTcQNcLCZkvJuj8Ch3FjxhGe",
  "key18": "5XLGRYEH9KXYyKskTbLtjtU2ExHiBERCw7PvfZojH2wZKeYbRTNapCBhxfiNcbb8vDjrS6K9RkpSNvdAtUYoAXLf",
  "key19": "5cACZnaNhR4LCxMDpkzLNqD2U9kTVEMXrhVDSJwae2roLzJJydi2ttRRGPz9eR42rJRCFJ3LPex3hWZfojAtwCB9",
  "key20": "4uJbvSYuRMALEzVVMGp8epmWgDSVe6211jz24bqpEV8SaJrmmNBd2H93CSQZEJ19h1C6sskvxosZPfiGXe7hRKir",
  "key21": "4anT3YNCBup1sPJWEZCSRpv6cEgepdhLBzx5Y7HErzhSNV9DoGtEEDNXFbXQCJ9hChMTBubUKS19quPPn1WNikF9",
  "key22": "5UFLrZCp5vCjtPgEUth9XX8SEE2sa37kavBh1U65hXyoWNq5m89QxEWpkWzw6SpB59k5sGRoZtbHPS8oWSGftnGp",
  "key23": "3NUtn5MW1pcmBKyxF8NzXJGMkF5BgPD8xb4F5ng1EecKPbEn4EaxxRyPZ6RxC44uNvrHwmmpd6itjNqVpPk6P8MK",
  "key24": "4KHnk4sg8VB7L98tdw6XVqyWsmqdGpAmTcpmH9q2yHh3RZkkfokiSxSeSnNj4GSnn9D3oGvQSxakqjmqiSUeU1wP",
  "key25": "4DTvGupHZNo6BU18aC8EPe2dA5nVHD8Xs68Q7zcNhTSVJrbC21v1yVDuJxnbZbQN28ifo148tDHNQQzUqWA5vh7E",
  "key26": "3MiediwM5DdRLThCUqGtcng68iiRFP2CjBqHi6J6uqJf8kgfamkfizew5fMQabuDy3MNzHBxggoDY7bPayjF6CEy",
  "key27": "5ZghtUGHZQExrP4YhSMTujzTGoCVaMmbc7NNYH7XcCBFVqP1diSjmn9LAjWpqJvRu88ku6VT1wrZz2XMtiN4CeRV",
  "key28": "3mtdNzLUg3mvf4pxEppgiCWaPPwRoy2MeqJWkXCEc7Rjfw9bpTM8QTwGVhpJ92hy97N8C3r3Qn86fWu1t8Ar1ekH",
  "key29": "9mVqfRsGGbEjMMnXVaTTeT9PB8r1gdab6y61LTo7FRLBw4ESstZKp3pdrJtrMNC8KtmojPXSdbeHEnqgFj7E9rd",
  "key30": "38FJkJWy1UDjoHs2gJwdrr8v8BESxtCYCUMkdWjA9B9ZTTUZM95zejGbghtR1yWmMkuy8fbMRjwFXXW9e9r9taYk",
  "key31": "4ZKKsyQ6EpToLzWnWwBQBWBZJ2t6fwtHaL8vY3ts7Q4LCCEbu5CnJw5tx6et9r7EHLCCK7DCGC3Xc4oVoAriKx3U",
  "key32": "5wYXjMCbj6mEdeagmdWMfDnM2Gm5mEQQJJsgY8rDZMrpzddSMJQRsvyGTScPoXG7zkMi3YCmJGpZpgS5Hrz87URw",
  "key33": "38XQE8G2mZnAxYCkgdUB1Y2CkkzDpmqy8YyzdxH9hUPkKbP28WD3S9jvrgXTByg7ZwjWQ9F8KgDcUrkPbEb6yJ4R",
  "key34": "3p92f2kMdik46SExstZDeLdkESfdbvDStDfiAdH2xwqgjoZjQrqAGYpXConuKQ2oTqzzdjMoMEGHJbXEFyALszyj",
  "key35": "AQ33ZDfpnPjcb3zGz37pCQVbU7mdVJGDqNDsUaCDTgQNmonvNW6uRZABHtZEDhXxwh4fZ7jGWe424YHF8k7jgPY",
  "key36": "2ufJ9RTha9pWF6KYyCmXM29bMvBtFD9BvC4BXUri7X9Fby7uWcBPqoSZiYph8uBKWYrkDGrc7HQmrH2ZQ1BHcZph",
  "key37": "341u5fX45qedxdLPAF4YcvhxoMdpnFviXU7YcBaTpJhe9SXipF1iKZeCUk4aZCWBrtDeYRf14Pi8U8Sa7MANxjsi",
  "key38": "53Yse8YEvqGgx8KWuZEpADRsgEB7GZWbW3m51FMCe2B5nGCcL2HjHFEbxgjr6J9ySz6nexTUkpFXo2EP9hWArjHo",
  "key39": "2cD6rLMpuV337utrYjbsgSzpnZX1Ec3LRYhVnqTxAfXCPcfsni55biKFzuVDYT6NpRcZ5XMgGgTYBnU6M9tEjiFk",
  "key40": "4BvctsH8qSHDPawzXuEYUscjadoSW8X4sZjyU9GtsiNHZxUZR9ANSoHd9q4iM7uwKbx6PUXEiGqpWrqzbwBLaWrX"
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
