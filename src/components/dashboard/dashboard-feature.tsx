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
    "3XoWQn3JKKr7wHrCESdyTGirjcVJMZA39FVF2d9mar7EbRz7oRMLrgq2WPU8WGBPMUHTfZnFoLUf9mFdFVTAP8tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBET7HEafQpkHetfz1amnCwSgLzq5hmLkJyZoBwczxQ1bqg9jvhzvYkYW5fpc4SESjGBB9DxtB4WRZMiNXpkev4",
  "key1": "5yfeq4j63AXgj7VvqttcDKDnriZEgYRuLsyGDeqKVEvKSzNhWd5etQpChS31ewA7yTzfDJDzu3KHf1cVc4MiJHNf",
  "key2": "2jECb9AVDKaNgq2jZi5c4MNKWN1iMD6MdWQmTa4pguLyuPCnrvwjyf4bCVNo6GdpAKZkL34aLq9F8DVJLd11hekY",
  "key3": "4L2gp8R4q8WjP7LkSEKiNR3YnZGC1YG5zcZZ9HGSbVuehvFN9JXx3Bma7h3DkhMvBo6BuFd17zXascJYeiUhEaNf",
  "key4": "hbxetwsHZ3GreUMh5zqYzLzeTnJh7fC9sydnnP3J9dGZeLiRXg2u89xHkjXV8KUWPPrxWnksv4sevuoFHFU8AKC",
  "key5": "3aPc7jKKpFW9vHbQ8qPJY6YZ7fei1JivfegT1v3iHJmSsL8NeCsgF8VWaM5j9v38zR1Gzj8J9o6cccGhCakoTcSD",
  "key6": "3W17R5XDgkdFsQc5ixpLrUXSUujuHmQRsKGcoNnzaLDG69x4vSKZiGaDbJMiyFyLw2kmwSbot5RinPcB6DRj52BT",
  "key7": "5g3AXV9ckjxoo98DSYWBELNnELWXgBcU22nCt4R5obZmvmZYom2XjLv6Vxa19HUZcbbMEWK61GjkKdfsTEXEj2i3",
  "key8": "4RbcATZB8dz76xWnFXzwPFU7stAkEZ5QT6gBdvrFqcqN9CyhfC9Wa58zD9jLpLhZw4dDHygDy82uTjGjDuvULKvo",
  "key9": "4Yv1EwfATqkLPjTnPrZHLbkHpNeSQ2YY5PTdBnBMMAxWfxjt63V8Uu3mmh3UE1xQeyerV5Fv9D3XNQukphcB2hzQ",
  "key10": "4cX9ngLivatZwTnYoRop8VvgmMhrRPC1BgR31dVpGa9rhyeGD2dvHLLkethLbymSSM41n8zwxd4Lw4behqQ3JYEG",
  "key11": "45RiQgnGcStyuHqUoBLiWrk3adgczXzCQbQyBfps4euqQAucs4DVGmdRDeQxGyj614ZxUX9qqnuXwPMaGzRMktww",
  "key12": "2HJUYHs8C8ixs6LGnPPnnWMB9hZGkYgtGeTJCa6rM8t1hJXLZMFik4A7uDfDAtZyFamemmeFBSNM5Z7WnmtkfGS2",
  "key13": "2FWbG26STZcj983vpbv4EJ9yUHhE1S7Eb9Hphc8biX6mrLYbfSQL6utRKwweDvm46o6z3wRVtB3ydUFR9KGKScvy",
  "key14": "5vg7RHom99QvX7Ao1FX7pYmSJfjBi4BUTXtfWUiaKtcZ7wm8m62yjJ5Q8ievk3Cj8oenWg1NyD9awhYjnccptXdY",
  "key15": "JL1xkf1N3nRTeLP5hGhaCu39p3GrMWSgNZtfmiN8uChrJFvzKB6C8KeNUaWaT61sHRjgWb4DF8bytcSWNVbHhXM",
  "key16": "28JEMokHeWwrxQ1irY7jgQymsHXoBzsoEeeGRu6TnZEQk21hLXCpHtqNCD62QQKUSgtnhbivbf93vHJ7ipntW8xb",
  "key17": "34CCPKgSMeTBDxP2EWf6E6v3Kg2DcAWT53bUeuuR7oZmUZzsYxBdWXoKmvsZ8m2WzDVdhJGJ5CXoQttCtaAgBoWK",
  "key18": "yRxKv5xCKKobAySR4mCw8VFvBuX8fCkd6oM1yTT6gyvpc6cECkwgS6p5xMpfh86kXGeqmLEL3AGqGuWHZZVFLps",
  "key19": "5Pf3Qrevk6rpp5Q4RRczxDE5rBwxPZCpMDLJPzH7bjsneE8ScMarZP6Gvgqck6i4nyz88JsWpLtXPSsmWFTNw2Wu",
  "key20": "5p5ckbrKAEcT1GGaYxEFEcb86AdvCZFX7cWQu7ag9qonzQp2a9WPcsjJrFy9jzBr3tCuSP1XMPKzQhWVtxTqYhHw",
  "key21": "jsLcEH44uJWd75KJ2AaSvK4dMEcDvfUQEmcKhD1Enp5fteGuqtdv7PqbhFLZ6Ch7CarxPWaExH9eZP4Fg38dQZb",
  "key22": "3Nk1nJrWaVTeb3Jjmx8oMCNQino7BmFHvxJuAXV9nkJnESc5zYmyhjEaTDv41MYrXwsUYonfYYe5zuoVHhqbgrGc",
  "key23": "2EAepSAWeaZ8ft8mXn82ZJmcvU5SpbCUw8mB7TcibmXdNeUCQjL6HvWAqijkbUTwQMQb9TFa9RyLYQsdXhSLp9ng",
  "key24": "5tGGJdLhFAQhGtopbJGG4msZGpE8W5ijRrauncLHMN8JyzKYt99X1ea3jqHKYS8KE4z5dwBbeLLvVpJjfDkzrgGD",
  "key25": "2Fz2c7qJxJXcN29QBpFT5vn4xsGckNkHxuZaW2vsffjJsrcxAe2iByTs5mKb5iQ4RyXqd2jaBpv8Tqf1fDy5EthZ",
  "key26": "4s77MPFXLYxKLP8DvKkFCeg4uBSTTCAFkHZksEH1nYwyPwFNPGH4o4gCRHULUzgDjooRYG58EsqSkkxDs6dxsEcS",
  "key27": "5Q1gYxmTvDRQbfQVgqNpUfbArPUbgsQHCbKovYinp5SDGwoqfDctWm38z9QCHp5oLuYtnKEPbheAbFwJaR4ZxNN",
  "key28": "59LkGXDkB7A2CMYb7cYV5W36feudziLk2bMacjAWvyRwGG1mtUSmtgXrZCLvjyrRwheEAVAmTCHbaXdSpghGjsUh",
  "key29": "5rK73PsCFQmpdZTvGf5mTUm12uZDMTYLdzZgmwgPeAfaUpa2xYkZ7vt6U67J5Dj3BedB3nRhpDvWja4evAgGeJz7",
  "key30": "4iWbov4P8PC5nJXzkGi9t3DKaX5hjDm83coHtfXj3mF84WqokhZCXENnJwi6Tt2nbzNaM6waCE98WQHPiyDuD45Z",
  "key31": "4QYHFnRQQiam5FHo3wpLrtmdCgjHHk4LE82bLhYJryh5a7w5DSFtsmJCVCjEkWvGjC3L1otLf1wvmEzYQEqTqgqq",
  "key32": "cHCbX9M12uUKpioaZ278J7ZmNHQojtwepmXxaxdfDxNjgsG5nZoho8BJ9s8cnZvWMwpFXVV4y1uBm1csneX93tm",
  "key33": "PwTfTnoLb2jzkc7yuo61hiaYcaySS6NjSF9i3y2N1NyZ3FejNE78gb7FWhcBDYZnU531HKNwh7qgtKzo2d5wCEL",
  "key34": "igPM4k5qc6Ffyseeq13qXLKGMQSRR6qwXm525ysq7jrX3uyJtMQkZTrsYcD5FqdCbHbx7p93ZwZbxbmTeyDXbUs",
  "key35": "4r67GUUwwDt3oCxKRLSKsjBimtdXfyftpeoka4EbDqMuQuewoJVaaSDDQ8yYPHt1yDKUvhEdqQgD5dFsn7qz5yiE",
  "key36": "2htsYdAp8mqiBHY7PFmzkaqLrBMDfgzLUQ7eJPbMfVzVvZb6oRTVv3SsQd7Ja5mvm2BX7jkyr8aVkUGF6PBCWWKY",
  "key37": "5W9J8rB4mVZUgtVVHJZn2TwNG1oMnnkzceQLxxGSG8cc5cFCBJ4kiQJ88FpEwg9GqJE2fydQhsCgSpSHBRuBLqmK"
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
