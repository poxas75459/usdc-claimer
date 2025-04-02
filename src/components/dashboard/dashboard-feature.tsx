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
    "3XW9C886je7KBuWTDqdAAdSanue69bAXGi6K4rs8MkEnZdd9wQt7KeBBLt7oPcDiJktovJrsFKTR3wGJGJoePujh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52bvCox9nuJWjT5jsL57yAfQMQX8JfwXdquiPg8fECupWGC9ydKpU8ey2Xk6jbmNM1gBFxs8ibwVyxDyC5zdhBuv",
  "key1": "32zaWJvN8a34odWZbwSDPm5Y4NrJct8nKBDunYh2NDf5ZdRPxeST9xqPDxxuraVjcW52vGFEdvit6mm863LBtDG3",
  "key2": "28aepRSgVM9eUkdE728PTNQD17wKqcp8SCueNKQ7RQoFyfYqF3XceQZ7o7YF73ZkCNaYnxoJPGNXC35nWkHLxwff",
  "key3": "5r9rTWru2AE9qV4qHRLxhBW4asWXsiDRuJc8ZgcjLJafZ2tfKJeBPv4WheCNxLaRnHtE2eWwV3cqMGh3SPTexx3F",
  "key4": "2bnnhc2WHxYZ6XxMt85V6gXg2ULSDx3GunwoPkSHGmv4iuWTFqDdrNMXntu5oigjcd5iZaJBJxFyYDXdWdeRwiqa",
  "key5": "2c4YFZTFXcrSuNWB6cYAiNzdYSqk8M2dynsLZVQ17YL7iRbRhLAXxGvXGizyDJfnVfsfboyUF1RH52V8ATasEF3m",
  "key6": "4x3bXEdbLBVfdjRcgi3GnAYAUfUPxa83oDM8ChR53hnFajhuUNdFpRKXkjKEurVwj6WxbHoWuEFrrPsEVovtyasQ",
  "key7": "WQ5dLiRpzTgtcqvD2BfygcQCEixGTDPPehsgALGZmfgYR4wG5GzpCY1DqNsLHvevthuoJHMTXXhQgh3vSmsE31y",
  "key8": "2fh4NB24obbrPPj6tAyGW5v8PDaGYVfSkb6yPfozC25a7GxNXnqDPzs2d4ZSLELtze36KxrGUkRGkQaWcorQZBLu",
  "key9": "4fSxoz3ifmqrjhg2pM6xmSiKUMgD2qpFXkdwPq8aYMgZHdgUyVsQ8hxREhg5xpKKcVo1NEnwK9kKT3gUpXSwXwwX",
  "key10": "PMYqtkoYY6Vc9RghVZmEPqdftJuQb8m2Du9K6CZJMDp4bfXJdr1LCDVujjafDQf3oWM9yy358rVAeEhqULziW7j",
  "key11": "4EgJmKAmyNr2VVADHswBK2ZttSK7Ai3sQTxp1NYoL8j3y3hJ6qxXZFsoHukKxho7DTS8pG5fQiLKSFe43AsYKWzQ",
  "key12": "2B1BR1N5vXCsJieAEapJLNRix2v1jHdXqyBdVFih3NYHkRRP7Kz4daMxde8u4jNhiAU9rqRsuWj11gP7hxDK6S9z",
  "key13": "4ntYMm8rreRNvJhWSAknY1nWQNUjYmWdrP9zEuVRynP9KY79jSgF1y8gMeEYGQbGPzUh452R9c5Q4sFKLKQzF2ef",
  "key14": "5xMfH85TSjYHpRNTerrDTz9N1vANY7kDmBVq5m6C1HR2MLzqgGZQHjAn5EY9EezXto7AKRbyjraWhB9oRZnZxZRa",
  "key15": "4ZSoUTV4yJURPtNauc5APjRbJJ1BVxZ7CXDdY15cA8MDbUzaus69PDZVUnX7mdDiexHoufQfag2SESzon9vFY6Sw",
  "key16": "3EfqmGhowhMF36h9YieRsRYwRDXKGMxseWChyFAU5sdSr3MMU8ZGRmF9tYP3paPe2uAZCR2xt85PKeCfmxsmycz3",
  "key17": "2FFPWK1bZGLgQn6GLSWvdySmDM6cPZg8LQsZHungVZMKihKQj3GJHTZRhekEfgETiRsX3zioTCSZE7Gvk1k44j6c",
  "key18": "2x3d1pSwWhSKAmgKztVZnrveQXyt46gNYKYqiKtKwitsjfYqBtK3WD3J6AJuZJMd9qN8awYHL3wAmnA4TYjY8RnT",
  "key19": "3aePNivGrUG7j3qgmsViGFn5RppyyhKmaxATrgPJHqnQyhF3iZfKdjRdba9bsTLETcmNwhQEdcyd3JHjyfv21rUe",
  "key20": "3tdbKuMddAaD5VvG7kAtQsdhxMUDicXMA7RsXfVqG7a3DNnX7k7yKcbH6LEaH2qkJuPqf2Lap1E8DUamPT9Lm6Uk",
  "key21": "5iACyLZGpnk8QnkerQrJDfEgtJkUyjSxwtezWY21zif2ukGyUritRpxTjRZjz2joPk6gWR2NkaAFyd3c9YoPR9s2",
  "key22": "5jqrgxvHRgv5fvqJZ3bwZ13A1hgMEfBfSSnFqUoUGdgM4UHtp51mFtk1R5Jx4DqepHisNsxB8SgsVe9HYWLZKzPx",
  "key23": "361ssNmZNjUQaeuiM5xcz5sQZtpwD8NzeapbQWTDwCufYToCkkrRV3BsBjcvqvUiXKvkRgcTethyBSSLusBifKTC",
  "key24": "5PPykbEfkgqgxZD8npVvAuw5HHwstoAuy5ZmXuBjGV5bhYhLEyug3Na5fkLXiGSUbmwLYw4mxC89hsAeQEa4sUR5",
  "key25": "hwM7u1yma7Xbzftmyhj9VAroU5AtFF5LS4D5y82bjGnsbxB57njVjKsZnL4yVLWoNxCEohK9yvKwne56oZnZB9L",
  "key26": "9Jp3LE3mZiMGgEZLtLAzsjZxxPGHpK3HvqdabdgPoJpFrsgpVoPWaiHn9RvDPgUrbSaxKYKEk8TaGKW48BmUU1U",
  "key27": "45MLEchKYsL8ECoxRH3THxpVwZsCW1tum2V32YYQUg3w9S1Sx2MXSW7FpHnkzc4MHqFBGvSXfAo7WNBZn2kJNtpt",
  "key28": "26fiwX3BSJLUDHacjKYeHQQGx4byCDjyrWkuBCeMBw893Kfk54Q4kBcWRU4oXBDpuYU6MCQiaa5EWpmohf4KwK4n",
  "key29": "3CStBh2e6kqPzGtPh5xsHC8VMTnamEZxrBjaeix5tX3mrUb6ihzFZ2hbxHi9qCJ7V3c3LCMYtSkTRKCQfh74YzVV",
  "key30": "BV1sVonV9iJKvzyJiqtGWbjVNVHJsyMotNxbs3S1S5o7JRxMz51mEpKwpGkAkTJ6gmQPnjcwgfQiZemNMMfsf9P",
  "key31": "4niB58cxCdAVqcs2H1QyZGz5oYVFK8o6Dv4RZZbVYDTj76NmKWvvcnBXifhPkM1rfZxgkffHAVhyjkMuEQ24UPSD",
  "key32": "2mvtx9KJDgVvrChM5swEerVSQmEYGBjjN53Bd9F7c43JgaTrxSc2DjWQWSmEpUvSyB2s6gxFw9NS4tFx1xKcQJCh",
  "key33": "4UdGxpGgWAKdEviXDKx1WDeYwKESmqxnki8NNy5jf2T5YC2Sw78fYFXBTt4MjGgBczeLxnakFwU4pG5mmz2WRAE7",
  "key34": "cBbhArH5foNT8KySsNFNy2CxEzWzX5P1wLEJvgCDmNucx8rcdFZouJjed8gC38mu81RRQB1bSqut1FApESDSF3d",
  "key35": "hBi5GswvY1ZiFW6H1398L5biexECVy3cEBQcjecfU6ArGDcacJtaWbyTt6AKCw4DGFx2QdDZhoLV4jLHFdCDE5U",
  "key36": "3hZeYASBBTH6jqGSK7nQReL8kkPvkAY4td6ggc6ofQmMkfftFjuostYiN9WDE8t39MTcSeMeSTyMJNUwaSLRZ6JF",
  "key37": "2JJjA2Pa2EsCJYHTAukTTvbAF7zJ9C7LgPAaAqgUZ1CGi8Z9MDDZjwPNdkhVqB6bVSzow6vxd5VSJPTCrX9r64KJ",
  "key38": "4GmefyKC7i2WfQBT8RuVBL7x7sRNek4kNNhee8x5pWtRkBXxjjcbz59ZACqvtxmea8KxkaRcFuiGDMeCrdxjncaR",
  "key39": "4QR47q6x41rfkheYQQCVKfii861E9EfV7jryzHdGjr1Nwu8YtipD6YK1moc2umvYYh7ECnhRbiG47FSGGWDhLE9k",
  "key40": "4dG59qRTvesKhCyhyuFbi7USeadNjWFGcBJhXaHvzKh4qAt1V74LqVe2rqf4Joxzw6AVA7TdkkGBTMebSaY1ZmWu"
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
