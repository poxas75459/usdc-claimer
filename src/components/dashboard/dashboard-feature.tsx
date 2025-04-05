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
    "3XaAJCapEfwwMJqC4qsLZCxNizemVqpHYs5wmmppbN6RehNHE5A1ezohcAePeKabiUiuQrTgVV1NCtki911ScwHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DxhvwxyDH73rD1a71SuR4FFssumuRWd4vzfHGkxLjFEaQY5Sz9NPhrUBCR4irRLXC6fTnb5fGHeD15C9u8aiW4n",
  "key1": "3eBkBre981tQWEbzo3cx8PNv2btfY7NY9S7KyjYHgXb4TM2bY8WehtuM5K4Pd2Si7u9XtP6jb9F8om7pVJLMptYv",
  "key2": "DUPd97YuA5ehoUF49BEnwW3vefnxTW7EaPcNUxbgnefwb9YFTjGvTym8WNNnL5Jx1PET74UXXCkg9uUQLWExqjx",
  "key3": "62S5DroWhkSgr6LPRGsruovNPG6gX9iYjDihAXUHyVvziTyPuDvPHg7JRuba5Ako7fXJMTzQ7x5WzauRsfzAwvUP",
  "key4": "4Aqz3ggz2kYbzVGnmaBn2pJYe7Vd9Y4xvPUK8dX21hQFfU3LFz3BTmNGSoJDFEMLTEA2c11tDqUiRnsZz4uxE9wC",
  "key5": "4iuza7YWnaDSRWkNKKbvxi583NgHPPRzPfoYCJPijdwjpCg2A7osSSM1WDDg2GoCfkpK6G5owv8VcTzGRtZjEgDR",
  "key6": "5XeMpKhhaSkimQpyGg6PBHSq4ihSB7vCsoVrKypBeTBXD2yd3XCzUPmotkxL9uxGiN6DyM5e9ZzNotBmssarLwFo",
  "key7": "44xSD7aGbsfcF7rZ3vEFPtVbafPJNXztzfrxbUHAmsFGntTejwHHPCEJugeY7P8jp1rt3a9Ubvbg8FMwMJqvycL7",
  "key8": "4ANZfWXUcxLr5c9JzP6NX2THqDH4rENHfmx1DdBPCd7xqtu1ea5yq8vsF4PFA6qmtoqN3osRaWpkGU2Veq9uE3fZ",
  "key9": "2ZjBeqXoFo3u8cDJ8adt3tg5QFZe2fWfbwwm2Kvw2evUETum2KVVmaYdN9DnsCtZQgHeQqbAnvL8hqzfu5jznPoR",
  "key10": "b9aSQuT6Uuo8jc7VvZ5KLviLx8kn32RztS2XUAPp7RjjF9MdwQst4vPiYN7WXGNJ2Z2Ay2xygUZnUGfgWarfBuB",
  "key11": "5sAoqhpzGGoN5tASKdFyMfKWAWpRoqdNXAYq9pNU65fDh7nfifzGAK7doZLdCT6X6kTKHQ4m7QuKrQUk7vzDP1Z2",
  "key12": "63VBy8QCV6U3kZphBmksvK9bqDLkJw8bjbvzjjTQ4TzFum3MEBgo7AtUnktyYkaohD8GChKWuBWWkcJjfAt1CLsX",
  "key13": "561gbWZ64ag2LWircAU2oVosTEM3hrGiw4B55vxmA7o63Pz5VJwrtvceYeWS6o3ZJpmGaYU4oVYv5tFhTHhgQV9y",
  "key14": "5X1B9hTS2rmtgiUfw7ucTNYy7UtSPmtNkaWsi4MQXWkXe1L6FHtMn9JP68TDmCDBGGAxEMmKhc361WjRYxJ6Ceuy",
  "key15": "2CpPQZsVkrGpApKsNNhmyo2ds1b4i8dkmg5peLWCfkFRK54NsDLQdE8fk94pW6DrUhmYZRAdvCXNGoheG8hwsQ8T",
  "key16": "8q2QCpXF3Jh1wcwrZ7sBE9HDAr4scZVLan7grz652qypk4KSDxR52HTmcJ7w9q1VcU12zMoBCJYL9MsU6NnoL81",
  "key17": "3a2nrVAwaAX5sEgUjA8W2mKNtaRiLkqREXkdVRAjnVw8PzTcmESbuEtrncabynhJqVqrgbeHeCXRSGBozb8P9DDs",
  "key18": "4DcCBMwcHAejy2g2N1HV1GJEp7J8RdiDeQJMENteKBapoxX8bcrzVe72incdNcRasqc2U9jegjcXXYhq43bFyZeS",
  "key19": "5PLSENHY9JXTJtWnC6nzipsgXkUz6gyzh8wV3Tz6VNssC1RAwLApoYQCc7bzFWNLKUX5EGREca4UynvEKy1R6Lti",
  "key20": "5FrndYWPK3BbpWoBhGwPwyMr8sj7eFN3sCYfpnDAFBJ55JrBNfEyPKugiiFJzof9H4mgAFkUnPU3ppSuabqFLQU3",
  "key21": "xysJM5DAEZvCvZNdT7AEzbcKs4Ro6a78R5cudAPur1L76Eo2cSmyBw8SXzFtrfoVRqmDk1LpttBfyCRALuWV7aa",
  "key22": "B53BMie5nqZ72gqkmaWWvSqHi3NGrdavqBC2UnQEU3z1Rif1LtrBoa5uUhmRSyBCvTGZmv6MEgMAu3wkc9CkMEi",
  "key23": "5L2gNYqsC8HQhMCRbnc5Z8mG4P35sxurGaLRfEGnDkBz4zSQsTpqStqJNQozKuxy8JJeYQeNFhqSXrMSPyjbsg7o",
  "key24": "5HhuHEUCGXxJATm8y1Xds5KAP91AYZ7iM1kUxJuL4irjRgQDRiQAZD2fdwN6Pt8oT68q9cVvGrJaQhvr7yjbLzAw",
  "key25": "55bLKNWQnYtbm4iyiaT1tKvMD3uSeSqt3Tz9LwTBkLfnNdFH5chkgSVBuaAyhiZCaeRcFWX6nkqnAPkvqhyvXmCW",
  "key26": "WHWZJgRGXMAyNGYzNBoYSYRGuzyHbb6F3iQFvcvMJhaQUut955WyDXPiLs6PB7o8c8L47GtnLcYuyroTiK3cXGX",
  "key27": "vUNbfwQavKxCsu1eVdk9swdSsZJ3ss6z4LhSSc65tr62is1TbG1fQzJJSrdjcW6kUTVcnMew39ejBgFM4jGaHR9",
  "key28": "UgcQ1hb12rHBC8obSoobku2LFDaN3rubjGeJ2tqbuPzx9wVvf4fdgg658aYKi1qLsQdNxrbK8PLMNoNS1FUXTFh",
  "key29": "4gCAcnrh4jifXNYHXBmgE4dhrTmcn4L39HZipunrEZZRsRAMkDvwFKAhQyimbPyFjymMTzKLXZHGXw9f7n2CHZWx",
  "key30": "5rzbTngVKWkJx5HAEPrE2ShzfXenzxdz9WXiLex5UP32f6ikXL8oC4qxeXehDqGmZsH7w1TDSdb1BjNqb8AzSpJf",
  "key31": "3BFbdUk9S6XF7MVVdHQKecFPtf14uyesYcKj9Csfm9Mbn47zhJVGxb2umjvTEUY8C9uGb3WnDfQjWEswABnmWc4f",
  "key32": "5DwvQvTV6eVRYsp9xd2ZpUiZeLUfPCXTTyXwp4N2SumZJRbvor5c9a9ekM2QZBsZYBTPGF9ZToJi7goAqKAbej9T",
  "key33": "45f6dCrTeHRHFyav3TURo9MovGtTASXTmAAduAjmfSHfYBfCSx1Q7AHTb7VUGtLwFweuD5qLfFbmf4dUAGmNxL6h",
  "key34": "chpnFGU6dLjxQGkQFfMZqeLYo6agitwxp4pdBXBgKNixZDtX7c62x9RxdsiUTqkixUz5i7R4Xv1zzJq6tPu4c2Z",
  "key35": "4UXijHasUsfpgBEHHpnzBpAjdJHqivgi9E5nhX3cMH3xC8sEyqcvoGGQoTVh5S9cNwTR4oqoz3ebgdYbSQT66emK",
  "key36": "qPigkFEc1P1bjSucXwN3o9oLd9qrkYLviqJcfZk7QnmxeAiEvNjp7p1aD1pzVJxZpPhPBLQR7mZo7fNRRFoeypQ",
  "key37": "5z9yuikH1VRuBHmWnwX8b5Nb1646StUiBB9pwCjaQQC9wYgS4fvJosjZVzAMBUKSTNzsHAZhtR7uvYgVbeBQc5Xt",
  "key38": "C21VvipWdGwFHaSe4t9ok9ajf3LQW7PEgzfosg5bSfwPXJwJ2a8fLkKj7XUqEV1Rh9wytgp8ZuKozUmniHSPrLv",
  "key39": "3i2JjpxbCKcQYC7MtpuwugP65ZxMFMa38FRwhGY7mjb6FbyDcc4ZhXrzLub9egnT7uFLFby2BAnc374KkQWkCWv2",
  "key40": "43nro2eYhcnZ5HtSfvwPMkbUAjvAQG7z2zLMaDkLuGT5ZtcR73E2jSVwoX2E5EiSFLLuywMAkVxRqS8y5H3Jqtsb",
  "key41": "3SGAwx2d2ek2HBjreRKoQujqxLVHjy3jbv4Mu4tkH6eKKxvrfJdY78Hz5MU9qD3XpvDgn7YFYwwZswijC6UmeA2Q",
  "key42": "ToVAMhq2NWgmF8UwM5YSu6r5bG1wxgDwBm6qmf84gbBQQRxv2jhSJ893pk2sN5nsndGYBxHQPdrRfCrA1h9WK7q",
  "key43": "5WqTBf2fVxxjJVpiTkS3RiXSeFKp8xzHqv1DFUKBuspYy88PG6AC3UKbm2C81JknN9VojRugBW8dUAmoe42fYyxQ"
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
