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
    "3nTRvNB4daj3qxanyY5ShrpM1hNR2SA4PjaDqnxYaiGg1Rd3hkDxyFNHCP1SWQ8MZZfvQix8Jc6GDhacV4Y5arMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65c9NZ4CzHBzMtSMvmoVYxov8GgvgBaiMRJc92BQxM1ACxvbEuwcbpYzyBV47k7LhfE3dr9xvBoTfQi5MXC4LVGx",
  "key1": "62qcJ8k35hJqAxzxLYGt3ruFAXd7xurX6VKMD1s6UKtGysE5MxXMN1BZ3XeXLpkoiUpsPWqEyo39HFFG7q5ukKxV",
  "key2": "JEUy7giHPJKzW4uSuhcsZTbUZaoPvTikrGEpsdu3k7eGT1aUnPCgfCBX8G6ahuNeUoRzXUWPs1bTiaz5tZeN5HN",
  "key3": "3wSqwh5F2EfkuQtP7wDhycJonkUNPSJMkRZ6GSwtefGX3wATNagT51ecteyXHtmPSXzDRomtVJunBCLcCeTq5ekm",
  "key4": "33HrQz9cVfg3xZef6HgbWo374GQzeR1b9nyQtxAP2AULMCyPmbMuHh774wwXY7pqmg3K7ScSjHPyDHTgshErskC8",
  "key5": "3W5bB8LTepNCxEihkc2Wqrh4H63wQ9H65tijheVvzdcneMStMEj6EgwxH5jABjt5jb4DtYS8rsB9noQUCW1ajLPu",
  "key6": "afwFtM8S99xRhA3iunTNamgnsu4FkXUDCHGnX6RkMy4YNy6E4idswbZtQmSzm74tXt5ekfRtZYvs2g8YtY8ASqf",
  "key7": "Wp72fQqkJgMW21qc55SVgbbhoGTN2zYvx5iWRa7Aw2U78ctL57Fx6yWLNiJ6ZjQ4ZqQWnMGZG74F2oiL9WxNXXg",
  "key8": "5KsBC45FUZogWqYLLqM6dxKy2DBGmMg7FGoqvQJnoaQs8yNXipmr8fia25NZ1ctaC1PgTGZMGXwxrnF6KYqtgDbt",
  "key9": "2ZGU3afiFzY4sKtDdQ8NrUZxrWPjCb9fLzpyfBdU989mB5CrfQt8iaunNPajJE2kdkcvx8iwi7UAth8bnfPmYPnP",
  "key10": "5DtWERPA9ce6xTwQVd3MXtmqCae1Dm83j3KdqNc2XwPXZakCaytxL2WT94KoHTY35TzHEWCzpDz1qcfn33Gbx7RY",
  "key11": "46aX4sMBQ5C43Abi4yRFnf7v5cRw2nnUFsr2jZUmSkJyv3by6tpPPfSNP7NSFCrQmFYRpYgyDAKXH1zLkmUT6cLo",
  "key12": "tmDKxk8W4VWPuHBngAuywpRcwgApP9PiEYQiQrjYQxaqHBBUFcy1uesFzwTbDBbY2BGNJRgn3MkMZvGTi2xLAeK",
  "key13": "2EU8tB9iJBzTAzx74QdB9mXyP5Mb69UHD9CDMNLVcgDY42AbPeG9KeqmtfF7Vqunb9J5sxFR6fGFQ9cRhj5dFzaF",
  "key14": "ju9Mhm1xzAeo1UKJe8gbv4NP62VMCu1gW9b4TzV7jq3Lvv6ZVBXA8D2VhRXJQT7jSYwJZmWyKPEtyy3BEXFahqR",
  "key15": "5K4f1XhjZ2eo1t9KCccLzMoFUcdbXdbqutBp8qqSigkpoPA1JL8zHsPzARUdn8G9AhyUGdgpTA8gWfcqJmwEncP2",
  "key16": "Tobg3ykttBoQPYiCoiWLH9oTqkPbDPaBsgEpqt8i9NGknmfMoxsRou3BEJCvzMoeCZziA4GT82DEeMoXF4ahsF6",
  "key17": "4PgxfScNtq4nuktWCzh4WTY2i1rfKTyPVz5b16H3GCjrv5YXUGwbiCYntu1PHJ7NG4crEEXhChRwQ66jnbxiLs6V",
  "key18": "5bZAwRJzQhzVoNwnMmPgyoPqSwSDLLneK46hvQuEUzyBE23Vz3nt6pzsNEzcq2qw7dRBZKnGgsLUL2dhBGXGeaMx",
  "key19": "gWjsw1hmcLdoTJtbNNXNqSjWpw4KoD7qGf5wFosjm5FKHHL1e7SQmpUb1mcEWmvr86eFe2h7QaFvBrdizbdjg1M",
  "key20": "5tuVAsPEendJZaU4faFW9CN8aibS2aPPyhdSv3rUmGA2FNfNqyFXsZzV3ppryRAshHP4j4uxB97V7KWjmSSzuCLs",
  "key21": "HW8jvQeSUiP7VYbLQWqxusN7B6cuP4YN9RV9hL8PkVEbvspbc5bwUvzZGnMCjgrqxwMknWvVpnxtWMGVU1NeCij",
  "key22": "5kPfta1vcpaEZyeiktyJH9Ej6o1r28DrkNK1LbCntYea8i8KpwWGp7QUt1wtdinJiGRvewiiPb9FjyWbJcWgqmFg",
  "key23": "25oNnXVENMuGJ23nd4iUzaHmc5Do518sk84LWPLVFtWSDkzXCjUZygJjsKJ7sZj1fkEmC5DKH5mtCxtkcFVLcCXu",
  "key24": "biJToV95NRQsUukDx2yEFcXRiNG98BiNcEwGoPL6E197YRZzK2RYKtdH5LzRiFqBDHL4NUYX7d2GYLBVjMjg7LR",
  "key25": "EMrd8MegwT4LyWySuDPnhqpV6fgDgHqPrngTg6A8cyUf8esKq4iXJdWcG9eLuudKjQF1MrbiqKrDpgpHzztyuKA",
  "key26": "5x6uBsnp9qk6R3Eo4E5ycPew1gGMxGeJoBEboSHmJMsJr7YQF84mYQzej7BhRiTRGfaU3yCYSZRFwSDWW7X38WaG",
  "key27": "5Ckmi6ZjvkBQ8TMyFMPFdShCKvHhjS11xfzutzYfxcWW3uS4e3oDx4Q4z1HM9dn68WMmQu1x3P96TxyC9ZdbPWyW",
  "key28": "2oZNHgPTyQ72KNjEofJwujFmYhghrBGGrP1aocHho6U1X1DfAXrhBEZ9A9UG6KzXRQnDcYs65CrzpVN4LzriCwLg",
  "key29": "4EzQ6d14reRwf11aVAa82XyFVG45y3kcV5q2xKKeJW81UMLWC7pMJWfuAeVhuDFD7Y17FPeSFj8hzSoQiTc35MSs",
  "key30": "446d2BNkcJU5NiVtQT4R3mcgvP9eAuHfgM4TzEeh96m6kwDyLBwDqsWnphWkBhPM9WKJBi3YNaY94iA9sYwC3b66",
  "key31": "DeMsHpfTE7taevPJ4mfh4HNEM8pjYnndN9vKKhQxC218z3QFpc41HRNnuEAJoGTgjwNdrwg7mGNh9KXryfzA73h",
  "key32": "9ghDtQy69BbLBs5F13kcAFpepc5aaz1eSQ4Lc1qLn15Sw8uvYKMe68ATa5AWkuWm2jbeuFU9ZHfZu2S3s4Np1u7",
  "key33": "3WaUSQmzSR4MwqcayBreouTJhrFG1ToCb3XLhqmHHSEjUexnADZzDZXw1AnhAQCiwUY5skXx69JRHwexE8Bn9M6H",
  "key34": "4LZGL7U16VfGeMNbHb6TydBuKvpjgevHhrjYpjT5to2UCKzQzrKZa84QXwNAHH9L6WgwbiXg6LDxeG7Nvcv27x3d",
  "key35": "3zN3HaPd3cQNpFs7xfsVT3Q97RzNiSzs2ucK1o7D27FhBLE3uooVmDitU7NHi2Kfs2sGoAuZGGtWWEYwHtm3MspS",
  "key36": "zxipJNtXf9manyGf93oi7NtC8YxbV4HK7K2XR4yegz8WSGF8GioRvLZKiLBdJZoPhfqS1sMoY2FnJsBwRHWAdQx",
  "key37": "5MoEg1ED6dMcLnz8UL7TfYPdN9Y56B7GtkUs22GBR8SRGW1GECisZduLb5Q6zFUrubkjfPReKuRfxNtSA8LRyYN3",
  "key38": "qN5FUyZoaAbnPKxumx2edC6MucRgUEKvHb7pMX2LmfpD9qVjQv9tqK9anKcCgs3R2GauychU5d4Gz3eQJ2zvSZZ",
  "key39": "M196EV8HHqcZdj2qQQXa15LuNF8RseDgjAsvCWvmXsHZ1PdfE5U6BtLTVx3C5SArYLo36Znfgiw19SYgnEqGaam",
  "key40": "3SFmLzmMvNDAT7gL9oKCG7wgP212rySfpLh58GQbvkxSmG5N2whjF7WDAxnvE8HPYLHbw4ojM7MxCnMWKKRkrLrG",
  "key41": "TkoHaUqTobBzejQxUBzmbFqq8dKd7rCQRx4qh2x72PmRjZ4EyN6HiNcnJt2pKetT1dyERzWYV54ivvbxAZkoRXr",
  "key42": "3X7ENsWxRfa8TwPZPPHdQZNV6yioVEu3mbM2wxfc2QDeHYZcLYdKHXxdjrEh9RUxCatCjSaAU4knKZ3LhqnyGLrB",
  "key43": "3wJBqhvQ7X6RB3m2tebgBN7ZfNutoeHHsczDKnG3fFpWRo1E46nni9VBDi76ugASuqgeiSU6MB83kLnDeZx1MsEm",
  "key44": "5aB6kra9PvaQ9AAwuAHif7aRMnVR9c2MB2vNGL4ZYsKNByRPYjMssYZH91HeVbJrZyKJGR2pAFRf6NbWq9GsY83F",
  "key45": "4ti1tJGNTnKLuko8h42xQ33HoYNDBTDAK7dsRPWdYyyfZFE1g9XADVNNprWLaToSPHupRbMijnXJhvX4NbMgT8f9",
  "key46": "5NeZJGLNxuqy1XuSjWrLM1ZBAqVYLJZiSEUkWyHQNcMdijoHXhAKCDBcRTBwLgbmc12hjdQkxxRtkYeA3D3oN96n",
  "key47": "3x63ypqwHb6x4NmudmQwwdPQ49UfLngKtekUMgesU9rZJZtENSYPKfAB1kRSpKNQEeFpt5BkEdnR6xDRy9Tz84xv"
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
