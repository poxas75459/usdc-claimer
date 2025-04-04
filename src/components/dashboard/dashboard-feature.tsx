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
    "67hnnYn1civrNiz3N2NYpPZkrMTPb7wBBLngp52TCWnUnV8J5BnpUNWqXDMR4ca6MocHduFQ9328tHTaY3wLMQzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vbo6uAMJoWdZibN5hDmM7g81YpgjHt37uWZhiRJ5TaYXUmv9veVXb6ESB78au76uRi2xfZJxohddrseZ8kMJD5u",
  "key1": "2q8EnPN8RorLSrHriUxW3aNq9sdnJsMQp4BgEQr3qNpWSXgFA2vLWc1uEmcFRs2erK16hWsoNEX9k6gM4AKwCj6H",
  "key2": "5gBd2igR4AZn19W8qUTTs9QVZcexdHcpx4xSb7sLe8nQCj9aWK1smPmGHzdcDoJGSNtD8uDMWxqBbEvyxKwqgeEa",
  "key3": "5UXUg5XyGSjvuLUMhJTfkuZ5fa7MAFh8NaDDT2Y148pj4ffvQK1o1vaGpEyxh6QDpRX8ukYLJzD8sz47i3VEGbVg",
  "key4": "3MKCk8jQF9CSWwCYKww1qLwhFK8SooXmQHW8u6PtDjkKH55geyVZc8FuHEQUfV49a4KtFHJvrY41Vrrao8F6pzsd",
  "key5": "3ptFBi2jvLQWAfpzy8bcZMNUCn7s5Tsqz4yySYxeiWyHfpu2Ehwj4kbZQJhqPS47AAUJDcVUN63fj5C9RSDyUnfc",
  "key6": "5nLkKU59xJrag1kyNBEEFM2XXWAkHFTmuZBpysZB8v8A6qdjYutQzD543H7ehPncqpjYry1XhyYLBCXQhERi9AMM",
  "key7": "pLZhnn2NxsVhJohzY5dXXzHdHyvZQm24aspaJvJGzEEoYkRq3zEHC2R2uryaBuMHwoLzbp9vfUNFJJNTPdAgwpJ",
  "key8": "3ig4bJtF4mwBMk3XN5AQJMah6euv1Yw5B92YxGmkFVLu7U9gvZ882TH2VtKKtZEBzDhS76nVnPcTA5eyy7xsSAum",
  "key9": "5Pby3jw4iguPaZs3ShbxVBvjcvduyACbSMb5P1uNB7jHf8278qur5khshRWmK1a2VmjMX8vhBaWjmCP1PrLuEQDH",
  "key10": "3FWjQQxg2tRJdgZiW6mV2GjPrSJywWgGsq1iMyNBi6HSs7rwfsNDvVHUAJ4iQBTkVXTqMxuEbPtjfHUBCYRExYpg",
  "key11": "3s4FmiWizVLK3DPT8DxA9CSrwkgDF6B1ykaKULSyYiYrS8jgTiDzRNEGeTcWrrNKscULnXi2YveJmvBM7jdVW2mF",
  "key12": "5UUQVgHU1PDqjgoueRcJjKoSyncw2ArmEsJfweuNcTu2Lmap223ds4w7SmWWoPB5DnDDNiy8bThFnPjQTF6kqqRE",
  "key13": "3MaAoCVwGJTJLwEELbJ637FCnaesyN8tgraKfGtrRmUfrWiX1SjDJAZcB19UEtzDksYxusiaEPLgfAnmg6eDBNcJ",
  "key14": "22CGKLdTET3u98mxWHm18Tz81vxm7JFQXCfEfrVhCrok1nx29KmURA7MXsYQGuvny2knh56C5fbg2VZ3ewxBqdTo",
  "key15": "3zueNY7WZnXQoq6xF45SC2dWZMUxB2kXPRRMfEXeCmm3UtWJVmBh5g5vCCqMFZnmRDwhFy9hCCfBG4tcSDzjiKwa",
  "key16": "1Sck4F55fzRNsHp4ihitmRVtEMyp3NN4TD2yL2d12oC7q4W7Ra4zKwRsYog7j6zvobHqUrQ63S3qD1JKFkoWuF",
  "key17": "iTrabWR4s5wK6PdYmWoSr8gDNNb1irHBg2EsuBApj5Qtts9UhySA1peB16Lx1AZB8jkEecgaszBqFD411gmbxj1",
  "key18": "3h157vk4MTCsYTDNwtHiUq9UXJu2nyZsut5UJBZG2EMeWtg1VMYVa1RXHzgMMLmXyRMvBnWLb6LXGcDK2AE1jiF6",
  "key19": "4EUnzxUfpnCYmMzqNuXkV7WTXFzBdkC8GJyxvqXMupAHgdGbtL2zqZsANTqSXGPNHnE3GgVFYDLT9d54gDc9hMUR",
  "key20": "2c3YziEHdK7ZguvMg96ZpdB1g1Rx8vCiqHoXvyQ55VajE4pPD6aVTc8sPP3QD2YpKSd4kieMdCzE9s5nnxY6wteW",
  "key21": "9NDrqHXYBCUz32vqZAuCNAG93SKXHDnCub6NuKm7JyZj26WGH1t5fR4ZDYoZuFQJfN8tBoXwtz98mw8ZKUdvMWz",
  "key22": "15GC6hbEDCyQeTUWkajidfLc8aWE4NRddZFCKoxiS7qB55o183EZdv4J34eFr6WhoykqFZp2FZL1dGWguwjokK3",
  "key23": "4Rko3XanqUxsSVa6bL8E6Bae2SimV4Tfr1dVvQLCs8VqtdtS8p1BkDNhjtGXcX5vq6pGA8oZY5gEJQcy5cV8i6nr",
  "key24": "3DthNm733dViZy2fctUX3ZSWJm5MPWJaUakk7BGUX7oUxUNob8NdoSsUVYo8UAkkKBZLiFL2nzpHtCckpNS74S2g",
  "key25": "eH8SwWHZgNn8NQ6rhHQLJNcPcABNWx1kNy25kTBoLyJaPLrA7q5LJ9KT3NBmn3qiykAvPqgfdx66t8ViFjDYRgJ",
  "key26": "5YwCjTppQ8ZDK8yZPfEm3iCC7XTKDWyG6K5jAvV8StKare7y6qnAuwfZopt7LKMUjZ18VfwfiwCHkzt8ztVMp2Bz",
  "key27": "292vkd9VppGPe94u9CSwa74747hJVBFp48MJy73PwoM7U51EzwDzN6uLmoyuaKDdky7PSNLDPYVnff6g7MsWg8Sn",
  "key28": "2NBUHBaSgp7KpXXhb6JRWpi58Uqby2uofm6g4mFJVTEkoM6gJ3DTmS5wQMiZ2bJ3Q6TiZtYRbFUGzHXMjtFZYCG4",
  "key29": "fskQGxLrmNmLV7ehNndfMJS6mPx2zpErowzNgK94L17MtkW7CWzoGD9PTGNQwDW9HFeUdszsbjSpUrx1mmLzvh7",
  "key30": "5yd2RV1YYXtMiAZsPrRDW6wAA9NQ3Gi9JXdG1ajjyS9keZagAq5LBNi2c3qsVbCNTz7PrvKuVxAxg2UjRw9t1oyu",
  "key31": "29zZRUWoc7c9g7qBnm6C3wrkjZKuYZMJg23qorexez3gBJJc5jD3EK6iXbpPjDf9GqXuwj64wSCwJMSRmP4oQzF6",
  "key32": "ZsCRrjXebegBA5Wx6mqNA6q1nvVUyneyKhUoCajqPzJkiiCQo45wnfvxzN2kCxyoVNQy9TuRJFepQu6FTTaZPGf",
  "key33": "3KNeJSe6frwe2oeXcVRz6WbmeRyc1FALYJDWA1gabDfbNjdgkSgiT2d2KnSzmcxeMN7bNpAvXDSZ4PeR9LqsyNKx",
  "key34": "4woSiS1DGGiXeMBo6rs1xqFvcgusU32RXXhuDnD8mj3DJ3x6oYG2VVmpKCsQYkbmzcP3g8UwazNDtyatw9otjzku"
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
