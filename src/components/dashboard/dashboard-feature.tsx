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
    "2njAXPxaL7H13D6DFM1yac1TQXfQEWuf4Hr2nY1DTfaEMm3MZ3vbcfjNdyEFUCnVPTe35bun74RygjDgvQJXF9YK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HLJNjfqCTN1AkgpAwtjyQMEsexSE7FWj7wvmQw5mHKsoEdwuvJHHNiaasAtDo5FmNCwC3zq1aT9zhJCmfZLgPd",
  "key1": "2UNsa1xZJUn5w4jDQTybHTG7JPaH9VUzY9xtkmH3SfuEQ8tZYE29nqvNDyYwb2meiNryWGug1kHfej5n7HoBgxJt",
  "key2": "2oa9R8d3VeiTaiBSY1z33YMuPRvyqk5mpLmJp3TPbW5iinxSPrnGcitonpYum1hywmk5bSkfhXkBegHnrTuRFoXz",
  "key3": "rroriM65JFvQzq8qEPfXtaAGKvN3H8pjHomWDTCvNQu1pRMj9YVHq92ksBcHTywtpgqkLuu9fwaDxAabBNipJLc",
  "key4": "Rnzo3jhQbPtc7zDq3w2CxhihAs618KWxPe2YBY5pDbTv1RuRY8WTN2TPs1GDV5CXre62hfPqTSQ1tJyTXR4rbBt",
  "key5": "tPobZSaVC3ViUiy5iaLCfKbZ5cVxM5ud8QeUtQhFfzkVVE97UnDX5sC72eT3MdndJHKoaPe4avkQs5CgYEu9HMW",
  "key6": "5ycWs5wsdTsq5ZNcM2pSR5ipFpt8Qy8GEgMxFmEVwQtE5kjsjn9GoGhbiAur66vEwkf5vWYurjmRe2wTs8TCq5T9",
  "key7": "2MXYZSTnDkpcBTtMXMb7uFpXqipAGxfNgS9hja4G5freavKvKarb7DnBZgtz9ETdDiFrBUgpSu9qiy1N5QJXsdsL",
  "key8": "gEGCg1gSAUjtTwqDB3FD937BujwU6LzfLDv7XpUq5LWdzzbs2xJG5AQJEaut2CLj23yPeGCrreXX8yVfuG28hX1",
  "key9": "3Yz5ffhXUUHGXBFF94VukY8WVy2mv5856udTu7d6FgN6KwgwCkgvGiosbZLFhT4MVLAKPnasHHk24MNkhFMu2GGY",
  "key10": "4432a9ZLkcJ87jbSYYDtERzAYXCgh1enVmS2eX95ViyMopCAA8S1KL1maDECnZPrRS682CaMivxhNJyAxWZpxvMz",
  "key11": "95myf96ecPhX3BTTi5SSc5aaWopzQhPkXURH5423XGijUKA7TeriH3zEktGZG3Z2RxETp5mxuiy98S1DA1WPTLd",
  "key12": "3pGTykNWg4incMb5k5DCFJMeujBb84QVEMAtDVUeJeNFU3qGoyypte3dvSNyeb4dtUWLTQ2ErEbB4YJhZv27mEi5",
  "key13": "5EgoJi1fV4h2onXj6cKjepEPHTiYp3ZMTMZH5gPFWu6oagas4DR7yG5pYhmFsK1SLjGP5HSghySQpYqkL6zLNZwV",
  "key14": "2EruZj5Py6hA5UBfkfvcLAX9LnLQguTDrgN8Uw5uew84wgMFFJ7B8z7s7t2CUnzV4CZMfgxGkDrAf9YUzcih8oWb",
  "key15": "2ztBBAHCneekswXSzisJ3ESQcUsSpTgS1uXkPFaeBKw7nUs3P16vcdhtj9Cc6HrQfw1JujryWe3VqysaV9jXv6kv",
  "key16": "4UdT3UqqpBJ7AjDbV6dZjKTRxqym4xNa9uCT9MtHnmpthTANN73u9HNrgbayGd2UuCzjivEbrWaho7JaAbLzrUAH",
  "key17": "5cMCrv2dvduCVz2WG48nqxBNmgnfFyyry6mFgzzmjpBZAg5NRxfSsm3yKrUnzTYkuKyrzdYksHeQKVmBPNSWkpW",
  "key18": "39aKz91yfeWpJYCU2n9kqmzoEtMDFLtQC1Xr9m2XeUp2dAy34RgD9x6DJAQEwYtApomUh6tgxny3DEJm18iUCzxv",
  "key19": "3UJe9AfAspvoDRPQxhHvHCGZpLxzCDgtgQgzsG48hPbgv7o6ybsfh8mqdQCakNM9SRzUMtTtQAe5rAokxt1bzA68",
  "key20": "1bTBPtLMQy9oC9mu96jjuCoBaD2R3JqJKAKNhXnFMFLrKizDKX6iqmDSYayH6vi6midZaqzPNobjTnvBqvsn2V6",
  "key21": "3ZGnqji9iDLnzMjsiSkkuLoT9bssk8b3e8HrgxsNyULs8fqiknNgVLnSqBaWDB7hqSyKe8vCABZWUgwM2i3XAbiQ",
  "key22": "4tRrnBJwgiveTyFQXMZHPKyqJjzgYHUqiHqWehzYE7mhDznXDAYtEpAwyn4pfZxpMRpHfW5i297e2gtwwxJc89C7",
  "key23": "LE6qPpwS6eSrLDKsFyaSr3dDSsuPNAX7UgGPjpWknm58W9iY7cBCzdK9ryZXTmB8rbp8EtXr1phhjso4pw4JHJo",
  "key24": "2Y6qWkDArNB5Sb2B7nQEZxS4JFKWa3GzNtAzhSkaUy4xYJYrSvzJFQbFqejQ8W78TUXQD2FS32apmSSZidQXhn6F",
  "key25": "2uzM3mXVN76yFP7WH2VQeiVPD5YQo65pa42MzS6wahN9tCd5j2JDxN3kfAoy494n6jzJ9bRySQiQEEqbBncvvFo9",
  "key26": "3xPEHWNA8vis26D6fupmnz7yXRN9PsWcomuoYneW9zZA7sMLoJQK6V6H2KJcByimZrtadnTa8Esits4YqRDZwGPU",
  "key27": "nBRYR5q2xQttd5AZPQqu9soCSwpRwUxS8Vc9hTmWSkB8kfR34WEHBRQC7yV1o2gwkGRXKPLTEyMyUffQsK5AjVQ",
  "key28": "3RD3KVjjakVeD1xTFQ5Wikt3LzAXJa44GWm5yzfUaMr3Vj7ME11sGjiWqJffCkcq7cHLfRW8tE25EQLNrtex5Ldt",
  "key29": "4wE9ta8bTG8Yneo7QLFucHboMeHkzhTFh39wducxSJMyVkEZCgrzY7qxQPkxbdZW7ATseBE9g4B2kwKkJsC4v9PB",
  "key30": "4ozgtwcok21ABmBYTxcr5DJGzbH3rpMKj424YoMkQ35jwscBPVfgCyQmCZ9reFWkotT71Q626P16PG8oQ6L74CKd",
  "key31": "2agoBCAbcNKVvwrWGLvjornSimytUaFYTC3gAjU2JFZ3hspFpsaRcUgYwzVgbmgHe9HDKJX9mGWCVd8XtSUcxXEy",
  "key32": "45LiRu6oEg2Wg3UB9uw8K5LEfc6o8LtoqrshW9aeiiJMxxPHMNbw21vf2x9oz2mpBJy9SoQNN2Lo2hfodQRLfy5A",
  "key33": "4q9qCZ88y7A4Z3zuSaZUwGx2FTh9YgyMZPoY6gw2gE9up3qb3kWTLsL52jjtycHWrAAaFbsxwxKdG8n4KHcxzuxr",
  "key34": "5LNcA7W8KyTSqRhBf9cY2bjUo5hdCNjjeMaPPg31eVZ4cX654XNAJ4CGz64tDsSfdKamyw8FxG1FNhfNDek6yKZH",
  "key35": "52T3fe84hrWcYavBefxaBEMZz1i68Kmb96AFRstiG6U1Rui1NZkkhhaD6X48LCogbNVMc3xS74AqczxMzu6zY7Z7",
  "key36": "41qckYdsoxDQSAzpewp598HUcZTKbj7gSougu5aMYvDyHb5JbBJzZF5p11A3ixBxE7wkJeS8zEeT3uSrVk789VtK",
  "key37": "2ep4dnjUqCtajpS2Y72M8yLU1BxFRgzA2MpLk6KKD2aTMxupciZnWpgawsVcspCsY55AbbnRQxCBocUs2QteMdjH",
  "key38": "hXc8jFYd9jfSdJWaLkxN516sS8Ns9zXvSg2a8QpfUuo4Lw5GBSeiP3UHU8fvRnXVtuqjYVeqhKo72m6gDe3vUkP",
  "key39": "4mub2VKHNaWJxKiusAAx1YXzdvLT1rE68eJnQd4WAY1G5X9zfeYgSszAHKkzzMYxMq4rzbHvVBimL59gtGwYsxAV",
  "key40": "5V98ci7LMhvFssr7kKcoSZwZKjeUwo3q9q3uM99N5PLVRQWnFPRgSHZWVDCNK9uT4ZLbdsEJExCQqjYiqRZabc2s",
  "key41": "a2ZgAMJ1vHBMQYPhEGiGidjTMfoiskpZawgWVu7ns3kKRLjZQVQD3uVAAtj2wdkCjW8M3ck99gFfdGE14Q8BYHN",
  "key42": "LyCQDwiim6NxYHkTvTaBdBBW9R1Khzp362PwSFaums3X7Ug8yWKx9KgiHCsXvSZ8abBHSS2SS9RgTs72CkARvEm",
  "key43": "2UeksiwZ3JT4uZCKqLpSqHfGnj3dkqnfHMeSeZVmqRJ9B4hB4Tczb4kopoyn596QqrRBLf6EEf5otzfcjwxz5xZV",
  "key44": "4rBu2M4wACuxRt9Df6y98YPV8bGv9F1TVNFyLNAEpGBpjxt7o5HWBUVaF2bN4FKTwur45Y9zudgR8sjn3x6tb7MU",
  "key45": "5F1uUvVhhvec5B7gXQc6ZEpYvXBPEodLUsQaQQ4CWsBEv5PTR51zC53rxMLFKi8oSQSfTvPh1NU45TV9dBGyw3Gd",
  "key46": "4tWgXe2tXqHcTms99FgsCN2NPCnMtbLGgVRNuefqmZuwr4o4WwoBwE3LU56nmrnPctkXx59tv2DdsuPjgFQJCbZW",
  "key47": "5MQoraQudzyj4pNan4eqxGM8vdQ5EkWZjAuY11o8Li2gBLxQ4vTbfqzNfqNAhoC5ZxosDCLX3wEjeFTd5d63jv2z"
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
