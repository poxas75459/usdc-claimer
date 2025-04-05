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
    "4Guyg6VAZPudmNfomKWgsb42JhJsybLuhjZ4zBFd6aPmYH8o1QYq1CXbtbiioFMBnpzAXtVMhLyR1Ua1stbBwZtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pgfsf8Ap7g9LVZB6qnzPEDfjAUKmZts6vRSEU2afsB32UXVyMkc3kDSAfhczckLvXqs97oGR1qFPSdeGPThV1JZ",
  "key1": "2noiZhW7FJjiygziuaN9M2TJviwJCHRKCfepgc4fGXRh5uzn6u7fUot1UE5VhPHc96wGuAKWwegwmH5S6Zkzj7tL",
  "key2": "38somne32Ayr1WM6JrmzpDGXAaFyQ6TJRBBP7HHKvDKpNXS5VfotRkfBuY17t35cQ8yGReqjMWq65EFBJBHztGbg",
  "key3": "3ngecTMZDZpTiynQB1ms14HjoNRxGyTzTBqzHdKWSZehV8HijTcKK89xUh92Msn1WmmvarDSeWvY43BqQSZGZudW",
  "key4": "3fPrG1FwBmnXjBbzAwN9Jfx6hy4ovp8A1NgnhTxY3ad8Q8S4SUgLt9ZZDNpCkwvQ2mBsttrs4dRZ2emrNG4gJoh3",
  "key5": "4vwT2MLwtzXxQeMn4cP9XymC5rZJ4fLSxrYwVpbFY6dFY5xqGx1fmJTELqvYkpEeugEZLzfkvu3D7k5JfzrW5hnS",
  "key6": "xa7PxWfhWicXgC1QMiBfA5mF4jM6LfnLMntbF8Zyv7ZYkkXPf6keU9MHhSVCJYWimJxYuT5AS7djBNWXccencuA",
  "key7": "oitMZZ2mr4FCyC6nba1xsoQYEEarjJGvw6Y4jE8ko2iCGH5raYevHz8NQBwcopefvVgsgKqYwJBddqyigBtYdEq",
  "key8": "2rbNbatCPsVttVY4f4mN5azKuxsBAL1PvF2WF4hPZimHkm2YnbJ8qECyh4DAnf6dp6PMhyEbwPn6pnVuBNxvxQSf",
  "key9": "2x1pSMzXMDw9dpvZy5utr8q6G4GtJorkQFRkgjpyH9SHXtPfjPfZWCUvuXJcgdtrqBVW7CE3ibH9vJxLWZre6wx8",
  "key10": "2PDeWbCpRVriGAk1nkKE7hiCThMx7LFpEUw32G3VxLTbhEBAiJwV2RfQw1xsnyz7PH2Y7VqdDvMtJMkpjoQCNsFJ",
  "key11": "2pyidgFMVyAY5ayKCX8v55NewLhXiE8adU8nKrbMpAiSduSXZu5141eBQ7vRgsxPZGYrP7knNSSkEPrLCrUujVFq",
  "key12": "57sYVg7NwY45VFN4djqsCCNU4MCHTPhnxcsmBKpmYJtuMJg1tWR35KPXCzjUiYRfEJPih6kH15yY3CS97q5YwbzM",
  "key13": "2NwZgpoS1tb6QJEfQqVBL12JFvjUXosayUWp5VWQqy4AJqjxw6WBkJLXqR46cnruQdL9GYcC7BRHTc8PEPjVCWwj",
  "key14": "33McfDmHECB3WeRj68uGYHDuZghaUhnDZj2dzfKpypfFafTeoKngoMJ5MiQpBv22bhUzVVqrcfugMLsTnTbrKqqA",
  "key15": "5gcUYfgcEC3ZvJiT5ijeLTLJMXdPvoHPUzPghTCQeTnYehsQzHceLE2U2psnE1rKXTaer7xAZv8MNaLv3EGANMe2",
  "key16": "33iy4xDbJBjx7UjgvdkLpF9KUPdGg3EMBSoUJsjGjWSjch5xw44qzQtnoxAGCAxC8zBfbGjsDBxLpisk9o8GUYmp",
  "key17": "2Fs2v3u9nRRNhpPmtBNeC9S35LLXDWvRnE3x5h4RETUrr3baWVU535o8qroAD9KmXp71J12v46BDZLSYPB7kpZ9R",
  "key18": "2Ttqya7xwuJwChZVFNkHcS5uybbAKDUcbiAXz7x1Zetc6LMMoMo6gtcP1K9VqgU7V2x1FTCL5EM8wbqBgMVqdbyJ",
  "key19": "4Kx4Diz1Ju7xywnqdptEfHMGucDTLRuCxajXeKRnsJ1EHWKjPmUYXd8ebjRHhdAn4AFwkPB2vfQfSs2g7JcNmykJ",
  "key20": "k63av1ifRSBs7WhddaCF31NPzUzG3kMuDRc1UV2vCB3s42EB98bJJgXSNJMDxzP5YR2NgLoTZj5Z3U9wuMbiYRX",
  "key21": "7zJ2sjJQagAanbvW4Pj9qY3mHKVFN9EKTn4YZyCpHWgnmXhQmB3W4b4F7WDXb2yHM41t4CqtUSHZnNeT1dx1HLS",
  "key22": "2CZ37Z9gDw4BWKuVwz3MxshGDTFLv1umhcDqrTqh8o7TLJr19UVByrAfKRpZPn2sBuf7obcLdigXn5KyNHVY3uuN",
  "key23": "DiK55rK4fv8gP1GHaE2fTxCEDgcGAQ1vQifnteXCA4aeFj9XuuWfFRqHTsfvRjGCzR5GVkHhuuE3KVfh9FPYeD1",
  "key24": "57kpf5XRU7bHrTbYBzPYsgeQ3tuHubM9oq4cve7snyKCxrehXykCGTV4i14cuT2k2s5UP3qYvQNu2EjKPg7YreFR",
  "key25": "5FNcGAjcW9ycbjtAfmGgshYpcJouTDuu27gDnoefqgkjHjdXhHsLW1gtP5GLv1JXkXYVxk69SppVjAYat3fhDTU4",
  "key26": "65ff7PgKfnM7J2sercJapbPcrRoBGQEDA4JXKSf4Asans3KUe6Tdc7BoxAbQG4oUjosf5T6zqGyAkfx29GRvkBVW",
  "key27": "3jPfB9okAwcb7Na8nrCzo5Z7fLSnYkbhDBPGvJ1emAjbnFJ2ED4C52LMqEGLD6X6W6Mci6YceHNniJyMtLz2VuCN",
  "key28": "656BLuLNWf3ZustKtkV8K6EWa64JtRYwG1GCDnHD7z9zEfCUrd7GK7kcXPqxvQf8RK5A5gRreYAbkSEgn8ttUDT1",
  "key29": "2MyupxZMaG8qGYCAoPTpBCNsaV6XF4zHvqKJ8sHfvDQV3KCxEEeEucDoYPwa7B7UsFZJQetxHfX5Kc4AtwR7nEum",
  "key30": "2aHWeZydwy992eUh2jigeTdZvr3QaN7BNCdnvwFTzMqoZpPrT7hfhUcE4diFPXF9UseuTviTQQ9NprBPJcsfRGUS",
  "key31": "HkmNR1GnRsQi7xc8BpNEWXtxioLkzYz7xybXDyRKES8BCFVpeWoPKgk47st9QpUiSNwuugqMbZqQ1i2LurMX3Ku",
  "key32": "w2j7qh4SP3BVScsCTNsSWQ83LKY9Gp8Vcc4DSXpt4fGfeRn5wqBNvJ5NsXHxVoCAvuGUdY94pZfT3MoWy1tnUfQ",
  "key33": "3cM52y96eBQsHk851KPwFzHDDhTWpfJMybwspfDnYCFqAcPVEFTVugwVxYspwipoxgbe45LTPvkQPCAgSMijZFNC",
  "key34": "3NASxeMFhbWj5TZcchjzsZtR5Z72QyZRAJWBaSbbhMys5E8ELNduEeAvSDDzABv6FHwtoGqTQBdzpiK3rtFqiWqn",
  "key35": "534WfRMks4nupggD5Sy4TLaZCMkR2hAoRnjh4sQSA6RZumRXoQ76LVomAbd56UPMUuQvzj9AfZEv55F1tG4h9PCe"
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
