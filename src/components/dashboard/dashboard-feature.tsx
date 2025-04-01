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
    "27kMLTEuU6FCCuozEsXZ5QGEvAdhxLGYYm4yhXks2ieAN7fyY3X8cZA2u8xB8mAUpEwchM3P3abpPneKXcEsCr3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SDMwqfvNyxkSf6AL47i3aS4A72Bb2LN1ZDoNubzzjfuNsrXsu8GegeEuyGLQT45c1X7pBD9r23JwJXMfBM3WJz5",
  "key1": "zVxDrizVBVEbZYApfZrg4b2X14Uq8nzeK5DtxfVUpHK8mmNU8A4koW8FfxZh5svsVeqnHRPuWstEAhQqhLA4ezg",
  "key2": "5xnC1pmu941VWdti9TmGZgx9dSDRQ3zknMEcHhJR2FPPn9askLGhxpP3r5pM7rGhEtWQ69MYPhf6215BWRParDJA",
  "key3": "36cPP8xEachzisosmHYBoF2jFMv1vrFsVa2CR8wxKVAnBju6qENuPLzRWHV7ER19nsNVgPkS1DuYociPiiJ9ciVV",
  "key4": "2xLArnbGUrDRramMHNMJyvnoWdNMHPhBSjnBjpGPZXiao2o8mBttB7o7LeHvxsu9jqHKXGcZZhEtAb91AE6BW2dK",
  "key5": "To8ay6nNshdbjipLwvK88Haj3GnzLih2kif887iNwnhJwE1rL3b7qLnM28dB818LN6JJHH93aUNURwNinT61bah",
  "key6": "5AJKECq8YAExhXceqDP7q954UCLcJJNLrBqmzn55Er5sfnPTkuB2u4y2x8BPwbLwmRKzMyiwVB6hvWLuxWhuuMXj",
  "key7": "xe6knAiCZCnXyVbDLCmN3kTJDVyRZC5mCvFKf8aBBrjr4bAY9kHyUxmkP78oan865ceYRLgcddULwniWEC7f9F3",
  "key8": "zg3s1kpiFuNdN6bHDaTTe94ipRgwgqN7Y7b9565TZfXPkvgeaJ3RUS9fmCabMPCtCWjt73H6893hpnEH32udyKw",
  "key9": "3sxQguxhqAzRDn1Y9wNmpLPYevAhaoaZdGPMdYVK5TXLDFxotZrJMsxxABNBT45unYgL1k1NUiFQKFZ3MSG7bxp4",
  "key10": "3Ft8MCQnScfgj8R4Byu2SXqhzCSys4DhVafNzNut271i8aVRxCkfUWwWEmAe3VC5hE7b3Pwo7XojPt2dGizm38ov",
  "key11": "n7jEgjAaxCWgaiKuPWseEcL3994HzkXeK6DjAjDbW4BHeVZCY1tZ89SbcTykV1SZWsGcvpLBhiXsbdH92AAKDjQ",
  "key12": "4TY4dL4Vuz9N3fHu6RWkzTvfxqXJJqu6jj4CYHRiffePmLAgfrJ9MLqQocm8r1SXJtBkKYPwiU3hbmwCVcEcbMFe",
  "key13": "5XQHd8NAPv3ZBKgawsLQS4qzpMKwZD1V7UkxvHRtw4qB2tFCSfcCiNEGgLaUkS6cF4mdkqjnzMY1M9EeP4pS5o8d",
  "key14": "Jrft7quRWrp5Rf253MSSqoeyrTZSM9giSwjyfdfogPbBah19jqvStUhvEMCBjcfz4sa3qR1A4gfgmnAf59G14Hd",
  "key15": "2gQ7otJAceqoiN1cFG2RNZJJvVJjpg7AqUAxtQK5awRqAY3JefQxqceRivArdxYYQrGfjXLgFdMVqrYbZktgipzj",
  "key16": "4ww1ECMJQQ8RDiGx5yTuBuDpyRNKAVQE4T3HDYFwU21vayJUEYZGGA8bog3nVeFTwSFoHLkiMeG3Ei6duuMCkcnj",
  "key17": "2bVjzqwCLUszEmBX3j4VZAjEuBst26t7664JF4gTDMohQSb98y35FqJo36KrCTq7xLKSFNgy2W9FidWGim3Nu9ag",
  "key18": "CZysHv7sG4p5V1k7fKQtdZtwG5AZ6dVCcWVTtZpoSgz2eJmRaG6yB7ZQfecvWMAcEru69HLW4133FD1N8mrkvPc",
  "key19": "4ocjcKaDbTjP21domkmv2DTNUfvM4yvbQnU9tBiP3GfCPX6wQYpv3tosxnEKmd8fLY3m2KP7UnTNUXDDEhfEd1es",
  "key20": "H3w47DwckUauVrLoEsUnPzkWbPMtqbhpb6PSHKZvVn1943BndZKi8ALNKsu3fjmV5FA3gMreEewtZWYpeFd8Ho9",
  "key21": "5eSCfk5C2ZfwmkztGRU5TjcUppvqnpQubzwYBo1hyiHnhZiRgwTxDssqzN4yruGzjzRrW2hqgQiJNncE5s9ejoiz",
  "key22": "583hCb4ySPsTYUrqobr13wJYGM3ddg1Hbxz3MSRozWhdbwW5UfNbAvmbesCJw7QUJcF4BUYuSAQqNaB292D1xybJ",
  "key23": "5f67DC1qW2u34A45s4UzADgHNGradnyj8DvCzfkjyfnBCMySTvLVh3saHDjnqWwTeMYY15qz1eJAp2JVfkUeDX6E",
  "key24": "3J3cneGGfa73JYr2fZSy3W6WTTesFkPw4kht5MEFGwRKsFUjWceXtWbv96BS9PiZznwPUJmhFtGSbbmrKSFuehWe",
  "key25": "39yjCGBwbmfCgpqsFQ4uTGsiYK1SKejeujCL8nZ79NczPriVKvTXAEwsaiVup52iuD8oz9akY3XVjeo9b79nFpsJ",
  "key26": "3uJsDVaEiSpxH3bAXqL6vFh7Ekw3dUhkDf1M2upZDsGTaSXcbPGmxmMp7sDAKD7UbHf46cXFq1DXMvLgNDGUuSna",
  "key27": "3V3xWxCN5V1sRaPHMPzeys2mgtfoWweNTFwbxX739xwfNAc6ABq6v5RWskwkPuEdsenQTYz3du65dEftY1WuFTtT",
  "key28": "2ERYRUoUd95SEufQZwLK3QuBC53U2TPDaZoK7r8CFYKJkUdq8qVGhWJmi5N3thE1dSvL93a2PN7QmJXkngxHGXBH",
  "key29": "5hFHMur6vpd8p3DJBtpLFies9S3ek4xp2wecyY9g4GMz7x8T4mUURYbTnreQH5QhGQfpCGyrc3yDTNMxPPGK2t57",
  "key30": "S2pNff3swPuuw8VvzRXKjHg3jh5Dcw6PrNUvWuExhSR4ozgm8mDShgUT8reHyEYTcxeFVsgFippFZPXMv5ZNdPN",
  "key31": "55WkW38eE7BLuJPCsXyQKPm2VjzuQ6Quv9pUTJintdiSTMecthh6T4Tgkg7kfSFR8ZaqsYvXLsEK7ipan42tnRp3",
  "key32": "5xMiSKVRgTQC5415WwSAEP8BTN5Jx8No92w1UULR9fQekCXv3wRjcopXGPqJRCKL6pRZu3RmYpArKkQCMWK3DDbU",
  "key33": "25DqxBqsj9bX9gmiwF7PenSAHNEFVbfcD9H9nmzQR7sZqegtiF69hnfLHWDZA7ddJNRZdbziKrh6gjs3Y334WpJu",
  "key34": "3Bi2o5KH9ZRRRsXhd9jZh4P8Xx8MJ2ud7ZNMmMiGjgEL1J5ZSiodLWdbH9CAMsKVd4NgrnKZRKtSJuqj1HiKw8xr",
  "key35": "3Q5zsYeqm7RXHdCKUajqXnwuvtkkBHjAodqCbZ7y5JiHYHTfYL3Ynk7UiPHWFt4jSFjkPe8uDLhQeHMFiomY9azC",
  "key36": "B5ztu5YogzmvQ8VSrmkmeRVUrQYFa9VJ9mVGvnZUuVJacnoTcVNaMu3arY1uSbVHZHZ2TAevmJPMf73Er8QsCp5",
  "key37": "vpk3Yvwhy6yVkXpCwLSas1Wk8gBwT353DmLnKNpkrnJwKV5st2ryLsjs7eFSinxXRZ93tzaqdQRS6FAvVBgGTFT",
  "key38": "2HiQ2EKdEMb5cnXYacLvNVrVg7dBN3kpAYAzD5v36EunSojhT12NKGA9fppAr8RT4bp1MQC3d6AxaBVbNCJriPsV",
  "key39": "2ib6tVAoGmsK1BP2udbmwteDfN71a1FdRoQRVnZTob2tJUnvX67Yye5PiWREHofwmA8CDDBYnfm24CkPv2FFiTbZ"
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
