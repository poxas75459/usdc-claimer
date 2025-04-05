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
    "5Xp2vUBNZ3U5Dd2JHyfK4QuiUqTFAnJ4qd4KwueFggzJDMDyM8UXxHtchp1ucgszSzcng2qsUaEmM7G63u6HfsXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GjeCtsnPuTQQLDigKEF5SazYSsHPtPxjdhYmmEEXp2ZTBPRdcGyXShiR9V6FNTTqHz1NJTj81Yqe3z8xU3NipSr",
  "key1": "26vzJCVBGGFpWRmThJt3xTMG6m42Wi9ty2AtBPzH1vGqcXhSncEQLVJVsSqSftbZhGhYfKa2Ynz1ef7dxF8q5BHd",
  "key2": "4bkuRrqx3zzi6gdBREBfYgjErwhAtUmiTUj7VU3G2d3UdX5tWuyVQxRSPsgS1txfkPX4zhKAUdnPqXzAECsP2zcS",
  "key3": "49sGJaniyhxFDcWeKJhtBdFHvH54FWH5zZ6i7WrrMykSjYMW9eHk52MzKUdQpypYpDxy6MHeVvzwZSZcfmhRYpjK",
  "key4": "oau2a28A5daddMZHmbEQZhZQNW6F4dpTJ8b4zxv6sk8rGoom4CvJjUNJvPLqRHKzkY3jpphZyG8T8ydQF4BRpns",
  "key5": "2xSDomGC7QQpeGE5qmKpQmWoJzPEcFcXhLtSpYnWFZW8shyrkxpNiieYBBaXDdLoXmQUrrHmK2vd6BYHqanBHgka",
  "key6": "3YLG5ZSZWb6LxSgqDYZXAtEwGuMn8knYFvLDt8Cqq1aK3CxMbN4hDT5bd6DUM6rGe2vCTMLA3gBsuix3XRGoJ3k3",
  "key7": "2tA8dnKLq3tmDwydqZUvo5z1BC2nVFdE3KP41e7c5uqS6pXrHQx7eJSxBLaaWGcsYWLh5SeN7zVXQ3FUt8L27LLf",
  "key8": "4cmLYLsbFzR4g2WsZ78Df9XXW6TShPGNi5ymk8hjWi98EZ3pFay1aKEqewqqSMJxR3hANZ8eJGJ49gqJm9XUTmZr",
  "key9": "3Uq8TSUUV2f391J5uHgsAjtK4VXsEba51k1qe6wy1uWoYwDm4WCjQZqoNAyuxThN66gC9xHd15oNCACES6XEbJUX",
  "key10": "4g6vnQbt19EXEcc1JKmMxAkeLzMdoqL4eShjNmT3mRifWjCM6tLAE5upFkjYCWiRw4MJUr5MFQtC6J1KEtYz8QrH",
  "key11": "2P31jFNFzbtQmhVnp3SQfFPjqPuhG5kKzrVcrWxbKJdJbkRZtcAGUdiJKsjwKRxeDhfbKStwoWYkEdg3hVCCy5u2",
  "key12": "3uMm51dDgS4Wi441k4qQC5ssS8zim7o2tBAxgQRATbZxEVdbCpnpJhWGatGgZM5fNBz6DvRCpuCNoXoPLgUfCFap",
  "key13": "aouNbdWbkgwhNVgzLDFghGf67Buyd7x6xk2vka72wxNhXziF1E15Z7bbnWTnwqEfM9DQZU7CeD254vN7DYCbGKs",
  "key14": "3JYgPV3zCcixhynZL9Gw9NWgNzYq6WMTLVCFd2QXa1DhfaqWsPu9uhFjP5VkPQMBmeco3zHzUMdopJMupPhicaQ7",
  "key15": "AHrWUhcXEFwBEwbT2za2kGzWN5yb8fvCnLDK8uKFoDPHU7FAW4S911EHQS5rZ4gqPoG85RKuJWwsJUfcogGQXei",
  "key16": "5stiaJKp9BJLUSxyAUjA4TCrPxB7Hyiq84FLxKpfP6DcZRq9THbf1UYfmxZ7WkyxR2HcdH7qU3SwdX4KLtu2tx2",
  "key17": "4HDG4geK1HPwoAgxtsUkYURA9xQWjqvqucCDbzoVJGzEVbjmVwfg1iRym1duuTZPEUUsSdevBT9D1uzvjQaQomEX",
  "key18": "2DbmGMeSCLC7QJH61jDriqyYvv6DSareq1RrSVVf9NYncLXfYNn2baKYHahVk3N29Tt4A4xgATZuMqrn7DwGiVQa",
  "key19": "5Qc8wo1P4aGMJTdKsE5dY5b3hRHexHw4goxugN9iQnYTJUgngagw7Z8uVsCJhTMJWs8GPhRMEssjcZfz11jfUKaE",
  "key20": "4kpd1U8SYidxrBniN8Qjo5wtsSwL5TVNSPpgxL41P3rjau17L7UDi3U9mMp6X43RPB6CxywtgQzUTtH3LCDZJrEo",
  "key21": "28jcUZm5akHmb8CEAqWZnt8H2BrQTohfzgBPu4xk53S2iCTpj5rMUqHPtCDYjxAiaXSbbj8Gs9zceJL1gtVFNstn",
  "key22": "4Z4z3ogFZG67kHwsRTaVLhC76YSG62drLvKSWNKGVyN9wswbqGprLzFK2yd8r4inasEqwnSUtohSUMpp5Xfj5MbK",
  "key23": "pRspLVVPKZkei82fq5k9ZsWe8HyVX8FWr1UYv4hyUrEYYoENKEHZy8bGdGGFUc3GPtr1bdubFFMy9NopkpKFvqu",
  "key24": "4QiEafq2vjDn5RyPpx6fzaELZ4pZSJQj2Zr4i4Rua1kvxJVaThHDMZiVdcKz27Cy4vskLJAjtMqhBmhLVxTRLTVr",
  "key25": "2kWcwCJsegwkvQze1dxLW21NogDvJ5VXi5jTxvfVW4sMhHyyWePWDdzzDEM75f7SLcmoRaTJYy2VSTJLN8FLxJoV",
  "key26": "4PzJ5Bisdd2P9ChGx6R7tRHa2bFBt3mPXhAi7QsJgJfKNbcjPSXy5hx8wuPwoJCexBnVtA2DCMYJU9nsD6TxT3FS",
  "key27": "2UwwKQ3SJkampPPJeJhSjSd2T5nt4PHwtN3dmDegJaqYhEQq6v2SuiBe5cyuCTCUhoPdnK4GD9yTe14aZHnfrGwo",
  "key28": "62A7vzUJQNXRUGb15ozNpD53RvSSoCAoqAn3VvvNjnhPNEaw7VBb4cViy47WYGuA9a4L8txGteEh9vRhocfKVok9",
  "key29": "5dnMYu9CCdVFCaKC64ukgyWEg6c8SY2fz9nzdfXRMULPgjr3PbgQJszZSbZygHsafA26Rj5NETGgArYmH9tjgpm",
  "key30": "4txXngvTrZbKTGUCtjqeMXUURDXCWcgzGjqMr1k5AzjVg2ZA4gi9uBr7Cf4Fqk1qkyF13oUrAmGP94H1hZyaSpdQ",
  "key31": "Skx6BK1HXUiFSN2XqcB7u5c7McsXfksp5LvjqJ8rzJ969fH8kwZ6WE158RjfpngDkpGhQNT1GthsSkg5eENgeLo",
  "key32": "iNxMpSPyAGBdY47K4M4B18yExBAKMDEakq6HD3wLLju8YHV11Psdq2cR1CqhP2YqJDnXv6WqvpgJog81vthPnWr",
  "key33": "uDFxJMfNZPGMc93dm5oM33vNAM9kfPUAFEbkmM3xzfjfhXteSGcuCHUSqY6h9eEyUYTDyVG3Nt2TatN3HsrPfm8",
  "key34": "46bQQVxBreuMzHr58zDQyk1oE5br5Y7kqv4UFhsjqc9BuU5YEY85RM2cqhMXp1aEUoXP8qVg1n2tBd3kLCky4MbE",
  "key35": "2NdJvxSBPWEjHtDo3D589JUKyPGDcRjPs6y51TYhnb7vpXkUFoSgUzAvFKT6duw5BHxXsyqVchXLH5uC6x8DaMCh",
  "key36": "4MQDFwUKpt7282yR5QjgMgKQCAYz9pkbsSBro7ezJzu2sLwp5aYw2h5AL1wCjeU75uEPfGcn1Zs3wN7W8SzgQkEW",
  "key37": "UVZuSo4W2W2ZRuNYNgEsQJBwgpGzXFbsESXb2WVBd1nL5hSfQZoXdTwuUQXVHRHKJaywkM8N9D1dX8JHxmFsHyT",
  "key38": "5sHm5K4kCYV1ii8c4ZJFgAJoxZgMZtN39zUGkyF9D4Q95J2BMaRa5KmVjJhE3j3HVJGThNnXMv7Vs9yFsVvc3ev1",
  "key39": "4Zzf2EKe24vswQXeaQjwa8kAnqUQQzzRQTNuR7tJv2c9nV6TeQ6RBwNnHEyyFmnhxogYHbc7g43HwYKQhPPCoYv6",
  "key40": "rsyXDfAXw9ztdBqWMRKe4iJpi4jwX8ke2ZZJaCPcQeYAdUbs3rWJiip8MghTuAZEWozFbF5eM8qPir9WbUKWcFx",
  "key41": "3Ng3qEifX9rstSb56Kfzjs4F21XJxJBuhekht4cNtpMuj7tMZ2Cnpw8wGQx8s1Xa3bZNsiwjkMVZEHVkFwpRFRQX",
  "key42": "35QLy93HUXAAca9SqMKNNVPdpU1fH5dqiSidjnX2gpQdZBtwbJicq5Bac7HuGL8mczHrsqX4o3Q8NgSwKbxfVY9x"
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
