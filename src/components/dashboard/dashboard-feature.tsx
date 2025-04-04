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
    "jZqPkBMQ5ULfCNo77B1rhPNMJkRp2VHTbsXuinGvntTwnjMds5r78z6i4PEujQg37ab93kDE4TgA6q5udVBxtor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tnGQ5ZhKknPK5EfJW2w3cgXBG7fJ9du7XAtMdhNBj94FZSJkWbRQtArRkf9pbeZEX5bD3Kroviuis8XdCnDjKZc",
  "key1": "2VaECi2CLpxozQJBr2GgamxFWkbywijBbaw7PcNfRgGW7vHvCNh8AZEGXFrDKs3y6dLVY7LqEncFXjRRchYGuewp",
  "key2": "3yTwEGieT6RSjxf2x6jQETqRxtCNiS6uXSTm3VqWgH29i6NAngkdYDiAvQNXvgCQm1PkZWi8hMnF6YQDtju6pw29",
  "key3": "2wao2qEPoqhFi85ob3hn2MbkBW27oSDvFh4E9rppzDf7JhfHCfnMviVzeABaYDevD46wdcv88HCuwBvSkLHYdwaY",
  "key4": "4HjEPMYZUWzJa7jbCkiHHoCgU1UFbcpL21xqbsaFiw2RhiBjwnCw7H6VxYTumXfUCRF1VvDrZyXUH9riaCCQ7dGW",
  "key5": "22f6PNWMSoJ6Y5BF1HtArJpWJKgazfdaUFQjSLFbameREfvkPPSZ21PCkVqiCTonQRFce7DGTskxfJ4fSRAWFxU4",
  "key6": "2D1fRpQwVEfZ3CvAMERL5VKgpuojwUKsjg4g8SPYE7CmVoWEuDXckB7Zpa9Gzduh4zYo31YR4aZxDXuai55p15sg",
  "key7": "GLugDpHX8RqVau9kGv9vqETy14FsU1b7iwvQip5bNBmB9qawv9YfH7YV1hM79b1FSrEiYtm4qNXRTgURBhZZm54",
  "key8": "3FnEw2DqLqzxgahiAioMACNeB6UtFBNHTji7JyiVQpQKMUndUEpuA55AyeUWngJTHUTrj2DAxsc9xxYRpvMT9msi",
  "key9": "3gghzBYpxTqEVJy68ZaV2MS9PkfCMCFmRPtC3fZfjZaw8dDvBpHZoPbdzE6S2GSaASirDgNVxB1ZMJDpVCjorpRy",
  "key10": "3GWM54MTNjGQbNzJ5WcjN29ReXFXg6jMKcDvrBMjfk1vxbEfqHKC3mmueYHEudiB6v1wRotZamG2wRsH3Eghixnq",
  "key11": "2vXDvyhBpR2i84M2sH6uFJYDnHaFugbiAdUR1m8qVhunahWzVBHoCEwn6LZRBrf4GLapbhJjZxnbixEkDZ795Mdt",
  "key12": "XYrKFLpenqTG7wXZ4BpFiiKof9kj5yRNVSAdMWnfiN4BxaR3VWce5G38qmXPagrWUFDiBB8z1Tq1xpxcgDAHete",
  "key13": "222BLCMh2EagPx6FSFkMLuhu3WbbEBz7Gn3rrCNExk9FjdVoQpyodJnwWjjRwZha55qfRbuD2MTLduR2EQJwQJiF",
  "key14": "22YY3TtrcE8nXYRrDLC54mWcmtPGt111S2Tw76ejcSSha91pNdQCyuS7jiuua8nYK1GGgacdwBFggaVwCmGgmYdQ",
  "key15": "26anVd3sKSXBQ5Jt4Wdw3gjxaYvoW3df64hDirDnsegk3CrhVs6SjHnKgffEskrTcTrLrQrX9aY8qFXm9xKGKJPW",
  "key16": "48nHxjFchWMHw5fbg32SksEtsLyahQcp2p2pWWkt2CdcKvGHYe6GQ8xhjGAfxXnWVXiCs2ETErJhU3ag48kqYqqs",
  "key17": "3QxNdYcmzQTTs1vQcWRSU5kSFXc7xoFQU9e8MS5QRvMdbERfAs7zaus3GhY8zLKyu5Gi1KxyD43Y1NQh8Zp4Qmzm",
  "key18": "UrT3YrGgP3fpfg4ww824AiAGMHZGitKowcKiwqt1QZwpE7r9AxGw99mqkNugBCdUKo9Q5ofvrgx6KSyaNu9qEkN",
  "key19": "5RXYGagUTgJPP4FTVqo2Mf2YcNxnFhQVjhxcsbZBXgeQCQicRtH1avmH2XPZnb6Fvm9K7i9yLaTEaHWWv1Vub8mX",
  "key20": "5scyRiyUjGtAyVtpWLcTebKzNq7W9AA7aA8RQiyVEGJKkmMzJbqDVtGtwAGYTJ3SY4Xk8btb7mTRtCCfsYiKhEbV",
  "key21": "5xbjDQn5tWSJohbJX6fqMBwtWmRfdbK1uTD8noNjLNKQbD1v7C2WxUj8EW5u7TtXwXfffpPThmqeF2dGf5pJZvt2",
  "key22": "3MPnhEb25kY8DTFUEmctQigygWqgcR3DTBdhckYke6ZaNZfVFyA69Ly8hZZ7ejZJkB4JT4xGNLptd2HUmpwCBk5F",
  "key23": "3jeVDPBGhjN1q6uFjggQXYk6YBuUzqPws9WDt43SLf6gRK4qfQoqRySW5F2LVddihGAZZMLDKFd8Qk9Yi6yhYsbk",
  "key24": "2ucXqbeJnyxLVgthMuLNjueHH3JfMr7giv2HxZaHyrY2x9nGemz9jYwxr9u15VTNJX5o9B7F9KuBAscxpbmgMi1k",
  "key25": "2RuSReQNRxeAZnm8xvTgWNVJ2N9jKXki2oKbM3TmYCoimrvnArgS9xUm8VnQqvx83CYVEAusDawXMxzz4P7SgwoG",
  "key26": "65vzgFfYXLsyYgrbB9qzJSbACuZgcjFisfgUo2epTV345ZJzFmEjnzXWrMrG2M42uwT3mTU4f6Hu5rSsmV8mxkqo",
  "key27": "4UYYX6pricSyAPkvFLN6U6yyC9vMJhnuGMVXwSS5QRKdFkf2uCiyeQdNQvMt2rVKzx1SNmCis3Tqt5V6Y5yUFeiB",
  "key28": "3QLVkbGtJKR8u8n4GHt4x8Gn7BrK1LkCNMkJCS3xbC5mT5xFUYcM3PVjEyY7b2nuzDt3yAW5N2zwL3PhWEdD2Rpc",
  "key29": "XHtJ2pEsG2KV4R2SYe8mo8X33ox2QY8wM3f2WW4tNaw4VYtEj662Xyu4vuPzk2apKZ61SxSuBsFKwQHfoitGdZJ"
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
