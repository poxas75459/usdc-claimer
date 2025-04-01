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
    "2MDa9Wt3w88MGQY6qgoNcc3D5Vf3qNf3fjta6gwnvH5L6MzhfAmVdTv3M1aienD9UGZcqVAJ8NQsxncNxrLjkjAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41AXiuCvfVM7GMnjgGKtnHK73e5JZSS7BqpXPm4UxHUARNMpjKm2GDyL53bKABMhXRkiagynCnJknrRbZwJjW6rc",
  "key1": "4rjZX5s2dXWch2A9S2fpAr8iDnH6LppShiiUk2hCBJdi3xUPHRL1JqMhRZVbyjdQZ3gKM8pzMzhcDvTucoNcznLi",
  "key2": "4ovJoLxBUA6fHLeSLnENejfTWmQUwNZw47FK47jRPz2CAbgWnA3d61fKNYSzNuSz8RRBco8Kx3sB1L8hLTipvuW6",
  "key3": "5WHJwCkCctHvn2e92tZb9fBrHPJj7RYsUfeHxYHVpHNKVHKC5oKeU4u3UoV3XtKGbWHNyvtFYpdqydsoweJYVJRE",
  "key4": "2T11x6UCrw4UhmNFHbVtFMpyvE7etcS8r33LzQBWMLeaitPEeRHGmndZEVKWvnjmmdX9edQxVQQMeg2ZKSzPYfiM",
  "key5": "3chmc5rX9faRNMmSfK51roj75h84TgxXGYUuSXiUMN9NUwUyaAmBZQwFS8f5ZfPfDibXWMFEk6JSSHR6cLcCjS6m",
  "key6": "55xRQS53CAqpwPX8ewwCXnUrSFVXGznDAS2d3yAGXYeKnSMHReWG8XToa2GoRB5Z7cqVwHUL5P6HjrRBTh2NuwXZ",
  "key7": "4v7e6Ps7DBzfY7mTSiQ1GRYSQ3oczSQzTWUfX6AkdN7BQWn1FQjkUJVbA48cHx95qXPCEUfjERSwDMQGmmF7RRHG",
  "key8": "2dn2oiZdZhqSYMr6AkFp1pGgusoLq8H5rkSFpr1EfuQtSNJbvX9gxTDn7xfnY1Mmu62RJ7cwuRQiJMkSeiE4kccQ",
  "key9": "XSV5j4SaFMXNvXr7wyMpLEpQAno3CuJvdmCXpBfp1nDYE8Hth5e5jTrnLMyxXUbgovLwU5yJvwFGmCNAsgpuWqD",
  "key10": "3hdvu3BiE5Lr8e3SB2o2Lcp3n65b1CAmgdS4XHUJod5L1EEaUy4p3JoXN511SRyDowcNrTqQacwrrFCZ2Uuqr4bY",
  "key11": "2KJjpsLiTqDCd4XGvH6qRk5TqrHrjmDJGaTg7haWqd5eDKFRMF3B8axRPxAv8ckM6GdXJRpVoFVr11LZxLXZuc5Q",
  "key12": "648ChrtK224eRu9ju3cKJywwLBix8579QUMtyhPp35hzDcu1eKgTiH3Emg3JKoX6dLzM438cyT91Zr8S2UmYTDUL",
  "key13": "47EANqruJzAY7KpzSinyWPV4AZyT7E5yQJtV4sctMV6GhKiFsxmbUFzCnyRPXHt6BN23YE4wuUhNQNj7P65S5jME",
  "key14": "3sDnxd3JCBhZyr3f2LWhu4qwpU4ew1fhPLrjU39QUFm4mnrHoP5qYbNVTpTQbYjg1SdWJRTxaS4x72FoUQgRTQQo",
  "key15": "2JdBToBCbE6es4Y8jzd8ZSQzVgPaC9dTR9Mqy5Ssw5L4dUqGDeuZN1uA1rmQm74kJSAyx9TMcYeDRVb1kXErVtLN",
  "key16": "fQY1eW8kwVjnVu7fuvZ7Ae6fHCWgQTDVMurq1XFCWy31ZN6FvC9b1N9W1koJxTXXV9SY9YKS9qy9GNN6opEEoAq",
  "key17": "frobNzDVtK6sDC6RbmtK1JtmGFQpEGPCwe6EmwBwBx8JJRyEF79ScLMWaAxRpztbFSXyAoS2XcKLzxTUnx444fK",
  "key18": "3jzTE1kNnFm44uEPXc8S92inAu97PNWLvQQjUzr9j4hfDy2sz3Ahm4cb2zAb5pxXGnVB9g4bFwbtzkyjV95qjLCu",
  "key19": "y9RPsCZEoog8yCTT2E4vPcKekpQPAYC4yyGNeqv5VST9vL1Z815Qn86CM9ix2n3gcrCN7iMF2E8ymPkgkfeoQGJ",
  "key20": "G3fcuDk1hqFDPq6QZ4bcNMcvW9YTMgikeVrKJSL5abhpfhusvWW9nC8WJVEysecfVMzLHXv3RNctXcyixhA3Y57",
  "key21": "KGGEqmdE2nub3kYdHGUFL3XMGQzVWTsxRaGk6GVHJqqY5Ath7csJXNrXhoyiTb68PaPmjidG5pxfoWePYDmyPwY",
  "key22": "HZoW5fDdGUDGCioFPZUiS8K9UmPWmTfTBi49YfjwSq2uQNTcik5oYMnbWeYUdjQK3vGjVaSFNvH7C1jnAWnh35W",
  "key23": "3vo2CZarFvHmjJ99ziTe1nYj3kiSZdRRaK3q1beHPNaatJehBWqB7iF2wPCt1LgNPuYfSpCmCmczrW6z2CeDykVJ",
  "key24": "4Yi6ea2M78Q2Ln9L8xWNSwnJzJ2ry35cUccEKHucBv5yfcWbYjHREGPzKqbsKnxLmJnoPmPQA5uP8coLZ12QExrn",
  "key25": "5HM3k9SaEGVt68D4mhfwEXbNcKaw7K3bD6aSK5YMHk28F8yMNFentdig8493ZbDznzFzpSc81UFNVc5NfvKEXvaq",
  "key26": "2sFR9PwAJFgjmUjxakfAYc6fhE149Nybm26R15Z8ZBLPxSCE2hTobT1KBezbRGJHYx3vV5YFBESVdG5Dmnx7QsMR",
  "key27": "4zZ27T6i1txibDNtZtnzmqsHKZoWddSZdzmvA9uXuZyDiBiDVzCd3eBwje7WdFLLhZ1FLHWDx4yKKcX9xPKmFWG1",
  "key28": "5bKj4xUtJH3zqLarPwwL7iNxgirjziU1SFypD89vEtzhmxmAz4eq3kZBcd6M8RVqXaMAqctNcCAEniVmAfoDDLPC",
  "key29": "5qsu7Ga7nu6MujtxoY1mN4ddJwYfzmTfMsYxUdnbLKDfMMy7HuQgDAdPXUsP18zBoj7ZH2Chguao2DCC1eLJvPGa",
  "key30": "3bNn4dh5Tfd7zrMwDAwGgxzbPEnV4hs7UJdZsZswK8tPSHN3tgNR69dXeVn96XmnHf5UrTbiWQTG186JzfaLbycK",
  "key31": "KYHUzKaVR3ZEEqvAgHiGzYq4gJuTnJ7DNM7AbkbzWUcHJ3VrDKXtDxNXDB6Zn99cBdxsMbteYjVGE28DGKZtdG4",
  "key32": "4qeBdtsX4F1Umobns8MdjfyRtsvcK3dUEZKT4DGWRpDCw2CAUwzqHg5y5NSdyxMNJLsamgWerZMxmGGdbdKhr5Lj",
  "key33": "5NDCyQVxaRWpdcHzcBTR5cAmmPPyd6nqi4x9JfFvbhM6moyQvWcVW8zq9ZntR6QqEZAWuhyEAuhjxVT6b9Y5DfcZ",
  "key34": "4tt79RePxyF9dVMrzKfS4uubnEX6bupWrAtUyBPiRwoLn11kCJ1cEZczygCfe4mTZJFFbJ6SN2DDkfaL7hdSFosB",
  "key35": "2rVseQcybktB9nSnGNvzWFsw5NL5jzqXhU9Asco1jDwJkVUBs6HwQ7pxYDdFpQ6ag1zeXMtkdzPXVnxNrmPfxJMs"
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
