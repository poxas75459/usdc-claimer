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
    "tH3aqtds2N3eJHQ3UDWCyub3MckwqQWD7P8RYJB1V5bNNBktRnL2UrEMQsdwatPfpgdvJrsh7qwg1UupGHN9STq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N6GQMM3QZeNGMEsVVY9dR57fmCuHA9XiZJsCzHJAEe8QUG37bdc4cGnhwG9B16db7RRoWoeVjz4YBWjvTcwD8Md",
  "key1": "5zgLWMtdVQJefQA6Fo1DpCHxycNXksCMh9jTSs2P1d9wjefTH9ULJa6B945qXdTaQ7gLYVdDgo815f9PoPWjNi5h",
  "key2": "kUtKALceRfGUsbMuyuT4fgYoWAbD1PxVUhmRDDXTzF6M2V3Txa8AfNDsCfHtNpRKXmGNwEEMFiYZerdDBGDAFsX",
  "key3": "4JcA9f8bp1uHPWSW9LUVm1xEKQGcnCSJHWFmuqpVTixbXvTrQ4Pw8mMYdaXSKedDur57q1oei5XAu88XqvRdB9V4",
  "key4": "38P3gwn2C3siZeitCwNXz4Bmb4y4mfs66naN55Nzm9QrqTzPdryfATnHgWRCM4hX7j5kqm6uHQCfbpGL1fLkgqSF",
  "key5": "4U856yoWDhEbeDJGYQrbqV8wmAfECHNhXtDBXB7hzhZBauM52FbVWpqybwH4mFUEa6VcJ6Pk3mjrP9vZbFbp66vg",
  "key6": "anFtm3U7SsFatGzPCRtyfEP8FwQngFQyHMaSJGyTgdCaSMn8A4EAFbXNh6MzcsGigcu5un2iyic56mcvn14inpi",
  "key7": "PqNZbY4LcFBL3K9d7ARPZgh9bdrPZmnQw33rvbvYc69Lj7zMmhstP3DgBUmAqdqkwpPYm7aavaMEUy8hJxjFgeY",
  "key8": "Wu6TowVRu2vybwxtP8Z6foz2NbX5sNe1Tsoxp4FEk3xWjy8fc96otNeW4vyeZoAP8X6nXwts3DT7TbXuNoLG7LW",
  "key9": "5vLAZXfegWCTw3PDk2hvXdPwCsYY6Y4p1YQEN5edhjM7A92p2Z29gXVhs2RS4MpH1Fs6hQw4UrzttsdAfKkN6vK8",
  "key10": "43KQzm2tVLp76d32tkoB87VPzHmmJJStC3CyrKGNTK4WeRRDazrQ1kUVfURz4Dz4i6vEFAwYr47DNQHXmNWyX5TR",
  "key11": "4Sdf88yPLst2shn9MG9UsgBHbdbefKzwyjyFjKVmjo5aBnAFkzaNEV3pYmpzNWfiWs2Sty7uiN7V47FdkpEG1Nw5",
  "key12": "5Cjss9VAVPNsnr5aZUSGEazxUjqqkhyuhVhhPL9t4iWD4HrMNm3pbRyUtJe3NAt7U5bFT1nryenDrGhwkbrgDDV4",
  "key13": "3mThPLzySBVtStBpiwb8ofWKaMNH9Sfh5GTnw2W3CE8ZHtXRFpDPz6XAbKLo9TtzPQGromyQXijuPUwq7c5k1t46",
  "key14": "52o8b39eFfjF4qzN4zdWayGCqWftbmmnpwSTHzdxjwXMkEN4KeGpJPJ39W6NFEWEBbhz82a9mQrPKf6M4RvVk3wN",
  "key15": "4vAv2yEh6QYJ5Fbu5J1TLosyqx4WW9xRyvCSHyH8dFu2YFPABWYk8sGGkBXgWRQzfj1tLNaWYmzxxt6ysyw273nh",
  "key16": "434TS8BC3C5nQj1TnKnk4R2qhf1MMNxH8CGhaQhP8h3gRdNqBStRsdtzPGWVN3nCUS55ETHfcca4XqCXYAohhyhS",
  "key17": "369Z89KPgECsKU4GTCzhRX1u5FzsSiVRSXRwTmaXPdtT6KvHpMMQaauCzceZ5jG5LKfrn9jKsQNCN317R8FnacAo",
  "key18": "3ktBjPP8yY9JdTH69XbisTwi2TXam5zauX9Tw22gTootoQgfZTMhCotCe94iXrNxCjUd2f67RkS6M7z3pKZzXGW8",
  "key19": "Czt6QUNirW5ynbdQ2dS2j3qiCbE5XxxAUW5dcwi7BXYyay4VTwRUoanKXug938Si981G1kuxop1khJy68JkRMrq",
  "key20": "5KE2u6zNw4AsnatymHjkzVdjkVXQepSBRmP1Z5YpVepHTexbEyZ59162bYQ256y3fsNM2Jvk6DnY3UVE14yfaoso",
  "key21": "5PX6aX1RFyk4qw5mKsWkYtuEUqRavFbz444Q1WYiWTRiDRzTodgc81Uz8cDAcU7LyEeD3sJCnaZSBkKPxyydq4ih",
  "key22": "6UPx6XKs77ocRHdiT52Xcf3A2dnJ1q8oCkRtxt7J2BvgQf4p7fwQygUYw4Rg3Vn1UpHXZQhqf5XEPw8ZSdeRSMt",
  "key23": "2WDVhRG3ancbCoPtSKnMnZu4nVhKX5qBs3qEi4ADkePrKN5eN7bjyUs774tAwK7nM8X3AQhR6U8KPJRzZwSmPLYs",
  "key24": "4BVdX9tdBY25zG5ZBwSj31dnbLFMndQLiohzG2pi8p6EKF1oHRsN929hwHrTC3dhEZwLSLjUGccxyQgC61Xds11d",
  "key25": "64UAcNUXcNWJZd9vFW7yTgDsZyQxjqXS6fmjGBwgFdfdbw258QxeUJDzDmMpZpD9Y6BS2HrK1xQ4tJBHmpchytTX",
  "key26": "3sU4Htzb5uwSXiWKWNSrdH9VvFSXEofwU6bBnhApRyKCNJuX6PwhQvASTWp1SG5MGmuw2tiqYpUMmdBqpT97YAMn",
  "key27": "4zMQqHurU8suAsKtFYM67GJLbJWDwEXAWVDHuZUQoAavSWpSeECjo62rxT5Fbser3RCt3h8btHvsX2xwcUsTDRKD",
  "key28": "3Fzw3axZyfLURphxKfmUxoEU2tXzhf2WohK7Hx2KwR81WV7oCorkJwMFqxAnJHgbqcFizYgL9VYZA7S3fSzFij3f",
  "key29": "5J29x5v9YqqczhJBMhuS6UUto2jT8Y2MK8PzuHfYebhceyVvzvvztrBDko5KSY9TSFQaFPV7r5F38EVVFG8DD5KM",
  "key30": "2xB9tYapfqgpBL1bKZWLG85nVMRphhWBd1cP2bBAGXyna8ow3RwHnyPywbcLtiHFgbRp9xzrpP7eKaTWJJ8brLiv",
  "key31": "3STjsBnH941gD8DUwkvenxv6YMVXHUebfc6Y7Z4YxiFsNdR62QKuYn9r5WHJctvohCszHiG66Un1i376UKect3RE",
  "key32": "xsik8GL2TAJYNfk7ZbFBjNVNzrEbSAYSHaVkzCzD3xPpCBV6PS89p5m6PFuxVyh1UtcHGbmAhNdcEQz5hmUy2qC",
  "key33": "jr2d5QvdnzWW95VqZ98tnApXaDnEYGJwZAQ4xZMD5vgEQtSh7YBuw4DVDVqZNUpeSK7g5Gt78mT1XwAfVw3NR1h",
  "key34": "5VdTtLfjQhbrsN5CYo42NfjQGuUCRFZby1nuY184vEsq6JUSYTNTE3ZMyMT9mTkJZQa7Z3JptA1jGoLS65WYEfzr",
  "key35": "64wyzcAtN522m8BXb6C221QDpZBmPU8asjZbFR43GhHR3mb1u9S9DGo36krzFc3Pk4vk9SFxvCYB51ArrWWfhCzR",
  "key36": "3FrnAcdPeS5buMKiiv4xDAfRcircGdN46poJQvk1Xebbq5qmhAUYaSAPnDLu2Bdb2eVCUyLmHghonzWmnmpM72N9",
  "key37": "pqBCuL8RoEBcgrw7i33BennyuDuUuPRhVgKkigd8MpDxcp6Eh8NsjH2J1G2GgRZmkZ74DrYi1ysGrKw86WEVsBJ",
  "key38": "4mzfZ6VE73Cz5HxzsknG3GYxGjkErFi84ZwAV7aiyhNmSP5UEE83U8gvhAGwckTbp2E926AA5K88s7HHuDv7yxQB",
  "key39": "2vi9N2PgQy6P8g5g3xLwq9zd2WHSgvgi3QEnWKjiHuYr3EbUKxQ26AUi2NfXbR3f1gRBbKqWgdpm7gb6QkNvqbgU",
  "key40": "5KxnBKpPyy1QkJLZUfSfPByV9RZXZJpLPi79BWCBuSCpBponBXbyonzwcTTWGMbCyYzn8Ab714U3jDgqWqZpknkE",
  "key41": "47W5mLaaKuVabMEeV8pnR1jPv2grt9Qj2xwq4CakTmLQPY2iNrG49jNnTC5fHb2YX9LimpQoafUdT3FoueRyyUVE",
  "key42": "2aRDayEbQWw4r7LA4M4P14RZQp5zcGfy6eXK4DzUWaPK3pjzqNkkDbbL49MiF7ub7LGmfdzTXPx7z9eyXveweF67",
  "key43": "5e8ZnnKV6r6T7FkbF9gCGKMTsYZ9nw3B5ML6SqKsqstj5yjKRVMz5tA2YR26gLfGPGGwwH5b6NNcc5gYfmDMLeBJ",
  "key44": "2hPizmeggxwEvMNvaxyPzJ2wT3NtFAkuNbfwYjikykaj1frsEbKFA2dWBvxfqyfnqewgKbpeLjGZMHNJNdEKc243",
  "key45": "3nEYBT57gHAQruXEeM2VSkHqEUzHe1aCjmZdDNHAkETgHJh8Xxbgk5a7pMcWfmZ17HFdUFHYQj6eNkrqq3Su7vMY",
  "key46": "3mzwJeHyR1RwrRGW9ikmVw2QcpMoxm5iEm8yXbBeW1YAeRc5W2AWcak4GNFu6BL1Ek3pxnY8uQJqY7WxnqGEJXu5",
  "key47": "5zc5cwFzRUSD37nhz8Q8LHhk12jUKoqhhioaPoGkwVY6GgEER8DXvyF3mZs9NnX1doBL93xqsEC86crosbfagMDZ"
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
