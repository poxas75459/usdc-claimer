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
    "5bT9UPUAxHeeBThNzWRP5oCVnuck91imH2dFujSTsbB4a3yCZcZAPWkyqp26B1QU3X9ZD5PQceunWFkwJr7Urrdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCowRXCYc8XXiHiGGa5PJ2D6rT6NUbpTnAUtPojyg6E8DM29XRTVktc5mqR1iFHgQDYrrf8SjMUXrqR6X4G7rXT",
  "key1": "2mFmwMfayJDdhYu6kVY6Q5rhGR9NAjSc4itZxwH2WPkKAo1nmHhj7mMe319tey66YxCfLYQbWDTvgVnCcjQSvMF5",
  "key2": "4LdgvanxAa4wuo9zNw3SkRQhEUboHa4oEgr1KLzdEz2WAQbP5tzHz4236XYrCz8KVigwAJCG1DbkVX3C5mrNaXUA",
  "key3": "5oAt9Qf7rydwhdoH4zL3Vg4rra8HqS4vHbXUjsNyfAcVmYs1Qcmh84s2QkHWytM3ER5mcLduKoFiBnoVxEufDqxv",
  "key4": "37UsVn2jGYcTzyjHJewfsZXtPFyTd9Cm4ZGkwhZUHYzZM3EC3noeUqM9HiQmBE4twYVF9yLNmUBmoFxDmNzJ6YKC",
  "key5": "2WkrwCKt9CGWzy8L56gzuD2yVQSB8mAyCH43E4kdkTtgh2P8kmRVgFa71e5tDPdyu61tAVfDD1NNn5E9GYYDdUM1",
  "key6": "UhfEezFcDECLtxxgTqHxxV3kGXgdhpwNDppyGpncpGKPXxmWTsHxGUzdT1rqGLnMpd78Scgtcbmyh88GVq5sbtu",
  "key7": "23q3Bx77S4HSan5mGhxSPLv52bqXDrrQAsvh9yoS9KCEEPTbUnf8rcDJKJQBWo2rowvMMG6QKbDYUVvmqjUpVzQ5",
  "key8": "3kLn5EQsHrHqXw1VzAodd4h3bX5cj22dDccqL18g2fyV9B2g2ExFdo4SeJYyZusaaoYsjGFjvqpPMcBKpNV6uzJt",
  "key9": "3gS9TdodVxdbMWhgno9EigkgHT7ytNiYTiu4MVgqBb2U349LnnyUTDwZ9toep1cRsuoNBiBM4Pd7kHX7U5ob7aZk",
  "key10": "2E15jMfMAn97m1xHqRRGnoWrwBT7hy1su1Fvi1S9kMMnZa3ERqcyV1AnhSBFuD8cQjP4G9aQmMAArfPTMXoghAB",
  "key11": "4ZWmBFM8F9LU94hak4TwhhVLrfhws4FPTQA2sRwQ4xDwqhEU73itNH6J8PiMK9wPSRst69oxFBG8rvmjHanW8eqT",
  "key12": "4tEhMTHnjxQKwkodt6vqrmEZaPThL1o3sorXbjPFBWWGuTRVtJtKdHRGPpJvJ2cFAR5UM122mU1v8MGKFGzXUtiA",
  "key13": "4Ww5KrzkUtqvUqQLrPexzu9g8bxCxK7Kv5shtMWvibNw16pcTjw7FAUagFB6jfWWkuVH4eVjAapPWdeyNHpsa9tf",
  "key14": "2KGMcKXEEZhENkaS1Pt6T7GZdvUYGNBuA9MVbrbV3CPq7hUhdvJbsRcLjQ8mJXFyVJfW3WwyKHqzwr8bcjwNShNu",
  "key15": "3gvN6KZHuvbWdXK1GHhvGbTobpJNCV4dq9z6z5hdvYTkoR6bK5d7uXPfLCGMPDTwhfLdxqf5Vxf6jyDjfGA6RQDp",
  "key16": "2eyfNSVAvfzZBNfvBdgF1G1dcgZnDL1SRupNCHZKXNiv8ka5hpELhXUU3Aw6sYRnmRyfchmhSeSZFCghXJS6Gh8F",
  "key17": "4QGy3p9ivvYG9Vr6cEdGvJ5ossYf4x5gGSpBi8J5i6D4tJhaFnn4mA2tHiKiiPtEAiHcw5nFz73vSLKdCm5HAfeM",
  "key18": "2SSNYagg1e9pq9cqzdnWSECVrnD5FDHR2iUvquLYMH8jTdHQpFuTQSafoZyUf2u7UM2yV4wTKGwKWgb267wcTunQ",
  "key19": "2tKh5WymhnG2Vhm5m1Ue5Kp7uqSxZsHW8vFEg5FDUA1zxv31aw1duNULZMs996kaCK7zd6tqkQtQHZajoV7fUXnu",
  "key20": "2FZ461xeQTF755CPYRdX6zmKbZ49VEFdVaGyvhyYrMXaDBGzCkYUk8RNanAVhEMFrJ4m1bCHmCtdkvxetx6ETnmQ",
  "key21": "5Kj6TdEVxS24LUcExo7NUVZJMuFBrQb5EHjkAxN65VrRmjRY6q1uzdFw6N1Zrcpj57HgyTKjnUkA8b1VsNiJ81iz",
  "key22": "BqwVQeFE7GJefvYdPcaDohEeoNGFU8nf3twqCXZWKnBut6AmV9yJPMkBdddoAoRdcz1Evjhcrh4FkAjw4WcRtkq",
  "key23": "3qAZfdbP1ijFMQ4YWRTEp8SPC8qaH5PrsuSXdkG5dyZGjiBZ9tgmGopUYpbQ7zNwAX8TWXDnYZjqLeVqxxXmZt8j",
  "key24": "3F3NsLPXxVhAvxtHrvT8KqVvYNsgcmcHUzojHQgpGGQ79idoqTpq2i54gYdpHAKteEwje4rHwJgaDjxSo7MnkbpF",
  "key25": "39fuwsaMBs1ySzvXs2acaM2Et7zcnw4ooQSfuZqKA8bhFMcKP3czaA4Fy2yHbWaApBQwejcLKd9LW5WdK1fK5k8j",
  "key26": "2MJ72Fqddq9Jj68KKqaB3fQcg5X1Gsf6nxJWqJhENoaWp4bHNQwXpxmEuCi2k5SYFrEr8ABFVwVhFn4nUrnxDvMg",
  "key27": "34v9DhGYy2dwvmJWMEwNmBickKhx2r7gtfw1bv1uQVdhFzEASyNm3iBriB8DYoXtjupvhJAUD6AzAqFhjunjmVir",
  "key28": "27wJEadF5aUQiSEnre4XBeJTAkTeuZyuRGHGyRV76h15RCinpNU3SzTz3bcrfbW1nSggyxQmzrRFdQnEqaoLDBTC",
  "key29": "7mrjVqp95kzasPr1uuAmVaKBCxk1SMwjEMbrEtcgFvjNo9jKosbDgmsAoRXGvohnbncDzshRE8SWVRfQP8ef9sA",
  "key30": "5tHAXr8it42VTJ9KDMpdyZeqsit8VDS12SLQF2NRanKiKGMPhbjhpw3zato8CEuApo869gDAY4wqci2Weix9grBA",
  "key31": "5oBwfBQ36iYqxA1o8K88X7mAvs6maxNeqWUr8qfBc7Ht5NH3YWpPZCYj1E1hgWrHejApBfLSgcLchGJq2BXYjdyq",
  "key32": "EifbDxffvNgbf2PpzSRbCFKt9mHf2uhJ8QKsDiFeKZquhcaQ56v6ZjCLgesnpcLfYGSottgYBEu8q18NkXDeKof",
  "key33": "2VMGqo46F5b7e2zTeqVubPzQndoVes1v9bv5J6JHjw1vJvehGobjUzkzCmfuR39hsvL5K6avXdteSmE7C4Vmi2UZ",
  "key34": "7PM4FE5KJ4RcgT5PhfP7rLoUf8tDPM2BAgGjh9vuEjF56VGWYX4XStrrJnp9zjNzq13Yb14A5czvCi7Ge8fCcGX"
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
