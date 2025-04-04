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
    "3Cvi5UVvrsxu52V3WhBBNuhEqnBYGJ5Vc64n7zXs9BkTNcvAM7DKVfx89asDXX4wnAb5gdC7HAmfHUTGfeuhBmnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gd4sLRpipTAm6BBdRMPrYcgDivw2G3HFtogFzvFbf3gkmca7jhJtgxzGUrTJ9iboqbGDXXCZLCdACBAqZYvqTrT",
  "key1": "2nuZLA8xHhB8eotphPnA6iTTgmejDmxsCkgKNCNvaFs93RB6sm92owaJFKgEcqa5fhcq5cohpjfyx1uim2zfVt1y",
  "key2": "RxAiZtAZbuiL7GYNhpBxmS2KCELjzG4BzhasLvJRrAANTXWUjMF9YRKd14MpUURpatssnTqeafadFgufQZFkKP6",
  "key3": "cg1ZykBwcCpLf35QQMs5Js7GdGFEVUHxxEU1oiR7JrqKBMotZDgoSjVEpqjTmeABWiSGP47mkRGefrT44t7AXXP",
  "key4": "3qnjndajM6ShZCmjbWs4GchDkwoXsqpotSs4kjjRazn8LiKMf88u7HhUCjARjUeTZCoW7ycWCowUkRaVcDxnnjq3",
  "key5": "5s5jbRhmp9MsVzVZbmegLKUbVuEWpADZjtQkRDiW21X5Fawz4kYzBp6AvsnwMTc4fd8HkrstnPxXQ4oRm9bQhZnP",
  "key6": "3PWedNTaXdz5sH7GMic5nzvb5KR2wprK7CJwA6WuiJXonFT4W671UAkL384AVTyWVyvvjWSKtnDSjtNaXZot6WEi",
  "key7": "2yq3zs2zgwJqX9SNZFqZouF4Sqm3CZG89pgsWRZRTWDVxdmrLjKgcuuk6bNzZyxEApvYddqjSgaPQHojeWSReSLF",
  "key8": "31HfCZwnrBBtj9zQTuZbnCrg7nuttzrPMhVaDVZ6ESLHkrDiw2tiZWLATQHVT5eLkr5d7zEoYS1GKKHqq8W6zWSY",
  "key9": "UKXTBUGKxXEZepCGYR3XbxAqAZMin2sWaHHbHFEFTFmRWiyF4ruEAjz4Cq8AAYdz4m4n63XaQWE4D2o7rju6RvT",
  "key10": "3FznHXWVQwqJpJbLhxaPZLGQUbeaygnX9ZyXyVFZLmrPbXtxkquqWqAV2SpdRfyEaYLwzZLeoyZ63xnUtjjAnhj2",
  "key11": "3Mq1MFTxYwE3wGsRxxoe6KBhZxbzsxiBqAaeXR5Q9i9oKNjMc7c1L15qESfZHZHEUpbdXNZm41sUWk1uXRV5jZbf",
  "key12": "2qnBdJqPk7B4MfJo6Pj38tJdLJiSKR25Y2sXnbJiZiRDgdnR221udhUgnR5voq9QdgDmYGS84Jad7pYEBGCZ8mQy",
  "key13": "53w6ZCJT4tzzp38nUXVqryR8dFtNJ6HNHn4bevQsP6YZWWwgy39fD7bzT8frRPkNqp1etRE29HZcZPsyUHRmUH45",
  "key14": "4XWUdikmX9jUxSUwvGqz6NPVbBES7KytMtFaCePegcCFSfc4TXaqpZcckiH2noLYCDuytyC2BjLxhypk2xN1PkUm",
  "key15": "3BpbMH1qG5nWx8NfDj5aGRY6SVsGdbmpCEv5KtRCd4WFNtamHT9c9Eyf6FfPAEKgWFjq5zkbd3bbucvJ4o8mrjeE",
  "key16": "3jhqoSKvKV2AKDPLFfEzjYHT4FA5wRvYZfy9srFawWm14QuP7dnsSMQFgPLdBXtLLiHAE7732A7yzkfW6GK7x4ww",
  "key17": "5rESBXofVnEpikDtPzW9BTz5ypBVd2FMzwg69QYFmsdNZgPUCMVB1dhcktWtEsyCTuEYZfB14KatmxhcDfp7vCKf",
  "key18": "2eeUAzedi4UxxTrR7edNyUPKRJ8ZSibsCTvF2J1SuXAAGdbZkbTEkWaA9kKXTyDBvaimaa6PaTrf2fu36i5zM7Aq",
  "key19": "3sYmpu9dAAtreTbVZz5VALoZR9ES8ftY5qpJWu9NJeBhz2VpMYoqSFXieZKeGdbezKnEgWPNh1s92PM3ZGJBU9dY",
  "key20": "23ktk7yPA8pTTnDXANJWDBpaDHtYC2VXxof7Bd2JUygAveVvz6ryUZ5HtU6ApLFoq7NgXDQrciSv7ueMnP1LiSfS",
  "key21": "4CQsBfWvcuKFEpk75Gdk2HAp8c53iWjwkw9TXj9bDNs7U74JQp8VVhnrK6Hs68dqkC8r3EMAaRzVkG9boNwsHRry",
  "key22": "3cgsHbjmkZSiTAvwzig2f2N4zLr2iMNngirPnJxVfDhB9APjB3TKPddYC1fS7zUifCzPx3FoWtTz13hpTBKpjSvz",
  "key23": "EXFddQrqtEBNetCwczhnsruCbEvDxaRDipHEG9MNsaqgZYRacoLsUZWy33w8Jhs69hZDqqbeuSnXgwzdGd9g4Qn",
  "key24": "5Yo9yoE9D6k3T7iqcEBinBcDyedpdtozwNXa5YjpFVfu19eeSkyBZk6pXtZ8BnJTgq8mvn6SQyi8qFnizrijSwAP",
  "key25": "sn9XjX3s5Wf8GGJYpm95GAfeZf4WsF4ZpRF2kzAdQJTA3EY6SV65XX9Vv77Gqcr5YNKL7edLZvyDYhvwi9wTZxs",
  "key26": "mNz1ZqR6gW83Geo5c15M1f2ZiKWjJ6sqi9wGhQqVcXzH9MyKSZUzXwindjgiz8fZUdDGVRg7MSe1tPrhMfCSYqU",
  "key27": "5ZUKt8mWQStmBiM1K6hk6mkwbioicHj5rVuxGDTkj7sNgWpwArhS1m3JpaBKkHaRGrjPEPaNx5LDdqtZMVCvsyB",
  "key28": "5jq4xVDJ5cwSkh8zqP1W9NZmGDwpfkNeuaZAdCSbVk1mdcEV3zaiuBzjMfEVPcZVA6EZFq6vuLtbWtdBNUqKdo4G",
  "key29": "4qmrWahNM5djKpCAs5H2Bsz34RZuq4V7Kui7vjdbCY1DvEGkq9iXJEnu5iqLD1v8CSHNPFBzj4VamGFnAfZtkfg2",
  "key30": "3drpswvBXqVem3AmUox6EiCUw5L9ab38XW81MBkSJfUF6verWF3ZmN1hdn9Lt77NbN1SAFwWuN3Vbccf2YKyQTGQ",
  "key31": "RweAabkP4F2u1kePEAQ94LjbMwLXhsVxjY3BLhoV17P1qvCWgPCAfzYC7ojTPX32Y6MKvRUgJY8MCmwzcsAuJPM",
  "key32": "4exTZD8HeYGgdAz2dnQ8hRscsZyGFS9NXdFpbKi6xsQzrzZztc358gMmEhV53CqZCK1kqXb8KvJ8uLNWAfXPKMdD",
  "key33": "38csebYFQc97kU5egs83fcYrrywZ6Egrg45NUxdK6igbzMv67YyQ3k7vM1DatirLZ5Qc4a3PwYzbXT4WJLFoHagZ",
  "key34": "2qonSGGFtEsuPbwvuFLWog5rfAgVxzDMhVSrFHxYahfxiE57sXmRmLsYgAwwSnrzsUa2jXnCmmF9sXbLcpeoWyWt",
  "key35": "4rpBVL26328JYT9xsJy9UND4uXKZTf3E9TSkcFyxKixUhc7TWFc8VTKBYPizKmbG4Jvd8P5FY4iDYN8M5NJ6V1mA",
  "key36": "XhxcniS62xQTXbwYmjUa7ubcFxEQZ5FM28Ao4i2t6R2iRFBChKyRSm2yyo4rEKSWAVQUQcZbct6c6XszKn5cwX8",
  "key37": "4Z5YcnrSibGwcLyo17YvNnmtb8cvDmQWbzg2mmFVrE72nVNLJawZy1pGYzbfqEd6yJWt1umBfW7N2Vq4bmFtEJJZ",
  "key38": "62JkGuoE1nB4rJMCvFGNSvV5aPaUJGhcxpBCCE8P43R1YZpHfr9JUw9ry3wH6qavg4cq3diKPBBj9fk7umbnq8Ld",
  "key39": "4heAAvnmZg48r5vXBZ3CR29K7ZT3K6RkkdWbzXX4htGtY8va6Pue84cxGKNv5mFVDCWEYg1GSf7iaqkyJMUjz3VY",
  "key40": "4A2DF2KBpfM41cr5BVhkAnNpCGxw1BaztigGXdmHDFHbxsVx5NwcuUUDAX8e9o9b5vK7SxVhuMVofZVcduyde1Xr",
  "key41": "5NR82rzD2dZ5FHioo1ZHqgSmeHhUgyS3j1vbhLFH38GRJkNcY799YscRnobALXe8YenEdXjRkD3d6YgP93QzTyMf",
  "key42": "4Rob3XEffEKLERLATY4M3fqiVHK6c9UyiF44pBDasS6ggDJEgknbwP1tKHZp6CvzW5U6zqzqCvL7skVJD4HkKVQy",
  "key43": "4VQYbtiHnaMw89AYbcEFHyySk5NXobtB6Fpf1BmAwwid9jWE3QG1k14SycV8ChRqSiFcTQHLNVSUnFciCZqGCRq4",
  "key44": "5xZTevSm8tmk4cUZCGXRXCaVvDuhA7pCpz3AcGjuA1G2a6LiUdZ6vjimp5VD8kQ8MTPx6Rg7LwnvSuTZCx1EP4ci"
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
