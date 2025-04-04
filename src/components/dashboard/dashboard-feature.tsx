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
    "2nZyJQMYCZj7jQsqGGxwe85tBtSfLanqh7cKTZiQt3dUzeG7ZMKNVUNrvMJjmHpsu4xB2KkdmFGg7BnfuNV2Vab6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gsmt73kxw2eFXEBVyV2r6zi1WQqdr6tGgcwqy5vrXoE83RjkwVb6hQRwVdc7iZHdLFnkpDkENbgGhb6h9zvjbGU",
  "key1": "44qXz8tUrDwmLwrF1juTdK4x8ryBBY3nLex8u9A25a1haTnB6bs8qJxzxv36uFG2eSXtY8ChD3c9PJfuUpiNYt1",
  "key2": "4n9gigNtnSSRPWHDjsiQXg3gwiYmvrrxHTGmyuiTGd2YuKgqoaHedyAYE2t5U6gge89mshY49m1kKCtaUtwWEoHf",
  "key3": "2H8bTiWTfrhtnsNnjUTHMhZSQRjsz75FMKBGrXoj4Um8xG1bc3EYAfwP2FhFTU1AeoFcpi7caUhoE9wUJvjwtkg6",
  "key4": "5Bidv1BA2HbgQZ3YtcQFKhLLmaE9QpForkuzZCScTGcfLkrWRUATJBfVSWaPVpJMMhxzjPBGnxW4g8MK25wR4bE5",
  "key5": "2iGxYSNzGyoCszZqFE47cV8Wx4GYpdrLLWQyoaVn9JPkMKyc5QZfESn5G854r3d6xsegdvDwyoJNnKnE68M17jug",
  "key6": "3Y2i4f7FgZBTHUrVWVCkbcpFBh7mJHy9wRBvXChHn5qsq8t6yjqn96bbk2q4aX1xkYeocXgdA5aWv7unp3y279u4",
  "key7": "5ygq7BYyuS37QpwULZKoFWWRPadAuHJ7NiYSxKHqhq9q8A78S87G9s88Avix3KYePPyhoHUGVxy6DcjuPRSSB256",
  "key8": "2e32SkmdyCgeQV7im9MSkRsap3Zks8hGrRZZtzgFX9LeAfSXCpyNcVsW8YjrQeGXGEAK3ezrJjzqix4RkPcYeN5Q",
  "key9": "5cGWNEz5ZtBHVgQeEdUaBaU79KqkraQraZFPqXxqNxSZW4z6hDnXD9JuUpL6KQakKG428p4XuwqukvWvrVemRdHz",
  "key10": "QXSVofgYLKcdifwS5Cq6cR2b8TpLFF8YdfpgRWAxfongPYH2mh3dS9LrGBXtPBiVxEbDUMZm9Yr53u9v38LD7o3",
  "key11": "4mpaotbqiGPkKp4UpUkZF6MAfcgVw4u9m9x4x4GQDR3XdVXktoLsVXyyJEcVbwAxK5HP71NbFupFavxfcoZFmkFp",
  "key12": "2ENemaSmwAPYmGQGunLQSVXCkGvqhM4C49hXVnLhvcEEt7fEH4ZXxsNY4YXnEKMQJbhp3tTqehAqhohCYLZsC3HB",
  "key13": "3Qqdb1BgPwcAznfmjmjnzYB9QaXE1H1i95hYVfog54RqB4aWEzwxpnF4QSgnuQALYUL1C6Eu2AZkXfQKeEGvfebz",
  "key14": "586ixJsfgjpY4mHdnCUGrPLGWjHPiGiv2yhnDgzC2bt9Ywb22bNT7awdRvXat1VHubg1AokvnN1wDr5wqib2mC3R",
  "key15": "5qPoyXaAJWt7E2Z3ykKtgCQtLfCu8CfUFQRbMu8s5ruNnKkrUJRMbPebd8dcrxpokB8SiM53sPtSwKuhCWmmjFQr",
  "key16": "5tHdNbgiktoR2FcDXXzReJKAw2rg4gSPMAgha7yQHyY4kbyh2UvCtU4cbVngDEfqhQTvD2rW9UzbR2t4Zania5Uo",
  "key17": "3ZnBQxqAqjCNHcTsXQ6BvDSzaJ3p8TqnpnUtfL6k6nsEzkvDB5vavutBYNVF27cFS7rLK9zyvfnhCsxFU6CPG9EV",
  "key18": "3VgUVLLcC5mREpG7Q51VjezYg7VmzMHoNv94HgNXJ2rLxJcxV1tbXF6wE3MtNrBm9Zjjwn45cBsceBgoVrgFJjDb",
  "key19": "4Cmke34aNFELD5JowMjhKzh4BW3zx1HiBq4f9DQJG8vNAjav58GxirMx7nrnoAgCXeKJZki6dPsdBNPs4V8BxtCT",
  "key20": "4UpXma5oUpQEnLKy2guq3hAgcr2t8rRQGK8fAqPp4xjm7pWM5LreASJYc7DWsh6vbYAQX4psKqK6WjBHT1NkRbPp",
  "key21": "WQMd5E54Xgxhfac8BuTmAeUdHam3eDb1xvo3pYYRFTUfGw9B4oynDtnLvJ4VS2Hy4t7QQuMHMwZ5QMDVidBVWKK",
  "key22": "3uJQB28RrsmADNRS3gqUbzCPVQdRE7v5wTWCbH6Pq7AQrRaEcpqBnYxoD2pCh8DfVnh5nQqck6LNSRHxE9zLyKQr",
  "key23": "4gDzHD7N2H56wkyrDseYQjyDuFnfFyYnKCJfzDjUFez5Sk4oyb34JpTHtod8rUey6Lg2rE29UCx216uWLksS2apo",
  "key24": "4Ljs4qmqYhqh2Dwjw4jQMHj1LarGJd4p3m2pMPtfDv2whSdPJhsDHg7bj3htFTbyFthqSWbXZrBDKGqzyCNTHXhJ",
  "key25": "5vaHpFjAc2aAjnXe24maEcfgEBfHVGQVnzB96HyvLKeuPsAZX13z7CYA6ovdF1NDk7hRwGq9rMtdLxjp2VakDidH",
  "key26": "4kvzGaJDBt3ozWCceEokDbaU3AQ6aF6eNKD4dGHDWPsZCu63uchDSrtKmeEtN4hUUUhncdPwnweJHLshHnR4xVm",
  "key27": "44mua1oVWLvGz42kXc3cQed1VTizniCdfbfuEpictCbn2ktmuKXhheSEybjZFSE51cBbmauNL4x5chAoyRqA9U9U",
  "key28": "34Pu52bm7UQru15YSNYZVwXjKv62Pf5nSYpLofQ4S3jXzuup4V5HfKvhNTn8ewyWPaUKFkVAVGV8EQZC7MJPbtH4",
  "key29": "5Gksv4XuZkEAxBoF7ybsDx1jNswCSgs8QrP7kLFGMJ2VcCGRR1jF6kY3BADHsMkAz9B68zLa3bKkGucg2emoDN43",
  "key30": "3EpWWc1krcAvHemQ4uXJvnpAMxFyMsEr4QRqRC7WV5A6xLTwicN3yyHF2tMhz2AUCRei2WwimSiJsMDNLSe9hWgu",
  "key31": "5zJu8x4vX7p1cPZV9eHeVwBtwCtN8PVVBgBqEpHQR6Rgfgrsb5of3ZWgpHhVeoGj4LUo3JnrZqcy2YC9BUrHtNBi",
  "key32": "m2PqqyPn7ZFs9zdWhn6NsozkFTfYCzEM8xfgHguYUAv6JDd35K3bGk6vTemC5kmHArC1CgwWKpyrT54wxWgJ14Q"
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
