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
    "3NdNG5rfeZ6kGXJAb64L3jTRTovk3BWAjBUyFEGknc8i8PNVdvazv5N5SYyJaVD3p5kfcf1BnMNrxVCLobv281dD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VrFu4dho6YEc5BLaombUqGetJKdWooxtuM3EQNLX8w9RtswfRdz7Z2tKnvU1Vv47xfAYWSkDMjHBJVC9S6aZo64",
  "key1": "5A1dCEdjHJeYthr89yzX2uQXuuPUfKq1aJK5YC1k2GRgh2SegJ6woUEXJJhbs68tFwgXvNuW8DYWcBC7v3WmFeke",
  "key2": "2N2zA2wmvToupvcY5YLFpMSPAZFhtbAigo2tPtswy53i7cFwyeSdrPJFSfVL9GUZLPZS66bmzuDKCgf6x3uyG1D4",
  "key3": "3yRV3Bvrhn64vCifnjK65Zznttgjj3iWJ31V5gVwZfW4H6ZB2zqzMtHzhJy7XR2br5B5AhEUj9KQE2ehtuq8Bnez",
  "key4": "23YDDqqLhXctNgNW3ghdHV1YMgWS4wJapGCku3u6AEVBgRLcMcCk8WeazqE9HyfqrYtoJ3h315pQHFjiiWUZPB4G",
  "key5": "4VX6dxVy2NhjbEthGm3yydb4zEgmQqJstKH6wmKqwP2oaJ8zrHQBrmJyx2GLd85fws36x4TUeUJ9Tp6a9dCJZDVU",
  "key6": "tKq775Agy3QqppYs7n4ACq4ospaNaFn8FoCzViN4WJFo7a1DS8qKXQKPEftvmJxmWKH2CHvoGxokCmapNAjjRMU",
  "key7": "5mEL6pxLbhx2sg91NqhgGLMaqKMuvr4Q3AsqcCaXej3U9DB5t7kYSR353Xmt1P17ar5HypHTUxtNk56JjcsDvE2b",
  "key8": "5ZqtTn1vNxhLV75v12T9E3kRobLV3XAHZxGfVwvpa1hLxBwawzBkkLzePszLkqhsAXtYbSgY1sWcNmf7puknx3yR",
  "key9": "3G1ji6jqnNshUXAqe4G5a3H1tAAiHEnyqMfFJW19ihaNtpGAstEB39FXcYaNmpyqmzGD93MdfLBvX8UjZL9DoJLr",
  "key10": "25krnCMWkcGvi7MBQG6B9cvFnx9X76qXsVvxA67p1k2ArobCnv335tRgj5sh56DZag9o8Z4jzZUCLCoeLGBXjFQF",
  "key11": "3iXVQe3vKyi51xqprTHppiDZMrHAccN4ZS7ZpWm6BSGMPF6SmpWZ7tPLeBQmhFZ7rKZMUB68BPvTwgD84qgSwU9k",
  "key12": "MdwpzT3hF44pnPD5UuRMQ5dsTc2r1Yds5sTs6vohwuSNFriPc5PqohCYGzohNgveNrAkTDQCCQfdvTCjs4KgyGf",
  "key13": "2rohWM3DHgYLZSfqt8SQtekstue631wVAFC695CResGAMcXdEqWpeY2suiUkjgszGNaszaNq7nX7fUnxDKYMwyec",
  "key14": "3VxjKeJMhC1SUSVBniD8HNpzF1uNF8dSzNshEn9Cfk1jd9i8DCxAH6UNgLoFYdCVpYW1sCr4shdwwjCUgU1USuaF",
  "key15": "3HN8zJRGvjvsCTEUvxZrJJaQoDqUbZWH7Yqdj68WTKBK7CxWk95Yt4D73ajGSjHTiyEUVbFESukvRo6L1CWx5LEU",
  "key16": "28kqQHSa1jYvA4m7yRG5TpdafTsQ4iGjnzjj34txeKPitHz8hjf2e6NXEw4DtpXps5bcA5tZAjwPZtwse5BnXt5G",
  "key17": "3uVDY1KdjGyMpvmTaGG4YEj7VxhyLPFLJNDvm3y2J8Gzn9mS4vSWMwSddEKPunakahWG4h2uoW5VeqGTFwu6nYYe",
  "key18": "4FnWzKp4uSp5gXeX6AN8YVqhiAL6VvWysARM6JvtHEF95AoLX2eHYvZmErUFGtTsEpdYeP8AVJndAYBGxWPD2Cwp",
  "key19": "6CMezmtPyXVozxMsQRUniAdxEhiQHi1Xt7v4r26MRcN4DmLj9AAvMGFGvmoiYVXjdViX6jG7s4L9sNpwJ3MGaXx",
  "key20": "4n1UXHVhUaBf8ZtST6q13yscmMP1sy1CD1wLWVP5jUmhoAabeY8MNhPuDUxYDSTEJD5FcfLDX7cSmhFmkNu9zBjb",
  "key21": "5VLceL68QSX29jk3WBk84QxtK5ZARhPipN5vfbcUZHUHhAp1kHsTuQM2uvNvHQYYttUDipJPUUqBwNuhfLesKxmB",
  "key22": "3Q5jhhaBKq9gm8rtNfyAyhkkiuYBHst6nhEbzNzPpyJPoVk1gGkub7zCNjs2179KakLF4KxFK69687AsQ6sh46vJ",
  "key23": "2Fc4qKsNRvxfYWTrWFLhpRiiprbcBgKvSBsGegP6cB6wrVHTw8VsTQFaFWtGmqCbZ14MJ4mFwac52WJXH8dq9b6f",
  "key24": "4qdaXqxEazASHAnJEm4TH3w5HCfEY9iifXJGBJR3LvcdqrLng3PtbcL5vQ3yA9cDLtJ7GHNARhvf8TBwqszYkoyf",
  "key25": "5wjBfUEG7Sn77VMgyr4sEUR2xBdheAAeaDSaZ38bGyVDCxmW5BsULB5RyAYK1eXLMK8w4jP78ZCxcrmVr96uAh3j",
  "key26": "4XZu7tksVUDAFqah1fb5PXDSzgwKa5utG9KKgkyLMsQv7gq56RsFQr6rv6kyMuguzjELAkHZkBMSfkLtzfLX27YN",
  "key27": "GpToLUGcBcvYoUYdwRdiwjvq6CxUby6MMoz3kjDirfQWzWKFbe7nosd5aMamLCgrzSzZ4Lsw4E6VU1yiwBX2U2V",
  "key28": "2dgFSC4gdBvRrkNGxBczC8YWzcnF29TqT3cF3WqDrx9Xu9P8s9TzDnssLjpr1qxvJq48ynPjDKkqSjPWNdscjWhH",
  "key29": "5VTEXDk6MHeoSsWS4AcukEjLpnySoVQTKEsECnryAUhV9cpV3QemZ8azYR51kC1BiaZavp84cnWbjUPWJvgJe6hU",
  "key30": "g5V3NK4u5BUJcYKnjZ9c7osDosuYzm6wrMKsAwYSjn7uYtNZER6vNAacfx1Z6Um4EGWo8DwpHjPq1iksnYUHnAv",
  "key31": "56qY8YUeNrMnwn1zUNWj8jFswpjTjNYjCG3UqcLb13kjQqrPnMbM4freSX5Tr87Xb3SQRXKPG3BYYfEmRWwDHZ1U",
  "key32": "DpUPrhf7yAg27Vny8DYFTdDGVAKZDWQ6kXnSbWggAxCpyVCdoE7YcRFYdjqtaTBkuJqMtWmeuyLuKRQEpifLgn1",
  "key33": "5vh2RE5jozgak7TSHNrRxb6ZS4SW8tiobXT8uv4DFiZk9b4xCcxRk9xB5hki1pDEBcWSm2pQPhJGjhV6Rjr43A4i",
  "key34": "4RxmoXMbxfYepjcVhxhyBu1S7cKU3iuZxGcXtjv2USwELKzUi8z3EwPHuef7KXv5npeuX2in1rKpJax5bTX6bKrC",
  "key35": "4a6jkX4PCggJwbxMUv5DeFPbVZUpbMGFyQYh7XcsSPqPLRBbcHTubG9BZzrhHxEDZ9gPmMwY3xNYKx9MS7EWouYm",
  "key36": "2rxfJnPHg1dEdCVFkqihic97RLGXFvnT7G99FUGYpLfaLNZYyS9FaDTsdX9smMVAFdBPurFn4A6BbBji5eEDUM1Y",
  "key37": "tmKh9eNL44f4hiiLgqNRi3vdgeTZ52bkTNZ7nrVcuvYBiqPx4hTBYSFqijLXkYA9UHFLsnyUZ78bovecMz88Lbv"
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
