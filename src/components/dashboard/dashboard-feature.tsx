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
    "4tKDsg2tqLnE1HXnytKqMihKE4H4vT6x6PDynDamNxxjgpeY1KwvDFu5sVJtKSsjAF6hppErRb8XirenXGU4HGJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BLmabSLBLiDv96oedZzFe7KrPdkyTUxUkcMjiyUdWBYtbPmE3xcX9G3GzSJ26bCx4M7ZFQF5cW455UqiGrMu4K7",
  "key1": "3WAVQuVDnk2yxUjB2R2RcxuyJF5q2gWkpGFWBVbVHfNkmNihMf2R84fhvrwNmN1smCStUTkk5jYGnFpj63Y1JCmP",
  "key2": "27mdqrhbwphq38mzpLLj6ANX5hSbRnEQ5rSdFgurS4XAkwYjbBNUWdFeWVd6LDnXmczjKcVdCbnVJk1SobfEqUoM",
  "key3": "wiRDN7NbogVVi4zBCCYBMd3txqK4pXak8QC7t3nRy986SRkhVULSY2FvxQrd4pzLSf9KFWBHtGFXbZFveyqhzXA",
  "key4": "2qPq36Y9StB2EAUH57n2EoT7anRovyv4BA2eEnj9QarBaxoNsFqKXDNZtoy5dxX6A9NvoEgxveY81Ea65tYmhWb9",
  "key5": "8ujsxkDavcot2WbNrkJtwiBViDBmvXt41MsDgGUPNxSN7rvxB8wAQoYQtzKUY67tvtekV2MCY6uyAZw9w6qSP26",
  "key6": "Pch4WzaSHJKTkRiCRZHa9MkZSmQogManMJoiV6EBbgAtrxLDstcXUKHgDPXb7STAwqXwHmVQAya1HVnFZcsME4E",
  "key7": "48roGNVcfga9qoEaQW1Fshay2md49GucWm9BBLK9NT9Y5P4DpHyAEokJB3nb3rqjK2JutAfBH35fVYiHhPmktfhS",
  "key8": "51RKzWB7SKT1sFExd4RzZ7BoL6xNexV7gjVesf5pUCSu98WuYfP8vFWnSk2tfkiJHzjJ5XDAUvuMdaHbNNkE2ZNF",
  "key9": "5CBtGKsBwHg6saRiwnKpL6JVD4kcMNYQa4RSEDGu9hjcEYVTwYVKJBy2gjkJv35HEtLDpZRaJdCw22PmzQkTV4XM",
  "key10": "5GnDsjkty8PdTEfDUGX43mjAhBbKte1FDxTTzVidR5shmiWvuQcRZd7owTFqGrnUX1TQucbkuA8yhtBUaaUsoXV7",
  "key11": "GRJXeGMRMUCaWYmQSs1wdgetT5ERUFryJcG6ZFc7Fme9C6HzXPsCrNr3w4chcFnFVPTXxivUVkBSzoPUnJ5bHcC",
  "key12": "2sJ6s5aY2iiaHFPCSL1qy6g1U8wuenvkbyTR3YDPwbwyi8R4D14TTEpBbzeweZvjyn1x4FpWCZSDj4uuqokyaQ9c",
  "key13": "4xEhu3PAm6qsit89772ekUSgH8959vyxVdCisYAvnpZA2FvHWJjazHYxmQVHGnEpGnAcwzvCQoFQHMx4gsAfQskH",
  "key14": "saxRBPNWYHk3MqQnGAFdMwcgyDF2LT3XtKqwS5bjHcsKEiUvETPDjKedX43nJnfXxhgdWhuwjLVWeQE7d9teBrA",
  "key15": "54262CZCFCZn39Fmw4gi27ZbZgaQSNwBia1PeCi915D9Y4xjoRRrJeGWBa3n9paK38ujjf6BWgbWZPhapUwtgKtn",
  "key16": "5kiuL9D18Zop483jYyYLSD75Bb6M9GmUg6pUgiEpZpdqAmLK8jbPjV8bH2xdJVyDTWcmwZEmh9fUrQS9bzCxJcsi",
  "key17": "253iad4z1GHuAy267cVgTLRR1oErwj1vmk12UK5oHzpnE2xibzFMHrgyjuthP8aCuZDNE1yUqoGeieEFUKhbMQJK",
  "key18": "3yf9cy7xN1LB6suMaafbQXfeuEpvfjJ2UxAkCUbhUXGSZbqpXxUqQ2EeeUdKgyiP9woD5yBnGNiY1uQyUU6Se1Fs",
  "key19": "Enec358Ac4TnMahBV5QD9LN6pzMD5yUgJMi2JLcD8HsEP8RD5mhs5MQjVYvWHZ6jwDE83VBb74cUzaSJVy63KxN",
  "key20": "PAPt6FC6zDsZeUENpLZqCHyQmY8j2yVUi9NDVgLG9jFzJUZYXHDS8U4sGqEbigjhSqWdN6Hd9dF7siLNJGu6Bmw",
  "key21": "3JnbDdRVCgdNGB9N9Pu77y1dmJmkZhRcr4ZkNv8e38CZGKbBK7wDyUnhV8XJPTjRgFx2S4UtKp8v7xSbAUMQvEj8",
  "key22": "xmmonPme9MadzFJ8HDu4fmJpsesLMprp4vTUu87UGkhVV3v6bBWQF7XwFsPdj8bFbPzUyDg54mpBKYDmW4Wnqux",
  "key23": "4frEKQ58bNaiDYGAEQxBVYFpTBdF7js6Vm9RcCq9mfkrH1GPS6sLVLWmQ2Q2njKQ3EfuHzM2vPyy7wkKG1Wvjugw",
  "key24": "526mPvJcUGbxgLEYPqnQpTdjvUEo4Kb5iTaFhDCxVtWYzFFcm1ZdkeKkurT3eZLyfFYeczFdrz5nHMNF36JbzZb9",
  "key25": "27ntZKkD2CyBQp9gtDeu4wxVuD1ReWdXfEaYcWa9kayXGxNr9SqMSD711B55hTd9CW6LJhc5t32HPRp9yayVhHKc",
  "key26": "UQ84p3kVcVkauQniGNwSBmUpHuZd2GDYUZT3YhBjtk3YYxj8nSJp8wXEo9Y4a7mKgdJSdfp1R1sJSR11rhjA6Nj",
  "key27": "3Q1jmkMsKCgfCa5fD476HBpLaBk4D9JHXM5AdNZxS5bVCkV9drbpmMd5FpEE5yhEM2ZY6x4GgScpAGRSSoqQ17q3",
  "key28": "2kNq1DpHDxsJz5eZo59uiEeSpNuUqESYgni5b5EUdG84KzQV23chgE2Ho49VM3czSsyh72hJJwApQCSTzuYvjCJH",
  "key29": "4X7URmKHJJPudnFCMJBLTUaJLGFKuXMnsLM1J3mhfbf77nkr2FmKPLNdEA5tPjPJEKgGNCXGyjamHbr3JrLvv8T3",
  "key30": "2rkpRdFMJFYuT7YCDZ2zYo7MeqQKQsaUzxRmXcKVjXWrgApS7eHDviCQXXgGL5Q1x1YhrsFXaBiAyT7hg7Y81ngr",
  "key31": "2XB8WuaEmPfQ5R7Q8FPRNRTLEzc2dUgVf7mxM4f97iGCDnBAehZd8bS1XmB92sTR5zhXFksR8NHccxpVbevHv7tJ",
  "key32": "5pGnvAx9DwbbbMR6eGwX38e1Qqu21DF1V1w8XmZBFWBbGDVrDovNyJCRju1vd8bFBR5p14hJxwUYEfBEHs9dMqpW",
  "key33": "hR7JES2RSZ2cdKwUJnSSzXYBnFapwqUT75gCrcPip2jQy8ugjoVE3AmZSUb4X8UKc8AucEZJaqy9oddhAqB6nBM",
  "key34": "5NS8giKLvRp29CUVM54ZkTuK7S64qb3AsxUYNFhKenUCf4z8g9nL45SRggoPuwVg4sSytwNHdfwdJx9wjBz72y73",
  "key35": "4C9P3t8Kreme79AZMAxAmLTT7YXpCkSrcGia61SnxUwRowsKkuioJrfTQ78ddJfvzPi8SHTNvw7eMc6vzMUNDmc9"
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
