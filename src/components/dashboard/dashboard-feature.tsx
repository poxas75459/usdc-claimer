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
    "3trcnWNaLE11pMvT25VzodkCqYD6v3zcgDUuq8Pm6Z213i3RFc51ppBvdwtYdKeT8h4UQ6CTDju1oXW5Tg75yvjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kGD8tU7kwPfPFzETw3AjhdmuyXATJoJyRJg9ZZTspPMfVCgy8Rt6EWDqNmru6fxzCcNLwMgQqmybjz9dqJnSh3L",
  "key1": "32bEdo957PZKw8V6ywavZfT1t3zkTQZXs5z44aK95pihYs63ocEUZ6b638aFVY3hX4iAQw68vpFKu5nQ9EjERpyn",
  "key2": "3t2xwhrkomvDwXMMYxcfaMNAKUfHVy4ieTGccURJBqDfpumjJ2Rug39NhcFV5cCRkxZygoDWF6sR1wSq9Xp8AAua",
  "key3": "67copLWQPnqP4SoJiv9gKV1B9VwKEq4AXYMM54RUQqPqUcxHDAjx46rSaihn1JCyPBndoiJd353prG9PxxigKCUa",
  "key4": "ymstrHN7msGstLJGzG4fCqQFarCKuEgXuRqapajLH8HVXni73DkkKWUR5apBPhj9n56caHZKrX5i4rsPDDGKktS",
  "key5": "3nWYifNWL5c7Y9pLUAc9FVZqdX12SYGxHYeRjJrJJwJjRuDMPP7z4V9pyBt9v6oogDx9owALuZaEVyCy2yX8sneZ",
  "key6": "5uRs52eSxgA9gnrjgMCYeWbvxQxVdsF3aRDhey8XAwhUXVGKEatE86fMiJ9ptBRt9U569s2ycd7FKJVZFob3aLyU",
  "key7": "3SLcCnRAqTvGPa3rsihuB6663KvjhXLEedrhJJnaZEFMTc5m5VySz4536sT2M4ouLV7qFAj5aaKBet2Zngb9ZZcG",
  "key8": "5aQfKYfUjRsRma12NmjQWStKFDNwXHyK3eaaKRZMXgwProECVMANktwB6VTGEbhyGnow22hhk2WS29zWMWjVyGUk",
  "key9": "5Vmuwe3UuCDrMRMPxo68oMnN3MWDebmxzfCpDegugPNx6U41gmdeFRhQgGLkhi3fpiAp9BDMHCff6zARpmBGc4sa",
  "key10": "TUatQeZKpko3ESm5quw3RFVB9zuujJjCPB7zE2i55uJCSq8nEHH3xGay3piU2ARH8bFUTXNU5V56usZJH7LysR7",
  "key11": "674UGds7kGQNibcC5qxVcXmVNigrabzZSZgLd543EMEZMaEXotYmASn5bQAn2roPKMQM4GJ5B55AC7RqGPCjTA61",
  "key12": "2h1G6kxDpPCPS3PF78THrHh5azK8dYUCfda8c37Wir922ENsZewnhHExT8rJDHMaRmgLUpAp5Me3ex4oYBzUHhsY",
  "key13": "5M5PCCinVGPjDPo52zcFhf9vBk3S32EWa7zxc8P3dtUaLzZfqbnZWnqeKmhQPE7FfbZbvPztqsQdiBrKxo46Gf5S",
  "key14": "Ww9cCGWjprWuBnceVcW9BXjNZES7693nUWiGMbMKVGQZLSJFMFpfRNpbPMeVoANvYAaxbEK1tceXU2yAT9wQvo3",
  "key15": "3yVq1QegFKcjo8TfX1qERh8dmBby3J8uxBSVwUz81zYeXUNewQ6dTvWYA1mZ2APQTo6YrvYbafngHqjUp7Le3F9t",
  "key16": "5iYMuAZsfwEtkVU881vBic2YuXpr2Hqc2UsYbkg6VLzuA5YiZduWtt8Cf4FfG1ELpmRwgDvA5AAhFwsuiarTChnY",
  "key17": "L7AzrZNzFPamgzzGK1y3jQHP2rBuZ8gEfzVxVjTpMtZhbzvGZhnxLBRUdATdnBiCLf8v4csiSWf7FV4uUVuVQMr",
  "key18": "5gXVDLc5YM2Pi2ApyvjCbwtG1AU1n1oc2hvqhKapCz6WVuv5qDa9Hme3AkV6w19HTJxDb8essvB23JU78rGGUQeZ",
  "key19": "2pvtBW5WYjWHXgjAirhF1ZsCPkBUoJC7HQsZQRdigkjyw8Fep4iXH49EZCfiVQSpwZzJFXqfSQUiMeNX5jfsnRRu",
  "key20": "5UWR8FrZeC9Pv2e4dbjbL93K2jEGXCpEXhzS52DnzY6tWbPYC8qf7JJJmVX54XaCeLThZoH3ZTxgsSJTCMWyHpBk",
  "key21": "5kot14LdtsQ4r1RT9B7ugLxNJyeFJzuLthPdvCg6fdMztyUSk2zZ6iTf3NLjnfCVfND3AgHej5i2QpnWNhHdyc7r",
  "key22": "2RaVcXfPzFR3fMu1dHhhRJYjGvJCL72xiBJvX44Uobzt2BF9K5nHX8KMeZmRmFJtow5R3h7519MtBhSE3SezzYW6",
  "key23": "2aB6m8UVZ4GYmCZwcMbkL1CHuBTySKYAPvnRgcD235ZnEkfLYrGRq3McfWFEpUcACKpgbqrmMUSaJjEtFSsMcFTq",
  "key24": "3CtcHYEDarpv4bNw6yqdKaBS7VAGme12KftanpVrYKHw87j2qosGRWo8NGyxJ3xcboWe4oaDni7Kc2rmWcYQJtmi",
  "key25": "3eXN1LyDXRv9SCSTnBn18hXAZ31WpdsFh1jZMLSoLioc1JhD3ydPNgkWBzbLDNfE1CjXS7rCReULYQcpmzzAwEwv",
  "key26": "52zxzocXArAhiQiHqVZ4XTgpM3nWpSarpCtixieDYmZYFq9GwKtyiFmDr1FiYLtw3bLDJ41snVmT1p8MppSUQvye",
  "key27": "MZqXSB6s4eBann6kWAEgCSVBSsrEe21WfPJznk1XcwHcjVY5eaFaQeGooaM7zLSYyyxA4vvYYQdwJXRCTp9WYn2",
  "key28": "5zVgZSeKxbkQywPGaiFi6bttVHR1LKq4e1Ujv51265Do5PnJUJLqxwFMVYLKJXrQEema63a45R6ZCeYJVpcpgE17",
  "key29": "4kSCwFkWtqqaGRZKQdQRYbDpVZtfVzRqDmdM5M8AyV2AJvnshdcDRFkXghNdt8iG2zDHy8j7nGna7qTC2H1BVuKU",
  "key30": "Eia21rNdMVLi9y53gYEN93mncF2pZrHf8pHRqKQCycDZtfQTKounuzZVhshA3fMFNVmbcPWzEpJWNgMFzyFwkCF",
  "key31": "4ibAAzpespSywnkYJMkjqaHWu2YStJPPWLGpM9NZ41osb6Jcw6e37EHMyBve2sxA7SWG36kowCwQsoqyBtv1gpFE",
  "key32": "Fhp92DcHBe4vLXj4ocwbZJGLxNnx1Ys1REonQZFVTW3aDNZKsioDkB77dHJpetjXZ2XF8cM2efZnvYZfRWYSjvw",
  "key33": "2fJg7pRiv4VPodyiuGBRg2JMiMQbeCw2jUCN2Z4tsmFqooyZeMF3pKXf27cFFmxTkazSKMFEC2bnABc4YLGfgqrJ",
  "key34": "5p9srfr8wBMXWZQ45c9Q1xEZ3yaAStCHg7xmEr1M5DJQAusjD7xc3ciPpxbxdGWKWNv9WNgPLFVyxrN6t3xymcWT",
  "key35": "yrGSBQhM6LyjmfnJ4JbNCdiw2WYvZfC3VhPLkSSbkF2H6PzPZCF8Gw5MtxDYoG41v5MNQkx3mGv3mmk285K4gDj",
  "key36": "BiFWkJU9MKnQu196ParKkpNRWjpYbmRxEGYqiUZhqxKEnA2a5mwoYLRgBMqmH4cjAdr5mu58XmKVh9fuTFEoUaX",
  "key37": "2DmE4P26BnbAL9ZwrWj3zuM86pJ7Ushkzof71tXWUXPnxJXzrZhc4gpRtLJZJmJFanSpJ7tfj5wWVVsRefm1SLfC",
  "key38": "4oUk4HfJVgqERZnvghS4EZFXUsSKq355xWhGpaGFUMJsfQA8nVP9FkHRwmgPyyCqKmxVP9WfqzsZdiqJSpdmDhCS",
  "key39": "5fVZbGGJyu2fmg3vmDfxqwMzmkbgVArARCozS9ZcQUMrhQFjoCMT5PZndLXXE5dbZcfu1yU76vT7DSxnw5YVdQJA",
  "key40": "4cULCXwt64ETM4vxjkhfnrr6msnekwk4aYPP2Lz7ZQdsNiWhwCddZyQ8rEzZQn6RtAfqKnjP8kZfz94zLCbhK86i"
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
