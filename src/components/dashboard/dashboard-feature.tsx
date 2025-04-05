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
    "rkjBV1B6rTqtrtKAk5QyzPt2ypNoU85mXxZZRJwZgrAu2LeCUAMEpozwLEmguS8X8DGEQ1Tsn3Z4XCfuZQSJBSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s1cyzM5z7M6LwGVcRcV9X8DCRw5Wck7uenqYhZcsi7zmxeXJLN4i8X6dTTajUrwWUNHEBryrymJjvgYF9RwHR4G",
  "key1": "3T5xekf3rQx4Um6Zm8mJMokkh2dvwTXwFaxUZXKWSyaYQSq6Ecfdpexsn5fQjmyDNGX1ogoap777dsuV96tC1Tvn",
  "key2": "2sQdhgFnVrBfXE8ka3saRUUjavFEGtEhoQ73e1ifSAzgUL8xyJkhBKftUPqaKnVHXgrRxhuyiYAkHsDKAfWVMQQU",
  "key3": "4xbMnNhmBoNhb5DzRhEAuKrT86gKyVooMtKJSTEpW3txkPWze2Mvg1vkfKk2KXbz3rBP8NcDp39iJZv5SR6CRVc1",
  "key4": "4UQP21AZbYm1jVrbYgLWjuF36VBGfdsHzSTEYUBvu2QJ77Ywtq53AGfp7CJwSvQe7D8VAbrvfdeRh33wvYw9r3R4",
  "key5": "4mGJF7aJn1QYVZEk2qpstBHRSZFH5v7QcXshGj9KXTjMmq2ikeGFYhQrWHQ5vpnq7dybKcewMf5bVgdnFw55UjC8",
  "key6": "33SdDP1aCgJy3AG8VoYnuUvfbRA3WbLAigmKv29snJLpe8s7yKEneXRwmFbwZZLaTEVhjqJ321uMkybXMBk27jpM",
  "key7": "2edtfMKHqyY8RuVGauFpCBjFskfByb5VM22e74P5QXH4p3JdcmjDuoiU2uxgMuDXEUM9T6fMb3QaDAnrgFd5WDm1",
  "key8": "oRARa2wZNN9PdNmkGbxWwk1Hu48knHVsBogymgPSXYfy3dReVSnBxxKgd1kPrda64d2w9zwookJyG3YsM4hLEPf",
  "key9": "2oirzbjbXfRY6vBoe2LRpYFMqMGTKmgFRPtJGdv6ZWreMJwvhq2GyxMW2go2ZC1FgmES466fNjXBkoPTeJ54V7Gw",
  "key10": "4gFCHbfSWTJLHjC24m9BejJ3GMQEnvMG1GwuBuRdiAWGnC7tFCZ2Q4dLTeE6s4KREqzpxt5SYX7kCt4U4Zk5Z7qw",
  "key11": "5yAYKiTsF2KqnNfLnYVRYUSgAP5pxDW6E5ausTUQDdeBALhTKd5XEpb5kfEC2vghAmXQmQN1V5SJYRcLc1sSpsVL",
  "key12": "3Ym5tMppDjfPXf92d2NwMJcGscY4gaNrf1N7yeub9whyJGt5tLdbFFcbAL6rDKVwVsTphHdXctCUwvqE4hbXP8E2",
  "key13": "21XpKs2YWjySHuaNLVDtpsFcasxftzsp3mzhko8vyjDLQFYyxQwqRk1NxLocBPg6dDbqpYghP1cMFRZxDw8RiGXg",
  "key14": "4iDLsf2z4CFkKfmRjj7ziNcGqn2SA6XtVF9XpaHQg7XYwNcS7upjzLH6CPQdqkVW6PzLCuxq9Teb2NpQ8BefVWPz",
  "key15": "5BPwYLDUJmMS59P1UUhHSQHLnyMYaKWDPcoCCwT14ZMihbnjaj5PvPn5h5miY2JAZfGez6KPtz9D6DuAAsQHtbd",
  "key16": "3fMV6VttrbyokLLfbhVBQQkWvjWy8xR5tbNbEtNKX8zA8VpsdykKRJCoU9gVzRDBD7omv7r8SUViKHHeZjDU6N4V",
  "key17": "kdEP139h7tLtGnA7JRo9aM1cqEcpGiSFGvZJarJQbVvdkWk3E3wn4kb8efx9vP2jWJB9eikwAVidPoZf1hvtEvS",
  "key18": "5huqMMNHbRB9iZVjLo8X5ZBQmuPhfxuBXNo83ZCW6tfEHnNfaqmPjk6tVRNALZCYs7d9osQsgrYvgFhaWBvFzfes",
  "key19": "3AThfEKbHKJ8EnBZYAp1XUCWtmKxhkfaFz9t7FarY11tC3SoHBnjwXwrQfhzpFMCp3tZGtGuDNfinsfkUsL2JWjv",
  "key20": "2CAgXTiZX9eyL7DBuhBS9EWJKsj9or2kKsiDCMfrSbVRnGA47iZAwuF6zmwbgzZABv7ih45V4UyqVTimkME7uS8D",
  "key21": "2rZ4p9Ymv4DG3MirfmbCUHJnVjUw74oS1juKEMpA11TwTzs2jo6AaVHQVfakqwVcXUKTKz1AJbd5ktwPjeaL1B2C",
  "key22": "57Hn4JFnKKqQzRMsmudBQjMiaAjjs76kQzthpj8y3DpDa7CaiDjaQ9RJXDiZ1eosCHczhvpJhVG3gbUWj5TuEqrS",
  "key23": "KtfT3NjxAU8R8VHJxUwFKf7d8f8jmkEaGxGdQqpsip1tu516A7qvyoNFPZmmku5y5j7iwgw72b8oLkEqRUo2e16",
  "key24": "3QPxxJ6BNXqnXktWeSpu1H6RXhUyrM6uawa5QCTFkAJmgYVaZ1r4fDuC7SZis9VmgCt8RQtbJ2ukjT87tvGP2k52",
  "key25": "2yaKyzjctG9XXc5Gjt99NJJteSggaDVtDyHpwQdLLVwwtHVDhUP1twLH8YALeLHES32G2mt24D1CR2fz6LsaDT6V",
  "key26": "2J7bwKJtFRyrHeWaYa4RmZwXQE5kNdsqLbMffCNkNtbvJRtZx3zqjg3jrwayRmd1LsKt4H8iYAkfWpq2DKYLLWSe",
  "key27": "ihpGK2LV7qHdeEawA2H16eCE49GCivX7ZA1boCbZ7L2ZvDbFbHAFDYewSAoGpnVA6pkmKCn6qirGuRLv6JEsPnR",
  "key28": "2e96NGJWfS3Njx5KFBoprC2f6dGD1R2uXJvACyrfCSKD1nkwdJy2qoG9ZMfAHSGBPgJVEQRMJ93MXrRjyMorxBX9",
  "key29": "5rNFY1xofHnBvYnS9vTBY95SnWt9ZbWE7kR1r8piUWLqLWrUHtqwweHLpCFtt7q4ifSZwhLf6jUmQDkmsMw3jMj1",
  "key30": "4ogqechfVmZxGggtE8TFWVfDD1zWpBvqLa2XXwPGrcjxXQxJHuY3uazd19FixRSJXXn36wE1jjYzM2S7Brqhbgnp",
  "key31": "fof5UuD4cp7uLonZb2wP1pSKRcCBfNoWJHezfCscP52rkYP24PjhXo1QDwZqb1pfFVZ46JXqspofpPDdkzANE2z",
  "key32": "5ZXs82yqm1bzjAXHfQD47c1W2Tu64uLXLw9rtLuCcoGVuJAgWqzAXfkWs2iPZZr6MMj5VFkNPkarzMy8zpWApA84",
  "key33": "4FaBESNZfnmW7yDuMTckn73QJMtiq3EU57czv3ifdvAfjzaWsDjLWMLD8F71Sb914NhF3KTBcKWHw6RRz8NXFRRs",
  "key34": "3v3KYX8WQDT512j5Tox6EHQ9Q9oCRhjn2fHrr5K76FZwFqmCEp3YCx18zYMoBbkTR8H9V4xzKdqAskqzRW9qcxWU",
  "key35": "3FeMqn2f4oUX9GkSPCBfUJ4hyNKRB2CKE3EiqMQpA67r5R1bppxnnqikLLqwfcXedpUWopRgL5xq3DB9G9kLeoza",
  "key36": "5Kpmy6DFjFvboTDr1CcHvvG8z1e1TJ4o6mooVgz2UmhKcjJUcjwD5dm6myR38kMio4ZnMdsfZgjYPTHvPn5UVwUV",
  "key37": "2uLP5UYaC8BDU1Fvc2yRtfjp6aezrToEXiGMCtW6Q5n8dPFKAn3sS4K43nafxcqGbKfivam6rM4KhKRdhnD1frhL",
  "key38": "3q29HikYz3dCfzNECz3mVv81HyXtDRn6QkgCAXWp6eseEpdqMKnBDb458PAxR3ybqCvtRvqf1HheoqvQ1DTsQjMb",
  "key39": "5enwVRfg21XnocRQatnQUWLhW7QMPNbEv3VfsDPj2tyx2MxnLtEjoPazdpKsD9KVS4D52L2iv4iuHdGCEUDBLSq9",
  "key40": "3w88Bv4ua5u2epSJzGU9cBFtaZgL61XBHh73YhoDYAeyUESrhTzf62J1pHzHoN8Hvb2Mhkpy8KcrEEqmdA6Xi7RW"
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
