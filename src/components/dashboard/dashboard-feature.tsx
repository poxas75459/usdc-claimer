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
    "4ewTA5zqiYP9CkkZ3m5LMZzkcAd1UgAmzV29e3cPso2yQsZQyAU4jbembGDdwtpDZjLs8edfK8UtNzBZ9Z5bheaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K59ZQSajowTRpxwkoUGAqscRFGL7SA48Yh1CJbUGhcZekpVptXXZ49GrxJwEUW7JQ8U4292ttn742rtAnjr1kX6",
  "key1": "5SqaJsez7aqkXFUkArKbb2JjSdYaeX8TvUMP7H91o3UhQbR3Eo7xeNFyQcenGvVQ64bPz7eFoqRYnYdi1zhZryqX",
  "key2": "nFhm1AyVnhe1Vn3z4oyt7QVGqddBU3hBQ74dt4SWKgB4YnN94c4fRjEx2iq8NnKw2GxGCfcazhdp99p9UziJnK4",
  "key3": "538JPQto21skzfA4o9LHCdy9PdKbeGJhQSPxtnTup28tiCGCFQqy62HmqV1qFjpvXJaRJazgMY5TSnUBYmHwRSKy",
  "key4": "5HFS3zWbot9BmNYSs4n9Fts2itGTbfMc9EUWKs7E8vENYyNdw5GTEwnBTSALxFVgxa4i8AtZW7X1Xv9cLC3VzMmj",
  "key5": "Ly9z4GfAYTmEZzCmCQrxdF9YLHFqrKsKvVQhv2gVfvhwEGNoscxoTGqsF7JcLcV7dGtv2APLWRcaiYhEscygaxh",
  "key6": "5VhQS9NfjbiCKFNGqgXVRLcpZq9CbUvGv5TjQn8rFu7hAuDCAbo7hvR876Au64L3hr5124C9GLx5FwW5CbsgYXXm",
  "key7": "4G355bYysmEXuXZYUEarnuALLKJooWjBDyH3S94nBwEKXsrHZLzpfBNdihEBRt6gKVBJ6ZLNNkfeB9haGoDiYQCR",
  "key8": "5HSTZZ3SGB3MKHic2QPjJK9qo28yVGHx4Chqx7zDJC8uN24DXDuxmC7kXMTWqSG2k5anrKMn1aVKUUGMDPWvhyby",
  "key9": "4357jRgQ2itCdM8DTV1mU5qCYFnN7ENk5EJuNKXgKBkV5e5jPzjmpYoSyV6vbJNeXJs7RVWaM6HSHe7HG1HQdiiP",
  "key10": "5j9zHWLEh1a4ep66Gde5DvupnePKtGH6FPgvXiEJNJie9Ht4LGvoR9RKR1ShETbky3hkqa6ZzfhsoT5TFHD7p4xj",
  "key11": "47enfVEjn82mFu6igqsZxEDPup77RBiWpnzT5Bgku11BhycbpNk7hPt898rs78YLhxhRcWXxyjsn4JV5WaWy8hRw",
  "key12": "5sdFNMgcBEhJ7Q6cBDMsWkEzjYG5DZaZTQLHcdHmYLYGUdqxgKiAqcMxbX9JPCG3deBZ28b73SUQnxC4JU3ZE4Q8",
  "key13": "2hU5phjxtztVQbpTwcaE9KAuEpd66k9kABsR78yb3iDxgEFewdgpxTh8NxgspCS1kG7NDEvCyQL4Yrtrne25Qikg",
  "key14": "ahgeCRN4gcvj89pCcinuQcPUBmMGuaCR1sUwV9ZQzpZmvRyPzzkTHvzfdLjaghDgRRhty2HUtP9c74NZgUE8gMs",
  "key15": "4LCNPB7WyPnu7ZWjzFPwR8nLDa7epYW7jZeMqwG3G8vALQ4UPtbFkBGJgeqsg7zq86aKbr31ST9g5HeWAY3SgXHL",
  "key16": "VgzrhGyv7caPZwFi9TZ3y73GKBEK2REFk1G2hsLkKGtTYy7UkCyp9gYP7hmf75d52n76Kqr8bJiPfDrLmqqzszC",
  "key17": "5bxYxzAH16zyNDQNaBXAtPTaaJWobb84jz5WchDRRaTCGyVHuz3aXgPsY1n9jC1cYEjRtYFuTjh42ryyXwkQV74K",
  "key18": "5taSp7h4qRJkpetU1XGSU19edXZz3S4tLRh75CmEnNiX2PcsoT1ZQnYLdA8fPq2qEKvKHToUWDc3hWRoiBcb2hkU",
  "key19": "3nBy64urQkWPztzZ5Z7wkrCj99LCDYBKnMGyHoX7wBpduCFS7ExEfg4NLc8KCuqkXrsNjEZzG4fjcEMgEFFJknca",
  "key20": "5zkdZk1bbrPrtFevTetcBHWHq7bYnk8nr91zzgmQzZca4PxRMdUPFJvGGpuGVk8Do4JWaxQmyd7mtikfzs3RoPfx",
  "key21": "2Xq56zu7k8rJdL7PtvZngyYC5kDTmEkiBhr9imrzBoWTzQJC9zR98cwvuh1yfngrwvvaAjp4YmcLeVAG73j6dQJr",
  "key22": "5S4SGwfobxTwQLWiniVtypWK2BRba49hx32vtVNpupWwNkyf3FhKbgsUKzaiRHpw4o25XURyJxQfa43cadfSahBG",
  "key23": "2EsHYxsvE5KggS9pFsUtX6sH4GJLR6TUJpCNJqt9TE4thbA69xP2mkw3AYFvCRkM32EB2JHgd2EQNWSCTKx71kMM",
  "key24": "3U2hUi2vfgdc9yxcUhHb76MrNfEz1nhkYbs62xjgX4BcYwCiCg1JmUwFqQ1pQ7ELa9SYtfBtP1vJpnQQHRuCHndN",
  "key25": "2ocv5VV6UmVLXkaSdpmHfqoxNET5FVZchSBmMXS72CvvfGESW4EWGEk6isquHumD3hNrhAJ6CY1xZ7dxcTGzgDWy",
  "key26": "228j6m7YFxGJL6ceQVknJEtehbogpSurCkwkgkKt3ykDSqB9PgqB3G5SMkkNHWd5P2YgrmQ6sWqah5s9Myt55w8G",
  "key27": "5qgLx35qsG7Tmvzu1FcEXXQ5Y3FEkog2ExBx38J4QMMcJpsHuvVN6PftizpbCwNC8c5Bfm1C7Defa5brHonUoNfy",
  "key28": "4P5Q3vUMKzLrMbatehNRU3S71HHHAohyESeSUWQAeSn4ND9jcqFAd16GVFxbTporZr7FvTGNWVddDD2svLNUZous",
  "key29": "2TRXDdtLj8ZJKeyGivvqZq8rCA3NF4usMUdqaBnZfxaERefAVsEEQQBT82i7sjL7KEHZN14rA2CQ4rpiCWdCxx2t",
  "key30": "5fSgJrriJpCCBTFp6H8jVAg6RBBbJZWtT4CdyoSxoduQRshHmPCKYBYY9RguHoE8FBtPCPG7KXoXZ2rgVgwyCB4s",
  "key31": "4XP9H7DH1ePe1cnngJaMJ65T7L42ymY1xVV4uDs3BsrZdqb32EUBT9ft4148FMxKYKWXu1As3PrNvQv2nfuBn66x",
  "key32": "2troVoEiB7joLSikragHzYk71sG41qBPS8N4qaXvHmswEAWLcdrvcKFs3hgqV3m3gfGnKTVawfNFb3c5fHB2PwuE",
  "key33": "36SPJHb3h1XjZhTtfsBLnd9TfJcxVSb4er4xEnxisawzFyagCtzQ2hM8u6PhPmJist7dHsqgc45Cedp3WD1QBjqa",
  "key34": "3kYSDEeh7GzBuADwSmDPN946peiTrEvxnAXZium9xUUpQgegkbeoojQQfobDZxX5ScLtRgwazXatWXtEVNw2XqKQ",
  "key35": "EpKA2JTtQMT8wm66Zho76Gy9aR5XWBUU4c3Wr6jn7YAWdrXq7VpqGfriYGJQHu8UpQTeJ9a15WrLnVQWQwUz2hf",
  "key36": "2AfCfqGhMKdGeWBMxyTgmBFRCPK21oJ1FHycYV4GpFYLfktww759VicfurnMNU7E6p8Cd2GMwjRegLFxev1fAVfA",
  "key37": "4spK1iGU6BJksAe5WDjkGMydUchZWPisQS6WndcpVHWZBZob15JWYd919cddEqQR1PWaNXtig1cEEVs6dHqXxEw9",
  "key38": "2yTS7C8txkkwBdpbXC6PG2q7XUhsUCFXn7s13hKbTDSgzsBzhziV3U9vKv68pfh4Jq8UQRvK5PXb9ffGBCGw6qZU",
  "key39": "Qft76E51QCJyRpAnSrpNfQRJdhAQR4Cj6JSdA8xdEREjd7APyRn9uhvrqRAqUrcvR8Z7SYitmwheQLFp8Gc6Lxu",
  "key40": "5JjFSPDSndEL1d2xuUXiMAUkGAife7sWE1DiBLpfnEtxWUPQaX18M3yd89bYTAsJd1nysmvPTssB8ziUsFN99mti",
  "key41": "Wzrpft4pcRNicu8XstuYsFQUpnTTWy1yenWKbfuZQ87zZNQ7ESz3Hdr2mMBWSYN2WC1qnTUVEzUETCkpaia6vLk",
  "key42": "4GDGJHxzaiDw1uKPSica4hhcTaQwGDGF1DznacRz6xSiH4QqdCQ8nh8VnWvBvfcuueG1EYAxC3LjFRb2E4DiHWXo",
  "key43": "5Kaz4RtS36jrVsgGm9ofabihTAqru6BwX69iN78Z8E9C3Z796hKgiJ4iTgVCp6Lu8nsx64ckgVStfeXVp4zSo6Fx",
  "key44": "5Xvj9eLQrEmCXt3BW5FKui7emMhVq81A4Nf4CrQJJPxU1576d1pQWjejK5rnpTSwYVn59hHbotJrBqYawC2gTeRd",
  "key45": "9VZ8fET4UKbR2c3nZuSVn4DRC7KiKkqqBn3wJvnsLHM7y1DB2UESSwNE7exAhAGgj9ZxK3NYdvjGJQsBbvFx3AY",
  "key46": "3j4jcrvZqAoxGVhEfPxcnS44qfBYFaG6YfsYqmZpC4Tyiz748S4HV87qFXyygyPdMkXvc6arLe33tgVXZCw6xvWK"
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
