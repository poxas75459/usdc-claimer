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
    "2Xj3vrS2jrLcSycaNKh1xf6UdmcCiJ9Sy9HFCmave77jbEvDJ36K46K88HbQQCt35wEMNoH5f9wztuovtpxqZrQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FL3hzFU4BS7fGypprUo44Rzt9wcVXzU6Rxm8ittGGxZkmuxdtF93vfwC4k5ijsRUnqfDmbtPM2ziReB7wTNm2Ap",
  "key1": "4LAdU5fx1Z6wBJnZcogbBqqFtDpNcQu4WkscHqcLJU6tz6HrnXnbBUxJjG6PQrsz1LueAYQNqVZdZrda4DEAtq2R",
  "key2": "4tNf7XtLxtfWCFA81fdtp65PyLnufC4h9qcUjFNA7HzjUdYQzDibXFJdMxmAuLJw1TqBaveZ7Xn4JGoKVD8BhfJU",
  "key3": "4db84Q6C3A9NWQfDZtqJFVRAa43jQPzqdEMwjByFTqaXoxM1PaRRmsqEtFXmavn2d7sUPfMcLeevxdoFVuZhjYhV",
  "key4": "5amALsvCyL3ze6Y6FeGHJR8V1apZi9iRBwp7j29x4KpbVuG9e6muTP1PyB3Dmnaihw3PngnDierjnJNJmkQNd1yN",
  "key5": "NEgmyPRPBiFJDddgutL21nsfUgpgMe33nmk8556LTsf4mc78YSeQdepn64jou23insGUv2i6t2Fvnoswrt2vpY7",
  "key6": "3XTgYsbGTQQDhFtTzTAU3Riodd7jHJtSUzSGTd78eoTXbCJwKGkEPajgGv1kBP7WM4rQWfZsCvLQHdfgQiRZbbGY",
  "key7": "2TzSyNkzQFUZn7tUmWfunK5hMaioRAq789LAprJEC2UMVVPf52qq7RqSCdDZEyEjyZurLfLxTvxF8WbKr6g6tw6F",
  "key8": "C8J7ATzUMfqhHUp15F9r1k7iVeLRHAYYd4tYZaUMXdRo7KWXJNcT3rHbz34nKmHutqifemPVviQSMdRV7kRVnmd",
  "key9": "55bdvcDwidf36nv2FEKucCnB9Dp5qZmN9Q1fE5gXs3d5peo8EeXoiyxrLc11yYFBQrNJiX2ghG65XWJkB4JCJyGf",
  "key10": "3F8UbgJyin3cUABQvTR5VCZ1zq9TMnvBQWkmACNa9jWMuV2KQLFZQzwvs6VFsQU2s2m7rEGw6PFH8ZmNSFqQ4cwq",
  "key11": "5r4z5rZ6uRaD6iHXS9kYqPscj4nGvVcjbF5LoAZKjSu2w2rdCo4uU3xKsNRprNcDGJNb64MGk4HjjPwPjuLPB3f8",
  "key12": "5Rw47Ft5tNCJKvT96qyhNN6tT7RvdRa6ATxanJ4ChDSySjFEdrE7CDryeWuk6NYxx6uFFp6Hn32D5MAZFKKSmZWS",
  "key13": "4ihAuZw64dPYayqkF6ZsCZRYJKzauD8aDdTPKp4sS77WvcFr3FDiwFHNTG4TUhig63ZwQFnZEzJe5Zu2fdXTa59N",
  "key14": "4HoL5kDNNFo1ofy59FQtgJu98Pbefa5AsARzZ7PtUUk1L4FcGBxdBdaRG1Ca9iUTy1Ep6qykfP73iX7nu9KnffLw",
  "key15": "49jDBgnZQTm7sV7MTtqn7Mxq41HUb5qrvH3EyVRDGZd8tx47tLVQ2ZhZ2oJzyQvQfYk3MXNKNw547RTMfszDKdPj",
  "key16": "nmfKLaomohUbjqo5472kjcp95AZZPZ5ooNsSpwRVBgGXZJPGhQTs4WVrPAfYerMdXDQYYyjFvfmoTYJBZ8cNGMt",
  "key17": "3oLhRJqhZAGzbxxu3oPyLrfARS44SZm9zpjXJ61BpUZUNs88oQU4pU6YLtb3zf7dj1yXsiWCob9XHcKuQts4TXEA",
  "key18": "5r7x7AQ5gRVV2rfpT78QLBFRdjPArSAAR7e9et38rZZfwcbwoNr84FhHrvBQcSniJZVJfhLLmf8bGXsJWq8xa9qS",
  "key19": "5yfs6EmKdQVrcbpccqB3ExpwmriuVva3ogJtRYgFkAAZey53JjeJ1W6RfMnX6k43TdFPSNj9U9XyCoKyDmSyn4V4",
  "key20": "4hHjEW6QskHYK7vg8yeAQB8KhxE7dGkrRZmonXTZDvN7BZfj5r4eJmy3RKsxpo6wRvPJjMCLRhuZDdG6M3KEpVRH",
  "key21": "FrF1grDg7eYW2pSqwiEQWsTCnTk4cSmU7pxVYW5hsrJJ656ZKr28RcvcsA21xqhF6M8LmcUwvmVNyVQg3gAWrJ1",
  "key22": "5ojBW7bQNuvNRnKSX67pgB4FFjcwJNq687RCCKs1CDmpUdardDtwXrgR1aQEytotxNVFkZr5MQTRUVTrx2zPNPNs",
  "key23": "5uRXVE52i9JS9sPW3bmvczRq488tZ7t4mCPA9YtzUfPVg4nBU6qvNDqmaScTpDnB1j6GNfL1epyQGmAWW8QzDPDL",
  "key24": "4CCbnnypVRZu5CFH83z7psEuADSq3tEV4PtqCc89qr5bXBFahTLgpBDamcDCpSuRknCNEANQfZ9GTVkwxeXzN6Pd",
  "key25": "52gRn9DVgtoqmG8F8riDYNnrZTjzzb1QqE99Rcpv2wVwCuKmNLkftNmhFoK7W5N2fuh82JmJ3EwE5rknXWoFxQSY",
  "key26": "LAtLsJsvt2PXcj5VxNgav3FAYTsCR4jF87crmA7eLo4irUgy5tQWJeNKEiw67zXjzQLQ2JgJFvSCHqrEVmWFtuK",
  "key27": "5uXb3nJvCQsyQG2BggKwADAbP3tfyeHpbfEr8sYVrYHmb9fzsUgAFDzDxjTSJSwLE4CeKmx4ybSZzye4JiM1b2tb",
  "key28": "oohbQa9cENRYx5KBguR9e9jCGvFLMUe26wqJAKuPjhxmhd2uijYKBLFqTRSVdBEdTBdXeELXw6iRUvvF9oqCQ9G",
  "key29": "2rhKeR1W44ov4bvedbkXUcCSJwjkWsZyvyjXywLPdGqxcyboR2Mw6Y5smo2Xda1q1CXgsGPDYVoNFdc9mWCj4cms",
  "key30": "5pFzfH8upU8ucRDDfqH7VhzcmmmmbvCagDL4uNciuDT6W6vkssHTCahAQj2av5g2f7GTbry6pbKwR1uBz39yVe8F",
  "key31": "46DihY5Qr9yTNEeFbjiwoWR5GqPKxp1U8fU63R8ePtwQ4QkBXMprN9RfZLNWXeFWC4LScwMrkXoxWxcYWZVJLuLN",
  "key32": "46zFaQm1J1bKNb4pz4NQtf2UJyPeMao4rtNW5dsYXSW7KfEhrBciatZAZs9rMbX5z4p5959FSnAoaF71b6eQ6vE",
  "key33": "4cLSiN5WJ7LmTKG9vwausD9Cue4Er9cHNk5hgnF2n8NzdvSPD5F7JbSBEfX8DMxoLY5c9mAat3esoDp6VUSBR4wG",
  "key34": "5nHAot74untCCx9nurRdg6rLnHuFbTRopM7mYb4B1NQYG2mAJ3fEZ8P4TNneywhdiqCuiuXb4vinizuHMhLzWdnn",
  "key35": "2xzgk9sLqA9nQZ1YVrBfxMPdeRUEjf2Z8cS9htpKkGzK3AejQjYr4ropnePzRJPokcocM3M65VR62mkK4FuKBnWE",
  "key36": "5Trx8YXoNKP1yksQ66pfuBYhyFXBn55xB1UmveW34Zec8VT5V7TY8xam1w4H4QQWBUhXVCt5K4LKnoKkTe2J7UNj",
  "key37": "2GjXCEDr337Pqt5REnYnD9fGzqDwHX49DERQGz99L7Az14c7EqPj2zWg1dPvj5iihQSVJXLLoig8q5RTcbeQxFAH",
  "key38": "5ErNchef5E323FZtyGT2kXCY9ME9w8SCFH3f9swVDJbGUh5vzxeXWrEG4KgJNNwTFuQokZZihWD2gjtKAzK3Uryx",
  "key39": "2SwbBHpxz2CyBwYuSDonvh4CcSKLYEPB87vFS7tSTwtMkJtffH2oUdt9RcH39pejMcj877e3w5HK8so1FFh4wWjN",
  "key40": "3VbbGC429RdkRG5CE9wqBzU9qTiKhAA2XDhiBzSsWLftXQyU9rfRh8Aj1wJqujLasDBUiZgcLT4yGM6StAr8ce1K",
  "key41": "3piCmA16vmaUttJ8cxrysL3zRHVREa6pEDmDvXsCFzpcw38EJt2AEhtfMvx6mCQyLnwJBJkbWKCXdZLCJHxQSq6y",
  "key42": "4L21fE7tBtQx1rLUTV9yzLe2vYkuUYExbtrupBLT16HMzZtBVnU2Q2PLMNPSKBRe3zNwCpqKNB2bWLJYkAdeZVba",
  "key43": "U5ZqB1pTs7jLmgB49oWDxVijhSrXdbV5RggRRHLdag4zswJBkJ2ftx1jggPpXVk13GqVrk3Fcauxh7LpKLxujZk",
  "key44": "EVPgx4MM5eRUmxXz8sNdtRYFM2cGfgTtQ5sTNsrgA1FznwF2ay6FXGJtq925BhsuWnj3ZodpEMuB2F2vNHd2Wk2",
  "key45": "4EKniMFKXwbLYVCXxdf8LWMqkH5cQRVXRpdzd1CQHYMSwWNKA3gu3ruJ3G9XQHmxWrpas1G2CodDAkj4qKbMD8s2",
  "key46": "2Gg4kY3HY1u3TstDFR8e21KLTmC1LBn4zMwN2TSXUAD9N6JV9SVqBGtGYZbaUHdnxSu5sLwYdLFRrqPryjGMHdjk",
  "key47": "2DWnXagnd2Kj3tXpz6Doqipwto3oHAwEjy8iApVAfsnniv9WF74rPnVUT4xJjNQ9DhvYAi53vUcTmR9jm6uDkws4"
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
