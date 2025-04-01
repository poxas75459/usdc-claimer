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
    "5DFb3gmGLfEhcPYTSDp9SEYjvXJpNTG8aTf5ZvEwxwhJPWMcZbAgh39bt7xp5n5D1K1Y8QCM668XLjEVXxz5ry5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hnEyvCBjc9yBWh1NMXDuos8UgrkPpE6PQatvcbe1BhYmhaHgcCt9wkZmAQahDH6aLqmuzX45VE5sr2cok2oYFnc",
  "key1": "2AuVYAFVqamUECTYtMPcsqZiJkxmrdEfUdxPp1FkZLDD9mKxZuqUJJf4yDEn9TT7s4Q5QuQ2B3jsGkQ5piLdeFrF",
  "key2": "3hJqJqWPnhsxgis3wh1Tmjfc8qcMxHEYSHLhXmCMVWT7sc5aFcfXX6BbWNDbRdLBgJaqgxNJ5KzmyWbdSTyqvFtJ",
  "key3": "4pJuGmtd18fChTvDQZMm9TJfgz53ZYYHvejJtA3XDY4rH1sZFYg7skif7a6vv9za4Vo6NKbWs7kcJUKQ5urpLByq",
  "key4": "3ve2NcF1txNELhCARyE5EiR5S3CSMe6q53tHTFMgyNXifW1Db7yNaM3SFxEK49XjHw8fP8KN3p5C5fWuiSP3xpPt",
  "key5": "2eWDfVZss1pvMcP1VbkovBbtN5HUyT8eysvrCMmg5SYxhGZPYsrcYRW9TbnMR6BTba4JbtpXnstfUvNveaYSsmmp",
  "key6": "3T5XrHZvDBUkiDSi33pEpt2NuCpdoXW7T5hTMQosZeLba1bqCkpVAmeX7BXuwUUhXFpNBUoMBZ6SDsHR6t4WBnKv",
  "key7": "K5CKQ35YBtXq4GVUiBX8TJj1yB96yN7GN3LQfLXhd5tDkFnYmmj2Yx7Pc8tahfatunxx9PkTNV1aKW4azTGTAdX",
  "key8": "5BHHE1B4JGiYA9VDFdMVTw2nFuBBBbbuZPrR69jqdug7SBm3GPMwjBDot8aGqCFRW7KTHxgY8XP4Ksj6vFnrapnH",
  "key9": "5eF4CgUJuUzbSBbBVn9a6tRM4vdvMJJqhs7vARrMAqE5Yv8rQmLFYpcRDqtgetA7CfiUmKf9YtLXfqqraU6eTvSH",
  "key10": "FeF566me1iQzX8ShTfvuHqtKD4Xwr1tpFfLXWFg8pSJTvT9dfCwLrbVwpdvZ5rJDiYF77BTYQ85xEroUMucvaCH",
  "key11": "2sQhZwkoTi9HWooxUjXq4skzapAcXJpxbjrDXAMa1nXDw4i7m8VHapU9RQqdp2GRVnWWa6QVZ1cnVeYDPVnoKLp3",
  "key12": "5HpbXGJjs8K3yAirjzuC3wHGZbmuysuwoETjEn4sBikxfLhCxbzfHMw59NVnB4h1r8tY3hvkEGYJop8rcGtPrjNy",
  "key13": "2CzHEeyCBpWX2uTYNG9vNmeHacDn3hJMdzTdi7z6iPKZrA3JNy5EE4bqmZPkZEcKfj3VC4525gb7voe8un2BqjVV",
  "key14": "5rei9Ud2HipW88D51ZkpZk5Hw79ZQbG5uW8FF9FWP8T2LBG8iCiZ66doBUQkMkfMtBcYdrnPbXDkSQvcAsPmqupw",
  "key15": "55wkjkmvfYz3uc3APegydpB6p1UHRqsXQowa5E7Kv6nQTHPCDFzZwJreSUqX33yagoWS51eWXkLQxf9sB9HSv512",
  "key16": "2v69eH5QRui2ppNtdHwkdzxdKcGBDcaeKL3BkgpfG2Qf8HtMYNBhuV39MPRen5iD6iij83FfdSy4QCuqrVpFLGKb",
  "key17": "27dPWLtEbWmo8W1STVTG8cm26ppDSYiJz4u9Nm4oe5jg9Dv5MSXMwKeot216Q6bFZngaUavsj2T4d6PxqFoS1oed",
  "key18": "2Sdihsa9bKPnmhLu2QSzAwWGB3hMANMzSrtYKdWzVSp7xSEhFvvzxZT4jmxmnb5ocSGZnkHJCzWvLhDSjNKQWLwj",
  "key19": "2dbtbD8bYqZMgDBejvSUfhX2V7nm7Yi2C8EkUcesorZywzGFn8rLQt9wzHuQwPpAWiKZZDChr4rnU36oY9nHn3sm",
  "key20": "2FTgMfeNiVwh4KXi1AqL9ednQc5fSQH63ttGJDDDtuiTmz1tzfXZZNyMUv3BoL1sfYx9Soz5J4HoZSCNJWjHVbwV",
  "key21": "2oF33qcJYfEJ2VQdBZG1qrz3e3XbQSEAud4kjJFWLM24sgzzJHfTYBqxfgJRNfUtPmwR1cGAg43JPZwPpsJ2Q7GL",
  "key22": "2AU4QY7tYefmYQ5MfCBQDv651kdPsMXDCXMB6rjZ4YJB237pmbd3gtKoF53NqhSu7RbTvh2DVBYV6zFZzgJ6qxqL",
  "key23": "5PvCXXQcXVhMvQCLm8wPSnkUmuLPhZMHrYNbRnmRpWxpkWiv8gV6oewNipMZXawGH1GSD64rKVgfByvHik7b19za",
  "key24": "2kThw5eesAv6eaun9SxVpQj2TUSipFT64kYgJPRZ2UqTwM8xDvdHYsTFtV3A7sZQqUbrYgBbYdnrusUCakpa723f",
  "key25": "5vJ1NjMUP3Ui7QXSs1gPKEQsbirdmSjjDDVDd2aH5quZLm3g7KGGGeW6ygfWuh4u1MNhUvkytKByTN14ZBhwxu2y",
  "key26": "3MRHvVLwFBCc98qMa1z1dGXtyCRoUq1ssQTwi6XkvsvtSpvgFaEC5dMqGBFGnwXAcv7MrJ6jXLbyr3H4NU3XC2Qn",
  "key27": "2whoPMRPpdjoWWKNp5RMFRCSfy9bmr9MW1Lu4MRdXm3ekb1RMFJ1BkeZMHjmMhJtydfooPpS4Y1SCDkZsR1JZtBN",
  "key28": "432oumvEsyBwgeyXLYyT5uBQQx4WStytqEQXdh9znKcSGwJTxeL1kBEpcMuiec7BwwPxmMMigzF7HsuqA2L9eq9c",
  "key29": "3dkrY2Ve5S68UFXn4EEcQShKoja9oue8xwvzXdYCzFmmz3PpUMsCN5z74ajMpmt46b5h4ZohmJN2FgNbn5vvbAWN",
  "key30": "3UiNe5UHbJy7kbsUfMyNN89cqxhdtyYYJDAA3J5s3pQCCGG1xxkRYCZPC2mzrJHndB64tBZ6wpQn4EPvjg4rstBo",
  "key31": "4xFQNX46a92EMiKm11DG3PE9t5VfuPecb3EuDKnHKVbcDsSf67FXX2ZbuwdmmzqxSZB74EJTNGEAVS3MnwryVyeq",
  "key32": "2FfbqdL1RtYRQGPYt5t3t9ZaNUSX7idHKE9pkMeqyMnMEoVqnzreJr4PXCzCxEswDoTwfgz75R9ZMBQ7ihCnVXk1",
  "key33": "5LP2CfgjDsfFaJ93sq5wcVnuaSAo8Tgv2Ti6SGZRxoSQ3waJQ7TfvnGRvHs8PybMTJToA4ucXoq9v8E5MHRMNyWj",
  "key34": "36xrtnYE3z5Vey5t11cRXjm16b8TYCrZzwGr8AuHQLFtumsHdpXNyd3j5gNLEz3XWW6aT4GMC1eybhrvabxQ1Q2E"
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
