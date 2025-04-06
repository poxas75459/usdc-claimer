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
    "22NQGwJmBKzQ8exjSQMq9j4dSe9S86xqgc4dohW1WE6kSRg1fZQnGKWXHUfWozV3LmcQAD81kbyc68oHLa7CpSTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AyPxdEhMhbMWnTVfYPPp7JZsf6dDtP5NTiKxUyWuDUJwmCbqdSSyZYXn2FxeQUPxMrbjjh1vGtCmLrk8tjnV3ju",
  "key1": "53XXtKck8ZY6iekCj94NGBRWFL14fuAv6QH1Qh5GspyB6WkNBKJ57yDSTDMozmJDJkfSSkfGhnvqjG9ACmPFtcJe",
  "key2": "3zLTH4xyr8Vv224YdiKw4omgQ4kmiFfwiYubPzJCv4YSANeWYjCcW39evb1zBmboQ9qLLmWoYfUu6hC4J5UqcSJw",
  "key3": "65UsTM7U32Tj7XgtSRUs78ke2rD2845iY7oeoUXJcCaYRgXFHZqJvJUKjJwceNkuX7stjoUQqTcEhnRTtqc6C59P",
  "key4": "tgwvohtwWWWEoWmTT9Cdpf1ScAo4uPLAy16yFU1DRa29v697ia7Q4oKxDEFPkKocrZxgZKZxDWwDzrYwWivdinJ",
  "key5": "31eythUvF8zFaRhNe1jfhiSV3wBCcHmUmdk1P842yDCeFyV1udp25HD23BM9foe6YibBYmr9izG7U9FfKPjHSUGQ",
  "key6": "5s3LtNaPBa4mtQmiadoVisoHb4KDf5qbxdyCgXBewxHrm1rEar6HVUMCLLKyBxh2RTvDkxn5Cjbse7KRs4RFbVrL",
  "key7": "3Le9yDLD76hKQateSwZFzixYhKKksJk85JhQGd9BJQzWragHwoWHLi6H9uxuwXbAocYfLXjqWp5dR9rGSdcTeh1C",
  "key8": "4EuaJJ5Spt3Yx8FUtdQkgQ16uLpMyxbRRGmxPZNKUTHBhjCae98WN7vCvPrQ8uvieDM36pVsBctm4FgVu2B1LL35",
  "key9": "3nFKoEDeSvibHgW7jykwvVvTSq1DmfFmCpgSW5s346heMgmvZKAWP7F5XymUZoEbZ2vb1WK4uRuxfoBBK3m5krWT",
  "key10": "2bj9WvXxhJW9tjCACgmheDn53B8F9XdD5B36ZbMcHpeJnYx7SheynGkYPaLiRzzYXPbK73CkUHjktaKUBEaTND97",
  "key11": "ucPj7F4gTtKuATMoroV3QmAPFtENmEPEptVzv48H6y3rVSZQ22MfVqwznT83g4VBGtCsGYwSqomuh9Fd8xKwgJc",
  "key12": "UVhxeCbCnYZU52Bk7g1aPTrecRfVfRhpTn689fL7nWB3Cm8wvxcWQVDS96QsoocnZ3mWTKmtMUkmfsEuGRsL9Vq",
  "key13": "2vufeECvfXVeE5MaU8XJjvEYy8rbxQ9rTYPvPtjWqur2NPMgEqF6iFzFbaFSk4wGbzjZBdHSzsYUA55nKz8VXAiG",
  "key14": "56cJtsW49NupaTujeNpJy7vsxYzYLv9F4Uw21i7fwhCwWBLpwgWjUkK59RrZbnBfPUos2xrFU9s8zUDmJFVByLDe",
  "key15": "4EPGhR5uc5c6gh6Hx2W9ci6pq2DZBhce3q6V2dFQpKRYAzG3pwUs9eCFDMAdvH9xXjz9Mh7t5hdjy4fA4K6BDRQW",
  "key16": "33UbAx7N1TdLzsdkfV1WjbQ5icUHxVqPp6G5Lk9TjmaTtwkbTSXQfuV63jSmYX2BYCGFq2ibGBxC5RHYbo6PfqLE",
  "key17": "2BYYW7WNkVbZxV68ox3esVx9uPMUQJT3b4m7z7CPrbimeqM29eLXVTshhozvuhPX5s9itCQB5A6Rn1ZHpBi6uWjB",
  "key18": "4PnD3wQL4Y1qHEPfFRxJRuqnM2UxjuU44uLUCVXMNHwE6T482pRReDZEFdny7GjJxphRn6r8NkDtM9gxUadA7o2V",
  "key19": "LwqTUdD7skapZcRyQdc27UV6vwmYmZtfjDSejVksUHzXD6M9sQXCY3t9s4aJNFERGhUWaHdYs6xFAi3uydVUp3s",
  "key20": "675jKRvRLD1f54GqdzeEfnYtrAEE2w12cQVU4HY81dYr1r5ax9V4Zu9kfGwTkE6XR9Q9AHUx94HZMRWn115CKJiv",
  "key21": "3XemfhnxFyn6XPxMTUDCiguaTvzLZhhBC2Ty8FyDRKqQTu7jb2Jz5prBrCuvXPwUweDCM54LiwWjuSGGUi4iLsgH",
  "key22": "5vC3J7LdtibFBan6H4sQHUYzvR1gZKqxaap9ZYRKx5ZeJ8Ax3TAvrQbzefDTnChpAi6o3yvMZJq1AQMuuf2ZiMyi",
  "key23": "4U3599jcoigm2WTotHeZKRFTR4F12xiA1nfeu7epXJ3CWukEwAsLhb7B1tGf5RKdERXVznGdvXTEkqo8uNSJuKkz",
  "key24": "2WaHdpNRuLFNyziby1CunCTh8tcXCAN5bMx6H1yRXFiGWehYKeZ5ufbfRTzSjHUWMUNFCk8u14HXWxhfJA6eYZkp",
  "key25": "JCXfXPf2Zwpsk7bF5DD3uZYuEvTDcsav4j7xDKRxzDgjuGMvbUa4evzjBtfkFW5q26oEh1TTSvpbnH7cKzXreYC",
  "key26": "2vD84WmEWXD9g3AZd3S1fXLfqYYfv3nLNtsXzSnaUmyqdUcdPMTW1d6jtcz976sqWYmizQNs1sxSR5E8rT6XbQHm",
  "key27": "597FB1vdzLHG9nECGqUSUhZqvbQLDZ6fEheodxa2w7iHz5HdfL9LpEVGfseDsCBjW2nTFYLg5LWkA41HycXJLopV",
  "key28": "3WjhxC4vEtTAJk24ZwttUPx5imio1i7fEPgybTwxj1tLVAmtWAHTx6Rgffj2zWQiDHHcJin483u8YErcohfUmE2Y",
  "key29": "4rPvqkJe193V2EjW7c3biCsztzxpt9aCySpmtCBH8mQFjVwyphNVxfUBCAAHrWZvhwXRM9WpPmJYMbwfNYteAmff",
  "key30": "2T2Qs1oFnPGbuNhLKnK9pakL54NckoXFwwuPqZDRKNbke3t3SCY9fV7w6p6eTxbs1vC5N3Nh7syuV2yvoLJFU1bm",
  "key31": "4N5i6MPjR1spvmViph5kYCXm7YFrYrAN3Y72m2T1CNi2pQGto9dxHqC8AEWF1ByszXDYUWN7x3WkDszmBBqFEDjq",
  "key32": "4GzsQGvErmdEbZhDZ3afezLXMqLuACkKu2gzufsjXmET6KDjeqfTNyScsHwUpQSFev1P71amqV4WLEYobQ2vVuPd",
  "key33": "3bXmmBPHphajfpijoqSpG5arJ6h6axXb4fHhH3jkaRfBV8sunaMjeZUinwn9We1ZtmRnHizXQt5dsaU1zrBXEwAq",
  "key34": "2ogPqHJgRWq4cQyGapoNxH5xaWaHZHMuSi4PKQ7kCrL6sCSUerYFWMWRdAUkGw9ipC7EFa2n5iknEg4PKFLm7WAj",
  "key35": "H9D5Up65p7BqwYECVsQBLQbu4N8coTHvJGBhoJdQ7kCGq3FP2W2TWVjDwE8tAEKF464uqjZmb2fikFEK8uSFb6v",
  "key36": "5EQMCWQvnPHM77E38VTSDYQFvJdqvZF2p4biNekCxhh4D4P4BwbAAE9ZJ2dY5ywHbbE7Eeqt1A1amcLrT6d9pf3R",
  "key37": "28yjdPTnSmYV3d86jSwYZ6mQan8HiPdMj2EqqJudgEnVSFPUcZX1LUKBruDxFmyKwjxoC3UAYFF9Xk4TMtAWVcAH",
  "key38": "5gq9dNm6g3V6d3QU5swqamEP83UyCy8GeXayscEhDLV8mK3Q4PXXnw8gRY5SUDoYBD27dBMFPcwTeTx983YpaW2U",
  "key39": "2bB3wPxAu1SWr5nYKyQXLyGw8toewJ6SXcfk8Q2gNSVzSpFGS7YeFeSr4iCUKkHagmw4BozpLcRTwNNvWJvRWTsj"
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
