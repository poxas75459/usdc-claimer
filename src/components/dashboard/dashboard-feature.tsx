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
    "D1hGQnWnjETvUkN1oQhVTsMyQKcxvpqBXyB7jzwCDGwNCK4PQD23GYftj7h8dUWV9XW122yRZA59AW2iKsNvPZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4deEQGtrnHyWiffCeQKdLEEYPb8zZkn9rhbYSKAykaajLubPvsFsHohZ8VdSYPkBTp8NPYu8cagAZA2Kq1tHMuUJ",
  "key1": "22EPKAxiwLBtLzmMX9or4Hn3TYzH1yDc7xmw6L3F5kcspYsdYRnC3jeQJzVY8wGaDyKPXUB7JKR5z7nKEVMbgp3u",
  "key2": "2yJk7NMiBhP8QCHKPRZSD3mqomHcRw2Ns2vcKMEcNUH5wcgUynSXmM5WqZkNQzbvBePTvg3R3bDCsqwZ9fS511Ld",
  "key3": "GTe27sTzPfcMW5fffi12VU7rNRG638GM52NKrWveFcSNXLQpFum4aRNs5Bd2xWJ2BgMxMV9HjXdDTS1FaYcRHgB",
  "key4": "5rrVGebtHXAuNwhDUFNSpqv6AbYXmEBTqtnXXGvDKurnXktpEk2kF2h1rh1FwMWwm6oXt9xBvq3x3fgzbHjnQVS1",
  "key5": "49WedyGQvzBKPAhsJJXQP6Pxhx91K51DkMUGgpJV23kzXuN6bd6Yt7ASubDQeNH9FwP4rqTpAHTo3Xju3HB6Sb9a",
  "key6": "544BR25AgPLSuiMbLT9GZqM5tCcX4YzavsrF9WJYC471vCkeWeRU6xjT6ZVZQFoXBNMz83ZMkS6y4NWc3vaS6AfE",
  "key7": "4MJWi5q3gbeeMc7etQFraKUYxmrgQA6eDd3TrxqawgGedPAmrJD2Eb3p7YnhW71eBJMqZSLcUUXkzHhw4NKoGEPf",
  "key8": "668uogKrdw75a9trnbBySo9gJJesLPy8B2zrEv9kDGs89QZz9jsVNRW7jcDvjZwaLQW5qYin2zN7DhhcGtdoa42L",
  "key9": "48FXJaWsjMgJnZqsHD5MDMMGwdWp24AmYQdZYYdL3HLrcF1pVvXpeSw1Keo7LTe4wgDZ7FCqP3bRE9hjRFWqAptV",
  "key10": "4bg5Pv96AGu2HwsFG5rMfQ3PomJuUySU3ZARp39UyWUtmsSExNx81HgfhzYjMnfknQr29Prry8NShuZ63BMeokkr",
  "key11": "Qno7YG54oNUmur2JBUKyVff6xWBp4wYZeiYwoWr23s5Z8R2sB3evPwXVmt76rdjacQSkWChcGR6BrhLouRiayqM",
  "key12": "33yQGhX36BvrTV2kQdYpn7ChqrhhFMJ5DGKYSs4aMzXvCCGXASmfev5TJKxWWShwJqKcKuG6PaZTV3iXCg6Tsypf",
  "key13": "3cmquxMDDoyuMV4ChQJyEH2uaWDCXsvvxbrvFjQbQecsbDHDR1cepj6qwKQYMTkAgoBk8b5Nab7LFB2VEoKu8VQz",
  "key14": "3xq3BqUk4ddwbc795iSgfny6NpCdw36KqosxKfvNWebfB72beKQh9uGSHGcuLgtF5Qg1gdmiDaLfZh6Rn9eUxBFX",
  "key15": "57X3eAXGDR6EoVq9gNFw45XHEEUrzGZftNLfGezYRVJ9pXYf8bQimUCgvGgr4mEzs4xzE35V9BbkXsmLNB4wdUwJ",
  "key16": "2hrc3t4RXtMKoKoWLdmHnHw8HXRZybUHFKhxgiujaqJUnA6z5igqE15RWuxmPxZ7fGRUVdREtEirMtcsteeh5yRV",
  "key17": "4FkLpaQaPzKor7grZiq1WNaUjfGpMAxwhbabDmeRyBpvtnFCFPftj2u7vFQGUs4XP8zRSFcoMz44WpACkPor3fKJ",
  "key18": "38ZHmCMMf8k23VRE1tvZCNTtFiYLtnNooJczz8nLYHSxaJjKU6pPFniDVcMYvJzWZTu161EMyBaaqtmra6ZyVU6Z",
  "key19": "25iogsiyV1gNHCt5xbQEvxKFf2RkTf71QSWzBgqHT1YeMn95D6DjxNSykak1NB9bykr3cs9GAUDbARh5x8RwL6tg",
  "key20": "4Hhh1THwLkBHbdSWc8Y5iTF2t7VGbuSosdFKw7TzdQ5qMZApETHe73sQBMGMzVbiXBLJAjDNdYvbHyiGi1aEwuZq",
  "key21": "392X6VEdm24BbU4Ww3v5ZV74qTikB6r4Mr64fxDH9M4uWKeNhKvsT4TwaPckkpAp6YpCbM49tZzFchPKoou5Cpzw",
  "key22": "4cvZZDwc6dU9owX5FMNYut1zkRUZ4whEhTsE76MuBszCU6kfeiwbFAJ3th2TmGyVYJ2Haq1Vwbwuq3wWrSLCNkPn",
  "key23": "937J9AkHSQMzHny94TKF45uWjyFT2UaSvEDAHA4fLbDX6Lr27qYhY8ZS6cZnxoszhMRjib2DRszv17zxoFjXQfm",
  "key24": "36uDonYj49YfkejvjHFjXBkTb9mM9pUSwoq69Bh5hUe4omNYtacXv2fNh4t2ag3KSPz8VvTbTHB28Mc2dscs91ph",
  "key25": "66TQW4bAomunJhqGj5fVvj7fcAAw8HR1gXf13Ukmig913cuhMGukCbgwbZk3NscuYQrbg8y9gxfwEcroToMnDaDY",
  "key26": "67eyaBHPzSuVUtB4Y4wiggrtKidGJN6HVxELgQKtttUxU8AXtaGpX2DXXs7jYPHEDkpF9sxwt4pfbQT4MrAbq4th",
  "key27": "3opM4Kyui8PCtFs1XjjkGpXK76eKq79L7SehTzDsdsucv5kAdedH5xALvgzDmNLdf92k4NWXNq6BjL6wHAF3xJ3x",
  "key28": "cmAqtVT8zB6CFRAt4HWhioh82tKLVamU3YMFDkgXLWXYPqVRY7ANgimT8U9KPPUpe6jF8DPtUw9EvR8PnirHLcq",
  "key29": "3YTJWPkh2Y8cjVVosDmUWhGoRaxkM5hYb4FMsW15bFS3jFf6a4MNbQVmco3URjyTfU6vc2CnSH38ic4ad8bTa91i",
  "key30": "4mgLu2GWZ8eeR6v9ADUFZH4EpVbY81EQ3bpHrUuj5B5iYdufqLm2Nt7midmMUuhYvRxbVGsGChLGe6mC1NRwKWsx",
  "key31": "zRZMbqhWe1dYGXYmTYMt1NymkXXxCiMciNzpDzHk43D64TF4AhzsjK9KSKJaYnnac2su7CbRnBBtTr3mkJJAEec",
  "key32": "3bxoRruZdMPS6su9JRbrgAKtQgQZWL6WpiXXPatVwFwyYYdHzG2vLiZ1Qz6TQFvYZBbTsthWaDW7MKnRStNcE4gP",
  "key33": "3us6wNSaEnLuqXkqN5K7YsxJr5VrECghLzTZFYU4Un8Q2f9G5fGv5Cj6ZjmqRYwFpTgLjZr9ywLCsh5TCLr5My8C",
  "key34": "5JPpy3jXGpSU8Z5F6qfT9rZbp53UjfDAqxhnyrTc6cvgEgvAq4Fsgzn4iKcBPcjCiVVtYP1crycPJZL4K9mXyG2P",
  "key35": "2AXoq2RHuqSYN3BTk5pVX19dHCtcSZMWbMHVeVorRWh1RWyctSmJAFhzv6q9hzfoZxx13dmRVDpRGZcdNTWmcXYR",
  "key36": "2xK7AXnUosnLpezDiG1GXRBP1AFNH24moj8KhpDTyjtYwAMebrpuGSNzuoHtUyR4RRNrVvDi9czU5jNmWkRGQ5Db",
  "key37": "3Nisc9X7UoqXWWgRHrgVkTXkjgThvELGdJf2DxtThXFoQhrTkXWM5Pg33e5hWEfyvwrrSmnnm2xpnmWJBjq8DZqZ",
  "key38": "4dUCUsyPZ7m5acLWiCaCJBBB3kKsJCBEPT7sR7Co7gWgN5UoQwJTKSswSsp7br1jCw9CY7oqFi2P78CBXxUn2YU7",
  "key39": "4oUgPF24Cj3Xs4ZKyc4xZxmNHkvzUo1kRFBao9nqCCLyWmob8UtVoMzUc5kmUXiCTRC42ctPcqYT1BPxQPAAaWPf",
  "key40": "2zzyyzKN6GhjQxYdwEa33VXS9WAw3ZVRMJ1SvyNLugjrNP21KVBKPaUg2oqEExRu7kPAH1wrNBUx5uxQry5j9VFD",
  "key41": "3cSeXTujuSG368bDwUhDp5DEbnFt9NNpaYG69KE2PPN3rZYsQMkaSJ4JNrT9jcPqdVqWYau4d7XoX1fCJEaA33zd",
  "key42": "3crbDjVCt2Zn9Hrcu765ZgYemKJnNck95DG1TaTtfP4XzLi1zGBKdogZ5g3rjH3LuWURJS8YKLyecc9wZxbTKQpF",
  "key43": "diWeCP9XjgnrkYgeqrqL8Sn1Cx69fegFM53xGhj6vy7enPjuZwVyMg2jfYidoXeGNwjwnnvYwHMqrNWdGk7DQg3",
  "key44": "xccucHBheVMKeccyMg8AeaAUr5qM76dYghGCMvdxE4P9vCfAnRuU6mKkfhZ5fPtRW9VuN783BXu2dfkrWR36yxS"
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
