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
    "5W3U58mSC1fUCDwuhsHCGgF9Ni762V4KZ3P3htjatVFBY7c8jikyYTUFb1n96exG5TXYjCdf7VYZK597myWAToDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYXnfuAerYqimgcVZkg3xNhzL82W9EKGez9xoWDNnjhLhrQNkm19ycXwwTSDVBRrUwUMhwGLnGJB2ggvHovPspz",
  "key1": "3yVTgxUMWUCtGzviP8hSxBbxrWFFSwZwcMMRCPeJgwMHmfmA8adZNMA1M2TcSZtyZSkwzJmCepLSzWZ9oEbGf1M9",
  "key2": "2kiNeEDfVjLeoMYQitGvmnKgM2NpiuTjVvPT4JAAByZN85iodvhWi8ZfAmDcmYSFN5wrbew2GSacnRoKCvD5Jxfv",
  "key3": "2J4SWArkSrS8Zi4h4c4jbW92j58ygpXXysezgRNjrDLQzHoaPorEZ6n7JyRPiAbSgyCzQ29Bnr6eAQiUBjAuroL4",
  "key4": "4a6QB7odQbcbvcvPHX69V9rPTe2MzLmkZfhdt4JBgCL1Dcek1sN5bewHVwA4PXEAqoZRTY8BwywojUNuZFBJGZYh",
  "key5": "5rooqtCUJjHQ4fL6Gsin1aRCjezM4oL7gM9z7gc7GdUPT24w7waVRxLF99gctMWFrkTEsX6qKwkYJimsLdzYkEKF",
  "key6": "8LC2N3efXWSUighzxAWBwqtUHhJy5GEtJcCjEYMFozALXxXgCCJHtaaEQqccjp1VuW7Vgb7CBjT4hrawVoDfNjx",
  "key7": "NJRyTkBJwoPHoWeLUjeUhrKEbvgzzHVbMkBzpB6QRH6UWkw1T7LU6dgpz4kDsDdnwjgzsnU4BBa1xwpD7gTPg5R",
  "key8": "38p1XLgYSHQEPRSZKYRTLe8T59duv8LsiTDQcGKcJSnTaPf2HdFZJL2HxUMCsAwwDA4rS8cNHFgWm5FkyMD4mpj8",
  "key9": "3feiaDJLCmbX7jSFV1y9FqnAUbCAWGEyBkUAwjQpkgkJoCuuvoEkV1R6TmsSDmAGE7ezWDqSZtUSdf8U5ZmAcmFs",
  "key10": "7s4EzJKp3HoZQQW75pAP5NuVBahhVGAUAgouQTyXSWS9mhZRZXZrKhj3JDuvnTJVP34ZD4U7bZw4no34pQ4hd3k",
  "key11": "3YYXsmXGpCTSag5w3X24FAgn4GV29h8UZqqgmXxJQ6TnirX8FsfFeq9i4wRXEqb75SigCeD33ZgeCVmoXXbakGSH",
  "key12": "4p36aGZqbitpk4sJ1SwaG5J9ZQ8bS1oyGfLC7BASsuFcG4L7MZkeHhEHqiX6m3h3x9QBVmzEffoPqaUPteKcSr4U",
  "key13": "5q4kmw6XWMAP5Gix15N2jg7PvEqxdfu3AYNxAKxytAuHRJyCZquPRx97YWYrW3dcYaLD9EkzWv94w8WhN6qD5ME7",
  "key14": "5cdaA2dT5aTnyXS7AtKPCQ1kKmaEMizo39axerKMrTWgAVbsk4Aox3K6pDRWGgNaHFEaNXf8fSQFVzTZ3rJob57D",
  "key15": "4BBzc3yHrv1AWFARFLVRwJiL7vVFU1AdKtZsqVUvzoUnk5CLaQC5VF3tk7czRhcf6GW5URqUg3o34hVkK9ybhScK",
  "key16": "4iCK8j9ViTRKvDVX67HhVpisuWo5Egj8Lrz5Frh7C4N78GqRDiSnkTLyH7krS6ertYwspW5ufvvKufQfWcNqiEkg",
  "key17": "3o3hmsXs9RRVjZP7ZyKPRGigA42VEsijpmudYHDq51y8tYqAJLBCS9mDQ2GzpPBgFP3qDqco2yZcX1aML8W4XKdA",
  "key18": "2koWW7tFjUWjYNZJgqTy6G4TxW3bJRJPXnrstT2WnsSJRagE94qWHNpYaryodYfcKLT8fNRPscGeExuHNmWjToA5",
  "key19": "3CHfc2vgnPKn5qfYfw9x2HaB1NvDpt7W65XkjMeZoLhAiK6N6zu3G2hLNnF4SbJySjosjhmGXN56XNhJUXPe5iaw",
  "key20": "21wte6RpY8NPJmFazndVpG6gY1mqybaNvtsn2s4MyRjxk1gnKbjfw8Rqir5M8Hihf2J5nMt5j5KZAFGhxzAa1uJR",
  "key21": "5nvveRk4PiBCU4GDZu8iTEokHMxqxM7raoxvyHYgrsabnN6EXZTFW5rMc51gK9XWXv2HwMYDWFWxFFxDKPZPAiJt",
  "key22": "5J3pXm4fCPcdTtSkTavUEAv6GSHaRcr2kaj6LCAeqRUzGccvnCcR8jhExMiwDacuomrP2n3rc5GQHZ13orxkzggd",
  "key23": "4GiN9EiAuDayom4NayTTBEmfVkfuH665Eqm6rmAxBAmx1SrtTHR9CjKzjiu58TN5LQuaNwzTDUjHvSYT2LrbZc5E",
  "key24": "4meadq8qF78AqiYynJU5LCPyJsQG5ZssLAy9Fk1k21BJHFoxomecLAFhMtcMbAJwJcMdSTXwdJgKiQZkzk4KYHYV",
  "key25": "3W8Fy3saEZBxaZtbnHRnEqexd1ke5Km8iGxNpJx2Ja3FZ7wk2YWrBjsjthgi8XmzFeDRTRFj3shsTpgDWetxUaK6",
  "key26": "R22NFXKSNCdanEU7Wx3E3ZcnMgfKjnjJpSpUmn1d368BR5MBtKhjc8ZYNC4DzJECSq1epLTciv5MFSPPBaPaQoU",
  "key27": "3PBpkhjKa9KKUWAdsMd75SrYeViB7pE7ZzYPQta2VL8iDjZ5xNMJXKt6SLTx19vnF3bpRqEpuBk1RRXVFfnQEERs",
  "key28": "5sUtXmuB5KpkMhC7GbTLbPENLXtbhnpToPCbJpzKp9wF11qFkbn4fXdqowNPrzVSdYxQZkCbzE7ttE81zVWHCfaN",
  "key29": "4s8qLvJBvu5fj5utRPL2YsVGCgRssJhRieNUmL3iGqMwSYKma9MsQchHQG3gxx2DruCxLtZnw5znMrSKgJMmHrgn",
  "key30": "LXw1knLXPpELVXAMF7uixrKLfiE7Sw1hSfDaQmEkUts5CsNtxxBFBHuvBkcRErc13tzqyPhurm44qKimNWqJ2KS",
  "key31": "3C4D5vEgFV7YtrWA18QDwGKgsRXPGmkjYP64uAaU88QCvRHEkGFbTqQUTYxJQqAXUn2UgoknffMRuJbGa2JfdgA5",
  "key32": "aUvqDYjjFUoUJU2p5x7vgx3TgabUsxkELEJaBFAgPWncFRNcoQ91xg9mnANF9aGnKZ99KtBB1aDf8udY2VU6tNo",
  "key33": "53ScBTeBFEVHZ8MsMxsL9XHssoNtqrg9vPqARkAcmU7ga6TJopnvaXv1LGUqvaHVtPZFbYz8xBEsPiP8qP67e7mQ",
  "key34": "hLphYjv3TQAPPXALi7EyGLEDxUL13ppNu7bzQRMC1aU8QN8vHD28xEguRDj35FV5d3Lt58Fd1E1emgRQHECdQKA",
  "key35": "4qjoFrHS31iTCizSAreUTbLmecowPtsTMMXrQN9L7pn1gYB8DwSXQqeKvcS8CVAZ89hN1udKM5nrC2cbxs5xWAb",
  "key36": "4PMj4g762TZ8Bt5JEBvkdLuj2iLMqpgMx8zytKKfYgq38TRZSDVMAS8pG7QL3UmnKoXArWjgNGBpJtU4XNoW6BnK",
  "key37": "2yTzZ8N4nJbv2uTsexjvJbHSf85grrapTBTs35hed1JadDsCYYs5coecjcM4rNoKyrTfrP7erF4JfWWEhd5gGcJF",
  "key38": "4yYAJAyMNBjcwpec9BrMsELPyetwiwuMRhdJQcSMkLDBrmoX6ZBdwCiDnepvG5YMT9JzrqcCbHtMZvj2xETQE2AG",
  "key39": "4vBy4hrQnv9Tj9XQvW8UZWqYf4YggtjRp36FxijvXxVqw2myFEb45j8oPek7xbdAieAoE9iwVLQVjFN1zeLmJHHq",
  "key40": "3TKpBXYyff47APvCGN8N3WDYs8zgJDwhG37baaNqU2n1dhLtojoPQepwFvmpCUgEppN7gmamv5U5to3DbUW9dzWw",
  "key41": "3JtX2bfvJG44WYG7XQtNroWVvcufEgJYzrvv7ugcQN79Qu4PYbXsf8uvQwSQA8tG1mKcYcwtKkRQJDPfkxUez1W5",
  "key42": "3X6pkkNSCJqmWkZKHdGXArWasf74HycBg4khnYnnovt83HXYiR35XYRFxVjrhUS9ivRjMBVEgLpoma6XkKu9Tg8i",
  "key43": "2E771bJNv5eVU27Ju79uzkXc5GiGDD97eb2LnF4k4GotJd3EQz4K8eYdwRHhLZNCfWKhNWkL6MbitQZHv4NyLLKe",
  "key44": "4dkq76x2hu7vvhkPzYVtbUYuXCaEmENuEfCXZFU4D2wULsaL3fccaEwANZiZMFzy5HqZ9fu8LQL5GFBp84a8DMEC",
  "key45": "3pVeSxeF9bsPXReuTxjudGv6hCx55HZoJ7pxJ1xKsoyDkn8C5rTJXU3tsvPnVzarmRCMprJoYCFMewqQMHxVathX"
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
