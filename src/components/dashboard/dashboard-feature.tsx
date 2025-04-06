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
    "3rn6XZeBCaDoZovMecrhVEv79bjrmEPrJu6u63nUMcRt76kJf7bYScgG9kPjsKekL6kfsqPrcveUHqsGNEd86UJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bzennq5RmBJNYegcF2Xz1Bkjbzu2tkKQaQ5U5NMRz7jEp8jfkiZ5KgmQkE3BvXz7KYMaeqt44jXkMuthnBSYZbL",
  "key1": "4qwMbSBB1Nvch95KP5kJFSkp89Drb7ib1gtwmEdnB7PXCmgsEWRwDqqjXFkHzY1VMwQXzR2x9piWLTJxSaLz7uLz",
  "key2": "4uiyAwgYz3hgtdFZo7uCuXqd82gmLjh4sWrjqChhZf2sTKiMYxMyd3oNr9wrNvMePzQ8rMvPrwjVSy57jK9nhj4u",
  "key3": "HyKdadg2BKkbrr6NdJvvS5rLXRHWfxTjwRefpX2dhcMiDT9jVaSLtqAPJYZfcsNUtqmKZzG9W6CCzQ6pJPsgLco",
  "key4": "dN3vaKDFmq3cCybFR1kgS4xYGncAuhMnereUkYtHdc5ze7vPJH2SMEWCCyjUWhLfZi1VpvDN4QgophpP4hYn4En",
  "key5": "2JFqbc34XQFr3hjkHhhj28QA5Hqn559NXLYx6ZpzCzh2jMqBhgd9kUn9fbEdwpB89cjkAA2h59QrYTmDAgTeQ9eM",
  "key6": "3rfm8tqiUEZf6Q1pLGmshkauf4CvKQ1nBox6JYa2CFhQEdS8Vvapa42fZ6s8ZawpZUkmUEzR5RsoExGo6ULS9mUB",
  "key7": "rxG7zgi4bPw4zSS3vpFdVTmvByGA51RAyPrptqgxH8qkDddcDYCsZ7mTTtBtULjogZecKd5tGJedhcSCm6zKbHq",
  "key8": "LKJTDYPWbxDw1uS7S2sFB6LaSSVCZj7EkGFHSSW5wH5isUxsGLCmF7wTohNEKpREBsYKfxTRXTUrkDezezA6sKN",
  "key9": "67Sq6M6Weji8XufXRpvM8KgV17S7uhbr538xUuDZKYnfoR9gXgVt6LrAisgDbMQEpGfADZRLUuwCPR6AyoqyfQXC",
  "key10": "4fFJ4ZHviN3Ek2mj78qK36QBBewxyJWPGDtgAwiaQBXAFR3LFxhVPCDsxBjdKt8Bqb2NNYXbwgMdzPJ5MdCQjnFe",
  "key11": "PD7BvA3Z6FxitsQpg5i3BBNXXUTzChM4U4MW5vCqz4zuBQzWTCTAt8h1sgeRxHsjiYAqGNTZyp8EwJsedEFmXVR",
  "key12": "4RkwKfNwCSwL34UXtmCAKWYN8i9gWcyUstXm3umyqg79cEnBPfYJGC5TN1tNdGm5b9W4TvmJqnTBxXVj2bZrscnQ",
  "key13": "2vrWjMBSvCn6R5RStFdbKXonxzLZ82eGPBUJ7hqnRygd71wQf1dv7iwyxxSpWK1vbLiP8podm4xm73FjKWNTJT3P",
  "key14": "W1aWgT6VN9MbMmoLfDuwLFgDFtWCNL1hDJM4ULWYovVw5WqPrH6ErsgmmvqwCcyXMb5PRyq8J8bD377GkpDPuNY",
  "key15": "2w5UzXNDi9c1SaepB2ajJkUxP6EANAgFtJHV6hwdjWWY9gQ4RfP63iuQwZMaPpoxAFEXSKZA7pgby7fboFaRRfJy",
  "key16": "2XNuKsH4M8FwqztMp1LS5rQngnktzuLCLbwJ4mSyqDv5gt4pgiQGHheTuY7TdDFApVuN3jvJBPQhZsvBkzvPkR5j",
  "key17": "4Tn8HLn8V9wEkzCavaoaZkBBZf8R4s2z4FMiqL3e9QN2gFqNydTL6kcn1UZLimwofPSc9VhmrRVuVEpDWV1rQQFN",
  "key18": "5q63Fe6tQytTu68vj7MDMsRTMmToo42tRLdbTL4xmLyNxPqnpALJRyY4K8Ur6LRVKcyTfaPmPE162ABxwZL7KFRa",
  "key19": "5kUii3fM4HEP7ugmSGCF2RwJRuHB6Si4YdUw2k88kWkckZmUCW9PHrkFyxSRmVCuTG8ZWFb5dtDxV96HKMzeaeLH",
  "key20": "3kq8r64Kd3Xq2gBvFopSdZ13t3QtFFhf7g3j5p5KRAaFfzrV5n5EWwLLDUabfqQYmfpumgWxEp7NB8yssqABd43t",
  "key21": "wkskGehKBPwK7J3iQqtbDZA7TJ5bjrksL61Z8BHazB6FoLnnrHUmYCJZurdJ8yqeYgmHaooqtiafKRHQty5CTJF",
  "key22": "475htBwAxBw54gyGwHf2ei7f7PY8Peya161jhn3cGASqzGnsAJ8C6rtypUYqwDVAqw4w4TZ6Kxwrb1jWE2hG52Ay",
  "key23": "4rzPmucSQdh4vaGCT6ps1s2XsJrmyvNoMjUq1sjTZLiv5hxmoHNiiHc2ivgT6G7v1BiVNUEsyeYLcsGjWiQiukeV",
  "key24": "2VvsgvwEYiB8SisdJK6bFKWb9XXowcTDyTnoeJLjzABshNhUUd91Mj38W8V3h4tBMCGoNnTEsrgASvr9m2C1vWhH",
  "key25": "4WipQ9qdVUZwqM25apMvqiS27U1eEmXsBSxZ8UQr82z1BgPJKAcD3mN9sFXJPf8cHjfkrhfpiWWHRr9v6uDxJhpF",
  "key26": "Zvz2NqawCMrZH5vmEsuhtGztddhJFgJ7hX5Dxj1gQDpsMjkLrdLuK1k8KxxNcioNkBJnW2M8Zn9vcQY72k8tPjB",
  "key27": "49ntrWZGXu3998rptitrNRuXbXpo7JeGwpXCTCnMbaAAJyCaQcmDP567ePx6v1EHNALpEaokcsUSCgn2HVkvrVfG",
  "key28": "21H4fvtbREbpLCfH7rb1pty1xDvfcRUNp2weRra9LrhaRE3JtJPsnLnWQNvYyGVV9wEUM5udi5pYNSY7RmMDBFf3",
  "key29": "2qhWUDtLtEGQqNF75bmcPBwKPVYUwnex67dbsvRZxHzgqej9pQBu8HUnoQ5r6YqrT1vin5T3z4WeTrSAZJzSB8rW",
  "key30": "3t738S8fgX9C1YzWYtHxE2JQjt3Bv3Y5DcsoBwcFzNPhLBdngTua6RKCXJ1dY3RF5oA6VNxWsfNPTGa5o4GcnHU3",
  "key31": "yVmZw34NBySAV73aHpXTFizF1De9zxUmYivgUa27BSgwTyuXrsxa7xdY8R6MAiJkGwxgE1TaV8HLKFu8SGXpEkL",
  "key32": "PECYwsDu75azYwiSx86GXWyRrz4ZWzBtkGZekP19uxQ38EgZH494jq52i7sLdaQR1Qf2g6132UB5ZN8ocwQWCQN",
  "key33": "4skpVy2ii3zLPih5Ncu14oLpFE8L36k4DvuSFuU5276kn8HFMBaZLu5v3UXnQJgYNJhpv1XBz61AWmGfxaDE5gYg",
  "key34": "chQayNjsR3pud4qRCK9nvWLhcKaDRQdRE6iVo7uW5pWL6sFssmN2a7m64kYHrqtqBE4GfFxVKx3kEZyvHw9ynTD",
  "key35": "515vzqNmQuMCaB5GWfg3JWRBLhcn5YRzXCycfFy6v7aVNHqcHur1fzBM2wpoeswqJx4rUsAPgR1fMDzLXcomXXTd",
  "key36": "36j2nkS2Yd31qpSYbx7t36eQJSj8MQVLqNzZ8cm7ApGM6KBUi38LBmvbKGaKvYHX9cHLjBy3Pstm1TGkoPtu4VwG",
  "key37": "3J9HCgYFqgBBSkJbuXP316C6fVgc8Zu9xDQr7asKgxHVwpyMinqJipzEcnpk7N4Lmj2hRzWmK3jqBeDZECNRw5P",
  "key38": "5tTzewm7g39M6e7qkjBUykL8Th5Jf7nYsBBjmSMyP4urieNRnLHXFAtMLg3dNKXztmtjD5HEJBCx1kHmyYF1ctZF",
  "key39": "j8TKWPaSpK1y7nzUbjaPkceuoeiCnZgWw9BXPVH6M8UsZhhSuRB7TqMStNqWJsUhjK2MPdvqvqN76n6P6BKy5C1",
  "key40": "Cbq41ZnpYUWveRBg5rjwuJ5JJEPaPqLj9s9UFGoiAn3fMMaF34mW2XQsYNvGnsZJ3tP88G7Hg69M6BToW8Ez8LW",
  "key41": "4RMx7JSiWcs8ikMMRFVeFE6snVD3yrTyWZjpm5keWUSoYUVDRVukUzRE5gF8EFc5LJcgVUbEaL6cKVuZY6SUr5TR"
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
