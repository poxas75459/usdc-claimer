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
    "wWVM93E7JgP8BbpDCVwP9x4dgfm3KseJ1hfNA6ZaBPA7pNDNPxZwU1K9pxFF8hhLsXmBxr9k9qpM9Q89fBRyhhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kBKLKeLjJ8LaQiwArEi4diiuYvd4YbJnpgf3Sq13PthF2ioHmq1QpDy1RdtqRZfTWk8rjpsgh4YGmArqbvidSXi",
  "key1": "5hMt2J93mL9Wp716vyuoHuLA683yFeE89veTAmidD46x6w3Xj7VgZXbRp6oG8TpJn23FGKeLPC3FZXhb7bMFgiAv",
  "key2": "4fpBYFgnnqmvCtzthErUNEREpPGg5qSvvZ3VnLJiHYtnZA78BweCHDDNNyfiTnFrw7Pw5xhmAvXKp6PVfPEKxxWw",
  "key3": "659sANEz6edvhxUA4stytitQ7nGrui1NcsyHPNLsAgaFFjyqsj3UdUeBMuoBkdTQKhF1pqmyUEsQsS9x9BBXQaaN",
  "key4": "3kFm1USdoMjfyWioh5KBuD5eTA1x4v7UsnYRJgEiJ6HEQBeTF43Ut6zvqDa4LByMfSqp9omzvne4PTGNhUpMZrLQ",
  "key5": "4X6gRkjyNEsapNMMKUj2LuzYEigmfGM1oFuFYX4LXnZ49PRRr9bZ22mPKXCmZfj6HAvUJvBdHeCikm6nvqVSkzfK",
  "key6": "2NEkVoRb3Qno1rGbZc8thERK3qWu7NccivCvi1ZZNKP2wn42Sy8xBG6N2WXojy2Dt16q4y29e4myqxk64FMvKZ4s",
  "key7": "H2FofQMj7v1Wb97a5o3LjxHcwYQrEZ6nD8KtNCknJzocveMJq6DW177jb8NbVDEFokYaK9hVjJxGCC6GTZmKV1t",
  "key8": "65QGotJWPntRBZbtJJkkoUyQ4WGLnSJp6ygQB7vSNdztqmSxAHpnAfKqYy12RLtWNzqZ5QoGR6w7xGZfe49QfTZs",
  "key9": "3aP1FyRiz6MvUe2ywRLJfgqVUSe3w9CGgp2LLTBNAZgGFCVpcNYq8EzNncoKbU1eYTUkC1n4dMpZiJ6zXDoEvG9b",
  "key10": "B3UJyeN3HanuTbBy6RYt6SGoZEEboVfQWWzKXuoaCHrb4LhWSuWtpNt4x8EDe6Bh16zTTdtBDz1Ju7jUkGYcFJM",
  "key11": "3nY9SZQ4S1RYRLyKP5MZM7WRh5brqywFHvznwzLFsoBJAfDMcpjxS3NU9sWhbUsmDkxf48oLQ3chzAYKkLa81myd",
  "key12": "3WsXAhpPmmxZdNdoQmMTPSEN7BgQ6mBv344eJFRhciwa1k4MaPQNBG3J5XC5tWAEVD7RgX2qr56e7eDxtDhpQNq9",
  "key13": "21QG9iEg1XJnppd8EU4QHmjKdeXrtyX3CVvy1DPpQymWs2i26Dbt3fScmxKkT45x6qPStmbtivunkH9uktNygaC3",
  "key14": "5yVQZfATmjvNT9wYHRao4tmxSB9bGfiBRmTnpnXUyMAfn86nAWuykW9kubcwPjUMmwK4RusM4w5scavehGRV6XLa",
  "key15": "YhwVTApFMGhtshyHZ5quJjLEVX2g7qqExPaLw3q5Zi6Ln2wutRCdR6GCaadDVfPAWLk8dRaGu3PXJbBMSWDX4g6",
  "key16": "4BgQ8sUTMESFkCQiZfx8Adf7AfJPyuCzoyqK3nS1Up3X7Z5p7s38TBfppanAgMGKXpZ2bubHQ5uibZUUSnGU3UEW",
  "key17": "4LKFF9x76rHY2v6FE5s7AdNgwzVu277js2etJ444xGVysZmeRH7CDgFz2VsHeTu91wBKf7XuUx4sU1sRmavrFrmx",
  "key18": "2JKL2VQzGSJx5fWxkSrCLVPwNhCj5qnAGwo2sSxX2wsZCd9R9UPiKe9mmvAKVBKAbueM9gei8rkqS1LTz2SM1Sq8",
  "key19": "4LRveGtFw1EHWjL6zfUBDai1mNuGNuCHH8tg43MuNvYrUVxgCruQcudRitGi2iAJqCYFxRyDH8w6FrTfEXxDKvYj",
  "key20": "5Fgjrgzk3UoUSXcyuzvThhLrDn9MdoS23ikXdgAoAD3NJPpCTTFXcLKTrmQkK4UXtBv1p1mR1ciLUKPzUggChzng",
  "key21": "4fYUaR42aLTuvJawdAiPDDcBVzE4R3gKCKqeAoWaTQxENPNSexqCCpG4v7dYHiFHjTdQWyN9TgfuRffhJKt4pzvf",
  "key22": "5LBpV6VpVX7DDUsrw5qs9vDTACTWCqmbEzPBMMmLvvcWL4yUH4qLYFUUmMG59SPGe7Z83GSxK9CK5xrgjQyRcNgH",
  "key23": "5iUtnVTRbThtZC8XY3B1tvB92pJLrrt6ufhihq5wUA8giLX5Khyhxp3mfV5JwCjwebK1BPHo56iLoADPtXsK98U8",
  "key24": "3gih6z6LScWFmL4WAakJtbTjZCmrdMcGDtzzhZBPqwg3M3TMYxYYdMxPWtec7yKfd6sXAEcMBHDEwV2TowNHXcxn",
  "key25": "3G1tN2fyc4bLg38M7c7rCeuRkAayVMCeGj8kD2vh1ETvRo8GYcdLKXRJn9DH58LE22k2Bd7FXNuFibvrRJP1MduV",
  "key26": "4HnwHF3GcroU9eVgXTs1DvTQJoHQuErgWj6hCsu8FKqxhbY4cnLBk5uSqmJT2jFm4fj1gzD6SPxRZQjqEuW9sUyC",
  "key27": "2H1vKHAqyTo4gg2u4R2epnyr2QS8gwbSdfRrCECMLvAqMwqUhFJA2taL1tYXJQFMoRBvCbv9H7Tf8uaiVyCkrnhD",
  "key28": "uqZnUpXZJEYwKDXzKu2ZpsQ7s8qa16vjkpozqXV2PBWvDFXaWaYLgK8j1Pneri5QHfBEpMMeCb8p8Hd125ZLgqu",
  "key29": "qGBjCLbHe8onwDUSpnjcAUrAzwXZbF2Vjv394yRDfF1xRBrtTxEWerATjyH2fdAsGgo7eF6KsBWnP6KPV9b1to9",
  "key30": "4kDuhmiGd7q9TUasEdBXQQoG8KXSEiNYcQGGqxY1jH6Bx67zaHPejtuY74D5EDGGPeDP2ezGgGQ467Si1Wwk4Urz",
  "key31": "3YEG8yrCSDy9Rf9X8ozPqk9n6WFQru2WGXHEe67TLbwGXrjMQTtjkgb3mVdxn8QFepD2qqj527hoV2EDpGtX6u1z",
  "key32": "3DWK8ZegcsLZCLbPpm9BGMx3o7xUjMq7zbF4H8mFzXYtWHSu45bdkKqq78TxiMpMgmQ9L6mivbT3pG56at7YLrpP",
  "key33": "3ePhs2yBcZJpit5CNCZGC4P39vMKfqJ14guSJrVptnAUS9PtEGgKRmMgMkTvy3xJ1EwL7YZ7Xiryvfyau7QoZXe4",
  "key34": "2ZbuyJwYpLq8x1ztLShAKAGuAviJu2qpHVrffjDYeRTdAetXpPm6Y9kAvX2mmcrch8RAsFwrMdFKiWKCCCpBhmr8",
  "key35": "4jasXjkRo4eF98L8wjwjKcB84ficKWzeouJrjquY4DQEk3zwKU5MggwiLDkAwDiubFKLDVfppsmCVShBK2TM1uuz",
  "key36": "3zLEaBUEdjqqsKobdsVJM6VCK2sdRAucaioiF7a9EbtQVkKAsFdWFjH87yFMKKFDsxvdHV8oupb6UbUuzoNnYdNN"
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
