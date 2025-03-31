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
    "51XetHPcbA2iKFoM7CEbkkY86qLik1zMjp7YTdrfMbBUMRm84MJ8NkCoNmG6GGTmTji95X1x72UcoTKTbLqii19G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cAZKAJv7gMWsPz8T8CgT6Np9tDJWqKq6h6RLhyV41h9CCHTK8FvLrijhVKfmCSTZqu46GzNoYaCFmzBDrSn4qQy",
  "key1": "wzQLF96kwqoQPwdRMdqwdXDJzRnG46AzV9LkuxCVPnwa4txhBe3ffeZAK1HgyHw1b2nysHbEU5X6hijTEFGHRcL",
  "key2": "5i83HTVu86rmyJXRBPfC9vXEPJntzoZLd9pwk6NgJdyqeAVTeDjHRP4fVwHrGhtiZonGYPmupwmCS13xcY15wBfC",
  "key3": "62VWM7BjiMZrNSPxMLuz1so8PZEi83E8cNt1B2zmDhHqSfMJ3uidA1QY4XMn9bUp5HP97UFEq9aSD53bmMasJmVE",
  "key4": "3RJZjcQs4fLKFreuFteTCqSB5y4V8J7UTAGaT9t8ktn4bStz3XUcNCQowpmGF7G9t7iHEZMQuQf3VtnfhWsHmnkN",
  "key5": "3vcJxiRWMJsbe42ZqYTWyEwrFWohYxCL83hMkDZBwjCr2acnx8rwjx9m1yNwY7FGibwxhYH6Aa6nep2V7DNA7WBC",
  "key6": "3oWFUns2ja9GpTD4gjZhDtAeYRsPC3zmSY5ddArWv5Yh4QEryKwGj7w6RHi2CPG9q1VcMvgDRt43U8Tdgp8yWktY",
  "key7": "5GxQo4xh68Lc3zh8QpbxnEBLgFL2YC7iFRVw7LopQuye8j1rZGKCksLWDTya1M2q76jahRpNvZLcrJnbj7qTf46S",
  "key8": "2djzqAACWnzz3rYYb1z7mM6F7VUZBPRZC3nQ8H3UBFdCRoZBA9JjxsY8N7Pj34kfHCXhmHSrLQJ4M597hrUTpyG8",
  "key9": "5ryefnX6N8nzgD754DYPjAAWi6CH9xaqTyjzw5R8922B2tMxdHVEjTu1Cpb2xcoY815HkJPSUMxfUFGdWMNaXTs9",
  "key10": "4HFWC1fA8eX7BH2rbNNGZd6VNgrte4snnFhyvam82A93urEUYEeYz2fJUQChpgRY5UviDHfX721U6eYs1fpxekMb",
  "key11": "8uSmh4T6a1XK4mraAFw2cvwPt6SkVxKXSwkjE7HiCjb8MgjCgY1YgRZJP9oVm1bBbjmH5Km8mRaXwvun9qQfNhW",
  "key12": "4dKRdffAoNYTDDzDxnc38ZpcTEikpdxvxUhB1Lo28KUTVmDAT5N8BMQjgTYkA5ZALQSw1Zccu6j7XubqnPMqzGEf",
  "key13": "5UjDQXfwzXVWEstqSg4r7WmRoUWECKNvo5vCr1en3Y3DyuQsea5f9HFQHxkDg726AdPGsSLHKPS4ay2RsbrkNya6",
  "key14": "35fz4mgkNJemQd37SftJfFNqjHbD28bU1aEGNzjZPX73SjHoFEMgZmJ1WfJ829KEPStCUUETNobGeik9Y8YQZ2JA",
  "key15": "2DCh3vZR2qazqciv8dM3p1LfuNHeXYPo4YFet124WPqsTuKqiy9Vw2SXfS7gxwef8viFVAE6JSW3YgAReFwFrD6H",
  "key16": "A9S3jqmTGDNgpc9zDJPkC7jAvFmK1J4ri2W4WbX7BQrnuJgzvggKXGcLkmbYRy9oVEAkuNLQn2SeWavimSSUBKr",
  "key17": "2RZqCfqrTaL51eDtPpWx57jHN9PB94sMVLpdQHoQ2HdobV1f6QzKPzA8Uiq3hQkGhBAyMqci8gzD38QZ4NPED91U",
  "key18": "4CQHJNPRkJZbvKqBvLLCMxRyN7BiUHFq1EPdLWGVNHTYj3CyskVVznWcyTnRuJHDX27ipz4YeXFafgiksJ8cNHhN",
  "key19": "24koTGnE9M7bhAu7w29LZ41XHJ2HxnzGzmmHd2qxZVJCyqhZew7AUjhetvDBJzRqdcFTC3cMqBWhKRDjbmQRiVL6",
  "key20": "2jDBpUWw2C8wEjPBctohFmyN6EEEqLiTsh5W9GKmn59WcUtDseyau9dS22t9SFjLuLho82ytWDXYenwfCSV8JmbD",
  "key21": "2n8sfHnmmNsavDrfU4aLPVxyGBoYfskGW5BuCYwqGP1Bt1MENiG2jQ2sQArXxBhn6NfBqTNkeSzunjxMtJASseyZ",
  "key22": "v9pvnx8EJyaNXuv7Wk1qJ7x2EexqSunthXwyF9nK5Epc8M85dkZgVKMp4ESQnHrr1zP2X8ycHajRUCYZPP3y9rB",
  "key23": "3BaevgfVJkMZtxhYjK6dJHRrBJHN67EHYmxRjLMSVneGDLqVsCKLC6Tea6GYCd59MNVAhtwHLiR2sKaq25Q43874",
  "key24": "4wZTREefkYjfP2txSNniZ8hmbrH9ie44x2TvDnZrNVGefpzZx7oWgWLspr1YPWuiFMNkgLGtcYM8gQHEtcoxnidu",
  "key25": "2nBVrMqHfN9DKM2YC9k5XboXcqj8vsbu4VRFpF6WJE2BJShEQvebFPLCSUa615ssuvsbWkYpXQdit1NfKRA8tJvQ",
  "key26": "4wf9S9HBKHfZP5gKb4sfMttXkx2kEPPGCwLTVqXtYBvAGzQhcF5Stw7M7PJgokbtPD2bW2b4ERw9tm6nQaFpi67J",
  "key27": "T7z48eKm62SC8Dm5rSgxULrnCsTV5LzpsWEsueqH27sGyj2t4CLh9yv2kGkJZEC8xZrhAPKtjNWhhZbpVbeQV9y",
  "key28": "25UA7TRGqx9Q44CPwWDgaZJL9GJdWnhj9wxs9v4yHirXkRLerRTWASAzTp7fPbzRd3tPDjt4TshyjqoM4m86PL8j",
  "key29": "3p7FzyhE6kuWHQg1gmgB1XkX4LAMNnWpRUWgn5Te5B1DqsXg4HN5qDxb5GqiRNnE1KnMEFfidqDNVCKxptkYL1yT",
  "key30": "4fj9ko7FTT97zc9h9rkfmNsUqiaiLcmd72UhXeeyHD35oSiShGk3taAsZc2gnkfVD12hEFN4vYtBaUZzQ1jHgFpQ",
  "key31": "3zdHrxev7KNKjTbdSHfTwRxaCqQZK8wMjhLyEWr4bnEBEjZLZHr1ofpLm2bymHeVYSZ8FSDUZsKQg2SXfoxz8mVm",
  "key32": "53WP8WdzX7z8rBYApx13JtmgL1X4ouTJSUkJGpWhyQ6qYQZwYM8wLwiBGtqoticp5XuTEb7DovjET151qcV3kH7G",
  "key33": "5mC1S3gzQ6DXUeWKDXoZ84UFePUXWC6dKfM9u86ACSPs91HAqrk5pMkSfNMo3HCvmEF39SvbPFeP1EaudAPR2amt",
  "key34": "4e7hJfaV8QKnBMQuzvnnUmysSBsmGUpRZCsBbH65Az1NircW1ztJqGri3vTLg2hL4TT3p8uSg1dAirVoBsm3d6x7",
  "key35": "P3nUFsUnArHpbPxghKF654utVFMZTCU1g84noBYQJ5TqM5QZRmBeJRse4T3mjmYRRA4Hocq3RAY5mNTookJcq2h",
  "key36": "2govKbX1ukdPERhk1S15ZEHCJrgLEWpWt8j4pWzpk8Lh2QTWNwKLzRRPJCC24j2hVUUMcVNG9VzV81j3cYY9ATLd",
  "key37": "5hyF2MhVSMccdGsz9hL2sMXUnepNA2QMpRqYBfH7BfVa6LxD4KAVgSNaskeEnBYbn7vFYrTSxLnddduq5V4ZKuiD",
  "key38": "mr4W2aSWZrssyuNpDTxXAozkMyp1aJMj7xddaDt2p9iMyLkSFdGKNqPKGJhju4QRMLUzMAbSxKguak1jRsceQhP",
  "key39": "2B4jzdiUR5xqejJujFmfAVL9iBRmU66X2JFFqcWdtCooMrZEhAgY8DwkkdzoMZ2uz31APq18wZ9VtNPJf3Z8TCMN",
  "key40": "4kAvkTL9LogpQqJR6FJP7rwKVjdR8c8VUYwXxe6NQ21umgRHLVECaDNrfhEYvVN1JFfhrYRim7kZDPUtzzKJ97WX"
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
