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
    "4bLih4LLAiT8kYSewU1nScYuY7txGr3BP4yjwawgXXkfwJp3ZDXcDRsJ7Kvbs7t2MdCtVf6aRrV9d6ZQxKDHjWbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JKqP2KbNLWHYv5vmgHAPZ9sKN8v8tgBC2qodwzZFAWWTYhmwjLUVYgdWL96CTz7FRyBxg3TbLPCaqKwv4YNyWpx",
  "key1": "3UyiKnXiQkNm9Lj9vqbp5TRRxoRbVGXbtYwESN324pHdZm8S48LKiFZdfVBd8w4Nwsk8qk7M1JeqKLufKUe3ALpB",
  "key2": "3vhQ3Nvy6g7n3Lfn56bFf7tK2jMpenSEGtmVVEzkZZ4GcS7h16kJGiUJVqTFneDJ4EbjbqvEsA47X71cMkYpjgVn",
  "key3": "3SmwbqWAeAgmr8gLs9kQYTaV6G2yzPQNk4isuAc16EEv1v8kKuTod5Dzh5JgHk6N4UCZjzZ25827FDkPTY1cNbUL",
  "key4": "5P8bGMhfMs1HehdMkAYEQcitRb31woTwEKwqECHhMYeRUaF42gKqnLH8kBvVTQBYPjDZ3gB5Sdt9NgV9GZnF6NLH",
  "key5": "3NVNjYphpZNe682uxZpDUMLS3gQ3gS5HTy1zv9iZbMFNaabdnwSYNDLwz7etSvhQdUDeEhFfn6CEoMogrTAD3JkU",
  "key6": "4eNXZyXqBTxhC2YSxBqCBQACYXz3vVkJk2aLW2FjebJ56j7dHAsm2XdcWgtKzoUZ7WskXim9oLdCG4DQDnpLBuJg",
  "key7": "4KFWK8DxxDUjjsLtZ7znDPXMBnxKbi2tuQ6YRDgUq6bH7yQUfgA6EEKRjttp1yAbTstoBJEK7YT5nrk9Nfyj1AuE",
  "key8": "3ArtcSZWe7EmvC15vXTazM8ZBoicizdjGSd2JyhSozY1XFLCCFkXhbZYPDWssar3SWhJ34MC5YrXH22dVmAC6u7y",
  "key9": "3shJmS5zs88emavt8Fyea2jp4KWLXXkkyfasXyRK8Xf3GrEmAf22HEKSFQB2pANTAmXa8jz4wpp4spfHZQHQRkrk",
  "key10": "37H6S43NtszveHorYbvT5o2uWBTcEbHFFEweyRBGCQNyWKNzARwdt8Ey9p9gj5m6duUAceoXedXq7bXyiwDNyCCZ",
  "key11": "5d3jatus2Eni2dDxNo7zAwunpe2kabSvYHxk52z4BJNzcz4Bq4pGKeEoqKhkaq1RaNLQk3viKWvbyoxC4fvYiy1p",
  "key12": "3axxxZ8DMLYBee8noKXUoevWvGUxnrgDg4Lv8gWoRwqoiJGTPuvxnkK1jqP1Cx1HFNNoAMdKyC6UqkQx9C21rRUo",
  "key13": "4tTtkmYFt1UaaybWqYBsNi1Mcp7ZkCDNyojkFw69UVaekbPRPbh5PBmwsi9f2V9Ae2RxrKQn5Dro6ZWbaRe34Ukw",
  "key14": "3RLaUWMcxfNk45RAKpD2LTrwzDcFq5z4Dy5fhRTdADZbRB3Kt5n7Ff4UfwNvFXejpF8HmuNsTRrMgi4xvt4CuKNj",
  "key15": "3eYa6VSF3TGys4imdBkPbTtD5E4ZoRTnaDcG4vst9K5PVoB6zPZF7BMWwGief6saUnq5QBpTNThww6tzCay18B2G",
  "key16": "571LeoFKPeVyH9zuo5YaaFwiytc5jBzJb6MTw8FMQUePXJMb7HsBs71G1mSBAHKEP6JNz49DoxWL8BLPSX6gHnMX",
  "key17": "euXqFqrX4zhWRKa3mjJjDxUnsaQELwmYH2qgtZQDChot3anCeuHKKGXbHn7nKXHMkQK2TPqU61KPNujnhc23tNd",
  "key18": "5FZbfynWKMMWcwQKG8Bxramo6A9uXXGoedZm33NXDbjf7pYvPYxQQUC6vyEy6e5JutKpgUeQh3GPYjBvdBBBSRPW",
  "key19": "KTpQFGDsbqnm5CmHeJrDVp1c9oaCAPNHCvNgvNN9TWU5XWbQSL5uuEw9M3V86f413jbFnF5GN1WQ3hH6nUjbUjR",
  "key20": "75mnG8vMuqoyF5GrMLhTikcVE2nKtgBSvz7vNA7kRYEoxhmR1fR7AiJt9aaddxmyucAXqdpbBwJ79PCPobJ7PL8",
  "key21": "5YNk9t3m8CBpvCQksekz1ubK3SqQyt18QfcSuYg3FFeDxYTKduFZmPvMrheH4AT7YCTdGm5Hek5w2nwaJtzuwgB6",
  "key22": "3jEEUAp4ZcaaU1f5gYrbrsUZGu4HtyLB98jamDSQq1qNWFU2ApzdZ65LKt5hEUnCm5FUTDJA6MwvMdMyoismLtJ7",
  "key23": "5Y4WsNpHhbpQzBFzWQuPfPTgfD9h1BWwALgFTLGJJXmmYxvQx5Y4nSEVHkSksLQ5VGKvNK7tCgcrp9F2tZig3f13",
  "key24": "bNh1K3x73EnmxguQcgPKTASUUQNSc4hji88A36P7sPXqSV7gbBU8dn91zyYGwhahJfvnoz7ySCr4TGArqgWWzZh",
  "key25": "ZbnKhupQXAAcSwoW3dihYkUDj5cfE2AHjUc5bg7MKsVosqr1x9cmAqeTszrV8HTdWUBEPqeyC6uvUZbuZT1sqDv",
  "key26": "HB6TGvdum7jBZ5ZjBMRRQcJk65yjnvQRjBfreagzN5MdiGyQZb4ZWCti9vCoVhJapgnmxzFjrfqf9B4HjKzwtEr"
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
