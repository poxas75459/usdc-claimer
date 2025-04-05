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
    "2AZi6TkrZSQW7cJdrD2uekwtSYoKCG23WFkf22Z3oWfWxKZwqZDxxpVi3LTono3vXjQM8jt1XvtWqB17sBfBbxbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQrQ3Y48G3N53X38J9wWgBPyhs47oNF3Y9Av8QFKetcajap8EU85JdTMwSEMKPFoykAMhUE7RyzyXo6wU8h5vNT",
  "key1": "5cVHAHkmaTwzgREGBysYs4HTEQSVer3h7zzFBAtuiSPvWokL8C6WSZcWgEfsnjVSz91VLHC8ABoN1et79pTPCasB",
  "key2": "2sVeuFtN7cEQ7xqaK8YQxcBeKk1GidoRCSvbgyBvb2f4ehMm8nxGCXCMiLXfCu4PbxW3p7o4ygrzYb4tMyWSGWHw",
  "key3": "poiDFwvgdCSQ1tbPXUn8cwhYzNG7d6xA2PrvjTdfhjr9jRLRXjfNwC2upxJWKStQ8zj6NPhfWsttrwYsEtJHeYk",
  "key4": "3TxfkvUydErMGEyGWiuAy9WY51dsVv1SSfWxffGt75GWxPdYAyRoFdLhqAAZcbzFFCWrF2VFEQR3rCjRDpfEitxM",
  "key5": "4TvLhkTk7vjpGuni2tyU4sAtWKebXAyJ3D6U6VDsTokAWuJucvV99fvqtM2krHoKc4ki8RzJ3P7e7WGU6s1WKDyX",
  "key6": "3p9UP1gt6UbV2bL5PqGtN7v9qtYB3XZjHBvkSadvVTke1qU6VHzdwbxbn4Kx9BGjUpNSGdPfaKkLuAQCh3WHQGTk",
  "key7": "5vWXBXKN9AKwDSjGxEjXPERWyZT1nVnmccJiXnkBwc4XJmcmfBBgxf5EhY3Dq8FhhVxS2DXttF9ZRVXmRrj7B2eT",
  "key8": "3r5CbdcpSe8H14k8GhBDSXdSsrnN3heKxf27vt5LW73DBkjF7bf1JW1Puh8pH5RLxcdpVZzsXSiYtpHE6V4MZJyY",
  "key9": "45VWPT6UVnjThPLJ61MwtwNk8L9wZ4oy7DnSeJrTsfo86Wdo652gh1vFUSQXxgh7NijgCTNSPDQkdf2sE92eTTPc",
  "key10": "42K4SaGRbwA6rYJ7hWLBw6sU9VgG37uEksnG8HfWrgDbBMDVpzB3ASM8L6gRupcjuMvz4YuCn7Fv5DnEdTJCAxBp",
  "key11": "3CeTFKckbCCugvisXF7m1qUAd1jQWdEPTtb4q8RAU5tWX7EguMxYjqxsNFuLuF4nFg8eAUbzWNyqEthRXcmTwnot",
  "key12": "EqWQVrvz5conUUTmNcvFYP7Kx38U4d6uinvaTnSodjhgD7pf4u8cwzuKjeUnv7qJchNTaNmU8qdvk9HLzcJLnYe",
  "key13": "2W885PGx8x47khsvdDkjFJXepV154jr2QbQ2k4GMvEyHLCjvDTmuUAKRsawmMMq3WFnfqanRA9DcSr6xueNbJTZM",
  "key14": "T9qTbMXwpV9XJpTWX99qo5FLVvBSdTnpEsKQcxbUHWWN6GMYgAHfkZ5B9wCbL94RWtaVmAGur1Lr3DXwn6YzmTt",
  "key15": "2J4ht3ndKanBrBWPypq8HocLiCqDSRpGjtBd3j8KJvnhv4eTMqp39DUGftriUKh1VJV4o4AWsjHcDQ5on3k8N1pk",
  "key16": "4KDSrk3FYKzQp7mpCgsRrqRXwNPBPBJKb3cuuPt5iM3boai14LjBdquECSXR9LNH4rFg5uiKFCsgw92zeHVoW3oW",
  "key17": "5BZUCphSp8vnDzfy1eiseU3NwTq4QeQPaX7f6vEF6BNdebKgkBz8ohzVfHRwJMQCXgpjGhp24QKaAqiTdPRkjbCK",
  "key18": "42MDdiKp2AfVQJ7X2uDfczvZbHsu6S1sdjWuPCCQoej5T5AnGdJWbLaJYCAyB2RNL97ymGTA3feYXQJEs2TxQQVf",
  "key19": "2nppvV3k4qXmwABdG3WAZ9UCN2HzSE8UamvRbcgAUW2K2aWLd9kXuyBxTCoLKE8mGsWbpf5oGzg4PuFHfgpK7fzW",
  "key20": "4ChDYXRCNJgYY2mAZR81DLn758qYGGixS376JZwTHeEcrnmbA6yUEZYxMUero1PAQbSnhHJVt7eEfNaj6c8f6AGE",
  "key21": "2g4JpXHwcdKiGVo1vipTqk9rxeLjc45TsTdW8ZXCZq2dahQ4A8PBp7kc9wXxypWvNHaabCtUamUgTUW1s2GnUmoY",
  "key22": "5RjkE8dKgsFFHtZuct2MG2AGWkV7255m9mrwfPXwnuJGM9Z2cc7xzGRTtaMZ9FcQRDdJi2ypiz5d64Tnqtz3Ccs2",
  "key23": "5EZwiavmTrgJKoChQJo6kaTgQYLruNXRXfCn4ECVZxBwrycvbz4C16MyEFYzoGMUeJQF5Tv2rBNdYXMBYUgSAQNe",
  "key24": "2Gt7fx6ha6LWS5psv2xn21bFzeURpFVhQbn4pSzuWymeypyuM9h3qhDxARRnqHkZLX5Pw5nuFCSE3Z56et3iJPvD",
  "key25": "4mZYPzunViSbTE76NUBsnKKEsAN5Hg24Q6xHzgvFUzNKifnNGpdNPj7Nnx4kFypNYXMQZYx8Be2CYUtWC6zTMBiZ",
  "key26": "3QEJFzBZocR55qhPHznhZDPSNRgG8fQcHZ4rc7wVRK94TqpNchKit3vJzponDW4feJnYBbyUP8XhH6jxfvyKVTez",
  "key27": "52a7irsGdkJQWqtf89iBiKk5VdyBoABVUXUcxNnTzqXtE4J1So8Sa3tov13x6xXn6aH5R46LniwkmqtqoNtkhxKn",
  "key28": "5yRUV1PiJAfqoXueRptGgWXkM4vxdsExvifcSW8vLHFQXyPUPjxtPvk1EfRH9ozRVz6aU87Dw7dDAyAbmkXidoGW",
  "key29": "3vRCiELutnPBdk1iD2rBF9ujTENZe6C7WhDYz4dBUwWrkkhugjccdgm2LNWZWmH1RyfX9thxrSMzixGH9vPRpHMH",
  "key30": "2j5fxejz8MAKe9QAuKeb1iGYbCMP2Zcsjv8Z13Bkqnb9XVHyuN3MZKcejbCmGW5tdkaP7vFiBeJEsm876gQpozTR",
  "key31": "5FBUX935wYeEne4uFGLVbcv63JBcCwf4muPomU5tzGc1iH5sUKqHLLHmkfCMeQ4J2bgY1VySZWTp4nu3uhhaVVBs"
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
