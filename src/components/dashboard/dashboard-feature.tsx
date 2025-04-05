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
    "4PsHBTk2ukwYUZqSE1v5x8WF1SdmW3WUHZ18A2ETF3QcEYJEmekdh1AUFzCN7etzbpgV2VY5AD15aE6Qjs7xnePr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nS9PwWnf1M8KBMeHWdov6zjokjRx2E1ivJmSBt5MJxsBUxoEdUUt1NsHryt21txhAsftEyoPFPeDPJi3RP85YDJ",
  "key1": "35XaZMaRetY7hr6FcsWMkepJmEK46ma5NCT6FVQbac6iT48RQYAeJfGJmaN7zasAXjMc91CPfhCFdrCWnXv7YWAE",
  "key2": "2tnMHmTSd3L25GtzoaPzFmsztVoB8eT89DzdMH4ZqPJSydCcHSH4Y2D5Wicc3sjqyZrMFDNL1Zj319MJtu2doJkJ",
  "key3": "gVe2L8kMjbWsuzWgTErxvvvuWXDgwZgU3ckMJRGjQo4Ki8x25Ufg25ufqeKrCS8TKFmwVtqwroc3i82BRyx7TEC",
  "key4": "6Ko8rMPSEu8i2SVzGAWSGHmJJiTbnTP2izcwHDEN1PDmtXFZfVtSaBsW3e6eD2J1Yg2wfo6F5e1S5HXbVAoLfa6",
  "key5": "4xwbbrs3GGM1yTKMejiozXRQrSbfha8Dc7nsNvbR9MuCSwsGJP8WU6ro9vnCTVxKDrNa1MYR9ZyDW9P8p7xytgZX",
  "key6": "KsJre8tFDStGpN1teo54ymKQrpkBeSbTDAHVA6AAacBAHm31WL7C8sEFdXseagWDM5oEzs88pLY8dNQYuAA1y4V",
  "key7": "2z4N23oMvQw4mvMFFu9tMTx43WxnCrwHqc2NxT6sCXeEWuXTgC9V2hZDjkXhLh1CXea77ijhiP1TdUwnic1aMS7",
  "key8": "34LbBWLxasW3uukHAGAMfgHKPKbmhQuC1VMp1X6d14HLUX88uDiyEeUh3AqNjnfUXSAMvVTEA5Gxh4teGHKZV8p1",
  "key9": "46iChagG1NMY7CsCWKR3KZBGbBvwDR5Gpcg7qBAWaQkE5DWVvYbLKA2LK54gRJ8ArykkHMYVPiDTv8PXwuZfB9cd",
  "key10": "4Xteo8VZg1nPngE4j4o3wbfsGdrcGiM8RLeLaS1Yuw25TWvZRnV3ErAqRgsPnpahn3twcvsERUrKomcFQTwj591A",
  "key11": "48ZsAV2iHGvGSYV3qd7FTjU1bLRtzTQ3bip35QcTxXXCJFHbe7wS4owXwbpiSi99je2GZfp4SZEhojq8McZF5yPi",
  "key12": "c2nPXJuTfjACqe3YUfM55AtCettDHdgzni1EKA9cGwn2QMJoGqJBnXm2YmM7f3zuoi9ZvRBbytkusZAHo5eqA6M",
  "key13": "3UNpRHdk9ZgkeRHuA9Sr6AwPGmEKtQ9gRnSqfhseSx3g9grjEmSiXR3bYeWK517vCvgs2imgCGarQVauRGm1uacf",
  "key14": "4AE16RoXCUr4ZSWDQrQLccu1gE56f6RY1VJSURsudPoY3Jp61ryuaU25z5LS5PDdoprsSsZn7fQUNf65iKBqrsJm",
  "key15": "5HhDVTdGD5NR84M5hqp5fkaDRRYDNXBBWwA5MgApZUxhUsdwNb9oLNjaL8YaxxjMi1jysR5iKdoXDi9Jwkua3zPQ",
  "key16": "f9Siod7RXVkr1Hz7KY3coJKwYeFjgyoCzcJv48URM1HJGoS9D3Z8NJ9DFC7AG2p9JEmQ5zV7kEjVVknD34VrSN5",
  "key17": "iqMsbqBdox74iX5bETAbEwqNeRG1VjzJKyZ5oAQ7PaavFQEG5KNQijv3uab5npxzRNB8Y2vX8ovWsbV1BmYy5ro",
  "key18": "3kket97K9jAXbbx2uGwEMso2GRSiWSEEnU6CwyREGkMBwhrUmL1NUADnTK6ipKjKiuBh3wNe5HBgs1LbfxeU93TS",
  "key19": "5JAbjBDBiQikYkBAS15YHHAZ3R7yhmDzVUZTHcDpdjVV6Wb8fZyv2TqUeu2kx99UcauU8egv6UaEU4Qh5PLEQ4Y5",
  "key20": "5tHH4DPhCqzwNmYvDpsdnToCh2kSzJXrbwwQf7wz2Q63kkaxnMgfiwSJ6iDBiLLrHeqfJLMfiMxviJZErDdqrktC",
  "key21": "5F3qTky6ENA4t87yYvaoCVKvZWNUnxxaGbNmomT8UXXggfLPemmEmn9mowH8p25gRLBHMG8gXUuvZaBLRHvg7qod",
  "key22": "iUbyHsGzbeHJH5kTGkC5fAcHUcyovUJQGb9U5kibpauVgNNcd9hKLVaWusrhJbsFPCPC65cVJHQySpnxEXEWCNS",
  "key23": "5QzwMxa7FK58ySjoBvgWoZddja4bENoM6dRABggGvP6E2tVhvLW4iWc2Vr1PmyfJQ4xFa92mYbqB94fy5mYfBvXw",
  "key24": "3RDqL9HfyLoCKu2w51ErkC3gLbRk88yA1FomsZPLJUMX3epoNoY5WqfTkwj6oGwS4k3p2P3dn2CeU8HpB8uAm2uV",
  "key25": "jbn5ygAJCfkREEsgS3CyBBwDdGhvmtUAghbm26HkheZghkmecF5wcZLoNJx34cuGJVYazHq5NNmjQgpZACfqTr7",
  "key26": "4G6qm1ye547MtBVrsrhSmNeJyLx8LGu9GNcygrqwk7ibQkk8744nkfDJZ727fETHnQMdVwAqmFB5Q3Th5wzPZDVy",
  "key27": "5Q1B6yv6RFkJbELFvtwwSXtVNN8gFPo6SueCugsjrMhYkiZvTUEujZBHRgD4zPt4sDRXvo2o1gbYh5pSd184EvhQ",
  "key28": "2cyhZ8MdRRGjM5PDRvrAXa5J9pZBVzwc3o3YeMPD3Da6j6Hx4RqaYhv1vBN94ydHf6iRvEbi5beHgh2L2wcGheeJ",
  "key29": "nbKoPDtDy6v7Lu4AsTK7tnrbemEggnSts4AXELGP1Us7KriNz9Tymny8ecoJNVmMR6GFNk2Lm5ZfuyaMa5M95Bw",
  "key30": "3CfeHLAhQht9jrGS4HpxzMHhNyXS6V1Gcfim7fcrSNvZLk8sGcHwuZnrvRF4xHqhwftSdGGGhAxuuUv8j4Uf29nE",
  "key31": "2X8EtDytpQgpzcwbmbZdP79gvBVEJZ9ptKAyreB1sZy1sAkqmN9zbsXUPfXVTA2vTBjeTddwCJTM8jQnQpu4x3pB",
  "key32": "2riHaWaFbN8QX77DfouNEiVqF9t7nC5gybE9y6WMA13G1qMraLUtPDLUUemtiz3qeMZ1F72Go3b1ZyUEaryPStwq",
  "key33": "5VMmL1aV9WXnVB7h6Nfcmzc91vSXQVru6xxzBPHs2sqShkVLw9RhjTyniNkAzTGoScNmkETVbnyome9zmV8rLVt8",
  "key34": "2zfN7ERnokSAc9boV1X1L9jXQJbsUX8JKc1s626d32FmVFhpwRn5rKnaJvcSrcchhzU2X5NFJJUUGzmTDzdRDCuy",
  "key35": "411CdE2iKoCGSof5R9CdSrUfRkqE58GtDcZjgCNhGX8f4y4DyewF4g33EA8tBU53hSjWhWJFcDa99cfv1TeFUnef",
  "key36": "Hy2iLvr7drnfUk7EJMJGu1Gr6cQ1myQBwREQ5DZP5thH7nit19i5vUdS5LYWgmk4aBywrThfcqBKeCRGY9gHHSu",
  "key37": "5khcHLNRyWCTPv5mihYMYBeFtX6bmidY7g98ZzL8gquyd9XMGiNVS4T1RnHi2xMSBrJD35QrnaX2mc2UKE57wKE4",
  "key38": "5ASS318K8FiwLpW7KofiVzgvWaiUQFhPturM2n3KgBCgwHxHTfQNQ1p1zKTGdthkzBmshir7y9AEs9hgWJwk9CBA",
  "key39": "5Gzk37V2zEBSTtYwgCincj763oVjA2ijhXoCNF62dFrUJFeYKLrz2wpmTgqDTnB8fZxn4MiPWHvuw4Ai9WricUPb",
  "key40": "2TzdHCYp7n3td6mo6QKKEV6p9xvzhSwR3L7WEWaGwNyCgkHkWBnqN2yj51imhnexaJ7niLeEj5rAFryHjCkdJiX4",
  "key41": "2xY9LgHM9Ki8atZS7sMn3MP43BieQHaauT65JiMdS9qYQi1ZJ5MZzVkVPAYJWD1mAdHnfZGm1EfT9wPu3mTPvvLL"
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
