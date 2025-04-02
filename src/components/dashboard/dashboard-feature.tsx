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
    "5tpns6cuqwBBzi61Jxj3b8CXcde9S6Dq4ATP7MrGJgAvAMUVoTR1BXjwqBUB7WS6siDehehmdgaXu89iDP98hauo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UnV2Rv5TFtMb2xR4rBbogcfcKuVmnijo5vhrhna6ct1uHouPJ8TGauPjxYygiZR6mUG4gfRRVfAdLzYs7JBzedm",
  "key1": "4YRrUcDTsQ3GNa8zKAtAxXuViAKJv4jFtM2GkuPTohDeTPESpBP6kVfDeuGvMefLLsySM8faRzxTBvCvZWr7dBYD",
  "key2": "5BjiAT51XtYKAjMEy7wuSBRpvjCsb1uQd4ewq26q89pYwm2DWABzo2ntWurz23Di4veMXxYExo7ZSxDkEAhN6JVh",
  "key3": "3pgUwuJfU5PfZsY5up6NpmWp2VJdRF6NhH7GdwmEYdeAQEQ1ALZFALkpMDrPygGaonWc8CRx568ZUauUuPb9gxzP",
  "key4": "3MVdHGkMZ2y2Sp5GK5UkFE8Wk7J7JXbgeueYhEUNpWU2azDEsrDoPRsVLicHGB6yrA42QeNa5CKPFroHGUGcB3Tz",
  "key5": "3jVscXYy2vu7osdNoPSX76ZTtVYPvw3E7aTBy1HB3ZqrEK3gPGYcWN5ZDgohKoFWzzvFDH4N5fUnPkveL7eaPd1G",
  "key6": "5o4oHiQ8mAew3vuzoNf66wcc97TC4kQZNps1Y4BFx4rKoefXMe4T16Z42up69oFNvuRNm3a2t652KyX2QJtrFNZJ",
  "key7": "4B5UuGCZrZGjrg1fz1kFkUpKMsVgfAwA32jW75911NHNir435YSm2mjUYV6UfqW9D9yLjV5dVS25tf2EbTURVK7J",
  "key8": "5f99WZUjsmzb9HVCxY4PynvL7s8eL7D1hEQAxvM4EwBADLPekj7RnLbYSUJpAHMGRAZKhMkqtfP6hDRGPh115z8S",
  "key9": "3yuGKiceE5JX8ejXoDRyZ63BoUYTUYBeFVB62VLijt5vYk7m744HVDBUYw4PCV9DdcCw1fY6h9Ho167dzKnfbc4f",
  "key10": "M57au871PzJ9dPqXjCheqM9JbJ8qSF9JCYRxcZjh5LQfEHLkurwEwdzCjE8g7i24wvL2Wu5W9WrewMpvxdP7b8U",
  "key11": "ZmjEkKZPraFUqQrZoW7fXanabeg4yBZSGqfgJJSTRTFEnLMaWRcxDkXy9mxiMm2TW2EF1zoadGx2TWGVZoPbF3G",
  "key12": "3vfydGViAG6ZPpzsquViuCbm53bwEtrjjbybQyf3RwdnK6QDYc47BTJHVLHzFKzfew84xm1CmXy42w1wKAibzxt2",
  "key13": "5KtBMjykuLFDbZWLMMEpMtqSgjvnveQZ4nnhx8GPCYgDWKAoepeZepJomk9Zigp3YrU2JCg9aNSCYGkfWYvsAaPR",
  "key14": "9TVCyEW6YPMxXWx4gcjHjD36v3XZJEfHtzeh1uvkZkWLW8gqh9sCkpbQoNzN8F5BtUc4HX9qGU2o3S5RnvixHhT",
  "key15": "3d6ynvMLLBFf9sUgiBUBiCj5gsZEP3Zi5Z7jFTzDdekcAdif2LweXU6fGKWoz7dEEHzbSxcjXh4vrsJufsgRs8RQ",
  "key16": "2DDeexR3TdSLSb2sdnxg2cVpGgEHSBHrLu6BFMhtAa34TCkr9CpjuSo13YT8KttRXV598p7dQzkWygSCxyLLkP9b",
  "key17": "3qqJhphKUxZjtuCfDZqubzGonTS35Rs9QWZWWRCMb3gXLFhKZrBws3CzvzjuHoQM6yhY37QiJWiDtgHk8vZZpM25",
  "key18": "3oB45AM8BFznYJ9FzFSMwcPyS3YSCh19J5W9USqH7kzuVbdv8ccrgS6HXrLhECxd5LXWUgauQ7fgQAqhz9UFaHQj",
  "key19": "3D1zyPTtDggCujdniKzRNHX2nwDmTmLMDqMyH9jTiw1NpsnLJYEQ8ECaYv2Xovg2dQUqVhBYyxPrFymLdrmQKnkP",
  "key20": "h7GTxdNqGBN97dGJHSYrfW2Qk82zMm3CgSTTgqt7NFHxMRw2RWhAxAHSxCop9VabuFpQHL5RTww2i6KD3Evmyh1",
  "key21": "35YBk23XccwMDWoe2Dh6SoQTXDJ2TwuaNA3zpdAj3U64TLvQfVsde1JgpWb9vLJab6JSApau1uQrk7nggV2tsZ6u",
  "key22": "3rHAW9NBJci2wYqcYvE1TcF8JsQdpbWcN1NK6S35aAopmEd6DYV5r76sU7e9f1MLMiWKN83LfJ6SDAaJxUxTaySN",
  "key23": "4TvoJJ7bLHEaNxYtVdSGR4L5GuYxMaS8H5QHwzt53Tk4rummaSce1nETH6bdCqLQ7CKHk35rpAgcin15GLLK34Rs",
  "key24": "xENngSyXajVauX8TkterQfJ6JLXqLtn8Yx7okdWPN4sf8x7nE1L4h4qFX9vwzozfoHXGUW2rmRHe8DsqpQ9DF8X",
  "key25": "5TkdRzAF5spCrHwn9RnnM757gPvE2ovqaBxC9Ge8VGPFghpniFn5GLW5bu2LDY53DDBobnBoxxw8bxm3Tz2xBXWr",
  "key26": "jPLNbtTCYBdGcgn8BpD8KaYWBin6Bha3AXvPecWQJ5X3EZv8GykpsJao771ELe3EhTs2KSUWFbSbiAxWEFbM6R5",
  "key27": "5mKrkQrJBnKfwoRXkya4aZWDCyLazsgVtXT2hzWC2xuYU6Y1pDV6M4ySBdXJ59D7VUp1XZr9rqYzHfZn3CxV9uwb",
  "key28": "5Y1UAYBaKvmwyY7yYdjHPX52BEYrUfEgCgKm1MhQWAhyzPiGSJSFLBHKaAgeHWzNXSWFuVLewyLL4mDj7VgLK5y6",
  "key29": "4LwVhgPdzsKBQFGBeoBysVD4wkEp1Z36z1tX3MP4k3WG8wRfQodgjZYFGz28WkrqFth8LEztfB9VnrFyqjPdGKBH",
  "key30": "5q9ExBgfrYf2e8UdQyi3GngcY9XneL4fPSoVqc86dNYveCEy9ChgH8JrtDEoGpkvdt5EzkABEgkADLPm9v4mCqQ5",
  "key31": "3qaJtk6dMNLthei6heqga7ibnzqcDdcUNNte34ETBwi5CYAaK9fDt3KkEzonpxKLXTXVDnw68z76v1nvzScWB1W7",
  "key32": "qb384nBtSkUkvP2H2AWqVEShQR4BDqXRXjNQbwAhcchEXJa2sLH5zVFLBkAj4LBX8y3dyQkyPaw4tKFZXF7TSPp",
  "key33": "4Lx7rSTLcU8h7zkGGSzLn4t49foJhi9F9jP5m4tqWsPEBcB87z3TNypsX2RYtHKYjPESm69mCtBUFfGmA8rmvLnB",
  "key34": "4pBwQUZJz5uofGJiLMHv3f3VdS7km8KvfKDaSWgHt9caSxYRztwgFjRx1h73jJ8FRGJrhZxkdPFf4Raioq7jvviY",
  "key35": "2V1QEHXb54c5MGTvDgzzrGwbWNnmfLuHczoZ7pFSGQsJ9sFdhfQEjcQEjXReZ4qinSvrubF4fbdnWsUk9oJ8PH6Y",
  "key36": "5S9t7JyYFDmzSu9vPyJCWwM1zqiZHaCQKpZvz8Cb4oJS8fX5EGBL4w9QdFzfkSzx2hDDqDzc3Wzg4q6eCqjnx4Gs",
  "key37": "5dxPKGxLzELw68hNACvbJHt4eT78A7jUMwX2kX1Sqo3ftAdtVvd1b75rFZGDPM2Z3U2NjgB9Q5cu3fBB1eQnNivB"
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
