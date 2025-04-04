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
    "7p4MfZ6a7N9UsfehSKgvmujM6ysZDmMpyMUoS2EosYZWFfuvs9V772fYJ3jGs8TLNz7jYdajF2UuCRBijcP81Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33cdtmiUAGcGvNc7ESeTt7RTqLrf9fE9knkemxC2cJXseEfPsGttHYzpLX4osFJm2ekzNLTBKis3JgYa6sY3teV6",
  "key1": "22WKGjz6uivCfGz3qYnDTFrYUvAapghq2Ha16czP4skd1N2QkGMSpmtXPpDyaL3WQnGnm458Vi9FL5kFLsCQ3H2U",
  "key2": "4b8vYPHjAf5PhC9TdnaaGuusWPoRiXVJyuE6t6pZR19g17woDxuQT8fyCX8sk3jnUQCsD6Gf1mRSb56iWyayZCeK",
  "key3": "3vS9PqQxJM6BbCs5U6prVL2BkaESE91uvpzP87bFt4TLj9EzeaeiVfyVm9EhjZ3p4ae9P8TRS4RZ5RRJuaTfLKxi",
  "key4": "5zCrmryUYpVDxomXRf2jzjHyEL85ZfLbpvj5qAWWQ4Vr6wxxewrYrUgxFbRaL5Qsd9gQTo3Skpe9thBnLx3TfSrc",
  "key5": "Dy582kVaBRrEjshudchNWhBFDNqhvqUcSXdpHepboSbNoL4c4zYuNZWShkdam7HhmpDMPxP3LMG1tTxePby963m",
  "key6": "5JmtgNAGEzPUC4wcGkfuaDdmtQhETCCWFGdD6AdHwhUWizT5Vmh6ecJj6kBXaFcySbkxFVqhB1wkFmdrFbV4hML6",
  "key7": "4dZFbGEsCtjv9FiEjuaUn5Um2xiPTuFD8N2ANoki51iU9sB8zLsFd1pYk5G7omHukS5v16ZUUT5JE1jkhFiTf6TN",
  "key8": "3UfVznmNvDi62azuXQKkQif25LiCfPtr3Z6VaBmgJCPi2whe8jfe6SYr8BMC4PFVwCjDMrxWfCKryrTim9SoqiRd",
  "key9": "mpgQoE1gYgdSbALxAz9RXZvXD53HudSqUJedxaPpuDuxZTDWvognrrwd4zVq999bQm6vwQV1CWoWRQHhQQuDibz",
  "key10": "2RXtNk8Ecx65F43SZMKy4T8KJSHt7hZF5VqZTbrB4UCK1Zb6ff6vkvhZYVUZzyLkDg26yor7o7hZK4UHicZgVAxE",
  "key11": "1m5nU55Z67Xop3bVBp6zKuV3VoPUf5SriYScBdykVb8XLaTdyuHwwjvufofg4no9RoWD3d8RkhvbbhcCvNxzqak",
  "key12": "47eYznvZZQyLR5FNu6k7GUne1iAgJuSng8HxnJFkvmjdnYr3iy1ssN4WvH6ajSSVF6zvWDwB71v1DdriRk19DMGh",
  "key13": "2wEMuymr2vRqAyXX3oS3tYNGNoEii4wG3kNbVLJ79iJ4ZV7Uf98ZYAiQbhqHVxzdpV6TNTmBo7QSxPf2tLjWmzxn",
  "key14": "2Z8kW3cRDj3KNLtvH5npCS8GMFFEiUo1pvkstKiSjVbPjkmZvA71aFtCLpPiZvPCdoeCUbtvWVbgcMwreqCC6jVg",
  "key15": "5jDLmMM6SfxGhJVqiiTWFrzGUSatRaqUswFouJiRNEdggvP4QXZTcjV3Sv8GqDeDZTWZXJcFYR7PEu1UK4XrtCZX",
  "key16": "3JvjG6QPG21KnGGqTYuUghRcycP2ApUe1FKA6FDJcV83q2p2qgqcotcwMhf6CCD4WAywb9stbFADXsJ12a9RPTKX",
  "key17": "2FjnuF6JRCTzj91hqytxGmyXwvQj8ajZYjasHcEWcRN4JUjkRs17sNDnfmmk1nnoL3BiTyp5LqhwJWoUrramsmF2",
  "key18": "5QzQtWJYiK7QQ2exQWhSXKbqRenRpRahGWViJiBeqiCzFSEzzchuhqxM2x9NY8bLu5E3NTP7Aeru8V1XGwszvsDg",
  "key19": "27gmU14hvXSVYDF9Kjvx5nMo4SojVmbuxzEGVUkf76wVwFiYRM2e72xmo5aArv8mdmnYpMzgEANUSedhpBXF9iZf",
  "key20": "4Kf2DUu5pgN86bn6JMXeFvzWVZezLfihp35xjqbb9eMbPqjMsdposKo6B8BsBKcvdG1815Lo3bu1pUT2hMPiGHRC",
  "key21": "37gAh7eMLb9d8LSpXSBDuwYowR7EPe15SWDHNDpFiRVpDGg35BNBWCtiLiWc2W5APTqNci7Bo3nH946kwJY33U62",
  "key22": "4DMeUr1r63EM3zGTmDmtETrNWoxCZ2LhCskHZb6TCoDBzyKy2iAgqkHsEoZAApRtJXaVHnvyeEWdmbgoAVShnLgn",
  "key23": "4VMhYxWLWS3jENn6FzwQK1uQ2VXBeBMJ42TmGzjsf9BpypjdQhxpzKiqUr1YS7VfXuuYVVXRbxsCKiKyKNhbM54A",
  "key24": "53LXJuRvckrFZxg6cvVwzTevECw1LzvDPQ1L1PzVztkXwDtPXFnMZrJ2RBY5eQfBeSHmsKphuXybzwicwK6U36qh",
  "key25": "2nDp56rfQTxW5ADN14aHhUyWSxX8P5TrjYhLarGCksDacYeuQW2ZvJHnYt1v6sLXCGCsRhcz71imaujZ2zecEbJ",
  "key26": "4qkcALPV61fhQt3bDdrSKfbYXAo6HN2hLqAYGSg2WE33uKNdpLPnpAq6nMHawqtnNdJZqYHmT5MpkzrqdXpR37AT",
  "key27": "4PEv9HDDVw7J9RWizt691HzNW8a7Ea64jKT8Xq5qDNdj2sXaFMiRkAHs2kD18KeBehF8qJqkz7fnqqGFgD5xywkn",
  "key28": "Bz2jcwsq9tmoPfuaMq9FmRoUKb1RoKAUPrC3pcxpngY3gxd99rFAUaXeXptCB7APpu5YDDxxkFWwqdRBUnw4d9V",
  "key29": "3t9sLtFFsutJHmbSUNYgR93kxH7XNDYr3fiZE5QHkobqKx8TsuHBrJTQzVWemymo6N8vp5JWKr1oTyvqBjbEakJP",
  "key30": "3iiHDSonrBEyMZcwWrkVbm2rpXCMngpAw5vJJK6Sv1agzszDvTCBKZF2Cm9ELkuNZtdvSVH8aouPrTGgfLsZq5xU",
  "key31": "3WWST32N3fpUN1Sye6mV5pSWww9Mch1LLQEV5d3GYVLvGLPnq9u5fXKHqUWpq4e7ACohdYhkocQXGURMraATkanv",
  "key32": "2HJRUjJCbPyHHe1LFbkmnkjyURRpkuLKyGyrH6axcz1AGzpVyLapmKH54ciQvnNj4W4DJoW82pdvAWxXxUnEeyuj",
  "key33": "48QH1aXpdrDn6VPtComLF2AAWqV7aUrYiqHcv1sbgEc5Xz2NCcbBf1BpY4wPwo9wWV9UP5Zikypuax22rXSxDKHf",
  "key34": "5khFLpiC8Amz4uP39rZX6bR4iJBWRB3pyM4EesDvKaZAM6S1FKNxfSCcZyckYnp1xfCzPYDm2pPneKLdGz3ehKog"
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
