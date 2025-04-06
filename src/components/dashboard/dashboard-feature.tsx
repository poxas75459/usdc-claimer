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
    "55tZpbkihmbWo4EU5KYBEfSCLJ3PWvFjuLVgyTWEdxy3aXXZEEMBFTs6qWXXSwKUk1aeCouxz1sGstZZVoMX1XGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WbbLp1upHPihqmTTwogoyazhJdJMF3Xk8PVReZFiDEkkSoqT5SQzzcd7ovTgQNduJ6R7TAva8fXUECqf28umuYC",
  "key1": "yhGNeU63WfiTJ8XKjDnhPeZPfn5vWuW5A7zxKsmCViff5bzJhfK8FHWRCkUwenQutpXM8RMfivjFbwj7Qu47ghZ",
  "key2": "31jFRRNEhfvgK4RVdJvMt6azkmPiY31Linnuqu3bzB9gSFRzjMBhqLsus7iGqbZ7xnf4MdVvDsApXWekJ6aY16qe",
  "key3": "5uCKsNNBfw9d9xdXN5JKcY9ejrLugDt7h7dXPy3269TQuvzBjLmHvgWRD5BxRhvmP6C8NhYT9ZAqzhPPzrXrFFyu",
  "key4": "ceaRwKDiW44viPYTWLtJktUdKRRbiZUx8eMi7oopWxx3ES6PpyE8VTq17XQWNDriyPZUMHPUsyzG29g1nTsSdzH",
  "key5": "4cowJFe59gPfkkP7k24YAePcPfAdhDZSj72kAv3NFqdiS4D7HEuhRxZ6Yjv5a85Nok9kExZsewUeSukKyxyZF9B3",
  "key6": "48LAgbW1Ab31LAeNuivWfkL27DBXeewGg5JpuwdUL7gPm57vAP3iXpD2Ps37e68H5qLV1GN8JaRFDjQTZWzX8uQz",
  "key7": "2fRQx1bExokcyQyTN5N8nFvag8QJRXw7exSGfHC9eoVkfeyqACwS1Fmay4zUxk2LozQhJoCLyMD6q2SPsCtR1jkj",
  "key8": "uR6ivHsSkweesxDDNHTxLxBA6Dq6RgoZYkYqS7rs8qmzCdHGHqFPTfZeyhBHGby2pFDp8cVNNuHQ8eRTiPfQnNw",
  "key9": "6g9rV1paBb3ZiP7CnusAkC7im3ixghAtfQqRSy2c3U3ASBJ9Pg8jgW6gJno59LLTFqy7cpSTji4UQXPCvyeTQLm",
  "key10": "P1osqpHKCnehNma6grg3kpCkWjMjjiZubvA3Zmfp53FtCpDws7DuVro5azYDDsq4mqsZZMDbfpM9JQbc5ivhkZy",
  "key11": "5NX1JsN2C9x5ZPnvSNSwcmJHwkuaBvbz8Y2BNQ1rGYBsBoVpMWNJDXqFeeBqyAcFy3cqRX4yW26rEfnaAnaUYzPW",
  "key12": "3VXtAgiYADRyZVzBhjG6QrEt1YAFVp3HzwaS4JDmNTuGhCZopsMcWq19yq1Z2zrCw2FDg22voC8y5DNX9Jxv5Bcv",
  "key13": "61KYUXa9Rq2QtpRXcPp4mTykckSzoLDZNFLCJ8yCmB3wh5nMwJ9A78X7UGuk3KCqJXQFFKVqYWgtnddeCVgqu6x4",
  "key14": "2S2vL83br956k4cmK3jkWPWSfxoCLtCTxRLqVW1YoQsTgPtW7N8fvuFVJNufM2J7u7tnCf9e5HJ3825jDzWhtEe",
  "key15": "5am3WMahZxU87gah5oY31UdS8oA5BwprpqkvvC8UAd8mccep1T7oTLe5PepwAwsRDoupeLybw1GNpimnXQjbWUoL",
  "key16": "7rcZ8SLi39viurG5qCLUREVCJkGR5yApUZ2Fbg4Rgd7hm5i9Pe27cnuG7EEvtf4aEoDwo8wpm4PZViXNA767MiR",
  "key17": "3LGxQDzpYMEex3uSprngPpxL7F7fNSc17ULGNrYfoqKb2ZhfeDpMwFqgenzpdyhm9GSwjBykFebZjJbKjjXWM7BM",
  "key18": "56sFv9bBGhGRCo1ivP5877sZ7LRPp9XAikhqyngPKFXPnneYhzo4x8y2hJb1UNTdMKte6w2KKSmJicf3UPPfPhFL",
  "key19": "PHS8BVuk6F5SeU3vHimiBacroyWo67bJ889iiP4BrRC3D3akfQ2nP6942nWtm2GZM7tEqhNMozca9KFzqkcs1Z3",
  "key20": "2j5N7MD5p5EA6XPMk1noXUzow2V8VnPrdHVYmW9jWiMujdgT9p6Y9xxHp7PW6qPJg7Bk6iQDKd4DgNrhdbyjfZY4",
  "key21": "5g7tZ9vCwNkFguaxwDxyWZwZpfNJ1rAjVs88xV8Y3aekfBi1YkJVUmDCyP18ioXwbNZec6U9ZuS1si1G5FpMrQaR",
  "key22": "4AUEkJn6NA1Qj9eK14mDceVmbpfxc2ZitZsfZiAjH2tMELgHm5s7S5X4fbjG8DmdTyLscquKus5kT96DsUaApVTJ",
  "key23": "4DauTRd2R6s2xmkoS2rTBKx9jkVpYtyyvBi3ChSyJvnf5Z92CTK8Cgp6pmAYkwYNJ6kETFDUSckWXPkR2ez3vvKi",
  "key24": "Q4UQZby2iDEKVvKsLtkPA4oZVfn15wR5MGXdCvFrBKsnzpREjfYsivvqnNoiJEeNKbCAjZ9b1uqd8F2oanXQaZq",
  "key25": "5MxoxkG3ikzspdapcQtSd2TjzcdCHMRgbXb4PvxEATSj6tu9C2dZqvGJBJdHNpMMLaoR9PbWmrBJUvEiehPfGNS3",
  "key26": "2GzMqzfia6HyeSFZG6SJRFrbn9KAD2ANQERKTitWKEr7hc1dTfzZR3xbhKbSL7ZD14ocdDAG1SfHhP4k9RFBkJUL",
  "key27": "5AYgxqqd4yhxpkwjKG8vc898jH3abEbPDUvaDs8hH8GoCuDK75kJErZsZ3ehEg74pU8wk5WggLgAaboo6ZnPRLt2",
  "key28": "2Qq8x5zeZZ3MQEL8qgkzQBz9J9GFxY4PzPoNmfW96ENGLxAQ5EhJEhia5XD7wSozGawEZN2aFCsShU6nGtaFy59x",
  "key29": "2Hfu53oFm1roJeLttRM8kT3U7V6a4Y2aJEXhXLQbnHBY1P8ukdXn3HN1BgLmn6nXJGMp1H2ySy5BkMUxv3bEPtoY",
  "key30": "65781UfCd5o1bGYs3PnntxedVYrYwLRvKFeth3n4W7deEph1oALhYLYxhUXwABRrq85YK6tYJNjqrfeLzEzwrqJo",
  "key31": "3PvUbzSDj2yGfvoLhQbByxpvDj66cyeCDsyaDADEfPFpGQMpbVqZ2eBLT5uHyMseNQqG7BmhtUjfVdZmP4Jx8W6V",
  "key32": "n1jALb6qEi3dTGDmrxmD9JZRwAgj8P2HaorLKqFdPZK5zSXtqP1MVSxdbWWf5GhgYAMWEkeUiM5wgcAUU5TEeiD",
  "key33": "jGPSmAoGpewAtGwFMNX4NiRRZSonoQu5EAyTDH23YxNsuX4y9bTKeZHb6fwRgRZWau6N1bpkB2tqi8qad2M2DmF",
  "key34": "BXEALP7yMpAVrucbYoervVrKkTLgJpVTCiccxBgYzh2SHmWJ4oD5Nag1sSU3PQST7YjC6zGVTbHjRkBvoPWRzYC",
  "key35": "5ZDeKM44gW3vz9Y2MwjvxMRyWZmYsCL4V3hwLyLE1qLh5PbvVKaZQPjBhyux9u4bXvQeqG3S69cFMwjwGbqA98cx",
  "key36": "5ZXoce9zdS7ouP4VZNkzXWxmAP9ZN1WRnXtZP5LJe1J1TAPCDZhSoYHpq8hmMmBaL73ECnXqhEjTbg1CSYgQ5RKQ",
  "key37": "6cBK3aSET9oap4soJ7kWkbiJB1Rdx8RU4w2dWktvhcK4KGaKEfp8pTgVoXCbkHGZhAPRAnRR9wHaojVfaKGELAp",
  "key38": "2JTH55ixaYWBzeEzsWoswbTXPvgGqeNWuLDQKdex8AoazaigadFY9bPKsXA12Q1aCcsBcknKvLtyEDAqXqKCnqc7",
  "key39": "3J3sfrnD4xYMPWhYoceEAefAri2QRpkhreKt5MYzbm1QgEUfiCERZhopohV3F36Qao9CbDccnRv3y8PamGdHh7gi",
  "key40": "4u7J3MSFbavA53e5ERBz5tAzLbmGzJ4QerhvVoJ4LJCYiA9ojhkxsXnRhm6xvgbFKUaq4ZzuBAtVQugBXpZYusub",
  "key41": "n6BVqdpELpRPeRKsguwjT6fuSL4xqLZSBS1PEhBEYWk1LKMZAmadE3G5DkZNs9wuYUR1n25uJtjgSap5u4pJpQ6",
  "key42": "23poj5w7nhLJQMA4LBLA1H9cAgt9LaH19UTLRG7PrEuE3n5HGBDoEMucVVBxn3Gw1ux34UzcS9eiTWFJSoVV9AWk",
  "key43": "4F4jxcvWBJcy61nQYYJks4Bfhh8BthtusZ6TN3UuXXRqBvXZJcKc89mfjpyhaS2gu4GTzGoCFTKaepzr1XdmPgUL",
  "key44": "4yXyz3pMG3o89HzD6gr41GcggcKWEPLdhjhKVVqABU2gx7uUpDKAUzXjvfV3L7w4aTF4ou32AvcM3M94joXKarPJ",
  "key45": "2zyYMzBM7xVNgstP1z8HPNfRLSNEcgMiQQV9Qij2LPR1XENABnLb67hyeDxC67y1t6uYugQ48xWUUZJLGZyPPJ8T"
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
