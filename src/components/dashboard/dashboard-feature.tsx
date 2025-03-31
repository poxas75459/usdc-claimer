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
    "5ja33A6HRrLLRPqmXVSYWwQChFqprGKQz6EiY9EtN4H6qTTVXYqdPKsLjLxdEMAZNZLR96NqPgdqvA1WR18KuJna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nd1vVoASHmxD5xCobLXksoW1YVRVdYwNoDZvEc7UTofq4ggcrqiYyFsLgQavWwELHDEv3kFkXjSHfpLfr8ngwo7",
  "key1": "GW6CyR9gQkEzCDxFMvjq3FkBkFm3ULZo2Jr4upVncewmFsFrA1ieSjhgpMwzrbPjN3nR9zxNWqLTH4hzvF6uow9",
  "key2": "nEMoPWzvsxLqXSoqwmxAxo4AC75g9cc3bzy8GyJWCRR6bASSgxymumsKybcTHy1bNoTrokTyhcuHBa3rFSJt74B",
  "key3": "ZkrdZc2kxpGVQRtw3TcWX2Jpj8atGRKBd2pWogA8Yugt2V8BpGgjXGYo3P5iqv2TPUAb8VUTyd8icAMDprnwGyu",
  "key4": "3tB4PTNK2LioUHGT5txhckmbZoasUtT7moKfDnzEjsUao4ut7uCH4E7kVdiAUqrN1U68dLcTAUjyYXKiyUZCZZH6",
  "key5": "3MDQKMkEnJF8yxZjgHyquDYitJS5WcfVEmrbt7JrqreDqe88wwDDLCf8pGJKqLKQRVFRzBtNqDYX2FG1UT4Y9PC6",
  "key6": "5drCbUC8b3zUvunw2eU3fw2mjioy5ryXnYxWfNeFNsrZ4RAy7FBxo2uPsi87KajQbHyJJX7X2NoMfdfA85kT1NHv",
  "key7": "2cDtUWVe1Y6PqRSe8GKUtoYA1LdNHugnLWo8pcVGGPZREhcHT7NZ57TaZHAPKB9EN5eucK8QRMxjQpkE56iDjJ4c",
  "key8": "4pBKH7pHLhL1GyPptn7Q2VsJZGzGPHc6jFHP5dc7UvqaWwVzQvTdEKsfzeHzZWtoApPmBCLRz9Pt3zxfhSZqykYx",
  "key9": "2V44eQ2jLg6aNKuSPxLNPyKj67xdNY1xQi3dbgXh15ZWPsZFc5hngJvyx2azoAjnvPjnTZUxdWWGu7KAQrxydVu5",
  "key10": "211RUNPJk2zQmMfrvxLdzu5KU3caRVrWYKsLMr6F5qwrM73v9ABzXqYQ4DXramyJfBNRtTzQJWpFT279w8V5ewtb",
  "key11": "5uBYk6J3k98RkAiduTidywVRzLBE2mKa6y17NVEpoaBQ7jxmzkqh26ckXKZ55b4JSBnBhsaADQVvK2cGV9nqzgyW",
  "key12": "5VR8zBEc9FqzdB7eVAmwNBF7LZbPBiynJmbzWCF2piNkhJV8VT1DFbdXm5PuUVXxVN7rBr2rM2R6ArQjBa1yUEnH",
  "key13": "2GAdjXufJS1g8kUM7Fv8ggPvwnLxTA5Jdxxh2NUe5ZhJDgNTgoMXHkTGZFFQgoUbJhmx5MFJ3Dutv6B4eArtZv3e",
  "key14": "5M6nE8mo8edE498wF8YyUxRV9QDmo3AQQjokVHATscvufognxjLcbzgpQNCDHgmjFhkLt6apT6hBwiqewa5ApJAp",
  "key15": "2ZUT9Nt4eKxqKjwSzDAVhcKJ4upmBECW6BUrEYGgtoASWijAeEoTUszs4GLDJubHSVNfg2yjFisdjidVQNJ2cdGH",
  "key16": "5w9LSVbDn4sMb7ttk71KdUjNfKJ6nEGpTtWRnAcrWkZRoz8cNmrYS7q1N4uHVe5R6ZfMGv6RK2x88Wye3MTpa6Tr",
  "key17": "5or7bbNh6x4VE8boQ43KEubfRtETuWpjFF2fPhg5ciyBAA7taveYjvd1z6hQym5PWkVPNMyofi1HaaNUEgBAwSug",
  "key18": "uVTLTtLYiVWp9pCPxpSGVdueg5Lz9AKnATXHVbpXbe1aPr3n6cL9R1xC24wHNao36jaAW5L3q7MWCh5SHbxJ7NJ",
  "key19": "5u8NBoFdXKaaDEko9SZgdDTmNcNHVtq5fVXsmUdWc7qC75YX1iY2PjepuqMak4ybmXnbMFbpdzHGdTwehJuqYbkU",
  "key20": "3nzuKvWgkNSVQCABxAXQYja9tShW78xMKGVET1gqqxSZ8iLC3zM2eWJoRFwm5jZ6jbF6q4BeKGdvd5mELp39ERgX",
  "key21": "3pvppbdF7gbCrk8Md9bJbumrecLZznps7cAEBbaR53AwncASSHW5wFqkvrgRhP92SG9veR9Vhfqu2pH96ru6uNkb",
  "key22": "2MkwA8wpidwLEsdFdQCoGm3aTHTWxestEWMTcmkTmYQGfXQ1ELGjhnwqAPTgBwVnrwRg7ZPGk8DqeVj8LL4AakRK",
  "key23": "2pwZYL7x5psakWydtYKyrhjk3jrVepUj8qWfbEUg5q579yL3LvNprNzCsSPk4gvaEyWt6cpRLktGMA9SH6Y4epLr",
  "key24": "5WxunLxNto7PLBvBXsYk5q9eJ1Kh394Hjfv3tktAQfGUDDUZxMVpwn9ezL6owTAbdELcwzo8iabEND69zm2cKRHq",
  "key25": "5xCkcQRt659yueby8ES4qaAbxSHRGFUVMjf8ZRZdo3ggp7REQMRACZJWsXk6DRmSAEZx1WV1b1gHhgk1vC6ewXLb",
  "key26": "4GzUWL56VM9fXcbVyEtMraUnXtrch9vLC33fyJJQzX6R41D1cXc7qFJLpEaEm61Q32REfTaJM15GpuHAGqTUd1Nx",
  "key27": "2JCtGsjkrwawpxsYeFJEqzF4Ta5hKhdyou7pAoqpNdbrui13ZbRXQ4PvGgc7KfLewQaWg4hQ5hYtzn2hP3oqg3t5",
  "key28": "2atwXTZYezLtDCk2apEXLSXRfYw4qPq9hw1BHpFpqXJ1Q34tV7nCWLntmXE5AeqFdLmcTtLLi74u6JQYDKYoQhPF",
  "key29": "w1m518VzZ9vth9P7KPYLcGdeLJjjEwAMFkRHMnK4GsvdAjjiacwH8Q51zLwY91SskmMqXnk3FyCSZ1dptwwLFTm",
  "key30": "5s5Ej2HRUUCFHnvFp5SaAFewDMivmFaDQ5Hv9EpMx6FUrT71bRMvpm8jbFaAG5vU9RgvzTuhkn9r76dUUWvUDord",
  "key31": "evRRtJhpmNV5jkpR8ihPXQgCQQ4oztHQmmjDLwjX1QJa1nWwG63qHnxwd7dsHqaXgfxJpSLxZbDMRSFmAL7Qbcs",
  "key32": "2KAguDeXWMTUgyBhevP7dRRmYGsQGEf5mbk91Vbz8vF5dJshkpDFGnvDVUH5ZCUMLqV3xqKEPUkmNTnaWbsSu3Z",
  "key33": "2QU8jav3eJuZkrKpKXrbyd5jJtzgw7v7bM1vJcnDHP7A4aH4eaaJy5ZadmJMrfQDCns738NJ6g8UpgVM3JsWzkNA",
  "key34": "4Qp1BuAzQWdXZkUYnqsVobUEhs6iR8dH2T9H8UzRtha221myRfHvcjWvaqMsaY4ZkrYhrM38FGbsVZWP2TC3uxKf",
  "key35": "66Pd9KhzN9PheHzHP7xC3LQiAzRMfYz6EwzeHCWH2k9eLoSZAyt5nGdR2yQgGyQNerBpTESeBo94hgNKy3m8Nmx6",
  "key36": "4mCCBUsnkystqCavF8owzVJUNu5oC27PzLJye5cWjv9mwXPyvitinVjsdwyMCdRQxkdM3wm2moLfJPAvaCTQcjEE",
  "key37": "4LDD11aK49J1Um3DgFbKCB5JZaJZ4gqA3RvFygJyGHnH1HiSqf8UWALUqip3mwLxUtnDKKGsmaBtwztxehUqcSah",
  "key38": "ciLFPk2k1rfSz7eifN4Y567KQpRwCuS7iCczNpHXTiEr8Nb5xFFm48jaDLdmpNvN7kGHuXh3jBJQJzBiQZWietr",
  "key39": "5RMJbt3gPZNyEPDavgV5oQvTQKgZ4qJb5TSeTeavP5NagBrLC8q41uKhjVQPrt8x9TCZeifWDnobYa37bTAHiEes",
  "key40": "Qvq5VvBMyr9VjuFWjUDiTKNxmDj6K5c66mnYGGLkGKoh3U4TaCEFGEox8QFo22xRVFhgE2cp3DVFV8vDesXcM8y",
  "key41": "5WWay2CiRrEPsUk12Hqnhzc1upnsE8C2fNgehqRChqvQPfT91sDbCSTpimAsgHd2cgjVbozNufDQ79TshS1kFjiU",
  "key42": "4SNevqnByxFamczfZwtdXX85khdUc4X9NNxtbJAQjyFU6GCiskxzVDzYS7oVoX9qvn3m9zD6SFLK2wgjfQxtKwwJ"
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
