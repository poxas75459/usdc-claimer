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
    "2a8zSTZiyHyyGs5a7oveJbz5Cx5nmTNeL3Aj9mNv73eJpJ84PHAzFdWJsBwoLUXMruJmH5aUGAow2vvejLBdD36g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zmtpWEy2qAvYeGgHynUuBYWSn5M8aaJokNtMtJWzCmLK1zpdoFgnp3yMoJWPeHcVddNi7XYyQ5S7qCJHLZaiDc5",
  "key1": "4Win8QPPWPwVkMVV4MgtuBW3UQH2tkt4rgshEMpdQfpGtTJcKDhgY9GVf6x7MPrb8JHzjYYbwiW7Gg4RB8MEBfXT",
  "key2": "4Tm3gu6dJYEgDYpDzZWWiabsYFxXYXyQBzuDWHjNcGAJ9UHKzTUS3u7J9KQYRT9m4WFCokDV1CxEB3fC8RoBB9mY",
  "key3": "rciMKczhriLYDY4FD8BvAPoXR26CFPTBgS7KXTAQjET2XNoopaFMDBEX2DkMQGyFqtmPgNJ9BJcWLXjtEp9S3BJ",
  "key4": "3GtEbpEUivN5BKRh9AfNTTiwK8sy4SsGd8J3DwY8jKYvr9fxMaF9V9gWQJdTh81H48n4ta3Lpginnmd2Xw7LWvYz",
  "key5": "2XC2cPApPTn6TPnxow1EsH3YEe5GiBFso1nW2bvZ5KfAVjAinUv3rU9t3kd7QtjLmSCtbJAHJtNAE9eErSJk4oaH",
  "key6": "5JHWwtVy6WZGNq8vWaZZMzJ9vAoN2SQLyRi4BnpmkNZCeJTsUupePZwawR1S57Fm22WdnKjakS2u9x2zQzPoc2z1",
  "key7": "4aQaJzYSms5rfo3KrJCz9TQcLJ7xppxR35Yx7E6VCu5YnqdSXGytVrayQAupo7rKXNcrarEBvuEaTQSgiCtS1KGq",
  "key8": "2mkDd7VagR4fHrAcyp3oC262PJg2XCTSxK2yyRsgt44UtSjJ8JdUh4kTH4LoWimRGCpoZshfyiBytos7cpMiQZwj",
  "key9": "3BKiAKTpLo8oJz6H3TgS8ML9AwvFnQ5ybzJU26bQrtkWdTdntxLvfzHtEBM7xrikgH5MTe2EPsqX8jtoqvfw3h1f",
  "key10": "5YE8RAh9pDQdipCPeMaDMSWhJRqNB3mRQKSSV31uHbyPoLuTkUpAbMjYBzUNZB6EBdmZauKiqiqxw6ckBmgWQfPu",
  "key11": "3z8aXg8td11UeADf8RA1sWNYJ9Aj6nmKU6U1XzQsSNbkeae9He4Mo7M5KBwfLRis6P9X8V2CQsmrNfC965JStoT7",
  "key12": "3zqTT4y6otAC2FYHMAcALWqkxeWHzPG1SZR1Vw3e15fabgrDHW7vTNSQR7v2zK9bpPPtDgBj6mYsLFLU1FgcJLc5",
  "key13": "42eYeQ7WENZdhpvMr1g1MxzQ2W15KhWsRKbXruK2hdixvYuoWETvrm6mWU6rWLTX4LG7fBb86USLCdp593KmCX4r",
  "key14": "5gdUwWDcC5M7F1taB13M1gfm4x3pRU9HS4yZZPNpTSjs7ePZ2iQUm5BLZ9WNxAjxCg7HHCSwGLLLoVKPXqkzuHnR",
  "key15": "5BzRcmU9ZPH1SfdJQRoNRf7ABi4zhf4eR2B58sLt3sTxYpBrHRMwJpjJrHRFGdCPp4Bgx3akUaZPVLC2VjrvtMxu",
  "key16": "RHYVn3XVntbXtqz7w4otKgNzVzRoQcog7wSDRRE5SpUoMkPJEoRtDGhu8midGrf9QoQDRcEnTojnsHpjvwh9MxP",
  "key17": "2yQBeiPS3HL5QG8NB8VDrHBL1xJgdwynCd8z9gpZxfVnwuAnGK5XEFsbGCcTeKNB1zbzmWk5Yd2uYjNnv2zrDjyQ",
  "key18": "2tg87nvgATVeRNoGfmYGQNbPSRcGWfaxFRhP71jaXLN7uthhG7EfiN3ZfSGENqqWEkeNc2QbNNWbGhJ38JU9fpXL",
  "key19": "4zSf1afw8GzKxdfswX6aXnuZpnTiSsdMH39JdWFfwYa5Ek7zzA2m5PZj9tscWMYamTdeC3RPdTT3SMrmXuoocN3n",
  "key20": "4eGyqw6E3XGphpWamsuJ4fPsEZss2ZJFU3bBG1PDeRcuRzjeAwBuLM2o1N5bjbbwYNUPGzxZz1P71w2e9JfFoRhd",
  "key21": "5wHiVmirTvkCsFwsV9DtdN3j7XGS3QaSUVckbkCzJYD6WbYjb3REWfB3U8cpKJQujXdydvZgL1ggjVFVrYGcxqBZ",
  "key22": "3ZpaCvhoMkqrRV4EJ8PvFmpeLKKKgskpVeFkuuJx3N2QScrPhrjTqFazodD4Q7u948DdLTFf4VBuSSgtPZk4Nmn2",
  "key23": "pRrDRBLjZUJ56ufpV14kzNMkm9zEVVhHxxDHbJPhqQ97cR6ZRhT1fidT126WbTNcehMyiZv32D1K3xXYAmmho8y",
  "key24": "4sQ2hhA5jSqsXT22FgDKBtL4ohQXsJkR4r1MWAJALjWX89kZhp9YEWw5Brhbkpmj7WL8dLM5yC7zPcVJKjXYJgZZ",
  "key25": "38aoEwcLfCyBtEw9gXp9Cw8XBgTzBwdcFCPZ4XC2xHVkoZ9GFdWLeFfpBoBYJFQDFujgpNmuY8qk7xDeeFjLvnnr",
  "key26": "3DYsCn5QUgEe8oPZuwzQhdcv8Wd45sugbaE7oJfCQ8Z9Xw2YXvXFBP2EFkkGN3mbdvVUckZWfnvtgAuVJQfdXt2z",
  "key27": "HH5RcjfZJ5mmbwUxh1wkDv5dRy6jS9tx3WqXn5LF18BHS1u7Xgw1MaGvQEWycyMTgTdKYFHfaRCKa56KiAHt2A4",
  "key28": "3uZACMnGkX4FK5ymdE5Qfdbp3YoBHb9iuEq8Dr3bjfmXES57tmqx2kfzXKdqBtoTvjfmuYvk2HWLyE7Vt6tVwewQ",
  "key29": "67HDvTu5SvFTL7MnUWMbSY6MY9MRJeNuq9Yz79ho1kUELcLtJ5bsH4ygZGeFVDYaxFYkF6kfUoS2h8E74SeSzaHg",
  "key30": "5FQ8BBoGVsxY5V7Sbr91ov7yxFictzNHoh5j6wgpMoLB9o2btnFgzf3QfmNWXxKhxDEQwexXhCpcUEBEzHRVXuDZ",
  "key31": "bdMHR7FuZ4TNoJcAwnQmbfMspNqdp1dLuJobFVN9AocmbwrhdsmP2JL8aKtSPZVkYbfKX8MMshPhGBaTAJgDApB",
  "key32": "665wChqYBoRJdH9ANQoXUWHraXccRQT27m1qPmsPhQR2NpEi8sf88oREtjrUttZLyBbff53jEsgHwycuAsV8eV2P",
  "key33": "4qc7CjTdwYtyxnAXicxCdm18HCey7D1ztJQHpFmbVzJZXDYm9dUB63XTLhPZy7Ef7VxCxso8svNoDWxqGfme4ZqQ",
  "key34": "2w7mbFft8TTviqzXYy9SmxGepRQrujjeVuinps4dkguRtekZkci22GgYt1BtzzQiqxPC4DRojof5bbVReK641W3a",
  "key35": "5yrnokDjsVARCGzjTvGzXUZoHMViyxHocsNEMs9FskuHqLJYkkVJM7tTfRmtgA8rbz3FPzV5U6STf3AcaMyBPNGJ",
  "key36": "GYTcozPrVN5CcMuEprJUkfasxomNdmBQfVbg3vZ3pw6pASDLc2EgSJQHdUK87Tb7daA6vi4pY8ZPon51VbYN16Z",
  "key37": "SZQbZhgJwzBixXQS7CFATHx8gk4cqoMWh4hEYzGCqGBFBYpeUtwVCe3Veh1ob7P3Ps5A39eHafHDGp59quzebUB",
  "key38": "5pkRPow8pZFBcLKWMeNbQ8VKSqCFfJkc4PVQ5fiJiW7RwPJYUzzV9bnWsXKG2pe3f1JjVz9XXPL7V5YUF5MynQQr",
  "key39": "5d48zyMnczYc3J1mPmkT9MNBHVEuv4k9N7QzWEripYS34YrsjctqAGtwN3qcBuvMnfhihGDYMbVbowyCDgxL3Jmr",
  "key40": "5BWbzyNzUbb5PzDAHuRTj4mtZtJTvgM72qFeykD3euDNKMoGJgEbsatraf2D2VxMtUCMhaJ39ZfYsgBD1uFp15dm"
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
