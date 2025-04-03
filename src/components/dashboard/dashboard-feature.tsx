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
    "4zYgo7X2ZCeK9ZL2E8EgfEvRvmMvvR9xTzeXvLwGRqnDzu3YtGGPoCWLg2fB6orXAtygAi8aFbF3UYyWAAbp3zUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X5u7giTyxPPUeDMbfqn7SfoAR5gy4wLnGqvVuEpSefzaH7ahRRyWXBsqGYq7DkfYzy9u3rmp2ZSjd7QayWkii6F",
  "key1": "g4JGQHvF99gQ8aMjyAf5qE8sSF3682vCjuqFb2vB9gtZg5f4rUpQWfsyV6B8JtCMK6ZSNiwiVaiSJMVyz59gKuN",
  "key2": "4GXqdniAQ6KcSYQx6FoZdUCXsjbPNTyfQmeikQmzSpQG9EjVewuiaQ2cHkhCbKSmUFK9fCNbpv6FgWyRcjWpbd9a",
  "key3": "34b24d5CcEXiGkEuTqPjhrCsNozF4BGLWSyKaeQLnHF76ncRNgK4detGxvUg454HufsFqc2N9HNzRxjBskZYcSv1",
  "key4": "4NB5d91CCMUnboAZguYeMQoLiaQfpZoBkf4xcFx7KU63EvfHHGcYEh7eipqGcGH86DfY9gtWhrHGxXzfkvSsX15S",
  "key5": "Son8Su9bN5RGMJ6hEGXHWFsSFk9WXD7QsRon7uMckUQQZ2E3pDMDYuwSaTWCEkYzyifTGV4oQ4rwhvKaVCna7bb",
  "key6": "hqrLixYKkvRTC4bcd7PU18BkEcttJq7bJBkbr6RXmzPL68L2XxfJKvRjTQeGdNM1hgKt1xWq6Aud6V5ZpTEsupU",
  "key7": "57rJFcxYX8vFntxF9yPrkxNSPhKZ1eSVDnYeD6vtSw7wSZmZZZAeAaqWCSLZzANwkkE6NFEvm4AT2Q51CXdo2zdD",
  "key8": "Gymd515rsh7qnTMUTDxcDmT9NT3QQtRJyunHj9CyEQorZScAsBe12TLbcDkWD83sW4ibXb3G9xMdKmfvQgGg1iT",
  "key9": "EyKzpEhR6VmS8DgdeBr5GNRmbuaQWtkbsQbKS9BQwz3xS6ssYNdtrv65rM17xEkiavpoj58kTPxs6PchB9McirQ",
  "key10": "3Ss4dXZQx3VcbNviFanjFrodZzansZbkDD24PNifJDFMUwZoM56UryiRdoNkQzH76xyVnEk3eXzg1HJ4tKB41zyu",
  "key11": "fis5wjw3a9L5UJ6r91VE7evwtBKZiWWiRScigp8YgRvKDex6i5qA2JbMb6Ui4D3mAeMVeN6gQbA9s1U3Ep8PTsJ",
  "key12": "2JicfFmj6o4rJYownYnLWwha5BTNH1cPWAdpB57WKLUPfpsAzw6uzy9VnogNjwHMXdGXeBh6JkGVwcNVZu7Y1aks",
  "key13": "5W56RNkuTz2FuyxRLdqKv3hGa8zdTT8NoRjDYv889uG5S1UdB6dTggUgpUCryKEN9uHF6yVbHT9RRh1e4j8mvMuc",
  "key14": "2fwQKCZcmLT31kwJsyk6vmqGyVxoeXJpQjTDiakDoXUtJ1xYpmeT3ms59gsBj1Lm81Hnma7Ay32vcPGADZtdD5KK",
  "key15": "4LE7x46G1wzpBMff9cpDvS4UbpGGeAknw89rr19Mkj83og8Sjuh7mW5GEjUToLw8kLoW5pZncSVQQsKAyswXuQNe",
  "key16": "59m831u42pALGgTka64GAKPzW9steREYXzyGxQ1KHG4UR47oWxktuhZ2uLxUW23HqD828eu24DPnip1kZumUdtzh",
  "key17": "3WY2um7NAPHvrYrbbgcEhS5awX3vyVGh4w6G7owC6Wxg1MDKuGMd4dPsmBraJU8Gn647Z7q1hNuZH9e18gMmPQdj",
  "key18": "5hCRtz6rrAchFAZj2zspyBTMVQLJG89hxNsJ1mB6gYP3QDdcAooYrkkZs5rcWYx4pctDpqG9GLsW9Ymo36pKeYJa",
  "key19": "sC3rAinu9SJeVK6iof2oyEP1vdg6CnRzReMdsJePM9wJBbSLTDia99H3q55hDgwMNfCN8PVtZyxmq58U6ciEAXU",
  "key20": "51kegMnexP8qaRJYcdzsAx4AnqfaGTCHgSWJz2inkAjuSGb8zoPNmVZFDSUynUrEZzbUZPaTvY5EJb999aSKP4nL",
  "key21": "5GPx8U6acB3hDhLRT51Feh2gxG6teM2q55erqBip4jXMXXMc1crJVc8AjTt4cWyPfDv5XpbuQ2CPJDGnFLunGV1m",
  "key22": "3Q8gBLXcFEfSaE9m6zm5G1nJaeHUbCovyvXcotntwZoocC28oNxr6Xdi5LGBusmtFB6CRkBSsKsq3wN9JFcpVii1",
  "key23": "3yQXMsxfrDfe2eE1Wkz73TAKGGoae2HPV7LNQwyaFi6e7jgNrjCEdvMdMxZPqNhahC72wfcxT6xCrNfsmbea7oio",
  "key24": "2AxNCkdKmVKgwUSqz7xjy7RfgJG4Rs9mEg1fPQyCEetFt55pTMh3PRacEkWnUcNHmXfgKkNhXGdnWXYhvQFWUqkj",
  "key25": "4JGkwX71s49cyzxcfpfGxJcHFrv2jedVMQc8gcth21uUTEHBFmg1GMkxA1rzLc5YmLJSes29bmvV56YjYppmZfPX",
  "key26": "4H6qWC9Uotr9r89DxqZwBvwRJxLQgmbMUXWdwsBMuexnPoeMcJ6sQ4WS294JENSedXDZAAmPcFtA16MBcTgGTtcN",
  "key27": "28WtjN3j72YCYWbPJ8wshSTRuUHCrNFTmRppFknDAibeedih1USfNwD2Lq2zGRHKuXbq3jmMgBHYZqqk4Au1mNEV",
  "key28": "2iGne43JW6XgcumXdkohS9cQMdJsDK9SH4FiGqrbxn32U7FivFtg8p7rDtxxzAg1UPFCQuoht1hwttQ977xeUxaJ",
  "key29": "2W2rJKs8c4wwY2b1J2HGEWeaqFpi7TTKH4GgcnRjFPnNqDMbR1Kxzx4cUcMNt4FdGATeXsxaAv8GccHM21FFetzq",
  "key30": "oMezPmuRreUg1HAaqQmuTTDgpt1DrDTBKcJPNFyrBRibFqyXUVKkEWF3cvJxenGKXb9mbsUYMP8HTE1cYb44GSi",
  "key31": "4c1EyQ1BsttWbumMKX6T7SBrcUk9bTtABa2jm7R1SRhm8UZ3J3TxEeWKqSA8TKH2KF5z1o6kCrXbtNr2TWBLVbZc",
  "key32": "4JoyjqnvKUVgKJ3QUFVcZq5jd96KmmbGYvNhaYvbBCXNFdVgqEMqriKz6mC1ih7A2Pq9wsfSjQoWvsUPH72utn67",
  "key33": "351WMAAigGu1NSinFbeTt9pRQnfoD17TtRpou5Y7zN1jtpEvui6LzRQJUbejq4hqM9fChPnyhZWaVqzSyiPvcQGA",
  "key34": "3ESHA3ihSFWDAMfohazgpTY4vf1q24xMmN6SFAtohQEoyuEo4uZ6yJQemQAUmXGwfoJej1A5CTK9LtV89vZKgQPs",
  "key35": "RgfjJfouEr8YYH6sVMK92o5c2tZVudAD1yRn26mfmrx7JqSx1Eztwe4zm7cvbgBYQgmtekBzmzVAb9GmV6Pv1tV",
  "key36": "32i6Lt2rUdtsW4ZU1JgVXQycqC2514Z6C8TLRD4eqicc431JmA2uJ8aWQoPdDS89gNJbrcVkHoQxnmrxSBXv49dj",
  "key37": "2688HnQM28wS75q37BfVoSmM4GCLrPYsYkJbi4SPC2Mg3W6SsCTcHuN9yDZrp7pUrDLr4Yy6fLR45GmoQ3WnRcFU",
  "key38": "2p7mFjJuAXfiQRhYgmUehovXqoaPt7ZNCLsfUiHCWFwacb3yDRoCMeWwVMVoiYNtycUXkjg96JaBT5eM6twT1AsQ",
  "key39": "3kWRh1cCgHzLsS9Unt2KZenfyWNJcyZqJY1AEkMc9U2hu7hG8Ar7PDZ7KsGHzFHAsAUWiEXjirrnox7ssEvUzF1D"
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
