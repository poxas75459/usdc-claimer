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
    "3CmKKoay8pKtRGswvtW52qgvbJssDYiQfcB6QjwVcJXG9WNhQ5bwFFnpN6uFHig9VTuZpFsrBeEsfk6zneoaM76t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45fJ6LJQoVjK6s5mxayTiRctHy6DyUauSTpvwsoZLZzEXL66Wgirg9AeDbK9ZiFMAtbLzzhFGsNaFMPNijopwhrZ",
  "key1": "39A889bKocD83nj7GaBrZDdMqJo1KM3zZrAacL6gEfXcjPBJc2FDbk9TEbM1LXkEvPQKr9UuMe1txiCM7sw6EnRy",
  "key2": "3y7A4PaeAGcsotixdsWzF2FbJAX9XeuELPcxj5CPBPreYAxJ88zQzMV5mUi9FJ16RjFzakKdM2zFtpx2qcQZdfjw",
  "key3": "5wTKwwVXsHCAwQzi4kitD1eoQuoMuRQwFLhuPZE52bzujpyZeyYW1cT4AuKLPEvGPNnqXH3nTymmVJifPBLGzg1B",
  "key4": "37xVNKDUGSQz2z5VZ9knBHiox8ZQe2iqXohtFvNxbhqLLgcjNxPLF2bNVTr6prvCTBpGtut5vL6RKKxpWAPvUZYe",
  "key5": "4ysKBiErEfEh3R5gN6qwmNjzEZcwtxXYvA5BRCHwxFELryZYr92hkiRrYXXXdXpzr9WH5JTDjYvGo778mpto9B4Q",
  "key6": "4gNjdJo9dPDWUFg4X5CHg24sB31z4S7kTSWjiqYtqvST96yaRZq5QobdZBHRKhmtza9b55qTAvh5vmyRxmouZYFD",
  "key7": "3YcvFXcQGvoAAZCp9UKTHd9RfHFxoz1tkgFWTcX7B8oauvpByjD8z6S4zZHgZhqmAKH1maMhbhUt6h3Uy4hhr32e",
  "key8": "v1n18tRftZpVW8MBV3DCg1Uo2GKuut1wbSsKUX4XUqCtJD4WZaA4SK18U8UauXjWdj38gW4DxRGV5AGjvWrfadq",
  "key9": "cpfKWEJSEqSFTrMabX78xM4yRKZ1GpFk47BT6MMcSGFxoWFLpppppaVw8gU1A48XtWsW4nmWy85THRnzvZsqidp",
  "key10": "3YHvDu4EQsoSGH3Y9L1W9rqgAqkTswCUhL3DoULgMC8uJLooSPQa5btv7ErkkR3T6J78YmNNoHXS3MYZdzv4fKFy",
  "key11": "5z5tDA6ADSr2TzfGPjJH4pVVSzBm4mspfLmXkkHDfPawF25MWbToqzqrFFnVHneW8Q2nn3YKbQ5Z5bqLGkpwic69",
  "key12": "3z6eHnDK2XSCDr56JL7cbdyB8hqFf8WPuMhsLHj4npQwY8Pb1pd76DdiC1dUzPQzPSKgWAmGZxnEvJRoRm3yBdyJ",
  "key13": "JRVdSKC3KeDhVPVkBV6sKB4g5NJAqzAtZ73hdGN1Xbkzpti6Sbj9n7vsMV16QHMPACBvJwYhaqRp3RekntUDqUF",
  "key14": "AmBfpoZxtg6E9b9SURE9TbwXqfGSQbXM6yDZXvG7NinUN6YZBUNqzwPZ3XsDHcRi6TAPk5qUMGeMfNAJ6Bm7B9s",
  "key15": "51QxnB9ySRCY21tFonhJTAmfEFD4ppHjbtFLZ6Zq3KrVK2D1XJcHgz3rWsxWZUmai3KXDGuqtAJqWfpDytmgfFSb",
  "key16": "67G2jxxCBFsxGpz2a8wfTMJd2V65vF1L8uYpyoyHFMZQ7s67uornvyYGVGnmqa74JwbUuua3CJ7FyXvpnoR6ifA3",
  "key17": "2ruxmLCgrvJJFCefT3uHkKpTytwLswMvRmr8mGRfzMheUDvkmQzV7FpNzED8MkBr3kYQ8f6SW1Xbbx3vNTvsjwem",
  "key18": "3GP9zD8zuVJd1wYYwTv9M1gUBsGwrWMGuWCixgDSVnBSzpyYW8JUSjFvxWpZqzioSopFSfLgDTHcEm2B4rku6ygn",
  "key19": "4XrLQyy5Ghan1Czdh26vsKC6UB1b2BTraYUqJ2rnB6i3dUXPbiZm8Ed8TburshProdV8oywEkjY27HmyZmjSVVSS",
  "key20": "4SC2N8NLGFQm9oLmTpGzxreTGk17tEzpzWM4oU9tWGzKxKEMfusoHtKVWtFzsBxkYd9hXnrnzgmkuQx1oghp2UUS",
  "key21": "5PtAarVTWuv2sssGg4hnENoGonqsByHXDNRR4iy3RVLrZTAaXoJFGon9F6Tnno7Fa3udazZEusV9S74MjWpB1TD3",
  "key22": "jpihiR7iMNm3tWFUjd1NavbkSLgMfWCbVx7t3dX7d9VGfCVmXsZkpU7UXSAUfRgBzekCKRgdJNncdABYHftCjRL",
  "key23": "2SzDqs52itY2SS4EQh7CZV5aR9xZSei3iL7PkmhEBLtDyUwtAYR735NSVUSY1tmyVR9jynXzzaySTrV5q2ihHFJ1",
  "key24": "2HYcC3oBCYyrXARyHGAUGDgkFrwgiMTUdgCB6QveFMkgubhSVbvSUmoARUrM5NvsKWGMJpd5Etuuouvd32K8pf44",
  "key25": "35XfHrv1ScXP9Xcs4JRytDqfeQStKct6bJMWnRR8b8QNNhSAthc7CSGuXNnHBZdaixzss3AHmqpfmVhbpBgekHV9",
  "key26": "3nZVTPDFfBAK1f6MdaSCVb4CWMrww9yLLsNipwUaGXA6BUwDwozNBV3SwdveDHHGfzqWUVMuSN3Ns9S36APBVCbc",
  "key27": "3cDNkRF62wSLSGy2S5C3iivio8YQ8pw4xBix9hYSZvw6wxdHhMv4FkmwbyM3iV8kqAFg8b4BbTwkMqEzewPPmHJu",
  "key28": "3i3VzYEkFTVUVA5LcrjhLq28usXpDbQqHka7Lv3LdPpnKQNhp6PPFxdadwWsqvjSXnfQVoHkSFVgbZnrpfgExaaF",
  "key29": "4VH1omXwrzNxaP4JbrLJCS7HasDL8hDh2qthDLxpQ9L9Bodi8Zigu63kLbHw8fP9KsNrkhTEniwmBJ4ve5FSyC9y",
  "key30": "5k2RJbKzEyHdsWYGYUx3c4TFQaHq64K98kFqEk6MuYfx7ZzxED51WvMWFaprkfoe9HfmfL7AFfbXADYS9JbQWVQh",
  "key31": "3SKN7p3szy3ceraJeXStBBHBeUBjSiTC2nLaLm6VRPAoZYJWPoHSbbmcopfF737Q3UPfte2QPfkSdrN7e3NmsY5v",
  "key32": "5pM2g2t2tsft7pxju2mpuRQvdhUBzDnHEuAkhD93N9ftdeooWUiWdKc9f8o1E5hmKVEcNpZD5pdyk7JaRAgVD96X",
  "key33": "32re7WpJmmwkF2GLsFivNBE195XDKnDL8Vp6DKVrCjAmssdSHq6Mb1MxrPX69Vwf6h9EL25ZC8HUqjoMfgi1gEKk",
  "key34": "2ZZe6KNM6NFQnREZyx3xUZND67Fg9Ea3a8kv4NbT9ERV72xGGjjyVkhaGHPvqidLHyPZ8RcgDu8nF9G4w3Ax6ukz",
  "key35": "3LHxT7BW64zSGAzfrLQBQrRkoUSeLUPoc3xzQxd4wkBJwzdjDZMtQwThVmDZhQcvwpNUSxmMJixQzEs5iHFrMHxP",
  "key36": "4KMCgcZe5DNo9hXkZSKsAyXiMYQXUPiaLBFbL5QgBLwCxFJSzE6YbbYbbfaFUJr5Dp21aLTSGZqii1Bk481cNsKa",
  "key37": "5FK4aZiAk5ZEQdqgB7EoEz2kXCsxzazbP5Rv6LoTnmgAamz7CbGKtebRetCMBYiMUyn2bMqdqsNqSB4CFKwRsc7M",
  "key38": "4YLA1JSDWCGF6bgg3usKHmzpXuAxTuytYdofNWBD3z1xopfhuWWhi24K9nax6hEQhV8Gu2NfV76ZV6JFZYR6shiy",
  "key39": "3HoB469gqzWmD6wkYUXiMs5QxY1icdePCbfzJs9ja7832zvqADeDBvzhTCEJ2t2DsA8ntS4ZxYRWf98sxbJASte6",
  "key40": "5hFwU95t7LWo4AP5a5Z6rEq9C4s2J7kT4ZdAjBjtJfA7YFHrAgJ7etmijWWA5xKsgkqTmV2ESWCCCNqNBcEn1H7R"
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
