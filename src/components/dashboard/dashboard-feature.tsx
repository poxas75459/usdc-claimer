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
    "5jK2sc76jkJHNkm3cQ99ZknPgn2sUHYwhhpMcU3pxbPsvMgde7F7k5Fxgq3upEY4y7xF7Jufe6B2M9AUdWTAFyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59PSZGpeU4VWyc4ZLivGJNyvWzJn5rMK3WH5GzZimY7RUhaem2ra7HcXWna16GNZZtgAVPaDGjmtB1dPwVdJCrve",
  "key1": "2vHCBzV2KksggaGW69nzYez36Hsr8eCpSie4AUE7yoUDhL6oKU8WytFovwoQCQ63KnBiufKRwuJRoqK1mqCzvC8P",
  "key2": "2jMCibv3pJ13VKqZwE8CBDDofNBg54MmBv5c37A4bBDKNgvyW57AbEESdSoafv4MvFwHHzjQFi1q1YhfmDPkAALS",
  "key3": "3AKhTasmgEy1bABgwjAXn5VyUhZvJiZDLY8tz2ZgbTxdQHWXGCA7sQ1LFtWaRjSBNA1XmqPsN3WyLDEKT134mEC9",
  "key4": "5KQoEMPMbMcsjYtfMvsVQCy1zHD4czyrNvFdxt35rfPTsjDj6r4ML5SUFJPFiWBVerZLdkoZYQiJ99Gn7AGMZpkq",
  "key5": "LjgU9TqUETwbJvgxzmE6CSFrSiaMhFmetxJ3BJnEHDwJFgbcwRSRVkSKCbeXSuYvxy4VtX6d4MUiURPJNmnd7mt",
  "key6": "5cZH6ZFFfnWrbK8GRDckJco7Vuc8fBn4Cgxg5Y35bbeZwPSDwz7EJdfaPKaxPfE5P2JEZBk5ucLFgNwgLajf4xsv",
  "key7": "3AiF8vyqdpodZYb4XpeRbx9T13GbB8EFFDbtPsD1o48GPN8YHG8QJHSrEEiWrVrnAppC1AFUL6epkWfhFJNpitte",
  "key8": "3S6Xf6dDREQBtiNbQEST7SndFDr1JiuweQCisLDx1WMdS6XPZoyCboJc7pq1WebBJjuuRsQZkPqGBAjam6YCMpKm",
  "key9": "45V1wjhvRJQZAsMUQWD8MX2Ux4TeogHaPZZMq92DcAdsXUCnm91QoCxFvX5zhe13e8rc4Y4STRgKDxnwU8hZDQzu",
  "key10": "3eaKq44VubtWp8K3NTE3ncUn7gRitbgMDDJbd6NenT3sSFxYBnaApxPj2ebo7YsfXV7AygdErBgu9t2KdPuGNaP",
  "key11": "3HptoqGdsAuSD9UAVSPQY6N9dQ7cNuo1dtWR9vDBqBVFmeHhhKpbaVcB82kjjg6MsEaHmdXFTmABqix9FGZXGJt2",
  "key12": "2p77y7GsnEsY9RgZ8ftV9pfVtE2p2aZnEHZ2VidX9NwubqpUhWGAcecBmk1CpnPeHHG3TyW1TpaCGLrQbVQpzwuk",
  "key13": "3tRRfKU5n7qeThFoafPN2vb89fhPenhmnARoGL7vgoAaRFMXFFhhKp4uKC6xu5iP8jACHCKQQ9aGwXCakjRjnaP9",
  "key14": "2NF5BzYH2aMgDGJRUfH8tXqLAB4CZipqAsUvchSC6gDsndfsaMN3hzkCTsgyFpqxSywHPmyXZr7thNKH6Y7azsdU",
  "key15": "4Y5uLBwTX6BqGCSgfRySgp4WsmuUBjQ8bD8KXoDKUyZx65hkhgMNFkCWux2RdSMDBdmDTrKqgTKUr5haY1sDkX4J",
  "key16": "59rqHJynmZeAWoemUVF8Fzb6zSRCGSrjZpzANSJsktdUG9ePfVxyPfYgeJvKHifwyJT9G93Pc7zAMNk21rKRnvr",
  "key17": "281iSoR97SuSPoKAyVDvzZcCKThUG17Se6NizdbQcFe7TKPySuVhhvVzSo1SLh85c4ZWjnRYhxn3pt6HuCXtdhiG",
  "key18": "26u2uNVGC5DNjfND5Va1KsiK5BecvHemN4fWnMTQrggyQuPH33vEb1Euegt5HCvSxr7nQznhYYypenMcDWGK8nmj",
  "key19": "41f5uPCNzKwGg41rU8jz8mfxsTsP2No4pyTyJibK6MY2sr6osB8aHcgioWyVbTXAx1jAcEC4yWa8bHYteTWz1v39",
  "key20": "5MeptTFj5FEjnkUfB3qE5PiHiydZB8kSKBMcduCDedd4ArP5sAXjtfpeVMqNDJwvJFUbhwMWuRvVWZMjFA4DYKMd",
  "key21": "5q4DwSdxB6Cx31wY4mv4eAU3MbPN7aGB2fJtGeaoMksnnFMYw9DYaaX2nBwHuY6kUGyXvJyUeYw4rovzcjFdSroU",
  "key22": "491PmhRBb7xCqNfHk9Yeu297d22uje674yZfuD9i1u1egb54RVb5mwC9reysuTE1WUGxaTYvD89SMf1Jg27GBuVn",
  "key23": "3ti9HBF3uVP57iGpzCbiGdFJPwJ4qXXQwLzjeAZofNx5qsFrT6Pg9nAwYGC8ZfkLjzAyL3MEceUcssLDNRxRiBTe",
  "key24": "32JWVDBwhcbkTsYtbdvkqzoXnLmedToeSsjn95hSAjPpJSdKvzz9uG6fi9FiXiKrxKhxHgxknrwVpDx85Cpk5eeK",
  "key25": "4PvT6VqgGozf8BWaF8Lu4usBYriUjtFEQWQNoZnQVcXUV7A3s3rfohHy8mvDm3e2FKebdsyojCigkxWRr1DSXiuL",
  "key26": "34LmzP2aEwXeUBKjER4rDL3NEn3Fmi338jvxJ6aWme3PD8ByhS8HWzfgW5f6oV7jvNZQwX7FaEDgeRUtzs5kFt8J",
  "key27": "2ZqPZNoiRfEb7z12eB6ecaQXbK6j8itWDxK3uLmZWtNCtai4WMesUg6d4uZUq3DdGSR9J7ecbdmLfSoDBhqiK8Q8",
  "key28": "3jKn92ugcedSzgfToihSzT376s7B33SDt7SbtwLSWdeMPW3vukyKTFzJXKMkeZ9UjEXGbBdbTYgoNzqKKp9V7fr1",
  "key29": "66owg8dU9KMN3Wr9DZenLMeDWFfEuA5mzixJtAH6PanJhkx5FPufNBn6qAsLsJHDkHKD6rfbjZJ8La7wa5Kiozjm",
  "key30": "2twJP8S7WXEQU9dYbENoBgMZnw7Jz4vyMduaTbj5TBVtPeNDkZtj4s3tXHchxdChZQahzP4HS8dJetRwAkHagXTs",
  "key31": "GaVJcNf2RcRgpmk49AQzHxVmLTTF9tc27DWpHAezSGxzxmimbtYEvc43KWPdAk5TEUkwHkhh43yqKbsh4QtS1XQ",
  "key32": "24XU9CZB9iUvJ3ojdXWrEAD7jMHke48wv7qyN6i13xJcppWar5XVCGhvBSQJXFs5pM2keXnhPP7DvzjEGS71QnjW",
  "key33": "MvmfYfWWpZZQ6RdUykte7z3WGd2LjHnZCgHiNm9rH7JBnuAce63DKP6iqkyLa6Q9PAK18GxhZ6CyMYahjtpXPMw",
  "key34": "ziqe8YDSo8uEHZC8bZZTTemd5KnAH7wsXPUt8Mqd7u2LGGHdjmozvDPEKjfbZfd1QBP2gZoX2VXyLVWh9ajaktL",
  "key35": "4BFH3bVEPFP3QZLKPWji2v89pW9azHZVvXqoE7f1Jqf6sU8Nq4Y6RjzrG2LBcUuWZmxkNE5nZAJKWcG2V7GdigyL",
  "key36": "5tArtFDppHYsxBN2f2C61UctaM8KVQJkyN816He88mya8mCP5QtiTU1rhze4vcAnVU9zNHDrv2D7yL3JEVcqEGbh",
  "key37": "Rqzuj2qSPDd789NjsNaTcqZX826uWvk7pCjxK9ZAj3Gc4wfWJtsP3fNHPzQzhzBtTPeT2s5PaUsfuvVrLJUxqxi",
  "key38": "5wk1DBiVydhH4X1sAM7PfmvDVoJmJyoud8iFUkCALD48TNKB4Kc4JZVm4U7Y7bXFuepXomsyGhC77CFLR1qbjbyr",
  "key39": "7RRdRzpPLBumRXJicAS9EbqDvDSGjAc3bnQva1s8nTKf8cZFDUjVBp2rsqRx1onHXrs1Z5mo9R2c4QaERGuUMc5"
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
