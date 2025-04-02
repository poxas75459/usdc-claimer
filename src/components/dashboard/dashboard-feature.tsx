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
    "3bNa4YBjy1saoMynPhHX6FqAPRdR3aBRz2DFc4sY1ZpKqX75TBVSnutPamCi9peAHtNSqnoQKnCzmZVgaYS1uqNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eFajVH49GpcRVWwTZgkJbfB3DrAovHgdEYgQajPB79Y6ySZyrWvJzCNDPtZjJ2kEDaF7ip4RFnvsSpZEYdZrFY5",
  "key1": "4Q3JdUw2nu7mqmWjSC47fjpLEvrFsbZMwasPdWqqdaZSPdrnYBKgAcdRj2Ec7DSh62HZsVmYtYtmhCv1f68cdFjk",
  "key2": "4GUpEUJ8FsUD3cr7TppDZ6Jm17Mkm73FYCJrup11fE8athLEyAqF1tKz2UszUdiz6RY3N8MKU8SeqHBCUPE3dKg4",
  "key3": "4DApaPuChcxuXSURjtFk2wLyzBu5znMsPkvdBzGuGWLRV2wUqiPLGw48gfr9dV6hXiaySqKb1ukuMeUtMzvJaxmM",
  "key4": "2u9PAjcb6Wvry9ReUU28XYfsYeXyacyWahWC5UmRTPfmWMJ7S7X6rVfWUfhRrJ6iHNaaJqDSuZYKSPFGd2mAS5vX",
  "key5": "5XVvUibDmyxezUyySK5eJuTuqyehCRHDSSmJ3SYSXYXaE3EqdFGet76ikgiMJ7fV3Sz1n597UPSgDinPWDLrAjDp",
  "key6": "5usxZx8Aza6YRbL9YfNTY4pnzLzFkaP9qqdRYfueWaSqjZEzb43dcN59e7BtT5j3Ahr5sTEe79CotTJ7mMsuc6VN",
  "key7": "59Mj7fNtQqjYYtbZ18rDdBYUBTvVd7vR2nF9kcUpuVHsUFTt5cVHDcSeSuGtXYuKMWFHaFg3bWnS3ZFtC8oqdezK",
  "key8": "2Ebkvvz5zrBVQoLxuzome7HRRNE5VzXyPBHRGWXebsyw7dkEpjPcE1ws5VMsdibRZe9S8VUY7iwmbvoJ5EgTukz3",
  "key9": "PKPuj96bCAotdv8RdAkc8fY9k1fByKRvHLtQw9dniUomBXsBL4T9qpYqZSbCDfNswsNkpmLu1ToRo5bZKF39iyQ",
  "key10": "o6YHkx275shBbnhvNdDD1zgk5M2kQ5eNuR6BqoBLW5VoHwLyqR8ZZzTfBQgk7gFWbia6Z8JpequJnvcoReAzFPL",
  "key11": "74AJ1v9mBJWP9h7VrYqebRjeisZaSddBHtLcYYG1o4hayHzE3gt48jFaYWEBVN9XxXCjcNwKws3zJf3m6m6D5Fj",
  "key12": "3tfGmbY72JymPbuURYueSaZUgb92oEWLRBiJhBRwMHnqzRXaCHTQDfYbJEJeurFxM8RR3im8UB9GxiQ9KdYCXWJ3",
  "key13": "5jJUf2cPacJBzD94R2QiHMDt7QB3qW82aPETTjLSY6yHB8AfSoefqxMSiesyY45WtdtebnY9Hs8jGLyaNQhoH8TT",
  "key14": "4dWDmQmSw3oN1WbswTDHM3ncXM5dQLdMJ2wPgt24ZAmhVh54aZo9JvycU3Qqdx1guQRfB1Ljks4REFCA92VsgxPp",
  "key15": "5ARnw5eMcVV7F9XfgZTmuximxW4iuhizpkvA78X2t8n5ZNQAnzzavX77364Y4Krbqe67oCkM5c3L99B5iJhxjzta",
  "key16": "2dTRZ4Ak2MgG1eDdwV5kkE7JGABUXRgYtCLoW6ycbUr4grU1GkNUvznEdjzo67vHuWN9WS8drckeqgPKUBHTKnqB",
  "key17": "28WUN7AghDEJgFS7RWaN3huWKJeeznxkFmy616ucBSmTpTeG21nz1Pb4h1TT1ZsWjr24vHLTN3PDtY1PXnpViHtE",
  "key18": "2AQazar9DcZEFUJfFWVtchwLm1q7MbWRD3d2rYf8mf5Bu5ryFHR4Y1fp8fYjxWy7yj44EAvfWjMM4nG3wiGgd3Q",
  "key19": "29W9PwPsjG22e2t9NR9fFazk88AKXjwXbif9hWLSzNexQGATrthE9kJxp9o4MPhHJhUoXnE7WmJbfujswjv1LnLL",
  "key20": "PuhdZxmWnHyYbFYDwriWoGucfuSnYc4rpCAepnS2m4NwGgFdPxF66t8KXZsb9WBx6ZwXLLQpho3zGP3MLkw4GXx",
  "key21": "4PT9V3YmhxZ218DrQXJuq8G5SmZqDifTQ6GEshM3CvkvjY3QLj1ngfktEJMbgpiug1CMnWrt8RvZ4xK14sFjcBwi",
  "key22": "35EP4pshqXpHVgm2QqcztmfXPSBYH3fv1tWLCMxRSpCUSeMdagc5k9tvmkfgvYwWdSTvFFgPYugBZWahU2HDsMDF",
  "key23": "3JjvkXXAmFpY2hutNvXjV7JCb4tYQbZNRC6KyDJ5oF1pjUQATSwo5zLq92YytjKw3jgFnMK78H1ewwXtGEJXTLSh",
  "key24": "wzRDcS3axi8C2aMtBi1eP7okhrpcjxG6bCXaviJ8HVc7dsqG9FXDbsKV3rHNbYq5AJbf6ojT7dsFFkFw49JFvhA",
  "key25": "nowpXeQAiqC33va3sBhhDfZB6mPve8UuyYWfLe8ysMMEtVcUKLHiHbuDw4an4sUDQhzR9YDEr1KjRFX7AW83k8e",
  "key26": "5dVERH9jkGC5ELkf2Uz8VYSvCgiAe4Pid89T7ntsV3pNM4U7mudAa5tJVyeNB3pa5a2nMsXJUbxSLuXqZfpsuo76",
  "key27": "Cq79neDQrugEppRF6keqNPnzJXBDPki71sNW7C9EYRsNqPRtMe9bu2UZLWCJUBNheiKVLPs96xbgvdtskxRirQ6",
  "key28": "2ep43egPFHtJKDRHd1xDD8zkeQtjxKTac2LY8fZDBhGp1gutvFwJ8hYyt5gdzPBobR6jfY6mwxUss6u7nJGPUuVi",
  "key29": "3skcsUSXunQMSVA4oiezoabbipnP9ghjZUzPpQkNyeXGTHmQtoktggJoMiaBpycBCDEiRMWQ8EPpq65GqtdTmw5i",
  "key30": "5J1mMaKZxuDLi74pameHmJTZZJUQoPmCmtMxjKTuRuoSCxrnsPt24sbKbaRYqXuEuVmaDtt37BQGxAA8wTk2oJ9r",
  "key31": "NZKed8zbaSxZdg38zzN9dpZMLqEyaef6f4kiQ6QsuYpZQHAhzuwGgRVknTGzmRy6ngqL1gDaa2jqmyjyFNMnQPG",
  "key32": "Dv52qsj9fSh45WSrPvTx6k3q5HpicqsbS5gSCraFheSXNvEufUubvyXW4M95Px1odu9bsg3WKsnS4SaEVnG3iTW",
  "key33": "F5ooLB17crqAtJ52nsAPoGJDButNnrg8o8Auuqs31mvBLSr8sNE5PMhae4ioKWibL6YkXoparDLcHkLFszFJSXi",
  "key34": "kZLUxo32Wmr1T7w7jE8AcbPkrnGDZTPRFxZR7BFX9Ta6CThoeop5DWFPbXfbMFanKaq1mHqrY9DECGYqvKk5Y2w",
  "key35": "3ksdjtRKdmYVqrq9qVC5GhEgFM3gfH2DjXGmi48iVCHgcqMLFSsSVJr1bgYkGbCdFZNv3JxRcetKCEKvHR9c8Pm7",
  "key36": "3T28V531kgSFv9xJqQExBQGWa22NaE5gQC3zCaEAUbyEw8GY6VQv9Ron1wUDoWy5xYZP937B5zzSRGPRVtz4myL",
  "key37": "2SzaRjHXnKomTxtXTeB5wbxY8BwXSogyQGrwvVpi6PiXKNjh81jQ2yemKGHLDkfT4yuez4oq6dw6bGxNk1LAZ4En",
  "key38": "2UBtEtN5Y8MCYYh4XgNX2iq4oYdYqiNDVBeaymq3yrJfJ3ZP3vEX1d8pC1NFk2ApGhw2mGQ3CV3VDWofKvDexGBc",
  "key39": "61Mi1ev6DPdd9dw7fC2fpErq9esYwCakD9qYe7DPdZHp3ZgP6TS5zMLAzpViEfVXbVNZ2e3rNU8jYveckDnvvL8Z",
  "key40": "5XepgGKzMa2foniCUdEit6VZKe8X3gnoYXzraPZCbQCynAjPYJBAgCJBtGMArBH5ncLsG1uD5bhaYrFMvZkzrLfK",
  "key41": "2HF2wELnYKVk6FjrU18bRdFGJSofiLCfH1kmxCgoic4ftpgz6Qwrr1Aj85faeUbBwssvfB9epQf7CQRuZQXShhHm",
  "key42": "5nNcEv91vC5bDwpC2PYpf2zRw7ZKJc2MYpvhvbFcS7ze5wRczru3RwJLNGtMTRc5FxAucJMKLz8Z55rdfLyaMYnF",
  "key43": "kEumE7zCL575rUJJE1c477vZ2GaijvwnhUUsEMKJRjLdKx9HSh643LGCPS7k23mxPjJEzPdveRcgyAwe8Z9soz1",
  "key44": "j6fUMTrHSqqLVm85UtysiYXcF3R3c5tTEyx5Rp5pra1Bo47Cc7zz4ZG4K1Gu5htf7SV9vWu5gsg7NDsSJg14793",
  "key45": "2L5tgVcUkVvLbXuNsw9VwyH7wDD9s7opYkPhmxj7vsLkHbe9QFp3rVR5H2xRqbgi4uZd6PWxdkNjWkbYmCv3y2D1",
  "key46": "3MMLM9MrHi7nQmHuzhxK5qoS1zZuo2fWZNk2xw8zhbvJRmPdD8wgqnm8NdvBGcPDn31rUcELBh5S3Ek6s7F43Z9x",
  "key47": "5DQnihNSL9iajgV8QvPZr4k2SuFkAVYHBDGfVsQkEaZcXtyFq7k96GQAgMw1RHvQNeDRghho1nqTDcKm1sRY4yYP",
  "key48": "5iky2mNVAq2oDH3wFGPSxdZFcNaQXWAdvvcw4cVcufMS2mkGdiC34sbBzRd7uH3CdodZRojQnZRWY538npFqkdX9",
  "key49": "5phDd5e1QNKVPaY9ZCBJ2FybYoysgk5TNy6hL96PDDGSFYRL9t5XmC1JjvHzxUGbB6LkufJ7Beq2urXET4xXG2DJ"
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
