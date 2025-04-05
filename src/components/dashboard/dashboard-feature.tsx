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
    "5DYYSwJ1qrDKiUcUe9rpwmpwWXehZB3QYKRdt3JSnRToTNcs6RDyf8r9FipPKN9KtzCKp5PiJ3zaTyLJZwzWUAWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PvfMabRxz2EH2yZ57KCXryXcRG99DztVknS6UsuEiXx9CstMUknDyYJ6TGR3GU5E9xoT8Ro9Y6ygqMgqDXoPvnZ",
  "key1": "4vmmu2HeDPhY2fWEMbRVtJbpJZqYUXbVovmqVRrefUHcsStyVX5RX2H7ihaCWpmzvyFVycjCYz2zJQFcbQ4kgKEN",
  "key2": "GJX1jLd31HhJVcTdeoXniGTqGzsUAqGXGfBp2CdmT8TTSyti9r4r1mQbJAGttGgmLuxFgVx3EFT6cVK32HaLV8R",
  "key3": "66Ao1F4BkkLLvA1a3nHMS1SxyBqKwZXvXtD5DFtPaw4inymva33qr5Zj1iPtTRc6XfQ747WzQsm99jSsvk5s8JrH",
  "key4": "2ppVAY3qA5tRJK2gDWaPhwsCv8NKCs3MgeULLu3LuCFdABy6fKvBBxHh1UbdUDcqRKTSDsuapBt8MR8cXt1H7GHB",
  "key5": "5PeQn5vu7DpEoE6xwTMbkSgry9qogkh5HRNW4bpNoDsMz34Dc9fV5pQPr8jMZWUM1XE5wLGwiHFaakFTjewJbf4T",
  "key6": "3u9KbYzTvMbHzBNPinu7D8P2NVasXVLTUh7rhmdhHtcUEqxTyTtRGpWY9YrAVHUxmuMeE5mrp838stEguFzoeVTT",
  "key7": "3RkPk8wWtkjJcnPPKckoFgz7EX2xT2Phv76yShse8voUHXe9R6j2opnKtTUhEySp5FpbNGW1br37pwEMg4XW2G8P",
  "key8": "4jazWWoo3HAniNEXjY2PZzdVd6SKmBW5u52Zr2UXR7vDfMqF1JYCFnFgKhw6CYqPRDs4xGFkkLqCqbgQnR4fJxoX",
  "key9": "4rYBJvtQpZWiVyM1kRNBgbwQ4DP9R4PKh9qeqQVL5RdJzx3FKbvVAVyvzfu3XqKTCuuD1P6dUVVmtNTFKU3ddWBp",
  "key10": "52CsFVgTtqX6nufFgYjCXiDd3hAk2PcNj6WPw8aqKv8jjteHbsECkPehAfUautp5cNdUKVK5zWdceqtRyGpm38pJ",
  "key11": "5pHusUbrS9fJv5fYdy38HaLAJ2T1ouQwKxcBnRRCxgU49E8YijNWywZnBzA7Kn2Hq7Tt4qCtCALtFCoD35by6VKb",
  "key12": "2HXpxGZw1b8xVaK3sMAb6taJk5qaNp4SH9MM44ew2q9vGnKqzmpXckhn6uBRafhNQx7SyaHpPvtKp1ttiJZukqH",
  "key13": "Cfxc8zaRYE5eNvQjtfnDg9PWqgQFRoQ5dZUEz33ePaFbtsRFAUEXASktzriuhPWP1SPa83bbmVmDmPaPLkKbkJR",
  "key14": "2ujyX4TuCGbWjMaUpRDMCucJidwqAr8fLW2YQyqwM3MJhJEzruZ5k4oTYLPZjCdtjBQM4r6ojYiEjHSj9oUiJpQK",
  "key15": "5oW6k41qedt95THG4k9HY96E6237ADcQ22XAgQJtUe4ctJfkPJRU7nfD66i5Sqv1p1i9MDbfsuLikN59UE9yQjxh",
  "key16": "27oBTu6wWncmgpgdgBXCoX25hGcz5KDXLNErxkd28hFEQcQT1Qto9zsRqHSgK5WW5NP1dVffsQh8jqgtFwMzM6eq",
  "key17": "3ojb7ouzdYCC1voNBTMyJYtw42S3B7BB3KU2hojRK1jm5UMk5wSDqx7XYuLbZ3BZ1ZSfDSRdinZGAaLqZyPN5wAu",
  "key18": "pSLS7g2ziLjwd16y6HVhyjvwh72MMGcwWRuRymH54j1dDiodDsCdgMER9Acs3emg4wHTBzi2PGLQQTaaCpXKnpz",
  "key19": "XNBj799Sf4GyYjS3zQp8z5vG2NfjojdnPqUwHMAFFMbqTJjVY5Y8Uy1JAKAGNCPC3kyJG6a4RidAQSk97nk3a1H",
  "key20": "475wBVccYKLaqkQnJFnQBQEzhLPtcisWknuEskZt7eGh7DiCyRyPyyVxgrxgP51GkzR4yugSwD3veauLNfkHdRDE",
  "key21": "69fiCZo4LVaZUz4Jri3ihd4CieXu593xjW31xRUjbhmKndABeGKRi5NNXBBVYtPTbenpWtZQ4n2XVjCDhinj59k",
  "key22": "57p5J1svhL6fSdPYtRGkuiiuuD3vFoWuG7CmnhwXqVguwqDidfRjrnCUUX63T4GNNJx48iRyPfSqL2rtX48pYB82",
  "key23": "42DBwcMdqddg7ryqHeAMwR2TutzFNBcUcuKdojKoPyYEZJ84brbtqKUgJqVmRtAgNq9FK8WJAFcbSXTe4Y6wbVvv",
  "key24": "4333CLe8qC9KWp4TXP1dsU7Df1cbirhofQowJXcejTJ6YZWyG4WAKLDFuWzYcnn5ZSJAvHMxrpTSoZncHaS41bEp",
  "key25": "MJ7GNExB15MDmSPreYVtfmkBGVuqc8zFDnTpDd8DijSSajUyME8eCtq2ddQHKXEdEL5nZXTKY8stpU2fCSeLUVH",
  "key26": "4TGcSyDSjvAVLAzF3BWChyHtyx5mXrgU5bFw9kJV3AyYLNy2NUCGx2zBhCSxc7BqYqd5XdyEioqEdEfU91CrSbs3",
  "key27": "5EVMjY3hdd44Nrj6jYfdsNLgJYvwbcnfaDCWv6f5WgJGgGKzgzKoqp5YWpm35f9SaRQ9StJWnDqyB8kziyeY7iXH",
  "key28": "yrn4GWEyY1M6pyHb7HuqVG2sUVuP4kYZp8TdFYUmQr8zoiwfA7Hn3zXFLhEE5dURKGhQXDBE8VkRQa4SXrHgV9o",
  "key29": "5FefsU8TCfNqcuQjF9WtX8iptLCJA9JZ41SYAXy1TuRKVWQuAojXzhJ6BKVWyoGJ9F6ANH6CoCVvoQ6bKAxfRHG4",
  "key30": "nu9dMB2J5s6RUeX6VmRheuJS5Lqk6gMTd3AyV1c5u7dPuanHPpHwTgJunwUE8g3k54bjHVsrko1xs2ng5cgs3W2",
  "key31": "53DSJLA3djPjMJUS7bDdP4zXXDmG6yqE9WRPAGYDdagWaNuXSmr8sDbH28UWMznFKmZAbAGNWzGAgLuF2vHDq218",
  "key32": "2ZDvkihjG66WaRYcucyCJXGUNKLJeAarfMRBNpV45n4yG4VBxwaLaL7RRrsTpMvC1e2PwvFaYRXj4LUDaVegnvWR",
  "key33": "3YxDZ7835ZfatFvpFv4t6jihZBUc4gREffBbswb1pVHxsGtdKagKaskz8eDEFp71F1Y5JjFvk69qPBb5fmS1HWdA",
  "key34": "3bcrxgEXZVRWMoefyuJ3xJHiKavsmSorQzmzKXrnUmtmP8B4GYcavmXF3ECgTTLT1nLRA2jbCPVXBK7kVgFm2e95",
  "key35": "4k9KHScz84dcTcPfRLxgXXSwofi8rRpbAd55A6ASYr3vSmKFSDeNaDSi6fjgPJdUmaBzZSbRZRFAGU1ekfFFXiM9",
  "key36": "5u2ixkTcjznkHGPS8DNx3ivgFtZxoGc2vGdJYhWuCC4cxsdHHA6gSqdvLh9fSo3s63KcPcDTk6kEBHdpr4YcJZ6b"
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
