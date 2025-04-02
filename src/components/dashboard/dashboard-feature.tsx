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
    "3HAfRQNgXb8eQgY6vXHD5LhQL38HDYWP1zvtL7qt3dFkUpUqfYugiEK6Kh1Ma44e3R1SUvziHdSNYrECg1H3ucRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hrVYrvH5PqMe8eXKd1sYF6XAtFVNf77bSfPVh89tk8o5Eo1QTk72ME8q7QniPZQCDhHPTJPjbYvxnRq9tPx8Cbv",
  "key1": "5wBYmbx9GZsJnHM89FJWjZQ2LTkLKJpbjzGDuZBK7utEPHC69cTGKPsApKVCTbL959saTrBkb5oU6o2BL1ZV8z18",
  "key2": "ksP3XRtDYbNhpM6e5iv3zfeRSeAYoKv3j1ZYKUquYgMzsbKsfxC6e4qjxARBrot3RD7WFDzHKkPBpTszqCyLXki",
  "key3": "4n3qjU7qNeCc9YH4o8Y6WtGi4pLKizTWhV7BdX3dL43TgdkmCGSensdqSaCyK3XVYEgHGGJe7vJQTjSzAWmz46RV",
  "key4": "2YmVZGyHqKS9kGyUzAypPan7jKohKqTEpzjpd6qokyaWg5ZmjYTXcYccgKiJzPWYgVEfQXTmoyJELcZPZ9RGXq85",
  "key5": "48YQQVbJN3hFxCSfhrTRx2fn7i7n3DhLwodRAwsCwfeVbgphvBYGwTtf5Ty9yjCezjn7MTcR7vVrxTsR81UKDHLC",
  "key6": "2p16jJFms2pD264WnyDqVMdKgxG7stC17GiZwtHhg4trAQ7UnARFW1ZB7fvjNVLtnkgiTgEqH61pzDzXqqzzY2wA",
  "key7": "4B5NMGZFBFUn97QpnTPeDpXC934HnkhB4V5duMUWLWeu1Y4zksKwdm9meodiiyhNPyZBWugAQfKHwSSTqBuzZAZ6",
  "key8": "4AUGH4yYuRD6G1MKKmy1mRcF5mpyttTdCrRTyEJMPK7q2uJRkqgDvjZd5wjYzU3QtaVyGy6oBFL8quUeWbvfgAJ7",
  "key9": "3pZvFujYsczDKMDhz64gRR2io1V2z9UVAy95YSVBfM1Cj3dSufXJYsZEbRXEGUbjuW7HLzBBz28m4BPSu1hBa18D",
  "key10": "5bRmHhG9g7FPXMnDJMb9mA4j6ovJGcGHHUUJQMUBeuvRjYfEmEqpTM5WNcqte7MhkkXLtUeu1o1ccxbkA46wUhiY",
  "key11": "ae7Luu8XC8SHX9Q7J4cBVWj4tvVDxeKq5VDBpfSSzmvJbKAnoesv9pVVfV6zY6S8vh3q5R7izYTQyndAWrniyzn",
  "key12": "ut1AXGZMUuyGqNsbe3UQY1C27NiiYHBxTayHqRScz85cYJUrgY7H9qaEqNed2uYNtmjJWLG76BRrLuzMpF2gZDy",
  "key13": "ryWWf1qWeHLCbreBR94HfTdPGsb445CunwpgW7dagBtFjxkpPpaLbuhpVGAwCVXUp4Ek4Q3KqKjC8KTCp7WDoyz",
  "key14": "2eqrmScknVJdXmGsZe5NjfdwSVv1hbznfP9kNqPAD6g3A2UmQiGBJhuXTZm1J3dNHC63zag3VccDkixtTq2CP6AY",
  "key15": "2vWs2dUPeb3teHNpxuX6DGKmNnXFy1bXZhKrRNwVDEHKJ1tSPVMs36wgeZfH3GGpfhHNop5ZsmsK1U5Dy1QyGkWq",
  "key16": "37cJyCZd8UyTosVcua5F7jrCuMdifznJF5j93CuBGDr44p1RxSAUhNvyB6JWpFiWaYE12VMXaDsi92VXNbaHVjr9",
  "key17": "9WkqUfiYgCZTJ1MYeSba69aLa1ftvyfggkx4rD12vzbZBE7bisbAALzQhxQR9HG1de57jmvnCC9Zmpm6gCahQM4",
  "key18": "4cvWJiUEj66TBx334jiyiNfqRdychUZG3j57Nv4DBweorciU5bgbofmj7Jq43o5FqzYo791DJPezAvVoo2cR5rGw",
  "key19": "3Yta7WEeNBu3HECWUWJbwMULzVVwFvWmmCXknqqnLAH1dsJaNw49AVNS37uAFvoT1uYM3gxNtEvXbEvHecw1YGnM",
  "key20": "3URH8xgR5PfPq9Zym3eBE5Q7znUpvszUQCQaNzf7LhQwCRxqnQ7KTYZyVg7XmXZ1EkwetSs7BgBEVEgusbRYJNrb",
  "key21": "2FANXg2XCC74Qw9ud784JgZC1LVJPWR2uLrCrVCEMQgeSLZ3zhnMhdhVYRqJ5LyJ9vki2g3wMpF1TrG23hDgi3FM",
  "key22": "28PkSS4woYNyqNtxojyNozf17M1WgT9xN2RurjHF2fpTnq4xLjJ3HymmYp3GUzqqkDLJXRhzuUtSKqN47H1sgoaH",
  "key23": "gAYvkagFcUZom8ddAmfhMCNFqh2V2CMtAo5ygEQVN9bCDxEdAse7B8zBPR2pxyhbusKxQnwVpYskUYmn3LW5yid",
  "key24": "59qiwFbsBHehnoC7bx4LHGuJ1Y5qY84SdwCsgfYcyTzvGDRYfCGvFyq8i9hZkY9bqab7rPLfLbVnSnKRVwiDsRUn",
  "key25": "JihWFPZm1n8V6KcUN9VZ5zm9M9qyyCvKUP7wkf5WokoTuPYLti95JzNj8Tp3eis6PbAoWTU8KKgomM4vXQw6Bz8",
  "key26": "eBkhyFgdoEXBWTyh6587uw9p8CgBoffdpaXMkkdowcyfXeEk682eFur7sy5N7sW3x76Xu3Wcv2vmLqe7WuF3diA",
  "key27": "2CTRoRbtbEPj2CyhmtSmCv1YuxTgnkBGVTyeG3y2BN4SMpTCW27PeEoqBqYemVYaAm8vBEPkGV1WPWx1A2ot83er",
  "key28": "3EKCDseqohnZiAAkadiqqzmseyPnUesqBefBGdejbyZbdBWmDHhYSHhWAxBmWp2S9LwBcx8wbA3zBbsJAy9XTm38",
  "key29": "4KMGYuoc9SzVSYgutQvsGGNHanJb7w2pWy21xHF8NZHHSYZgJw2NXrF2A8M7ReDk1k5z7GWkSPDroaTUzzsdeHCn",
  "key30": "5kxFnq58bQnCt6VsyQ2WrauANzEEJnWLT4n2Y8JSxonjkJ21HaajgAHD2Rqi9Jqa42tyUVc5t812uiaeFDrQGDZM",
  "key31": "3p3gQEzvghtUjNcJGcQRuyPQ91YwxFyjK1RMA5WM2cnKUytGmXbtJFteLYKfV8jaUE3Sozg3VUMeuuecYkwJ2kD2",
  "key32": "3Ke1eXXH1qTfrRrZNF4TpyW9LccaGNzwYEG4LLPqHWkiNarE4soPhYexLVZmBgDyTAPG96LD1zkmNLoMzcjNqoXG",
  "key33": "3EBJ9FTyMWFtek4Zw3Pj36Y5RahUNmq5VcYb4RZNLMkFaYVYQkgFoc8jkP2vXzu632mLyySjDwoDR8Qce4jstKAd",
  "key34": "373vmmNL8vELawb6V4VoG4X3VCi5GYysvirCVDJ7yeeNbJGhwLFGA9LTafSfsv4gSnHdiJbGHvVEWTYNKMmgjFzB",
  "key35": "5diK8cszp75zPYZ6TkY6PLCSk2ZpG9HuwJChLvzgZwcHUZSEaLTLpKwdakQbN8FzNr72wXk4PRry3memADG3jvjZ",
  "key36": "3ZrBEJ5JUrnhuEi2XsTNLvXJvmeBNfKwNGtBY5vMHHKu57S1Yhme3H7LeG29NmmhmUBwrEQ3QZZz6tE8HZSoTRsm",
  "key37": "2iov37PtCrPWChgwbhWRZKSXc8KSdKbVPy8Q5bCHNCizJj87aeBPkBt4sjtAziwfEvJekXCXPV5BaMR6rzb1FJrT",
  "key38": "s9Bz2jYVUSCgspsXW2cng2fZSTU98CQhDXAg1LXS7gnAYPzCFKnpbc5YzGVpcGzbu6DBZPoctf3jFjptLAAxTYU",
  "key39": "3XYZzy7X3J7FjPK6q93t8FQVYE2931aWi2ecLT4qu5j1D4ioCa4kCWKGm8irUws7cpv9M4hKiBw65rq8YuSF9Epx",
  "key40": "42TyVNu5yYf2KJxjBWs7wtbSbkJA5PG3sUJMsQWYN2BEmCcUGbyjhkqqztsngbjCG2yTG4YR7pZy6dTfABcUmEqP",
  "key41": "5SJestrqtVJMtuMPknGFa3NTVHaJYxWeUTHgw9CfMFCNs4usMPNQjvxzEHbTWEwBitwEp2gvyS2gJZJYGcXKsmS9",
  "key42": "SrgeGafQYebX5PLTNZZD6qJiQKtMP1pVbWzrjoqwZpoknpDzaQsKPUdk4d5nBrmUxh39ziWFvXjhSe1MoQ3ciia",
  "key43": "26NPChW6v9cCf93XzPAfLz6p8wnWEGS4Y2MWVpFh1EGcFyjTnuvxujQjuBv46PzZfY3HnaYfsjpvEe4FTrFCZrU4",
  "key44": "5cQEussvTthhL6KTc7NZCy4pR68PF8YhWzJrWPc9ex59QurAkyHNUBng5CQA7NWckpVVFWuKafcbDwVA2EGkVo4q",
  "key45": "5W8G4uj5CZfJLhm5VMXwSjv4mGP6V7VuprdLp8VRGHYznde7xNyByzx8Z2bAyoW1Um4BrGhbUygBFyG3bqJxfXr4",
  "key46": "4hpj2x2jLWiuULppQdAYULikeodb15sBfEhuxNzaXkqk2jJZv5STpy6TkZyUAaEWy1x6cQqefQ1Hcr4bEHghVJme"
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
