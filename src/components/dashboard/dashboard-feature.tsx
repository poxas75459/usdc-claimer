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
    "QYUq4atnpdH988LN7o1oMS9PgVF1vTx5ykN9Ep9hXRqTR29Ts5Abo1eJC4sXC6GqxFGqv32KuKL7by2tmhm4gxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EjbNegGtTT9NvyLfg88Bx5eNtEtLNzYXse4GKPdgnLTjJNd4mNqtZyFMBK94sXFgcFJnFMSiJmReBuHEPuJgVRx",
  "key1": "5eidGdH5XkUkpKQ3EzbgZyTXgkxKmQzycBo2WaGFs5sX4fBtohZzFNUvykYem4jTYCoyYxBaE3sdwkPchoRbAzmn",
  "key2": "bojAW6J5gejN51QRBpzYbyDW7ohPXsLmJJp64JPqeHuphbdC9VV4p4WxUN5Pfhtcm3rtDRL5hFgLacBuo58mzEV",
  "key3": "4r834sPmbiDezzcUg4f5kdwEJs6jqQbYkXj8HVjuuWTxacyFaEMJ8wEKynVgYsVVoK9JgGfNfYhGZVHHoQdqs3S1",
  "key4": "4z481JNei8TCaK2RzDm5mE8zwCTjHPywLNHjs5QQXLiorW4gYizBagzAaAEDLyweYkQKjWQ5tzkPD9XutLXus6f",
  "key5": "3gcwq8ZwNTwCLyWiRANTED7xYxtaHYKWnc3a2mGzFE6MxEV8XA9NNTBfqBUaJBNkZgeRvcCBphsWdQJ55YbMQqs1",
  "key6": "3AmjTHtUhtvvunmQkwP1DQM372KbL7xQ8wzooJWrTtcjtXbdZ5PCzidwbugjZZwbR8n7xuA9JWdh7hx9pLRfNyZj",
  "key7": "2NzRxWtWoC3hAUsWRYjfvpUS4ZABW6AjjCAJK9UqvKqUR7M8oHRP4e3Dd9aqHdT5nrhcgiGH6caKEmer1oWGKk78",
  "key8": "2QUYQTo2Qfm4vtmfcp78jWvAv27tdJpyRjdL4BemouGistak72UEiRpoQyijwRpRBoNxxgZev7Qs191D4v8YJD9V",
  "key9": "Zox2SS6h9ih1YFKKzbS2Gu2JMKmkfLLqqzAXm3EGAxRg9UZh3H7as3UN4YAmx6mKB2gQheS71iEBesXSNxTcW27",
  "key10": "5u9EeZBDhQ6L8mtQ5rdDsDYgiteriizA4ZJ5Xnypf2ZTZPj1u4xfKZF46dj4YsT8G9pooK9fQ1Mz18Dc7ZRMD1FG",
  "key11": "6iYQSW9jMZwKenBQ1CjB8GpgeEdMt5jSWck1LymytEBpY5yN24PX27fDeN2wbPkjbQWP9bpPhKZ2WHCjLgW6uHs",
  "key12": "5FEMDx8fcNHojWW4Jt6FcpzbuVj4zTRuf4a2JtQKWACpzorZhmNfVZmW4vqgCTBRarD1cam3JEgvgXyY1mBKRS6Y",
  "key13": "3KKweyBJkeT1hUezNCfL8KrWXdcyRyq6UVqDbBrCt1taD8cXQFpyjGQhtUjjtoSEi2RsZvqtFnkwV6Eesuv2r9FU",
  "key14": "zCdsASnNgEKRNS9soaUWpY1DXyko2nr95b6izdcjFs8VqqSB1QT3DMNcHSGfCF1369bX5jjtiAZar3P774PEP7P",
  "key15": "3mofNzLKGYpVJZRdGjtZkoaY32o5BEADgb73KWhfLrvEhRK2TqMSPooEJXUgjmS59yoVfPfNn9fWRwpodYd7epgN",
  "key16": "q2nqxGpATDb2L5dJicgfb1Yf1qhonqfW5wuqtQ6ssxpKUqzBG4hYw2zQ3AEkb2NzJXyPSZjuG48HWXYw7yyxqKh",
  "key17": "3djwQYWjDkXeBwHch4z1sJ2aUhXgdQgeZ2rMBMZJwgcTRPASf4uhMSwrGEcVC8avNDFAJkWzdck9BANiuDzgA8mh",
  "key18": "WbwpcCCUarKdnBeKpQoFdqQRRiYuptpvgwccYCqg4WYrZQh3m8DDfP9fvhtbebo2MxiDwkDHhTKwzE2gAFyL8B2",
  "key19": "2y8dJfMLDDWtuNy8MWhxbA1w9VS1RkeJ8V826mrfTx26zcgQ83Ta1SRMsRGwfZSPjwGdDLuHkyA5hXtXBSZFXAnq",
  "key20": "5TABL9vuBoFJptWXjxdps89Wse8BS1NBxe3jxtf3QkSj5dHaqdyBtYbq5duG4DwjfdeMWj8WxPmuNFcNQoz6vHFB",
  "key21": "pidDidFDkTD5jQZGhsLAD7u1f6yEzNGgt7HcEToCeCmRA1PHkKwQadfHRfYsJsy3baQrQu1ih9qgoCcaM8RRif5",
  "key22": "4N3MCrUuEaYUnR3m1jp1xPUXwdqHGxKgSj9o3745HWSVQhKk8HSZyYqmrbca6s5KKm6N1hk8h6hEj9ZPrtNmSBu4",
  "key23": "3nTzmoaz3mMdvjZUSYKdbo2WWLaDNmUmFfWGyGo7LWvfg1TFZdnbEacsB3D6LHAoxjQKwJtkni7kmq44qaURU5FJ",
  "key24": "5h2V2bgetHC4osWzrr8NTvd7iAfHQ5hmYCvDaonzcfm5ocGXWMNxr4suaw2NeUmsjEspUjSfzy3WAGkRmenQfLfr",
  "key25": "4zUDuC9wgQtTx5hQGkUn6B1ZZ5X7sHeS2hJP4vstViUBfP7VoEPcHitLizjPxS9Ke53R3CQkYfv1cdrCEN3zikFH",
  "key26": "5gTNYtHyQRwzM91HM7tqFABtKR5k7GMQmcyjGY4YC4avPGrCgZznSeJj26Twj7Lpv37aQy8a7QxzsUzi39gmjFJo",
  "key27": "5PfcQi8h8eGfHdJLL3zF83ka58jpCDERRqvQH6fDqFbs1N2kqiNUSALk3m8tKnXTewaStYXz7jCNn9aUGHcVcxT6"
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
