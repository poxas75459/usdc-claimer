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
    "4pViRVjjNiGad3UsBGE4YCAJUB6FZxpKuoNCx56xhweyuJXd1CyAAojWuNgSPuDTJ1BWJEVnpFXEJFXebZdBFuRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p3XRpGzjD1YSzSHxdJABjQPWwEUp5hmtHpRKfzZStTcFhho8893Av2p9ESXnJ3dRQ7xAqc4SL9pXATkiP4xNWP9",
  "key1": "4Ux3qgjWMyNeMRKCzzNycg2oRfFUuceeaWkvHcpGrFm8xdhvUQbxHW3bdX1yJAGRo5aPDwS7tct1pZVrkSm7vaKZ",
  "key2": "5S7KvNfTcsn8gNRd4rPg4jJi7iYngUZmSHP51Y1FHJ29zeiUPhUN3eHqu6WRFdf5nmeJ9hR3FP6FtpcZi8HGC4XZ",
  "key3": "22NDsA81k5pNum9zYq794f64Boz5hojPmEz3H9KRaxfiRotBxBy4fcQg6VHXZJxZo2V88y4VXutMbDbCRCkkF8Ge",
  "key4": "MoN3GL1ewEAR79M7WxLnBzzatQhfuRaoJtq1efVr3fEdRcmdqxkwCc7u9wXzaHejSCPi1UTzFdUV2dFWkgmaWGQ",
  "key5": "3j7uR7rCdvJphpCttwupndsPw7PvBRyLdSALhe3dYcBKyGZnV3PR2s5JWnd7PmatoPyCb4LjfuAMabTMZb8NXSYF",
  "key6": "5PkRA2D6r32vwp7w5B1YkMC8MjeTDnLySktGbUrHaZvvbp37nLVrpacvQoLjHgv4GKvMtidcDhpNawaAQr3zowS8",
  "key7": "i6uVPgGebMTmS9F8ckW7MbmWPGr33vj9EHjXN15JnejPu9R9i2hP3KqEmVmgUbkyaSTk38bJpWsskkQKukC4SMg",
  "key8": "4WQCv6q8XmUYeAp2bv7vjJKRJyrkH99YPGGY7cCte2eps2Bo1aS48F9Cx3bFhAjRG1todKr16RTcr5MfgRcoiJHM",
  "key9": "Af74TmBURXNEMVopWUCU39EY396B2zXm2k9g7CovqdBETnvxYWUqfeneHAWRaFe4rxb1xvTYKWKTerYype41FiM",
  "key10": "ad4zT8cMhQvNNiSAH1YcmYYCJnD1JbpT83w13WCjc4FwyZw7rWhxqeKX6rS9gGG6oqK4QNpvH6rXVUVMBikhEHR",
  "key11": "87i7q94nS1nx3wcpHB54qgZAFqhNwvBdGXNwbCbaHraXXpWJacewF74FXUQeCEG48dytGEEB9ziLJgqqWC9QKtZ",
  "key12": "3WFC7vMoGC8bucC5QehxhhpzRmo8oWGxExpn94XHY1XXreXGS4FqcQAsL76nng5uz2jR1BrUmR9YZiLpRUEC4Q8z",
  "key13": "JjTkLgmQApCVokRwkLsTStZ4CgFvUe56mpDPNkLY6pzRcaJ4P49E4QcbDFbuyriSAu3SrpXiCXdif4zTY4brPKt",
  "key14": "2ewdPvgiVzkmscbb11HLd3jqx1VXjh5Puu1cVrRkrcm5VGAnKqYKVeUxCvu79pP8SHXQZZimxbPgsd1hKnB8Dpre",
  "key15": "4kj9A9QYzZ4vp5dfCW6ffufEU6EKBbURL76U7TSs7Wo3Kut88dooKFb2B6E4ci5yLkdEJ8n5xBU5RGXcuAev88Rk",
  "key16": "3kgieVdkybsomrXycvWtXussnNwSFC51fU9zXkhrKhR2P8jWNNggmdgz5XzjE4cZSm7tgjauRKxLRdvGGRGb626W",
  "key17": "49dSe4z55S5cLcp2iow9pVRcAZSYGsywra7yzS6yN4wjxJgBEyRQWELMErF1pjgxebBRktJYoAs88kiBb9eeWzJt",
  "key18": "67PPeqyvDURNr91E9LREUjmsHSCN3J52WDQwSyPxoe9zUbaexzHaTiq4fnLivz4CojqPYDojSR1gHX6xwgymRcz9",
  "key19": "5RdHst146vSQVz6RzFp8b6157LWKApucfaBg8JbxwBQ4fVw88qnoBbTQGPPZEhuXLPTxF3dznhzAUwHv2RwR3fjz",
  "key20": "5cy9YkEpCRnSNtHr1LqeD8LAAmLPSteh8LZUnCLZPX3iE1tz7SwrUzDnVQYHFWRp7UbJeJChK3BGTs3rbLwhdWKf",
  "key21": "41UFHF6pnzvRSBsVjeNwUzwyZX3iTPg9MEQ9qEpeXQn1Bb7jZFnNJyXrHnkDGwq7vcPC4xRarzGHvbXhfMkWH7rZ",
  "key22": "3ZYYHfQBZZsPik7jWewVH7jnsZzg4WrwrQ1uXeMS4tuHA3xCt8NC9AazeermCqsBCR1HfWTS7BZvTH4V8rNVj8yy",
  "key23": "5tYwc16gzckmjA1comxhYwkVt5fv6ZvN9rbwWsdP76Ww7c4pbDgEmLPXUXpMYnWx3fC649wgy4JKhQpGMZucXNAB",
  "key24": "24JnJ49LoP88Ff8dgqJi4B2o933vt3qqFotwyswNS5S8wraBVeYmJFVCYWvnaV67wrBrzsKVHNsCWbaPnoiyAS1f",
  "key25": "2fBKYHgSn3mcmc62oqi4smHnWsa2BSQacJDNk7cyu7PGqYtdeGgRN8PMrJ2S3BgmhKjCaWZfDf2mbvhh4QyYEFVj",
  "key26": "2NuoxjGKSiTQPuWFhNsDtovQMAEwS1HJTvAQY7v1YidfmgnwWaPpg5DPDt89wUe8rzGiX4vMRHvCETMpEkp43Dw",
  "key27": "2sysdGnareGVk9k8SRNK6H5hYuUd6QWBaDHLwLkXrYUM275fxHxwmDDDcmLS8Z2NztMf7RYTXtcK1hMn5DAaTSUb",
  "key28": "42ZYZk7wNXQf4xBZJZBG5h5UJtuCnkwWvMtK2428Vsv1UrgL83v3EPT7F2Ujex8jMABMXMxk5jF8tPn5wpLvLrqy",
  "key29": "A9w8FkTC5HecgNNtVoBhgjvxEYHufkvQdZiTMmT4kbewsxZg8cDAvA54mB5tzKGFqVHfeRusuYPqomZ4oESPRPC",
  "key30": "54tKgD2755voePrjWSkmb8r7eCZmxwWQF5uaoZCJvVdQFwf4JC7URyUTPJEL89i7pudW2zUtr9GLZrXK1uXuwznX",
  "key31": "3WsWSkxbzYtgaisKU6wMqhRywQBaXUwtaG6Ud1w8sKEEDozcjEcAn82EP1PMBtyV3SCQbfESLDQ1EuQ1dpNZf3SM",
  "key32": "2rRQa1sg9Z16vRGSi2gApefrR8f3BKeV4TZeXCRX1xtvcZ5jGtwxfHGirWnjisyojdxdJkHLhPGZVzbqBNX6cJyd",
  "key33": "3qvuoJXb1n1864izk48KE5MofUsLpTDWKPuyX5wHoei7KaUJP5TFodgF7q7FhcsJfLmE3DVnjFWEuj8wGzSxzwPT",
  "key34": "tRTJqNRXv78mgp9QmjXsNpVCmdVhF9UMRNxYuSrU1bNB9qpaGxJMwsALF7v97hgixHFWmJ65pta9KtYvZ1eDYt6",
  "key35": "4v9rXKAre8qztWmZWHoeb7UShew3zGF75pJEFx8CQaYhkXz6GZ9P881RyhXkPVkafW77MnrXRuEyw9hPMD1PYkF5",
  "key36": "67jcv9LwCfAeS4JVWU3vVbYz8CCULwC3b1VB4mvDhVc4hZrqPhohru8vyCKtbrjeqyBoYnHoZjUyCVvTYBfjW2v8",
  "key37": "EdTJMwxLYecMHs7KDukCatNusiX71JpRzWrjH3WzWTRm4KfVv8WbR7qKYfecybN7j1NcVXNBaSxyzZQdB9Wa2iJ",
  "key38": "5PTYmbfDL14SD9VjMXZQacBaZyqcXYzD2XpxpDjsKXoyvYMDrq6eQCNa5os5ps4mQw7rHHUwffEyqJmKg4f4KFUi"
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
