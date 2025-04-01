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
    "4yhMCSnE3TNQLSussMSJKMsVYvVRj4v7FUFoykv7rYxC3veD37RULZyAMDGKaHG1xhQPWLCsWdbyFfNnTBsMT7Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3beKi4RkzoF9btUJwKcEwr7ew6wNm8Q9gG47ZA6XvAyKPZamSqxUWRzzspj5wBdnoLabfEKjc3QHWmRNRqr4jzvE",
  "key1": "24o1pua5r2D9shkMA6r1RUcqCNhqZGk5S67kn5VZsp8yuCUAx75hxQoomFbamHVydAdSrt1pTq33WGEmghR3JagF",
  "key2": "9tSbWVsR1fRKLkd2m5du63CxthyTHEm4MUYqmsWrBvQs4EnrGGTJosjpUSV5LjohQJKMysjie2658nhf2GHAf8j",
  "key3": "GygihGBEuyZftUvJM36psYwuq43QN5QxLSNHb1Rexm2xvHpFbGW1koRRYLwFzPnC66ViDSLrhP4uSs5rMtiRh6Q",
  "key4": "CigBcdZEj3ZbrkGiyw5o8LHEGeh4Y9JFduAAtPvKzFpWxqVHdgCaPRopW6FxMgzedrXtMEJDxQJySkZ438djwwb",
  "key5": "3uYxK1DaFr5SrW93vB4xrKuV4MFFH3m4HBoqf8QDkV6oVPB1mAZMy6H1q2iFPmB3pdcETXPVtjApNEDjPVphG6bo",
  "key6": "5BSXWQA5xnSUR7hBj9JJkBnEABk7BtHRdM3qNQ2JmmcsyacCKo6jCToRd1irsPtc1vFUJKHUccwJHUGbEfk2LM3U",
  "key7": "3ZidDbeRd9RAx1n9zPxrRQJJsU1fAv7SujwTKiufy6RHhic22wn2TEyJ3YCxf8qcWDyar8f3oc8ovSJi5NjrWoco",
  "key8": "4F7CUDPrUqtJjWiQc8MReSCWLJAmw2dGus9uN3ASz7sgFhfcDRvhXXwka9v2Mha7jnwSNJUkDGmz4AnV9jdvftfa",
  "key9": "4Tx5iH9C2vccJt5ByiZZTRcDL53VqwTwShxTdh6mkXzDErzBv5QecT17aqCNZwW5JUCDoDkwPhonszPyHh6ZXKdu",
  "key10": "4VG5JejfGyNe1HrHii2MqTsxYJuJRWqYgoG4Rd3uZWwQcRNTNEX5gze8QVKtYeqwYb2GaJ9QhbAuYBXHmpQxdGkz",
  "key11": "2TunLZUCK5Eh5sTGbv6WiUQb4Ggp1kw3Dbw6M8HUUVVBRRMUnYZQCpwaxgFZh35z5ydLH12ZJUvcpTVkD1Ro9ivo",
  "key12": "3yWQRHSUv2B1LG8bBpqwiuK9BJLRLNDcH8Rmc33Mh84wuvFquxqay8DaJN8nbQQRbsLHVpbQJeaqxijsSRr67na7",
  "key13": "5QKobaVw3t3zLAK5JfcWuiKppCMnWsK1R782UQridr1XT5JFcxZrvyviHch1AUKnDa94jmN1FhdG5H5s9FeU3pcN",
  "key14": "2n6ZBT9dw5h9Xv5QK7h9Y4aJNGSBazgXB8AYz593hDx86T9j9B8eNnB6MCse9VfHwpsKAETBzuv7eHnCqVwN6v26",
  "key15": "3TD9XG9EjHe8QqtbFEHqq7f9cU76yKKfyNfw179NcB5Af1psohw4r3BSNdbnWH4FGE85NjXZysjzLYMpyXtqvuHz",
  "key16": "2Jbw2urYySNaS79XZ8HtKFZEztnbcBeP8BdfJuBLxwRv1EKxUK4rdhDWPFzPtWPuXft67uGnXmoMwWDmdHwuw4Jk",
  "key17": "5D3pm4cFc7LSgVkfFkGWzKz2ptXx4mqZzjorZ6xdohZuaaGgsLDPrJJjMaWmPMWTPMVrHLWeKjGQbSmudvDosgXA",
  "key18": "KZmftZmYiea2fp2odSdPHeVD96Fv8bpdFwu14t724atUZFQSjyfsn4wJ6faYFV4paPFKBMxJkPHiyK7HNbrwxP7",
  "key19": "5hRSUsMV4X5DXAp2bxSwPJXyvSKEq8273nc73bRiQWrWrhHRE8WEUmct7oYVUSgwqKcpbGg6UbDNQ5Lf8YpasZK1",
  "key20": "2HyTQDESmaUWLA3qtrT39CF5uz7jGMzDBuXrmoSyPfJfQve18KA27ZTmAQybk43yr7TJQifukHYi6t6tf2VDBF5v",
  "key21": "8y1TrFQEKdv14s6bv8rqoPpqVv7LZVKUxrag3N6kBo9iUuZMPGjyMdviDL29mKCnwaQMuBfrMjtCMcRkr6B7F2z",
  "key22": "4SKZfwKezKvN8a4LqtfhRg7kB2yNtCQJfWVDKjo2Ura8VY7XE7SVXtFotsLr9Aco9eApEXaRXy6dCvZJU42UGutA",
  "key23": "5HFv7Q1y2BY7fkDCkHMSPcGH8bNVve2fNAD4JNDkJxy4BCZnuDXyCP83JZbfzzBto8rWravC3CZ6naFP8LPJQX9N",
  "key24": "4EGsqEocYxyFWXN4phfGerQGoNM2BaYGhoDowBRYeaU3fqZvpmwvdJhPmj8whYUA4oNqk14PgPsPWwEPCXR7n4Ce",
  "key25": "5vSvSxgjUH4jdTBhq442CfT5GYYRMiZq7UKNW7BL8a3XjxWTgdEY795vadpqG9eoxariXMCmRaSyboJP6UvSHXzu",
  "key26": "3NfH1zCqjxbP2dnUL5yhULhWnte2nsNuAZmPmZiLFtQ8eZ9iKyKAkz8bVpkdxtR9Mw6LhnZBsrtYszyZ8gDLpfGu",
  "key27": "5WBVv4kyN9Uq1uFFFhC9JpybtMwp1SpTcWeg64KmRro4A1CMfVMBKGQyBayqfYJhW8kHUE9rZjk7ah7jFoBjx2uf",
  "key28": "5Q8ehRKVqNnAtJ5do8MMgQQkBfcNZMqcEtqkFhFH9eX41d7H2kdiLXmxgr92A4QyPsi6XXZC1mz4NCEnwqHc9iYC",
  "key29": "RMVjoDCDQB9zRztxD43NPboAcqGSVqCozPkWSLRpmFVrugezcxAXhgjhjwbwtzCzcbQ1wQr4Cm1DkVZCbZb9kW9",
  "key30": "5ur5CsPWVMnrLoY4K5pjee7gFFJHGc1mD1MRVJ2nANjegf5Yqx7Hst4t6Xh1VZZPrzSn3bNnCeSefRsk2xd8cLxo",
  "key31": "5UtbcVM4KmK83eUpa3BL7jcAt4XZLYmD1x6A9dYdvkQNFBQzDYivCDZCCcoi32ztkSx5SPj7Kag7vF3GSMc2MCJM",
  "key32": "2aQ3AKK9dtxBhVw89hNkLBJw9WF7p53b6W1jLXfy3ZLF86MNRqWeJVSZKjtn49Vop5BvhHg73rJE93MSUDka8rp1",
  "key33": "gjtE9AaunHHvDNZ6r3UKXCBV3Kxu6V7UQ98SWyZzdtrQhrjudVVCqP8fM6ZFdxWMk6gyjTo63PWcDwsyRfkzX9H",
  "key34": "2f33iuWA79muEL9EVpJcSbeGwfH6rmZpZppMrL251qmshmUNnEFb1Yk5GfpM2pxZRyqX5hg9ZQ5JjbbxGua5ayUd",
  "key35": "5ntVxEWopisWphhgMaifNWCbfwdKSdqgwBUGU9mf87Ph9Y94x8gyTSzmik2xw9Uv3At2aSHX93UAdWfkvBeFMWq3",
  "key36": "m68Z6xaqKKbAjxhmYume3pP43hKdD4aD5ogobgixV38JsXs45yaBPj7sjLqvS45D9Yy5eh7QVudZs9iRyZ3BnPR"
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
