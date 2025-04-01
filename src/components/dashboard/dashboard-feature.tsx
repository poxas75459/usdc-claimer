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
    "5yndpAayoowiYefdfNaayJXBDZ2uRzvV3q8u3AJYkx2RcGpyaPZiSTVcYp79NqhkEMLrtb2zwBkN9WVSi1GkT1XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZZTT5eSSKw9qx6sMweyTuhuAyxDVZ98zkmdQA3FjfbXDWErZgFocVchs5SWGkrFqMSxe5dEFTTaZSzGFVPPtLK8",
  "key1": "5t5R54JSAcHZ5AngbzohYNXpAnqxiqiwM4odNrMVnnc8ixyuQ3ZN5t8anEbgSRzp5NYopX2g9kpRBfdZpykYcrKB",
  "key2": "2NXFQ6mDaTC7pyCFxvjmoaQoiBepogUDAm7B6LWjZQGTnsvdMrSEstZ4EoMu6aWznqvz12DTKoRF27Ukpa8KHL8o",
  "key3": "3zUpRQmuwb3EiDaaYCkz7dxGfYfMTcmYTEoFJgVPUWEv5emL5b5EfuDk4t7k9LnX9kVvwGgxfQyvKXUXJsUgjagG",
  "key4": "4ZuN7G6anMf7ncL8mhvuPHWFbucW1aEJpzDaKPbK2i4FXyNcXjcfboEJFs981gawSa9etsxgjtZPWpEfiaVr14b9",
  "key5": "5V64GTkYHFzN9A21HkxUTVmC8UJiFr6AnFMKsdJxxqjfGDXntC5rLfstL7o66VmZDk9Cig4Qm8hcbSZJd3npZG1m",
  "key6": "5ukyDqr6GqPrGi97oox8dapdZuTzUB7UUKNGYBbo1hEqHjs4N8Wh62hMBPvktSwHhyaHERddJudP8yfg3CLK37D3",
  "key7": "2KuT37MNXAPEkLbF4UyFE6u3EftyPs8ErWvg2E7ZWBhpKUozU5C4cHDZSXHt9bTNyjsWPt77WP9LGvDXji7MqB52",
  "key8": "2rY1rodUyv5Fy2n8EW1ExLBKXUrwmU4BapbNYqLeV6sSdzGXdDQf9tthStijXK6Hnf4yJbtqA9tA7T6AgxNVe3Uv",
  "key9": "48BZJaixJ8GQ9PQzsvHww2q7yC8eL6ybaSPbtSPZpTfXC2agkviyojD7ebijkEJyaea4jHuksgsScUPsxYwymAE9",
  "key10": "SPn3He3ZUppavz5RQ8QvriapGqFjU6EAwN98kHHT28cyGt7FNoGVPvqnk344B38ykDRRSbqvJaC1NpoThPpPa4E",
  "key11": "rB8gs5HUmRTUWbmeoRqCRyfiycJ7K1NiKGaELBvdbG7n5XQooKbivkwe3ZnBuvztsWFcxeVgoQpWaJXa1b58p9y",
  "key12": "4MrUZqskJ34qamjfuY1BuMT9nCj366CFSwxRiyFZSCftC5pqkCLk2LW9499BRraJf1KE9Zuatxb6ctYWHAVgqyiH",
  "key13": "Vf3PmF6w6TQwYEymVbs9aLsoWGpJXufYSKn1vjXWc51dezQULLU5pe4foaoWavzePftBnTUa5tNQrHRgt54ujRA",
  "key14": "5wEbjUomaqTsqLSB864vPzdMraNrFcDBaWaZkKvSjPTV8rMD8Bwcrqh16qEvYEpm5rtZmWWVx2RLapbYCDBWQndF",
  "key15": "4bsvmH5M34HhnRTFjWv4TGytzqU111YjzpNmMDGdMFkycwCv3A8ayxFkbJKubVgATpKfZY4maMBWEkBo8ZjaGCjU",
  "key16": "ax18KZYmQ8VE7AA1SgWdvRL98GtKZti9Pd6TkWFYaBfJ84Ze73rzv25APTiRN1p1oJksq6VYAiXc7CtwKKmZfXs",
  "key17": "578yDUJTWsnG4F5aAJzYXEZFoRyCbufqMvVxonms9GxdpUoPoBkUN4KNMc2V6g2YJvqqgmUU3LmUp7f3YPaGEeNj",
  "key18": "4zgVWRB2debiWEZAybKPD5eeBddRerZ8fEWfABpzMayKJaUgU4cNKqdsWUJm59AdPa6a4pJP98KsygFaQA3phymj",
  "key19": "2AsK2bDjpb4KXsPVhTHhrSVETo5JZVqeQS8DcBJrqLv8ur36MLSW9LomGsxpYUxnbaKjE42Dg2vUeMzom8SWhbAK",
  "key20": "wmj3hWDdvDC41269DUF3EgHAxBVKmsoE8kccQtRDTQEdfgZfb61rHDqStnFWFFacEedsNxR6KzLeKT34BSJB85o",
  "key21": "2m2dbjJG5qJZLF4xA6ifqHY8c3Noo1tWNdhpMaLZP3MrrhLeask6VHt21Ed4PWFevQ8Cc5uS9G7FpevNVFFPpdY5",
  "key22": "5mcj3FNtroNRvVevowzU9MFrtmi5ohd9VsZMRRvP4xGtTemtzA67dgrWEitME3vWzMxkCbndkvKnjczqpC3hGZn7",
  "key23": "2RkojG2SkecEtijQD6cZUTyiJqMzakuMCs3q9o4XLiVSAnv53s7JQuASe4m3owC31tgfKbcrR6Vi5R1tTiNK7Q6v",
  "key24": "4wVziWF1PpTW14JZmx3KxLBsWnrjCA7XVd5eRE2ej8j3pasahDQ2AxV1Qr8caCg6yVEgXcRNE4jCPbQ4JvByWFzd",
  "key25": "3QyuPfuXkTTMUTTXWTeKKocjnM2rVTmg1CzKAX7FvVinmUoDd5rNmoukKMba1RxAzXT79TkEGz4raLeJs5zrRqHh",
  "key26": "38AoqjpVFAn9oZwLpt1zb4u9kireuky1ubfQQcUy3AwxBYsPrKYKpgLDz4JVcsmQEyggRBv5JJ9afKHVytBDT8cq",
  "key27": "bjwb6zos9bVDMqq1viqCwn2GSioj7KQvTYmCdBGSZykwi7JzBWsiTFfiy3wXHFRXiqsw7cP1b6Ezc6p4qLiH7iZ",
  "key28": "5sDAoeCZ49ikA4tVh56KM5mr1UqUEsMfiXXhzPngxpvNVRrVxUK95QQiQUhWdPfjE1G59j87cqWYPA7C8azj7Gcm",
  "key29": "3P1YZ8xGCByNB6waFr6EWZXQFivVfFQa8cuY5bW8Xa7VpEYZATCcG1LYyK3cHo8e7M5PqYsUHAiFvNxuGVTUtM9k",
  "key30": "467HohEfqfxsoCGCUGKwK5A11NnKzjxS73oiraZ3cqrpcms4mLG1M4WKfs5UgrFFjkA71TMgNwnNF33Z45L1btLC",
  "key31": "3dJDzDFEsXsBmemm15f4kmei9e2E78kUZqGyAZecJtmGriMwJc5LK3zKMZPHhpGqGujFDmdJvbFycWo2wiTThzCy",
  "key32": "36bbWECgvvBKMNvc2raNbygAtfpW1Bs2UUDi8TibBH6X7MxjTjb76uzdpxgaE2tVmzY149FpUv687q4B4rxgHw8v",
  "key33": "3XBtJur1fwnRdsR4aCifaNtkLqR17WHL3JxqZFU7okkfsf5YtUMTGqEkBotDPe8XhHoCJJbaovFGv1VGSTPH8Gx9",
  "key34": "5BdKmACcQX4ysAcGY2cMvpN6sgCMaLPPgW6o3gbSDkdjBVMpjDjq7UmCCReaC51QLBuHm1NU5fQkXfZTkd3sAyrk",
  "key35": "54C21DQgsnyYHBgP5CfdtvftM2Y9G5M3f2G96dfdzq4m2iEYHVfC2DqdYL7oLoEF4uqEsNdRriaBtWUXpqUJXZkN",
  "key36": "4uWKHZh5ciUAwS9QGdvDQsUQvCd9gwehJbcCqf6TUDLJZ3JJPZkfJBJQHWHmmqX6MVAEqEWALJFvByegqeLYgN1J",
  "key37": "2NvahKLXdw9YNBm34WZowUBCxtakQPkngLKpoVqWhknwGMWvrfFdEBWNkQAp9C42Qit4YACMMm6F8agxemmPqCvG",
  "key38": "5oH7Yk7aofnji9amQJKFAGLLq9mkXKwvgmaBuk48Jq2V2rgwpQdeykaJ62ThfNbtQTLzPpoHDmFx9oqvYe6t2vDq",
  "key39": "41NyRBu7pGJ14WwJKg4JSdMefy26kJy3CWZyusVBYj4JqXKYS3j5Ho6BrWVZQYqUSdj9RA81cWuDXp2EKRgnT1ru",
  "key40": "56DBCQKSvno2uwG6nAzWA6jkUSikumQBV8p2Vp9afLje5xDz9cvyiPg7uXv3t7ABmdwWjvTsDTx3kdqUoNr5YM6m",
  "key41": "4vCYRhyS4bX98TrcQhYW4vtmigtC69Gffu14CEr33UxwRWPSCArdaBPL2Bgh5v1KTqSCqhUqrqgmCZRJDyH53HnU",
  "key42": "4q1bVnrf568BJzHyTgdwqWbmX9Z2HQtyvtMC9tTtA3nS9GJKbkVr9Q3KeCX55p8WUXKf5KWj7yCe7bb81Fad2J9m",
  "key43": "3qMyArtWWmyFc5gg4ksfL1ho61iNkRYiPeK2Dg4jpneMTer72qbJKiyLYHfqZCcHeC1SWW6VQyZ1m3awfrCEM5Kd",
  "key44": "7KThC9aS6TVnsNYhG7bD9ui1AHLYu4M8j9yTMmrKxF5N2ZdsfJ5fkYygoT7gf86HU9HxYPrhAL6TiRJ9r8XwHg5",
  "key45": "3QKpUNDr4ceE92aDnLyLjFc1LymTGk9DnfsgqcFPQWpbL8EUbkqgDN8A41CEJiegcJHs41MnYikSWRmXmKYqiGjp",
  "key46": "2vi8sFbVeGbXcWGdH13cGNdn5DzcJa9Uf7oRE3D1ZiqyMLRjVoBXcrk5JUYpk76edKixKGecofcQzmyxvhQt4onT"
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
