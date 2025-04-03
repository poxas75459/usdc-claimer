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
    "2JTN2Zp2Fr3MrPEW4Wv3Hss4bjXyZTkD59nuPVjAdRmUuavvACes1CXgyGz9TCt2pqxvpLYZkDxkosSEtUb6VUAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nT7r6HptfzFKUpwiq8EbDVDb1kXdnKVnMGaDMjUvYMXxPFkKz7qYsDeZCaosaUBRgWLAocyX6Yjn5FqAk3Y6THj",
  "key1": "5DmBZCc8f44GGSRRzNBifPxp97jehPGU4U9gTXSnNaLB3UnqrTtMw8RbjVKcASupGKBsV7rsBmCE1Swj6HxbFXqh",
  "key2": "3AJfLSG8M7VTUmCjRTQxmGMewXaQfrkugQdcjJQhC6dPm2ADN5dnWHs6eZ7YfKUTjKRS7cP7JMkQ7bMuES6pessw",
  "key3": "3j1oSSncDj8vjrNMeYWmKRL13jHcjqHmtoZyhZumaRHykEftHABk7i418LBVeRzbjfxvaEFYoDPv1qpNXDqXPcah",
  "key4": "ad9c5zoyt2KQMnBKdyZeEAMLaWVcDY44nHYsPBQ2H8TRv2rRtjhKAhRt4fWTxVKCzQQKgRc25AjPw6e53cLSVJy",
  "key5": "3txxWahnihKnKyjzbcbw53PDuSrheeALEibqSB37b9waSK9DbRG9erKdvdmXSZM57xKp5fXDSNfYDrMRoUSSQp99",
  "key6": "61xLopMvYrC5eyTJpM1kkMgdpNXjEPoeDUeBn6RzoxKXG8SdfQY81cvLqJGMiJyahTquN3XEK8w4jnNBjozxiUcN",
  "key7": "4fDaFtm8nCKBQDWanp8GiiAfXPtjWfRrUC9yUJHCkXWwK1swfAYsfvnk2FFFhPVv7VcpjLQ2L81eEkKp1RLXo6Gp",
  "key8": "4pdqtbtxLuYYwRXgUUKjDqFLbvFHZvJvaFydvBKL79Qu5DXzB62UEM5feQDNU4gjqCdSjo15Wibi9GoP8kCPo3pR",
  "key9": "5angu5Aa5UjsVKUhb7T7QcL1w7iyhQBy1HWxXSiyoPGY62jbuew8zh4YHS7g3qdcDU7TJeJoUBPCQyxwqPdU8k4x",
  "key10": "3nwsAfzF2sR8B5idsvtYhvywnX41BgEP5KsXn5DedjBZJziU5VJc95D88f8CHj28YkJYU1cwDoLUy86f6HiLuDnQ",
  "key11": "4S4vEdGMiuTbVov2rGSPjusLNEyRbLLAhABLYh5BfESf8iexeczDAuieNnETeCZcgq7KzUJHYgHj1Jy5iQ1FDpnh",
  "key12": "43Fx2h2SWh1KQg8kJ9xjUn19ChGsiBbkjeHtkwQbfrub56VDtSiLk3w8nr2ZrjnbiAZnxw8Vn6qrAjZcZaUQg2vD",
  "key13": "54JM5ZU9xqCeGWTDiYGAzj62YFSYz5E2GfTfv5MeYYWC4FFcAiaGCzo9MSFaGAHPtvtSZpAeQ1CUbpk3qrDPRDpD",
  "key14": "2NmwxEJrThYqfQ91wwNSifnT43KASyPZqkHALkWGr1h1VBMuTMn8bRgw7MZoYA4ezjKMoVEzBCnLzsXeuahL5tUa",
  "key15": "3keuZ9Bk3aWerWq7P8E7djv76N7N4zhzrnLgETA4C1CCPCZYYF43EyvU4J9sTbbmcmYXTLL5AV2P858yH1z4NNiV",
  "key16": "5wmivZuEcVSxauvKHpddFnRdPTpCjjpYP29P4EQmZAychLtUvCG46paeUhVqpEC5Gk8sekBsU9xyCrNzBHszub8n",
  "key17": "5duiHWkCxdFkbZDBJFeoLbTpWQsbsxs2PT4bkhXrz8XeYYoBUc9Xo3pDcCSHYGYUggspKHuwDqzMYM8cwi47U7TN",
  "key18": "5c3Q9RC5wkeYexQDm8ARmLr7sUbRqtmdd7WSgTEtWckjuSs4TCQzD5JumKCNh2wCXfp4bURfuZ679JZhgKECefw5",
  "key19": "3EqJHfR3kZvSdwuJurz1bRPJZz6UGSwr7SUM5gm4WW9ZCTcuuQGphTC4pGkqEYwCJ3sBtgp6yt8s9khraeS8FkTp",
  "key20": "5XjTSz317Wnvj9YPs8WpYjgKHN7ZRJcjmhcXKsufSj121Uv3B2cqnXoxQhBujTcjc1QNgMP4CXTiB7BuzGqTSrfW",
  "key21": "3NGPMtLPxfX3P5WSW64CvfCCKicXSR34yUQkPh4iJHvtxhenpgvwr4FF9WnyxzZZ5vvRkMLozhh7UD43mCfCJm7L",
  "key22": "4DfXMxthHyGqxmN1NKiiRUGXkgGWtpeDFzCBUbiw1m9xV4WA7hGqkD1GwVJzfPoB4RKYe9qunusKojbKrnhVo3DG",
  "key23": "2sNHc1Pimi2kQF9kQMo7vdisV3Nxv1hDzvYwx35u7RaLG9zXWDG2LsVZWnXQoRZxyzgcv6RtCTetNwo3asp9fM8H",
  "key24": "2Tqn1h56W4FwbVRe9TxsANjccQCdZP3ji6GyGdvrPRnfp7VxLVzC6VhQwEz7jhEsrkWRniTr9ZHrLfHwN5PyiLTf",
  "key25": "2tZNKW9GQzAaQSePAtvvKtW4d2Fv54GaufHx78CVdHtb3NxF1BGm8NFS7Vw9uwJeKkzTTY3xjqP5cWYHqdu4psBE",
  "key26": "42hAuXQcA43m4mTWy8qbETnMC8Ur3TQyt6BA3fXLrapTSkx45odN8eBA9KC9eXEHbR27YEyz5kacKdSbP63zZtrS",
  "key27": "4bgMGAre5j82n2X67BRzGpjZ5FQhkmwudYybt43bJNDTyB53CgtQcJPeHcfFqvcogYseETQNDg4r5pzfMMgfr9mZ",
  "key28": "4U1tv2kbLeNeC2wvkpVLrvREpmXuDpMc7MbhAqYW3oj8bRXHHZYxgGFyHe42uuyRzWHh99skcnWcbQS77FvZjdj9",
  "key29": "5yBTtVicYSSRM7XMhmV2dRyLRY19kSwuCCrfBXvk3cpyAgQ3hzRQhR5ZL1wXUywVuZL2koc6PWfhuLhoeNdL4X35",
  "key30": "5ym2Rc8Ft7hcHtX8KgDyWqnA85LAERt9cuxVZ3S57FDwPHRBhVZMqEmqqnjCUWkoe9LqdLWCpPsPYtn6XGvE3mkh",
  "key31": "2x8PBFhjMwz9LbqxMuepLnEcCupQAL23XQr3iyuFRk3WaMRYkvW6Mw8DCP36G4CDAZYRCFXgQFh7ZHSN1i9Ydzix",
  "key32": "4kkJznWvzVZypew5MBXnVVbGMnXHmPn8iivJ2TbF2Acj3HKSqfpUnk8QKWFanqe6m1TXWA4X5nEPqKkGFxL1rZUy",
  "key33": "WKzQPS68JJFLK23yVZ27rzNeD7CN3FA1Vr8B71tjTSiK1AEbLX9w2otpDEYSJVqU9hiMRqPBrPSBTqCYGW1p4Y4",
  "key34": "5J9wcDStuDytv3hBRdwhRm6B9Q26ivV4xd3TdNLrKfYzRUKdirSUXM3FXMr2no6Uc5oYQjFJpz3DuRZXBEzvdrVV",
  "key35": "2yfmXACpTdskwpkG6qGChJ7pf6TthVHPmFWsdUau9vB3p2MqJmqHhA2Kh99hU1PxEb4joxXbBrNwDgA8RCCZmUfW"
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
