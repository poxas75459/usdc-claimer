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
    "5C7SrR2gsRjdHQNwKTRudwYTtvz798cg1i2tEghVi753YKiGmTa3oUwva4jKfF8q6VWMrTxNciLjmJLFSjQZc8xR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JkpLi6xrayFDwxrJ4AnMtCL7D3ucJ67osojdEFajqptmCT4M29Sa3AwFW3ZCLLCspNGRyxdoa3KXSU29FWXQ9Zs",
  "key1": "3bwYGG47UzQdhwizePD81tbimDWqrcPnvBVS4HXCqQfqSZiHsHZjWh4TAu8m14YmdB5LLxo9FqANBgKpVmqrfFnz",
  "key2": "2sHpkGAYfHT9cNZhHyHerdbSvYYbSS4dW61hRm35dDv6ng4bvYuBbkE432x1mnmyaQtr1xhBRTQGS3NzQDE9tdgd",
  "key3": "5qmgzEB4QECJzR3AXTL2VXrB5x17rQd4vXZiwJix9bq6CNqarrgX73NVfXTUdJc1CP4n6dwWygEbuYUSrVj5sbMr",
  "key4": "3pBE3En1cAorDPpii7MwKd6V9WekQR5xjPjtTVkUs9ju7ggiB7ofQB7hsP9caSre3yagMyUUB4W4HcVbzZoxUM47",
  "key5": "tJvk1BnaNV9gELnapeAKF1KFuD7okLWNUedgrpYx28XP5isdYstLqYbaXejFXoQx5J2rX77RPBvGYpRnWifLWEN",
  "key6": "xqMrj6gp7K1p3tm4YJxiJ1iorpPGhd9YD5G8NNZpEpskN38rLwDaHzvcrWDai1DN6ccn47z6tZebNhUkwxdNzuX",
  "key7": "4WDRm6dvj7m8HYp3fLuSQYvFa6hsWF5ACDrsgTCbKCF8Dh2d5KqUccA3p1MPGAa888moHPprn9cEfQi8cPbw68yK",
  "key8": "4ZBFLWuMqrE1EH7NZBxxc55fGcjsjFPSktpEaLiKPFC19W7kDBWPGFyvtU9pNiMRuRsM9Shmh1GjoJQsSh8iWppS",
  "key9": "2Rk3e2Xn3Mt798a5TAJbSgYKHQf76hH44HJDQKV8fzvddMS924RnL5wM9KmaLFBFMCmq2pHMxTGyHxLpR2vYbWnK",
  "key10": "3JN1AAg4XVdMv4aJKPej7ZqMLzR42eqVGTfcQTsgP6GnXe2CSSFGX44nCJE2utVaerKZ34WhoMzth2tUvzp3SKS3",
  "key11": "Zmv9xHTobvMXv9t3xGuRimPZRVKjKG6eczq5sQbRihdP8yHCTDUSJNeRZp1J9hx8YMYdpRj6qZVAvqFuTHq289L",
  "key12": "mCF6z66eP3r2eLtAUduFuY7MkwKALh4HpmESkke6EpEouSsyZCXmXxZFbug1Qn2xHPPmhNFR1i6kj1FNGbyT6NH",
  "key13": "4K36eNAVkq8yaNNoGbXWQJsM5ouHVSvd8iRdXfJUyPZoJi9bLsDVgbCwes3VeeNPpX3f618adK3FUZFN7VGZDAKA",
  "key14": "4NA9Wdxo7bbqkoWaotgMEk3uUuXkV4zXcxBRukS1T8XLZpo2CE96s6Ysppv5F4qs4CMsZqesoUN9EaUs4NfXBCRT",
  "key15": "2NYw1GPtrxfVPxKcmqwPY3fGKyxiMX5UaSPHvnrXGmCbpUKeV5JPo9mgzNj6igRVwLt94gp3ygHX1QpKR7T1RZGQ",
  "key16": "nd5dM3y2vV4vmjuLSbNLge4Q7XkYSCXt5ihDvwhKFJpBhGMuLqi6Qx1fNrhycawaMvzbskguJY5ABJLt714rt4p",
  "key17": "22e6B57ZhQMUywq2zf2EoGfFShoyUwZU8GaCVLRY4a58FSJJJaJsmmiBNtRTiQXX1d3262RCncHJAAyuG6QrSe26",
  "key18": "5n5JRc43EQfEyh1KHUH4T8iZubreZNm5U1idVjV8jpEqDrD91z167QzxwvPLHwcQTBWX1pLhccF6wnpmcpYiKgih",
  "key19": "2cjANECXtqxfQaSVTxSauBp6v1jLZ7enXvqcJkFT2LbNjufsKrgGL4PcWqxgoEMvCbhdwDwgaceiUjnqDjdHFfFF",
  "key20": "2vxJEJV5J9gjgfv1kqEjK4fYkQJ5bQjPM9kaSec71FSQ497ZeQCRECMy1nkLjcxHy8p5UtWQNzBHvR5ui7pdtFxQ",
  "key21": "tpe4V3SFtmyMCqNpnUR2Yn5jXMBtYjVzu2TbqqvJ54kuCiS3VAgbMuMVfqrgoxmUcYvsug1RrSVsgmMxHjgkJEB",
  "key22": "2o6EFrnsfSSrWswhvadqjKuMdA3sSEpCt9vpfJcSpFCwiMmMwfrcYjJS1jYVWEakVtzDgG4X7yqmbX3ENgH5FVZi",
  "key23": "5k5Uh32tZfMZFVeKKqw7vUVHrvvG11F2nMbkkDnfUTaw5pthMDZ8yBhouh1L2dHYFC2f59zNeN4ujdw4hhVfVKK4",
  "key24": "64nzjRYPPwaG5gstnzYsUKkAV5YQNGLXB4osr62qAnngfpj6J9W7WfVcUssGG3kLLk7ApVpYZ1f2J5y2JKyfdzKA",
  "key25": "3bifYd4JYYCxXzN2wi4Z6vg11p6oxRC8T1ddRqdG6eiNDdJ8Gm1hU4BHkTXhEupRLqSpZZP2ERzvD8MNDQwGXkxW",
  "key26": "2gKWWE72bTJnMeT4AYBytcSfS2zB6mKSy92ntLTgjgbioSQPU59AuLSWidnuZPmxi4opYCwFvLhHmEqNTuYCh2wR",
  "key27": "26AKbRQ7CRP8yHtrGh65MBfx7az1j1U2CLM79NwdECuqxxqmYcmeY18zypwUbFL8swiMioSW365BgNZ4j4VCXB77",
  "key28": "64sthPv7CquqdMJCk8ihwCtbt2eCJmJsMhY9rvSGd75h74eG6BzZ8YuaVjDLgu9wdUUGXKM2xteiRQqTCWNaUAsy",
  "key29": "deJNjBMQgjC9VJ6nEfmaKNkdVqkhieV4T7gJiHDEL2vCBq7Ysa6TvshmRikZLX7qUe7PAePD65xKuEEuPqFFV1D",
  "key30": "oM1inHbEb5GTpGknW7as6YUvFdjvCJALuig1kX3K9TqzwQNASQjhHSWHijHdTh4xkLU1g2gzwFF88hkiBfMdtzF",
  "key31": "3ciiKMQ3sMm4QCjwCKWFroSGeZVtCeK3d9Cmjj5DuKiAm3YMWTmz8Xxkt2ZYjXY1CvYHyFzNf8bsL67F9ikxsbrF",
  "key32": "2MG9R4bXqvJATtpB63AqXtChcehvc9jQLXePRyU3FXzwQZNS4BBe3HdcR53ArAJFUShrAc98hNTeAGY6d7iWKkap",
  "key33": "25KPHhcCwHrr8xSCrNToiJAc9iAyn1aB6vZ3Ayr7L8VZwEcVMbhNonZHhVTjf4xZw2BnWe4cq43su2CYQPCW4YkJ",
  "key34": "Tho8mctLpPou8RYmcdhyZszEFPLcEXsYMiRrYvchSTYqm9Ug6jtba4LAD6QVtU9ZUC2VrQHKEKQUWcwinqcR1an",
  "key35": "xWMSxXbXP3bA4z7yvFijUbvxE2qmDtnfd24Vw6fUVs15i2AiVRpzPDRcTE6o1M8GnHx7oinioaLCUGRvL7YN64h",
  "key36": "5wwYVrYr6TK1B9aqNNMrKqN64488AnFXMbBWia6oSW5zNsWDqsPFqfSwHnMMNCqPawaMBbuJpvQ1KY9k4RUuqfmV",
  "key37": "rDGXhUoQir7jzgC3DaWJTpJGEiVtdYiZgVXdtbw1Le3WAUKtjV83WWvnCA9LN8b9QANVRHrwdqFKevQ6HaZfJFX",
  "key38": "3nYs5u7f9nJRKUUKTPSXy7xsNR8KjvbTeZ5AXwf5McnKjXNTZTtDisc1tZZr7XBJKx5UVvy2t5JT2iC3pWPyJcaS",
  "key39": "5fAEDW1qxr1yWPGTLZ9uC4gy4oBd9EynEBgG3aqDMdDbPYF3uiH2pC1a9B8yEoEUHmLk8UApshYopRALZ9eLkogr"
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
