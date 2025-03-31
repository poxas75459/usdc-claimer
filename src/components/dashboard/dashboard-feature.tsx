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
    "bZqQrkFfQzK5BNsLhsB7wpLJpWuw2CuQx2TfLjZ6ReTV1SHFmbX2eJnN4fSUzqVVLx2ETfzoxWJsUkgNtKcc7Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kYKE4f1Jw59NBpb42jewaDgZ3qW3d7f6UvZYvnz85b7Pe4CxQG9pnCpS96q8kSGe1iQgGKj9bqbf1UBUM3uw8s",
  "key1": "3QtaFd5crdHZyNddQa2gzNW33zQASrD8wXTGxyJrPmi4wAyLyxmyzZoeU3dtcSv3LbGWbBEcbGnUM8XPtHEN9PMr",
  "key2": "652ZHa8XXbmr7gaWug4iHw4dESoTgAWBiB5vgx72ZfGrdWGzHLBc8DrwK6QfUGeM8z1AV5DWm4J1PXBHUC1EB7au",
  "key3": "3sqAiwuE5cw3Pdu9uJSepdWS9sjcCcEoomChftXzmJMGCoXfacAq9TRk5PfVvZYic5ioR98D9T8q6oqTPX7QnEzD",
  "key4": "4Vvav6bdqYJN4c5kLKM7S7qTj8YsbsdfRvKncP1k8T2RZn4CtTykedbARDV2rC5qvor9o7KkVCAdr7mJoES549ua",
  "key5": "svjCTGjDRSiK5wv4FQbsJ6iaRw2MHdkMkpS3L9KhPBQhbLq72H7xbanuVhuJUMpY3VF1yMP8mgqGBdR4gjUxpTC",
  "key6": "5roWoEfYM3JJF3cq7B6hqxB9A1mrE7fyeSKZhENkKDCG5S2qYneAwnXXuvRG6QZ4oH2B1gKWai63g42o4rvM2N6X",
  "key7": "4knmycuZtq5ZT4tPrf7jFxQe6FYxyiD9g3pBL6rj8PRu4BRmiitvVJ7KWcBvTTHLy6ysFxKwzAp4mX8yiKC7kHZ7",
  "key8": "iiXhztbgMqB2o9RDNivGp7XDsUg2JmGdomVSmVxkT9EnhoxedJWvEuknN9qcwUYJJbBF68sat2DN2YKiY882Krn",
  "key9": "55BihJDcuf1QG3zBfjs1Ge8JjuhjTJcsrabwmU2yGQ7yhUthscvWm6dC3kfAdJ3ENhzzwBtT8vJp6tFNnzjJYsoS",
  "key10": "3J5iMdJbbugt2RnYwMUfrR9Fsbvqv9eBQUkkD7Bjw97Q4KNZ7YYEyrpJJvXKc4YznpA92TqFn36tUzgZGxDtrfqj",
  "key11": "4TCAcY8XtwdURpQvsVGPL1a66LwJBpfitPbHj71px75WKGWNK13SGYSurZCFGmsyckmF2snP8wQmgcgwkMtf3RMs",
  "key12": "CPNDTHb62deCPJVJMtgrLVxg4UhtyXE2JovRFMAzStpdSQ81QeFg69X614xwj2uZDUviUho9rK35nWBQQqhob3i",
  "key13": "2ysMJwnj2rcZ5E44dRiTzh8dWYAecYTb5HQTZu2m126s3PUGh6JFrGqA3PsxKCdZEd7Dwrk66JvNHTpnbbih9Hi9",
  "key14": "h8J2pP2yHjUMR29Ehbc9sKxVzcFdVqcDA8S8zC21YaF1qgztQjeWX4Eo1ktX1BPBvmfoNXyBVQxqZtMkpQb8rQV",
  "key15": "5n14w7oNr2J7fhvmozdspXSLPuBkKjqQXphfcoBhbrXj6VjcmyUmVo3n7C1iCyM3sR2ahttZEjsaEnRxz8mNPZ3E",
  "key16": "13u3CK7YuNBU7SJoXzKi4h9kRKjCL8F3mbQZYHnwoyCwuLdqdfuhwN4fRSfaivXNLf5NKpTntjGL6YQABrJCLzy",
  "key17": "3KT4dLFhbiSmzt9n2YfFSch7L58oxeytQRpextVCjHwfPApxuEYJpWApZQmXr91ApgVfvnvJP725dm15NtSVVUPx",
  "key18": "37BjKDTurzMgwLqBscAvi26TAyPpmFvcTy7tS23Bc5qQL1bdAc1MA7wh9ggUUe1zkN7hfCYUeQ9P1BdZ7e1Difir",
  "key19": "2FHehRppCmLPgf523vascxcAAfqqmN39xhXXERy9VSTyRo5kcT3hWtLhdVGvwTW77m47CUfdE2wKdba5xhWpHsxc",
  "key20": "4wmdnjw8AmBMjRsFpBNDUZjZnN76npVvhA7NMzWFTtFiN71i1526LXCCGXyi3dz2xaWN6LGmitzLS7rLuH6BdXRX",
  "key21": "575jvQmx5e8UNLiy9TAQhHfTGUhYQhyyHhCfU8Gpe5pEvsxiJUPXXwc9bCVjJXyEWm2HS7Gb8UDHbucPn2Y4npKi",
  "key22": "gsGZ55gk6R93btTcrCvUonfFcjjWf3AyTYkXYHZqTv75prxCqbYPS9akcBxKBHo9GtU8T7wvo3toEppFuSV3kCm",
  "key23": "hpYXaQomoYS7TSFLj32kMjm9K2M2DbwWr4QjyTdTFroSzgGGj9C2i1BijumhhsHAy76RUST98dJLGUck1q6fBQp",
  "key24": "pb4kGjSyDHoY7dzpbBbgFnfxMzCQTj1rzyG4vHg3SdRvbowm5pJrPQbGyrH2hyxeJKuLzr7kUhAZipGD6sNvFw5",
  "key25": "2juBmdnhNpVaFMzpN3GDFizQuub6xjEQrAN58XUAzg3R93Fr3fD5nCzZAjZY2BzNjzuSL9wbPRSLTGmSLDAzgpiA",
  "key26": "5u4XiFVJgb3GuqZiG4ovroE7rSjcUyAQHSdKF68qfenwhhayDdj1Ao8DWBXvebUupfqTm2WzMsMr1zeJdoCf1pSZ",
  "key27": "2pSsryGets3uEXxsrUmc8emnzEW1Umvba7K649zXrHqWQ3mtHjdx2UYiL1wPzU5Zxi7uAuyfb9sD42LJQjQAQusp"
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
