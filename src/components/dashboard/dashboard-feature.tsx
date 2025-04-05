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
    "3mMMunNzqsZg415UoKXazeJeu1xXUknivX68RHDteGs86juFSkLdRF7boE5yyUXEWDHHE5DwuvCB5Pwk71iGoZH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWCeqBYyWDCk6mwWVuNTXaJ5CvG67vXzGpxMHicuxe9nSEfmaE6vsYQCvBDgE5wAoE1izqTpyLaxHvbterN84DB",
  "key1": "3p8pd1XW9AwbeGy8qK47P9sF2NctSD5mdS2YCUo1LsigRgMKzD4J5kXb8Bbhvzq9Fx9X927dr6G9RsC9qn5e3CeD",
  "key2": "34ncUWvBASHt8BwgkMGr6jQshyAWC9LtL4qZyBkaDTkLcjtgBycA2eQ3s8bundYYFMU7h4FPKTi3Hb4AcEpiTrMK",
  "key3": "62sFPvYNkRWDcZ3vj4MPrDAxK1LjUNXjUKizfk8YPDvsTjqsfAfZsb62FpHKPRQCvwj7VDaXdb3vb52C6JfbsMuT",
  "key4": "4dovaPcb4gXn4kchJ3DXDFp4BZ2MvynGDvHPihhroTP1bGwLp3P2Vw33iSYFKAfcQH8P5VFzvs13RwtbRYPVnnAf",
  "key5": "2qKnkT3ZpSszEUtiznZspUV5HtyF2VzuKzPm2YVph8uPjJ6mfUV7kRcAn8VVddiYnf3hrBFd4SxduzFr7z6JY7A1",
  "key6": "5cSBkzNRfGLFe2LFqJywHQP59VM5Kia5n94W3Wauow424YUVbFKRsBEKPuPgs7iWqPuvif5MXbYo5mtw45jxj7AT",
  "key7": "SSLvDDA2bK7iDifQ79r1K1Rv1TMsGjj4YgW8oLczLhfSLFdzzVthFK5ErRHhWcGFKS1nQH3A3V4PQQRNwQiQVTN",
  "key8": "4iTUF6jcD4jDuMDhGy4uE9bcvt6Z9He8F3FnRKwYjoRQHNe3zLMSsoDbNCp1Zo1LUCiBmdymyMA9vQXVgb3Ccw5N",
  "key9": "2f6HEf5Bi5kFJ4LHiY5VtPE64ZjzFTBw4ryxMg7GqrSYWBcczoftmHqTjTn4AE94HvGtBkPYUQHGCocbds45tUZV",
  "key10": "4LhndTiBvE3r2FJQ39ovxaE3xcrZKUnBx8LThPKGfricGgGtKYhrVij9QQrwPkobxrGKfpmjs8affckWuoYUHCsg",
  "key11": "4qdwm7zu6LfJXDU1PBWKYhqCtHBRvmLdrwJEHZuT12N4WpYj3tEdn2jMazP53viDmGi9sxxnEFXG1uPB5ZxY7mDx",
  "key12": "622DUsomqaTdrGouvZ3AP1pVaXJ2dGMPSzJngQpJfJQV8q4Azxy1FyxmM929xPkPHnoyYqsTXtmNnJFz34xyjGGc",
  "key13": "5aZKcCMSDbwjqR6o8Es3jAbardrWpmcRyJ7M1zRf6VndDtZqj4534KLH9SwGEa3CeQhBuiHyyhgzypvexWEse3CL",
  "key14": "4Bx2dAahbbWx9GqBbtbUcdymTfkQJd9DxB1xErNC3W1iRidEwMPkC1tqPdsqkRtvAcvcNsEeifX462XFdAmArkey",
  "key15": "42zEWnjW1JwAw8bTBndFqv7fWCFRRXJjVv6rG8rzX59HY1pSsrw5csX6zfyHBkUGKZuPgq8Efoycp4f5z4onTo3B",
  "key16": "23A4Bm4Ld139aaZZjjzEthVWZ1ZH5fMXXMTw8kGUpRpdW8QB4ZKDLsyMEyZigMx4jntGyxd1veiQeTLrFrcRvgHx",
  "key17": "irpSiNMsCumJB5Gs4k8WWxXC2s9z552i6iMCqoyWEpHkmHjCms6YDaUAwLXAcbNXCSHPuN9QrJsvYqXNKYXYbM7",
  "key18": "23cvQcUGVsPyyEuXMYe3CTJP2CtTWcQbGRAENhwamGTzVyfdqEMHuksptKUwcGEzTFb6RKTokbREGfpoTjUjXDZA",
  "key19": "dehuqeYP3F32e3FaQPcGWkFx6iLEzokfeTBZLSzKasHkVnEfJWZVcYJjA6pGuZKsqrniG81N7vfc8VJ5PVb8A3N",
  "key20": "4JFemAW15gGzhVGaft7WynTvmetLxqPJkQAx2eXKLbofvCMJNoo6GnWzoQRGXsfzLer3qePQKo8jPLinGbJzoi15",
  "key21": "4c49okDjpZi5kZMH4sJNCYaZ4UbKNSgEKHnfVe37Rds5aqeQMpR1y1ZYcw4DUjY2omXA4VsLWexJx17kNosnjdsv",
  "key22": "5hutMfhjziM8rKckwz1Qw1hpxekQaJ59aFf3WRNm4Maspwdokx4PWKwKCmX8TNWsmhu929q51iJpcj9WEcWSTdod",
  "key23": "2dfiXErnmh32V9YUn3wQir22sGiUhpPdGsKDgvXw5eRMjRKshyjWrGBfpetHdAbogGNDxSootYuP2oRYpw1kD3Rm",
  "key24": "67SAsdCZ5RgciuC46VPJewx1qhH1KP5ooMXBDB6DTEvLetjLh4jQ8tYFUL6hpp3mGqQ2suPEQih5hkkXKTt4Jx3Q",
  "key25": "KfaA3btTcr4YLybZrQ4QDPEYyxWaTv1TFJArsH7TYND8uqHBBFCxfoCFbAE6fdGP1T3tkNp7zkruaHWVpcZ6NpD",
  "key26": "4t6zYuWRCjsrLHBJsvQhx9Ld6CauZmyx5Lk5wZprPCG2tF1y6uUqf8gpTMceQtKWrLyoqWuWJwHzwqKRxKcMDrkU",
  "key27": "5FTXezEwQjDW4p6qBJ69TLBhqtCmGM8kKmXmTLKpXDrSBYYK6GqZFcW3yDe12YMKU4D5hQ3oJd8V8oaNsG1E4PdT",
  "key28": "2pywkZFjFwa3RwyauQn25FyiFY61mZjGTjUj5FCwgMVaWFagErCPoSdos4aVi743FazEKrpGWeMgsYYbGRkxMXTk",
  "key29": "2ZjQYXomZVaEx2BUbus2x3Abxy99JfHfJtJMfX7X2Cu8HD5MxEvewiXenZLRGMX4DFTG6xthpPz4GwuYf6fDPaFA",
  "key30": "3tWhCoikobwjUHiMfnjEcSvqJRMuxJDSxs3orPcwNiSeRcpe8YGxjKr2UidRi1Fuj8MbEd6N3pjPuBJ6hzd4Z4ut",
  "key31": "2hJgTudtnDptiV8rHok84zpQsn8BDaEEAr946WTv3hqtCowRwRQ7F7X7y1oMnezXwzJ7bq89ukw1GiX8VJsXYwNr",
  "key32": "hMDGjsupJEbvJc1cLvsxGXGbm1aDFMm3rnxrok4Rt5pQoTwwmmF1evhcLbRUvchJzHPE5YMnGEZd7ffwnk5NLSz",
  "key33": "4RFzji7bQ2cDxA48p2BKnDnnxXzZ5Rxk5yoZKqMfQfM6LCQJhpvwwUQMHk2d7eqY7dPmUQRX7t13fJFRDbECMaS3",
  "key34": "2M7kAVDCMv7aG1tKyZgt18kCp1ArvH4PbUs4V7X6Lhp8VevCN5Ag4UdV4yikpzZ8W6Pb7UWJ8t5LYHrNb4Kz4UU4",
  "key35": "39MvMvBo43RE3pYffQhybnEJGsAYyd6AGkHM8eW52UbmPDGS3bcS4EYAKNxyfpSC3YiBRKZsYBuAhE79uLud3vhh"
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
