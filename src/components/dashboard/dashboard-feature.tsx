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
    "5Dd6DGe9e8Cusn1fmrd7BoxGxAoRENVpj7521NZ1dVt8sWwm4QhVa2FGmdeuEjNJ3yzENfztiZBVxHtNGPb89aRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xZbpUgVK746tHLPAjrM11NDsrFqCgxpPkrPy7nPvvhxwinRfcAWbndnJHJKFvyqdK7ETxVHaKfY2BvagGi9G9cW",
  "key1": "5sGo1eMSnpmbcgtx6o4gLx3QFYNpb4Hv5yiyWPiHBoJnyxC1UhtrHtHGZPghkftLymGSMd4FFHCHCaM4PNU3vK5D",
  "key2": "3NuT6111gcmFFtczp6tZUAdymZZnfeaNJBT8LSCmEumMeYT1t4BLCKWTAiHNnw9fR5JNWGQM1oBDD3dciYV6SFQf",
  "key3": "4m9RxrspcqGXs5CBkVs2UuhwevbxbG1wTzAZ6X33g2zj91jat13iERdNNQV25YjM33vbbWaakZCFqSnwPya8WdHT",
  "key4": "5TEtRwh8XmevwXdfFXvd38f8Bi8eiTn5zZnCLRHJH8Httv3whwkZwY1XZw1sVgqeaQyTYUGNKmbgZmvS9Zxv9mid",
  "key5": "55igf6PWfT93vM4S1HER8uj4HNZYKhuJvKwDjySzCqM2eFf6CMvZXoEVpZ1PX4ij6nT9Yr8vs3pGBtXnju2CXqQm",
  "key6": "4wzbDLY9SjtaDQpPqUsR3WTubyDA4QjLmZA88oxecxChgZ5wHa6rSTbWVELhwk61ursNb6rsH82P3MQQ6oSpPUzp",
  "key7": "3Dw9oSBagqLaseRYiawN11YSp5MRYttXcr4ke8e1wFPXpZNQ9kp7Bus6Pu2GxdLuchatgW5x1D85cy48LT6spocr",
  "key8": "MVi81X4hLHvxFjc4HDAi7B8mPm3oT8DgirpTqkXQ9gvjBUsB8PUCyabAa6oE2FZFe3oFyjXJc8eufsc73siZy7v",
  "key9": "3FsZZyiQQxAnFq91pF65nbZVsu9fY2ngXR27T9v2oaNnvFcJZMeQMLdEgdu9rAgvXtcXy4FqXorA2XhaiejmgNAC",
  "key10": "2TWHxGQufhVcbaeoAhC4MnDLhyL6JhmcaAEUXpcriQd8hYMLdxSEuTUCDZ5Xk1fBi48xj6vj9ET2Ck5HrgSaoyhq",
  "key11": "JZM5obqqPHPDxaS87cjYBSWfMxPGeU6xCcHRQTwfRG33bJbXXcbJ43k7btq9WqJEkiwiNEMBhHNCKc4J8c1CbqG",
  "key12": "3tUEcX58QKZbHUNsrFxvErUgGSysznAu1RzQxAeD1ckPTC4rZ4rM6t7VbXoqGAUqLkS834voZor8Wy6tdm7fbm49",
  "key13": "3dS1Nhd7Bhif3CkzEGWHcCHQYSof8D3gPgPa2QBkufFMDKyg15PBvvQrhrQsXAjvxZtEbRbs2p8AtTtSMbtE9Aa1",
  "key14": "JoHw4tvHmETUwyHLYeLbUv5MtdDg2dKH29CqWybHrJDHbNZEbjwtPftVaUsuYq1CH57gwbp6TNVxQLJwKXaTqcd",
  "key15": "TP5sHm2AnCSvgg1Xa8VAr7dyUXhxnqGxgGro8E79G8ewQit4ZYD5aw9rhTPNjjKJapqz1UciQjweyXMsKwnYFFn",
  "key16": "5SWFkUbdxUmDa555uif1m8wYWErRvGCjs8nw9E6VN7f7PDC3U4DMD3RW6BiiuvJi5yDTQnnWGx82CyUNjy7oZRJn",
  "key17": "XBHyudVbGeZZVtbuKf3FEH528Dk7a4yoLGHeZqUC4MpZAd4FnWEDvMM2dPeRXoPsZJBJWJY8fEPDP55BZgN2LYm",
  "key18": "4VduekWzKoFXPk6KNf49SvLin5PZWAZ8x4kj1FNRxrYQU4iAt8xKhRjhhTzK3NMn8FRVkVmfJy9ZJwbmHyJuJSq7",
  "key19": "3Sbj9yiign5eASkR554YTMCTVvQmkr7NKsgCxdJXss7HfUHqNmporPVyeQLtgTHZ4zihcFL8LrKDmEBVdauC94Je",
  "key20": "5Z1SMKrAGXSG6NQaStnHzUeJ531JCuueyEKkoASm7ZDYWxPJebTUBcr5BJ6btctyk84Yvuozder6XmkfTEHaxcBv",
  "key21": "51Jwyt5nhhNEFEJcjLpTaqkX8UkcjgDK2EPzQciHeDycnZLsRSWTbeaPzYXRy3UErf57b5mUW9XvvNxRwdtqG5xS",
  "key22": "2Ea4CmDAMtzS619TArtSf7cwuUwBtQwB3TMrQctS7EuamXKqDpDGRaSpWUycWHbv4stq97rQJXG79GG8eW8Ydhg1",
  "key23": "4nNEa8U2NRY2hb79K5Sxz6Esm37xCEW3UhKMRSLwBzTpQwLZXhCFK2yvW7z3pzH1mVmhdAm2xsX55P5HqiRuVHRY",
  "key24": "47nuF1takGdxBKRe2XJ1ocRD5trV2heAdY5o2rTmjjx58paqnLMvWiLwJ9gQfvvnGk6JFYUYwpaMtiV42dZov9zB",
  "key25": "281HXkp7xz7MXNC3fPENqMPY3vZrjSC2SsaAMtDWQvvYr4qFHEbKpXWjnMhuZ5rRE2do7d497UYuX8tCzMnP7GHz",
  "key26": "FMUDrQziVzRXWoQ4FTfH9hLe8DRT3LP1ftnF3KSdbnn1hiq5KbLThVe3D538HfhrMrxApt2g83ZZ5esA76byjjC",
  "key27": "3vorpEaKmK1KALXgfrGSFLVPBaPNyjdwtmT5SjiUrTn46PHqkdvgQEt8hJsnUJHkanW4cK8B3gNU3gvUUboHCz7P",
  "key28": "3Hc18UVaqEDL9qj9Q9q14NxdmVTn2HJK6JLDMmcGsLQhTeK7U1ELCa1uSHEfm7GH6ieZwjUQd7jiF6ECHeKvXjzF",
  "key29": "4HASBE6exeNuLn3hMNWGkRGGY9fxxSThQjyPAUxnSHrwnFTbbUsMc3S51mTvL2ziKGEZoL579sSrVPkZnAGiQ1JA",
  "key30": "3mY2EzfjcbWp6LoWAvA8WszjJeBQFsu2qMiYRuAwdZRGbRRnUvcrXXpmBFkMkFp4RFXh3DbvCsUzea9auMAfthSy",
  "key31": "4Ny8FFBFqsR4R3Gr15BS7jzimhaMLyoFnDRgMnr1aFPzN2yAVZQJfaUxfwe94eLhVErA61BWb4KDXw3YFGVomjHu",
  "key32": "3Q5VqR5ZixUL29zhpVhypyx2T9H8TsVbvLwk1XgEDfScU7bXBvwCQei2439Lgw8Tk37ZxZZBWBV3WT44Kw9jEyLz",
  "key33": "3AaGsrioYnojhbg5J7G5KdE1rXk6mzh2jVw5dLqTaybyBypmy7CnEwa5d8pfoB5kdmzjkMhUt3RRz7g2drJPREh6",
  "key34": "3jDGHJahwjwQUayQPJhWHwUjxK47YoBE1CgGb3KAb8g5WLUfFfVJZ1cTcBVoi8hXdSWmsHHG3XvXmVqjNSPxNN1t",
  "key35": "4tC785TUvL7AzBDpTeLwQT9eZftKymESAGNG7Nb4WdXqhFRw6N46r51NerkaRLMwd8Z9gStAr1M2gWWnVcxD3npU",
  "key36": "gjQa8bVFgSou7U6HdULb3Aa6Dg9NQFKNdSFS9Z7BsUEmXiqE4htxHcdJdmtJqPJtdvUmZMFcu6GeuX61xxhkGn2",
  "key37": "3XHoRQgQyqaB6nZ5cynkBEWEEnFx9zMqCnUmQZjg8FvkccDjXVJpwZzbBHgdezozQCCxwThGz8wJRcWtD46BeM1i",
  "key38": "2jFM1q99ZEq9edrrDZoT6Rcp7AV9YpvKoZsF75VGETNNdhkVpxYA7nGv9zjk5ECNVxK5Qi2ReSq4ckeJG7gA1o3H",
  "key39": "YWf8kFixbRXEAYBugyAmFwo6RUaWLMWATCAPowkLAQvKhjz9ifhfAKthatJwGmKQMKrbMAxwFrFXspnwPmbVoMp",
  "key40": "3xbghgAkW6dpjDNnar8jb22MuSfQ5amMLU3TEcBVVgKQU9q6vUft3UCymsjFtLzTSZTRUdmNsp3oUqDJm7nsqjpX",
  "key41": "5ai4BsEwn5WScJscL2Vhns8usEmigSwti5uWD2deRW4rEn26stz8k9XhDyCKeoxNt9ayJNoP3GZ1Fybjix4hHVTZ",
  "key42": "4WFE4dPKe72yF2hVHQoNhsXbPtoQBnZbZZ5B6pUY1oqJ4qF5HXsmPpBTYHMzTTpyJFAZuZmAdzFEYsQCjxU5k5Xn",
  "key43": "2TbiRobNWEkcZbqdfBi3EZj56AoUpKybauavwUdEwb12TZQ9KubeZeJiQajvVXEYbXdbNtVcbgDUm6G5FEav4Q92",
  "key44": "3tQgDEnYma4KkgPAgBvRiYfsd3sziFxxFiD1dvkAEzWKo9gfNpUJrTZbdeo3bPqDE9cFtsmBppu1JTqRPnwQuSES",
  "key45": "5ZDHWJKU8KEZ5Un7yd1F5GzaBFKGXbS1Codq3zuNN7QN35RaB7TsVidvkC5ZCFuJUqoqGTV83mDwgYXHScfD2zT2",
  "key46": "4ze5xW1YPpWujMkhbqrt5F1nUcUvznMN7yrPJxKUpHofq286H5HtHsEhxZ86buiu7qLyT1EkghuyMyvs4TYNBxLX",
  "key47": "3zpbyuHwwif7f1unUKEg4DXVT2BpaphA58YiFqdVjFvkvvWsCdyKXte1q2CeJifHgKp7MZCcyqsT9KpsRjyCKspw"
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
