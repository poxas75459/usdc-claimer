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
    "2SrqXAFTYdcanizpYVEYKbUVNRaAfx8PvuTNi9VnVquxQToikKnvYD4r6NqtRdaeGWJhpkj9qSF977VYz34rypky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "316kk4GoMPsNojnkAt6QimY523oxpgoZzoTpZSUx5VYVBmifoRDquvYmFjFtE389C27yUu4K3HjrUoZ6JPrMeAkF",
  "key1": "3RBPzj8Qe8wipzGy7V9hVrUyPsC1N6hT9K6sUzyRJd5xa5MhFMgYUncZMY9zg7o5mgv3sG579kyiiZfLWFYCNkoM",
  "key2": "tWSb9nAtK7mGVqJFZw7vYSoGqryR3Cp8RmNfBCY97GgMEDYLheU3NC4MMyw1MZjE5ZmeuVZDHyn4XqPiAd4THop",
  "key3": "3cUjkWJvqhQauyCqXx614QrGSnJx74QxJaxbp8bo6r6qsauX6AMGRgor7VHi79qiappx4Dpiw3oiCPhXdvKLsZfo",
  "key4": "2DF5pU2GHLGronjUxWDBc5gxg1u3gE5ytppUdUZRCpU8cmAoFzHYRv8hTGn1g2obwricoRLnHLrJU7eZyNZxYKR8",
  "key5": "61Ho8gecKW53hWzxk41xuUXj4KzarkrSCJrAvrPnxna8zJxQ3N2ePqkZL8YXzZxE5ZMo5qVsZTfFuX7p5o24wfgD",
  "key6": "3d4ya3UXHbXHbRTbcLpmaDBaYg3wq77e1TBFAjMZTPN7jsHjQ3vfqjf3WMsV1W7fVyWcZh3ahBLU9nLEfUULj6QS",
  "key7": "5ATxKLV2guQaVr89Y8eDmxwWCQHHikpgc3JUWRFDbWToJNRhtDqMZtxHGsvSJ3QgKCgSV1nQ8vJoiQTDVQkQBHYQ",
  "key8": "344RquCNMmW76MNkDCRGd2QpbP9hKja9pzYMW6Md5HSEtXxrpoW5nBtkvyUg3GdCVzYC8VskTZrbojELrwmUeTxs",
  "key9": "2YiTAZL9pors1YLMLCDS65wPwfx6LsWHqZGQ8kTnGETMH1otUQX2WPjfHgK6Hr31PxYDzN3c1VoXiwYeLu4j18ry",
  "key10": "34SLW9J9N6txxU7rZTQQVkrx4s1t1U2Uwsni5WujGMLhjsta2tc8VqEfv2GvsCT9kJ4Dts7ChYNKCv1gNACTZ3ib",
  "key11": "3UiTfyGiRSUwVVymKj1SbsNp1jcZCqsY2M9jKrqdTmVwZNSQHG52zXns67eQqhjLqkvfbCWpgBuh4B3TkB2ckiY1",
  "key12": "2m2VQEzeDYoaRNHNkXoXmqfhigdTwNVr53vPYQbQnNTwDLJP4oHYpvUK1Q8TgpQ8vfaTNYshZ2xCaKy5i2qbqKLM",
  "key13": "4wwo1rGwzjykVJe7V5ju6ubzC3PXXgmZx4WyAY1PrzYBN4biEnu5ajq3ZYk5XP6jPQfPEfAY43sZNKUC2rZKpakC",
  "key14": "25d5hSpxmcPdMio8wSDnDpmwABvUseE69Ehj91mRVep7QdKf6DAtu1qurTEerbrxv8shWrjGWemXW53AKH62pbF6",
  "key15": "MqWhNV3UfUkNQ313PXKLCgXH3rpDCPaKFHzd7ev3uCDH99hpyvN5Cfoct5WWaYcu7PTS7J4dFtnzkB92wMQC5RS",
  "key16": "Zn5hzCwNgienWHg9trkwMGa2TMsxTwqW14BHgWxrKBqA7G3q61xYvr3yGuZXDD6ZDN9NdBdWguZawrDZGZZTP7s",
  "key17": "2C9aoz5LsHegyYwQMTgQQbszbReGxEVWJdMU33tresHtmiEUcwuyRdvxrHQm4qRwbYbiMhr6VgCEWL5459ytkZpf",
  "key18": "3xdhYhiNdazM8zBehnvbtDdSnKuk95Xf2g8dr2Co2FBG9NQo6AYGRHRXKMmJKnJ5EjRwcehNN8qGDnxtnL7A7QYY",
  "key19": "3xTvgR3uApf63nyenbUUb2f3M8h2hKbQSp7CnXoh5em3e6k8kTHZiRrjkKaAU4HexUAiqVyS2MKaYvwwv1Ni7Zxx",
  "key20": "2YYgcmhDtGgw2vqizRHjbtgBcHG89QjtXPsKkBNKtTrRQ719pPBeLS8uZUozXoraUzXTz8sqpwdLEF19rrWMLv2M",
  "key21": "5hdCi2jnJYH2JZ7XUNaykKqoB9HzZ3rpG5L4idaujefqUuMcvkF39LoqwGjRHDLLDbgdTt7EAGVGWEan9Ua3tM9w",
  "key22": "3DnDG32Pb5mMXEXc9vvBGrHae6MMyZ5d484RDHVS46WoFJWTRSwmKg36TD9MBGRRgSeJh1Gn91oShwnKeXSAjy75",
  "key23": "jMmphNnbzF4e5VbqL6qynvxggLXy17jexBtKS3j5DvGuP9Pbstk21NzMAARp4wT13eA4ktDSwxh9fdehYZq4q8X",
  "key24": "4k9VPmzNWEmEit2GxcY3LkBf6u8C3hc5bGHiBph1QhpN5qDuMjzByB5CL5KyGDCr2zXzFyhAwo1hRAgjDnPo7ieA",
  "key25": "4CF9E4H5TcDfptzJH8QCHHVJxxzFKrx4fHxL6kh2VAvSNR3toQfJPnPWLfq7z4PPjXhdA4ZGVBCHyaevr1Rnnnhp",
  "key26": "P2QeFcMgC45M9manMLk8zeDTE3VEueykgMByucGR7vSTwt6rNBrkiEsfssar5tbNESDfzR5eknbeYr8mJZR59eY",
  "key27": "3Ls9uipKnLfhp91qS1ezrcc6cB6rW28m2F9gd5KPfrMLsbieniJFACpmLsM7B95zmfVzX58f8w4MqW6m7duiHvpo",
  "key28": "29Dxs5kPehzJRYEqxChZQrxaz8cFQcgHkTFGYptLeBFCJnKScqk7L2RySJtDgfXNW5hYzrMb7xVfkXCciUhLXScW",
  "key29": "66JMV661HBrjBok3dF3DAeEeeVqP7fgBcXkWYpzbgVsHtGYdGkW1bdu2TfuZgViwQH8GTBi1kettrPH7ZYfRN2Mi",
  "key30": "MnzmD2Hm341QyAcW4mab1FFEgkJWcfncJGPfkPNj9knxZdUypU4pYAJYCKY8BNS2tQECxziGHVskuMV9LBkUQpq",
  "key31": "4hDiYn5nCg1sQrRNrkjcXNWJdKHWoUwRextwbsp2LGGEeht6NWQFN9z5wJU1LWMs4XbntUd2meWEvgqD6MsGt2oH",
  "key32": "5ZnKQoCvSoiEHqPYLPiagxpX2sCwaH5HbJd85LNpoZdTqHwageJsr7TnUrHFwL5Fi67VEr6Cc3fBGRW4MXXRknbM",
  "key33": "4DVHYpc5Q5rHfgxzVge68g9YMJcbe8fe8GtZB9nRj9FBgnhbiHp5BdHXEbSyHtqCxfd5K3YfMQuiyyYWZtog6xEA",
  "key34": "4oCvtDXkYdc9sRWTEAg6g9DhGdTM7FzevqDEcQYnTcP5ELKN5P37WTjzNzWLGapdWthemfB3YiZ3brLWnk9QpiGy",
  "key35": "3Re65r6KVZ29gJv8goRvXQTE3P1sHcfAfvXe8DiQVZpDuWPRDvdBKPmed8WmD8kGVaMLGA9BQLnWj2oKZ1DZnQDV",
  "key36": "2cJ91Ks8U5irh8cVWTzEjRmpRmW4iVQYYZFrLNcuqj5ZuEqefgqWhCFwB3i28jw2pKqKh2CSwSku81ZWcLvZn3Wp",
  "key37": "3T6mjYupRDPoig7nz7KRQhC3qQL3zTTxgJu1ahkJmhxZWtdAN7KFHjWiE3Tutk6jKJDzoZ6usyLg44URVJFtSZoJ",
  "key38": "2KPfUF5utb73Zf7FZrwEaq9VNRzcp76ZizDn8gkDquaebqVbqSU8EZxPY98Wnm3FwF1eLzvs1fYvAHTxYt9Fkk79",
  "key39": "66KeBUpPf4fxgmMNdBopJdp8unNrfFxUBCFeQaEjAFkEBsTyD7CNHqz2QVVr8hUt7gjQE7LKJqTzpZJkiuF9fDAi",
  "key40": "3hgTJf7YTpxNkbLEEQBj1VEAhkjcL7q8zDuM2JdWn8DR8ezxZfZn8Ue4zPsiNbwdWrmmY7ik8jpfyVsUzDcvyxKQ",
  "key41": "2XbFCKBcio2wGfg2JZcEcgmYYcVKYE381iH7EFRzD2jbyzCrQwKGu8iLzDrtksJhLZ8KTKp1e3oX1yvytrNm4tsP",
  "key42": "32EwQT9kxgQXgfmUQsW479vXKtjX9qhoxbHaMJXaEXQEeA9rmnq4V1rGpaVCUNTzaWDcCCzp7iDyHqYqNtC11i4n",
  "key43": "2oBMeZ7Zee5Hbt6v25cCfwQJGN2XFXEHWeyBFXKBwia8ifKGvCeAoF8d49cQje7AG7TVJvAeicca3DyM3mae7Gce",
  "key44": "5x7wKRM51hB7PQUsaBnSxnMqaVtBg998wPWLiU8cdgH59YyAKTzneoXQEoMqpMCJYX1NFAsPqq8r1QmfcwMsodNw",
  "key45": "4UuZWmQQBWegNq34GCWYXnKfAWCGZaFU5BC83Kvt7bzciuGMg94XKqRaPNYL74Reu2bdRkA1EnZbkakTqfmLb1X9",
  "key46": "3fdyxf6PmuAqZAV2DbEgh8vXPEUPmizUq34zesJzqiNLV1x9i6UeyAX27ndWjyNr336xfTgA8saPuAKhok65GYbJ",
  "key47": "2QqvMScghiT7ArjBhQz2dTHskpyojzumZawe4Wyxodk269rYE2V5SMJ89SDTZJrFgFRsGWuz9ArXwpDseCa9Zym7"
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
