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
    "1pornNkp61S1Kraisk8PH6DU9yWVnNys4AeyJ9cLALjhF1SPQohy3V8PosFe7pKciLLeVEs8FT5Ruoc2HqdfwxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gsbpzAfCPTVkTSXdsJ6jxsvxmeSC9fRZqohpou99grgprYFk7khLWWHUoFVkaBCLBr3NUxmQx1JZQ6UkwgCoukT",
  "key1": "9bpKyDWU19mK5GZjUVRHzqFDpcq7wcmRA7YSN6Jok4HjokzonC46qhBW14vkVijAJYyEqkireXa5X2QBPAtvJft",
  "key2": "45Ndma7b8VyLEE7YEfaJHsVuwiYrDasGyZwnHJ2p5aJT5P58WHmzDTbFzZpGA73UJL5rMSyqcLuCLvMLmUPhyS6Q",
  "key3": "dHtPvaNVBSt2FqmcRXf4Z5adqf3MasFT3UjMbLNiqRrbVpFnZ8YG7FC5DG9KRVH4Pg4fchGx85T2s74Pd9KBK1i",
  "key4": "Pf69RHnqnspDzunEyoLCMkDu2n5e3NCUpRn3b8KBAKphco48HdPu96EGZv5viEGuGKCKD6RtgxVWvV3cp5M7LbF",
  "key5": "47rVkF545NMUa5vUqtpkcyrKRvvw9DgpBuQE39Xb8aB1MDhQSrfcwfnUytsxDt5TPRwKFcFeAGrizDdarn3FnG2v",
  "key6": "22R5ibLe6SfvUYoMw9m4J4rFR41T19YQwoRp6ouaBpaPgDwECEvJDf17tx4zRWqARhZRZ7NW9EseyCPK2mH2ifot",
  "key7": "3hpGaZqY91jXJz8k2MiaWmxirAzRBxgZySwFMteSrEjhxr2zKAawaLYN7gKav1SzKxtdjFqnqMwCBauHfgWZ6qKP",
  "key8": "ou6SHsbr8qyHtTDaF4dyLv5dAD6yFf8pChZ9G1X89axqiHXbfkPiSui4RR5y3TWGrj1XGnWocKGwWa8X8Zi5my8",
  "key9": "65wMTT3ZUHubThZpvMP75yHZCgio5VN1XWX1BWKL7fA8H9rT5NLZLxxT25RJfmz1kLgRfmwXGpTb73jgXkHqN3bF",
  "key10": "549jffj7ShkBk2cBhGQAS2vUtEwaxnAhxm39DSydcnTF2tweFjDLZTfZUEGGPVxuhQ189am73xAbQ9qs1VrPYux3",
  "key11": "3DTuWBesFjgb6M9vVnpJcrLw2NBraVvcX6UjL6VZdQpxznjqDGQeER9LYkqUuK6gusy237bVJnK71yyyh63PEFdN",
  "key12": "9eWweVs7X6HvPXS1mAX57E9uyDviHYfHwf8B5F5vRpyjZ492Mi66QCx1fgi6oTw55WZJ4P6mQ2qwKq9q1ZPUZLt",
  "key13": "21cFQSUHse2kJXfkNwwTdC8hxcbKFabT6TruYPRhFC17B597sffTWAiYBrBjrYyV5UxUGurd7QYxAtesyY7Hciit",
  "key14": "5REipxgfQD46Zk7kwEiDkCsfGMkKAvoVDCwTWCBVXzF6Uq48ZTxjFhPr4U2nazwpy8gEqhEaQ8Dwm6Ljyvk9yqS5",
  "key15": "3ykUoaVgHrCFocatCDg5XSN9KsAnQ9aLo7hR2dCksZUhjvEPEu28SvLaNyc8zG3BD13ezzruPspR9V5C1mc6WLpB",
  "key16": "2vLq7dkiBPNU68um6RPRHDpzBsh231h5nEUJ1RrSCKCS7p1PRjvBv5JiUVMpkMxadPRKTuGxetDUg1yrNACBbQ1z",
  "key17": "tZY77JDxt6Jgh2DkqQRKC7GqgYKqgzhrQBRv55Ctmg1D5jBU8auKKhydx7m2M3LMRsAcV5sze29dZSZv6kaYhMC",
  "key18": "3Qq9BGeYHeCm7wFGgdHbxCTEb1GvaThdRZw1jAPLWzQefo2aakHP76QQvh7GPiHvCHo2QLzchch7JsZLsVXxEso8",
  "key19": "4hvAa2zDcxmWtet1i4R17LAc37LgqVRaJ8bXWDgBzZ2qTgZrqhDpcpgLENVfugc2u2WzkRzgDGMpu2vZxFsksMyr",
  "key20": "m6UdE7vbgdj9s6aMpBrxx5qQ5UmtcnbBa3wSt4Pc4tGBNsYais1DE5unjyyYbg4HZsQpxyaXqwXEG1vU4CxStzF",
  "key21": "oCeMaqp4g9A1z5dJnxsYRtu4rfnu4gVPpMBAUqdjqAcgmkA9H7Y2pHp2z8BoMX5BPRupoHGM6GVShcre5BX4SqT",
  "key22": "231nBDKHH5RW81Z8YDDumNgGrJpvQQpJQX1CG9dmuJxFrEWH5L6o6KTmm6saZuvoqH5tQBdvNLiHFAoGY1Nma1hH",
  "key23": "5xjHEAcdVyTk6E9YTwB8YBPSseX9pR9QvtoHH2FyTZgqFFgsdBS2kxDkSQVYsLnJAhZkaoFJXYoZFpSLfQ4Tnfa4",
  "key24": "5ofFVurCtXzx5DUbrT9wkhbeq2s4h1PHKcSN2eafVBzbUY5T19G3t6PUCCoRGHT9UZtUC2cUZighXd5JtUeavx6g",
  "key25": "2NLY7zFLamAvfaLqsstbRiNtRxX6m7tcvAqgFest4sYcuBWhuWbdAjnnJQadQX1FtS8vdNn2Myrus5JNHUCVLcNv",
  "key26": "6GEvfXgvmauJmShNaMLHuXkbiQqv8udPLQFXkKW9r5UZdNYwURd94iDMjQB912ndrJz1uFAndZFGiSg2eUh8tj6",
  "key27": "2pZwbrH1At9P2X9pcn3hx1BaeAWh1czghfGdkpRgdizf81BboGh7VxiikUJS9XYCzxrDgtXkbHAJUyCNKLhVmoBb",
  "key28": "2Zf3RqoSbrrxEFBXucjESm3YiaQhCMkGqseEFGrYZZ7z1LFBB6dHMxyUnGf3zFvM1TGZdrGU6gMMKGLWipyQX2PU",
  "key29": "49u4tS2VUppeQUtv3YkXKZg8mkvjuDRgmMuCN8pQQHZi9UompjZ2VCCremeTq8CXVavA6jrJbzuXRTtz1caMkmUe",
  "key30": "3Z52j8tCMecg3ZRyQbGyLj1D8BKRvW3jVF3C7nsdmzuqRsZ7AzuMrSnVEXCco5LRRLyEs7BJX5TkEHU9mNNvcHpC",
  "key31": "5GouHJPxeJ4BEZ5LposbieHEEpgyTjQQXaRMe5gQcTzjKL5Mjg4b94QcXgq3B1qJkdbgJF7vFPhJJnq6Nqdeokdi",
  "key32": "216nqy89zw6AEVzYEVkHHTgtcxQc5r1yt7ZGCoLPuwGMc9yk9vjRmYekzaaJv28mkN6QYAc97uv7g5f3ySVk37aM",
  "key33": "4KnqU4DxUirK5sRbEirq4XE7Dix5MtMaq15Uhtmuz3QvE7xBQQEbQfnAtVvFd4dbShTNJ6jhUYxX58LLcff77tye",
  "key34": "2nsd2nMtBrDJLoLHrJ2K8VxwJrqVTgu3LfG667wAmc62sXGddNV3ubay2ZfgBKyeH1npWeEJiWfuq1V71V4KtDf5",
  "key35": "5em77mGEfEF28nPvH6rSn9tPv4GQ369GiCsVXYFo8QJyk5ohhpqu3YCVhA16WfLJnJq8An1jMKsbLXkRVpxypoYf",
  "key36": "U8rc1vKmxQn5TJCHGoxmu3wPMveWs8H5YeTLY4o1iqv7Wwb2NDsyKwrUzmtJ2CautzzGJkkqbRhtjD2D7x37CLy",
  "key37": "3Na68rG62ajsu3TR79At5cGJSo8G94efN875dkXnBP3HewAEs5HvYEjczTxAPyF5UEXdq13iTZy6dZpqFdT25nGa",
  "key38": "51Lh5ZGw1VaNLUuFcjSNn6pwDTYmkBeSNCf1EbCqv2wG6TE8DGSM5V6KG77mqaS12MxAyktnQZFzjrbw236CE3Sf",
  "key39": "4yYJNsfRaDDsymQVapoj7WW5612hfVSoKoFdgKbjMZs3Bk2DaZxtBYqgMYBdvYod768X2LEitg78mA2jGPuLJVsn",
  "key40": "2mtQvuFhRteHHiw8EjdVfRaJPa2kufYpDNagHZT1HLXFDLb64WtCPR2AFSBq5N9ER4NjiAnwmQJSQAfrn4jEusY6",
  "key41": "2cGTEYWn8qSUiwrJUdkTepzwnSejW1RNvrcUn7YbpT9jhnvMJhzBbcn3VTThuRkgjFsVDALtJXZsPydGf3QEsz29",
  "key42": "5XK3cheGvhSL8puvJMvKHs6UyQMgwFKhMPYrsDGbJqsxsuLJ5riHdzRTXFG3wqKZy4KmB8gL2aY8KybPjHEzj2pd",
  "key43": "5MMHiYwWpqRwhdG7moufkQtwATrBs1Pdq163Wu9EQoD3WRw3XqrfzuYJBRmPgjhbzpQtxeAQSbQcoecNdVVnNSRW",
  "key44": "3QiXqyjaWnNV6AbUVjqqNzmmZsue84GdnankVcAnxsZnzi3FywHAUgB8LaGwkwRBzCZHcAi4ni6zmTE4CSyyGa6F",
  "key45": "HiUjZTQe4uQHEzD5Yh6wjSxaDcKcaeZv4kk5FgyH6p6S5KkTHhxSAgjrtDNPrsF1ywVprmNPvUeERYSDpCTPrkm",
  "key46": "5jNh1Hwt4iVqD5brT6TnxmAUVUKmAQtcZ9PvqPULWpnxA9SfMLxbbYnphAhvgDpGh8E8NRkgnXfaoP9iGJfUZGhT"
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
