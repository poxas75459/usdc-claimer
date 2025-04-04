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
    "3Bistn8jumX37QGWDLQ8anL1kntYqppiK59Q1ZRM7ZUVnpDNsHmkEqeZR93xHoQnDRo9C3oMMnZ44znSNzcZZECy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bHoGUR1UbfS3PMuNN3FDrjfWGXc1uzFzJHAKViP1vQLLvZNstZEEJEM2w9x3xKidK7HKyENaWrJNfpAVXC2ZVSh",
  "key1": "5cs4Q8W3BzxchqRpUVFm3aG9h27C2Fpxf44GEVtudkGQkWyWHH3ZN56FmLGeiuPvWDMbchx1ePHg83AuqRCV3yXk",
  "key2": "5AVmEvc5AMzMj6xp4368RTaSKgTjfoz61GW725rjs9pBamEzJH9vRNzzHXUHGyVcMAn93VnRFF6BzA7ac5M4knkU",
  "key3": "fM8j9Ks1WbiCqzobFuZq2Z6n5ARekAJyYRWHyYfsuufJpkRaj5qFJU7PAPqwL9ojL4yqL1jL4hKo44P146gjsB2",
  "key4": "3jEozRYE6hmjpbRxDTKVNmAAyc9qiLgGhipdFzaGJRiuQetmg6cbiySJU6FQKJfny3q5RSErm7C8EJSZt28YJEv2",
  "key5": "5iN8WeMT8TGJg4boMbjFLz6eBnswBa9zHyYir6eeVjkxYsNhgraJz9JxQXG2P23MynUz953toZFiknfp3FjGbGfz",
  "key6": "4NMAcG86x3hw5FzhK5HZ9odZuY5m412w52djbaktbAb1X8GreJzBXneR6x31y93KqhDtViF5WFf1Mx2kq84yv4BC",
  "key7": "48UeF9WT8Sk8n71ro2DmsA7H3NgXaQGDZnfGJoxtTNnBMHCup2kMk8zqPa7dqx2vzPnAaAQCD3xidBPsdFMNd7ma",
  "key8": "3UqNHuZeku4gH82ByJWncWhE9GmqhUkYyTWZdbzoRTP28P9xBZ35PYc3QQvJJveRJcVuPc3Q6oHgWUcY6iC8a5Z4",
  "key9": "2og7EL3PmDEVnaFhhbKbiTTRWF5VcHRc5uM5WSca8u9YBiALRbc8QAotAz49zcz2TTy2uucW8rnohQN2YVhonzeT",
  "key10": "4e3hkrh49DgRJQhUvqB1foa7V1iyVTVTYHhQwQEZNoccdsq47dkXjckJfPsMU7nQKqr5o9gT9TrBhi3G8rfkBzN5",
  "key11": "ydHTa3QiLE9zB4EeZ63fDq3B6B7UjcytZgvfgqA1CoVfqTGjmTUxSFV9FrScKwKXfTGun5ABqJCqBUmNQMP6oSv",
  "key12": "4BuzqPLstRUHxovRifV666Es5Zc8hcWHjUc9gYod31nnjiGwz9s9Jk2GZA6H7KhVcbKfUwD9NJjLgP8Xt4VaoGzB",
  "key13": "2AJtfSKZrVMPUmmX5sRDYijwhUoXzCVXxaFcRK5JjZjhUWzbezsFFv7roPKwt1E42LPEsTChEcc6c2kbpP8daGuh",
  "key14": "jTBLPzpVwZgtVSoN7VdxYSBtKj2DvBLuQG2dhnrH5ueGGUM3yyxG7kDqSqFVTAq67a9HtGn7X4WYbBhYLG1KBMn",
  "key15": "21QtHMpgCTzApDjR9vrBfzFwYMDe88qgAdDVmqTmDG4voSBcjVQ3s9emrR7f1BdX1k63saQTbME1VhE8K2eXLUb8",
  "key16": "2meCQfrRT2wWSBXgNsNoXG55Rtgv4WDq8dJjYLhS37gqVR6dHixgiPQxTXXaxkba1wusZfSKwWEQ4bQzGU9Eo2Jq",
  "key17": "4fSCut3vXmS93XNdQgWGVpLEV93WxvdScSb612YBTSW5G5YjLSgkU5YjRXpGjTfLkhN8bXsHjDTUrKa9KHff63se",
  "key18": "49d4QTaHXMybiVGyNJuYhtuxNQj2iJw8ppqL3acxRGaVFHb6A8gT8jKLPfKPqf6YBHrJD1c6TZ8wFWDgjApL7Zf1",
  "key19": "297sBNQr9avqAPsvGyTYDN214bo3kvpupvj2N6kdqNxwoxEFLWsiTcvUELfdqiXdf6Gb36Z9JpY6pfeRUEWWCXFx",
  "key20": "2oyLA2J2VURTCcX5e5brUcXFBbPfWF8ghUcWvMBHHDhjpAbxz1qBy5Gq2uFkxfdf9fywxU19rcoULwTTsfEbwZzH",
  "key21": "2GSvPJ92yYareWGStbdsUqdpNzjRQTn5LzCZ2oK362GA4XaKswKBDLV8waMB3Y1PkAnK8cm9NYYZc7kVLbf73TaY",
  "key22": "2DCcxTkzYvKSAFQFDX1Wu7LgmbXYyeaSduNSYE2KsnzH4oqmZTRWWmBRBXc8rZzk1MA2n9Nddx2YtMT94UiJGBMJ",
  "key23": "5cXsU9p2AVwfPpo7A9txXuo7gLgt4HUAxLEkkZfiUGifG2RRN9vu2EsnGMscKBrav7KypwaxxkddaQUbrPkMvM1w",
  "key24": "5f3bXcaCt6qvj2YTMmmFB5AwJrk6mbsWmgTQSEeNtG86DsBzUA8BUZpQTbCE3A1e5Vh3CsBs5U1AqDfPEaHNWBfx",
  "key25": "2vvqyv65MV8H5cwBQnat7kmKMuAiYVxWp5nhy9gXucubt3FxBFoaFSLKztdb1AjgtQtzSNmwsgRwwzoNBGW7EW2a",
  "key26": "4NrfKpsbuMKzbG5zTst4hqZioZ8G6DV311NRZRU5SFgEDcDFHBuG2Deaz1nFaB2wcZdi9LwugkQQirjiJG3Mcz6d",
  "key27": "2cZzdKnT9LDU76VKRoxSDTGYm2cQd8ZhUq3fLyrXnS26CYZrXXhLFqQB5jcjkMfmNqEZC2mMgRTZQ2mFhZfdzDcW",
  "key28": "wWxFdwSptCsG2b8Bp7UVHsAGqrCpw2JB15No4r5Uc5XAsRykCQZ8D6HC9J1BocmJhmvnM8xArBMNsRnWxFEVVrH",
  "key29": "4t1vRaBg44Gh2ama8En6W46t8gkGKcfrz4cqV16KgPVLesSG33Ly7bPNbgFQTY4tzpHnH7CK7pAN8dVMcjJUV3i6",
  "key30": "3CnXKj6t4cCDKufWqLnr8qJHhPdT7njEdfMMsXdTzsuch3Q3bNEV9rLpq5dhHgAJA4muQ4qN6GdqrURnXuifpSZk",
  "key31": "ydmQRwNwoT7tZx9ETvvU6QC34x76ZRVu929thMKTjbYfr7gB7ySrLJD5CWcRoncGMiFPZg6qsMe5dg1EmPr9o45",
  "key32": "2J5RybkArAb5fmaHASeEPUGkYCVABjW65C7vm1nKX7tgNLKXWACv7VdrVz73nN7kgVXvzu3ptWYcSUbEMpJ39die",
  "key33": "3JYFVnnrf5AcppGEsUc4R6nYVjyfm1CBKdu8HfEgB9N8xSryE6ewU3oKxx9meTZRPLRQiWy5Ts9g8i5asCa8VqvZ",
  "key34": "2SWkSVhkTzBjPdqYdoXzqfEbG1xpsXhR51hbsTn1vvGLtax5Wk9XyrMrK1XfonpA3yALzi1KLStma2mkUHskNzk7",
  "key35": "2sa9WkAxS5gEut9vNMRWXFEh8dmWSyh7esXN2KJdHwspTqoLXR8MsNdJELC1D6hW3pdgTZpGrrDCjd37aqThxaHy",
  "key36": "21tboQcRFhFJRgiKFVtvdqepCvfpc6MK2BApCSEQDgR896Z6DdfAXmWSRTgLzMqgw5YFcV546eBRgP1ZmMfWqreQ",
  "key37": "52NAyoWK6nUwC8xjXL8SoxJvtm3WzJ2SDuuYhtYv5r4FoL2ZFuq9bvbjLPVDD4ttCGz6cuwcAEaZmPXYwK3Ax9ap",
  "key38": "3X1SxDdBF2qTQEjTYkiH1TCEKyZn4k7UDcc4SiuvE6fUDRyyTM5b52t1cLkKx2ZiABoTyrfQhKSifGBDgxo1WiZL",
  "key39": "3Us9ZsWC8qUTFRuLPuLqfzb89wBtJmPvz9niKgXaFoRwt4tbkNfVTKNbcf2q2voyRCP1fntjpKMspPsLs4dQK9ge",
  "key40": "2PRDwzMtZhQmFBPa1mqKWPKkSDj6RVDwfp9fonpkFkDJ3XrKchd1peg6V66hrv5JRnotUUEQQA9u6zPvyfTinuJY",
  "key41": "5hgS3RfmfRCcA8ie9Eg7u5Cww5sVY9bqj2H53oAspaQXoNBhYFg9hrJpCMxZu5yJ2rNGeSWwvXsRGtsKUqMBBf7y",
  "key42": "39p7Kg5JErEPCQQcVJ3j7KUJWu7PTSMznCmjfBrqUgh9C4m71KxynhanPALB8aC2Gm4t6VSGtP4E2YHKabo4VmKE",
  "key43": "4dtt9Gxq7ju6pDrD5F4Z9XKve1ihRcan9THb2PkeQYzGXW3CptDXR1warNi3YVChPmrQC18rt3q84jdPJJtEjEg2",
  "key44": "5DGkjS1xMxTevfksniVvZhQV7F4HQAzD7pG4N9KecyWDfhoVe1BM4zRV2wBdJS2B3PQYEESuAgmyiFy4QLRz1BQT",
  "key45": "5NXqySNbBgaT8zXn6hSCpV2jkPN4J78eyu5JuTKRBnM6wsBz7JcWEC98JMecGKEafPYSPvZEHS3ZouATf6mrNCLP",
  "key46": "67TB3XbtMfrnsNGvTu8Vw2TC4mMHN8h1SpzMUHbseY1BxrbbFXD86gLkfs48x5ENQmPwJmHT8R26E2fjBgzd9hK6",
  "key47": "3KNCnzZDTudxssGEf9vmoX5s1d8xnfksPYHKZMXJz2vkkD51iJRxv8GuLqegzAg54BzLGnmL44wdUsfiAmq5ueyA",
  "key48": "5CXCvcMsZCJSPUhF72rmJvHHafjWc192AaVkpRHe92w3Zzbhxi3PkR4K4w2EFG6bg2Boj4VBHZ8axjQZrYSumnAm"
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
