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
    "49vsuexdEcwxMN525BgUTE1ZvbXJynuLAoC5wEzxbgpiEcv5nNwdKiLT5PKifxF84QtsJD3WkjVWaTkYmyQeKTKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AQa746u5bJx5SB5Ht5qBWLVLbSEvAhWwJkk61c9JMF4gUUavwnbNKEKZnNpAteSyZc3daY5uTNLhSpkDFywuj8b",
  "key1": "2qaSz9Km8RgFo4tEdMREtCkHdsmYRyW8HnkPYKUa9wFVWvFsa6S6TwrAhMYD5wZY13hC6muxwGnsrCiPmSdsdpzC",
  "key2": "5qYdeMZcLPUtVn14cyFiVjTmCVxYhFPWR17PT5nUMBhMCQq9cp2AJmrtWzGhz4GnoLFWRi9HCNLmmmttzxtd32R5",
  "key3": "4TsW2pEV83txqd5tGyHXFkPTEysW87fxE8CQjWerB1NN3jcLA2wkprQjkKe3eYpTfdYcVAEYMpf64H4L6bd3XwSZ",
  "key4": "2iiBBYftpqFtUBSxjadeA1JGPYTuNvdWP9raDYQaq2HsMHs7aPURAhoGEF2pRrdihBy57RWUHAwjRyxDLpgAEX1D",
  "key5": "QdSjXRWVH28JgYBgatCSccd77mKtgrtQ744HTKQ1pSc4QcqfP4fwRuxrJ57YMNUMjGZpkZmHrDXTZaAyXYHEbLY",
  "key6": "3c8kGmgNkWmtjhunARc2RMEKgpBiKvQHvDNFXmyHHxaw9eVXvzabVDrJFG1DBhHAyBfiTuLKC82pi7G2mBw6ND9e",
  "key7": "3CKvQ4sq72PL8aW6KtckcAFk7JHLAjjJmmAjd3VTCtE6GytwBhuZk88vAZQv3GsFK5QBpSTbobAt8vQZYr47cJYT",
  "key8": "DNTjcTpWR8MxpBk8cz8oBcgrgttZtBPVBQ9SZEzXm4633DEr94d591LJVRZv4ebLCrf57eCKpaUz1EfAinxjMMB",
  "key9": "42n6XFAD6GvDimFxoXKtGK4jiqAhUSLmKGy7rW1fs7id8XHGGfW5nfjovR7VJghXBKkdFj61r5S2HHqn4EZK1iA4",
  "key10": "mRedCUBgxdfB2CTG7w3kRkz6sZYsH9mhfG9CPYWBncubpKqjp1AbAkEGVULCoDGaWdZWLsUjjCjhxy7eJkaTrFh",
  "key11": "2abQpkqcMWg9W7QgMA3ZvTBxgFNKy3hSGSpGxCTi1WoyEJFHW2k6Z4FHf79EeEW346XX6DyrY5QxjkfqU7veS6h3",
  "key12": "3BbKMuB9T6rv6sr1psSVRwFSP9fMQrmRU9Bs96azz2QNgcVJrvvXaENU2yRPeLCw8EYw2b2GdJaiWkLr7fBZvuSm",
  "key13": "3TNBrTxtDzef93NnQMpnBLWxzZNJtDDDhfAoMmSCBKhooq6jyE7MHQe1NGAZixkFa6ZaVjhNP47ZB5KFoajNDPNk",
  "key14": "3QZWctzkFiCULr1Z1ws9QrzEwJsRe4dZDS4Eogok7BCCuC6TyopXQb7pmQL6psERjm6Ri4AHtdBS4SL9b18hugCt",
  "key15": "292zScNYRaMSWM9CRnqR495G1b3H5RuBZVYZCnZtHwhiZ4Ef8qrYmEcDacFNoadrivg54CrHN4L5BX8Yz8AiHWsc",
  "key16": "3rZJZG7nSqYM5j9dzVkYyCbSn9HgNTowgMAaKWHn8DS1cDpNG5E93hxJn4RcwsCrFMaGv48YnB6r6hj2yre51iWh",
  "key17": "4UBb4UHB57GbMYMHCrhY3odH7FewMqtYACUgnAMoPBUj4XbXYMdQoKEPGBT3uXfbnK8pa7vnsqud3DiFWMX7MNa1",
  "key18": "3haNUQda2k4qLF7m1Y7QEvtVrT1xJQs7UY3yu29w9km3jLPzU9N8U29wkzScgoNMnyqP7VSn7kh4Si7FQkzaqZ8G",
  "key19": "3yeSqrRrQzULYJCnp3jPQww4r3y6gascGVmGjzsce2p3D9SC5nvEW6CdztmFAfUiuWbMjP8fi61rS7GYt2Lnntj",
  "key20": "3c3BrMVTNC9wA4gFbWRXgiQSjwSp9NGjC3Ge15MEA8q8qcCXVy9koR9dx8fY3VxNiszVhwb4DaM3pNVRUenDCsD1",
  "key21": "2rfjdJTZcskPPpQ4DqjzFcfq3MfzFLHhVvjPA6HCnmwDZ2sN7Pa799CDNMY9R7zwpeHeWjPa5oUWuunaLeCfLgWW",
  "key22": "4owJHPNwFAjF4Q4EJb1ipZt4F34F65AkmSGty3RzaZ5AJ7XxhT29SAvPRXFdkmespW2GyicGypoYUhyAtpg1vQjA",
  "key23": "2hzqcx7HRTGHCbxVcxjiGKc3TLMFVVhMir3B9J2xivHoxztrGQSvW8pjn9u7BktvpYjZDHNNtJhoQBy4CnhUaNz2",
  "key24": "3Uqq7P3BM2zfSbH3JddorgdT42SfpMvDxE5zhozsh26KrpnfjrmkobqzLtUbGiBLr3fJDNieNdxC2Ef8VbUdoJQD",
  "key25": "57UjuBninu3ZkuTpiJ3smC7qAKro3U8mG9WgsSDLz6wuAu6nnsExcb58K9W8sfhsgFMy75n696kJaHtqW23LyBax",
  "key26": "4T5dkuiD4YrMBccriGBQqEavbnp5p7AwkAJQYkT9a4d6UGWdVbZNchDpuUFK3xpEmUA662uqjQEn9B8CfuAfrS74",
  "key27": "yK3Bm7gEfHW2w2CCWDUKpmaoWk2AFXPZgdWSwQu5PPA4PJVrMt2jRiuzdD4y7WGWYHLjhfAesvsoiHshUHhmHgd",
  "key28": "3KnGaStXHHY5dqU4c3SfsCffapXrxdyuJkFrNa9LjNZKYKRrD55LDC2HihqQ8W1KFLY6NBmZkFRTcNgfgKzugPk8",
  "key29": "DtaKX9z4GejXzRXhrxvuWuPpyBtiWm9fHMJF4xv254k4ypYribhvn4dJNeGGbPjwqDFvF3vb7i86Mppx8TZeVPy",
  "key30": "2uZaWhwqCevYtDEnfCKdc7pveYt3WoSJN43PeaJgB2xiwKuxwvRmhNRzHSna7RJQXydj2QMHxhU6axE2ZzDNghEy",
  "key31": "jtpJmhr2HpPiXXFE5V1gDDKtx7payPDTk8E7tVeEAUCZaT1GLtk7ERaDSgfDWMpq41EoQDa5mRtJ6tgdi7W6n3i",
  "key32": "3JrEDgAK2rodZhyCCzRydhS5zxspGzqUje3KTQZZAhzy4CAmsm8X65L7ozwyBjfBdPKExNX2P6J3CEYkypK1gE2Y",
  "key33": "5sHbirsqT5tnu3NjdYVE2oowxXVGKFq9sPJVgLFpWUeGSdUKBeAgvnP4MQ7G98wkq4s5Qp2SJvB3V4vQhatzPbRn",
  "key34": "5GVxGrt8YRmntNJBEuTqSVQYRSi9A4pF1H9pqZSAzMWcYN6W9PeA67V4xLzHEZoYQtz5agf3riCz29tpApDZPC1T",
  "key35": "27aPG4RCXnKkMgMQsLBrcPgVtbvtHou976UL7Adi5GQYzdLp4kCcs3fZfLakvt3AC6CpBXNWG7vMJEbxwPfous2T",
  "key36": "4Yi9M4Fiv1xwMsXiexLWHXx3DE9ZcRJvKGEtsLeYwiJ38215RvJfiKWe7UKre6vMFjWXSbYPnKN8iu5VJUs3xydz",
  "key37": "L65xsUazsBYaijLSL76YF7uHzq9bT6ajXLey9GQJdqCJi6Vzv2DpHXpDA7Ch1TiL5gj3Zbbc6RaHVJdJhTLSzXx",
  "key38": "4QUWEAWWukBZdhPKP5btoN5cCSHHxpK8jU9Ksv9aFFe2kcwAAyc7gn9MpsKmFinXWtDQKSCfU5cWuGQbmj6gqQwu",
  "key39": "44xD5hpnedExMQnM72XXSA7qU3T9CWCKrisNvh3Lrob1nYkzcAoLuZrFoLJJ8u99tu1QCvztWM2FCsHg7qnLdwEm",
  "key40": "5NB3ffJg8NcU76uH4Wb8ScgopERJsmoR1jtuVU2D5qrxiXuZvEpQP9FEzzTKfhz97wPKpJuQv7ehZBst9p5yrdf7",
  "key41": "hgaaciepmL1kyh2siTtuNbfYHXrgxvds9m5Gm9K7wBnfChWgbRdY1oWgWZbsj1H1irgqZFKQYktJktbfsPpRzd2",
  "key42": "3D1pMbdu6GmFqUs2DdGKhonohqHJMPiaUqPzmBU8xTa9hhrE21oLE2bBp3gJS1W8We7wjM2bEWCqPKYHZaZMHoyo"
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
