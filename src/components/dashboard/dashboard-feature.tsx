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
    "5MVkEP2xddThNzA7pH5UJaEy6b5h2hjdQDeY132K2y1C31Y6dkorUZ8HZAMnjdbuU2joJxW5rcJUcRtkWFqeGxkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bD3QPwL622G6ufcgwSHtMBtRxUdo62cKqhtpWsLp8pvyp8n2Bi2HaJRsQLNkKTsjueA83KgPQUmohmL1UUL6DS7",
  "key1": "3LvrY5XhZNhbH3JmCurfJem9y4Yoc1jUGWs9EKwU15q3BWMqhQhrQ8im3gwVvnYVZBxiPp7i6rkffvTYwGABMzyD",
  "key2": "5iQbKxSK3Cv4BRKULscbQe2BYFGELvFcM9dzvYLBSyp7hyrd8m7D9Tnjw4kfwvQ9wtJPz2TtsZxrpben54vUv6hk",
  "key3": "Lsz4nkLYkM1peisWXPW3r4kskCXtZqjEAGxSTHjx9sZ1dyUdhcCQdF2ZhpyMVfuuYjfmU1CUeRqvGdKx3Gm8X9Q",
  "key4": "3GrYqtugN11537ZarpPscEQWpmosMX4dWXy1YeFqG1hb2VWoGSTPZTahLr8zp4hw9TRkdb1zXajrzVUvjAC6ro3P",
  "key5": "2RngkFr7VfKiH4PgbbDbNHKPwhf24Nm6opWgfHx9RGm4CfUuAUdm1WUGCpLF393DXfcsVs5YbE6Eb6BguYpDZk5S",
  "key6": "5aLDqsNF6R6o1nM89KnchGUGhJzpRyVMM4mwujcy2M7yjfbnoa4uWhJui3QVq89EhtdpEzM4FxTAhtJPkUKcaAwH",
  "key7": "4BEnVFZzB1YYk8tTWKqnSHikEh4Ln4pu64u8ALqbc69bofcZrCPG33HwNtGXkCN5DdMfoTUhMwbRoZgUgbVxRk2E",
  "key8": "3hEKbvxhg6JjRcRNBYCMsxCX2xzH89dGjqCTXMXjQmbVSWLojRfKz7eN5e9ST543AxD2fn56G4GabKocBqbExnvY",
  "key9": "3arCiheHBHHyvqWmDKPT9fjvokzToYA9A7MVsVUfBxrLtLnvMa8aajaEk8iU9Nw4RmDPoAAcNSioNcuy4WXonLzS",
  "key10": "2pEvDL3VzNKhDdTcDHjGoJXLr8eioiiYzYKNNHq3PBCz3GCtnwFjfrT2yLV4t3aBUpKJYaYqJaS5n7dwSYFxg6Gb",
  "key11": "4X6cTvw46y6WrNfp85pzX9GoGid967y8oBL3neqL9LTCXamYKVAwwVdqfCN9YfSBe6Q2Ldnc6XasJ5ahnoCgYtiD",
  "key12": "s7qFhWkdBaaZVxQFFybdPS4EwX2wk9owNbbPQ6pDwKvGSpB3yRzm1HLV5Fec7Lu7KjRm1eNmw8b58qfDDDrW3TQ",
  "key13": "61ZS2479nDf3fjDiecsBioh8txVwTiDhfnGZiRCunh3XLmvuqngj9gyYyEfvVNcRTC8Br26NUhT8T3wcDdpJfE5x",
  "key14": "3HEUfYCCYXMvBDEjLsQ8uUA6N9VQJqkW8UQjWHvuZMtCA9se82rXUckQmZjKgdwwKv2rpgJAo4KZrqtJVJBFBww3",
  "key15": "eZ4ps4aGpeg11moq2BWSPWLevAynWZ97kReF3hng6Mtf2JNPd8exwLUJJbVak5aB1MCEsavSDvhHXVKNFLwcims",
  "key16": "2VZcatjkKVmN2NTfgHdZNcfaZB5GUDywaxoUvvQh6Q7D3g2Zk6giVHzQpmfmQjSzwKM4zg2uPCSoRWjXdjoF8kAg",
  "key17": "mbmae8MRiY5ssxXZr1gyZSpyuXCku7NTUqrLUmXreuvFHbH9ojkgRNA2EY48QxHRHJ8rAvNUFhrFXJhUfn2W5S1",
  "key18": "3uX9AzG6RiRgMudUMGTxvowmvdm5RDtkQZK9D5CExHWui5mECrb3g3eaLdyLWdvZyqfhj3TFHJgGdxLhbcop5Cfh",
  "key19": "4qfSU7DNbwWsJxZWgSm5H7GfJHTeV42eK2i3T6uUgNEWEFdYTcLTKrWZh2Y4X4Sw3SChQokyVtHbpdh54K5DkQnH",
  "key20": "5N9oymLHG1ANmDNR56rgq9jrNgHyPQfHX3xjSYuCQG4hpBMY95rhqW3rvxNfknZuUD2rpYDGVHQgxHiAREHCcpnR",
  "key21": "N85uC58LzQ7XqJ6U7ud9XMCBA2wAy743gXUcSz7oXvDiHj4EiZXDwqXydkuCRJ56wG9B2xBed3EqrZ8di6sG994",
  "key22": "4KFxRo5cDUMz18WeUSSNAZGoaFHaFHYqFi2aC5XQ95xcDUjSKZ9HXwpmm3D2imfo5k1u5xVUH8BKntsCsWBv8qQS",
  "key23": "4Rp55KCHsYxRFJKuFQvXgsycbMUnPR2yRKKyroe3nwPD6FXCEtzBe4pjRjj1csiADkMeHhx6h9ae7gKXaQYAeAqA",
  "key24": "52ncsdrzewM9qsxDEwz4LPSyvD8SShJTcwHEuCi1magYTybSWUJzt3ioYv8WpGt4UVfFK9833n71DCQa3ZSmjHFd",
  "key25": "2rxVDcE8n1svHHdYu3dpwiQqdwf6CmCRRnWNz8NZK6FEMUhGQ3ce41L1AURMVszNu38VJKuucE7F7gNwyquu8MRF",
  "key26": "67jrEnhKMTXuAFYLY6poQGf6WkmTk4q9NesC6ZuUeZiyAf4P3cSKqxXikwBMGQxNQ9AWDhsjYPhCSZVuNMazhjW9",
  "key27": "45rDPqLkhjtQe6iCiEHFU4iuAiV6W4DdFoKHnqBwwhgf28fo7H49gMAhuYMtBSGJdyvXYs1t8S1pn5nePNLQdxn1",
  "key28": "41tWwb15Dg1tuPBDWZAbaidQ9oNwuiAK4VGQtgemVeyP14MLCbrjoqoh7LLEn4SqPZwNdtPLSnfiJZY34cX7uEU1",
  "key29": "5A5H54GGMRdjPery96QTTytFCFTCpyn4uHnTG71kuCZ3R84EoqB7C7WjCub9mCa4qjDWn7L958ReD1LmEoxH6qWV",
  "key30": "2jj33s1w5adwp7Gn11EL79S45StyVxTk7CgmqZUWMxV6vEQUqQpsG4PDXXMPQxxokkibnyCqYZVHppoDqp5sbtZv",
  "key31": "32wUzmUEdZwJF4dhTx5UWsdfNEBmGnmA3TobTu7PLKaubjjAux3JCF3dPUUR9zCJdangpyusNiqw3NnzAcuTSypW",
  "key32": "2VbxnwH8NGsvHSwxoEXK4eEU5V9v9VTeM9wZM3YjYgnnrKnsyGa3Yx8ptLt77X3LNAg2svz4afUUGzeD5zJqQrJB",
  "key33": "4zEMcCRP2VURhLikfkUEeUttgzMHCsRAbd7BopB6vvrJMus6ULpjDxVbwNXgjnceCXuiMWasaR9n7E7Jx51kq31N",
  "key34": "2xpCvnpXeurqfaKVE2rWEz7hY5qeKDJrmhCagg2gzkaGopdkpfqZ1fhrnDwps87jrv1TZPdfNvLX7Cj3jULGmAVx",
  "key35": "2tVbLA2rTMVN3ZYpnCiEcfQAMPZnxU19njML1VoZf6YHwjnCAHRB7o2ZiL5BBZXw5LRjfGXknZaMK9t1oRb5yYoX",
  "key36": "3c6okexJEViNp63Y2zgVB2rMoFW9KPQroRTYgQHjhqM9waGmSXu1fztMWL1sLb28BVkZmExY7X2VkyrV68Y69MC7",
  "key37": "3kdBXhdwWKrvjcbpFYGjgaATYzV4NX95BGzYbRZ2JZ5DUZweWqPgwwvVV7JZooPjujw2wJxUKZQZaWbsmk3bvQtU",
  "key38": "5cRahDaW7P6N6TKkLcLBpf97dzjGTHu5YmBsXbFKCtKzvsYXXYefnK4k2KayNh5RUtUYzGbvNvw24QhkLkxEUKvJ",
  "key39": "63Pdtk3XUVCx9hjjd9wnuuxtHWSZA8McrJyJrL4Ji5skunvdAKxK6H3VV14nCSGEBi1xoWkGp3Nkg78QEfCbzhpH",
  "key40": "2Q4Et6QWWe8eqN9xymj7D7jAodJvxR4XkeM6yXqmRzzqZ61ddo2mxCjmiVAS3tgjYnrBaSUKWwNcPmSLeJf1bXGz",
  "key41": "Ru1UB1Gp2qwu12vkDc1EYDgbaovDbfjHrrqgEXSFoUKvphFn9YWusoGZQXMQ5kp4kUrpnmj5NuScZ7mxkpvrzH6",
  "key42": "4bkp3sQNFfq1BqBiN3KfmP2WZbg4QPHSEdDC2F6P7q7FL3x2kqJZhMqmEgSmx6iHBhXifNs7F3uGapJjE9p8kdn2",
  "key43": "5vGS15vs7SzWYVg6YrkADvrdzUhcYvewRFLrWmJ85pJK9YmufVfMvyJh2KASaQ7Srjve5cjy17xucKJCcjE8F1o1",
  "key44": "34vwfxzvR47BU2tSthKpu8hWpe2zdvVRKvj5YkjBxrRHzLUPf1EwBVVu2A8ibFcpRnJuAshLh7EWajnZ7sAUK191",
  "key45": "5mPAyHznhLrcDXnW1hJzhRD1Q5RNbZ3HFqGF4d8AGQibFDkmHsBLWJqrNYvtH6Fg6zrLwQRE9cRpoMF7idfaZmwF",
  "key46": "2QXpsEUe2DecqYHgSfimfVQ8cC6iur4BywGvhCm9Z466FRMMpi9VbrGc38jxx4s2UMU7tDKBqzRjRMUog6dfAw9K",
  "key47": "3kdbKfoCRPhrACUxKULnJkbVe3y2YLCoxW9UdJrxo95Bv8bfbV9JZ6PFvqW4BEkKs5BdVKc5dMiE2BDKyC5otbE3"
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
