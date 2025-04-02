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
    "4UY6gGrrcKjwK8beQ3dGb6k3621XvuEzyni4XYCkpjix2V5F1yA8DgZgwqXksoR82xRJ4AhEYtdELfmrSNxfzqqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uXnKgTZrEbhfbT2JsJQb2MaBekD2d69u5uKN8uoniX3LrXpfJv9xmWxEyiZPtyLhrnCBnhvnWgxXyAFHDGfq8ea",
  "key1": "9KjzZbqi6vxyCBKTyjNrGo94NMEvzaFPr5GkvvFMif3iJSdUUTocvHUbNmkWtzmLb2rH5fto1mVD1XFf3hRfEeN",
  "key2": "PjQJNRzPthd3zmTZNLb47K4UKhDvhcyBUTMKKUvDnbudY4bLcLnoAbfJt8x2qcmA5Hfmkm2WUMXWpcVgxtSHTWZ",
  "key3": "2yW2oGE3oCvAJbdDwNQsXFyLuSuff49BZbkBr5psRTnfn3CT7NdDVP6dqVG7Kf3pacXeoxFa38DmEtT47uQEPkh1",
  "key4": "4MAiTdqRqj7Ag2DWar3xEMoSGKMvy1Segxsg6ivsQCJ1YsM3Bovq21aXtUaenjJkKayiwhJMMPi4iygmcwNyKzNq",
  "key5": "5fDYMtNMp3QH2xPH8nVgynQXGzboxYYXKz179FAX8YUPaMEe921oUCxnjtPLXnu5srDwBiynfCdY6PqomPxWsBTG",
  "key6": "5U2cKKqndGYGVvhobuauPYGPnKRyNo7pd7CqMNum137ZEwTU8g9qHj3gnvua1QuvUxcGPANhy2oKGck7AZbhwJzT",
  "key7": "4QYAvACnobuVm1yamQ6rjNHAJ9ChUtiQJvhsuQWZtb9fuWmr2SVbYAYkj2u5RXK3DfVitbDHNqcYDDczz4kiyCLJ",
  "key8": "3p7zA7Wi1JtNiN5cY271kiukn8SwtqmDo85cRVt1BUyCRpgxpqdpbibFbj36WYEVHfzU3jMmoX7jxQPFYpaQ9Ccs",
  "key9": "4nm7BhY5WgrzqeXn3h18P85Qm9oyLexN44jQvbjNhz3U6TDbuBEVfrRFEWAqnoMQAaBkg56zrpsKTYj6wU4UGdts",
  "key10": "5fPQCqEQadQhCkbvGcu3GeafWX3zpj4Rb5ZT5Frh35Go7Yk31wtZJ6dGZy5Sf3nPqQZqtfcR3tFnaFfPWc1hnjs",
  "key11": "5SMWmD72GSZ2pgNfEQxNYm8iPgJkTs3eWXe39HmwW3CJJZGFw48ZqzgRBVUsTEj7P7dMoCcnaHFb9NaELUYsnKPX",
  "key12": "3qb1kMd154HzmW5iEQYGDLxEUT6nrq1zwStHUrPxAe8cUHiiQpQtbX77RkXgraLgqvPYQ7fKUGVMW7ozUswnu4TA",
  "key13": "3BmnwhQRivAhFPCBou8ULGbGXQEE37KXutyBH56JpjCtxxhG4Pr6SBesbHN8og6KdnTHaphGiKDmKgb15JCfYsaq",
  "key14": "Uz3CYgfMzVxd67R7G6pyXDa2kBX5DM7CVmDSUpsakFruvybumEQYjkgLiGK96c1HFJXpq9aZxTsY9WYE5zpcYay",
  "key15": "4uk21FDR1LUWxGkVfKkTvGv5MrZXpWnQ1goGkhSEmGVYTrHLALaatpXPaVD39zcRkMMj4Dn3pX9srhdr8Z9W9f3c",
  "key16": "29fbSyBdBQCqS6RAZmE9rhUTfTkTjP8aNbh2YBcNZe2btHnmyGhr8KRo2dQVF8CLDhBXhWUSArfbaSep1zHHSvhU",
  "key17": "3TTWcrN93qLcnPxBRoMn8PVswxwrSiPKPvkCJD9bjodGtw341WvjeG2dDpniEuxVnPRdCT9MmTr6Q8iHDXQC2TU5",
  "key18": "3JEXwbbGyecQAAKmv2FeCcPzHQcyjq2ThreFwcbG9x3Rfjn5G3QYpZjFLvJkgr3kepDhMhnsnF2wmL6D9msTypYk",
  "key19": "2Z8PHckvNCYjLU6NmxsawuwRUzopYb8WNWqFyKLhstaTK9QzGHSw7aaGaHxjeLqM8gS1h1rsPCtLyTgSTwCpBj93",
  "key20": "55vVN4ModzpPoEbvjwwfWZjkkjDv8XSXPo7LML8KNVw1sEy2uTsKVWqYtsBbfDToBkyNdcY5XjPdJFm1d9j3uyhn",
  "key21": "3JP2idfCp643YS4PjD3J4JJumWwpdYcGkvUPe8YGt8c1m9zYaHv16L8qwvhMsX6CafGY7dkqKJXkgdCuZrR6ZM7V",
  "key22": "4HJNGBzXzR8KUAF5Lgrk3HdDfYTNuQmAQhXDusTLK4wjwYp3zcB9knjqExPGqM1aidjbLufWQgfge6aYVfKdnxSY",
  "key23": "2ZQU76nXVchEMTWLjh8KhAfFAtYkBAJkVZJEXBMGjYidSbr3KxNFJDeV8SMoUAqQTdsJJAAJkSk4XStwkW2j132Z",
  "key24": "DeCRXuDoR9bbieSu1yT5qaLSCFTrZHm9sxzZ1yCZddKdZetfoE6s9gJ8u2WvTjpg9SFMcwLCVdYGXqgSZrvFBYG",
  "key25": "5drpwSN8bTkrVYUvXaHSXh8QPext9GsoiZHTMGMcJa9fikcvqPjZchsYRk9WLhZiHuGwCx3R48gcbH6vpeZCnF3K",
  "key26": "4DEGPBRNA3FtUohM7BRTibnvTTJDRaF6AfFf17hGfm8kYEA7i9ufvLjpd2cXHn8XHqWjPhstLFWn2yCeA8ST566B",
  "key27": "3RNVq58fKi1KGEg7xsNvYCgAJogfLCXTFSGNKwTie3Tmpc3VotSXyTNjCGG62jaD98vmuAnTZtQKYYKHh1xhSmJL",
  "key28": "5gmReug3iNpB3szbMuHA2kEvMNMd1Kpto8EpkZeWkiJRHKqQ4Am89JjNqTKMwP6D1dwC1zsvhuF8q81SJSgH46d6",
  "key29": "2jEcexrzcK67CoY1J4JjjrZ6ae6QEAucaUDhumA5nm4ZHSVATma6mBLkCQY3bHq3mRjW7vxELtzSaxnu8gdvMwYD",
  "key30": "CEas79X9RDtNTNHZDoZUC5qtNRN6xFiAMAmaHuVrihDS5hAbH4HviBvkgUqxAi4BqX2RYUWFrBhTriMYqgVomL5",
  "key31": "5Gefm7GZnbQyPBsvpvsqkN6i3YBiJPDHG9mzoUxu7CSXEKC9pKibqsRpRUQeri9jiz2X96pSyqCL625qYJjDJHSZ",
  "key32": "28FSQTwUQ6NuoRsjcPFG1CuvggEuBnKkS83ro2N8mckYC3VD5N7nG4PN5CRK1muHrH5bHKQLDTW3qqn35g5uvYo1",
  "key33": "61CFk3C9n67VkyE3mvZTxdmuc81Sn7JHJUMRYHKLymnibLopGqWU24gtmg3V2L5RU9fkSgybGdUkRCrZ1MuqxfFU",
  "key34": "2vd94kWDiL83WvbgobxSLB6dFUFDnime19ugBpTZbvDwXiPuf3ttb8NJkmxo33AA5ccS8SYrrcQ1FP1A8uUy65ki",
  "key35": "45sigC96Jm2Wao4U6W9X8RoEtxRgvjofaW7pA5UHD7YVvwQsnsyKDuLCPkU9Z278ENTjWacULR5LteQQ5EDY4o6H",
  "key36": "mZFLNFqTjjsfXv2rgK7BbFGSJvqBgyQKS9yv9SAwi8vuDE5AC72mC8F1bCyhsiY1a4AAc15Xcubqg2Utx5SdfZh",
  "key37": "4859xUBAMzhAakN3yFMMv6Yt9n4Woz3dQjLedCyCxGd7DiZ9eCia5jPRRCMdgvaxnpcUwu8ZABjWWewwJYp4tN1q",
  "key38": "GiwNW2Dphu8gT2AAqBZcYU6Wmk5ktWBhob8Ke2iJELr2MBUZZTxgKpJUqJJfHRDocmXppHLDtXL41DXsL6wVTGf",
  "key39": "4Fv4D6aqqsPveceuHezSqk24mDHMToMEKUEb7XJP34JmATNrW6L2m2FTZWkZXUZL5XcmjhY7bhziA1yHK57KzjC6",
  "key40": "41aQ5SrRjKzzsRGufP5XeEMFubafrji1FNMBXx5whvZnCbJXDsbeSXKjrHUrLQis5USTVHabQt1J61WKusq93xD6",
  "key41": "atzivQwbYi9pYMRpwTTCtxr2RmjnwHCFBXNUdjLEkbZ5bvJ7Yj6ndJArTXEJBbvZRcLXM4SGJk2xLEoyfGKbY2n",
  "key42": "65Np6pRoPhm2HR7H9PLChJ9HjgrhNw7CJ5jWFQyV7Be2DfTvEW5S1mdefQLMDhE9rgf3e7qVMKMCED3AWCirnuoi"
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
