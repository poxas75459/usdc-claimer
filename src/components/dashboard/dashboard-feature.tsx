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
    "5mzmAx1QTfYMM8BreLyJW1LLK38QsWfYeLbgXJv76hdLt5txECuUfvjVckgBHyzcpPGv8ENDG5dC6pMiBHwPihQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aCaaDwdhRMoDXu5H2VHopbVCRdszHhM2ab2KVVzNW7W1gxpPyTYdCp7nWfzgn4wBF3eZNJHABWExAK4Mgk52p9P",
  "key1": "4JZ5EXnmC3NRLAwcwPVzFfakkdztZnhhhdLK27kFtguLMNTSBT37J23rn9yYagrkxJUuXmhqYe1Fxnu4ztQcQBbJ",
  "key2": "qkzPFsSHycfN86uFhd94KLzQ1Htmh9cGYG9jW5BZ9sV6R1a6vbhxCB29sJsg3JakDrs5hnGHCgRnnkvPyXFgU7D",
  "key3": "3SZj2WnFZPpwKCS8R4iu4sfhrAEhumDMQ4ztcHyVtb7FW2VTwnVdQ8zHkKk7Lu7wfrgCnqvqQceSsZfxatVhiN6f",
  "key4": "4jGdNf8vcsXtxFmJwzPAaj1vnCLXPpUfH1DqipzD7BbTQGtL1Mm96m4ydVSKfJ9pqYk7zWt9hs1xmtxjFdpT5pkg",
  "key5": "2Yfy2Lh4VYxxu69iFTBEKxN3rFqA2BEBwZAq92zgR5QjQ8nskDcp5drUQTKmzMkt9u6saRw95m5Xsr9ENrk9RWUm",
  "key6": "3pnZRrhtJmAs6xWXKsTRrBRwNysRNJunFHHvepZ5YRngwa2nngXNcspbArwk3BYBpddg8jn7iMxZzXdbspXDwfmq",
  "key7": "2CoXeCeuXis5n7HxLPQqpBUhw5ELmXQe6rWUyf9nd5CBUMem6hUn6x4gyTvTifPFosqqLcFLMZBgWjHprHueVka8",
  "key8": "28UfmGA1mSTzY9E84qs7PXMhi4oj4LHtHtJwyNmF4eU1YjD9cwtXNCTGTVy8RrZ5AvG1hqKVoT9WpBmBC64fvHzL",
  "key9": "5pnyfpdzqyhHByo5gPhNnzrNxCBsPVdSCQQLWasfQbwRFEY7wthTPD2BWABLp19xysWEYnxT6UKy8eaKzSvKmrkv",
  "key10": "5rseB5kmVdjmymA2ej12yhG811buvcpiHv73QVeRbEbBQQhka3DADNjxUtMTDGzDH24fe1Wqzuv5U7vjhxRovkBu",
  "key11": "FeNrDRxc48HmFE87qGDBY3w7rJRW3kx7339KMRWzgW1sJtdZqps2e43UhXtqVX1jn5r5VACphnQwEqMaVC6iWLe",
  "key12": "5RAE6dneEX4PkRyQpSPiHxF82N82mQacmYWfdbaofSHDRRV1ZpRSBxiYD2nSj5N1uJ51p8TMcGiw8cKRffA7XAQ2",
  "key13": "5YL5EdrPod6bhnoLi9EJznn1WwjMSXfmLLyvH1uzEQsCptVCiwm841BwoiMJpCEAbGQG2gxrF6cv3kditPPRTGyh",
  "key14": "2tYij3av9w3bZReDwHPQc99NDomYQ1Bfisicr26eDxPASPNodCifR2xuqyVcz8j5DRFTS7hwKfCzCC7ysvVVZWz7",
  "key15": "4A78ixrBwQGruYvgDXPYpekfo4oCFcsGL8YFoHqY5dESa1KKkG31kVwWEoMC5LEPRWPryZZSumimrP7sWBZbiJTe",
  "key16": "4LFLyBmPDrSboNGTWgELXCuu9VisXvTXmdT9B2F1WAeEDqH9VzQqm5mbSJdpGXHsJeK7GeFFuPANzxkiwc97ZYCY",
  "key17": "3mFDt9ehwMRU6HvQELMBF3vZKF5cutVtbvjgAYSW4wtmDcbL3EKU4b79coUJonPCuc8GbjcytoLVZbv2xVJzEVSN",
  "key18": "4inKUuhQeVW2UWNDFsDE9oW3ALFgrJXb3QtvZkSEUvEqWhjo9NHq9LPT7vQenY7dHqTXSe86uT43PB1x6X31Ht1n",
  "key19": "4eBiBhkDekqepkgx2qdf7ZZ7V9XDuzAZGwryiHVJqmcDrzvk1b2Wa6ym5CdBu1HAnan4qUGtqMd3neYWfUhtau7W",
  "key20": "gQtynfuKZRKWzSsqb3AJZ8C5NT4kEHyBCtDxE24SH46muhqWY6yUiSLRTmYfnnacMHxpW36oFZFW6VCQ7u93GPs",
  "key21": "5qyeZxwet1YS8o8d2WpfBiRwZo2whVdkXWrZ719aarg7HgUM5zVGWWS9DeW1Txu2nGeVTDt26eA1Qco4PJHsnVdr",
  "key22": "5JUBhkAx84qti32CHWiA4g5z1xPfKj3QXjZxGUbJfScePCRRr7g7WvUuN5tzELMP1Gz6STWftjpB9mDAaawPRfcY",
  "key23": "3V3JZ8ZWCW61gDLp1W6dVHqKJr21zdeho28D8563cpPnFVz7YFbBsuhtB8zXKE58cXfr2xdiBgFhHTrd9pTwsXWK",
  "key24": "3BtusZ2dozgVpbes42bWKpLxjF6HoHmuzXkFw9chF5eiuu82FDicPNNRir8RdrY69tMUahHVkHkRkdf63Zk2FrQf",
  "key25": "3t5mMXDxus1FBye7x4qrygRUF4xvvbHe1fCNkHnYnu6P285Lab8ccCoyzKppFAYL3uHzUd79BofHTVZQ1FZ1gtRy",
  "key26": "3ntABTUV5gBUKRsHoUm89AUgmvvnxyc4eVSTXjomHgpatbbkn4LarTXjm2yb8U4Do1MUE1qtmzjnvyURnYvtnFLQ",
  "key27": "3bJgrduZfKgagXrNLMYTHFyxf5cq8GhkfVdf4LkovJ1mwkCTfFhBxrWY9ob3sBRpC1Ri6FHSTZFkiBKd8uojg7bC",
  "key28": "5Wrk2mZPVty2zmi8dFbbe3rWqkSXTTP1ymCHxnYbBtutSsjW9GvC2yyULcAWEcWJtbAhr3xotes1E8fNCbDVCWLi",
  "key29": "5cX1SevyPCJoJCXQQpA5D5PXqUUrXjjEeGT764VtvP4K3jvucibG6yVTjP99NzT8StUK2uch4jRVsPqVRHEAfSaC",
  "key30": "4jm4UEDi4ECcHfpuKDbLcZnT5kBfk4hbGkajrCUSyKN1Ao4MeX3bx5wcpbctZM6d5SnLwTDkTjf27izNfMs1e9jX",
  "key31": "4EG1M2AkBspinMxfRySyENC7GRJaKuq5ZSvb3D7mDq463BngDaEFNRHejJVLnsVkJYUybpYJtYD1QLahP5s6MMj9",
  "key32": "32LrZ6reasmxct8wLda5ZHwmkD36r6KNbfLPcFKLzuDMdmGmWoXjhFtVNBg5oaJq74zQSNDuQm6AUWZ97qvVCbke",
  "key33": "3JTnKKgKn4d2BMRcYQXfbx6vjVs2YMaYSqR6pDz7zfkcWQcbDPMtvUatnLpXrDLfpzxu3m4LbVs2KmoznUae5RCi",
  "key34": "67MhS3SQJdf6rAa1ryWoCHfmtkLQiS3Ph71eQetRbTCbDEnioAUXWQ3aQc3JaFzZ1TroVtrusLY1VPGLLPyEzn4d",
  "key35": "zLNykDnfTNWAfH9CPgXS2PC8w4QnvqXUSPNGQNAm3RPefiyzXMMQSXUVLcnMvdonR7vXmysm11yZKZxEyCFbZHT",
  "key36": "5MEF8q39yUsWrw18tdg7Q5XFvfG36NYdbErooKGSoJ8jexDb9nR5sx5r5RDW7Eu8m5vNVJSSFbucSFb6FKi9r8BM",
  "key37": "5JBaxKDKMMvRBDS9jiHFiFz6J6WwWKAL2Jys9sp2U5jhLUeDYKPwn1fNQg8EctEfsLM8kSM7oguWSXQpygWoRKTv",
  "key38": "3SgpHeXqcjLF6JQizEDkmYi3khMLGsQGLzCCd5zYmXj5JpuVigDDXwF2s69VTWmu1B2LA2m4y6hpNFrKLbVknaLy",
  "key39": "2Ej74dPCNb2YECdF5rZajkAYXPFM6NYqSU8GZTXNadJinuFqdeLdgEeHoeaTC2eWYEAgUY2yP6wE3LfAKi53BiSy",
  "key40": "39qh3AQKkhRd4qbkdDpNGC52zT35yH39SfJTZvDyjr71zJekptK3dWY6ceT4FMbicMCfBc8VZuxuJ7PBNG2zRXmE",
  "key41": "5jbxkxzNAmz7GpVxNbPbBEhrhDvpuWE7nN323h6i45U36g42CqTWYDB8DspUjGTLKxQC5zVJ7cQ5XtZMaDWx1bp5",
  "key42": "3V4iBvNeh6tt6aFLQbE1E8RxHjvGLWNeJuJCAvF278SgnaxzLRdodfEEEZ8BGtJYyT5GikjCFoFML5vgBQYvTiVz",
  "key43": "21kFmetQpLMddyijWwUsC5Cuc1VsXYZaej96dKyGvizKddcu9vwEVwc5MUUjEsx2SLnaTDK8EKqcyxVoyv1TwdSe"
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
