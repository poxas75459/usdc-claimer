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
    "66tK9J2UpiABJM6yBDyZNMGCgNi64Q6qdWzXe3Mi3YtHvcFP1LKES5JwT8xYTcWJXuLxJS2Y9qEAfBtreNDtdeYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mc87VG1BRPahM9rRtnxa7e8BqpaHG54wRtkM9WDY9TRZBuyr7uLemtx3WPhrmuU746v2emhVydTzrCzDRVWHQ9E",
  "key1": "4iBmmoEHzRGGienM2hwWwu7BsHi4MFueLQ4ZUvhm1KJWW8aKkAWCULBuYoEpHjchkCaUMeoiusQBnJfmAYadrewm",
  "key2": "2b2GzSuAPnZ81CV7NEaDbq9XQU8vjc8odf9iyW4bEbcyngJ6gLEW1pv6hhrb7FNdSqbNdoBqooz18uWatZiUm6qU",
  "key3": "4u5UxcPwV8Jju6YeNUhdyhYawgo48iF1WntPHjc6AqVEvAjZMuhupHkVrmrY5YBihv6GpEphrcJegAGQV47FtmPA",
  "key4": "42FfpsM2qnBDF4mmg55SrJDGpMf5GF5KM1qVzFyYAMCcc5CG8wz2th71y1H2cz2NMzfpFpYgyf5QZ9DA1y1HogA4",
  "key5": "5fbD3tubG3FR4sqjrQycTF8X9ARrXVzYwb1jZoi4XRhUX2BjZ3MknRfUNTJPZCLLeJXKt5tHmySxg24rSdfZougm",
  "key6": "4tedaTDfh5AvsstPRdM5Wrrxdt6zVYrSTjQmnF89rLwHu7auCxQ8UtAkMjGKgh2eFy7DdpXUPp5N12QtMFqhKsNF",
  "key7": "TxVeUwv4RL3yvE6hupeTYFVuhk4VeJnNUsHK519hjQ5yx3FN8R1MdpoUR4LVjBNkG1QVQjDhsa28PRCL7iwzWTF",
  "key8": "47QjEqyBL2Z5vDYHF7ZKAZq2SzB7vKZ3GdMq4bfikLTDai85QQDkg3RWbaVmscE6Ukt7S6Tdf7Xt8CLrPCHE8SiT",
  "key9": "3NPDXyu6daSVYB5CVvRq1kXnEsJHtPse9eHyKwh5LRb4B4GVAFFnp5KyVkFo6K9mLkyUJ95tDBk1abyK8JGZcCf4",
  "key10": "WKZLCT7vYbQgfr2bqxicThYkmsj3kiuGpD2C8FrdXhRU4FN2DPKQDY9BYep1iNM9YRJDcy6rdhzkPLg3TgafuwF",
  "key11": "4mCXyndK4KMLYsZecDbpCqfvQnXewrvcrx6oPi6C74u6SpUuruyaQp6EZGX9JTJQmQgziQuMMKJoJ1sr1HWX2wLa",
  "key12": "2gmP2wshfU7TUmoScsqZJrtqdNt4QwCF3jLQDVU2ctfGcdzB4ZDW7zK37iChv1MwLkSx14Sb7LMZ7KecnwEUKQyJ",
  "key13": "5m22vyfQqbqU6p16JY94WGv6qHpcJdEMtw8oXH5SZc2SmaS9URbmsSQbExh231phQCfGLXES6G4iRhDxsSyvTUTn",
  "key14": "5J6EXMvuLK3FaSru5D3rXDyaWgXo4Lv43fqdQjsk7MdSFEy1Y2BoWnrqWR6fkVmqpwqKY1YoWWzUARZd9hEUS5nj",
  "key15": "4mwxhKYsS4wyd24hjJJmcm6pAG4KCqaGz6tdC8iFxbfGn3uMdzMAR84hUTMGUezr4Ur6XqqKM2eftAcjm3VfyC24",
  "key16": "3YxfDSbnvxLPfokP4S54aADdHqpHBtGrJqQVba3DUxDQycVhC4C7Bmehe6yz9YVkrMC5fbFNKV3gSLAFWtt1NTPQ",
  "key17": "1jH5RNtGfi8VmHkuMow3m3EDwxmXuHiDhAdp23ohesbjKXnsaRdVG1K3Z7wxXpujqL8QJxN6asE7TQDBB3yiZdh",
  "key18": "v9DYqu3G6NSadei8taEesNeAah6vfXHjL3q3do3xWxaisBPpMNKTTFBsnt9Evhf8zarzeTwofBRwSVWH7cSzL9C",
  "key19": "213F1rwR5J7MbvLG9eRBXfqgomSBCGkHAvJFMLY879wMvLFcs86kWgYgb1mD3Lev4H8KibkQGkRfu4rkfkiguK8h",
  "key20": "4PKYVV3JAFMXWf3XE2GHSbU4RfXDfNsNnnKVKpNrTczVjPJgM4WGkV5UgHvyqSJJPnt57Cis6Gv8UPFC5vKwnQTJ",
  "key21": "5B9PEYbQxgssSEwHLYngyeKHyLT17MCHuDRoWXpyaSDctS9em8ybg9D7hcnibFtyUSoQ4VA1K6r6Efr2o3hkAtDw",
  "key22": "3LT4dvA7mWSrGQYydh1MeLrWFReTpy2ytg4p7UuVFRf8NBQqSjivjv77B7d4bjyosZ2TTnrzPKmgJrwWMozhBHVx",
  "key23": "hidnaw1f2NydaCiAcCu7k25NVAoaLLV3ZhE6r2eMGYgcqNrXmXq3yeyPFzfH27gK1Ygt3YsKKZsDhvLohk3bwxf",
  "key24": "2FWLqXMud3DMfaaKuUpkAB9FatFmUUNBqGnR5fLpewLkepCvahEQD2XdJTp9cEndHTVM5K1GtjuswpCGrSsBRM2r",
  "key25": "51zzAvY8jcHoyWUPL9R9ukhxheHvVPmnzWHijtLPsVqfZrLSov3cBQfrqkNMgiwSvtt4p5kqaWeLahFRwxgyU6rQ",
  "key26": "2tB9y3UUMsPDcEB3xEN9QcX6E1NqDiaQEJqASxd1GQcHyuFihH56jBiKQxAzavzuWxrTSn7vfX5kbd7fTNVi2655",
  "key27": "1YstCrgdWMcgNr7py46eNzQxEtxsJs4ue47oKEJqCwhvixfiTNeeeKUtGUqbFwwu2sDdn9x6HzA7WQJpNdtmAmL",
  "key28": "Xm4b2qCTPQEXvUrck8pNK2LRiHHaFhAGe2oT2TF5xAV1j9cDofS35yzFJVL1XTGAC7sTCkbAqbKDzcjD6ihqtDq",
  "key29": "4i93FEYrkWgxkbbvQdtpZW6W7pR1g79DU2dyaph2fsPaj1mqkeSg1d1JATqLTWaBCkNMdVaCF34EyUENQ7JLiD1B",
  "key30": "3zSMYB4cJuX72eC2zhwdd2fPpsgfG6kuevCMn3iXe9HQCi378YdNC13QoTAHFibrC5ko7hHaKqmntH27DBPnaWTi",
  "key31": "4KLNmS9Y7x1LSmBk5REdi16U3ZY6XyZyeCPUb5ukEYgGsraCPqtSEqYZ3W7QhrtBwE7B6Bg16RGeEEHMGZbgtNBp",
  "key32": "4vtRkqxCffhoVCGp2f1aKpnLKakuvsSRzGvJQRU2bw6BxHkP9DTET6xbF37sJz7VSZ9TnH34bmHmGo5U2JCxYwog",
  "key33": "5aYCxvX5gTYWu5Z1QN2f9Uj6bU9R4WrtwRu3ZLjCAUthRatiV5M7DwksTuLABFkLkTzPCiMqHzpqqHjgeZqYCQxw",
  "key34": "2thwdY87tMdNU6ETCNCPgzRXGmMS3LkgAm7KDat3UUK9MxzxS3VqWoRwyAhwfS4i7iZGdq8vwf7RgsZzJchNtB52",
  "key35": "3bQ9w4i52FfzXk49XReF947aJgDp8vzgLR7VXYHoxosoYoat6a2wPioS8fZbaUYfEAbbrBXB1Y2SoVLTEW8mZ7oU",
  "key36": "5PioJhyGTXnjjaX1JQU8zPycmK71Lg7d9jVNYhJxs5HUgFUtGEAzLH9jN6GbzGUzpxm1UfWY6BfzaX8p8kWaBHZ1",
  "key37": "fkL7tdMS3ACVcHp9kpxZDBsa7RcdwdHgFyC2Nt5qBqxZS8HijqPgAfCyaVTY3zRK3gyn8P4Y9auVDkPt1A6bqWk",
  "key38": "5CfyFUig689GoXH4bPTgQA6jzdXHt4iR6mTuKkhR32Bq2vXMa3H6KELengsagZZnmTCfA1MGTU8eNiJbRxYNmsn8",
  "key39": "283Qe7jqKEFUfnEgcroUaautG5z9tAUSh91nzVSkSihfMKU2veUZKaDyCXKNfzzNWGyrw6K8jjSjPKkA7NPohDBU",
  "key40": "ioxwjxsaf2V1BkwA4qWiLnfFZJ8nX3Q3VGGB71eL8MWtNSmy8pWLMMrXnmsXs9JQ9tLuUGaPUfZ6W6hzLMmyMEv",
  "key41": "2dVoKvrsqsqPe5nCfapipgoEr8DwDbotrjMY6SGvpeZ6D1dASEReZyQsZdBHTVGCzzYk2B6SeJtU9c9zqZfV6eCc",
  "key42": "3HT75cY54d7GYn7gS2vscRzxxCafscCgyovxw32N7ZxeScfdawG1jWarWCA1JuZ83qyfeYycha5tE4NUBY6MFKoX",
  "key43": "42jSoLXqAy5xMCnrTf9C2bEZkmGj2SiRpBgAGgzQD3zDWFhb4R4vXePdnNjpwZScpQipg6oaZx2nWnjBisC2xnbw",
  "key44": "5L1oXbK7xcUjpTSCb7HauoHWwkdBnbXMPmkzkgW7HZ7FzAfz6SYJnS8P1PyqWQD2q6Er8xi3LPFboWbQNPMTnRky",
  "key45": "2S9CkXsn3TgX16ftynv2y6m92g6cpiEBTFL77AW8tPRhGbkH2obJqvQynXBWcLCvHxUFk2spdFbrNxo6LaQsPqzC"
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
