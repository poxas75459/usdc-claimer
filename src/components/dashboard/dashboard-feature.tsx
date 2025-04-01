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
    "3aphMZ8Tiyk8M8DX3DeiAhEPHHUWTN3ozfyZaN8CNQFVNFgrDVhNvEFPVJLciDwxBDSYGJUNEKA7NEPRQQC1CqrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nVx9vjJtXXnR92b2XehSu9fCuWwmWJyG8WpSVJquSiGBMVhoawpzEskgFbzQb8Aa51pQtPeRt6XirAAhCVn5o9w",
  "key1": "4d6eHXM4T2vdBu9ejnsuEvgZ3VasNfNspUUQob5YTXU3ieDsQx7TJ1fqnPw1hB6WAMTMn5PQWZTii24FEjp2uwS1",
  "key2": "2oSkWN5RjPhBEpyxu9qwSAp6jXWvUuis452Rm376F2NxGVGkkHAN2CF7s6G9QTUNDJdRr9chGEp3oMN79nqdgHDo",
  "key3": "23isc7UrRiDn6UhBWdPreCjfdGJSmPxDJeKdrjgCT4qcvi2EzTM4jVMD6rb4MaqLYnmKKxvEjgCULbrseoswmP54",
  "key4": "4AwTSrCxze9XUXjd8ysYVMJQQ9vHPEomzjEEBMy2zdBeDwDaUu48PG8w7YGSfuujUx17X6jDUu7Lyi3ZtPmAq9jB",
  "key5": "2F6k1CNBp4V3dEUR8fcmbAdcL2BcWBSmz3hhrxa7VPeVmPDpDdi5uiULPsakviUNE8i83svJcHrKdxKJS4GmvUVK",
  "key6": "4ojWE8kJeK8vGQpd6jQf3ntgFtfWpyYtVmTsDmTPuCm2v8SAXkPdTJAYAQhKQFJQdZBAzfcL9oCYsartK6LaiHjx",
  "key7": "5L8jnPCQJTz9CEkpzaAJdaVVi4mTvp8fg9pPTSvZZDbzvEgS7iAF9acmWAkjnNbsQRpr6Y3MLGKQq3sRzKMkgEeT",
  "key8": "5X8gebPKhLwDbkN3asfJqskHocczfnMk5Ydhz31mkXCvELRXGRrss7LrvtWY2z4em7Scdqab5uTyexPWLYig385h",
  "key9": "2ZNv3drws7XRQqm7WZ7nVNpDb7w9Hzqde2DNtqS4AYP9MgKBjJWDKhtM8LwmF6hp7SKGEQV1f1wC8DVEiUSmurb3",
  "key10": "3eLnnVoaLzFWGQvE3NMvJy6Hzp6tNMR7PEzpiWopRFN3TXH1pEFEPV2jUJJJAr2pzE2sew1h8CxaZDES1hgE3mAH",
  "key11": "5g9A5xUdKK7AAti5vmuDziH9Js855yKByWsQkqBqGUxMQgs9wPzQi7s77bJCE9Yz3ojFLRwCVap7HV3pZAP9z5xN",
  "key12": "vYYBuaVWc9qeuiqtPC2uqb5AQegBvCP9R8n92Sdn9XTDyjxF3zRp5KDfTQWXosr6q3YF2TFGSnsygoK1HAzR4hJ",
  "key13": "3eAi5x5FefYMdna7HVihvw7ALDDUGF9wMJCzYwdNEutD3TkErwkAiMjgp9hrYfohveATzxMdkLrvyhfM4xSsXw9L",
  "key14": "2P7WBPM5tSaTknv41Gpkqx4KaYQDeeLQaPc5vpKedyZ3iYFrJrZGeJQspznXS7qaXZYo6ud3qmijsWDDNHiCdTD9",
  "key15": "2q3HfLyFhBYHp4tvd68pJ3sv4YrwFWLgeA4rR7r5d3x8mLKzSu3JjMW52MKeQRWBxw7JCMsvKouJKn3txjcqAGRC",
  "key16": "T7c47M7EBrYq5xa8acdKWDMyo5fnyz5bkRZ5p4Pg5ouhoxGR1fAGRNGyYBcXC6CojTpSouqd45UJSp1o3BRBaCk",
  "key17": "3XABUCQjvUwducDF3wQsfjQ6p5zapUhca56qeaU78NZCaSd87w7B9FTdTiJWz2uQD5qhZnn9SouKdQe2oDWhax5N",
  "key18": "5eaiSAPNy5Pn1ygYXriKuNxHNCRwwSdDnPF9zx3wKrj1AkP98WDBVAJNojPu1yKrxBiCGN5cpiztiqvDYKYHVGze",
  "key19": "4DnVAf9AkhAtCTkYAgtxhUBSFv37Sr2QrhM8JYDJFqhKjZepMKcyTVu7MUXfAwoxgMMEb5w4p6CRyFYdGiGyXdKK",
  "key20": "4Zq4hyAYRapacnJNMovJt2YUphCNMyjZ6J6gvXF8QyZLjHstaufwwQxBPBPywD8pVhe574WJvHAHATw6Pm6BfiSA",
  "key21": "56box5YR14DzH8RSg7jTZkSQixQQ7sKaFveqGBESyYBK99Vhd77pWFrsgyYn3nQ84cqm9KRwFVxi7tdNpM9LEZsJ",
  "key22": "45NQmLLWdVf2b5hL7XKUJoV7CZ3Mvnt5TNsUwySqVH1PGtPgbTCDyChQFQpby177jk1XQBmWmccXfYoBVanGJ9AE",
  "key23": "meDQzaDgFZVpQZz9VstFC1wn5V3kvWQsNd5QDQ9gVz8FANEKBdNXTmeAwsy72xxLVrnMTAcqYdhkqyytAvTEwvh",
  "key24": "4aTr6aVZ3oRNBfNNjtspSSpvYmKCox3SirLNvW9x1bx7wmhus9nvQfS3ZFXN8HxB4fu5s22fn1UngqnfUXuVrPRV",
  "key25": "7yFzd5jxdFji4PnBUAtiZbUdhL1oLMNgjRxQnh7qefPvYrkz6zvdTZiFG2U3EDNAh5Mz2hFon11BWfBxRrgrXky",
  "key26": "2MiUPV79F4gTizZqBVJmesikPxn9HPSr3PWCowyf7UENiVEqLvchYxRdJ1ZDMMPnbmgr2R1h2HYtFioFQL9Z4YNH",
  "key27": "4rtpBsxmF3MsjSB6G9nvHDEywuhpKSzscPB7UNgjfEi9EUkBfEtWBDmoRCLY3imooZ8zXTeVY9bnvMDsixS77zRP",
  "key28": "2s5iKJgCFkzfTTnC9cciJJEHYZmZY2FKhmABEV5kdp8uwfzKc5vew6KzYXQQNQUsqqfTDoVTHFBBM3RnznHxkkVF",
  "key29": "3rGrkeVDb1gGez7BSAvpW1pj3CjzghAmiVMB4L4CkJKVvirpVz2HVqsAcx8hzkQuW9UtrRSjQssHhv52tAZejvue",
  "key30": "2pTDyrEXt7nnrRxAHtnUnmxuDA6zEsNeuQ1KUkwkCMMTLXiB6srLwxGT7fKvRfgqjxYvuvcoZCYWifT4Am8c6Xkr",
  "key31": "5vSuRU2VKzqoSEnx3yNMR6aykfzhKHqdxn94F2fYfxzcV8SSYckxeAQ2zxjF2vZ7STm24CyqUZpnvgyu887e9vbi",
  "key32": "2eQqXRit4TaoHtQcN6yhD3edk6uWyY8xSafm4AXsgrLXNNcXSzviv4FdHqLHfHdaDH9vsvzmjKcP5CFoNRF66YKq",
  "key33": "4sxkvmPQPk5urHKVnnEAPjMtLngLwdyvoAUYF8H8XMgAPy48xNkiW12PHARF2MqCyu4qgJ1kJ3cEzZMMwv7w1jPc",
  "key34": "59Bmtpe9TmRZhfEjpAo3rm3JNytx7wTEdENQ1ZoRfo9q1uXy6imLa84tT8m8cjAcfwDMEnB7ZKZnojBGKYrbdFX1",
  "key35": "5F2bPicdsiEPNRDpeiXYcSPGENR2DcSJmyJCo9bJhcVvej4VpiFAsChR8MJGdwX8F9CGqMuSaJ1SRWE3We8vB844",
  "key36": "MUga7jV1J9jhSZcWVdZjTo4WZdAfXTkFoaRB7cwBccAKHmreQfa681ujPnhMiK5L6fxp3iDf7Z9UEmiUKospEfG",
  "key37": "jzNfshp8XbsY4Q313Ux8zuat9bgdf5udxeEtZNd5AVTqHwHNWbQZNSptygAye3g5BYhMN57Si7kDzKW64prGRs6",
  "key38": "4CbsSuCbBb9S2zXGMq6Q17R5g3QP9fycxUPtdLvc2xYqxCDJT6mdbLPfQRgzob986V2pDEdpXxSzEACpwAFgEvyA",
  "key39": "5X6VMgbwBQsHCryZAiymzZovvXqo2guGWc3pkMXAHhtG1zD7vTdART5JRvgTW6H79KypykXgG7yKriave29jcSAw",
  "key40": "2UnvqFpFzcMyu1Qn9KjMNfgadPJQjGWVHMDFKzpRjQvxjVvmoRzQRN3SnAek3R395rt2hLGGetp2PSmgpfBGeZYY",
  "key41": "fNnxn8nt64kTMyjbNJNGfsqS9Fm73vu5ZTYEjGPR53XwDfWtamxibVtvWaR7Sqp8Xawz87mbV5YXf8YLbheeHJS",
  "key42": "2Sjtb1ENk6KHZFigGoHZVShWcyrJMXPoSLK8oUTbz4L4JsMEqycEmrzH6pv2ntFAgQg2SJmEe8acizo59EaTkCGM",
  "key43": "2ezs8mWzsJbt9fKKVTSsrXrCUEoBtiBbcKSQgeJuQn5tEY8E8Wa53gd46wMom8DHLTGcktMAEuYqcsNrS6J1y3Hc",
  "key44": "3PcmooSkWa6TggxsXNFHT6h4sif8q21ofyVP3SFnv3U5aCue2BqxG4wdRPD11CPP4r7vqH7e4RK2HC1vubYtKT7o"
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
