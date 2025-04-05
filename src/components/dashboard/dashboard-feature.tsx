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
    "5wHUoAF8RX967nr1fEuUUwkCHDeYDH58QGNbAtFvXn37efCDVEmbsLEU4mbHJzU255Hm7cQeTHdmS3xxCYHBFBYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v8PZJU6gvWTMJX1vYej6AnWrW7hcqTtkXyiCPXirVTqGZcpMckTDXPeJiFdUHJ8oTSFYQqNCrY5tTBfezAeVhWu",
  "key1": "33Cti4km3TxCKZ6YgVuhbkLpSTaANWyyhsXTsd1EY13Dj1Aavv2NMECS5aaJFLvH4ybzP8ajJo7pxXCYDvJmkmF5",
  "key2": "2SYsTEDrKoTDu6KA9jq1WpWJkuDohiwEsiQWuq7ydfD4wH1JX2FFsRaE8szX1inTizGsW4HZg1hNNEpxY9EYhXwQ",
  "key3": "5pfUhWJuD5QCx4S1huADPYjQEmJCAjngZCRFwndjqRPTaasNHbLRg8dQyBrJWY1TxTApyHkrib3CreX3DoW5Pg8S",
  "key4": "2vziZDihGxoufrb7fbhg3hgetRMw5qdk6CMWZ8gBPRDY36mzBtxHPBSnvhUkY53Yhd4DD8fJfQ5CwJGsFWBuMVcV",
  "key5": "GdBsnMyyU5GyRB5PNnpeVPhbasw7mf8qdJiUz9xL9aeuVvLt93z6YTz5K31ad7JUUJyCwBbCNJERr7qsKkPZmCR",
  "key6": "664VEnbqUSQSznNhjBohEcyJjehFeqEqKoM93ku7BJf2LmDrHPq3yXi9vo7h9MgnQUp2AoEhwdWjXn5upkd3gcDa",
  "key7": "4Le6n4rvLnwf3JnAvHRYh2dgpTK6rkEjRrLDQTtAArZnGmJWc9DkxizJ8hWsUzNniHMKByKvnM67f9BXyjjR7VsM",
  "key8": "Kk1HA1ocYBaqj39uyHw8ZxNL3CbK8LcfzdTdD7M4adTV8sFZoAA4jjgp8EFUcqSeYPbqQw7WKep7RxJwUPJdLcj",
  "key9": "4T7323mG3jp1fpKSF54xC87eEsNhdTFYBkc6e1NwBZruULzRTH62M6FfZcfJC7TDjLFvfpdArHajD4zhxfQB7CpJ",
  "key10": "4YmWUHQafNxrSHfPB9Jentc55pyc2d9YfPQD1hGz913GrY2Rg59HLnAtBQ16YcNRvzoQv57iZqhYsuuiTbDrhLSv",
  "key11": "nGyp8X9gCFNKTs8tzWaDSYWPBGXDuvXjiJYgozBj4FVHonCuLoqKoDXF9oAmGbgQt4ywcvuSxo4gjsSf4fApdSv",
  "key12": "3asdoWteYcEq3dPdSEWq2xSkQXdLcXV9jyzuTy3SnZwM8uuchkXPq4ipURb7UF3iroRNxjnhMReqTCmMxkMCT7RX",
  "key13": "C3rWrcay7NhT7UpYraCcFJNEPFAa55ZZYY5DBo1znVbaDGkgZebQaXNiHfMGkAAuExFraGzr64VEdqtCYZXUSAW",
  "key14": "i5AoRYwMsjDvmZjvWv6WTeLRGnLHjCNC4uyTtW4fGNkptfr8BT8F5wx4Xs7LdriN3e5n2ouMNDY8dQdLpDMzW57",
  "key15": "4u9wKu8u1R7Y16vb8hJCJKceQvN3TgkgSsvxcgcsA3CGsPxX5rsuwwXrEMfodyuiiKAP933KSW7WJpuv7sh2tq3X",
  "key16": "23qN4LuvDhSmS5aDkBN2gDqJarMYJGNhyoBbUBg4jdK8VEizTzdY2sWPfAjRqEwLSx1YJJV934mbgxFbQWa6QnJn",
  "key17": "4pPNxBtkULVtQ8QQANvkZ7uR2VwcwZwEpubuYf76F53kUXcJiRzBER9qUdjpj1jwQpjUaCw9afVUgZNivWLsm9h8",
  "key18": "2UJRUjWsnSUqd2x97PSE9NPtMeG6J4XBshWLSMPCUPjnn24LPkir6axfmmcFREpMhid5n5KfKK7j9QEARiBWFdTd",
  "key19": "63Jsa7CGiTANRS3qfZYW92KdMfA3X2nGg2XgMrkyrPsZXU5FwrBJUxtAJiqMgUce6AonejTDY4dg8FqZb71rWP4G",
  "key20": "3Ev1gQZK1dFFPdSp2yp1AJQwkAV2xbiqeAYxpWP6qKEiG3Xtesaiu3z5bwpzX18Y4vqzPyNVDm1Ny6bEGYcsvfDU",
  "key21": "f3YbrVc93XtMWqDyZS6iCakRSS4UjM1jZLJW1sAwGn4fWSk6rRvsE43pyUDctJKkSL2RUc4RpWxtga4uuN7kCp7",
  "key22": "4hMhgmu7E9RozprYGWogiPhLdXD6fLiqhfxEhVNTygCjxFGB3cBmi4QW26cM9Yit13aGdpoaQPqPS5DeBN3PmbkK",
  "key23": "2jeFozYjNvgspDiuP6WS7hvbeZvehPaeYnJrn9ojtBapNQyaE5mypEeb86iqQYn1J8KdTvuirbEFTkRGS5NbgwkW",
  "key24": "UwKrkmUyhDqKXLqwexakdijrMeixRwmCiuTawU56BuPgkEkwpMTB5sQDPoGpvWS2jvUFi9Bb5RVKqgQRuckJTTA",
  "key25": "5xFT9raxQwdJTrSE16StwMmh33c7BJkgMA11gSaBdkagwGo352KjARd244TeHE3nmZbNEbhwL2BTVQ7RbR8igQjj",
  "key26": "5EwQCanXP9eamuCxUibC8Pv86Gpw7tS6zudyz1hi293xj4KDcV4CobNMS6TvUvbhAzYJrsuibjSgE2EzH4NMufwh",
  "key27": "2rRacFALCXK6GpuCDpAz6mPZL2wTzPtAvJAXQZDp8drpKr7ZoU75oRDv9ML9vJJVGr8d92ZyTejbTKmN2sDZgvJ9",
  "key28": "2NSSDReJVemqcMup39uQcbboV7SM5rafNmM9mcPMQB5EVnMyBj8SPnvEeEJhVFzF9TDLa1UxdFttb27BRFUiv3Hm",
  "key29": "6fBViu9Yyez3MeiQYsekUYihT74nzD2kEwKtj3qo7Sup6i3ZHH8Cjv5g9xLj2UZopdEPRCHBUHYY6fR64gNiT8d"
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
