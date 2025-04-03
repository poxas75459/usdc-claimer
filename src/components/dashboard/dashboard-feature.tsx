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
    "UWH7TG56ec4H8wzAHUu7g242T3o2PGJ6ZdVDjkygoZrutAqPc9nMCqaXcqezLjD1p24GsQ5jQR1WQvDutTzepDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45U4Sw3C7gnE1m2zqRg7998eLeQeDDKxRDGAfyFMKYkfinDUY1BzSpb5s9AdfxY7jWRQqKiY8uqCjfP7rBDhck6y",
  "key1": "35FeQahJhiTHyn8M2BW87sSphKL2UcV1oUHxfUiShd2nppoUTm1R9CoRE8ChMCvcAU3HkDTBCHnwwobic6eak14A",
  "key2": "265KCK6DRkUBu3ewGEG37eKnN7syZgcLRH56VRCuyvRJ5sSdtDNqVtM1Hi5qdYA7CDT4ywcy6jFdS6siGcFYNvNA",
  "key3": "2UjZodt25DHuC9eq9FkRM5rBGFK6x4Rjkqs6RsBAfss4nFnj8J4c5Tnpk1Bu3mEBgzwWkXc4BKmFwELo6ck4RjrA",
  "key4": "5m7gX8ZTvBkLPZ14yo48MBD4DPpHgZ82GUDXwvydEc4hDjZ9LbooF7BAvPNcHBaChYuCxUkCsV4xWA63KuYYK7oN",
  "key5": "55uWYT1FGuSgrnFykJqTAf5KEZtvm3g4oeE4R8B2kC3yrNakEeRETHV2LukGKhT6CdQQEJkqW2yG2xz3W8uoDHby",
  "key6": "44V2d1wqUfNmHaEsi1B4Xf5uFAsQSGjsmVyb3SBnzwoeVxfe5uifbYHZzs6pJDrmMh6sUJdpLTCSVNkKMqa76A2h",
  "key7": "7nJkj36b3tW2BRNUEgs9fQB5TZGaqf26Y2mkj8tWZwnKiLQUYvvnuEE5VthwmnDFyKBKjbUoucLohPRz89MPxit",
  "key8": "4X8TaPAARHokfPhXVZztUh1STJ2SDojjRfnermLdEoMMp8BXUkspm6KwEaQvX1TQJrxAwyrzyBbsm8uRvLwR2CWP",
  "key9": "3oDqzedcmrKkW6MCWj8XiRSYVzzSU3gBjfrJh45brwHXsmmG8jHLgz4xRn7gVuJauA3gwdikoGAzHUCddaB1HzrC",
  "key10": "2mwzxTTbkyAvwGpRhfoGfJRxv2Nih3JHGyg2gvnvm4X8Rf7y374MYLzR6hDtkzJpEQMUbSZzRBzWcT22SiEzD3Xu",
  "key11": "61jZsxKFdUtXoamLUGLnjfD24XzpXri3q17HnvyP6GQBXufNppnA3de2yGcqHDM2Hj5tbAQiMmjitg1Zy8ZudRkp",
  "key12": "3U7H3gzcDyCcTqZt34Yf1qTaLpckQGsPzuexfVrRoTU6wBFZymRpE4V3iXv1Htst3eofcxK3TZg7hKSWnFP2u2wG",
  "key13": "35adp1st8d1BB6DPmMn8GcUh4oqEks3uHxTyAuQswDHdfe1A6ZMZgE63B1UnEvitCrXr8PQeR1aJM15q7AHMFBjF",
  "key14": "2mHcUZUCYDiX3jVqtDgKK3vwDMHcQYcg6QLET7NsCkevpbp5JEbbqTYLJu8poGyG4MxQN5fSiCdz6gp55DouAb4Q",
  "key15": "47qnaXEQnpeo5re1QepkHeKnDshVEwUwC4599w7fKyxerzS1kceQpkdaG7xdSQ5osq9QSCHVPdZXtRxYkbiRAW2j",
  "key16": "2fmcRytT3Rg8gj53rCJcfz1dWuk1bodwdGePxdv2QF4PyQPjfnukXmuV37M3aTzN2cuiNwWwTNoT1bkrVCvvHMB7",
  "key17": "3XgRQmpM45pjqpSxd7sSNxf7VnfQvdPvAS9SevDhnkSVhLN8capJ5GQpoWRSH8ujsBgj4ZdAvy8BCxykMKUgmub5",
  "key18": "5ggiYFKBd4ERSMoGyAoyKJmUYJw2BibsKNSDBS28ktGZHHQtUGBj9W5RjPo6XPx3ppjRtnX9CZVDCXnqgjkAGVPm",
  "key19": "4hv8XkZKDEHgDh6CD3RRtdph6yEfhR6idRRoXogcXoTLJfGHruzbePvbi7w9BGByW3UduvKKbnHftUTYKGjGyhKb",
  "key20": "5G722ZjPYxqxY6tHEk6qRQctBgx6htS7NhsZaQtou2RsNj5q6kto6dbCU4xs6U1GFfuYYRain5ApZcJYAzd6mwuk",
  "key21": "2JoktZqjAhJ6rHvmXpNLdDzhgERY22V4khy5bePZYQCL5dvDefNrKW5YnbPfrWvej78op4gqKBks4tHh5sA6k1gi",
  "key22": "42eSnR1ujESzJExLnRkqxEBLHKH6ftqvPe13mn6unR6D1FfWNifkHd8CgGwurUurG8ibf5Z2dCtv6rK2Kh4EUY5X",
  "key23": "4WdsCr9us4obt2PWseS23oBr7M5SWRTgyZ8yjx8qbbAAi4PjPEuPQGCcMm6zUAJyUMxRqtCTTFXwPcz8vGzV5PzG",
  "key24": "5Lyxp7xf2S5KAUSPNsyh64w4kMfE3PNdPiomaJV5vHAjBvBjKgdCfAhEwwDR6i5irg5SBy6XUAG4K8LWmepewE4x",
  "key25": "33KVnt9StUBZE2mooPYP8PpAyMPwYQFSQZdFi3ScmaQSYbhurg4iZE1bxMSmLaBK7RwHJwwenfhRB1SP8PPxPZYL",
  "key26": "4aWVktxNTqZQCudw7XVSzWz5iwtxbicHTsbvLsZm7gNY5jkJEbFHJ5kHtggH3aKrkG9MW5rL7NtwmSmScDdKhmkM",
  "key27": "FhJpDv6VH9VL4VBYQnSqWmEd1UCvVCcKSmLiYMPJRoDrG31NvbKtbFX2RuVEkS5NEX2tKs3daLCuyhAbMb8vvUw",
  "key28": "4bKbBTRb3pjd3XKc1qVFD6amLGDgd4Q7rmaNv2QGci6FCBE77XBwah13faeFyqsa9APTtJqthCtRJnktNKAzQQhf",
  "key29": "3Zmw8UNi1h1f1zmobrmnpcq92ZJLubYLJXF1G8YZZDqG3ovJcHcwm5U4CVNLyEAkMYKg5zK9NnHp72e9Yw5HL2gv",
  "key30": "hPFxb8ZMU4mSuUySdPWeLcjD6QkMwuJQKtaawjdrvZmekd6BQkwfdDrNp2ceLHrneG595hK9iHEnJLt5PB9kXs2",
  "key31": "32fCJwyw1kxUurEvFjcvzyiD7LioCDX5q25uxrhSThZwXRvRorafY1FmAoMZ3XSevQ3WHcEtooz3xvjZBa7NkjsE",
  "key32": "eNptVVqAZAojabjsTyvXvizsRNwEV5SEHGHfXcNhHUnpxjs1oiWk1fVa1x2Eh6AsxwaWtfktTGeNWbsbLqgijZh",
  "key33": "54SYcDqwjakkYPCUsF37r7EbL3NbagV1ftTbDa23t8Ws1pfxwFBCvPqzUeZorP2CxFZCSgTKBLzgvnYZiJHYzbEw",
  "key34": "5G3WQUfmr8uhBszgazmMnHqo8hrmQbwb35kyFtidLaFpWED6LwpAEP8cNBirRcTp4k9gZFTZKGtpF2bU2yZPjnkZ"
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
