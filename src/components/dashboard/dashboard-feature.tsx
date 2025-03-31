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
    "29DmMBX2U6mwVvYY37bp1muV5NrA3TezCGvmvnSQvvTaD9Kzry2xsWqgaWEL2D3QxA3292rYz7UscwQN2stRoxnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lrz4UVbGDJghigWEZdHCtNqWhMk4zBsqEn67hfaZk2GKP5uDjJwYuDGtLxuJid3jywhEsvAnd6qPRhWpRtXEbpx",
  "key1": "4rjQpFXBou5JKw7kHzynoRgKPagC8b1HnDH2c5N6ygoKQWUR1BXW7utEvxD9FX41w4xXshpJtLRtmfYCiu8b5AVb",
  "key2": "4KH1wPgMquXLPsrmh4VWxXkMX6UjwcdSZjwKT5agP6u9gHenUpXppxSDF8tN1GjpgoWdaLhumvgDSy8MfXjV6YEv",
  "key3": "2ngVFvkvxfANYvkMWf7rbQsLXPTS7mNSP97LuzE8vCNiZrfx9dtWhPxTjYRPUnbUJweBgHQQMxxxGVpbGSCbhNKn",
  "key4": "3m7CCweTjTgX5yenjKXE8kSw5Ei7qAaJXn4MtWUGb1Zw33c5h9kGVDxCxyjNuodVtSdCeP8yRbxt4qU8FbQ5YT1Z",
  "key5": "4447izU44ww5B5TNVQKigEHhEi1waw2dhYx1KQGBNp1qiFNuon6JZTnufEzMRjT961ZbDmu8KKbdBezro6eY99F9",
  "key6": "2mBZqMSbZ96QmA59Cy27HXC55EjV35jqUY78Qs72KL4rbi13EwVkXnY3oQQCj2GFpdKef3Pj4TMkH9ATEF5CKA7a",
  "key7": "351TGSLKTrqsXegLLFFHLy3oaPct5rP1gEM8Rgd2cUAvnEfC3PVpENK6w3Q7q37z9ZZUuDUhgzbwqZiebZDaLamh",
  "key8": "3y5ueizJVRVLDHzQo3R96aD7o8HBR8TzXKEXrDxHzuaCfgpL2ZuBwPgjNesAoTfWh8hHWgkzxrqTc5JmvxdTQMRc",
  "key9": "3ZitwEeTDrNqQYgzNLNjaAfCkq4FePC75g49msxnkXL14pXuzdzD3nVd7vFRgnFt1CKZSQ9WXRQDrDT9LWxPDW7r",
  "key10": "63GTFJFeTrZZ8DUMU6JnexotZcrJDagEr4anpeSRZP196WW3Vo3upPRbg5DbdbtzFX6jPwUx7VBCwecg7hmp1qRu",
  "key11": "635XpAPqr74zqTyoXrSfSkARQ2xJxnxWDnDGLRkeMz8VqMusrLcJyoaLoX3RhnpbUrC9jtCSws7SkgStyhEcCb8a",
  "key12": "51ePLKVryohcsUqRdRLfD3JF9mxeSvaMxsjiezwaqVCP3U6HFgY8b8rUXTLL7vdavhZWTjWDon6cwjvdgxjPUssV",
  "key13": "3PAkkU3mZZreHuT8zR85s6dRANsH6KNT517LUVGxUJSPZKEE8bixKrp8aZGdyqotZyYQAPLifixxbZCSskRA872M",
  "key14": "49MauWKANh3QX2Qz23WYxGHoYS5M12sB1CRd1uVX9ZjyTv8hv3M1nw9qRRB543H9AoekDo5M3wKw9BwtJcnfxcnP",
  "key15": "4tkR8msQUgPVztuweN9PwkR8wGUx9nkwLqMT3cd1fCjG3fLeYvyzjLohm795cJiziJMDB1aKfY4fqDWKFnrMZfQp",
  "key16": "3yq5dsDGTo3kWnJ4Q7KiTttLtAf8TggAEcbYZZQBZXCxyNRkpadxxqdtahcXBzNiQ1enNMiAFNiUxJnQTZx2Mx6k",
  "key17": "3MTQWBKk67TV1UEj7GNKG13GF65bEau5eqKh8BUgeSWv4xXwNi8SSpeFqkVwvrAk7i7QkvVPCPPuvg91LvprArkn",
  "key18": "5NvgxQcDjPDVVaWEbDGsGWpBjcFGsKz1UyU4VRkoe3sXB9puUNRD1LGe265aQdCj1mHDdpgeKmmKjRRyR4MXwq9f",
  "key19": "ETXXabLMVtxSdWDRG2uLXRWeBt9WYeKViyXRFb9F4EzxgX1EAbhDhRKELWn12YqAiFuVGNbzBm3Fg9dXjCtj4B9",
  "key20": "2i4oaisPxpCSAK2eZdQ12p6j8sigZezDgsFGUdMduzv9x9oKjEaAYXq98eeUcYBZy8K4kQX9RoJjri3vcX3DVNNs",
  "key21": "37G4ejsDa1sFQxGmYc9FuWksgxe38F6Pkd7US6y4mFocEycQMyxE251XXFG676uGFUNqtod3e1mL5bKqMCJ6vpa1",
  "key22": "2T9cPJkmd3b59t2dj6ypp6gt8Bvan3yGjWMhHqrPnYHVw1BbByZS3CpMVEheNj5nQUnA6rkBguu3iUzG4w96Mt1K",
  "key23": "5s4JPtaJ2kwWgkkFap68Mh9wuJ3W1fMTKmkrSrxfP3evQWh8i28MqbEByVLkS6WEhKFV9LUHG52d66vkoBGB28xG",
  "key24": "2FnRFJ8eFD4mEVu3CA41kazjCkvAAkSVS9AAwXfteo94j8s6rdGuvcRqpK7wkVjPgNP4gAJvjGhTBNwG899fJrWP",
  "key25": "3En7aRHmKccDFRkjp8KZbh5FfkC9iDurXEgxEBZQPaZ8sWGyrJ31ipBN9kxhJt1mZr9rbLJh5m2J2jGxbXyG4Kve",
  "key26": "25oSbR4g9D5dwZJ42GpTZMUUL727L2NY9p59Mc8iteMRBxAeYn3mUJdnfcQvVotzmCx6Qj3diRztBeX7Uqx2vVzk",
  "key27": "2oeaQoQwhZqVv8TDe5Pp9eab5zVtzv82wmKpgn6WkssuGYPU1gqtTEiJ9PrTMfWSaeYCk8o38YKQfYv9nDm9S1TK",
  "key28": "4MCmrtZhX9vAWaXgLtHhMuywY1xFRN1nDXCcej8LT9FrtsA25UF5nwJv5LPpjZwbM4FFSpYeoh6xBPFFrgcM9zSF",
  "key29": "3HzBY8K7JMBs9iVhkz9EYEabVgAwnHNv4NVw7iAKSakBDDM42biCJa3oQ6b8LnrgFsgH9JWzMc88Tg7b6kJpq1m3",
  "key30": "3eTdTPkvBnKP66MD4yrYRfhnbJcgkv9Jn21oEHL6ECqttGeRroGKju1iJ8tEmQCeYNyQECYziEA3iRTFLVKa915o",
  "key31": "t84qu6YrmzSJUdW42QingnB471bxfGDhGSC7vZ1HcZZNyH3xu4kKgEAFJBfiwM8iaMirjDetMGEJ8QnUiVeC4As",
  "key32": "3tffpdjt76sAC1ymma8mA1ax3GTFmqZ27N8yfCEdnf4TwgQbPqU42ApTNQAtZYBA1tGERPqgzJ3FjWoAfei5vDHK",
  "key33": "54zdZ78WqRJJUyUr9zCgWQyzZ5aa2PweySD6bLKUiStbBFcqBj3RqcRQbkSp84FKGFJJFFW6XYTESKg2oPqSBmBn",
  "key34": "4PHR9tTrHtwWSY1b5UuiBMJkrfoZ3E9fESzJ57EHkHYF2gQmF7ECNoCTqPyjVUTguLKuTrXqa7Hx5oA92JzCer3V",
  "key35": "48EWKi8zVMzTiHB9oUz4zroqzKfmnW1gSiekqwDwJrQTVq8N4vGawvugRWfWxipzRLYSKBiHve7djhvnbidubzkP",
  "key36": "3KELCWWkmwP6NrMoLeNCWmkGyaz9VVLzinugafid7a2GUSYejGmbbSmYeQh1x2G63WE9U1avxURGShmFW5mJYBof",
  "key37": "5vKaC3tQNuRDump1gfPREnq5xySco73haHx9BM2cmGKbg92NQ8Xa7zNJzCBUtQoUi9b2QPgMJUcxWYRsuJamqGgS",
  "key38": "53xBqDVohc6ePRgXPVDQoiVzPukFXB9QJsnQ8fgzAZDHfM6ysaxaEF4h8CZQTKKqLofrUWovbZiL2yR16uxJbfa6",
  "key39": "4sUGTxynUPyqZjmYJUVHtUFjVUEjsgXWtPqdQGHAPwvG54LvSbsUUtNSdTqdc4Hm83MvA2oc3R2qVDRQfoJTS9ua",
  "key40": "2GeJB4KdYh4gGkCpGCY1szS8dL4keDif46dRhayvPhG53Brcqhi2BgChQETtjnEK7N5Su9YGmQzHpG1pktbXVHMp",
  "key41": "2HSLpmZ6QAn14as9ZNRjEUopTPs8NNwmGNKVPi8EE6BB1js2QpHDzdcqGgcdYKmgS1DxxQGH5Ywu4Jvw8MV6cELv",
  "key42": "3aSV5xTpqcUTXv4AV7h61GR2kZHrL9YZDVAG4r9xvPPXQpHikAAfym3n1JGhgDDsVnPfY5BQDNZYtzyCNqQs98Sh",
  "key43": "4kzYWVy328n9EAsKUNDsYDeKbpJ4ogVv9GfAQsgBVXi2ENEutJvhzqzT92T61caYiWWAJQe2zBjQEaHM8CxwtnGq",
  "key44": "3c939zJZRd6jH1MX1q5w9HuarfX4F9qgCTFSryMgXRwfutvo8AoLCL5obbm1JVe1nbDX65FWVxRkSFJHe4cL5rFM",
  "key45": "4XQHLA95XDDTdGZABTtS3sH9s4f3VGsaudZC6dng3KnvwyT51v9Z5CyHLf9ur3VfZkL26i2jTjTmcfBNGDzZQFp5"
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
