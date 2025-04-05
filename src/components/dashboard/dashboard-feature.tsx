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
    "4VNMYmWgS6nTg1rgB4ZHRtxEKEVDH8KyLZ4xqG8ip4QpPnmorU91PykhhFTYgUbCCxkZcQmvYxSV4s8zeceb51kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eHg8kKxFjJru2DKivR7wF4SVbVVnpGV2RrxMjxWqG7ycEAD1QvammXxhdjZtB6tE5itR6PzjowpJqu3i3XKLuSP",
  "key1": "TrxkDqo5Lp4L5jGRfR3ZdS1TRbcKDU7HSS3WzEGG4eE3jDJXnr9VRwoZDXN8Fj6NShXuXBWF81WiVxxbpaX8t9E",
  "key2": "48vCR5hqSswPQ9tqPtj9hT5LSM5sCGLR7E3Q3YK881ymKrhHrhuAqu5Yho9GmvDcsYCtKw2DJvyGFBfNNm71Y5k",
  "key3": "2NQwsMJ747mT5o7HSWc67rNeTEKZNp3THWKh3i6xU3CUkma4rRUWV1nJunJ4eWsKiYwSdiQxpC5EVuk6TRqs3jTP",
  "key4": "3yrHpYAVxAnRVjzSNunCuGZQWTAXomnwqT4J2eEomXDWAM7Xj8rATRbz7TZgs47Q6C7upWsrokq9mTJf2NokvkrW",
  "key5": "3nBqCqo4Hy1T4uVQjUnbceXFrjEjhC31bir4HdsDPtfJvjNuYgPdJkMFCvtthWTTWK2C6yHK1M6e8QeiMU91Dh7e",
  "key6": "4FNXai4kxmU86Q33utEa8yHqMhd5naxr9VJmoUqnmXpr8Y71G3NhuTdoinC24t2TAE2TJCTu3f96atuwZM6CG16C",
  "key7": "29qTWjcHv46J5EyescHaoqEsG9Jhd6Ur2dBaFvPtpEdKYttcpvhyEK4SFYt6jHJD28v2qABXnuc8Q1V1oemNWajP",
  "key8": "2oqdNYNdkgtqvsLeeLvVP4ftp7TbVZjDWLVakPqEkCuYrWvTDZRaH9YtXKhpAtjtby1MaKQ7YCPKMunQQ3vPHTDk",
  "key9": "2CtkgaNhkhsXG6brBWcBSxo5wYfhhBQHyiy11q2rgMinAqJxWLRwX2KFmgV2pntc6uYy4RK3du5pyrmEypjTWS5q",
  "key10": "4NA6Dq5SDnNqR9BfPHh7UcoiFMoSMoZAL9LmvN3LSV5fpbJwhWJUtpq3aJgXxj7Q2p9kihC9vW5etMcgxgYHHrH3",
  "key11": "3XHKZbeUrd3G6vBACsR5kWgQRvDMBF1uggAxuH7FxUD7cqTZgq9VefNbwVAx2n1r9ki9JdfaVYv6MnRHgmFyKQFU",
  "key12": "3jc79zDn9Rozh7fpB6skHghNLXYg3q97KDZUPccr6AQTbHyKLPaqDNPDGdvUfidiD8NrSdX1NCrttNn3Qxwn9ozz",
  "key13": "51MZWQNHWhFRFiqsGr4Ja9p5AuNsBU8BAuNfkvHiDPeMxtzQGxHUBYQahZNXXeNQ7T9P8K59u2RVdhGcGi7Ytv7V",
  "key14": "4nmnHceGRjH7x36qKUZwrjKMKFp55Tj3FgqdmpyGPEnoWGeZkby9Hj7xA6Aww7gDZXJn3ripKRM8g6bJdzwLJjR8",
  "key15": "fEKyUxaDDEyRL76BsSZv5KxEVCMdnqTWWQNgjh22548gpsgTuj7xeWqgp6AAqP1XEcmmDwn1hQRPqw84vHPPGfB",
  "key16": "3ARzvQedZwRA15CgK3V5aYkYmuHCz9fUs9yTFvMdKNffPozF91YJDfWpMvUZFQCfk2WCxye7kE1ksgPt1Y7vdLgC",
  "key17": "5FycsZb2jMpHvt6K7MQ3cytyavDMYJiNUdDSiZcwG7hY6dZV31Cjjybg6RyJ7jXkHyxxQNizSaJoRaizXD24WTjg",
  "key18": "5VVeNrqN1nwdfqcgXfWF9UhtWfMLsRvWMjwtR31viZFbAE1SnHzo2kkPMGgpG6cnafSvdNRW3u9qyZDQnUJbjWjg",
  "key19": "4EoU7gxFJHZKJCzmJ2dk8pVBBbJhKYTbipLyAXndPFh74vs7yFwZnWVTr57K8mg32nTZVLveHgSKTgXMevweLMhW",
  "key20": "Ha8GNPTrYPxsgaviVAWnXMiwDuLZzU4FLXMZZPM4waruAVMhASxdq7ib4MEDyzf1wS2phcYT1nHXUNjwGvSZ8PF",
  "key21": "5yzSznEdiRETBQUFBhjRJUahEUnBsrSEWb3NutKjpzgfp3M1iE5pGPH8WKZsvkpBZ2auEhnS2vgmuDwzkwUKH9Ke",
  "key22": "2AjbandRWZYx2zmeu9npYUJE1bT1n2H2m3jtU7MF87cQ7by3A9GtVXnEpxw7J2ZZkCgrypyr5VZuij37x8Dirvjz",
  "key23": "3c2gmncMKnzcVyvf5SHfmtrHyCU3yB4vyG5SdEdhoPvgC2U2eMWuAGYHHhbLBhpDs7Qyk9ChBxQs4WQKCs6MgLNU",
  "key24": "iPzJtVXpjmrBnLAABAevc11C4jb2wQuq2A9k3E7W9BoFtJ8QAnLogTeuHb8sL4JhvDwJ8xCmGxr33Am9dcV1JG8",
  "key25": "5JGtsUT8m7zJyLaocvWL6gGxQTgKt96UpjzrirdrKS6MYEddXLnxD4JUARYw2FyCj1vXrz8W67aUahuUN5PSezni",
  "key26": "3vwe3iCFKGrHXYkd31vhvoets2c8xiJT7ZL2h5xya9sPmB44od1k8CMFwvk8uZRzWy2jLu1uCv74sDmbpCiBV3C6",
  "key27": "D3jfPicjg63kzyJk3AJWsRmMN7aLVLeCSswmawVJs797paFZdXy57p7BWDG4P1AoFiKxz8SM1PchNXxY3drxbzk",
  "key28": "2SWBv9dyu5jYJrnJCLokiHMCyRLgm1nnHSTpSGYqpRXAdjioR9hBQisyZJcf77QbedSMQBAqmTVRbJJNBYrGo3X7",
  "key29": "hzUbPibrDqNvdenRvvAorFZVAjxF4T5BQ389R7ma6RctNEtfkSWZTbL3RKkk9DRn5o4uhYZsohfxbDoUpaBbhwW",
  "key30": "FVPPHUtMczmjVYqbR1tkNkhXjr1EZi23xynooYYW4bfrfEnaP7VQKrNcUVmNdiEZyAmpf8ysz6xfosG9ZnCMwRE",
  "key31": "m1CxfZZL6KXFLQx3VK6GNRasjPb3SnaumX2fXUbTMJN47Be5XgK4F6smmq62w4iTuKMXeQsBA3hxjxuhXfbp3rc",
  "key32": "3QBuSNXUUABPc64GLoSJA2186XEjJ66oTxsu2gUUCCBzdQeYyxejUohDW71ZKXgrDq9wP5qHpypAZiTSi8WHpSa1",
  "key33": "37UyYj1YcfrG75AgruNTVEMTKRcxM2uHL8VnTLmKeRBNnxSRet59KrH1yayCSyoW7J3dhmb1f1RpM7P8CB1cxXVc",
  "key34": "3o2KJqW6cWtgWHLSXXPZBLgfzdefRz5zq9Vjdgop5gKvoy8YzF7XZttuw3VUPaTtb1qKM7qwZ7g353B7WuJcoEFY",
  "key35": "WM9z5deoqDVjvcZbFXocuTkLZPEtyYgZu4SgN536JN9Kr9h6DwQARsyAH7sV8t7oivKNiL8PB5xSuGczd3r6hDd",
  "key36": "3G4mt6Hqaftmr9yDd6c55PLWTJhQvJ3nuZbs9hEaKLBf2JXERYixCAkQsGN5PadMbGh4k3vRUQUrLXP2UPX6EeBZ",
  "key37": "5Z2fyc2sZJcrpVnAFcVbisioSxiNVmTTZ31RZ1J92obPnGF4XxZdshKaaF5tqYFNKwpA6TpK8WPaGpAp9Ph5zchy"
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
