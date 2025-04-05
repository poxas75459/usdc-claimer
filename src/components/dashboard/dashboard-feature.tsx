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
    "cXknEmH1VnKJ7KajPxR32dxKSVs65cmMk7wczcKsydDqwv21d86HRhgQ7GR4KXUx7yBFvSsKzEeeon3Fedix45g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58P1iNDoy7YLtXbHFTfvCTssWcHgrhh4W9tBFBdcwuxZkom6sxYtJR23oSRnx7YWW4PKxmgD8XsGe3NCfEC8xvex",
  "key1": "3VhAtDaVP96tKWHBXKhcPrKzYbdPJ981Rb5819e47HnNo69rjNTvWTLutSPiokwQkKdTbzu3MZvppuTXcMFveXok",
  "key2": "4fkSQnkF5FjacEDDFqP65Daxza2WYbSa435K2uEoAMhgauf1QTUgFs1WTjEXpnTZJzaJyvziAkw4jQRBAzaiq5en",
  "key3": "m8VotE1wdiZ3mGPVNpJgkNtBvj54wo2yWN8Svui2swqyfpmhVGWfVz5SdNnMvkME2qm1AuGbQ6YV1dYPuqo2n8y",
  "key4": "43BH5DFFeXgnE5zv8mGEUpq8xBzLeiKWycpWuUWArk4vAosco39bqR7BH8hVrR26zuZfsub7CdNPwuronGXw4nSr",
  "key5": "3nRrs6eB9KNLnii3cwy5jdhXtnCFzYMsknmjRiAQm8cT6KfgGYvfyh8NjbHWG9oU1ZVD538mjTKQsgFxjsPpTrmp",
  "key6": "5CTheXct6J9JTPhwGTwN6QgFsdaua4GKXSCrVKvQnr6hS3t3PHxrJSctzWz5niP7cUtiABY6kmZForMxCnhM3Skj",
  "key7": "3p8vLDRrpv9yWJ9z9UkH3UG4GVwbFyy8wS9QxuoUrs69FFmEgpWTUUELWgyXeMBgHeJcqYsvopCppyvPAknJ4ETW",
  "key8": "T1og6RXJFb6SSJ7Q4pxkcULbcymh9tzfVqFCzZtMSz9dqjBD5hG96WjehPinxnwLSK3U3C6vrZsVbEFGSZTx2Kw",
  "key9": "3JeRTKBAdZPT2Df8UnbH7qrRi2osqrpM6SM9oRqeycbfThEmhGj63vZtQ2K83K715jihv6MZ5Wir9QM4Sy7zZa5Y",
  "key10": "1ssdfgDj9WvZdTjaagmah9S9wGVqKxjcn5XrM2KGo3MGj4yynB3j5JGiYgBBSnRz1f6F9FVwDLyVVJUK1FXESWw",
  "key11": "63KwLuVf2rkc41syihvKshwAHvfPepfTeUNQFPLnDqD6wtPGeWeFiDG8QL76tQdUv5SbxmrsfDpprPWZ3jJp1UUw",
  "key12": "3VQdvtfssWxWLrMXK2Eb1R8Zx3Xp6BKZr2hFEc37dJZJQLQoooPjLuzSfQGikaDmND8YAwHc3hm3rivZEp78EWZ",
  "key13": "uh5zxvTucVyAxZnBRGawHLauYksT55VpALwQEcGaPJaj5wP7N5Y9nKzmgUQ4V6r29UondJebL1fN47bevzme4LY",
  "key14": "53Aus9V8gJEMVB26LAjUkQGLWAAeSBf8bRbLkvYWFn9CJiwcZ5iX4NepwotCHtruCbdGJXjvaieGCrPvHomV6aZG",
  "key15": "84GxYeuAq1ZQLsunPMNf3jpMyk6KpPnzfyR1yaF676hZhik55NqWAHaC6YcCzEaVVTgW3HbiUiCr9258Zdw3H3g",
  "key16": "7QSyCKWR92XBJqJrTLnB6BrggpJoifWKXpb4XZiRCT21jSXmCLWFQhRWnHTtcMpAXVb7MKEshf75MDQjMtn3Xv9",
  "key17": "67K4G8x7yJXyFinGwwZcm1vYkgiCCbmBkQ1egc8WDcqrqE5M45d9d4wmDQnbNKxE4NQbrNpe4bxXy9hzUi2nBxQK",
  "key18": "4JJ759yibEayN22Hkd8vupV8aJimxj6fBRW1vvx6Ad6AWJJESEpQ2ru6dUqKCUB7QhxbQBrQfxRU732ZBPz8BLSY",
  "key19": "CKzFfsbCAhG5aEPVpuyedtvYgSgu9UxVioJC7oNVYqKNmAgkScueEErjhMGCpfPYqyrg92fanCq3UrXcMjUWTij",
  "key20": "5zGcPN4UMZJcAoQBFJSXeurmYZUDKmZUfsGKHmCNdm6DnZHonYFdKFAZTwBNgKrdFFQprLk6rQ5EXXwZ6T7d8mRW",
  "key21": "3Yv3y2hkyb3RUnUt4uGwi6g9V9PAMDM9Njk6WPnf4botp4oFcRBDk5zEQXj7eANVZDnwatqL2sk1dwGSvXpZUrTD",
  "key22": "B5WBNuaFikLes9kJJs7FXSDN24B4Ympqu91XDWiXDY5tziKqZGPtrCPnUeJGJ2JPnF8tPJWhaG6njMSeHY6LKTN",
  "key23": "romKYSREZXGTAtJRHUo1XHGFpAJ8uNqMRrBGmWnhMhSPsrNqpyrHFU43dJfNK3cAUMrCbhAzrVanu4XBvBavJPu",
  "key24": "42d1LmEVfZgj9YYf6TMbg8jpg539JsLnZ11c1rPeaCFENshshibhAkZBEny43yxRwN2i4yBfDamX2pzqkL6C1gdx",
  "key25": "3ZUmFpgJtYMvi7xHvkRZfuunnkwQbjsrZhZVWzsrF3r4cbjkMZGz1dkydTyyDkJDpcG8RdUKSBbFViq8bKZnaQG8",
  "key26": "BQgYkmYLWAXDsu1Di3Dpgj1xLvrz2PQRsbdifWjBoMPY4fhH98dfkNpjUd5pkZnA11CjENCyZJ6j8EYFzF64W6f",
  "key27": "2XQq5g2tDfgmkAJiA7rbppzb77gs63TzPHQjGHKi1rvPywYvMEkkhCDzYiYD4ftfgtCPKAnzDqMRZHPU2qQ4Z4rq",
  "key28": "tCxAT2vKEbQNvWWtf4Y5LMb61J41bcAt3VrSWPMiQA3DisjM9QBDYEpP5xBmqbd2aYohS3XYgftGopE3yZkRqSb",
  "key29": "2EYXxbafvVqdG4AXbnZTGHmT26cGxaDxvG3tFtHUCJ9xWaEYdC5pvnrhMHsMxxYZwPZo6scxx37CQ5rQHrLC3B3R",
  "key30": "ytw5vpuDNBSHJ9Px79M4fvEqm3kDu9fCVUduKqxJ4kvLTZWBusjsjrsKtV4vDC5eVzvhk2mYhP4uxsQwCDaHsoR",
  "key31": "2h5u2yURdWHt7HR61x5Eh4E8imjyHGnT2ZPcatsYpHYQ3NmWmvnopPtzjXkYNCWWTPR4qBCEYmWtyz3NRH9GYutj",
  "key32": "2hHbJBTS6rsKuS4SbRJEbBjafentDZAE1kVmGJbAe9P8EbsvRdnW1K7JaHBJsrSs4cZiF7ndAZRMMQe7jqc1HJGk",
  "key33": "3JmdYVMNXxPg6tgV2pb5bnYmbVtLzNwiVv5f3V5JAFT5ommDtdU8NCgT5VpS7FkzfKBjAsu4sGjj5qDY6iJ1Sg4y",
  "key34": "567nQahkpWifjRB7WdQBFWnb5PoBbb1qfMs3Y2A6JqBZRsSKFBmrpyrF1q32TSFzxxJVy1W3mVV1GHq8GQcx25Wh",
  "key35": "WeBFECbDwtAWtPSvzzdMfYzoh9gPtoYD3i94mU7oujoHBnVqSbhBtyHfwws2t1P9xVnd2hHznc2P2jWKXSRQKEg",
  "key36": "2cfLGv7NjJ1uzfBGkU7gRzzpigp6ugLNAfiFdcJHZD4Xv8Dt77KW5s4KKJtqSwHoe7Kd7LbP5henPXh5FEMY1MHM"
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
