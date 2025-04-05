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
    "2Dum83Kkjj8Mgsan5u9B4aXztq9dCaRXVB1rhEnZxpaUX8a9PgyGYe8qKWM1wCMotbxL2rgP3YSMUwHyFd5D9W9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U1D2HeSLQsr9LbghtEhawSyhjSCZdsPA5BWWFuZjmo8igt5HGx5iKFQaGtefkqo2CnAm7oqTivbLJqZX2vp6wBr",
  "key1": "3kUmuLbZbxccgYGr1LCpcMKN1FVe5C4S2bJpFZi6LJiwqiyV2GSCDTkKVmFLPFs8awRA31vxq1PfwnuknN5B9R1h",
  "key2": "5ZrBKX2v7o29b1TquBT12owWa1jV6ndpynNMGySexyVNoZ7dFVoTjXSGvvBtZLwtyp6kpAyPBtq5GXoSnk39YPYw",
  "key3": "4ZrPTEEb8W5imyiJhT5NeNcEnoBNfRrvZJu7vZ4yrmeV76nJLwVusb5JUvVVr3uoWRDNNxUE5yjRvXMEEMyY6PtM",
  "key4": "3wSoBYdm31UgaJUUFNsQV2zVBgwjwZ3z3iSocYqLntfrUZkx6awwkWSLWK8AQaLNw1RYvp9oxTK3VVH7MAyJ2FGj",
  "key5": "2Kw2ELX8Y1iTfCK5jaXjTJsLPbsg6zycJB5Wv8FopVbwnMLGDbCpRuGtCzbXfXGVZUxs99xXjbTEYzgJSgTuRmhH",
  "key6": "3RpCXknvoLqoZEYsZcayPXcfPw4dsVNq6GGLZvyMap9svAJkAxJVBT2qpcEG9KRcMabEw9btm3Nughd8cwehdNAA",
  "key7": "eh1zRigozVxYdnWjkGu4XinqHncYvp1zUuHTX2J3nQnMEytm7QrNQRDCa9ZUuXHwD7vhCBNYgCmgY5LfG9VikLr",
  "key8": "3bouqYbrcqrEVyvemFJV5msoVLAVieQkX5aSUwkCU3xAWCDmSxQH4gCRftvz4KLSiQ2AJzzPD6Q3UWskSwqXUZUs",
  "key9": "2piduGjZ8vvuD4FhET9WgSBXxJWyALovoXVoRD7HwHQUXAJkZJvBd4qnQhs2bHNMRVNTpjKaGJhLZpKvKxn3m7Zt",
  "key10": "3kEwSwARMuTV248aseyFcx24MbRht7Jybb57SFkMPQM2cab7jJGMc43K1e7wcBHUHAb1W3nbkzhevQpVvncGPHpb",
  "key11": "5bo2cc77QnXXHCzodbaqqjEx5w2vCzs8vRmncimf1xFjaYyoXmb9pzP9SwMZUzcLD9MFSTXsBvtD2BFNcCKbvbbt",
  "key12": "RrBah8uHiotS9NKqd6LLx29mKMwAyWvqgdn6881zc8iK95a63ausHoTMHowearFrpWUbMn88ZJP525tKgQjJ8Wz",
  "key13": "GurPR341stL3Kqj5L2hkaty2z53zUCdLvS1VC8mLDZNnFw5aEbJVMagbQ2R4o6a4zbPvXpvbR6YXBjYDxMgZizs",
  "key14": "41U2xxLjbsgaJug9QkAwwFGhSCbAkfHtiGEGRUwSMfKy2QYgaxLM8HCEfMrKeKMzDRd19r9aKWkHVWThHcwXBzEv",
  "key15": "7cRRPQxcEQAfbQPBJMKiUkJf2UTR1PVy6m4VxKrjJdigGj3Z35D2spN1Q2Zod9kf512ikueMaqTi2prbq5HtLHQ",
  "key16": "3oRfCfYkoELJ9uYbpok3325Y1p5QG75TsTvsPyJJqqTs7svgasVkTEnbFGCZgvvJkcPMt7iALmoakNPHXaHrsmLU",
  "key17": "2NDXR5RGR4EYKXPaxdSJgWzMpQtjF9xQ64o4hZ6po2XnMwXw5JUPhSyuAPGYBdByTNcBEBbFqAEvmFBpAKQ7bzL2",
  "key18": "2PV4pLrM5cYvJdVS3eeBcH4LVkYxkbp6ndkKxu16veTVR4cM6fZNfHAKaubmuDJuTQe9cxtSVDSnqLsZ32MFJoCn",
  "key19": "21J66wXXhAbSzNbbCDTMfSr1xVALoo3tGY157cisxxBqM1PGbqXQhdT7bZPv7YinZv9BWG36t72uzBCbwF84F1he",
  "key20": "4KK1eg2vBeLw1srAiQrcwCX7SASd9LxZdRNWTAReqhNRptG43cS8ZinVBDsLqD5SykRb9EK8gcAFPJgEnCULGh3R",
  "key21": "3B7yU9Ff51bhzY3TG2Z9WPbH2EYLf5Ubt9nm5v8uWepNMco4YaNRGz4Nu5YLc3KfDn2iSLSBTbZ3MaJYAfMEavDA",
  "key22": "QHEYSeyT2eyuEyq8dqYnvmr1VmYGkgoCiN4An6muUuZQYwve9cQFjcV1AN8n3Qe4Rv4qZoLEkPK1hic3cXXDe3s",
  "key23": "4iu6GAZT8Uwvk7tKuVqf2iowQTYHUatFGxsLcmbMYpfC3EjYp6ZyCnHmK29ewED8WoMN7DNqU5E3m3HjwJA7mU4",
  "key24": "2bMATRSJDoXsuPY6b8Ap93GeX7fD43sSHx1dL3M2fcR1dGRtDRmS1z3D6yKTL5wenbecjgDAV4iQ8SJppyurPpmX",
  "key25": "2vT8C2QcxfBdYw4mxxsfLQWM2bWR6xdAHLyhaTqE8GewUjKHLoWNH27zDuLKzBLihoQY28CwM3rP6UrZntyAbjAh",
  "key26": "3A78gLRxjqHi2Jw7RfCiKisu9LbvL8m8GYJzgr1YsZZafnmGZHEatdMk6Xuebqo47CTCdF4pbHL1XEm9nyiRdRgZ",
  "key27": "2SSWxj53MBvLmxdkMfVtVYPccR5EsSSuGWRpMseQCoSqJMMBP4XuYT7LXemPog6aNqqG3kyZm7PGzK4bbWMpbGtK",
  "key28": "4pgzLYrrmyESourPR9jkj6mMDfFDMNohVAgDuvgCndhZNuj4nQo1QE8adw28sQkuLaUs9UmCim8At9eMhCbm8Yu8",
  "key29": "g9f3mXc5DyxM7hWPphnUecNzQTrkcSHPFdkkNEpHNyuVsCP89srHAkXvCPgG9RgNFWoXZLgLdaYX4w4Az8UYAF8",
  "key30": "GW12oJvw28YnXCxqMD3GpfrJYB8hqEDm6pcc7xxKSG7sptoFkG8PZo8DVvyE85wNJHJzbi78fs1mG595ad265oH",
  "key31": "3dkAEPQgWgTVmbr555MqHmgF4hsHkfWJFxecyzPJ2zP8eSU1BWWb39P8uTowccrpxX6t6qpQZgvcGJ1DtLvoqDxs",
  "key32": "4SWwtivLTFH3FhitpFas6dx2me9qNMLxJtMynBBQSG2VWQTxFEfaFcbdzPQfNYjHXwMLH3p4taX96Eqc5XgqNtNf"
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
