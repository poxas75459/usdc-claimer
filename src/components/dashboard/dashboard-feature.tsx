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
    "5H8DkKtDLio5QodDJfrWG2H1HHakdXU47NaaKvTR4kDLmcGmkBRmRgSfVHjekAbfCMk633ixYuLDxwPcwj7B5BKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxyGbtN1ak9XtrCAgQDitPRsLYUnELREZsmTy8ZU9ZtRa7DszC9Bb3ykgzB11Qavi9iNNHj7LyNqtbRuKFKUSTE",
  "key1": "2r2HNm97v6Nmr8Py8xZCffcszEBCQoFZLt7qLAgm7TYQ5uDedEBZkUaPjj1pfvPmZLZbahXmM4ojZLrFZ7LuNKQK",
  "key2": "2PKMi5MmdaWpxdXALygjTLDLQVkvBJ9BQ72oYUUy8bYKs2FFULCG9uhp16mD2mm7hcmGKk91bucNQEuzqFus4Sa5",
  "key3": "3ArR6cphMyGZFoKBgHyyALmFMJQripL4afLT3pD5hmgFuwKGkvSTX8zNDoGshFgozgHyJkwDBgaJQKR9NiYLjju4",
  "key4": "2NVZ8G6S65JFgAcCAARJmQnHn5x2br7aNpvNEK5fDaRGaHZXJRn54XGRXzFDFCX9SAUNmQiADRLgEbt5m36LV2LL",
  "key5": "PVs7v57pB8W964G1cTstzsY2c2HCyZRWFTB68HUqtqMbfLncK3zz7DrxwqWGHHGw5WYqj3KdhweQYmyxghCeNo4",
  "key6": "4pGJznMtpxfGeCCEM2fxbfLyUmxoZwGyHKXNdT9PgVzZtfY9KdCCL3VCAvaw5C2hmtL4av6K2c5BHbjUDJV9tpYD",
  "key7": "3bBa53YHYZwTeXAB3QmP5LX1rFA3f2TdAdN4QrEY8UawMn42aM8fQVmurywsE4Nvu9yrgPm62EymNmqQmdzSZS7K",
  "key8": "2xqFNN7VqCuKjXQYWsmpKxUPfihotKaEqmSExanRuUat2gdHixK99ZwSy25eeG1Ah1BoF6akDiigzWN2j1BWzwA1",
  "key9": "T1CATZ4ySUyt9DkTgGBg8jwatcinM4BMi4QUk3P3ccVpfoNu2nhYqFLoBwgdZHvscVaaYdUkqE6uGK7mQuJXqWK",
  "key10": "3mwSuqmgUk63fFsbvQy1uBG9xx55NeWriJzmdtKsf74zPjhSx4VYJb89xN6o9uuRyoZLJy1t2TQ2wBig5yA57nh4",
  "key11": "4wGWAcmWLj1gWWfMaftwDYHnb6cMYY5324pe97TRUXuFMaSdeP6nzYs2MEew1NN4mEBkL7oMppmaMUoSsJh4Tw9B",
  "key12": "4B4LU9EnjvTLx6Ro2NB7PsoEqhTqv8G5LWaoFVUenw46f3rnJwGL5uGXB4jcc9z9WQcRs3KDgA4HaMFwpdEsTfUb",
  "key13": "4Uyj21Zqe46qpticWxGX5cHxStQPaNXRBiXv4xCUtB7xWfZcFMVPy2JHYwE89NHbrBq5JuRKbm5TzLXq4dTDATZx",
  "key14": "3BNVpWn7NWBjraXs1yUcqpcXPJgdwMzDZZGxq7n21QmhXgPL9ULNR4m429dUcZkG742FEaMY7Q5KNc4K6TCKnbDt",
  "key15": "4TDoM5tFjquoqm3pQEM1s6kh15mG8o2emaU6b59nr29UPSxwsAAAWLUVe1R17vsHmsPusm1nr62tVwiojut3JJsE",
  "key16": "26sF9BXf7GHeBeCwnCUSBK12HGQL6sFVsgWXyTVCLFqMiJrEaUnr9QdHmZZ8PX4buWupJeaSh9ghgNxmag5v6AN5",
  "key17": "3kyiP9EBFbKaLV7PoyJkqj1QnvrYtWtXHnYhkD1rLTTwCwPsWnPBHzTwDWMt5r1dHdavYnA5ZNQKtigAZMJwXmk",
  "key18": "4YtDabkpcPbdz4NG12C8UUdK2E6j3jF5ZJGHXftEpqtZifvagHLeiVjhk3RrZ39DTGN4D7waTwqmoqNwNpwtJo8m",
  "key19": "kuu9XLWqpgQqVDahEDd9ixEYWxMFZx2qCkuDoWmwpaLemPZqUwSczoK2Kzvxt7TaZJMDrSdrhPLdgymyQBzXuGH",
  "key20": "5oCa9Z5Mf1S8mzNxu4U3WHWwnGS3APy9kfNWfkqZG28LUD655WURs6C9BGbDERUkK86khaUrtiK7Yh63nY535D8k",
  "key21": "4pbnZarot2SkthVFWf3WZo6rRabtnbaPHnNwYYEjwM18LgCFvh2etF2aLKye44sdfv2eZf4DBvPubY99sEVLMJ6A",
  "key22": "37Xmn8FKNgF8BdTXm9Le4Ci4wyMZKEtRf9pu6mJ4pdaHqLsd8JNkqUmjsVcm8mxJqQBnvSjRecSiMoYzWDTAAMJR",
  "key23": "67P41uUZVXJfADk5pHi8CTdLFUCKJQdNvDPANxU9BNEBcXyDiDbuoPZc9EP9ZCPxZ3whHPzEqJhNYxrKUjLzRSvH",
  "key24": "5YRkoQETyGdZV37AvkETsn42RcKYZWM3yifYyr7kYMAYyyzRJL2EyxRq1vQaRF8jvZt4weWCfjacM8gGNiGf3LEP",
  "key25": "24omiBkYqpZPyiPEdkc8CJsQgj5oBBR57jyYcoVoapn1fvi4ss66pWaAe8YS3HFjWE74n952bSPbvBMdCfMW2UQa",
  "key26": "2rcomv4xXNo38rUibypYKcQKXT3WJvYsvZBBH5ubV2yKXTnJaFP3K7JLk4Vrqjz4WHJ3WPRPX1nU1FgNgv4kjuPo",
  "key27": "5B4nxLYdDWi9HWPW6W7vvRzFH45wgUWWnu5iKo4sE2AsDg3S3Yn4qtVXN7aBeR1xV6SrUci9b5WSBKyg14MfayNw",
  "key28": "34ZpsBesVbSdbkyy7jwtDWs5LnDxEkCapJHKuqzuxAJUb7w5cbyLSnS4ueenfzS1ytVg7i4eVDmsmUzXesXF65iL",
  "key29": "3ob2GYmxdPtKm1HH6qtjA5ZGWTXJXCn9td6b55iNsEz6U1hPky7qQFMPQGA2wyPuv7z5WBThcTPEC3pLKahDhm8E",
  "key30": "4w1v1HpCsYmFao9yzK8Ewi9Qqzcngdb1zikEDgYtQCtV5HtUqSyoyeYtfQpEYS8uEgAjyNdTCZsdLkoExgBQGsbQ",
  "key31": "3S4VtdYwqi1P9rjb8TkZfTFZjcup19CdtdFo9NpdusjrwvZ7sVhYqdmZLvwvMDxXUhfkXyvfbmUHqUDJQ5HUU5co",
  "key32": "54pEHE6hSsyv1p8HSby2X4o1L1Utww52K1P7gfHpaCK1XQbyxC9yLKVsyYjHp5dCEE8HMGHzCA9dzPifZuEcXFFF",
  "key33": "2oUS2CPcDGea7YCYsF1X1Gk7nkhDa7e35Fw1her3YxGC1LBpebQDVa87uwTJE39qLHLBR8LQAJjpmTngjXpA9Pev",
  "key34": "5AVnudfynxbFGY7pFSJtt7VN4MRe8pmnAvkkYvT6G28FcoouZME2CkbwjpUwk5UbMwTzkNNQRDN31Ffp3tVjemi3",
  "key35": "5QSFZ2e5VT8DSf2Ncf99fC1hgte2qcLtB3qTrKSFYWrDcWDNocvL3SgLkKqsJuUe7qE7yKBwhjkmBsK7QWSkHcek",
  "key36": "2RCJjkCNUJEWWxGifAfCZscYyhfTaMpc3dUVR3x5GNsTgA2t5C37govV6qYnkb6qb4ZPDSw23iTDU3ssY8DbUbr7",
  "key37": "5mC3kcHh3TFHGCJgnp4z6oyexymTZXvNe94TZm6SPdzSt6NgVJaFapajyW6R3dewyt7eNijKJeKyyyiHzRPB6boJ",
  "key38": "4REbsN7oSEkyLXjaG8Jw8twaivV5dbdiXifR34pDQEUDPSJ9FGdJ89UNtxX22hqGJLa6UWcSVwfcRLrBigtufuGZ",
  "key39": "3NFetZKN1MA2fmKSpmRP9WfZoCWoyJfryHsoDPukS9YeXS5Qriv8gzyeNXmpdYfnwhFygVjkLXaUVNxXyht4Ykad",
  "key40": "4ZeYqmcCvX1MzpLW3S1GxQMDRHD4rvZB3ca4b6A4zYzHzeCmWwdNpJHNpCLVKqRPf8JvEZ7MpVxaXhw57CL5GTU2",
  "key41": "eBGhgTxVJZTJcsixXJbpZn4txxia8paYdkanz63vZhd8VG8DuN1ncQdhi1K9RTmwSVpdk5dqrNwcFhih62BGBjD"
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
