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
    "PpA4EnDFbD2sVvyb6uT5kEENKukvL4fkhn6ky4FNC2Xnfs9Ng5HqW42VcXXPJhxu5dMp2HDi1SCAGp3Pu2vJHqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBzXBMdTvWzEnCuZUoRttuXxaYap4Yj9tTEdmvTsWsWSUz2sQXzRMJFwwfrwBLCA3gYaAX18WbPgPUfgprhhdEp",
  "key1": "5fYRSetbsykbhKJcn11HZouytus5TPBcsVihWkhYNQTV51AGDpMxia2GuCc4ycgzYfiqFr2DCyBrjaXUx2TgsC4E",
  "key2": "3DywX4XnncV1TxwHBgzL35hHsPqvKHr5K8CRHxYrNKmtv2NQymMApaCTion9v9NYSsYUqU2417gTHUELGys8iN1M",
  "key3": "3C68Tacuu6VkLiUBJFzN5nVXRHFjYzmK3Bh8FGchZMUH7JtcoC2em9AtcdzqYfAngd7LbKqnfBtv4kxGEkisNMP8",
  "key4": "LYQ7X1oHV6AUypPBTZDw9gsmMJoQ6ykMGSUH4McvvVBPTJa3hVBvSN8hE6ZyF6He75iVTYjLUnvRSfSK2dcn93g",
  "key5": "MuQL8CxsdpTLNHCVJYd5sYfgbMAe3GbExDkKNSTiXs4VG16Rj3jYc6JoQZNiEmLWV1uwxqw5UZLqkqFgF6xBTkP",
  "key6": "peSebZY8zyxMJuR1RUwGwjNVdokiWWSyNtL3T48dXjJmzCwDsBfwohzk5bKZ1XbTbi7WhTmNmSfTthukcxqGRdV",
  "key7": "9D86KaLfG2agCuXzUb8X7qRrP6mpHuSTHenE7BxbpbcMQmyaBoUZ5q1g7UbP8ZF8Ptt6JHrKmNhrk5UZu8tAcPr",
  "key8": "3f3faZJmA531npNWE5jsT2DmmWnee1qqCgfFo5KgnkFVNf2NHHxtxGbj7hHKJ6KZdDhyEpxWcS7UMLXxk6HTusVc",
  "key9": "2gHUhHQMQHfP17UXiHT6o6SbaTp7zZuEZ3hFpwXkY8FxpxLf6pR7LfT6qZXmixrXeJUKijRj9tu8eB6vRYTsyGET",
  "key10": "4BHGxUgLq8unzdACJjGr1zBJHixJ7JYbYdbRipi9z2T81aWTyj2nTfQVkB8CAAckrUPYqPKrasFu9A8qzgzNET1K",
  "key11": "2TJmSaqT4xw5G5RfjBwprbhKxtf2UmpZkN6sL1GDGoGZqL5SASWHCkrvrBRgwUtZzToichjuXNCLpqnPfAqaTBAG",
  "key12": "3pJVLq9wKWCdqS4nF1M538NmzUMEoVRrMmSqncr9MLyabcHrnHRFmyRKwuVP8nK2zLG57EzraHYXJ7xjrbopjcji",
  "key13": "3jRYFwJVPT8cLHEEMft14UBXGFAgptDfjM8MDA293f2byxmeuYSCs7KgMKpvnso6JrWYw7w1XKv3z7JWHVBq8Xo4",
  "key14": "ky8avfwVW4KJKfU3qe23MwU7bNjzKAAQLrE9W6rbyB7E2SdzmSYncDQG8UNPexAsukTSzBx6UWZxQuj2UcsxpkB",
  "key15": "5DXq53tdFRQFA8oH2K9b4hpugq4M5XUp2qtRe4i2XETz7E6AWvNkvTBfb1fjzv22Wg1xoXVp6qEanikwnzPSYzmi",
  "key16": "5mx6yMfQtTnAH8i8h6zw637MeGr4dSaLAZ818FGRLyGapPyjUqFiYixUoHvC1AvzpKLCq1FSmvdea7pTZrK79CyC",
  "key17": "Sq2masfxYvAXjWNdQ5jmkJistALfJXDFrL137s1iEvptxUbeuKMr7yFaiMiZHAHb8ir7YEetibcK7vsk3xoZ56C",
  "key18": "5MnHitFhgnBJvDeT8aTCCKJ9z3ML3r7JsGdh3y686bsJtSz1FMLuDdhJbzAd8VFxkQLaCcB41aNLxjXDKF2qkFnH",
  "key19": "5eb8WVk38YDyqX4s7aQK6zfpjcNn4kmjFTHi4UcaD4Fv6p8hJ3R87ZNkihrmnzZejQeSU4JGJBaCkNQ4SrKUdLaJ",
  "key20": "2TqDZM8kEbQYJDgvLV2BdzkkNZdfh9Czbr8wEojdQCEeds7Zm9JrScDG5GaYVtw7V5zQoM1JjhodEE3arUvBegd3",
  "key21": "5HmXzvpPdBTv7p1f2uBWg8XrciqGW51j3YXBrm3DfdzSHRJsHskXLqNfWx5hCMRpZgP8gSer3gdQWczVRu5JX7iy",
  "key22": "3U6RLaG3eeBuF74ru65vMiZAgpSs9YVkxNRM2AxPLJVcoDDmFmWt4SQzFP7a372sX1DwuGRLg1Zpc9gZx1342WhA",
  "key23": "4S3jgk6YgYWLTKY5aHCjq4VSMzvQB9cud1YQjqLvvJvL969icLkJd2zZEbcyQMWVjDkA68gii3Ndn7sGthJRtVtF",
  "key24": "3Die52nnBEFDNxeGD6KSpeS8et3vW183brHkY1HWygqaQGgPXjvU45obF5jQd3S94KiVU6Bv5dtyqzqtu27YrQce",
  "key25": "2ASTdm626jbmxGAfxhXneQqdP719iC4AyKCeHqEmURgvsemDgUEd5TGC52unVdNwt3uL38iAVZz6zj8nsFfNPAhB",
  "key26": "4YCN3sCrtX5iHStNMgRjFkZWH8Uj9DTMTuWzqHhpkgcTd85zDBkXmCvYw6zEbdYcFgiU1KRTQDE4sYM3XGqJP7zK",
  "key27": "3bw1gAHxGG4YstQjR65swYXvXpUvmsXkSs98pRqhPsA1yrj34HQP2YHfzrLtdVVHuxyTK9aRMnmkXe76xxWsHXsN",
  "key28": "29Ga8NzXbH3q68s6VTRgD9FNtDvdNu4JKdEoUSoDZWYWMLhxUU4kWkrQv5NgYcS3J7B4CNix9BbADRypw1eajkt8",
  "key29": "8CWCkryrwxha6cUBfUjw1oFzcSuw9NBhc67jw66RhDhHS3nzffy6X63MbBjE5Q5xfz83Zxw8pP1tmqdhLedSgvN",
  "key30": "2er5D6aXBzpSJnjwAHj5u6gVHKvkSQsF9QEuKTeyaHWFxdxfJwV7UQRLTaFy1mmZod3E8K36qrdSj6kY1Xk6oGUV",
  "key31": "jgHS5Y1NFRC4gXreU22GdejxCmk8sUN8m3ENVTPeKVpdwGdCXD9Znv5RiaNFBo4EXrzPzLXNsWjrN82EFRAF1ex"
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
