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
    "45RUyCVujcqxVMdh5S6qJeCf8XK1aVhApPb52qw1xVBb9H6NNHV9KZVeJp3tQYSxwSpav7phxNMWuuQmWCXor2az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K92xSWzM8axq7Qzns7ub25qHWNf4f51m2qZqagZVrAHXVUdq1qCzQThKhGn74q4LcLBd5mJEP54PjfkjFcvqmxs",
  "key1": "51DSFbrvGv8K2jGbPC1MNnR6pWU9GkrhZmjujbFFTeGAQXzgmPmWLBXPDVfY4gftx89DQvLDewovfU8PGB4McRnn",
  "key2": "4M5t92vpxyBS62Bsbt3GnfkmX5jqpE4GcLHdy913aBZ8Fc6iuse22thDbPG5vun5vUQFotQ2ZqJH7uDNgBtj3zv1",
  "key3": "5tdqSnrfRTHNchjvW9xVUCetF3Q98VArsGLbh51jbwWg5BN6FVqmvFhX1345ssdKvGr9Jg5KYwqZypfw6ZCuzvDn",
  "key4": "3DzAD8xnGtYqRMJd9YaNunS35PXGmsGNrDJ4VYZjabYYCZhnQXM59B5ugJb1FP85gHV1NpWTGPocy1B8kzGip99C",
  "key5": "2svHtrvXWQB6i3wTXWjBpPNXDUyucQYBcMcNT51Q3EnmC9PN4uWVJxeEU5eNEZPFPWn6nWeZDo9ybowZcWqyeym6",
  "key6": "5RKsVnYe7a4ewms6F47PGxQY9hiPfY2LDj41fETUxnQbBTVbCAPoLoLgRTbLHrsNLyc7qHdeA34fq3eV3GCSBJRh",
  "key7": "T1aCEpTS7T1XpCErQynhGfJeEQ4stLWnkbVrbNMJV3T6jLSVGuUvsiDrToETzwC7RuJPE3CrMjgNug7t7t3st6Y",
  "key8": "4wJU14rhEfTy6vooRM1MTcwHToD3pRad775XFpezRJv3KN3w9KwdPCxWnBJRtmFDwXpT3ioUjYw6LFiNE2vu7EtR",
  "key9": "29uhtytLSt2AmS6ey7Gt2J9KKJvjH2t2J3DUFPsCZKjtk62nBFtAav5NbdF3Q8tDvaQbLE9PLkWTV3Es5Zf7wq4U",
  "key10": "36ybtZT4YmhzC5kQX9SVjkmorbC7c2oU2iTfp2LJmXzczxeJTR4tBuczWiqzLUGYCCpbqz97h4KLPkiVG2mxo5ow",
  "key11": "2wgsiKfUsN1mwaQwjWVU1JefiW3H6NK3zXemNK9a34YXGSVAn8FtMaxEHJxVcVEMfRq8WGYtvYcKkP4xEyRGbuHJ",
  "key12": "5MLNekPdFzXsnFbUozkXX7qPnKHgkdyETgzTFoVpTKARbugKpgPtCAFBx839BuawEeB1oMmfnZjUAtcCVz4UyBj4",
  "key13": "b8KHa12MnLNxq8VYH5M8WRLvrcxzHFWaeewD6yd7Vxfqks219Z5jzngh8uU9zkjWgpYcXPcr7FJ9KXXf6AQZmbi",
  "key14": "2wgsCykfVnxLpNMxwp81QyrR2s83KryEZbkA67DVsGM2otPHe9pyW7Dnqj97rAEJyuAMkDQec5iqgMNWDEGeNxNJ",
  "key15": "28UNxDbLm2mVZe5CRdWzjUuxqF2kytUF8ad78gy5vtp6VGpgU4dVUZzzeiPAiySkERiDcNgixswJLukH8Y4YaZjb",
  "key16": "3ffrGMNhVGvM8oHWPcD4NPjE4tohuFdDBmdatkPNqekt2nwEnAoDahnKqV56CwikoqHrtjA51thT8YhWuz82Fb4e",
  "key17": "46yzUwQZnXjzXEnw8N8D3dR1sYGAjK8ZnaSiXwf7pDrHx3YF6jezoec5aqrWaKQE2kP5TP1Gp85WxCNAViktFs8X",
  "key18": "2gCU8FED51CwKnccz6sBfdHYr3tf1HsgptAu3g5PRBUk96gbDsCfJp1cKsrrmBdVn11ZJncvtJYvnkXXWUC62Q4R",
  "key19": "TqQfL5XjBVzG6CTX5UNUorgrbMExYdLjKvi7jyD54pYLa36Hg7ZMj1hPB9RhoF2iHx6rZLTPrUE3cCggWfcwMYT",
  "key20": "5k1iB5tuHQTZREHufkRSDgyB7zNUscnued1pPbj7DmY76kpdZdiYBUxJmqyGZMi7NUugEVh8wv8GByyNNCf6UEvD",
  "key21": "2eJ3Ny8yZqkiqFf2WMB2bhdy3WjADtW61Y8UJGwTtQBfAGWYJbMGUKWov6gss5sBwBr5sS2UB1b4V9V33GgghP83",
  "key22": "3s8T3SJUYpZn2owGuq5EWforGZLk6F7mgLt12DEVQeA1b5U72YtMqdRPrentDnh9hXfdKvG2gN2ssCsCfwEmN2J6",
  "key23": "4LcugFhDoZNo26SC4rC1eGJ6fpqQqjpphUVJ15bt4cj7LfN6A8by3cJt8XUoGH8goawiTMiy5iD2JWvFy78nfN9f",
  "key24": "cww4aurybAWQgZRDFqK68EFE4WA4yUJqwf5t8xfzJYGuT59zpk8iZcytCfiYdRSXm7EnMBFQzcQ1kAHxUXfexEC",
  "key25": "2SnLLNgohBrBEb5UZvbRF83JTf8NdomMUWK7zNWNeLwQUZRidkxBjSeFUUeXgJmRip2oJ3RsUX9tRFApQ7xK1eT2",
  "key26": "5yVFR3cTcT7RLupnUZ4M5dH7XssXJ9DQfxAQXv6MUypoZegWhSkBZeMdgPZKbmScjCAyKyStD3DMuBwvDVRp7qJ5",
  "key27": "4goaQEg9yrbi5ByfFuGh4JPChEbUwEFzMpXqVgHShdSztGoH3KtDiyYB1km2RuB71yHkQrUoZ243dYt9sHPeKCn4",
  "key28": "2Lhff7BSPUsUs1ftnmUyQhiuGZDuQoAU7izztMKXZH1hJkCBapMZrD7HpYWxJg2dKeX6r9rrRgaZYqrTJyBxztJ",
  "key29": "a33ZoB9jyGpWiXkqq1VWx5YRw9J56bddFHKBGuATdC2gurSqJLz9pWCe9ncUV7yZTZPR9qUJZ9K2ViJeHd4gX8L",
  "key30": "3aLWLapiwgdCQrWpHB9P1sPRXpXjAGouXtbG4MmFZPXXaSHgxVVDn9NhVvEYvohK88qe9W33mub3F2v2aCdT93hk",
  "key31": "Q2oAJyz3fq6Y7kCAK7nJqNAzmaEn45ivdctEcWW6Zf91vNqidjYMtwJf8YM1mynrXVgsmNNLoZaKz3HUnfuv4oU",
  "key32": "3PBrxAGCEMVditgohB9bNM7n32LczMpMiyDxRGzV2EcGpa9RRbdN8iuTC4hjn5gZZ4HxtL7osTcXVrRs6RXHjUY7",
  "key33": "GWzKN5ZD7F57gF7a2Km2V3PyXQrRJqD9aW7WtThhJFLt8rLwrARgxorVPLigibh8nptNrqvHYUuQiwfcg3AueKq",
  "key34": "pyYkifA8varUjScwJnv8bHsMRF5Ycapjx9CkkYfiCLNZwLrHSNH7pBBYZkSVurUajeoc22BTTiggthT8CtBCKUY",
  "key35": "dGDXvAeixNc8gPDQ35qRKbegpyA1j1UJi2Vmzuy1mwMX4tgueNZzA28Vz2VGf9Nr3AoRih3roQzXfBN1ebnHCt5",
  "key36": "5psjji1aNW2SsirFKdodSsjuVUtfhhdhrrzpHwTFefde9nTd6Y5zK579pYCM5aUJqDidPs7v8HPKJvPRkzc81bmj",
  "key37": "2M6wVmS1giwdQZDA32XAWt3QPEfodZSnbS5t5geTyjRV5irT637WJL3qb8xCGbAFMyjLYwEsjxM4WA2mpDqoKL5R",
  "key38": "3Z65L8e22UL9ynx5Mwigjpok7yxN4GPubh2EUsRFVFzHsq8W4RqPMN58fqpuEYe7N7s63NB7MJpobVUKGQpgokbu",
  "key39": "3v367z4GvWMovNYXipPuAop2M8v1zHkwjnjufsDpsWBDehHwt7TkiZxhEbKT3q4CDXNT3fzDS6fozdYYwT5WDoXp",
  "key40": "5FVftXJNPGsBLgTMSL4CXrRkThy8ppuiZd8cSJwCFE2jBPxeENnpFn2jYSKRsUQmJ2bzdN9D51VNzZbBBmgHwuuc",
  "key41": "65ER1kNUSw4hRAEXXTi12cyqAjkjMcDDMb68mJzv3dd9nznp557zheuJnfhkZwMKkErUo1nM1pZTMbf1paEvjFs1",
  "key42": "LFHJV8pPhkNUnGieygB1kmhU3wTVYSkRScprZDsaYj79NsRKcqK2LcEdUjRKPxjBKttT1XUDvu9KcqrGKQQFw6X",
  "key43": "6392WS5AvZ5d9uhFoVA8pA9zsSRNarUR5nP9Pq6a2cmrrbGsYBTYiYkiq2U941P6ZwFG4PV9FN66r9qV3FB2PrKH",
  "key44": "GJKtCzySwnS8NAy6pYxrovdL5uMFRx8HwVTQVy366ocK8M3fbgfkSYHYf142CyQ4r3SQjKhKMsZzjAwoat13TwV",
  "key45": "ivLr7H78PLLAzpNUCi9AcQg4oZT9gb3vff8biuWLbAHe3tZznBqxLBtbWuVzsGFvHowxLrmMzVp7DX6fbMYoRSh",
  "key46": "2FqXreCdoVsfYENBTbxLP6NUoCfNJuTjWPtGBcH7ZkY7HMZGVtYUCJopiLfiEkaBLmsJVhXwEaULVNiTz4mWLgLv"
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
