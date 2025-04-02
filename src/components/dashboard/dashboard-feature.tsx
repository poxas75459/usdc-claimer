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
    "23jZj7UefxyD9UQhekC15Hq79czFtaXhyZYcYeHaefWU5CaHLDsxZ2d1AZxMWucLyxd4pckL2Tq9t4wqgSTtqejv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gqaQYdRDDbyojE72DuUxi2TkgdAC7duWTMFGDJnKj866TYPCzanyN9efcqVqWKXXbuyZVWCKNBcp8Yg8f7ywjxJ",
  "key1": "5ET5ZsGZYTGoxHW4N9XQasffyLo69YVbRDUPcSCWJtCotS3ypop8LzzwKeHHKiFYiPao1aNKVUVf1qvcW51467j2",
  "key2": "2fNjNbeMfNjnZGoqnxVQBmZEm1JZDgNZMTgsH8BaDxpCpAkBfKCzKVRmkg5jCsJKBf3maAWWHdx5p6QB5eAVvKAh",
  "key3": "4tEGj11G6ngThj8miRTeXJpLFVybPThfPP3Mhz1FKMjSY9w1BTTeGkNTitSLDmFLREfQPufAEKeh7SEqFx7et6TF",
  "key4": "3A4eRXGu4iDainWrTa3sLkhkjnaUHmio8M2akHa5Y54RPJUKA9cf3jBX1KNtAL4qD8g3qgDgHGuWsfDeSK1BeLGF",
  "key5": "5tKos56JXi4VGaxu4rZ4oj33xKzTjgg53iPE7po5PgyDnrNdzKMusqh4BQDxA36eGUxLpY1F4Rcws6yiaMjiHC7",
  "key6": "4DiEi2oW99vA5uBB9vHeooUxATqWib3R4yyxpd8fjADCDenr2a3VWNihY3sT4QAuDMrjW6jLxLTFi5kD15iE5iZm",
  "key7": "3ujGstYpcUnJJeG2xpiU8nPynDH5x38NBDUCn3RQK2ARu34kDxdyZKyL4Ffv4FQojyBHerdiUTkLDKxSKUsLPVpS",
  "key8": "XDpvBUnboc4J8i9RvZ3hhA4pqrYaKZYGYa1a9q1Ww8528j1gEbsWQ5q9akR9wYgPeW2VF29w2Y1kjjkjGKbJt4e",
  "key9": "4fixVssN3FQUw8pQMvVMDQLBtPbYV8Psdte3E47SQbq2LuKoMCnPhwa7oe88FX5GBzbE7PkgXjrjER66Y9Bgr21z",
  "key10": "4QXVw7pPb1qQxrbKeR18WSTA91MB147KSw1hp5PpaEiBm7WttN5zEMawRnHmJLWXPXccP4XSUunXiESWnADzan2X",
  "key11": "J5bpUXxp4H9u9PG6t8xE5pr6SDhzqmQbeeydaxb4x37EwxfhJhESyuDnfE5UCMwruxk1jKX4HLaHA1ph47rT91b",
  "key12": "3NqxsWkFQ6ifpEh2K2K5z7BbPumX64JwZx2SC1rLWFuJTLaomhfDmgxrp71aik9RpbD6fpifiyP9SEcHxTkr5znG",
  "key13": "4vuDaiABvcDMjJVM5UuSSPLrg8p31r1vWiLt15xbTfebjK8d1Q8oYZTYrK6sMBcd6Y3L8PLAtczcN9bYDyPbvnBz",
  "key14": "633wRoGaUfcNkuJarAf3ndNBcHJU8sYgxhGsrp3NEjdBpN5bDsKw7GugNx4fZ248daPZJG5nThWXLNJahxSaMBHA",
  "key15": "4i3XcSa5dNUYdKvpcp31n5y8zntAzmSabMcUdNkcQRJzevapX5sjMwANtz9CebjycQJnnfxu1fkdu73ATa7vo7xd",
  "key16": "5aShXJFgHd7gxANiUy4sUGNQDF8DJNjBNE2yG7kYiZQ3CtXy4qAwCy2CqwerLzAuyMZqfdFHCs6ri8nRYE7QVGsB",
  "key17": "4jSVTYxa5faaSeqSJiC5qJUEfuJRmMLhQeCdQ4LTLxnzDBNwcMaQRSLzgY3KriLyjwnkEEYhFTW8dgRsUn27BX8P",
  "key18": "4kFf1uGRjYQr9T8qXXwrrmegKor5rUMXUaPykkv8zzxk44zxmB5ER1HDEQPdohpgBXNajttezCzKYRjW8NXyVmET",
  "key19": "5PaphtEiZJi7wVQeTzBLyzeehcsoiUMKwwBcyJjBhG3nE44XbYv9ZYWJ2LjvSrYVjjUAmrTJ1XQAsz8LzuH3k33Y",
  "key20": "45hBXY8sBV61iyHPTSainuGVH5365UUXCeWGnnQs4DkU4DhymnJnxb4zE9czrSXdxe4V5fmHtciiUxJaU5KvrMXX",
  "key21": "666LiHY6PAYbwXEbPq4UYvC6rWm9Fye2Dug3HBCoYxAs3CVFgBTjeytu4x21B1gztSB6ncoA2Zxhe8GVTdQ2XBwq",
  "key22": "2hbYrTKLaxxBiSVBsJHmGsoYcegvo9cMkZqbymJis7NsZRftWXEac64rXrm8eUJPa9bc5WGX7qwpX2FBpu9hfZRe",
  "key23": "27Tq2Bs1rzGdiQRnSZ6f9zP4FrqsEc2VtLY6mXaSjqrLUNgRJMrbtduG18mKADicZppXfHNq8brPuFvLDFfzuFo3",
  "key24": "w3bRffYYMvrGAPx67X85kqDcyxec1mPqaz1pR6bGFM3t99MthrfUYMxMyaNRJoyuGZ5Rr3KM29qJAXG3kHP7Q5P",
  "key25": "JQZmdkotHGbgjTBwpuoVoMDoNDzYCGibs9wVCp6KJ6KMZQiGcsV3WFnxqPRhyK5DdDZYwzjscfBTX6uc8XyJyBf",
  "key26": "2L46QFtBgo3VQdEnX9Ph97PHshpJss9a1fg7rFqukoVhQBjdzo2i6bdkrkCjz422VNk2QNCWxkKZwisaVUwUARsF",
  "key27": "57iFnRB6Pe2H79PPVhsGhKMxz2Ag3fbnGaybFU48w5BPF95xcyiJCKm9vu3gmEhNCpNG7nmKuk5wXFroBY7KWSwt",
  "key28": "5VkMLguzSyjzZPwuJ5uE3XaD6kjcQXXLqqs79jwKiv26VQ2i7wNwws86zr8q5XytiXWrHWJhATi1NNWHhxBPtScy",
  "key29": "4goDyCHemC52zLhaudnrS16wnBBhDQCnqrGTcuYLtS4m2ndo1QSUEv2ZnsuaDAncwYoFDpwdSimV8Brpae8UDE59",
  "key30": "5gjV6aLi4fwSo8xQEmFpK569Ddjjtj87Rswji7KP8r3GfStq5C4ys37R5NvjRGDt6To4YVgiX2KaaoAqdVW98cSQ",
  "key31": "4mDWAWCZQe6pj3EX36iXbpy3QhuG1n3fx8ptiPVbEdLi1eZrjnTLnkVDrfRP455GMy2eKEj7z14TUFPPEhwB4fRi",
  "key32": "pNfEGSLoYbrfa34PpNeBfU4AR9R7aCu5YbmUA2i1N2ipVU3Sr7Wu4Yn2ToCnfVPbsLC1LUycV5FtyLyXXpXqdQd",
  "key33": "x11wLXVHBebHHPyDJvPU4n4bu9QYwW8NCFMnn3YjKo6jLkopr8kC3zWig3rSWz1NnUKAqWqKdhwjXxo1xdmcbuc",
  "key34": "5LrEe4hj4B7ytLekyojee2xt6vkddF8pwRMvSFJWyyp7vHd32dhYccCCyBSxdingsz4cimdozq3zwrVnL3D3b5vz",
  "key35": "5SGkYrSYyfJRZp8zsEuMa3ZKHY3pnUdoYYDnCKmc1XMr3GdZfRxV7Kne56bMsiZyvuUU3HtFuTVsNV1wxvVeJJt4",
  "key36": "369ULsSxDAKwSAV83uQEniUVVbYSwERq1TzuvZ3T3Qx2XhFHMi2Z76hPEzNcN24qsHRohMVbRRbUs7nvgVsAXzie",
  "key37": "51vC9kqX9DxMu8eQfzY4FELWioA6Zcje6bNuXWjxPtMAaRNyRfhePTn41SXvEfpZHezzd7ExJnLxkHVwe51tMnjh"
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
