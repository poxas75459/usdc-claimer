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
    "3NFJqxo3f1cosCSEqtRNHLguw2HPn6NBUohJwSvVpoFVfYQqLpidvLKs8SUJR6Sz9i9UwU3EC39oevXPnDzRHBLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aayDEymvBEsT3PdpVjBzQcSE4qgHwqUjcYjBw8jwGRhuo8bwHwCcUbFjWMRfvRFUGYGwYPUaCqvJGohua1b3EHB",
  "key1": "2sTXpDTWaSGn83FCPLHVoWTE9sPHnAqiFfU7qjcT1CJQWFgLzFKCYe76uQC7hTGpoHtNyk7agRdZNg8Wq9GyLyct",
  "key2": "3v5BXncg2zgxU7AkuPZQDFVRdweWtB1czJ2kVyUzeQvbD43wQGsQ8MwYvj53pwBJejEGWb6PgAicdTxwQzcEnXuU",
  "key3": "4iz72KYw2KxvALRp5maTVvAikdHzRGGkq6RqYeoWw83ej3cYQ6LzF4xwj6tW2ctp89tow1XLnbQZbrxAVzgzsYWr",
  "key4": "3aVMhPdPE2BRWhMvxks4eDJ5BxiLKgf1CSfRMq8VLyVetoPttrh5TSBVFEGe9Kk1HzP7r1n28tFoq8mojE3XaNk3",
  "key5": "63aFVP1K5AdimcHzLx5QXq7yuJxoi83AS8RLN2kgyuyH81BsM5mncg1s8QTkC9C7wQbaNSbkJaKpEcxBhJTHrj9k",
  "key6": "5GiqGwUvYVbRYGvpTH4sgh4mFZc3HMhzzecQUAXcCP3rFogKqcdb5tUGoCJDRJkzkisq5fBUrBwB7QrUMhdhHpSn",
  "key7": "3opimvY8RQ9zC9SxBLN1aDpCjd2DZ4wSjdm1iwbjCb3VJS1zH6xZeiiRvqdcDJLbXgiQAKJtfqkYCjreyFrGRdAB",
  "key8": "4EpLkBertvbxgE167p2et7pgzmYzSJmLTPBvgM5uwMoLnjPuQ9x486QfxrTVZ9ZrCLauJwYnMPXx7NM4uZnpRFZg",
  "key9": "iPefRc3HJz98HFWaNWcuXDuXY5JMH9tPv2rYmYTphjcThcTBqcD5dDocXQC71AXKPi1zGVyKmZvpUgiBJbHitEr",
  "key10": "2JbJJRrHzBbLMyJ3kcLc8875Wia6G9vumBVewnvQ9Xi5tKWEgqY9kw99pJbYCHVhdB9Sy9cz48deh57XUqv1xnFQ",
  "key11": "2pJAcCgXunzvASzpxn1nxCo4ESNbRceTHqCXPDH86AqW68F1K1QXDStzyDWEbE5ALNNYtHkdJ8nQkvLWE4d66u11",
  "key12": "2pCmGaKiXzAbW6NaSYeChR5An5zG4ApwtqQYQPQ3PiFxsrDojkRfLHMvwZJqyM9kWn9nPx9AtupmhyYMKZpg21ba",
  "key13": "3eNRCk4hN5y24GBjuxfgdKaeDGafCHpjfHGbidE7cjkUY58PEi5XSGGZ9pH8a8Zw84ncLs68JDn1u6wiKE7Lgk2B",
  "key14": "ezC7iotyHPgiB8iurLqqzDRkQtbQXCXrL67NQJe44cuwXC8mh84GfTyw9NRg5DULfkgYduFRFccUKoMHW7yTrCa",
  "key15": "JuZYY6Lj5YHC7JQqtaKAHWriLmZyiT3M8d5QW5oVdXdnEw7DDkx7P8S8tARrPtbHmJNyEZgr8oZyAePW5HhV5rG",
  "key16": "2K16wP37VD6AJCJQz3PMG3ywFKnQf4XjRgzB6fxakyfzQqmSBPbpFJeRG4TbrWrLs7Fk6yDB3qqpZ4YHcbrMNfuu",
  "key17": "2Za18JjVEzqdHxCvbf33mrnx6e7F9JWAwmC14F2NsnxSsf2Dtjv1rZvvDvPWAyni4Yr8C1uJ6QoSqqnSWvwJ6i2m",
  "key18": "3zsJDwbS1SCTFrKU6qsnHDRu9sWpUrVJaUyrjY39u9BxsCcwdg5btKeroE2m6B1enCw5xJV8NuLCjJvsDhsF195i",
  "key19": "5gPawgMFaieMu2yrHWKSKxkVWcgzkmS5uM68dYKKgrQRHzrTHevwj6Su3UJ81WpgTEHZPG1f5TXtAM6uqgMziAL5",
  "key20": "537qtG2grpCDsi519pT3oj9P9RfAVbcjKSC6Pd1L1wJ9qzy2HQe668gXSEDSUKNmZHfS9jY7rrSjoucVvg1VuVvU",
  "key21": "b1HrKhPJxhx3b2wbMdJLZCP5d3D3oMCHkNsyVD7daEdrH976dpRxGojZd4sfbcW4E5NGswq3evZntnScgfn2WBp",
  "key22": "2qjBPtkfrUM76PzEPe1xGGkDzCJkqBtkKCm7wYcV7oFrafKRvwg5VwEDfD9aLhkYGdYoszcDti8VD9T82BSn4V1Y",
  "key23": "32aUSVMp2uLMW8wfFaerwde3kg6oRjScbF35M2tLYyhvZtUKTnHXeKwSa4FcbAWoNCnDTKtYScrPLgHhF22AP3si",
  "key24": "4KZmtTigJog9dJ9kEiVs3J8GBA2u36vr6nRGdkgQU74oH118pXb3tJs95RLNXtecgZuq9GSaa8yiNuMthhf4PPLy",
  "key25": "9GgBwXPnzVoeAfxmQ4uftmbDpg57HceWbQnSgj3WQGZnogxYJdryxnYQeMoF5mDw3fquxwVuW2WiNSEK2VLBJdt",
  "key26": "4EPknpDrxDU3KTbn4ZToRAjTpUFkYQiLhHukfAjwApcmQMMUhiBHWoTRBPFyFKTAGe7goAarvsNj7tbp56LVXZga",
  "key27": "5XHSFcJhi1QcMp3J34QsBemDQWgoxtfS25NzXnaX9hvpYVDTKDSUEVNsLBGbKXRc2WBq7EFFZ3okU81mFb59jaw5",
  "key28": "4VrSsXxbtBw53CWeRTv6qJJBdpmbUmjG4EeQiKeTSsUEKimebvhka49z9xB3mm8nrE82FhqC62n5xVAEQzCfGNkD",
  "key29": "29qbpzNJEhpGCsS42Yi8bhocvDRmhvEzvxBac6dqXWi8XQQ4LXt67ErE7abQC3FK12EopuCK3C67MdNo9RJeM6CJ",
  "key30": "5MWtyMDhfhtcreSXWQ9XgQrJxdcmZdBt8a4uWE1LZfzg6npqcxrnF4HoP43cm9p8MByrQZSof2diEXxQ93gt8pir",
  "key31": "1wYBA7zHyi5Cn3k3ZercuZ6tFuZQvKCJnLBftmPx2T8UkaArrdQhCHaFAsT7NMAMYk1EcFyTjspuFQJSf7LBovX",
  "key32": "43T6uENxTnuzvX9PrEYkZUHJNPPXYu34cfLwx6DawY5wkWLP8d1F1CTavXy4T8Xs5hfaQXtbVJqUoa24i9PgPPnp",
  "key33": "442Vh8AMiK8r8oZYp25NktXAytVZzKi9fxURYDgrBFNAjcKPKcqfCgKozL8msPEa9Yt1AJYouBLWTTDCn5q7wctn",
  "key34": "625hNFWM4jZRJdSE7Fy95EuGAi88h9fEqxnssXXb4urrnxE3D21PTaNzvwPEL4ZmyZEr9gxCUtG5FsDPwCUhVyEU"
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
