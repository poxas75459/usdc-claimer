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
    "57KterA3SugiU1NZBoHhHMiWC1UuxzJYVZ5s4f3HxKgcYyY8VEDBrbePJ8mFvdFiypLWXWBnqk33A1BZuQwhSP5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TonmSxohN44TrJjEnWs18LmHRmH3UJSHXLSTkbxRKNbWrUbEg25Kc7MY9niLHrJm9zKyK6WYCVmjEcYYHAc79V4",
  "key1": "3wu4JAWVFbhgXByxWzsBUkwQXm3rYiB6Eo4NWNY2CpzKGC8uAHskf1HAWvS2U3Y9y1JmincNJKqpM6CTu3V61SDd",
  "key2": "5Wh1iEvbQk7xC56gmEvUJtjCa8FK2L4fDgMHcNWRHPaabyf5DSofTW7meLDRK2xupMwDKmJS6289NZdme7JUAS18",
  "key3": "2szQQ3biEVLh8fKFfPKHEVjjUZYg3y2n1KLtbF9KvLiHMaP3KH7g8LZnLP4zWpHqoetSeDiRcevoqEUjRxcapmW4",
  "key4": "4Z31UQBG8wEqsGzvkrrKqBb6MKmcrTLCs76LYpAQhLBNiecr6jN23AZYWQ5HVoHYYMjG2DGNvrFSEHDBxc2zvemD",
  "key5": "4wqAwzPz3YBi1S8Kv3grraPPz14vbDGsCwZAcADavAvKCekyZytauxgeTKm6LNK2MyJQW5sYyXvzBBEuGg7enAJH",
  "key6": "4kcHh66FJTR2wNXqXKQTPC7oNdGDuyECB1ANvRStti1SDwu6S7LBTAb4QWLriYVfGJ1Ds35u1wNQPJ1JZZhYTSKL",
  "key7": "3MKiXPAYpbcP7PPwGG4KzxNocioBXpnwkhZqaabqDHK9ptXsHGpvtPUnhTy6wzMgdNgtDepJRvZXNHonZbZe4Lb3",
  "key8": "2Je4RGmwYuZgS9XRu3WLC9hsWGPj8ZUnyns3Egd8YgTNhdCUEq3V3wc6oZtqwVVWn3JCzfWXvR2W7dQaMYBfCKRR",
  "key9": "nHx1CvcU6i3vGPMGcDzVG1n66L23aEYpQ4MyDs1eXXTMQf4E617i2GyyxADFAmV9ng9K5rxrb4qmHBvtXNRrEbE",
  "key10": "FKGzbvZ3t1Uiz1gxBi8UZkSspai3R3XWPRBX1eVabSyv2EeBShbQLSFt4AtCTnLBqvBNniXpJoNmLVnFq12Mn46",
  "key11": "379ZAALZ4AgEc6ZpHAR5bHuP3JtyZwrmiwy4EupmD7kdVN3S6ap98KSh22xLYZHwbVci8iZ6iNa1fFkt89WPP31F",
  "key12": "3LYDQQS7nSgMfwgmbfdbBzhoVqxMbuvbz4vNM11bn84QUg8iYP24aXCya1mfDyXdShBPdVGTC5CY6CtfYx5NT42W",
  "key13": "5NGCxgULFr35P4Y4FAQULBjaCzgskWdP4M5ZqcpYa8VKDQepU5gS7aQhtHquyZYbDJiHCtnQFQU2dNmtghGcvjVA",
  "key14": "3br4zN6pfxAhyE1LTqsEre8MtXKzF29Avc3CJtkX9uBseZC99Qvmmb11pjqgUfAYGmfzefL7VTZaPJyd3jRzHYJM",
  "key15": "3hQfAzBYGG4TdxMLHw9cHrKwQJoEBcDkMmLobsQM7MzGVD5P9hN7wGe5LeL3WX5L3vzVReW3MrcGNiC63jiQDeco",
  "key16": "ab5edS6MeHK1tq3Jwa9MSTDxbyByJNg3R67Qov7sJGVNQ9chj419UgUjMgJ2NY5HKm2U4d1SGw6D7EJy84x9PS8",
  "key17": "2cXcTvYqVkB8Zme7xcstAffTEPZdsby83ik2n6CFhi6Cs1v6fTqWKd7w7itghyJN7BvXNKjYZUkTRpCSFd6h4QV",
  "key18": "2EnAgQUD9fjsiYJpeqQ4haNwpYu1V6VrfHoVzLAb6CLcA6ZfyCdnJbYGP1i8yp8JRkEWqMvidSQ88pCL4GdkHjNw",
  "key19": "2azuMCL7bBpVukLpqswRAo2u9WSL1jbwbcuq2Kgjj2Y4WJVHZST5qdpNEvGxqMetF4DM5cP3upaXR7z8rkXT6Mpp",
  "key20": "jdcWtEaXB9oA3rWN5Zw3xobck9KxMsVEGCxyTnMTUP6bweN22p1rrhnMLjcwg6rp5BWPK7n6gDQbgNqn4gc7tAW",
  "key21": "3kUcpCTNwXkGnKKgrLUviigtRA6wb5EoEGMJUxrQZvRHQpF1fDRBqPmdhHjiXgqGt5GYPwPhwF4ZbLxzjozrhwxp",
  "key22": "2GstJYBs3pwUhYjFupQLtE8SQX9QD31shnv3ZZxFrkEmA7kpo7xpPGJp7KA4a5TQgmU2fRtpbFbpkDwNfCsJg7sF",
  "key23": "cZoBg9nfSTEeYQMFXKnDvCE56E45s6conyqsreyEWxkLUuCf5YzfxaREyvBrprCcTHwHfCx2fWYcajww2g99MJj",
  "key24": "5Cb2PLBbE5F9Pz6fw9HK1sAxzpSyhKzS6bZVe2fLT5nbaKHNdi4qtDq4Ume41yv13VJ7ZD6T9AuVRtfmZo3uQn2F",
  "key25": "2jFhTjCMoMQhvY58dwuJ1EJH2cSaD5BSHMAPwgvEADo5rgNkdhpiTKf7cfBBxhkBvcM8C3V3ARUTKHnqsPzFbjK4",
  "key26": "2wSmpvzo9MbhkKEXyw6t6YgRZL9ZQNdoThFvE867qGjMKm6iHPo5E5RVLLF9yv8VkRmzJtErhJwTn4psQk86i2AY",
  "key27": "2JqUjZUA8VNqkTZ4XRL1DFc2s4MkQVqkj5u2bjvgjS3Aipb9okeRAqTK1utEeCoBmD851EG8LEuqVJQXY1UYfqUd",
  "key28": "2zVrdHbAoHkxPFPm7CE1cDVvsrWRYbcuXXVJ9YSFBdG7LGBn5rhhcBLPe4433gzXZwdrcHLSX3YppyW9ZUKEkdkG",
  "key29": "5qYwqFmaKw1hfdLqJJ2pC58HExgF1TzcH1RodvnamRy27LEbtMPT2JwdGFF7teWLzcoknu5btMCYM5tXYtomED9J",
  "key30": "5BbYcyLqVFv72BPLJ6p54A5VjSmcBrsUgeE38Nx2Ktiibvp8z2hS4pXeWfKB3HKvUzLjtpezfQHFQHqNoiDLu6mZ",
  "key31": "2RrUYNCARJDNjsGm8Cqjuza3tCMV6z2VVgq7YuRq1s2VHMBMsWVXa8VVZGVgerb4G14UvoLdTndfhVrgqeiXkxy2",
  "key32": "adY8wyixWeqk9HEK3PLtLBSF6Cni9KSJHtjbk1EUgjaaX1Eea2bQxiryCkA9FUv8VwZ4Mh2sNNoB28bjqLBA3hM",
  "key33": "ydoX2kguykodEszSFq4a2i37JJUyxZbxwBPk1zwJeQREjBtmBHSSBPtExXqwSN8J7wrAzz1tDGAduQ1MjFzZvwi",
  "key34": "55MqCtBdfmWGZzSiNmxNDVQoHuWubBCHmQfDPua5K5tZa7py8dVL5qmK3nWkGGzfC29QPo7fn8LM3i8bUtkWbzRv",
  "key35": "2c6UQvjbXkCPRsFmPf5ch7m63V6UNuLgpjVmSS5F1sMy9ze82yFXG5tue9y4LoJcEFsqz58Tom27nwgMsSobdfw8",
  "key36": "2wjVuZvnZLiS8AQxiffioMJU2wKnwU8HW1PVAMG8NWrkXV65Ybqfj17bVQpUVADewqhHbUtysp9VtHxukNcqXX5P",
  "key37": "3vih8Nt2UAhfiVEEbSLttAg5t77yrtj11PMkcnyPcZcvBYeNAwvEpqETwjsY1hNALBuASS9JSt8coJhyBYUPMfXL",
  "key38": "5oiqebvAw2W6YdHAGEQuUKAqN6A27BMdxrxXoF42ntqcbbY7GGwggaurSKYfVhUnKGrrQjrbmdrsFEzXoQpbx9aV",
  "key39": "3UgKwfUHri7GLYiE6ND9yLfHBscqgHyRaYehyvaoMzzbNsaugsqqLth2qs7FhMLJR36s8DWeGbWcgkRLkGCo4rtR",
  "key40": "33LuP29aVvKXpGyThDUProruoU5h5Zgr7ABzcLWGUDPHgjeA2UpCwxdk3Yb9Z6VprnHvBXKrQ1Xck9NdTo7fEgmt",
  "key41": "5zXaMBufvcvdgrdqKTrDysiuzWZ95yoXFkR6sndZKHu28MMZBnvMyyeYLD3GcLkujbdXScGdfxarLjb4KzsyaAYf",
  "key42": "4kM9i3JDJtoZ3i8zapd8dpLzFT1XybEb3ghasHiWscShUYv7NJ8yEvAF9mbB6x7pjd7UdH8Z7tYDagJPDfShojnx",
  "key43": "4WRy4aNKsaqMGv4u5cHUTHtRBA1DruM4LLjQ2QcDdKKcyxpY4mJ9NE8mrXCHBhGn5aefryPaGV9CP6BUdrwgZ71p",
  "key44": "LMB1jqSaf9WzNKWSpoKG4HaVkJ9bVH3mtt48hNGGX7n3HyZNjCGppYYuAKkVyqdFT7z1iyxvzYPyHkXBW11R8ZF",
  "key45": "2ctVELYEBdq9Mxy3VteYznwQyB3MDWqgpmzWEcsmwj9FX1ekrMigqdSggSna3aCcBoz4StZGJmFYPj7GQbqyoE3t"
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
