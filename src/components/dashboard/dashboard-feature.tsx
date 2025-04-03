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
    "2n4ecXMetyNXMPVGgwtHD2kLnmiq69Zc6soMrpxYyB9ZpWnvSc3SDzfN5vwuNG64cyUDSvUE9AG3Rwjn3aGRdhL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VGsEErbed4gABbfkUrMYCdNRryknkso3fHPj35B5HoQhG6aB9viXzxzFZBDj3c8fddHZZNxeb9brAxJJ7QouB46",
  "key1": "5dbF7gKyvHE342hhssqgf2wJSkPSQkpK3ngg5ZFTjSbW4dwHgnGJuvjLp3RkZfHi4bEEob47gfFuxa2UdZgUNNis",
  "key2": "3p3VcMwM8WQ82Zn9UEbc9fWzzXcWt4kaTqLaMt3KVcLFJJ7LP71NowjVXbAJxEfb5aT4SCFqtvSpHsa1sJgAxR4N",
  "key3": "42fJgoZsCf7TGXCyy7BrirfDr9Ps3dF3x8WVKnTVmAnXuKbbKKj6h19ZaGWGeUmLL7oowYT7i42BzuHzdsiw1Vo1",
  "key4": "2UU3hdCUWAWCWhRz46KSryo7mHC8xQPrBqyuaUM7AEAmHQNYjtYGWYfqfxXtkJagcXQAQmtUoy23xMVFpL7J4Deq",
  "key5": "5HHnkiXcs8c5TXcQfcaYBM1gBhVTnqDYsEDgNUvBwD51RpRAT9vtmLJfn1mikroHpPHJ7nBr16ZidW86UgNzrQuT",
  "key6": "5VwFv6XWa8EUP45s3yGd9PCMeQcuCSRFVfyJuidotxov4tVnUK6w2ZcVdz5YA96oDhMa2eHZuv2hHJoqpdh4toWD",
  "key7": "3E3LdHsn2aFRfrXUViJMKx7aPzH4ALzHucuscJdMTiRg9KfAwFyMtYVnsqMbZjt6NoH9iBkPRfcmA2cVzTNQod3U",
  "key8": "2WpLZzz3y2FVtZTM7vccfif6KMiGBwre9RmGBLqiEsWK1xeFd1Z8xntXLbXBsgd56Gau9jWAGnQg24zSZTctKMZc",
  "key9": "3rgrqgJBkrYeBEM1EiHCyt4fnjnr847spYJyucYL966cpZfFd2eGzgvBzBJKQChZ5GnnKQdQfQgJmuu8TLufYqkB",
  "key10": "2saBpx73kiPiAoii3FnMegprwAtwHuUPkJt4SDx3PUFBmgh4AN64DTeAPxGfpuLfJLtpnnipr3cocVyzLycjEuiV",
  "key11": "57XMrTEQt7vDE3vGZEq4UJSGvdW1PgKZjtgtQNr3KBva2oGinxLKSEGpuqZ6Gzv3THQLYkqog3KNBxMk6xocqMZY",
  "key12": "28uf88eqxVLLQUApcKMbuNupNJDRvZaxNhGNsFMaXvFCXqCdr8NDftx3arxRa4WK8CqpKPvjiCtJFpXo43C9JgzC",
  "key13": "4euuV7KasoaxSVGUAJUMa7wFmVdQWjTuhMXKAUzzg7mvHAA9iabSJTg4oV3TsyCHMgVAoYfYycNJ3xn8onzrPmFg",
  "key14": "991qTHqxHRpTN6KXQVGXKjxD9weJwkPdbMXg8MF27GPkiFCLk7DQ6visHAcKaThTfHeAcT8DbE6CktVjEENw34E",
  "key15": "4SgLiwdB62UUwc21zQ4wb6eqFmfUMAZRYez5RFMm5FdaGcN5uDcSzJdYY1mzT6npAZmie85kj5W7sDB5b9yCuGVF",
  "key16": "2TUUdVFfdaU9wrai5ary5HcYD526wgRidFa54RNupD9oxjmtr5exJ5mQMdDquffoCwNsm4yD8tmLoQg7AsWUwvLx",
  "key17": "3AtGnTTUaCb4ZqtJmLjkC8b7XqedzCFCKGxCnD2JxBitKCnj26UbiNv4qse6jnhnXxDSbediB9iiR4517KW3X7DR",
  "key18": "43dV5ZLEeVQXtkvC4zws6iJCgaUP5MCWwsssYugYJAGaJWdVbzuwawMJKVvxD2iLbqdDEDMsZfa2F1P2v1rq9RJh",
  "key19": "3QVPmuzE8AexEwzeMc6P6aQ5Dk9bHgkPmNYvDYxsDmwB9jSqcPNCYvBgBLeYHQCiJcBqsPupDUsmbpChKTwBMSWi",
  "key20": "2JQYduDLYbVxmLLkxdQGsUBgKAKrrAxaQw8t9Y4s9kKQux3uNaDrty4iBg6Uh2QZfCioCHVvFgcDsLuGrJe6N8TP",
  "key21": "4yDBQV9xNofCQYY45noV9eT1g9YP8kwbgAL25sCrhQgpqfY5qy78mbKah7f6fYGqt4m1Lj2pMLShtNtZLpvDZVQm",
  "key22": "3RLFnpHFRak6N6FxMbs4AtqtGMX6hR9imgJgDjcDiFQb7cbJZpQC2RDkzNRjz8NaTtbJVgpsY4Tt8rx79nBKnf6H",
  "key23": "3frcfDAr6CB2rSN9wcaAjDqPDvpxdkzvzuqfxxxF15TyHgiVsmDncnQKtCp3pNdi2ef3dZMHKxCFM8Dpc8FtCz35",
  "key24": "4doGxWumdgD4hub4N3hUfViJPkp18yHmRbRu1ZxWtap2c99Bv5qbr7wmc8pk3HKyxrTcTj2g7fGCE1mWc1k4xy2L",
  "key25": "5NuYVfkZTsTvZ3Rb4DJcQxBSwUvfnEEGzyqVumRHAqrzwUcBPRRkdp9ZgYuPu8CRkene9eNYQuEwTy5dHiERKwju",
  "key26": "5WWnhuCApJCe6ejjdYCcK7Q5QkcnKnUyvyirBtM3p43txGvauSde2EMVjvJxiooqSCx6m8Nfzbao7WVpBsmy8tAD",
  "key27": "3YfNk5fqtpJ6ERiZKSBe11KUf8fZ8fkgX3BjVdtXkiZEB9AhZFVyZgfUPJmazuZhid1179g642HbQQkLMWZvxPQT",
  "key28": "3d2xy6wZAg61dtBPATgApVD8FJDZq4ThGaayFrau1nLXprrMuZCWBia1g8VAX9QjFhqqBgKPGDk9MxFKAk1SUqjF",
  "key29": "2kqaTfEf2doADy5NFUcn6z55BnZkRYr2NsFX1V9HwNGkJM79MPQtyCGuUyPgtTq6muR2Um7yJaWDJJVCKXAkcD8L",
  "key30": "5JyLgZFruoQNeJEd6Y9eCHxW98sPVkZZQddgbjwFhLJa5owYsyUbDtMijjCt7zVmhPMchT2azpuKYzSvbEKxrRMx",
  "key31": "nNj9fx5eZEb67cqPcqvieq3NSJyrW4WGF2BZ4tv2QLwh29AmwsFgG96AFn4wSaoF9553XG4AATvGpnQFRcmF8h9",
  "key32": "2zmWoQJGhWc3pP4yFyLx1pCdrM5KzyXXzdTtzZXH6716z2ULdcppH9H7SFPxvqQ7WforNtCqzDRNdRb7GUwHDL25",
  "key33": "2zuABsjKvSHoLUN36U4Q89FiX6VyZ5bG6uvC6AcFk5GYYvstVLGcirZmk71sR2GpUD7ry4mgnrb5NG3ToQ93VN9b",
  "key34": "3XF3r4CqEkqoUqAt969wFoyzpQADDRfbpdtMANSLU5kXdNhKibbhMAYWAN5r3P58AgNwuZgSiQ1wjwvK4a7eUZUv",
  "key35": "9vCbM85JTkk7uZ7odDaQ5RkMok2ueiaeCEGzY5HRjx9yUFnBeb1wdsXy7mz6ft1tKawbsLMDMpLrRmwSZnquLG1",
  "key36": "iAmS7vPZbCvQhu5K4PyMJMPATT6qjwtE63uRurchHccz7bagPTGpsXByA7t3gK5TycRZXyuoPCqiyZjMRNLwZ9o",
  "key37": "53irTKP8yQCaqfiX1VJXwTFmuzGmWReAoMy24kiezLW62QsyEF51P5DWUbP5BTT9MaUdz9cSsEcogyqPpbwzEeiA",
  "key38": "4Jj1gYH2WQi8zmnM3A3i5CkaTShgptCeHRruJaX9h6nW2wd554tE2UCgUiXXcbCdhvoD6atgpaQCXwAgSgSqDqqA",
  "key39": "3fK6BtMzX5tWZA5CSx3y3mwuq5eWN2jSngRQqeVG84KncLiHSsvhFDXPMesrhF8iCiFgJh1h9QUFMvzqyyHWuHet",
  "key40": "2R7iytJB4UpCHETZJia73r4d2wtoQfwGMiqCYbBVMQm8nRCJxtYUgTiKUWS8MjEsjhtGL9UtterTXR4NsU9D4bfD",
  "key41": "4TMNmB4qfhVVTwXD7QRS79nLRoBHatyonkCM6gFfDtf59sdfnB1zQzjcKCRNBSVtFUnDHC78bKG3BRV31ZhTNpEQ",
  "key42": "35p3NU1SMubtT6VwfNLmByB22sCLM5D4EoxzoeMmxeeQrnFdERhLgr7xfgVA95xqYX4uwWD8BdgiTDo19hPBZE8t",
  "key43": "4Gs6Y7kM7xgMyiKsmVz2n6Xcoj7aZ2F53S1zvdnXWBr4XxQkUcd7bnt6QCDuM2erB5ukQeVF9iA13ktbt5pTkLGT",
  "key44": "67FvGLHECYD3bdqbmYBu2ZxE7ptpdTE9fynfnxEAqZvrnXcEAHsot4VsUM5hVkxZuu2sSEakDCMVaaPCEevhsAh7"
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
