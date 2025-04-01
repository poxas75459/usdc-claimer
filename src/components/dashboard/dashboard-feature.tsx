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
    "66qdNF6PKjWL3XmS4aGWGb1Eo2JB8n14613DjB32f1U4DuVDGWpCDP4CydQacxYKdDEKLE3GajFENJoxfH4TvtQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22z1z73BkdKWdshhWSHNkzCFnsN4bE148MmPWU6HhRk97gftZ7iw4Z1bJDs8Hj2Mp1keqX1xsP7FgspiC8H86cQ5",
  "key1": "5byrVJ4JS2HBkFPEeXmPgNCeJDiY2YxPeE2gGySjekSUe5i4jThw2tXughEbdNny6qggXhQPYYUD7qy3Y2xiQnVs",
  "key2": "2YSTLG87XSwxt5eQhPvmyJAYFX7i8FGMY7CaxEBAA4cgrSSso3RLSX1zzSayT1gQpHeXQyhbE7q3e971RHDymgbq",
  "key3": "2KZJAUjLiVGowtpUrTS5czmDxyrbALJMYvin7kY3onDBWuKRHJWgbMMYirbmem6MjKkcnQEsXYtGzTrzxmVfBnQ",
  "key4": "3zeoo45x9Qv4kVaPyjmVzCFqj7gaoxM54fpEPjTm4Dw88iMo3EyzNqCGdbmmJnXrFV8EknPA2pnuX6Fj5kiRfG84",
  "key5": "3tUYfygHb5iz2TB7nZvRxPzMJZCmc5yxUJZ6VUAr6fj1UmfKmZ6pEK1sTLXS24JrTznrwq86mHoABzDbJUDCZdcS",
  "key6": "4Wn8J8MRYU4wsYFt1vYXUGH39HrX4zgMHZL8mrodPzR5P3WPATGjc5rPSUg7WFQ1QseH8jheFYgM7EBeWtGPBbuK",
  "key7": "4XgQENy1rJWuY8pnXFxht18AVSAKLZ8CUJCFMKyt5DDEwYmMJpqoTkog8xAJDTFpHX82S22g8y1bNYJqKn2PY2eW",
  "key8": "4skaqX4HBw2hgH2a8LsQdPjKQWnvYvsxD6gPWfnBGk7R7Rv6eqh7LXj2aLFK567tTqS4GPyNBMoapZK4xCv67KGV",
  "key9": "Ku9Qfr6GbjH2nH1bKnN1qthzBUivKP7hjUR5VmbMr13akchRh38NqvNsMave16vE7XwqHp9w3SL1yJc9KA1fCkx",
  "key10": "TaX14TvrCayz6zp8QrZRmDQx5n4XLLSuB5fytHXMZzbdGNLVfAfZHKF3Tp2kmoxAraXikWri7i1CtphDgZWVGD9",
  "key11": "2pw3CH77pFEh96rX8sFVkHby6SHLGAgAxT5QddAL1u17EQQxXjCtZ7L35nrRZ7wthY4NkpzjGdzvJaLrtQcz8wYE",
  "key12": "21WmC1hTV6uzcvMyRnf5QzoJPDTTddNwzwwoPGfjUZPrfF2pFdKJvRYkGRfTQrSZjkmJzk8v8NigbgVTnVpdTU1E",
  "key13": "4ZKybqCBnijMqWS4ZqSpXyhzmZUTenxZyA7xMnMcvVwfD8BJ3PMrVqbfTGQeL7zAGCpgymsVA7tZNcvH2pQHWwVo",
  "key14": "5h7Fh4xvJtTsDG4r6FMLfSTdaCFb4ckq9yMByn1eSVgRmYtdMWpKxnizLwF5n1TSAXhhaV3r2K4jG2kpCUDZ8rLq",
  "key15": "2yTbXrBmJ6wzC33Bw1sj3p6pZvjMbK7f8q2YfNnj5AYra1FP22QBAzPY3KLzy6ZpniPA4b9Eiss21NsF6Ra9JmEb",
  "key16": "27Nm8Vv3rXMt6ocJ2yqEPdFA7b8KMcU1xoJp25audY3vsGhnUrJroGHb2xZz4rRmVUneHVjsMuamVZHhLohp8QQo",
  "key17": "5VM6dAm9DUWhi7bVjzkM7VbrB1D2kthpSvEkiuJ3txtWRte6EwVBP6ZBogsUiwsgwmgghczReroBXH1W8aNPgxXe",
  "key18": "3NXfK6zsQKwhrzcaHPsqKXfw5MaSG5LRV6c7qdZqShxSCGWsMdW7qgPUKJKtuNUcJHYXdDcXxbmAVeMpZokzbJNj",
  "key19": "LSbpdNZRyQv8hSQmtDn7xCYrJxBu7GnY8qoLjmcucZ17tHSVZ8Cv168EECzvi25h6LzRVhGzKVNjLtggNhM8zAe",
  "key20": "41URWxW1dKVxNGwsZ7nY1QrmgrX8bVLauD1qetaayg81VaPyWB3H3SMS68Vqj8qzUiVGEAddqaQTfhJSTjRP5Vek",
  "key21": "3tobEpN7CaPqSQMs39F4gJYN1t3pNDoUkjKBGmHEo5ApS5VWKjhT5RJtkFka8Ao9Kuq5smGgyQCerDJJWP22G7ys",
  "key22": "x9pzVjQxNLvxBjdr8TT2LbWvwHibwGnLYi4FKT5Ccf4JmZEJ14drXHQRdRTQwet7mv1EzXmPV47sCYZTXAnUQyx",
  "key23": "4hGp7zmAzkdxTVKoYPGcgHV2QgkE42pXvbSGb9yz2x3y4Wmhyz8ZNeDUecvr1qhP47sFn4tqRVR4axBh2GvGjTW8",
  "key24": "3FUN8xwNtu8puUHHQ7KhMbSQbXuiAMe27LjBtsLzigR6fs1EkndawwPsFoVA3W9JRZmuQAaJGJjG5T1Vwkpns8tD",
  "key25": "4VNEchqjMcfMJpJgAkW4ozQ58dLVf6AUMkAhQSzn9eDhh5cGS73wca71BLLZS68C9F66Y6KBaPkTzBsbXJQLoe6N",
  "key26": "ty4tbXSbgZNbjRPKtA937bj5RnPuVwCGHR8BqJp9wpBzwzX3XxJPJsMw9dVdL9YwiTxfs8oJrfrk5Q2pCt6yjMn",
  "key27": "2u89jLcPMoYmYDrkfjjB2twFuk1P81TjNsF3592v1mDi1KNA6vVH99TiAPdM14mVo6wNEgQSNDnoN8FDGn9CPK77",
  "key28": "2b5wkDWh3MH14JbMYYJLogokkyDSyUSXTBZYrDJf5kVDixFxUkfJSGJYUEvBmB6BS5gV5aucK8fub1qM8KHkxfnj",
  "key29": "4CkehQMk8qpUFf2zTzx2xCE7rUaq6eWyrqbnzVMySeUbUws94gKb2maEAhvW4r6wnCvN2bGwZgXuSyQFJdSqyR8b",
  "key30": "2deaLjTyksQcmCerRTePDGb8U9jCBMpKD5GfuBGYjFdQJSer9yyfAhDJ2YjW53HJpdsJEiKSvFKFF9LRuUcs6R61",
  "key31": "2cJqkqu18HLobZ5w5LTaU7zNvaj8YfjDon2keAperKPjNJVVqyeeW8KjKvDUYtqpgV4CyW5NX6SJd4nTsHr8vUxa",
  "key32": "SRoTGkyzVr2eUCFyxEWeKqEzch9QNi47RQTL15Uvexhwy9jAsnZ3qNYescM7YSrSYzdAFf1VexQtm8gPLNzRhYs",
  "key33": "5B4VeLPQGbTNdNab5WbVHWj2kWdy5p6AtSWRDPSZ9KCKog1Az95WELNZ99uatGcTqXrP3M8idVrMsdEB85tUxJFm",
  "key34": "w2wjVZvtrycZEtdEZxvttXxN5CgCMqWuPoFW1HsHb7i31Sum6GKT1RfAwyjTQpKpCgkHbXSuA5wigLJ2wAtRm6D",
  "key35": "3V7XEqpUp4j6FEkq6rXi2AA2JuftwEtUa5fBu8FVVuYHF8k1ZDe4ryz2CrKBoQPDCzTHqYihDDYQPrEJpQ1FvJBk",
  "key36": "qsbCjZ2umUaJS8Gq8wvHCrTfhJKVidnoshyuz1L4ht8cX8hyi2aLVxhJFLLLX7HXGy9t7fi6XovmcBdVb9zZB8E",
  "key37": "qZnLZovyEyseDF5bzDbkTpKBBa2nG8d13y2ZhfFR82JWegxZPc6HEjiLqYnEkYcQfxPoLx8BCSrWfYxiZyA4ufn",
  "key38": "3nUZbKXcTxAZufdKRRtp9CwDF1UFzT4WFeesAnt7iipSCodFNfHbA33vW5pEJReBXUL8hE2iswDMfo6imcPeHEFU",
  "key39": "28UZDVMzPYkbpqyBfMN8CbBhgnsBD2SUwAo4M8GquKS4aQae3uHmZqBvxymxd2dhMhaX1yjjVHfpd8dUSZxkBFTZ",
  "key40": "5vNtDqwPCcTnNgRP8ym16d8YSQ8GZkFN6v9meZ1zYkpFS3owSYgM6NAhgM1ofVuosuq6kS7jQEm1U58GwEn1WRn8",
  "key41": "2MPwMSA3iS6QuK4mdoix11yPY8bS1BvAEzJainkWvWd2ocDt6YqB5bYam9qbKswD3tBbjLTXbW6SH3WgJk9vsZiA",
  "key42": "4XmA3NWu9eEma6WLdNUZhDhbt8xrzqXi9xLmfJkQf6qDWNAuBSp5Cxf5uEemkMRNx3mFo2nPoE9X6iv5DRnVZWQr",
  "key43": "2A4ftgBDt3PrqJgpDZJpgsg7BSfWgbX5ce1QcBPYn93wSv6tEBuPgBcEy7T2FeKVv67nq1vpLcca5ZiVXVouGQxS",
  "key44": "2Lfn8BnmCC1YeQtnoBTi8t9a1mMo5XMkUHks39ANf9tSoTNjNPk7pJfe7o2vf2p6Ln4qAxWazSTdT9m6gGUX8GH2",
  "key45": "66ph9TpJxWmXGTvEpJz19cWbQj7RyQBVrAdSHVayNweBx77sA1A3Dgr6nE3BmL2e2rzkVBmo59DViFNu38qgjPng",
  "key46": "5oRYYWXRT8z6SWKu7a3J1YSHcm7wM8AEZon7CVHytWsBz5TEiGM5z9LUpepNXgBVHT8jXXGaX2wkL2cCMPCj6e3Y",
  "key47": "5xTQD4MYHNoRx57czGka2foJJJwWEVX8wvhYKjybc2d7wL6hXxATPEGbZU9Sfhs45dP99uuK1G9MKZC2uk97AA2d"
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
