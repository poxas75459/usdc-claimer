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
    "5xH9ojfnYPuEcCLtjpVwEA8xjBkwSxCYQjUCwNJughrh7yTds9CMouK6Atrojz9T4qY2h5KrJqpGzijVFY2nz4bL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kRKrMrL3C39mGj768jho4xPaghmoUboczSdN7dqQ26khXNhVpPNxSRh6jozc7rHYxJEG5EBQB3AnrAtcjFuSd2k",
  "key1": "2vnm2kzN455kEnBoLAJFz51JYMw289o2xXBq2cgx8pGJt2KEtKS8hGEwXXpMZ3eycUMF2QTicadLinRP2GFW2g9Z",
  "key2": "4FdYb2BkLhB25aBrUq7zgT7dbfFZwBbRQ1iaiyGRrvpgbejU2xTMg7Uy6ZKLCbNcKXyPRT6y39bAdfbyZJ9Nw66U",
  "key3": "2zNbvX5H3eRnr7ifFpnJExsTCLHrZScYVu2eRSEjeGLYM3aEQEJyKFz8EQGsp4vkTNARijDS4kYcwJGe3qyeD5e3",
  "key4": "4ZTeG4XLVNFxQsRNSVCMNHhmfZgWgbPvJhBJkdCdBaCuNetT5LUVpQCTtnDJoavWQBHEGVfEujomLji3MsMBeLKM",
  "key5": "4Rk3bYVXPULkrSyj3FJBoKqcVf5cj2y2LYGeYsSFJdjg1KJ8gwBgTYnYBqssFYAN7BXNuSSS2KFPpS3RAo2vgGpq",
  "key6": "5tuVsxL3qXsXvXJEb3AxkgDq5nMeEw1QfvRD5ZXi4x5DoBhxYczFzm8v9T3uWJrRZVig7ew6HdAXzGY93NEKvCD2",
  "key7": "A6p4u2Zn4xvZcSvd3pYMt8gK1TEMQd3mfuSwyvRNsoUCW7JoVLDToQcnMrNofh1nSWxnJRqW5VjdV7cJ8VsKkbe",
  "key8": "41JqLmjgzcywTH8JM4Zjya1zEK4YP9nodNBw1f5eLNAjkeVSHLw7R1SW6hPgT2MuRJ85vpSEyTALJhjDjjdKb5xJ",
  "key9": "23iQiWF8DPyq61agJCCcyHmJr4iornMaSvJMPD2JyybdKXDryNSb8NPPm45FGTCaz836SjHrWVQePojgVb6sSeCs",
  "key10": "5d8KvgQgQx8umoP5HYwztCGbHbi4kuVxMrHewGaRjYJMAtCWTRX8QSEAXFtTiiW5MmPgn41o7HhJZQxRsZusmJAZ",
  "key11": "GWEeAczDcwCxk8cZyfMsyxFv4XRJJxeq1TL4k1vi9mFNDMYiruJs3HsiVSg84XCbnfkBum5jUyALcGWsfWwvL6z",
  "key12": "5TaEe2Q999v8Bkk6PVaE19mg4aYE7YR9UT9eSH1hXHxANop7Xpw5a3jcTfNefDGkdfyLqPRb31YgoEzHab3nmPFz",
  "key13": "2Xq5QPZShGxUCCcccg4wcRCEAyYCMvTtqkwps6qFqvr3oUuoaxPZ6m9Wn8Pq4pQhHf7Xti4WTDVNi1QwrhapYoxP",
  "key14": "4kKxcXqqBrZtvSRPYCKYn6AcworoMEwMYCFbQnui5EyaBbUrK7Q8APL7bCUK841VaBE7YumUALPPxFrUzNyobH4t",
  "key15": "hrxde9tJNC3une4a6MfFDbh4y4mytGNwtc3KQgeYkw9QAWWgTspacBx3tS7MvYGbQdx4Bh8Kh1m9StUpvRWDnHF",
  "key16": "4pzcuwdvQ8gSjnV8F6Z39cK3L7gFSg5VCpprooq1W7NEWXWAK4V9G55LLAMtN7Bc47KErKyA1Y1oQKrr8sM1NNTd",
  "key17": "2EiSvaHTZs1ntW3q3nXYxJ6yMBa2StzUFtjbUrb1ozdbceJf1gSC3Kb3AbPhg8iMzbFWCfka8b5VYm5U3uJ7pgSE",
  "key18": "2NAmJoYrxMvHiGYia5fRXrXNKAwMzhtsU2U6wdzKiSaVSrN6Ah2B6eJtvVoCzhtigsBnEn24Vnx16KjoB7D9263G",
  "key19": "62V4F4PA5E16uyhwMXxpcW4eD1yxzKoC7nPNYGcDjxA7cjvvwgVMknwv5ajxXRjJp2GcfUfn5k51y89LLSRz44ep",
  "key20": "sHdhiaBVsxnGd9Pw7nfEoP2KP7emxxhmHGA5GPX1EnHVG1FEBeEDW2f57tx6dT4WTfdouVZDZV26AZrEmWuZBCp",
  "key21": "4PViHUYnDmSgojUcvcUMQ6TqdKnZsn9AhDe14BfCV7xYQ79jb8xda5nbp1TuTkDujtZmVWh9XYWAmXpteXCV7REQ",
  "key22": "4ZB3PhpuqaSTe9aWpVQL6PXU1BMMmBLJ8XKoLS3VdzV6HFm8icAmohScrWgbmeWnznCDYpAY7xtdqrzSpj4dTuKZ",
  "key23": "neQGvYVTdeKtgwcaZuWTgKcSYhj3SDSGJhJdX7ztEbguHrCp1jnFSBsj84EFDtKfyMLhrtKxLVy1Jss8T2sAT8g",
  "key24": "4Cj6YMKtJG7NDpsWt1kvzE9upCyF6u4Hef7FEVfCaou1XNNmUyjF6DmCDGPrf6gEa3kXEe8ZXAFgZXLLk2kJau82",
  "key25": "5ztZCfnLZimvB8GrRtCUCAF9iLXVBy55cR9WXM6tKopUNSJYqiXEcHhpLmxW7ghp7Tn4BqTwWAkmFnpnyqrGu4Dz",
  "key26": "32cLQaw7wuTxs16rfFAQSzVJWH2UbtCiQkWxvs9c7mbrXqxB4Qkh9XAfBF4DZLa6KeqwdwcXQANjPcaodvjyQoTg",
  "key27": "4awQ2h86ckfQaghGHt7rM3ZHHJ1Lg2yMdR7rYmLenaQjzDAWDSiVZePUPobbMJ9zrHg3oXfTHX4KPjYyxw5GM7Vt",
  "key28": "2rkTmxeiN7xGNs5LF4BhfGmxD64cbSgYjA86oxhDvosZTV5ARhdbrAHCgu675z7Gzq6N6kEmBijYTEPdmFyJYNQv",
  "key29": "61Qq9pQBWzSBzsyVcb38NajNTWwPCGj9KUbNA4iQADvfbcRJZKkSsSn2Z8hAnKRxFnsBQWiCkpZEr1JFvSPzSsbM",
  "key30": "5gnTciz3UPQrERFZWV9N3JVCvRqVLKw6d52yRb7h44Q4DmbHEgVkAyvECvkyL9kU9opgDPAKZAhj6CZJRRGWZac8",
  "key31": "4AgXPVjCbW6K658uWum9mLpekXap9B1swAFruVxZEdD7Wb9BZT5WH1RYZ2m3Qo1KPF15rvcH755jMbsj1QiKa3rx",
  "key32": "2VVsdweZLu6P8eLtqCJYoSDWMVTwabjzFEwbhzy46mtHUCZ2UcuJjH5rYVXD2971sR91zs37W1NVvREevDZS2qts",
  "key33": "qpbZK1ncdkShz4ArwH8WALoWgFM8e9NYzMAiiPU9NTMRFNt5Cq99XKDd9tihpwfy4yyLZPCMfZYuMcuXhCVc4mc",
  "key34": "3H2DuzaaxASCPFkFhPhBzeGpyyi6unZdKWfovYxAS2uCRpCfS6KVaKT7N1sU6fqsMqunHr7LCsG25myiVffRLgB5"
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
