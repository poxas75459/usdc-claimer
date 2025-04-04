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
    "UEpsrgfqdspqz6iJtSamFb88EFRHpCeTA94NBtg6bUpZtWbwkJCyQgDnJNNVFMLKNJ1jU3R6Loev84TaxG51DM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d6rrywCT25RF7rst19kTA8aUzqHLoudPSFCyEKhJY31b8oix1NZRw8ZcoD9dp1aMLRcKoXyvpdqau4HgMGHacGn",
  "key1": "3cU5DFqiRLD8JLS6RTbqcKrJ5qxDESTEnR4Bg4GCCaQxBnxxv8kdjPAXXCrgj5AhWeUk1rqsrrhoHvWrP5YFKLQw",
  "key2": "2VqKVK2Kskmy6oVzPNvTTg2EKGL6wGAdd7gHbUwKYV6LMYWj8q5TWmiZyBG74CjvF8ucXc6sczhnPqGMQsjKESjf",
  "key3": "5bKrhyY4Jycp32BXX3GirYWjm9GBEUMqxNeWdtgx5r4tuqMtZctTm7D8VmcQu84m4pdnDCZSxKdZNdNNVkFbkNo9",
  "key4": "2bMPLTZW916CuJwzxBKKQACbS8GCcJsgY9UtA8d3pwKrpWXGsrL34ra4cUXubbQi28AGuMrYyw7JEBsZgrQPmgWz",
  "key5": "4rTy5wvo6JXgQhyPpZeq8ZhcvizefPdiiiJsiQUuvojVTz95Jqq3CWRYdgjyu6TvHnXefxyQRyMXMaz4ojafJrxp",
  "key6": "3HbSFcXj8RaGjAX4zS3ZRgagRCqEbGXWhbfYqQnaySiEq4jkjcQmHL4QsAPj3vbKKy6ztdZ8rQgWfkPEuLQwEJwv",
  "key7": "5hLy25Dw2Wgw78jUf7XLFWnnfDbtM8FPt5uhYUoQ7jFPCWUmkKMt7ETCejEbtCrbo7NcM5CckTh4U7N8p282r7Es",
  "key8": "3Xz313jTyeG3Cg2viTc734qgPVCFdjGsHQnvsmHq9tWrwYiEZNbeNMoiHEsDk7xtrjYQtVLCcSWJ5JF84kdAhAJy",
  "key9": "i5DVSoxPU2B2qqbP5prpzhUPnmBMUeJhy6VjZQejg3FxdR61vNiRqK69QVv5pJLW8rnw98Qxh6KoFjjCRgfVDJE",
  "key10": "3eNGazAXa4ebPDfBnV4FwxntKbkJCSmd3C8xu3McLsDAsWTshLBdoN7myFYskK48YsbjhYU6y6uCc5Lb9qhjzZM9",
  "key11": "4BSj2sUj8v1e12Gif9m1VMVfdd7NYRkzRoeDYhndjGajt2qP2SPvrgeuusqFXyAvXfAYpGuqeetCGeJUApxURr6w",
  "key12": "27c33Wp6xc3XDhDekjhXghUAVnCFsY5GF8MxUh3UPQrU8jE5ikUYYQt7gDWNZW9MDYbqcvrU3mG91yQgGcBmDfLm",
  "key13": "46e3xioXchH4U5N8DLh85EeCTZW6DJY2GFjDwjGVhWN7aeAyCBAuQTTEP95xYiZfzAHupNwPNTFSxGxtJvMZ84P3",
  "key14": "jNi4W91xJnTK2MVficjpgPD5iosfLF1qdJQVsVv1BLwBoJnhNwbePNwMcEgyKkgrusue3MUWS1MVcZLTugKkfBW",
  "key15": "QvVfZ7cHT15jzfWYbeCMHXPRCTUDjYDdTcdkhHab5iJdjTNYiDD7Am554Ld1tEjRXhpQP1iCgdhXntEJCCvhZGa",
  "key16": "4EoL7cngjKjxtAMZcHipRDhGJu5M5x5kTgE9YJZsUM4wEZHq3coAzPu1a7LMrpv7bsmeVExpxG9Hw6Tb7fZb1WsM",
  "key17": "2DdK4Ygm7RNRXqqy2YS82zWKWo838WiULrkfJTKLJ3ASupiBSLRJekaXD17G6NTNg2VmKrk3UdEn78hdwYziGsn8",
  "key18": "2KfZweX1M3E5khVigwPQvGRKH8qRJ6JgYqKdjWpbBpeyPCgywEBQPZ5vHgPFh4B3A2P1qJctLpAkRhPU3MArxNkb",
  "key19": "23vYtxvxXAUrkPaSV1fpfJ6YQyyboeF1HVcXigzpKQhzjEL14k7KWgSekQiLCPiCwpYyNkcqVp7mz53pVr8MwrTq",
  "key20": "5hHsHbapwqspz5UVdHzbCR6MqeESGXQsF4gQHK2c1KQ6onk3H8LjVKBSvch34D94npQU7WtY4RTmF5Qj1cSvRRhe",
  "key21": "3Z3NJ3BNR78ooartRoeDe2YwjHrYusVcnnLLC3Miaj4ZirugRTE14KwMwAu1tYKt7qcywPiNsK2obn8PsqjNGrZP",
  "key22": "2CzV5j3XKsXvE5fisYMi9fjNgAaohi6uAiH9Zs4cr1GtMs6ZYaXFHivtcQhaWGSR6yhUjT2SWfQYrE4uMcpuEmyj",
  "key23": "GEdML4GVeMEhWcErChNSiia96SQBG5JKCnnyQB2BRz7N2JVE8oLA1ZMfbWbMTYxkC9cdBk2RwM2n47Y4YqtA6em",
  "key24": "4r2tyZnCBW9ceHJPhaYb3tJR6duPH9H1PEZJMbts7bMxweM4CbVXMmyLqHgmGqnju2ourLkf452LNtDj6sJYsxeJ",
  "key25": "58dyv6Bqzhx6CwJJeLhCsMg6iW9wDWAeU3qhBKXrHD2ug2vyV6vXeSAR2UTTXXqQrDkF4CBe3A1YonrohSSWqPsq",
  "key26": "2fJgp41XqUuK3Ahc69mJiaG8JM2zChFPWhpcHtpXPxPNKKkAnd9s6BE3qojaycDBb6Rv3qe2SXECwAzKBVgEHh2N",
  "key27": "3qq16yhf5XmnCwNsiHsGnBUEn5RLw2FWryKbiyAZuwD79guVBF3p1MQWZjk3h45stHmXeQCUGEfrdm2VQr89jv2w",
  "key28": "3NUXKBNYrkh3HxP6yYYoLGTMwSj9g9mFVWyRxq5nzVQ1hiGj7H9v4H5p9muPRdPHC3M8rishjrQ54EQAQQwWdEJe",
  "key29": "6w5LbdwCrmcCn5wM4sVMrJ5m9hPUNgnzFigNci4q2iiNfc3qsi9A2GQJu1mPmThdHDV4TEq2A45sr88eiqWBgGT",
  "key30": "2skATcnXieBeda2Znnvx38Na35EXbWvvou89Dc1Jkq38uMfHATCPccLZnRJsqrT86xoz8Gc5quQpc7Y5eq6K6ARZ",
  "key31": "2jFnws35bCo9aiucMvCr8TdLBik4N1H9TR2TS8jSyk64WDHXU3ncdY1VGKXUuvKWVZc3KEDTmDJvcZgxE5nFUema",
  "key32": "3FaHgoTSgKzQNw5hGPxqgx3Z8AcVKUf9rLcUF1eFdkwkBiF7XjiCsptrBA44VWUpNwSwbQgnyRuJEFAt4t2HPq6b",
  "key33": "5UYWcD4A5PMRh4eDVEfNtpawMyuMdBf1sTVdEcYEJRbu6BWfYvzjfHxfPkNuCZ5x56GkqdYqoBjHsbmLcFnLJEVF",
  "key34": "5uFpEFG1M4RAznsnRZycsCpw939nRaL5y2CLcf5TZFndTvETvjKPoVC4HKd3YC8gYCiNjYyLRaCdzSUsELgA6M8x",
  "key35": "2LeNqA7R4JfYUCM9UDN6rmDZ2UbV9H387Wb1GftutEvwiv7eapRJhYNwRPiBd2QbNRxC2VLrhgRP8raVP8QQnS6M",
  "key36": "4pBJLUwn5mgvErXisEgmhEviaYkqhajok3E94WQnKKbaiFDPP8NHr2erGwd94RS3RCWK4Njk5mGVh5zc1R9z7gXs"
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
