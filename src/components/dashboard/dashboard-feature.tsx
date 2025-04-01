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
    "3P7iDfncRSNwbJGabop4BCUCQqyU3Gs4udkQuV8qfcbPan8kFGQhF1toB9dQ5PiG36zt8BwgwQMV68NYmDgGx8aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hPLGE6cQcTURNEF9o6idattkUnRvTTZdnP4r1RrEfRhaasVeJkevA8GFs6WJKipeNeVqYVXMcHdWhmP1Y4oWipg",
  "key1": "2efQucuyhkcG5RjHD9BEouocySBSwJ4Zsy3HVAoZZKPYe3rvStZve1FWj3yob2nF6kS34P6vB5jLqchmxWut937e",
  "key2": "5iLWpTRCAUWephCAvPt68Rkdt4An2L8ptW3yVGKKWnTFdax8Xp2GWZcYQp8AHZQXPD8skJWGm32FTcmv8vUkWU2g",
  "key3": "2e7aTz1RM7e1YcjM5DovwfC1stY8gPD7Z6wYyXDsstMzzS3wgPbT9quazFG7TPnofhnPESy5PEdYjnGBDj3GPtA2",
  "key4": "McgrGpRGhY7YYtTGgDbQp7rpUSAbkb4YL7TpRPptD5jcA3mcYtUmqtWCejtFwR4QEZAA3pQsQds5YdjtLs9mB5H",
  "key5": "2YbySbH2QTxvA2bgjfLVeQfYiLS2RscWyJ8CP9PT2UcKv1rBXJ3Yw35tF2uMi8n2Y5iHvzYjB2vMEPGRRcgQjHPp",
  "key6": "3PXVWDYUcMa6GYZS7iHTVUXHAwaSUv38o9JnpcJUQjRyGoAgXRY9kmGdR18UDnLGhMoyfX3ZMpoPgN1ehJGtPU4d",
  "key7": "4fnWBGWs2jv2eFnuB5JRxFxuKJu4C8jLhYYSGNqThXtec9uFUmjuwTFNz5NiQCFvBPLUJ4eJudJirLMXtdZa36HP",
  "key8": "4wCs3sYVciE2oQ89H1gZCZUAQnWbKVXUP7v1nCyN9AGXw6JCHSpac3DSTQ29uxpHhRaD3QoPo2fDmsdKENFd6ab4",
  "key9": "2JUF7jvL7uTazKjuhbj5S91C7ybeX1hCRF59MNGk7XsAfpnJaFKDNSCsB17fKTKQ3nVGEb6GyfADUGmVoztHXLDu",
  "key10": "5uKb3u3Tp8JLvBD3Gj9orcvAfcA94FWvHE6F6BZHXA8D9Ky9vyYUzdLHhaKSaaZMt1KSeK9pB8R6jB5JNH3oqUg",
  "key11": "2kWLoR99Sy25fzFyuVpGvLB716oAevomkCM29cAnSC63v6Vu21oivX4BfMsVdb8KHW6iWvo5QGmSQPMaV6RytV9X",
  "key12": "3qBwDHVStwr7tEhw1ixPGht4ci1kJRFqxYng2ea8YDd2xSFBStszAAN9bMLXJxKpr3EFoQAhaTxYywF32rxknJWt",
  "key13": "4XPKRf7u4WSmNkMMzh5JeU1575dYnZRf3iVYXwY2r2Rd8jrcUbYhrdnQ82eCJtAamHwFPGHXHXjmhiJLKMyac7NU",
  "key14": "3E8JmoLLJZZuK1XKVRy18NGkV9jPrvPFQowh6AAJMJfkENTWqChB3ysTeDnNdJ65ABpBsE3gKeeLsEp2CBFcg5BB",
  "key15": "vSkQxLrN4FykdLpvYCK7ckmwcbYCuLK3Yho6JhDbqr5Gr89y7kJEnb5p9TKBbGbLc2UDWvCzbWTqsgo2ncASRFQ",
  "key16": "4jx83hYNRWaUGDFGRJZBjGomzfVPqnaMTgT6aJrznbdrK4Q4vgHPHscb6nu4M58rEgLHjC9krywiBWYutErFgLoW",
  "key17": "rMx7bLm3u3Rr4UBCKCqLHv5j7KoTPiWYMmCdzQvhYrFthuFDUA7XVota8X4UTBU58QhaGxMz8TLzKfoH6hJmCSB",
  "key18": "5LHo4JLabBCebCfiGa6Xe39pZgzA55Lj78QqSiWPxo81LdNEz21LVjaVmJ79HvVZCXDHjUy5SCMY7ZiEuE9hxx8d",
  "key19": "4aYjmi3PWxcZ1xwRtpP6udDGmy7QAr1VTP8oRTThp8pwemmbTYgyd9tVD3aHsZ6nrieMq4DGXn2eGqvBX2n9cwdj",
  "key20": "3cUKQav4hqDLDRkt3XbSmXDSzy4XGsgoUQEVbfYyRVdhnycerSSvZThNEaY7wSuzmMcKpkx6Jhza2jwBtAGFQf1a",
  "key21": "2KnqmrQCfpF4mgKxD6aL6DQEVywhuV87iKdggS32Joy4q5bSEbZvP5TRxjN5TY7Pgd11E1PYNfUbVj3HxCvGDSTD",
  "key22": "4B1d8Aaa3uLrTFSxGGc3x9yW8xBuDDo3EUGFp4kHuFs6f5V8BRMK5jQiRu5wAiR7EwMxbvhSCNmpDzABPvYyrhuC",
  "key23": "624GxMXq7M5tKn2exXoXQYdfJCdr1Nx28kxEnMYMYS8PhQY4iEVN3ENYu6Rfyf9dN82dY4ysQ54Yapks26yBGuB5",
  "key24": "2GX3oNipCiC3g7QnRjLewXeGhR1SjyhCJd7qTsz6MdLDpSdFctprFmd6BSeva1qm1Do6Btx1mc7scNrNc5PEHr2f",
  "key25": "4dRhDLwUEA7ZENhAF8xSGUeouBwVfoUnrkFc5kvhiwAS18ZXAv3EqwLW7JjsNHyK9YCZad4Pv6Ase5Qpetc5wpfT",
  "key26": "ajQpuJXcrPWMyM6EbS5P6qrnGWqJ1CHXJFXQpTN5gEx71ZEa9yUMzjgVUL5hZj4s3ZGpNXP43ek9RShHY4r6UXP",
  "key27": "4ctD2VvJc1Af14aGidvQUBU2mkN92KtCLL5xBMtJqGRbT54dTk4VjVUJafPgJj8UtSUuQmAJFQbVKjrtED9jYBLP",
  "key28": "5H3wbqWoC3fTXm9HVa855Um9dgEA8Y83ZCqcY5Gxpg5bmcRgmmAyY8kQgVvS8AZ1rvYNrtcm193U5AJosqocdSW2",
  "key29": "5aMZEJJfqimn5EdiysShHxawP7inVLfy9D1SszARfV5eL3VgXrhCgDTyAtR9tGBjLFh4qJmt3b6suVLaC2byGppL",
  "key30": "4XbCiEkmsqvTZH56mDp2fRo51VdsLPmvcPReYAa4hL9wuzJqMoWuSMQQ9bcWVbc1cxyMCBJ43XpEGKxuLk39BVX4",
  "key31": "3PEPkVoNLsykFrbrhctrbbnSYg3uSGB4RFadqQkTJ3D8M12PSmd3csxCCwwrTVQmHtwW6s1zJnjwBMG6RJfuE7vc",
  "key32": "5NKU3CAKsxrZS9ewZgsineoyKQY8oLsUUfJFmRxFEFa3bk83Aos8FBGhjJA7bWyPi7Ap4dxroYddZBHz2CSiqTHd",
  "key33": "3SLUwXZRMnpERGHTQ6mhDwVJc8HQVRTpyRq3fja1kUb1KaSMKd4QNwUhapfzBnBDiZfVePVtGC7VkLg4pfXS417D",
  "key34": "3vE7ZfaLH3s6T5rdv4F4UTucHbACYhyhwpKXuN1wrgmTQihSedwNip5zusze3pJkzjDFjFd7exGUfo8sHX36DGSs",
  "key35": "tqfuTRdFRbnJzcry345CJBJPbDub1ghiuGTXephGFQumNPUFi7PNeGsV7RGonUSBN9Mv3GoBNGnt86UVQRRjnNY",
  "key36": "4QiJajujNuaboGzZSKjUPyi96NHhxk454oEJ3coR2GxMMMFJMgDrG5izLPom9dKB86nWKW8K465RY3qvAm5fWhhx",
  "key37": "fxT9rvL9L8m1Fv4jwivfMuCSK3SoBVDhNKYLnsCCuFb2H4d1BFsGqBP5tm8xYVenTtoBsrcYQDXDv4LmTctQeGy",
  "key38": "24WBcA9PfeG2v1TdgBYNANEt92PJbR1Lx2Gkki2mmWr88EuyGHiMBAxH1w187ZcqANH5qLM5AaRZHCQHZGXmzmnp",
  "key39": "sVjYh7bLnode3rH2c5A5LhzJtvm9jCUuauogtDj7rqeaiEJcBrY8q4kWdyVrnD3ykUybfudLyE6MuwkxnoKpM4a",
  "key40": "644NjdCxrLipi1eKdRvtNZqPCoYvAPiEiQqLa82xYgwLtRbuDRL9NdqknzAxywE7ezFWgEMq6DX9atWCTP7DfK8K",
  "key41": "3qANwrUd81Ua5s9rbuBD3rwMz6SR5iY7cgt7cHDtD5ujBjYYYKZNne7Ujo8So2WrE4R6vxJtAnneX8bUNj6HDLs7",
  "key42": "5dNwNivqj5YXYxhEJyiXBKTA1Pim5HSLu3BUheYwg72Vh1b2x2kLLs5mibBSkcVAsRPRq5bywu3fVtbGoDsMZco6",
  "key43": "4cHxuTkQdR54QsJ5JAuM5vKMYX3b1YBSA85qywztsnADvLDnSE91D2UJdqAHMwVog29ZkMKdHxJM5SEiJPCZKSzx"
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
