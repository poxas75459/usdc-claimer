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
    "mcjEU4EpaJF3M2k5kk9v3GdCB29bw5P4BiMonCtQLJGUzjGdMFmFS1ktBueY63E7oovHzgqvs5NLdFwRgL6fUHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RyT73dXygrn7wkpZaUt5xtyJGTgtWzUeB7Cg4pWs9VBsV5cEEbeozYR7j623KW7QkUA4jtCqoGuGKitkHxm8LW9",
  "key1": "4sZ3PWLeGW2GbAe49pCtCHm5Sj5gU2uTwfEARnn4AZWnfPRpFRve8CepJUigQ2VC2564JPViNtzDGYit3Nzrj8ou",
  "key2": "4XXzeM4mTueUCybZbqTx6Y3hSoFLj5XNYQ9s8N2F8hX3kNy9cs7W6ucAvwQmD9kNNE8fTdoUU9EPgiePm3Q3LPW1",
  "key3": "4Dhs146g7rbwLDhKNr3ydSpnyF8A9adUvYqhvNBr9iFiCowSdXnKZb3h3ZS8fuQctjz2v93tfT9U2NDnCHKpanwm",
  "key4": "51vPKpavJFiuJzFUNhozkcxHnLwFN2yP44hGnRXom2S6bH7TGD1s5yFD1q87HSFnn4R7d5iHtdfQEBh1UaHrkUVv",
  "key5": "2pS5udGr8CnhziwuAnVQZ3mxC4vxSnbibRfxYeKBHxWh3hoku3pUWmhw5mbfXMai4chUaWr91vN45S4w5hppPm7V",
  "key6": "2aBezMxBQeYTYQiqwpJdLXLUtu58hvEgoSkggQjJX1Bjt4Y61KEewj4mdSDpNjEsajKye7yfArDB2pMki9yuhPuF",
  "key7": "pgo25E8CXqK8r6YUFTBui23ip3fCTnmVQoBqofn6ySe9iaEQBVF7KMXmq6ZjLWXFps5ehxaeuaFehvESN6nHenN",
  "key8": "2MtBWBgRsY1y3iCtdRvXUre5zF3NnsMtVpqFePmc1uXoLHMeKiKfBy8P4wGoNXNcj2sL3QmujNDVbDBZYAdXoCvf",
  "key9": "2XBYyhaT2LbqNDuSdUrnDhEyrxsEk245qXFDDJwNTqyuGPpoGo32LnAs86mkE9UieJXaPdmCRoqG19pxvbrT3JsP",
  "key10": "4BVAcKLxnBc3HS4vZtdgvpDWSovTGZzShTo2dFfpnkfruVhgLqtcDD2SXu814ci2HL9kEtxpwfzk6QpsqxUW86zp",
  "key11": "3wgkCqAVRd3qxXRYW9JdtYTcsh2LAtHhM3TNEEZL7NJByJ81aEQyDnKsP9rBJLN5bFKHwTqsdPwEt7kahX91Sohv",
  "key12": "5aiiTwLV8NyyQ8NK61DUxRpeGaGxUfkXL6ZRY7DF3L3JhhMo6Ypix3gWf9qBSMcWH35civsUX3m48fR35pHN775w",
  "key13": "UFWemyivTTAyGnztbdUjhWYVnjcv8dz2cPzzMaBNkNe7oSu6DQzbB2SEuNJBNJXMRAyA6aA2MfSFFmu1azXAzx9",
  "key14": "63CUPT66nviRmRkAyycJaxk2gRfhh4ksLfMLEKAt8oHM34SdNMvd69u4yRNqj9TGaE1zEYuYRPLw7KRGb1nZDWrx",
  "key15": "5PsHcyvrfQycEfDnimwF29jCwbLkeGp5ELo6sYtv1BxqZsCbJymAXLzJ3a1mHVAcypGQFg1j43c84vNLkhvCeLmx",
  "key16": "2rhPLtB7xfAWTu5XkQCESA75TP4jkffdr2fqCpptDAZhRvSrZk84gd7FurVMJfXrLMgEvxE4ybpgioVKSpBBX96T",
  "key17": "3pLJBr5U26QF85TyxJvKEmiHLGwViZa1xjBZYSakVyhEsJqUqUNrALh79J5giLGUdPg3ubT1JRaEoL5zZR3H6bPK",
  "key18": "vUjDSEeZJQxY2SLGWnHnRLL8JD8mFxVQ3mVc1aPetyxpRrF5HJvJeGTn5V1z2Dq6tapH4JdcV3mJATPdpALWow6",
  "key19": "yrMMvGy916JQRcUXn1sxvuhQm1qBRiqhC3gKmuvhG7NoLhLFgQwAFEfyW3hDQLQitXV2YJDrspMxKcAFnTVuzdN",
  "key20": "3TXJa5QLaJJNV1sBeigVCXGXVTC3biBF2xThxWrXewCCQYeGFh2rVoaczEKD9jq16ZCcgeSHaGA3v9DKTYCbeEhn",
  "key21": "36nGo4MveZKBj1JYyG9xDVQ9HoFWHpf2Dk9vJfqXqoNgnYdg7QwfwTeE3csR79fgJNegdTARyHR8rPYaZ1aShCFs",
  "key22": "23UrYuYnn4NsBcPNnjXNhkukMQNFRWiJESvTqKzfpSPRYEDUS4LkPQ37HRs6qNWoBZt9J2AEYSp4fj42ode5EDSV",
  "key23": "5EjRqP7tqZyMpgp6sNRJ1HfQuZ9TBseFrV5Q3hipu2Wfy3qwQuZT9LMYvA5hA9rcf6gNmUiotRqMX1TqTDgFe54Z",
  "key24": "a66HCGwjJ2jE2HKrxnHDJyM6eSJ8XbFbD1bRtGnsZgJuDEBKHUTDWZzAuKgRmBTugcjpWVeLna99gzea62JCNY5",
  "key25": "3DT1wY5kdKfyk4QXNmrC1EJ2gvF5nsmzbYXkpZ2kRzZCxqFGnkN4ojLewoTvSgXyu1WiRrfGQuH8eNM4XTEm9sPA",
  "key26": "2CMg3PoQoXf1axs9XDYj6enF99jWsEVDmobARsmYbxTCEhLENYBXCRBMphgqMPQwnypXtk9JZEQXSoQktESrB9tW",
  "key27": "4WEjRR6FmaCLEia3zNmkmDGZrhUgGcFUetA9nHbVdNUVYsaDbjewEa3jXUCRMCTxrTAqoCJ75cYtQfkjbd5tq6CW",
  "key28": "4xn6XdxEsxziA7sZytS8D44VCjGX8QkHhbv74TF96QGw7w1oLFt7L9SPQ9sxwxwprcBf2A1EK5ZJvH6PhPBkG9p8",
  "key29": "ySorTaegEyp1GSYYjnFbjBF6LLeRt5q57NTRf7wvCJi19NS3zJkPYY8v4364nZX38oss2VqW8ue7tx1TuCip2bD",
  "key30": "25RdgC8EKk3UNBGgDaa7GFbSMHPx11Dsve7Rdv4BAGsg4Sdczm3o4UqmrbUj32euHmZcY8ADyv7XB3w9UPyiZeiD",
  "key31": "2j72oU6Y8uNisUHiMiZZS9on4cSdGha5bGJoJgzJFj3ggwzTowjdc7aYf8WHKuGtxQY9Ub9Zhc7mbWFdoHcJxucN",
  "key32": "uBYgrog1ApdL7dqMWrV3A7VLqQ3ST2y2QCC9j4x5UmjuZvSsqYVcnZQz4nJ9uFPdeTensmwrXrWZhDNFeXqq2QN",
  "key33": "5ctd7sgTq9uDQAu34SL1mczhRLe9eMMiTL5WHfertYxgAbL4tbGX4zdixJu23wvKYDJhdZUnXyvwTt7EsF4yA4ma",
  "key34": "2mW2sJgoR7HbyGHvc7FehY4rV9LsMsCDzSAK75C7pnGHbUYT9LrKrNTSuULgm6ertUJDDEaZxKDQwZiniJ6zFz7g",
  "key35": "2eYrsSUchQR9xnwWBBJKNTpZU5pPMVFFNRCveekYWjaL4u6AUoykQbJotg25KDooTyZxEoTfHKwFmPxffTn1sz6S",
  "key36": "425aR1iSKqrd8w5tcVZqqx4HHSGpmGrVoUXNz7QjjoP2t4HVPhFwqG265DFUENEQJ2pZvGeL2T9bfzHtL4GbThTD",
  "key37": "5WYytaBYytquGAQk6XhGxyxjoE2mcTrczM2Qk67SjYeP9ac6miboBGsy7uaopFMxbTGiY64Gb5ZptBFwvaKs7YYS",
  "key38": "3Lt1WkNS2UZ74NnWFUPLFr7GBtDNKgCc1D1FBUMwwNZuLPGt4C1GCafT4aSRZmXVampUjsXGWLJHP3RiTFHwAc1j",
  "key39": "2uaS8VdxfqNzLdvUFRBXKw8XwcH5Na8YMpi9jtYrN2N16LubieJxwmraB6wpeCgonfF4dDQmPtRTUVAFkZCpo5cp",
  "key40": "2pV24sHeRVNqnsbYRXiqbGxTkRLtWrNMbvXYntK6x1GPmtNgUWXjEV4daDzmnXbnpyMEcXb1WzPgJeLYqPQCgKJZ",
  "key41": "4gBkud22GYvg1BjZgAzPNC4D5bEkqgY4pwAAArEmDVbRq45X8c5ppNfMWJoZhAm8nz1KmpP77r2roiGQoqXrC1NG",
  "key42": "5JfBYLFfB1fCxKvqsnXGqg4yQkTseHzhau4GF4yTbRUvcyTtZXc2QxTbZ1HuBtmrbECqS89aGjWeu8WiXvnLdjj",
  "key43": "zxG62jrqxU7qnYgMqnKKTXpkuBFWcW935zYSNRcA4pEpEGHBVwYjfUDVqvdzT77zeKrsu2QVs8ffBaNk5PMtop3",
  "key44": "u7vnrULuyccj1A1DDicmJ3HGeUEf8FrudzNjDYo12ER2yDeFQu1ALm6YY8rWXG6rkitpA5hqHG1hiSZTGeyjddi",
  "key45": "2xBJxRNPjmiUTGSiKv2xJcdi9CszPvuvnYZ2LuJkSwaRvuEDwhNvEveTPBxGAWAoodzYj256PXnmqqhXTbECQ1Ei",
  "key46": "vHEkaE3CMKx5VZYCdDKnmMeokPW5AbasaR7XwhPftgYRTsnBb5QynX1ufTFWonKUQLh5opT8aQ74SK2URe8pyR9",
  "key47": "3DnzwAb1zCeuGQvzVPRKWk442ff3W2NndKZBTNMTTasgQbsreUaGoTujg8SYaa6optrbUXNUPNqpqMHyoB3FfXEN",
  "key48": "5A9pGVLF4qGPKNeDDHs5CK1xdA23gAdLvJofVzWMbJuzEcUhhUzabVtJsjTPgk7kxXqVj1vXmkyzia2waV6xKZSZ"
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
