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
    "5vxE9NevD97x3RUaZwL737La5chQaB6NyiNiuckmdYSSBwyX45xdMNgjKdyYCAR3R46uCEJm6eWzZcc2JgtXVf7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVtToXyZ3XqNVd3Js7rwuSxXR49WKxMugKRpWZNfmpJaQ1XjM1YR4cNfJk9uT9JRF4QLhssBubBd37Mk9LmHxoj",
  "key1": "3i8cw5jaxGJ7LjhvjL1freGaoJZGQjZfkR2vZK2mJtS5dCyJSp2atAvJ1wN6eYdLzFyDeqoTpVdNuT3cTaqHhupa",
  "key2": "BL5WnvpFjgEXfdVrd9JymZCocvbuvU61R1PVnyk22pZU7yydsEZ2tsrDVKhevybDzGnMDnhULeDn6XfUbrzarJB",
  "key3": "2eGLs8Ht3SP9gnHf8LznLKP5g7Za6LrXqcfq7ni1YjswWwnzbgyhfggj7meJN7btkimEsSHX1wCDdkJwEcTWC8du",
  "key4": "3yFAGBQV1UMN1MvbjPB3u7bgWJsmDsu9TVKHtqgKDk7Gxcti6h8RuPhCAFPLg2Brc8Y1kdHsGgpQUud5q3b4uj9E",
  "key5": "4PwLGVYsJz42eRCD9mxN2Fm76NutihfgYxQDEcAQHHBVEiAWDp98VZQcTCXXV4a4ELpyunBiwmwKS5XbbDS9yGAc",
  "key6": "hnhimXr4jZ2qCudYx7ySwasEbFowBYzw9XzvCwiMXhL4EBovQpy4Y6va1g9qq8h7zwpXZ35pZznfzFDjbgfUbKx",
  "key7": "55UnX1Vaxcm9nSh9HJCGw7FQywuqAcu4GLARrmSqNezqEawmQCyDdGJfWoR1gdSTNackDpJ6wQGDgcCpCvZwboUZ",
  "key8": "4nfrXKzgfKmJdwTQfm2j9FzxkUpunMR7gm7CFw4yfYREPmTChdwLbNxqrZJggg2K9MHhxuyP2oWFp3tXtUbB4WBb",
  "key9": "31y6sQyibbYk5v6h4thAk9FDWqjPUwLW7hg8PomyAPtFSN7ozc41aDttfSBcA7aRpq1kDEkWvS8pmD2fJSxcvbyx",
  "key10": "StQthPop7GmktTVuhbhhQAGpaB9xqrFiDBe2FgkM811YqGKWxwPEE8cEoh6zSmVCaCExF5cU9eSsbeLwNZV5iom",
  "key11": "5htbWBxDXFTL3HfC51Qfmr1Em7EjssvYWXLBBJDZkPA9q1tLR8miuVawK4JokCBC6FdvZXFziHYtPQENCuLKp7kS",
  "key12": "2AnhDifGmA8Ud88qtctQePBDmd6gEs8W1K2dk9ZExfcdrnox1ZMK1zWdFSDPRAiaChjHCkBbL8L6CgCuoP9W5MuU",
  "key13": "5ENcm7JSouGmkoioJt7acDA96L2m4KCJf32aWtwzF3AdWj8si586YNye4bpHFq5B53s6uZF67fuxu2Vq6C2Dd2UL",
  "key14": "35Jbr2mQD1tP6Kn5nzLVoeTvCbf91FtxSnzeP2RbBJ6Kn7zeEzfi1HG6Q4y68A9YCBcuyviWuYZshtvRHHonTxuD",
  "key15": "4bjvLHDRBVJcYiLVMCcR1mZrGmCmjMvHgh3GpH4DJoqVFati8saAZsXZpnM8fNLEm3WnDomkJ2ioJt2VJWBwxUwE",
  "key16": "euvumk5zRVixQ18KCJCeX4STF9SCzdBwzhRigJS2u6PonGjXGdrZ1uHn56w25Rn1RLkB7jTppFYZBKUfs1rZmtT",
  "key17": "2dYTT3LcnXMsPZwaMyX9Q2hBetMLUWKo7KbRXpctSrvUi1QJqGbWb4ByN4hWgdjM15W3SJBhwMSv9EZqyTxd1fh1",
  "key18": "4LvPC7okkc2H1M4wA8Zc71Dte577L9LUNSBvk74S9MXgFs5KDZ25THx9qqTpseuhyMCvwg9vfUfLSRB21BKeiHx7",
  "key19": "67dH6H5KEwgUEEksgozBvL9HPfL3XwRqPosJyudVhKEHMBpBX3jAZuoQnfRW973GdYUrKYf9PxcFHd89zWjN64c1",
  "key20": "3c5RW1UMjXgTxDSzH6EpizCrihjwRotEwvVaJzdwsR4N7yjp8TKHbcbzaCy39QZh5MZC2Mobmq6Eq4G5YGAfZ1SZ",
  "key21": "2XiDc27iNJiH4nwuXTeVNNXPgNbiHRpmNuCjFmVGSNLkouSLw35xG3Yw8bhBo7STU2TF43a8ViXi9DizPvM4kmHh",
  "key22": "gYhM7vfyC2Gh4X7barhpzv67KH4bCWkHUyM3nDdgD4xn8yKdcw8rdPrzJAXCKGic97pagEPiFw8UEETG7RaP3xq",
  "key23": "rfMiUPTpUs64ky3BuHtgzJbzDcCvfqsuW5UEVrkd67aA2KCVdrPAQPxN7wjgFKr1xG4b65WbqDqPSVGMBQCHWJ5",
  "key24": "5boYcvA2Ph2T2CDY9b5iTM3K6d6drQduXeERHEw6m8r1huvHSNoEU2kUPKt3mg6PEkCAfyvhnthRYM7DfUB9Dgog",
  "key25": "3Mjh55cFWDASHCXQnwuFN6DRLk3HQF1Y9YkCnTe583VgbJNRz2M4CNq1pfiAWaqpBB8PUH824ja62nyjk2mX8zBK",
  "key26": "345tAg32eXEHcNb6G6ZnEDeSA4MgJC3ZxnxmuSxdDAVrYniHJk9dGu7j3u1V9pkKYjYQzhw4kzg9BXxQXuF3vHQS"
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
