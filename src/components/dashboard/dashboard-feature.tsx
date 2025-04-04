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
    "3FEwVvr93HzJRUFxo8XF6yKokFRp4j9aSLpUo2HyGsxRARKP1SxgPDV7ow5CvTMXDGCei3H53PTXddnjxupNebN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U9ghjHtyZAdUWMpbvEZB7LWucm6jxSMT2mSsfpv5CYo4zU7KGgjWL55VMr61DziB32TyT8SB2D864QxQbbrFwwV",
  "key1": "65KU5s564PAooxoSac7HBoY5FtLNpgy2mCNfgXrkmr38W7pXHbpKPahynYEEViabaiGPhc7Tu6tacQ7wRCppB7qr",
  "key2": "TRrv9DPsew2MzWzun8zgPhUFHooxmU6bqYoh1fRTusUdy2YkeD6AMefzkbhBP28pXPqjbDmYDLqSJWv5Xnwpjft",
  "key3": "3nQF9eS5LWvUxP7rGm2fiuTnsbXXAULc2PdYreHhXbNE96Zj3zhgciUj8d42Fgexvvm7m4nNQr3a2P6pEvDpQEPg",
  "key4": "4T5E9h6f9YDebW5ZCsZb9rrNsHkJghRjy8LDXgBrvkBVAsEAJ4SzZK9tfhuHnzakowHRQEHNW2N3GutvnyWWVTDf",
  "key5": "L4ZDbzzPWFmAmT4fVaU2vwF74ZynGzanVZ5Wp1QMcogLAfgAM232imJCzFs2xRLUGne7rhudGyrWXJYzp2Wo4Jw",
  "key6": "2pHbn9XukpRMv6LjMtsgnoU6y4XST78Ra4VQFiBMGngcdeToJdCPn29Bfoe9dymskfJCwtrvHSbi4k1MLvuP9SVD",
  "key7": "TTxTLv9pXnWto93horS4WxnZECZ8jFtYsUP9njWUbfL5ZsVmjBpRkDPmXcm5ikCNbuQ7koSZrrsriFDksdCRBJG",
  "key8": "34asUCvogkQhqQBNns3GbwPKGaSxfKUWKDuZf5d9LTiVDh9GqWHkTdLPScYtyWEkKEsvfNz6mcZWTUQJYQaTfKxT",
  "key9": "5DoULSQ1Pv6PtSCoJWCfqPWMREcKq8ReK5nYCMzKW2WSnwiYzSX5H4d8BoWayNqFPn4m4RU6SpYjQzcb8Fp3TUWT",
  "key10": "58YeME21bcruoXGUtZfvzdKbcUuGeekkapizWAR5XCzNRtzcCVWpYnWhKMTex3tj1KU8d6poXqFvC9RA7qyjHrZa",
  "key11": "5GBwjrbQ3mawi6BhGe7KYdrGH7nrDN6N47fVsxuVNbqJjgaCLYcCSgEWy7KHL6GVQPmCxwCaPmtaoGr5G1WmRRTV",
  "key12": "41VeuSVrpYRwf5nhtLYEd7YXMnVgmtVY8hDZ6TTnVRZ1JwohkqbRHBMjqazh1kL5ZVDs61b7XDYMEYcrGz5hjYak",
  "key13": "2BDQmZBSCccWEoAJnQedU34TR6xzgGLi7yHfTk9nhKewZwbCkjShhur7JXbLJeaJu3USvpoY7pPurJgQWW6JhppK",
  "key14": "wPGhcdEuMyvMLGMoAKaCVsizVJBDNkNSzfmN5tjfczy3gSJky9vfTF6tYUFcZf2NfpwNLCzivc87eMtT3Z6QJDW",
  "key15": "yMXuhnEuBAQMqkok5fMAQ8ZAQeopuEU39CtEmQoH4RvmVubk431VkbCMw7DeLFVmLw6Z8phe9wErs4TdoLjusCY",
  "key16": "4NTUWuT1q5Xv17iRS7kZkBmk3xUxNhNJ3gVpWZDsTqmjL9Q5mguWi9k4wNjo1H59wkTbhBgs3uuxYLDG9XBYQCgM",
  "key17": "4M6EmNBJdPnpLjXQDyhLe4hMGndUWmNEYGdSZxfu29AdsiqkwhWaBj3fuGumWLH6rxRwL71HRSgcRxJukDZPGWwH",
  "key18": "2AiBhTxxG2GJecH42PecRbDQNNR8U3reYaGyGRdZbLXssQMFdkxqrRm5DjPcd2YXRXSasNxSWDLftY7ZdfB36cv9",
  "key19": "2w9Er43tvhnTAFLHH7njiDTjS4jiSSwJ1tg1mVUsDSTqcuggerH8NvDQMuqLr5kPYFPf3BFareEyAJDiD1PfmbzU",
  "key20": "426ynQF2CyJYqwkvVaJdbGSXutF3XYFRJvqfGua34hrYzmbkSx3ktt291DWohj6bxRsYw9nWi82GB8NxuYqHrAdV",
  "key21": "nChfsWy9xHmbjusYXdPAUd9KZdXc34kCKidUD5VFykQjLjk6eUXHBM1RMVBDv93Ju1iMdJCsYhnvh7djh771QK3",
  "key22": "25wroaGVNXPndbVsHGtFcoJpjspGhTX3xaLMFMjcVXRuWiAnECmVBGbReqMN6uwu1DkyBJNCZHaEUWHd4HZBNUGw",
  "key23": "2j92X7jU4tsZKFbw2pZkbDonUxV87SKYEiKtHpa6KxhXt6nKd77oQ3oqiTrmHqo2Y6ra1FvHft7VP29xjTn2pu4E",
  "key24": "4dxKUeyA1ekH16g9Hz2ckgM4LJPZrLHX4Cke15PHz8XApUL73wWADXzDksRgDJuhpThgkMxva8W11bZF8iE22Dqo",
  "key25": "5s6jqj9AEycYt87iHouHSWmsq2pjiaHSuZAWMUGsR9W8v7YFKhoZvWFtzdGtL61t4CtM2hMdnXJAUm4tkN851NcG",
  "key26": "46jX5GXdf2i2rLA5NXMBMfSFcHqkVi6XDC2BBH9sHfRWLTtr6jtipXq4CrfFZLgXRbmsz6cknnpdb26bcKW9L669",
  "key27": "3k4yB1FEermEDXUmPETpaCKDUfQJkeQNmBupHDo4XA24SyLUU3ErxwNxXQqzciVNj7UZeJPj3q2KnFpTy1EVn8Qo",
  "key28": "5X9HMq5hcexku9JzPdAXwo8THZfL4ZovUebmmuzDHVt9vTEwebvGie1VanP8BuLVxPN438FUzq6Sm2A2fJcogaaj",
  "key29": "3LU7rcbrJ7BFtWkXJTmxiqJVS9GAKkUSzhaz39yjMHdyA6dNbQeLy2Rd9PFvqSbNTctprwtMuixmrfJyDTEsKUaf",
  "key30": "2UnFqWYbKizGtQ45DmrBPbbzAWao517ah3BQS1tPocBnDwepnPsWca5UEBvGUgSQTkeqcCwz6y2FwKeTwWhk45uE",
  "key31": "4AkU7DcrvxFN8Xisk7D9xFUA4eJJJNv14Z4RPqFq2ej9Cd5vLcSgvW6yieQzupV5SfYaVvUr13fRKCNnTAf8yrDr",
  "key32": "5c9sYBjYV28mwpaj2hxCop6mdfaV8aaVbWXVkDrGAF6mKJrFxcSuKeweARFmRQi8MUWNAckf8wJgg4jVgAaomXzh",
  "key33": "NG3PPaFnyQdbrcQdYZMHpV6GdM1QZjrWDhCu9FVp2o2V2bzNna3STYzPUFTnjgYxHadbmAkiAH3ckwPuNSzryBz",
  "key34": "46KzEZJ532xrkxJ3cKveHaKgJSQ72YhkW425rY6a9RQbf2ZAWB35nmam7TZsXyuSXmBDUM3fiNidZUcW8eS9q1bE",
  "key35": "33un3Fqak6uzo2qwHdWcDJhFBBaUaHsCXaa4pPrpyQFP3S2yjjGm9dCYiuAoFRVjbBkbDUPsZVy4K9CYWKhqf4Hh",
  "key36": "4AgGh2NgLwCwVG2nUVWFZ16HXtpATvyJofhbTUnP9rxTdn1Hgp9DrwKeENgf1Fy8EiM7UJwwaYsgmCXotjVBdrvK",
  "key37": "63QR2J74dqUrDNMpTYNuCGH3hfbfufJArhmkckCfuwXBNvFu2XHvR3ASBd5iju2oNbjxwmVB3p4bUp6t6vLQ7eq6",
  "key38": "2yGpzK4BEvGC9h8u5gFqpiM2a3nup4zHXi9YR5n4YeRXbptmdLufvwdpSxXJwD6KHK9RzTYLiQXALW5Fb63WZMtX",
  "key39": "4KsraAYkobuw7AGB1YGVpjb8bcACipXJYY3naXMFqrjvzE2xHXMLp3JBGn7p2X1BG31yc3rjUq16FYJT4duXoqpx",
  "key40": "4yvMCZXNz8eFs7NQpjukd8Se6kE2HQFRS5atUjCsakhc3c7yA5bv6Lq8zvzknTe26rcug9bfQU7cxePRZnXys79Z",
  "key41": "55VFU5f1fULMF5mfiVUQop9oNHuchp32nL4wmUZS7kYK6iKfdLUuyuNPCPcH9Qxre38h8JTjwtmcQSdeGfVWByLV",
  "key42": "3nivzGkM6gKjdA6WQcAiV89hohUetiwGaGs6YLPyQCoEVArBguto2qBTq7t4ynd7i8ZQqmRxiVM2mg1uFdnhGbxK",
  "key43": "4TnBrESryTevrkVgcLaiweu9rchknY21gi6iA5N7CXt4ao1ncpWjdRjtExNoHLKsU1NX5Ebax3HMfWD7NBqmscym",
  "key44": "2ru3qz6VJE85znR8j3jB16Pq1kg9jtcsnHfKGT6pzCZUVeVipnai687iWJnN1xGDrPU5iRPfi3aMD4u3Yq6Ghxh7",
  "key45": "5AicHKuFTzCsthzuuegTpP9ozXrDwcZ72SR9CNAhG7F2ftnwttZfmKjjKDFHPWRZFJujShH3Px19vNoPMuUKSAua",
  "key46": "2k3Ntxneip9Jy9Bxhk6h9P4Q9wq24QCwBwMnWd3CVwjazqtKAZJ6aHQjumoSKbRkrNa9x11mYc1f7WRad8PUcB2j",
  "key47": "5DkjZYshccXHMXgLRDTN4f2BRQbTp3ESNKDMW45N2x1h4ybXTgkzhrZNJjqQhi9M9wD8XU2fW6oB8pWzSfJnAuo2"
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
