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
    "53EvMwmQCiCuWkjbVzsquy2XdbNwBjatiKQfQhBpWKLhKaQHHpsWLoNb4ArkRKQsoPUvh5GqBnL3gKPRtqWksSjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qEmhRGwceuff1CAxRjZVYKBhZg3KbGjnoKGQLZFXnkbeG1ZX6SJfXuDMVaXMw1Law2vq94mCYurRvWepzSX3Apd",
  "key1": "3EnQ1q3o3EgDRgj6iZ66Q9oqEHZyXYM2EWwNc11yHiV1mZ8CvbtRM7qc4vkTFBWe9CMFNEuhppmLm2xhhSbckPzp",
  "key2": "5pMdLF8Ne6c5dPgs7oLm9GkzugNZaCSNR7tufMLsnqJtcie1j9yaQVdHgrA5puBzfgm7pRSbLd9b2Lq8kmkYEDYz",
  "key3": "2D2xLQQxcTS3XMEG1rtU8Nik4k4HPmEkazs81FsnSWSeJoKikEtzfgNCr2QkipTDJppXtFPbq95FRSCW74xWEsz9",
  "key4": "4J9KM2mdzsmwg2Zgs6ax63fe1NbHVGmqTKdS7UYJpNdVKcsbvkjo9EcgLnrGSNA4m5z6zs2K24f3DjnSMLekPBfW",
  "key5": "5ZrEsC8y2aTvkFrfzpgiCpx9swUuCoYk258CTpEv4BALYP1MJ3dWcgzBvMngdRt9hch9gBjaCCEfiv57XutCKLVv",
  "key6": "5NT52RWiygFR3q9AiZu7envfC1UjFKxoBCEYQy7P8wXi1tGJMs24gR4bek3zipCgZEEvTEBbT4q7VvXpxSuLZtD6",
  "key7": "4rA8fKi5n9JyoEa2LLgttHy86zgzHZs6e7mPj1a4bhGhMh7KMswA1wdZYUVzaDSJJb8TzJno2EPaL1ZhDwJ7V7s9",
  "key8": "5QYfQBonYej6QSE3zT8NbWxhH4SJdhYVNHmBLqFcYGYr8B7zzVESWtrxGkYYKqYKLN6iRHSAK11XAFBh1gfHa9e1",
  "key9": "4jmDDPCjXPQcoh7c3tPDf2trf2VbVAyXHnW1jQg7fkPTQsWKH778rewbUdR2DKfoaoNuKJVZsqzyqizhQi6GoKVU",
  "key10": "3VaP5ftLnDxnu5Z8ZhZUV1MD1RBGUHZnf2hqfCZ2DrwQ83f6oUK7wx6bwUMDQ2Ej5AnxFq5dzAhZGJ658dSryk5R",
  "key11": "5JSRSvs4mpsqhHEJzDnaLY1ggeRRApPSA74dzPqNDGNZZKcwrCzPd1bNPz6M969cKMFvdhUKmyYw2CkHyTdBZQsi",
  "key12": "5PMkizEusjaTvMiirdTA7y485vkxFaDcuuTrgJC4pu5rSZxwtE1zRXurpChdc2eCsgGf6NrQZyjQTgVaoSgRqoD7",
  "key13": "5irLyCuE4rKEHb7tufj9MmBfqUbKyMdhCkCvu6cBqBdA8jUg4UiudvkkkytxG1d8xXWJewPVUD7Gh6ybtD5n1GaX",
  "key14": "5ezms2m6wY7BqqVss4dufB9Z6hDQ76qV7xSGcEFahXobxvViKqU65kRrbeK8P8TVqvhzAccSP1AYMaJvza9Fh7Qk",
  "key15": "2rSK1xnNahmaEAEeUUKmR8mcbCBfnwZj9XUbR2pJaLsQeKADZf4NYGgrezSqG68bsGAwFitEKbga6w4BQhPJTQih",
  "key16": "4p3SAUEhcHa3oQsBhofDPHcF74jhXB8EHqMo3yQbKKYn7emgfFASN9dJ8Vq25TNBQERiU4zh8PPv4zRnjCuuGpTU",
  "key17": "4rfroMQ3jBNmJ2gT7FEX1BE5E7zs5aFrEedRSJNu6SChrPYVk3UGsxmwMU4yKn91FSTtREYSqf8MnASf2PP74Yd4",
  "key18": "FGFvdMvZic7RrFR6pWjAPDf6mePBYuxtRTHfeGSLKWAzYrQbymiALDgHusP5j4eyv2hVHAwBcGHUkudbTMvsuDQ",
  "key19": "2RGKbGCd75piNhwaFFumN4WjTBQtLtGbnZW8YyiEMfNE4Dx7avi7vVr2sAvwds2os2kS6ECebfmZjLw5eJLhVKw1",
  "key20": "4Db54pRioeFLyR6Ax9qfEYu2F9TSzsP6ba7nB2dfHJQUSQZikdZokA2Sk5xuWwH9oTy4152BW5WxSuj7y4iGRUCf",
  "key21": "31RjNJrRL7jerayGGK3MwL1PMJTuVycoc83gUyGzgwb5NHsMQKLLZC4czEg7Pf9f4i1WdUBaH4TsX22ASpzrf1fS",
  "key22": "3bw1kCho6aLA7nRGSzdjCVUKBoq5gaDbxLkVcs2gHb9gYaS3yQpPsKQ4B5cTLZKPEPxmwoZU1XYsofifjEiURyDc",
  "key23": "355ZUaGJwT9dceXCZpUkNZnhK2p2nfV8mBwDQCoNesGRBExPUoYd33vFqXsUQwaa7swo8tj476fHjoif189yNxJz",
  "key24": "56YAzgfb9dMtGFafHerhbQyqi8KoSBb6jYg1F34feKDbj5PffQDmVy6nQZDzQoGk3JdC8FS4jGE6m1yPdvMurZdo",
  "key25": "23D2ZYcQXqGnEp86CtoJDWGxoJjyjfrRtHXwicVjYQn5bWnTchVgw329YarNoKwp7wzS5TQeEAkrW1HbMLFx4saY",
  "key26": "5gEq5Jr9iXSz3ceTNwfhnccbmhUJK5YMAKwpXnCN8knYVuuVsDgmtZz6Ga49hsJFda6kf8NB98VaE2dFaop4LF6Z",
  "key27": "36owo8AjfeFyBCj3deQoRSb6LmXEWe2CKerPhJb81jHAiLWbXU1CXLoAzmMbAa8aZ93L9wvJByJYY2tAigoBrpq3",
  "key28": "DSQ5UviNFVZRdnMr7WB6xDbuebyyMgoqnF7DtDgBqYW5zcAR5q4E2okJnLVAFwsmr6UVc2kCkAHRX1mMAvNqFvv",
  "key29": "2dUkQ6p6i2aTF4tMDN6dXfsufiPJUaxM64qMfvmA3LT1LrKHQACcqZHL5Q1Gqe4NyfF9c4hprcPm1uqKUw9pxDFZ",
  "key30": "4RoQzGRF2WVZp9KY4jsoH1HyGsW8QgvuXHw7oSJQai889w8q27yvx9aodKUh3H35dBtVy4srRFDVAA4wvGWZDg4P"
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
