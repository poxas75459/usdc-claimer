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
    "49YSVT8Zru9MkApkqDS7ZfwQP42KDadppXtPG21VShahXC239LCCyn6xRBCZ78h8skoVZRX5doFWungyFU9cV3BM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "83BVBDNEtEpN5HA2jfcYdRNzjykRKTe8C3X6z1pe6NkPBrNF1s46gXpXgRAGkbULaWWEMyKAaxtk6Nq7foTtAaM",
  "key1": "211ktb19kgc4RKTtPRskPzNa6N5pPXRaVcHvNQpVpzHpgyAQwu1pRvsdJmc6prSTXDvB3EbSfQ3iz1TU2mD93g2n",
  "key2": "5HQZmvKZXqzjD3x8QCMZmNyuZgMQbRxKy2vQrDHr2rDggvU9HZAAc275f2T1y3hX23FtJz6pHPw3yHAArep7yfAG",
  "key3": "4cCJWu3afgYLEQu3qmyZodKY4xPLAxRr23pfNajm4vE1C4U29TeJ9H1znywJ8jxWPoiBHi36RQhZVAoi65KeF1vn",
  "key4": "3cU7jsTdZxWepG6eR7buRxed46aP77MtuQmz2juzpyB8az21Ay9ZmYisRB9r1vxqTe9wdaf1peT9k2iddx7e3Gbv",
  "key5": "2BknqjYdU7JK1GhM49YoX8BJFrmueNqcbbtBAPqj9B8KXgYdwSu6o65S2W4Av6xrBip67wmNarKkg3v5gS8RMod5",
  "key6": "4zAYToC2Wdtfkia9oQ83WbsjS48hxFv6Uqc3NpejgmECQ5Myi8HASk62c1NFg1XwdpKBHqNH2oFDhUugPCQndAm",
  "key7": "3kAKxJZdZjXjXj4vjXZDkCZnU73ERSEx7SE5iCAB3Z3AmrdZuEJmMNBGf9Q1VUKhGMEpUeTSrvTy45C1vSSYZp7h",
  "key8": "nU14ZSi6GbM7zqnfomAsH4CoaZno1ogfP5kAJx6NK89p1TVC31BskJw4vmbDZuNnbXcpJ1L8wyWpVUqDF1qiw57",
  "key9": "R1mTe9YhmCGaVe2ytpARxeecxHiVrAcUrPrV2DMcfZWoRXMjfHFprX65LezioUToUub1FMTkyzVMMdE31hG4A4f",
  "key10": "4xvXUmw79jVg2gH95wt9wx6BFMhWP1nRmzAou613Qs2w4TwYED5vJtyh2UpaHhf1QghZhS17eJpmRz3mAvwUmTcB",
  "key11": "5Su1gq4eXW73V4Emn51DKzEga6CtmGMdncmKSKXMZ65Aa7ncDtwv6w7SkAGJbEnNXdrbVxk5QoMF4nw3GxKBfiGD",
  "key12": "8BVmSuhZXGVm4sbcXvuniLzfC3UPT7C9ReYQretbrwC15gJ9onoXyAEZMfBFBtrgwnKFSaGnWfJve53h93Rzc5B",
  "key13": "26QvYLDB5uDqsd2HQSA4NFKY9osEuD1ahA3Fw3VqbNrD8xpFeRgjyyWQMaTKjn62uy3Gkfzkm8xHMHyPunVWX75Z",
  "key14": "5LqfYenLSUiVhEVCTgT1mGApyM2QPeASumoZYQZvtoPth8rZhhiy5guTCCVHg1ZCBZjmoEXLSx8xDHcCjT6cst7w",
  "key15": "JAXtKHFTGtrMXKUSde1BHhwCXAJv789t7Fc7fbCbHAqD5z1LGBbM8323CgWZrBGuvdyH1BJ5WA5jHPnQQViwHrr",
  "key16": "517TWN3rNRvQBawBK8epk9fxe3u1qM3AAmpEKiwTkZi8uaZFXVVsDo4GksRrKcm9DVxVF9zkj52CX8G5U4hH5jzH",
  "key17": "4UuwTyuQ9Uhdq98qjxRo9xHgFQo5qrxmx5o3g4LAw4wpixfTtjnBCaRn8Fz5RYZGrgzzrNMkJxb2SZB5PLm1vF9D",
  "key18": "3wWPWXW1i4sZQqsziS5o6ku5Grhy9Jdv2Gef4fKedNw3BvG4Xq4VvmfbPQaXptQYUAZsXcHw5Cn4y2CW4PTzmz8g",
  "key19": "5s9HS3R2nhPUrcG5Gz6hbYFBGdE7j1konpb2LinTFqX3zFmwBxhw6kRTFeWxVJSG2fQ3tY8H5HDxcvtfC6G9mdfT",
  "key20": "5XgHHtzU9Dd4xJqtZUu6aPn3myNTYTZ6ZJWsiUymyjJvD1GZKHTySQ2N5ybRc5NWMyUUiW7AH8sKXdUjAz96C4bE",
  "key21": "5cRprMKwA3d4HBZiT1chrL1Qxft9oXkoWTXDxVp1y8TmHrfLHwUzs7PagmNFdphUokFpNBYJw3qxsH9cwE7sivQS",
  "key22": "5RV1RgL6dMRgeSiEELyan329mQkepyf2w5FQt6A29EPAL8JyqWnBHcoifa64zeLWgYnK41h4cXe4iTx76q7mzSRc",
  "key23": "23NvnYcqkC1z9jWx5YWcBJ7AfWykwFJgQMbRftryiejKd1CRUPVvNbxaNSjMYJtE286Lm9pHPGh2MGUpFwZCg9KM",
  "key24": "32jhGaSEf1BU5BqGcwTZu1SYdU1rTNGzgcp4eJpJJ3tCHf43VvAc6sgjPqNDywFfd7xg968M9xiwy9ejYYhQMJxH",
  "key25": "4L1NyQGZYmiycwVdJn9dNWf3G4715jCg7bdZG6vyPhsg4bg62sSryy4i8Z6Xm7kf4L7JJBgbQ6gwSRTbvSCtJ9PG",
  "key26": "2N2hvPGY58BrK5PF96yQDLLG9NJAjqzRkqSVWdKmUJy5anjEoKUGoo4KYbax15LFgNfNhY5qYUzYChomHYWqMbGr",
  "key27": "2RqszrmerFteXtovAdP5UUsCH96Ypv85RdXoHaKvmyBMW8SDZiGmZV8aLLNrLYP6rapdB38DabinG5ioZCY7Voub",
  "key28": "5F8qkyeqPibb7Tp7PZpzBcNNxtXLA59gmwNy56Z7gS1NB2aSBSvkxaaU2xvUxxN5dq97HUCtPQGZCFPUQa8mLxoc",
  "key29": "3udw6y4hFZtysQ4xHprR4v44aqJyYB1AC2dhvydsbzM7s4oNDHxLNUDqvEhRqdAqjEK2JUysjgWWmrBgtMNnD7Q3",
  "key30": "2j4Dp3NQg6Gk36RXR163kk9LZBMmShZxzd714sfWmwCm5CkJJ3TwoX6Rv6xbpPQQ86PffhL3oejdfbe5gjaHxVSh",
  "key31": "3VvEBXhSxfGTB8pwEMWVtk6ws5zfuVgaABLcAToxjEdrUDz2cpHwPNJan1Sa62ZyyE8L23J91YxCQDCZgmA1fRCU",
  "key32": "4iuK6TMztrSpMubGt92VTpeqmRbyvr7SPWVGPtShvutBCfn24BfpxcxK6R4Fc7xhBJjC95pYHcLDAPY5yYRvn7jv",
  "key33": "638djhLFTVn8VyF6U4sTWYpAAhjUtoigiBxuHyKrkmFsAbbpPuPPWAgmmeczCJobL6W2JRfPRwGB4krBhH7oe87H"
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
