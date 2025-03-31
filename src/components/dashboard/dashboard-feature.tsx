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
    "3QfpeRnuaQ3SoT5TdyHDUhWKY3UvYqeChmeAe5TSxU4e2LAdaEV4tBVYJpRmvHS1tSixaTmJXjhcctBFeGSG9pGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2exTDdyFx4ePvexKLJjs5KF1BjkkkF3usNNC558KzrDRanDBKZFbz5rEuoCJ8LT6EDUhGKvypiwFuyQ1YqaLuAmd",
  "key1": "5fSS1h78gR2FrejwwwudmAph5UaHTEnxHJaaL4LmV5CgP4bDzfnxKS5s3igxJFmgfqSDJYvBGMKF94Be2B4bQiBg",
  "key2": "3aE5osJbvxgTUKWmRf3WUudP8RjRZX93Ft6g51YMMipbw4JZf7327kdjfbifpxsPjRn7oxDonbEgd5an8G6WS9vP",
  "key3": "utUoaEUuaUsoFuxrvSHKC1SHkMKBwWaDdkF7UPZp9UAF87AEKU1KSLo43TLuiegenJ67MB5q5kAqSV3fVYgY3YC",
  "key4": "2V1wjJnEXfzTX5ys9UZc17q8omsQ781ACfwDFTEoQYWGuLDPq6XQKJ1Kds89xC8kwiDLBDjodSYNYfjubsMveutG",
  "key5": "5Yt4GG8ta1cThBtNSV9uMiBqPSz9tQwkvg5FXriRU7v533pTZPp99CsCcweR8YLvtYKuaHMqU8vGVXASnbKyrmcd",
  "key6": "2ijDgGYhXn1SJ5S6qVJnp9cHiMBHDK1mbJxfQ7sqQ2Q7riRmjnnyQ54BPhhuv6tKwhLDspdrurwmcyqnm4cGfA6k",
  "key7": "2zwqYf4NnWQkNKUsD5ynBdgNrgx6Ltpa9ZqjGga4B8A7rAJXQjwEBqBpt7os12HgyDgB3qf2U9YEVUhpSgQP1N8y",
  "key8": "5SX9WJpqfF7C59yXuTp9YZi33K3D7v91fTXdZTynPL1q9om3xgCxDFsrVJh21qewU14U2tqSoWGxnLd83cNGm3b",
  "key9": "3JdyAM58dpAdLzLopRijBfqPUdZk9Se4xMTtKrHVv1y1EMegqjGuxhjv94Dn4WFRt2nvZ12fyyYXRojdW4aDYPHz",
  "key10": "5yrMhQw1Q22h83Wyie9pN4oZskgvf52sAhCHBwgfxixfgBJqvqrCBDgCDY2iu7LNFmFYuLAu76xqGh6agj7N3e3R",
  "key11": "SW1RmgRRQsrpUuEjxc2QHFnLv3Lxb4GqbQvRZkGi9awbboYudYgJrtmGtqePJ4TjBff8ui6HVT3xYTa9GbWJAQv",
  "key12": "JTQXK7TJgwdNngjZJJHCV2qsoZupF48drSusPe7ZF4QeqimD5pwatmSthTj9v1Ka5qtrJBv76x51DsHqw4nV2Gb",
  "key13": "3Y3qnwEKkhMcuCJW9AKXDB39RzCcdeLEvVvkFxmR5JG98FTUNV1zTqj9EQLpJkrmJApNmvuaoxgfz67LY6QtkfuM",
  "key14": "23MxUYoSA2c1nWpQZdjkpGJzttSkqLif9h2pd6KujCJaSVGXKAi3mtNqVT21NJrBfUCjbRUzEYfbaJHamiMSwoML",
  "key15": "671sBbJ3pQMjGWgjtt3DdJHAt882XG66FsmX9khBgasqGaMKS8Tcu3d5ZXLEv6CmgmhMiaBRNmxSpoWbUgUk2NBa",
  "key16": "3ubFWY4hHW4paFgSkXpHVqJinahKkW8F2XnHH8ixf3sZBdrCvFRdbeomvRhu2PhvsYt8ppQaXMpJhPxJhg1rc5VF",
  "key17": "JxtSxryoagEsZDpevPbZE17JnjVHJmHgvFZgqnFBmn7Wdb4ZBn5NYi6GcxLD4u27MUoR4sf4hWcsDV3qVShd3md",
  "key18": "2L48LA8q1PPCG3KiaAUWN5yHEvi8JzBagh5saW57phP9mKvrkNHBpmuUJCXNbJJPpGSg8uE69m575Z88AetVGQFv",
  "key19": "61nWvJjpJmaCdGnzRxpNjBFrQVu4rZHRBdhC44CyrTP4y5GtfFvB453hiTsQPcZShNyaXsU1Jb7ZNF7vby8xdFjZ",
  "key20": "3it2XC9J8E1cQE1Mj2yLB8uY5UFD85uUM1oHHrkuy4ie7nXcz2w6wxUNdTN4se7ppuL7BCmFGhnoEuhgk9HVn4cb",
  "key21": "3uGgKd1QFCsXmx9g854kr83G5Y1Jf1bjuy8fpofzUuqymd9SDR2qb5h2n94XN7zTqm8F4chvDiCtSqc7kd6oeNhj",
  "key22": "3jFjhjasq9DeGJsK9Er4qJtKdpkdk8tEZBJoXhenVupW6TdTBcN4dWtK55y8pGeMf8uFDi33WDsGuGs2TeJJGmnb",
  "key23": "3hCM8XnytooXsQMP4cNqUJJeuPFdiqLkmxoAMeQtinirr8yY4tnZrdsUUS4VL1Yxcez5HwamoHwTWyXVCqF4NUpV",
  "key24": "39TxByENha7dvoL4QWxHgbPTFTPQfKB2mVggfCehCtedugY8PxWwALx4W2aQiTavzCnv5KyruCeNEod16pZ8bS8X",
  "key25": "rgu7Qd1u7rQz5mHiaWm8jE4eFw8sjxarHAP3ryBd2epeepRyDa2tV4e8LZuCmp1xWRAq5BZ573XQPpkoRmnVAao",
  "key26": "UjgLxYaEScUwsbHGK3HLveZtAcbW1UG9yDPVpjaSVqXo2r579C792UHwVLN2TR7hShq9JNr79a6ybvakNp32nfL",
  "key27": "3x4xHsFejB5dJrQm9tUoG7gjiBKRQFjG8gPS6tqti7h6FDWdNr6REW4v5rR9hpEYh6UcPdexwur5MzkXkugp8biE",
  "key28": "5V98NJks5qRqLRUcspJMJoWQ1UkBoUoRF7Tc83GBX6NRrE8abXH5TSuE444DhBXEhU9JcMf5YeJv5S1dZgHdVabV",
  "key29": "2iw7nZJm1QbJxjz4ov4jEr3vcL9zdWBkpap3w4FgtX69FtkKpPQwvZuKHF6SyJRLDxEy3ktKcDVyjDhic2Zw9fqt",
  "key30": "5J8kBMPEo5FAUvJsBEvFeUApbF7TXmDbxD4pJGdFciWcSQGBZoeQ4K1ErsVSrvZT6rMpqn4T8zHTGDg3pVpDPsyd",
  "key31": "33ZcfhiQW82a86pBxv45JbVcpx5axmQq6f4v43pdwqAyHKUFJ2bGK2pzEZP4NUMKFKM9VJDGnkDTwGAATj1nt4v",
  "key32": "yn5iD6BFuFzqfXLkKfxEuW4aumwYyDxzcWBWH5ejYQYAfN3tkwYuAVHHiC6ZpEeHx7zyxMVSexBv8B8jSRmAKui",
  "key33": "ZCeyuvCqZQttSqi7dM9QsmFXEughyVay2uLV4zhsojG8bUrZ29acRLFCfE8eakTav9kLfc58atQEPQ3Mmk6uqpc",
  "key34": "2LhVdTC2gL6kp93pkqhTYU7Rb1iHFAWkCGJLZzHgS8XEJneKEoUeUYRQZT5851Ey1sYW7omf9CxoG7YUex8Lruuf",
  "key35": "5U3NfAT92xVjxPeMcQX5zAQPsb7kzibn7pssmQeoynBNDhn637uppDxZtHKPB5YXR9muAaenjKAK7nKFU6T1GYd9",
  "key36": "4Cv3AYd5XWwKKZjd1qxy6ziNmPBsH5hgn4VbMTd5ZE72Ji2AV5RFe6wDB2n6PFWbvUpUZ8CwrdrPmKVhcMXYncJn"
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
