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
    "4L4Ri226xGXT95HPY9BNWioZY521GDF3yrHChFrdz7mtgSFq6NHFY52U2ctCr7XUmq3GgLdCgCefiowwCAyUSJuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eGdF38PxaxiqFjw2NEhDWkLAoaQ65N8vaGgxMQwdgwtKbpin2sYDjCHU3Td64Cu5J5B2Kt6SNcy15JCXQQXwqc9",
  "key1": "5uypAh9QSQ2MkBSfaMHjdhgY5jjL7emtgARsZwVTVw5rLYzzUfybc5XkQAoxfWzFzsQ8YMefEjZvvL3eAua4grZU",
  "key2": "zRevUpBeCK7G1jvDiXiGFCF7iDPtC3QD8UtBh5ggxTnuiwaJHzrdmXYBonULKVRvpVRxRdxicj43fucTiKsGLaV",
  "key3": "3z7rrFosmcvXsshGuBFW4Mo9fKUDh5XqcPgbj7eujrqd3rQ46SFnSqJrmvgRcqyG6g4T8VAYaZJibsfxJBry5SQh",
  "key4": "5w3N7UpkmjU794CmRfxfLSHsd6z1eQ5Bb3ay4zQWRY9bi1gMau5VxSuYSJj8UeBAVQD4ByNTxAqksSRcqXSzbXw8",
  "key5": "vEQzDX85gRrYjc8eTm8EvfrCoiLyGTND4pZGqP4nWfznyr2rSDbzmM4TanSb2W4yyJkgGDu4ECWXzm95EhnEHNe",
  "key6": "2od2UDkkja4weSYAxyfbmxnpzUayz5WpuhCRrExiLaAhax8ZKp9t3XLz4FJb5YF8uL62XMqBA3nps5kniYJBb1Xu",
  "key7": "4ZiR2VcRaQbJzsCBkhZv8zgMKeokKoP2rK6dJrNC1oJkvvZPTfNyNeVgzKxKzZHQwMGYSqM67nAoVjxnWJKHA9a7",
  "key8": "54BESPdZUqpPUFraKiNuPza5Ckj8EikMfyqiuSdMyXk25zYLssn9DcwTE3K3vETtQc6NxDRjXWQWH6Vvn6gzmPTC",
  "key9": "4Ev1YAFhyfXuvLJTBUDJopffna1feivUFVvadFdDUPAdSBJGiKN2QSghGDx858YEEmXi2yadGifMRUCu6HW8PqjF",
  "key10": "MCtGgs3iZYyaDbVKqTDjGkFugk2ToFWftt5Favb5i9UJF6in61SmEpjDgq7C79BLBxWGxCdZ4bARRk2mEv2JL7d",
  "key11": "5XNumuJQYCiy66LSCNPH2aBxwvgM6WoJq22KbFewSyH8sdgqSyywgt5Q4caq9fq6LCfih1PWt6XzeZ2wnn8VjS47",
  "key12": "27dtJ6BGZ16KdpeSBcknqkpwJ9SpmTrig98By44bChCjpM5QySUrT1nfLZRTCNR2TcCykL66hUZttGU8ZQ7QBFeJ",
  "key13": "3eUPisNpWhh3wKMPg4kdYcw8fZya642Cy9QRsB61um6BWbso6DFnqVtFrzKFqLVEFoNtGEhSFPFiqxpA3EfsiDfh",
  "key14": "qSsxeb2TR4AZg5okgXXL1JeXz76SyN3tmA9AvgeBbxGtFCKnhV8N3TthGRQx22fdfEvFdHjyXoASSBDRRvqfvUx",
  "key15": "5LWNDqyntkecwGEhsu4rSEBtBVcLDw1kZ3FMrSnSU6HBZHnQ55jBd5Pbh4uJXkZvyea6n1Vu8cmntAceRuQga2xc",
  "key16": "ZUswtEJ3QXRe6VsSgHLrwj4VN8c6xPLwyhFMwJZ9CoCSpv4nAp7MyruSLQ9qWMvCc4TQQSpTXYaGvquiTRqx83C",
  "key17": "39cvrZEYuZP1Q8eEN7hbd8J9rUoQ3W1mfADYDfrYhcqtLxm1sASEq9mGPSkW6NUpQVSfie88BAeN9pGNDuD7Bhq2",
  "key18": "5CwKDnJYPKyKGbYsZECrqwuXnLuedM9CKvgUk4HJvTJHKroRDHo1j1Sjb5xZeyAUdw3M1Kd271YTYcUVotMAZbt6",
  "key19": "2ABAS2b7CNb6x9YzTxWwbe1RYR3KuEdxEcY8ThaKgdcsgAatpyFvXEEkcxEcp3BKdLrZbkHL3vrbmTrLdB8zUu2f",
  "key20": "3RuDPoskSHMjsHeztGk2i44ntd3hVQE68FTCT6cABenbM5FC5m2ShiEiFaKDebcxar6h6shHZWpkUSWqh4DPNc7M",
  "key21": "2gbXb9URoGNnxWDhZ2kxTUm3CznaJoNZpwkWC4VCKPzdw618CMyVdNPtJr3vL4AafX4ABmrSeRjBhzad3P65EAy7",
  "key22": "4v6NuiHWJNUPV4M15rWwhmA6NJ1UtJFfy2c1Zvsb4XmWeDWaTHauGBhRWGNvMzZ9SwYpu2dPvFMp8pmsvx8ioiAx",
  "key23": "3zV3Mk1hyMHW9okCJCuLWkvQQheNnPYgnsgMXFhuhdYJ3HkUbfUzjrCFvjV34XwUGpYdsCChWx1YJWbYc3KgVsiu",
  "key24": "21Syya66iNpFV3F2ufDQP3NHvFgnCWaGgfymiqz5zcTtbQ8VVNMYntpt7pxdEoZKyHCUMNCfmYR8BRtNTMjBPzyg",
  "key25": "271X2LKV5WSfpPUqjfRT7gxzY9BwHrAwsst8u9bh3ZaaJ7SazzSSumBkaocpqTX5mhKh4uynUErUVw6Y9PhNSeXw",
  "key26": "2k39Lyyynt3U1Bk76bx9LFHHdi2AS7WonjkKks68UqsBZk5ECLHqj5q7xE3Dc1cuPbKtVcx5afkaKxfhsbzP9W8R",
  "key27": "29K9VzKACtGt1aKsZb2zFUJ9t7ncVffqrfAs8yW6Wv4xTRWpXw42i9fhMA27hjxqAzJMMzK6XXUiAztvLqSLWCo4",
  "key28": "46qZKT8ib9mHy4ZNhatMeECidjpjNAx1Km9JK3TQzgkawvRjFAdJaMjr2nyzLXvG4WryMevHqMTXBM2HK7yf9Fxi",
  "key29": "2MxbKuw6m2724VGmSNPSdxtrG1mJTR6aNFACgrfPt1aQbLvbroR3ZPxF5y8df2GQBtNotHtbKAxWSk8ArpiRuwdy",
  "key30": "3iys68jmqJPnNgYmC5sFYmCjh3GQm73saAYPUPNossReiT3fkSvmmG8mfBRDvqikKy6Hy8RTAMtu4deoxhFF1gSV",
  "key31": "sGjm4rKuqD9d2HAtaijYJPq2JET94mMpdHQFX3PPZAhmQjRs3WLVzAVk8WUzgNspzDsgf1qZ9wnf2TPT9gcKvDD",
  "key32": "WLj3P25KrZacLkFuE39kmZ3JaYL6VRumsNRRBRF8YCHhiXAkX3kLwDxfwsNrhN2aRDmLHGiFNDmCY2d8ZmAxquW"
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
