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
    "5fBR8iyn2z9ikNKoiGaW4LJyqFFPKY98J1A4RFkAbyZwFafrCYzBZtnWdfmtkPM1AhNNJwoV1KHdo5wBCZvF6Gft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgZr68QP5tdpFBPUEw9GiWR5neaP7x1adotR1ZyUcEtQnQsXSohbYoQpSSTbxYGHsTBhfvEWPUF9QQNGeGdtzLP",
  "key1": "cZGo5bhc8gHMBqd4KXrPAvFXsamQ3LzFss9M7oT9pRLY5eqo8tu5h1enVj3usDn9FZ5DiTEcCq5s5L2KAop81Eu",
  "key2": "27AXswVx4zYUCxWmpT5EheTvLrVnhLBwJnLUFKjoAvw4X4sEumRhNUqFfeW6mQH1eELaUc5421PPV63XsxEWsNR6",
  "key3": "2bGJw15xjuDs341mTToo7kPnHJSuHDSUDs2XNPFK9VGctKbbGiwPaZAf2RcHogsmtumSkMXYYnmu7Ed12HFbnYun",
  "key4": "3wd5WA4YAyxC3Z7yqcvgTG6NZdxTC8DAJwgeCzTAa51W47kkhW9Znh2Tb5Ph1vkFWDQ4tBgVQo91YMWLcbCuf2Wu",
  "key5": "L9oaPv8URUbYPcTsQA2kr894EgT2vhg8BLyCWdo9vtQ8fqr8Wb4y1eu6yqJmrsVWk1fV2bvhwy8heb47oLYF7sf",
  "key6": "GFnLxnAgFQzp1jinsRD4UYAkbVCHWozzNKZevj1R4qytbFXhkZCkHMS2RoypCprSVHLYVXKudTZqa2AnuNgRb2p",
  "key7": "451xv6wLrDLaFJqX6V9VV8rWxptnNcLvcjxp97Sv5VY2xSY9ZpRLUk7Q1QRTm9XswToL8oXdgYgDy8uPvB5iAF2a",
  "key8": "i5gS83En4owLY68nyFLYifBmkGdBCRWdyyYkYtuyPCZXxizkjRh3baBhaBrbHjpRqNZyfzkiGRgCC8rYNi23Y5D",
  "key9": "2xHpBn32fjUNcVzRGxsj94CMqLuJyr9c3DooEtXXmc1msUrxb63bdA4jkkpK55B1p1oMqdNrXHA3HywmRJTZ4W3L",
  "key10": "3QG9k7HjSv22FxFBLy82qdYAbiHfmEFH1V7Wf9zWEfCBWzKSSbrGv9gjydozdF6R5wmRVMXKJsyxQFwJ3RMUv22B",
  "key11": "3KFuo9LP312cGhi6cfyTRtRJoGHrrnEZLUvWQSJS7zHC1mUwDJPrj821a62VcUmewoxqB7vNxLvAjhUdAof7KG89",
  "key12": "2uvpPTYsLRXapHho8ir1c5CvS6SBpEygw72mDpxx9KutizmjJ7NY28hSgQ3Lf2eNKhh76N13DEspe9SCjxFkLeEk",
  "key13": "S4SXFHmfmrtX72Jn3H78tHJqMYnkhEmLuFMz6i68Vy2mxF7gukxBFvpTe9bjgxrVK6XPUsZjzKR8vUmm7ag5aax",
  "key14": "6hLWbUDcs7jcUXtnM1Cr9EtM8uaG69D9iBx8BtAi6A9cNUM2jp2femNjkzY4AgnVyUuUDJLAzU1yUum73dG2cbS",
  "key15": "ox7EpU5XQdP2bgQ1Ta2ZB17ekBYZ1swzhbn8ZQTz3cUxw3ArKvkNRnco8jciywa4ZwhCVWqqP94HjumkcdH3veJ",
  "key16": "2kVTXjkWJiCn7Kzmns5LpwXsVpJZNHkwbE37Q99sYfntwLjS31DFfY9oZQn2EreNYCchWPwwXGYcd5NtGrtR31Qf",
  "key17": "2jkUVN4hJDJqmoubUgxpZLfSZhMHKrY8BWVHF3Dh2QzXyGqm5UgUVyMDqzRS8D5FrzFqnkrjnueC87S1JkubJ7wy",
  "key18": "V5xRykbKC26Y2hnSacNqmfi3CKf1dG35MoDCfnmk35RdeJMLBKpPJ6f2neSonNnMGCscqPT4R5P33Vs6ELLT1mS",
  "key19": "zzPUwwm38yfgB59dfzPhgS4Qh4muTYGS2Gn9hmF43c7TKhLQg7PYnVFBBZ9173AJUi2RsTNyzMS3w5gU4PeNRrk",
  "key20": "51pYmTr2FCT7kgnN9DTvJbt1v3gw3rPcYhRp79iaPmvWvniDDQnPY8GV2X9sGi5TuL4P582DRD3WcgGRJTCKbhpw",
  "key21": "juDcFu6pbfiFHXaG1NxzuHZwz2QmaV8YfmAVuAQQDaR5vYHSF4WswBxN29bPMcDHGYNpxgUg58Jwp5V3SK6VffY",
  "key22": "2ydB3BYnBw79Lc74s9DuL4sVxv7raULFpif2vRGif54VE8hNSGKFbu1mg39zsv3bQDdNg5dLqJCKZcZ7kNgRtZxL",
  "key23": "5uoFMjWv2FnU79HxPoZsqnCHDd6D4pY37Ud3A2aqowzQr7he28ZhgKrALFNxawUCJLLAxLZkkQ4aJnnRbrPYbPuG",
  "key24": "YHEoufE1PGV5MMW1RaExGFUtKXBSMdsgmsnDdaSiovnXU9hLaffhgMgzpETo9EXfy6YY6UqfvKzr35V3QziiN9D",
  "key25": "2rNEzNevAcdp4E4uyBZpxGb3TVveEKdPbjwyQnSLqkvh98pYp5b19iH6fvSVWAbvmjKxBijYanXPbpTNDAq3yEfm",
  "key26": "nJ1A6Xq3r343vYjsFmcg47sS2opjGgCsK9dVuQLfV1k19VgyCaAvueSFE6i2utsrmSh6oS7PY5esViQkw9m5QVZ",
  "key27": "2zcDuYWXKcKiLigALx29aa29wMVhmPZwhZEro6cEgwfbiTPitw6hYmrnV9BTLMLGq5m2KrciJ2eatd4TC8Mq8ogn",
  "key28": "3CyEuLciZTEVJewLnUYGBQp7tx63A9k17fHJjhLy2Sc3yMRZuej9qZ8D1SYH2ELufATBFhHa233cgKojJJyvKF3y",
  "key29": "2tadQNAYaAxfoyd1qnHFmAKXzBz8LiWxZdB8AGoLrNKoy2XtWcG7xs3CCWNbcQYTrPQD1MMBD8LbM8VFnyk3urng",
  "key30": "EFPRLzJL9mdHwRbd1QLBHX7wnGQueJSLXqUfJRwnxLoPvJZYSpEEsBryvqLe3ZEY1DXdKLM9GMRzM1sPdCyBnv6",
  "key31": "3yGNQ4dLLJRvXP8Qv9mbqREg2ERQ2uQTAn1EzQFeymfiFKndc4uTFUAYME4oXzeK2gnbPgkiCTxU4e5i4oAGwrPz"
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
