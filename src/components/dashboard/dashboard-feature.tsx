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
    "utfXHb3VJMvADTuGQEi4tHoNheZtEJBPnsL2VqamDR7V9h5PCSoRbLefsdhuKAJQCZGzMKa3QNWyCHdUUtfC9aN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BuupmhutKrbPncXVFaQzxg9qhai7CwdtUPeEJnsShEYber6PL7mDiy1U8KU373HrQ1F9Wtqn7H1dAvNMkizj7Vu",
  "key1": "2oQkq6JkqKF1WtQREStf9ygbKX3FbHDHwE3n1hhgyhakktRh9xBCg1ESC21ooaKapE7hei49uzYbcvDfavnxR2ov",
  "key2": "2L1LJRxZyGNKRMbJp8P3mSGvxyGw39EJJQ1BJQ4p6k8f5rLcnrYaiqxHgDNQw3suWZcGxDgo2VVqge3JCDMRk69y",
  "key3": "4owebDLPUjRUGgLtoh4vAkFEJSuStuvWKoQ8cQ4UHhSndEiKmxMJ2P5LDvRD2f3Kf9inW25Ezyg8QqKbQoW7FQ3t",
  "key4": "4HFtDHEnT1J6zteqaKS2fYP478rMrWZVxs6m3PFvgbSDYpfUYnKDY7JZxXKynRTPiVZE2NwcQqUFs6akbw9BtTPJ",
  "key5": "2fGj39etBV6uLcbzHdc2vqTyomSk4vKr5qCkod13J8CnHiBZk2RVfZMT2rqDerr35yDPr5jHFXQPChnuvMc62ckg",
  "key6": "34VLZtfZZ9Xc56xxFBeMErofVWFeuiEQST77wRvSgm4JuRe27GDACUaBTbNAFFiRRQa2zR5upBrh19Fgf5swTjBi",
  "key7": "3SzkqRMyLHuWMed9BmATMTRHrJvRm3gtno5JUegHSqy5pL8VhG6HZacoojKuZgG7JxAC3fKFRWsWKefbxWeSaECf",
  "key8": "bHRvpEGDjtXNYbBM6d8tsbBiSyw76Emw4co1UTSLt4P8SquBhkehBmYh5wa41VMc3L76QmgkNrZNX5jeSsZ1RiL",
  "key9": "5AByBvbbKu1BmkMTo1NcoJ8JKFUDtweK1jeQuJLzNVYRr694BuHnqLoYi91MqGAHXqbYG7LhBkG1CCNmtC5LeKVj",
  "key10": "3Fvq4Dw67xJ8XNM49qwJTtuRUX26P19aGQJaygEYnb5LE1gNmKR52yKg8Fz3TKttHbEKkVeqHLwuaXLvXhmBfjGx",
  "key11": "3cuNoU7WTnapnj3tZyfNKWhRyqJDmpfpkzA3BE4xVDgGHWvV71SV1CCRugtT36fYBKh6x8cykJDtYtiXEDJQM7Ld",
  "key12": "4KJ4emZJ3WTgBS2wdHju6XaKqkFfAGfJy3WFzG8G1pDKAbMNbEZDkbEonRA6qwNspzi28zZvQPdfjuA33wz5fsnv",
  "key13": "5VepkqUsd5EzPWnyZ42tMVFizrrLkjqJNFZW3V7ZuKzftUixvpBHV5tScm9HdiD9rCvt3QtbpgXxPV3es3dySHHz",
  "key14": "5F7qAE4XHsDJfeiD7T4qMnknnai7wxXvSaKTdc2SaUSKC8Tu3Yx4Pux62uijBFSLCoMxr8betoFqRREzToKzZEnj",
  "key15": "4bS15YUtPTScM1H2mmvwdMHXFnLr5JdVHDXjJUnvLbycMTk7XuwG8cRKjG3CS3njQjK7zACyqw8YmmJLaycLYuHi",
  "key16": "4VbSN7xsKFbC5YUvrco4iMMoFvZq3dt1EmVzX2LP5T2cA2RzhegjFjAjFbMbhJMAbiAmgdC5pWwxE8uULH6MKP6U",
  "key17": "3KtKs5ZrvoFyR7bnzQqKt2SiGnmeCeuu14W1q3zcWCSz8qRFZXa94Q5V56xEMM1Nbc67wv7EaQ5eXfpXdAQcy39",
  "key18": "4QxvQotgdH8F48GD4JTuuXQx5sic5DSGrS3s6ftd8YCq5QRneTz6nwyHFKHYYzMTQLpdLuNUFfu2ZR8UdWxAAsTW",
  "key19": "84bsR16QxTzwe22zRhYjgyhZvgu7UQn5oW9TTokhkkF2ynuFpjVvyFFfmd3VBw1yj4CkzWQkZsuzYeH158zWwiQ",
  "key20": "F9S95hXt9Wh9dYSYkUCVjETrs7LTNNtGoyajVTKdkpAUkMsfBW6Qgp2Nsf6k8R4QVGfHk22hh4tzrDTXSgZecds",
  "key21": "5w8EJdZVENyFUQ5TfnhUWxGcKGVJ9uR7YNBw3274BP4q4GC114oeJHG8ctHQ3ny8cnqDEkGSbN9tf17w5XzbNwP",
  "key22": "2faUT2FfquSSRAaFhwGp59NcRSehgj5hgw1q78YSaVP4LCqT9zw1Xatd3ChTDNk8t78aNN6GSD9FHdgvsszsc9wQ",
  "key23": "4xi4rE9uZ4nStCfuvFqGG2Z8J5GN6DbA9BZZ4XHZsHNma266MAWjQQAuBU7cYHgeVrxZN1mzXTRBgejoh7fsJoxm",
  "key24": "3f46nCGxjvksvzrLXBfeoL8ejiA5zUhwC3zh4QjK35virH8iERCBSY6C6qfTFeLbvUjH3msrjWZVkQ99rer26JgM",
  "key25": "3enQUcUy1sFUqExckVAfYva4Ja3ePuQEP7hDoALVEyic2ZyjLhh7ApcjjvJ8VNg55VcfaZmUR8faXdfExWuAuMgd",
  "key26": "5WeLCP8tw4ayYixCRYvbX2C5JDbsVwJrios53DacXNnn3ZoKESqN6Xg3BmFsm8KrEBPBooEVzY6LXEuGHfrx6Xh8",
  "key27": "3gZeBLr9YEounfGPyEM8zf5no1EfiTi5Jbr6i8S599tfup76MK63JHBf4PVc4grV5sc6wrzeJTcMeT8D55Jse6Qt",
  "key28": "3GbnHtYDXgfArmi17xDdPJR49DckYaBJW1BXC5zSg2psqdRJGWVW7iRvFbGxTs41kQWoZkfwkBJsuPBgfusPboT9",
  "key29": "5spaYM7pDqAxtLioj3GHPTmmh9HX54RW6RFtAzz6KcSq2mAHho8cJxDgfPbGgov1nPpsaSRZgJzdGBwQ7x5c2sXf",
  "key30": "25o41k1kz4TyGch2nAAiFKukkvACgHtab1MjGB8Y1rhqMsaPbGKJdT7RoC4vdZZ1x6MnKxmrxC1JnbAMH1bctbVj",
  "key31": "42GA9WGuFGDeyCq9xym2kF9R2di7vUMx2EbTx2uSn8qTTxQJEKu2oj9rS48fE8d6YFKsJsZB8i66wz7KFk6A852t",
  "key32": "4S3d9PF2XQHxQFx46Q9kZLVX2N2wJnjCDvPVy1GSRy3hDkn3bi7D28kjSwzBf6yFWqLrWw6gvH2jrdrzLt9M7zBW",
  "key33": "2rX3QXC7fKJtrPoYSJsw9UvFNfcP3kyj2Mvei4HDuUvaMRdt9sEV1nu2fs8iBMhj3c2D6LNFnksn1X37u3za4dHw"
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
