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
    "3xjUcRdDoKM9pFCrfR8rrRgMQG6qmXVEm1oyn5eWdCWSrhpmmS9qAN45Q1r4XewqV3xnAD7RshpT2N3VxQLbanSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MeHP33kV4hyDxZ4CJ5pBSuxVM35Wnb3NaRPhfnZ7iXLXuVsyrVfsjzeMxkK7FgS3u6coy91jZJXNgZkPPFGmAmT",
  "key1": "66nrw7Pq1BWrwv1QsebcrKvn3jg342f8RPjFTfiDA6bPG38B3kuxrDHhcM28t9h28EPPZYxq6N2w9FPnepoaTEfQ",
  "key2": "3uRtyjZdJMycTVit5RKhur5B7d3spLpLxFkg8vSeC6EwduDPWjAXgtEaCr7ryQ4VsdmwBaJKmURckQi6x22vG1rN",
  "key3": "5pfegeeQpSoDSihviMZmsgt2yExW4BhnEacaUT6KstH9JFhoYA2ucL7Mce1D2mb3YTo7pYYqwBJ7tA7oZPmZKKHh",
  "key4": "fxQHczpMWT3sTswXLe859hWCJVx9qCmKvbJ3Kv9FHs7r58Nr45enSyjvV6a31Wkr7xJtNN7C4oRWgjRmoDHNA1E",
  "key5": "4pfMgcMNgBKrLMs9yYtgF1wTHpLx8qE2yg9bGJN1sUME1vDsyRGixeqVU9J8MF6MA8uGoxPgQwmK4uxVLZeqMzh5",
  "key6": "4koeq9gtmd2ZuA5gSm1Jt34hwkPeMstDhKkrC75sMeSp1633G9rqMP3CmJCkBx7myXpUA5ArcV9JgxFYLLcQ3ZqU",
  "key7": "5s56UyVW8J6hbpRZYL5wM7os73xL3tweRA8x3FkSRSLu9ntCW3v46MKR5rg4y3opPPjnVxwDoSePDvfveiHgvLj",
  "key8": "Cairt2GtjeQKxwXRn2i5nC8ck8pgrdVcqRo5bq7Hrybn45Tiz4gTA3jhina5QCar3BC5Fuc5mvdr3trgkRWXRCx",
  "key9": "32TFQEdCEJK1wGrN8HwbTopGzyyFF7hmcN4L4anpMmKFf7oGrMVdm2EugY5eREbJsTuuVuGfDL3Ezg9QhD85LpBu",
  "key10": "2Q79thy9ySC1GzgntTVWr8Fok7Bzg7Tz2M8yQfek97BQyPDfjvcKQtXiySkA9o6vPepKdpRuGimoFbrhSzKUvZRx",
  "key11": "48UoP6zzzJc5hggwcS6RpJeq7X87jfFTCk7hSuhZgqMr1ixRw73Fx1WF31M1g6aE6411MKRSk1LRsBny67Lg8iPv",
  "key12": "5amvcbbqyKDGNLHejogyKCCnfck9YGRmjniNTtHgmi2BFR7Vv2Mh7kesKYf2NcpsWaLqPmL4ZgtZEyyJeafxpm2c",
  "key13": "4H4Au1pkJ6iQUJXuhQt3AEUCWkkoBjhAWsXH3JkBB2v4SLJHXbMv4SEsnaRNBxc5G4kSg33V63S8zauQ3AFBhvS",
  "key14": "5XdEKyADrCZoNSU9ZCoXZCAeBxLpZBMxeLWLuVmSWJ4GasPQTrLk1Q6kgkYzNgUfsbdQhcyzSKfu4bH3ZQa6Fjws",
  "key15": "4woxuxNnQM73kmrXCuPfTHv7vM5d2PcdfWMtttfMsnvL8iWmssnADTibk3MiZacPwR4fvimBNb6QcQDT7D2q8rZk",
  "key16": "5qzDHNK1bMnFGq5PFEKv4eFgsX7eXrDi2puHDAaxfepzhJhUbymEaZCoV54Y3MSwRetgzoMshAYiJjCHf6FYSYbN",
  "key17": "3NnpRKDse9z7HHFa4ds4nKkSoow1d9mo41aAGtiPVZ65rdwJjqtLZemjmFUCR7VjR577nV7h1xTwd6FwRKQAm4es",
  "key18": "4zsen9TV7pFccKTUwR59aspxvi96UkbCjiFyiK4Kgd5CRteCj8QVrMXVELvDu7pBWAhVUURZkUg2uabXSuQcecLi",
  "key19": "N26ytV5oMpcadqpNf3HZFySb9o8mGS1Q8tgBzoU4B3VWP6y6Fgv1YUdpUKwTji1pVZErP9DFU82bh5J2o9xUDB6",
  "key20": "czomyP7Mb6YeCGZ2bhPmo9rA8NxoFq4F631HwRoAoBLKzpunsjeZ3CXdcDsDHjvZsRaHgvdEzWe48dgqg9UtK2R",
  "key21": "5xwRDmJev4CChsU49gEYsyQpMotqsuAqrDax5yAeRVpsx3G3zAALwsRBkj3og3WyqEkQSfRTtjxcRV2sLEjPwdUR",
  "key22": "JbHC6cuZ18t52sfL7eYYSNvPaeRXtUpUtaLUYmTiFu5x84LTnXFQa2aNUYYEjcB6T59wFqf181EaWnmhinLRMCa",
  "key23": "2C2ZpiMizeSMoH45sjsoS8cfGX1L2SkHaF5nkPmRmGSCm8cNc3M6vyTm2s6NHDX62phkdXNGkaxhijgSQVcX7vnb",
  "key24": "3tkAtjnLL2GKosBgeUrCeTTg9Hfywrhjd78hXWya5pVPBWgPTrW9oUbfjtYPXWnoa9wG2ebwFStPV4CKi8qM2sSJ",
  "key25": "3ieWB5aGbBN8KEmrXNW3b7HLTGbmLY5sVQk21bcEwaEdMVvhNZwtRRvRfAfbquSaorejpHmdmmAoE5TXuGRPUm5Z",
  "key26": "2py9AJ6cy1KmAkdYkmZW2fMbyb8U6jp6uz4RDYRiDE5FW3pmifejkeyqanU8nYKCht49Ne1oUc3pcDMarneqQ51n",
  "key27": "57U3xHiUMuHss8stm4Gfix3SgqXrAxfV6CgYym6QaxXZZerrT8F8md96qd3FMTJwVEg6MHUwiqv8CtKmszp5iZWc",
  "key28": "5eFN9WR2n96LkwP19gETgjRSZrXoCrXWFXMr4X1vCbk3k5QuKnEqvUfh42TR5QJ9sM5nV7LktMefQ2PP39h5dibb",
  "key29": "3THfxP7YGyR5nABi56EpsEe1nCxVkivopvpGNDkkZiv2AT2ZU1Mga9Gi5MzHNR8ZX72V5x35nHZvnuUwp4fVLiha",
  "key30": "ZMqrtnNcHGyk88Fd7uzx3tsfHhQq7tBYzadXM4dP8R4ZsSp1sF1Y9aHJC8Kjwotj123rgDjTzYjoubrRpjsyozY",
  "key31": "41GcVLJV4L7f8qhizPMc11brbZQZMYS2dHevwWn2ZEU5epK75UUWDigeoRC5z2Sv13QEc9ozRvgmcSLR1c1ivQYd",
  "key32": "2HwyvrX1ajx8fHLs8gaF6EzNXdBYfYMuY3MdM1oW6vYaedzhLccb3Djt5K5PoabjcvpYMrsDFsqzJvpEDVWKTQkT",
  "key33": "5BRznfcMN6tm5bdZmGQfNfizhYxEnSQKJu6CeGLVMUkrZ5DabMYgWKL3DvZzeXxnupKEYyqxJdWqvmkSfLPStMBg",
  "key34": "4t8FAXCiUvPijCVTo41WZh8fwzLzJpUXWKfaSsUarikJJ95QHLxAtbDLWLFDapoZT9T3SsumAdEmtry5bvarF8R8",
  "key35": "4Xg2RZq5e65gWegWxhAdbjuCfLsPnXUZ5SMPrwSfQqm85PQQyEZsQqXf6egUPZJy3QmmDVKVARo5PTzUk6cgBXQS",
  "key36": "2NP7GyCNqfJF8xS8Sob9xz75VD3ivnmqAcWeztJRcwJZwqrV5GaHqhWJwYgaKAmNfZcD8d2KCB52KrfGmEZwXYHQ",
  "key37": "5bs6q9mMbzWKtC6mqkyYoUKYgmamYgXkjREn2D7HU3qKJQ2ycwMzM4bRWSVPNtwWJNZotm6rHGznNfHB3GKfgcUS",
  "key38": "2j6m5Q2cA84SgUa4MuWzPQenjg5AEMpk9vYJ1t5V4r6UK1z8qacjn9Qi4G8CLAw3TL5n9CfqaGbhKRZhj1hnreL1",
  "key39": "eJSgoUmAoiAQ2sRJBUFopDp6AMgE1p164xYvqAHw2pcAGKcXcEgCm9RuSrvEYfHtbzfp7yRbnh7ePtwdvMwdEzD",
  "key40": "4fwZNPnkhakuGJtwavAQbGQP6fiYzRDyRqix4PC2FspLMTRAXa4YkGPGASCidWjLbGZkgPbJ5A1qxScee5Kbz2Bq",
  "key41": "244JLEXUBATigWjKnfxRWRe5Caham3Li6J2Btv9BMpngApVPVUa36m1Rq3RF2Y7KwKHKPsJnYt3Rc1azpWy9gq2t"
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
