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
    "4PvFCLKxieWYKQRKSKpoVs1tFyAsddPFg9xGunpDFxkuWH5E2PvRQEzDiFgcFFiDMdao8P9iUnBFMNK9ExAdZFpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZ8oxs2vWqFzFgHejS2JRh97hEEzdghWkmKSHDCcHS2ZcBGm5KhqmLJjrgZqnGTYCvtdA5jrXhNXpFaH5eEjtuF",
  "key1": "21aaxAuAbjFUZ27o7Xnk4bnRsARPmzQ9J5cbfwVJFHMGNEnGKkt1dieDxxxgpCrVbaBAirsymeXeQzeGfanxhNvT",
  "key2": "4GNabsxsLCxubdt4SmzLt8hJjFVn1L9kH6bHK7X9QcZr7Mx1XZ6fuQBiTm3BtEPA6z6srwsQz5FGhf9fjdoUMCL9",
  "key3": "5aQQUA6YfWh89Pw8sG4hJgUYDC11VUXeCrcPSEncCdCEdSrcT4n94n2BW5n2zx7jRTYY6gyjcbUpyY7zBeNKFnmp",
  "key4": "2E1LS8DRDDuaJsSnvnSbTypWTYYam9RsDpcq6GG7LqrK9Z9bxSy722ZQ79XETy7vYZFXJun7S1dPuPEx6hc2i8ix",
  "key5": "3zwoBbkZMYTDDXbJipWc34qMLyYT5h3C2j5qa7t8MRYTk94SYAkXkhBGzqEYJB4MDiJRu47xt6pWPFGjVce6w8HZ",
  "key6": "2NHfUGMtLmxzwfWNvj7ntgE1bqMQEVa6QPmDAtgm2jjuNEMWNk7Pf22Yc6FjJ2kTTwj1SKiMpj3ay8Yv9JokQ8id",
  "key7": "5TFJkPMuXEJBZPv5xnxKsag5ovWMvTfv4UvaD42hsqejfPsLeX1tVFXbEYNrtQbVGZBQtQSHVH3BEh5J7BjhLPjE",
  "key8": "ybGoGxbrWXe3zWCzTaU4YjWUxDi7dQ656eymk1SLgvVBC5iiph5Kzo5KWfSpbxevGm4CJh9t6LGJgAeP2dkP436",
  "key9": "4nv18k4HTAxU1UnssJY9a2UitUxZL8DanYzq6a6auo5VonVtwjht1TcUUAhChvYKaMNc1VkBxAwf8pWJzKmfVADJ",
  "key10": "2njJjKGHZJXG7NBbqRJaAXLmVS32yg89M9pDkdJtnCtB1bvXzCjsoJSoe3LjS4xU4sbSGvMW64ASVyfL1hVrj9aN",
  "key11": "a4oL3QDT2kQL57CPdq7aJXmWBoVxMU2EcufdrxxxMUQz5SgA6PvdP1gFAJX1AEUFRdSJ35GY1Ze7EJ7swfDmizM",
  "key12": "3zJShe9Yk3Bn6miaTZydD42X1AieJBcyPw2tcvxrJf4w94vjEwMiaGEjjyqBcErLYiVCC2K2apmtJKHdph36GEMM",
  "key13": "64nEzRtSk8dmi3ggwrsSNxJGkmUh8QyynV1FsXQWfgNoEcDuuXzcXPmk9a15gHFNdAXeDn6VkrFiv7JoYRhZVKV8",
  "key14": "hBx2CbayjbhpFUbCGmcTV1WnFiR5z7rYupL7tn8U7ShJVxkc6kjCBYqDRXTLR9iqJxyYxba6e55adTptHcc26eG",
  "key15": "4Bw4NJUyJ2ZwAidFtCLhY8iLbEb4b6MBV71cvLaK52MwBNjPtFqoJPw44f8Qmn6QZDggkm3ZdFhvQ9toj5Z6C7iB",
  "key16": "4abw7hkbkfsVNaxfaZC8VwXUwVZvV8qafZ1WJPJveLac9zDWPkHBUpw3K8j7Yifks24n7TcTAV4W1xcYAtHq85M",
  "key17": "jd7Mc7McegwT7JsfgEUtMph5hxE9sf1uz4ZJzY8JByepf4LuspMViS3fTVXES57j28mYuhoQVqUfWVGGJnNrD6Y",
  "key18": "2Bz25rYayqDURBCF4G3n2aYLzXKH4TZ88LAtcwvuCQjQTXkQrwK5PGy5FzGnReaZw1E6w9Zds2fASzwhSbnQJPWk",
  "key19": "5Lh7XB1qQXNhRnjoMeKJ9GtHCxcwq1uPP9q3Hi361RjF3RFySqpmPDnTkiZ4Cnv77kEkNYk1VCCCdnJKnogyA3Nj",
  "key20": "2QHbAQVmoRKLovCYMtnSMEmuVGRJshZJYeCsruduEDmmh5rz3haihy8tXttxxv4f63iJeGRfij4f8rN24mjJcZox",
  "key21": "2njgSi55HWYcFiFSSkSyCtgUdtEHaPPvHzP8Du956ZNreEgYo9Nn5YkEFsJ4LCMEpn9zTnmBxoTQRJt1283WFVQT",
  "key22": "HcSZdLE6jZfAWacyhrLKtZuFat9vJucQznyMhVrTSoHhSAm9faqjCuMJRtAXMidWHw27cUwtFwUoDMEC4TF5hWH",
  "key23": "3A5HpbekULrHLHiZuu8R946WocWieNAMwMMe3gZNyUTJnnXvueW3nHGcNAYrJpKnsQZVTQtMX74dFDk4GkRqR8PB",
  "key24": "3nHWeNwUQyJucdmpsb1cEwVz2UfAd1MEmg9JUpqoZgZuGdATXmiJgenK6p5E2RSZTXXcs7XvZ3ar6g1veZzhxTuA",
  "key25": "2bPEo1D7mPxKU6ZAMbeVG63GKgCk8UhYKRn7aUMuD9LAuG1GuabQ8BQnGkVTXrj3acstw7k4139my6Az5SucNeTN",
  "key26": "2ry3o4hCsFs8CgyJS6H9coBePV9A7Bd7duHRiGy76Zj9sRWgsPKTTaxsifh9KnoYmMUCmBtebzS7FS3k7gfRQSVN",
  "key27": "2Z3Bh4WiLs6N3g2mJVSQwE6NjfwAC5kUTfhj21Cfq7gct8XajaFn9Z1JNVeYigghKp1h2878Qq6baXKHP1NbtLpA",
  "key28": "5jvTaJBSCMXhutfdUg82uh56E6ArR4XXyj2bzADM3E45udGYK6vQ9T7mB4aZFGadEuPAPUWzh87BjL46S1cTRgSm",
  "key29": "2MYiiWACpu3rsK66nHt4piBqFi9XTTYKr7BF6pTXf3mK2P96NupLpQZRZeMvitCt8YYq84r51dmLhfzGNYZKhh8S",
  "key30": "22Xq7xP6bSRCtjEFx6bR6MoBkwibYBabWCD1qMS4QN54WpH33CPtkJN2a8ys2WyutCbbgSor34uAhLFM4RWqDrBD",
  "key31": "4YzyjEy4wpw5RA6NHE7Vbrc86yiJCmrcgvLnv2Ktp7EueizcLdwps56RZvLwvqC2y4oWp4Lhrz1ZoTpWoSY3i8fs",
  "key32": "5FhNp6mN5zdN9M2mjEYrPu3m2petfABsviGbdXWeMzgqMC2Kp1ArG1RFe6DLWenoNC4hhkQhuHQjizvghPQQ5kNd",
  "key33": "qjFYihxSE9josFWyFHBi3e1oTwAvePwkZHUzDm6uZH4V1iuwGhzkJFobQ9AbzEyg9HRx5MqbmxSERGaZ2m6Unx7",
  "key34": "4fMuRYqC5ZdcvefPnvYbm9LTZ6Dp3uLhD8fxHXerR77oem6x6XPp34LRJJtpJmxEUprSkaeJ8u4e6GSwa4o5futr",
  "key35": "5G9bfaHWSLiStZHj1cRXe9vYfynqwjtHFsVvGbrQHvhtR5rYkuWTqT3dbKxweziEATfVFFsDoooxh4DfgJhyUovU",
  "key36": "5WiDYcmc1XexHL79RGt2H1YYmk4BbuGMMBpCvTCnFv2ZgF12dgrxsJ7a1byBgji1MZ5AEYvRMAgiznGRYjYDCC6g",
  "key37": "2pJcG3sPE9NjA5AsAJwJMEuGA2c19aBmoa1pyCU5UV9tZmJ1uprQ3KMp23eLZdDeSMvKc8TE2Sv2dWfKLqswrTfn",
  "key38": "56txabEwCwDA9MhNv6ry9EE6Chdey7m4fh7SroMoWEJ3DbwgDLZzuQmeSDwnLUBMrjfZiw4htHyNuhiz9zqaH6FA",
  "key39": "SaNGtWJkaZfpYU3A6RoeNnwNPYfCk5grrCKDe42QuEmk5EPXSK3TnmCH9mHXGKQoyYPuj7ixXcxjSDpHWmiMnE4",
  "key40": "3TDtstEeVbfwxKhqn2hCrJCR9EyxUnpEbURZyuKkP5JNQ2BUFZ2hxy4V6h7yVVATYugrvRHHctSMCow2s23FyqNC",
  "key41": "3oVyQxPMYRXfwtMV5S1WRLPgNXT2NagSqVCQNzX7MF7VSu1bX2fufKECG83TFbzYDeoq6EZqSootL7HaqEPfPGxM",
  "key42": "xPKF8NQtPhEd1pqgV1aZU6JxnDxvvgDFwVyomZ71KUUrVTcP7k1qdfgcF51zvLRLViDivoj26Lakmod92LC3txy",
  "key43": "bBZA6JFw78JoWf9DxjFUW8uUzuXwn668NyixEUSTmVR9w3nbWhKXAXZvsR5fhMHrNFMADS6y3A6mrUm1kvwSBvq",
  "key44": "48GG6Kv1gx4GFA7MNgKxuMT4eoWxs7RXLFHvdf6xxrA3rjiHJkjT5Ra7ATpKUuZmyfvZWAKh1prDtwwMek3iGZGH"
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
