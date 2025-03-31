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
    "5u8xsitGMVmyXTiSTYpQaeDHLMy3KzY8z5u4WDdzqtK65JyspgQHemYWCLb6k7htLZyAhwu4u9Y6Z2ZgruXtJxKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxPbb3cN7q5t82SucgP2vQYQy5j2ipSb2srHSEtDkg5Y84EqZS4H8zJ3tQ7a2DgzbLbznUfgCmr9rmT4nCwduCM",
  "key1": "4VFmcyAuRzyv8qTdznUbERoJitdU29wPoHZTsapFgWcNkEfYdpZN9KpKHDy2AxvT2btEPzTv8K1homv8HDNnfEpe",
  "key2": "3VrHoXMBFXbfe3WScwELS2aPHocyuqhBHdGBzxQKT1dAjwfbwcaTnG9byB2SPajmFZ9pVLjBeHtBSYnkF25SUyA4",
  "key3": "m9WkGFihkZ51dZPSkhvZD9uWZdHX87xzmq1tm9Z6bPnSCZeNKttB7PxAMyjzi4dd5KzPAC2wLHNVmVjA8Nq9s54",
  "key4": "5JXwrXmfgVaA7shm9er5JjUpSH77XvSXWCHzJCSuFZMd7UWKn2JoZMdwwXuScFhwHgztfM2ymYB8Eyj4eJNYMApy",
  "key5": "i3BFEnRjNgJpGrhiJfETnjqsB9Ldnp1Rc33P8NbU91VM5osxwfUaRvnMvdNiK5mgEbnMa6bLwL7RHs8g6WGVzeg",
  "key6": "28DAxZH3FodCeSXsRGRD5EfYHaL1KtGwAUVCW1gLF1MVYjzY4cjVR1yc7ZQw7Qmf7CDPDKoFXF8G2Ca1mtk2SBcw",
  "key7": "3aCARXVZSB5PYvGeBSy3DsQ1bMiU9pfxgn95B5YTrmGvAKzdgXSYuMb7QihR5Y44SH6LW5JsMeNjPFsnYj9pZn9v",
  "key8": "21ZVx1KG9Y5F3MM6RyEg8ws9MtmHdDD42ZAnxDb9pfJ3yDGvHsJD7TvTsz4ZGMHjR34xyq2TxRmAcivsrKu2xTM6",
  "key9": "2yLWPmNtQXTtZMmry5qUFGdE5BB1a7YzrrAWz3JWKGkRmZiSkkpBCEzhJKoXBdYRmLXRH4bPQEDFNTPD8fETo1wx",
  "key10": "547QDyb6gbNd1uAEMoQP5wPG48Q78pJ5Wz3WVECC4LVeE2tRZYX8m4zBmXrLi53nkNJNkzRtq853kgVjHYtnZxxH",
  "key11": "5JTAiWDC3ewDCNEVvbSutogrBaS9u93uuWoxbnwKUeFK5VkrBm2rJ8B8hGL5tJ4bmfVtEz9wfnfbjtWQMYf646PC",
  "key12": "xeNUNW1khR6UjYGofG1zaXdk37ETJ6uPCiNTgRBkszL7bQ9DsChQuEk5bFRmurw3Caf4oxymrs4Xfv2SUvBFtPU",
  "key13": "5nuwTFQUJKhf4zdLYzx2ibDKT61tUi4TFubJ2fEqm2gsjafhdMExfPNfpJ1z4hicoaFDVM7icq55xjZQe2CfRXPB",
  "key14": "2qZauERzCmzsqRKxL3anvscP2bpupTSgCB6KQNuvoLiXp8X4diNx3S4t338cEQCwUuULc8FT5ictxynUJUvsW8oR",
  "key15": "2E6a25C97G2YxFuRPHPWahFAESS3DLBsAigvYJPQ7xTVY5uaGwcWzhqeEsb3Wz9puS1KxJvoxzdSvm8aYNg9AHqU",
  "key16": "4FWkoKruKXp8a7KM7Ax8ArCtNHSM6hbZFy872VgAqyr34CTSRveP3QRUuPn5mVK6zaMgpfj4pDAoh4DS2kEqYcKA",
  "key17": "2J4PApxtz1sJvNddrcKdjRsSP5YJSBHz14JVqeWZacgf2zFYNnnncX8Vmrvtx9RQmTsvKDUAXyY6tqgtvvz9q4Kq",
  "key18": "5qn23BqW4LYbdJYviqS7UXzc9jbFojU6ZPKvBFQ8K64nZTu3wGGsRaZdCm7vpvtFcFDWHddGC3YJp8nD4PfHs1a6",
  "key19": "495KvtqNZpW1WgojBW8zpKrmQVVhBSEAG4mGqhhvmCP2kKhhaFSrneoccN71hZ8yLWTZGPqeFRnNw3yQstArzqLm",
  "key20": "3XTxoaVX5SLrHUcUFifLvGWvQuEJq1EzF2kjq7oCyJ21PbgFyDKWmTzRex5DsSsSZerdu5W7thC1Lggqae8YJyiF",
  "key21": "5oZhbnui3dSdTX5r6Bbms4UfV7Jyud7pWRGjvkQsh5inpe2uHmmeTC6eHgdqtYFpoB2wE4iRMbRwtk9JHfAtsNkm",
  "key22": "59P4AyZ3moeyeMUcB864Egk7tUEa5xSBwdAqEfQLtr1E3S6d6h54PissNqcyCBae4FzUXWHPRHBJHNfD8y9Beawr",
  "key23": "5W1BzrSWKewaXwiV856UoU48AEmpdwnaenVgZZiM31YAV2e7sc3u7qc5u2kKjrAkDnEZAz9m6SWnyJRASDYYbBsP",
  "key24": "5KnwUVR6Hgpa6ayYTvCmJ3pJhaNuc1YNThAtG3wmzV8DRmdSKSTc41BNcnZFW6DAKDqw1mbYiw75NDvF9VG8a5GG",
  "key25": "XA5m6Gv8QV4cJsKirQxJeNguhrmLM5Cgjm3PehZyqWaXSUe2jRkLBj4BTUDZghz6ZDvoUj2TBoUfuxVABLM2opU",
  "key26": "4W923NeaGHD18yyH7BMP1Hg9eJMAAai2V1RkwNA6x4N39xNkziTtHwpjMARxLdvkAdFM5enJnx2LeaJDMUwuGGXb",
  "key27": "5kyFd9iCkWPzyUXfRTn3ProzEHgxs7Y8wtDid2mtivBzg5aPb5U4KRk6gxg9aK9GS3JSwvDczLoGJtwepogjiiDR",
  "key28": "3w4rD7w3v8cucVXmeYCf2ijxRtDJXakBdvsyxn1CYcfrkChYE6TcvMbB4KeBq6KZY4FTpiHqYB5ojLDMS33fddr1",
  "key29": "5z1Ah4SVBrHwUcngs8jW2b2c6sCnqWGhdhCsyhf8fGMtsUySRAJTCjK1bVmKsGRe2MFgPuoStrbCHnpPno3r59ec",
  "key30": "2JaoWniZBXYUnV46Lcbhs4zrSrW283ATRE5LFb4aXUqmwnxAoe3qemnyCDdMqutZR2sn6BBMh4PoBbF7DeKn5Udg",
  "key31": "55edsUDaNodKt3f5BiQdoaLBcjafxkdrquhaY2UN1wfXybGYGV4Emy1DK4Tvg75VxQpWQNQiUpLZJYfVPsUNJLXV",
  "key32": "32bKoPRXgNyXewh3hC11L9pxMLqURrvQvSJCyrRuqyg3H5vS5XtTCEt12WjKTVzY5f59fm5jKv8KMHbsWmnpybdY",
  "key33": "55HxXGAfiMAVXTjyku8PbT6G61pK4b42pJQMLoGbSrVMq8yAzdCVGKrxaesBSGkxEbjVhyDmrHKnSwxpKC134ArB",
  "key34": "T8Cv8hrBEaJTnj39CUjH69BSHHVbY985dxtNrpzRSAYyCUshamLvP4ExL3q8UQspS5mFXgj7B7XTTp4j7x7B7Fj",
  "key35": "4qwzHLiA7wThEJQcHikqKV8uWVpy9WdQMjDYmkSgyrxVtH4jLFQEwATwcSGYDPE3z1Kaomppdo5QdiFGUwbRy1Da",
  "key36": "3spcHZ1Wuy7RB258y95xjazvgojR8iLHpR7XwCT7qmudLFN3wx374DcaeWQnoqiLHLbWzGpckUnYDhZApxvQEoaR",
  "key37": "3X9vRLVfmB7DHWrZewfUXs1bpB4xtAeXUC9X7WsZx6typ2SGoXt3vfypvxNpj5rDu1g5fdkTxma8Neovv3mqVEuE",
  "key38": "363oFgHf7XCoBYwVcMn4eQvMkG8LrF2V7gsPhmeXW2bXQQh1bq2VJMotzgwTeMC715Q62dyfhigwXtCZ33xpicSA"
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
