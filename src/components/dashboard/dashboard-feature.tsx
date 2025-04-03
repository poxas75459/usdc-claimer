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
    "4s5YdcqnHrAJLvrNRvRoXbXfdMk4xiWZ948ha5WJTpt5QMmT4GgRRGyYkM4AHkG8EKsvVs1T3Rq9xcoL9JwNjvLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xG7kzwPmEPudHFejp8UbKHdj9Uggitacyz9Th22yFy9MhW4qkn4aHg3Lv1gmJRvLFt1CBDNrykkMHcbqHP3cY8t",
  "key1": "4b9keqcWBvGwB7owWtuf3Tqhw2a8RKeyPrYYBhWzsP9rSibjBLiTfD8ogK6sazojAw5Us89ymEw15HX2UMroQceV",
  "key2": "5ZBz8vLghLqL9S7Skkki6PnDe7PZfPVBpQwQHTiiV7CnHnVeQwFcF7UzffEhEK5PpdVkVHJKtHGJF5TfhCKJpWLc",
  "key3": "2HsD1NEeSWBmiwZD7tMjvn743e5937E2n52kHqnuwvAer3ZGRD1CVysj3HF2Dg6QTZs4U9H7fmFuH53w6TDBk6vn",
  "key4": "3EDob9rUQdofi8b3Vm6hSWJaKZGyYFVhi1nwNY8nPbeJ8TS1nXRENQQ3VTp37DN6Gjc9DHKYNHqM5bEgfLE7Z11R",
  "key5": "3BmqqY1DZNYuLaeTeW2dknBhB5nRT2AY9XfvWBXBD8w9xj515PLNdvMUGyGTfDcG5MgWGJdihh3Ln2wLH5cqq2NM",
  "key6": "31KHV98XmRSwwzPwpW3bECTk6cMuVMyCgmpwCGMBuXu47QiMRSDcYb7kgEhv7rC9ANv2oDikdpD5G73YPG2JuA2r",
  "key7": "3wHhCPi9nPxw5zTDPGP6SzV1kE2E4pjtxQ553AL4PrQmkSJbmZMzJqrjocn7x2bg8Br974SMham3ehXso38urQMx",
  "key8": "3pB3fDYuHktjizCJusHc4oXrJf2evqWWbCfU7LkzEQhHqWp2BvsjYxQKd2KeKVqNrMTABh5FD2Je9KU6hr86V6vW",
  "key9": "4mPJCkYQEtznk3Hod6somEKpZJvJxRjMCj2rn5x8Tve3G1quGGN1R2FhJeZjtXfghUoCCS5k2SP1Bm779fc4qELR",
  "key10": "4p5e8denWd9tb7dbAk2guRj1bRyzLMNDwCkx58k1v7VN1Qx3aVCkqpWjdsHUunqq231JT7NgSMZRF7JEJDRgmvdU",
  "key11": "5xUCLzFT4w7nqCcae6578inigHxpUACeU34cJ7y7vTcYfhgyXXN49L5YTDancXNfVRuFJ1jQKQqKzVJZGA3TNbAr",
  "key12": "3K3P7iUW8jMjxHMMCucRPHhzHSfntn7X2HndkhTKiU1Tc5bv3z5TU3vs3rbD1752PaziYQDFCDFVdEtn3rw7VaN6",
  "key13": "2CqPrJMMi1o4iButcrJisC6VYdgmijGXtqWVFu5BtggAzZA6or7nsqgJpKmLSTD8P5wAxwCiXJtyuTuTK1YWfRFM",
  "key14": "5q7WY2HNAQz1MzWSsQPShg66sXrzLCQiswKY8dD5DN4tPBtr6Na1UARajra4h7TTgFM6EEFscxhiLYbDarFeWXP9",
  "key15": "4LhE4uonWDncZPVHYKexP2mvsmBkLU9C4BvxGkoxkQKwq8Po6EF8KT4x6CNccYwHmTJxH4HKfXA84FoDzbeZsUJZ",
  "key16": "4eRA1zgxQVBzqjjVTWhR71U334Wv5hHiwbk2qMmuUXj4Rqc233sSJ2757tmjnEnsja4HSKh9bGUxA5BGjwAuTLe1",
  "key17": "4KFipPCqmWccaZ74SJ45xZaaKxsrzPpHjiShwUaa1hemP3D355tvSwy6D8MxdBmTMQGRznHyAxC3gorZDFRmwCgQ",
  "key18": "3dHhrfaRJCHtYPfz1xfmaJwquLvAfvp7R1MSUJpFFZcqTLMEb6H1PxpF45x2XtSd536odhAEdfyqoDe6fGTviSyM",
  "key19": "2zLUtgWyUagZT9zcKzrvVNmuGCrKMPALvegqae3TFvimuwh1WFSbDxhn8HbKeNJCg38CAu82z2w3E2ZJeqMs8q5j",
  "key20": "3xXQYoHoJKSNwxVL5KTko6o3JbhF5QGJvj7roCakPRmQH1ETN2a2SmzdVHoYqmWWyaHoUtwuE1KcMnr6mUcFkCN6",
  "key21": "4ZwzGgJKb4oS3zxUiSxgVwg2BRLDQafczfAuGTW2EYWB8wEwJPU9tZdYJopawnS5vPS3DQx1C8F3h5LdE9H1wnsv",
  "key22": "3N2285rwDGyN3Yc8WkF7nrMowymS4baPcf3aFWyAwTsj1jp2zBronMJah3MyATyVsakmE2mxitZQntokTTS4WbN4",
  "key23": "5uuLSDUkz3q8ZNF7iDichSoj9pp2HCL3aefF19vB25VvNC7g3H46gdVEC83rByo4Vv9rq4GvLW2EhYGzifBDepSu",
  "key24": "5DeNHMY6sPp6kh71mxucgUZUMAj9gYiuvDXw5evCBFDzAP4AzhkgWLD6JqL48xGRLQJ3zXhkN1fLeLnvGbq4VJPv",
  "key25": "4Hih5bW4o7tkmjtGWxhkPeNGRLBZzkmcEitDAxUpRSUaWZuKT31UDAosAx8u9ca5rgqAaRQVEyZ2cjYm9jRbmjGy",
  "key26": "5qiXoYbj2ymbV3waWQdUddM2E9Lf4v6NesFhUdn4seLjTbsDak3VtnvwPwedh6dHbd3qZhRdKvotW2ZzPjLEHDFn",
  "key27": "2zcaywnJqrdfCHy3FncMPVwiQ1zn8VqKcFBvyazyknqQapSZVu8hBimuphkgYpxZ3kRDFmpTdKYCXELkXAuAQWzk",
  "key28": "4nCQZuLnRNmPSYM36UcY4feAcjqKDFsaLWdKJtLut2Ma2aTmbiffEBEgduQ3CJtQYAhJHJNeTdzJCpmrbGcDM8MX",
  "key29": "4uYs3FEKdmGtww6wrhqPC3Yj1vZutKeAxhkWfULh2JysUZbDnRtACgbqsRUyQmB6cHkZYrpPspnsmSiWAU2g16Yj",
  "key30": "32B2aKWfbPMkUriFzdxTK6KgW4bXvxx1oe9VL5T3zKYV2Ed8qKqhfJifUrprbFhpW7dYeouYTDdDfzRuQK2fQDN",
  "key31": "5uFwAYFPjfamb21KAXc514FisLSks4jtJS78k1SYn9LBCmZ9P5t5hdDop9fH8vfSn2bEp3frQLdDwt6t4ZvSnyQM",
  "key32": "65RY13XyCR7Katxtdj7Te5HDxK6airwy5Yb9CuTKwGr2kGAskSQDrmNZibPVmLkSBh1F4AdCeEBRTXmjCRYoNdEL",
  "key33": "ruojAerUEUvzpE8w2XZ8uhL1i2QSxzbadmtX9ubby6UTN7ERUsfp9P1UwjwfmDtuuktXv3TMy7nLvbBr2UFsT4D",
  "key34": "3S6LzyCyTkPBDPwkNnQMJAgCGurFGNqPq1MCRzi9AJrZvjkauaD1WapX8uyMyk16m5N3FskW7SfX9AqeYZ5F23bd",
  "key35": "43A9YfUwzdSY9v6RhhzpTp4Vvuin41yS881hkUYhKZWRbJADLTTi14xFiEoeNNftHrXouBr5WELya2ARdHWPVJBP",
  "key36": "519D4LrrtgZxFqg2FS9UW9FSvyPX3Hof1WvBpoT7DRa6Fp1YcWvgjPeqBiy1dMEQoZF1o9kncaJ8CCPvos674fqv",
  "key37": "3VH2Xf7JKU4k7MqSV7jLV27VRpTaUjdKn36K4NDQtUErpK1AUKN2drb46iYRNRn2cVKfHnSSuXN69rhAXpBC7e5h",
  "key38": "3cyVEN4B6SnLbKpRFr96eBU3A58dnUcx7FzujCrsmZy5KmgxQzC3Z8rpECJP9ST2iHzZVEiXiCLLYzi6RF6xP6FD",
  "key39": "4oJbRori1oRZbCMLPRdH1FGNesc16A4kmtzm3CxErGJHwVVdki3qNQhQsMoNt1ohxiMEseAUK7gruMdpHigXZUqw",
  "key40": "feWFqZWP2eTtiS38DP1F5CY3qH7E4yNW8YpENc3WwE5NYPW8fcLrAVQEZSmzP2FzAqTFrHA8oH1huRwyyY25iGV",
  "key41": "28UThAib3bfoYyL4gDQNLi17Cuxj2VdMBh2TB5k1oLitDBbk3A2EdBh8kjHjbxvGbLbwzcin8SXR172D2h7GHagx",
  "key42": "dvoCnMYeneSmYUnAzKsCGLsXtMHVChqRxkLxFzgu9beftm1zD45PFXcLo66omNNbRxvbfkzjPrpxFZSgFsfARWr",
  "key43": "2wPdM1nQepTJPFfrP928ktjqLK4cc9fuQxjuPiCCeNeLDvVdoVDAoveZdFmBUEZxpHeW6jWXUJb4e9qYgkByGWXN",
  "key44": "4FUkmyjhe3r5Q6h11PJciMYrMFiThUyUTBXbtZS59Y9pNFdj82FzaRKWdtsrwKnYSsGUh8iMA75k8Ejc5Wvim5CH",
  "key45": "4sJLpNzByDcMTqE5Xv2zZwFxaNWyWUq1mL6Rkx91cny4bL65UkyXQSWuYqCZm8orVb9n59NDUZyHpXAJJRJGa2VT",
  "key46": "47N3TKPvGNKZjHJzdaSpaL7rsaxWfHGyTZSARHxQBrcsVMZtzZJjAzgjTmnL1YDpgwn33a6PF3hfAbnt3pfnr1Qu"
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
