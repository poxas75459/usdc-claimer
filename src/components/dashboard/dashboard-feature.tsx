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
    "4am9vrAFjE2PXWBGk96RpNa9Bm3V6Anek2DdT5vuA9M8FXNsHAhw8sg4DEuS2THukT4ZqfuMXjJQFkWWqjHJgQjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3969Wp5jr61TYx4urkZ97ZW8UzvQgSon6vej6kZzHaQktdjLrhnLdfqHGpTburdbz7PX3xxV9UeeNrhWhchc4sdb",
  "key1": "4xjDu8i1FUBp8JyV2tbutBMmwXX6WifjZ3HTzPsyUm7KGNuDpWHbaESTBrFZRMbxsyv6Wdi3VuaHG1Pqk7M8gJmN",
  "key2": "4Kg2QfWRjugqJSR6kzxU6LLUkyQnPjuHess4sUzkEKGDQKgdbUBj8GBrwDLDFCELPX5joYrL8XqDAZRSJkQggAnK",
  "key3": "fToGEf4BUWsCbmRsLe3jbaRWiFHbvnp7M3LX8Wxe9QQA2V188RMo7xEyo8b99nE2ot1wLfUzZWbCnfgKoU1GsHG",
  "key4": "yo8xRd6GXviwGrahgU8RnihA4LBzdtF8HAydF6K7co5MKApRqbLivgSMrJEVHHcxDSYqU9kPJRCjjhrbhz941vJ",
  "key5": "4ko93zJKgk2wzgnzSp5sKQs58VwcLUBZk1DQSPrAEtT5nqDYtj4jRik43TYvjK9eSzejNaYJF7VVBPsXDJ6dU372",
  "key6": "5yZ5ng9saTWAzzedihVLRjJXneLY7kUASE6De6x7GtkAsfsBwjQdM9izgrT5WsY1VLYuiSsrsqtX7uDq54ynQFyj",
  "key7": "hNCAGbFJ24ztzFhi99PLdF9WZAga2KR6NwriEWkAvQUsa4FD4vCkyYvQA4H3qke9MtdrFDQQMVNvgFkoPCiGTCo",
  "key8": "GoAmJXzhtQJCtwGX7NRpN64voBQz8sfA6X4NVwhVYe3Ej7Vm2dEvJpgzHhsuFEj2swDfrQuS8ZRwJ6ApJrvGmtV",
  "key9": "3h6q4g7iFvcTuPkH8B6CLhzSyBZKCMCbVhi9BWSYgFVjLPZDP2MvpkmHg3qG3qRZjEA2XrY69NbQuMgMrqwidhwX",
  "key10": "4nUNpLWvfQNw5BhEhXb5NHuPWG3hpBhX2GHNDNeRkeN1aDu2xzSU2gfcrmBCnuWGkrsH6GBBQHvwasXa8jjAgK5h",
  "key11": "3RiuKeLEJff6w3T2nZwMwxq4rdeNtgyTtcJDgbtEh7xSyWmyHKVCzsSJ97T3M1y1RpvuiDMviBJ78ahxshRTUhJr",
  "key12": "3Pf9wn19XidASzsqRhvAEQhHAWmsKJbTnrNFLWJT6f2eStFeDgPsmsJu7chaGPPiu7BJzNiy36qqa3TcEXntnhMB",
  "key13": "dNxiBXKZXNaZ6sw3KumZoPEXtdtTd83LCg4gNjQHKyUwy28WzUAbYyaQvY2ei3ELuqPt5izBLed4n6TQDYxuneS",
  "key14": "32nm1ZYiQgy1vy6Ri8VH4D8gzNW9JxKc3xqYeKJpLMV2AogBdQRG4QWsyyvJbJAaKJXkUwEkUBVxHYRFH31Nx7jw",
  "key15": "3BPq5ZevxiTAfG6k45YQoenY4BpvgwM79X7tCvVjgsEqpWG4vTXsZveRnnDX7W9MLrDrfxyKL6xXeL17n1AXZfJ7",
  "key16": "5BxunjJtG7nZ2R25xA5zv83C1SzvBTdcjfCokDjZYgfXwcuJrmzhhZqFyM5zhT9pQE9rqF9syvtnTQEHeLDURzqF",
  "key17": "Xd4bytgg7xC3ewuKpXiZobx6iqEkUGBRaqFzfCGkHqRN5Cu68wZS7vcL1Q5q3sKYPX66hEi6FRMgBvFpGyGwsqv",
  "key18": "57UY6Qy6yPNb41VtJi1YrZxEQ8ywZ8rgtM2xfrxcjnJ7cMQaJ9K28jXgYUKApC6GEti6x11LtmSX3HbkcowwuSbj",
  "key19": "4XrVQK3NfPxP58d9quwC2otyw2dFe8gVKXAQWCiNnotwFaNYKLGemBbmkjdwA3oALGKcnuE2JwRHskweNdd3Bd2y",
  "key20": "2BTeLzdu2fG3a9PbpUoK3k8fD2LBdXMSGgQmxMZcVzXuibRXpeTEYnCQYtf5kZEUci22tJXADHXb1ignnGv8gQuK",
  "key21": "2vB1YtspMeUY63xc9zx29bFXyiq8yi6i6eJrazECvCRRxLswwEfkWF5uTRnfwkt4SR52tgnpqVU7CzmcWb3j6VBp",
  "key22": "2M9cMBWxZQnNJLmeN3rqoxRBLFhSz1RWx2X43gcpBjmcQRLWxakExXMkTxzBhqBAwonwEaiLQQAKCynBHABw3ekF",
  "key23": "3iKWsBLtmdZgs8hu9roTKUC934ycvDexDhdidfofG5PpJKzZmZkAUv19ctdZejF7654EoWv5iiMPBmrq2CU1zX7R",
  "key24": "45FeTLUMJzs8Ewzm6wKrVLwtZujFax4yadeuP9Cey6CokJoyDnbuWYQezHNLe1PnPbrfAU2PhMESwwuVcnhwPwJ7",
  "key25": "5YJKeue9RtRHLek41yW8my5uATf4ZbvB5nGk5F1ZxjfLi8eCYXDhqCyqsonRPHvqNKPusvXVKis5iHuGTUPmxoYg",
  "key26": "5UpTeXaqVjP1gwzKdQ7kCx5NaoyQQGnmRyNCBP6yJWSerL6kE79UMLGos5CyJSb3Z6ZDyeoo44AeaMPSNmDjPeZD",
  "key27": "4thVfL91nVkcGiFEpwTEmvpeizYZsUq5ZW5cjvxDDP6GjJyy13yy54pKC4qjxEyTvTuXCFtg36pwHZ9BpxARyGE6",
  "key28": "SGA2sJBNCi25uCRDzG5U7KPM54VrY2jaEtJkqiRkKZ9MpCoFfoCTiLkLMqSdnAdKroA9PD89ihm6HVysTjsy7tR",
  "key29": "2VE4ykKXa3qHyaWN1aKZ1r9UKewGR78SSge6pZ1Pgg6w5DF1fD7fAhUKWaT6LXXruonsTJww4ZwngB7KFe4RnqkF"
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
