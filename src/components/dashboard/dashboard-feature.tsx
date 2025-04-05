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
    "27YURdURyNATNwdz79v4ezn4k66g1gDGiKFE1tqncPyEJHiQjCaXGWSeWgSFFyq9WEnrtihzCzJcyJy53UxtTmRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ar8GtF92SHt5F33hEHG5Jsf9jknXz35u5ozsGiMd9cmvBQw3g4jtsotDo2w49tPYpy8wzKycY6bA335umBtgLSv",
  "key1": "4uKJYGtTUPqoeuNTwWcSJGEZVPyoPPeskqBLhCvJNhdxRWTob9f59nx5QC2mTGUewa5cEDpy5w4TM5BKaacmGaJJ",
  "key2": "2TyuNikaeWhMD9oPhFA8ZDSpbq3GZ9AaN31bkF65YKaStc4bZ99yv7qZ95mJyicVNqxGsFjzukf73LkcBh7W7YZo",
  "key3": "5ZMJ1QTq8Z17JadC5BBDq8TZAwnRAgNpQdLkkzHA2ssUdULhRjEfxwHSu7ZorQV1zenP7B6iEvy2YAwXT1SNNun4",
  "key4": "5aqWnUz8dy4upvE5tfAPM1zz3u2MTT7wFFbg2sjEFvAQfZmxp5uBh31SkKPrHxReUDDUU5txoNEKBuXXeDVkHPCi",
  "key5": "s9KUnGeteEo5MEZRWGKWR5EgGJhuzQiv2ByySm8ja2yaB1d7s84cwnu4LZgk6VPUvQngWupyB8jmQuzjgsBaN2G",
  "key6": "GuRivLQVtT932zgpSfYN7ALX5FGgwpnP9oS8xM9ytwpPsE92N72zMh4qjYWSAGUwtQVT4rVD91A8e5dfS4ZTsGZ",
  "key7": "21ZuQpyZ77ucds8SNur9mRfCL3jjkmmqYmn4gEi98pnJpGmGPxsuPeAUn1Qy9L8amjf8UGWHWGfNefmW41Q2ikMc",
  "key8": "3RR18Z1hGu7CKikjpHo9KsgaBoxe5PXuLjox6bxL3R4CCaeTSykT8pKU3j29gM3HY7osCoGu8e4NTkGqTRmi7mtW",
  "key9": "2DYbceCcfs126cyAqgCVwxp16D9GdR88ZTMUC9GCJJFQF62ZHx82TQZ7boQYr92L7E43Gnm6dS7nyn8HgqTRQiuE",
  "key10": "5btd39c8H24bpLfgX69KMyVz3B2eK8m7XfGqDJ6HejG36WSkmqNYKFUh9BwWMqTGC7qS8X1SVuiPkacq9y674P4F",
  "key11": "BjBqw8gCKJQ3EZ35LbTYBzm8PYrZrFQNPXVJL5EamDFvUoKJN6dtiBwag3YaqM89UJ8s5rcMgFyHhWTjrNy5MxU",
  "key12": "2dti7bN82ngtg4M8DGWXUDBUSc6UnCJ2kaibLJwiM9qpK2AQpVQCiZkLG1DbPakhq1poanKGnTkaWMT1Nec1HiB",
  "key13": "2CYGDvakRBLY9Y8QT51jdJiaYZyEtcAQa8AK5kXtqFUCXtVZoAYoqZaBRfeLxqTrdXKZKzru2ev1s4oTzQ41DxM",
  "key14": "2vbhZCg8n7RL7TwuhfTacufN7CCpcrrHDD8HtDavuZ9jx8r68A5VtYRmHHZ6rzGgK2Mk3Mw4icbxhCDhyCDiW2wv",
  "key15": "5BSds5Hk3gy5z76Bc3qZkWos6cHAkSRsPjXgofwbwAkZYT8di7DNXeJH2tPTagTgNKuEyoFJU7xYYiSFMiXAixjW",
  "key16": "Y6K4HUwy7BquqVWu6avoGKNTGAMxXEdqG6YwL7cJc2M4PMRcBEAt8oWkbs4w2hexKk8CCJn7uQieV6agzV53RaU",
  "key17": "2EfFGGGgxM6dQcDj93UZRAMBTAFz12vRFUtpQrCWV2vVm79uWR1CQLtMUeMJugWntWRpiFrL1BcqJD2VUBR2hYtw",
  "key18": "45MdsTcouMvhte3QnhaB7fa4tC6j6kNqspu2KRY8bRFGa8Nq2wGtRCw8zKNz3XiEW5kyMcbt7psPrrv5jRsw3hzr",
  "key19": "2D8kxcEgqGirc56Tzr1k6CLy9pZWGhHj2yV5ar1WMrgS9LfQiUvsrjE7yMwQmPLNtR3vPoqAhTnLzAyZCfL9Pzy5",
  "key20": "2MQNK4hnwFdDjG7U6xG3UPSv1CyFRqGBnb6cBqosoRu2GM9xF2qNPbcJRcYs5TanaHUFYyLxoGyYmaJJKtwFBZtU",
  "key21": "5ecWWs34fHdU33ZiVoghsXGWx4mAN6uTMeztuxdpqB9A5mJxyTKFHjUJcuYqrzumSigWGMFGnJBGYbEktAjyiTLm",
  "key22": "3LG5N7xFjtAfGTayrTDm7Xy5tMmV382CS28XDVFXnb9ZNytjnfxQMGjFxchJuvdM71xN77DktyP1dVX6ZDAvKSPR",
  "key23": "DcBMggt5w4uKBGZV3qJsAt4hjECUE9MQ54rFRZXV2vXmWy3EV1CGjWvC8DrxDjhn4TV3X6jbgr7a4vHuozw8z1E",
  "key24": "2GohGoVhSDbqPfBnaLk6YTNJRRJsprseePaZNHk5NhDMAwXUbiA1hTqnRqVaNvRNRbG77EWkEBaegWF7sC1oBrQg",
  "key25": "28oAkw7THRK589GY9Xoh3Poqt4ocsrv5v1xHnZGvxoVNGmtC2xiXaHVUa4oRPpXGNzozFuP8urvxmDh9c76sDewC",
  "key26": "3r3ojNKMQSYikqyuADSdThngKKrEtCMsHJSyTeHLhc2BnvyXKpAZoeQ583caw7dWqixfMSkvwst2h8XCbnG3KELf",
  "key27": "4taB9E15pzXkHi8rUeth6qejqSu9psXRBxEh17wHVQpqsc3VHu5aLCgG6mSryyrePPqqj5auYNjAgvD22ze5iycL",
  "key28": "4mXCr5b1ADC7C3DsK9xu1hsAv2MhXVTjPsgrLpSg2CyiLmoA4bXkTjMosunMieNev8tCzcC8SMLbDaUoQDBjeHff",
  "key29": "5mn797euz7B5pE5VPY4ePwkpEchcAwBQ1Bgfk7w8FR36G4NqsHXewXf51xHtMBpqX36mimfNPsXvC82JW7U4yMYP",
  "key30": "3aupSwu78dvYeZT2HeYmyzLhUPLyf5Pvp7Aa9ksSii29FFqVbTPY8dYpFaoCzdjo3Zc7b9SrENDyJcUZuMt41reM",
  "key31": "4G6bYp4pg8GX1y1uQgVZCSz7dH2Eo5CUGkdAYtJFjk49bFXp8YSr5f8keEwax73yHTt1W5zac36qz6maTXKmLamX",
  "key32": "3dQPeCw1MwRkgzAoKDZq5uxE2yDbU5Suy3pFb55oS4tYy9eroAokC5eYRXSpqEzeR8gRojm2YNWMj6HcP9raVQfL",
  "key33": "2g1FSiyNP8QpA7Kitju2UyXZymnB7PBm2di9MyuKPyFHSiquuMV2dyG8HskdcXwEnBQ88Jhf87wQyemtjvXim9CB",
  "key34": "4Z7ufyqaNMZkeTFnLAxWG2hyu84ZmjhYCJ7HYPUfWxSWWc65GDVn5NWDnizqbeT1XsLg4PCktvSvN1BFSXce2eNw",
  "key35": "2jKHU5Y5sfcXQh8mkxTKkBxkvXaz4qVSCBSxA7yJRsLp1tYiFHR9ouXKzDpgUX9CzavCFnqZGVohTxqPVZs12hRT",
  "key36": "ccF3L9MYUhrotV4d7uHz8eEw7HmQSkduAK5Y678kKsREr2PWeFoz2KwHdLyivxPcjAQkKU8AGcSepaUT1MEFMJS",
  "key37": "4edT3X9Ue9qUu1Mqe3ws25U1T9ikji5KQp5KGaWVUC4A4yYkr8GMnzsUxeUyiKmCzgQv3tqcwwhbnaRx3HV2Ucbw",
  "key38": "3QQodiDGLxvUXtwqQgAABuoQpxar3sJLzzBMp81Kjj3sZZm7RPtTyiu44kLAbLng6ky3mTVasdhqN55AJ5oBBU3k",
  "key39": "2pjuQp9aQzudcWkpA9ZhpF3rGA1ZYxoYbWtjV38kWCtnPbcXaTeAMzBgv9EJauQNnQUdesdvDbWxkqi1fYVPjzJ4",
  "key40": "EGyUEncwgPYF3YstKgjjo56hJaS9kFXoJokE8Hrsf7H2VYQeemUBRooPCJ15ESg7uKi7S3FJMS9aVD7PWyrbYoS",
  "key41": "2XPZbiaY17GC4e2mm7MQqVbnK8YBcDhu4c3nZR2CLi1cxTvMLdURSoeR2LTdSrhUG6KKmXyrH3Bw5suQBMsyn2gd",
  "key42": "pTG549FjfjsuFPfpLFWTGz81iCc2wL5VG8zcgenbnUws5mJusXUjrJjSKuC4mfx4S1LVKjyfYWUAtkDMiskXd1A",
  "key43": "5FS9uKdrpCGH8sNMUAhGBzsuLoeaAiPRHPXB3YKMrMBEHyvEx27Xvc2PaNQX2fUXP5hYi16H8UfqaT11cMoN3G9w",
  "key44": "5NR2Fx4Z4yJtfEKRCWkHyvjaDNkGiuXcmGqunoMDTVykrbo7rgY36cpyanMC6mwBsErzHULBFLWpVUkToPqj25yq",
  "key45": "3zjoonXL2h71Rh8HTvPL7ghYa6t611HbiGeVwBEk8qiGCHaU5LQZ6fkeToqRgGG44gedTRyN4bU2TQ8TUwYS44TC"
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
