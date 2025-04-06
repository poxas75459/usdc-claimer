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
    "5eK4hZSDgZToerrGwtqNJuUQaSLiKe9V4htV7LBexVoMJPG9ZvRidudbsiiksS8Qq3MgTQcqGGFGLWHC3sBXLdS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jqfZXwmy79vUxit17ZhKi1ynjjjzyucuX9rRh6SkwmzSwYtwc1gfPuR2qx9ZJep6iiC3AbLaRKZG47VC5geeoqc",
  "key1": "35b2E4wZu8HKwNVoTrSQHPdWbpurr8fYEEq37JRLiJ5xouRJ5ytwNFTH9fLbByAqkD9UW6u32zAUC7YUzS8ycnzs",
  "key2": "vXRnC3dhWyXq3wDsrTNZrPSjJvoVzHYZWZwykYUD68XZAr4iWmGLsBPH45W1Dvg8oNym5Qmfpy8m3GUePuzQEvd",
  "key3": "DqL6dkGxQnWbvRBzV3R1v1VV3W89ofVMTTCem8JByzMhQbGB5RH3K7moALW8xSqBKkeWkCYrCoWDwGPXZvg6Bwn",
  "key4": "4SQNhc6jrnRDnA3aG1kxqnPpBQ533hxuMgmd2BmJ3ueu3KPBU2GA72FkW3mP8apFDN8kM7mmc5Z45DrtYH1hhTAN",
  "key5": "5K1eyqKeBc1bz4RD5y7KsnsZJ3zMkgVH6jeKVDhdTEQbe8XrrQHMJZEcRMSnG9sPa2p7KapSRfqYWAHgceiPHyGJ",
  "key6": "4m94MuWgzdyqNm18f8vXoBWS8p3J4HFUaKVyRXTTP7iuNXXADc5Yw96v1uNJug35ptAmY3FjXfTkdaVsWu95nYdq",
  "key7": "5pJKP6uyKs6JA9X53Ymp1Mu9ocCj7xKJA3hyZrVZQUCMh1FsW6uZvvje2fiYgAfishjp61ToVSvLkuiz2WLfjrVK",
  "key8": "2bUqRxXWknJV79XqGMVZwzxchjCWDXTbxEue3S8WcM2yt8L8kD6NZ9FNgBxBfAnAzuZ4K6y1qE5yjVZg5WCDSvSm",
  "key9": "4zQAVaD52S4mxNBXBp7KvC8wNRG6Vas5UvohcxZe8JpD33asHGaePzuoVWTSguX68LfVpKfkCM7mooZw4e7UkfFd",
  "key10": "pdDm86B7SW7m89mpHu9hQQDQZU5Vim588QCBGFzxLveuCzZePLjWfnkazsKqdiq1fsaNMrtErGEWmYJHhSYYJEr",
  "key11": "3tZEo5Ps5Tj1kAhk8u9d1UY1YWt7raUUzae6V2dC9CBvY831CvNzzFZTPDjAPMai7jvp4WDtTNzej5NENUPcTmz3",
  "key12": "41yuyxPeTUx1kVPDJSXm2JMP8F8C1dbv3EaAJ3Aeqsgozyn8Le6b1UBHR8qJskHDRZvsQwB3ToNstDAAfUb7XAzU",
  "key13": "5N2PDu43h6ScjjkT81ojSEt77FmtEFLTRb1AYGV4bodNt7bTMqNykF3M2vtudyw9FjZvD6cTic2zg7e8uprJsgb8",
  "key14": "5jC2xGGRy1nXnDdx6632mnJodsK4cF4yvUDyWRaQ6ozCXGpyobgMRaX8rMpZ578SkCGe2hQKbGLcy8qfAP8rc4f1",
  "key15": "3aDQVrLbQjZz6epNj8nQpakM1Neeeov4nvbiXqVsKS6AWznSQVseFem2aKwJx33pjLSQhhLFxsty6geHWdoTo1mo",
  "key16": "4UGu45Bdjag3EzuVyem4ohPuAriueNP2qxUrG89fXZVAddewq4Hs6u7gLcrKteEYgB9zBDzsjL8oUyp39KkF6urp",
  "key17": "5rdejte3TmC7ZDqrG64WidY4ZX6ydHZdtxRcgiJAhCuyz21e4yLnK1oVX29dZ1xiP17nBE9g5EMC8WD6oQUCikdR",
  "key18": "3vkRNj12zy8EA3a31C1TfQoZ7C2TNXQ5z3HLGZ3wVRBXMrzNmPMCZEKEeiMLeuoykQ1sgncbLyFpPD6Wwr4C7TtF",
  "key19": "2T6KVrktgdwx9XiUQYVsjoRVRnoGwUBbF9LfnJhgGtTC8kYGctnM9HHWiUPitRyf1cnFVvqbh7ifXReswhN2fcBn",
  "key20": "3R4iTy6aXJhbnr3WWF7RTg19HGX2H2tWJGsGqPhSg9D1TbWHoNWwwHuoucS2EjbRfYtVYvecBRuZLtw2mkYgNLny",
  "key21": "4bCxA5CNmuNrxeGB5hAWAdPJeBMnQGk4UVsqpCftoqAAt6tJ7S9bgUqdJPgJjMU2kozQ1KvEDuLtZFvQffEsY4kZ",
  "key22": "51W9KsrpSiqf93BxSs9fkFYUwmk1v8tBBqYa6iJbjH94YwEKAkv11KnT9D2Y8oStWD384NYHfG73J4RafMK6eM7e",
  "key23": "ezNdXtfekSPf4yCSNy2cjoihhMfrQSEae3xaVK4Tw6pWBPCPT4CHi3VfPyuxzaqJeNYsf8eLnYHwqd8HgkkHE8c",
  "key24": "2wyMMM8ajDNCKQqUVfuh8X9YPaktdezBtTPe2AokFxHzQp6HhNvo8eDW92YpZ84eywhAPLga6q4RCYxC9LFLvRPp",
  "key25": "3VJr8zNW2Pfvdgv9H5QfGCqFC18V62Fq8F3yzyJAkFU2f6xPkgcMUdGX3uvU6UNXaidmRkkt4mQDF3hzd2KPhpMU",
  "key26": "2k7R6u2boK2zVEJ9FuJWeBNHgWn8C3SWMKtkB2FFu7pTtyGt5wwXoRkU7KNwkT6QbZVYKfXcFidv9yE8aVZ8DQna",
  "key27": "xorPmi5iPPCrgp35R83dCUPcGbDrUVhPQ9RtE5fZs7XiAeyKZfBdu7p3R74G7ZYm5aA5snS4Rwjx4n5q8Cx58uQ",
  "key28": "FmJd2iaf3fW7djKwvMRqFpPn5T4Gj5X7y6NyCck5tuf8tbCj43qomucFd63CjApjxws91XV1JjkVC6k6WjoBbr1",
  "key29": "2XEid7i2Qf6GtbKUrP7VEfnyZtQUvLd5jWrtZ4MSzmTvcF62udx77sTBhXRTYtibNHURzquodgM51zCeBLtSDdYL",
  "key30": "djXvVwVJaVDMDaZ3ETfgquBpAvQcxawnuQrxmudpS8v5oMarh3rbxX2ttBXg1ufcSA5Xiht3rC1qikMC1mXkEtt",
  "key31": "2mCAPpNnjH7qT96rAD6QqpEVaVEnurqmdTbuM9b75bKfboYyYGJhietBht6XoHM3i9uquzeC7dk67uH3PCgPbDcu",
  "key32": "4p9vm6cvttLUURhx7HSzxUaYufxNuXcMkdWsVFyCtTHVR3k6kj4mHHntd74q4SCEcfjihFcBDTeHtsur9LKui4iE",
  "key33": "5h3P4A1pniKqVsRa2ViSPiSfEdijAVMDphjEmD4kVBhyz2w1QtU7QPoA4SxAfnCpqaUEaQfykWT9TYabPMMM7mxh",
  "key34": "4KSFpBbzuxBwkcSo3HL5YrYxfFTHn6JXsFeu1WbkAeSkuBkc1sUnGGHZSij2LjonSBHbep4rAxZvdhD18GvVm3jJ",
  "key35": "QSegctM38xcxc9A95kfXsebzov51oPJsKUbMsf2gTXsPpcwqvLVYwztfKYe7TNqJvahqMkoX65tMxkPHsbxfPng",
  "key36": "2F6ZQj7KPJFgCSMv4XKbbchJ43P3APM2qYgReKEJKFjeM6MeCWDZ8JFkQNxxmB7hbWD1smQND1o1Mz1yNe7TxTzq",
  "key37": "33vRrGzvQrgtbLUTj8UE4NsXnh8ctUtaBBDgpk6kXcEJv59ekjod9iTz5VcRFanjTUZLkKrGYgAkjnuFGhfAcRVQ",
  "key38": "4ztfHSNKp1dxLLrU6dgUHZYR1zqnUTK9cQ4RrJA5smhbWVmwMK9YhMNRKs8zWwzXiLzrXxv3WAYTawmtsqwq8gno",
  "key39": "3h1GjSr3CTaJivKCHR2bq6VJcwqM4tmSdkEubYE2FS5djBZtzCz2rFqGvPJifYkvEV1haefamuZmnb2bWKz1j69q",
  "key40": "2FFp5EXf4MzhGkJXM1M7Z2Wwd2jrcXmsfs1TnWMTMuxW7KimzVYxvYno8BKkTxPLF9H7QqxKPJ2J43pzsHFcDUJz",
  "key41": "5utuNStFwKko6apyRsM6irhDJPeg3T33NsdNVwFtYknAGLhzKm4QiKTpuhw8r8ARWvRrF9Q9pK8Rwh7bs3cB8onK",
  "key42": "23QrsMsLfuF4LugnSsc1BE9hSFs1HrtfPMScjLa1B5dNnHg6ibCnPgqECHneqvSqkgU1MjuqY3uhfSwAcXAD2fYD",
  "key43": "5Sw8jn8LswUvh15czwMXJVqqXNTUwoPwf2MZQqKxuYLLpYB1DEGWwbfWaZRApNSeB5scgKanvUeSPJqtk2wQEUqj",
  "key44": "2Sm3Z2CyZMq29idCasiAh7gMBJEJHMoCQaJggcLPLjvvTSZi5tQT429274oGsNByiLbfxhKoiTN94JdwPxUV2Kog",
  "key45": "k2eho13Q1GbaqzZYMxmnD2L5BVHRvy6Hneqi1VyhkLmLQSNFWZCQoyimPTevkaTf4rc1GuwkNjUvP8SRPzcwns8",
  "key46": "36F9aX7ty3Bchfv6vEDADGWi4ZZ18uJYy8bLTJB9g5JpytoP9CyfAahMrTLoU2TQqQxKmXnc3uMkbjVXPB1Yefip"
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
