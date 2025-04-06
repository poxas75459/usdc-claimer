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
    "2j3T9fiUV5cEGfL17Ns31PxnSou8xKAmBksXLw2pS921aVbUMtAk4Xc4R5j33ek9NNe71bRy4yTryABCkq8wnwom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJNJYD3ki7EXhEgPeAxW94xWpFoDze4KYHHWxEqjnumEcZ68vkzdmxUTqJSX1XGLWx4qrtAKZUF4Cbyx4Xeehw5",
  "key1": "2Gqowft3GUc3F96JpU2KZTLvGiZueE5fHzBQouAegARVmd3FaKMKPaDYxALRYpqrnUfGvMx1WKXMpjEaRzAzJ4AW",
  "key2": "4eeKofYjwtThguMeqJr6nesWEadfzdfvaJR7A59Aoxq95ZsSyVeuVVyrnG47zhHPMGcaeRqYARSqpef4CqPz6wff",
  "key3": "2fiZnWhojqBZpRdUwtP7gFMumYpGYE7gLqDZLmNavFrLihGi7psFNAEBDborNSRqNfHme76GsddAEUvmNTeYu31K",
  "key4": "4BRL518gPs85Rn8v7ucMuZMzsRpFauykG5oe2iEmwU33q3E6rWVQFWYpg7EQcG6EmTEsc5aXuef2431mpvZrv1W8",
  "key5": "4a9BTNCX7VyDUN9VzPGJ2tdnhj4QGRfTQcvg3yUpHto9YfLcpSDgodnvt83Z8MEcvqsrgUBUwsku3ang4Xkdym6i",
  "key6": "5rPS6k96U9NN9ByRXnDHdZrBvxA9hKbpPAYg8HYjs1b41zEU9JyUs6p9o9pBmAxABETwAFHagxaYmq2f4QYbBkKp",
  "key7": "5J8zxJ5oEdT24JKCvVBWNoJ1pRjGxT4ASrKqppNhC6JXT5C4vNeKXd9Jie3U37z1mPAJDuz5YRr2XSoorg28atXj",
  "key8": "4FgjGCS8Wt6j8aHc6zcFCHbX2wSBTNH3NgTG7K7MMCh8xF9CwVYmrmMetAK7Y3ko3RVc2mvnzZRoMiTecutu2bcW",
  "key9": "4j771ejn2iyCH7syE3TxMaNc3mJkoUEZjtusaxZGh4ReQbR1aUBktDEXyXExznHydeVoCKwEvUDpHLYxtMaCMnkz",
  "key10": "483jdAD2Fqxc9ci1EJzLzQsK6zmqzYQ4myTRr9fwzVhR5zT8ozx4RQyrLBQpTJR6ABfTsJo9x8uau4t42eevkiVU",
  "key11": "3WvQYpXWWZLucb9rVoqAvccdTjM31FHUr7yKvy4dcy2MhcSHyw1iWMYQNoHyYyw9116aVHACuxo7kbJCR8X8ZoLW",
  "key12": "38KLJH5PGjtWzno8ApdJthMa6W5aQ2EhvkV28TRsZbM1inzffKJvFTvAT3Fdj4isGqQi9Vba8mfwWTKu2Ezw3Epp",
  "key13": "2Sbw5PZC8QWMrNd4a4PVFmSzcghidtJqVKahGYX47DmFsoJgnZpncaFPZ7o3QPSDFNSZ7EiFDEP6Tf6jdGjeuFJR",
  "key14": "5q3PRqLa8dTPsxeJT3JvoW1fuqJRC5eo2uW3BAjyxKCFF9EZxSejnUokRRtfMzVBQqtPL4zNfZA64A6KrB5FxS8U",
  "key15": "2MGFLZQ9Z3PgUauajpgTh9N1H8NE6rUPHYpsuYCh76k9j2F2McFexwbzpt2WQEETaTWfJNknB2gaSBmRxBykmEnu",
  "key16": "2gmkAjqB5DKoCpDHRx8xCrXnXT3wdvrfqAGMfywsyCanKeR7wsor7HRFGFmyGzm4X3m1bNiTWd8bD5XKwwAh4Nto",
  "key17": "2a44bctH7vK7SCMAALnwWbwF9wepp8qgSCe95mrA9VSG8vmQXgqMZqWrQrgHyo9vvCCXVmwZVNyjYkjJqm1aR7A1",
  "key18": "4iuYYnASrjB6yBAxE2iVCTiq3pucYHYQvwAgXummg2NSvFcBwLT2dcyPGHzYCcEW2ad3aLEbYrAYTiPwcRKuNVM1",
  "key19": "3Khd1iGcRnsM8dAMTfHWfREgxbq51vx7zVX5zvrpAerPyf25A8ym6qhHKSZs1b7vHXYB37njxemaAtiXuAGwn2xR",
  "key20": "4ULinJiet4RjCww1GMupks9auQET88umMJPYdDuqB5bmoy24P2yu8kiXVHZXPGWthXvDbwMUuZgh1Kq2tnZH4d6J",
  "key21": "5zjWGqD3pKDKRATX5u1wy4vhWtwufgYEbFVoDRxeEe13e2cSox922zTyQU7JijATfHX8ga4ZMVjBL2c6ppz5KjwR",
  "key22": "3qtqWUU9XW1erQUPQjao3hRpEKcqtV9R1FZ1AGVJvoDsX1QnxkH7yywM8teePXjasW5UoREsHTZjizBfLrexyf9W",
  "key23": "4ohYohThquAt3SA1CfJAoZBE7gHR3hpiV1rbov6cnMxZvGQ8uh6mqT8YnArGyyBz2BqXEVsqLkdnVv2NZkeVxiy5",
  "key24": "4bofZx7h5NDXscvUKfWUUBdqiWxJCW9ZxE8vHGUAa6aJ692i4sjogCJ46PKbRmgg5qnKJ3acX8kzkdpuKxsUxPBr",
  "key25": "5GjNJ5tYPgTxQ5FmTq7YemrPSebVNi2Mh2or4Sy62xbKdEcQEo5iAGfhC7ALwSCtAzpjepxXuj9nxmo4Jk7w6KFJ",
  "key26": "5TjPf1LqKQdau5KaXHttL5AMRXrQDW2Rq3EL7whLZ7Qsb1omeHHPCxnm59kFxsQ4KptsTHW9WLqdRseR4cPAfHbp",
  "key27": "4ZfXW8GSuL37nNwvuMbxLYGTMSPdXYbzHT1N3hjrEXL49JXQzfLjz9KdY3KpS8MvwiXm5GenGZy36NTmu3L365gf",
  "key28": "2znNiRp9hukuQLofSsTCcgmApjKD1ehNR8mwe7hE3tRVJYbHdRwcDwtNXpydzhEAkrn6Hqo6KLuFLgWb3zxy9TKN",
  "key29": "2hRWYtFTtSs49Yp7VDs6FsixzWNyj9x5QKSFWcXxXWFgPp4tqFCBNaAVDFDmLSQWy5rwcTyjAA1YuQbhiJi9b46w",
  "key30": "3PqnVBMB3pXmfoPJM2oC5gvtN9S9Tyc1eKCguNSEtPEJWm5vBYj1uKv1GDccnpMduWWLUfBcgSfzZ9GSF2rZqNpb",
  "key31": "2cfVzzUuT2ngKqTfrfLjkfzWtz4oampWkrTbjyUhqQFDFswKMH4SRoeg7HDjiJRx48KnsLZJPfTPCgHKxfgaXnfQ",
  "key32": "a3JgswnjsjPtb2tCpRx3nMvWnv65WwBM1BtiexSGjvz9G6edNQvhScbHhGjP8kJNrxMixZDxHaGntGRywkrLAWh",
  "key33": "7PvSjocmbDouCrpizzp2x2g54XsCD29Bb8TNWuN4vKg5nHVqTMJhscR3T9UuEiUZzgyFKBb3k2FNkNJYCWT5DGs",
  "key34": "XaQrKUKSQfE9FuFQimqBX4wwigyD1Ah16ZcbTcdQprusBZZdRfRvt4RvniBpnWLSkytp7wwuG1N2Prjjh92EJyJ",
  "key35": "24cuyrw8hhsrgKuWLfQfHyFgi93aGFmjAuL3qM1wQpGkUeH9WbEc1oJ4LyVUKAnogZZP1q5x5Y5ryrKmhaDLV4eK",
  "key36": "2b92V8ijyjaSQKzuspkgNbDJGW6mQr4dT9ru5SgFXRNMZULc4wBmyjD8U5nrVpbXb9Dhy5T9xAPmyMZbSXn6sefQ",
  "key37": "4mhPCAyQk4zJt4LAATTZhVeaV7Pfzgf4df7NAwpdLjSyAMbPoFpKu5h721RDS2H3dVoVa9tTgy8Hb7PHCVEUiLqh",
  "key38": "2oBcrjXoVkMrxzfpp94oZ9j3xT4o9fmVoSgshd7eRCU5W5hRDj2mYGZKp7CHTnP6RDvTXFwQRT31jVSvuxm3k9vr",
  "key39": "391t2RPjrUTGAsNmRBTrLBJAW72ZT3Ygwq5JqpPY9Cc9C3fGMHWYW5ZSu4ekZaiG3Qj32AYjVr2e7ArYTwSaVJPM",
  "key40": "4HCVsKtvsyUQ3D8CvyUWYntxAVPH3Nt6VLXgBs6MWPHHJZ3Q1B8rsmF6xB38t2e2kz6TQF3tVdUVLVEabrFnjuz8",
  "key41": "3GyPeWUhBv8fa6R8PybY1CxhfpY2wRv8EqrW3LFjPX6EJ36wvjHysh5qYJk42S8BAdNK1StvZs8vA8xJEGzJgT9A",
  "key42": "3mVAPbi3Nq4jdRetwmHccX1bGZNcWXP5eEYCv2XStSvkGkfNZYR7StGnxBHfgr1rvFNkjQTGrmoVRw9PAKaE9k5D",
  "key43": "4qyiYRestXH2r1P9pbLVx6yPoVKZdeXsv2Q8cX9JNbCti6rV5cwhAmPeyCL5BuS85rGWhTUEPbuW7w9ajRrV2cKc",
  "key44": "4C296bX8M84cMYXaDdXy2hxJCDmFnSKXprNbiGvyLsybWMJ1FHAQ3R1GrEvPcYpxdhGB6AVAeDTCyeSWuZNnSWfi"
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
