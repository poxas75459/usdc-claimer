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
    "5mp9HyxbpzM1Vi3Bg6uVmmseJzTg3Qt6iHPGgYkNcBLiQTkrKWmLwfAyZP4GoaPLfWAaBoxGqNQLWhP7geSsBrLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vz5NUJY2hwM6eg97s6WMCKHytTRH9XBd1j4D5eKGmQ2zdhn4p72xwZm3bCMjR7GyPfQp1dNNy51Ah138FmTwFzf",
  "key1": "3rekJk37pdMujuuZuVNqbrYagC5w1Qrc68jbBwxyGnwyskaKhMccBSxdWscDUPzxTowLrjfw2n4QrAHdxpvsee27",
  "key2": "3U9MbqQJiBdXwaNc5YPNNyXyBECX2FNkHNMBjyhuh4prE2i7RkgF7y1qXBSa2AV1QmcxMaCJxLENNPSyZbMxBuL5",
  "key3": "48zGyvXhqWDYSfmjrADd6NUkXc7hbtLmzkzhUYwgwCn1829D6ot8xDb2NxCwEpQQKTX8jeC9PsWHopEMgFfFPNq2",
  "key4": "RkbxZYy3dTbgoDwBjJ7ht1GzUcHWqKng8AYcN84FjVyZRJjKPSm4nSYtQVxzybmUNWgp5FDwxwjFiXkS4fJHNwj",
  "key5": "3mvWpmnVYVMLJDKyhH4zppWxnaocLC7FJT2nhetk8nxPHZSMYXhSvZ3s8AXuL4hEGtZtAGrEPJdo35vT4YPrGf7q",
  "key6": "4dTMAwd2Ac3iRfFVZ4hTssxT5U4TDF8meCmnV62dn8hSV2KRv1Ekg53cd4ZAQDcinbWWm6ow4UoPRipVKzgvYmpM",
  "key7": "2nDzSpkSidoDQpUpZ5VasrUPY5WnYTZBEkhUUYs1u6mVx2jvFdepRi6Qgs8GiSgrQufai1fw7gaGZyKSpCUUDppF",
  "key8": "2FDmseKTJm9EV4S1AJv2dza9snBuHzG5xBViumTkXAHyGX8PuAH6enhtKxAPLpN67rVEMyZCBf3dXKfhM1UD18ex",
  "key9": "5RpvgSRNQh9bT7pE45nxqmcfTnP8dbDQsrvioFg1Yury41bFuGzDRF9yEWwMgnvbe95TDSnGjY4AbCu9ppBzjaQL",
  "key10": "4BxdzcYhPm9GQmj5J8LDwhv9KNHx2WT5266jpPPjvM3Y7xFpcXsddmKedNt3KMqVvHQwJMwMkiR5Pn3WkecWX9za",
  "key11": "5a5vXkGqa1AWtHwPrbMH16VwUzRnyz7YL2s3ZgsDuetipAeUs4NzjibkzTWLmU6dJcrvo8rZQLTdQwtCFWZxzkWX",
  "key12": "4TQbybGdtYM6284fJXoppcZiQfmSvVTpnsLXJT3kUFoAPnffn8ywG2132bYgGDXLnD5swDax1cqGvR2WJupMkgWE",
  "key13": "Q2rCscnk1gAGQSJU6pzpRE9b9PspTWid6nimUxoY8iAw6q4wNNwNthDLhbXVZ4EBUjbKNwb5CTSNr8RQHAxQky5",
  "key14": "55NNi6wcP4sAts6ukLpQgp23Js2UCxyE1z7zmdTdjqjvLVbw1byHANjZZfYQkU6R29htazQAokXqPUqmZiZJZS8T",
  "key15": "57UiUYAshps9JrXGLwEyqkYHZ2fyDcUQR8TSsE4FVfER38UCaT9JifRFwSq5imvtMjYdQVt7Mir8TxH9ddF7UXVz",
  "key16": "3toJrbavWPRezSq9c2zJcp9i7BA1yTTswdCmXfUAY2x2CSYoXVUHoug4TzgSKU6TGCk4Uo4Kuj2J5n7XYJ21iAkk",
  "key17": "VVXFGs8BvQjioackqvAyANPHYPhGmqct7XaFe2u5DpozpjPq9x4skT7J7hDSWG9cwtewDL9amun2HYmUfx9VrTC",
  "key18": "3svMUF8ekFpG2J7vhh5VvE66c9EFoyBRnkbrHXyh4Z8hbVpxBadQwcWgRdpHxPwpSaA865JMq4PpCyhhSNm1Cu5L",
  "key19": "5Bo9CELKtTDiDBroJtvsaUxDhWPT8nt8C6WLZTB2c9H7T3pq89ZmFMzrDs7LNXUyNwTXVdwDsop94aNMnmXpArzY",
  "key20": "33U8GkHwY4oiGra2HHD2psuAcXV4qyvAQgJCxp5BtJktyvvwxgSfTrTLURnDeHQNgyE6tYMaZYnkiiCmcQgNKEKc",
  "key21": "3RGnyFou8Gf4bfS7ozCQhL2iFPrw8j5xnzBb4uL2CGrYC1shLwSHrWViZbTzxErY3HfRRvVnnxKvWH4eBjxYLWP4",
  "key22": "4g2p9dP5oWoebs7k3msv6xYbrscGRqGowFDGLLPkAzVPHBWF1dcigsXk7sYr6j48vEzANmVr1rjJdTk7G14BRWCB",
  "key23": "LjbQrxYPgXQM8dUtEEwhW5TT8ZCjRVyFXtmizhE2vhEVDfqikY5nBZ8niawtQSGSiY5jnfmcyfQLteC5a6MkHJG",
  "key24": "3JjGRUoDBiZymPHswVi9NZSDeYRHMZaePtFKVFkcwmtkMp5XEx9mMNNK1yzCF5hH84ktQV6Mwvc5a7VFxQ18XRJ6",
  "key25": "7ACGqnGZAv6rhcFQUqg1VnjuTMoLCJdWGuWPNgy2MXidvoMEKv6ZWi14BH812MS8HqdfcKAuHaJmY4eDZirpqEm",
  "key26": "3Z2gLpakVtL3PyjQ2eZe4VGx2Xye7V2XghcrumdK5WGeGFuULiF8F9Ev8gYG6L2dnaSmAKRbPKEP3fDxfUHZHnwb",
  "key27": "3AwUR1VURkXJbephJ8aQPhDiGi6rcYcqieCFKmoTxs5yMBRiYLFK1LZNnvdAPjEJVYZpKg279REsh91pdkfjD88D",
  "key28": "5ZaHFqHsYNRJ1n6wx4AHApxMtzS4vEjJpnapq24Hmi6pLpCe5XoQDpbvRj4STqomz26dua26FaSSigSfKigLHv2j",
  "key29": "2nnWsNW6QfdJ2nzfL6yKFBK8bN4J1V6rhkGCtVFL1siaKFqZN3vRGLXx4pR8t9qvm7zLGERd5c6EyjEB8noGLW2o"
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
