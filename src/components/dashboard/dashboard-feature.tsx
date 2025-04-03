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
    "2zcaYCFi3A6Map29UiUftZ8NvEah3GdEqnijUPnxj8iAHt14HPcXbKYVcj23Qm1PB3ruCymFVeJ8JnDSLHfrzfyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XDemFYqURaEnu3nEE2MzxNG2rXykDmLTQ5FX3TPBXWthi6qfpGEPzjEeo5JrQQC8XaebqjPzyvJsjJj1gHkjDHW",
  "key1": "2ytMYDgbHeJXVXmbPz2BPmUchY6Nq2tdY83w8ExCiviZoc2fLj7Mn82djnYXut4eZXuLR53TqpsEPpNajHH94pyv",
  "key2": "2rV3rSt7qaXhC9FXYRB9QZsULD1fnM9b9WzzN35USsZMNAjZHsJoiYXSFCHx2vfD56i5LBd8cCQba5asAgDYCkvg",
  "key3": "4pL6k4ovKJA3RgevnZqWH5MtYv7fVXE7W5X6JhGwoHD4kd9sHXLVy8ocWpKv3zNw2Tk9Ggd241PgK4SJZnp9s8NL",
  "key4": "298gaH5oV6275ek9n5rQP6Ns9qHX3JJJhFtqjmSmBJ7j6S18P8RnQY2HgjD7RZiZdzTnMWPbwnq4KNhaeuhTNmib",
  "key5": "4d2sAUrHEe9DZpUePKczf4WEYNTkLNrA58yYH4wmfzBCTvLJcs3oT7xd96UCeowfZqmbsxDwvUnfeqds69sBuD41",
  "key6": "xrP3LKMoPurw5Y2g6xLZf4Q3UcJGbazmQTrBvmWrgfHzrMLd5v9t8kwjLsfN3fzPtViqzfritLD8h4xq8zPD6ow",
  "key7": "3wdrJE7ip6qeKj8BMx6nCiwYcqvA69Bm61uGvJyifVFXCg3cKLoYsJj7CsXQfXKuzPdek9L8UQFgEG9EWVJ2XzxU",
  "key8": "5jtkvSwYKNd7ACDQWnZ84t8CaBFmXyuGyhnbHnLStMpbShGhyxjUviFrrvA4NdDw22ehDchvzYrU2N3R7eFN1xmi",
  "key9": "4NpCGLXSy8tDr1csTcmMAv8WXUtpDtecrYUztPZU7de6aaQjzo2uPxAqncf1qWNBwnekaCKo8i8Myyj1bYtgj59B",
  "key10": "54Qc9kD4nKsTwc3XTEXPyRRKfeENv7WwxaEVTSHiVAEX1o9jwiZRDx6q5Ng1QAbv5r6mRXxddSuiEkyu5aoNCquR",
  "key11": "4du58pi9DjjApPznQNSMXWx8oSoiHkcYuBJbJYWhcUcMUJhE8WM3HZCATn6myCsjvHexEqLAv4akZk6N8BKcLCBk",
  "key12": "5BfHRKGag4kFyfAoxrKd5GbQ5rRmYEyKqYHPEMvnKfapoQyGddo5rpCaM5Ahi2yVLRP1en4yRLg5oitADwP4MnVa",
  "key13": "umgjPRgSF4bF6jNeXfJPGD6jq1p8ru5SGKHTzzTWNeLMvmvxUvxdsgAuTJrcmcme54G7JToCjo3gGGpfnDzV81L",
  "key14": "4bzc6kPGxotmoGin72kXFSHPvJUZtxoWS3D6jmtMxyKB8awqvmE6Ds2ZXasNsvYacRb9FHjWFY4tVVuFo9Cr49CU",
  "key15": "478qxtZ2a926P2prgUf9Vq3yYdjxm5q3WzohNkjfpiXGjWmzN8R548f6znkP2hptbgXSwb7hRef4hTsxvEFN8niL",
  "key16": "3V5YJs1oyUV1hE8pDrTwWc1V6Mnytb64tJvoJdofSEBKmZAD6yQzKya6EVbf5gUUUuGWkdki2jikTSamtdbvG4sZ",
  "key17": "o7miA2EUfXGV3CnN1LZQnnGQtcGJRhcYwTM9WH3N4CX1FfnhgVF35HcfKz79X2h1pG2NPHXTf57WDVbFidmRqVX",
  "key18": "5uqpHThC4FsZDfH3rXpGhCbJhsiD8RQcfhy87FFMnj5LqgbrBJ38Y98VK8eq5dz8FktmLfP3X7dYAiwuZ2nQpHJD",
  "key19": "35MbgVvqd5YqdgUZ8TfEo7n2XFHqzq5dvCqimFxUZ4NLyNaDYUc8kKwVeMLdAeZjBeZBDn5WsbPWD9iTKWAaC2gb",
  "key20": "4qwBe6qPKMSWN8EFmHj1U5J67odLvwKkQNiGFpfVej93VYV5YLAm9a3ipHqgPv12fAjgqrkH4SZr2eEodmmeu6my",
  "key21": "Cj3PsoAFK2z6xajCm9aRoAgjkhTjdRJazGyU6TPZCtZjrWkwuXZ9Ttcayn91nKkF3GbapQx1rN3eb1EHr9B82LX",
  "key22": "4J4si2rCeoa6RLUciqvkufDEZX8v1b5r67CNzSCu2mVNU5wz3ZiRbruvd7QUbVvaFJ8ReLaeg2GjApuoDwB2NMTY",
  "key23": "6AtTAXZ4hnCjYn5BWywj6WFLwXyAxg15BGpgMnXaZVc2LVAGuaVmgCadthJdGAzADqmNouvGqfPNfgeu6XBghVM",
  "key24": "2WYrXnejCLk24PgASVLjEFjWYkGRQkgrTDcLhNHtpWjiT865gqjXaykhNPGo7D4cDQqSzqsT4igbeUN7pM2E8zTj",
  "key25": "3RFeotAeLTho74StLg4obJeV6dqnp488qhwceWEDEyBJQxarBvQ76cKkFRcnoqNUNNJHi5JuzMfvWhZnA16Py7eo",
  "key26": "4r5oJTvPgyWABwHfPFjSX5oKo5zJW2zuAVD2qjMgjjWVLBPkDd9mjVE8VUYPNC2Edpt61GiEamq9a5HSfBc4aShY",
  "key27": "5iTvN7gL44JcE7jmT9oN2exFSTeUgMvyP4SDWUE4rLqvK2D7RuPcx17nFWtwWH4JSKDLFELEJ8LHYb9PguRUW9sx",
  "key28": "5edXhopdxqdCkFFacfm3CG2FR4xjN6UBDQXsRQte81BrpPdzzH1RtERgPEhC37P9sKXwbCSEwhneR2MyH96va3Y8",
  "key29": "4pW4WbF3Cun4PaDcUsoPFg65ae4ZUK2QHhXVsg4tLpczvxEoestaeeKsu9aaSbq2XMLGADAUZJccNmqPGuzRCer",
  "key30": "fXfEkmedWBryz8ytKNFjAxc2bSedrNPdV8uCYPpf7F75Jd5f6hnJNijSB1HQGgtTstzF5EQdtHU3gUcm9aJDpKn",
  "key31": "5LH5BbMTyKEXt5srrjQxGqc6fohuoLmCwWzYfCjnofcqDNJskMcQj81ScxXcjtUAaMub1tLjkQK4YT1ueGcUbBfq",
  "key32": "54GcquSzrM3YuYspaVbEYj1HQZT1sHGsRntA97GTTSHX9K2sxurzCpwXnnBVMfo6Tqgecn8f2SSgYTdGe8y6LHSp",
  "key33": "5yZa8jcgrVGRRwmpV8tHzSNpww8miQ7tzCJzCq3mdGp4WgN4rUiQtcMYeTzaPnihdyjGrCPLrEuSYTNjcxFMJKUk",
  "key34": "2Efo4hhEm37ZkxEEpxsnX7msevA7tae95e2DwijueVKSQF8hqRk1oEpPXZ9Fnbk2CxC3epfQ1iLmHJR9MKieM9bV",
  "key35": "5J5ndn4H1xAHQCqYnMMQt6sm8A6e5EwhmTamzweswSvQAoGummArj7J4qkqStecFrp9AWvAhfgf4YMSBApWyfoVv",
  "key36": "5WRRqDQgs6hig44sYsUdt7ZJBKYRvWEXLFauzUZKwrtuDS5cTACwAWZNrxrLwGWg7T3QjYX8tW4yWvR4vPjwZ4g8"
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
