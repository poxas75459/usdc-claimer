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
    "5aV9EZJEES4FN1tSUyNqwEepNxHrcwFHKcHULdUqc2u2qKnBtrbtXQeFhbeLF1jDEBrYpjhzoY5f9qQJhkqJLQTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "338nEHbjh3EtH2haHUc2ofbTo3pRTgLJj7kVX4C1BpVLeAYKGq19zeESE4K1Hi5MNaxZeZy3qXu8Wt5ZMSz2kC9g",
  "key1": "4ct8HdtunZUbWiKBpK1wEqf8rBqSZRvJER9PwkR13Zemw2CagL6a2fEcVQuJwuRKbs38uZucgz7ri27BeGXniuQ9",
  "key2": "2SwSzUntQZMbJncfVH712VHXMzqpM6syhcevhiC3iW1MqW86Pptzr7WFXhD3FaWHTt1MzZtUutz2yp4d8JEhcUqy",
  "key3": "4JRLfgc8Ut1rHLFHucBizMqKMnZoPzn1Df3vwabgCj7FWvfmEEAKr7iyJ4vgw1EAiBP7QpykjhVfUcZeo7VibZYd",
  "key4": "55gzhVdxMZM9o6aD6rtKPhRqAz3bkGWjoJKP433xu9PTHoLpeckQcZJjqDasZ9DwEev7DCUQX2XTGCbv7H1LrFWq",
  "key5": "4uB2STqJRx7dZwcnFnDEbef3s8hCi7xWZwYSpgd9eafbJdc92Ruqxdbi3y9HfRB5Mv11TWoama8NGhXLagBFuWDj",
  "key6": "5Z8G5gHKWz68DjLZPe9yyEfektWCKvcio7MYzZ8YZw3nh8bVRFCzGPX5QDNGXehdFthePhVj89Yt6e7TEMeEt7JE",
  "key7": "WziEf2cJG8pM67QartkMqSK4b7twitqXLL1AixY9YgCxkqHUnC1g5FBgme68XKF21QNNANeFtzVpRu3YeScyZQT",
  "key8": "4srjqGXa6KH6okfBgwJ64x1cQE49dzPYtVDpSvvd1HdLVcmjmdh8D8fNHNzishyBJVetHqyN8kdh2MEHjJZD2qmP",
  "key9": "2E8uvUBZ8RAHMo5JSy7TXyS3ZV2bG5jhMGAGfzqj9qevBFMwaRLNkzun8tb4o17TwNFzea75Z3Yi54tqahsRKi51",
  "key10": "2bG1rkzSdPhHYoi9rWwFKzMc7mzrPQzk5Tj3dhtZ5v8iLF9ZSP9CbXF6QwtoWApMGKY6DecexvdbpCwdUaV3BXmC",
  "key11": "5TNaa6nnvGWtTaK8nQiB1Gp8YfQTaHo7WmhfNN1TR3dA5U8aGVRGxvAcv2Lvqq6CQwQqwQ5J64gYABXtKQmKviwC",
  "key12": "3WrbPqiR24CdZUj9mpAmQTR8KbaSL9MvaM2KRTWPL9WgPYHaP6QWMj5wAi2Rqw5RjJ7zMqKQzqsSq5ZnGavkC8AZ",
  "key13": "2V4CUm6DZkoTrpakZnD6DqcLYLaxHGv1Rk1fH7K8V3LafzbNRBWRUmfmWBhfrqf4jBmoY8Y4zp9JHyKfbG57Zwbk",
  "key14": "a7iWFURpvEQM2xAfLnGCypVCgGgxa2SHGufbW5RkKAWqJ4FMxdxXcmN5EhF7na3gSL874aSGdSd4utq3udv3Np9",
  "key15": "qQPFgPGaiM6pXCyqw13QN5nrKPPLtpSDXjnvpxcSBLvcyrvvsL9qGc9KX14QPsaej7t1m2Yp9orx11RwmsromWo",
  "key16": "5Pw9uUy1xPFFht7ykGPN8RSrA5Dvk1QLWNxdzbkhHQMW1ZSqb4JUEkw3v2n6EwafA2xFdpXk9nXFPAKuh2Rw1x2u",
  "key17": "4QAfTWohj28fHkCYdgK1CWnGZQWxJ35HAsiGJZxr7D4iA8zWdyswYSYBiZmTgP3w2nUhrTjCLURArcvENdgmbbj2",
  "key18": "A1jbd4B8qaGVpjXhboUTFvFRtDReoBx1dTRJ33kBsejmC8eZ5sDJVDUNTgrYd7ZjLz9FQxiWdMT3XxBABjBHSZM",
  "key19": "347ViHH82YFXhmbnNVJbBUKFLMUDtN9w2Y6aXeVn7md66otAGVs1LykZp5A2qEFDgPw7kntbgK3UrGHQrJYAQYx3",
  "key20": "hu8RvyYgXfmwM2qd9C4FwScWnUn5UTc5Yhhp14QV2CJK53L6TdtpBXUdcaweFcextXrfk9JDJLtJJdAxAdBtyj2",
  "key21": "3dYd3ivu5im3DedmQB33ygWAztsMg8CbpXhvz2QQrxq2xqyA4XWCpMToWHs7qWfoj27Y8TRQ5G1ismwfEL76ivJi",
  "key22": "3V6vB33UJoj4rUM3ysC7m5PCguGykPZ8atQPnx21ys4Jen1byrWgc3t1a4tMQHbNpLufkKfHV8SHXcDQYGyj76yz",
  "key23": "3EfwQuSb1mPScuJfpMK9hSmWPois9R4SY1EwnbSTQjxdNcrG57yoMNavZAWog3ySXkj8juiZfq4htW9nLNT25FWK",
  "key24": "bFgevhH55qLJ8LwV6jnXrDwuTAZZjcNJ9dDmJS36SGdeq8guJmrGYsqwxLF2taJhuxbTSBN2USRJgTZeb8F1xWJ",
  "key25": "3UzUJ449oLJTXmiopeKccxedFmR8yiyMxPsMgo2TjKcVUA2hLzP3pfpy1UkMm51Ew2BYj2rPhZJfMzgBkTCyYzRN",
  "key26": "auvpRtR4KavQFabpURD9VYPXPYF5fNjScbdsSet1JyNf7ngy8NUNm7Fjesqa1FUBgCjJQbEU9eeQeSfg4vwDKrk",
  "key27": "2F1eic5RBHUPsea3EaXpqdLVv2aPYpY75KMFToBcR42CfnJ2FxVR7zzwcr752CDfoFpKAu2q3Lyz5JzAbwpChK9Q",
  "key28": "4rqkYzeBVxXTGWH6AtQJanzAzK99xtRs2fF81r8C9nhGHD15NkPRZL3CUznhbVynGYjk5mTGzfVHRjhkPNBa1w9i",
  "key29": "4aKCGfyngsADAxpFSVMbo5vJh425xNcdtgLFbFQ9Ua7Hng3iK5tT8tQzz2iH4rjANDJofJecmufaj9yXSSBEvQhV",
  "key30": "32XM83NzAz3kKop4WkwXVZSxp4QSXLV7Ltmc9D6adCEvAitd6SUkPF4fqgDSGompP8jnunqrLFn3JZgJqSMyb7AN",
  "key31": "2vNneCEbtfEqAeHvfCMQnQU6Ki8YDN4asUe8U7PiM32UeGezXnBq6jsQcYU3PECP5usDULFdVxZXou8pb2u1oXmp",
  "key32": "EZLaUmJTuhvVjqCiyfBipZyjGKt4G59vZAxXFnBGjR4t1mFCjBHequdjLuaMrb8jBkWm276V55kLSSQMpbDhsXw"
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
