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
    "ixrX8yw2D3SKeYnGv8afEtdkmimwFBqs63WUNuUK6jBaqiAy75XosvfEeo3HBmnx87GkHhUKDZBZBWVRDYr7i7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QNLNgsyBzgMWH5FH6siRNgcZ7GjNWjoV34FAbu4jYW8F5T6Yjn1YnveUKDczQ2SNd1t4AXq5eRkoheCohXWtjKU",
  "key1": "64T9RtH8P2iHYsUFGqWvtkDDFKMiAeskMK97ygkkfkQPKb8G55WY3mih2CCyVGgvtteQa1tdeZ2iftZe1Nn4aXfM",
  "key2": "8wuWk3RiMAdmC3LWkv1YgrMWTSEbY1EsjP2429HsEcM5MZvgbrLHaqtDgB7BWAEeEZzkqxa4xyh369fCqkRGS1R",
  "key3": "2cnscprRkwfHibqxjpf4MkeoxQXxMfgvsi86YeNSq7VyHMhTf47we9i9LoSkJ8bGdwVU2CTF2hYF1nfF9m5uEehF",
  "key4": "4YP7goQECFNTTowsqSJjRYVKnGE8LM2dYUQwW95GhptSGGsPjUwPdhiBQ1hpS2Jd4PYNLMUeSKjbzVhytXxEBeWE",
  "key5": "2RkXVH81eA9xzGWcHcAPtA3RS2EMxxNV9e8YbQ3rgyCAzuE4YAh2WAMLAURhKeJKF11yTQkzQTQyGVKP7g16NBw7",
  "key6": "4ubz57kH6Qbk3tkg6peb46omjnTL91SXpjaeka7PkCmEBaun2Vi3i7hKYtieUFRGwM3xo5xBCNgvWSwUjBJU6Su1",
  "key7": "35Mr8qy4KWjyAnsy67D53qYS9N3LQzDgxWUNoMpYjUUio7BNnGxMpzAgCj1oWew8pqALCtSTJeTmJ45qHUMw7Z6g",
  "key8": "3t6VtjWcqDPS16Q3Whj4kUxw9SV1kHtRdoMdLkcenUJSRGD4ByqKaG1HwTy4dLypex6AqnTZrXkA89My4PWU5YrE",
  "key9": "5sqZezUR6owX1MTk8JjqRbs33SJUwerVkj4xpXUkkordczdMwhKT2UqhRq9fXtqCh1TWwb3zThUKLy8JGeWVsKaN",
  "key10": "3PGboeyscQ22JuxegMFzf7JC5mMJEhXYELBSU3y6S5br4Z93a3BPvMQMhvxJn9wgvtFfPEoogSfkBevWuLGmVQZK",
  "key11": "2j4uLvFvfAL2mEY6pi78vcxm2AtUu4eQsijS3DSLAD9XvyMDMdJArH4PumMV8jcAGpYNiVupY8wtUmNYyZ9HjoSh",
  "key12": "4qYqo1wt1fTscazhh8rm2omRRXNtRhaHiQsCizFzGEuSqrBJxYxdrpWKAt9a9eaCwYgwkThBsUckbRHYtyJkCz8g",
  "key13": "5C1QbQ5tRPcRkNP1vuqY2YupfTqdv8RUSrVhpCY976adoyT4YW52pbAWDsDgiLhJy9XT5Z1mUEWuGA8VURB9LR8F",
  "key14": "HPLkcLG9T4KL5DWNW1eWAnJQKiLqArUYrv5qcfAqSEUCUYMauV6Zvg55LZKCWUJY2kvRQLJtcv21kzyUJS5wY4K",
  "key15": "63kJXy9vh68J5E2sWJ1nCWV3RKyz87nSbr6LVhZLREzSoNEW2r7qYqoCzFv1BH3ynEDiGSokVC2tc21UpG3M2wbC",
  "key16": "3YqETs3T7vrtg5LLtVvvc7tAFzEiJkE52fipMCHCvZLv1khSMhaB2CMJUm4YRbHP8Aa7kkjtV4iok9tauPumdNnG",
  "key17": "5jcWxJacSxxerfTYnc4oYo42Jk6Y49NnkNhKnFzVrBSisM51vLFjN5TpxURoXG4u3JhKr2agit19B5ws7QykqJfw",
  "key18": "5h9gNxLdc23SvHMucjyoPi89cXBN7dqamvGY2tkoQDKLieJ4kbA4PZ7HVAPLnRH2EqPZ3keVN7u23VqcHWmPPT5k",
  "key19": "35bQtk9BbA3qzkkXsgurDC9Jr1wztLwsbfc1K2w7fVseuCAFHEngGg28QwLqaeXaVjwj5BvU1nS9wQSGEzmGq1nw",
  "key20": "2cdcWxBsJ6v1f7StyZ1pPhPC2dnWT3VnaHvi6b2bNot1gzdQpjfjBHwVj9qziJZWJyJcHJm63batghvNj7tX4g8o",
  "key21": "5KfhJEMj9sogxkk8C4oxxTf94fbnYgxZ9A1eQvTJqzrf69HshR34TtNGeW8r2VpDSRcCHhEmzgfXLQsaZFq2UYEA",
  "key22": "2rKSEmuWYnaRp52pkV4aAi7U8WPsQ9vq1XdYZTkeJnMnRr2UnWsgV1tgBC8VNLsmWisQ44PBmbdhz3NGZvbW4hkz",
  "key23": "47igvvbtguXs2JfFT56TTF5Qp4aPjLo6UixxdkTiiBgjRxVuuTSAzTRaESAJC5LnY9dnZ6iphXS18FN1za58PYZy",
  "key24": "2NqGGUSsUYkGK1XFmY31TShsty7VxrDRNhoAgWHMyPHUvhU5MHKuYJqBTSKXJwBtu1xLEVGQMMLPShPYRDccBohW",
  "key25": "4g8eakzUeaato2kCy6DAmpzqS6rzkpB8AgLNvcTYGXCSTRXMzEt8QQ5UKgpQjNf32Z4pTN9nDb9BzhQava7uzJHp",
  "key26": "3nwGpdYZU3jPFpZzicqqLgXTNa4cj6bFjA3t6T18vdKzuikYcbxT4vZdSx9n9WkZmqoScB674qhyP7tQh7fhWQRm",
  "key27": "3A1HPxu5TucQ1FYCrBAFr1bLvNJd2hZg1EDCM9Vjt52dhHNRYgrU1v4ofZnF89yX2j3dmLW7e8CAmaUtwKTE3Tdo",
  "key28": "4gahFCVwHbehdHi3tQBsZyCvXiaCMTBM5G2Y3ieVQkRAXxcvR7quoRAZs5A8M3DQwtLbeFUXn4ZFMdR7QD9iPU99",
  "key29": "4EeN814QjbmoPtHM2EC45T5EAoxZoZVppkb6cZ93hrxAWisrjTT5m7B5ziToKzjxJ8JLhezfHmf3LsPwfigYZaW2",
  "key30": "ATbUJ8HNfPJfrSFKxkbTmWMide89rd3H3a7dJqkC4nLWFGwVCbxMaS21cdH6GZD46G4P8ejUambWVayAZhWxvcp"
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
