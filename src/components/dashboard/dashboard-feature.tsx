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
    "Ddw78NjtHh2fJeVBhQ5mp8VLpf4vvrnCbj6Cafh1sRLB2wWcKmy79DphBpqbDZZe1v9oqKU4eiWDWF6Xyespptp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61JQfcNZ4dHLytFpKE65gMpBhNyFGMqUYB66ftBhKku62XUWZUS4yipkFDyk1qmsJ3nbquvtkDrn2Kbqvpb4guba",
  "key1": "3yWetNmSMKX4kc1PJqDWLiZEPsGjXrimJSecE4RSTgZawKhAhsmQrGW8vDSRMcLkBefjzuBJaKkrF9wad9G4RDBa",
  "key2": "3ft7TzmqADSbBbeuAVwfeHBWPA4Tha22pF75qDXfo7JH3KgYNvvcYWKEhmYui7NxiuLdWyhZZmKguifG3cB5jrGB",
  "key3": "yNtXEqHmCeHnKoQQ9yqu72hn5ABtJV2gBGC3ZiANdcmXgteN4NGo5KVpAJe9bvgx5g7Tm2cRkQ6U3NHxWm8DZsT",
  "key4": "3DAe2wLQybx4vcshJexcvtBXYGSG8sviwe64pWBMd4UKZzqEhkFxhx82yPeZq5ViiocP2qFwhds38o27ovinkiyS",
  "key5": "2FX8M39VpcnuTwXEptikqhL24TPC5iVULYdZHX5aSUKkymwX1serPk3y6TXu4Cfz24mYhcrCsXpSRhc6UKANvhbH",
  "key6": "3QK1GHc7Pnz9CctE1yv4unEmwYErayEcUrLkrMG4ByazKFMdmxXTxyZvwYKr5VwzF3hAStxFHVreUBiPPmWBHtij",
  "key7": "2iHRtC7hzeshRimdS45tkXUHmT23zWjsEkrb1TTeQ56CvNWHr7xWo74K3YG4gfvs2ER6QyW9NQtLLmQRLGYFsNdt",
  "key8": "YW64pLGNBMsf82c1YyLBoP84MaTMASpnZM9bY6R1nPX3V6c4ySViupG6rvAxoDEMGT3wAG3mFhWNR4XeLZZoEsM",
  "key9": "2iMKxchYuyEYkqk6oTvqwgKmiQMFsNX1kSBes4sXFu2MwEqRFHE8hRmDf9MvMA7PSxdT7uSBp3nLiiB5FRxRdz51",
  "key10": "5W43NPdSzFBa4BFMDjxF2hUa1cwsPqWRomN4y8RnLeiW3TKo8oa4boE7D2SCyw7f6wuvUQtg1FG2bCxu7VL2NdrG",
  "key11": "4VJJ5Sgm2ntcHzfFmYZYpw4PVxVBMvTgNPRW53Enj3E9BDc2uRA2QdUWmwi8awttGVsDvmmwVSNAd6zMzSW1SdQx",
  "key12": "5XSEMxSLS4MMDTtTVxUgtUXcPieg8zVyYaYErm5ogMJ1TGC7hEpRWtCQRb6AoCpTJSZhsWvLx2MkVcvHBC77AFfe",
  "key13": "2xzSUfeY8Ac6j3Pfwref9pv2Zd854Qm3aXRi7q7RtktKx3YYiEKLbHYEY3BP1Ne7Nh5S9cvsNgHdcud5FUHvaQ1W",
  "key14": "ocLKJjhoKPBJktMdnUh2vJdZzLrQYw9vtehbnjJbi4aJMkuXdZ9HGmvovvjiLEnAjjceigAG24jEUyAD7qFYVCH",
  "key15": "2LgH6S7wPqHJt8A7Kof48hapin7snKXME3XuHEZtbUiWK3w3LUPJ9oxoh3mvv6zcob9ZctbR2nhTeJnt9noe2ZLN",
  "key16": "PW4bRoPzo1oLQY5QEyK5cNJ6ScFjKhi6BKZ3WryA6zSZcqGRFbwmouweWnuHysFzENFuTefc3ijdSn7uHzpecQb",
  "key17": "62nLW3soURtwdDM6qy3A4qvazcDoe81FxpJPV3Bk7ZoJYmut5PqcbXDJEHhXdb7rBBz78XANxM1TuyeNNh3CtKiB",
  "key18": "4UUD7dvpmqb71tWZTZhS7EbqN9K8RSaTnxDKvYcuVKf4AzvZKcRavyKvwojohengz5z9JCRuz2psGwHmWybqojM1",
  "key19": "4A7pYdY8ASE6SBcCZnaC5K78wuuMCeRzx6owWTd55inEcAzzF5Ej8sEEKRmxg8HrZXffzz2SSLbPs6Va8dEomXQH",
  "key20": "39LpYCL8MvLtrbogV6Nu5jwTKYUNsdCC9zTKvovnixRvdmNWNtwVdeg8G5T2iJfB2oUE8FXTWbM4AiTBfd7w9urA",
  "key21": "4XnCpR9gzCSnSE4bHc3BvJC2YoDMKWinHKV8Z2VuYXVwTa6ifBYKxb837snZ4zi9rsKR8UrhRRUw7M2BYMrJkpiY",
  "key22": "2y4gg5LARYU8s24JBqoUzH77jWrTfAZricwWPgytAtmZt5pkWrJACAQYhLghYTbYAX4bc98z31Zdo3xSjUBFp3ra",
  "key23": "4d1eqFWyiimvJasr72E9UwoaJhDc3NBwRtu9NAUNLuNenR6suQ6pPwu1fCENRouDkZWpg8i5jL4Ukvmm7yv3jqb7",
  "key24": "5zorX2EbPZL3aDQWcgfTu27Pt6RWC3eYVJpH88KoxDZrpXoKQzE915nUEMiHA7Lg12JHSqi3seWFCAR4wqdAhfz7",
  "key25": "2etwmNtX16D59ae4pZcCxSGZbz3gavhhbfuKQUU7sqNXDMSUJLohmcJ8cxUFVsCaJFMpoAbr1WjaE3u9HQXqYqW1",
  "key26": "47Qdebxg6pkFcMGavPvXtY8HmX8FjucQR9UTMxY2tQ9uNbiBUPSiv7YdQ4S2pnP9SxoXwPLRawS9jpGxDQupXxvQ",
  "key27": "5s5dixMLMUajKkw4BKjATQx6faEKbjWBvjecSWffMH4zAPDNHTSZdLkeGao2HGtn2NxaErBq1WDAUaPkLoP9ohbe",
  "key28": "3rXzC9icSC8tKpY94U1vtrRMFTTrshDJP947AARhMJAu3kEpNMgJNphfoeMmpWxiX3R5hp847bDDwSMWMVptdnSi",
  "key29": "4krXRD6LturvC5pkNQHmRCc9ntD1zTG7Vs1ZsYSTaiSPazWofJRiP4WeWFUkB4izVaPssFQaamYtj97Upy71QwvD",
  "key30": "4f2iXpAA2kDCvpd9QSmH9K7Cv7yGVB2YJQUPsmVc6GTnFuBJ97B9vMGbu1uoBgrp97WLRehMjqcivqDr4g3i9xJ3",
  "key31": "5n6YvXbci3usYZPwmzsDk12G7Si9dfLgnyb1zsHz1NmfAuT6iUNBaqvVEovaiZ8EVyNGpg2Hvd1KozakKDUC3pHS"
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
