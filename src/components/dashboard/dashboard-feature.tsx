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
    "PHdiWEkDkNSUnUahJUz3Lz4Nc9GsFGWvcLFtFmx3oeJG5wsXECn2c8grEA2EJw44rcasTQDfsfjGa8Xh9LcPzhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oiHgkgU4BsH62tUZeaR5CRYX6gvCy4Bbo9pkFeDxRi5Wy3kvcUCU9woDQ4Lf9n4QUqLvMWdoRFX8AX5eUJ86KEs",
  "key1": "29ZopgyHqejBm9T6Ni5o4zuzqEUaTnDM8YKDft5berBHmnWzKVWpnNQFQqL5Ae9RRSxW2ZqzomV6jV5xn4UWQswE",
  "key2": "5wzicX4XGnoa2sdn2BWMn9a5MXdRMKQozDs9bDrrgD1crfFC87SPRt7E3MK4hmqWVACDryyWWEJVqHNxQEyozcUz",
  "key3": "2XJh47HUqsHm7qe8yCrsAPtR1sNU7pePD2JR2wUePCXyzS3RGuzrtm2JJ3NxoQyr83MS2JVD4Z4zezbRNAw1t3Sb",
  "key4": "2TKPJt5RSA2PVtePZuHjr2H9SkQGo9gneZdBjcaV5RMWXAJGmEe8sxA4bpWPjzfJLoXvUFfbbij1dXKV8hz2RWFk",
  "key5": "CczHp7irUn7dJjKbSMwWWwM9nJJPc161GVCtVvc2mAx8n42dLE6nsFvu5SigJSBFfBUVxv1Kk1RXanpV5u9CBfE",
  "key6": "4Z6eAJcdGVcHBVdpt5R4nSJRQBLMfh1G5HMnLQQVsoEpidia7a945gbhxCyjAQFPeAatPHLAbwEry7GCufE2mxTf",
  "key7": "3Ub6htFpZ7A9gQ2mMZyB5vBCby4NBtkj6aTTXEB3AFTX7mjZnikZJbbmGXuk5pm5RvFtJTBxyRCeVLHQU8XCskZ6",
  "key8": "3xp4gyrpz25qHBwsUV3H5DfRWTFbug1w8qNDbft6UpFPCTPA6H5C3ZrFLTZ7ZavSRFv1BvqJbDgvABwEyqJvAC8L",
  "key9": "3ZjHpYwQCNDBVYHWTwfkKuGkNemDG8fUqYxFDfr4UCSa9vqR21Qr3f9awP9YfB2Bf88H6VVNvJnCnnPyM3M3sQdU",
  "key10": "5rd8JbKnsxHG5CDjPLMBreCuLrbL4EJPvtSjEbwRzCpn44Rd5DHs9vNQF6X6w44hbmCVuvHiTZP7NGr6g2qzDuab",
  "key11": "29xUPdQZ4yX1yfEfBad15AdoXRtNkevVVLqD7TzGqbGaQYAHBZwKXDzRAmQCgXmg42nCiZJWLkWfjhbbY4EFCxyJ",
  "key12": "2NmaWTVyTvmebxSWEjghKFAFc2jK4N3qAZZ2He1fDVien46iNwvBDzwfEmWm6xNxv2rwdsX1UzUK4eR83sWS9P39",
  "key13": "2CY9UNCVSiAf4ciXwghLiQLFhKvmbVLYJYXwUh11Uas4kgzoqBFo1sx2vgLTLweeKdQiDBsa75s2Uxwb2F1AvumV",
  "key14": "3AABuYbJ6iFJ3W248HzhXjtVnhUiLZb9v4euGRU7qgmJUK79sGkQkyWQ3zdPNgKcp5PBCgvby9RYG8EZPNnPsUc5",
  "key15": "3z6YXDuZ82FyqV7BBKeb28rYsGtJiAdTEKK1hyEXrALWJR5XTvaSrJ7qHp7h6C4G1MLpdadWkhCETTitofR31u3w",
  "key16": "2kq4hYBGgWACjVX9zyr9h5aXmANNxAqTdG7jBNbKY5mcQcMkG9KtzydC6nyJaA2GnN3QsXt79hoeMSkFUazbLkkA",
  "key17": "3KkiKMdoPr82HyDwZvFWpWsH4PuQb6KXFT1konoXnNCDhLgcPcwuWi1FWbUQnHmGZetpL7ZcWc5aKPG8DgSw56iw",
  "key18": "5kuN7pBYDS9FZEUTGfyq2sC9R9L9jsSpKT1hw1igJL1fp1kiY6YmCkBrDZMsoKYXyv3VZCoZ6n2LDJjsj8smk1ji",
  "key19": "5akCXbVgmV65CeaAJ8GvW55m1SQLnq83fwcTQCRkCB6JyyRWUVhxRpfChRf6nnnoatzvoiv9aey6cUif783U2aoR",
  "key20": "jsXSWw2vz7TuqRXfJxqXbECr1HYQzvTyJTeB8Apm1uRQQ9ywYRUwXQCkdqCoFw9R3oxUqEEVVugxPMk2gJ6aqSS",
  "key21": "56VuWExhS6FfEyPJKufQWVtQUTiTfYAJzFNvYwzi4j5P8A2xqsPnbuQ8yfE9H8WxTgyeheTG9KPwbY5upTcAbk9v",
  "key22": "5v1FyiD9QMSXbaHDL4fEWsLEhCfY9t7K99vw8r9Pty5sBWg2VZtzCPQs72EkPfbtevQdUUqf1SrPZdAS472fSK85",
  "key23": "5S81m97VFh9Xv5KuvKbUNo7zVj6Zxz4VMPCAkycfus8yqGRkUUdRRWxdq8ahQFhTw6CxzGy6dX3vanqPvSNoQcZq",
  "key24": "34zdD6v5VQEMPh61Jgzpx5QRTHLmc7FjeTFQe5VTbwuJRprjvu3xx7yjZ8h9Jqec7cazBHP47ZoYhQmNkzGFhFxd",
  "key25": "23qDdqAwCgfzgXdKFWoeb9scQaXtiQwaf6eSNc1ZQRjqg7Fc3iMMLfNQ52xqndwVuycpgrg636Xt9u2UQJXiBVcK",
  "key26": "43dcGyoedawKCnvecQabygxP27R6QY2VjqaGzasEw7ukLBLiYZZ8irj1Kjkgms7VUKhHcdxnutknKurCG4mYXxzo",
  "key27": "59fvVrJGj87jfDnfVypt3DH4b5SSSw2eQoUxE5QyvRAmxsV9c9jrNp1ViRtTygERN14HHzXxTJEeSJncAZYZaZ7w",
  "key28": "64rzK3cEGWDw5AqkBXwX7tCAPnwycTp2NTTWaTVW9c6AAi5qoziP3QE4o6MMfBCZGiEGa2FLGembt22uoCf8wDWW",
  "key29": "QFBnPqLRCcuMGMcYsC6RaYgxFWKNsQKZF5rxomDsTK7ULVvpXcYaV3xf66irxkbsYRvgh9qcJhsv7UpyfpwQsQq",
  "key30": "3Q8TtsvUyxQ2jas6pF7ff1B4fPvGnyyJd9rQwNJGooVL5wgSA8kSxfAHBsW1sszPc4m1nJGKcMvfqnrwejFbFtvS",
  "key31": "2iAuv8eSXWoXxeepKpNgVdqgx3UCEMEeuhHPKoM8Jtv1b4LzrW4MrViEHkuZwQPDeoJaNvtpjafho4FLEGF9W77E"
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
