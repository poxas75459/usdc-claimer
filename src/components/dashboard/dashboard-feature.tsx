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
    "uRdx9WgXyyjiAozSXpUbmGSV96EndGGbvjyqH2ZQdF9U4QYpNTbVXZCxVEtsjYpSyDSDzVohHnZLuTEfUapsSaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26p5p4AvCFsHqKW2Wd8BCdJjrPvwD8F4z4e6vYY1TKBL6da6wMTRMmWe9n3xVSD6Fr92iMfJeqTN1w8QTuFVrGQS",
  "key1": "3KoTdwiNj9wAC3YAXn9MJop2HXW2R7qxtcafzzhoTm5oPx6nPJWFW6Mk2LbYCW6LyDksSzVAmA5iDn26hbDXX8ND",
  "key2": "2zTXoHAkHXBTKP7bDR3281gs2xbxkf492te7ppTT4Q4qzwSoHUNf8vA4XRveuLVNCsY6SSaPjqxkzEZyo83e3DiJ",
  "key3": "2PZd9kY2DFf7yGLWiLFhF95nBKRU42DxnsaU52GHQNTM4SEuAczamWpxg33ctzxvtHosKGEsj5XBLwPFJS3VKELt",
  "key4": "56cHaXfSohUeGoaPcTckT15zvbE6zKAfzu4WVY3hW7pZ2uV8t294AYm29zh4mn4CmCFAMwYkzSJnv7fWC19Gah81",
  "key5": "3fxF7HWYzPGnhSwQFwMA6ERSHipMf59g8mgnyFvkH2ugXF243Bnaxd5AyXErWcVEn4TcZP6PhzvKmkZnotf9kNri",
  "key6": "3YZaqCizmw8jqUHLBe8nKk9jTiVJyYfg6kdW5hvvzkYxLhCiTefXwCMt662QpY9BvyfBzrt9EYNUzQF78hH6FLjN",
  "key7": "35dFiwuG49Z2GbznLTB8YwajYVm1j9FAjM835djd9f4aPdTY3zZnUM1ujqdjVUZqL3M8fNxY2DJ46YQsy2XcBnCS",
  "key8": "325NQS7QE3UAWdvbEttgcHCxcHihrpuKFLZotcTBHFM9B3aYTUYh3P25dy5iBPLx9pqgkdqUKk3X4MyBqKYUHdrQ",
  "key9": "5ouDKQFN6MPgUgXQYVfxcxhecsjVBMAV28f8FVxizgz799egqVudhWNFcaHsUf5NN4KDg7cGL4QshSCfPbszLMjE",
  "key10": "tFA7h5MBso1kCjzXGtEbe5zeNyCA1ruxEaTZWvXitPq92mrcBWUV42nYVhLTwt9eaQMnZyWnF1tTD6H4yAAW2QF",
  "key11": "2kUMD9rk6SYGVHfPs1vzwkjbqef369nBB1X5ws6fm1uBRT6cytoWvFSDgf9WM77JqhWJK3UrEtPznsUXamysQcE2",
  "key12": "2nWrzPZcoBn1oo89GyYy5bcDL2J8C1ZzjNt1dtqGe16oaHu37EJu2qnbLLpAidw9EDvEnUQvWGeq7cjGnmU79rhB",
  "key13": "3b6cSJWrHvtGGwC5TcFqEW3s81FQM6Z78wUN4nhZb1y8gz7Cr657QX7GpvxS5Mekx4f8gY3iz3KGgwSf2S3QchbA",
  "key14": "JdYL3qgpfBUukPnhQxHZW9hXbsECXinjRGL9Qw4EcmVYscmJcektL4zQUjzaaz4i9eTMBvf8s1sFoZQ32QafCY8",
  "key15": "3mQ8vRQNmWTZRSUUKLV9NKmDVWgmXqHxFoYafTHiyd6C8azxa5e5auFAXhCEeBhFJ5yeyyFyCSTCcUAmJ3y7h1Qo",
  "key16": "4YGDvKtGbPdpdZyN34ancA8GV4AYvt39SRYQ4PaBnvL8QyPMWRLdmcnP12z4XdyBMRqmcy2C2Dp9qSL5gJs2myuv",
  "key17": "4GYZyJ4tmW8C6WZ9y3n2UEdrWy5YqkktKW1QC5H4nHhp4JbT5zB6JUYSiuchrgBEsD4zf6rhQAW2MSnKVc4fcQTv",
  "key18": "2dt927bBspPkxNVvkQySs19Nc8q99G2j4haRW5xewY6b9NLYuavPwxHB36GxaYUVkjxZBBjzNkjT7ZnWWcnGqxhA",
  "key19": "5pPo8Gd6YccKVWZuTS7y8eN4wzViE69PErgNv722M4f9BLnJSE9hoNVkq1Y8HWEUDPgfMC8TYWAcKYapMcaVoUxC",
  "key20": "e9fEHdr2qCgEB4X5hUiLVxr8TTyvUXg9aYfHhzS6NUPhTfC44h3QHccTo58Tpzz6ecbKuFApnXeoa5YoCh7Qtod",
  "key21": "3qT2pw13rcNm1vNqdiwUZeSxLcbQ4T1dLwrUFvVM3qu6cxgP9PiT5Vjf1AyQ1NuE5CNgEMmDddF7CHv95V8BZ9QU",
  "key22": "4144veSV7HsJAD5JgnBbgwGihFN4ZzgVvkT4uM9ykBoMfYEzVskcnL12QjzhhVTsmRVBz2YZ2vW8jY7VTNt6y9Bf",
  "key23": "2djvUrKmhcTbN2hFZWYh1YiD24yBJ4UQGwoAuTMkxCqDEUZRmUw9ydQHtnt9VRb8RHLfqEWo5ZNQG5rGp2NG7XiK",
  "key24": "4V1pbtEtx41ivFKHR9T11TJMw7TaoFFaoByQPk5r3EXozh5yobmpV6FVN4uh2V2yZwpC6ErQ42h6ZpEpeGwowHZF",
  "key25": "5VCitPrgKUqGYhRNjQAajNjsVq59vgBiX24CGz8TeHeLc7GGdbpkasVLZ7uTsWo4FcdrZVvQJv9yj6V5RBq5uvnu",
  "key26": "2a8hwuptNX2aW27nRUmX7adVDhP6uA4BwjswwnNg1zK6NHecZr9h2TzsdsdD9B7jA8mpYn8WtsoaE8iUdA43EgDR",
  "key27": "4CecX2yMGow1m9UxVU9cgNMWD4jXic5Cb8hEwxPYNbWg3gi2b9WLkmPEYUfyXR8B8WeSFrB8F8i3dgEyA7H1vyNQ",
  "key28": "3bLQygiG4Psy28WxdHDAdM2c7wAgzmtHQWQLbnGUbpWuY958Bt3gPWvKtYpDEEsUuDoWMb4hPDLx8yL1AYUHCz2Y",
  "key29": "5EpHuefLGd7YxHG1o6SUYH3RiNt1dQAr5dHXe4vAoTvbPPcJvRbe8WNbwkAm1DZb2WUQJ27nPJvZHLGwFPmhucS6",
  "key30": "ahxybyxzP91cX82R6ctoNQUrYuZZ9Dz9eMT78NarnmEFc2HFewWFofDGheTni4KUD7YGVEApzEaVp83q4whobkc",
  "key31": "5NSuB4chkED2uvXwmh4Bg48YTGgqRWLiNu8s1PvrXqraPvZVY1JJw9mwRtTDXkZuMDCKTmpinhJZfqFcjCTMMVyb",
  "key32": "6vUNF972TTsg3RoSbyLvdcjxqGdi3TYP6kk6giE4t94d178sgxg4d5D23aFcTB6QbodJnnbE4c5V1P66ss96Zt6"
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
