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
    "2TXJpPPvvs8vhx3eSqcdvxLa9CafEykEyq9aAL57VwXbM46BV7S35kTXQ4HRyqbXHtoGxnLHiijREH556UQfmrvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mR5xtZTyMGbtzcmgSfvLRnt9rHtuSZ3rAhUXj5qNSS2k9g83cuWB3fxz2tqNyXCMPk9eR6Ucg7kxcSs91kHztCB",
  "key1": "627YrVpx7eF4WWb5FAQLALfdR143FpnxnfRnYc3SFUywMSJhuvTQ2ZkoPyzgfQKFA6x2o7vTaMeouwB4z3BV79kG",
  "key2": "5kgAG2FELw33AUZ8Cmia6TxgEXrZ3SaSAjY6eWcLhsyt8J87BUJANaE16oaWG17QRtfyEYoYdWafqkvxJu1goveF",
  "key3": "5M6APxjNrdLVTiUs3xWdydqybxRTxPLUqCRaJGn5n5osr8XqYGw6USro4iLFCx3uDkJXCMYLn9RAgJBWnK25MAUJ",
  "key4": "4oWjkHFyJwzPa4UWMKyrGnfdYdPkX1dxxxno1CJ3WdnQutMbDbNraVcokMULSq4KtXYUdy1msHECbgWt4xgbqV8V",
  "key5": "2rMP2iWE2JrwQ76DYAF1qJFRW22BfU91Zzsb26mMeKYnQwdA32Fv3ddMKMYWSqSpCdpayo54YnizFwEHVMTrUCZL",
  "key6": "2yoTSs3MUXnfeanh1Bc6Ver3ybnDkYphbRBqoNjuVHAQp9bW9n4b5K12LxHMRNfChzTemcbvnGNkYrpW8JFNDwNC",
  "key7": "2SqXxVWjNNM5eJnSB1MuQMMxrebLJtXPkjjQ8H2yTYV7ExegLHx8wYp9HZmxNyaCGLh36yuoiHJ1zvooPHxksAvg",
  "key8": "2GcxhyTdoEJWCLkdMcnUjBBLWMDydzzN2kU9WzSKQ5Fb3uCSKwSvk3xM97VKeAYiDLsiEBXnFM56cDfeaTctZ12R",
  "key9": "59UmKbGDRqVHz58iGhUR97fKiFGovMBtxPsHQViB71rLt7LTKt37kQGoimVMkdR4gxrZPnobm6judBiyxa5pTB72",
  "key10": "4kTe27jJFjxv7gMjjUUSAcfADufTepwd7R4XRnwSrDVh8xkUjfdQuFu1auhcMs8ti9am6CE2VCKHKzQEUJXqs4x6",
  "key11": "3KK6tKGdFEC8Jekeh5irEchxmpYMow89J9tQusAssrckzB9xXE3xL5jjZozMP2igLpgUzCtB7LNvZ1LE8u7qjTWz",
  "key12": "8L8FDkNr8PA5bGn43AT4sBHfLAeuDBbUUaRfbQXcokDTBD1aHiDo7iczuFEbjJGCr83UyKc1pei2GdijASnHeUs",
  "key13": "3dd9xE1B6H6Gm3cQPJzWWSdmHgzFj8A4GMUZV6hq9fYkGd3wLZWEdsgaQbBVedLshTE8ZPLSeFPBzhZ2nVsSKMy5",
  "key14": "9AQ5soiD9f5UdHK8DwrxQcamLaz1bFPHLCkkytYezDsRgTedmUuSPrQbeRx5BQWiWFqGhiWDfvHds8X81wVZn6F",
  "key15": "3xWNPS6a7S6fjyVG6QADR12zuSWcv9yUeZrRMKfxGpdhkv3Md87MzLbtuNDC1yNWpYAMmtUDiR7Gbfn1Lh7LA9gy",
  "key16": "4CUt9QFbB6LAAjw2Wm4Na1TVYzioaMh7AyFNT52myLqsMaGHuzTN3GeWpGBX1jHunKEuFGECEZypcvbhe7r6wb5Q",
  "key17": "3uBBXGNzdD6CFjTf6GrAsCsGsm15w6wnWqZin2yqThZZxsK13bDhTp1bSq2M8UMkYVjkkxAj6rfRjhCzu3fXCEmA",
  "key18": "4JbKqgm6zuv5LQif7cNzDhnNmfbEHvTffPPrBM1TPhLPRgW3h4TznWhmewTM5L9qskp6kM8a2TYCEDyJ2UxMRkeD",
  "key19": "QRFjToKUtC2kSZeYsHvSi3hj6UWTQFy5DM7Uo2MuVyuJivU7gBhMwddzfqpWWGGBJxJqwvMjemx2Cg6qfw14qTw",
  "key20": "2u8pV3E5PU5EG9TWaKtmQwQgxcbvht1GrFFtyKMQ83RGxDL5khZPEwYmqfRjeP3MMR6GoxXvZtrtnSUH2KyKmx3s",
  "key21": "NeqePkLNyC5KrUhWd6bprY3BgZxNg9NuM72PScprhLFmtWaZsquycjMxkSrPUt3np73rtDQtwKQ2yQMSnvjpuPy",
  "key22": "2pLtkPAMKyKmmV3ffMoKQPvZJDyNUAfLcR3Q2aZaPuRUokxXz77qVvVQEzmmRkVYbmnabLdAg1yCQaiHwQAYYeZr",
  "key23": "3SUA2d3dkCoYKpHhp5wPBcNz27VZRs9eEVxNBg6KbrQJsSXXabXdVa4Cb9ZcPNkwjLThKqjADrmoezi7UJM3Afv2",
  "key24": "48mzWYLMYJdoXCRTYtwPorXXYb6nkmQfM4bhKTDzeWFSTUk43DYNpgHhTp97VjsE7F24TPE8cm87snmc3FrSXToX",
  "key25": "4ZC4TMWvG23Qifhz1DuUooPeegJa2XbTw29Kw4j59sZhKvVErzhfEMsYAJ3aCCmTGtiPQE5PvSV5tTBEQxjf7Bst",
  "key26": "3zhChnZ4FLBzSuCKxQVczEDhHcHhNod11TTSrURDzgMcfQsKi9sLXv3QLtdVxgwdcikhA9fzd4Nen3DGj3GTfgaN",
  "key27": "wMqbcii7erxMFvZ6tQveHHMyrz1qPqeVm7rxKhRpMSXS7fCihftoQhgY3PbwBTm1ooLRFYh67B93NowKnfh6XaS",
  "key28": "2tPbvy3dLovy4bedfxXhi9uy1APtZ6W8tqAGt8mHJhtM6oxKJAho4j88CDqZT72f7pGG9i8Ssg3x5A2DEXY2Y9DQ",
  "key29": "2qroHcbYTb9gqj8gWHoS6Zz1EDVsSKyBKXzr8fHR2bCFNUiJSaz5s2p89rDfBmvf8v4NHr4hJ2foCfyatPEbuQEo",
  "key30": "5yTj9ZH5ToJMC31dtU97X9ww8QWLMGSaAs9ceic7cdpDwmhtBgzM4hmbiqyDqwV6HV7jxFZqH93tV56BjzsRyFD1",
  "key31": "QdT2mb5p44TyNw7krGnYfrkjb3fu91Pvfjni5hCT97mPbYwwCLAFHJWiak44cmJaCfE1nKScpe5wNFz7Y79QCrf",
  "key32": "5HTP6W3uM2Q3SNRzPi5Km1yPWCpSGcThFdbNovqYdTaz6fDF9jCwKX29u9Q2SssTzWq1Pc9ZA2rDx6HefpPCZ91e",
  "key33": "4fJnQzS1ogfR2ZrPNYdF4CQ9y2hJ8U6eHEiicgV2ACwKwANcJqhaja1DBvKZJPAhpw1QiV9pEvPnsgJ8vUe6bUX3",
  "key34": "5ipBporqCVAWzKwRwrZAzsjdpmq4fNqtVSTWhhx6DTseBDQzaybNrH1nhGLwNYsKse7TfhES7vfUUacnP6hREUBw",
  "key35": "xGyY7wbJmaD21JueSwrTa5qW9DLwHfMsqgcsDbkTnHHRNheuYCRRMqWdk2uYN5HBYRdC4aCyXbMMK9WzTwn1RTE",
  "key36": "3A7YPFxkEi9MgEf2r1qi3kBfLCiPM4k4WEgUam3qJXB7xvJy18ESdkP5QqfLrddGowFxzDgchh1uJYL7Rgc8Dx7S",
  "key37": "2czWqmuGMmxwSkpkcmzcQJiG8FX5DMCWS6svpbivdVJADHpaX3mW2Wtt6aZjrv7P7FfWESPJhaMF3zMoitv8Unws",
  "key38": "2ykq6CFugPyF962AqotUhtMqvMNvzvp2fYts3KRUpbhHho7EnoepSSKB3vnpdCwCaaRAzjsNoXhVo4Xj7MaHafuM",
  "key39": "5EN2WGjwpXFRGJsa1A4ZaZi3XM3ncDLCRe8QoRjaaiTyKBffWDYJLpR1UZpdWRdBPUv76xrRXrvLqzj56qR5MiTs",
  "key40": "57rfAvzFSPN1JJf2vGvrgtZVSmovgmCcS5NKNfYhLXvqSeHxTyo4GrmKAwAZHJgUHfkiSWDU9rNQb4BTJLuFWaLf",
  "key41": "352NQVxijgNSceu6qbqiFYSyHad2PZ11mfB5gPhAapUBM25dyn4apXuvcmkJmAE8SRsyuKbyNE3FeB9DyFvawHsb"
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
