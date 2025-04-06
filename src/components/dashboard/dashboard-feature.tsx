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
    "2L8cgn8KWcxyHD7Lr1zdVtgRCGzHgPgPw4PCjdxMN6wYqEbTUKz3bYHndPhuWRpYaY9VGhNtQoeYWNjeTWmnHun8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xYTGs6jUt6fyEdRNxDdsYF86Teho1ZTXLDNpYBWBhgM1NMviqVKBVZbtceW9zfM3A656gUfmXar7FVmEuXr16wD",
  "key1": "PECW5mGJ7G6aYQUthFPeQQ84MEkgAe8s1HTr3gitZXQkPNodHrS4XCbeZyVeWY3t3P7Dfsucbrvs98jGZNs5TcN",
  "key2": "AE2qFoQjRudm91m2WehLBpu8wYCaqKjkFHy7j2sMfxNSw7uJDCjQmvuGjWp4n1rRtRaPw9XFbRSFNxSXbgkdGFW",
  "key3": "5gwGdVXNohko2XE8PKnmdiav6RkmqhXandEevxFZa7cA4j76hTxPrhVMLW2DxSRTJkEiCip8fWmJzLq6AvfyBkzv",
  "key4": "4Meg4nwLDaFT1CeKX2WV6vyhoQrE2VmAKZ8woj4MohZD3ruzoRQhepZMxiQyojEtTTff8iXnfrTzwKxVnrry8DRK",
  "key5": "3sV67Sy3n3tDjYnAAXEQkJRvXpr1E68DDixbKmDMqRr5js8jFFazjvL8N4Kwrg8GdqSGCULos6Vt7C9SxpVHsLji",
  "key6": "295idzcUVsS8i8wmZ3GhLp7ht7vPW7S1yf3oTfZMKcjKofrM1GRGu8EpqCBww9GBvfEn4PVNoRA5BgM2R2vGkuvA",
  "key7": "5cgbsgiwRou6z3hEuQGRxyg5FkCzU2FXn5b5qB4GifJGhVYM5xExfGidVXZ2K2t4bvASSGNePBoAH2fNAGBfPTxp",
  "key8": "5DSUj9wTaWxffCs2pYwKy8WhaRu7rJVQe9y3tmu9sKpgEv8wFVXKnWpVU8ArKExv5A9igJ2XDQonxrjxfL1u9YEa",
  "key9": "4J4KzS4bVPrM82QduQn5BDQSzFzKnzjeQrR3EeqjfJ29vXQUxgPLX7yrb9r8q1SNmSo8j1rnZFB7CuXtpZutP4pX",
  "key10": "31nTucmATrfYAx8B44YuXUCEpoT4Aqu17UGqSzvKCMeWsGJW5Yh8kaRtWiE7PmF3L3MHAvshJnuYjXi1w6wGqT5W",
  "key11": "3cJiQhdGA4gs3EKhYEC8KB7B91VWNJpXmHU1zUUAeR1Ry59MR7QtMWGkHkPGKTfnb74K5zv9fxSXU2QaRHsHBZi7",
  "key12": "5TXwj1TrjcKrxThikP3MfmfBf4zGn9eLMkHL1ZdfHmpS9PNpnK3MdS3FpNL99oqn3PrYff13Lex7iDfRVY1QJ37a",
  "key13": "nG9CsDRwmjeK8Zu29tTKY4st6Zc6jCnn4zVfm4EeKjE8AMxC7o7juHkJNeCx1GTV8rrWG8NbtxUWCf4rSgNB2DL",
  "key14": "5box8796kTcJur2BnA5QVZtWZHfBoRmzZ34Jk7xTXQF3CKXaqP3TLf6AmGj1cCNqMkGHsYFJ2Ssu3MF1d5PoUfUa",
  "key15": "P2zyGjNEW5ngY3D6w4bqM2C3npTRkmYb7Qh3quq5wdRUTdRgZ9P4hZxMWwrhTAbpYE7Novuvi3DdP8gNVHkTHjE",
  "key16": "4TKcEKAMr9PJimH2MQPKL2xu6jjS6rPzGgfenu3PwMn4skwkk3hhF8NaecMfzDRizfBNKK5wnAch8WES3PvY2tKE",
  "key17": "4ib7LZJPF2nxCitxJLwpZGUCoovSAb5JPHbi3GaNyDT46c24E5XD5eAzjAE1XERPx4s4hRioDHh4SR9LFHZ2oEf2",
  "key18": "2vHzZdCuqzhV5cbiDM9AbFsNkCTF8a3fWVtrTLXsRoop97MLFDQZzPWxHyLNKwW63y8r8dPUjpJ1EwGBje73xPnG",
  "key19": "3v2Ey2YmjnoskRcWgZAWrAiC3bWcsov1Kwhi891G6Cub6xjgpnEstwgi5dhfikpupRSmsL7y26oP9UqxJ8Jbp1QJ",
  "key20": "4tRM6UGwvPk6PZVYkr3x5AvmjcDnbGPEQMUGpeZstfByavanWaWtWmrATP1YiDrdFyvxg62tnu9F9uunxC1z34Ya",
  "key21": "3YsbsSweX5AmLcumRT66GpDFPupsFqyCTVgBXQfK3BPLvo5vtnbUow7gW8sC9D3uewmabw4ZFCkNCAFDndpn67u9",
  "key22": "3BWZGKXjfCxYzjbSpNGErmKJWeST3T3ziNt3FAgPhPdeRAzdfy4g5RGTsD7hYrajWAwXVnavZMH3NuMpvkR6haQJ",
  "key23": "dREtSELkWVZx2kguzhHDU716chvBmQqrcAJkbSvvpCBuURgvBArSCRyYCsxK8ssmBGy8VdM6c9Emex3GscuKd6M",
  "key24": "2vaXamUHdZCo9NMZKqT3jdBo3qCdTwbbuUn8dLXpzEutobNpV3bXgQnTG3fSVNXAaw9domiXpuin2qP1uvUeTPDU",
  "key25": "4PPPvfhiNtQkvNQq4RLmMyXM66LvDo4FvnijQTCaH9FvwXpeCqoQpbeMee76qN8smPFygnnUYF3sCfM2dxwN6WSJ",
  "key26": "2NQLmnSsubZjc9M1D3GF4B85sdyJGtLkjubQYjY9p96sio1BNzjE1nvEupGiSEkET51z7xF8vCcwaeDpP9Puryzk",
  "key27": "5E7z1NXeWAREKYnHZfepezQe6nVPugxtrnNMQy4dFnMEoyNopqbd11SSujMndSMJmyibAXnEizXAncuWBHRkEYEk",
  "key28": "2x9ZmTE64t4GyxG7kADeSvH3QrCYtJZEvy877j2RtWQ8fC1gpBFsno3XW9GhMSRNE9GvdbLniEgcj7yQDQBfg65V",
  "key29": "1M5yEk2LpYfbr6aP7XTVRd7nf8hdpXCFhi9DSREPSiaZ7Ufqd1MpgqNi4gq8KUcVKA7qkGGZtwPscT9wUEdNnkB",
  "key30": "2gf9tK9HePDR5RB4VzQhWP3qfS2E9PE6FUECXyhnqFw4JLrttQx4nEumHkAFpREtJFQEQ5HqsdxsfoHD8z4yeK5g",
  "key31": "2gj5QKcURHGyBytj4378ZvtznMYRfPwNwsp6niAXfZrPBEEGUk3FrUR6xUJqknwPAzyvwXwAXhcYLr8qX2SwS8Jp",
  "key32": "39G8aEACWixZP8QV3KhdN7p4WahyKyv52Pw99esCmq7K2awfLx7VFBe7z7XJDTbqnNjnDaXhY4pTrj14WGvXpotR",
  "key33": "qLqVzkrMDhsfQVk9Uv5aXYtUjBuwAJ8EwoLrU2yZAerF3QoWj1CrSb9gVFgBUHUCC7X6N6Pd55DNv9hCYzNCnbs",
  "key34": "7BYUu4uwcm5rdikL7aPyWZdbjiPiZmtyKAQGofHb5PQMwqrp9zJasfaNnd8iMjcMAwJiSkh4RRx97WZLUrybjBg"
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
