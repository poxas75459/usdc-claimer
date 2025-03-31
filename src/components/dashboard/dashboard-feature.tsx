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
    "3RR5x1hQEiAWyNoMVmiYGLF1PPepkWVHSaFUx2GY7f1X7FZgh8xAc8YZDbMy4ZcPNjeQG224HpnrUSHRJhSpa6ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bwtot4JdhyQ3Gn4rXBK3oAqgF4vjbF6imtCUo6BQ94XWMLUBcKfgyuqio7epfVcE7DY9x9XKhBGW3cS6edVRajh",
  "key1": "tGFd6M5tSUAvNSxCHcqTp3CuHmFcJkrA31BAJXAimoV3BmzJ9JnNW3Xej1qNd1DiLUuPqAsBgLhsu8ZfmkYoA2L",
  "key2": "Ex1USPUhSrhA4gWGgE6qhyEDGPepVjwoZWReTTKRNuLkdnGg5L5iP5nofvscoNFPABoE5PAmDgnT9bcneQoQyhP",
  "key3": "5w7cXDuGnAu9ESD3ornZ2YMjuV4YfQ5AviBziQB8CLJmSF4baDeVT2rTDkxcLNeK6B3Zxq2UWRKtQ1UTf1AKZdkU",
  "key4": "3e56JumQnUfHbepn88ApKXxfT6A8u7MDLnNHJ5tjej6i3e9RGbTErSx4KUWBkJmiLgJ1NZCGrVYrvuB9YtRb884N",
  "key5": "29a6EfBH8U6hXi6dm6fw4JN9UKKSaJSHhrDeucSxkZ1NyJ6PuTFMJN5yrBueTt6d34eJYZXrSdWN2BQLpy6Mfke6",
  "key6": "39extBWcxj6omNR8ZmvXZWAEWGYCe2ypTPMN79BzCv6M125kJdMN1R9KFTdxV5y5s81GyE3ffL12dHAwkS7SnuG8",
  "key7": "5uSBjEB4xbsgfX3CJigy8eciWbgMNXDSPgcvx8bPum8FGR9Rab2wwWox4Q2EzXukJoGF7T7fVSDmVq192CT7aMRw",
  "key8": "5e2gnvnw4uvERrKBdoTiSwJfGqeAwVtx1RiQC3EWabdxgSCQN2GCoxytTNHHhVJuvRDY6QiY1S5MKMiD4es16783",
  "key9": "3FTSifx44NKZCxM8GjSsBqBvBs5vSrUZoYzFZWPGNghFbmLjrZcwKFVvbScHkmFzvHk5D9jC7Pmxv3xuCMa2bsft",
  "key10": "tBp1SjYg2TLiomN5WSa1BahzfvyyZhwKkbNS2FcFQsskTbmcyEK9XXzYoonvMtc3WGLfCRfr4eBV5czN4fhDUGw",
  "key11": "4i1dpM1dyRKDf5d62FBZx5SXt71z7cBSc4CtqwS1BS49uNf1gjPH1QnCvvGBbaqYBSf6XvmMLFRfQuAjt9Qx2hXC",
  "key12": "2WMeHs5h2nE2Ca92XTfb2bUgcMDu9sgSCZim56s52vVW4j6ZV1HZg5Sja12MRSi29QHpqqrnYhHD5E8xLppW5jaa",
  "key13": "2DbmPivZrRyza66NrhQXxvYTaNLRihazev4pxEk7u2hWtopbNL6KX35MJHtW29ZT146iyYNDx1FxUtgQVf6NyQQ7",
  "key14": "3kvvB6vYsKAYGVg9fyGMwjL4QhUGpFV2p1KQGqmT95rLyqf6pp9AFgjF5oiHzvrqoAXXcZTsWc7afNSjxA72gE9j",
  "key15": "mEWDNwNPfefksNqqVcbH9mdPwyx3FyfH5VhXMvem7HBCWdkAWFr3kRJMk3ykmEsBsfH4aKPwZ7LTDZDPHdCjxni",
  "key16": "3df3sHvfgR5FS1XnQPtYEjjTPnQw86Z5ddznv8WZ1j3AB4oHA7TqR1YPikYj3vUAEZWpHAc5RYTZG4oB4nQFt6xv",
  "key17": "2LB7xiw6Q2mYyzoMtHQdcHyTF5txAWdKWGz7gHmkzAjD2tscx5MjptpHHf1a9mANijMmK4Y87Cwwyf8F5Akd2kgz",
  "key18": "63TZcg75v3dzT5RZJdMsEyMFxkTHyWr71Sro8TWiFgnkrpQAXqFq5xs1E6eSgagGn8YALxRL5CFUM2y7akAZoLcn",
  "key19": "2djjjWahNJyRL6EUgwiRHxBYWnxHMbCUcSaj2bu7AKL1F1qoLVq611LVFYeVnMmG2UKAg1GgfLmb9t46NmoeDQeZ",
  "key20": "2BndkVQMvWG657CCKDWkSWdgLtVQfKap6zEnrkMPPYWbsWsXHNTAsEF1bsPLwuDAiZQuEdEJC865DvWFrbLku2d",
  "key21": "3z3Udq8by2MGN2EPZ1DJ4gqoL5qfSqVtDPrPeGgeiiYJopNLDNurkYnthxFVMXmChh9nH2jJdxDPnKzB9Sa3KMLr",
  "key22": "ek1k2hc8ErCboGequd5PpPZRcaUNCU7qyZJ9qzFJY7ThBiWFgJyi1ZyiZgLXC1Ug3Yd4H7GLGV5Dyb4hteyhG6o",
  "key23": "Bk7s5SPcLHRY5UKhgDz7T2mXoXfFDLyiLzBVS1JpYWFRZUvE1uYxGG121J6qKQ3KuSSoC99w2SZeCdUAvPkYfqR",
  "key24": "3q3f1GNLHij976tEbN7NEx6ryEGJEFV6DSWfh5BHXyPmuUVxaAXfMgJFx1SzcP48j7qaBJUKg2S8GxRRYkuintcH",
  "key25": "57PDePxrkfb9WZ8CWXy7GvCMpNypwHdDwH7NuWS4bBwFWgAQHbnCJCuaJ6HtnjaLQAnzJBrBZFu7wNh1BVSP3qeR",
  "key26": "4N7udf57rKPRMDvhSNL5RYrqcBRCRhnkbCSYwfwyL2zMUZeyr5Z7tBwyYe8GNsWLD4K2t41CZawRQ2v2p9jtwygy",
  "key27": "5wRcFACgBM4S4bkCsQ8U8AGbav8KooPGftG9RzeovRnhkjmgqovPid8H9mUmWPSMs4uVGavF2SMmhtGvPndj37m1",
  "key28": "4e9LFbfs733j8Ts6uRfZ7rTivDandfYmfq3sQ87wA12ye29C2xiBFVPQs9Ea6RbFfuxEDuAKYyWwMwNtNQqGfPuS",
  "key29": "61gg5hCuYDcQL8J8zrU4xMXSahwPRAuDUo83EzP4UHi8m9qKv3vZ9N7XsNKk5v2twvkjeQheHn95Rejo7mpYuAUe",
  "key30": "5KvYG1kobgGN7eSDWXb1EwYyyiHk1Bu5Zey32zW6T1xdU5LB3RHWeoY1CTjrPZnnbGKJY5jHJctwLSn9ykuDRXp4",
  "key31": "2vD7W82uwEeWTne6woFSujW5ZjA8ksZgeExG4dw3scpC4QYRBrbu8d4ZcsE84ZGJ5nzTBPGuq5MWfRAertmTz2Uk",
  "key32": "4Yduck7gYiFv9TuiLxjKsQepzp9Zmf5ZL7SYE3zUiwuhHBnUsWHEzwBAfHWoMeMhiP1UXB9BGhrW6FXNsKSqYtTg",
  "key33": "vuBoiqELmApZaTtUYnpARX6MbB26L9gYBg5JaQc27Ax5FXDSDXqq6Hn5S3Nr12rPPJBWviAQXmq5wboTuVzddxH",
  "key34": "472JVgpVoM4Fnj11yMDJZyqb8Y572VLQ436f7wy3VbVVsyx8seSLCEgZx1A3DA8feegz4SqFqaDdKJxLUsGh6NP3",
  "key35": "34toNMT7RHdsQvjtGUo3j8ZwN1Fd7wEWfZETkpHn9pfhs75tYbAKMja3ToLcSstSGGzXziMaEmkKSdDv9w1DTvBX",
  "key36": "5nbTbnCE1wSpkRHichzpz1agMGrgn4ihoY18KM7NpaPr3Gwzx8teFEhe45dCk6q7SSLV49JBgDDcU1qruyxjbpK4",
  "key37": "5upifZfzEoZ7xES4fG18wzRLfyJi8a5HrewMRz7aSdMGSG6T7CHpFfdxLuMaDUNk6ZZWoBHiPU47Lt3NweKSgT8u",
  "key38": "24uCbw1XuFa53Sw17n5nKHccbuMPDmc7D4R89YX1ZSzM7aAZZUsRfv4n1qS1x4ApncYyTU5cB7BA2LqPN1zCZjHc",
  "key39": "44GD9bXAJMeio8cMqr8EmWqwiCG2kJuvPq4Za8nTBxsBGKokobUpYsAAgaWQqU8gPdQczZa1cS1UNhXmceGAETNX",
  "key40": "5ocMNcD7D9zrFdbhtchowYtejtk5ijwp2Gmj3YMDjM4kF5Eoy48nhbafbYAKrhFeGv5KuQAAC2yU2PyVPL1F9VfH",
  "key41": "5fpYqHCJzk17dBLHtAVEm7DyXFAApGUSi2gbz3Mh7GFmy76xdbg2Y8yFKh3ZZqSDdZmVPbHawkHhrzrbgv7ghbvy",
  "key42": "2qgAGDrXDJgZZ7D9QhpJ6QkFio8r4Hoc9Rz4kdNDi2Lxew5264fVaxU7KT3LUn1vesuYSLCugWTZYUWPXzmx8192",
  "key43": "3jqQWj7iijiukLDeBJeDBAepmTomgMaBN5aFpccbC6nBeMoK7wWhXuCMA5fRK5kCKMkXjAcobCYTYFEsZkvaNSce",
  "key44": "2QWRV9rp54Ms5FZ62MEvjWZJqWrT1kBonjpSgJhgWa6nK6LcEUXRAjyxP2pud31Q2kbeeUPpYdh5vGBFVabqYfAy",
  "key45": "5QWyXcEi7JuqqBZzZQgpKxGSJYRc1oZcu62XNNWtTRE24ETchqwxZHC7wWfuy4JXaHeBcqiZj5HLvtHvWRvdmLYN",
  "key46": "3PDrqGwVCdyGE4Wf1FCmtYUFouPRmJHQek2Camo6mJdEiuGaETX2NepA8btqra2HRrzHNJWgmZ29TuzozpW5sFQB",
  "key47": "33YU7bGz69wJbU6TSzrXLBVGqofA9EKR9MN3sTys5Wy9Pu2Znox8rbgitAZ9DRGbV6xYpcJQTDsiTuVYVwEvwWms",
  "key48": "W894QW9VhWaT3qdkZebQeFV9ksvtAQVVKTMjrnHi3K3AiU8ZecaYb8zubWWtsA3dGSFXz1r7TzssRHHS6r8fgfh"
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
