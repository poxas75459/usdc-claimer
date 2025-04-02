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
    "299mZyuHEunbkoEH7rCmSkQXyMZR6TPA5qHPAP9GLMsA3L3iV5pEQoBhzqW5JAZStRJ9sJvLwC5WxVwVywwWx6Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SvzpoNRhcN2ZWZsvtsXDL3SZmKYutAFkEtVwuAhWqrn3ap9urZHa68tdMypkWQPyJeSrbS7aWc6T39iracfHSty",
  "key1": "GQ4nTJtw8ipfbsw55M5ur76cYrZ2do8WGgfEx5BSHZJFuoQZubBS1oDRK5sHsRH46oL4aPLBzQhHuQFfwbcYQ8Z",
  "key2": "3Nc2n7U3JWiVFR5Fcmw42ZoKGaoERc3F9PAS85XxKoXjejutNWJ9BGZXDjnH3tNqW5Tr83ANjrFWZbrpHDa7JQFK",
  "key3": "2eDtQrEp3H2PkwgHDH6hoghpkpbwSdX1iDfe94s1ZLCisvJq19YywjdAqx7fbHwQogswmPGtqzh4Z4qj2KkkEiPt",
  "key4": "9H7oMRps4NADozpW5fHuDmEeKMdiv3TbqvZq4oQLQthHMhxMkwy4kfqavXaNNunaRJkgaPJtgLCWD7LWxo1no8u",
  "key5": "67o68aVYxqjUjTCwHgwWLHm43ayzzmmXh18aYZVWW6tCGSyx79F9KixdHUmRGjhG3zKFdW1dxibFe51aSLHxaz5y",
  "key6": "3GUyrtmgxNQgU8XALGkTqCjQ8KKTUxDTVW5N9bmCdphNnESbbHjKGb9BPQXb5sPqzCfF4xe2C5w5c4q8G3s6MVk8",
  "key7": "5KcrGm1Qx7tCYL5UD1KuGD7m8Yc2GZkEWGd6NGD9pHp2hbwCSf2xL1vPuGDDYZhsoQNNREb2UFyggBYwTtcWpLwk",
  "key8": "4UfMtLoev3beBZuoPQiZgcxs7wSLCa7xm6Fj31o6w4MtT4r7AJr8HwMsPvYC5bpHJD9sWczs5mSPUVqtyFeJQdH1",
  "key9": "CzVn8ouuP6cBbm2A3E59UpVaUfQWHBbXBp3A8PGjhyoSCJSW88BzEvyKRsyDJFwjPAB26hSf5tNarPcsH1WcpLn",
  "key10": "51eBpsLAtCPZubZKKcsHX9k7Kaihh5WdA6hAuLDqsCZNiGJmA4HArtCfX7RNmp9iubuaupFXaNE1jyyFcf18HSWT",
  "key11": "4jCERRDh66ANZ2eQaFM2REEFA7iu4dXvuZSUFRHzaTuoALf593FQpNxuKWmrtxB19wZyDWXMGv3fhwgP7Rk6tvaH",
  "key12": "5yKoHtF9A7CpWBLevNgUigRZwB73kviZWvxgjnBH1Epkrokcp3BKTBsb45MeqFaHT9NwAbciuaCSDVU9tgsQ87Yw",
  "key13": "2nXByt17eaf4pPMRiwvuMRE4y6M364cqKSp1YWULinazCqujyBHtrnk6qVnhVYBAcSvFnt7NnXptEirK93ouQajR",
  "key14": "2FPGNVLUMduWP4JeHh4ZRky5DmKuu7Pf7vY7hUeF7PRdy14XWPzgUVh8f3tqSGYMecKPhArdb77iVdxUusWdVMTf",
  "key15": "NRRYVaNcmgUe8A8eyEPaong2NTr651JGzmHgs94yL19Z4HUYRhhsZzVqvVtW8VvQMey4wEwdW72dfeCdAx5Jcio",
  "key16": "3MBsVT4cB1hnFtwzufXfvykUzPgLmRkLoPUM9Xj9NhpVVrEALhpVwXP3UfiCG9XpSfF5DhvGZds36ajJA4jWd3f4",
  "key17": "5cbrKRvHreNeReosiKTAJQh4DJsEkWbhmdn6kAgjJMVeMpRNUcaf8v5Xq8iJkqWAjeWjiDYrQXhiad4MHYAc2sDA",
  "key18": "3NdeJRsjSDSpdqw2nvr2FKZY7URG8V6MhCdtp8RwUThkrHCRd9Esceh4ikkjJyTha38go73s9cwihtfAtYJERbAF",
  "key19": "5YoD5KLyhJPXJpA8CdS3EsbA7nCALzd9GiFxu8ULo14mPUKNPqbs5XqCq55TJT5tpAvGFGahAEdseoc3f6fsxN1o",
  "key20": "62yhJwQuQesxH5JZ9bebgsBDqcCetLhWooRqWxf8QtTYYaFuqn69UGSBp6tmAPr1kta9J8ip3GpzxSdiWzhVSDPV",
  "key21": "2i97aoFwsRTXbG17PbFiaN2nNFY6jcgRNi3GsZWDNX55YDCeAQhH2ZPTZpft1kkm1S9DGKbfg35bvDsjSXY7ofoF",
  "key22": "mVEueXJC7ZMyXwRvbmSJDd8X4u9duACSbqhB1idqX4H6FMxmz5jeuRvjBpYocT3PhQgKooWXkwJuZcQQQGcE7bb",
  "key23": "jF1bzGef3hxrPGvj7dSaiNHSRLVK5qh2t64FTVG8A3gUmT4CKaD7vyiAjGW6Anbw4AN6tzaghLm79dYByNnDwGj",
  "key24": "55uHuqBEzPNCQJBxxmngiKdb4Sg3mWf8NsPkRwVbkFodJ8vPqSTUPnVUGruY4GUd7XubaY3Cuhi7K9748nvijZLq",
  "key25": "56ryGur37mH2KcXiE5C7RR7aDnYmgS5ZCACXxF22W6Y46pTzy92NtKdNQj7Cang1ckFXxoLhbgkBwP6GsaqAHAGC",
  "key26": "9UQpbayPBGRr8rWp6fgLu8jUqz9sn5fp3iUPg624JaMvNq7zizJL3sWRaP56yZjx21ioxwRtpm9bzMQ9qGQ9tdv",
  "key27": "3544cZddLiJ36vqdyLRV9kU1qXVupRKv3em3H2fKr3HvRKQRoYCMXod3BhLXjdM84H6NVeN7citJWSkBoYAV1J74",
  "key28": "5EMpkwwmLNuGewWEe5cLpKTfxTJqq98DWtHxCKDdqfLnu8xZ97BGU1o5WeCYi39YBVvHuthBB8PkFVX5i1GhL3nW",
  "key29": "63P7XsEix9NQ9tDF6HKyB2DwiH1xLMCV7QZq4Cge63R8y32vhUzfYKvs2JkyEDLKT94xx6oWfzqHnx69ZcKGbA7x",
  "key30": "4FR5PPTqzaiVKAetyRHjzf9pCugkYXFRzjVWHeXtqsMZ5Vd5ScnSFKqmqEt52wTNReWNBKZhC4JaYjtYZFtLocFM",
  "key31": "4QNk4QHGwd4tgmGAq92sgq5nYc2cLpT6Sd9fz4a1f1uRHy6Gqigo91oCyCCEdmwZS7JMmc9wobSbhMqdukk6ZG1c",
  "key32": "29tqtmqeVia8DhQhLg38Z5z2u3y8wkPywEXvAw4DW8jd86UTEwXraT28guWfsVZxDPtvZpyXfZSDqfe4HvJ8Qbx1",
  "key33": "4rQQFYomuPSG6fU5umbheSW6PAXYoAUwQaKQobESkdpsNy7iagz1Nev6HZGZ6A457S136RoS5kzdFa4hhup4ZYau",
  "key34": "35MEAo4nw7pHt5UoGzwh33fUsd9UgNpCmVdzxLXmH7vvbk2V8VNpfpF2i7KBs8qoU1jyMz2qaJTXVAPNuRbMW9bt",
  "key35": "3ZX1hD6wp5p3vaS59rJywXqvqqcbrcbW8ZFhV5Fg8UCfYGLCfE68J3P9CESCBK5Q1yf4y9ewy4PKk3pHbDPUsgV8",
  "key36": "5kNcQZHj1W1JGHB6nFtaESrvxMEEM6pfgLVBdP888UDuk2SzbCxECxEX3xDMj8pQUZJgmY55VgxAbo95NowLpTuC",
  "key37": "4e8virz5u8zsVAeNGasEjQNzjNuodUysbES3JYxed27mz7hrSwUnwRiu3ci3AJ9e4GCxkxL59EpMQ86nAXYC4s71",
  "key38": "2vZJPpT1U1iH33z3bEKrK1aMCLtT5fwhLTwMEMqLrc4koYJqgjvzoL98usW4EUqAb2QeoW1APaUcsvdn8fRW99Ht",
  "key39": "4F9hLojDLwPp9qHC6XgHaW3KP2vyMeVWRgy8yRKaBq9fJm7ZUrRo1516CQ9aDUDToATDZjbwwhDTS4eJvYXLesAd",
  "key40": "4j9cJ4YTh2TtXNKUYKo5hdNrwZ3a6pGNNGUbyd3iLdgv6FaBNPUANx51Gh2U3CJx5T5EF1baDS4g9ULTXcAoU1j9",
  "key41": "28NGoXeDCxG4pWmEuzaEB5mgUXi5Ki82oQsgsLE6u9N1KUn2Zz6u64tZ2ZLHAeRhSwLzkXc4mR4FkXMCp4HaiaSx",
  "key42": "4nrEKwHQqwmijXLsq3h1Vkx2PybETzcCjeqf4bjDrAmk8iZcTkt7vUdxAWqYchLQcb8n6FQCbx7AoddfKNd5urnf",
  "key43": "5CYvmQ7tC1FW73Nq2XUFdy1VZaer7kMKiJXfwsKWP4Hyq3qjLRgoUQ3hsq9U2nMtyJYULghBZzTzrrLcnHndyrJZ",
  "key44": "2a41FNGkc9wzYCeGCyNsYBDYjAVS7g6CNyRgwPJZts2tiCSSpQkWcotsgAXT1AfTBoAWdcR68V4hZRHqAvV4adm1"
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
