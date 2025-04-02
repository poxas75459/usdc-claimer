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
    "4JcG4wrK6aKhUsMoAGfaNzAy6gJcPxL2FnTCN43qL7mGjGA9KsBsZRuk9EtJUF4Sqx6mkJxPWawwfKkk7noGZwVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JpsvTb3GJGwkS931EDkPRrw5D2cFpwSkD7DzwsC13XcmnVjBP7i4hj9GvD6dnv6ZWUPyFVhHdm9kVDtJwBeBnok",
  "key1": "55RQTCCcJCAhEQApzG3d8DEYeBK9pQhUW7n4DbamA1dNvnKRJ43Vp5hde5fyNkJNUbVEizCSzd3e7xdqKT2VgZiG",
  "key2": "2tp9P1gUc9XsqzxznDH2ryPaJjdDJ22SDRHmcweYY9DDmrmDfYTZ8Vg361NoFpH6npCFkg3MxxHUVdy5PeavHnzG",
  "key3": "33S7BgBgznL7gVUg7UuHcdxqowGGWtqeGBttwmwweWDpzwRDVFw1KzhTJbPWDYCeFeMMNkfGcSK12qQjnpBDLDMe",
  "key4": "4So5KwPf7EbyvWseyEru6fL6MCiWPCbfSNiPJRJn4kZon3wnf82dzAmtm9KcgXh9ZmwvopHMxFbgnnH5PYdoXekr",
  "key5": "4Ue8QXWfAVftXEYD8JfKrnU6v7tkSpNa6Ar1WnHiayFoHb2LAWzBoZbgM955EzNZogz5mzn1qkeBmbhj7asYPm7i",
  "key6": "3GaPGFDKZPWjfw3GiWkppYsFD5eGFqPgBbcJktDBiEvpTvqH4y5XYGqix5RLfBrUFsTeH5Mni2A7cBnbk9R79u1P",
  "key7": "5MCsTqog2JjjTFn9YZtbEKTzSSbkLET4Rw63uJqnduJ3UQ2HetsvN8aSGkRfMmWEshhzdutjzQYj8TPoHUaKTaeb",
  "key8": "2dQNJRBrPZ3vRWzCT9kUAV8CqNd3AGgv3S4kFvbMjvDWxZZP29aikp4Zy29AWo5hDFreYJHtinyiWPeVgUE4LqKJ",
  "key9": "3k3XBqsaAbUgQE5yHEVxSRVHKwHd1vU2CdAHDLCfUAYTAksCZDgeTgMcqgoP8V6mnt5pPBe7ho39EGdDEhQEEiXN",
  "key10": "54L2ozJrKrfbSYfhER62zukY3nEMbxXCuyfqoMz67N9uqcgq5THq6Ayt7EYV17QB9Kgmq5AXCJDsc1ToiBFYEDRV",
  "key11": "sC9TkVkpXP4vrRqYu6QNumR5MGnK5qhAGAQxpwJN1GgLdo4CXfRm44KnuUi3FVAU2iVd7NCEeHpSDYKHs6jxKtC",
  "key12": "46e5RDUvZ5cwrvdmX5KejJH3bMYBKqtsU9yUWj46SQ8SMju9twJKt86PFbPEaUjSzYnPGWZmCz4RzEFAeT86hTKX",
  "key13": "5qdZ3kLJh7Wq8nhFYz7tVoXRVA6JBnGeRZax5k5B6Y7BFFHzfR4dgkeBPpM7i1TcvhcyUCKPh1Sjk25XuXYtJ3L1",
  "key14": "4tDh4EvFMJ1CaXXaQCrUuo9Sj98K23Y4MvUGiGRuQZo6Npq9KnAVspsZUdpRX2khCW4mzDiQ3Jx47nJoVLt8Pbfi",
  "key15": "2hEWRh4QaWe2H9LQ39QUegHS7Kq5VcLchRpomM2dnQ7kxkrLgxkLsa6eLxXDB2EUUGLdfFtsej5XPq6wGg8d6RHU",
  "key16": "4Df4gD5tREhyQ7a9vGqFPzy5yrVwadf6RiqGPXpbQfr94r5UtBAZriUN5cATXfQQUYrdSestXvxdbFSyQ2wsBi6P",
  "key17": "n2XdxHxTGgmBviar6tqUQ4Z2ghocvimsM1Gmxb3ZsWmrHqc2axKSDzoTPBbfWAgeDQhghaS72UDLdqf2aCkLGkN",
  "key18": "ykkV4Qf9MFR3s2j1PpjCm7K39aNbCcZqhztiWpXK6gdAKtvbJDGWutVKaAg6oGPB2yhWdsuWaJhtXq7zTVptSzL",
  "key19": "zHmW2zkpq8ri6Eb8nbeZaNJNPPNBjJwKq72cJsE77qpkcZdtmM1nysV86grkukREqervafLvDoH5e7e4q9FzpYY",
  "key20": "3DaGhx4ApGd3jmUXV7YDQvZkQq4GEJLqaVo1U4amYBfJiqM4XS6TWFJQd9UgwBeA7gdziMLLAhP63VrhjGqK494D",
  "key21": "4m9QgwgF1jSDYswd1VqDLSsLVDLeN2cJKgDxHgFcdsSGocZvJ4puHdcxLs5UgrJEtLVp5iKxLhSY52gHFTcd5rV8",
  "key22": "2dStxE4Ln6T5PUEfyHX9AJPJNK6HjjzSmu36tm8neznKezo7nWhxWBeixdRnXs8mEP7qWy1wCvyAFRVXqC7Mzsme",
  "key23": "4fwpPneY9Lx23MNMySj1eu1KbchddLba9hu6MZvfpatvBiNKCEbeu5fYGd3qKHMNxxH1qFdQhLmzmSPZ7k4m3Z1P",
  "key24": "qvekYLS1X4UdGVYQgtmgjCc6y9yQzZHeY6fe9Yr5ws4YQdpeE3Arz5d8FvRoMxJ9cRigyetjjjKhcA3yGhLK9w9",
  "key25": "5VnJvS2NDR6T5eWwsKy3HzQFCHdC9LsuybNEHN4u4J3YumtpyNFW5LuetkeJmuNUGtKRWmr4SGP21T7DfK8h2cMd",
  "key26": "3WLmyyaLDUhxuC8YoonWdRq9KK1hADrivnbQR9F1EgrEXe4RDZoHoUBRpEkPdLUTkbmtxFj4hhdrAmU8ECZQ2jRh",
  "key27": "5pAFj4m4Xsop8C3MkWiG3E2omJzk5sRkNgTgAz8CttupgNvntS98DMbwKotKVdQhPVPYpqBikkLNTscbaFZzfqEP",
  "key28": "WYJELxnEU5sm32a1HQux1ymGBWhoZWbifhkVkmcw6T7XBbydNn2aUnJnHaiuyPq1DqGAphgg5N76FvKFpPaGXVU",
  "key29": "22Dw1BE1geURDdzt6GFndoi1xxLJ1QAqHRRsDkAjcFgNYFaCSKFP3AP4dtyx2adUyog4p5TCuTjnTwimVxJ45jai",
  "key30": "3ZXAxmx22PyPBPp1jEwTrT7dU9TsrCZT9fxcJs64Ehb8rF1R5TCznt1GaSUvaWMQuQSesfLijZxYNHHrMfad5qae",
  "key31": "3Jj2W1wtZbrNsTqfQRFiXsjDTHtgBeXWzg8PQdc1a9nAEgCqTzbjRbr3c5Q82vsh8cFWh1BjFu4i9wy9H86gAuDX",
  "key32": "5EvyzrquzpxFxwQd5ugpLESbG5PoeBboz3XBzuNuSeNtYc8bNcwgakuCYE7noBqDWkBew5LPtTgvXjYXpmqp53K8",
  "key33": "25NUXTrLHzAA5Rivv55FQYPy7m92g4N1Xw8b1TYBifimJqzK4Q7fCU9eQoZgEW93nkHSLjvGpbiGVV85cCban3VA",
  "key34": "3us6FiLd5gu7VdGSivZboYeuLvb2h6C1wY1ETyTDdJAS38qD3UKSjrW76bzuDZJpvBnyQm5jtNzyFUVwSC9J1vh1",
  "key35": "4UXMDU2GVMxKZJ1j769Zbh7s3QPLEEQerCFpq2FBAPwS6pcM2f8kKHmdeCmc6o4fVp4qdxCpq4ZELTEW7EtNGkrr",
  "key36": "3Bj7eQ9QA5jYJ4n1PbirEAj3pPJheiYpLAn4G8NCnMsoTw1dcH4Sg6ekad6GKX9oqUnr3WvzxDe9Ntvi1RpJSMmK",
  "key37": "4d77r4CFH99EE7PFLYGujQbjgruPjJgGSb2ZrGc9zuZ8F6urzB9wCYuienStjm6vjWTB3WA4jSUnKoGTYVNZ5np3",
  "key38": "3fYbS6JAXy7bkLRGAm3pKYVBrckEEwEQhuWuTmt1h1XBJkE7X7dHZpZpGoquDar1QoiWJ7aEDnXm5s6anegxCLmQ",
  "key39": "3s5dy8dXu2NrpNaCQ66S6dc3YPKW6rEZ3W3ACjzPSPozwoA4s8YeXxsiD6CJXg9zuKhM35iz2vCjYPGwMg1Dnwxg",
  "key40": "3bMYKQM7pNxL9G4hPnhfNJvQr4P7AAjXmwRrknGFMnCveg3Gy59uRkTHJ4Vg8xfsmBdQyUdeJhWdKas2v6fmdcLt",
  "key41": "5CUdHBAigtoHhdbJ6Fc2GhYWLqWMTXWzwK4hg5PUh5WM4zuWmjjt6erJzDQABJisSWZWdkbsoQJc576BD4d6pZ8A",
  "key42": "5Wuer9rJMcVkNWD4vULmqFj1hoKbEUL2fSmQ6VruqA3SH9EjVWRFxDSRbCUzdZbRbEQGJtc7RX6ZuDJvGTScCKke",
  "key43": "tsjYRcrdjYpK6ipX2oC1rzwTzzoceD3AzHo5j1mmapk2dLnwWXdArGk3AQt3YhbQfqiXw6fSJKZ7Fhpj9D3ebNy"
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
