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
    "3PwZWXpPmsKGPcVcASbh9oFF8QfF11cRrz6NugAB9BAibKfnujCbtGch3DxYjBXCEKVkAz1Gb8BTrGnAa7SgJsGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "457Wgg4sxZ2CSwE4FMymfD9knRVi37JeHsEgCgwYdbYxxnVDyq8o8HrKzExWwNJgBunHqBiiJWVp6cbF6wZXfnwC",
  "key1": "3NdpyXWwexFsENYFXnCRM7QGAooMZtNf9YYK8WqqwEFqgx2zzFWxW6BeYmCgQXv5K6qydCDDE1fRxsxm6Xq2hKhm",
  "key2": "5dP7EGPvU3ZXxB2Yh5UpQPzFkyBUj6YcqxkHEsvpm8JC17WvXte3obxS1rXk9etKrXtfJGNMKPeoNiY7mkH785it",
  "key3": "4C3E5cPNCdis8tPjbjn3PW9A3RFbvLrZJWpNQ2AYR9DWS5J8FnZixmgQiv5PPfLD1kbzwFCh9Z8ZdUp4pUBotjyY",
  "key4": "CkmsR54Dn8PhzaBZm7f4PM2owh7jorkHW8BpFq7EbPZXDGWS68kV9aCodSmvtk7gGVdtA8cXcPKCvZuvNDZgptu",
  "key5": "44Yj6zNLx7MiZMQfBe19G8c53f95bPEFbe4t2jc1zLvimvQNfzoc5HenUa3hL74hyb32Gm198tFXTfRn3gNBga5z",
  "key6": "5i5XTYcSbxHZXWPv3zirbfRDDHqZYn8qFxLNzAuisf157cNeTob4Md6etFtHkGxu7gyJrFoxXF8fcgLgdSBDHwdW",
  "key7": "4uMsZEH1fr4DEgzx6PYDz6AY2iNbpxXFx6LXP2gvVP4xmqJB4Q2RyUpXnPvhezafWqEpyaukHN7Qrs2YkKRia4cF",
  "key8": "FPo2UgKxSv5p5cWt15gCbiMVYGVS998c8Rki4Y4dHuFHY6eWGfS7t3M93XV4P1zCgiz78Vfx62j3zebsf22m5ZB",
  "key9": "3U56JzQ8jQLBcLzVcZwxuBmcmWVWq8ZXY1U4YYjLS9joU67bfEsvMEzHPsoqci8qr8ZL3qjPb9joRMVzmxUZC5Vu",
  "key10": "3c38D1kWo8QRY4Ua3pvm3vFU84WPmARmvkah4bopscWmZMXWUCNbYUYJYNaA3bgSDZHwUUGfoSgFPmqNX7UJDKZq",
  "key11": "3GazuuhfEL2Bh6fpC8R37pV774u83qb8cG1cgdVGYRWePUYwuKWV6D9KqQnYV25at9y1jzDAuutKLtsP9JmX8rXz",
  "key12": "3ANDvGLxQbvjD7tCEvNNZCgNLjkfMu1ivuwBwe1jN3DKHbp6ZfABNzFadXvCJw6JDp9rqytBvbDU7MQPs7NhZtTx",
  "key13": "4uY2Fqe4isuViMToUhX12jMqHZ12mUmDejDmJuzSgfqWEmcrSRAB3gUsYhMWi61W138Jk4xVB2LYUEsJrSkxfkZE",
  "key14": "5LWFnjXyzvE57pKeo9geLhoJ31EuetqmbVmh3Gt5s3yEeAbiwkbaktHa9suQxkeK5b2o2Lzu7aBhcwf2tSnRYxt8",
  "key15": "5NwxKZviKnffpx5ouxyRWtfGqEifeCXx5kycRuJFik6Uwb17mkb826ecgWjp1M647LkcCLXDYq3Edbq46tRwdSCP",
  "key16": "5HVD6CLYNHRn5FJ1StD5YdUhjrBr4WpnthbSNFn1HwTRS6qL9efHWtMns29NHEEAknLBfQP2WnrvqRvvYhNZ5seX",
  "key17": "63r2BysoBjkU5WPCWHiAyEJV8ExvHa1xpGRR8oSq9eYbUNfxnN2ztCgEMQbM3ZpupMyQ1UvTTfC2kUy7aLKoGHzA",
  "key18": "3H2FrZSURUkRMrNQFASDKsyWwyrW6YUYg4BtyNJcGwrTRBwqjSgHerJ7t6NhG8qfh1vpGY1xhRNh3A9NoChYVbqd",
  "key19": "4QtwTQc6DhSM9epBaAvBoBDRRzwVC52HUke9LPvNTnE8JMPLQYf3izT1ESZtGDDfHR4hpDP5BGJJsjoyNcBnpeXW",
  "key20": "5mLvXXf7uaKViFiHa7pCXAiCbCKKuQar25ppPZTgPjVNnsiN49zojhk9PH9omRywTGcHJyvNFS5K5wxuefbXa9tt",
  "key21": "47GKefhHdMsgGsgb9DAAi6h92VRecJeNK9A1KYqWsc8rSqE5tagLzvxcngf3Epuwnu9gvXFzTBpUkHrZLaGua5KG",
  "key22": "49UpaUXtG6PeFd3nTRVi6EYxRzEjibKsvr68Kf1ag2rdZnsi8pGb4KBjBUCfSRqKf3kRqq9Q3e9GYj3Xh3yxq7BV",
  "key23": "2TAXhXrDeqypfj3bfaRSiG9JboqvWyGEq1V2zPurv46qQ1HZWTUBCbeGZttEkY9i2prTxZ8TjvZepxDpxxHyW7xt",
  "key24": "3ASDrD8U26mr6XFxZKgfWNv8Kv8eo1tdGM31x3hckZDkPjd1cDpUobtjewdswhBbpy6DXam4JBrzaxfbjonfr7zu",
  "key25": "gVypCxDpf1h2nV4raEmPjmsgF4pjRMhUVTH3AjnU9saAL9gd3tBJNcBShnREhQE2xgUyK4FhbRctsTotL2NSyUz",
  "key26": "2dShVEecXVpEwzN2d7hV7BMNXPyPgUMbgBVKs9zJTsMDhQaSNEhfrMezyWeqU3GFC78nxhBBprmxJWQfj1Q3rG3e",
  "key27": "3bDL1musaRx2VPwCHRDCvUTVGyaMZW29tpRWiCScSjar1szN8uEX2aqhZ3fkRvDbseetzGbqVbGes8vqqZACpZgj",
  "key28": "ry8bVtPsM3VeeGhgFQ9x1twPhBd1MHjnNVobVxz26rXfUPJNCtqZFgCq25MEBf7QbpYb5GnvN88EaHSEqmFEME4",
  "key29": "4qhjCzqBEoFMmidGiA9BjC4R6fhbvXozXpE5oYgWvy8oE7WLB7jjkWGs5fehxNfxALS4crKvkFPtPtMfMPW6W5op",
  "key30": "4utpQdhwEp5qKVwRiPkgPGJierqsXz2frSeRPXh514GkfzvFv3sb3jyfpzBrgn7woJGhDZDsw3oZUq49WgqRRvEr",
  "key31": "2Kzg6KwNnU1TDAwy8j8jmYE31wcgUbpaWtCGYQcYPwjtP4DMc3mp5azSRaTyJdsUBPzgV6nsW5pvrKwVdL6udQnv",
  "key32": "2hYdkmUroar1tVQmdUXAuXqGqd679Lnng3htC2hn2cvgNbSDWMrHvBDTA6LBg7tk3s4DkjTE8AqPpJShw7cE7ohv",
  "key33": "2hGeqZHezVXCRFyGGSYX5M6zWjtdjQy72kox9jPVPKHcddTEsFHEQxwoEKEvFLCCLXc8wtC5DvyECPpejCVBMQdx",
  "key34": "4hTVvBVC6DiMtYBMJMT9ZtcUgYNeCNWT1tbdWDwngokW2h672ZpJ7oWJbyk3HXU5MruQbeducPGMrkHcDMEbkU4n",
  "key35": "4yjhWSgvuZCjMf7ZScLhd92zSZrNtqUpexkvJDwfFmFgago1ga3YTVz1TRYJ6ESYawxJiUmtDi9Fmr55c5ysgrNF",
  "key36": "KoGa1n6VXurztJdaTZ1ezbVoB9coQivBFPWhJ1oCs62JgJxV74EVj92L1oosPxgm9zrtVUMQSJjBV31VM3BJnwx",
  "key37": "vFnFfV4dtu9PH7LfW8gpd26bw4ZWA4Zbg7kVSSwPpjRwYgJFVbExbugcsMvgHEnHixUqxDgpviy5wPMVQBncXuQ",
  "key38": "qrbYcgZH83wTsUmKQLfzxsDSWRojbvS14MCV2s3yGqQbAW7CFH9kCF2qrSWDJFXJb3QLp35i1KeqM4Eof4YctYn",
  "key39": "327dsbBnTsjkMZ3XkCsrzKe2BXg6e545N3yqUuFvdnd6Bx6iJ5v6PpjmSsru21XYjwksf2ScNYpTiJVhwdWdvq1u",
  "key40": "8CewQKvkjL9vioYdzZU67mqffAMC38ZQ1brtfsfp7QdHnfHccpYvzcxPpnFswgfXUJVsL5VoHmWggToiZ1ZFBsP",
  "key41": "4p7QYHkNaF1stbxaE9XH2UGNN5ffEYv1aVBKTb3Nw3ngnCzQYbMHEL45keSuAeP6ofuJbkoxiR7apT3oQCV3VUVj",
  "key42": "6qidqpo7jZZ9dmzhxmwzCefb9T55MPh53sQLhtnUBPEFN3LV43gwzrfuib4cAVo8ym1z8CcTpKWJdR82UWN5J3e",
  "key43": "2kVDSBnCtNkpPBgGw2S31wBL1K7SAgTzJ98F154Ztg7NtkLk5URfbPJ1gB6LbbxUx61tFZoaBskeWbg8r6s9X2NX",
  "key44": "5C1gbDCThM4rcJZZEFTmW1BQE66t1PPkm5gToHtReHEtvbfSssw75AfGUNRfzfng7GeRte2jAYyBBfP5JJM37UBq",
  "key45": "4bihbkaSWEQriKhZcJ2iFSAQ6rqJ5w8J1fkYzk3QzvhWWUwfY3bbjgUiSsHQmpn42BQdHWwtX3YtxTqiYhS9zZL",
  "key46": "3WrT7MeUy5vRYa6WSB9ctmBZiq3faU9554fqr6YJZekteYB3fdNnJdHfaKWQkyaRsi9yFUhoYNr2zX7bpHkNsvJ5"
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
