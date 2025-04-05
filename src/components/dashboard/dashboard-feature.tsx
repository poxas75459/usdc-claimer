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
    "631RuTWourcH7rVZ6Q335Zbk1Fwtkkp2g1RxwdjcBGFnFDfvazzyZsQRNLRczrNMFVdRia8DUYPgoEofzkk6PSzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eewuRJhMUWhtSKVfJJd12tKGh2y7AeMbLQGXt1WwGK4JWybC82H4yNjMqCxYajWXThBWQFG6n4JVbJsmeCdpxF2",
  "key1": "3UBKBPydE9Y2FDF7ji7ZJo5AbpcNGYqws1NnU2Bz8CoiamzKcXDE1osaLCYu5ruutLHibNNkhHrc8MvXiDL2bqFk",
  "key2": "4goNE5U9YhbKg3MZDGCH3s6ktSXP96iW3VzuqYHmoNqNGCTygf3CWv1cQN4GdCH7yryd3ieLa1QdtK63Mgqg8SJM",
  "key3": "jhkc8peqDopWCrSMAsuPeo3ovCyBnVhdLHjeuvp65mPYWZJgZLxDtxiNY7a9yhyreSy6G58RYMuGjx5Lu4uBV9D",
  "key4": "3QVWboPW4EBnaomsBEXZQpxa3Vh5o6JizmGVmdsb9WRo6FJWbrDVz3ZhMJMppbSYrNrLPTUvKX6UqwwpJ2yxPoDe",
  "key5": "swdLMGBAKRWE4psrcWbEa1aajTCz63uV51Ja12itqYzNoZatXDr6iATreXatmRy62cQJcQ5LUcbsrYYzAwHHPBB",
  "key6": "5VQ3xPdBZm43sgF9qeDK8aS9g6JRzw6Yk8HC7o3j7wwVXWX3HdCoVHpV9Mkzdxis1Rc9RR7wjPWz8zcRwwdRS5Ac",
  "key7": "BovmU2wuYDiADeoUrkmbiQiVfCaugTQXF28kuzSQFxjFJTaPCa6wDEDdwMGMZuxZz2W1wWkqRptSiTmUWVMascH",
  "key8": "4t13t7oXcoqjajNQEbidbhWSPsdiQD87ZM4uoQTwzGogSjhJXQXiAmUpC9ozMZs3vRAhcwy9HD22ZWfZZetXDfX5",
  "key9": "4fVC8aUXXMgSqr8Vfsv1AV7iKUqXKZ1rJmEbKT3m23i617rSm9JXARVxb1VD287w7ekyxWdsRXjPKM3dQfmenphN",
  "key10": "cJfffh2gWqD8Dx6c84Du6e3PHxUmNv9Np448ZiJJmnsZ8mQUb8UZv7sBT2xVVdXTbSZsshqJGnPpLmNuEswGi8y",
  "key11": "3W57QMLebrBWZUSkPWj913Qt6VpRYsips8T31AhftLMuL3ht7YFxQQqc6erhn2MHCrPAVgUH62Vxaf3o9rWQaNHm",
  "key12": "5Mq2Z6GkqE4aGmEpjy1Ur3V8vgQQGJAKCMnEnMNHqrHLzn82D4RpPE43KJxJTfbt83qR3vocRm5bsM2T23JUS4M3",
  "key13": "3zb73CWWjozaYTxqxH5j7DeSGUvdJoYkaAA5mWQCkBk1ASFv9ERSjTTPLB2KnHucDgqHtSbxTxZY52PRfRK1AoDH",
  "key14": "5eJvTK3AFwZMCww9r5DJTgm9n3ghvvSsiitSzuPm1WLKjAMMeE9hRXSoDJL7sMTXf4bCcSMQMVbEXSRgH9QYVcEY",
  "key15": "2xfDBzzuj3bUgxyuovz7moumYiDvWzCGkmutXyex1ZyW39GivPujvhtdeVGHDHCgrLLQkkJdN7nVXbDEi4zgYxB2",
  "key16": "4HnsfQnqirMz1VVFcjpUpGyGar6XHeT6XUtAVHXN1Uo5vaU515xZuDuVz7ngJGRNxxHKimkyP6XoutRy31Q9Pvi3",
  "key17": "44ukvCEMGREVaoX4HGndCmeob4BTR68pQEXTxaXK5Sp3XrBs9akQKfGvxShhqRsWoFjXJHMj9E5Ni7qj8qKFPtQr",
  "key18": "24XuHLdoSjzLW4NhdkEyXwegjbpYfztsgQ6q1ivsA7iGthnKgdYYJJR7TLJ5obpBRorRBVYog9beizpyzYiA9quu",
  "key19": "3paaosHrpLwhkqMSpDd1ZvktZvLXNWXRgspu3E1MX4fFu4RjbeZPtLMPzRGFyA9iuf5W2TWUcqzAwzqGqV42NTCK",
  "key20": "2rwhsWX8X7L664Dh1ZtdFdpgt9gNH5PH47nRw47HrtTi5sDTZFmSE1347qk1FTMukHW1jjrea6KDxJ1uhviS8voX",
  "key21": "5ZmvB1CZyb3BhFTUz5Zu1n2x1UrmQdpeeJfTYTaCUoTsXjdDNbEMSarWk89zWrniSUp6CtAGqSbxNRPn5E85TKBH",
  "key22": "4v57MfncAKme4Qi8MK7huL4n8abcQjLmjB3ss85eYGbmjygY7YHB7KXxdm8Gv5e5LZebvYU4Zth6yV4kvo5da5fz",
  "key23": "4N7PGTXxesBGYWe8oKXBTxpBJ4NgoJt3GdMAWWNJxyySJu8Fq4QhYjiKqfnxLFtuk9EykMqeUpR3GZzn5Ts9iPCz",
  "key24": "5SuRZqWuenfFZSHd5NCnS91L9nbgLmdGC2za43bwvYcUVpvamwJXPQYuLxKJrbzDBgbnKTcXYFxNtvmHQ6URSucW",
  "key25": "41y1PJvnc9njFac8dc7RQg5cMVkGRcoSSy8ojkuYJeHaGffLtdb8TQPGwQZZ8q55gbvBBZ8gMEmcfTv14342JNGd",
  "key26": "4BQpySeC6dPTv4GMCY7wVtzTWLGBmeCi5mTr2y9s8hEcYuNEtP82zRrV9ErLingGc5X95CvbqHhEPpE63ST3MV3w",
  "key27": "4UoXyiwdX2CK8cuwFYy3FkPVbj1URoSUKoAACiGUgXu61cdNzGC9hZe3jpSnEZTceKAwcGHX1DbRaSjKaAdZEHC4",
  "key28": "64ymjuER84VjCLexdhnoiLSwRmu5wcpKrt6WhVoqFLkTHcnUMhqgA5GLYofNPNbb4uRcvoczKSuHvrg1aqFwTWF",
  "key29": "49GuHzrkXJzV5D2yAQQwXKpsNAjrDzakcP4JYHF8CtkzE9kxZxwvw7oLjJhK5i56b5fRLJgJFvjepePWWrCFhgcL",
  "key30": "VVTEyMs82btQuZQMbLoAGHHxYycPN4hQasCVYmqQ2Y483Qtp7aE4QPSLtBzHoweY6o137H68q8NCWjUY54vDuwC",
  "key31": "3aYd8HprMtQzTfSmq37KsP3HLmUcUsygn43XNUPtzyLmromB9Keov4dh3ougaHpa8VWQmNKb1TxEMTNy3YyAjWou",
  "key32": "3BjKdkoEj9fFSCmZkDRHWPQiJSisZHJGd5eqZXt2e9HYeef9HxPWy2HfkRdFUxkXw6wS8nCsjsKngaUcWtxghvqa",
  "key33": "23cAdVjwr4UvB4Px59Ea99zESxWY7igwqZEnvnbKUCCv9Le1s9fgaJMuKzqqBmBJ26MmVpgDfYvu4qBSos9oyeb7",
  "key34": "5i21FtLKkeG6uo9L2yBGMisr9FE2qL8Xmvn2xwxzJ8Y4Fe7JbQgzseRwvF1zGktRgkaamSPQDgm58t2ZvJv6ruUu",
  "key35": "47v2CBVWzn8hndasxnepmpeurGuAARtGF9uZGyc6aiDydmGBQz2KZvf1UvSaMMfYnL4LnQkDaVY6q1oojPd7k5MM",
  "key36": "2zuQkBoGqQf7hh3ZRN7ZXqnC1pP2YrBcKEixH7ccFBhWkgPuJwmZBJxaSxtu4hdC2fZF3mJ74fZox9RZrbs8BvQD",
  "key37": "Qjkjuitn4xyvF23jTAo17MdS4oK5mwZ8ZhLHnpLgeGSJSLuE7nv71CgFVug4akVZq6QCnYnFEXRA5MGv5Sjto9h",
  "key38": "3pQyd3bG3F3E8ts8WrkJjzQYo73tufzXoaiQQLmWtWV6RifLXry9Q7afk6326KoHdjYEmRwt1H6NMKk7C1n3jDfJ"
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
