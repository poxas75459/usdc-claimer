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
    "GjmkgsuhHNk1eLaS2oEhucioR9mJSLeHcvAtooccBJCWqTEeHzEQGMSSVk1zVFuxRGpfagHPjBp4vmmTe7wgGmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53xSDWcKkeAVEjZ8L1o4tQK4xqEZESb8oBPcUhxthE5FW2MwSmSeBKu2r8EzRHfGdr65eZXZdSzjZhMRZMpBgeR2",
  "key1": "4GAM37FCwGs1h348tCRZ3fYB8cejaJaAoDdDtMxdKXr8gjY2UVQ5rqEmeKFT4LDZuSCwX7RRWzCPoFcnvf39WDN9",
  "key2": "476QkbgT6BqW15XnEXCEoEbVp5m5knjid2KUzgN3U47LSeEdHEMDtBE6LtsWZ9ZBnkzs9gyfYjusNjSFkjn8JrvE",
  "key3": "3pgKcx1etq9bWA8hXyB5ozUmRREq4d9zwPiWxJaXWoGoySivrgG8KvYxTmTKtqYXrsgbyi6FshpX3DyCaaaSG6ZH",
  "key4": "5afeYmWxqiMBgYAGgAHzs1FNkSB6PDrd8Q6NkjgAZsHEwdmjWJyR7vxyDraUjPz9365WPnq9G1PCpZNJkn1TGd7A",
  "key5": "3WFeMispqB53qwC6hWNaChAw12mScWL8GzrWXjHxD7fxVjj1fM67fPAiSezUv89CgHCybyMsTQVgV5H5a7fTANev",
  "key6": "yuZ5uytMJjsfB33qjkurB6h8rWSs3Dnbtf8R8kLiy3YRdpLNmnqeyGVNmbAXq8KqT4Gm7iAKNHAWwqZDAbksKj3",
  "key7": "213APKLvqAauBgKnRUTE9USNHubNbZyRU9SJMUUS6SvoLr8pq33M3Udx6UkFBK5mwEYACL6Qx7Dm2gnvFGwCABqi",
  "key8": "4sBjUEZ6bSTd3mPUgMkuqLWtmwhSfvf388xZPY1c7gsApND2KnDJdM4J1GxFKp89g8WnxT8238haYJDenz8uvfLh",
  "key9": "knEYyMqktL3RUWJwASwf5Do4bvVhnFRKEBRFcS9cYpqk7eS9bg5yEqtiFBrA8f9sUXj6pXK3BJ8hUKpkCn7daSW",
  "key10": "34vjGzsUx86XVAVWMXitBAJpjLMxxMQtbYGXeND1mM7o5AbCbkyEvNwhRXpTSWysXYKt5rGQfPL9FBVJxz4MsZC5",
  "key11": "24gqGS7fnF43gzYzLAMoVW82hMMuCb9W7LRmkXEJrpzsgbQ7pK167rKG7gmZ6orFHvDrVuYekRkTcpKaoTYUhUxw",
  "key12": "3LfmC1aUZoV3rj61AJKw8Q91yJ2W3BU73B4hSeJCU4U1UyEHpmTSymCTwHZ4HybxfN8pY4B6Tx5FaZ9zm8Jj25di",
  "key13": "44DJaHB67SvUTvZRpRd3YL8QrWyhY7aJhkQ81uVc4RUg48GKU9FhL5MfBEZVTbxtunCU2y69VmicmzxfkE6XzAFk",
  "key14": "3KfB5Yb7fiix3c46CPMvCV1YUNpR4zByTnreRbv96sRFBW8Ppti9AYHjuPExisr1ACZeSjhrB1YVaDG4LWbNPdSY",
  "key15": "2bC8tko9KWRCeEmruv5jiwGY1QJNTLfEaTuwUAN5TiauPyHCaNSUUEtDCoW5nYSukZGm49vcZnmdJ8M5hk6Zb8QM",
  "key16": "38TTfaxGcJPAwcL1XnT1H7PbtjzwKyYRag8raiBTcmtsCA1kYoNrhwGRvchbUEo2EFa6sbB7aKsVYDkS6bxNBySE",
  "key17": "QdK6e3772x7Bc37QZFBxTan3v21ijmufL47j1tcoW6oRtiXHDQq7oBsRs4AdgfwtbEb8dyQTG2DLxjynWKQeiZK",
  "key18": "4rwYEpU4z5YFTWr7VgPyfFydVngSqPtK4Jq7AkqtQHwkgepxoMYxxEeHJktMR7qbMEhADxYNagakWt1sNmayw1re",
  "key19": "4Y84ofgg8fAPmj2zQitJboTjGM3kuSxMzPUjZ5RgxLDe4Uby7pViJHUFukSJGjzexWi2WYKuZzJbmrXaDiRYrWWg",
  "key20": "3xiafux4DAM6EcbvqS3hJfD9m8jhswUPbZCfd7cCZ6sWW3mGCE9ZWQZ2nUM7DNJSXGoFukdtR2CN2xRPKhj12Pok",
  "key21": "4VJgSeG3qxB8cTsHCY5YJBdhu5HbcvoWMCNjF57xfuiLMwfVvhn3gVZ6MxTbH1NAXHh69n9gNW8V4vGroCTYmrSS",
  "key22": "x9kHxKBSAXNCUDq5e6KUtXCNMScWuZSrhP1Jqvse3Sp8VHWMDvet5xdXdL89iHcWdZwsS7G2jXPWMnd9c9LVGMU",
  "key23": "3tCzi22BytQhZgPzwsLYQ5sxjviT5gdra7KjwiXAfTjgAujAQLQFmV1xXxZ5xvHRoF1bTT58JEQ3upaghZq6U3bo",
  "key24": "TexxQ7p3WNphCc995f4ZhvLG6mLkhk6TkLgLva1u7vhjtJnepa3mkSHwyLUDv8ase7HhDPdwiUGzaqHQTvvdhHv",
  "key25": "5LfazCiJcm9thX4Z3n9qxnBqmGryY5ufFTufjRGVM6GzZLk5EXbzhPGuPn7kgLQsLGZj6P3A8W5xRfUvK3qH6iiV",
  "key26": "5ezyAQYm7JBfCgRDNTEx29KzPo2CTjwbe4ceYnDSk4GEjtC79WxfLYkXpUkRT2AoKABqfJhL9NLuDo55mxZBZg5g",
  "key27": "4zQVRgMvMMZrnKi147hhwKSWPe8RPEz2n6e7kAbzt588DAF5MXFpvf7EWjd1iaVHxeBfnmjK7zqDJBim9pTRa7sw",
  "key28": "55oGhtdAPQJmriwytmm7jCigLm6Nd9MHYe7y6Jj9Tw9Jy3LUm81JhPTrRT3e6hnB5j2H3GjAkkR5EXmifvj5GfyC",
  "key29": "3FRCHdPx9z744qhYLL9kUAr8JuyZKR8dmpYcw3z8qqGnFYX5bi57voc4mtfV7K6nZTTqfqHbTN1yZVSUjmejoDkW",
  "key30": "3p9SCZAsvvtvt1q9qusuaejaqf97LNS8GWiYC89kcUQvH6HpuDYz6t6MVjPUZdR6ZkpYJqi4eDUKxQQLsnTaSh9z",
  "key31": "2b8QSmXRCJw2HpckyMG1DdDFNrLVmVvHMKZjCLuQ3pneHMQEnDgcCafXhaCotKWyqMVm5LvcHffC8gqomwXnF3Yn",
  "key32": "2AgFB7hvVKm1yYaz3JTtL363osmrFMkcBXQtGXdXRD8dCeZ2FCUzJcjm7QKE9KUrsEk9sB1taqxXaDW8V17DNKqy",
  "key33": "2gNaDUgnDML8boJUbqu6JTJF95bepLPVunB7L3PgXUyd4XjLjoPengzEJVyzsNZ9Kbpxh8L6z6Cox7ufGqKkZM88",
  "key34": "5YosWjEwpob5pQTBPqkcgGskkHfTZ5nknQpst9JErbB62rn89NKvD2VxRcPsWWLpPe67TY7a4ysa4NUkihfGaSxj",
  "key35": "PnUzbSMPLf5wLwmdELaG8YSdzdZzhyf2dkejSS8AUkQULgzcSMjL6NdrFLSCsMqMR1FW6ygYReMyoEyd5dpBFg5",
  "key36": "4s4dX9Ue9h3fRJcTmzZc5stGgfzbU37njihkmvD7K8tmyT4h13FVYSP7qepf5UdcdN2vvineBwkA3DedH12YaWWj",
  "key37": "27sj6REYvFcGQRFdv2C7jvjEy4xXJwAFcHvE7ogKqZQViwh1urMHzoBeKbmqoMT9awuC9pVXUQHytwGtqhJWjJXy",
  "key38": "3HeBs5MK5LpJs6hQqNvm8oAp6UMB6bvbeA6MqNLPgm5V5g8y4yPbP2C6bt6kQH3sFGBWdcmMKcqzwWKq9F5EYxiR",
  "key39": "3P8464merXUt1e1djdEEgRijLNKKFbZDvJNMu6t7CjUXK2imAL51E4DTcF2dn4cxZ6ZCHjSn6w9MHHTFYERyMuHC",
  "key40": "5Uxz2PK9Qdb9e7hd5XkWY6tn5fwvEBYSxXAPJ3ip8FeUoFMyK58STdFJB1Q4osuFqZKFLTzbwAkBus1wh7WqYLST",
  "key41": "51acQ1CSjCnPWdQAoqV6aQ9gtYRDypKzpTwpBXPCUFbpH5UMUHf1fir6Jn2RCLSg89q29p4MrpQfNrQnnuQQkhRF"
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
