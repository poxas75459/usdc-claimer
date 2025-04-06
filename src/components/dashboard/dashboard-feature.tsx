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
    "2bGCYHLXC5gJNh32MDqfdqc9nyCQTyTJmpYZbx9WhDeBTgXaiiNsSDTCW1hSvqVb3AkyvYfWruzKneqgCaS4gYoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RSaYDyX9ZviB765cDYN7mhmu63M4wHtFzpEmupYVisUxERYvvutXRyWevcve191697S3AviRt3nug39Q6PbKr7S",
  "key1": "5bMKUqfLTSbRNcFReeC6GnFWuXnckBsiTKuGmPtvzJ6985sLnUHq4w9HffV8LMHpAM3mfAs96gertTfumMhdURfR",
  "key2": "T6EEBs7Js6dLMn5GVAo8tXhb7h2BdzVEZMb2XjnofjeoUaknP1o974ZgSgzpANTbTM5v1iHcx55vF2KpuyNxhCZ",
  "key3": "3MuXDPEAxRuUe9MXMixxey4m5exCtqkzqNCrtQXJH4MGLB6Jgqe3DXeD4Nk8EHm9ufftGVRg41kxXUwe9ycU2bfL",
  "key4": "2Dxa2JhnJbPvKaFwVBtbdwaEE2tPo6ZR6QhfKvErtRpWS8qS3t84E42Gjiw7Na2jGWWQy2xRb7vS6gJRUhT8wfKn",
  "key5": "3PsXhS9dL2MyBw3krUNDeGhwZ7Asv71EwUCq23CrvRXG3DHe6RFNWSRs85V1xA11ytgfd3JFDp2o3sB6Dj9WrfJ5",
  "key6": "3449W22Afb789A7JtXjEaMkRGWMtRCmTETtVsePtb4LZXSbJnB5AsFTe9P6koW7qgGvjvsyAh6eDm5N8vYKPxwQs",
  "key7": "4dUEwZwfepTnRzU1NyFy79aw4ReuvLXcKeMfUCtMgnbj2kXofYqvPcJM3VafHK8wR3QvW9nrC5uMFVEq7c6ASLGW",
  "key8": "51H3ayTajvLyFAnPLMwAPv34FJCpMY52GNdZLjgWCpHDLbtJiHhVXHmx1ad9dsJyzFzW7Bt5G1ri9Hz2yG2Jf8Qu",
  "key9": "4rvRLNeHid4ecJLqfAbe2GCXb1KV4txrK73h4HpngBiNKpyH95irAfeXZbv61vnFaTDWPipwxyX9dMqESsZ5DZ5P",
  "key10": "5eps7Eo963ENrNf94GEFjWXUkjv3fLEn2TTPyYRXBMtZtgtmzXXMZ2rk64kHrEamoe7VbLE49S2vwBynwGyGohgR",
  "key11": "4Euv45SpdrWzPjZgrZBBtmEC7BFYEjfz9snQi4xEyQMqeFyy9FDbtL1rdMj4EHLp9Pp2z1Pwq6X8GUYcMFiioMAg",
  "key12": "5K8fF1v6ZjuyNtvk581XZRsDHHp11hNk4rQAfPNSDiMX5p8ktWPVzoPWwzCHkoaJJazVyBN6tY5yWZi2QHemDMaV",
  "key13": "2uAfgN1J1BxYXmCQ5CHeHbzBY1GFPnvSnbKyGoihxex4RzadKBSLhu9TgPLptsXJsczNpHjfnxLG3j7kyeLNrWYd",
  "key14": "5aZpZADto5eYRPDGaZAoRGDhg18j9N1rmnYk67vKpDnBgec49NZQmnvsMUJ1oCvnP49sCdU89oppfH8oiLCMUpYv",
  "key15": "tMBFuzQFLTFDGtfgQHnb2fb7QtCXf7kL9KCUsJJXLV1eYyaVTXZg4cVaDHfv6PSL1C5Y7hNB4gy9Bbh4CUfm1KZ",
  "key16": "3HWUrGXYqUvvyi7YHTWMTqjmNFj7unNL1Qa675eSQk22Y7Ng44yQnLYRpwZ2WhjHwNXWdwDEGXJR81gKjqcDMcY9",
  "key17": "3Gh6VMS2WyUeAamXS8TD5v45F2PqWJZdm4gPaeYoC82vThnqopHWsFaD8fd42M1sRNAhKrtpj6Ag9Lw63ETKDTE7",
  "key18": "xJawegaLZ7ZBLrS8cx6tfiUEehW7u6WmQRj9Y7Gj6d1yDHQUPTZZwgVt6SeHKoKQfDeYgZgtEGnrXXPPxmfAonm",
  "key19": "5VVNhUVSS9zb2ZNSHZQpPs34MqyiTsWQStvLUgzMhRtgt1WqLyoXbUd6f4PpEC6Pww2Kb9eJh7jRsCmmFFp4mtQP",
  "key20": "5VHGKd3eKvDMfVV6GXziDpbkxrSurkt8JbbJhJEQ3HJteuJEU9Ai3u5LHDXPqgCRtPH6pkU5LG4m1D43e8jSWFcn",
  "key21": "5o7YZg8UoGdEcBxn5bLyLasFwg7Ewxaa4gEvMVHMq9mo97tynxLRwAVk9WyJKKv1pUe64stmM4Wqw1xRh3gwSos3",
  "key22": "hVptod9sA5Q2bKjDUiKpMy5NJVaHJU4S3rPExy5emd48LvwAFP3fXTrxL89GHowexJHyuKpV45L9stzmRps6SDt",
  "key23": "3X7tbLuEbUWEUKngngNHbQu9c2ifNnGrWJm84GaQFwDGVgLhfTCWP8hHLGpM63esMpVBGsBYjAQVMMK79m6NveLA",
  "key24": "5SS8FhkFEe3xhqoKQe4dEbrszDKhK21j5P2rMpg6y1kddGDJxStnLN9dp6LNyEZqAwpZLzbnfqrHLtci8FJRmBvm",
  "key25": "35gU7XbcTRVNdtCZZ96kspKrh1Ew1X1rNvsmVekMt3L3SQXbLCTvKvNzBWzE89SLNwMvbzFV8QFEsF7k3hjxoVAK",
  "key26": "4FFqyh4xehRHVxyeqVV32WyidwECweNyd1mU7qQrfvn3dGg4LvHYTXY4iGWqCYGxAnV6ZX8BjkNsrWhfqJrHLep7",
  "key27": "3tJn4aZoNozSfKcR9jqdL5rhvppBaVFnNSvmXACaXKrwpch9HaoUxyYU75V5Ni9KRFgqPXTdtsyY45YM8cvEYKyS",
  "key28": "3pbiEezcc7kqZ7XAFL9SGMqfLii2iBvDS13kFRfDdq2TFgJFXHgEuT8FxbUyRxdH2GmEwrCorwiePeQ1sstgndGE",
  "key29": "3uEEExVE5yoxD81p1JC4XLE6x6v1JEakGM3Pepzzw9Bi18E6YhuGg1sxknJwFvuk8HkwLwVJk3xeoQcuW4YmCae2",
  "key30": "58h8Any23Xa8ZtLx83ySYR2iD4DPRCDNRUsxyma3PeV36pE49HJnRsn9mAuPZKjggUQA9ZKch3DynamBD1rX3ZyS",
  "key31": "3zuAtv8kB4z7b6fHL3oVjeyrtBiAAateYdnTy5TxS2QXJp3DWYtuSMto1kzBVHH8MZYyFMNqmVZ4EvtJGK7xniPY"
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
