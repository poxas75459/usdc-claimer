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
    "6aqUhEp16E1bWSvvRW7Qr5wKPHAHEo8Jnb6ei15ayBjz17nbiZc4n1M4QUj3u6jkZX9fftYaioeK2bwkVKfS1j5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "235VhYY7mFDyiTfWgh2B72PpD1UpP7muhDeRaq1v8JAzPrcyrTkYaGHeLS7taftBMw3JH9FrXaqHGmoZHuzVjdvr",
  "key1": "5tURfy75fDPH4HkaJw3U7FDudHmqxGPzBiLPf8R1HDZweekBfrGPP2pSUAGe7TBkTbEkjktScpubbmJDCABCky5x",
  "key2": "4dHTVDjGcGCi9uWeN7LzSWBt2aA5cVvFdTA37fHydALDBM3QhdFzBzFUumc62fdhw3KSs4CsVFyQGobocdThSvqv",
  "key3": "5aezSFmSrDfAWezkRaTChyZ7uCUj88xQVsnsPvDPBZT2NqnY95JSGXS2XrzurSvXVukWXA9KjLmASuidk6VVnfev",
  "key4": "2BNYXZrKWHYCucAWtk1aXB5XkdcMwewU1ZUf4YyPx1SVqdgNmMkjwwMHT9s4fgH4VaRmxt7Pn9eEQDJvfLctivRD",
  "key5": "2bEdfCz97XUYku5mDPcbSaDRwPhJ1YHqpA1oAzoECTyLfuZ12aktW4xEhHdFuGwn3C94tThjvTqvyGbanxFowV3m",
  "key6": "34V2sPwNkyE1v8m5MYxANuWE9ZfLQBeECs2TJQrTs2x27Rv6fPuaTgB6WV7okv5kkJS8diaWumF7QxvH9isEQwth",
  "key7": "4CdEri82KiYr6QGaouUyew5HPMgCpN59tjiYuGMhFYBCTtVwujM9V9yg63zh6TYDBVasqaTm3vSWT4RtoSvvKDuw",
  "key8": "27HuHWuZS29ajULnb4vnowuRqy7YhX5u7J6RK4hP2Qz4yaonw7uRcW9Tamue6d3rJdptkz4dnHHjtdkrLbqC4QaD",
  "key9": "36PPuLLpgWaKjgMv14RbCQuSKW8g5jqFS7E1Dny8qimSy3Uxv8RyUqVWzY7sHRdP9165L5EK3BZbshEAKaSW2qNS",
  "key10": "3q4S75dCCZywnkrk7UTqMLqH8v5x5PL4eUFUvaTTT5b81BS6DvPN7hda7EEV8QL5vEtxzYijQwkwSFebryBW9JZ9",
  "key11": "2BrbgU1sGtqz9CZbs4JHd3LAnFY7Z8H2DG6nfhw9HRui8j5vsT4uxZB24bYCmP5JpkqJZXAdNraBVEE8mN5HYeXL",
  "key12": "4TR6KAirNrBxTsE8LAshYQYEqCehzcqx46SvYHHt6bYAa1oQuXBN44gwrVNF9REJ2pHmeVVxUHE7V8Dup4Sc33d6",
  "key13": "uwsQMygnGVZiLt5JhdWGLe4qfZEJFwGicKxztJ45BmBD6Qr9B7LKYpbLb6diTuR6Qkj5aPtsg3aRZqzGRrSwRSQ",
  "key14": "37EvqtEjt24vgBo5DxQxGSCQ6M8BvaZ1xtob4Csst9L9xcNrXqQayRyZmxF487i7G4rJPdTXJbUFP9SCJJwHNsZx",
  "key15": "2zg2TESvUKL3RkEy9YmMqvtvrGjaotJ9P7gCNNpHmEn5r5SU5A5uDMjaSedVPrR4TUcuWXLSgXvcBxhphbL8u4FG",
  "key16": "4P6cMtz7aAM9Gj4tJk6wrFqtXKxfmgU8XSzphfGNYEZBQJNwj9oVyyBDXjsFzwiJrohCJQ8bf9nQDbyZ3K6mCF73",
  "key17": "38JqmpBX6ykVQTFKVwRDNwDY5Tcp7ph4kdfshHFZ77q3DaBMofUbZCR4LkMJ2QqRKPF2qy8ZdAPagL5RxrELaNGz",
  "key18": "3nHLri4mLGardbSD2qXTnLrqXtVaVGCSzhFwCGucTR2cXYj7uwsA3hxe8DX2z43tG6Kfv9aY6h1czbjKa6LmCTM8",
  "key19": "243Q6GDiajtUfUoQmHeGAEHZifDRyGwJYHscmGvUbSZd4awBZXgezqUqE6ee9xVqSXkkyuAZrXE7cGmmRAmfuAkr",
  "key20": "5gA9L8VQ3QGpsawCWLpdSomNGoY9FeSFqPLUomTrbfSRyhi1FMqYAK5BrkThWXYVfvYDgRLgmNdbS44odnrUmK9B",
  "key21": "52LazGXYNPrVwAzENyngXhx4BXrQB79cDW1Maft2oNNM9xh22nCW5UykNdkwJpoHgZUsGfPDBpL7c2T21XmKcqr",
  "key22": "4wtdiYeqNgUkxvh15S5GZ4sv84T3RpdT97So9APb2RJhX6mVQJLDc2nbkkwTUj9EJQLRt3asKXTQprxpgFJUZhNk",
  "key23": "9ZURtFAJu7p28u5GkP35j1kMUcvaoEkyRTsVx92ixZJq3NhtnmF1KW1we1PFQ79416M7NuXmZ4A8hG19tuRcFLq",
  "key24": "YRu7nCLVcJBp3GD95X9g9fzddEvCWvEUu9m7L72RKQj6Xc23bgsquGE231GqjwWPRhzSEeokKjTYcNdgUjq4dUe",
  "key25": "3P5YS9HD6n51WfcbmozM3sNptCPy8SXvSWi2tDUX7LjpsRSGCopiBMHCeX5cVfQf9ftRABY94k2w4CSwnafJaByw",
  "key26": "2sM9r2dF8J2YoKopvAw8eNGoz1tQnSE26UM9ik99QEL1DtvTbkMejdh13ZABgSmLqayzufRyTS9aKtXikWCiq8E2",
  "key27": "2FdizM6dPoQF2ppf9gxNFcCd4p2GJGAfqGNAs7fkYKfbxnJPdfwrBSeWCnp5QEQNoAZF5ppS5awkunFnaqyje2AE",
  "key28": "3DAVSfGxC9bc45oZipJBGaZxDLr1kPeZLEo2APuKpHhJoR7DTQZKtbs9f4acxwodHdbTNgmEQRMifbfnLv63bhi7",
  "key29": "5nbnvHMKZeFE3MJfS6AZcS1YGsqWQs8bq4f7cGVe7kY8z1qWC8n28eEqXHiMGjsRDvGbj6Ffturkn3dxEb13nKyE",
  "key30": "SXuR1Dym4TWRMxGD8JZjqP5KwUSPH8DH1Y8rdMArwg3PDseVuYdrS8LvfnoEJdgaamtE1qkn5xamSBAqc5j8ai9",
  "key31": "3cVqztnDhkYLZrPqcL9tJ4pReXPwvqVFi7H77gjaRiFmqcvVhmXT2KTvtxWi38ktNdbyUXcBrwZcsBj877W7NRD4",
  "key32": "35YVNXqKBta6GRqvgESVeMqNMR32SZfyQcKYmW82EuYQ5XvRUF5JVHiJd1m11MnxBvYPT7MrKC9ozoFc9zLngJAG"
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
