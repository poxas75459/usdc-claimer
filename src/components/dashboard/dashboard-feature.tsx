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
    "37pHEBsLpk2baJzNmpPkawJs4Zn4VJf1SH2QWd4jEWKtnuqdAFhKRWZyKfL6wQKJFLmn9XA19vSCWMbaruEnx1JH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYnE2QpMo4VXgn9SYJMrvYUyDCF9BnPmBb3nJz1kGHn2ywusro6oeWvFdW74dCyEHUscWoo2Bug2f8ntEUWaBu4",
  "key1": "5BhytoF5N71VM5P9GhYZbgshLi7HcMjHKFnGzWFyHRUcyZRN2n7Px4z5QdFnmP6vXJMDR79UQ95eCvzAuc7HDh8Q",
  "key2": "5czGvFpDfTkTonpvuBF4qscNi8S6DyfDffH2t6QpATSrx6JpdeGXRYWY1dAMCHT1uGg6FhxEmrwGuSBZjD2Urvnd",
  "key3": "qBwRWRmesMHJyZaML7LzPjEBAX1UGHS4b5kmDKGzQ6XjHm29Duz4EH2NQD8B187JFhXgpqWjt5MQsLdJRVjjjnb",
  "key4": "42iA5jojMQALEVTMArui8u57H9nzBgBsYySQE2VwA56cMXW4dWRVh4ipuswZaCYa3h98r7H4qazWdZTi7y6iQNX5",
  "key5": "3hUPwrW7soWVxBjKq7jsbXAVan2zrh6tcmypxY9qZgLTwHFnX6SvpddaGidqiBDPRfbRXhhTaCshwCQFCSMsFKYr",
  "key6": "2CHASan2rUH8H8gTTmQ2YxNvdXYrjjm8y2LLwgx2ex6dZycR66wvYSumjXjKW3JFTXHZJtoxMpxUjJutT6NWrhb6",
  "key7": "dXJatL5ZLCXb6UmeaAVdEEKAPugnMA5pVkKmFtWFvNsqhLypKzecHhHtPTH1hpLCLY7Fh7kmWcUydeoLQEkpdxZ",
  "key8": "TjXqRvspv8yWqecYHcqVrSptYK6Gyys4wLZxJtuEjBGVT8Lk91RBkq76cdVT8Dwdavj7Rz2LgU21DUbFYWx3Aqn",
  "key9": "4t9v2HpXvPouyVhFPrw7KtfZjmwpML7Khg1GY1o3X8hsyAKGxTEdma8wDpH8uH1Qp77Fusm1neeVZV4qgL2GwcCD",
  "key10": "5F74aLkpsKn1cB7UrPMbuMa6quUvyH6jd2vtRVAMkKKDQFiNnYX9Jv6dKypr9nL2B6Ap1LJEj9uoLpcxYtm5aRTc",
  "key11": "3QrdZLZmd3UsfRTHRQwCcCmUWBUC9C7NRAhagPu9m4LviQ1Z8ZNNZVYKfxKWkeUGgzh4CW4YWX7ftZonqQPGZJ3Z",
  "key12": "QbGzX9PnajMsMkNc8oM7e1zowS51McNgknwATsp5nxQHyTmbCwKfnRWmaoMq25WSG8ecjVjo8vg7mATCaW6KLAX",
  "key13": "3P9rerqntaJpkSUA8pjyKepdNF8n1kvRj8VLSFyZF5XJAVR5tsbKXEifSArBWEb8iHksTSy1jf2hoau55tyZN1Qn",
  "key14": "hXRF16yLyxX2c9z7qXEButTHXNw9ZnMFDR5KKfXFXLDWhL3DQ9391agRuFWinMzcYicTUQUrLt8D2QBD4Wzm7c4",
  "key15": "TzhmZWRnpbgy29xjgssADQVnfdQemE19MdxHQesfxAC8TtTcMPBnAMNg3g71miY3XUG8btoNKusgPUBn7QDx5XB",
  "key16": "sBi8ESJ3BTCpCagD2N887ouD6YWSzzh45jL1P3TP4JYhH8YVbRmiVPz89ecCNCTEAzygQb54krV6VJExunNa3kV",
  "key17": "4Q7G6p5qXh7kKqCGj1B4L3gcpW8Enrv2V3SDVBFPBiwwLgABGeQcuDHYeBYR5vHb5z17w352bPhBWL4chqv22E1m",
  "key18": "3xoM8sBtkVcvAtwVCHQQvYk36V3rQuZZFm9TCRB5Kae3xmsZHFh4zn2eVyBFCpNkkVZLmuhasvRLtsDRnAGzrsPT",
  "key19": "4mQPPuxeqjzu87pH3CJkp49RjEDcShMrY5qqA4rsukJ5XXbtbPT7Rf8V7ZGkXo2ttZFDDSjGocfRE4wJZpxJxmQi",
  "key20": "55381r7J223uz4VtqH46H3PmRyS3ejwSghfr5bNchSZGvt46qiWVzVtHGDsDuWmf5TWB3V3Sd5xQwzps5YPcYmRT",
  "key21": "FyDJiFi6afBtcQfEq4UF8wxQRDWM4fTV99MUzo8zHj393KRhhbaLms7QKc1M78sEsqziK8SKGf95aHVCzG1GZhC",
  "key22": "5geCY3iSNHNnr86tU1wQaD2yfdUx4vfFyfMejJ4zahk6VpzGbHaLcJSJdFU8FHJh6dg5eGgcJANpWkz4mYPiP7XA",
  "key23": "5P5hB9hpGs5T49GzqxtgNGtvmNJjdpU1YMfVGW2ufucDZ14oRnsCKrUDefGdF1RPPQRQK1sAMSL4mMR6umJHcEbC",
  "key24": "2PwwRsjn9MdijSnHVhKLmhze91eX4xBze5Z7epmKE9uMmD5AYRhmXnCx7Fc561bY5LFMQKziumUww29gfKGDmSzW",
  "key25": "5qzMN7uDf5MAGJLb5kppYyoWuoPSGVuMWavRAcvqdP2fwQnTm65ptEiZoKZx5rAGFGisGnQ2UZC7Na7yhAoL8TEm",
  "key26": "42CzLoLiykQm2wAPs39w2MH8uzCtMoVpR4AGxV2pYqFFkNzfQ2KW192LHwHSEqK114hUjWdN7EXN9UdNYMxt86qH",
  "key27": "uN263KdWeaxWcBfUWVD47z8Kw64571zvntjTgicUfQAPpyiwN4LBxz41UeoV5cY9hqD2zsKFFi2YBJjbsteCaEW",
  "key28": "KM7TyNoytTsmzVagitgpELQEZMzceH2fFo14rybNL3bYPcKTRKEEFxFjZswindVvFzgGmuCKB1wDV2y8wt5NXhT",
  "key29": "b9WYbPfFTbWkWVY6HJSzPqFcWWeQq4ByiPviJ6xDXytf2JDFAiau5NkTNpG5aaRXS6anRVkpJ5PSKGpvkaF7jWE",
  "key30": "XuHinZ74PkyBsVK27tWyNwxsYPz3kALEXE4hDJTq58aMfmuNch1jH8AvStQp6R189dKBbvS1DzjPB2wE69q5CUv",
  "key31": "3d5oRyubzGrxdqoj3J8xFLM7QpiVpX5ENfqEgut6g6W1XvFYv4QL7E7gfRUKLuZKK7m45u9cT5F8ReN5cQQf3Dfh",
  "key32": "5thj5scjixHpuMNgLxQqPmMJpAPTARFo2bCkxLPqhbeZtwUKv9swKQaUxH9amuQSLCpshbyWdEBPt7UYipzDPKe1",
  "key33": "FfTuFpX3MT562TKTzhu5JahTDQ1FUnoPG7VMRUK3mqzUVtiUoiSFWhcMeGoi5owsQKWwkPzr9moZ2aKNo5YrNjy",
  "key34": "dEjETHcycvw6bKmrPVQJ7iF7MTfnkJbkv5e5UU5HfdY4bAK2PDxoihiS3e3LePWUWPmsWLcXrfeRUZudgm7RL6r"
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
