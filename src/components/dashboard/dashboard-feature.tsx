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
    "2WVnaoqaGvw1wFznE9y8aD21mT3Ut5t2p5F7MKn85BAzhQHFngCUCwhssevR8hkTiRsvedCqhcB6MfJ8vzjZukrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46q8KD7VZbCpJrvWxT8Dh7QmYoRqc6TfTAtwuz527ttT2AKgNF5jhKCfWCBC9aLrMsi1Adqmk6JMj8tTRFNRy2tD",
  "key1": "62vk7EB65f3gHxyeHikT8Np2g2Xhx52qPsRvGbYWzbXoUZ2ZgDZhQausGWyS8h4XEkQBLkC1zSHMMbcr6TKeS2pp",
  "key2": "Tb3jD7UsvKDhM8kAAVwxaNj3wvAW4qjcjefmCfycynYd56HwypiBw9MVJv7UisR8RsX1KKvrMeqd1BivnyUQBYT",
  "key3": "5v925nzSoY7HAuCvcb6wusBXiSgkSm3mZtQ7GsiWkChdh44mcg1RPdm3CEUrVk3RJULzc3QLRgca8dTK2W9M5Phg",
  "key4": "38vr5CWJUBVqBnuvy7VA5r7oNcBJ5tvwWuRpU8NqzQrsbXnbLFoQwyCE7Vm85tMosVS44jfotFFgtiQeP3CE7aYU",
  "key5": "5CDEASukj9PWvN4sERwmrCCvy3kgYH3TA5Dq6TZNkbhML7LPDBQ7ummPkDH4TQpru8cMCqZm5bttY6WshuMVKAhC",
  "key6": "5EUuek9aBWnJ8UC23qxpRCNNvLvejY9yp9Vvehp7syas8sBq6fGxwJD7tRyMUxnaAo2padHJUeFNiM9aPxErvXv2",
  "key7": "3kTKZKAMkesk2sdGg1DbGHKVcpZFr64z6NX9oPs7aTTxnm5etU12spuZyjRkSzpfmfTSzv2RqZJr5aPR8FtoCp6K",
  "key8": "a7UbvywAwwvkfdkHjcW9Ya4fm1tzv2xpePeezszfdZEEPERXYriFw82zngoRd9Ra3uD79DZL4DHAsoCLnTEbHoA",
  "key9": "X6BqQvfY36QaSbdZ4TEKA1zschp56wR1qykcqzjzy6x8jRa5JDXCqG6nAKQDga28rAJFDAxBdyqBpJ6c4HqaNEU",
  "key10": "4fa6tpmCBrWrG3ymoep5RPB4ggeAYKTsX3jx5dN5sN8wdDnn7GmPfxnUunrVfwRkxkAoQB4THQBBe3mA3JT7SzH6",
  "key11": "3jg7JUc8uVSVGzccUYWFZzCcgN4gGRiGLEJAY5Xp5rNQTenYELhRAYeYmrTjWmVmHc2ZQyUAmaCcRjfzL1YfyqbW",
  "key12": "3Ui2V2hKooFLP5qfyHLVKC7LPzS4pCAh1GJm5GCx3j59KVpfffpu7Wkb4gexNp4iKjz6ddiMBs7LHR4U3wgeJkG6",
  "key13": "5JaT6WmaAFUgnpjbYCgFZz2PwBJymH8Sg4Vnf3iLmVSTc7Di2m9Y3LMYFt1658BWHn6CPt4rEgaCxpmZKtmyvs5y",
  "key14": "thWpDH8iRBKtDr1x4jGMtgP4yFLtSSYZj8mHCmeWFAQ55a2otuLos952eceDHWmnwkCL9CJP7u4D6LFX1NFJyMG",
  "key15": "65SCGTBwUj1dFnkb5zJZcSQiuQvSTNhDARfWniMVRV2R9zotaiyKUi9doavaLKpEEFTyDf4YfUqaqkD3eekQmLvV",
  "key16": "QkzcLy1FicqSY7LByYLtLhtfQbehy57s3T6zVEFkfi8D3YX3RrWpJP7J33SuvRee5ErbWBwodWVsJAAxQ1Dhwzs",
  "key17": "4Nqgc9MvNjrGw6yqeG3Lf3HBnf9LQwkiujWD6tziKqah7R1LN9Ud4cGRiyT452Dg3Muyz2yjMKVY5pA7VA7WTauc",
  "key18": "3d51nz3MaHpVX1dtNDbrfe2i2xnFwhj73oCo8UPrdYx2PojogphUQk5FAnuZgB36qg4jg2qjQDSPWRwfCLeSEoe4",
  "key19": "5ezMYpR85B3YNXfgbYeVLKPz44uirSpSxqxjABH5Y8XryQaTX4pTYVzpv3MbRyyXhFaxFvz6L4ToCxoGNSue2LXa",
  "key20": "5EH5JNebnFJsjN3Fq95mkJ1qbBepNPAJuwua6URdoq3Q4DFs39tXk9qMMMEnZUcxuHCqrbHNwrCPnuWJmABKXuLD",
  "key21": "5WkdCYqiaPVrx3toaF9d1JwUzGw5RLjU94LiWNXCpsSVyr92gbWsdsjvgYDcy7j7FySRg1XqMBtoEzKcCp8mcWit",
  "key22": "5xAeoukJt4WBrKejb2gjTkTF7DojkS2zKiVajBtQGABS1gGpjKDPgYhgjzYZhB2EDurdxsP38iDM1dsT5q5vfjPc",
  "key23": "2EpqC4n2FEauXD4L8s93p3SghT9UrjaJmf2zowLS1nCQyeVsyA7TjARhNT6XeQuzFK735H2CkRgpxQtuTjPEwnqQ",
  "key24": "62HDY1hq8WMTvbuFyhJnbVjUWVtuBtkgXqhBz8xcGjzDGLq8caywZTHoygQTUeJZCh514nhvNvFUPFxqS9px52LZ",
  "key25": "3NowJuQyHQeXUJdiYTfH29N6MQBhpf6CwQhgHRkz4Jj7d4yfNjmcDkvEtwXAM3h9q73JpXV4Ggoz5wuZJuZa5TvY",
  "key26": "2PN32kAK8njRc55shLCdRHDiqaTpGgm6whV3LhYt4SdAMXzsURgS5wwRTFaETggb1ikEZVqrN8qK4YQxuNKjGugi",
  "key27": "3fYFUtGtj4XRb8b7TdoAJurvREz3gc6vWfzEYE4Nzvxaf1Pcf2wiEWhxt5Q2FqojFTk8fEvfCrZX6Qjb6fueBFbj",
  "key28": "2BveMCZSy2jyouBBxb8AxAq9dyazTNK8bFwgGsKmweX79GcMWS8H3fPmJ9mKRhcUjKLSuyCAnbM7KY1VS6jaz13C",
  "key29": "3e7fVMS7aEhePJM3bNNvvhiVQ2zC1nXsY5Yrq27XuDM6pB8LqVMPqx82BtiPjccPXdTKJfSjrKbXy2tv9Gg7Ju6U",
  "key30": "EtTust9CYi57KJbbYE2cMUyvjeLFpAxb6dHdJqsH6BzQHvxKmDBNmcCSBHj4LxE7ENqTqZga1jrcyuSirupayao",
  "key31": "5WRafhePSkTgQVHuWJPppi2FjkgBeNk6SJEgdBaWhcbg5RypFX379axE3cbj2yabJkavynr9UkAVtbbT19ZkMEqn",
  "key32": "5c4mrjBzfMqhCxCzS2WwAhM7THPooDEnTzk86neVqYQEid3xXDx9NgHq3dZMssTbzhpqacwAzkiBRn6VPPnZ8akY",
  "key33": "3iaZyvnBNfXH9ZNSHb76umNxA5ees1n7U9iGqcTkiP7HtHG9PHNQgdgZg9dd6oX2e3L4eBB63VJvVZzitLPX4b2",
  "key34": "usVX6spb9zqtnNvYvECyRujnkG1KAeU71ZnDJSgh7qPDqHWacDpAAHXrHgUyinhz1yVKwEK3mVaLfLYdacvQ8JM",
  "key35": "2y6FetYvc9qxzwuMvREqrwLYZUjPkNYBPyyNW5Cv8NniAujCHiWQLZC721wbSP78W8vpZCa73tzMBCEpw3Ax1rEn",
  "key36": "3XCsMoZEGUniTt2pUEgUSNPV7ks2saX8XffvZg82kR2QhjvN9wugUPuUB4THHo3sTiTLQ9RjeVVTsYBb1hdXBzyb",
  "key37": "2d6LEM6hP5cya2wisoZXYZ8peQQbnZDSkt9WgmmMR7QT9AHFT7ibmynFfX7G1VjcTfE5t4PsYqWutRxKwBkiYK61",
  "key38": "2sD9wQbgDmfdEmNzNS7m8eoQfS5KPeaBCAoaqKt8AxFCTp3e7k2BQzoK7fwthCLyvNeeDQH8rT5aVAebYRrMc4JQ",
  "key39": "4TG3QcsHowZr1uTbMCyRDhAJHrL6sa6znxQeQFcyTYRKpSutpz8fmWs2gq4bK77bF4KtAXHp2sQLCvqVvoi8Lm8M"
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
