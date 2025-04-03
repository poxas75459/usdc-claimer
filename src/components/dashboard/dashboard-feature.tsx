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
    "2WAHeACykRZaLx1JxaGXw2NM2NeZZn4qSHQbCSL5u6pRBNcm7uEYhJR4zSBpnCS9ABdHooTSmCjYztPAXxd1RHnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ceuAuo1TJ7ABwPVVgECuNqgEwz6ySgna4XyouDEFrqRtXAs8Sr6MvD6zSR8JxqjY3BiGXncGbAtbAPnEpNCQ98s",
  "key1": "65UkVdyPdAM51B7y3resQwEKu1M35DfgGT6CZvMLVKW7xKai6XWnrKgaifbY6xc7eJVANUcUCHeWKwcPLdMN5TGe",
  "key2": "2eermQJxDR2RJTN8ngRW2VW3xdzNTWUjpuBQTJxitkb6AM7P4XtmXkmULD1rPxpTgLqXRijD3v99q9E182MKgePH",
  "key3": "3Mdwhrb7JDoKEydpXT45yd5Wnw4NDSjYAeob431W1FmpGZ8CL5WYLMmwq7dA58boKpMUdU9Gr2MXEEpGPZViWPAK",
  "key4": "2qy837jpZZM3HvZgEsqJMxLzpnUoZg8JN2DXZYUG9cBXfDk4rpChcC7k7iqegkbE3xAF6wQfF3YeUddDQu5wAWWu",
  "key5": "4Tfw8ikFESu2CgP6S5NSAnBtbDqT2ZFVj64A3UknUVAWSPsnuTr8ktNv32Vo3jfF5PoFghLpLgLvacqGpx23CdDP",
  "key6": "3STrvAzVTrGsGpdqssEVrVAZMEqsX5YV1hXcE9UbbrQTpAFV44h2Yt1SnkgqUzNaQySraw67wgbbM2A8CJ8moqow",
  "key7": "2cw49GUWsVw1rS5gyGnx9gvmzfLbuDaMjTgxDxWumfMZPXUgtgzFci3kb2fm4DJZsVcyBKzNrUuXgrPCbdZK6jga",
  "key8": "3ro9TVdptXEhxg5ofJcaD751HXCJLWAjynMfHDWcUfZDqnRjN6dbjZgoxrBAQpznxZPjPxknhEpK4UGYNncQddTF",
  "key9": "5rhnXS4yDkCMaLp6sRZD7oHRSQZ6dt6jmDUjMUphiasDjah61pArnUZhhtSvLfGM4Joj6S39fS4xa9LY7nT6LqXi",
  "key10": "3ttPqCdbNpt9bHdNfJZTKtruqdDX6jWwfHhwomYTqxQupLimqbHjZxAeNSR7gitHpiKnpoE4kUyjpqqYNYCd5JiG",
  "key11": "5z1VcDFS2e2PEjepHxZrsq8oLh2KENmHzHnBsAQFSgzsV6yUiCkw7kyNuMeKLc1YVAPrmMtXEEtmoBUJ1PLz9rDv",
  "key12": "5YJWHfHF8MF65DKojwYao6MYWE1EKLP2nqMZEKBphMmhtK68wNNCoX3E2MftZ9CCRe5YAERrmaq2iVDZQKTz8khq",
  "key13": "2oS2FzcmDpRXZ15erbTeNmA7hVLFUDFLuHxmxDf5iVXPkz8agpS6takCzyaGFsX4ZfFCQmRqwZhhV52WvtLbAz3u",
  "key14": "5wWNTZtaT7Et1DcRUa4KKCKWCREAhqcSsUvJ9RZanW2H5V2DBwJcVi6gt6H22EGnBrUwj2PTuoMqvBB3qCbJEv4C",
  "key15": "5mgVShghUca6aS3DQTv683AAxDoMCvG2hdti9Y8hydniPBqpxJBmvFW7V4X2Y3uf3upJHr7QwMy33ktgwpSDXVBN",
  "key16": "2Hnz6NNrUNMXEsV1eHoh5J7SC2pk7a1DVfoAJQxCwDzvgYiKUBdA4jzFqQfaPhgJ5kiKuLNFL9Kiek2o561UscQP",
  "key17": "67FYQo3YNXE97xnFBBtbRgBLkywM2X1vzJaofvFLZKHj19ureNAApMw2S2d5z5gj9Mx5LiVxfHFktUTzVUckP72s",
  "key18": "rWSd5QKywgddueaiG3wF8zfWsZD7QYpXCCBSJgx3Ji8DUU2A4YhFrPGB2Gwtpfjfqjne5TvUJfmr1qniy8M6TJk",
  "key19": "2fbCwxccB9oVE8g9xCUCph9mejjLa9kbRrhmueGsMZi87rF1Nvn3y6z6P4fa3g16kJ2k41WcpJTsKP9fLumzrrJZ",
  "key20": "5TRhnRYkGZCBACSm2dogjaPDNGJgEjNxZcEAzLoyEndvnkAzyBEZU7JaiocRtBBQztYXNmsjcFuzaWiEihYdU6eW",
  "key21": "4F13firw44a7D7ch4rz66uCEsvV8pPueeTqQ4Gjbt3aDwVeRhwMFvurbwPovexE3SDYaBkYWZsEHgnTahqsRu6yx",
  "key22": "maQT1d3DndNew8NuPENMryQjK82Bdk5rcT7D3Z2mHt3cC7KC9UFZoPL8mT3rSDiobFuDGoLkcGnwDSpQWC3xHr8",
  "key23": "FWH2Czz6sGKnREEaDSJAwVkMWcXBEDsCCnt7UdU9KjCeUHW8ri3u8cbRgxZxPJ6b6gHJpN6xxGF9MqoX8K8R4ib",
  "key24": "4q97gquNBZjCUNLVxuku4VWRN2bRbdrRGQtcF1gc5UB84RHvySuCWzohxcLJRPxVx7BEyUTmga62Yzc8hCq1gcYZ",
  "key25": "BJWjP9pFTcghAtyLPbEcuJjzJkPXB7LpKwhSD54aWYaxRGUjRpgUCqSb61mqeScjafKMD5HU5vqyxXA6HUwvXcM",
  "key26": "2EaAMe63akx66iptgVKx87DebS2egWJUHkrMWdS1bHZ5ffhVZNjuvDYzp6sEzz3gKXQPX4orcUZU9DaBfKNk3MSC",
  "key27": "2a2FjbzP7QFCtb8BZN8FYWHEn4qntJNi2nKZj4weuhz29r8zsj5L2wcUSP86kUMkrCXTTcaUqKacnWwAukcNH3Ew",
  "key28": "r75uuvmycwD3hshnBcYGwgVb3bA3JLfk11USvrMqXiQ4YLEhsW13zBPwAs8CQpCxjEQPfRvDTsZDQjWseg2tDBq",
  "key29": "5vvcjyh36Ynbef5x3CNkjiTMQSY2pUc9AmNxC22jMN9fT8xQCufYtqU78y4D9LYisHD1eJAfmQoFjKJMbuwi9nNL",
  "key30": "3F99NjcgwSFMekM1cLohxSm2GNhWXFTcmtzxDgm3kg1URvq8scdfe67CtPtfQQB7iP8Jj2mfUV3wcrviTYCbRXTc",
  "key31": "2FuybQUnokJEsLa7HwkYaRf5yu85fBsK1pBHDHMRS2LQ8WVgDcsaiTuuw2srVf1NQYM6gKwAq1ZUV3ZizuYQpg7o",
  "key32": "2qvupgPAqcDN4TGf5v8ubNAA3FtM9H5W9KuSwb85Qb6RRtvTDnWhuCKcuqP6yM6zRDMYqE4nYUei8KwDewjKY2VQ",
  "key33": "4SRgfDT2LXc8c44tkJFdFcdmKeR2ahB9ZS6xbNfa74PShqCpxiPBxnwZF99Edadn4Ef4u5DP9JGk3f8d1oMT2fLG",
  "key34": "616FJrJzVkRsJf6kYvHgKtW1UJcPuGieRaMYZ98by6ZVoWPK21HPSY8A1mYn1k4JDVkGMkF6RTQume16PoDwvFCv",
  "key35": "3rzupUTMza6JLHyZoPSWizH7ipbextZ1FYzkqTxxm2qSzGrhxGrnUsg6SZJSA4SX7LQ1UK3PTjx4p1VMRTvW1x6q",
  "key36": "u3uy2XbQAMq1Ye7rYpxUt5hryBwYk6y2y9x8JquTVfDSbrDRa8aBL65GEzWAJUkKHzLKf4umDhgUm6xND2u6rM2",
  "key37": "5CBQBfzcwzhfjbETDGvWcgBrNVboVYQhsh1peSJ6YwN1en7utGxuAcGX3cjdWS1KkUSxtHixN22nbYZk9W7dQqfc",
  "key38": "2C3dz6U6e39YjLBpM5e9Dv1h1g1VjEQZj58LG9AG5uX7hHhiFjA5qziEGFhU8ZD5KMbFcLBftBJeJBDv425UTezu"
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
