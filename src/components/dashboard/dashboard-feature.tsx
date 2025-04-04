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
    "3K65ubaQMUUXomnE3BiFpr9w8Rjf8iD65CZ8BToncEPMLZy8FicuqKj2GVbLt9F3hgGwLoopfY1Qn2d5wy7rkjQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AH2MqLFGJTN2HBpbsxwUGmJanADFXfrtunuPpT2wmm5nk5NRDte6ZfYGjTuUnNm1bCM1EjT7Pd22b6yTm4Dm5rr",
  "key1": "3HVdcHNr7HEZs8oWKfmC7HH1CnobeyezYjNjXvsjGrUmrQXhrhdZkSGY18NaNwxG9wKhidxzTbvN9NHGEz8FFBis",
  "key2": "4EdrMqrGDc1t4NpTfvxqdvzKH7UUf4qnyg3hWQ65TX9bePK1VmeKMMx1pnXPM93NWGMwL77SjApxTTJHe5PJmZ2J",
  "key3": "wZBNLdKs6BU7Xt1yPfkjUTRx8jGU8kKuDrKzNFQmBhygFbTiDYi8xESCHaWuZURFBTjG98PcmKuPWWSR139hLpJ",
  "key4": "dcMsagBcuanb3NEtozdSxcyUmgW8NDSjaRvSSPkgLAv2gYWM37ae1Lp2tJTyvYDqFjUBTzdsQYZXy2CPA7zGzW4",
  "key5": "2XLcqd5R3qF85pTbhgPFvQHeCHvLW1mvPU49vpWwvZchkEEbQAC7c9ChX274B3UwFqJqpTJmpLxUh6pXT1zTU7pQ",
  "key6": "3LrsDidDeVajEMFgf1jZEdGrbhCwPosbYmnLpC9Aq3cTUVgSLvf6AVtVW7bHBYzTnd1GkJwU496zfuMaRPJGcSjN",
  "key7": "65qpfmsBzfoMw7YMP6Vtm9N6jo1hoFUqFJqzWosViAK1BndypJYfEqZjHrR4XAYG96TQxXsHcEfDCkafUNhvwYnH",
  "key8": "3w3MP8eojtopkV9feMvSNGcCcGEMeMo24yD1AdvMxSshmTqTWANNmf7TkqkU1hph6rs9DzC4XocQsptincirEcpQ",
  "key9": "5KV3MpM5buxp4SZQsU76KjwYftjhyJHskjAeAZW8MR3wxCGNMQc2DSKKy76fNt3jPpX1vRX1uPFz2Fd1Z4R7oL63",
  "key10": "YDzefPR5XarVaDq53inLPSqYLpdfN9sq8xc9szMJgSEwRgwQJV6XQ5n5WuzdfaEhnaVpT9SRN7M8vjqxSQCV1kp",
  "key11": "4gWcComKgUi1qEEniLfFMSv8ggkjMADFRhZHR38eaXdYPRn3AQjKRFv9KXiLbnmkGED6dMyzVB4w1m3VVEtPRLsc",
  "key12": "5bvX1xcyxHjwdwoedURaNnvpET9YDaZbmZ5qHc9EpVbKSgmPU5DBjtih2fZttEEJomr2ySjxnwhFqzkSGNcBTLYE",
  "key13": "42MMWqcU7BqL4EhhBBYEynaykxD9MFhh9mJFuJg4TNJjVsaQTaU38L1AJ2sfk4UoKc5J84DEvHJEKctXs5frTaER",
  "key14": "2ikQcRr9Nt1vdFuaCUtwTNiaeXVvUw4ReK4HvNSpyyYskhF44BkwHFec8Q8DWk2RTNYyni6VheXfHAZsXv4MxHDB",
  "key15": "5c6SXkryNefDueryvXwaEN7rDu8nSp6uECmt1Q5z1y2yFuz4BzVMVtJybJX8tS6cshwJAu9qw5M7M2hWgXdFwNJh",
  "key16": "2vnNdYoRhYrpDmSydJvjivWZ7kkhRQv5Pm4TwBhvjqSeY9ug652gp9u3FvXci29sMyLwhgJ9W34nJruyjDUMdtq3",
  "key17": "5gvsdu41GrdTCv66HUSViUwYCBJVFR8GLuP3PYRHRJFrqBavh8dmZwSw6P9dh2VBKgu2sFg4gx6GA3VAwzfT8cjD",
  "key18": "47eK5RbH2F14sQTci57hKxVrYKfMugnVYbNbZQt4QNVNPtZT7eQZc8Hw3sRqmHCcgyRbEU7ng4PfrPpfK8cXhaoZ",
  "key19": "41FM4iuCm7zpQaWW99A9NQLz6Cjkvw9okW1NWx9bZzYepGr9rNnb85vZeFZteRoGzai38xHZAssnhciuBBU6YwN6",
  "key20": "455RGJAdtmRcFu6tmqWPU6YD36UcHysMLuY8xgouNHekQ5wYa8QEkBQqqj9nmEqz9aJRWYbM53jBiqW2FpcJuMva",
  "key21": "2wTpfZVJZUfSpM6cG5YZP62nwxnCevpjK5gShNSWNj6jwdKjSmYbijJtdeDd3THsKNc76BKh2usiZFXb52aFevr6",
  "key22": "2Nv3X7rrg8sPApgLNhw2woiNBkX341NrMjAsfbHntYt16B2MQotHa1ZrJYiHHvDFw5JwxJ79Q6277N6bhFgVPPza",
  "key23": "2BPEb4CJoTTJpfqPb8rx8gp6WE3Qk3fxw7BivhHvvchr2phGCT6BX4TNnNASufAHdha7tAx5h18UdXDo8zvX7xig",
  "key24": "3wEVAY4U2RaZ8QhFEZcJ94H4zUvmegeoty12aUHwW46n98ALorVVVbCm82mGvP6gQmxkL6B88KkobjohxkTdCmy3",
  "key25": "2HhxsY55zHojWMSD5DQNf2PxTWHFccr3j9e7B2qPKiT7MvhEbxviDeYWhmLLZyy7w5yt5ftcmoKiivyuMYev2Zqu",
  "key26": "2sHUzhdcfAeuhDM5Jz9LFqX9ggtZYTL8udpBsiR1Jz7uXHWyqDUmhveXqt4KWUzZs6WdpLHBBZSdv4imHgaETdpg",
  "key27": "Jtu8Xkpw9ZXGfh6NRdvxELoe6K2ifxeQvDYTXcBMhw4sVYPCtGZ2roV59FjoW3mMAmiGmeBrXobBzRUpZ9xKLtd",
  "key28": "6xFH3KLrdSwifJ7CLwKQF9J5tTqsNoRUkxi1H4QrgbUKp3jP6ruaz32tyFBGayw9UzmkpQs6xhoCN88NHByKKim",
  "key29": "62KvzVnJ63Qzz2keSzVdir89tPPvZHGsDiwRMbsGY49P7GgCZiwkeQkoJMZJDBSK5e9xbLzTxawF6k3aJy5bqJyG",
  "key30": "eNXUCfdiZLwTT9tAmSRQyDbnTvidGnyqoXKLAK8YCwGYFvHJ7ZipEqRAC5EKgbsihwQx66W9DN63TNfH1H1fwCU",
  "key31": "2nUkCyW5uJywTuC96jhwcXkp1dumsxUdhNZEftcdsLSB4LPMYxLU3b9GoGco2VvMnw7pMfgAAUzrPojZXtR6y2V5"
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
