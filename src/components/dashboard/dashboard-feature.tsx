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
    "4Swy2ScnqFvFnY4UUWJ2mRLBgAarJbUehwaUbKVVHwgJXU371Ja17cf69QRKqyWntEZzRu3d9hvZ9QdNn8gsep3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivnWuEXof6Fpk8KrtUYJLtTM3bUYEB39mqKd1VH2GDfF1c6bR3kD2XEkY6m1PYnNjtvprt3szJCmZEo3dPp9TZV",
  "key1": "3bNc42K7zMvWBxPPe3QH28oXjYzFfC6417vhuFzg6azvuPGwXk43MPDuFDFoEfeUQqFvHnrBiJPvRqCXuhyFeR82",
  "key2": "26PVT3wmi3a1xgDACHJtDL23R1uAggrmb52FJkfWedCWFrwecUFKjdsVNPcy3XxmLGCexqFiEPNvukNTRN7F7qPY",
  "key3": "5DnRChTak2UsgVKn9LAWDC9kr3gV158uxu11T4YSFLLTddoANNxcAz1konVsYcSFmNsfrCA7yPHi5fcwBVzHQVhi",
  "key4": "2aVr7exvfw1jCYFpmXAhj4AWHCLyNajQZrFEjyLZFjpsYiZo5oRey275yrGW9Ev8hWei4ZuzF6jNhD1smvsg4S7m",
  "key5": "4gpKAAuWZ4bTUhcmBMmyAXnYcfQ2QqKgx9UZ92UzKAnLvBtPn8hCp6W6nsCL7FjdFcA4Zr2WyPBpk3kJVnJFbpL4",
  "key6": "2WkEAdTXYjHr4LrcvxejRDd2nQ4kVXTvY8sNHkJ1dZAFqsPAqDz1dp5o2G91xvLjgHbjxRDfx8JvMeBhaWC4zhno",
  "key7": "4pqRmypzJw9LqqtHbMKsA7Z6jKwWycLkh5DoNVieGdWAqd6RpGyJgHkMWpcSqBAJYqLPYHbpk21J69Wu87suCaqc",
  "key8": "BSPPcUiHJefMZQWwzizPgqSChhsmQziH11BeyCkVqfd4AGvDU8vm7id4BeVK3f1VLQ72W32Nzqn1kzbMXYAiAvR",
  "key9": "3sNM13pUH8z7n1eYmrGWM7KUW4tT7N7mw2tW9Kp8cRfSqjdWFij5wACqJUNWQ2YYWqo6gKJxnfK6oVkfCS3RzVto",
  "key10": "53WunoV1dHURXBxwWdd9JnGS851XtUhR33fSPreYVXMevwzGYZBhYTCrqWrRiAEy3d4pJXpz1AKXwFekt1maMzXU",
  "key11": "2wZeYrcA8NsH8VNjAbrbxKDufEvKSzzj5UiiSgeLKeRK9yQW6WEwZnESdZbNh4ybgawm3JupLJXGTc3UWqWmsXge",
  "key12": "27oczYALMTo5UfHMWt9TnDLsf16sck9RwYYpbD6nQmRWKERPFetSTDqiGvHW8mZQpWQEjKkWoYqPo75b2qwfUMo3",
  "key13": "2Yxnw7kPwtr6hXYpsamdf3fXTocF1p1s5tyx3DAHDSeH3ZeWQJqWS3Y5kDDb4CseUcQHiaAMD8sxVvvuS8US7oV7",
  "key14": "wgXbVQQkrTGsJFxmdNeJdyvxfHhpdGyWSMZgW7CimS43SEb3dhNS2qiqkqvg3ZdBQZgRx2oe6jxMY9qXqZ5dfpU",
  "key15": "iAHxZ1Fic5jAMwm9KT64YpCd25w7ak23ycS2p7yo3AibL6wYg7TCPuiZtf9TDRob6KeWkgbDQBtTdpoGG29sPTG",
  "key16": "55uXxkxe6n94ByRjg9faA7kHAfN3KfwfwgyVG9YhCMFYd1gPs79CF52HdvjRKHfD2Yr453144n1o6okPk7SeUWob",
  "key17": "AAEhu3pSvMZ9Raf9bhgB4P9zmg98SMFMzpS4mjgrwevy5kLqHjMKs7ktSLo6HJbTdZg3e61rfue26rDrSowqCoF",
  "key18": "4BM2qSXidx3TcWqJRMz8yjkKEB5awKmvqZn7fWWZZdN1A6vTafauMNtS2Ss6DKANb6ZFKFL2RYajH46pXixh3bkG",
  "key19": "FwBUekjsz4nwQMxzCnr8TAMWK7VVZPX69TDoGhfp3g6muQEW1CK4r8tmM58ddEBK1nPmmfS6jk339AMRzfTfvRH",
  "key20": "22FLxbod6c6rD4qqNWgkJVNMpe3Zs9arkFMeCFQHZ8esaZGLWHJnx38ejVDpuzKJHt9f9guiRLSGhcBKaYbxBtGh",
  "key21": "4VLgHfswgk5wf8LstxwK7XbDnV9d74JLXEBoHsKkP6wB29Py8bETume9SdmFiuWXR8hrxX2wA9TRcjDdXxXTKvhy",
  "key22": "Fv1wZSuWssoi3VN8u2DCYGRoWd7GHivRjw1mjBB75yC1RfWmCzTjK88NqRnPYjxUnMFczZvgkPFpqSVfmfpT3pZ",
  "key23": "2R22qiAexEyixAszhaJGHMw4gofE1iUf6xMGLrCHYbz3Jvg65JyU1k7jivfHBsNymQjbHxnBMQitnAbwNmMT6ZmD",
  "key24": "4GQr8KtGqAUwVStSetRuSN1jzKgXZ4e4vmgCFVy5cphuwavabHHqGMaabRdHnkMM6pzeQDxWxfvdvgS8QvGaZatc",
  "key25": "xMo4nHpUYzw3jiM6ByiqG71fR1f21LfezBKk1BJqtFWd8KPCwyrtqmckopqgVsuLv7P23b1zpakQ1Eo113ahCEB",
  "key26": "2Yv3Et5mThoqpJTC9mm7zQWfWgG8Y9S1KQdfXSwgrUmFjtogDcwdeNtFaGeveFf7d8HUSnkkwNtYWX7GPKiVmBjD",
  "key27": "3kERWBa9oFCeCUWjQGmUvcntqGU5Av8iTGptYvv2tGUGXG4137hD8hqrrcFcGzcx732xuMhBnQGt14p8v17tTB2q",
  "key28": "3kSidGrFmgViq1UqRSxThBkbRhRES36BkNhAcy197r1qEeVTiPgqb2JzXKY4Zhi44akuBGEQTWGUCHMamvKqzDav",
  "key29": "3B7PvZQrGEq1W9Rhb2KeayqwxfAzcf6xHHKgN359W5YhK3cVzzR9Ub5MnPbxGiJTzmwyBYsEHrLCTz1sHKQ9Gjwx",
  "key30": "5AkKuAoKwkjDD2bKGrDD3ofhHa7ah9AtEqVH36a382i9p3yZWQa8ReobRxRDV4Q3KimJRbL91m9EHYycCynRMYrh",
  "key31": "5UM7thNSFqt3ioHNf81h91n79CpnEzpUc49Ebw73wGWQ5fgNyodUXbWG2XXmN5TEUWmFw281jbPUDLZYEf5nrpUh",
  "key32": "3mKp3JRSk4STeQLoZU9WfkEMi9MfzRE2dGmquyioeyAAK2BojYqE1Z6AfaGUFVoxApcNrUQFuTZuQMynAuiC68Kc",
  "key33": "2JvTjthJPzDwFQ36Ukh7wW7M8fecaYG6hERiPoWEnevpJ5iFc7njAdcUnke27jhZa3QDnZLbFQczT2jZjAe1RL6x",
  "key34": "34ZGaEKPs8aKjeTSki7tWNKwGJ42hbJuvQ2a5YRtXe4CZJAzW768My5eT6a3iv3koAj6kV1xKQAHqxsuxNBKntKX",
  "key35": "3XAmgtwDp4wwWQ2NRQw5UJmV7v4nppmwH3HDZhfCuuWP31jz9YsDv5rFS7FGFUwSR1wyMCRWHxDvRunyeUFJE2vP",
  "key36": "2uqupnJ8WNpgDqHDptGehbeRuTsEk95rcZ3PDzw9Zf88D2XHCoA6TvmnmYfTdgYQcRZwhLM6fLGZ2Ay1PyPKwhRR",
  "key37": "4gJNYu8f1qYD3SbSEhBaSJ5itNrNHKmWSeB9xjkmdraPQG29QizCnsDPaAsqqCjncZVsPTgRfx9fz5Wtwyw82yvg",
  "key38": "3UnYvDneB3NLprNtRY6MqWeHzHjL1RuPet7RMAf3qZFPRjs9bzWLBU8CDHBMj4BR6FsD7ugs6Xt3bSmqBT6oK7mR",
  "key39": "P4DkyXJT16BMZyKAWjKoegdsjD2w2urB1oqrah2TNLVBwJ3ErYfnfWytV1SThj92tPeygWFFYooqznGh3cqiMD7",
  "key40": "mgWPbBM9CDqgRAxvL7h1rr5UjskDuVSVvT3ELTTWbvXtd2Wd5Cx9BD4UnPmkU4MnyKW6Zw7nJWTwbhUVVRSZ1JF",
  "key41": "3hRaA5gpEopBMEyFNRYG9PNarF8GA78RTBxJQ21LesZwS8rMNkE3Xwm2n7AJCdnULbPCuNLnJFu2fLQ2v5bzm5UU"
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
