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
    "3V3bu7S3kFHJsRbfMZYcxwkMu5ZWgZrxskN4pyGKjJhxBvFvond11edpz2jhdZmyMehM4w1qDrA1v6KeUqJ5ztPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gBAd8u2j4ZAG6JkFAT1Zw2SVLYC4qo2E7TCv1UCuSWQodxWkbukJmDb9fVvBW9Qh4rUXdQ6ZyZB4PL82GorJvz3",
  "key1": "4V1vdq6ffsjvkVJKHtk66jQQqJozmAr9rj3bz6RYymyWnji7KE7c9AmPxtRnKpE4hKnUZWUU9p8EbiQyYADQCfn1",
  "key2": "2anKDWCAQDXftqNGmotKYyNP7yWhiM88f2X2m4fd9mMxMKi9dsCNwLdQ3gT7VEQK85NLTrPtFvq8ScgjWzMUFA74",
  "key3": "373B9shspPrAPgqLa8DU3ka3wkp3dguKdi67VBzko4uLnGqnBWxNJUbjpvm23qyqb5zKp4BYZH7EbriB8Akx43vY",
  "key4": "2Tmi8csYJUm5nqRRBE7ELZnDLQQEz3PNUN1Ng4VTDKY6xYAMjYZ3Lo8coEhpuXNLqQfUbymZgb6WgQWBT2DxYgdU",
  "key5": "4UgG25AFuddzo9w74YBERNNf1oXzkXSyTgJspZASqUAFP7gSUfHX23EQne4Q7SuuPx7Vio8pWNYZL7UJWXTxDGR6",
  "key6": "5iXQ9oVJPMxXoTfZSwkhRar8kcXP4uTz9dhGD1si1q6cJW7CmLognnMZ2GxG9mL94X7rVAXkwRuXwk6p3GWjJtQf",
  "key7": "2N6Lt2nRUkSschqwcegRXh2AT2mmHyWf7JK6y5us5Nu1mkPfL2u8d2vxy4232tDrzzooRQfRAVz9hbdcNDafiupc",
  "key8": "5sCNZ74jPBUsbSzxvWSjiMtqE9MoW1GYXFJpBhefxyxLFVGozYcqCLak8dYELC11bwixR33CennoTExdQM72KRRy",
  "key9": "3qWVs2zzcvkhYUNr6sg8N6U4YR9jT9yTZnBhyN65jkUcPDwizPoPgBXnb6tWPKTawnrxE3dNb5ofh7Y6EBq4GiWF",
  "key10": "WPvdqQ1wgQDjuq396nYvxXks2ETi8jqbPZpiadkEHXtKNfaKodYqv73bGZ9eRvSAVxP1BNfUxza48wBKoEqjvEf",
  "key11": "3Ueua1CZcvdC39THRnuPiJSXafZ3ucgvdnMxiTrDbrpWnzwP2ZbSoJu4fD9FHzE6oATy37bTP5heqWaUpuYtWmuQ",
  "key12": "5hPY6bzKAYn5A4T5iYKqDyuY99ucEtuvVtomSygEGy1sawUXVNwhMTkp9x3PgnsDgkfHxvemrzCSzWaqmwq1nrJX",
  "key13": "StKWBM2sfmAp5mibwhTz4MG74G9WDJn22b5Ck4ZA8SDKyW7RAYzrjtbj7YXBDvKcGtUCgo6KE1hBsgFiafyPKze",
  "key14": "62WNpXcGjDjUy8aRcRDkPxm4wh7iXRwdnWEc9RHmbPaioCdPZ4ueeqrT6zw9dyBYAK4ywCDykWwVFvjHeszuKi7G",
  "key15": "3tYxwYbPnLwZHAxmdaNenC5SR5AKrGmExBQhng3pZhM8rWUvui8oY6RgQQPYfW6c1uS5aV5KS4Jsp2jSSnBnTAus",
  "key16": "5ydmXzExJuZc8xfwy6QXsmJWNwV4Sq3F7dnxbUCZMrx27Nh1Rdx8QiWYTQLxHq1hm3AxsFZZKr8rMF6TZgwbwNVQ",
  "key17": "36FRvNnGmE3pLDY3w8DcoW9Qz8FTTMcLqhQXXyvA1CmprbvrRvBBYavPeLkXRSmEzUu8UEvpuuqEsiEtsMtF719u",
  "key18": "2wc5nqJu9hbYeL7FV9cY9Y4U5UfdtiyjJRdJ2xxBFsKAC3GrSFJEjMo8b8bHcdce92z6GJ1esMxShmvgBFb2UDp5",
  "key19": "LxFAmth7h1oymtSys7p4A1qEb2QnwnDk2Eof6oL3niGV9tLjBQscCoKTY4aoLxyWxhzhfBYfFNKskpFaDk7HUrx",
  "key20": "JB284mLyqm1QXNyT2X2QERxzzB12UjgARH8316zCj7S4K3Zyyox3UX3cdj87B3VWCNA2dMK8crgTHyDUjLjPmhk",
  "key21": "5r8EjrSJ1JKMzVz1z6eiEYysQbygFMcKMCTVobTfVBEGWmN7X311JtaX4L5o7NaLikUuprBDhJ2doZP8ieQ8aq2Y",
  "key22": "5GBsKbhc2ZuSh8VfQbV7pymyoZg6VEeMsb5JSbnv8g6TZ1cyDcGvS6E5jGuLSPb3P6Dqf2MebG4N1s4reJkqBXbX",
  "key23": "QAp51y7YEMhLgsaeSCAPNGtRMhcvQ67aqsY3Z9S9c9YowKTzdZyjrkFVVg6U745cCDCCD5hVFJmcLmNf8GKKkAy",
  "key24": "4wNMZAZ4tDgnAfoPwEVHho6XBNcDonvDp3GpHoN7bFtWztFzRfm2BptA4ktrpws9N7CmD8gDsMC6J76H2CGpaxYp",
  "key25": "2ePirYwZ3Xb2gGda2iMmmMH32SyDaj3GcR6QE7VuPbFBxqXxjU5JYTg54s9scV2zB5eiBMnS43xXivFxbaFpLnmP",
  "key26": "2UpgjVkjCqotZRbwFH5qHwNfHijokG8o6MXg7K8UU8VQetrXZSGtwjMD4Dk5yDZ49Pa9DHpbJvdjhJvhaFJqAZ5F",
  "key27": "5kJrNSzTgMM8ntWY7D2KEg9zXopkf1evL3fMUBDCzMah6AsJAyH5GkrBqnsoe9mXCGZepxBtmxmKAiPXy8n2yxgK",
  "key28": "5NVLYhgjvzSSd2cZT7LbzwcUpaZcuNg81LWCKYXA7rS8wNfHMsWKe5ST4L5dM4RRbumWsyXgTxNTrRR9RtpB4NWb",
  "key29": "2djgoWnqZgKXutcJLJyKvUtbc85p7MykF12Lq9pcEwjbYSEfF6jNCw9REWABsomV2o7sBXz8jfnWGkLfeCPzCx5h",
  "key30": "5P6tT3Dg1UZyAuP7BAmqpN1pmTviBWSmBhkCa3Lsh7bcF9MC4rgNUgRwpxEAgMyCWE83PQVyjLYoj36CeEfhdUgQ",
  "key31": "4FWw29A1BoVnnT2rE6x6Ao9eLa6edyHE3Wm8k9Qw2U4RUtm41Q37oCnWBWMf9eMXmvN5R8iE2ssxvi2nGJFFAg2T",
  "key32": "gNsFi2VuuMBcoGh6Z2LtNnw4p5AnekMUSU4vm7urxzcCMt5QNmTTaLdyYqR92q5bSi45RVB2fQkr2sEYqpkYa6T",
  "key33": "3FMwbZdSnNJFG26kRNhYtSPVgDx65n7qqUiXFgAEPfoMxyhCioczxxGZNeAzUrv2bvxAzw2yZYn9d1gT7oayoQBK",
  "key34": "24WQDAVxeK5XF8n73c4mcJ9BiXoHDzTD6aGmfEeq9XB51hQf6kzFxCbWZ1vDJ1tCiKdBZqYrvSB5gfgJRFAw3tem",
  "key35": "3hLVw4fyWv6ssepyarLXK5RkvxjyAWMs4WcCXQ2gsTQu75YcDmkePD3NXe5fqkrbga4L2vD1RiNSRaDuyhyhMDSn",
  "key36": "KLVWQMypNKBjg5z8HSqv8yHUPs2SXUfYD8RKfiUrC8Mh1yZm1urpZtQmWPWj3AFsjYjqmryfpJubciVRuriFR8w",
  "key37": "54kkxs9Ea3VFyzpqqExK9Ngas7sR7eWwLdrXUeqcpXVu2DENe4RLJNn359uK8bTvxXi4V4rttSFC4ruTxwoT2kNY",
  "key38": "5uMwSF9DBdiTsF1wBdRhsgj3oYbXU1cSqNoLTWuD4kXQXZ47exgjGVL1oJ865gCKPZ2pGDQxniT5XeBNQbCc7zm",
  "key39": "3UJHEpFFTreEB4tQFy9iwZxrsEWUB76162wuUVD7wFbthvnzjX9iVqfvQPkuqY73nDqa6N8HZD3aH9DsYEWkSULb",
  "key40": "ryKPZqGmGQhVLqd9jqeb2fbhNHeCax8EZ8Afzoqnc6tUifuNSJHuzuWiwx4nZmhovYicijgaZGfWbcNNtbtMwMJ",
  "key41": "2hLQP9Ji3rzvAeAfm8Q5xEVQLQC8pA7FgdpFD4W9o55DoQdNL9WJWgFPHWQX7VNB5mgZScZDXBXQVpSP6hnGhESc",
  "key42": "2WzE7E5dDpvACpW5gGTzmgtwoZA416CACMrpt8tun4ci2TgBZEji85jMpA3Vjid4TVK57w6QSzJELSf8Zgvqgpet",
  "key43": "6yYsDFhAh4ztTyk1xGzxiw3wxPUPMFLJGy6sqx2ABtLAQa3TWunSgFsYPdMBpVH8d8QfSKENnKMaYFcVBqLScDV",
  "key44": "248CSVuQVWWwAJ5aJnxph3r1r8Xiq627PncU1pW855rEokcQaXWaNXreXW8QUns3C4r6xxjTc6eWSByRPHnLJpjF",
  "key45": "EwXNu6z75TpyV4hQxqWwpoHkZWWESTKJrgW5N4fFDge5zW3BS5d9eKJYxXRKkGgvcFYbhbq4exdmhcrLra5kunC",
  "key46": "2wK92g6Yg1Asy5huYmorBDqA8Ygj2APQjHh1xMHfetYcm4JCKjmfKB2bJJEfjDMB5TyniCVcUqgsWXF1YGAT9us9",
  "key47": "4PacQz8T7AkwViyTbDD4MxSm9ncuzrBS5uCT5vFzDw2yjSvT6Tyo35enjgpti3tW2ABBhgqRfJgLYSzDg5UWUEzk",
  "key48": "4t8AZYU86jFbmBMPC2cihaUbJquj6ftagMXuNKYXs1URL9VhhVr5R7cGN4xJniiqiSQtRqnYN6CiGZhzcwfY2bjS",
  "key49": "5RoJRaZ39ZnTtewX5vaD3A1jLDmoMit1bd6aUqmgwxKeVSgrVos9dRaDKvchwNtVy4KS8e8AHbrfawton9Yx1m8j"
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
