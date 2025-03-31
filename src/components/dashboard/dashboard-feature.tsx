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
    "2GhHQ7SDR9ocsqnJYMD3JCaY3TtzPUcViv2y8zVuNpwDj37mNbqEos9jGYCvBDq5vYC2199UxSae5DPj2An9V6EM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UxUMioEVV8RJaZ2Ya4rw8EGSLwtavqCsFhPFJfAr7x4569UY5hVPERvuRvYQmRnV7ky2SdcK5N3Ag3sm7gVKU9W",
  "key1": "3fuK8MPFJ6raZz6gytZK2fekBoCHvkFzfXkvE427myeuAikpKNdYPhJRvkGmyuZYPARfjA1uYuj8CmJXSNwWy4ta",
  "key2": "RbzWZaR523iPheejZYCyr6MQhooWL5vGVwMd65io1aLdPqqCYEjp8smnrwyk1LHN1bcRkQBcSi5Hm5NvpgdaZeZ",
  "key3": "4VRxPbuNXRgnqubYr2fSxyQ4nbxhJKhF3txxF2SzRcmC1iXxBL2fkYg6uEA1HU12mXbzPKBmVyR8LZXCq8cpiAj",
  "key4": "6mkZjST7CqYj7NMYgVPpX676HJpLCb3UcFqwA7BxZN7ZartthXtnNv8Zuwf84JQNjEB9XwQ4a9wuvoqVmNTcZGC",
  "key5": "g4Kj3s172XphCWyzZwUT2E7AHYYiFLUiw4ivrs4Y9q12Qky4WyigdonbBPYnBn5utM4FudHv7Pymj31mj5sLKTH",
  "key6": "3CqwDRJzfJRcqmcPg5XesXUwymHxEqvzE7tKfvDRccnR5VfoK7829JZVKwSKXvGfKqVQtv6FtmaN6XkhvmPXBvRz",
  "key7": "2T2CwCiTNVsSFhBDviGhV1BHMctR8FdRYpZvFJTTk45BvkAdHrZEK8tWebGZPDxhCiuUpxLZhET2GVSmym76WdwG",
  "key8": "2KEvUkwwHmU8USYqCACWDyZjBxrHwKrDS65DitD7qVYbaCa5uT5i9VjYZmR7JLrJ4szJ1WWYUXjSDYN5QF8KR6bW",
  "key9": "65QsAgWUbP7CEcYtzCK1bVxAid6efxqDbADEkCgKSLXGA8TDrn5qHn2zumtKpFcpBnFFow6NYVGt2LCCmHDZJMQd",
  "key10": "5MbZA12JGnWtoY2PyfoDUbX28g4DKXrtm8T7FqtY3ZB49DN98kcMK3LiSXdBdWRZTxWLv61tvRqmzq9m6MiSABHa",
  "key11": "38eFKZYVv2r9eVCD85utf11FwKDgLZeRpXfcw4AhU1W8r8UzEjwSmtDW7zd2ah5w5Hj73TnaS6JnqXXKysTnMQ2h",
  "key12": "57mX989BWqeFooCe9YCf9ufZwmcnnjUNAQ2uSUUtFNQUhpvX9QUarheHFNnqoPM9W5vbQBES46pvp4GXJYQHmNsq",
  "key13": "PKZVCt79AxELjbLdSwiVgywsA37LvjB6y7E6Lv5LpQJTN9SUMjbvSZxULkGkBpnRTzW55XeXwoBj9hfXYPmDvUT",
  "key14": "633rTq2riHe6ivkQKZN4JEXGU1YccP2e8Gwx2qWEiQSaEMvXgjKmUePmtxtZXtryCgTY6XvxUfw4SqDAwNQqoa2E",
  "key15": "3fGayYY9pGmG38sG7iduHSryhRgfnLfeeZ8oj7coUReosWALveMcsnZK8rNfrHgz28Xs4HBUnXdJFK7VkVom6uKY",
  "key16": "CK8a7xhzSZV5AK3Ypi5dPGuLf3Lwn9Q367PJWAGWaVtvxSRGsCKz7YVsmQeGQvdkY8tMc8m4FPDXHYarvevSzsy",
  "key17": "ukgVbUGNH5XUE6VMyEkaz5WnUMx5w3ZtJK37KpFWY4R7FFpeCx5Eu6g1B7toWG8f9UUKrswNC87EXBq1YUBYxPE",
  "key18": "a7yaYdHTUp1Dzn63JRgK1uP1Ppi5zTZ5hE5VGqSduMb1t1hzUYTCGKtYSkogKeGoZ5bqjxuAzAr86tD2sfMgsQj",
  "key19": "2odZeCasoAttvyoqXPMi2PbjEZoHyhW5DEY1wnvfrRW3TeaBUmSqujUgJMKWvMvdT8HpvfntDcVP84EM9nXuMmoi",
  "key20": "5UKmFTpJwAPCcdD9d9c6oniD7tyDeHRrd62fbRhGG7THPnj1FJ5PzKUDigcSKreWQNAEqGeZxq3bwz5knysXoJW3",
  "key21": "5LigKg9CjkFnUQpeGgrcCLMUhDX3sWtRUw3tZkbzndTDN6hi5EDfdPo8hn66EdLaKGrUDB15oR5JZ9KvLnu9auUZ",
  "key22": "2E7y5goo63RRrd7v6EgSvy27szdy1LXtVZqGhBZ3copyipkdu9JWjF8DntFXoGGmuZdm9q1im31MtH6MvZVkx7Rh",
  "key23": "3QXzc5mQumhxedEXauvFTWm672XsnafmCr5vKEDdXbyypQKP697xvmoA7VjgSr32Tim9FMCDnm8xCg6GczuaNvGx",
  "key24": "ydaLSV6PY6A42ebhDCPKoBWKVWci8dS8P7i9YEJrPWry1rHaZBX9xtLr963MLFwJzAqsE3homM9QeeLZYBjrWfh",
  "key25": "4nZfUZw62Ch1vrFtnwmDeRvrs6srP2rHsUjika29GAKaY4PoHqbB1t5xRi8ayvxk4K4zrjfZJc34AqdDsYPKyJJu",
  "key26": "2xdUfu8KSLrgGCJdoNARX2crXqtSWzpjdUUdDPMHBg2Z2Drt4gsBg3GkPae5A9RNDXSvYCh2W6NJhnRnqwRgbMwy",
  "key27": "3J3y5q3TWhESZDM9rny8MxZXmujSp3V1r1QuuyR9dzn24bQPWCqunw63Z56X2jRHjGc72FSdqWW4J7YAJTGMUaZf",
  "key28": "2VD6hbzPV9bpnbS2QUVr665eD5ojU2HwBydVGva4T6dfcdkHvW9HiHWDdUs9Gc87rGSeNS8NZJCNHKdhKzDPpheE",
  "key29": "MKLRJVS35KMoWKqxzzV67RAMZKBEXwXiUEBJT1JXZ7MoBU8xZjqVGPm5YnGd4sYQk3VnqJNSbLToWtzEosVjBzH",
  "key30": "5sQGkgL4dCPm4ZfKSKDhhTsrecMafuCP9LLYtx1NfYV7nr5QXwdUs3a6inhcYKguqVKo6BvSTSQVGiaVpaQLWMFU",
  "key31": "5PCaQMdZpNAmRjTYpogGYiJfdQtqJNXpBu9JSFedb3ACC4usWeqKUVXH8rW7y6nS3Bd7bMAEa7sbfoDj86G8QqHT",
  "key32": "5B9xckBqbACEGm1W3q6tYHEVk9JRouYkAXGZuYtdHryTVqfwGTjcJYsDx2nor433XoV82sEvSXT5xXqcVJTMViSp",
  "key33": "2BTyxPqgPxSBgcDs5MNEUqk8F8iBdLnX4U11xZaUbTSnvw25pSCeNGQCUzVC9BYVE7wDkytr8HqLwsVmH1CStcYE",
  "key34": "4Te7xHeHsvG4A2BvAwTQeYubvrdeyZ2MXtUaHBYrAYVPGcT3wzA4RRWZckBEvTWdAmuN4zyonw3oFdhgMQUryBWG",
  "key35": "3TTyeuxNf4eMdwuNisjTuH5i6TYvSBQNmnZrF7vZ6csxzTo9wPtTqpxUYsWq6zz1bL8hgXgrqokodxFk3RNjB38V",
  "key36": "25YAs92Y6D8t1kEAFmZVmGCSUgNtgxZzrimdYAxsYj5vjwyCzZy4VmhvwgoxqyhTmEdcszB3ehitHy8KLZFXPiFu",
  "key37": "4HYN4dWWD8RMFzYCw9WyjuqtyCiUb5bsWMLCidDq4fqLXsYzUuDXeAh5rWTCJYkNw8icCVLy32xMQtfjEdYk7Hg7",
  "key38": "5r81L1QVfHTHEU4AWBivaYJbnUrUWeQRjgSHA6EaTTbBV1ezC2WGepaVJ3Quzk2oJnbBuAi4Yy9whombtKWnhNtp",
  "key39": "4LYfZGYfXdgkUY5hFuu2om6nNNMKjG3pMRKSFNpSfgBsNYo3Ppraf1kaCbtbxBiF8PkmHAtwqLJHHHpdwsR5E19j",
  "key40": "4BTGSXcu72zCpCVX1HHJRkcDm6R7XeHG1dpZxEw9jwZJ2CBCSU3qaxBrSEiXwTnLJj4hdnzjHoSDQjMdGy6T8YCJ",
  "key41": "QXFUHzSoSKyKXVLGF9B4icnQymuAmjxhfU2Z7uvQpvwL8Tgp92NE34VmiSKwGmoywGaJsoaVMt4NoaGY1N92Zdj"
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
