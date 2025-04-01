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
    "3f1CW1BypjjqVzKu6oNKYeyW2iQxKvyr94VDQboq2RG15dRqKRWCTLkS3XoQ9jizMqUdfYZaRwnn6oi2rCSuzW4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dMzXVegrJhzerjKUHz3fEcnArdAZnfk58Xvf3znBudVEFzhpF4oGbBTRcctkLB9YLJ8efr3B6f1kerf1d86jKvx",
  "key1": "kzjYMh4Pa4cBjYediujwgUxC57EAGaEWdRepZBqGPL2xXxXz1X4FJreQDArHAbJc3LGLUUQ36oHwmedbj5RFhY6",
  "key2": "4r7f2aZrmf4ecuUmQTmzz1bWZDruQcyv56joPPtGTiapUt1jUU59J6Cu4L9p3CWuhduwVYQcma2naheYK38W7jZS",
  "key3": "5E5TcYPVCG3wPPfjiAL2VUuebfHMGVQQJxoNinxnDnnC2T1LFbhJ2QsqNtJMdzR59hUaysLf7Qcqc95rzgvWWv9X",
  "key4": "ULLagwVtGBBkb8XbcfWxyV4YGnZ3GgkPAvTdcVcpw76mtej5MZDwqQQNNQAqmzGemo4fM1Njh5mfuHZbdQWjFMY",
  "key5": "7UCKyGsPd9mbDGjMiKnWHMjaCLBGq3ce1QdXWi8QrPjjfdMpJLgAiMFxzkA8txcGcAcYRno1mVGAnYKMXjiR7HZ",
  "key6": "5BeQmKJ2eYfG3vNsfHaRn1YH6QgMBDjfCXZHnyrgy3A2ke8GhVcMi9wh2zQCgiFQdHgAneMBUVMfqz6SvimJpg3U",
  "key7": "PigLviSKqhTGrzpQMsxDb8taH7QZ3g2LHTiENmR19jE6fS9ZhFgKtcpZRM3fD31394q7JWg2xRLjxajXqyQaYLo",
  "key8": "3uV3jioDELfnuf5dE7ZoSXsKUjJBbhonEPSWavAAGFJwxQrBVMLifDNMT8o6xrvz8fmNtosuYnLbzyg5Y9YfmBu3",
  "key9": "5NgMn9q526iEkqSx351vvgjMKXy1sE9J2XbVwX5n8YViNc7ufp5oeNS8BmoSzB2NF9DX7Nymn3BA2SaEHqpKdLmY",
  "key10": "2q97irHBT1jd1hgewFxFmh3zH28Cr1ejFxQ7uWpympBGWc6ULAnPTS9D8piUVqzpP939XBw3gPwbcucCqb35eXzf",
  "key11": "5qjG41WmZ1A3ooQ7GT1xoUUBDQHY5o41sR9nXYUHmwHDrmxMRYsdhKQRUNzvQVnB5wX5YrXss4ZeANKn4KwBCr11",
  "key12": "3E9SjdZ8uQNUnvPRRnXxVmqpDZSBokax1cCyUa1zg5L6aeVdcmpFFS8jYDcoJHhDdXfsKzLyJK4RuTDRhUsctHk9",
  "key13": "37Bj6Jgbe5u4saLCQeCUtAvDa8xbjmcvSaZv6UYMNCBxf5pKmBQ2Ww5VJr5Br1UbU8YbBfQMAzoKwnceF6zrW7W8",
  "key14": "3bvMVdvjLaujCuHcac5kFWK2MN3Z1YyLSuXHwG6fKjPagVcVrsV3CKgMc4Ewocx6jouZsGFhJeyazLjMwqP2kCgh",
  "key15": "2wVmgw5R2u1RjJPAR81sfaZN5mncFC77RQfzAbLanVkSfCuAKQm73oFSnPARTBfEFTLFfKX4ReycFKziyVkmiHus",
  "key16": "66S4qhGB5kVXjkHKkDjTHr345hnTNaNE7uPZFpK7Bi3xn11e1chnHn2625mP8H8uUTyAbFnGHCJHWTCGqDzmXvyK",
  "key17": "dno2wCCzCiqJDDxf9ZK4Sns7J6iHqWzVVsCN9Q5t54TWXLAes3g1xLpZR1uqpTkY1cmMwdchf6gRWMjFp4j15Uw",
  "key18": "3LgYbaH8p1QE6G8cGSmNR1uhHFKEYnGEr8gVES9BrqGSZ5xEQAtwd79ApEYeUzMESpXDJ61AXr6gPRJyjE65ED2W",
  "key19": "3dQGrUiGmB6K6duVAEoq17zZmKmDREvcqCa2sy3woEvLHmQu727MKd2yPE2tavEDNm8StToARStgC53WpatV6Gga",
  "key20": "3FhLvUaUFQtsNPUm8UFMTKE6pRWv7vzdsDviJJRSPLzoerGUnpaHCkbL3fohDBpyVqrE29to37w2u4FSAJdG6GtY",
  "key21": "2f8LhzWfhZxpxrqHkRGJzbfrZcw6BxewJL1FkiPcAQzoAsEzDa9dpbMSVH9zLYiV9N9cagvr4v9kX9wkX6L5hyAH",
  "key22": "4xGbKYyidz8fVAsYeJ9XJyGMvZcsBfK98BxV651s8JxQjds83x5KeYkri24ZDbgUrQyfbyCmMekPkNZdXTDWqswo",
  "key23": "4oMooThv1puj49fD7J2PUgPDJoy9APHfZ1jNE3YPALAP2sWTLBirCZa7jNGtprdg2m9hXozoVHmgw6SDS5cubdp5",
  "key24": "4vK5kUo4VLfF96XEUvywhP2rSTwXxErgeq8GBdhvqR9DEQ9TkrosvEagyc1mW6xXxi7U13trAgTbF947VLM1fPBJ",
  "key25": "5wNb5tgSB7yqtdL5qNre3PiFYDrDoDMh6yN7uTUuEzY2QuRmXTuVrEyBmP54VvQdAmwrjudAz7ARLGDbb29hEYU6",
  "key26": "32tmZ8vTKVdjbkDzRK3LDvaph3f7P3R2gJYQxHNN2Kr4jqDV5zRXgzctDVd1ih64b3DhT3xVQfSytAsmH6tn1Pdh",
  "key27": "4PBnURNfUyX9Xm7rKrHCmWdTJQckzvUXAMw8Fbb25WcbMNPgvT9nkyPsjiSHumTcMXvs9WwjD2UG3NmkiSvwzYK7",
  "key28": "53qTbokUcGdTpZxvfJqVy9srgG9D79WDQcFtv5V3RdzW9kHhWBMowPG34SEYdLFqzRLHoSHJujE3wFZsYT7DhojK",
  "key29": "5cxxD9pmvrFvxkvcUZuzSBdufb3gh5VEm4KKpXXXfL2qdLo1TPHxYVjchowBqFu7yJARx9PvYFTiGaJLWWbpUkL2",
  "key30": "4d38Q3hF9RR3JU1tvEsUccrcARNfJ814HBNsYgHbrHjqnPVZtwC4SNUxuV69b3DdhcCkCoemmVV5HogCXMEMxmbX",
  "key31": "4P57w5GRNQoab3axSrXMXkrjwi7A7q93xoD8bYRK4uRfCP2G9FLGBGtLPaij1drfN44S4ZXaq7xjAvDBK4UvjkKC",
  "key32": "26efXeCwJuMYdsyNwPcnnoSVCEp1MRWpuwn4vyDekrvc5CtHnVHBH855ozjpcRhNooFHvAu9VJMogCHgyNLRRrUe",
  "key33": "5CNWo9YiET6hMAh8K5992MsMkrmSRJz28C7H5Vm6Cyo7pMsJJDcrd13dPCiyVBrGCv9FLvE8xsCMCuPNDjmwefmX",
  "key34": "3xk4ur1meeeTxhieLCre1fFxRSryesgtWYmKUNo61KXwvEWNsDSVVPzQZxcebz8WfGpCh9J1WuzEJpZ4nPJakNsv",
  "key35": "4bUGNDsYMt2tocmrj9QACm9ZDQtskD3WoUeW9e8aS7qCqfzhAemWqBmiPUUk7QqW7HY7xzdnLx4rzznzmQjos6G3",
  "key36": "WmQykbdyqPqWCCA2HqvbA2vQGSdHXqWoPRXzmUTKT1LUzwPK2SVncwaKTeKj2UCUzRdskMC6FEcGAC3L9qHEFs8",
  "key37": "5upnzuvez484AYorpdVyKW2DwgQXBHSiLMhCYkxAwY8FZ9of5GrBkZzvUMHkTLUH8ttaihc1tenwVQszYFbJCyb9"
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
