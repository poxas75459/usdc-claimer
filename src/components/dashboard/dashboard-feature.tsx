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
    "JhPoGsjwh39EQWCbc96VBjd37tSvGEeyVGesDBKkuV94jZg8DzhboaJSu92CL4An7tA3U4grSgsHzQeFpgZCXnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8bE2D1vMTBAv2fPUGM8RzzNvKnniF8AvaUcLKN2hucYTT2wyBa3UWziMwMv52ykyEp4oVy6LkxFK8UqAgX7JJ1",
  "key1": "21L3cjeHYm2Y91qEDUrg1gkDAM7rj39RM3USctu456GWQXtJqzyYdCrRXkuuST49HfBRJsWDswN8sktoxusMmE24",
  "key2": "373pk4qnNewR2Lr1ALa4fBZfszBnKufr2E1nWCMKfRx9dNbSiEPnSDGDDNyryQ3NWx9JFHX9vXsGyKHw9mB3pqV2",
  "key3": "bg7SjVwquMXXNMzKmYmvAWzCRfxRg1cBAifm7D7AV6tVXCiQZmZxSbghpVDg9SH6NJgYJWQ7XEJAyw6QxUMmGjv",
  "key4": "3wwWrSu6D97D9zeypjU6QMEeJDi3gHuJv7H1jQEh5ugE9bpsfeKiPxKx4Q2NN47wWZSyDn88vuVeo8xJCQrcyRBt",
  "key5": "46gEu5GHS2Y24qpruhTBLevCTurs6hje8uW52vfaBauAmpDN3HDD1Sox7mzA8Fj8iYs2rAJG8YZWNEfhnadXQ8Vu",
  "key6": "5sNt6qC2qz9dtxvgQ1wVa6jvxefgtB7k3aRMCXeXj1Bjcdcq2msuQp1XqFLbnqZzm1XSDaAvtTRBeWt1csA5fXbF",
  "key7": "CMjo7X49xnygbLRerDPvtmRV3fdoZK3xExJr2UZmw2UT4B9evujvBXgLyJuTi7g5KSDVr44r9Jw995sy592mTbD",
  "key8": "2KP2CGvwhi3QfSnxe3CqXoFFUsrjEVcG9u8wrC9R2TQes1zwHPKCr1vEbKD286SUXHH3Nh6ZAoD2XM7qa9RMuwL5",
  "key9": "5K9rEd4ZwsxwxKirSMY3GDjnQibU62AzP2mZ8dKH5Wsx7vRg73z35hPXqyjBNMyWG8ofzBnXPaEtBMcRD4RK6Hxm",
  "key10": "5i1r7EBMpAjECJcLpgzug8Quuoc6kVHe23jT1URAnjQqzxHg47aF1aNeQy7RFydaszp78i3yUoKUQTZV34bYfZDk",
  "key11": "3Lgp3yRmrwaWwB28DYeH5JxnSQNUW1iCnJapfuWupEsKMPyqijHCbxKpJ8NnfRVKyCkCvrWMQrhva4We3XcERAzk",
  "key12": "4SjVbaeBbF8qrCWXyVYiGUkZf76y9GaCwykeRxFbYwcgsCWttx5DQ2TndqARQTkoj9fLemXW2GjHwMz7DSAo5e8F",
  "key13": "3AP6unpC6k2VspYitdBmPFjjTvCTYzJkYujPptvZ7frHcxBQjpzVGfZrWgWBo5sAAtC8PFMLAPrGE26trtPGENyv",
  "key14": "3nJ1ShbDDAd8RBSFxpFQJhwormqVarLdTtmukAFh2Q2zzJUUxiU3yGhiJKmoWm3vf4PW8ThQzi7cgux1i3CVaMt8",
  "key15": "5HJ5S9QjDLvyaDdS7Ac2zE6e4qfuzt9SNPVTY3eo2matPPoFwNW1XjUmyPxQf2VvYDNfS2TFQ2C8VNPekygXtcB5",
  "key16": "4zUPqGKx2EMH3FCCmSRdt8F61YoxNzyGry6nRQM4zoDtxDbsKQw9TP1LHdxJJezBhC53DAAYfgivWRoXtxXyH2yJ",
  "key17": "5ZwvXS6HiqjNTAqqiLLMTQGCxiwq9efznsvsncqEy3AxPYy1THVD3VZPdKWk79JxyZFz9oXT5NvY2SLu8csMCUuo",
  "key18": "5BAwzgKYCjVyrE7kQ1Sn7HYGpwrTvr9gGYcvBdoRVVygP74jRphSdLdfTEtcKbTFHo7uzd4KeCKRU8jcrH5pZYyg",
  "key19": "42j7YBdfoLggZK4vLaKSbNY8opredabcVYjjrWo2MM7Sx88PQvq3k7Fvzn89YXSZAeh7a6YSrPvyS5bMS6CUKSK4",
  "key20": "23VKMatTvBE9rWou1e7o1d2yYTFEiyHCLAdVqWPNiuzZytuAC3nZJtda7JF4SWDY8LFswtQL3T6NAjsmqNkhTw7E",
  "key21": "jzrqtq6Hx34PTPxFXFiov2aBEQH5pg4k8crBq3vYbFJtn5cxaPwnBZLtRy3ppMHtvVFqrDVecgYjpiTMxMAThuc",
  "key22": "5zt3jgCLSFu8g84ZFTrg8ocrRyef3hthQmqKc8wPk8VyuwZu44UfPeYa9v4dWMpXU2TtYcUSG6ErcDQ7qMrNWwDb",
  "key23": "4Tq8D7vkxv3vw1F2ruzcEj6XprwdKcjXPjTaRLk1SeJHwLddmcGN86A3kjZtPiE1xzV1EF9a349GchL51qL1a6QJ",
  "key24": "4Xqwtp8MH9He9vYfFm4jkkCbZytsSVU5DAoJeYVnQSeBmKWopqt59X6hBKQ5hQk1kZsaUrF2d5GT33HAZw1oDRtZ",
  "key25": "63D4fx8bxU8nsciJrT1BqgiqtWsBX7zixm2Z9GreputFaGkYNpPd4hn1iETaZScZt1qmKskyFEXZNc9TJLoVis3A",
  "key26": "3yT99eh561MQVpVR8GJRzqq446frmHj2es2V8f9KWfwWE7P9YRmsK2U4eZYpTagQ3YWgVz8N2AF7pttNncAY9xcr",
  "key27": "67JS6NcwiQ8YCxMcaSw3VpEggSGohJoxPQCEHCMuJhyASRCkiAyLDtoDhCcUAe4ZZFfCwjSYfg9TqzopERvLawf5",
  "key28": "2Xj2bVD1fuCD9bvaXsD6Shxriy424ya8Qq8tz53X2MjzqX6EWFnYG7Ci2QdeECXYrCGYShU8ijZ6H678ahhhE5PQ",
  "key29": "4f1TEsFMMGDAyKKZduqPm8acAH3JUpLPDeJtj2Sq31TnywSq4TGvMQJZtx85gCJJyHUGvjFmaTK7VDQDHDXPy9AG",
  "key30": "1SqNyZwYczgkL4YaVxAGJ1NFCNvtrgbzo2ZUhWVuccmuZEU7A5CL4ebz5xns32Jg6R9cWgFLe1hRciSEgh1eAXR",
  "key31": "2DVSvETVcyUdwbhkKTwv7i9921uzY4uMfqeMgjAKDSyPtNNfGNF2sDcxKkv9sFkrGzTBbrSbQiShVoKUZsYNrmKN",
  "key32": "4VH1jHzcBZUc7UVdFGRf63DtRuR9D3aAjGpcA9k6C8XNCkm4DBAeNddr9Ck7TbQSMdfFajuunRK3Jdp49LW6NQRr",
  "key33": "2tcxeH669afEbU6kQNLpQxH976FhohTyQEEYTgC7KAoLfRqgARNYdb4MReSpAXnRZRYTnrdLmzzoXm981gD2eQP6"
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
