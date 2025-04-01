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
    "2ZWbiR24PvtYTto6sZVerJVoUGBrgtBvYH8QNF5f1uzVVJp4RiGWWiVSpLFAWvG3qSjq84mC1WPffwaMfbia5nPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDgwVp4k9cuasqooi2VPUnwFVkKBYeVj2SNHkGxq9ja1AbfUuBDu6y2ckULQhNJMabzYJPyRBK5oqw7eK87fUo6",
  "key1": "24s4aAnET17TJiBG7MmuBtoKYoGqWDiA1KtEnVKfoYLDiN1acPy6zgxKRzbpyaXBwVaXf49saRGQwWkxCuJXrdRf",
  "key2": "45sSWtJy1wdHtFu7cjPA5cixqfDLfq27Kd6H5CbY7KG1QKFoupS4Xsohy9MP3pAkrDkzBE6vTKhHQsgx4m2BMyur",
  "key3": "2kbUTbvaHU7mmykWxABF7qF2MFuy6zYYh9VWJWppUefc4FCSKagB1nycVHWy7PVNnaiZr4ejSNjKv9Pcfx8nLdXv",
  "key4": "xC5VFqed2mUmGCGhXxX76iHHhnSizJvHHTigdW3wnpgyVYiiBm5aLwPJygAsv9pfg58YetDkdQ9hTcNTxNtn1cy",
  "key5": "39HwbVngZ1c9p2uTG4sCgvQ7YzRcVi9bontXidF7G4Kv7wXf8AeR4RELWNacyvbvUCTUkrV23GNE9v7TSC2TevNq",
  "key6": "d8akrDQuaSYiUb1zc6ppSLGmzGu6XqbfMKCofQ9uiHgbUq2BUFEX9HLhnGayzsqmtGV6aghKamkaXc2uTQfZ8wz",
  "key7": "67GjvvTBDSjVcdwkHEsBQXK4cpeK3MtefDM9MwVBNqjN3QxSWAmL7bwoJuZZ4Nto1XkFd5E78XDWY2vJH1ksy7sN",
  "key8": "3imZBbf7XTvFEzpL4QsMULrbG5SLnMDQohKLjsdGuz6CFAWBLD5aoYW6ER3Lo3cUUZEVvuNAAmr6NEiKeiJaLc1L",
  "key9": "5EdAyczhEBFXdMj1KEKmpWv9KbUtSAAmba4UNoQT5kxVd4D9Ae1doxZqvVf5u17LqMcSMeHQxuDpsnJX93HmTfcW",
  "key10": "4ex7h2yPrWeV6uERA4NiUek5HwPRP1TWZmgeRUSLpneCao8Gt9H2vnWSoYkt42ASDJxQDfZJbpXzfpM9XazRzYrd",
  "key11": "2eeQfaATh6JGbmvAhRMiWRM5pHhtFu18zZ6RVvXgbw6e5hbKvrtB8AQKvCLVmswbhAUNUo5cRtqXnLXybQwbqdsH",
  "key12": "3RYc1Mj8mBRxBhR2Rsd8Zn17cURQmZRt9Czcv4LNTsZP613d671bKwRgsx5rye7hpb1StS73q9o1BaaT2msVVex5",
  "key13": "pmeSiWMgk3LwoCUo97cqx2rvXWH1KVm5p6GDXzAwbhaNGXi329FDnsW6BPN4fFsy41QEcpWqThiKxSYbBqjjdBN",
  "key14": "oRDhwkg3RaGPbzjRbhMUDVcjsjrG3fnewNSpYNV9fqQFVSgpYQcMS1WzSSaqTGw2qXzdNcKDYX89uo5g9TMk2dD",
  "key15": "eq5Kc4SeTR8mwpfoN6Uor65qhKRZCxijVmqSqPm1cyfutmVT1kkHFnvU3E8QBTi8RWbcv45FmqydE11RqymjDFb",
  "key16": "4Aii61P5t8uNAdYwETDryCPXCfiVikve9RzFtx19mpg8PVgXcDKQeS6ta8edduDm3wADUJkTZNEvHB6zDkLmtUo8",
  "key17": "3YTh6FdqpQBJQKtFQ9sNWfPUS4T5PgvDthSNrkoPkVSxRo8oJxgBuGfvg18v6pgWC2zuzw5dByPRgrNCKypM8ZgX",
  "key18": "2BDLbWZk51u6XN1d3wycV9PYdE3uuyUjbi3x3HmuKbGKXRhCMFvTBdV4MDuXNvnXMhfp7miHmEgyrxjPsgQwgCMZ",
  "key19": "4q5YBbWhJdNpKGnL1tV9Aaw88i8hk6gfDNorCrExdaGH6mm6q8zH65dPf2YBKSNce3Fa7WSbC6Ty5ikhYT2dd6TG",
  "key20": "5kNfCT7odCMA7PLPe2CcyG8B39hcBzYuHvfwsZHktJUkZTSb3oXCU6LyHy57Cr9KNYquBKeARS9riyyVQyM7W6ai",
  "key21": "62gDV4cBCNRwFb3CX7JK3S5poi3QqKrSBm7qnFMzKQhhHVpV8y12RgmgFvCJFGGKNrk8ryk5ViVMYpWwYAskxfcx",
  "key22": "2dJLMZhGyFxgJBtgSHNNbZ7UbSrL5dZRx2R1kAjvutQqXYrjgRMrqw7k8LcKwH7RHZWkPtpTNfSHeQQphyRD45G8",
  "key23": "5essVnbKHx9BTkYSuDsJiUKm9D83HQE5miEJjQ8TLf1Zb27wL75u73R8p1pcS5wp7M6MitkUCSRt7eJdJ6uuczBG",
  "key24": "4XAutuFma5g1srcvhshsA9WRekAmDoBMNrQabx8cfGg5hC9DBiSEDSzbhtR6Y2mTxMvWvwbkP3mJuekii6LCWYG9",
  "key25": "51fPamRqnU2XR1ZYoMWzau84DbtpccBKT4JqkDYj6neBTdqwjzvmqNETs6Bc1Z3ES6NPhMzpRbk2t2UY2Si7ZNE3",
  "key26": "YWvYzy6qJR7B4ReJcsmyDkde5sp328Un9Uvmuw2ZM7HuzHisUuHe1WJGTQYpYWVUbU4E8pnS2VbNuaVodcynKXG",
  "key27": "23Dn1BRaGH7fwS81xSZ2CVxMFCAHWxURPMgknMNUYVw6RvBEwYfGtoPn8WWRE9ikw52SCPKrh1C4DhrEwanu67HS",
  "key28": "5eJkQ5aT2ANU5vW53gtT6729YbEcT3z8FyjecN6t7eMiqqsP6ZKCb24tiBbuaxVXWCtYZsmjjw8NPRKJ17LumRRT",
  "key29": "2Ap86M4xGZwXvxaquYAVPMVFf85Jmet2GoxRJc7n8QMXPJ4YGntj7Daa9HuxxWmfa6pZVp7JcBhbMEfimgfn3vin",
  "key30": "4zmsvsNPzjCMnuCGYgU3F6Lqp7vNFXxa9QXLjiD1Q9hRwpJSgvyP4dK39tmKLKbv6k1wb32qfnFvHF6HB4qHXWg7",
  "key31": "3EcQL6EqD8DVEzVttUkpgQU1jf8WnwrSyk4Kp5zaEKArdWHBs6AKCvfeuozpg2bPsbpXMNEcvvjKo79wCTYhdsrz",
  "key32": "5WM82r5hvnjS1PzTpBdvBiAmQWftUvMkrZwejgDLt5BixBAeLcEdspETG8Kqy7AjuLtcU6k5SauFdTnZfQZptE2f",
  "key33": "2ejpXHqspCpEERbbcKGVJP2KvUD5vP3MQ3Adqa9QQMqY9XRTojPZsBtFY14wfRaWaM6bTqkq44HjxKY1cZTue8zn"
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
