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
    "64eXHbtQ377aSJorDMw4P6b4FSUPmoV5Y9Hq3pg6kkGbSN628scWMQcaWPiRygPRrCT59kPVuteRuHrvNY9Jv5sC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRB4dihZuAX7S7bSo5cZqYrBG7T6nDMNyMH6bPcdqJACfUHr3yNrsvr4pz5axJbx4tA4XfGyPj6tfFHYi45jkDe",
  "key1": "59sNo8xTEDSxR5uhTMoRqirrpRLUEgobBHoDSbnqXEQZv9iHYYxvaq1Vpxb3yrYk7gx3rSrdGrJVHnnf1dEYBZiv",
  "key2": "2N6qxBYruEyVYjiZhdm25JFCcYnXUZs19JrDNw7F4dsy1aFezixwtXNnt56nN82uJ2uvhgDKGvWWu9FMdrWX7SLy",
  "key3": "4RwhmGewxTAfcnqpdrdUwKhWhYUJu1MgAyxiJCqoGaexwtj84Vg8ZksNe3FuYs5hUia5qicZsn4wuKW1C5nAGFWd",
  "key4": "3TTJHFbpNnhdSauWrbtjEpBT4tXmDxUC4mCKfvRrQKyR8m8uT3jAYQSX1cA64V1KqG5fXKP43gwddgFj6yQPZsQL",
  "key5": "5rPNyedVUtUXXDu8cEPcbLMrTZZ9EMBaTXv6QA4BZxkAEFAyEZRske154uwXhsch8r3NxiDYEFse67G5jaUTaKDV",
  "key6": "4jh7XHYPdUE42tYEEBNuEjuhS4u2GM3nWeRhPGzqJYiFuNR3SJXbjAXJ1zmMwokbWSMZRgn1RXQUdsKyP41N6jCd",
  "key7": "3vN2sRXiDWz8Ehfg3svLnnTSEy1Wh2dQ5SucwwTJsJxz8rBW3daTcpUqyFHbMcnJCWDbaMa4zJWeh4xkBHGUHSKg",
  "key8": "4PTE89yN6hKxArDGRsok8PZ39fsbGDvMq6kwBE5RHaz2pWNVZFoRH2LLUy1fEixzQjWXPrhqjV3AX6WncMSLZfDo",
  "key9": "3gmVspmv8Enatwem2gZMZ4QJHobur1WEZsYzMHY75e3KLLC5EH6qFy3DTWnHHZD3Ms8635N3MT6tYU9KSRbC1jFo",
  "key10": "ttbJp62YajTSQnTvbn8h3UDsUon4iwpadqpDro17VeYSg5fWy8tJ5LahhsQuYpFDkY85ZpoQXWvq1p73QEJFDFM",
  "key11": "51ZLVfxYsm2jc4ZxU5VFGGyRx8bDGXs1bEUNpc4GJJmxHDP6mTqeJndHw7Q5v3wbqDWd4qAwrxD9v6N3kVsRiQdU",
  "key12": "3uVmaL4kNUBWuEscgRiEutZAFBus2aMCcf4rZPYRyBkBcJouGRszCE9VyTHj1mZtYocF6MADTAEZ565jAzWtJ5UV",
  "key13": "cNkchhjeWxL2Hqvuu4rGqtVUhcdBVpWSdaVJS52ShazqLLbnhH2Egxo6BjBJ67CFsnAmELrpFuX5maNPZDYAY56",
  "key14": "3cGqqCxxCjVwHaLZe4YSMT5XabVU7ZpnFiSP1ADjcwGAk7zFmd5nq1vURTfWNWSqRjMWPcxAqWX78RHYShtdv5Jg",
  "key15": "2SF45bgNqQ6z2dEcY6mfCNkvyHVLGjw6Lnf5dCUE5Vg4aMDVgBFt6XQQpgmVzCTfpsU8kjuY8dJ4VZcWKFpo5anW",
  "key16": "3PTpmdErAR8jKoHx4Lio3mg3GYgutZA8kCVcksJuD1z2xMCk3HFu3A3wP6vD6Qk5zt74JypMMttwFSuS5TP432BT",
  "key17": "5PHgNx3jqf9Y4iFMzLBZXG8szgrb774gKDjgtzoJWHcfsFaHbnRBfAhQvnLTaYkPZsSb1gny4GvCn8V2hptFP6E2",
  "key18": "2jKLrzp9KEbek8nrAkPUe9KcmFJjPYktBKuabdJ8LH4wGZWzXEErPU8ijGC55ZoPoq1cvQWcE54fqAoJMANCKSbj",
  "key19": "sNV7YmJHgetfYNrsfkUTJ2hunWYFLiLArSpVjB2pUrFGgaUoRaYM1q2tZZr6McpmL52rtqnYKxUs6tkpxFmop6Q",
  "key20": "3vpiTTAUsZLLzJ8BYoTB8QMNYUD891DgcdsziCgokQog9ky1WoTkq5C9eKZJCDYCzcugSYrz35j4FNzsSHxqfgNr",
  "key21": "K29iVLouLfbuUkytFr2WuJ2fi2wLMfoeuhAuJpnQzZossw4ffu3pSj8qCdXBnM4hmsq1YTVoh84pguiSsvEwC2K",
  "key22": "yPicnYVANu55DCc6GM5eARADCkT2hJFfFwthUHiQHQeAmT9PbmNCxkE5WuzFCBt3XHbuZK3roXHZDREoAjkDy2A",
  "key23": "5uGFvZ9Y5BAMwDHLABCkirN4TbNvwxNzNvEVay7rJUCGMZwTLCpomNTYuJb1gE2BjFjSF3XzfU43mcAGkyHFTdZN",
  "key24": "YL8mDGMVhs5bwBtm85A9SvF7SKeqHystJzfBKkSyanDkVMtuQbZncWkJQq1z5Wn1wem4y9jjx9UBGQEHaudwj9K",
  "key25": "25Tak8zStgW4Q6ZsixX6yoWDZMCVD3HXEJhZSwG2rH5dSKmvne8Qx94hpknbRBXo8BacowWtFb8zYQsLabF4c71g",
  "key26": "hDSo8g9L3JhhkFDux9GWbtsHRn3qWjqSGybAb87AkPB24MPmd2jJAzf5wWh78BtVXrFcUS1UEpsprThj54etppM",
  "key27": "2m5sr2TberBkwHi6pa6E13PJ2Zt9xSb45LzJdB2sNuv2a9w51NpEayWcSjEBctqCzy8gYFyJz5nhJs4pfXqK9GDx",
  "key28": "3w4igTEdd5MDzdERtKg7EBsJ6K2j99Pw6qChECQWTFiQ6nCCHn6vL1RW4DUjvVQbTFdHSRJf1qd5RLRpot5pooh4",
  "key29": "5tWFrTwph6hm6Lp26eMu9jD9Mih9tSfJ63HkaJJfgvE1ZdusXq5LikTZLa8ddMhYLdg5EYtD8E1zPg9paKPHCmjN",
  "key30": "njYQnVNEwqCcxL4gomTFz28D8U5C2XRma2F2D3xgBQPRqpSQahSCQKUWyUgUUhQvyHnQUGuPUyEZSaBWSiifDCX",
  "key31": "31bKyP5VuE8CXcFt8cP3QNVtKEXEgU3nFdBrSnZwj54FCbPb9ZshfR1yQzoT3xURo4g7xqbfb4QB96uaa9FEGLZn",
  "key32": "37CJ3JNhucW6ddUsMUa6syghsBxLg5pogWWtvsnJse2WFzpoUsN24hPEJdnp9YeDrUmK4qaRRi9rrm8KDZXJmgEw",
  "key33": "4yiNyzwiF84RioJSqa7u1HDTFwX4Qoi5V7Ae3RhbhvX6U4HwBwJunwEPNmwPjsLsQdVr4GvR7o2PBoAuuQiUUTMV",
  "key34": "3mo3JUphA7GaHUwpZu2S8L88GPb21nVgcFquuuXEnjCAsqF8CSQCqZkQP5MrbHy3nHB4K3kWGDfYavM2Geyw6KH",
  "key35": "3iFm6vwDaaaCH3GdQXa9oqrTxt2LodPukT2hejREBswA9EC4BCbKAo8a1HX1CPcee8kWWcTPFB4dNoojynmUU85b",
  "key36": "1TTPmNZxKWhTX1MmuK4ubRojvY1JG3Uyo4YUo8P3w927315ZuXzGWhp6eHhuDooZRfWtg58J4CiB5tpbmE7VSV3",
  "key37": "5BXG5FHht52xKJF6kHsBTDckV557pLGrZWJKMcMNh5wiJQSciMqNuyUKTAjTh7roT6MUx529GSQzXVD67Qb8Nfsd",
  "key38": "2Z4LyzcqYZWNoDtUaGDhrkx9wZKgYGAA8ZFaebUjmVv2u5gfzp3EGyPwwuJFvnGWtkSFmUu8p4Ctod1HNfYjA8QY",
  "key39": "4PYm8frsFeCmS7EqjZJw3axVLyRYxWGoUPnEcsEZboJdDnP5748mAPmg6XUztRzbGmLCizBfBnM98jM6QZn7u69b"
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
