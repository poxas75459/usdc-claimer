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
    "3oYWp7FMpap5XDWmNNfeNMGr16NG3Q8iXcGqUCSXzrw51xYgHeojP3Am7aGn1WFSLyPhYkEGSK2cVA8AZasXaQ7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UJ1MXfLP4BGZq9wFkbo9THBrJf4MAcxB9t3qG6VBh46VEpeMsmMFPxWRxZyJCCqX57MgrcGyNRuq5Qyvh4S8VRo",
  "key1": "gQNmHhiMAYzxVtDxJKVJAKnZArJHzZbFWpL8724Mykn2JQtumsqcA8rWq8Ktm8f4EbLjTrQL1mdVWbSTRPdpbfQ",
  "key2": "3qModEzTTxVtgRtb1ATRLEfQLN4B53ULLgBaKYxkQJdA9P9DJZZS2i3ECzHoYomLUxFMDzk1jKWVpAyK9UPdRss3",
  "key3": "2z7oNnGM3XrCt2fUrZoVqKk78n8wvwYFpUPLLX4NwPJd9m6DgaG1sZ2CWdXFEmZCTNxqhqdnpNMCVUeXE1Aqiwc5",
  "key4": "3157uRsGoELHQr2eMu85Y7j8wsqfgufwAYtDhdrW42mUD2DVn8ZJ1gyCuPsywYARL2CkskeBsVa91iEqGiqJfzv2",
  "key5": "57puxhLzaQk1NP7DDCCJynVLF2F3MNhbjz8MVxMkjiQPNuNevTyx6sdbdxFgU6gNw5DDWVpCQhkG65wxJtMxncrR",
  "key6": "4XNsUsbyX7CicqPyYFKUaRZdxTMkkyLwwpCwt21fhPefqdHaUYEzK4AUKRQt8M7zXtAsuDGDQsjrqHt2ixdy64RJ",
  "key7": "2KLk4qf9d9Sj2LAUn7UWmtZ1rtsLiEMC5jgQjjyzke7yw46fev5fNtfrxRzu17ysaeFCEuKTV3iytitHvZCsaRoZ",
  "key8": "3iU1mJxwa6y4tXB4we63avRhAaDyVaBM6mPSHyHFZs3hxrM1mBPvaUafEQXKMxXF4tYd9ktnBqTvpDtFyyKKCHrp",
  "key9": "o5tEwMANWecq66dS39as5r6EFnKbo6gfv6QgsRV8fZpfT2RghLG1qpiVVk9SmAfzGTzMPjVkyMNzXbSfocbQVth",
  "key10": "EjhycDeTqVwFm26voS3Bgnrv9CeHXhKehoSJZC2jEUzEedLGqCqxajtjPt3vBPKdat5E3wrB24DPKTmXfXkxu4d",
  "key11": "qrDU79kKXrzRZBHEFFrUCWwKYFNHxFCZd27wAwcaJV1Uo9wgHoof8V5sa5Lpd6EPJjNNHobf62UapgsaqoHgtAd",
  "key12": "4omTYysmb39fYBoSpRWjpScdWpCKb56Ej9U78HQ44o5amHsn1qYbzmwv64FkSTcWwGYBG4toR1PGaEVayPknD5Xq",
  "key13": "5UeJojKrB71NJSYCqeuWJK7VstnpAjn97LdQxMyWWK8wRHDrseKwZccDPPj4roWeagcFf93S3TJK9hfVykb6QoTm",
  "key14": "2LhukTAAz424wY75VnmkQPNEwJk8BQZiCMn8xy5JgMsm74eKipYG9zxcPhJjHmNPR4rbEXDTTAXKQc7FqXhtG2et",
  "key15": "bzRNQDAv5JpAzQSo1HB6mUL2rpEuMUnJZ91Z7xdhpPKrBMiXJfTpU4Fuamo3g7zytEXNyHVZxEAwE4gcbJuHaTV",
  "key16": "1wVNd8jkMxGZKTsETvJBDcyZxkqGaMcdPQ29zVjZTdmSfzPaCH9LCpJdzst3TBeGAzy12Gk2ZtqUh6HktDf7mis",
  "key17": "2n99Z5ijCqa6YE95199ejX9HJoHfy9cYNxcCjETUAYbqSsYjZKJ3jvEVT5XLHuZrH61JXfa6tqXNWq7g76WxzXiJ",
  "key18": "ck1p6Lewt75VLfXJKwuZ4yMhgmaYUsfdnmgx9x6p1sVt8HSFQdiRNCeNE55QJkmGyUgPiXwT8ubHrGN27jCRNkh",
  "key19": "4NspKgQAkuanCWMqdJGFNFneDqDY5LsMKVGvzUZ1bi9bot7cYcoZ3TRwkmfNHAtXx3K15FXu7SNJMXT9LKVvAJqC",
  "key20": "2uyg6zh2LAgAHSLH5ZR4i1jt2a1NipRJ57rTnHQmrMu9QFk1tKFL5MqWBmg8MP7iL94HNQQqpFrYrMQPFrFVu2wo",
  "key21": "b8YTodLqkgTf3n6kzdxZezYXJZ1sQ4kCC32NJVRCEezMaJeqidMq4jVUpwF4AqMPBiXRWguwcKA8fbRb5huVo7t",
  "key22": "43MVFoTiS3aBcMy11RhyVp9HKKAmSxH2mCEu8hrLC5zwWxMkPncd8nUfvqdvWYsDHB1Cnv6PhnngASKWXrUVPEuX",
  "key23": "4VHzYEsCYmEN4hHZbN5PBojEN6Y4dnBGGXv4xX3bfEMDjN2WLszQZDmKMaUUuBpBb2FVmEfridnyosQ6rtzRvG5E",
  "key24": "27PDm9DLDwt5TeTTKHkTbQ8624DoYPvEhPG1gnVG7GHk398civXma7P8Nh3PXx11g5hJhctJDuWcoiCngvKmsmWF",
  "key25": "4tYg3FuZoKV4m3xoBThmtMUYCXGbZR1SAGedW7TSJADMkq3dsJ1Ffm7aByj8AXiEMb5Dtda2ebQ9mshWQcu7NTTE",
  "key26": "32yPPArwCdshMj3iLvcF36HRhcZixFL82JSKa6Ck7D6EbV7bzT1zU6EKNwPcQLbFHTTyGpZuNnVtPJSQc3s8ktkD",
  "key27": "66aomhFtjSKtC1wcw138ofXJ8nvSPGSAr6HRoizXhxZ449CDiywR1RhWLxvNRDkUEdou4nP9uKfxPcq98EWRvWpT",
  "key28": "7gFp4nE3zxiB83WsPXU4hY5B5a9FxDhN2GB88BDAeJAt1p4ZEo2kdRL49Ba7RRgMLy6WrqHD68H2juACBW4Le2y",
  "key29": "5gQK2mbkCZY2iejG56TeTyjyceNu15nMgGNTsTgBZzgpcuLaPk7DD68F9HPxVjnGcGVdEsvoyawojNK6nnMXa7K7",
  "key30": "595B8sebn7xhVjgGoUxvd6SHHkQvAHLXLjygz2PY8rGhGxv78SuW1uWmcahXryG8n4rizGhaCyAXJNVexhmCHsM5",
  "key31": "24MofNr9vkSyBEwfbaCA8srpGqSsD5AKLsJgzvR7DSpqte1Vcd8ycr7pqsB9eTuB5kMiau8pMF1P2xLW5EsJD4u1",
  "key32": "3PqmXxcpacVwjiqW7psNdYmpAYdXaxBMaEaawH4wukPFitkzLQzxBSpH53c9JAk2gBFgaa9DaGSaNaEy4MXNH8VW",
  "key33": "4t43wmah5t4iuuWBwFiGAcaAF8Eu4EKCoX4FNBPLEAZD6Vr5KyMB7XCWupjymDTHmstxAHsrzhYzMD9kFSxbNxVc",
  "key34": "dteexTxW4oLi9CmXWGEuPuEUNpggovRn5uHhdQKCfRXnEaqXFdZ7bmTwFFkZPSVcg7bey4iA4xkqkQYokA89mUK",
  "key35": "3KYZeojNh9eAUDDDLRVEAHjophQfDEmK9YGiztD53WGSTpd2L5QTdWRT6vTQNxHBQNVzh7viZQBerHRvtRHHFNVf",
  "key36": "2pgauZtEHaoFmx7EX7m8yW7BNCrGA8Xwn7K7YvvyraQoaF9Aah3AExEbeDR2eKcaUCX4WJC83zjzVWUmMhrLoEYL",
  "key37": "4PipvefWZ12wLGDZUyMo62ZSNDcA1TXNxsiukEgno5kgbaBEJ3v5YSTbZKEtzyEb86CTmdvZtUrGrgUmT7doJNGc",
  "key38": "3yvKa7sjvTYTKeRBNAB9UyJT5bjjuzPvfSHSTceiWSTuhbVPa26m8gL1xoA23cQF5JetZ7RCTFAW6BxPf89dQHrB",
  "key39": "5iBmMzHn95zVtenuhDgZcDLFczuN5j9RHG5DyWNifWrVZv7DpjNRAh3taAJSc6bmzTZoT1DQkj4ns1eCvCj4hGR2",
  "key40": "5XsWD1QNEmm3LzRrMoc5T2Z8Jc7UkuAVcRYi4byF83y8kCtUKkpZQMfx1T5UkL2AWiGF3vh7HChY1Je844Shqyy8",
  "key41": "PxorhRREYiUtZ4F5g2pzy5VFGN8GQ811AqNrFomjLvcf7GEnvVafghqvsq3dqCSSSU9iB98Nh51gVyxniNmRQHD",
  "key42": "4wMxfYLsWxGPoRqyVVRVx21RxkyfaxYBMYCkWNU5GotM3NhHw4aUNRhcVhE79T9Hr7jzdBxwE1rpvXvY3sQ1JZbr",
  "key43": "43oZYyr7TYbXR4AgzrUyD88AUYzaUTv1RESiWfTjf2wC6oUiCxV9bKZ38JYgisYUFq62rtSzYfJxTzAuNQbgvtcg",
  "key44": "2NGgDnfg3voRdZvqECb7ywXzaGZ8n1nSgTnMKwU3nyX5e6qbcSPn9DqhHsDvvW3stG3v8EYeQBS4tSUdtM7Cmn63",
  "key45": "UWa8LUHFjiikmhCQx8gtTzfVsX6EjuPU8mcSX6E1F64xohkAzN8YkVXAHDcNxZFvDQXW6hiD9kWczw6uRHeHd4C",
  "key46": "3ZQTU75Puiim9zXbNbqpKyMJMjwEXK8u46ssp3ciKfi8naYeA9pE56eb4qcSrWYVERkCRBfZ1WpzYo7yFFGpf8TM",
  "key47": "52HR3MmV7XTErj4pGSsNC5LJdtDxQbWPoiBqP4Z59FcR2YGYac1wnV2yFdYkqXSNc9xjjWY3fbP3ab1FarWz7p6f",
  "key48": "3bx9yX2sET6MxRNdrQCQirv31ReQewVMqYnJJEazMDJ8d9JYKPphAwnvNWePPWRzGUNctpja6HszyqEuhd7FtYAZ"
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
