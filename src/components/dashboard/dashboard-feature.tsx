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
    "4p4aFYoaZ3AsK4gnwiFS49XUJgnRiQrQQ3szFVGB98ouGuL235x25kzPg4TNw3dAWkovtAMHjmWWkxczTo3MqtXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnkmc26ZuMhgocT6c4WgJM5MZoZdVFi8StjTkcQtuBo5c4HYF1EJgdP414DYPTavw43P6ooThJ2Joi9MEFVvhqA",
  "key1": "3nNtHtdPEZCYTJa8jgm1XjMSXSKUVjP87QR9u35ze9TYw5n9kxGqFAuZ8cDztgmWVBp2QyswgCeS6rQ8vcJ7ac7B",
  "key2": "26BCLbHpox3j3qx65vFqq4FydjA7MpDXkRC5sbRw6GTquyVd42atU8NLDk2VWvHmXHHbdKHMhYu3wX3szSPkLTim",
  "key3": "21RgLJDanoaGxo9XCFqWTakbQa3DcwPrWVrgxmH4fYmAV2YYj1N4tSc8mDQKoeHSHDKHxFWwuMvAQCRVfRQ19oLE",
  "key4": "31WJgKnVFfJgu9Sv1V9YdSB3tZ8hWioUeEQeXauTEs7NkRBdtFkjfxbM5mMCjtNnH3i6t9aBQPMrTYP5qQGGqkjD",
  "key5": "4KVEMx2Bv94MY2qfxXJK873EnRJpeUWANHnFECV6i8XKoSB9dMnPcjQJpz683xCMYMCjvs6iQz4JE5cALYjvCPkd",
  "key6": "2n6fB3WVDULvGu8U2dKvM8WpSeoQnosbMgmy7zyPqv6ojUrX1LcyzywjyhnwzAZ9jPokvcgjteQsESo2EVGduJWU",
  "key7": "5CLdUWdH975xSPZCnL9pewLWjgDa9UxVpBHomsVPcAvCRPHGm8pG13dPN4jtje7iDLgdJPo3cWaHu3KrgSPSWNjj",
  "key8": "3FNA7Ro9geJKseDAgn6KhL5eZXg2mDV71MDdBxJNMMWnzgHN9KWT9uQW38iA4B4yzCmHnASYWHSJaEqPxK1TmQtx",
  "key9": "4uV7SJn7ZfSmgDM94euJoQTcv9mZX8ojbP3XECSNJMTTJ6i6xR1dkBoQyy6iFitkCux5P6EzSuxPo34Tw1EDnsFX",
  "key10": "jqXrVXhMHyDpVfSK6aG3dzMRGS32xZRjgLi5rvyJ4oKWaTVjxV2Bv96YN7BvVeMYsDFYCh8q1dkUm8rBZf48UdU",
  "key11": "3C19UpP27eP3dxoAFAVeU3RnootPhowqDZVcNr9J1MEHVqjbj83x4BBmja9w1pS2RfBvZhxaotGBYfcp7nx37yqP",
  "key12": "4w3YGKBF8kG18qhxsM5Mc989CmWMsrcB6d1LnGR2F6eZ7P2hCp62fH3MrUYm1StgRGw2GkYkpp4usVKLa7yF5atD",
  "key13": "3ykeRUbYvdhiE7pK3KU86ciBysxHWYh5mn3gdaQuW2JZGhNS4CH3bTDXPGJ2Fx1iVrdgb32ZNmgUF4opLM1Lusj2",
  "key14": "5vD1q7S5E3691eyfv6NnTUpKSc1nn3Aup2FjLmSRz1BruZAR5BQdkJaKgkyQVRC61j9rSZMbvHZxpm4qUjDJzXhc",
  "key15": "37LZ17EANoByfqQFybVXnuFgqBYgtVikRim7ftHTBv7RAfqABynVBzLV6EsKD1HyBJKqMMJfRZ91sDrvkCAaUQg3",
  "key16": "47AjD2m8GiBVi7cBCtPmwNw1XMFQZuYAoj1A29ExBE8LsGXGZxExMbQTBgrgpRsSyc4rWr3znCeK5hMPCDULFx12",
  "key17": "5kFqjF85r1s7197YUyXLjaGw7gay4oQXj8ELWW2QjfrrMQ1JuAPUrWwj2NQsuZSA67XbEFCtgpAukttGw8C47XxA",
  "key18": "4as9N1TmdUYLTvmmzvjFX5fXVdMzZumdXL76MpXeBrCKfYEEdk7pbAcpXHbdi9tEBazhFz5hMJsJzgdesGpsPhyS",
  "key19": "5QVXXNKuTDMnpwuFphRK6k9j7YLskhGguk3Lox4c1of9cHPp3iYMq3iCKmay1aj85UGkXgEotEW9nj2nwsuC38Ts",
  "key20": "3CA19LNoFcPMuuugR5o3HZ51r3yNvJV4KEZEABhGf5owK3iPBGWjStjmFapCdG56wPLWGVE6xrdcpRcPrpEW4vMu",
  "key21": "2743ufMQcHc5YZT9kMg1pBprKUMRbbVFvzbJtcXw1LiLUTw5vGdQFQx8wgSN5R2egwi5swvbp8He3om3c1aaShrD",
  "key22": "2ut5NME8CnaXWpLKQp9jmWjHPEAkYdujyNJ5KnsLMcusNNZKwfnc3psKQSa49vXsCJw2rkQuBC531TR2RFKU1ksS",
  "key23": "2e84e8cs7gAwqVJkhz13aQ1mbVTW5TcpxBwo23tviqsYKysxDnVwTYoCVe2bMnwrJUHjJbrc4PuU68exd2djGyPf",
  "key24": "4kF8rtkxX68CyP2taLeSQWLVihF8ctvZPtqLwqURqYY7EiEg2k1uwow7QePpLNr2Li4PzWbgMWKBpqD4TMtJ4ouU",
  "key25": "4VTi6DBP3xvDstW2kuVj8zF3t8p3gACScgG1FTmVKFDA3Cwnqeyd5XrZHwwUVVZXdKs9dvh5CGd7JAsajusbqeJr",
  "key26": "2cnVkeFPxbjt16XGoTuH47jN1pDcm7L7RxCyJxRip4joHjLJkJASjhSLPo4HxGQTaHkNyb85sinEGhePhAAQxX1C",
  "key27": "3bVdGuqP1Q8hYNW7JVbX5d4s3GXe1thjesRmLuh1TvaYeW6oXiwWbJntXUAV9ZmGHBN3WCSSwYUQo55UrNGrcxCu",
  "key28": "5311EBa64wr8XiMi5nPE6Wogh7cRTDe9MunvtRRdJBH52fPnpPHzv8g8oHaprXteeKHK5t1AytC194gbndZkbRHm",
  "key29": "4Da1x6E1SymJ4RMDPNcyBKcCgKUDaue2CeND1SPPcNmGMBqfgYHxUZyNjq5Jtk7cM8qj6fPaiDxKNx6e6RZzonPe",
  "key30": "2jb175WrqrRDP2FPuKqLaEZFjRHuxzywuJvcjCSFHGdkjybHExiMxeUqyZ31gXtMp7Z4p4BwxKHgfuiwU357Mi5X",
  "key31": "4rtRjMbeywy37FKo1Pwog2SMHRoaVTD9vaMDBo6VuJfVsujFuPJZEyWnWuwRa9QZ4AVuRAUpg5psjdP6NBTMShqJ",
  "key32": "2rp6Wg6NX4tBdKkkP1GHNrgdsSwpWk2EdJJqfrLFJXudtNtFYuBeitVXdCpnmxm8AEx6j4GBquM5eqm6rWr82eFJ",
  "key33": "3uTycbxhmELx7N5pGkNVBRNbT4XW2cx94HQaCqg4EZC4ZUHq5bkMshnHYfFUahUwAETeEBNHYJeyrdPTviMqExKv",
  "key34": "4PiZEaEQcCb2e4vWQ3RhqQiYeFnz7XW56MHivvPbacHMRWAytCeKiUEMsAnEGYRGyYS7Nx59fw4TjMRuBoaWMu6j",
  "key35": "4nZdsKfHCyWHmcYThvNEBLxsBWWrdp9nYcNzdh36W5k6SupW9kLNpGrgJSR15Mga9W8RgLoRAvQsruV2mC27P5jB",
  "key36": "4vY3fyTwKkS4PX8vn7fpyU1aDjoQWkPt5fnSzuQ46TkrgLusxoMUUjG5Xfzw3eVhZVktGbPsPMwZ6VKApBXM9Lh9",
  "key37": "36iPjdp2wRK1NaVqYoZ1xqD7gJJEgEz89NSv2peQ6szvuYJF9pkF6FMyaRp8dwQ9iVrVumAdGScGCFDUartZvhSe",
  "key38": "5Lmgn8feVxMDCkRFPEcq1imMaz81iLvDurRezR4GW58taH4DNYpEBhjBdsCWhdwPEAx2mhrpsELzHQzLZVRbpE87",
  "key39": "5JKEzTNFWDH3viZkLc94KXSpLUBdwZmJm2eP2vypq8UywwuaNcGBuoYHHHtwuyzbcztdeQcx7ykgt5Mh4ZdZ1ZZe",
  "key40": "4GU7HYg6GhCVLUMk7VPexW6TdCGZmAMgDJFv1rNsPx9uBJmLbeaXTMyCcP7HZNvDPjq8Mqyc8MGgZcv2MRZjSixu",
  "key41": "32gEfmiH2hM1yaNDe2Q5LsNooHYCWkxCP6euaabAbUeYCEjg8Wy67YdhVbZ45nPEnzDJV1UecBNxTYn8UchYD9kE",
  "key42": "2NWUMkZSNGznajJ7vpca4nRTs3HZLh9wt9t85YLPD8EbjcZ5exzU3AQuetfSVC9c6nVo6Y3Nnzu7QDDdPJoh93Qi"
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
