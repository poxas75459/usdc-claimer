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
    "3b3GVjXmDmUeC1pC3doVgihJ6pVempTEnZcD6Zs7ZynoEowHMuB9mRscaoXnfj1QqZixPez1n7ymzLJxcds2sH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3fp6iy72kd885kcYWkmwiLKTHzQixNCfHp5HwdXeJhkpRU6hbjq7KQVwp1P2omQdX25M51caxTyjCNssBuBVqZ",
  "key1": "j9t9r54WHMrR5qhwdLvR3KqhrDKRjq1Br6XUWBM27ZeV3PjzQAsF1ZYEdKCBTD7jYZ8r1zTomJCnS28pdQi9QQC",
  "key2": "3MTCj7Dtp5FLPKGKkWBcmSB1pgCWigtA3yLJicwi3eWSisu3x4akYkkvgcYtrDgD3oDRKfy7dHjtGogvitCm9dqx",
  "key3": "5FBNCYCLKbeeEfhsJRFHcaGjtMwTyozxK337GQqTa7fH6psT69nbQg6NpZdv3ng57GPmjvwkjqX6NSdvMbPGejsm",
  "key4": "5mXakEH9oZiZ5Bfi87ScEcuCQGAwuEWBfKFY2HAfRv7pogfPDU2xpqVvQjL14FFsQzkcsy4jwZr8eCw2S7WwYX4f",
  "key5": "5caTFY2ZDH6pwHm48fFgsDnYLMnjTbm2q128HoBpQs6fHGqdDWLCKundb4Hyy17ri35JMyho5qfJJ33DZPJuSJmN",
  "key6": "5yohDRQhstufXcEL1jX3PXvpYmRu7cVfa3b9DaZEVFewJJ5jMsbtNfMVHmvsgwfyNL83TpJQ1yiNXWTeiSqPKQsU",
  "key7": "3FRyjpYZANHn4x4qQ4GH2rtkbU6XXyWGqMoZQ3M8wEQjY5AeJf8qhmQvSGsnjDLnKdS9PCkCy8Fp8BQ7mMYsBjfy",
  "key8": "3b9PzbWZh9vr3kSM6A2RAd7WLmkUwG1TLn8ssDcUSvJbFnvrX1GjahnKqnpHGMpM7bYYMCGSgJaDWRQj6soug1TP",
  "key9": "KpjrQ7cCekFn3gJ8NoWZ8WvquwMQEHsS8bDtU7rAuLQ4KZDYWKPkk2J9EaHfoARVwmhxDmmrS3MaQapBUXLnzNW",
  "key10": "59wXfw7wmYfzzBe3LHAhrJdjEdReEfbq3i8sf3ANSZa3c6rc951m4JjtUPikVC5vQ9BVScnsPzVuWMuBtiV5vhva",
  "key11": "4XZJyZTjfTZ9hQk788zKeQNanf7YE7f3Txm89L5Gyox5mvSf2iCSejKRzhUE2nLFnEiCDJXWaaj1WLD9vJ5LVUf5",
  "key12": "5vaA3jf82wbvCpwPRv7tZkDKe4pQy1UN7djhgMXwJtdf9ir3fjzqczJUgRLUX4y5rNZptGSCV9UhfS6GTgDyE6Ca",
  "key13": "52YkAEoEbTMQdg94jHiPj8VpsHQNs4TnqtQweJxGoL6S3zEbHwVebXue8sW2UzD8wim7AjXYo5sjZ3bLfajnV7Tr",
  "key14": "4F8AvMVNQrKSNZ2M9CiUNKWWPjM9ADTLjVBn5br2B1Syg7MKCJymQsGwyGCFtZP9kkPRxZdDkHJcjDHgj5BZn3Q",
  "key15": "CGYGNd4upX1NKTVrxHP5fZngfMSzwLR4BFqApg3H2DuzjX1rpWvVmpp5pFG6oP4qYNyg1bUc4P7r4bqhsSiJ6pw",
  "key16": "7mFtxwW77hva3iaqPMm7wWGyJBA5L3nrt37mr3FoAWQ5jQkEq6j3ygtKm6WFmAJTnoVoGRyAonL4M9dUpfTEpeM",
  "key17": "3xxUv3ffgmyyRhFYsJqiMCTKAdyo3pkLPzpWS2rDm7VQpV4KDd6dJTAdQtCLzVB6CRv35ofBHnosXwpJoFMXpGYC",
  "key18": "57fesnHqnDF9LQyDdurs1UXexqtDEEMPgNLqwDW5wKJfYfv4SNkD3oXXqDJZcEzna25rwEN63WtvyJvJjnFxcFUt",
  "key19": "5y5KixiRxP3nVcx5j6qbMGEFjqyFFy7nfbnnE71B48Tuiv9mDkRB6q1BiykpuJrZLhmtN2Hit3XBKX2mGPeTAaqF",
  "key20": "33ShCfM5HkScF3sqCk3KCQ95b27fQgEWEhAV2TAmcXcUTNbHAYKyBuiQrxNN3CmdXAUxZs8nPTLzw5r3SpkqQGXM",
  "key21": "BTTVyYpVMZz9Eyv7gomLUKCZ62n89kvJMvJBKUdzgSeePi8E4ygN45bS3PqySSmJMjzuGZHgH1U8SKCpoHwmYUo",
  "key22": "5CVeCtkmHd5LRgR4X3esrZcPu9KgbjReoXh8YvdmHeX23HMKT7TK1qMSinTtHSrVnGtMxpYmwAjsAG1E8bTEnwRa",
  "key23": "42u8F713XgLNEJrL9EcB1kprvcHreTV1i3XupMHwpycNW9MtqiUic7GxmHUJRxTeC3LYZsfeS3pDX3vPmUAwUmwH",
  "key24": "4WYBQQM7EPq17rzphq6Ae2qtTAkyTeBMMSGVWCCcnG4G1getMm5YXg4XH6j8bPy2XnPbHMYNtQSzHugUPffQ1SCh",
  "key25": "25BYXBTPhpQQq6HoZfhtZg5Wiz49eZC5roHmxjWZ9uT9A68uRvMip6bPaTbs2JWuepDs1QFzdxdfpoNHzFf3c8SM",
  "key26": "2zqx4KDNJvR9hduRGe3R6wkJkutBUQfm41WoJPFRM9jZNYqCJV7FsF9L4nL7Y7QvcAbKGWeZZ1nYcfLC1iNxAELY",
  "key27": "2r6UXhW11c3x5pa4mWZvb2XRPNe3mHgBbRutYH5RxuVLR1bbi6UkxkyXn7ZtCSEsGSvQRAPVEoa5pzekwg66pGoq",
  "key28": "u1LfMXswbFtTPr3gKpuND9GqHf6Hazg4Uo2NHkTsu4AtKcyAyHA5qUVPZp99Hh12KVT1JpNZSvpAeofXZHV85U9",
  "key29": "4TtwjQ5PSkCZTs2iWX3ETFdutUwRL8q3w6zyGeZpHYw2QRCagDDqtg13Ey9rYEGAcQDUAzSurN13nd3iT225xooM",
  "key30": "4XyFzbnG2YyYV5UGgJ4jVCoxocsQAQwizxMXjPEScYepxJbPUuUv5QEZjhcw31hrrXMmJVpi4oGvZ4hoch4aEvWF",
  "key31": "3HYVo7fgDVtzNcZtVoVAJMP98PsadLjM3egMmEBDJZYWuG8FNvULmgSRToc9pUTJQqYwiNj7ht6W6oYJTLoL7DkE",
  "key32": "4L36xyy8njJdXVXtvmzeQmLya2CSWAGujc29Q6xZdimRPsUCNDU8o99Fb3V7psFYQ1XYthVv4MyG7FSWVd8ZBi5p",
  "key33": "41NjnzH2C2DG5TkbjyJhztxiWgAfhSvj1CYx8PETsysNjDDpiRughUnGzwKMSRdfZK467pSTjpiHBoy8cpmdm8sh",
  "key34": "5P2QDf3G3HD8je3cp6vNMFzn6N5PFWFduuSkp5K3USC9KHwJ6M8Yx441FRAWBDdZBTg8Jdp1KnNewg2U4msp6fW8",
  "key35": "ZAogsXdT8hdrpDjaZqy3vhKdYMK6EfeVQmZv4htGX4227mNUkBxyThfQB1W7FWJ2qhtpdbaGkwJWcJm9Ca79a4a",
  "key36": "3Qm8p9ZV5TTodRAkifyaWbhgeEgscC6anKDciiae8t1VRCWmDZn4bb3qi5UvuaA6P7bhhDHqBTnxnHu9aUReP2pk",
  "key37": "2paBoXCWAGvUrJ1SQN4Eb7VfM3GYiuNVQzpso1bBJomHHMdHJmjYpbaXSpRjZdrxMUP4Kp1Hwr5pFCYxSwTndYBD",
  "key38": "2f2tFsNQGUNqTAMKVzYYAFUWsmUVkHaVsqkasdKnDghFCbV3P9g7WaezGp8rAxAXgsgQMwp9WoTQSxRdLuNxN81h",
  "key39": "mgZ8mBnAvg8GP9qLdoKAcVa8wgH7mKb8BUmbXodVUCngijLXucXaqzyn9vfe2BCAd8NoBThZfJFfsj3d8iJsVFH",
  "key40": "4eytWUsfxNJf2eumHVw7wtEVskVMFeSxbNAeMFaMHdcWus5Lp6Ge7uMCBegB7mPpvZdi2SCEueur5k5wvDjmURe",
  "key41": "2zC11e8mzvyQF9LET1Rj4nU672Y6ZnyvUQe9ScDAvYSjQydLFNGhfYUYM4wua7bka5GsML1PFHKfKs6FZJG9gmU2",
  "key42": "2fTuBMbRW9MFWBRG1jiaJ6Zok2wLt5FFYEsBSpjq3M4G1z1qoVN7yY75R96NAvcuHAy9eG371kDuPbfqyGsvm5B8",
  "key43": "3xu2JL4nSh9ATZJckphLw1omAQrSyCrwhmLPrtttvZBVpjFG7Q4GatDYGUuscWCEni9zPm32JfkY9BsEgaWJgpvR",
  "key44": "5FRmVU3R5VYiUKysbxvZ27sPcPE73QhUBdW3C7r65jEzP14cKB6GepAb5VX1AH3gqqzdRZMfKhBuTLozJMjt9bZr",
  "key45": "5txEBLdi1zo2DcXimnWLiGRcM2msGUCDPn5nXJh8ptY9Qnu1S6ATb3qKCxX8kfVMQqoobqXVkxBhxZx1raKstcmj",
  "key46": "2gjippk4pMvvzBqfjFVtEVRvHT6KpMxtPQW1tMaWMCpJg2RoPbMzZtxRhFimDA1QoUovaigmbpXwJ8VwMktiGPmx",
  "key47": "2scwX7Cep3YUacxKZszBPNQiPKfK86rd1ikBkrQozX14NHBS3vUX3Fj2qMgH9QST5Ldu9MDZuRXy1NqEv2HuJrfv"
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
