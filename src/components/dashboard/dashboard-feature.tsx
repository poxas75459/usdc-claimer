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
    "4PnFP8fsfxeg5YTeGoJDUNA6eBQVA3hp6PfxJHZr2riYVuT27prLB2ToB1wSvh5h6CfLn8YonoCGErKPoWPKKxN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6WhLTMorpVpaTYXTPwHFnDkSmQYPqx6nNv7t9eBTj3FdY9T4DDKu3Jb86dji2SvEVS8RpkUNPLCCEFNvVu99h9",
  "key1": "DGn3fsYwf3WWbbsJc8S2vaHEFc9hYFX6gQmNAby9qVjLCfyPMW3RihWWaS4NBAmfTe6Ac97DVkWUUWBcvhuPkLG",
  "key2": "2HX58nM6ZYkQ5AywFzKv7NUYi1RGES3uzQL63B33hYEPgLoeh56vzmr7wim9W4U2mjBz8dXS88XT5xpPKvpHc5cN",
  "key3": "2aQDxRqdZN8GJCJikVKEfPE68mwHW4L6Kmm5s3E62cjk9ApSHDePN2tnSuZLYYJLt4Yrr9ibjUqvGYLojuMbHkqm",
  "key4": "5U19pXDKzrFdCjpEQ5sFgtWwqiy7m6QaerQMKxbWBp9L5bUGK4BDfNA5SvXkDGtiwCQuGQFnFCk7FgAKxGhqPvAd",
  "key5": "2thVWGj2fpUB7Sekfrd6ESyBDdwkzaEPqyRDycXGwUwTgS2VfHKXBjhniCihnTiKCZvX65Uy5kLoaZL7oUhm5gEy",
  "key6": "3dfh2PPKMs1qB6JHyGXYpwZZjn2THR2h9v2BqcFBrNYGNktvQZ41JLssSRP88aWdqUCdcX7cL1b9keBu6YcCpxDK",
  "key7": "5KznXDFVysBjECWStcVjqYn3eQhh1ZTT9tvQNXVqjTCVnd8o1KtbHCnmYAD1quM5hjXtBuomEKxVTZerJThe7YMk",
  "key8": "22DYDMn54UchNaQvVYA5HtCeh7x9o9kfcUNr6zsuvB6Z45f4ARLY8J4eNSuMM14AjnXZ5ghBdK8wccEqUviByZcw",
  "key9": "3zLpUn1fycLDGkZRBmG2GXMLaAyJegYeYVAy9JXgq9z2DjZ1Xk4f6C9PjHyWsP6LkUeLzF2Gn6TXrSdJkLyE9J8i",
  "key10": "2PxL6XDXbnEDWLuZoNazgQ4PitnUPCvJDUrwV6GyuA72dJvJuxYo6rNFmwxyVuk8o1iYgwHKU1AM3vRgpK6seWcR",
  "key11": "4BrJxyHCe29iT483DKkSQwMFjc3zFZydPbVfuTdTPUSraYteQdcYS1dck7w4dekDuVcTzZWtrvr3GzW3XkLkGBdH",
  "key12": "51YSriBsjy6SaZGy59Gz3m1DASQLbQhov6cSS1wFpDmW6wtRZBPphjQqceRmVobwg2RG8Di7PwYFWQL3H1A1A4Zo",
  "key13": "5hmTFUo6k48gEwNHzVopmqStTH4n9UkWVdo5W1iyKNsfHD6S3gLH9UKANjckz3xmiSFeSeQLYkpG3zgZ8XLuhGSn",
  "key14": "2rf9MYuXzj1qV1QhnwmPyBJMZ1gFKMiByd6XqA6UtcT9Ye4AHfd8PLRgVzHnxgBCjwWshzUtXu1T5W2rjZTATiys",
  "key15": "5yW5Qr2NULkWnTZSr5TdmfkzczSsQxZP9zLzMCYBj79VXNdTpzYYJhrJGhA5FMzo63Gwo1V4HK2WRvu5d2MejUip",
  "key16": "3dPFeGB2V2dYEXusWYyywUNqFH1VYxHHyouGiLTQUh9Dq31sA5W2vqVSLk5mTAZpY4CUr94HTXvjiiafDfCfwma7",
  "key17": "4ALFv81n9FBiygvAG7mgjwbkTrAvCTYFULtfjS7x148oHUsRef3qN5BTzZTRsTrPDY1Q6PypqRgHAaBnUFoUa5WB",
  "key18": "5o9WLCKSs6wjc1diraEbuQbQjBomr3Dpud4bTES9X9qt9d2XaJXkBD11Qn3RJhcNJNpK1TmVwowkyhFeYwbDT7GE",
  "key19": "2FAyqGUsKQib1fS4k6kc8EtrJPvMGCYHqZX9s2Mn1WjTY1yTe3E9sMaSjR9FgGuqCpfDasKejJrptG3wix5HcKsR",
  "key20": "4fPpEzREi2yYdmk1uRmVxaZ93Jb7Ys9KRB5SqqrgXacKFJhVCaSkhh3eJMcL51jcbv9vF2hNxxcCNgxA4SXid3Tv",
  "key21": "ymx37ezc9qfXGaK2gvu5Rtuy6qDCuieUeZiYPZ4x1f5gV4aWjwvX48W1cETjaGaJbxN7VsevTbQvqWzTrhwtLbP",
  "key22": "44D4E4ffo9QfWEY84BQm83VHsNY8tJK43Q39TWrMRVcN8hh8G2TBGYAVbBuJVgXqqSjWYQm2siTLkv2rehNa3AFn",
  "key23": "5yWDCNPBG6npAfCgwpjyMMBzaENYo5cPYP2WjH6EDLMs5YovNE4CiXbf9e6bY5YrBZn5w2mtUjE1gxPFyiDTY8wL",
  "key24": "2P4wgPVgwqe3EnUcW8zqLWPkyn3vhmSzBtQCqwNisQGqvo2dPWV17bp1GpY2wSWeqS3HM5JEsfgYToNuXqrNYWte",
  "key25": "33gYMjXW7oQ8ECcxXrDbzKEXKEGcXhhZNoP7HgkkNC2Wz3eJYKu6h3n9jkyfFgdNc93yA8iCRd691V164FMDFP5R",
  "key26": "23TY9PqaHw4BvsLxggmwT6yP7N8AH4tBaKKWeU3VYgJuQeA2juBR7RFsXdM4bnDi79Lutvj9m5G7LPMjJNkruVFC",
  "key27": "63avfkCYVqvni6j6sjYSM4WW98x7aZ4zNVHNnEqdoYouBpYXa4qPhYxUJky6GNwYqS6N7awk7ZZaGYinqtWuFffT",
  "key28": "VeQm9HCjYsBUoGL3UEmUMVoZmdkHidP53U51zHQoj6chixE8PSZghMPU1asnLX5TTDEwZf2MUQLrxrfogxzUNsN",
  "key29": "5fcS2349S5CyLajR57zY8DbKMyYEBQMsAsFdg5JBGizgWunbLLKp4XyL9kR1m4W9fy2haZKy7otp2KsnRkwmvfne",
  "key30": "uvhLzjD1GodjY1ys5Hi75XEkggSyPo6kB5kyPJytunyaf5kQ5Re3fKqBLtCmPTdRUFRrrT4cZdyGt7XcrzDb91d",
  "key31": "3UwkUExmj4xs5fXUDVodrzdiQNFpxV1KapKG4JFFQwno4K7dcakTW8bsqz4JRTwGTCebyLqceT5JeqTVCsNUHmjd",
  "key32": "5PA8SU3A7P8ATxkw5KDUyzZEVuAGvofiLV9JNvtbgtQpvgrw4bGRr1btQ2GseJp3QxkFQGJDBABkBRE1RsK3SB3d",
  "key33": "5Yp2bbYMm92ujXpXUeKWiNJ1CwYbLgtVwK2VW4NauwJxcqqjrdRiA7qi8gHLYgXMTxsTcCjFeLmD5QU4z5sDvdxm"
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
