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
    "2QbuZcdr9nS7pYSBm8x9VNYcr2Nk6eAvU8rZXBMZ518mqik1PvZqhd2Sg5gPiYC19eQD86cbJsfnTmbJHvJd3xnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vrHo9wjrxYVyngUySpFnd7MoMgJGQhz3W3x8fCQNcje6dZW8CNLcCkAYuipvbNiqNBZEyV4Sux6V5Cyro8F7U3C",
  "key1": "4XNN6Eb2ZHLdUbc7VAjp8X93AdnJDCf8AAWEKLhYv3rjHmSaenn3sLT9hYTkXPx8DEj9zLiV53y54F3mRDYkRZHE",
  "key2": "4vqGNgF84YFqm9tdmfwLp4vZVTeGKarNJzmfhcxiETnnPPbRKn1iNJbCqkwHMVirXanDxN3t4VQ8V3vhuFZshG4L",
  "key3": "62mYLV9G9kyd45BmFYLVMPQqoGyaNGC8FVfBdciUcuUpNbmR1qZckv76kVTGCeqsPFsCHPoPBRt8pi8AUiYfnZJj",
  "key4": "LYjzdVg9WXi2Yxj39VP5eiF5p3Et915HsNbxN5v7JBM7zdYzxFp8gtZbD8mReALipaWqhQjUTPhH3vtFMSda38U",
  "key5": "36rv5Gw7nSVy8dyucaCdPeDfRwcSkGXWMpvwPaZwvFjiwYeUW9eb9tUZMvPFVor69p2WokpAGq9CV3xKdAU713jT",
  "key6": "614XYkissoLhyV8PScCZbkFunuiaXVWCim1nA5MqSWWTrhZ5AyvAKCcv6MaEsrAB1H5e3YZC23L3T6hDSGMVkXeE",
  "key7": "qsGJMbZbdeQsNFnjpN2M2SEwxxQLBB2JU4GYii26PXmcLdeCHsw4hR13HTG58gvSDPyr8QfkQFR2ZZ9gqgJYhXp",
  "key8": "3dePg2WdbZicL1EPygypyjbRh4va5Q5NgtHL1eZvFTYhhvHeBzS5QkiAXimje8rZwGUqUKVV9aozqwzNrK8uDDxv",
  "key9": "5tDBJQcXZCGv71oiy1EcT7mY6thcQb4ajQS8dY6Xh92uvBvcAMu9vymVEswF6SoGbkaAGqg1i7ED3XDqDFcR2Y6U",
  "key10": "2gZb38G5aT5ErXQx8NHu4LREJu7qjSihJUZEh7DNS6SfmKdeoMUfL8omoPL3YzB8wTXNp7rjB4c2JjtA57rdWEMJ",
  "key11": "LCtcgHRcm24Tnw7bFjxWQVPFytAq2Emht3gFSTz3g9RYWHvuzGceNrwxNzFYyJpU42ErdXi7Bn6n5GUQbEeqyzY",
  "key12": "2ZTr4aUkSTRRmK9rSwSVejMZpPbhjsn1FsYhh2o1ExLjYA1xps2MhwhswoPNGc4cNFGaUqGBoVfifTE3Z5g7zAV3",
  "key13": "2RBzL4urHaxVjN7rWYk6aXaogVAjwEwobcTeFYYENTbecuw2DLvdgHpUdUgeuY22ASP76q1zfXFsDRZfUk2TXapU",
  "key14": "TptDTzwEZD2WrLm6L1QFXk6boirEVBbZtVhxSeyr8QJfAN6zcS1G8vriHEQiEtzAjcSuSTnfrh1vRhiTE8u5pMd",
  "key15": "bXToHhZZXoJLxyCMf5LL6Ef5ncvVLkMKoBZ7pbRyv9d8q1VPTyZwRxVgmUzceJM3YwHZKjSWzT3a6bVyAnDmv96",
  "key16": "28RoqJqiW3vHWWhJjVaaoTyaaUtvW4LyQW1sSgraV8cJo49y1yRqHAvaBxSFRawTHN996AveXSJMVc3p68WeoSML",
  "key17": "2oHYATBqZBwLpEGn4MBV3k9D2Tv5362a1DHVo1AS7LyJfqgeGs3N7Gw67vbdet9swkrcRHRogMCZ7DoEUhBAqxh9",
  "key18": "5sbGdrzMziKTJCWoeH6Wv2QrUXK9s8ZSAvZHk88eJ56e8bRaynkYkEpkc1f8oobihAXHPBzk5XchvpjkMxw8XFjj",
  "key19": "Esv83DxifxqmKCaYHi3XPtQbbh7sgEfrHNbJwjNSgLDtJHSjMq2zmP65L2ZQPtf8Qa8cZPK7RMwhuB5ADEfE1WK",
  "key20": "3vbza296vvXD9U5JXNnD43HNJXwzcBcDf8kwgsUTGYvHXdQVnnmXiXNoyhzy85LJeadi1ZQw3KHxkrkozEHRVuwJ",
  "key21": "4PsryVmJM9r5zhcgHxE7M2yLnK8yGtR2q4ACriK5ZF7hu5M6acSFqixfnvq3nnDBCV4mPPLJDGrLScLvZmqsLe2h",
  "key22": "3UwoQyEePzPAXkp2uh3sQkV8zzSVvvzRNpjJvYVDRwR6LCk2PVG5LXbNpif87uRGdWHyo3TcVd2HKphxc7Gq6QmM",
  "key23": "43T9Chkx7HrwpqPhZskaYsMqGAHfia4Rn4kqG6bJDf4hvUaxo4WQwfGVeiWnewpuweRZQnGn5PGS8VavKg63SJ47",
  "key24": "5ncnyaSGpJGHyRCrn61u4vs6dZALzUe7B5S3yYthEB46xH6kSra4bVV2SExtQXGhU95XYPpHEGGwymwqdgLo8wG9",
  "key25": "2125NAzzZ5Pr242oY1PPtqLzE84qPVDmA1fnYp1yBQ4PummY6uHwUZEZG4TDaMDFA6FpMtvbtxwxzYDNvXmRRsqc",
  "key26": "WgPwYELezPnCEkgN2MCA2bmC5Mp5ENNb96Znb9pUpYvQecvL36F7KnimjSYACPjnytehyjjqr9A9bALZpezUpGQ",
  "key27": "2dka3PYLwoGiR31fdDQ3p9Cy6HYCkr4uqVxbpAo9nCE1LmRLqNwiZn1YsyhHM6PNVQvKMPrXxdbdYT55ut8UPiq6",
  "key28": "5hv9uHC9m81tHEg5NQJ4yoKNfT2riset9mVt7KaLivqNGLY1TLQtUKzCWY1gUtU6WCWNuL6eD8wgZeLabqHSBN8s",
  "key29": "5fT7TAi8NDM6PMdWxU5tRsBvo4eMopYRHyYP7ULF3Nvu1cjArBsghWtgX5reNBXYfniZ9qURz9xYZUytmeebGA57",
  "key30": "2gAJmX4K2k5y9x6JG5T1qFJDVvSr3F8L26DY2ktNPyqZLarLBnBK5nkS1ErJro7rtJyL2iwiAZB2GbZDFi1Ja6gw",
  "key31": "5AyzGjDUorhCCJrC9ijQjaMT2iTi9KDwCPZgvLXooBP74yoB3esJ2ozCUG7NRM9XaqDrEWtBhZECADonC9B1yMKY",
  "key32": "3xm1kWqXqfFfnhK6aQ9G1mY8H8e4dvpoqPHxdFePh41fBRA5p2PBKbWC9EwA5unGuMR3B43y1pcESikGWVAW52Cy",
  "key33": "5umdAuXjuqRwcLp4i7Czte6JADJfiV28b2tJMLUuw9T12Pea7voPLeEbjuFLrqVgC2kcr76YNMFGcJS1sYA47Nkc",
  "key34": "3HvdfU65d3tRb4wrguGYw24v3GP4WeGAcgNB826CRmv7DYSP4EXqWDP9cx9tpAFDTJqzmwv3PduZUNDKAswguBb8",
  "key35": "3TKDbXWr8EvdYehRMjPfP2GMrJnuJAHmxWVBRZjZqnwyLRjnjEpxgfpPERcmZyHr9isRWGJT1gS75kxJitctkRdM",
  "key36": "4EAJ1f2AXXZSTGYA8LjDJjdhGgyURrzo1t7rKv6vq6C43Zs4ZupsVGXpp7KgEaQ9DQmHKz9J8AzVbCsXFZroMreL",
  "key37": "zKWUkfd3TBBQ2J6fx7gMgzAmFznugPuoWwFYKjucgHsH3JxRPu8zxBtLTnr3BnK6fihWDtjb8tzSQLEnydFa8Ft",
  "key38": "2zsRcy6VwQmz6CjrV6MQT9qP7uwwvD3EV2VwGNGovaXSATALRZb46RCaFTi7sxNdyQbwGkp3kfFszGam5TtQ8Fye",
  "key39": "368UqwzDQvv25h3HrxQ1gTjPfeSFRiEKTPRxgDrnaVtq9nQuW9RceS1sXJUbxiuBAa8YNPZ7Mpsha5YM3dbKA67n",
  "key40": "5EPvGtsJtDsHp8hb21h4WWKtseUeTFJXb6WF4DVxLtCApRrgQpVgY55jphwuY3L5phnH64vK9t3FwoS56uSVjJKJ",
  "key41": "22fUzL46CE69jApd8Mc4oioDVNV5dzboJMgdM6rCUFd7ovg4Csj8HnAvimeUqtC8N2u946KgemWsaUc6jCk1FMgp",
  "key42": "5bpFgw7ZxHEhxbbmot6NBQdDdnTXLTZsHRzhm3nMuoy32RPBi1UknKXFaxMXBgRx323ewC3sQLdPVKa8noxekXeR",
  "key43": "3rJnr4NHRjFeNAtV5S4NQ8vozQKy8xfQ28GJEvtnxEcY3Eq4qTCCVs6KH9QnWdKqKicurLhELWzYsrfcghj1ENDa",
  "key44": "4FUd3je9dSNvt9D3AgXHVnKKY5sbJ9hVQi5eZzgEf7Sgaw9ssxHdnPuuBRqpSwNa4nYRJ5QDqhFcjjx9S1rHgaDf",
  "key45": "2fjgn7pYYowPBGhuHYQWiYEqQvAvy2a3GJthPMQjLxGH9Wkro8A6dGVGDJPSmBNCZ8mAZtFwXuK7mt3TePRXyTkN",
  "key46": "4K15vLejn3hoZrwbuk3qidqWHKRJD1raKhC3jYvA6yBEJAYjwNsMeAkPx5LEfzPvPgKAAmcAtpXW1kc6noeWBhHE"
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
