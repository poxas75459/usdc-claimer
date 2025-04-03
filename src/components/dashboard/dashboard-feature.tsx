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
    "4t11sRauL8e82Fm16e9EmnC2VCzCzsxPKG8eQ2sZj3Zyj7CKTT21aV4My5WLKsfkg2H2Ri2x1DNdjHqQ85bxFVdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VFbGqb6kk5tyBgL3UbtHrDxeHGELAsqgFnTChZbZBqiJTDgVsk8tDmraGNwLrPAc4i11PcSKQKJgnXfGhJh35EG",
  "key1": "3jo6h5amUkHvUSkr1C9EhaDGXKRzCw16dTT47vbDQ93SjqbyF69ncagHgJyfyB1U2tQE1Hm9g8Cv5tVAXhPNJBfJ",
  "key2": "22qLCFoNzQ7dkdHvsCF12mFZFcugce1tQoknnSNJubdtEFZwRA6kefGd3dS9gndmHcjqeRNFT5ozamN1gS7akwTc",
  "key3": "5Wbw4BM33gpc39wwFu4d2AnWm6bHp13yJVE4xxoQDUozGnA8qaFJ8Wy9gVFb7yNAUfWnBiGJzQmNYWEBj5RzS85e",
  "key4": "5WgP67RavPpbEMrQNxmB9Kzs8VzaU2Wp65tKRMcVELV19QixfBCAjrmbT86t7YyJ2Xa7sS3PgXNfBpftfW3pmC19",
  "key5": "5eJyryASREWLP9BzBysaMzXobPua83TfzeLctZQedUEQ2ne7jGcMyeeamGqnGwDnMrTCNqXmyY61cxw1moLqxGjq",
  "key6": "4p8dG8SM2WpMjSe2X3WBdMdRZtn4KRq2wURUF79WPAmyd9NEWq6EkEQgR1YsQrr85JF7qw4aHrrSCdZ8KM7Csxdm",
  "key7": "28NPePmujzZivvcQgw5oQn9bvV94JZeAbgPCfnrigRdvEbcTA6uKt8xMP5LWotGQpMqgM7HbQMe5HLoxkARjoMMy",
  "key8": "2uno4uXfFsZ8a5hH754RtMjgQ22gvCdii2AfJPyq37UF8oRs1v4G8a8jstmLuGsRnxzPTcYeeVcftQyVUdmPRHSF",
  "key9": "4sVrPyRuQta2K7XyXASu8FxyFD3C53SrjzLHBd12fdzxLmminUh42a6WXM1UCsB38iSCLxRyWLDMgFBj1Krtufk",
  "key10": "129PyZVCmRi32QTYABJq2CrkJnGyVmQ5rvA8Mb9mfRdPNHTjwnFsi54XUn62bV9JV4aDyYJLjHeMHG6mZBMwyQ3E",
  "key11": "3tTJ4hcQCebHbeft1PZ5wcQS8k3HxAUVbwiayi9qwTWVVxaew31SeYnH6gE21DwExd1RqEnVwsJ4ddhGPgur1GrB",
  "key12": "2hRwdE8ZwoHsPQqgQa9okYCMnUMJ1nCBbsmWNn6EvkSmZRezME2HwUxR2y6fN8nV5b1b6uktDogd642B2cx7NB3",
  "key13": "3DMbQooqhUdoBDKa9ksx9BcoS2jR4gdvv8goo8e1JuzBso2J87CjTNBQSTwymsrJ6MS9Pso7wXT238reEmskjMEa",
  "key14": "5fRhudZjJ98zu7mroDWCY6sPy6pQKBEYJfhJa1mKHVNcpv5Rtq85cHc56cHBaWDY5BBviEQhh7ibWiCHcPqv72qD",
  "key15": "4kxEhVJB3V9tpmBHWQuEmATxVkdFB2GRyud1K9skiCNgCXSkaECjfr8LkKEkovDRJaV7b3Gne1JhhNs9o61RCc5c",
  "key16": "ddcKGckERz8butPeEmSEtVtu9g2uj7BEGAJbvfu5iNaH6DRcfnwpF7nKvxVHeRzfN2AWcqh3WsMQx5joSVMXA8b",
  "key17": "4cAXJk9bHg9cBwCbHxHATx4hjG84LYSkVbR2NyxTxiQSy5aqBtZ9MVYDjEZSMQryo3XRj7QrQZw7AQNZdvgEKzsn",
  "key18": "26Nu3bkzcf2bcnMo8JK8o7PDYKdaRYfGVfMm9tAwDpwjyM4sTq2T9XVxAjaLCAxNGD8m2FfCCGy6dTEQankrFa1F",
  "key19": "Qq8VvqfvNSqfj25FthQSzzPde85APjv4MyskTF8dQucFEgTjQM9U9SgBVKAXFfAE5Bddnh9tD73i6n4ZyeooGEo",
  "key20": "2Wv8AfnqaWLzCbRHJ5uvDtbpScUDAkukCQ1HY1g9kAQVCYnpMCAcRcRpANBv5FUX3M9Fc6tqCkCBv1U84WPwJnnU",
  "key21": "4WiU97U83uzAaZuXw2hUhrWUgVxxsnmZavQPNqDsPNozmex6yS5D5kxzjEHbeqZhwSb8EqYTV85SszxFPNWZ5QL8",
  "key22": "66i3HC91M1aNSNfRkAitTB7gPxgN6EYcGRMSbEJYLsGZZcsDHuDkxGRPzuUDKQmLzaWq3uRR7LVB2FZ5cEe4EhjL",
  "key23": "8n8bH33U2STiXmSsNedY6RfP1m9c8aRsoszuEgvNiBCCLca5im2wqrGJiYJKim6FKpAtBZSMJChoC2R9fvbiHqW",
  "key24": "57CFmZJMrVRhFMNDTo56dFFMbpPsaJhtNZ3EzPydShiGUYWeDYfGbY1q4z4ZuPf22NuffpWtNscBctaxxMf3HY8u",
  "key25": "DiSjTSkSH3dX9rrMsC4eivUcjL265U1DvviBdEe7Z2AHbd551qcqCVuHGoQDWKge1rfRBwvqCY8rmdneD6BuZq9",
  "key26": "2TGhGAAbmQcTHtJhkwUYmuTp1cazEVjzrkDLfZczssbEnUticLz1nYCd1uL5bya153JFARQT9SKL2iSWxGPLEJ4y",
  "key27": "4uA618U2S8hU5bJGe14NGbGaTDguACV5FEDY12TxQg4Z1cDq688HP1CbdRkFxe5sT334EydmnPz5EUApx1wjhr5g",
  "key28": "2W9XZDQAmvwTwMBC3buUKz1v2oFXxJsJ5G9UuFUGpK25ye3DrmwiTfrDEsjwU9DNw2KWNAET3hbeUzBcZYJSKAn3",
  "key29": "8MXNt9q3mowf1NZ9iR6jw5chCc6bqyo54zWDkEYWTBNhHaCh9sYBfxHQPTpjMDU23KcMkPMkMF4mtqjQVGt9h7b",
  "key30": "3RvaMPbYXUfaDCFsuvgbBmHrhoiJ4kFbvVPZD44v6eyPAdKa2Fi7oxL27LGncJWWJZxicGzXiHeuZuSgAyX7w6TM",
  "key31": "3NkmR9nvtyU8uGDLqECrumCoFpYxsfXGNrHuyhtVdNMfhwma9j3TKsJKnzCTnPgMscSdENZbWjhKji2oKdYZXgPz",
  "key32": "3ig7JTEeUDVFRiyHBenLMfQmVxLc4332bKRaSH9vL1qFoPpaztEgxvD4sExoFxfdMi3c7Mo15YcsKbhwekkyNN3M",
  "key33": "4cnHhHwuhnsh5zKSKEZbaT87hSKJyEjKe5LiCL5gdjtotiK4rP3x2b56ko9mYPRxsP9xW4AwHYoogAjhyHWZfkgM",
  "key34": "5sfraWLEH6LxgJURDcuiPwqxwLapTPMGEE7ajpRPFsaKMpLsMFXEpPGmLhFh51XVby6ZLRs7hSTSLwfVMLacp9Rt",
  "key35": "ay7vWco4Lnrtxztpr8b6iSVVFNP3gWAv26isp7NHTNuGt1UExifXhb69i1ACTkqk8CXsXmVT5ufErC9yAN4dXq1",
  "key36": "22Wbg6vH9rv2Rja5E6yDLni3C9ERtC76BL2bL9RrWBtpHXrDAmovwPTDWy5jTsksvLhuWAPMJnybpqN5yTkXg9YG",
  "key37": "5hu6bkymf8p9itaq3Ye83ifD1gg6DTW3Fr9KWwc9Ni8zYF328UseaNKAj3h5MPwtjLvJnhnUhdkWyWQUEkfEMNqd",
  "key38": "49Dehj5S1VBT4MRSd11ydJ3XbrqxQmMjBszS5fvPaJau6PczTGw6o1f1TYqqvD3LieAXKCc5TxjRh7KfRATxobNW",
  "key39": "5qiiNtDGMBMYCCKmhMLj7gtFG1ZKVdMUzNhuaDitNGg7SmNHUVkZoKuYq2xzgLy8waj5Zmb5fyVSi1oYSpyRscGX",
  "key40": "58rZNf4LSBz5EtSXkLX6dmhG73RuqcTnu5xng1LS2yrtqertU8HaepnoKZ9y9Ms22nqRT1L6w7Ti3ihzs1aYxtgx",
  "key41": "21MPh7JhZydB7LzhjKRHr4ATjYdSTYJQXs1Uywu1GfX8GcdAGrUdjbMxAvECz5CuBi2EjS8ssBnK761zW56S7KZC",
  "key42": "4uZb2yCLGYeV5NinjPTnE75NzwXZVrmHsPmbZdL1Se2iaEDxkupxdd7PqVRhgdoR3gAumaxazB7DgXPTc1cktd7M",
  "key43": "2eN8ALo3orvFJwJJyYSQy3Z7ZJxkRbHnqRaEauoHZvjMAQh4oPQahmw8Fsv1xCN2o6n5s4bqianDRMvXrJ6QpzWD",
  "key44": "4cCZcHqmBZhN2243Qbu737njcG9Y2Arah9HVBU7KaNMBoe5ygetnmsEaZLJUNBCfygVSWFRY8WsWkNaA85JYo5KS",
  "key45": "qQ8XNaX1ALGDaA1B5UwesaAHTBU7MsMh3cPXCj7s1r6cTzTxyFMeRtRgPyC8tDRe1NcAGUvT9KR8y1pSaVjYxwX",
  "key46": "AuVwufTVtrh863yjV5HNTA72sPXhsxWGYAT6P5tzpoYj15aURGKXQcv5Zbpb48aHZ8DmN9CFtnNLVV587SDHYrS"
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
