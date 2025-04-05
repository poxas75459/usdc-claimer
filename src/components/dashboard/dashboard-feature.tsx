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
    "u7tTnqMzUPRmXLmtoNcXmU67WJECixox4DdZx7kGNxRfzomT7GHCyKNP8BfeDNhoG91qULoVvLYAU3weFeHmWpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PDLN5Tx2as4bJmimejWHeNjQo2U77TwB8C2KKtpAC3evYu2H5YHNyucwToPDH6fmNP9eYJrpKoozij7nP2iF1JZ",
  "key1": "7HcqsG2wVykH9h9oLTwH5PtxvG6YF9pGdKDY2nsWUWN1BCND3AQqbVuXFyubHVbmMBpD7wGiAU41DFZMUdLmEbA",
  "key2": "3NiGy8AcuMmoCqJ7RpBmt5iCtQsJBTEDgJE8CvapKLe57iKZmk4MD42YnCTZTvzmJVxtKMaAEwpgjEtqYRUYkztV",
  "key3": "4YqyP4k4n8EKanXeNdypJ4oGVN5mntuuC6d4jKGHK89PAuHawpfwPVUAwaBH1cb91BadwknMxJBuz41YySoFKsdf",
  "key4": "3zxmqdS96AB7WBKJvkQ9ZvJxkN1t6qWFgNWP2pEhApb66gp6akU1eiQYbPtUuqKAWqLv9bZNoWjJQQdsaaFZhYky",
  "key5": "5NpxrJFjMvgTczsQr8BTzEe2EzdCXLc88UsDrM31H1GYchon4ZhN8kNujXNmMXU8Rkc1mqsa5g4X6v17dv5378VA",
  "key6": "WhDEt6qcW7Fgg1c4c3KeV85CapWmcaZMFNzuvMzRgwbkDiVt9ZP3fxq578Zucwsqp5HPGpRkXUDdcvkwwDpnDq5",
  "key7": "4Xyr9fBcgLzMH2FK9VEzh32VqhqMTi1auFZbrdYb2XjqY1HnP7pBWospwxs7Tz58MbLkN9UthJw2BFFcCBZFZtRm",
  "key8": "5WUtAUHRKyfUMKVa2fVwBjceb6RoCXeXUXy4dRZaUxsa9Ev1kaEuye5ukzWXTtHAUTCFBao6hqZZB6nSFvmNtxGA",
  "key9": "TELwtKnqah1eMCnEETicQyWDE9sQqrc7UZb9QKvVuZUN6AwAKDkhvJMjhXuJHYiBannaHne9e5NkUTSHkTbPKbk",
  "key10": "W6jw6mbT3joSyZazta5RCwCH2VmfoedGStwGsSt2hQ7BtmwEZJmWe6k2x2Ey7TzEaKKqE1TJuSzp9hJj4AnCVc2",
  "key11": "3ZEySNe5icBSKSuXrhEWLzLTGgYubN3Fd3Hzt2ji2whi9FMvDGaYjaQEUQfqY299gG4ifawZ6svfms9PECFqBWbs",
  "key12": "2tkTJMdztBizjidH5XqWK83esNXm5xzHnqZiQ7ru4Qb3T8Zqvy6nb4ytrdv5UBNmbqgvqCgw8a52cDqPuyf9yLhz",
  "key13": "5KUBwARXLfvbD3v3DZqW63V2ZXzRgksbQ5ssREgWvKwseeAGWLnbswpQr4Dk2CXo8XCQaomwjy6tcq12z45a6kp8",
  "key14": "2TuGYxBxLinpBGXRdzPpWbgnJRoRkoTtRniGBzLBgfXchBbPz58wBtiMVyB759brid85s89rrCVpZ1UuUREiadUW",
  "key15": "4eeHCNFRVZxqsuD4fmT4DaopEdsavpdBQt9bqDCiqmhqmhmm5634Vh1VymXRXbTNhvqi3fNuD534eoFBEXaoJU9r",
  "key16": "4qYenZkCF18gwLk6xsBHr2f3a6m5ptYyHaTiggKFMzYf7Pdv5WcKopvD7nWURQWu3QbE2jB3DNsQriGSvQKhuGM7",
  "key17": "63tiUqN9H7FzdBAChYLVbcJktTZtCb7LVoMBBs6SFeXK3nnrNyRRuLTHVzVxCdBw7M3bFhkaXvVccDx9sNEfoULz",
  "key18": "4QAHuykuNhGuZ3TDL4M4zr1io7SWUDwkknhufm5CeSRCgxuDrstUjWbWtsZ7GyAcdycxv3cQh9LQmNp5wba49urq",
  "key19": "29kfcmSuqV9Je452Er3mkyWcFyx4c2xySqQPRdtnKeUX5tFZ2U76UVPiesfbdaaQp8xf54tUu5xJuGJ4ZswJVevb",
  "key20": "kc8P8vAzT3ctG8o7V6uRbSrXpfx9TrMe3p7Bjwo635yMzFe7aYzmocxaVLeC2oYLytD36fSmSiwJPCsZKQFDh4n",
  "key21": "2RQZ7XV71mCS1GT8osWhNMxCT8deJUVRpgZUVRNkFjRdGkvQTyfKuRHTFq7NHkZKeNrCRbByd8GAwMAuj1FyZNjx",
  "key22": "2dqNBQ8CTQxTSUyLhRhVQD6d6mRL3gDZpUmRXGCkQjs67Q3E8YykKnaAM4N5aC6DTrdAiY2Hk66GF1s9hSopjhqq",
  "key23": "4mQBBJYPBtasZ4mfq4mmszyvpADAckRB2i1AwLveeARgozJvfGgWcLcPULwuczKihpsLzvv9kC8XwPfQ8Gotr9uE",
  "key24": "21wHecYaicKKTJuryWfFXrG4uhmQCDeAHj1CtLZN8ETki2NasLfa79DeoD6VTwjyTmXxWrrYoqpuQgLgSWtxQvTu",
  "key25": "rZcX5QqyRwuGFBhQBLTb74ACo7uJ25iM7bviA9KrK1MtTP6m7tNEFqWvXSPDV4vHigzF7CoGc3LEDWy1gSReTNy",
  "key26": "4h3eJN7e2Zb78gJGuCvR8Su4noNMAsMNB7LTKLf4Q4CxHEQiiRharRn6sGVeG6VdQGjtj9K3hDzEGYfWJrHWZJ5x",
  "key27": "5x49Aes4qyvot9FRzXM9rQ31hmp8MJeBAfSTmJH6KKBvFrXHJMsvLjTrcX4FDjiy14ykekeQLjFGuApEBWmiPkP5",
  "key28": "5dvotsmamQTVGRn8jzHKLKuNyqpHDc7LdtiGKZSUKpFzQdiLRLfK7q5KrSoqBL7KVvVngxwU1K3gcrLgvBKF6CHx",
  "key29": "54qoTwe9vybMs1LEWLVeGTjWx8ro5P9GQLHy6mN8Anr5wVDd2vksoa1oRGZ8oGd9awPsamdaBFkyqzR9mnEXHKwK",
  "key30": "29Mvx41U8QjZe5GXM1qHBfC3fQ2TEPtfePJr8gHwepk8pypWxt4696YsvCFibMV369fZyX6EyHK4bLNEUHQzqKjK",
  "key31": "2FfKV5Ct29QqND4HEQVo1kxLv9kpkB4tL2avM6U6B4FHc2auz9EnLbDVB4LpEnpTQiMLaPjkgJCg2H2P5pVq99LZ",
  "key32": "27dEULsqqEHvX9BjMELXgH3ujBc31e8gFEJ7woVYcVrZjM4aoeSu3T8b96prDmwDuPR6UAkvHrtyKkMuSPCocfTj",
  "key33": "3ZHDhaXbz5esti9bJ3WkgUvr7m5KmsodQNS8qFM6G79tzNBnNRVWytEa7JKi22Crm43wVbTdUcfn3Y1QXxkBP6M4",
  "key34": "2AtSoYFqYr87D453FJWtAUinfVyMwV9yNuMVHinUWBd2rrXZgLQXXVQ3h3KukgWntqeScz5w3KauDn1SW3MrXBr6",
  "key35": "4wKoDR3cTcVdDo7uyXwbPoEGGak2htN7R7XFLQU9pPeCiQnSStRCmF5sTvWDBPLfZvAdMP7EDv8utxKU9SS5x3JK",
  "key36": "52UicrG5kpTib6HXkcbQMKrSVeEBCJQRuhf9ggSeGnpLirZMSHXEtxmifMeHVS2GwL1Bd3cVnnGtYc8kXwy534WG",
  "key37": "2hpyRTQKmZ8PTUAC1F1Qwz6BECsqxdT6rt4hqPHV8KqYEVs3qV6yzGFaF2ibPHKSd5fa6v7AC5ew2zMzN4pDBACF"
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
