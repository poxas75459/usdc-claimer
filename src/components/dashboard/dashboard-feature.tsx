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
    "3waGidsuFi97W9YKncYGXWQ31rqHnXxZzcZUqNwqyfxM42bVqc3ktXSK4NSur1T3zoPni7CDTyeYVFAnn76fEqf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RnQFTrj1eeVgJubP3QeHKAGWdZZZkosgXCcVeGkYBSgFd3wRBTS3rdSLY1V7VMNVEN4PnRfpxfssdPJuGcsFbLJ",
  "key1": "24RwQFX7wyjrbj2fdMuuujJKwkJsVS9nZfdSeH2fEUTWVcFQRZw2iKUX4V8GrHW6XkQ63LZwyVeV9qWrvJpsPHKp",
  "key2": "3o3TJsaGFnSqsdoa246JfukhFnwykDu6XheWn6RX6vUBMuASQ1cDvtBvGpr9Dpdbyw6Lnv4tMBCf1kBZRMSw2VSP",
  "key3": "2BT95r7zyzxkTjR6fVTJTxioCvsthiiPBvPyRSdRqMBqSGQuh2cd58dPKtw9CDxhLDo53tmzuBvGKvJx85P4wa8t",
  "key4": "5dVmeVAipVJLjEoYNP1GFopwXBiYt7DXdiM8UFJvoUfzRjbcdv7mMy16P3BjkHveiUKAA56oPTNXi8jzSpnzUNvU",
  "key5": "3mwpVqdyBZvN6uCiFbq6guvdhFXMfqJNi1pRTw5TDqommHbLHt6zf3NcYX1Ziqut29VsXg2WMK8qdkrdeQypiCKe",
  "key6": "5bvrTDzYBSx1PPEzFoaignLZ5fgwqyZt6Qo4JYEWFYe9CUvJV52oCR4njyYo5YyhaXmdAKAQZyTv3h1xady1p6GN",
  "key7": "634jL6dFfRE3gwbM66hBzmHpgfZic59RCBTHCS5nsG4dsrHGkQuPV3uAzyp9UycWMXomzhMDUz8tGgLRCsWQwBhn",
  "key8": "2FNgkmmumX86MCcvhnHmPGkJGkuHZET6qjp7RmybbKneDAe4bcrATWsFwwfroN4qxMi6kttAetC41wQJ55ZYUsQz",
  "key9": "HzLFoVKFQm9BTmiRnYJSHcpDYhUnrfEkVjfPyMW49n4bhXSJSP6bpoUocB12YAweEr3BadM96tRqKwg11THVYgT",
  "key10": "3kzHgvYj5weYtD1rRV7mziFZtWSR8cnTwWCgrHhM8ncqnppNhWzEfxzpaLSvY3U9qsXs6XsWcw6r3wAN8aXAr7uv",
  "key11": "hyXakw8Bbw9JqDRDLGsXFCuUyCeEicY643vCQPhbsCVkazriBmFvYtZe8JZvpzDUHYaXKCTsZDvNzgPQNy8EhMJ",
  "key12": "5o4ntLLJ9FozASPoR5JGrkwTxo9VAvPqVkUS2Ssn6fL5wAEPWqr8FzrTAhzcmdzQAhTEE23ekh2YjjUU7GpazrkV",
  "key13": "yAoWF6rc6soMVz69CuQRNtBiNiaUGGxP5CXcMHsB5DxAEj671QuE9KvQooTEmbyHyJXoJ5e4FNwXKieM3M8phnZ",
  "key14": "2fYUfp224ur2cLt6qy9DnG2Wtpp2URbL6mqLSq8Uts2W3bidfi4JyDJ5BqHtsnkv6hrhAwp8tgtu8kd3Gr6ZdKUJ",
  "key15": "59DPENZsY1YdfUUBKosqEscQ9WNtee7Ju1dcNb9CBipXnA7ZKhv8G8vo5DDEfeHxpfYLa9Nqqt9dVTWs34A4wHrn",
  "key16": "5tVatRUYSVnMFrkffBaaUi8zUPCCsthnsMeeJiFmrZ11p5HVM6xzbmJ5V3PckFWrdfo1x2ygiDnFLMig87rHKzwp",
  "key17": "rsmnz3HjkM7DNzUJBPDN3PRzruJnHiXSHL5BxWgym9i2G2RJYWp28Z8FYZdFpdx1hbpBpzajguCgtaSSCbCS4bR",
  "key18": "5j1vdGKGntsPLukpg78s7hoz6sLdTkndpyWe5rGM9QkeoNKf3xH2zNmeJPMraf3HGptFwkNkQDiwvVRGGc5UcjgF",
  "key19": "3rg4y5zSBG3eTPK5MgjHaNynhhwMhmXnaYaH2vToqMULZMpMY9rq2mzu6XB3fKErgEaq6U3dAaLGcE92sAhzHbnw",
  "key20": "4TzkRAHcZd4DJnSLZz7rPu7Frr6NvwQpMUfT1uKo6jJBtXSxgYtcG3T8ysL7BxgivRYdE1U4S4msk4mR5wieorSx",
  "key21": "75KWASkVuPYBNaeCi6vM5z43zazwsf4vL8UZ2gY3Q5fY5bawBHpN2gHJTzW1tHimguyeyKKUxwjTR6Em6s2uTir",
  "key22": "5dspEHL1pAR35grGNu4yidnyusmoMC58KvAukmcK5aca53AJY1y9Pr9KWaeFkvkRmuHotQdwbX6fzYjQ8sF31pKg",
  "key23": "3YhanYyJoHEjkgjfZ5iRuiEYrmPmAGxqNijMedaB6h9ZDSrghurR99KgM8TwrFCmvS3kbCCz6BxAHQcyp1EZ9o78",
  "key24": "4UTNFxNEzmhMQt486cxrF2PzwPj1mvz5u13WVfS8Mr89qdULJzUdKzxPg51MNxQRrvdvTwHTfn3GmCeVvXV3fHY",
  "key25": "655b4XpBLGUU4FUEBJTQCBW6fhKg8RaeFM1hYvRs7MYQnEiuUxiN6uheMNTtUuEr5cHgv4wCrXann4uVxL2vCf9R",
  "key26": "4GPzumPcfEBiWHnsGxuiLuyKCvvQvSNfRguYyYL6p1u8HQVQcyLCyoG5NnAcPg9e77M6wh38jHmsLJmgsSPmPFRQ",
  "key27": "4qbSbAUKQUvnoN4WvPsXtjVmfB89b6NN2eWFdLcv8Ehh2a5TeRT1APWBxLeTv3ypsWzHSDUVknFXT8ga1UQYqtM4",
  "key28": "4ziznKwVDv2mdta4F5bVhjKfmYXJJqZTgXXFbHztGg22DpBbM922pqZB18RZxP7oNzkK7CoJhJUGDiEt5NnhWCLL",
  "key29": "46eeiR3P9BhvAH3H82LK422mbt827D3EeMfsMVfzj8kps4JCbP6qZnezXGT3rKgSbwzTJ24dB3bHW2BSCqRes1Yr",
  "key30": "3dgvb9iRQudUERyDrNRQNEo5nzPKYbYqoMA4oyDkQoqpLgBdb5BgWsdjekw1q4P3X76DwtWSbZ42pENkowzF7ZaC",
  "key31": "2UMXihSPnWQWbmPsnXk1RWBqZLWBQnmAneforZ82Qe8Zr8XtuKA7fsAAsPvBFH2n7WUAyPt3yBT6bJDEqWt31rcC",
  "key32": "pXTNTyvYFyAe7W2Evk8xfemxomSxyP64zAncfZobDoYXD9BGTRE4p5d46XznFGQwF1HnFYwxCFarpDtDVt4R66r",
  "key33": "4H2EJyQYywUQv1ym7RNpnrF5p6K4LNfu1tVgRR2KfQqVYPiavyJRowyFLAFRkKvx3tL1czojhMi2Atp7ZL18BqR5",
  "key34": "3FCMw5EHnuFVscwjwXY1ihJ25Sih18NBox29arqnLugfPbDJdE4swKtWZmckP6HJ1gTcRmUAQ82DRK2LyzKzfRNZ",
  "key35": "5WBambfRVyBBHLCFJvdEHv8JV4eekR3MVQSiddLSErLH7z7LvAbdMCzYY98aC7JXi6zrFVRt5tY77kpL2w6NigaW",
  "key36": "65ddJVFm3Y6AngY5T5ST24oGumgkhUPCQGh4CjahmLNLyASF2SzDCa9xmD4Z5Pm8H4cZgTXkiQp7mex9vv34tczY",
  "key37": "3M2hweUkgr65gjfeiPWsdctQn4GuVoXma6Mqw4ssTCt91AkbUx4tzqrtdzot5bsDxHAMnbEykcrjDJamhCzJioEa",
  "key38": "3P3E5EMADQgjvxhBStC2jkBnVpnK3sLGpXfuGrEoo6BgUqXzoVbuSXjR7VNEgzL9x513cUzAtNqSUDQA5fZZErhy",
  "key39": "3WJafquAZdPfQRaNkZtmUwz2r3BFGhESHWDfA1ohKi5ft4Jn4JcpxKogUriZjTNKaD4TmnhoiXeVa7QNZqtQLh3m",
  "key40": "2nziaqh7Y9L1qi9pWVZSncNP4krAZt4zxQaSRYhhkcRba2uhY8sBmuXTQL1Qimxh26eNb6vkYB5eGnD2UTqmbRMu",
  "key41": "4ieVniivMH4kF4swMqKypKEVyvVmp9YZUojhRRgUpiUbp3gaimX6scrQFutrSkyFBRHE3bUfzfnisoFa4fZ6imMY",
  "key42": "4CXC4Seor8FnyYUzGehvv3txAdfng7CgcZ3GdbxCznd9x2HGtt4tctHxKNDQ4C9gajTiUiNfJjxn9hZ9TJRpfYAH"
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
