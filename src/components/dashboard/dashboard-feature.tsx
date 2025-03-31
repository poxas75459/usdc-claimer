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
    "cWZfwxwqx6Br4V4xq3CkYMLD1PgBAsis9k8rTZhhu2Hm7qeDwU8rwSaRtrzjt3NnrK3hKFUjVenyWGXEYmUjA5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67qv5MyXwJpJHEUiSihj3tca3Nz72h6Jgb7uHrqGxom78TTPzk92AbdsC3gyA7fXbA1qjSH3e48pnLwZGpiQf4HL",
  "key1": "5S3e3udsfBvFvue1k3EkUw9EVnUBnVqPozukybhJZZavEA8xAYDK7oBQuY4UJc9qZg9pQRh4D6Y1SFMgGjdZ6DCQ",
  "key2": "5zA5TShJKVAQAMaAUPTvTmctDvauQNo78yhE6jtLFg38Mqm3f17USyy9NQZLCaCDZzuNZqMw9wZ4ZPigmfaAinBV",
  "key3": "X1q8H7SQbo8YAC8bEeMC7pCKo7hfWX6n74gz1QWfZUMaoVcBpmjmQjEeNtoWmxZK54RBKqrduGFGvkhSTsdsZvo",
  "key4": "6AAZNzXQga91svzTNGgAd8LKG8YR1AHWLhbCAX4oUu11wAbJYjw96r5RYvk9CvbXh1x7VL6TBn9DPKHoXPorgmP",
  "key5": "5WgERomy1YxnWa9K6dJsR9PjhMCWd5aCHLSSYZCxhSbjrxh56VrmPaTbn2y6iAifSpG7NVnGyrq12TAZFyz29nJk",
  "key6": "23tStHKTiETztu6JG6XZ1syFCnmvUe3XghkSCnt1NAdH8oFnHf1AEE6SF2vVe9QVMQE8kGP4p5rUX2PL7JhWyDVW",
  "key7": "2Zx6meYUE8ZG97RTwvwEUKVyBKPGgSayynmyNwMVFkbKLDSzqaqwMEi3FiR6zADzEbc3nUqoo5GSJL91zo8ZR4Ym",
  "key8": "4DqL1CvJKoXpCnqMRskWNmdaLEoThkfcYbrBWgU15EDghQ2z4kupSsqvVkkXhVYrweqCEAXe6LWZecvYuSZmCnRs",
  "key9": "3ruvZ71hvFgSRmbUmEmaPfTeAqSdBXhwptHsJFjNjaxDwmQwmdfPXCMu19ZT8TWARDcQf9QA8xD1waWkCjEq4z1s",
  "key10": "4aYr5TtB9rZG3rUmeBX95uaUFiz8apkXVbHZ5BYwbun6CgubWLNxVhEXWGWPqXYYaXrMbUA93rLXRWj1op1Y49mw",
  "key11": "211bJUGqujMPFHaFrTCowAsZZxrUpqNGrXvUUzQtCy1db4Va1hXwCNAV1URbu231qc3LyHC8QCM6AWgWHVQhbNoz",
  "key12": "3QzCzuGQM9A6CZZN6fiDmoDTANSgEh47wFmPtiqHMKeszU4KCbKfvj7NdqA4pzbj55bBPedDBBk4KYDuQcubCoQN",
  "key13": "5oLemmnde5J49zfFv8xqf8GnuT3betEZhfBGMYj9eKGY4awkDAzaxd6gXcd4jhW9w434vdX2pKUZd4KCFcox4NK6",
  "key14": "3UxekPqfVy3bcYVzRmPLDcdkWsxe71pxpHN65ZejxfXuHiRnX6yWcE7JYYq8xHY8q65P7CVtsa9zzDCtmXqPM3k5",
  "key15": "4bqohKgJFSM26oiamCBfJq1KDv2FyL3nRix2RZP1VbyStsMWjf9Rpb8eA3i3kM369cyvbgR73v2hYoTzCp1zWAFy",
  "key16": "4ZeQAL83C9uDvuMmMnc9MUUvX8beTquH1w9Gwdp9UCn3P7xEXsADQUkAk5QJkod5QxViRn4uNnfywXexRjgSYtzc",
  "key17": "2KpYdNDYCM6zR7eaums7QbczvDFowsCyRmLVFxh8cW6xqbrY17VaGyUoQrPbkAvqywj9fwrDFkEy1R3hWi33TJrP",
  "key18": "4PpSD36Z8QzjBkpwJK1ewg5yUupkLjnyLV86duR91EGEZ2iNfr9pYurrhNUuaPTCwigkXzdY2Pv5PYeMq9vEDMso",
  "key19": "Hr4n2YmukbnhWbp4eLxscJr67yKBM9enktv6cqo3tS2tCtqHEo4HzNCka8xba4T5UGFjpBp4o35xF4eGn4AfNVE",
  "key20": "4y5LWQNa4zjbZvdQ6Fa1jgkzWC9MR1FUDN9hzXmDDk76wziP3hGW7ddoBtk6Q3kF7bau13Vw5MzMvVzDanagoZVX",
  "key21": "qLqwFqmF1KUeCGYcrrNQpkDe15ivsAVaQwVDeUP4Z2K348LXBG151N7P8kh1B1hBBKJPoAeiefb6XYmPE2CghbK",
  "key22": "3hvAwCzVn5tyaTDrLYUdrGcMwcbMBfTHVAyAiQPAXrjYuEAVbDHA94bETzsjVn7HiBq9rmKznhcRh5D8h2foNhD3",
  "key23": "21tW8V2WLNb11tcGvxT8Z49JGsT6cX8jNdKLsw8MBDXgqJLGePQGopGfeuYr7sq31kUmSeCrqx37FAXLYhc7J3ND",
  "key24": "4uo7Bmn8gZxtDFyuoqjAqTczRskQ71aDrmN5xTf2jm6QiGwVxJ8GTAHzwvhbaJm3q7i2Lq5brMKvs7WqXW5vwvcd",
  "key25": "4diXQYnDNhxgTPjgrHxitCrJp54PAvam2gubuNDRy9dUPA3mavAqfwRSxMd1GctzmQ2XtvU12oCpF49RkUyxYmKd",
  "key26": "43vwnnoEiWNqi1AQqqQ53p2dBcReA9WcgP3cnmfYYUEeMUHSQgeJAQeLy2xSdohhD7YJu7gDRUyv4HNm2cAW2C9f",
  "key27": "4HaDDpVf3aM3cFqyKUMSmvoxnxnaPZVgAJQ8rwVrunjYt2fvwqnY2fya4XDKUQ5z7unN5jHiHsAkcAmKVz67LdTj",
  "key28": "4BWfjppiaauivgaBfnecVY27mwePvKKgprdyz82RujzLawytBh6vh53Gjo4EAhqTH64xgy8z6tsfpEknoBdoy4Zw",
  "key29": "Dm9GEvVeTTyNWuQa3MteHcd7cja7dMbeekCHNjXkS65VbwYDBij4UxhMJU2489UpiJSgUB8qAvZZjhVk8kB2wJ9",
  "key30": "5DZydNsDZnHmHHeyQcSAvpQW7q7FQnmTh93c6LpqTK5MvZc5r7DfsHbvWyvGSkVoa5N4BoZNvf9YfNqWp2JZpwpf",
  "key31": "56KZ2tcKGqc8FAPLKAWCRr38Cob9mzNY3URLeAP246SrDDXkTPUwURiw4VsNovHgvEmWzLkEhVNpLXZBWUruHFo9",
  "key32": "3xmihBq4mn5xfoYgxXUYVHi94rKWefueGgWG1gm2a3vcN7xDd8hZpVfXMdvt77j6C8mrfEgZBXoSVjhArUFRHTCZ",
  "key33": "5ABfm11WsWcZX5KNXvWm35bZ6gQxyBFUm5RKU3nqVZDKtF3CsUydwHw62yZajaTNxqbmqFCrSZCibTt1cPxtGaeD",
  "key34": "39M69zSy8k1zsR3SBQETzRTSXQfFBvGbjVgDMSr1rWgpha1u1ZyMmevo3tT1N5SnBKXdH4E1KgPGYTmF2MKJEqLX",
  "key35": "MfyDjtGnkG5uNTiJZ99VQE8MX7w5MJjWURJDCnUfqCDq53gjR5RvsD9a4pbcuc5m29fPEjUWtpf1kvcT2CGqskH",
  "key36": "4Rpyg2WgvebTJgk2s1oJFFeQRBs5aqgaG9kRxdG8EUsP5QcJEqeRWefMcQaf1diEDcj39qDVLfLCE66JFM2S52hD",
  "key37": "HqRz4yxGjHbtHamARQra9NFPK4VFDLVWnP97vcHP7vi32F99zQcesBmnvyaBi7D6E5nUEgNEaw69Tq717rCvuQE",
  "key38": "4daDAhrVfg9CAYyHCYK5h2QLDhwnhZXipESQ2dhathgx4ARxEw2vPPpqm7Cu6Sfsrp2Wib2kU5KzS4y3ND2fZ8WR",
  "key39": "2JvTFCBY1JeN9xeBjBn5iLTmYjp3cUg4pMWEugBQXkZtEbxzr9Z1n6fbmYrkXByr2FCV8Hst1AV7iNn8a8wGXkP8",
  "key40": "T5VTw8jNhVHnXK1oD2vmox8LrVUrUFe6hdRBE4c4Rtcip6k4pckg6aKaDYkzvMZQPJBearwfDZBDqmpqPBLVQcg",
  "key41": "5WHoausNnqSfwzjPKSWpvv9FWytu7hD6g8P5WoJ6fUVP2yyJDiUD6z9NyjnhFCEQEfdVZMmSC3tLQWwTPZDvRfZT"
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
