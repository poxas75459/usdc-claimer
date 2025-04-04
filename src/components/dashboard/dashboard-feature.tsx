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
    "54zbQJFSvgVEEj8Npfd2uXwRkYDbVh3A4a135xPph9K9VVSEejGYe2aCEdRpAq48HV5MZCnLVt3zmJWh8HCEjMq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31p7qrkLWMDbQJZuNPZ1EQa5p12qo8QX2PHYSKpu6ogDiAxryWvwsy8Ah3pt9aHYS1fECMisvzjun313297Pgypu",
  "key1": "FT9WqC8TQHVJ64j8VMkJ3ANhixgqFujw9S4LDwiTEcApwPkjyCKkQ35rUrs4mGktrnifqNVtPUxW4s5AWXj6xXX",
  "key2": "3Lag3T3APyQT9Ryxv5c7RGHDB88yUA7U5KH9XmRGJcNb6h1WC5XjM5RJpYcnAw7q8zApvHLRmDANLtcBj51CFY2R",
  "key3": "3HaDgYz75n8cygt8n58BZMfFtZiHT3wenQoi2Um7RVusNvzpb5Z21JnkyD6hc4RjqnTEA1fMwrQA7pxu9zMUfi6w",
  "key4": "3PDHPwNaSYym9H4wfxGJkagUyBU6JApiMDSykhon7UjmkCm3vWGVcdn19PBhLbZjXwh3dQtGTr2JgRFoYp6V53mn",
  "key5": "5GH2T6ythPsyagykKgCX8vKYprPg91WA2dc6GAx5WMJW1fuygKNrjYFi73RGrp9X1goUdwo8JovvyahWVRz7f6r1",
  "key6": "4KtfeCNgLDZ5mfBwXYTXgFqZbdHpKsNu6BB8tho5ccw5gAU5kypXeytvYqpvK8GtoJD9Yn2MBX2B7f5UhokGmxTC",
  "key7": "2vU1tKYcgozBFAZFDnGYEwVMR8YeE1KVXfB3TM1R2p5ANz1x5ctv6QSWkwqwJqeUnkmpC5XormrtKwcwgWrcDuzU",
  "key8": "5jmHRrGmLfuBF868F3V3RyRu1mNmWLtmiAzoK2QtuuGB6QNVeJwbQRnKjWD7WDjgDd4a4GD4PTiA8xR1dciSNGiM",
  "key9": "4587sw12ysd2txjRw9peHkGn9NCLCAJ1YQZN2Ke4Qkv3UWgyi1ExQNr7CcJYUvr1AK3yS8anvNT8uv9shqmEZ53J",
  "key10": "43cxy5hEfTKMsW8u1TBtcKxQSmtos22Gxp2dgZNsD5PbsfP6mMV2QkGzsZufotmT6SpBaHeAa9Rdc2BpPLJLmaLc",
  "key11": "38pSUAgRsA1sD4UuPpkxKHQLjfVQaHgnSKpQRnqwGLTmVMThU16tv9dDK23PUoLCzqnqcmigcgWEqAKuyFkmdo8W",
  "key12": "uVJ9pg5QpXjNDieVyB28cngf61uZqJocnRmmtPWFN9HzMTdnTTRaJMsBNsabW34TGXR39wHGPqWXyicxttGRRKp",
  "key13": "41DQWid1bVDZpj4YVBMs7xZdVhEg4pnJCfsmhkkcSRm6p3MdEQrW27t6LDv9WGNnScYLAUbzWYrEZvjKzdk3FgFq",
  "key14": "gUiFepQYiohNbXGEdb82nzKW1Y5VU8stKhC3dW1ARW5ATAeYEhtYFNuUZdzN2Ej6uYuwfAAiCMTnu5f4jTz5rBs",
  "key15": "5zY4ByfQfz6WyX6o78q5zsX4USKMBAtVXyGRqC6FYWsXTP3T9EG5y2Q4yEocuFARfYgVrWSdBsVqKkLwJQbdAF3a",
  "key16": "2NCXbf5qGsHVFynLrNg4pSxHV3jkzSue7WJ36Pn53VBhpcjVPLGcr8AjugvADzVpfTzx5HT5mbFUpF3TB2vgqR8b",
  "key17": "2q6wL7rMdH1AysdyYx52vTNX9AgWGAJzt6dbLpsPQffdW4PBCFxFxzybQeEPfvuL2YUarGYXZEwHuYmb5LcVisUb",
  "key18": "8S3wKuopECpaJZqofabA41is2zL5KZnmjxLtbPYnDCp38URzogkbEyqT5f5N6TcsnR7xTZYZhcMmSGHoaRkooZS",
  "key19": "2kHtEfMVysWAeVfFLpiQ3Ekcx3yBGJnq4zauQFbDvef9BztHvpbALqv9K5Zh4ruxm4wUJ2ja4wV4aifPm2tBLJqq",
  "key20": "4fiEyhz3uxKSEe81GqAmWoJBSXVhLtKNgdrjUi9YeFLK4q3WcwBLhK4hF6yH48yAZe9VeY7QTLWt7rMfHAM7yVjZ",
  "key21": "2HsJCUEqN6uWvyenGwQaXgd5Awm8eaAFioTsiwuGRCNxz3YfR4HD2r5GnKJu8nhRpHNTLPBhMYauhrZBwQXyB3yD",
  "key22": "76SZUnPCBvQdnhcxfU5aienq1K1WHeNDNqHksHgbzPuuFBwwxJTA339sf2KzJvzHokvdhNKe9oDgckQmRnAJyG1",
  "key23": "2TMCS2wwPxTLhALcp8CzSFibcJAoxqLiJP7np9Zs4YPsmQbinbmLhxwF8FR1u3R7wbyicZVymz64ojTuQJ4pRSoF",
  "key24": "4hZKTWysnSRCSZ21aQnNTuFcUWS6ve7UgiEV4c5qSPrscuwiUyrmyJdngwddUbsuGuMRiwB11gES2kUfc36Akrih",
  "key25": "uCivKG4FCEzNtmJVu9gHbXoWPr5RTJht4wjc7uB4GjTE5kTWYKDXHAepCUFwWdUuLB9EANppvtfVHbQP9ro4Zih",
  "key26": "Wj87xaLC2hEUfRXpozeHV5TBB4gBWfeatM47So73nMTeMKuwh9jNoUH4hABe9hp2YwoXvuTBjvNUryiKYWuADEw",
  "key27": "54w9xxSJDf9LbDQwwgkjsAeFu9bK4BYEfu7ZD9GtAz5zQykmnXK9KiewJM6rewVckSXBjaenvSUMu4m4D2tYk2n8",
  "key28": "rCS8to9Rjcr6GXpe6MLuXxmkizSNhu4Dd8AG42wcbhxErhb9Mop2E1NyL2KKcVDoymU9zadMKCta5tajf3nEXdM",
  "key29": "2AfEvcHP6DmE8rF79GiDT4r3YtiEVfhq2ueKrTKkGShyThK2hKH2yjzoU6a3mfZH6YBrtkdjwmjcw6vAduvEoR2e",
  "key30": "4fn7tMeJL5WBcRQYfKDYp9VSRK7UW1gztcRtPMeSE3ekpsjSKHq7PRcVVWjFuBWpypDPbXyG54BFT9poYwG6JQ15",
  "key31": "2kmviHdvvQMLRgvLjHrrtSgv6pR31fsFgFMTBKrg5bJZ6UkdDgp5QqjiRwhnF7Bm6SGWStHMjrPLZd4s1JsPAamm",
  "key32": "bSEJPr59mUXQQUYgjFn2gNyxqNyrWPD7WKEW4XDuBSdaD6iEymR3YwpXGceS43P8xf7HdNPHZUHBFbHpD4yGGGz",
  "key33": "5rH3zMBpmwDRFMoG6jGQcSqtx3XxU5Ya1GT3gNMuhS73dZ4f735Seokgz9ybWnXv6KtjhuFNeBdJfPJtBUTvDkXT",
  "key34": "4PxPcZBEurmfvQMqAXytGjSSR26muU1SZJrbWUPZbmbWFWWjLamhNk7UEzJL5qRY9cw6ycozvY5Xh8LuA6DxeVKU",
  "key35": "4hQtrp1PU9R1fddGtyAMPvcwZfT1vT38wBjLXVxGRAFuUjEfVfVKhw2kzppUYriNmkwcf6ja5G9KA5bsPnDoD9Y",
  "key36": "2XGzMpbKkg8kMi1BRKYjaU3HU6W7oqFZAgfabvEjihAACSsgCrPQXpvvYdh47ZZmRkHrsiHCWsiWAcmYaFAApsXT",
  "key37": "q2tFn4StDxsJrJQv3F28TVBVfRGemh2cnwRaTP9Hw5oHtK5Q7AUuhm2ZnzfP1dSRWHc6wyptnzyBZMv3681DcdE",
  "key38": "3SSwFvEwvtuDXEjdZotSjE9NK1znmgGDzmm8ed2RWrXhXQXFCJH4DtfAxKCpyqWu1DK16zH4VGAbopop1FQmjxbs",
  "key39": "5QP2BM5QZTXhAbF5yxeSHM1Xu7RGRBK4yE9xeWy9BoNdAZeqCKAX7UguV4PvtibxwxaHKKeTL7gAHBAHL96JwrLg",
  "key40": "5eXsszf2yLrszfUyJWw918hqA1LcYXmQq4eQ8NNdRrQ7ouB6PVyQeagHjEHw7HTwUss5pbeYAaMpSkqfyv7WqxQE",
  "key41": "4ELt3RgBg52XEbARwVv3T4dS5kfVqmZ15yzohJnYU89Nx2hry9BF1BofeWjL3BnMxmrb3gfKUazcbmSFLi6CQwtu",
  "key42": "5VqeEyacBque2ae3REnymcmoNvMJuRTY5N7WzJY52hTBgFk43J4pnHJWkUJnsQ2P7x9LgDixUg9bXb7ekUBjbuev",
  "key43": "yb5jPvvMPKAGZW311Uc1bJic5d8rLcEZX7vvejJCJXaCw2gmPT1NmV2DzvUN6YEXZZAXJssPpkvbvwLZPnmrSPV",
  "key44": "3YLYium1nut8nraZiFvejJ43oa8PmCz9zd1S5QMdgrQsQZ5VKse3Wpd3oQMWDh37uM4AC7gMKQ5onWadHUTcZUwP",
  "key45": "544dUy3fUN6eNqgGtCSQmznjGro6DpgNsyHRNCpf4WcY4CE5bZUw43QWeY8BHz31JJQMbWeqterDH63eSohYWPHv",
  "key46": "5ZsbFatLc6HwoNwLgyrTL6SxzYLKPxY1sHt75DdkMfph2s2U8NDen44pZHgiNAGoq5JGJNMwSQ1rPG77TP69Mei8",
  "key47": "4WZdzRBB849s99iM3YFbN1XmLoXq75dyqC2YdUyzmMuwF92cNvqfq5aQzUwgP5efmCesStQowDhgLA7Lr3ZGnkwS"
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
