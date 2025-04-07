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
    "3KnEkSpB6ZzXtP5fCNwNYtqPi9LVsAReUJhemXXbwbwpx86ufvggJgwSTxzcxVDpH8wfxWqZfbH6SevdFYFx21Ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wrUcunZTikqytSkp5bpe7QJrDhkwnbGgX7PMafHB2Znt5Ym99mdGH7w89i7V4S8FqnCYEbbUMZGiB4V3shQYj6m",
  "key1": "5perhTyNkcoexupu7S6b8qQgZV3AVJs7PWzSCGT3oexxzkukp7GYH5A7EzGM4gSB8DKXb7nWRZm2hJ4S9wDsBMm",
  "key2": "2Vv8JQXH5ew9APAoH4jkySm2kyKrGrvWSLc4unLrg2hgh2aXgZT3u8g5wiCU1FbnmuvJtwixiDa2PHcpyaptWESZ",
  "key3": "ZGa5R3zWM3dLXgoTD4ks2GU59CBRnytnr7jPVc3dp4VrD6WEbuJPj4fmH3cYsyUpi1nHt4nD9JjLAPth8w3X2AG",
  "key4": "mnim63j54qFp98ZdBGS5dHppTvsAWfR33Lw4dB32cd9nPBy3SbZo7qwmSiiA6ob6kHrrd76k8sTrRAfjNN6Hi6F",
  "key5": "3Fs6KUkgka9LgKk3WcngfQmPtH4MrgYFL2QcbHBiZSTFJfG4mdu9iosVWWJPkNQ17Hm2hnr3kZnw1JCtBGzQ3Mrj",
  "key6": "3xUjYacADA1RV66DqtxZTV5a3xFiKPckKyMLbXAQguiM5uoywX36yV6Kao6FYQzvAYAcfCh3ToK916m6thJeukwn",
  "key7": "pFPuUBoXZWh4iELutKZsqQ7BsfrGmuP7cN8iqdUS6ZsmdrcwdtuvFXhVB5vrcGxTJ9nxgcS9KD7zrKxo3DaveNq",
  "key8": "56WpD9iSm9tTzyvFyuy9L4v8XLrm3sDDbngYFRzKEzUHu4CaBQhq9S1xtLU2hKUETDJx3Yp2kvBYYbs2XofcFvSw",
  "key9": "5GjQvW67jqTuDBLGxwyU8MV4s9JzkChQvucZcTGtYpVR1BWnRm54DjaNZ1MGjAbt1bjUf7n353uwBVadvmayYMXA",
  "key10": "2knphEP3t4Ad5Dv1U9j1YuhZ8tPWDqCBbWLdixDbTm1qsJxFDx2kXoBvWJvpzdcxdGjPDEj4N4RhSgCyfbuWDN4h",
  "key11": "2c6RWPbz5gJ2xvPPaupkJ5NZNL37m3yJ4EtxAniprBgH6ZZndCiXTR3usAGgFZdAmZqektLmoXkszw6TrdDZCLKW",
  "key12": "3zVVXy5oeXS16L9auy9byNBxWDVuPZnMTqDNubAAdugPFftkLvBqD6WgY1TSR1DoUqnj9uGPTqZrfKNeH4HjwDqb",
  "key13": "udXGMAvN134Gyb1qgvUhRupKyKVdxM3sheDKEFmb2jxTdWgKoLDyUcwvar8YDsxX6rCJTo3Rt5HEGoZVtmtg4eC",
  "key14": "2oKVA1ApBj3iwTBnRAd3wEQUpScwLivvg9aKjk3Qh4x2cGCx4KizJgQGmJY8y3XsTVzZkVDmiwBJCb4UCTYJfMAP",
  "key15": "5fgeLxBJHkhA3wjtv1SstxaFCKvuPmNagDkZYxyQCUWTbKhdWQa8nBtcwzT7KGR1fogpdAHGq8ujwAt65hokcWat",
  "key16": "4mYTRUKHRejUnM6si6gfeWYv1b3QgTWQSndaJWr3ATUMFt3bKa5poC4dnz11EY8mkhve8eqqeAPcCfPTkSir6K52",
  "key17": "5i3SVYuEKnyj69Ffb2TdybNJVPWzWzmXcfCU5Y1oLwQzJmUG4yBtdX4UWG9Ks2gDUeYTgpDhb5hXA7qU8gib1BNZ",
  "key18": "E5wkGjVhtpaYJ5Ji1sECWorZtzpU5mf9Y6UijKYZ2syU5xXpTgexWqpaWx322DGjon9JMSJUFcXP6qvFRjdQgXW",
  "key19": "WB7yi8sSRCdVN6vKF1bfqeAYUXyCH82SEaZ6MPpVMDfFcL6sZi7ctDw934qF72Q2fSog86ABkdugkMpebHTbPoe",
  "key20": "4MAub1GvbkYHhSPt6aTqqVNPSGaK4WTNDMbw1Jvz2DZZAJd1YEWBrmAuLyvaJF7jYe9zcm7xoVzDFsJy9xRRac45",
  "key21": "5yog2Q2x5ZbuhCezTmwKD7p9pbKZxpoV9kfQaRUD1SRpGRTZ6khETu1MPxDqpUVMPDKwP2PfYogG8KtMFnrCoZDi",
  "key22": "5tMZdKQ8NUYojK4RfvkurXuZ6wi6XtmEWHAeig6kkrKVf6tEqtmkDE8ad6vtmGn5XAudV3t5nNFpvCituy9E3Qay",
  "key23": "2YbTRbJA37SeWnyizGHjEVY8h2C33Qam6YjQ1DpjD9v86XEhcecaJgarHAYc3rTmL9XXkHx4gU9iQYnm5h8DS4Lu",
  "key24": "NaY6hgJXweSuUJ6iAyYdS7Q1Giwp7Q3yhaDFCrg3j5VMD8XWk6eBEaW9Si1QDdVDFky3rJvZ7EsMsCdVu8HxXeF",
  "key25": "H3W8pdfWqpMJeY5nyeKdVvfrWh82SLY4GLR133uU4ysjjNHNDiTcqYw7KMytQiPCgAecjt8Fd2VnZ71nGmRG8aq",
  "key26": "hgmquzWZGpXYn2FUaT6rJRG3ntGSqesFKiVFTanRtZRg6JCkFKMwfYHuJ9XTeQVbMvEgmNoJvXL33YPoRcHNZ9L",
  "key27": "5UFBt4RKGkLKtmrQwpNcnG2YdcrmjB7C7wUVmrbSVLfZ8MfkLrtM26FM5M2buzSZxfjSEeDQdeeCd3cGXVAAQmsQ",
  "key28": "kUdapiRqb4AmxReGQ7t1ibhFgxhD7Ye8XmrHCTBNDAGfRVbMJ1d6StorFb8xfTa86C3mYSsEmbDzNbcKupAixfn",
  "key29": "4GNqh57p6NCWNuKYFF12Xa71Wd7k3qYJo7pDzBCbywTRau6dszjuBsq1ixF7YRJdG1GGs4eSCYXis47ovhAUbnaf",
  "key30": "FYy2eBfrxbQSyuW8febHhxD55rZhG3rcXWUjdLPTy9jLtuMipUvVqN68a8U35bMquezweEKSxG4fSVZfsHDfw47",
  "key31": "3vcJVFXrmBknGXgZFiK4TYeKZXxqidiXnd9driYTAnMLoHSHyenQDPYqrPConSm3c5vYFifGFBK7HK494ZYKnk9B",
  "key32": "3FMYWP1Jfo1Eow2UDZNR17xigUeBoHo4NEfGZA3VbiJCFeYpQHCjCYnLALJ2xvj3STDGNJFcMqoFXzcAor74Rxth",
  "key33": "5tyoFmuCk4RVdX8vQ7su6DpxGeeL1N4rXbf3mKuUMagDXjD6X3ZVhWshUdztvW739q2u2DjTeseFyyfcM8hQPzEF",
  "key34": "4S7JxpeAnCBGWWkYJbE2DdJexorJjddDytjz5mqFtitFimywtEvxcnK17zyDiKs9wVjQqKTnJLmjP1xzzEHMFntC",
  "key35": "2NWVBGYySbUCFDrwEGUGD4QPuJLFERdCGcwDqtQxXsPzGoP1h7VQSbvoT1M3hENWxGqPVynoTMRUdWVWwtsJwAdQ",
  "key36": "5H3vUgrp4p92FeKLM6VUFQfhbxm1Nq2eouq8wVsMvoreBdkPE5qF3f8gmM13nwqTSz6wU2KtjAMcib9keVnEGQ73",
  "key37": "5fNU2mMo97ECn7XAZphGfwJ9NBwoPbpd6QkkDTybKYt53AnstMxEHn9bpZtPKHyZK54DomMb2ZNhsygsV71RmbmB",
  "key38": "3mq7vsPzRauQU6JmCLpp5chUENb9gkf3hENManvekS7Zq8f5eG62G1E9HPfsCFhff1u9yfLmURa1iMyRaXANbSfr"
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
