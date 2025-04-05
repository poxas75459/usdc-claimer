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
    "3DYu5BkBsEtisaXdvmKFVQuqnS69wEg9xt9n8k7tNy38bYBTHCppPC5tZnUaLqGCu3urYRFpV4JmLYnQVMTMDXru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBE4h8RJHcpGw6WrZFSVhWVn8ixU3tpAY2WiBh6Yu1LUHjsLzGaXsa7YA7mjothWdovJoJgnHkLseQqPnFkbVvw",
  "key1": "XA2X4EFesVra4h3ou8HUNUMsL7AEfhaBWBEK6tUs6LhHUivGLadqt27qRoEtqgREApLtMG5Lq71Vt6486rMfRnV",
  "key2": "5xLW2uHg4xoDHGyStbDoaJAMqQaQvRzax4T3ebZ8DSr7a1Y2Qi42th9vyNkjH5RegUnsWbZ1DhydEyAnrnfd4K18",
  "key3": "5kbdGd4jZaKA1Lt2XFyhRGP6yf6bDwRm2JCtBzpv1jQbiFxSJaRL87j2ywz2pdL2zd1nf9fUrJRVMVLkyo6iEicG",
  "key4": "4vkocpGjDJGu4pNEKNaNeqsrCXdrmhD9VUKJ6WrQtJPCTbk1QKLPM1ePujPCztb7scMVceqb2KgX2pmuEMCFw27S",
  "key5": "3Xak6gQdh3tAq2YpuG5XTnGM1L8p48CQAje4nPmCPp7dXxSAwfVSqvXsaW4PTYNu6zvBQLEcasF3efYqqyX1jhsj",
  "key6": "2bezz71kcPpNeApRPKHVHDa47MBVbHFfTTBPfS8ZfTounxdLkZozvHT49V2o92eQEoeqm7k892i25pEvYFprHm7V",
  "key7": "2YoLCQtyPMkrgxAX3NPGutpmtb7wPcQni2f5r24RG9hcYo4wtBXAXiA5dFa71uoDLiWvVA2dNnRb4qM7V6PeXF5t",
  "key8": "2C6FJKBazpHrevo1JadAXEzrBoLAMVqBLHywER2suXa9geo7MnNnnwd3WgaQnAr5V73yAGGGod4pXtiR8ixbvezh",
  "key9": "3r1kcNd953UjPgqLJDk9qCH5nYKYPCfCSQUqhfCTFeoP4SA16iPQ6UoZDyYHC9oZsDVJxCY4BqsDqq1Mps4LB2Do",
  "key10": "3bKvgvxK8c4LgH3xX2YnfZhoeGGzZmBgbN1sZL1Y5zow2PHU8n1miCVNxASKNaYmaozSgHS3pCf5S8YteRPP3ThU",
  "key11": "ERtK8bjjMgvUngixZfucqAYvqWsZgSBcE7fD5EJ867AvxT14cPnMU3h5WxJhpXGWaQJe31FEiXfoKRtek9TTwX6",
  "key12": "5m5HUgKedno3qMviXwH6dF2WX5AnYNnQ1TSEJ68BUjkhMKM3E8dtD97Gw8gt7GGZfwvZBgEiWNjc6pDy4beHtuyL",
  "key13": "JhMcQ4QNr34ykJVbtkbN1Kho5WrBBo96n1bFNCHyvPch7cjRUniouKZrFggGDVyEy3coTxEHfDk1vstdhtdmAzP",
  "key14": "3Z1kiQEp5yNeVrN1GfdyHdUkTpAr9Zb3S1G5uC5xKvqtzhD9noxTHrnBs6zdFs7Rd52E8sVVG1o5UzwnRh8NVoXr",
  "key15": "495PsKvNLgREtc3BhYW8skS9wePuWigG3eoDxWyM3BPesWhDTsPJQgDSbvgfkmza9ezAUbM4Wv2vRgTBN8GGu8xp",
  "key16": "45o3EWengHkK88uRzjsqfbMk5hPFT8v5q2k9vH3QMkJJJbxiAFuzBGnA6HPJ6yDqKRGQVoXyqvCaWkTACxWFJjm8",
  "key17": "35rHdw5WqNev4R3qfXjfXjFo1HARkDwQWvJT8QDRhvZf7URVZUyKGkn1sk7h9V5YRaAgXEEELaJqjYRwXE1ckMKs",
  "key18": "395J4z2E4T97j7R1j5PxR664DEzavYFwthTYb6HGoo1xxZtDDEVP2uoT7JW2W926upNxxkENWgq7n7xeYzxnJL7G",
  "key19": "52KshraCxdWMdiayLqYbwmoGJjfsi231Shs6V9fBgbzWyMZnvHnjhe3TqEurEtdbncSk3buByXrcvt1XGXEQrAcM",
  "key20": "41MwQYAuRaLaD2zRVvuYML1zD8iJiFjM7ieZhWW4jU5PncFgwbQvQcYN14oJ6jXh1WWkXHTJzZgqr61CVvohNsvG",
  "key21": "2AoVWTypZBoev8fVgsmezFjZxMnSmaXQoA9eNHutQqnWTNNMM1QBLiPMqn34cVQ47SMUkVbiCTCK1WLGS3EBNJbG",
  "key22": "HWTWyhAeAVEKhNH3E4uw2FomxAmC1ESEmrZ65Fp1iJ7sAofsX2VkhPmdrtoNm9BYTmxYKUg5R4EU4m315AHqijH",
  "key23": "4QdhFPf1SwzMzTANMq1xYDtEw8vKYy99LyeWQPpv4pbEMMzh2afMXFXRkTdFE3Zj8jAvub2ffj7q6KKgmxZytaka",
  "key24": "3GHCfbChbJzs8w4qAxfFXCyPoX6UB1mYfgfrzzGnNhbDLFjbvynGAQgQNEErxeVXr6NnYDM1jG37g6kRFRBNU2NU",
  "key25": "3zp4KmjFvMXkyw3y8mVjHsYEfiGqxKw3SGKvRJqnNKNv8dBupiFiDWcqqUys4fR1oLQtgEVWrfDsHNA57xzJYzkb",
  "key26": "2bxCCGBFYqnNmDFFjDRx6bUTh4HKEY5afEP6HKmETXvk54rhY3ZY8uKrPqeSDUZKyAMdHwcSY2FWg4nTYwL57w6L",
  "key27": "2Ms6KWodi1Cha41xGpJiqAZuRz7Eb96JDkeSJJcUWZhF8t64EXpb6xWkTrGrqHRXHEWijxTKA6BNESywgHXJxanZ",
  "key28": "EoYSBCnpNrUhQobSKkcYg4qm4PRpdnNw26Axtdsanf3FkrEvSnML36bNekLybAP5JLbwifdod69pyZ7Prp9uYUZ",
  "key29": "u1EMp6B1eb34n925UcMc9qbR61uXoRkraMHtuGdwPHUrQf2pbMHqHKbd64zDASaQTDc4DMz2PAqxLPEFJq4oBEv",
  "key30": "bZwdP5HanLXNCgRzGjLvFBLzLQMCtg3MTHEgoKaQ6x1UrLNbTzZYUnCm1QtieeS1HqVGnCoegevWqvchJPUWytM",
  "key31": "53idnLVh14UYFrAeKURFXJdta65PZfwm1doAWxRJUJSkPygYKoXfF9EMWNZR6Tmvk9hEaKqU4phPKLBoaG3bWfG8",
  "key32": "4mFTxcTzE9cG1F4AW1dUKph4rjwkijc5u6auuxm9dftqFxbYMapva2zfLhW7CRPej1PW6wCj8Eb4WuTZjA6CXQzJ",
  "key33": "5q1DKgtYegGRCQLTezQaAq69oxYT55DP1BykwVREWzRfEYkifS8oB4Tc7fbhsS8aCp16c5ztsyqQ5xeLaHv3jhd5",
  "key34": "3GxytUyk6cAhULWExrsuiNnFwX67ARXdDa8E9bqMaQQcrp5TqWTRfPpTCGK6tU8dMWLzmCQYHwFEXmPrEvY71sZM",
  "key35": "3S6S1ezvV1ZkuxoSiH2NBQNX2SgY8MFTgqSnskF221LncJHfULT2e57QBBx6MDxSrsEvDMWdBZZumagHt2H3zGgp",
  "key36": "5pgV7o4HRz7J1ZyPamiZzgX4amWn7qaN8ZvL2rZfAakyQRFJHHDSubAAdh1jzNnXCMK9H9FenjuJoXkXQEVqc7VC",
  "key37": "4BwN42k7NisE4chxF23QQwDci9oL7oTtbWTw8ijTwQSA4GDh368repkGHZAvjEJVhR56GkU2GTkDkf87znMjW7NJ",
  "key38": "4FYVzeSHJJGjG6HS7hHF11b75tfzfYwYuseCmkAJQpmyrS6SsSVfEhwnPUtNDpo5tDmMBtihnEzpu8J2dfctBKsM",
  "key39": "5R2CtLEiVF9jF4mXgPgo7D7p2S5SeXhbot8LD45cNmTmnSdJqwAwp388Ge4tmxajh43qVA1A7a82xUWacVLxUWTB"
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
