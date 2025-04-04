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
    "2CR2hR7pfaSHYjWHpR8aAdVDRarvGjyxHNFjcpi6dUc7Gtwpqy1mn4M61Fe3FPxy8JsZjfD9GdT2j9enpFMd6LEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tjfYZP4x4oBr1tQ4aRrdyCb8ZA3UeUunaEf7NQqFrHNai2rGti6aHNyqJJffE7vkcyjPaU7bLHjwCgaJvP88aGT",
  "key1": "4xuYRHzFTRzYKkMMmdCjirZXtSsamEQ237uHbHsCEATXyTsH2siApaGM2hzPnn2JutAmUktLiS3X1sTZzsce5Jdw",
  "key2": "53yXNVj6S4iUYox1mLZRFMkq6UsgBvwRicC1zZsiYRvPKS9zMeAtRDaiKxFZRRh22qiJGmMAE5a4vZvzwJeatWia",
  "key3": "5ydqk6Y2qcZMkciFkxmD239Xi1TDRRWXu1USJY4d7UqcCHFYeCvAiwhXAUtvWcuXWTcsbYHr2y5gr4fv6qwgppE9",
  "key4": "397tGHKAtrQmyrWM8u8Fkq31PF7ovFxyL9wSUs9L8suVvrXyGoFMJ14994EnP34sEPiwUtEc1TjKuvfJausyVTQq",
  "key5": "NNC6H1gHCqNvKYDbMkbNz6bVmeb1KQvGpZMqfNU1xgh3kF8o6s3NxDrsXGUUpVXfSBC5qZZ1Mo1dCYgaqLBLvpR",
  "key6": "3wEJMejFj9Vmmuu9qJAD4ov55uuErK8VaKoRTtLTWwY6MAZWpQ2PaqZcRFwhu2bfSK5YVjXQaxE5ozdXgESjYVfF",
  "key7": "65ucEwTLbc483mD7mz1f6xfyUEWfoPtec4ySZrUNbGTh6CYQKhG2f1jKgSQ97y63ySV8DwirKRcnyoXPBqYM8hjZ",
  "key8": "4Qz41mw5ryw4fK1yr3qoW6aTcBsnS9RQhu59MHUYRVTr2397H1hWDZfAHHLPB6FTmaDfX4bVZ9doGL94ZxNmu8is",
  "key9": "4AnRLjnorzwppmtk3y6PohfhauVHFCpbbYoQ5RNHdTitTqmbQ67p6rVLtTCXowdFo8VdR8tXza4wJNtzjwf8J8AM",
  "key10": "3gW8JyMAjvYqgzBxytCpFiViJzdGHQEWUFAJeCd4D1WSzyRfgSVsCNUzVjd3sufSkiHCb7yF8Q44g5unmkVE9wH6",
  "key11": "2nPx12HMk1ACiLJNGkm2vPaoTYmMfYriT1fjwbAJP2ZK74LoRfMVCL3MNVrLXmf7B7EkbdgYyYkJW6qAZf63HG8m",
  "key12": "bvYyFea6CHSjXf7oorbucjr1MXm8av1jBdy3znMdUYaSrRDk11i6K2hv4NeCP9ZBuZLQfZtei8tTEUzsg2rRGMn",
  "key13": "cgG4MoJTYMcaZoEUBvicWH2YCoofCTeaWCbrXDkcVgvX5mkGHvhUPcVkJBd8px1GRQGRQids2jzrr4X3kzesBtP",
  "key14": "2WGTsLQv1CTkswHegC2dkSHWs3PNHNMBciPfQnx9HqPZ7uKhXWmwyeu5LT7z54WKx3AhvPKKZhdaCNETbDJFnv7L",
  "key15": "5VXLCan7iUzTnepLLPmNHja1wQDj8pQ6QJRENpAXzUdREMh6E6Fapqf7twvvEyBgwKg8v8n4dakZzHwnXfrodU5v",
  "key16": "3wSwHrh19ubY3eusCnoiKtmWneAJ2GJeHtRtXNBwDfSrK4QE2W4X5xNeAtMhKBXkduEqQ86vagX1ErAK1W4f5QSY",
  "key17": "3wGdsWcFmaEAwyLn7f6cCieyQYYFCFG49MG3ZttNbyiMRcnZvoX4KfndgmuW4E8Yz6qu6gyUADW6DwUm3n2BJ1V1",
  "key18": "5zhfLBRkyCMhW1qR1TzujCiDp3eW8kZ6Hza9UMXZMbgf2cMd6yKqon1UXinccopwB3ATishiJrGdQea9KNVFqe38",
  "key19": "5ETWAcW89ijS9rSJPFc8H147wPuG1LpJuMbSDReiWFPn3PaPMSHCRrKD6YezkmgYprPi4KvDEAtcFngHoadnDzLo",
  "key20": "478gsHnHyrQUz81A79uoLFq8y5iJNLicG6gc7TQ7yCim7wQGQf5HY9snBMTp3UihaEqRed7LPSd4g7Ge2TrE8ecq",
  "key21": "2sw5UYYKJBzPoVY1fEdZ3MAFsvKYUg6GzkNtJ6o5pCoXdKLZEwQdvdARKKVV8W8ehkAJFjeGFH8mkuMc1o57PBdj",
  "key22": "2kePuRazRwcuA6Tv9XeGLJt4VscsRjaupMhS6PWQ1R1Eo9VZruHMZ61eYGWWCEEiB97HQWNjFm4EUoqEXakQwKZL",
  "key23": "4ffS7pjQ1GWn5kDSzBtwQ5wrqTz5qPubJiVfBonNk8L8Tu1nN7PE7LuSWBfCqp2U2u1GiZe77fxxKPPNYNHcv6EV",
  "key24": "4WE1tQcCthYuP5vA4WiU5KYkcuQ1ZivrsuTapWMVCfN5G6AS9EQL6VFBtFGUrNxuCexkvMZUqY3md2M8D9zc2f8H",
  "key25": "WWBX3Vvcae41WBqKnzxXUKp6a8oN3WGgoJcohRzJnKFHvYrE8G5Zvf2gPbt4jTk73p8PQsVSWY2jebja1Z34fxs",
  "key26": "3QEVzb9Bchb52XNxd8ikHDvAA11uKQGLgXhvSnq6cLPMr7YmhW6jUbcvDSkrzAN61GrqqFKvBL18ZjXNh9E88re7",
  "key27": "XB6iskAU7G6FuWQzFnUfvWVkF24Xouyra5iQUsnDdHhxyUpSt9xYCb7fJ3eS3d3MikzmdKr9XQMukzVT3MinCX5",
  "key28": "3BGBAEoCcnegSXmoJrmKWA9N8mH1CN32i86FjE49YctdqHCNby1KQ5usuncgiaXDyZdEawKzdE93WmZ6ZsZhyzYG",
  "key29": "56FnXyeY2Vx2uzstWJFa7zgUqAUUBq2bbgc9KxEGVPUzYw1fqFT5dj9tt3YV7P9HWm4iCRxts8jguyq3QEF1UiqW",
  "key30": "3b1sBPvoe9q2dFRq2zhJYZ1UMgjm3sobWxdU2Y94U1WGpdDausWnvtMUNZAk69Vmei46K8xf83Nd7jFz36qbPvA9",
  "key31": "53JCnja2qciL3TfHc8CpNkp55MJxCuHgAZ4rtB47XYXSbSfsnsVJ72keABvC5iKQ7EqSk7mVHDxbCFkzZinyU7oj",
  "key32": "4X2bozPrXWv9twxE1VRWuLymx9n9MxJATrJZzML3Qdb41vKrpAHRdUGLyERFqJRELj2CY33BAZddnqXQVd25wt3H",
  "key33": "3jeEN6ineBdZ53TByX5DxANj5tM5WYs1Cf3VgBsnzHoXA5sC84n6A3Xh3v5fP8PrBoS8aZzqmHoBSxSvEa3pW5vF",
  "key34": "49VV3EFCcnckmaivBuCv3Cagmsa61oXK5tY6d7L1eewz9Az8ivcsT3JP9UyFv2Xy1vaffjWkQka3fZPQ6WFBE4En",
  "key35": "3LN1cAYrRJbPfiDmagbHw95KcjwcYXKfP4ACH3YtLLYRFmAhhv3oSx6K2niQuVxmBAGgQTEkDCbmbW76bAUk6QSz"
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
