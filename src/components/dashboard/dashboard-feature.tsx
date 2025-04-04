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
    "4GB9x775xfJwrcx119XkXH58YUm5f64gn2zQVhKJPjxsRt1KjewtWLdGrDc3tHm7biFhCh9HxoSA1vfs5GZ9q9Zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qonayog4dvjRfryUYEH4a8WhC9Gd1C9WiPttFrRgaYWLjkCgRZGdHD3MrParWkHMyk4mPu78cKz5qzGuv64LLQa",
  "key1": "4pa7BDFT11pX4RgPQdda1xAApbiG5dMX1EcfWryb8mtiacVYiJwvRi4iXqB6ni2KyZX5KF7ZKaPwbAYuj8Rjhh8p",
  "key2": "3kHjFKSQqP6jzd6yjBrA6WBXHMNrasXDVPnxDD41nJUhbNfeZqbmZ5sWJkfxMmcfbJGWdKt8gKoN1etmH9wEW49c",
  "key3": "4gaJj8vudfEkgan3phKztQ2ybVZVfeFrRv9ACkKwVDABrrCcPMKsacZXrRFWpXAHn9YGox9UkGAEQi58kh2C3rDB",
  "key4": "5YHqKRYuJGo3Pdxs2bvsGPyKRHW3BBxgikrdQVHZTj17bK8RU81mhbH19dDVsv4Amr1iYY3ndaPZ2Cveg2cuuB5C",
  "key5": "945ur8GiHHUkpADZRWAzf3ApEXLTwK9rXJJdAF9VruLiczv8vGvFJkexU7CQY12LPuVxX3MKEgbuGC4YoQbHnNj",
  "key6": "4HqRgRiYKgusPi9CaUjTanPDytCcVTUtYYmUDEF8XRj52yk5uVei6GVWHQSwm6o4TDZFjRFeqGSwwjnyJpn5xSis",
  "key7": "4md1uQ7DVk9AupwDYLDaF1NUhWyMyUbwpdWp3pJeMMuo33egrVHtjSa5aD77n2HgH4kGc2jAP7mxzFt89T7VgUpo",
  "key8": "2St8gADpWBjeh9ZCVFb8dCcgMQ98vX5bkDJFenZnyRtBxZWsVZLRnErFzzVsRwiCq4CDjDpt3cFU7PbHtwhSkxe5",
  "key9": "5mPyQGWY8scGbJSoDX3GTujmr5RB46SAbDHqJ4nShZHtnhjoQs22dqTSoJFNhbSdEX4Pao4SL2wsbcRi7zHAxBDT",
  "key10": "3ytbkX49KDhEKg8i2Vwf4megQDFZVGWBq5BWUN3FzgYaKpuF5zpCwzCim91TJPRcAbdzBHayyQpir1kBm57khaFR",
  "key11": "5dmpVeUytm3akM5vb2Hu4TZgbAMVsaGA3Naq8FJaeJ35n6MzAT9CHXBaoMezMmAdggU3somTTRCqLQR5frLrxoZ5",
  "key12": "57oa84bhwApwqUu3FpSXLgkZk8DP8wmYBHpww2Desyh4t3UHXsybHjpUdEmh4gPuJ39GG7SXPcVQsDJXPH1gbdYN",
  "key13": "2trLRv2RaWcq1wphi4cwcEAzaeZCzCzvMe9uWZLD1m8Debq7BAa3FtsYankm3zrFJg6HFRWLtJCHWMumETkEfrMA",
  "key14": "3WNjvbYqRYxToJWijffc46hsaCn6eHGhMi1arfwtbcoZhPNkfFNY1rcvva5fvFNM3UefLjbKWfFFHo7dVXs98Wuf",
  "key15": "33MUiXoUKo4UNEP8C2RZuE9pYiDCz84C6xssMz5r4gJW2rxN3bCJciJ6FG5JdjbiPd79n7hiTi6TzKkvUbqCq7G5",
  "key16": "5AdpibWpnsjmCC8G9TVku8quR4yekX8mDbgGs48GbKNSMXcd1fXE2jd23Zr6abED2CSJvXF7h7asKD5YgkUHbWCj",
  "key17": "3rF7x1QVa9cJvfthQVbvHwcvhrvB6i8YSAwooaPXoBw9vQGy7kdSVAYnq2a5JaZFvh4QVJWZBdiVK3nercFpumcB",
  "key18": "3FRUCxyxMWFbENK1KJbFPifrHc5H8Ztoq3VwTuW9deCQBdHypd9hDvTCG5PV1ie5tHdowiabAc871W3cyriEnLRN",
  "key19": "3A4hvC22WqrfrbdjMqrNZvL8uGFnDgxCwJwEvsAsAoEkPWeTpAgZ6jZeekM6F6EbUHhKa3ZTMg234cuvLoA9qyhr",
  "key20": "3EPpWk8XE4cmBiGfus1twWrLQs6Ln6eCMC4xmixH5MpkMDJ1nyeXmKQBgrenrjoBZGMdtuNT7RhpeY3TKjUXvkL2",
  "key21": "367mGvG4GUxyVckPPXdox6mS9obdLxYtgQrXj6TwGPR1v2KeG87WJSxJ5AkGTqwzAzWFXD59RocwmGwxR4uD3whC",
  "key22": "2vvyatZysHsYCXR9HuPNHe8R2cfDhVCnSeMXRFC289f6nCGwCW6AScdX1yMGkgcJDfDZiPQVBzTyPTDpC6aEFLzK",
  "key23": "3hBwboqknzzhSqhoSyfDKET7xxZomTraWiJwfuAS3RiqNQNhoGmoYnM2LAmuPmLUt7YgAziNTFThvybCE2eYqi47",
  "key24": "Cty3NC16o9isMbGL94ZDZY54HPsnBzMLk5t22jryuvqE7tZSYe6jJGA1vu1oHuEuYGH6GsEBKjSnWnE4XJW9LMK",
  "key25": "vNZtQd8NcwCYEc5jLVfXe8WrvgReovUEB9RavDwsCooskUFjghDUxUNzH24CVToA8uwKz7cKSzG3CDuZvHGqydJ",
  "key26": "23MQQPtqrkh4fSKjcParjtz71W6XQRenM3xUuQZmiWcYVt9zqgBZDQCeq2THxiz95mSip7ZhVv7fWsJgk1PiqSXy",
  "key27": "3xfjE3HFz7EVLhf66H3PvfU4AxtWri7cHVCEpZEfamZVnAkohPaoR3g3ftHj9yzWu7PrEQAzT9DbZeM6V3waWstu",
  "key28": "571udLRwYmSb8NXnEjQt6FGBWHew1GhSU2xZTphFe7ztMiKZ5xFBFMZG4eVXm4DQd5cB14dRX5yyaMdGigqf9KWM",
  "key29": "3UymwqVGCUZwMTwQhj8D44dS9QLGAwpvJ3UyjEdnKwW2uR9c5cGuHCDmrsBvxWLknJqRktwut5sfRGKitPETf11d",
  "key30": "5rnw1xxiMsdhSFdFQJZW98LNC8ATuAjj3o2X1jMsXH48R7LGgSr4j347GbMgPHSZ5kYJKGFjRj2jYeZFAqJXiSUM",
  "key31": "oHD19JF3z6RBGFkWtt9PLmtoBUAp1kfDA8Au8hnn4SumcC7zE1GDEPqVZWmm8qZRRq1DRfC5n7H4dsnGZdudq4Q",
  "key32": "2984L2ToAyQJAPBD9YgPbN4oByBfLdrn3nAAmD1k7DmaBuwsi9ht7eFAcNPBycVBqm2w7jztbrp4uuP7GbLePhmW",
  "key33": "4MAv6JN8RuueBs4ctaZZA87JTWbXfXoKsPKZGESTe43Wj9VHgnw3XHmuKNNDowCY5gBYQbbLZ1fuxEMDFRVmxF4f",
  "key34": "5MV7nXGBEvxRPqupMHDPwHuqz8pv5Bb7ssrqLsyU8YX4kkHxVGw9ZG5VdQq3gAKCSaHQKbRYJKxwVeuCXqhzxPHc",
  "key35": "48PhQht2DqUJ8QZbzVL6eRZkCA6GLcNe8Gd1j51kEa1eD8QvisBPVDhSrzhJzwxDScZJ4evoZ6fBzx9kUc1mwfUu",
  "key36": "5wuMDAHkcKuoMj6FDuPqGKAkxUmo1VzjMm3Hz1ALaZqsNVQVo5ALE2Vu3XiABRdW6TWB9xVaCdxbyA46PiHSnBBf",
  "key37": "25Wp7z4MypaStt7bDVrQZphuukgXfYYKUyM91PndX1S7i2TpKQYVcEzGABria4V6JSsKf2oyF6w9Mozews37oaPh",
  "key38": "2nTmgNMZWrcSs3fA2E5PtejW2XmbyNPR9zQwUforfEr4fSnyqmohfZKEwm67xZeA1CibgCaRi9QeeVTteAmWNTb8"
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
