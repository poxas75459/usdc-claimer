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
    "5zyURtSTgBcHTShaHGbbJyEhAsqtBE9HcezvF7zvgnybztkaNjCEyTjGTN812aTLdmo6j2g39BqYVmWEETLuazRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pfj7VDKd5KKki8mBTqX7uTWgVRDoJFLKe987jV4Ute55BCp82SD2LqdexoJyKVKMVr2YMXmuufZkkZWTXbp3gV1",
  "key1": "37maCMxSjrbQ4ktRZJgVerS21gjb5eYacpaCQHdKU7jWp6BPUEBZccwbUNmFXT6oq4N45tGfFkbmDQp8i4roLQQZ",
  "key2": "4UC6JaQKMJ5rBHxLTgC4JLn5Jjd2NbKxgE48zgi1QxwSck2w4marUddgqYbV8x4VFi3h2LL4cMQzrbwheNpzhiKa",
  "key3": "3wiynbUzTqUWjTuvkthJ7cRaaX44waYx8LDx49bzD1guVhLQckKnVdh8m4RCWPgxs6ZkeuYm1PJNfihWeeVDHU4H",
  "key4": "4HaY4i4Bb1C3DKpjf2VtLM5fCYaJNFxBdSW32tmH7iGNxefiHF8bpF1JmdreHb2qR6kVK5hhNVkWQqBELRNpVKG",
  "key5": "5f2NRQhuJr7iyiukRPxb4zhKM6K4Atsjdmk7mBfvKfN1UTcsHTQLVqNrMbjDfEBDmrgVjQxpB3sEhUQ4bQ6oJkz6",
  "key6": "3CqjKuRh1C8rLAPkPGgDEXaChGgbn5ZdggEtcPgoM73GkqyqqaAqMvgUbF7cTUoiyAaZh3szDK2RhijGw8AhE5Sn",
  "key7": "26iF8STx8ArV73x1Cpoj2ZY4YYzTzCsrUuhBfJ6BKYTg75UjNLtd4dsBzuQded4GY4jS13jpmiKHLVxP6hpyhRrY",
  "key8": "2knfVBpZbuV6tNiUCrbofTYummmqHMKw8efu5oZncUP3cDwfxdTpe88dmfqMzbtd2yf9fLQ3e29te57ZzNGkqFdi",
  "key9": "496g5Be6jV51AnmjbfWCCpp3g3NZWSsG76QMUHmS6ksf1K3SgiXkdNoUqn8ZvFSW4DGjTb1vWv7No6SYanZSMnWR",
  "key10": "5mioT5uyP77tjURU2VzzeuWh3z6ph62gRFyQGgZb7SNWijnUHJA1BD3fyDcW5w5Uze88KW8ye6vzq9piqKvfqsbe",
  "key11": "61oVohjJRyuuHhpCXwH6wKwKUy1Qi1RKncsDrLNGmEnPDoStjrgLGMFQ53EjMSQdTvBae37ckgRjTXWQkaDmhj55",
  "key12": "5EdTH3NEeJZNPtZFmjMFeFVJ8NXo4vP471Jv9wizdgg7Dq73Xxu62r3kn1UiyzGqDfkCjb7hVgFNzCPwHxostv5e",
  "key13": "2v1jAV48Cn9fwy62AxjRSiRYqRBa9EZzrSSKM47oqeE8vJNoT9K6f5izK2f68CxeWQryEQW72StaDT4hyJToNkHk",
  "key14": "4J7WWoxo85JRAUmaTt5EtaHdftmQ4CeY7PEkbBNSzR49Lx7iutYpXnDLz6cyTu2jAGAoNvwAbyfChWf3twTbVNrd",
  "key15": "3CoWywALEAGMVPkLzqRX8XLHKGMRXASzk5zM9GVgWodajKjf27gUCMQHRjTnwf3Jtr64aXZbUc7fkz7qoM6pmwZu",
  "key16": "2nNoR3z6zSf961aCFdqEobCRPZdL39XzZcbBb63eER2KXXQB8uNLMwxmwNme4Wqdf4Pnfo3WUJeYXiV8gfATvbgn",
  "key17": "2DbB96B9XB7Kf63AFwxH1UFeFiGFadCuF8zTziU3DbTb4HmRanWyQhFYSdxJ2FqrCSjq5zbwwJcVyjMHEqgELEsS",
  "key18": "5nF95FvxbsAuEvgwYJu6HGgccZUafg8Z3j5Xan1At5WH4ybcWL6Vsz88QU7QC1DL5noz1syHJ88VnX1JBSLRroNf",
  "key19": "i5dVNdqvbZo2VSV3Yw5R5CeCJGf5nZCddmYeATAavCyk43t8S7JT8sjpSY36K1bgUaqobzsjwjFYPcpmxx5qETM",
  "key20": "5NULuCfhWVY5qLU1Y8wzLYYWpougvF4yvUfdqTbNPMRM9x1a6o7SYqPNRZwpt8L2ks5ew5RmLpjwtcCb6sKps9Qb",
  "key21": "1tsqf3cXinX8UHXwHwBUT1EH3cgPVV7u8aNFCqhxmVDgFLep2JQiaA4We2DQ5beMqLqxjzhn8BhAmdHiq8iyZgL",
  "key22": "cyogU5t7yrAZqxGN3iAGghZzdarYpEM4DVjbEbwpYZT28QyYzqdBgiNDan48nCamvnP3TfYaNnsXSrYGBJQzQnH",
  "key23": "4gY98NFGPUF3EtPHrN3oum2SizLMmkR6rJKjvWZkBwXveqh9JLDzsWR1Zcrcj3vvj5i7BVgxdbbLr4SyBUNeJd1o",
  "key24": "29b1ssVNkqXfDuSJQ7Dne1K2XZHrEBgZrMVQcuSKncAoq3ey9y9oxGohbtGw5MEGfWows4saHd241LSHqDyKnc8D",
  "key25": "4mGUuRVnkrdiDD9PUtJpKPwFF5UmmPhFRZFAoYoJJ3dT6ai6qzSBE72nSj38diESvWpUnpxqw12juzBB7mdNcWhZ",
  "key26": "2RYZbYNHT9TTeKs1owAVbB4MSz6DK6TExs8x3WwSoZj3GBiSqkgzA2Ugv95LWDAaLjB6BHhivpf5DPkjpxGqLmNv",
  "key27": "3yZd7ayLkZyW9NLnpQmDHxLoKaDA3kyfG26wcK9m1nfPdcgHRmsdxAcLrxkwDTymKWWEAyeGiAocMHzD9EerYDNm",
  "key28": "4pvs1mcfQn1aqCLm25f2NFxhNtomeJX5KWFJjHcMBPuAjuVbGcs7UbLXo2yJ2JsHw81wBNYk4AKYjvwHfjPojVKK",
  "key29": "RW62Dynu6eXEQi4dZJBZqXNzEVQHsg5Kiz9heTwzjRfYLCKD1V9GkdB5f9JXZjBRL5d8t9GMio4Qn9kCaonvB18",
  "key30": "47JX98xBHUBYks7h7XdHX8rYRXJNNG5czNrfYHD5uMSEKknY86FUU5E52Yj5LxnQDXqyY2VqoX4EUw64PYedkdcu",
  "key31": "62QUVvm6DTWq8eocAVaDvLgiwjCBm2Qs8WUNYAt6NLEAx8LHbtNquePqHuiJ7ti5B4kBkkr9zt3Cj1vL16DC2CpA",
  "key32": "RBLoNVr7J9eoPCCKxjxRDSft2f2bTFPXquWHCbkafp2X25eFPiTSkaSkFouTaX3B39dgiwjJAQsFyEMyMtMtkdB",
  "key33": "23HyoxV1ZCjmwQ2WRvF62eca5m3zrA9ZWT1gQuXBxmjxCXRhPpsLTmaZixbuxM25hNMoQhzGjE9kM3F12cXA1evZ",
  "key34": "4A6ex2jA8SsvWRQTn9sEX4fmVMHe43aFx8v18mCQXd3oRNTG8mho6PhbwhFJeBMBeFe4YyTSQDfPG1sH7iET2nwU",
  "key35": "3gCwaAbDG2XfugNFnY3f9oHLYvSbMZQDhWgfmhkD6aZq6eZAmksht9JnoYetKJLLm5Q5BETP6kYf1YExHNo9eEBU",
  "key36": "5P3P7nBALh6pmYYU9NmaBmxdW2DJrA1tCtr2iEB34BsErnmf2a7Na3pjXL3h5DLKhhJaMBaYwuJj9D4sWs4gsXCZ",
  "key37": "3agTLeDSyLhSrdH3C8SDiVHE7U4U5Dk9XTpJEQ79SV1WvDZK9b3BhfGorZ74nMXnoy8QviE1dWz3bmw1W6rNu97x",
  "key38": "3cbifK2asVL39MkhutwX1Wd6vdPBeameBBmUA8ZbgrTkq8fYvL2uogMasfcp6KwfXsst6iUQHb5XU4ZCLNi7fkcm",
  "key39": "4K6wwG5izCkxMJCyyY5raYM77JVfBTQ4Z9L3sGEjhUZHofDpJ58FQRPrGqc3xvqS32PMHvKRa2d2soq7MC2dmNvd",
  "key40": "2ByiDMzN4URhEGotiiTp96L33cqtTmWn87Pq4kbn6rv4Ni9Q5wHPePjm8Lf1gEzNZvchFnEHpQYSTCFByYxj2U2q",
  "key41": "tQxBRa9SR2aVkZj2jNNU7kkUTXpxTKW4Jeyw3i47VhUyPjw6HYG8A1FM9Y4oV78dVgqPhFamBBXPcdmXQCAuiKZ",
  "key42": "5eKjMyJyeVh2iXcipEogUvs8zBFTVVfqFsCXHaefHJ4GGArF8tx1r55mQNmnUmQcdPfw9f5qqxkBF3wbeQpf6NZz",
  "key43": "2CdhzsKUoj1WHca8TM4n4yjEZKbFZXGbgjrzn164NDRMrff1RhZ66jx1FhJzcNSpgoQve1aZbCR54KuDYDEp7452",
  "key44": "1cgkzNxrW1PnZYjFz6cjfxGdGQmGo3GHagsrmd6z8peGRJCKwH1qnoCuozWZ4vqzaG1n7z6dsj3zyt2cRCkM41S",
  "key45": "UgDF5MupQBFQCD2hjzeRhou7xM8YS4anEcydYY7haLGZs8Hx4cnWyVoEQ5TjeCcowqYWbshLj5tpJkwVxYRqVyQ",
  "key46": "4idoZp29UsQFMmRULGUMNXkGDV1ZYC1h4Q5gP3qgs1Cn1h5dX5YVwMmcZHMpCQPwHi7Gei3GzSWbdZKXbarFk4Ev",
  "key47": "PP4x4zuVFCS2eb3GUhPQif47ZnkjidDS6Gkg24AGggdVYAi6AX3DRooHr3A4otcygCbVzbNC5U2N5URwM7qT78s",
  "key48": "H8Q4QZ6HGeoCFEFDcXJV1kVSQQRbJLkdheUREXQpVYurMzQ2ciBrh2Jka6QEEJ17rBvw7pBaZgbn5w6KTi8mqWo"
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
