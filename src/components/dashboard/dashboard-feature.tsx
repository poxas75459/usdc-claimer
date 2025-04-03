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
    "26t8Mha3njHdWW48Bo6Yoeg4BBKVzuKnKjphJEbXcZZ7RaevTTsxm4xzayr2ChqjwP5dBJU1cKNgYRudDd5N4LBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1Hsprk1ogGDLbsA22zeiyLRZ1JzGSvtqRyFw6nnt7htysEtrVu35GN63C6Jjh9AExgTjnxxnPP7A7q4abNAJ77",
  "key1": "jxF8sKcdi7Lu7qpth9YRzFUDD1jNiAZDi5JPyTWeFGstyGFH4Gv4r3jvt9siEvPJUF3JdkVhbX1DcaaQkCN3QUC",
  "key2": "3SsyHsAu2vXYtg3SrqG37siaugpNsWbwuHmsrPQTZRN5vN7R9r9wibGLkAeJkcs36MgfZY5Fecfr2WB4xKdhRNiG",
  "key3": "5mRSNoN322NK9pRvhNQWaejs1ssAg8WFJapa9PzCcubnGMHV6ULBvc7ekTqEg37CPbkm85yYWQmgiT7U4uAPS6oW",
  "key4": "32YaDVb7oDzmP474AJ3u2ZAfPDXze1j4Pm4zuDfFmkKUD1PjK7VxoGJ75pUWqhQvKUwG8sqMZuxsbSVqiSJYscFS",
  "key5": "2NFyqT9wB42sFMRUnaTMGQ16Bgti79tAEuKnegjTim4v3RgFyqJc6d1K7JhWtp6RiP5o8QZfBLxtfZXPsXxZXDzh",
  "key6": "37bYRgzEpj2U7ZVWvt9FjVm1zdqcjY2hZ25LZCgspSKQPG6XJmrVAMsi8uiF8PQyQTyCaRM3FP6PuBeurLH2iGZK",
  "key7": "3hHSM8hsTQwmyBJSs9cbL1Tn6XMEEuB5HGBSEsLgpWnqeUTK7Hod4RM44jaCqfqoRgcKYy2ni4RUqQrTY578BfPt",
  "key8": "5bL5qWQExCc3xS26cJ5E5UcBqZyJEF5aAhK64mEUbr9PDejKJmMbwQnFnvYethDsLLwZCzpyeXMTqYVq8sCjweA3",
  "key9": "3M7MNWKyRdBTsoe4y1geBcbCGdn3seEtJc3uyJ2qRq7VNjKRRq6kMgahj8UfEbp8LTEeLueTP9h469fTKn3SktMa",
  "key10": "5kZ1i9RJqj6c42Z9ncuAvgXH4Hxn5hVtXZfjNtXr4xJD6cLueaiSYNHvCfx1HUFkPj1LEWS9NG7Kb87eaaPbT66d",
  "key11": "G342Dc9b1hbYC9srQEwrgazCDymzbJ9p8mhHHJoVEKQdbwfAMbtLMYdJcfXFYajnw6kNej2SPQHjfUjyukAMEWM",
  "key12": "TB71Q8uNTanke5ea12J3GAUHXscuKjtLNLR2XB7aHeMHbZNik8wDNuozZSM5T1oZCtCtdMLyRdvUD1q63DeXgV9",
  "key13": "5WZc6nMvKSf9AebErRaHQUG9ewaHjQMbE2PMEywm8gSs4Zwk4Z3Jos2yJLmY6q9KkCyaY7T9nWyrV1cbjENCH7wT",
  "key14": "9vqP47p72nT7J5i5g1aJgU4EQ1e4Fi7MErwZDou5NU8tZeoMKY5W4zGy23pmeK7vxQJYUfS5CtETNtKsDqrbnsx",
  "key15": "jBndhbSbhXERbDWNgJJsUymLGkdD4XAbr4AFzaahTopZ3JKJc5PQ1ujRfpjUHPcRQohQz8JBVaGT5JugP1Yf2xq",
  "key16": "hSrnLKcKdoUYCenokNTJhAFJetuH7GEo6noVKuKXxazaTRb15dDqzT3BvkafsmgjwPtZkSo4CTbheAVQF76TKxy",
  "key17": "4Zxd91jkVyN2nuuRsyvBHatVxRaU68L8K44neTxqmmrfc4fSzvwGVvD7TQaDmAa3FWYiUFJoB5FyuLGGRoh3yQ5g",
  "key18": "3AFZ26rxjLzEBuveAhdz4A3KFrNHhPkwVya6ExKjQJdE5CBvcS5Sj2CERRLMDWiAEstAW3S8TcfYLganw3PLYdn7",
  "key19": "4itiADCSmzyUxZTGk1zg5hifoH4Ko9rnH4aTTTqbhgHiFEcowFGo1xyVAu98q9B79okodWYddrb77BR1V1HubXMr",
  "key20": "5hWtdYqCWcSGXHwcYXCac5F7zbwvoKMXExUQNg21bsQSAzPKBf6Z7CLLTuBrZpBTtF92MLJwgzZtftfyrHyUd6St",
  "key21": "pQtGgLb19wcAiaAi9pXivPvg8tP8hG3qsAsy6TQB7nbnwmrUY1r5qYt1BnsqXEGRf2nZ4AGoSdSUdhw1viaYR1N",
  "key22": "42hZKY9EYZHt3NNr3sR1a52x7iEuMZQF2YNtwqi3kXAtjrTJwt6sZFtiRPtTi7ZD3VYJuWi46p8Bz1wqXopn9q5z",
  "key23": "5H5k7obKN4YY5hav89hKMPwwAEM2Um9vtL6RRSf6KrLAvpGpDVvKz4joGuQ2KN7SnFF5pJngMWnvLojp7qUpEVA2",
  "key24": "RdHjvUAWQj7LAFVRLmDTHXfLL2xJUQbRC8fHoWfnJvzYLsFcXQyQuuWRSkh5Jxeu6Rd944RYJfQBUGQHTcrnh8N",
  "key25": "2dEmo3aB3QBw2t9t61QbJo6cWY1taRHmiRFLjbiC1hUnhbMfsH1raUh47VPMZH2oZUX8bfntDmiu8PusmkGfg8P1",
  "key26": "5vCCDgiRJRQKAtyjA8N82GzryLrRQDVVhSBZC5gjN2NPSKBVUBcMvXJr65GdCN51fZDf8Lx5qe4ERmN3TefkNcrr",
  "key27": "3WKpEeXMkXoQmaEaLzfMNNTPc84FXrLFf5i4NvtDBnyXLajUpo3mntgHZXfTDjiSinDeHAEbcvxvmqCsdVLjKFrP",
  "key28": "55zUZNXnUWh7Tv2SvNmv59LbV3C443DdEPj14F3kfX2w6mSmnSqamMc5TDLomcQLrLgZZm6d6gF93X32RsRB5dvK",
  "key29": "65TVdzynTeE3rUk2SoAcsDLe4tphDHxJuv8j1vq2DR99mch5Xpfp6F9P36UaPkftH7KvcgAQNULqmnct6r93zxiu",
  "key30": "2WUVRyZf2EutLmRVhUERezbcQEx6MYhkjq8NdovjcRKUAmvB8y9G4gDa1hFkPpPovugR7RdN9RrrA6UXgdUazz5k",
  "key31": "3o5DDAcpcGoa8wPwZAegE4NqdpM9ZRAhZuoDLCxnFEpHeWLXGfx2KBfjpAQXRJzpR6sQsEwtNdHeKqsBXEgRdZdi"
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
