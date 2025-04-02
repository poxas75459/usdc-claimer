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
    "55YkRYEFhJ6tdi8NY4h1dPi45uxF5dnbXz9PFY8DazjAvgysyemFhyitsAHZd938oBoRkKbMYRpC4T9PHU6T1kY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGnF42vYXJD13L5knwSVdL1h6arNLrP59JdsuWeuyH7z2m9DXpuaKSzVwy5pFfUZGRZNJ2czERfvwyQTy9CnpmH",
  "key1": "25ozBXATSm6kbqiUd2Cu9CSXwrR2PUYmYFV2xsfjz7YZXMx5zhTqdjoJUMR1TeNYgGQ6cNRMTjNNo9XuB52rpatT",
  "key2": "39ytu2L5fbebQEK1Mg86Akbs9zTkUoBHqa6rkX3MkWxCA6VpP4hd4KTHKnc1U1pQR7iAcUeBySmsHcz3ZkZsKorp",
  "key3": "46sX4wnLDfXYmwyQMXaHxGLvgdscymxFUMB71PgXtDoQNdbWgxkKXaLdg6chRNpxnHF5axoMrbiz6ngrgrgspnGF",
  "key4": "fUDya4fgGByCbqeK4DSAM585GfLoiGhLFGVSwEhMKS3bSYgVXLf8XW5NX5WfSSpBAxAFjG7kegspoQMkmu8qcUD",
  "key5": "4szGxbLtBqbuG68hpvxbDfZYeNyvKZeepQqark1kkAZvaVysubmbtGaisdif5gozEGBYUhDs39mnGRpsXnGD34J8",
  "key6": "4wpNcQZ14Fi39EmQwkCyaiw72wko9bnxPkEuWCQQBVH6VkBccoJZwghK18TUgD2n9mVGsAMz3X3tsc3D5CFXNbJk",
  "key7": "4THiRM3GwVJR8pJk593zVkRrzqRzK5Z6P5WUZ6wiBuYozcuDZbGPyfJf1Q4hBsTBH5XLpXra1FCXEmamKMZTjeXL",
  "key8": "2LgtyPYbnrH6A58ZwYWSLE49RH5Z7BD6nbfFQve5HusqrrKUeHA44zvh1m3aMcCnpvR1UEK695pSUFNp37hYtk3C",
  "key9": "5B9ZeK9Eoj9dVkwkAPFDHbgSuZnpsgAzFivXB1LjgDu8oFzPDD1ahDkRQ1LxzMzfBxrbJpHqa3BTHtUXTKkiHe5K",
  "key10": "4gpZjdcyoX8TkZYor5kvnpAKQPm5GKmtnKvChgLuv8HKXBzCTSv4PjvkExoMvK7qdsQsmTYzeXWBpFzL29kfBF8k",
  "key11": "66rPEMYrDmX5Ae4qVF9u7Yv62898PJHv927gmyPtSGS2Se3U7Ww9foRnuLisqm55NtEF7PJrWDgdmKTBbHhmPen6",
  "key12": "geTeWtsfEkJgB9RQU9J8PCsDp5dcGWwKR5NoNfMsxtq5YrWRfLBu4qrhB982us3J7NgwBUoY1PQzeVCttufN34e",
  "key13": "42zaA4UdVzEL45Lip9JPMZ55akJMcMzPPREJPbyMJZHQGvEgkRTrNYngeMPx5HNyoAawfJXyt7xQKiSNs8Xv6qLn",
  "key14": "62LJwutzNvR18kmTvYfKmLrwKEijxcXjYCJY448jMsFg4k6ZPusYKaiD7ktomCwHB7V3Jd2wjWJqhdcPb2RJHEhm",
  "key15": "39pHE1cM9LmmF7uTUmpWRCS5AcQQrN8RqrqTXNTsqEuvVC2WU1yzgfY2rhDzmjmHdSDRr5mHYgAfcKFTUF64Meda",
  "key16": "4Hzx3Te4RtRjXnrTZgyVoEdTVeQSQrPYksaz8K7ezS3cGMXjUedwEYGPGyMD9RDBwi5oX7RR55yKQ1a4S9SY5aVE",
  "key17": "46KvcoWfkc4ieEDahSDDrmQdMtamR88DNs6X78dzeNe8rdWCyWyqsPiGpoWTwmoxP8yPMiRCJ19kvxVDCoML2tRY",
  "key18": "4GE5i9V6hmJByjjSPS2LP5cdLD29bCCgx9rU97ELrA5JtBHx3VZ8qKdU8YypYWZS74s2MByd7iWv82ZWRiX588HZ",
  "key19": "4dWxn88RwaE9d51jFBHTtFCNoahmBgjLDqk3mkPdm3DdJyatkV6FGjqRCTusyVgYZG2yT2JoL4ppP8jKR4VqgNwP",
  "key20": "22VfetDY6PF7GAh1vEpChTDiHWW7UYKca8TBGxCtopFsdJbrn9gkoP5exB77kaFdi2v12prrMr8kEroEXepbGvN5",
  "key21": "AsdkGjLmf5LJ471bendNaugcmz5vQ8CsusP1gHuYDCQsYGSB6y64X1vKuJbuo6qfXsktS4zuwd6RJMkJAx8795h",
  "key22": "LaN3PJPo18k4eFTcp6NkTvrwG9oAoti5VtY9nxh4nrzqwk3Eq8GnQyQVnPMQRGwwcv197etzD76RUKGAEZsVA9Q",
  "key23": "3QufwkAGLq8pvoFZQDKCxpmRmRm1r5vbey7T8VevdxnGjPgZT6dqhvarCrsVfFFNYu4sVFwH2C832bP2zEKaMn8V",
  "key24": "436WbPyqs7VeP2u2aU8pwXEjtyMd6UPb2SQwfXFcLBp4gPfZxzRPjPYnN4wyHvv5ReqJTF4je7tK3qCfTUsvwcds",
  "key25": "2qBPQfAL4SfD57k4tiGv8v1dK4L3AgYaLZ6Hb3YMdK5hGzCbTHk8sEYD7ddeozBXH1CvH9jwkkUw8zNhdH1uQMgX",
  "key26": "4iLkCZt16Z9YHtoHuxbWwbyXc272mmqpbSo61RexQN2QHkFuoKALQbk1ovAPhQnPGjJ7djd4UYj7nTX4TReCLLmx"
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
