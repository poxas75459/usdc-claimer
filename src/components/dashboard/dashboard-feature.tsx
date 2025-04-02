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
    "3jFEGfkq83PBsE94Ym2rJka4FXbnntq5TEy7u2pcQJhLPjYhYLbgPuXdbyo65d2hFxW6nCViwDBHyHzUbgeyLRWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27DmcemMR7mJxhrqALKY6uBzuFMxZq3sQzVtHNFWKD4156VtSCDJZraBTATfx4yCwqYir16TtaTEhgKfLqKByWse",
  "key1": "2HFQVRncVChPAe7TLbuWYtmY1baAesRYfC8JdBUwL98fAcxT5MUBQ3Jd1tK96okSdBYcnTtruvA6K5atLeDxhjow",
  "key2": "5sgH1K1m46jTiJpY3DxyHweMxzfFeWNasqvRjaAxxQ23kD7WmJ3M7afbVHubGMfrND4gfGzUpSonyGzVdvnnFAUF",
  "key3": "4rVLZLUwLmTXn9y6NZBpLdUjpAaUwubuuoL1fYDL1hVGB4MD27vQCLi9EC4gnHLi2HQLxizRNfujQeYbeDXRm6EX",
  "key4": "2unHAusfEXGtQnmzR3XJuMWprGfDv9B92qTkta4SCYJaVV2Wubn9JFN65jcC551WCpca8H2oWECUA2ff1Fm8oDXq",
  "key5": "crTTEauJFMaowNtMdiokutu1PHiCcqm2tEaRAmdRsKzooBARtG6g9dEr9u5nWBkeQg2K8gezroKMQ4CGAzNND9W",
  "key6": "2iFrTYvGV4HUdEA312agWaJV5yYhQrTqQyQogwdZPRNnTLZMAJX7DGH3yP2JatbaVxCdtnzmh7NrJVgUgHUjAyM4",
  "key7": "2oBUxx2iDGofSjPwge5XdULkcNaEM6sRsQZALyVYJFsoCtz8L4F7Yyni3EUAbHqBCWNmmnjZWQv2SmfT7TL3u8gR",
  "key8": "4juR4QcjGwrPptqgSSMLQrb2NmUUaANGWcTVQtk2wbTG6QzRR1x63D3pRjEdPtVP8A18SsL6RkiuixTgeiVZd8h",
  "key9": "kgdELHr6oVAUTXEGYD2qnhUQxYzkfxVcDf251kbFgtZM3TYn3VjqCtwRKcRcC3YHnPaNKu1fxJH12orudkmQY4p",
  "key10": "3Qr7QiheGh8UVRCKgNcf9566Gy8yFdKBVvdDFwPUxfB26behLZ2jTHMUvNhS8BihGRmtPRugyPjn63KEo7wjd48w",
  "key11": "e9VwasJBEwAUUZ4qeZTqXTbBMcKKKBuf8dSq6ztXzANeguvxWu28FpXArVUZQyHr6tijqYrFVkuaaDU6sagvgG7",
  "key12": "4aW6SwsRyH2WjmWaD4XU1VF8YzZrAvmoFegSQkjLUZwAqaaLFuGK5vZ9qqQfJMDjCU45RyXLAoZndosY3KoEby2t",
  "key13": "2TYUYuo6rubBrdzWLZvP4BrkoYr452UTnHWSLbMoU56YQ9dhw7rPoMfpb5TsxYExd86xBL561MKCTqJi4exFwKZQ",
  "key14": "2uFJkNgjcLqP37f459supC6CV1SFRQaM3929WcxRBHgn7SuhdAsRKShyZSLEoXPaN4C1A4TfEvCFz9AqbV5gKznn",
  "key15": "45qPP1GYDYekTmW7WLjr5kdDVqLZfefC7ga5sneMeTfM3FH6jTS5fSRyKZxyYn3y2daToBa3fShdaFAfFsyRLAyy",
  "key16": "BdDDWzYuMXoboAx6sdXtBAaZV6Gnwnf1hmqDBh5CPrcsyLdrH296CqRP9dFNsZihgpVDuprETfgRJVtdTaC7YnU",
  "key17": "4H4KM5qeSJUdFRGrmbj4kr5Lq7Zx6QLRwt2k3qmjTMFDvrsCEp7tjeJdH4nr3KUerDTAdJpxbarxZ5BBz4E97hKW",
  "key18": "2ocD5KHEdmWdqQKhcz5ESYKDYjecGqLG4N6yFsiKLK2jMi8jbHk8jwcvPEdzdNFtxTNw6DugeWoo9QNciBg36GxS",
  "key19": "2mm2G6VQCs6fLa3Qxz3nPDJf3vQS1dhNXG82cjyKUAF8UJQCz6YMt8UDNTfMdGUARACF1cd4Xu6Eaco6LUWiE1ZB",
  "key20": "3sAEMw9dX5Phy6jXVZYdjSaFxd7A1LYw3vSfi6UTHeJaBtLzfKU6Svp3fwaftaLDBuM4EbxEAMxKDu2dbK42fjCQ",
  "key21": "4AJ2yqo6sbnt2D2yHv5p2QxbmUMpt8QpUzj2VxiFfHtyx1AcUpQXZBsrWT8CBAnMnhRhYLJUgYw58M8Kw3yUmXya",
  "key22": "5Fc3WjgD7iFeGk7RWkUDnMngW7VbXZPHqoZ2LG9MmZZDWcBbU8iVApmE6VtRcQmyDKewtjexhCGuA2XKBmkjXSXc",
  "key23": "LoRbkK4gQTYCUh35bszUykkrLFSBKCzaBqLsBhA8oBvHMxh7FLAwsea86Kp2TTyvB9drVqE2hirKVDVouNoQrMy",
  "key24": "UXN7uB11ysNLR7EtT29L3nqWqVLYZxLCD2Vrer5kBtkbi2o49kuuJgQbuEfi5e8imnSYBNKrh3S338sin7RdD4K",
  "key25": "3T48cwV4vwAU6h7tanpLovd3yzwArNBKC4X1cuwMQErdy3S3Dcrg3D19yo2MWfZDskeuxBSkjWVgahPJn9kurjLH",
  "key26": "bHeyFmQHZdajsTWtLMxFSDK7cK77zdAfNSkajCjN3H5FgQnxFx4et75hZGAPPfRSdqpQUqmLzDW2yMp5GAVb6JX",
  "key27": "3iG43aDo4wwrfDkgKWi83XFtbXAfMMXGCMWkECzgiP3ev9XpLnknGfZJWy7LzX2w7FnMrazCyoLxLQ4GmzYbdGEB",
  "key28": "4nw1GXkygUYcLX5YVFYtWTUYtVZwyeYnKwHMJBjcSWqjFXPwg9nEtVUF665TX2SdNNXRvVRMbiiuZhc6RLnky1AX",
  "key29": "3DDfAh3rEaAWtYk44bv4KB8YV6BJAymPBU94sMyJF9MvMC6Qt6EhephjnQxsWznRgUVaLsRLrPf2X9V7U8r158XD",
  "key30": "4FcTdLmJ3ZaaG5SbxFzRYXn3jWen49MBSEZZTZ1hCyPoGRwy7kMqfK55vmLHQZfw1drQViqcx5YZ9MBrb6gHBLe7",
  "key31": "2gHVFCP1aU13hCLS31uEiBwdfBuycrqdTzcpykpcVF92NLSwW6FA5RC8vEdXP2K6aey3prBWti22qrcz4gttCXa1",
  "key32": "37aueWkU9ZsQDSA9bN6ZEBxw3R7PfotAL39o6ZQssfvuw1bV2BEQyCVYvQzAeAyYey4gJex9vySymKYaLvHRFr1m",
  "key33": "2YJkv3vUT14JFDKt68Qb6L8xqtDaVtmVxL1F3VRcg63qP8qWsvcMmUi9G5tyYaM2Z3YpocvcMnJUuCrVNT9uF4kZ",
  "key34": "3etPtpP8isJNyVCexdHz5WTxJNDDgu5Axw8tExfN83Y2RXMyZbV1Q9zzNAb9sphddrJqLj3DFxrPBRu4F9gJmMiZ",
  "key35": "3qboa266AFn9oc3Ap7yBmWXbSJYTBTfGxAaZopwe5bRt7UM9Dj73Nz3JwPwbKYPugxWdVdJ14E6n44MdrS6KrvQj",
  "key36": "79DRy2XYndLpHBtLfxPP6CSseEY8mh1dPYt3Xk4j7yHb7EM1VHh34DZRDFNH2pUywVFT6jqHJc4e5dBkjrNHT1x",
  "key37": "3ZYXoGWsRWLFieaxhfzy1vwAjTT9bpZmPS7zfUmSVctrFM6m7Tv4EegbDeCcn11W9TYq5DNGZTKs9E9m7pNYWYLi",
  "key38": "5nBi4EmXVUc6VjVRqmK2WuqvihNHHy9TUnLkRpg9LzcCUABKVqBkAGBtyDRaLMSFj1Que6RXAuzxh6nvsKo9PL24",
  "key39": "3RguRSFAk34cwXMBWxPkrzi37TgCukxNWY1BgD2FvQmyvTjNgBDc7sqpdzCi3PMEVN3PMoam3QBmvJ3gSz5QyPHq",
  "key40": "SvnsXd8Z1h7pzz2kuTm6bDdpmfP2MsncpQxcNiXMsQK9LURHyr5cXNUCnmoSX88kEUDRMFnYssLUpWLgyUcJ9J2",
  "key41": "49vmNokhecTZKfa1Xfgxob9eeYiPCFqfNMK5NXkbo66pYbKmN4uxii4Sw7ZDWbenRCF9Eu9W6X9qCuxqAL7Cw9gX",
  "key42": "tuL2pTCZ91cbsZzvk7eQ8FKX9vtYiKtpJSgexw8WCMWUR55JBbtvV1PYY89ARQt57hnEZ2QPaQiyohLnxnooVLf",
  "key43": "5yP6e9JYj17XMZ4pz8A6zwjgDpkBCJcYMqfhm3vKcPpnyJFfRn1THQvgDGbodhoD2yPRibrtd5TkfqibwJCseKBH",
  "key44": "44rAEx7jfXqHmCAkNFGBYzVmeMarTF81KTsnqwepJJpGxADx8mHAAo95RCFgu8pv7CxieU97rZQcHsubJuFvJ7nk",
  "key45": "3weoYSvrSK1R6zLvpYB5JQ73AGDo9onz7DfSvk9VPTLGw3YA43NDsvYeTqWvXAxee2frmESBcdgsxfrX6ph6xCAT",
  "key46": "5nbwonKx9cFK7w6gNHWNsnxHPvd7DABmihcj9wQBFreCJiFrT17Pffc27rA6aZFigRCsSsqXsh9YY2RT8sXi2Nv8",
  "key47": "37opnXUJM8Miw5cbNetWKrtB3MwHMGH5WJi8FbEF4fwJQjQmbrrGJLvangnnb6qVzcWwG7uwXewHNXTCducB7UCc",
  "key48": "3rdcwFP95ZwGVhv6nu2udxYPAf7RNZgoefQ6BFPByanFJvhbpHvyQYfwQNNLXdvDtXMfdtkuf1Ynd2RywrKGXcyv"
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
