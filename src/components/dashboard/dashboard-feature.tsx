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
    "3WRJytrkvncBEVagsgrnJqZmYPkqSZf1Lvv5kh2pEShnrtKZ461vZoZX11JWhUEtM4WTMzj2ZHp4Qr74fL3xk3fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "413jWu8WbR43irHA6u45aEbNv3MYnaZeG8Nd8Gq6LVDzDukxxfpa12WfUwCvYpLyNLgztrXUuCCSXra1sP8iLv6K",
  "key1": "QcQ8baxJpZU6xgPbvALKmFdhQgc7Tc9QPuATe1aZx5RdR9at2dveJduscseVDNX6CE66foduSYUPdmxrwnMNeEp",
  "key2": "4JjxC2G6UCxR478WsvWVSQDLPdYomWGPhdisYjRKPMp1zmXzaRsfoP86yuBUaqZexsRqt9HHkW2E9RLPwhqxq6a",
  "key3": "5N1jZNk8Q3Mia6CSUCMYQiufypkYibghW1Zs5xyYMVeXeXY6wZuHEhDie42mqMAfFBYGWsDn7LhiXtbuBvHnzmDt",
  "key4": "XX8YDM46FDrhGtNJuVZ3HDLL7bo8b3TeoyMHjEABnw7ZbkbDMUHASHfugK9hJ6SNLstGZU8i2oDVakvtAPtrewZ",
  "key5": "3b5yczoXJ291UpAiCVkzrkGryT1C9nJ5kogJyoqiJE329zgnZsrzrXyMEeLjV5pdciGisRRwKQC4krTgQ4P4PZ9p",
  "key6": "3QmNCpxXUB7smBU9RRkNeaz9n4srTDtyZXuxCJXwwbjSf8LeEhkafgJx8eaFiYfqmnR7vF4Erx8akSNGmZzVSBpP",
  "key7": "2M44VyAPQEyEHKu4vJRPa8EeLFSuSnFu9NmjK3CibP6cBmK9Rx88KWyXX5Un34GXyVXJ2AKvUys95AAVCeSBYxCf",
  "key8": "61yPDUHan7DJbS4FPHpEV5sFaFLKpPMfAfhmGrKKs8SMC4NQadebTr7zdZSb6Lhhi9Le9GTDUfVkgxCU2E1LwGi1",
  "key9": "5tbZM5Bg1oxL2uVDA1xux1t9KdaTENbb7nmKSNaG8XC7HaKT91Ga38y2RTDKsM5ZpuWxrUnbBLtzegr5QDp2s1T2",
  "key10": "2YGfxwCiDv3xJ7DFbikvFhhz6pfzLvR8szGHNxXzCTCqMFKFFATZqgPa2VNJqdKo4fnBYwBKdDP9AR9k1GJsDVA7",
  "key11": "4uGDipjnCyJPnrcbvYhwG9xAkkQw1q6YU2fT5NDrauWvQNjuHrTSNdii6CwZbH39MJnsdN5yVsrrr2x93NXLyQw3",
  "key12": "2aA5JuEQGkDXv4Jx6XpY3UXy2hSaXszBysUHnQRu9prKy9HNpezyWd9URLcZfdMgx2faRi4gRb52LACS2wKZgN1N",
  "key13": "3XHbh3TMCXhDfieXVK47Dn57aHc37pvuRVHmH1zkx3nLagYFDd7Lu6BmWAzULeVARr1mAqsFCJj365VE5SVWcfRZ",
  "key14": "5g9FV6gT6VJkrUFNUPRC5Ka4yxNk7ZpMMH77vmsKp9q47ns7tzBurLwfqFem94hrXpRdHZTgVu2TivjTTShATTtw",
  "key15": "2X24pGgRRDfGE9eShDSJjCwTbYcrvFF67uyqyc8oM5sb8ZpH63Jh2uE1PReUnATZuy5qMNpq2oHLcpfbLRephorT",
  "key16": "4jcBzTmD7mZJ5qYMUZKRg6NDNiiWGFgMm3LS87p8kS1o9vKLoBDjqCm5jjiuy7M2qJ4qqZT3Dr5YWTxHR2gaoc3m",
  "key17": "4CwqCq2pzZfVKpKaQSuY6X3audMTE1SBbQCZsNa9K6E3o3yB7pD8GGafts5sYQvdUtoKx3subdMMEcPEQzudEnTK",
  "key18": "shnJiErbLdYYAzpcWbKsdEXCu3b3A9iPTxquinskvEwedUK94NFZtSVYiPLWezHwgEHgZqirpUtbtZY51p1DknE",
  "key19": "MLzbmC4LKKXMStdyAHKGtQMo7hXrqZJDrZWfW5Di1LLEpyFPC1FRYzeCEzf6fLNFFXqBHTDH12hUFfpNx4VrqEX",
  "key20": "4F12ZC1yqU7YFkvHMg6r94mHcQ38VJYiCCFPDoWh4y9ZLyMDKHuXCsnu1jiiemiyydxqauZNDXGn7JdCRe5NLiH1",
  "key21": "yzuPzXzYCP1YVJp53kVqjAsRfSL8kJ5y54qGxbEdD1YGLSdLhEC8Vh2y9cifVKBafzkKBbCBhnSDUKre6cucHEo",
  "key22": "WWfPkAGNDvtWaHxN2VM6MhpmgkmEcZ2aWQUtyrakk4N9xvqpUbdhsyELbCWfoZV8iUCk7RXfAxD8HiJCzETY6vH",
  "key23": "Dwdu4f9i2P8Me6uAzibUsrMXo8qCK2RLkKrbDmaRUCfadAsy6Qy7kgTxPzawSvmuHNo7AoLAWnBkBBm7RXhEXsS",
  "key24": "62rg3NqRv5UfPWPwLpniXeVerE2zuAmRRD27nj2bcLdbAb6jumxFidFyCqGGS7PJVrbjDtT7kjtJzh3zEwnv6sgp",
  "key25": "cbNmKMEUMhbZ4W6JAibLAYthxjzTJ9xVezpirvWhojYAi6W59jdTcUpstaPQUGUszWjWYehaYpLWko6PRBb6ot9",
  "key26": "44E1rxjrD5dFBTD4Y9oKVD6CA56ncm5nofwHxjtoFAvwKo8wTPuym1jsHFE18oxSmctkEJbrfufGCqHKPjGyfPX9",
  "key27": "5cFtCn2EfQRacJVr39XQ8VDzXVTfgZK1mi5wjVzLNVUktyz8MkFHBqubFU6mKeF9fqWHwo2M8hJJYqjMUZyURyzu",
  "key28": "4CdVtx65nEAqjQawRJ15f7zGnFMhGc7X7tpqnFYy4hMqxHrNjvXUAGTGezzx4UoDxrevUNVPLm1gJ2xSHvgMBXp3",
  "key29": "3S5uHp4bd6CPj2KXwTLRFXPBNDLTirpLWVK475ncdRENtn6N3XWDdngegppQesiB5xde4rEYrKrwDwfJzyTHyyVW",
  "key30": "25DHiTkeZ36iUFyghYhNeWCZZJmJpU4FCN5qVSUaM6on9msVsL4RTxLQ7YX32df9cU29cpmi6dxWGvANzw4FV2Zi",
  "key31": "3a83upegcktbuxMoYXfSMsysFarqbnkXBu7DJFxAX38P3vovHkJsziW2fP1dQbjG7uSKQvR4Aeme2BazS3ZzZNCW",
  "key32": "A1bTktWnrvSsNpgDsKg5hAgWuvJcMUx6nXfG2vt3FCx7SJhcRFLMkgf2FSR2CBitwSPH79pbSbBKk2A1wYpVdAs",
  "key33": "31huzmjCsMgrc5VwwZ9QLKTA48iVJEipD9YQUBiKVbD8A1rLwD1ZnW3wpVPLQnwNipzftyiFhmBmoWtokDJcSmBj",
  "key34": "2csbbLfjNdmNQq7TF9hQdkNDDCz28eueJLympf2Y5zQe7YFnZi4H4v2WxkGdHSoznQEYpb31cXT3cC2CbRGXHXtV",
  "key35": "43ebWTBrrTwZB2LLD3N4bmvVgeaooeFjJAPUmQCmBHSjNzKXRrspwyCJ9R9oYvMbd1bCKVYmeFr5zpKJe67pPza4",
  "key36": "5TzCaHDTzcFPKawE68NkVPujxEZGrxo53aJeGYYzJdVFSPgSrGXWsE2dxciRy1ZRZvte9LrEtiateKTP2Gx9RAKf",
  "key37": "Cn6p8mwvwbmXC6Rt9VtkXGpRVHCqKm5HDcTQsYwRf9porXA6XeUfXQFoWkiwhtQG51qbAQXG3V5QA1W6v9PGj8z",
  "key38": "3YTbTtid6JrHYaxGJwonuFPCW9dwzBw4sC5o7px1xwaZhzvMhRqfWqYcSkMDq1SLSwivN2yyCWNA6zbW25u2xmhm",
  "key39": "rzifAc6UrPjAQkivdfrLu2A86jzQhBv9HviYKurf3iAArTVggqadZBrkAmrYpWqdYEHZEyyxTfHckB51dzjTqH7",
  "key40": "3Kb5aDCXQaDs6DevhFzuYxQJS4K2cqTqHWdSU15e92N278X6iiceZf7vhonKX7n8utp4C9rnrs2ygY71G6H8R1Xi",
  "key41": "4c6dyxi9fzHxgGD9cN2v8biWRjUx3cHESb3Rwd7S7iYN88roh6MoeDrcURZiYg84eZtRFbWD22wSDVfxhBh6UCeK",
  "key42": "5rsMnxoKNRegxCj38cRK27BBCN8AZStgFkAnYvA4uEKEtyz2qvBpjQz94ppqZi4MSDK5NQwnBwPY1PLvsYPCV2gf",
  "key43": "3E3N9Cvgh8H1R3y1cHWfugtMfwU7gfFKAPoxgQVEYzyMrvr34XsBTQzpmdfjFqCJtksiFausskeASJneHuirN5py",
  "key44": "38sbbNRGNXgsmNjK65HJVYuKfGGozBgpDm4n8XcHCLyKFvXLGdZEy41WwjXpjzaqJ3pisAky7Tw3cw8QYTtvgUaB",
  "key45": "4anPjVKLwny1uW6Bc6KLvb42hjguPmpz4woNEotDXRe6f9rdJtFezQwht2x4yFwxnnertUGDHKMrfqWbt2zy34hC",
  "key46": "3DEVuaoYPmYvq6P8xYn7gxKcKQ66WDaC62ebiNWUG8Ztx4f26awDYZKV2puDURf6sFoJ5Hz77sdkLa5uU8Htmzva"
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
