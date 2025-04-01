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
    "5gnnHRURJMvdYSSWSCxPYdXtd4E6AXmrUesBnD6cNqHduz1guhxJu3XoqhUUNGNhVqwPm3akg548VxbnyRNFnBbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "264Cr6eMhKwFm8ygXGsMq4dYQEgkUSm97ddL63VcnVeMkcpGPY2V7o3zN5h3ovhubdWhPbWoBQJuNMwYhkkXz3UM",
  "key1": "66y5bPucP6QVM5r7WkXs7mC1W4GWeUDSFdrQFvyoK4Xg7UUzxdGnmj4YWQoKUiRDmPYGHnCsxb1CR6b8gfB2VGJN",
  "key2": "2ttaoBU64WujLc7RTYq9cP5uJat8MhfGS5x11Qo5jNo423H3SDZ8p7bpDfoE3e1ANhd9SHrDBJNNnWC9YkHyVMwf",
  "key3": "3q2cCY8er5TNk8G5U7V2XqrWGEyCWZvKvitWhq1hfPU5x8a7ruv7rzjZgp6Exa1AnhKwSQDA9AfzqvuCHmBQiJj1",
  "key4": "4AKeyQCgvc1qgJgzK3fNvYXECE5gjjBcTTWW24rWtQ8YUfaFcGbRgqi5tUxcPZJVnA1CspGnFANgNVBK7nGRjpyf",
  "key5": "4X2FC34cjR9MAVM72SWuXVzhyZvHJ3zsd9wVWTjEaXLDDQkG9sFwpw17WmaL1RRsLtFwgwK45xaSNTo1URyWnuGG",
  "key6": "2mcXDVG3ujDbTbfqZEJpJqEoCgTu7uRxdFhuugMru5qmSoWMFFJ3qkq1b6ezBHwUYzUiDVq6mL8f29z2uwvLj58U",
  "key7": "g4qiXZwdaZ26J4MVPP9Zj9ht4SFzVyrfB7qFd7BvNEuwXZYT7KvzpeSFdcpvmEUZ3bDP9Wg1ZKU994DRuqCJkiz",
  "key8": "8SzhjNJwkDXgfH7sLKMydhNmmjRYC2wMNUoDhE5pQ63PLT5t8hc6tg2P1VApqthjrGp51V6arEnwSX1v2TuA3LK",
  "key9": "3WZyPd81cu4ehqSqcdAD4ND3PdDuXV8fzBWjCdpWQ9J2sRZwjHmnxJESaR2TJGn8XyFMjPF9p3tJ1D6PsiZUWdZB",
  "key10": "3TEX9V58MQwqT1KbxMqz3USgVPy2xwrmEk13Qogacbx6eC4yPfiZNsw1UQwT1NopEavqBZX1bLMDGvDYvj999aqj",
  "key11": "4p3Nn8yYzDSwr1YULa6HWftpKmShpv8dKVB4NFNLWXriSeKnaWrdAfBZSvYgo9rbqfNQXXBMom79CzzJgZ44dHzP",
  "key12": "2FhKNnZgj7tt5unpHUEYc3JKYhC1QW33VUzwywdBFUya6SvmjKegHPiHfKV5bfZFAw8G8cEaffwBV423hP6rABdm",
  "key13": "4ffqESea8og41jsWVZC4s5q4Ufzc7xArzKRzBNAbTAmT9xsPNxMjrJ8DeLfXWdMcfjhNDAForEPv1HmF9vGrJD7b",
  "key14": "46E54bndzDi7Jq2uAGWBEKGYUDDQVk2ihaUU5E5PF9sceCFkCFGjkBZ8GUGVU4tjwJMsqnVT5yzqWMmhBRpdKQ1b",
  "key15": "ZEFsZkXnYAzLohajyQD3omu8sjuMwLVdJcmvumKD51r2s3cfKHHgFcmestBGW4DAWcsprzQ4eKaYtkbmGmZn2Le",
  "key16": "2Su9btUTsz3xGFaNPvvQ6umwDAGnktE5kNZd9NGLmcMBtLdGLjz1TNGVMXCzHmv5WmY286t1KNJSNQn1KEsYHUYU",
  "key17": "2Jnq9qx33MJLY56KnQp7ctqL7vREZF7b8wBePRsWuYHJUCCBpH8yByoBL1s5bPUk4RiXThRCJzuRYW4FK5m2cHYY",
  "key18": "29k4TZ4fuX6AUwUayydqj1zgeBEht2DtRGzYKG4F6sLBR49SjwWCp1J8gsdECN6dG5NZugoCCpGySDxfFvAf7HAj",
  "key19": "42v8WvYyRZQSXZy6Q79g3FoGqzzzzQse1gv67nVsVMTELGsTfnqVmyvzRME553NuwLkunxSdkv1EYd1zovf47ig3",
  "key20": "35u2DYFRCaWsfhQDDET69dZvK1gAB8MS9iwbZFJYoCJFyKqg72b6HYTkEa3yYFdMPFEC9m3nJDCD6nf4WdseGCP8",
  "key21": "64qvjzfBjd3qmSDsL3aq7ppjnEphxt7M427wR15BtiNCdN7g71J28hg62CGCJ79kA9CfyC6QbqYfagM5pB784Vwz",
  "key22": "2X8hCmxrdPpbHuJpS6W15Cjd4BPApNt8FsJbk8axCC284ysKtRu78ub4hTF6Wz4o98CAeC444VbXbKALDhpBgpJY",
  "key23": "4S8VzXBYX842fGttRrHSPbuoCVrodYoMyND5swNzejiNyiYErv7A5me1YC5bvjSgpFMfbgcuZzRGwWwgbcPsYK2R",
  "key24": "5oSJ8jTWyeiXtaTgLRyKMpofUQDvZHhE9pMPw2iaoTcus5ag8CGgqbR58wMsqAmpDRjec2AC1NgF4FgJMHgLfunW",
  "key25": "2eZ5YZDQxgFHTzPwqT1oy9qT2twrxKHjy6gZjPpmHL344QsF2sVRmfUigTfmGYtgqecAwkuzYyKnd6kFCuSRTwys",
  "key26": "2vfEu713PiCPKzuBSnn7RdmVkp9WqRtm4xFhwimT2wx6jnnUzx8VgXWcMqB4aDTmaiyzBztkPwb3byxpYs1aqMrS",
  "key27": "4aRhaf4rAP8koWUDhoZdG9cJLoQd9KYuwHj4sHYjgFWXnwbDVSaLLAqPSnVXJuLxZfQ1eU51S9GMH1aENbNKz83j"
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
