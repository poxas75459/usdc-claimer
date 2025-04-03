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
    "3pMHpC4bBB2CeAXcfTFHvPtr8gWxwq2sk27gNGknF61eXe1Ffup7zyLM2bgNCcUrEFhpEW71AShvTdiejJFJCzdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21GNPwU7pgpdRy4jfyDudqo9c4DLZ9AT9S2aFeqz755XLeuhFvjrv7HJZA3wuZBSWYUDceLamf2t3rGVMFGmi2bS",
  "key1": "4iW3vBqsdMGZtzhhdzRmeF59etfMeQjrMC2eU9noW9bDsqRWwHiyfFCg4u8i4KC62Q7nRDGrFZYeecTtBHpVjDkK",
  "key2": "37DHYBJhNrP3n5yujsmT1xLckWwskmKZLFByEuxkrA3ghJjPgJ25ab9zArY93TGYnbs7XQb269Ro1DxT4NiLFmQ6",
  "key3": "48cRKs6zM5HtGQhJYyehzuh8sQHErruwaMkmewShZX1XJHKceyscD2hc3Eviw82UavrcGA1sSnQcL26A3nyUBpi5",
  "key4": "5VYZQ9vKZoXP3FArSXjSin9cWyxi4YQq8eUGLZZ2kLP3tg3HkxkAUQvP1c2qPEDqnvrKYydAJHLunrmA4fNwwG8G",
  "key5": "7wDqkYPwwUUAjdRvrQSDNUdDNYgTxJpS7aiFUjruUF72ihri7LLebw9snQ71p8PWaJNNtLnK43MmUyfyzNfgEaE",
  "key6": "2Z4AeZcD3yWvikDi1Zu5wA9LiLiJbSEwrihmnQVwRDpGwWHNPgLwRz12PEuU6ZLafTFx7npLV9UWvQVKewDbgBnU",
  "key7": "5wuUzU4pYyEbYKKTt6iddFVH8ULb8DMudWynuZAmToJdrgURL3D1hiXL7JhRgyXYYLZnkCLNGjUqGRs15GX2rsMe",
  "key8": "23cTC4RrCrjF95LjDs5dbg3JPKGWKuU3J6KpvX5Gjn83eNAaBwm4oSvhfUqKTp5ieKZ5xD9RZLmwPFSx1tEGMaXP",
  "key9": "2xX9xbP5k8Hmbv8Lb2jHbFgLRrpe1TJEy8ozpxdsVpkSavSFdZPWkTdxHo8B1Yd4R8FbaxwqVETeQgYMTixC9zDW",
  "key10": "hz8fK62YVdiEjiJJzCZxZ6MBScL7REVQG21Nk9HNGZYogvohted6zc8Mqk1NGpUvQDeeJ8d5cgrqYXySNimoaUD",
  "key11": "282iS5rsaKjZho3EsHgSq9nrvpP1MjNL1d6YHY9QJVzVqEj8NxjzzyJyjv9zWoefof7ZXNdbskAU5gqxwc83TJDL",
  "key12": "44eAmxunbTi4MHpnHKdzKf5xVorHSFrLmF855AYGDH3YNXadnguoFnvhfEvGXdvPjR9q8enxt6S3GuHMUeTh3d2L",
  "key13": "3kia9hsdi3audMS7LFKatS34pNZMUa3YqoCGy3fU4bDxBtroF7bvRnqcGXQHM377pdr6HP1s3CBpjv6D1pxTiC5s",
  "key14": "cud61xaWyohancfPsGadNyem7sE5D4ft3f3QjYoGtNyUKFDKmgzKDrx41tXxbAyHrHHrtsqefsCm6beHGEHPFqn",
  "key15": "2db2ZWxQShtJAHu28agZSYM29LD2ayV3jhX2i1Kdzk4xEAcojYKVLZtJQrYFtuveV4P2m15hjcHaXRt3Y5pqqSqn",
  "key16": "4SjxENzXEWNN4SrMfBRVHr7AfHaitsLEXj4uuzoKDcSRp4nNg7JLisk7fji6xtZJFENbJqjUTHiwAZJGGfSn1JS3",
  "key17": "3D1XyseVM9VSAS2SRuFczJXv6z5Mooxro3Q2epQMpp1epPqL78mH7HVxZnxnzoX9GhNVb8S3SJLavmEcRJW8nsUa",
  "key18": "33g3B5DjuXa26c2HhN5qXCWtVuy28hE7ymzkwta4DS7oACnRGTgAS4fTagCdycsgpn1bCrYhNCwhrK6zzenM966e",
  "key19": "3ZKYBmxC2PE5HUrqnkEkAMgUxeH973KhC9oS4gcN282eQt6PZYn7FdiDNcZaf4LcDjcoWu7M8VBW1AQGUnZGdnwW",
  "key20": "44UcdtQGfjJMNydZEf6uv76bSGcTyycoaPvZf7ocva1y3LKimsFZDwhsTD3Vm9NueCgZ7PV9LSr4XSpWWTvG73h8",
  "key21": "5HPgq1Zfs4v3CVKYYbPkAMe6Et344pBkFmWgZmNkjruxwg8WD3kQBR7enP47ySppLficfqs7yDfJjBDouZCJnTVG",
  "key22": "3HgYvW6HAAo1BzXKjJy4n28HUXBNrLbLaAbQchpZiVHoQCRGd6pJGUMWjtBzqUadk1t8UzueJNS7MpdEzfdCXgLX",
  "key23": "R5GAUERK75FydpXKKjjbWf7y7pHF5YdGesbwxAz3FMq95JwNGhPyxuDsDSg4kedDPDmfUq2CYZk2m9yfWLp6ZAM",
  "key24": "3bhXe6aYLo3hPbgzASZYAnKFQs6K1VJcpZjmLqnq4ZdqcwVTuYpd4YZWVZmtvu35oJ8U5DD5834qDXTCBgYNFmTN",
  "key25": "5mWK7mjHZE1tge5fF6adhVn4jw2FVkwrnKskG9Hr2BUAK7rLHzYFrHyK1NeXQvxj86t4Z7SHQbrPzPzhaKSbkANZ",
  "key26": "4bzGkYUibSSPyxuLhKbuJ8MJCpJNfJAf3AD3r762w6iYnW7mUtbFCC55nmih8v7pbBS6SQrbZhFxAtHGWPNcScY5",
  "key27": "4Ke69qSvTNYnd3HbQcFXQFUhHizWXufLh8W27HkwkagkCowZrZvC3aQ65DyWCE1TU5DgAykt4gXYw29gFXnUpVh1",
  "key28": "5hMAgZtxwG6W4iCSPx4nfQbiuUsBfmKfwSXeva4RfgxXuPGrusJ3TsxgTZuLG8gtX4wDceSSbjAtPFHwFNGu2y29",
  "key29": "44Gi75E5ifQFq6N6Bw8Lr2xWtiQzSK5tmrSijqNZPvA4di2oaqyi8HFxjaDQteux6G9Mf7vgHPcgtRnsCpoyfyVw",
  "key30": "Ux4awz4N5NUJEWT5FKyC1ULmH3sZt51tuQK2jSujK4SnKPAsVkGP6gZkcAKPBkHLFvfn81Tt46WoRyymL94F6xD",
  "key31": "5dELxWMsrJgsE2MbRbbHws4h1DRp5G3ibYJsbXgBt62GGKUkyfP8ngwYb24yp5uVHGCbXUXMR4DtcQigM1xzFVAx",
  "key32": "3K7tND9GNYjKiZrjmpqoNRDfrRaCqKCefzDtrozuC8bRmWCUn8kK2Wga7ojYjAGCtbwBKfKJqpxn2VQYhbL3WeKZ",
  "key33": "51xuXfazWa8BEkjryfHFAjDZsoVVVPkDsEFaStxeU3QieZBjTCLAwgSmMms8qBHZiKRYLjnAnG2fcGMQ1bJuo5Cc",
  "key34": "5KknccYU34p2P9ifYBkvJqt4NvBHxkuM9VDtiGAVDgAwh1chRt9WVPj1k2QaCYCCvd11JPgURB61uFiF7uzGQYRp",
  "key35": "Guy7RQTwLnnnYkY9vhRnDj9YukPVBcJSFZqRuYSwwHab3o7VBVf9YyiPrtvpxxvxj18nibgfAsSkat8jUPExjPM",
  "key36": "3asBdiQFpXApB5KscMw6gXeAxyTidgfjsXqGW91PH8hKptnbZ466n27RDpTcRvyiHuwx8HHRxBbTj9SqK4UEm9Qs",
  "key37": "NFmNSAt19c7aB6cVGACPo66DdoTTATLYXKYaKjVPo3FVpySWDih5gFf5QeAoiYfLXYT8Xm4bWj27tStKL6JTxhg",
  "key38": "5p7yDq2ERf6vMWsfnAomt2rJ4bAhFJK3kkc4Cx7ASkACbNR6LGjLtMnm5U5b7jjk7Jfd2q3WGrigCBusPCc9Pqu6",
  "key39": "4vUnQZGYiJWEpYdAfaKYrjzVXWex4KVFkokcjs52nxz2ELm9BKCfXPXrNuMRe5QXtp2QJJG2McjFHC2oRR7ZZxBP",
  "key40": "58EwUZBjFBoojqfWq7aFiCCSijxhkkedTBFgx1vR25k6EA8bVeZbCACiRcnWdDpGzDN4J3aXiJoYrdUxbYNaDyPh",
  "key41": "43z5Q7HsfJDK5TvByA6S4zSu7TXFvVzJXAWvbHt8opcZpjiNkNCaarxaKWkVGyGqoDbW9eHVmvDV5umC768zB2Y4",
  "key42": "26xNJY8vCr5NKKaiEHSQJiPn7YpwG8o3NvkH3xgJSBZhKMfkfs8Rpb4G1cwVU7C8Sm4t4wqyK2FUD8LoSTdmFBp8",
  "key43": "4LZfaXRs4jBsegkLa6AvTuV79QWD9i35EbXW8zwtEntL6dVmdR6mumUK7Vy1LfNoR42qzWiybK1jrzXEXuhUKXAv",
  "key44": "2xiQ5CxEnivJvpd6HjG1XXpRbsN8sbPFW1xWnNr68expr3dykz4b6QLyyQFByhjFxMmVgcjBUMcM4iRmB6K4cq95",
  "key45": "4E88UaKw4TiP1iZTde2oyNxuRwEjJ8CTZXfb8fAXtybe3dF9esMprsP5aM1deChbAGBH2p3cYG1aRjtT95Ka5Pb5"
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
