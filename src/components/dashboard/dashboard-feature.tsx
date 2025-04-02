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
    "2WLe3a4pG1MhMhAdy6k8jfpeSCYBA1kfvTR1zzFzfvWWwgE4nXZkSwUBKkqeQEUG3QCRTsD3HMuZ2t58zcJTma8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EN3VSJeFeF98tqqoArN6L9BgNs9RATbwBNkVG66pDJQ1tPN1BwpnzwX52e6rSVWH9fN9J86yc8f1fSGrHXr7paE",
  "key1": "3PF7j7uohZW5CbWJNZCFBXRj1WQXoru8L699evHogMh6LsZcueKxD2o9kBHprJm9ZHAXSE52fxD7KxA9s6pTzi9z",
  "key2": "5KHAL2aVD7WV3nHrXtY31yUGxDjxkNYAqDP51oovXGX4H5HSN3Cku1ACX4mwzxXcRAgbELka69g7yPYJgEWXsUvh",
  "key3": "5ygSe1vLSYesbWu1N8c6g8ohFM7onxQmucYw7BmJBZ6FCweLPD48STWXE4dtMHJHbVzxfMdkks9csB9q6FYXaRmH",
  "key4": "2geQwsyGaNjz99sVwJbUAGwGvGa42Q3xdAY1rbCnKJ7GxpEAX8zd2YE7xSJbL5Ghjpysd2hedbNc6Q8eDKCGCbZh",
  "key5": "3K9mjwwcb8r3mztfN6LFpjuumNrXTf1wwrn4jAd39UfyqZMMB27LuMYEqSUEN5j7zVKfqUUqsyJ9FKt6qpoghUEP",
  "key6": "2fQ5sXHfgPegufgckG2P66anhjmjTqw6f6bhiKHxYNWSYk2NDcGvk3Q8wdBkTeawyZgiM1dUYQk51NT2ZxqH7ume",
  "key7": "5TMucbLR44dGcdLjhXHjWSS9vFRUymU9etk53RDHNCeRv6zBZsxJnvA9HUJuxKQK4NaMkBgV4H9YF9wHofXfzPvr",
  "key8": "5dyafLRgexzLxAnzJDvs3quMoFU59gMoKN6fvZenU858eBSE3nntnbqsBrjAGMmjzL1uoevCFLrcY7PTHx45HWaV",
  "key9": "b9qLHF2GtdvYc8fAeTiVPnygLDUY9WLZB5hU4KrUiRZAwJRkK8tGbaBABX5brVbXVVCkVaNa5RXU5QfiqcydxwG",
  "key10": "5nWhkj4oGooVZj1eSeukzSJCtcVTJH1SXUyqtR9Mf8mcgHpo8oGRiHePWtxy3a2ZnQD2UojVhZHviDYqLHJuaXTT",
  "key11": "3saYDvm2V8PanBrsqwEVmz4HJWMxdeiT7bZJVKapbFM34i5QVdqcfMfXbo9a1xJEWueCYT1rf4W2FtHW8KS2A1v2",
  "key12": "5co4Y4S4Sk3L7LKVD7bTZAZYxHC2vhm9eeaSfUcuMfasoHSWewxoDkeSfn7VvFSTLt7KXWmk57b48cDDJsgU5ZSi",
  "key13": "38QJzTu2norMgYm727gZdcYaBgaqAZsmjRBerhyEve2pgzVSSdRNWQmHP5bs6zyG179qTJoA1zDeZiAWt7nKkuRg",
  "key14": "eShbeuT9CcCHjL4ZrUt6EpBCXKuMQzeSwPT3GU3xriyHGVC7iG7iNjaqaycFzfLjQuHUjt25mYcLgEgkt4ZmS4G",
  "key15": "39cxqpLV51tYdw69aWcYg4tSxEwydaxbkVopAiRi25GVjs1KYxKa8h67sssMwF4RV4C8zQjtZUVEmyNyRcmXmFge",
  "key16": "53VVsvBmWWa1VKBx7kgZAcNgQThkMn3VHDwAu4rZXWhUnwVT2HH5ThVaHyw92P757BsKiYFXYAMQxktwLX2NgZjJ",
  "key17": "3SREf57QaeMBsQDqHY5UWWmFY2EfcW7DvdzZbAg7yCHbee8tC6tzwDgRqJt9b7MEEFN5uSieN7b4a1i3Knt51g5v",
  "key18": "3tKJpF1JYPqhbZ56D48CeSsQXfZqqAvaXb9cakqQqYHHpCsLvRZg9eNoBopcx84YsyRzQnoob3xHTTAcqUfrVzhZ",
  "key19": "2c5fi6WRawXhLEmUuBm1owohNTjAF7fgEj4DzpSe235r1De7C9b4Z3cfa8gzMPi1gG3qexEyJuxxBCnQGap7tfbD",
  "key20": "3sVWjaYDCb4YXCHFdrEtPJugt35gSFSZNSZFiQWvdDA8C3rpjyPixeSTfxeLz9GSYjh7S1jxbwdjNne3Avvzttqy",
  "key21": "2rWzVBTjv1f1xLtaKzkwjN8Hh2bNBc2V58U1usxxHXKaBJBTozTYz1GrGvmyo6dxfwuZyP45mgHVnchVLAxRe7d1",
  "key22": "5JCsm62V238A9ZEWumNJUami6oDkEsWMirwzzcRw75UdpU1KMDrQK1pKdDSUJpQqjc8dUCThGpa8a9HHdp8ytMQ4",
  "key23": "MbE3xwkFqLRXRdSyrTZD2r24ZdKZzJ9BTTZEpENWHuQW2UBacUFXmtq3ydixb13tAqdaFwqmKWzshGwFRe1UELj",
  "key24": "5auKrCxxSamPZKJzgEdsMJXheqdf4D68cKoEDBeT3sbSBAwFXv8FdLR5oPmQCPM4FQK6QeGyCUY9V5h9sfpTKJBJ",
  "key25": "3z2tLHVCP915qXGZqxDNQgZFDCvtH7hEYkaYuUjsfrzEjSxNbBWW3ERddv2MDcYgBg2PmCJvUjYUDcJFFefpKcRw",
  "key26": "4jYMEBH4ySToKnzuVsQWP5ekxdhvH86eoiKwifwanRSCC7UhGV3X5efkSrHUxWqqDrS93rubfyvntwjpso7XHqTS",
  "key27": "23Vo66qZfgmMdn5FGZinQRvJ7Y7NSqPsx7zj8F7mKQZeD5YLXMni6YWy7Wdk9fpH2GVe14k92rfneWReDjKc5Q8r",
  "key28": "iM9Fu37oZYe2sSog8tCsp2dL1MX2iZVQZiA9EGWaDghoE6Qui9ArHWCmSL3d2czqYQ7KJUCkPzu2VuerRB8A8d2",
  "key29": "432V5U1XsvHAafgL9cYAgasTg5qU37cVWFrbQM7GNysxLGexWDoZ2f5hu7QVfRZzZPjUW86ZUxRoU6TyF8BCudRd",
  "key30": "y1NCr2zgNVyxUGvySnbgrrn1fAyYmaCHFUYXBuZjN41JiuCPCUiiamoQ1m6y2DNK1gntQhL4w2sgrmZxzm6Z9wz",
  "key31": "3jGYVwNTPxcsneUx6hxTMwPbi7Vzde4geK5GUqTnhGuZkSdHyCWqvFTZt8v2ErynMR1Kz9BUQkVPYjfqrTBwFEjb",
  "key32": "4MbYRv4wanV3msjFZD8NFfdoR8oCmGDSJKrDhy5qu7WkuiCq1edPSHiripRq7p5u1HJZxnYsKddcyr2McbbdAbFs"
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
