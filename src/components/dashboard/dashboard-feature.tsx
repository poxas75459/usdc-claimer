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
    "2WmQY98GAWxLcrkG9XZZVNyQDbchYngp7nkykauXM3hbsvvTNFzEtXViACFE8WQrdmqgdBFJk5FHzzHACYVAGC1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2VCBxTR3PbxDqx2iuBQa4fDQvsSMuNyG7Ff2pmbT76bhb9ejcQXSC9X2fiQMMJKrjrjCJwe8gQBGWt3GXftjqA",
  "key1": "55M6bEuPhANkGU9iEgWA6vrLtKSJQYbbTTFfoR93jixKaFB1mW9gzTAWA9QPD5ZUzFPoEonhieUU1P6Sx2FKHzNM",
  "key2": "2xiHGojP8t6efPmpJWMDTGtC3rhGf514AdqxLJ4RS6RUmbpa19R7xKwnPQ2RgABU7VeKkiHAhwcLrDWZoUUKxue1",
  "key3": "3zaho6SimwPxVkj9T7EetfHcAvAYPpxAUpCtXZQYzqgwRXtfHXAhrJgPKGNCqzxS2kq8GtN14KufRRri7MTAiEW2",
  "key4": "62WFZTUhVz4Fkn7LNp6dx5tW3DQNS9M3nMQr7GYtL2oi1L1DfwKFjr2jBssw5e6mSRF1mABqozTk2jmVoEVMrQZE",
  "key5": "2nRCZDjUxvhjwQhEa5qjD6DJP3PXSBTM1VwG74pCE8gauHJfi9nEptZ3xdvrNGaKWLaP583bwobLYvyx4mQTNNkg",
  "key6": "xiYZJyEzyjP1x19R1ufhX3JwGHS3oJvS6ELANNzUjLCopErYVVX3U6Nf65mSVbddxJgH5ALzaFQNwV7RdSseSpG",
  "key7": "5TCmNRtju6yvFwvWDrdvSRAKmCXWAwYGF69t76vhcNv4WPYZqWiJZrNCRbXozZnpJ9HmiVpEh6X1gDufZyCoVAUZ",
  "key8": "2XS4wy7CWy63iQA6N1W6SwYQfAdCNEh91DG6in1hse8M9PZwNHRZEWr5iyiApwnWrs3sJcoBWsc9WBaXFeHZx2Zn",
  "key9": "nQUPxwhUYggXcTqAY1uFx6Ny5qA2ZhZPKnsBDCUjJ6gRDZK8tAXFAewzdmZW7tVQotgbZJpmwsa9vgsK8DD7MUs",
  "key10": "4xoR3Vv9UqsMSHJgutGamdJVLqki4a5x8dZzQKMtXnJDAnDVT2W9PDgQpw5gDbFXeRKa9QMP9rCE35bURLTo2tYZ",
  "key11": "5Qu6JGoa2hj9NkwiMLVHan91RJyexxAgfDPVz51T1a79z75xQFcvwQrYmcNHyutJ9YaSdqR7SUAcdxJqrFpUg59a",
  "key12": "3QYANii491DcBW86FiyEBVUSc89fdwRxHkTUCpqmm4mfRjJ7W64vW8czKJ4fumLP6FMoirnTMEd1DYUUeRLkgG4j",
  "key13": "4JBiUKSYyqsNKhQCua4h7LE3SprVUPed6Uekz33faxPFSwBKGDZ8wveChtQiuios9XmtucF4NAUmr47ScE9S7tAv",
  "key14": "23m7Nt1urGW6UM6gqPrEdr24njEZd4LmhSvkcf6kEu51WyhxxU9XFiFZHE3joq9HzwWwpmsGLs2D5pkbhX2QDmmn",
  "key15": "2YwmUnX5tunT1S3TU1ktqZ2VLwX2RPDdiaPJdKpKqHBqkHez6J4qFzgArwauDPQ6AGK2RrKoRSBzcfWK1UeaAfHN",
  "key16": "5uQvjQHyvqcDCdVpw21TSWFHdg6kPQi73MVpdiF9ygbN71bt1aGUNbzwT7b7CmVMzjtgjxWnz4bvB3CBtCQXtiMt",
  "key17": "qnvvphUENwkiWwfeirUtFZ5u4oZUN1NnA5xNscH7vKsukJggVHjLGh4UqH5BJYuqXFqEs3PufApUGwYrx1JwMZ2",
  "key18": "cVd58cPV1QWRQ3EAmXQpyT53LA2KAGK1GYDu3uQDHeVkkFaENBkidKFu2sQ4kHSam686yF68WtU9vG9mS14m1Sv",
  "key19": "5rLjoS7watZzgpufS1pHzkh3oKynQktaVzwGHooxEkDiJszHpESFXxzG8yrFWrw6tW3g3i7i4munuGARsbPu9uCG",
  "key20": "3pbHek9P9jK3tfFJTNFeaUk4gKmbK7Vvvqn2q2npBvL9Tp8zZrRBtp1dpxLsQytCpS1Weyy3965NbETeSTsnEvzY",
  "key21": "4fAgErXNNSTJFfEd2ggj89KXn8htMWbkG2iL7qrjwGCYUQAW6pYReHgKx9TWR7SFnfyFEmr7tuuHcuF16xC1WYEa",
  "key22": "Byi4nDnydNjGZUQ4X7xDSRS7Fw7EEPTvQYnBoCs8UxVGV3kYjJdDL55VX43EC21h4PTUZpnnSZU4AuysgFPJUTX",
  "key23": "5AFvg9Re7cV1cTSDfktmxzGA667C57nSj3g52aqirfRUTzhRwVSZqSoEmRLERLp3PyuRxKXepKZpnkbGsdWZHqBt",
  "key24": "2Rr2h4dBe7fzA7Y663aY1D3XR1eDDEyGf4QEWij2zYbfNCScxSqaG5LNkDnrUpMvsiwqkQ1obdvEV2ZTT3UYHXzc",
  "key25": "31vU67YEqYHTsHXnudLB8pB73mWREdEgkz4ANritqxKBbWEhPXpvJ9u4nWStbUd7nwCVnZq2ckKf46v9wNZpt4fV",
  "key26": "tNuUhZ2M2FXieVPAyiwG3kcfh81PM91v4W9Sm1gXTJteKXHZBA7CVujSQ4aN1FgMLwge5X6nE7Zwucaw9GfVimm",
  "key27": "Ha8vXbtmZ7FKTYdpjdkZT6koMd3QCKd7JuhGwz3t2ohHJAMQNBAoPctxmqCjnRkm53rjAMLvRCXjSkkXEWNWFcs",
  "key28": "54rP3zBhEBqeNscBnzaBrM7aqKTWPgxvfeS7Tjpg7fhdxcvw9oyWs5QT7uY5cVhRKJjCBmxu8NB19Ha3jizTfzLr",
  "key29": "32JR5pRcRQA3g38c89Q9AeJPQvoRj81xNvvunqfg3piZMDrcAnedu42P1WkbeBpthtYQaqhU39LpCvuSsFS2MFT9",
  "key30": "4bY2AoUmuQ6ncWEHYsp2dyR54mtzmr3y2UJnpQqQCyGpGNbeFdDbCvHmHX7G2UAy2n9DdZ8G18RSNYoo4s5kbgsg",
  "key31": "4q13po1JEoBDd1AM1pqFBt6iUXxbvQvLvHEEvJLnbh9ZYQLBHq9gT6pT2ihimfBPwUmP7dD3msyM2QwFMx8UcVry",
  "key32": "2j4zrqfFonUAxqLSHtDwF7Ne6FynwrvTPLVw9wyuGSLY9MVN5vvQcpMGqP8o7KNFL3ArH61H55yLghdZNkL5vtBs",
  "key33": "wjawriixFKvF6jtn6CtksGQs877WGrTKsB74qRiezb8xgL3xKKqPXANzgxYuEuqgVRVxXZrUQ4fxooz38v3fFWv",
  "key34": "21bCdHpbb8aQmQbb7XThncMYGGPgcY3Rqnnceh2xQ67TmopDgCDxQjzwEK6pWkFzdmhKMXSG2asW9EetvfGnJdxQ",
  "key35": "2KFUv9hVHAwfE9ZuBQ7iD8CLbHCs8qphUZBTKkvS5FEzc9DRC2v5K4R5NGDSZF7qoRozAG1EdHNeVvAkWyPFrrSQ",
  "key36": "2q7n1uc61PwFnRxuyjNX7DWbaosRacKmXd4U7jzuYUGXxqjjXwFqfE1X3tVhnWrdW44aH8XpgNddadcnV7U4jxVN",
  "key37": "2aFgtEgGxaK1RTSnZpmJPfcF44WSm11VaL2SNHDQVJoK3oqFKkrj3UrN12A1cuWvQNByyC8AAHK9MJqR3kJiHNGn",
  "key38": "4jKonLnNaTPkfXosCoUcjN1LPFUmCaTrKAek5wBnqfwRm5pZ1LvkFrKK3LGkqSXXEf9Zk4uyR3krbZXeBSaw5Mpw",
  "key39": "2kndmWn4hiHd3dQZH7j8YJ8HvW1SMkyVtfhXF7v7ZzhcbLD8qPfR7iBpg9Z2usevfTbjPp1b2YrXjdoyAjEw4K6v",
  "key40": "5MhZTDRkHZgxzBUJwJjE6NLz2NohJzpchSExCqZu9nCzV4v7WnSH1e2nSveLEpapdtvvmGqQW6M31HVM9hvtnUP4",
  "key41": "jMpoRTFA1ff4rFrSrqVmX8XXctrPhA3madYi8E5TF1KEXN9f1B587cnbGuNSgF5znBVMcLKuub9KVfzsiD8ffs1"
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
