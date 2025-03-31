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
    "437g9hE9CiLPA3CLccVcouu9HjA46xgepmybwS9QUxN8Xaw2hFsoj2uo5qvtzSJnqjeAncBDfZ57meS2MH7cAfz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GjPv7WhzorJSbK32KJuRsAeRw4DvjqnUkGMnPvKiGCcgL9KWTjJDvUZgu8CQtWzQcYq8Gxn7NPL3yu7G4R6aeHm",
  "key1": "3tvaoYR6TvcbxPk16CNDKTLjF6DGScYsjuFJ41pkpf3EZqpBixKRapvsGEkVWQF1VbhsorY1Rge9TMZfx5TNr79C",
  "key2": "5WGeWLWTeLasppQudrSdYWYJ8uWWgKPcBPmM1Fj1PLtQ4vYAHjmSPE5pNHFyMZ6fqBbDYFLByicEK6P8wCQ3ySHs",
  "key3": "4uZfJxfUK9Zjzn89nSH7zEyTCuWGUyKbmgyXLVbYW9Xui1HmeNP82dEU1ioAK7n2PqZdVT1tjwLqFfVAjXM4Egta",
  "key4": "38v8pgoyY4mMTN8LoYcZca9cNuNxSk5j3UYtYvW1uxi6HeJkQbhNR8i9AQhYMXirqXSo3YY5svMk2HbRLdnzRUBi",
  "key5": "2WpJ9Sx4L9NgCosFQFLunMfPX4C9jB6d8c3LKWGLwtmY4DRzt1Udz2mmuuhNC5Ap9eFofsNVfVF8Kk9qWefUkCFs",
  "key6": "cU45qvDTXAfFC6jwwHd6dCVq8Zmu76Aw82UBCdQ1WHT7kVExXdEXUwPvTjv1vkW6wCrw5x3nKo3kFpAd6sZkEGq",
  "key7": "65QFcnMwkhhMCgRzxZs4qMNxeua6ThZwdvXLzQv61sNHhWwPgfe48aWfWrppmPqMhYePFztVkpJVV8tDpM6JvsTN",
  "key8": "5cEvRDQLyB2GCA3QJBzwK58C5ZDahCniEpQFKXj7TqyAXT3vAxY7v3E9VgDGs8deujm3waVL85UbctBicXtrLuUx",
  "key9": "2vbYUXXoB2ft88bp7cx6Pd99KRyqjbwekx8BGErsjpmigNXDK2CdzMmGqChebB1heZJzty5hHHiDsEtmj9XigRWz",
  "key10": "iWa8zXs5Sm9sFEpVSh8dGREuWAUYCwafoCKWjsq76s5EXVR7QETzKjLm1odztt5yA1dGcXXsfpzo8YPi2YGRcbg",
  "key11": "2ccXnMTgQhNfrG3q2EfkPKMnGzDawpTACG6UVVVVnE5X965426j7xpP58BaNkWzwfhhBpkEATJvpRc6qWHgQECbe",
  "key12": "345szAfzMGEi2t7JquwrngYvJ81M9KsLpnaRkSJpHtrprJ9HoYUEbkmuSCjw5geWCELUMQhnGDDv6TFd5dfuUNKZ",
  "key13": "5fnyhXVxzE5XjeBybqmcq5tHyv2pLC82gDLtaVX1VJu28dkvjVjxt21JM5nPWZ7P2SCMKhdEVgcNwk9mq4RiiY5n",
  "key14": "4ZVTuDKQ3W4Ku6toWMgH4pCrQ7AZEqwLGevephMG2JWcVBNbDrDF1QoZmseeizwHjLtnQiaHCPJ8HgfkJWuvrKF8",
  "key15": "4iDA81t1mXr9K9AqvuyLnqR2KtWx19QLP7uYY5asaKjWSdWDzUDHFwsoHFXfGf6ThpfMHKGA93vhJCt5XBh5zRzy",
  "key16": "2PM6FEs4LLE1VYJ8cRwXD3RoRWL6qwcp5x8GhEsw4pXvb2QsvJhDkzBQ8PWkzWiwnrRVaLSXWTqFft5dYVhm3bA9",
  "key17": "5vuuvBavdUyb8W9G5TWfYXNguvy5Sk1wtT8bZLdKALPEuME7HAeP4FEfG58hNWGiC1v95ghotXtdVT1qKqLEeHdh",
  "key18": "jr6bLXGd7idAjN9aWoG8XhR3Zmd2M6mkvu4jX9upCpc1TyrWBm8L8VvKdGrhyLGXQ7DRpgHQkWRyserPvb2i73T",
  "key19": "4DH16kEV8vNBQ68weRAdEUoWa1S65v2p5b4BZKKrHwqC9bZYJxvTbUnuXvpCJGE2Cywvebrgj2U8QKkTpwKdbG5k",
  "key20": "qMyNAazkbMRMJ5ohysP3QgjWj74ToGsi45Uyz58akTujiJ31k88QSKYkmHraV548BMQzRURZLsxScc2tVNJ8TKv",
  "key21": "p6eoZLLciqEG7WEuwbhVgzToT8L2UdPSzR3AVGtvxb1yLstGTapMqmfQfJSUffaEyj1XPrct2HMHbBvyM6vr3n6",
  "key22": "5jEFBJXkQVTJVBNgA9uKdQf8RF21ERnDMLtK4PkyrMWZhR3zpJW3QVee6Q7xEsB7K5WbfVHxBFPGtewggyk2enKG",
  "key23": "2P8Rnz5NLFsZbQF8TSFf9VySGjfuYRvs9Q1Vn5Yojh6VB2KgdK5NrgaNpNpJuffXDGNj7u7GnniavBmTjLu4t2Ar",
  "key24": "aFPAWV2q5hEaT9Fs1JfsCsmbMYngj6G26uPrt7vGXLuEA2SuPcbQut9keZ6jbKdbzZBcUfrjTxZNsqFGNC3qPbr",
  "key25": "3bUEK3dz1zU6dYHdoHz8dNZrpDkRBM8nHZ7YifjARC7PQrSDonkGvzPMwNN42Qm4URRHrhpxbxqM1yUpGXxuDJ9d",
  "key26": "5KgvwwxTXdM9UDDK5h2jG9iv38PPA4hPr6ne5RvoJyV5jKhPXe2YFvqTcuStFZz4squytVgt7JxtnTwbJFhP9sZU",
  "key27": "2QFKMY3g9UhUnwYX6gCZvYLnsExRTowG4kypULL5UvzeHKJxMoZ65hXJbpjKhbgJJyL4rQTmpfS54wbUocX16Ts2",
  "key28": "4ScMZo1bgC68sHNwAhfR54Kj7guxGVoxDuReA2LrudCBHCMxQY1ph5sJK6qTYpXpuLZeDQJAMzLDfk3A5KNm7Xey",
  "key29": "62Rzj5ovMqxAvEHq376Xzq1h3PEExtFFsdaXNGKqYVPbtqycsjkj6ruor6dP6Rrtbf3UvDRpbVnFb7FDZ6ijaUbv",
  "key30": "58tLak3cSCKD1EVyW2bP5LgK3E19n39qZJgeJhbWStur7QcETXqrkDZ4VbiJsMPAuHK2MKXyXUJeRVM4yrmwH3oc",
  "key31": "MUVE1nXCBDBExkcc2HfNzdKJwRyoPMUR5fcpg4CGNMvRSMLrNF2B5vMmjwUhZVtXCnoerXq3CRe84LQHu9UQRvp",
  "key32": "5qsacUcoA5npaZ4rgu1d1uEAJKq5aF25MtFne9qjexZKEHC589jHJKcEixftWuMotxiPcMR8qK3wbUKXk2FQxPiL",
  "key33": "2y8h2cTfWyW3Kiat414aD5deqGjUqTh7TLUR8jsRh7rKT4DP7qiCrkFpBMBacAFWWvuvo6UDS4NXdaQmJGZVABpD",
  "key34": "b2PMFVC3RbN2izCVjJ9BYKnfTZYT7vU7Baf92GRKBJ8ZkUDecgsr98eM18ZnvkeA4kh7XrhYQzdNZGsHUSGiGeW",
  "key35": "4kSR5rCKCXp7LtWjisR9XiiMeFR5HcFmqRr5hVUo9B7hAqnvoGpSKDQTCMmqR8vVPiNqeXpQAHaSQJpfRJR74ode",
  "key36": "2xisRtEBewHttmcqHhySQKCMJ2UaE7yfvcrio4SBVmxCmpbmZZUXqazz1jHRZGi33MUusyzdCEp9NyaQQcatPw2Y",
  "key37": "4nDMBrfsbkAF1MNmbHKjng86friZhKFZfd4kPra2tcPBSpBTuhGnP7Y53rdX41kRL1jn5k3459y2BDUXqTYVfHVa",
  "key38": "2xnhpVKPoK299DgQ3Az4kJRe9xCVJx3dDwPGjDE6x6NUSBiUfHt6MPFYxsDNXaqSyKSMwG1fp6aNrKthMbqhSept",
  "key39": "65cVTyp2H1YErHVEK2xE5henyeZnrRvf9KjEL2JVaHvHvXAcpzq5x3TTFRcFWks4iK9aAJKfZbsoV1X64YLcH5u2",
  "key40": "446KirA8k9YhNhLZsxc6qPL8vvqW2UXTovh6WpjrkiCpszwCPytxcMhyGim9ATY1WgQGqVQTCps5XKRULAzFULqZ",
  "key41": "43Wocf2ahcgjs8A6ygG8axSuRWwkA28RbSh1ttRfNTE9PMBMaSAYP1dKGyZkf2Ny6C9evvCJd5Ut8m8SDkZmY9LA",
  "key42": "5jSW431kszPA4zC7bxAgES7QWNuJAE5zt3MsutywMaB6TqSK79pLZMFjuQR46PanEA7xMLAA17hWZWgWoNm1keyY",
  "key43": "28wHYXP5JRhGPYKXWH7QV6baGW7kkgUJwXehLCSWtYdxfQbd8F2P4r6v4FgZa7Ar8nVxwFzBxc1APCJnT59XhQFL",
  "key44": "34aZEWuUNSB3pa4jtmXvLuQs54WeDdQEWmbv6AwqfaroAAhmd4WDC1C6yGcUCKYPZYxfbNrRh7ZWEvhi4ruXBnwy"
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
