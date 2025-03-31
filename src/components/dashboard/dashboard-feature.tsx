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
    "3Fq3exr59mzigKn3Wf2ZJqfuDw2mS44v3GYf4N6yYEZGx5p55y4tGpmp3ZtYCzStJEQa6fxggzATUYf9T9cyXV2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FhfBk39XEiJcvpCEhM8Gcw5q664uY4Nqa5qn95VSkJSuLtYBZnJBEdpGwGsEzkQWkx9UDKfkRTcKwErFbdAd4Yb",
  "key1": "5dz4DJqXyVLAuNUMJ3hFfGnip2KoNh2s556AqgfkbPCcfvFW9qYHKGW26Atq5V4zicuEvtDjBGF8uJJ4F12aajHD",
  "key2": "4FA665o2z4fcC5YHEWhJGFsCXHNF5kciqB3EGodmdqdJE6eqHFQ3J7xrkBZSSCk6By8376Rn4jRfkCXohayjVvwK",
  "key3": "53prwqMbLG2tt2vEs9cFafchtbjMyQM2phJoRnHGDZtuacpYyeQqJ9WDKEoPnFKgugHVQEzK5tHzt1i52uf5q9yE",
  "key4": "5Tj4vToQBxQqFaRHFVWZtWTM8nLxUAVG6cuWGtACW3g1Seyr6QGFxtoauNcsD1uicfzmrZ5XL5sa6d1mDpbTq1UU",
  "key5": "5hN9MH5nyKrT4Zf85YDYGWvRdUSMbe26La5WUupzR7MboTVGvCAAyWvoCGKtHA8uuG5WuPj9GHL3nZXPX86uTXEN",
  "key6": "3N7Ljr2KCqV3Th1R2f9dbqNfdWCTzeW7eucV8X8Rg7TnMGAY5PGxChe7uiZPZNMXrpxmoQ5HFRVvcKt63F15HGS1",
  "key7": "TyvuHZWmtaJwfDWr7QjAc6dk7Rc9booewrcLRyWnsxwddVpHv4zw29PRRUmQpV71fBi13tLmE1apTR4fpL1pNat",
  "key8": "4eEV22BKQJffA3GYYm2gsvMt3US1yFJ6GCn2FiSap3nNWvgoA4rW6L7vYUftHnwn9hHCLSqU6pjJhj8odUb2TwT7",
  "key9": "2u6aTMHQuDetLTRAr7hTfpQSLnZm2UVNTabCdjwaXHnnkNkGJBrVscjfTvwVaMFiYVzVCgyyRyvEA9AAEMYzYkkh",
  "key10": "2hqN2RP19PyK3wNNNp62E8Veia9PFu71BrRk5WCMpJSFqzDVRi6SsAG5tGe7TtTaSPHhuzJrR3rUf2hWPamKbsfE",
  "key11": "594JYgPEw9xReSJ518dQjDaeTyfeKwE3ConvHETgAvTS4DrLbugbPcGzgUbSKsZgwPs7xCjtB95KipHuwFvdH7iW",
  "key12": "55ctd31oPFQirUWcB5kU1ymmovQ2xqUAjkp4WzunnfJXGKuEmcjGjrZhZj6LgSXYd43iHwQyagDTuSYWp2dowEtQ",
  "key13": "4s8FVVzEyunwuBsRBRfrWMiTKAcCcmaZWWb7NidHTpjPdy9VLhg9ND6CZ57qSK64bAuBzpHZHukenGZVieT5Ga8y",
  "key14": "3eM8R9HY69jSeddrEKUTdcc4Vqnu6sdtLmnLb4KrnJaMdzAYdDMFkJbKQw4WFc68fiQCm34WNqv9bCTFF8G9gor3",
  "key15": "2PnMRyMGep9CumyVpg4NYrZ1Zj8dmR7SBm8xfqvGKigdkkDMBa3SS1AfLf7F2BQB62ZNrRRLN7btzUWWgRZwFxay",
  "key16": "3bb65MKyDmqMhgMj6Y1zF8FNaUhesKtZYdDPPdgwWMD6wNFNcFHrjV89JVYiX9BK4WffZmzyFmFRQr35y4xBU7ru",
  "key17": "eKDGJFRcnV82VUQpqnV6wvjDuVEgJubn8CcZqKwHA1ojpBijvULeDH7rTVfwvx4TzYT34EUtwUhpKtgrYbD5iB3",
  "key18": "GTqc7pfNuCZDGrM3Ur11G7M7oqu5s5x3LfzGk71hxHkpWxw2Ab4qBr5PprAMhomiSxvGV2tKZkUE1XaWW6W5wTe",
  "key19": "42Eq9X9VRxBSuZEtAsE1mQg4DwvzxgfQV6uXbBhx3f4yY4JZ2X471zBmfUvbA59cx1LjvMYunFGSAdRqkcghJPzq",
  "key20": "6hWzH32oHie6DeZSiaw7dzdfcDwBEeHh7jaGmsyhocNJkfjZrqTojdMZWQhAUvEzD62HrWsongZcxfSYr3E1eRF",
  "key21": "5HVj1b5zeHtzgBK7G28Ay7PXTx6PSdbGsP4o4Wsvr9bm6jWW3arBHSeGgkLH9b4EAkA8Lxtrn1EkHDgNpYRmbMex",
  "key22": "3D6xTXqVRsQ5sVbhYMVaWNAHNU7jM9bGhNNckRwj5jVRdeWxhYL1g6gifhVDLJx3j1SK3kPJwiykAFadHq686YWi",
  "key23": "5VqAbbVeJxctJZ4Kh1osXPSVoCJ1aRKT6HakGHgwLytqGeZiteV1m2D1rjkjsrikMmd49kqt6DNnk3Csfvpu81BW",
  "key24": "2AXwmoBYd6n6KvgkswCinPWPB9wPfZtjFS9DDNvmihqft8JB8gzwGJoRvVZSfr9un4thXx9Mw7AMCJu8kjGD17if",
  "key25": "3jrpPr3bhpDaKGTR1QmuGVnSE3pVXfh25nUDnga5PqpHAA8QFVpvUvfAa7auyJ6jdD4XKQgR2xDN77hNt79NdE9R",
  "key26": "5Uox5XwbQW8fnTGZynLT2bjmQQxSjEpX6Q21Xkk1tQ1pT9jkejrG6DexRENq2yFUrdmaS9eWPGAMmET3WmnigXM7",
  "key27": "qLnJV5QmtBHRkLgH9R8PJUp48qiZN3rKdYd2HCXNtbifEGNaYSRUkPf2vkvs9FrCV8RwMXS2DpFGE28A8KLNueB",
  "key28": "eVTY1P2wqCKUz7VvVf72jW7Bugu6pnDyNXGG9hzCbZfTZKAsoQuCUUnS7QTFR8kQCcCTHPe1VhiboPwXFM6daeZ",
  "key29": "2fJVUZNTEB1c9Qa3PwvbNbEdj5d2FeNWBqqJmsvNd5iAyxFL8RuK3T5eNBBDMTMCcuSujxrxexEuFeLZWFt5tnPt",
  "key30": "pE9J7uemqkmdrCiimk1X3tTAxsSK7cXMnwUHFSqNnxEbEit1Ja5wySzonnceeaepEg6oWa8UBmDKwXt572V7MGK",
  "key31": "4AyhJg4zBPZip9Y9aKDnYfduYm7YXynvkdTgUvXNn1qo9pM1U72CszbormL8VAZhp17HEkAPrtdYRyuWYKQzgtmV",
  "key32": "25hQgMKFTb8RmhCxmBSU1uuwxpy1pUDdhEgregxbuaFhE2CpiDBjeKKVSZ8x1NJgdRaTu5T7SBxQFKWkx5LS4HQz"
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
