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
    "52oJAg58iB4ui9e8tx8PmwiiH4uvLoBw3NbnnqVa6KrPR4VEpHKC5tpPZdtt9C4x6TPmKTGBqRtqoUU82R9tSKjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34eomELwfTXBGbW6DjsYkbXV9QfH4gntPtDc9vEkGgximrkg1DtgNoTuRFXG9tuYsefWR4ugiJhdFktrt3EX494s",
  "key1": "3uRMwkkTAayjnygvxBZro27MXMsXvAiECQxLZyMCYBiFUuDmMDdPtaTG6G6aKonSKoQ2c3M1oMrcWU6zzn81uv33",
  "key2": "2kr9vZCJxNPDTHNYL6xkQHyN8WMgTN6foMtBRBSyHvrhjYWs8XE2hUjB4CurrxHN5NUzsTLjjgvyxTJGBcQ86pDf",
  "key3": "J2ZasTr9MFV8fLw1CHcWa56NmHYid8wfL6AbN6eD2NFSxrRFmhtpM2oCob763ZvSzBTwMe5BXihK36AqoTE5nFH",
  "key4": "5HY19zfc7jEui7cwmEKBKKfR8vcQnn5Tz4Yf1PbQQVCSfh1jb2A2qcFLqc5vJdNG9hyExgphLkhwiHNMU73j46eA",
  "key5": "FgJJzGwVQRdxeqjmmos5R5eifS18D2xbTMiRShD1p6B7kL7vWqbqepiDTALaUPyPZZSbQ7kab1CGYZ7am6WsSsP",
  "key6": "3hJnazcVTq3AsNKoDSHZRs8SxiHD3XWMjRyUTLEMx35xGCWbN7f1Uyk9hK5wuqrGGEbU83EUfoezPkd2DQCZFdKu",
  "key7": "4cMzPCf2oq6eDCSG7oLWwE96UMAXucvYFsqf88MuwKSYxwfq1cNisYMFrH4YJT2ZQWg5DTz2jZoVMDL5D11s4QUY",
  "key8": "2dpiG2Ha7xdPT3s2EmZr9NYqrerma5AkrFitXcW4JoN8B75YgTnCQiCxjhqaQ7F7E4UQU3safeun9Pn1L2RB8EbU",
  "key9": "5wKN5GWhTVyk3wgjXfz4uSB65XARYHVuVL8Zm4TobhKfgzLdNTEhfQxWuqhLmx2umCY3RiWQYHdwdAeK9bgQmTnW",
  "key10": "5egdUBLSrtJtci2yUTjQLm9de4BNrCZDuCZwhzJ1BP9cmtWnHMcqQwW6dBaSuayyRN6KcDb8tXfxvVHVSQjrRqoo",
  "key11": "5oVutTjee8WzWP6LqDcDv1PFzGKvMJMvq6TPU4ceFq3zSHawyHEVNSEcoKErEYsGWvBkPAeJQRPkF54nETAqYxvk",
  "key12": "4JAjXaZc2oggrk5JkQcLyrzk16zDGP3SgmH1wbtij3qYbFsjSu3NeFf8NkxDbZWrHG5FSigYFx2VQsKvREJPKoBm",
  "key13": "2iLcjkgBCC4jChfL4doR4eSEToZ7zkqpP1rUVnWWgzqejrBsfstYvotwnsWDH4p2snZVmVGLA4iFSridmvCH3eUb",
  "key14": "KaCn5A8BQt5dZCVcoqK9XXvytdRPjxmu9EjAenMLhFYv9uaqvwHXX5Q1AQMKGMZLkVABkkWndcxEPtJhqrY4c3e",
  "key15": "3MAhrNhRU5cXdtTTP1fCiShBVjpZnmtcSyimLS3RaMqX3Hee7QFgt5x8rnCB8C8BWHjLaKh75JytMDJXefNgnyzV",
  "key16": "3URjuV5eNiTk4HySy9UfhDCaxxW9ENqQcGRiSWYmdp3uhMBf3xM6v3v54RP6qAE6jd1S9X9Q4HWwgPMbR27fctTK",
  "key17": "5CAVP6uXGUvgKJNUG5Bs3FqFmHkxFsz2rgDJreNjvJcaDsUMc3xhcB2fim8ZsJs3ypwUzLPTSdXtUQuXrSMPo4Ye",
  "key18": "tFu2BZa58qVaTfMfJoZJXbk96G7uyhDPtEGmJk2wrehy4MAkQGkfqXSpvHQpzAnUWXNyPqqcwjEZ6w327DiyFAu",
  "key19": "5WxRPUAUiTPdPN8FYZmU7WGZyXKhTQYzSNvBgYcTXoXK4MhMN5Nuw2pyTTmmD5f1AZJyqK6a4FvsV9C6ziNvSKjy",
  "key20": "22fCV4dJsstzjYeLGuHQtkiGopRNKPtjPq9k6Nu1A4dvhPgJQCpvcBxeAErDD2wr9HfrRV4DiUjwNSJ8zYTdVar6",
  "key21": "5SWggTjAdn3UHhPNth7Qkqq3zHMNVXRqPwmXbZ7VXZv6nmjQvMhZWEyc9c8or9A1xDNGBLkAcBMK1kE5azMWgBLi",
  "key22": "5h8S2gZ31PtSMP5ECLzuWYTRvCVgmXYcntLQwKAqFvbz9HrHZzQqdYJchDz8ESAiMBdVYQU3zicjiVL9qXxT84Mn",
  "key23": "2Rqf8PuXAvVKh65bQczZfgvXBuPdVEiwx25TiwvVBuoknaZuaTYaioYibbfjxQM37GrgzUVwL6Th9uTZDnWWFpiB",
  "key24": "2i4zqGHYwFGEXhr5EMZ8ztFX8TpxrgWPamTyzEcT71YPpDNN9p2nMcPqodVZ6UkHbaUJyxCYgQDjRc4ZgiSMXNet",
  "key25": "2jT67A69eoab9GXU3VxqtghayU8FAAs4g6YfomY6rTQLWiSHhant5muDNwhsSs2tAEdANmms9uT5EjPZV4ZMLQzY",
  "key26": "3VqPSv5xf7vMPxUQ9fe1kjZmjVCShookisuG21nDRWEkyjU1irfDMbtXbyenyVaCr3pNBmem4KeBgVZX83rkWYK9",
  "key27": "4DWCuAk9gmWN6rE9aZC7hdB5tE48w71pM7ayxmB4833quFdiJCRjvFdEk7Ah8dkS9TkhbqGzpkLNiYNo2zZDMAwm",
  "key28": "2cYvDoreBiWnNoknZLsx3Rp2jGbd14wxuJtEk1YFcpmkmFh8zAMD7ESNoP1beb5G9RgkmpR7emfezCbZQvf2ddFs",
  "key29": "2hdfbNi89v5evPDLkPBAnaXo3LCxngUpFJFchNDZPLkfYVBaWNd8XnoFvGTRxsXmc6ti4QFAfZu4AVMyddSefJDJ",
  "key30": "2vLr2sLK29qj9E7A2e1TRYTYspeSpGzu4UXSYUFYtmYfFUQdKt5JMkbewwBepfXqZb3zg41uoSLaZ3L1esUuZ21T",
  "key31": "3nTq9wXCjr1fsRG7EPxNX2w38gCik1UpMYuCj5dFtQz3qBCroVZRHK39XYeZxE2cjgNRabggbfFqVLTPHt5zp5FB",
  "key32": "5rNWQxB5Qw9MgA1eZpWKzQm8SXFnckQwx1UzfHHT2WDDGMUiwdBSLjUqiGLkBTX6UQQsoZ7JAKooGon78G8tsJUm",
  "key33": "wiDZn5LGetQfHCHuUowBuCh85aqiaY1V5Ncb2txGSs56FUMwRX49MSv2N7XMfh2oJF3Aoqq3VsPQzyx4ZCDLBN4",
  "key34": "2Nsra9PJRYMxAGyax4t3rNsFGFVPtzKk3r3mXgekB3etxpPAU4nkyRfNEpDe7CM6Cut8LUZrQhszExxSX9g2LBRV",
  "key35": "282o2nzdaJJs974R6DU2ChfpCHc5RXsMzgMp6YpV9Bobgh8WkEWoetE7K7C1KcKzvmPDoEBx97vWaqiHDbvBYNZx",
  "key36": "5K1zzLR93KLuxhnnumTKsGxyczvN2BC8EWpemBDZ4bsKsyicVodP6n68RsGabT2xL1yiWxPehbZhvE8MSfwEKNX9",
  "key37": "5SnECmFZiDBwWjVvCTNx7drdMc6FJcGhUKtbGNGkiKNsVSyR4qtJ9HbKuM4bPX86ervkYzVtxZvBocrpguGRmVTe",
  "key38": "3KZiwty8bJxh4JwCK669yJo27zEW1k9qAMJrnPqyiod4wxdrYwyqgG4hwXCc37oUpH7qWEdsBCnnjzLXRsjnFmyu",
  "key39": "4zWrdpkr9JLbk766wh7tW6qY7SWeTAXqC549V4bJrY7bgkXUBxU8FgvUCFdaxozguZ5nRFQrbnUbTM57t1PpEEtJ",
  "key40": "5t6aBjHddPVTsvrAZSE7LBtuXDN4oEiJRw19M8yi6y1iL2tGnjeV3BQ5186TAemF9AetrM4rDPg7yxubMbGVfvwa"
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
