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
    "3JePAX1e2mKKdFwtXkKP2vdg8DWScife3nkZuuGRj73pXLG6NmXrJiTmjfbd91cWB1YTWXpmNFzPV6fpR5roLg1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kesjkjc4nq9wh2KnUWzVUzFfwsArjW63tKyWEPctpycpr5WB69ymtjUQsnT3eoUKDC6EKcYXWjfoyggZ2XyDUiU",
  "key1": "jLpHZwhAe11RKk2U7p3WkZAeMzK5MjWN4j3Z6nXJx4Jm2n1zd4DtUdK3khPQT736jHNGNvEfTdMGuGU1pa9gwrA",
  "key2": "3ixjJqeUmwiuz2jPcQSizaKNJiGFeBkNAV2gDXDa5z2UgwpX8L5bjRtHiDKvebEHo5frScLvdJHJy3Kg1HgEvp6V",
  "key3": "rbYdPRYKHr1Y3fMkXfNijywfVc8uo7152Fb8Tnbt1RoMYgeW5G6zwxNVWSx4RPVdYASYpwW6PcfLL41CwBah7ZQ",
  "key4": "XW1TodourUo6Vdhfiq37UowH8jF8GHZFdiSymPijCeZAKnVqLhesgqKCP4n58gsXBowR9nW6URTkpKwHWeTSBVY",
  "key5": "VyuVcnCKCqL2tszP4iL9uXk11byiuMZxcY14mWfoYXwR2vCKJsxFWZAAzQj2MWYSCqrPNoW3TtKZLrjBRQ2phoW",
  "key6": "2ih1ut8DB3nvTy35J53L4e3xZjRWyea3oMsorfifzVdBDyyVnpvtRR4wkXY9vjktRytt1uMEBJMyKDhktpTRD9Xp",
  "key7": "2jqc8B3ETJB1XbUdwxhnsGrAtjFmrhjCqnZ3imDYUmRfzZLBxSKYibn2Puee2NPNiu8AV3acn1f8ZuvtDEz4ZFfg",
  "key8": "TSFgrFZ7fZh86YZam31rJ3ZmxKgsJZoEisSGKGwHBLZFWHasj74dFbw7Xp5nQPQfNddPWLsWjQmm1XufWWi7W2j",
  "key9": "4kBhAdnb9JKPELtJws4fYRdrwY8bkSu4P9yrJUGyj9pGLfnNjYb63obDR7kkXLjbv6fG8xYiyV5xNnZPnTRmimLB",
  "key10": "3FtSXiEUSnGKqRtmoLNNc8bDhiQJeGMMYeZJAyweLYpQtQJ1rC3C5HTpiPT5pS75Doq2KCJWe2Vc3Vqp9zDnAjnU",
  "key11": "4nU8tdhrnbrSN5aK1nxub3RHHR25JCorL6Q7Sh3VTgVpQhFepizbCd9ghmiRLThyGbgdqhnnZ69KzzrZB3CuYEw7",
  "key12": "2hSfef2P9cLt14YTrK8DPzNC5FBLNRcMFigrwo7QnoFDhxJpTpBxECJUP6UEiTbEUtaUaKSAJb5rADZMQDy1ooaN",
  "key13": "3THyhDfBuRgRWt9YxnQoc2tBieekWqP4xCFDSsfdJTtqYgGmcyE5mA34Uvcgwcy58KVFphwmjoUDDCF3N7G29b49",
  "key14": "3t8eU1amtEU45zZmdoSMHNwK3w1G99vovrbDtHMHjzViKMvRvtny7Wwq12QpWi6aDTgVq6BhA8qRoAeLs4hJ5JUf",
  "key15": "35rKKeXGCJqcwhZQUJt32iJYPLjPo9ktaVHaNYENAr5F2Jgr547X1stjiGBoEbnr2u6m8Hp1BFdVRxiCWM6VqFa2",
  "key16": "63mRekR2F1WERGZesZGeHu6sZzXCuyCD64qNttx2LnMEb9LtjeV7niht4QMmeDN3BawsKZb288R8G8riRx7k1xei",
  "key17": "295TUwoWpsc9aJuAyiTrdfLtTVvLPeTW8M65dc4rWXro63SYP9GkqHi4gkz42hpdLSVPckkLantafYyWyjTVmraX",
  "key18": "uckoCTH5YAQKYagkZi1v8cY3wD7rBFk3Tp2VF73Tv1tFZyjc5dfo9EBKYfKUk9rKZtqxJWoKuxtDCAoumcCZD9e",
  "key19": "SzcpJzyTGifdfdLR38aDtLkBQc72at71gmN3iMk6EATwqrXnXqZMPWgbfA5KWxxaD3Mf7d75RMmnxygtZgGnoUb",
  "key20": "47G2CtUHQhkjaznrJR2vCS2CZqcMAAxJT6z74DhyM54bD3h9gTFqxQE6emBA5CXqhc99kc2va9soLcP1Yr84V2Gf",
  "key21": "5gBYLVQzpyHmz6XPjn6hg6JnwfVRNmxZuooJd8oqfrtAJW8D41ibR4q2W98Gcpb21Fxw2DvWmDhiZBYWAYG44Bqu",
  "key22": "Yhwmjr8Njc2Upd8Qy74nRAbkF4mGYrdEiBW1Sahk2o3ygv5XL1BgknA4z3aEh853AcjEbWkNdGpoWj4e2efpJPD",
  "key23": "dKZK7PDDaUYhRLfi3tqQj1Efj8eDLTXyr8XVSBwvqxqjbJqaXNNU9Psc1HpupG5KX2bkhdesN4o8oSAciEAbsSV",
  "key24": "2KqWxQqMnujtLzUoV3qjD1LD1164hiQL42TqhKyJ1kaTaBW1ayW23CGNnyNBp4QiA97LyEnMTpbmYGVy6jsttPrg",
  "key25": "r2yfm2vKDW3VryCJWZZY6PgPu5SHit8SbSRyHL9Zhrd6wJGiCtyVimCeF6BRuFXGTQ8QR8Nz21oZi2J6zFWWRqz",
  "key26": "2sXFrZ5oyYeFAiDCnAFXhH2JkRZh1YCHA1QuNSTfzLwmRtR6quoqD4WAYT9wcxzHd2pcv9ah4ar8aHihHP53X9cy",
  "key27": "SwupRMViPDripn9V9wSaBtgZbpJsjXWax91QUfdqdcSNXkw8D1MTbbVZUnuhMNSVbAwRmxPE45sm62UHqWzN4MG",
  "key28": "3hZBnwTPxXMmk6otJToL1siFk9fzCmkDa1QoGa57qJrcMWkycj3prcQeus39SX85QgZ2YUyWGb9CujrgUthWtcGF",
  "key29": "51aEGcN4SzTdqiGp8aXSmkdNNzTj4gyMBdhtaURahJ15qw8Vbdcodgz239RdRVJ8dptGfGFmRADKGvXXkBD2FHfG",
  "key30": "2dC2n3iYDzh5eVXxgMdSUHAYpYYkN2wWGYS73qoqAapvYxXreMcjWXhMDQBhNKv2Kor56SnTimbv9RSFpBENZveJ",
  "key31": "28TEQm4Cs6fFPkV141TiTBMT5Aps522UcdMHW4bovwMeMne95fuCLYzwkqdk1J2geaqWNAiQ9nbYfaXGqEZsGJe7",
  "key32": "4BCEp6GpPJwrq1XvJyLKmmr3AXyLySGyLJ1vHg1bUaoAEAQVrwQQQVHD7L2Y3rzAWhLFPZKWN5HRnoKbZfXqwuQD",
  "key33": "5QHgp9VjJtn5up6BKCHmqmHKXCHw4fzLRQhuRRUbAWby5CbSsKZKjL7nzm6FMfTdN5PfyhT7p2ZkYxqoCPpVRdqs",
  "key34": "3ZwEFb8ZeK4m7HUyWaTE4gswwQwcSvotX4BVRm3Prge4XFq8iHh6DEBBkvopZdb9gjbevw8maq8QMjymSvpqppRd",
  "key35": "489S5Aj8RMtHRbgRLFURZ1Qfzb4DSkFhyvNDK1hDyEjMmwCeut7tFfkGuyY9MHwG6qkafyfF8ehWPFuXhqiC6Yv1",
  "key36": "qL1ts8iCGBcyFDP3Ua88zXhBk5c3ophpqZ8MV1ZzbQeMq67VqfqwPryQLxaXQn9AuehFZBnXojcjX3x2bN6msTf",
  "key37": "3poEzcEs3tCwx6tZBFcx36bLR1CApkDFM7hpA7BHVRySzZSwGuzcwaBco1gYfDohPf2kjkzsUaU27pEJs4tiXdGA"
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
