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
    "XR6a8zTY8QJ1CBY6SpUz9UQ7Dj56YvYJoXcosyNJuZwuaxKmHzCB9RET4HJgkjcJq7ZPxJtTkHFiSVJ5ne3i8Ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42enQHmPvvZbpCj9a5SvqGu9Pzovkqd9bmBExJWVPEuBQbXUDQsnQ9ZcRztmL88aciSTyf8JP9vJgbfJmvm7jQpG",
  "key1": "5U8MZAWP7AqxbKYqPYZPq52s7jBavW4EWAcyD8JaP2epGVdVvyrKqbZMeJA3qr8YxZnPans2BrALjZUf2oDanT4g",
  "key2": "4bePivnAPUpW2azrHtHwaKonGuSsyN2peUYGVzyYgkrAqR84KmXbcGGgFDr78BSFVDzGiQZhpSMn1dMvHQFJkqfc",
  "key3": "2f5dYkCyAG3uNd9PDUH8kxrTfhXN7baCftkeN61JwhzgS7nSgyxX7rLDCeGmaUaGrKZBeDX7bN5xN78sihUoZxT3",
  "key4": "2QSgLRrzByBZh29DcMDuAYQnS1EApEHhQg5aBvZQJL1DBZBAcsQxm1ty6AVQ8wS6e27Ed5Yjd93AXuG9YMVhno1j",
  "key5": "ERC7ca6P9W8AXN1iVKLLYpEF5V2A4JpwG3Q3eQmeK5Ab1LGMSyVJspW7Xvr7g1Uq8tHgq4RC3JJHNzLQ6iLavRJ",
  "key6": "4MYy3jLHtEoFK8VvzaMwPkHC7UsVA8efyzmwUuYR6aSNXBtAw3oBgSQCrtF9XhejhGqvv3jaGRbrPyY9m9RjJfLg",
  "key7": "5M3i9YkG4MqCcSff9qedcMN4kfKChPGfPL2L2QQYdYNvkzzvxpZSxvN728uroxtTSFmu3wnX1X9wFqX9Kw8hFAu6",
  "key8": "5xKJLvMR61qa9HYfr2TQhEzDxauHFib6AH2iW5JBzTLpuUV5DXQXj9H8TDVqdyEcDY6RQnPasaC9vQW9R6b8VsfP",
  "key9": "5HnFvHg3FVjhTzmt21iowDtmsFdw5LbWMaci7vmTyH62UGF43Eg4iwscmccZ1ApUosbmXRcxfGu9KkQSQy9qY9nj",
  "key10": "5ZD6U4yqt5v8RqeSP6PDZVxrE4DfW1ocbx17DDGcBcndEz49HYAnWuRM7b85VTCWTk3Y9GjwviUec3wtwKQThvb7",
  "key11": "2BNPHoxMk98ZHnmWir6G2g1wc21Q16s9w6b8BMWgRi6mPdMYqDmr1Qv55hERLTi2mPBEaqiQvrtVUdy14sA649BB",
  "key12": "63R9oDEjPDNS5SprrtZyTZXB36WAaRYUtEhJT4VbxzQ4oqbhA1QUt7u8jj9idUDGxqdqCzXbN4mQ1ECow1YW6GtY",
  "key13": "57oSrCgMdw5QezJ84na2Qdi5KzU3KjmgEBbyvvHsNpwzLPgfcWDGECxU5wABU15KkhwWmUWb3QfFwv91MyRPZNcy",
  "key14": "25KLFWFs9X6A9Yxo2BaJMS7V4qcmM2rzBapQ3H5uXBynJkogBTtPauG5giAkiRSrBVX2s7XZntCgmFUUSA164wPT",
  "key15": "3MQJ4pSK4JYAwhB9TwKh2p17JrPBcVHpjtEg61GgHv6zh6LKRfWt7TCS5yH2gNgkMr91cnXpv5JpEWYD8tKkJtyz",
  "key16": "124ZwdFfFie5kezpSobB1WsXHkJ8fZp7FErVUqR4CXgBkgztAV6QLrCS7y8paEA3AbucRhYYT9Y7yMztL4ivge6T",
  "key17": "c2ovREQPSMFFhW3s6fUqNGmbHxTSSWPotRgB11jiCVQwFkrrGvqS68ZmSwJVLqQMsqwBRRzXShaoBaffpbe2Y1j",
  "key18": "4c1fTkVWmikjn3ALwpoRntXsxrSVk989P3PgLKnrcTLwJNFY6cf4H3gxYoCtC222dFRJYY75PRctGNqUcdz7nC4j",
  "key19": "yhHUD5H79iWAR7EajnwHib4jJCJWunwrXwppw6kU1eeydr3rSUHETjb3fmibwACXfTHdz6LrtHyU655Ko4mCUR9",
  "key20": "5558g52SrYR2xW1beSHKtjMNqZEns1vD1mWBCKwWDNVRSvMw8wSEbgQ7z6qBQLJt9HH7e4sziybj4bV5AYE9tKcF",
  "key21": "3xiVHbgUgLQGKdmAntZqatNwYAPqSu2vUcv4JpN5fEE177gtsHpW3tip41SmvGDmHXZJr14w9mKrpN1Tiq9QC8TE",
  "key22": "5XbT5oBCeSmvh1n9iKu8G4DQavAzEs1ubojfRAudny5Ck5wvcKuXhnPvLpgYWsdX34FvFPkX4oWmNdx8qt5geRbm",
  "key23": "2LdtYE9ApsUBncLzJknMacKhjQVx1X7JoXg4BPCcx5YuxbSXhiPjujmgmWiV5SFACGq4CAjc2FGJcKnJqiPh9MSJ",
  "key24": "EeSimHLzBdKFD1NmbAR3KWQ5QEmoHLpdeB1UNEuzBT3jWzvma5hvCMp9nAQEiXUh2YEhDHKWBDNGafxCkET4eus",
  "key25": "5cjctkLoA7GbVTJCgNyfXBmfBkSyBgAgkWDbYSHpWEULZAznz5keJaUCXZ2fKj2AvWyPW56jHCyF3DRcWTNukMt4",
  "key26": "34VK3Gx9XfkZUxr1Sfm1oozSFmFsCNYkeGCDm6VVhZj78Ddisn9FcxcGVdU81NgagrMWVRUEC9Tt9VYrbfrzPHES",
  "key27": "3gJjHzbUAJ4WjHZEQjXfwy4QVCvjdbKx5EcWTvRaowLApBxLjkMBghX6uohkC9vqE5arBMn2fhMAsk2LUSC1vLKu",
  "key28": "3WKFCZ9AMeASUFFHZrBBmfeGnScfDnwGCcgGRULYatj2Ym8G3PijqcPYs9WfcBezjMJ6kC1fBpvrNpsu6YfE2Msp",
  "key29": "5eAGghk5bJBaZDrjmf9UGdKMtzfMCWvr6A2AEY2N8QqJRXL85B9Wfmsq8fFzscetqL65QuQZveKJ2igi6A58FAQr",
  "key30": "2DPbU3oK48qsGMbwhEbGqHHgJ7P5XqTpSvtn3P2GyU857CEPR2kDtaUhMaX9bKCLBYDGrJqMtuhN5QLps4J1GaKv",
  "key31": "37qYGZBrgSqcD3fsaEdcM2azhuj6A9ijpA3VrvcNrRNvda4NWVJN1ee3f4HCAKqyv62twtDEgBwZMFK6LSyJ7fHS",
  "key32": "47k5yJy1Ycpog3edHUJkkuANhpjfvpWCn3wiLCavgG2f9yFuPsqh4MxwbbAWrbRYffa2hig5cwmL3tw9cwe2GRTY",
  "key33": "454KoPwB2F4Piuz84ZYwJxBx9YUZt48RjPCK4wmQhfKGpowMrRHRC7ahnebUMDuXJ5hsU6Xg7aBwfsf7Dghpm3Ni",
  "key34": "2hsczzHTxTC8VgCwS3bJZxweFvX288mxYcyDNp24jAyS1xGDXeViLHDN7BdMpqPGMSfTRc3CqhyGxeXfUF2Ukujm",
  "key35": "5D8iXR8fekXfkGmTeJRWYyFXRexhkQ19rFwN2fE9JEoKAdvqmTEk4MyPVypahEp7LjYVkwnvhULpT7zkce6fUD4f",
  "key36": "5fuP3an4RkPTP2UjqdUHTFADSCkt3qWAfJkW7svNBzew4XJUXA7ieMW4WNVQnihbBHAMHDuWWpEgeMyeSzEvq8eD",
  "key37": "22qo4nefTNCAgjN1NiM3M2ReFKJ7fTHairUQ2p9bRtzaFAJ4N8SVyVN1KZQLVGU8kouSW4fA5ZfodvvczY9JMCBX",
  "key38": "2obZYSDSgCpL9s1NLxXEUpNdnACwEoaowJVoVbbtQnEnVAe9aRhefM3a4jhPSrdYh5KQ4aS2f7pD1sNNRiZ7atic",
  "key39": "49fsJfxzUjmgktkv6mYHpXKWWdw8dGdeGJXvuMP8BqpZ2DTMx8PhoSH1ZvYED6bq4XRLSguPQPMrV2eYys2Ahn2t",
  "key40": "5uPa9NVoKCKKoZVNqNx3ECXTKzayY2j7qAP3ZwJ91fhULBfyZFKHnJ4Lu3Yn39Fj3jRWrb8RwVgEU8a7CMPh3v6X",
  "key41": "3PUWKyzYq51dR61knak6sK6h14aFNjGpsZdDFXQcm4wKoSgn3SquHyYLYyDbnFDoV7Q5GAMBYBCmxMMa4r1CB5xw"
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
