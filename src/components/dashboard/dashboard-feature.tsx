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
    "3LbbfW8eNGWKJ9eca6obMTLQJ6me89FFhxu5vt619Php6jBeZo95cJmXssQc4xs4mozB15YncZWbtWkjr1qprRtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztZNUMzeE3sA9t3Amkq76HtymPzwqrz2kd9c8NAB9wngtryCmskowXgVwYRkX2874gH3p7R3H9ZtEjMWQVBrXwe",
  "key1": "3eVbt4SCA2VpWQNzFCLQYXYCMf5Yk1mVX1oBM5QPS4QJQzkwYKoWJEBxSPoYbxtryYhhBvXZCzvV5irRdMMpmnRZ",
  "key2": "3G95WahJN5fRrfwPPJh7GQokEA3sEtQ7KYxvYVHitdhgWDR6GEaNHQgm1WcAJngqjs6peD2nomTUcH4ecJRqNZAu",
  "key3": "3DfjvXL7MnRoi1DkbRevrZFdJ3v21Ln8w9xdzaYZfsa9qkXDgPspt3qkwDDKpmnBxCCRCAH9i5y6jXDUZ2T3Xpp7",
  "key4": "3vvE5NBP649jCQxsK3jCzFRYeSVzUBxhbzUg2SY56shyF8NWxNmsMaVu8mdoJuTdi9ukC6WK1w1Z5zyjFtgXs5u",
  "key5": "rFHkmU1VP4NJmx19MRGYC8Y5rxq7iJ8v2eW92fzDxoiCxaWEeGLahzDiEyYjjusN2vTWTqz3Bf5wh83GUt8PAt3",
  "key6": "4KxFVYcV7MKSofJcbuKNWL1VcT8xHZDB8ePaFrteiKu1N4MwY2Y8xdRf7BMc7cqdubTYTgVbq8SXQrDKzV8AYxey",
  "key7": "2tN4gu6d8DjmJwX6QZaqTEbDHF5q9JEe9h9UpuYPrGAHwySmY59DZF8UeCV5PngthwxywyZsLazSvFRZGR2jhLQK",
  "key8": "4GETgYN5o1kYjgrxFQYfcpQTfh8NT3mU96wBKKscZEZaiNqYTZF3sFbW9Bm5pucuSzTXuDnhdrYUnuCHqmiiJEZN",
  "key9": "J6icNjSyxybcMifdTJbMLXK9NGe29mH2h1uhHeDoEmEe2CGaedkHCb8yij1i1s3DcLX7skshmMjyNujUP1UtBEn",
  "key10": "DPFYcBjTakMh9qGoSJkPvhqbYJqLbWbnBKmpUGvUiRbAtm442nnW4P6pdeiRgVgXyX6nJ4khYJT6evXNzhjHRgv",
  "key11": "34VLzFH52FMHSg5ZyURgmLy92RxBoMSvYu8FPGyh6LMgQUK3KFKK5JfFZ1U9q2afo2LEuguGb3bG1WMmQRjXNj5V",
  "key12": "Ds9RTRYfTZgsWHMaduFjeSs1sThqBzJJMYi8ArFTCYoEQhvSkaJhppfEoY2CoRzRzWwYaxqqrF89sCNAg7QwRfe",
  "key13": "53YVQp844hmnyj2jXRW1VWvXhH5KhANSZHfaGyKwM5nmF4kgt5GcRSgH3wLX1LGzcBmsFeHNC3wR8XiKM8udPzYh",
  "key14": "3nXpPs5LgfX2vNJutEbmdg48hdiQS8UqZznoJXVz1J3kdkWzJvSrBSb652MA4dTAm4EdxuReE5nfcFuX1jV9Khpq",
  "key15": "3kE9ct38dnjxL6A2tpY3nzNUWukvfPbbRBcqawXgRoKC3wSik4dRLNZCnj7WgBsUWsutuA8Bk1E2SN1QqmSi935s",
  "key16": "39NLa6jdQ5psVwf6nmtSJ4mwFymNK51BBp3KNB5empdVVtQDKkq1jHrKMV3SXUGhg8pRe4a9HQXhH7MRKentcpN4",
  "key17": "KgoNT5rnjWLTgJu5J7DPhrcGBYnqQnoRcYAZGyyAYehhqHxR22eNmmjcYw8X45otM1uH6nt1NEF5CSSLBPBreAW",
  "key18": "2JNv7MfKE3jpbNXBEJ2hBn9difkbLMXFCSGBG49dz7uztfMpmtC9NrAAq8rtZDAwvRVEnJmrRe9u8vXk4pFJzcBX",
  "key19": "38QRHrshvt6B8LNyDqS6BEm1J4QAknJoCmEPb5w6qKtwS1ExDjuy5C68tCmxvigHznUhPpuGheWJJ21QP37YE1S8",
  "key20": "SGE6ueqdYpfkMqE5annMeYCrZD1gzsjVB1wBU36AhKWVtcBqXkkkHr1njPUZEBVw4DBf8BpiWT6s6pHiGk2gt8K",
  "key21": "3YQJA1VNvoRoaLL7whF8Z99AWUQJpppg3yo54scARrG3Fbyjq3i1qV64ryzS3MxGN6yadCb9e2VdS4JnkKhdPUdB",
  "key22": "2kXQFk5dKmPjkLbPwM2swVot8daHC9yGoeWSJjnrcb3rjzrcFdQrw56PJeq3mEKkWEX8KXwWeWDiPwJNF2h8g2o9",
  "key23": "2VBhbHJmGNy5KM1o1DvD2JVDAjtGJVfJg6BpzdD2uRugMvgkJ2xpxRi3qhTykDEWK9Lbhy9JFa1i5i1nS22NR66z",
  "key24": "3GSntY6YkmWSjF2wzV8uaTZ3n9Lm28WDTNufKtryAkET7KeqvSZKR61AZz2o15kWFmEEix3H3xDitsmDzK255SxH",
  "key25": "4m8GhVgpQJ2nkd5c5ory6bhJt2QhS9V9PEt4eJq9uRuxCcWAFGHd12ANboncF1kYkMWnCYyZ3oCC6a3pg5L1itEQ",
  "key26": "6544XoBSBJ12ddap8XaW5Z3PqdqnVLiaugAQXJ3kTYGBDSyDxkfqTaMopwncNLtMfP2PGGQBjhmatQjvEZNWiGzs",
  "key27": "5KcKj3ZQTtXyvH1H6MgHQr2t1BqbviPbMZCjT252W2Qy5HvifevA3ixyBQ2aFd4Y1eoojAtdtMBEMey927a125pd"
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
