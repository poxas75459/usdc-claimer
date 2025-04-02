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
    "kxF36t4NpjWxgeDrmMAPCvDGLZqBKEvjHPmQutT4bV8tfnsJGHoRhYQHHh4NxzrS7nUyzFCnPMdaTyGoeFjkBMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dVPpUFiV8MsDHfwa2BXoR2Ky6AW15f1qkk4VKjfkcu31Y2fXwvhdFuJysoyFEgXYLkYh63BsLvh5ZAcu28632uy",
  "key1": "3qeRpniguinZhWXs2JjJkeTewdQbA6Hny4vxJwzTc81E12jW9ijWaYqxEaRN3ENrGLBfHRBVvvtcsHKHT4Rkpyka",
  "key2": "2kX7UxRDxUJt96VD6qTUgfgbARFrMjQATYyG2kXoLYNHy76GtNqktdFfZh3ENGP76pJTA1YgwPCMqyGWM4xU4MDx",
  "key3": "UzPjGgkri3uUbFi7BiQFN2v2ogqvYhUhxDgWr4wcMYfRMdPVB1QywYdmyR4GHwsDUJRMRK5MKxAXaRwvJZZc9xm",
  "key4": "5qFNTGB3jDdaciPUTFQxxnTcH6MS4x25UHTnHzK4qk5J5rxFYRhzBtXzmNWHmkM46Jdgc6xNvQRB35bdRpiouJN8",
  "key5": "oKJYDz4Z5425xZdtvRsooF626eCqV1JWa2oMPyVgDbs7PiqwnK6bHgPBYtKqb3iyyXaT38ZY3fipQ8Etub5Gb5h",
  "key6": "2qt9nxGXN1HScRSb9dmYWmLmkPsyrLwQXCxVA2zoGaoHFcrqMpgAmrRNHhSmuhrwMkLYxv82XQ8wN9DuHp29acjd",
  "key7": "PkppVGqC7FP97w8VRpodQU77bVgodeNBH9LfVPKNu2imEV3vpkoJbwh1YezoY4Ttn2GHr3VTQ8omDSEV54GsBNE",
  "key8": "5ZLT3JibEo6Bm8jwGtmru2w3M28pARfJjvH3ri3iRVW1fJvtrSTWN2ThfF3ZzjyS6KecfoVBHWDdt3sCYs5WJjSK",
  "key9": "4ycWgay3GVXLdE9fq17BpVLB7FVWHrne5xC1xYH6LEe2ztzJqgYXG8Yavv221nyMYc5wA1W2cTbi7nx76nLnAqmq",
  "key10": "4rwbAkm4Yy6noxQDKWqbeXtZLyF8JxX7qa5RVLp7R57dGubsKH1AcRayoKJzMMwhHFNQLnFHQRFhEpdmTRZnGwgV",
  "key11": "4WFz9RoPRSCLRxBEVb3g4itJnAuEzynLrvepJznDZe7nGA71iWY6p5kGfYnQJCmKBSkMKJhQKFKQLuMwMa9E2TmS",
  "key12": "5X9Y1iSeTbdaCUhHKNUaXzGnn3mJE2n7bB9qnYqFUwXWdajBjD5TrnXZec79ULs3UHeQ8assZJKnggeRUsThW2JW",
  "key13": "67cJB6xmjAPwwMkrWuFXvFkjbRXi65A38rbTAMD5uyDdZQSzzegctm2xSNXYXzP9PvhzCNBm7A6KdNp5M6ncH8vw",
  "key14": "2FRw6sSxxDZYCr8iC6j9p7zcyVVCZhaQMwR6fBBa75KeSSZbpsUbEKcBEWrA3FC1oXvJGmd1rDxnFSfzR2PPjfDn",
  "key15": "4t8yuM1EUzaVWaSShW65qTeJDxvFt2CtefzVapJDmP9uYncQTeHpKBUCm69KscmpRsz2rq5GUqddgeTzR9sttfBj",
  "key16": "3jMQEuBjmmDc6G3WJ2Ac1cN9nxiXjgD8G5KsLMhMj8N9uvZ3W2fiWi1ock8WEHEG32JbAV6R4nGJ77h3EF9uUKXt",
  "key17": "2zhUZuinQ2tf2963NYyejnhE6CBg1UuC1HWMCnTzemFeP3g4jpUMqobcv5Xv8Tt7XxBTYhc92WQn1B6gAGgwCanX",
  "key18": "4oa1QXcmsZogifD8UTzQhaUCQWd8dZBGKbSpTx4JjziirBqA7zFWBGyFftnke1ow5gvZQnbUSM7SSMoXhppCdWb2",
  "key19": "4Ct1ZVKsPDyztyHPgAcKQSXRgzWLvjd18WMn1wNGPzJVVwdEGptLDbBTp3E1auQbAKrNZB8GaScL4MFTbRbMwsv3",
  "key20": "35Fgmg71NRdoKPY3PSsGA8wuaEn8owYCDEDejgFJ9yL1UjpLMPKWYyiXGZSL72x74ZU7Ht5dKRoh2qZTyFUTMKY5",
  "key21": "3Abou3BygnjAeLhRkC7ys4fdqvgCwEAvGe5TAxUiFuqJyoBKBH6kHP2BnRDo7ptkwG3AjdUmBmVTYqrJvi5JXANK",
  "key22": "2MdwBw7932NNhELgnfytckzKrE5HQ8LK4CvtwDUoKxuUvs4oUysVpmkQH5NoZ3cAMxszGGwYVYEh6XbcxrJJrvsq",
  "key23": "51QN6v2J6ts516awzDHehx5B9c5SznDahc4fRSkWNuAZ9JSgtFRhSj8DLGqEcchW2kQ7FkFDGzYfDW2Kd7tykamR",
  "key24": "51qkrRxbqPV25jsiob5mp31KLVSSN7gAaUS1H7tBMGdXFpwu5uPF7XW5xNW7y5h3t4hCfAWUqFrzYxjXii1nEd6L",
  "key25": "2RpX741Fdm9cgmbDfSsvJ344uBoMJdv175dg7t55vzWKkvhZ5o8cJXASbEHMvcjLexizotZEjV8vVQtLGYjd2VAQ",
  "key26": "5yLwFYtVzoqTSnyxjvAptiXxrSCu1f4wj24UrrQkJqaXrhefNpVmTY63SzAb2hDcwnr3Vum65XVPxWNjQ1qYYCKq",
  "key27": "3y9j5ZCpPDe1AXLRCEftHKkotNZhbfJiEaVkhJLXSqLZgUtvtCc84bJVF7gFKotkbAminMJ2JWjDX4TG4wVZvsPY",
  "key28": "3P59SpKFz4WPTnT11rek6kgZ1Vn698xxWmzPD3QzsZ8fJmfj1FQrBA2pcxtdjjN1baoiVPCAdxJQWpxSDFHXQaf",
  "key29": "2YMQCNYc3tenERewLzvHTLmb6PSHBUoYkwWgsda7DjswKtwZbx8U5s3ZomiEFgXMbAw1C89Sk25PZ6K4RKacCVXA",
  "key30": "2L8LqJvGvBhawarMm8W2UutqrFn5Pm1Y8ABXvBaNFi8teT9Rdhaz9bNitAecHde8moS3ArhUkeLDTLKsM2WJFSTp",
  "key31": "5VubBm44GcDkU2JUELmEMRHJAWzvjtRF17DKSMag8BHrbYk7zXDZcG9QEYwBaqQu9HwTy6Rv31YB9X4zTxv6ZGRE",
  "key32": "268a593AwKb5y5zCDVRwzjqCwd3S7PLU1tAcY7bBz2LQxQtsicYRWALVVuWsehcpfeeBgr8LeWA4vyEmZ3A22tnv",
  "key33": "4CvfN2Gtbj3sya4Rxp3Roub33CweHB2D6Y35J7sqUTaVPMRuKV6ioXHcRxiBRroNaP7FSgwpVgxpKkAqKrmaQWbx",
  "key34": "4Sp8bcjbmtGVhLiX65i5eUQg5GhyHoc3qu7cuh2RHfuasyq1S9F913o1zB848JfTpghucR5zThwwpennELNhbeSe",
  "key35": "JWieS9nna6ViccXWqvaGbuxKh2xkKWKLycSLLYq394sJzfksc7GTCpmZMkaoLbzR44kfGxn2eqCfWCVNxVtFha8",
  "key36": "kHdjhP7hkTPp51FcsQJFZtJzCayc9Jpgcn1yXCf45qfYQdYCL1FM6wQzELz15eTxZUQS8VQaDoVKrKGvHMbQJmr",
  "key37": "574mNrWWyDaQY14B2wDe3CHVqBfSWrL2gTfZ7qcG6yPTGtAAiFUwVzhjyaKDnQ7VDzazmhwFzbdSGERwTdvRKtGC",
  "key38": "Brc8KdyEmhGWqApvkWkZEubzKSsfMYA4UCMapw8eiLoD6tHvqBQ7vxNqcGfrqy8WzLZZC5DDu1F8jWXA53VxrwD",
  "key39": "5DPuEG7ne3reFXLL4ZbB8zb94tco67PcdDE69txkymEBY44kA5v6A4oZhDUohTx9eETBsaP6Wcbmnd9Awd91p13e",
  "key40": "4jiQex3bJhCA6YH4K8papv2VmMqHMnDw7iDoHbgrbNJkF58RVdPToScr8XR2Q5eCCVw6Fj4pprW4hsT6YhAqCHLm",
  "key41": "3KRKpvWKd7JANud3V8W6nRXgCUYdHYR9QbTRUb4dQc5mzSQohzZFRGhTkL4HRBzuL3ZTaEhsciQbfxrpbSAqR8ka",
  "key42": "3pLMAB9qN1tYaiShL7NviGjwKwdcBu5K8QxLSzTGcWEAkppaF927XEA8gm3SJdinoT8LLJzSP16efyftddZpWjQ4",
  "key43": "3pks75W2d6K5U1H641i5YLSwTiKT6f3vBbZQLAR2j1d6E99wcePqcnoA2tUc23AcsxCogNtX7e4Z3LHG8VVxqs7V",
  "key44": "35fB5j2GDSKviERd9SHwj13fvE4KJLNbXix8TmV1WFFSBAuFTx896garbMMEaiJTcRCoKtvXt6aSF27zZ31MCXBD",
  "key45": "2YRqEs63i1vBVDpy6gYf6njx1opArShHXesejPbXZiEPhzbvFHeo5vow4Mx2YFgQ48ZxTXxnQUyAFfSeoMFa59cB",
  "key46": "4y4ZwC7oDCweWdWmS8Zdh19UNgf2wima8qven93LXn3KdxCvQqRx6QFAm8uLzQ7K5xr27NdFDT3neYeMCohfaPUk"
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
