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
    "2QZuCaXTC2xng3f4ZafjWHWgtEYt5PPDupqiQZuPTqDWdtueZC2tVhB27oL7bVYU4rTkksoho1mzpPwdhQwNqDYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CVJ6kvL4B4ABxCsNsQGh9kxjduSNMnGc1s2JHzfvz6xVsH6EvmBFSDfAEDiSZ9ESGsbUb69PcHXrybMfSKEsjmf",
  "key1": "4W4mWNT6STSprcUZcmRVPtj982oxwfD8sZ1Gof6x5roa88WoFz5n7Sju7XM6X8vS53VpkbN5vuFoJiNavKAzYSpW",
  "key2": "4mj2Y4A8NsFvhYtt2FJ96Pv6r1HSB77bg3jnSeoshWxZedWBDtfnJ7EUpVs12Smr4mUJux9QkSEYfUj9QYpv2JnR",
  "key3": "3d5ZjbCnh4XWSr9v3WxUNeBTd9DhugN3MAWVpJwWKxtFZNkko1mjRbCU5ufZ6VTsGkLrpnsCKLhjFN3b7emYCjHc",
  "key4": "5XYct52rcX9v1n6peWVPPnDr5EsbQLD8Ujm8CCBpCUQqfistD8NvU3ouj27rs4GNrUoQXmUxYtG3zyVaoN6hohSm",
  "key5": "45zKALNwbuqoac1qPvve5aKtVa15dgetJRd8KGnifedNhWAdDZr1CjtPMdj1YFMGScr86QvzBVjvWLFM4vHGEuc7",
  "key6": "2NwDrMKQUBizgbwYcbg6MJf5QrefjQbSZW1akvi8M2GxYXQT1k8VkBTxzVWgv2ZijsXRcGXRF4q9nDFxeP1PoY64",
  "key7": "4F9EdPYdjjkuQ7vQwSojpetGSVaGwmx1qunpFpzHLd53fZ2FZZaqiDaS34wN7QN8oXcgroDiVtYdFGG2YignxZeS",
  "key8": "3NrWiD4vccjcv3wZTnDF9cVMUpVc59wU2pUGtdED2iuFMU8eUy7H9M2WWU8b2w4Y9pZSpSv2uzzC9hSfvtLU4LsN",
  "key9": "48W7vmJxL2MyB3c1UWpT6kDq4Fr4pn54H4RyhvjEKQvEMjo7h6qLHFrf48EjKRMB4hN3VLHkQBQWB9TxmimDGVyS",
  "key10": "5u6df8fXYzuaEVVhJTVb2J6kXs5URB85tN4cGbH6M2rprgkgA18CtD6cYthoTKfQQY13SWAGg9nUXnP1shKBjFpf",
  "key11": "MrXdZXJV7douBKgtAs52tapzSdiPK5pdLx3yV3baGP2Aq4G3EKqejKUjMmF1KG3Na1zvYi2TLYMP9Pv65dfuXtG",
  "key12": "4BbBBTiQQ31GTrUkUBfhuudF5xYNJ2RNoXgSEWHSrJL9e5Z31P5td6BKT95mSxY5d5y7xNJaQu1XsP5tdiaCqLYn",
  "key13": "4UqNRczJtx4zqzscGmF31623Z4AvvKaA8GVeFnhNmDS6dXJ9JP8DaUYmwp9NzKFdTWKKUsy2V2jfb7ToNS8yv5jA",
  "key14": "5tYwxWTBKooZrzGPYswoBrJSWVS8MWCYu9Kf676YLCwEFFdWwoGQaicbvj3CTC6uGEgBq24YkSd8mdJKEnkz6X3R",
  "key15": "DjvGHuuTL9NG4WNkvTqCYQ1qF83jDsZHaGh42RgYScELvyPWjy7BNz79QK7B6xfkEBV1zjrXGztapJeqAbsJT2n",
  "key16": "fiPZavMCjRyLsFNyJSxszz1DBmwr98ysw5tvXgWxEHQsjXkrFjU9xwKtigv6uYucCpxkWLyZP7jbjA2sqnPr51X",
  "key17": "4QUqiezkR6rDwyjLdKvbWuMaGne32xErJ76Geq5hKEZkyNtUrGfkuu4kr7wRSNRio2MAYL2KpBfmVbJdzP2yA5Zn",
  "key18": "4fFJqvVgVT39iDwKuugNaUXkW6nbViGaDuwSGACm1ZXLQfatyJDQK8jkYf2nkCJjz5AGpvuQF4M36J2BY5n8Vfjh",
  "key19": "5zq3EAn399MTwcdATqujZMfizf8XAC52kXL8AyGxnv5PPPRRnhDqoV3o7YUangd21NFeMTRJvdSDC79CVchFpHAM",
  "key20": "3L6p1Ddtha88hwovrNafDPSF2XyHJP1jtRVsM9NTxUUWQevES8NBgjUaTsDXRmZep4fPcAShicemJddZocYEsvZe",
  "key21": "BTMeeH3Yj4iaFAqAUj7HkY5H79WxskkcvZ5hMQ9BPLmTN5we3JCnB5G8C94LMxtdDpBYBeAApN98WLx3BVd4xxa",
  "key22": "44ULB5CStQyCATzg7Qu5yjXfieaHo5edza8FVopKsHRQQHPT9Uxk9mRvHmaywCmwwmcxpME8VU7UcSUk5dDjXabd",
  "key23": "5GvpTpPmaZBTg4Wuxasba2DC94AUmxb374C7vBFSzQKZBw75LphXDxsGJcZ4ANRfLszdafDi7mBxqSVqnjvpH8z6",
  "key24": "2Z8cYcV43EgHALRjMezL5SQs292uXsqJBCCxDYm9DDSAimdj5f1WgfmASQaGUsdiQicGUaKK7WQPhsApVKMta6gS",
  "key25": "5nzsEfGCSteayNpPRnYPXr4SSzUEEoFM3sFv76pqMmmJbwbPxzXPE7uRFRgNJZwXHpWYd4zKpNa3vRbcjcHZSP2s",
  "key26": "2JQmhvLU59kkDAMkqi5zZVgdcNMynkNb17ho3Vn1ApRfBXZSV4osVZjqNWprAtve8V8eASSqjLjSTJrhjYmsbUWA",
  "key27": "32zqt6w3tkgvBzFmjTFw67wBb2TvsnRexZoLzBbzDwWywz35DjSsKgh9KdaMuw8J2xiyJrRKmNSYdTh4kt7Q9wiU",
  "key28": "4X2CDpEfSXF9BRmCKjBqedATiX1RHpgTRDQfRbhTaGL1aCxiP7kLfdT4hdFJ24Pcr7Z3Goyf7wDayTPf8cGUWsYq"
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
