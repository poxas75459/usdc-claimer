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
    "4yPEGRk1ah4Wy7DFgJpCC5P7zf9sk7GajKghszujdPYephEs3uk7perHDny2KwwQM733RgzNYdFRbQjai8cn42Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G41Na2YuCyQzoM9JPWe8BEBMCHXTvHLgManrsH9LvLUrm4fvm8QteqJABGGzbYntHRLssgVGUbf58zdnkn8amTR",
  "key1": "3NuvWB2eEuon1CLDsMaY5AoXXzMpBWBGRUTcbifZpzrKxPkWou79Fy1XKvLjiRApAkKgzWzpZ7PUSp1oG7UWL8ZZ",
  "key2": "2eRN8bwzi222NBWhRJBNsgA1qvh6SbeLHVgJ9j4V6d25DrCtTJk8iV2ESBj9FPCnYjKLi56timtr4VVKEkvCFtrh",
  "key3": "Whoducn2WhXTV4KGKGu3fKpVUxk7Lu3xQ9vXY8ej1DiSHKt5MMWcKKMwvFsbiDJ2ZdKCG4FBFwyPGSBTVoLhTai",
  "key4": "25hA5wt322QjoKqfBZsAKEswcAEQVTaFiymrSv99yFjfKe8RxRwE6W3BCGHRjm9kmWWtaaAtQy4rCb3RgmGFHqE8",
  "key5": "4xFVCqCUTzH5Usbz95K6sMWEWod6mteuox6M4tsov5imjdzzAKJhCbWvjy3EEX4djddnxrdp1TYqwNvfpc3KANHU",
  "key6": "5pUhm2ok2N2VBSWRewd4TTE8HrwpNK4HTkaaegshxyjRdJV3B7oNXRmM3UG753QK9YKSh9Fiz3rgZ3ogegq3cFoK",
  "key7": "6HXNbtiDborMySvbtMoW8NCWy46QZV8UtveTfk4kThvwsQpEdTF2XS9U1cemvuhvNQCKdR14wmsZ6p8dbd5B4KW",
  "key8": "2oATxogpoTYEuDGMHrgt9YtiU2AmCGgzE7s7TR66nTvzAo2ZG4mFChBCUnEuab2wYGzXxf41T56uiwyWsvNKAwbF",
  "key9": "4gMvXrnFn8zcgj4BrAKLQwMASTFPHaiFXDbhSBa2RnnoresatGeeEnb5Uq9UB5LTXDTKLUMF6P5ymUkswj4ZsQQJ",
  "key10": "5KeQVuLQ75RXgKEJWRANbj7CY1BSbo81dEKJGpdXaoBqwXpdGzdr1shCpie33VuDipgU1i4CW5tWM1zV49Pko3H3",
  "key11": "zf1L9twBxH2dzYBQoovQcUiYkntkAALpBj8BV3tE1W3iDt4YQv2Qw5Q737Cx5hVK5zHG7ZmTKcw3Fom5wtqe5Nt",
  "key12": "2kiY5usRhBPgsGgYQXnVJ5wFHm5Rq2rgFdXhriyhSRpZHC4RQV8Q7qFqdBverNU7tWv2TMYCtcaJ3k9T2VMosHQd",
  "key13": "3Nas9suvimK7gqQCyffDMnaBuiRDyPuk8uvbwqesqCjkvQGpF9goxDEgPav6B49Qv67fjiR5HuV7VKFrTXwdpYx7",
  "key14": "2Cza87ZEWUEXHn4jd3QdULf1mL3VQgxfiyRYz3pQzV8wXv4KJaKLJi2HJqYNysNTUKdVaFpqhQDj2wcdx1Ss7vQD",
  "key15": "2Ek29bZh4N4EfAtWNeE3xskFWuxrGip6qGwV1wUFE3hbzNHw7EjQkhXGinF69pEHkL5pkZRJuBFjHn3UncBAvu6q",
  "key16": "qNSrXeKtwdnwsWgX5jptkKh1z5eD3Mm2WYg9kaVDxTHeyGfdm6sFdn8zgm3tVp2AijiD2E9Gv2ZW7RTYHJwZjHi",
  "key17": "WczEkXQhQsmiccAsyAq9DGmj8AzDS3SoKKst76eTQt8mJA8HQmVBje3kPTjRCWDAFumeJSrFcs1Gsu8MedSAu3K",
  "key18": "2QgpVUvjcjoE11AWaYAc7SAMyUKG5YwDeW1CeiuTJM8nBQmxATrjMNyeaSGTgNJ7bN7G9Gd8LZEHKb77spMDLB28",
  "key19": "4muF4QZeVHVMramjsGFHWrDP7f1LUkzh3bgFjk8rG1zc2v9pxE8b9XuXPvwVaDg9HN2eUXYXfrz1bV7Z429uSy9d",
  "key20": "3JwrnYtKa4dMZwTkP5xr95DcNCZdReZvSEg23Ha8Qexj66DWxz3LKBtdyCs3DgcqaDYPpSHNJWwbYgYEAb4K8jav",
  "key21": "4wrR5gqWHxfujGXrZeXQ3RiDChpyjUKx36htu2vBoNo8GqsLVkaBDihDRvn8byKndtJLVwg9EzHaBmWrfjRVfiEU",
  "key22": "5YwDjeWABBzXfYSLwpngSxZ6wWenq5Zb8VdaVfZTv15GkzHB4BuENo2TRtQYgKCWH1aXKad4ZhQmur7AGHtiuKzo",
  "key23": "5Vfo2aPzhbqjgE7gZGGTHtKiiHSDPy4CUc6joknTsq3wwD6vZHyN6V9ekJ1A6ji9cjgv4cE9NRYmxXhsKwoZrNua",
  "key24": "634d9niy2jEZjsZEWyviqZB4Lm1evREBUFyqnjQh5rYVkrBRdXUc3Gr8PqGoHzgYzhU8PDnUUdrxTkNHkFQWrMxQ",
  "key25": "3TrGK9NAN6iK6joyhLNXQMatDm7FnKYp6aruNMm1rb6TEB9md46dRoVooPjhzMk848Eoar952uQ6hf7GqCk7WZcP",
  "key26": "434DTLuU865DYqawfPkN7ZCKTwhsw8hp2pwQeHCJPQkrY8ifadEsGYFSmd9LzoguTFD6gx9H6XfJzuszJxrVsdut",
  "key27": "4czN6orwuqsteHVvXKPQmBPtqWzcKe5UwVwweYSGvncQNrZzRHYcNbbJpF2ux3dY9pz2cv5Mq4qNTdkaXf2CjR72",
  "key28": "sSuzkWozkha1A8iaJTB4mGfuGYr8RAwhbh5EtdKmuG3PaL1N2oqduThgzHuJUQJC6rCQ3T6N5Xsu4Bxi6kD8J63",
  "key29": "3KN8edV41NX5EnfpTqpbyHgFcZpqzT8EnQcR7CVXGtL7WreLDZuBhcFHS3gfu3ZWhP3wxraeEGNfWpr3FQc2Vom2",
  "key30": "2Y6mom8JTg62snPhcEKzRWBi3W1FtWcC4YTxeYx9RpJh1wTBP49VkoerVuxtvcuFB9Daoq8UgAjQaEH9DG9UjG1G",
  "key31": "4xSy9zHr53Mainzoq83LH2CdyrdPxovMdWtt2DPUExGEtjQfSAcgzLTnjwT9AiLNNk7A94ohDPKVh8pffS3NCzaF",
  "key32": "3mET6Fte4bV2gUkUPzvcjWvhPQiQFWw4mXR71j5qQY6nvDkJ2iMqhMnJzLVLiqjAjDWYM9eMWACNffLbJXjSSb2e",
  "key33": "5fmpSbeNGX6qjMxWfAjYrCbVkTWzN6o3W8jfyx77f4Lj2ahnF731JMFKcJEtyHcKxzhgGXixA3zJZiMF8zDgsnFP",
  "key34": "5oYADGiGFxReAaMHzhV36NmoHjkMTmUGUCTPGT4Ea7NPipaxgRnfGvGdEHso6WwNhZ2C1daRTr7vaHp27pTu7n9s",
  "key35": "YN9JZFBrEp4Rie9Vn6aL2dtVQuymbXxo7U1mqk3Df9Kx9Lb3JYmB6iEn1FbPVkYEducFwh3MdJcJRQJuSg2mpRo",
  "key36": "3d9rbYwbZX5BL9pxkfJowwQ8H5hf1jxT414joyTdvXFdxvouKmKhKjf5Lq2V3qCnyGBx84oQbneJYJvaRq7dRcpq",
  "key37": "31HNoFhDJEn1DDWks7w3An5hun4zrforBpRGCYRAkeecMd3281DBffTh8djTgBV7c4u3HEH2WqN6BdaH8wprM4sF",
  "key38": "4UNwdiHtnj82wEwuirw2kED2zra8UfyHG2rhUpuZE3VK3wAq5nGQcUzhxTNJCXY7aWFbJnvsCnC1GdEvBagid6jT",
  "key39": "xiRFmsa9XL5w7o2NavLoG7VS7ya4ubuM7qAMTndaxuepNbbfDhMt9sCXcR1MRFQhAmFB5kqwiD5qq6eYX34o5pA",
  "key40": "2RyzTSoNQQeSC8pPCeV9sLWLh33X6mYmNBjbFkBtKaeecDQ9b2C9TptK344Dtje6wounHBGanjPhVyq14537u5EH"
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
