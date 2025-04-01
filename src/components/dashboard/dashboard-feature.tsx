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
    "HBkXGeKU6WArqypU1nvNLVt5Xu53rk5eKrwuG48WH1yoXKW7RW3PKzxVEc7cHo7ugHLNSdqh9cN4JC7PvceuQhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WQaKJKj4e5Pm9TUtnYXup6pMmBhQsnZfR9Q7oY3UtF1rHKAmKA3FPt3jdd7AtuK2qawipMPYHwkY3nQ3R8pY5VQ",
  "key1": "491nHP56mHhivPGxKWVPWJ5yJFt9uTkRJbnJiZXQTPsTCJ2dKU7XKMHjzSB9EYVTyj5nkSBkaaQhS238Sfh7oWTX",
  "key2": "5SreYvgWH6NGwcD9p4Pj7mEu6tsRdWbwzN1JCNH1WpTDTtVN8MqayduwkmVUoRz18CFB8HH67YHKC1v2FQqRVxZr",
  "key3": "2srQK3WeXdtc5Ya673hHNiRJtgZkabJT8citCnWKXBDBYNDpsVvMhgL9wMRMigcHuDaCPAo74PhPS53mhbtotNRQ",
  "key4": "3cLk5QKUMJot2sC7kWyuUe55FuLYKt5ueXE64hg5LKRPzSX4mosEUxqrkzyxdFVxjmKmLcrXWirgoLHpYvvBmgVb",
  "key5": "3ZVbUxEABafLfqHpbu7Bqx5oaV6aHYpjQUWbYbAb1Qtt4x6sWxPmdzTvnhXrNhDCdwKejbBRqvuZPgH4BXzLhLRo",
  "key6": "ptELVsffZMqRsBKH1RXG12GZboKPvxMBM2Xd36u5B2oYf8KxfeTKGhwKWu6ZfVixYxF9gZky4K5XCKJobczibAQ",
  "key7": "4PnQmU6uiZDe1vvmFEo4fr7c8KcHYtuvs3NyBN836qNWbQAdfWELNvuCeKXDxnG5WnEUTfFNKfwYQmSL6e2Cv1jJ",
  "key8": "65Mcja5gpodK7gVUZydPp58B7euPYmsUfGqFC38vW34zAt8xAzCZhhTQBtooy6t6gE9HDaRfMRTFaYkW3qidP2VA",
  "key9": "5xWyWFnEW4NqWWVYFZdyyry2qoo6K4jJWMYL6C6JCyCvnteakEth9CYMRWAGBSF3WgdqiE1iEQ8mVHy6XZj46SHU",
  "key10": "3FKj5rAC92bpeHCDt1MCFyNzCfwceh29H3g8Nmopg6T91e2WXC8bGtcBhG6FxmBx9rNCFjd9CXKGfAtHszqv8m1U",
  "key11": "LsyYPQrytYzPPNhrwpkUqHgQwtMi9DbPE3vebpxkczJHbfPbRHYSQrqrCwY5Ya9FWFD9V4r1vr7ao5VigeZAn8L",
  "key12": "jfbs5bPf6PMmfRhqufq4xj5uVJSa4eCzCR8qmSkNbBtq2o7aj9fwdHHk1Z9KpLiHNavcphR4g9mCXMAcya8jTow",
  "key13": "3bJKndD9kh35JpzTGE7CRjbMdhQCLQv6ZUj6qTrnyp3BbWtTz6AonGuR8DYMA2uEyjLZpudY5S4L3dbLKyoCGfHX",
  "key14": "4ojSVt4yKmazzeVwpf56WW4WAqp7Bnx4AWrLpYqtpayNKee9hn5PzLkJayDJZk3mfm3J31QoFHWj9pd7WWVWiLiQ",
  "key15": "2MhJKnHpU3V1c1iDSaoKwoo82eJxabxZB6QtuhAczjGyRBX4o9Mgs6CmyXvnk9ccJd2nG62He9pwKrw7Mt2i5KCY",
  "key16": "3J9oodugb5gEyq32MNMMPG12VWa14LHGJPfNYXMMcHXNZu2ZPhn7ouSQu7jxpquf8pcbruLWd7cXD4p3J7MwbooJ",
  "key17": "56kUSNpaT18qTfw3aQvjPDvuiic6wJaAkdiMPVMtVNsdazxzBNe9wZseteN7rTMau1u9qsRe92723JH7a4N1x84x",
  "key18": "3j8tf6n5tHvoLMAPNfzaX1ZkkgagJJtUwhpSYsf9mztVBy79a9Pw2neRPG5G5m9kRiL7Cp9CbW2ykErEW5mFiysf",
  "key19": "5N7ADWYdW56HyUXRUA1zBKzsSF2Q6EZPbsWC5QTMGHs7QjGv8ZAjhixeYYSqUmQ6HhfomBC87hc4VrT4hLH5a7qC",
  "key20": "4fLvhUkaRHpW4Jf7rK3HX6TUPyyyi6dXy2AFH1pKo4WL3wBqDtPWVoQFUHYPcXEcDjkKLqGeBtDE5NUStjKaxyFt",
  "key21": "1TBhX3EN5z8DpCDAVsD2NtAQnN8h6Y583h9atM9gJ8AMfmPY85njjB5bqkUFagf7Ugwa57MgGdA3PH4GqeFXM5y",
  "key22": "2oEThT4ZWvzGqzXRLev1y8LodAJvNMzqoXZ5AWuFQ1wq1g2wukqGyWJS1ppg9516cEwZA81BpFVJiVSLqCRm21Vt",
  "key23": "2vbKMMFCMyetXLGotN6tnCDZebgbmnGYNhkGSPad8XAoyhxBgPNLc84v9RiFxnxFpG2noAQuGgBhY6TVthWVBox1",
  "key24": "44hNY4p4XeKyompZ3fiBeuudyv4KQWKVP9kc93UNLrfmMkYC2wz8sgrZMfC4ei4SMaCTR2B4SeGKZC34kd1gfsVZ",
  "key25": "4R62AnbpRZLwH5cdFZ8QVQTTSKP3AASRPDGqXjS4ynefRbrTRK8YuvnjBkbF7m19NfhYoomQgmzb1bbVvKnwXJb7",
  "key26": "mhPvT1vokMbnUTpjUfvewT77TLv1Lag8mEqmQE2Jhwzwhmi44ubGieMnaSDcPSTsusBfd19RSjdbfU87nvqtJnk",
  "key27": "2ZkdqsgPa2nCLv4VzisQFHNt5PjuFi8BYFcypo3m5qDSNCv6kphnbwNdoLJ26NLkHJju5iaYeVx5RZfBeL5vZnDm",
  "key28": "2NYJFGqQMUiqk47XLnbXUZBJCiFoj4vLnn6qNbLt8kqy3hva5s3YWZkwjwKjPBLrYWWynE7upch1jRwqxsJDxs7s",
  "key29": "5imhSFEC5JoDm4U2F9KKC82gY36YyzqXPMb5gYrPuaKbBaPYbUayrewbKe3mWUFD9HVHkU8Lo8PbsKjRwHnQLGqd",
  "key30": "5MEyrZfhYCheSVr41A6EH2qa1UWDgLeUWvutqDwmhNRRZgAkzndLP9oWF7btGk7R6UWBGje9ytfJzvAhz5wrhxDc",
  "key31": "29k1ZQjxCumzxSQ4ZZZadAeJ8StUDjsBgPS2XNo7u1CWtUb9ThLpxnYCben21GhorQQG8D3ymg4psuz1RW8ivhKt",
  "key32": "5UqMLwssjtJ3McbCTn7SRL7V7keQCsZiPgwCxRzWMHUumNQYwdEkp4vZXFetWqippgjq7eYpPcaVip8r3vykB7xq",
  "key33": "22Xr8GwKVGdy1kfjuRgSHNSdQ7qckh1899fwyxzcQAawmWizWZJL3HBq7XrcrV2DayWLhQBfXqoXLN5Ub8U64Nqn",
  "key34": "5yYqeV42QSx66ZXz1cm3WjMLYE5Q2N4rWMVxvraY49FLqTzW6hYeMjY9p12L45eAZcNoqy8cFFotM2rs1QxQuC76",
  "key35": "4tLjAxciwRX571hCBsGshk2zmnFG5P4AfUvPyYBgbTjWCtuPwbSLq9uZwXffSNXJ3qfYGxAaQs3GUfWdVaFdHwCC",
  "key36": "28KZjcx8AiBHX9TUHbATpofjE6KrVmP9ALLCQiQkNhjE2fEH81UbfFRqkcMnTvWX1QsKypEwrrPbcaaXR6yRb33S",
  "key37": "4Ec6XPnoifdDB9dugi7kp5be3BmLyjx9hjo3N2VvmzQnTf54QjdRTPtoCnGu3TvgKeeLEdMTMnnTCzsmRnViQLCc",
  "key38": "3m9HNfGURqng27TWSJiYH5borvM5CEVEhASmxr7rvUzGudtd9LHt4zjP3W4tMsC1eWyWTQDep5Pm6DjnKcsxkKxR"
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
