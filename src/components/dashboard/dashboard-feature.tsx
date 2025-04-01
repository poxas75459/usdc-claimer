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
    "2GK4pVuqv4DpsRXiL7Cap5LyEuZU8MwYUYugUuLRyt6TPhvdxTbwYjNwPSLDVch91idmuuWqYjGdksAP7Qk6T3tB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q4oreXvN6a4hNJDT4TcbNF72rNVvrdwShzH7CAdhjC1T5CBZb8MdtFfvbyHvcT96XXp9sCFzgwrywogbbmdNhK6",
  "key1": "5mh2VVFm7nVCtX8PRmNFzYo3jdXNokY66N2jWjrQ2EtGYr6a6ZAwwvBrv1xPkuZwRnRVVqiVutfYm3AFeJLf5fQe",
  "key2": "3fYdmsYCcQHu2x8e8YeKi7w8zePhZ44PgVYZFB2XP1D6xyw6J1tm77Lq1hEUJudEevPDY4LecNE5bakvHSFR3AZK",
  "key3": "3xtFNYDf84n65eqPpVXRi1eXb9uuwVEvhm2hrZYapFmSxnz18Gf8cvdVfhvSm1ugdrATrgbVZcUno1BU1mvSUxWe",
  "key4": "4B3h3F3tw5fDdXAnE1SHWPR69zMkYneQ9LMUg95NazEA2a8SCxBurZNzLHaSHb1BV8JCQfwi3zawuh74T2WNz7S2",
  "key5": "2ALsUTCPYnDms6GaLrfGd8MUmNEtkDNUC6zCLLpVje1PB5uuEzrkaNUu6cTX1BPFRnkXghkL84hpnMXDcfcybDp7",
  "key6": "jgspazhXPrJM2fbQj16HbLoiHq6F1tcAUWGmLWdJQiWsvsb541Q5zUGPcbfna6JFBfwv7bE4dDA2UbJH1GNDQEZ",
  "key7": "2DTtDCgPRgQUCzRVTXpgoM5q9issLb41Mp8KMRzCnNnkBVNc9SCyvSzf8CSS6sgE9pKAQg6xTqVEq5AuDB86Tfsh",
  "key8": "36ZsBdzmum2NLEFmC4WK8q12HrH7KH1CmEjcvDtFZQnLnzFaKZmsuzvYhTrK2MXCmuz72qSso5fwGLHemUsM5ybo",
  "key9": "3mT9VtBVJ49gf8fFeeZeVsimCuKnt1zYPuyMxKrvYmeJtydFycovYTkPfZ1VEnHxb7vhJqRSnytuQMZxDRENWZQ3",
  "key10": "Mf1oJYHjP9fukVYZDLFJYzkFBv6fXBUgxFa7JMkytPvtvU5shxjMavygT3kSd6nHRERtvvdXFiRfs1esRPzawdn",
  "key11": "42AgFJfqKwS9hpHkKyuJVo9vgvPB4niv9QgTECzkrDMJgPoVjZJwB1BQLyDbhQT8EGj65YZmE6V9UWWBpLAQZHF7",
  "key12": "5sxYCwaFU6n5fmGKtLQAe2u9dr2LxhrsLWEvCVdoHwo8RRKDUfuuUBNjwphn2yYVyqYjsWk5FEVVHTs4u8EZwcB9",
  "key13": "5RW176JCKik72boygZNfSYkd4FWp5twfpg4M4phVP3GjHDYbbXGadKzSCjaLWfNALfDHXcHcg2z773QqVPdBvbfJ",
  "key14": "UinrUg6YK7SuqQL6nZ929RMawLFpEWYEuDg7bPWjZtGep4BhLjtN6FZHS3LHb3w42WEFwrGjmLtKJ7UBdUC4Q9G",
  "key15": "45x8ViJf4MVcAhBH4xvsDo6A1aZSTRvMK8qNzvvSukP3c21AdUDvDL3johW2tCvwExadfFzrJ2NffirDBjU42wJq",
  "key16": "2GLoCUfprF7p7V5bHjENYRZBVhnkYiTYMmiBd2bt9ZLfXqXqxPLJnCd5R4uwYsQG6r1vi54q5XSpu2pXVJ88onAL",
  "key17": "5kpWbmf54SjvUfrSWGt4y6TkHyo2FaVEUvuvjoxgM9k7NW1cyf5Nhy2PogSA2jNPa6rXB1uwuMo8pDPpnK4DwbHA",
  "key18": "2q5sEeAMtJZvVb9dU4MvCWwndq7xELgbPr3rS88E4V1ipAze1ZXwC4nYZ5CEXrPP1vCwibyBXzHX6Lx7FGUZUkQ1",
  "key19": "2RZBvnsCw7yCSX9MebWUQabLZjLNUzkKsQNtrPLRTLiPV5AkUjWeNcio3SvGkQSP4U9w4igfQALdisUgcL1KEXXE",
  "key20": "5WNsqHuNXrtWAGZ69qHs9ALqN2tTw24XB593XR3QS23sDVJuHMUMvAmy4SXJEtwPpfpWz7z5MhfQEUVkEiBNvzET",
  "key21": "323uFg7sb4fE43FjJinoK58qcsRj2YKGLt6JQrjVfm22enqJzirnfYB2GFWfducmAoqccDZzAh9qJrq3uZ6UBavn",
  "key22": "291JtHfezTNZef1A5AmF1nE3nct6JseDBVovDcW5GiqatR28EFnDmAKE4oJ6hjZt4L5BeUCDbe9hzX9sggM9AtHU",
  "key23": "3rcXSMw6MKL5BPxRqtVN9RHpgUQ9TtprEThsk2PV2bo6TgToqtBsThRhzHMirxBYr5mPTYcamNRNdbnW2n77uWwj",
  "key24": "3M54qfo1xZpdqghpA5YJmBqoQJtBV5hd5zv2o2qHcbwjTAzpinRJzTSQfup2pdxawZ7F4WJAxJssVaXLAiBs8678",
  "key25": "GcJsyT946bXCknaWDanBR2S5xGQSrTdPn4exNDYniAVV1kDv3kFHhjc1rC2i4vsmWWCvMCeecynJNmH2UEvb5zZ",
  "key26": "2wbM1YVpTQsbSWEF7Z9TypwnF5XW6cYvGTKhAoQQdj2EspjafdA6mvCwtPvVd9nDtFNmZEhehZKqfdM3hGkwWTyn",
  "key27": "5NsBW3isa9HgqfoLLm6TJ4QHEjaBxvm4UJz4r67UgNDvsg5oG88vKCfwsrUcPEvhkCyxNjBdQoZeQBkEaqiCNyLA",
  "key28": "5P6aEaLCf1jKHavqpuKfMZxSo26HWuY61tuuJyvVUXDGcghBiXee7e8GWm5QtyQeEsvk9b2GoxVLAhVNTxicQZ9F",
  "key29": "5dpD6UVBkFYv9a6jyxqEtZf9dbTLLVPS2tFgS6fMqnkhuY4Jux5gkafLnPGnGA2gyLnNnktb3bgJU3LcjKo44mMM",
  "key30": "5KUFcJ1kTtF8QiS8BQtUVcBD97T5rnaHGdA7fbw3qFnDZHerCiZfF6kGgv1Hvgx5YpfKMc7ZsQxGqHMj1fdC5F4P",
  "key31": "fsPoSWEM5AYQuPVPbnJB8wYycNtP2DtuxisB63A4MCZFDxHGhkgAHiTbBsJr42cGyTsP2ykgp7bJtMQhszQKUHV",
  "key32": "ZtcsGjuWg9M2goad4JFcYkd3tH48Y2jf824NANkXAYgSxHtB4KXeMYQfQBQxxJ4sXLCrW7MsDNdZG9mzNWiKxqH",
  "key33": "WGhfQDogSLU3YnArhUyV8s5YmywyUUqicsoWZe7jE9PGMpEiboeuCotUprUjHsAa2x4AAC7wTs6VDQzMksgnCgB",
  "key34": "316Q7NjWS2AdTzFhW2XP25xk1MfxnhoVSYxEGQyrMuWdDWWbYh6uJ5JLVJbu9pR9BZWhdAyzfTu49Vh4BTNxU9SX",
  "key35": "A3CF4mwPFncZfmVhQNPmEhqJCgQYiPAnLKQb4RtzGaCNxc3LLWam11bT5185yNFoN1MixgJzVWWuYqm12J9QHhm",
  "key36": "5oUa97k2sQPTWHST75Sj5UFUUMq5gqYo7qipabnPtQ9qkcpDgpX4g5oDrDrX1Q8vR1CrQ3zVtYNthNoUWRgAfbeV",
  "key37": "4ZVihQ87Mt7Pk1aF9k8yFgapbox9LS5sHuate8Nwjkb3LQgbcKdReGbEsVhg5DfDzUs48RmUfXYwihAiZWrHfBgR",
  "key38": "5Fz4NviGLSLvrYRKPYLHR84xQzvGbMA5CmEC6zrNBWm31bNNsMCpzjjCAawpEHJa89Mp4Q2smbF4FFQa8jsaEgwv",
  "key39": "3cNdpWMk5naYc2Cv9jf8ej9JhKjLdYGz2rd3QPsq18enRnGWypJY6MLpkjoYBZMBDJeSsndu1bxTgvYtqGh9UNmz",
  "key40": "5TZS76zbShkKYWrCBtgTAdnEku6BarTnk1szLMjxRkW5sbcXVhW6X4mHvBaQoqh7SMrkCBGmBKT99FFxHphpdva5",
  "key41": "3xdFeUxFCgXrd6L6Pp3BgNU4jyDm9TYcRTque2PwtgASyTnyorCBuPrpSoL8UGgrWybPtKQRtt1jgua6fcBM3Q8y",
  "key42": "5gGQZpXGFf6pKHd3UWQ5m489RXkMhahnzf2Dt1Ao7Kw3fvufWTrY31pa4E5TRtu1ALEHkusF6P6DhC1jiLP5FHwF",
  "key43": "4npMSDeCiE8hFgdew5Var1piay45dY7maMeCJfrPhAWAxJMFvxz8QSSpxmq67ZZmhtpNWZKTCSjCHMYkgC23fxtK",
  "key44": "44eXfGEUYKde8J7TBzNYXFtgpQNq19Vqe3GysRPptaDxLNThVLCQXMskJFtDeG2LHdoWkLj1kF1yXg4RnbKfycMX",
  "key45": "2fvAhdBtcQJzPXEh2MMrj54FM6TN7WxuZBEWceaSjYfowLUrhzWZnuu1NcKRaa4Dkjw5nGGp44SbpE2PZoGkR6oP",
  "key46": "2Kmwdx2GapEvXsY1figCGsXNz8HWmVsRxQ2PKnpzYJ1SiPfF43JxgByNzPwkBk9jVtuqHsY4sukSgA2qHd36DXZN"
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
