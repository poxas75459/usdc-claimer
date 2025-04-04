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
    "4KQbK4kXrA8X1PLYGimJ3BABVY647aytHTJmAqddsjfB9dBeztXfnnZvFaUSn34Hj4KmEM9UzeggjSV1tVfSe9nT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67diaYDKDMBfpSmbXRuFnyBkNSwWr4LKhvcGz7PZvVgApTiGUgaGvaQGbEv3TX3YZZUJbksZMio7MvGEQyoAYyxJ",
  "key1": "5h3wSpU4m2SVtAmoYz6Rn5kkovAcjnmvQqFpT9TVRdxdzUid5TYuCxiKP5tPNK5AYgZfjNwrFMA7qEvKDCmiUb2o",
  "key2": "42H2gQ4xpz8CXKMm7JjGUi4g1zEiiXcNu9DLcTVAtb4AAKopg4CfywaqkTXA8ToAUyGVzFVNePZhfnxgtMzEtMbj",
  "key3": "5mg3HtAybSDY9CYwxS1niKayB6ZY2CHhpAg1SRZ2Bx9QUURJPbfyuMjpXB43YfTa6Q2ErkN1xhzuQWv3kXLpsrkf",
  "key4": "DkVtG3RmoSbAvoabFmteZpqqUHvfy6tnHe4mxjEJhD1u5btUuZBe1xf28e2mVPmQPeB9Um5hzGTVhH5pX4TRWqs",
  "key5": "66HnA72SLEUaKX46UxBTvzMx8XxcbG8ZtT5HzKgJjSe4QoLo4b7Qqk7kREt4EPsxAE6cog17NujdB8tGJXEygWBf",
  "key6": "Yk3xZ71yVMm9BmgYirMFAsYwy98LFsjQVCQoxfoR2kCSMBL9NgTcPxwJBKhiNeejRpaUhgrLXpWjP3gUAuWv5Ly",
  "key7": "2ikfFExA36Bm74CeETYL3yDXXNafmCApTy8Un9AeZvALUX9XmEu8LyzALnD13Luc2KMReK22Dv5PWfBkPnMuJHZs",
  "key8": "2zCxGCuD8sJWgnWJPtqYzcxEy8vvSoD8G6e6Q5kGhRVdfsXz7XRiAvkitnPemNDWox6L3mLVeuXncynfTtM5kgS6",
  "key9": "37Zd8McWTvmdnfQPmpXgyDS22hst2EViZLnv8ooEMHZAcZuAEBoGJu5Rq5eQbZ8gLWr9YBBxtmumkvY1tg6YNq24",
  "key10": "4ycdLmFy4KGMSEyjsTSLiay1D75hrWXZPHfDDpmPdzWcyMg5UJ2V24QqRE5s7heSmCNALEdpDT8LiftjXaPgRpGk",
  "key11": "4YibcMDcLAKseXDkmBjjcqL2cZzCBTRYD7VPu9SQ21Cwpaq2QQW89J4VuNDZffiZHx4uk7RRcSLtfL12kHLzdj5K",
  "key12": "3J3VRQapEfk5NFZtZadN7qQJ6gotx9AhiibH3FVHCWX1rwK9FYZDpYaxrW45iPwLk54SdNRsbma7sKpiDLUCUkDs",
  "key13": "2DfMJSGE88vwEPzw1HRYiL9nsPn5CBTTnKiKVaarD2q3AuVWz5bUutSnS6wG9UkpbqnCSCiGo8ZPQoSPmgLi4z7",
  "key14": "r37DTAR8sggnnTQoSEbDPwG2s9U5P2Sd2GwdXouoqmBgVgfRt1hTHuLHSFo56tKRmUoPrzR1h31tpRe5TkMweVp",
  "key15": "5Nd2adDfUFk6yZ5wnbBMRZpk5p6Qmaqt4RfahwBzpKRRY5m5X22W3WaKTgcqtJwR4vEJMnu4srbChvhZBC85ASP3",
  "key16": "2onD4AgYuWV16MRrFJ39KRMzPobbvGBhGEQdfccFo4w6vt2yTQTSfupSUZNTbT2ySs5ytBjK7sb1X1HC14vrHtnh",
  "key17": "3yhaUobed64dAw2GC4RY6mbfrLERVTRmBLM5ViRBzAfnYhUA2eszPNNrkH5uPwHCEANj6KuhTdGeyWvPSjj1NxRQ",
  "key18": "ieort3MbgoKHEPTNvyDGyPkYu1mBeL9ZBHg5GeTE3s4EgevZUnKZm334vh2y3WcqNUvqKKqDTnWNPnWGTrkTUYx",
  "key19": "3BmPzazcd3KU1EhGgePHf7NjZfHNnM3RoqT4Gh61h2dqZycctu6KzqJJETgCXbSfRrgKPK958HKq43wyKvX4XS66",
  "key20": "271E99YVgyM4qXLTgvk2xQyykdCNVYz6U8ecC9QuCUFbzeoFk8Vb9DEu4hcYotx7BkFSaYJBrfJwfGqUvMjjRase",
  "key21": "9d8roSFrvH5RDghv4WwJG3McASitAEzLQwDvTx9p8E2C9etzQPm5APea4pYbF6KwTffnqceeTxiqcRxkhaX3vTM",
  "key22": "4pyAQVaTbT5Z1wzuB9h5k6xBjJYfLW2TCQJo5xZNf6CBiAsrLY583ymK5Vo44uGDujvbqMeVtLbqFQ9tXr7RVLAb",
  "key23": "27RjjuWu4PZ3ziJwfxb2WjFHtJVNjfk8qzxoKXyegcpiJ8F5zwZRPf1R9Xi3DbXhsbhtxwNFhQ75nKsH9GCLGzLi",
  "key24": "2jjkRReocxMkHgyA4SjeDh3rYseganNvb4DX6RPjpRcfuTcjcpvbKoLkWjx8D1NDfjJMJ44PSzKXE5nTExdLUUjg",
  "key25": "5zxvfRqsuQGovRZffRHhAg4RoTXvD3rP6S5Y89ZW53WEVfwQqzRhCk2VMM35W1dNq8G9ocryRkcdEKeidG1ST2A1",
  "key26": "4AR2g9ChYPcJ3Q3p37KFyQzT85TSjuH8Y4QbCLwfPKKjCQATL2DMQ8Pa6F8xtw6Prb1R5FbT9WoLNiG3EK475Zt7",
  "key27": "2DFZCoJYPeN3K6c21kjzbRcKbGb8QNGorhpNRsLqfKmVNEcMis87fqBiqjDsndAHXGBj8henfP8s6Ay29ptWP9SR",
  "key28": "kLwX1TMUThpyJ5Z4QXnX5m7tgHvHkjYmeHnd2rJPYgqcmqpcYZYwDteMWJJ8sNyJTnh8nTXcdC3pu6nSMjviq7U",
  "key29": "2qbR5wLDHFBNH3ywBhyY7S24Vzk4FFDhoDHBnD9RDgyNHXWMyFHnna6c1pBYemotkX9caNTyXZUc6mDvexnRwb85",
  "key30": "5gfxqUrmRBGcL79kNvvti1YcAmbotz1rzTcXexGt5pbPJozDJBhsr2wKSPRnFFEjoYfGjZzJXknLQ2U53WVJTGUy",
  "key31": "4AtJrBrb6sBiDj1W8AtGqPw3Lm74E4ZG52SaS7fY6eep9amtFrpL2bw5CHPdK7B78Uk1EqQBrxi311XRjQQ3d2Gg",
  "key32": "4Bbm5mqUkNgUjf5sqJc5ni9VezGX3rSQn3uLGPbXYt9ssRMz1vrtNyQrZ8JuWKSa4bmoCm3ZRnGPjSw6ab5hW1RC",
  "key33": "2wyUUZSgcUh4u7QSkhm6iRgPVnhEkssJ3R8eA6JePSrrzUqYNzgfGiXZoM2FMYpXdfERSaKCnQXB4HVbGNpSaLv4",
  "key34": "36udXYagGk2s3kHzGKniemNHsub811XV3eVdHESps4Jjp7FW75aVyaccgkBdigzPqN5h4pUqtSXbEFNsuTECU9sD",
  "key35": "4H784ReTkuLq5ig6dwdUryP9wb561YENR3rytJ5m9YQttnjEf4G44cphsnUwe6nLbTscwGpi8YQXwzyiMrFvqZxZ",
  "key36": "318Fq2o39EfvRgSpop15NnQBaWheJkv1oCn7Eu8TvzNJmJUoL9Sd7qfvtnbLVxgLYaxiDRZwqgTcyWaauHCSZAA6"
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
