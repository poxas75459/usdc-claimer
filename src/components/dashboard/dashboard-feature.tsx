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
    "2hf6C5vP1DgQo1K3ARs1LeGHo8aVrGsgwPaT61KBHsAyTVE29isPmFizpnKbCqvLKFMfHYD9fAyGhGGTotm6dL5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57wyuVRhiGNEWtZc9UwfwCyXwggwrqrMqWEQ99E3snPaWtnLRnGzGbvXqoCr5mwMqEqf1fr2rMU7ezBycdXMZoE5",
  "key1": "2XqKDookxepeHsBnwiCzeLUq5Me2NAriMcRJyBnhJaaWL2YDeWn3fWcLhFBfVkYFnndR9HXWe4xptDDnuBXE4chC",
  "key2": "3AEMQnTxJ23BbQJdvfieKvXApR5YuLwkZxoW3iwyiKLEau6UKunaBWGT2TNkc9sY7tw5yCbr96bxPAwNJ8kwvDdT",
  "key3": "4D4wWvCcx2BtCJyqRaBRBWg5yqYmovppmxtQx1s9DYAi5Cr7ANu7Y4U9cBWBZwRctc8FrriNnJzmQi9a3WnJaS2V",
  "key4": "3z5F8vDFJfWAxPsJY4hQq58CA2i3H6kYRLEaE9yuVHvARb94w62XHEKRdLjKu3L5ghUtmSSCkGgUsyhMV7yvydXH",
  "key5": "2hnsisxWq8QaBD4MF9yvYo9nyGkV9BCPLY1gfR6KSM3omU5dWAxunNUxTk4nN1Zuv3TmmXFpSJxY54K6obiSxv4c",
  "key6": "3WXL5LyAoy2ZP8ct8U9FyN7qEiJgKKxr5N7byaHmtDEVQznTXj1B8K2L1qQoweF4KRVsXMDnqdo9hkdwPzH8oETF",
  "key7": "55i6CHdxztoxeeu21WR8vv1Sp2b7tBUzA3SVwo5ea8FAqZsWibx8Kc5VfSDBNiZrtMubpDQMt2EeLqTBv9QuDYwg",
  "key8": "34NukrTQ9JNYRBFkf1srJfr6azeo5BGii9rwMdtbWQ2eyWLzEPbx2Uo8YYdpTb2NW3F9r8gGdmbTRoPw9C9V6XG5",
  "key9": "2GTAhBKmiFNuuErAJHbavMvVk6E7ico8YhNRmDZUXYmHb1voCaL5KyCJUbdqwYpU4YbP96gsHjCS2tWv48SSSwU8",
  "key10": "5tpmM6pp4e6tjV3RMNiMeUzr5ZnCHZ5U3ALb3d8J2yWikTBURWYQyALL9ZtVskjLUhDzhgQB4PZRwR3nhWbA8oDa",
  "key11": "e95pMVkrrtj9Gy9BWwEHp9VZAbTF6ZqAy4Yaz98vXH9NBKkQGknTkJSsVSNSfVy7rAaAVCSRgjYVQ75UD6fKEe7",
  "key12": "2VeR5BFXmSXcFH2UbnXduAZf7q2189UP2o3R8omPp6vaDQRDXrSBAAZgj73J1y1KttUrdzYoZB2pbMryoLBNJZKh",
  "key13": "26rrGXAohLsvcaR1UPod65C7f2niu2TRHM3buhpUZdiynyBGzhcmBdvGyKZcZBE2vLLaDTZj9BcvL3VYFEvpjp1v",
  "key14": "65LtWQAQYKxJwcXNmUEjBvhij696oYVeZMV2oM1JJsVdMTXFQRjxkrEaHmER8GGymk3361Z2byfHrNoLrCrtNgLj",
  "key15": "5n3ihHgLmtkreZsjUJ6YusQxgMxSV1Bnbg3rhkGccVu7LQikZAv6qRAZk7f9n9XX3HZre8dJLGp3U39jVqjJMFGw",
  "key16": "4xoErCBF6amGPTGMDxuYb7qhTqaT7gUu4sBsDuPeyZLWFMQpHr2DPQhW5xJvvhEXA7pVXpv3Zg4rJskiBpT41X7p",
  "key17": "4LCEm4g1V6iXGNYAcJTed8zBb1X9s25CPVQof5GNxXXH7MriqR2Bw7LkciAMTWrkoc4F6ACivAwfDHr7NLdoFxSn",
  "key18": "4ciA1R5Pcg3AYux5wSMi5wr7X1QjU4LiyvgT5jkNicWzyAPFSKdXNXehkPJ9HZ27UhEVZbtHDm2qGFddarqfdBoh",
  "key19": "2rhrvHePZM7WK6CzR3mTwjmtXHq27jNyZPMqQiZV87Tyji5KQdyFErPdjrqLFrNeEUmqtKPGjkmogkEU4Djegx8o",
  "key20": "4uw3GESCrPC4u7BSWVNNHQtzMQcDZjBa89rnE9629reVcLHSiLd8iEuNysTjUmKwYAr9f76frLXz7jDE6nzA6asU",
  "key21": "5UaGutgi3MfrxPuV4CdSia325iUW8LHdFnyRQFpQDsLuArx2168DNX2UrvqZ6BSJ8sbDakH5HV67k5jPmAp264Up",
  "key22": "Vua92oTe4veDX2LbFhYoBniqmngJiZ5Q2VF5bvuzwMs4m6fEjEYAEGPxYSBxefxPsjWEEqqGKXFRkhs8FwDEirV",
  "key23": "5g9uteATCmdMGtnHKumDimQBz3XHe5uNtjFRkBMH4XKYcD3V9u9WFKSh1DcXUo7dexohcnE9gAZ7nwJuM7rytCCP",
  "key24": "3Lt53Jqr4WGesASdkYvaiyruTghhp63gSDqzDipGvEJAZwmn4oDYnMWC4mgb1ZAuMo2UWdTTaJ2GWsYBjiw4DrTm",
  "key25": "2EhSTd4mXUGfzJzbGv2aj97N27WxCFWkGtXUc8fdCqC6xJfFuTZ49qEdL6uA5rUsDpTSPSJhBK2wroTvX3tdRD6i",
  "key26": "hjKzPuceJS5GJayDZBiQgyGmetV4WjHJzYvmCGPTLFQZqgc8pgr6y6v3JU7vixBzUXA7e77jz4gfhXMGymhQN4u",
  "key27": "66HjHSRdew3RbEJJ9Tth68ozf1genA1ZyQQTcH7v9t9QAgeba2nGPdpvyM1YwSJmEeTGkUi5PR8DKe8yGDZfJhrE",
  "key28": "5bYZosjxRxy877hGKdtpyaNwHWSPssLJL4NmHp8QB6fHum6tYn5Z7VmqN5XS8EHAGHGpeAYJMczRuhV4GdsLJFvR",
  "key29": "5dpmuiveak6NJKYu5fMu2BV26UbAjzWghoXnTEakSWmuNWdUPBqSHX7eJNeaF7rV7G8aZ3dbQ29kS3SP4X24QvH9",
  "key30": "AG4w7bRaWMxdxUvzHEcN9XTk7PGWZMv2eA5UJdfVmcbPUjww3RkSHhrChXcLeCVUsCy7wYtD1hRYUrzVuVSbae1",
  "key31": "5FUWbqAY72fm71v6oGrCoNXfJRPKGrfnyWLvj5oE9q1F6rw8uGcUwiwtUFDiLCpgK4kfq3y3vptpyfi2i2JAMmfv",
  "key32": "3L5mgEAKDrsBTmqjPVGZfjoCkL8ruXFuFqf6rRTVBU3oMt3Db6mNXwT8rV8rRvE8s6J4Uh7RsdzLEbTre8FUf9ee",
  "key33": "3GRePM5mLqazfRdGFCoT8R8YSZVwdHzZEcL8AvPNMYTvc4CnXDw2zbQuDCM4c1UWFbnxEK4Y78MBkSKtkpYRuSr8",
  "key34": "31VQPyXbCGVZseRhUnS7Sk2yUrFrE23Lm2u3pt1KZbBh1NmYLtBTu3zEqbVSeBLGV3n1n6ojPCX6cMfA5MEamsAo",
  "key35": "55NePV5EgJwFYskqSaE6hTbb4ENuqHduyCf5137gr3jmFKE7occ1otidC3RUztgAXuor57jq2R4ggqvKykdEhVrk",
  "key36": "3NzuZcvHupjGnoXCvuMzGpNvjeN24aMBTygCPvf7d5L8612hiZ2VD5DtzNY5qJuzUhHkwxqYk9hMT5adqUQcQP3S",
  "key37": "5MocsX4SBPvd9LqydsUCzvDXZkYL8amFnHdTa2WkDSMCaVnRwMas8nq6pHKApXaCGrDLGVnf9uw4XaVEB5Z3TGS4",
  "key38": "2yhHC3YEiiDinvxFy1ANPTDBsStQybLgS2moBEVQv3D79UdEe9ipS6sW37KfWHwokKDJ7Ao6Q7siRAawy1FLB4ZB",
  "key39": "2Ccba6DhnsJqkCfq5xqRwV2yFvyaYKDA1XA8zYcue3DeMcfqdk1NVxEt56Tyi7TJj9zUgQqB6b4MRRwxhtmJFG6y"
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
