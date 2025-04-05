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
    "4cT4nP5wc7LJSasDdNvnoLu7nHeLaADqDvvo12c7ZZm4qW7fNxt7fXXG8JFdYWq35kPhePs4KWWuwY5uwjvBxkPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39gYtJW5ngrAMPzPGQXrXE8uKBFC7WMt1YajFQNV6vHwhsg3Qyk5ZGpQ2QNNFXu5zi6c2GaMzdGxkE3mibkU2gbn",
  "key1": "2Y5v3ey13CBs1K2VLwivLLNjpk5FSt3jpnEDhmGQ9rVmMfmXiNpzdjjfT7QNf51WuvsTMvmU1UJB4zq1g5jAEjuL",
  "key2": "fZv8RtNHDvRJK5R5Mptm7dMPyRxnT5QozKxeAyxcnDEVpFcbR4tCZkdRUrrsnK3LYcGDuWt5KH2EU7xiZgr5VEQ",
  "key3": "gGsN76BYCs9WGfESDTWeaTyWFmYjzJTGs7vJVeSYaEiWqL39g4zDpAJwkC6TnkuWa7QNiKkdJBDydJ4VEpiHQhP",
  "key4": "2tZo31Lj3omSsQ3XvqV9NRN1EHXWd16S1x764kHpkJ64euALSWnnmdx1CkXsAkJNahYnnGjppis8gucx8RDUohm3",
  "key5": "3dVAAp9C9SsjPiHVS3h9MsUi5NxvwALNu6LA9BaMLG6vVCkkSSAkSZzSG37gAiLJRsvYsQ2xRJBBvcJ7GLyX97pU",
  "key6": "58Uh9za3bBNqvEtyUtrYTGFLmaMBEVR9jAEDGDpFqqnMZDPVFFFT3EH6fCUZAg6VuggGxXH9zVjHvyFr4YkFk2wj",
  "key7": "3EvMVsLtJRoWc2RnxWcQixGnT88VHcf4HJSamYPSo85HBqWxjgUjJ7ipzK7W5UkciCVT3kaEFMhbyz6d6vUKVYcN",
  "key8": "35Mv1JvTYfxbReSst1qAxfoegicpBwWdGW4PJfNaz965gv2zHJ6kjg4M8pP3AczueuaiB7P3Ud2FVGKg3JxzNVTq",
  "key9": "5WNGzSnovsNeTNSuESsDA6bX7EEDkH9SCG2mcZrfwhPT1AA2jV6JjWXT3KUstQ6ytyKo37E7iUcPHvdzKiVndUct",
  "key10": "39MUH6Z1nEik9qCDgUkogqgcavaeY6g5uizzgmqb1vV72XPiExH8FQpamZZ1DsQk9aWetHMiUzDgM8dXccawGTwb",
  "key11": "4cdAsK6JhwkbQc8QHDhm7qagxBMSn1sJSQfCkWkCkaejfy3whaXibKTBaRQJugKZweDvtZaKbBu1bV2oD4QddtNa",
  "key12": "2miw3FDsJZvENT5da4QBeKVVUd7mDFyq1e6UKSvMggWQ9HKun5YASbyyycsZy8v5hVk3ojBrxwTWuW4SJerwRamE",
  "key13": "3VcHC5ktQaCCM3fjA7SJArG3af9cppuXXhb6vjLWjpLYfsahA8bngPNvRRVonkagGtG5vtX8cpA8JCj4TjL2Pxfr",
  "key14": "xzmUgkoAcRswSSnphYrP4ymnDSTwqbTftfD9UqtSxL5hYU9VhdSaw9PMhSfF7GWifzyWdjp4zxb2eByCMWyUsLD",
  "key15": "4o7q5zod4LDHe1qCZBFe9iJr8Zoje9WzRhe31nquKd6xbmNLdRz7rbXSz1RedgA93ghX5tu5hgLKi3D9gmFGtKk3",
  "key16": "3D6eDVncB5B4c5WTWtGWCt3M3Ei9LhzZiXEgNK2rggPeWR8dT6G63fegsDQrLt4zhSMyErJLQjMB9bZQCGiXk4m2",
  "key17": "EKhyZVkPCvdRpReRcizo31G96nj4UUscohKYwvaCZcqUDUSJecutFdBd4GhP3KyMTLGjkLUXxYZ2aPfFUPmewhC",
  "key18": "3XoBJnnNH6uKmCV78pvL6yY8SXsHjuZiQ1NN1G5oBsGvkCBWZu37fXWLJmPudy41EYbruyNvcoGYS1YtZz2MwFAZ",
  "key19": "4cHBL4FMMuBzLkbnBgZ3qqFcofRNvk1jePoyUHpd7xbZXiW3ScVjdfuAXPjkpjummDsSYcMBkq3sPy7X2Y8ikQwr",
  "key20": "2foVpsHyoEL8Y2vyT99nQFUyGbVL5qAepeejSZoNtRGksKhfNAxk6nCK8GWSjaCanma3SEzk7tAc4sYFiJa6tNDF",
  "key21": "4Jvgxajckrwx6eCKBLm5LoKJRjfi9CX2d5EC8E7VxqGuD9P2NU5QWwHgzLhTYmBQh2Q8t6bMpTbQEJ6NsyAzT4X1",
  "key22": "2SShFwmx8uVBQSfUgQBb5v7oqKRhweYrM2TK9cgY8e7kUN1pYQHX6PuigfAMq8emTEMs75vCyj176mBkLNX9dR1C",
  "key23": "31v8663oCgMk1kE8kbJZtZuwDqvu3r6Q5o5tR86FJjYmNZjnAV3buiNNpVJP3j79KsFAsr7FdtCK3hwANfvJq6N3",
  "key24": "5HDQWQqLU5SpPW4kXSvjNbkE1YkbQsAWBv5RGTGZr91QZKxPH18wBPYcMG4rEAJwqDxi2JSWP6XK7nHbCKvNW77P"
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
