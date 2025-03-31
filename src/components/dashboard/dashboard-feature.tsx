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
    "4K63kmScxaJrFmjbTM1mt21DYvDB25yPV3mCtwMvH3vhZ1CHTBFynHvp8Daogxid3FVAvRs7beiiqxxE6fEnCnxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EqTvTXSZRGLkG6D2zFV5yuC7joB2VQLLZ7zzhEzYQCGBG2a4g9hB5Zg6gQ94phYGrvMDYgsLBDxLJDDiDzPvWYz",
  "key1": "23vdirVBwEWtJg9DZ65ZqpenuGnbmTgp6KDs4A78ksf4uJ3j5kcnmhSuHSG1uRusyKA9c3twHnqhJNWp1tHt7cMK",
  "key2": "3Hpoq7nMMUXtd1oU4xBtbjesk4gZdifarBEas3meSmsLYMEzFoaBMLkYEf8pUFBE8a5zzb4Bza3MfjXurayFSpR8",
  "key3": "5WHmeNP7f1TR6WFqPdaCB3AYfB9L44vgiffrkhfKdehUUSGnt83ZYyXfTfVTmZ6ZgQmYKEBNQiDs1skyrJoZGBNY",
  "key4": "WSvyap5at1qpDjUUJ66jwTN7DW5GrkmYj3oEJ9FE5atkxr9AGF566km4TcNYPeXYjrWq3jpv6DcFqYEsPnCNjFu",
  "key5": "2ECFoKZG6fWw3KUT3o1eRxX1HXbK32vPzQwmtwL6T64FTGaFc6JeMkNcn8yCfzSsUP8oJ147Cyeo4WBhwyNGux8e",
  "key6": "2o2rhPnE2odgvAV2qd5Pfm9Yvg3sgPqWSw2DjkPZ5k7LUzb4k6qBVMZaaSNMeVTSFMiiivwXqtvMfAQ8hFjoLWuX",
  "key7": "5X5nfYEjHixf5xXXCGP2QUCwdBbJfcfvAFBPbS731QHokqQRYpnCxHd2RztyTpPAKrHfCz19EjaNqR8eYG4CVNTM",
  "key8": "3GeHSijFt7mvL4jqFXsnY6dNbS6Pf4dDWWDCgbxNj7iWPWeBPynQmYkEjzayC258Gea2Ffn7HsWnwreyVBiGK3Sg",
  "key9": "2uij8hAJJnVkJSmMp1cpEdCnucpmgMUyRQpzbfwi1XBsi3ub6BJnwfywmjDPKtUygLQjMRnRq4ovGHWUUM447H1h",
  "key10": "3ogjs5AsZcopsepaEWwbHLm49Vpgr2Q4NTV8MisFbp3NuHAHtk47gHZXyo2FC95NakrXsXPxGWhr3LpwMjYzXi5o",
  "key11": "4UUzvT9oMpf2hXpYpUSZVY68czG5Q8yobGcxKaNj5k6PHwqeRLLLbyaFfUeU9i8DTvCqXe7Tnq8378ma1PvdxNmM",
  "key12": "rYkjcwucbFXDxRxebDY4HaxXDwfnHoKXLEDXsqZj9gSVsBww9Jmko6nmtFUZjYA4ukpTpgiuXkaTfEBXVeeCtAU",
  "key13": "4CUuxkdyAU1rsPdZLwStVn5AH11xgMFD7GxFWSoKGFxxRe85dBhZATZ4mrokNtRDL4LWBBA1iET7mazC3tVw3HoU",
  "key14": "2WR14FmzvpgeDedqBiCZ6qwjNWMhxbLBr2HwFakCTtax8GLDcpr3nx9mm4PtQXyzci88CbBsmcw2jVHX538aKdk1",
  "key15": "2EvxEyCAmPEE848XTZZewRtB5YVEmfXMyD4BKnzM5xQZQD98KoMEqq5xMzRf1xWr7gGoxY2nqK5iaJf6Kw1CZYCQ",
  "key16": "VeA7z77Y4sAHc9uWbM1eHdp4NFrRvy9i5SLpC6VrPnqBWZKednPAbXtwUjnsj3t6MV1zZxvSTeSdEaqkmScwGQC",
  "key17": "5WTo13UqXCNCEK2g5Ykdxds5SaXgvkNGw8QcLeJRjbYWS6aaSWuWqd5JuehcbUzhx6copgTGJomWRRniiatWvQBx",
  "key18": "67AMm76rnmCDpBM6xGzERZUReE9uKx2EU7bVgwniZDtftvfaw7R6YLPa1zX5UjnEXC8VzwT5x3GtMUhAHTtvZG8c",
  "key19": "2Nj7aKZRkGXcz7JWvLcbmYp1q4Hyaa2p5BivQQNeU4dFc7zbnrq2sML2BvosJGaZ3JftfAuW96TfgwUNpUkZmY9W",
  "key20": "2EvP95BfnkgmdaF7mDiULmdGeE6ndJi6FwRCMAkarcx254D7WbPU1ciCEHxxid5Cqhkj4vMtRjDVXHEJgj6Pp3tW",
  "key21": "5SJa8wJ1henrQCA5PtanNjWbruDWnBwVsYJFPMkPZbyoX8xcxpK7DGsDW9AHwAHnkDPTVnJxD4QtKfyTASzRNn1a",
  "key22": "VekYNh26K1JaKNmDXABh7u6oy4tprcyHEcH54ZgQ8zsYDpJRL5MV1mw69be8qabGo22vRvbjfKZBEyaLwYfp7Us",
  "key23": "5jpdUK7fNCDLNqnGin5eKpo4rStpABQ8ZgPDtXcd8P5zyA74ATqU7SYkjBUSCJBXjw3VSiKdNoJim8KXX2xm5itx",
  "key24": "gQEYztwh9qGjpzxyLJReJinufFVjShKpGnwbbDj1gi65Ne1HfNfubNYYfpZ37xYvEEHSUD5QBFtsUEi9V3LbLoj",
  "key25": "3hU82baRCES8TCMXVE3Wyds1RLgTwHJJm8jAP3NU64VkiEUQbmZRNHWCre6RE2AAbrnqEJtdYyY76WyPHufRyE6E",
  "key26": "2W8KSeCgAa59RCujLoVCV4GHiNFMmM41usXErLMwUB7pDgRL5YpNxd7xTNdHsgHdbT4QyALRpEXvYi4i3HQEsJY5",
  "key27": "QinFREpDm513kukwqwvQv4Z3Dy7t8gZmyBC6rCHcsbZrFmyj64QQFvwV7yrbCMPZuAW4krLRBWhCEiALQNwqmCZ",
  "key28": "4MwBeqLxTEef23vbCVkn2xFriFTXPkNhwHLe8ehb8YbketR9PAjoSejp5P5Rp8v22RUuqWYQpXKpg8FspJk5Xo16",
  "key29": "3Hmgr4umi8URea4SNxPzVBByqhJvsEA6Nd3oFrcfHWxQRb7qiHzARko9iJ7TuDu9SYHz4fPXjCZPwJwu1UZg36rC",
  "key30": "37H1vGtEzVxge8atzJAkVnJtUdBzrwB9ufNvvGXuWgJHSvtn1zkT9k14gRKRZbA75mGyfFoB7amj6uz8LSAV8YUg",
  "key31": "3fAPCJDKsvxhA38UC4e1kAVz9hNPUrZe1t4734aZMcNoQnkzhgwj7Jguimf9av17b7BkUwfMdk5ACEvBec6uLMSW",
  "key32": "4hTZBCpFRak6JRw4dWckxmdiD1DvvaDynrNeNbNYcTZjuSfafLJHcjg8s8dMMXg6MzERnogqxjDujDCNRWj6K2LN",
  "key33": "4v84fSKZy23kjkQ5nAmnAsV6fiEC4ix7yaVxP5xmREpYDz98awQ11SVLjhW92rfQD1V8BH5X53zZM8tiXSc264Yt",
  "key34": "5pkG7wEgmN42Pzg52LrLkKFvNStBuCmX1v1z68DXBGkbtej3MyNSZSXvR2qJGQDMYxeKFvYJi5T4VBbBwMUrv1by",
  "key35": "2pFdUyHHcHKzfjeRoVUtVwPgzWwjotcfgfMW9bxP7Z6SuCjFZ2NT2SrUak9W8moX2wT2fqjFeii5pnmNmuXmZgus",
  "key36": "3hJD2SWHG8K7sdJsCCDHSrL4ji7bkkv2SnRznMwzavyLN6XJNWDQ781MfacJ227tdJn57VQ3ycp5CsbirnYFwqHs",
  "key37": "5Abkiv7ztaKysaELiwo6Tp9EXayqrcWAkHiagSCMv2NT8WW1ATAxG4rcGGzQC7Rp4wckyFtZGEoSLheUov8JKXYB",
  "key38": "xGUWhi27VSRbY792PLsdFysEmEdGpVjcUcC7uaLQLhUrFEdYQ6xJor2iuT8STsKk8cNBVbQ7qAfwghZZYVhNdMs",
  "key39": "3woh6cxLQRXLbiYH2oTBa9cpZP2XGTW6mA9BCxozonuAQWn9rtZjR8gxpZSUGMC4TG5gtChBkBsZdN5niLhn1MdA",
  "key40": "2oR8SzV7nHcUqcKUYiwvVR3ZgFKCokdSyF5pFuYKuGXUEAeRWu2S8SeYZ9tRZBk1eViTXfvRK1rfbFAFQVeRJYuE",
  "key41": "26K9qMST6GRAYsETzTSFaeX15oUTKWxZMN9swGJmaqPhoe1sGeG4MXDsrhQnGnjj9gEw5KBv5wg8Ri6xzpPC3U2t"
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
