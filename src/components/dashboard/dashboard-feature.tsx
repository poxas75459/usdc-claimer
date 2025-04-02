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
    "5Ae4rQcnZanAqxK5fpuze4QusLbzAxmo4CkQh1pzU2T43DgEPRj8j6wkydAHaTaUxSzV2qzu7PwT4zbEe1kXt5oJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B3zshAWc1YRMywX63LizukJPQsRACeHUpD2d1eY6JVxu9V9z2j2b4nWySzf5M2TDUZLWZWrUPYuQ3zoZamb76is",
  "key1": "4ERiXZuhJNuTSCme6cJgNjVVbwsVUZGCyLvXiVyMSwJiGKu7ew5mEqhtCGpyigMxLzeNpk79JKQc655fETGdnxqv",
  "key2": "4B1NDD7N9XU6KuEGQcxe6uuxmmeRAoH9msDr9oCUPotwHFsJvGZPbdaUCEnQNy8CzZCAGnfQmn3aumF1oLycyNTJ",
  "key3": "3WEBh61v8xRFMUWvJ4PgmHuTwpRBEmMbxLkNaTDPMuEsVn4eQJMypFEixvEgQxqRuCUx67vRGqeFHBPMoVk5yoDd",
  "key4": "nvbuwCrVy5ytdSBPDUQ8osBL1XUoMzodtbJTvpuqkZXfdAXJesTDvimfT6dXRWsPUDadD8CZNkgUBmDNnuM6g68",
  "key5": "4ChAVWfZ2229TcJD6guyzDrLdDGxr1FtSPBXwpPhQN6PtsubZ8CWdyjAj7AWaJEvt8cP6PvBS4FqNfGEi7i8TeC4",
  "key6": "44ie2eyYaartoJtdbwUeD2zuC42vPJw6prrTvHCmXmZNafJ4hw6zaxcWPXDy1NM6ukqx81kR8HcVKW5HwxZBpxy7",
  "key7": "5nfmQyynbCCLCAeukWW6d9AxMW9k8gNrfRaGnb5e1atABUJDGoYFBuRho6otRdSV5LMn9rghbVyGcFFnz53kJuKB",
  "key8": "2uGoRmcEbSBPSFkv4cPKSN2L1ed9UCd9454RgjgzdjWG2z47aEXXwrwrMtRkW8AyfiKR4WuR4DfoiSpRtMA1ipKP",
  "key9": "2wQUnHrymDAAq6HdnNTvex5sVfUfCWW1DwMteoWz4xhRJUaBaoUPS5ZGG9ZXgN1e8qQoym8Mr89tVgho2ki6mtDx",
  "key10": "3hfBAkUFXh9xGc47aKfTxZmkjf48FTppgPV29oHHNJAtnThr2CXXDSQXxCDk793aApZUwTiM129AS6W1ebiCqv7p",
  "key11": "4hHZQWdAQYRLew1AtgJ4onx1zcpXDFhhsixqjNKtpPEcK7eeRoyKSqGcxVZZKrsiaEaSKTotncW75DnRJF4XQdw1",
  "key12": "43C1wCjCvqJMXvN5S8dVhD5Caq1au9FpnM4GefDBDtsCg7z4h7iphCcLPZdcWW4jr24qtyFWSuC4PZXtPv4afxTZ",
  "key13": "3ErXF8pHexTy8riztjpzrd2sRXPHgjYT872DKsjo3jBeEGbT3pM6KKZUbT6Ff6zviGkkaks1jnKJtVMNH4EQF6YL",
  "key14": "2NCi7T1Rm3rwibCHhK6m9arDZz7zZsrH7984BasuiaWRybLoHhkQ9TKBX7d1EHKrTpEQTnKUxpWADo32wWGckRgt",
  "key15": "SmnK44xm2jFdr1YjjSwHx4DW2svdNnKDKT2ZqL2hZDUH4Go4i1apxLKRFqjiznSxWumQRBML6fRSKf3jFmuqVhj",
  "key16": "2ozjZ6G9EJWVQ2SN7YcmgzZKHTy2iu4rgRHrHXjri8TGa3z9QjKFEJtJ3gjQouVv9p5u9pQ5LqnhvFQhTnM3m5qw",
  "key17": "243GsZFUG3s7DMeBUuJZZo9JTyuNa3h3PbFJn3y4gnpFeQ8J8EKaTuXYsJ2d64rT9Mw64yMJfSxawbPMdZbvSvSV",
  "key18": "4rKhX6EG4KdCuaQ2NubXrA3HNiZC6P19Lp9m2hp6yH2SEFgT3VSFMprrY32NAgUsJ8PphVrh9CxNXVcvPfz3XWRd",
  "key19": "KKMMDcHcvXUSEhYvnZA5HNxMCUs1uVwKKvg5rNnuKiKLYrZnYcN1bEGgbdzd4i9tGVRQnHyYyYg3rd53bVqET6s",
  "key20": "4qbPwPRDBYE66186PfGYyHr3yNU2VJSUoBLkY43E8AWiC7FiuXLsMm1y58S7D28TsFvA2nbCquNZ1Vos4jitPM1F",
  "key21": "4jwWzaKxPieL4Tf6QGH64qUUg7etjEKGRGgtdSuNKLRYaRv2ms7zPycirzZ1GBNJYkzK83J3V4t3AKuPNPMw2ECq",
  "key22": "BhzziNWG5nz5h86bP5JCadXo6Ez6btnSNC34vkwpgQ1b2dkphuNh68mB7QJmKrtan7r69a1tomGrd4YmBAwBmtp",
  "key23": "yV8nenJoRrGXBXidY7X3TdpceMWGofKqeCNLhQky1o9sbcbPLgwp1cfQszhRUkoj2g7aR4FYtvV6P5mgcEYmyi6",
  "key24": "55JxFPrb7YQVVKqpoVr2ifMMPyVhWFHxDeMBbqcPygKSH6WhETATCpNXr1Mt5smpB7Kyz31izxH5Zcrp1UoP3fgV",
  "key25": "2zhrG2fq6mdHpBMYSzickqpkffsdGXfZztZzZTzv4vGF4ASC2mzjGWz718tkMZQoCRyhcPKm78jXj1mDMejzvr8W",
  "key26": "gqtazh1ATmbZUsQsBTmJDaDwE8hm4TA1bdQmXc2tQA6ubgZrWYD82ywtAybhHB4h6jTQGFxYVvyGg34cicH3FoC",
  "key27": "638BoW5dNLtEQRQ1eV3SESGW6CZxbvosY2tiVh5ezZSsmLLtuF7Ptgxny8Q7Jnvs1mQWqDVU6mhDKBXF7Z8GVPfe",
  "key28": "5ZUJkzvxxhyaMksFwrZW1KKCY1WbpmcJWCqcuYqhHYcg6xEFDR2wD7WU9qrceu6WhLEyqU2ivEjQ2rJdgi1ahdAj",
  "key29": "5P6JQMUCaoDGGFsF5mcgQvp4D4E5P5iE1PSY9MEu5MWUpnTeg9N7qPBvKAKo2gN1FqJmncjvMF6Hz8J7L4DKSMKA",
  "key30": "5zQEt9kWMQQ1TB8VFQEL9JpxW6C4ySdGUaP1VagVpQWSzTmoyyx4yBUSYM6BDj9vb9Yw6E7tTpsvrqkxMfh7JGW5",
  "key31": "3b1S7JhXXXJLVnnNmJpL8SLeUsiipL266DTC7wfPn7bDoVRB3CBsQzWfAHaaGHqqn4DjuCmqEG4R949hL8YoLEwD",
  "key32": "4s6KgmW8bUpmcMDjjpTZ2NZwQwwwetXsFnCVZLPpMkEyLCWBVyGyoXr4NvtgMYJgBrqkPypBbxwrSzA17crk7QAV",
  "key33": "4AZErqV4NmDrfZ5MUCPN5smiVDSb2rSq5amJMwv2AKBpJMQzsN6GRNe569rNiJNBogu5cVgZA6kkVohpez9U7F6K",
  "key34": "9kmCKouteoSnkrz9utbxL4nr3yKfxS1n3TWQJRVt5aUaE5M4csKJAWg3Pd2HiN1vnpm4Jk4Y77iXZXrABHHkEBw",
  "key35": "2GnK5kjUSjqMP7UA6YAWFAPnnTHmRLphznTvcFEC7Ti1yLbJuyW7k5pxmzfMStMtHUzj3u58kk7hgedeV6sN69B7",
  "key36": "2jQ431rFLFJgEujnw9XzETGfQcTYD8eH4vubsC88KHH7hfUWkHNBQTp2ji1uP4ChBo9akMwN6g8bwW7GQQTjPkqT",
  "key37": "5QCqhKpwGPEpjKKdNjiNWmgnbWQw25fCyUSA2txtaHNBjPF5PrXpijBEVvR2AkcajXZYatuENCLbfpqagD7DJDVN"
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
