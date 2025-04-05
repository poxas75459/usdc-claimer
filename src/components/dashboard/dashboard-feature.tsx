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
    "5R5tkrJnCm5pwzS1KJnGJ6YW2mggsYN7A7phE1tqWGuK7s1n1F3kbNDcrZyDKnndgjKS3gw189exba8c348QpLdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2javQ3U1ZUye6Cyv3tVURAUbxQaNfuv3WptH3nRZxr68Vj6SsF4xpmfiyvfLJPiSoLhedSVVh8tQQEBXGfJYARCb",
  "key1": "38skuiC7HsEmtLZFzuCuFZozv6QhbAR58L4GrwvHivEUuX2AK7Lq9X2WM7hsFDXgYtykwAetoqPsUz4JH9k48m7G",
  "key2": "5tEGLX3u9jbbRxwYnoHgJeFH8neyzfRDfuL27MCnFNNAA5tjoorsHfNBVMuFvr3Mos7V17CZ8vZ7VCxwGnVxK6rZ",
  "key3": "2g3bwwFJy3T3akUA5Le74r1ckKBuLYNHb1gU733VxUjc8o8feYvxPYXnuy2GrT6YRdTdBhCG9rppZoV5Xj4s4rp5",
  "key4": "2wYewyXtGgAM9H8GtiyjB9nYKiNGgiH5vpzHV98WWmw72X9zjF6xEs4TE72x2yka5ah2QBuKKFYYgEsYyahnfbK1",
  "key5": "HdQJMtmGzjavSjhvqMp16BEDuP2XMoyyYA6vuCgemsMmU3ug3Tx3mo4Lz3rsEMxFcTH4AntN9ErXUehg9jsNE8Z",
  "key6": "4jUUDR98y7KRWzptxGEfJPeVtYVncvDrE8HLG8gQ5RVhMePwcWqs3fJ71TrSZ4xjgmWEWxtbHWnGDiTxjcp1ErDf",
  "key7": "2LUsVPTP9AXw3RW815SjTt1sprXJ8ZSAnUxffzdUWP4KWwq8wz8d9Xk6GdXyHkUXuXCj739LPBcD48rnxT95oYUb",
  "key8": "2dFpddV7JHNixu7BcahEuQJPjKEFp2fRcWWgNhqQaSWNcgViZansvbCCrNVkddFjmfG5YzLxeFSWoVHyAbiqdtcY",
  "key9": "54DzMahuLFRxxAtW1pmHoaR9hiX71y7REhprKLjTgu8T9P1aLGdS2qUdfn4oMFAQFVjGHmiRWp5co5G9tgTn6e8m",
  "key10": "5ooSSbeLiqeBrpVQTAcA7Q5WnpbfnypQDoQHkDhi9f48hNeWvTasdM2wjcnTv97ghCC1aNSJ3p16pQ8gtwZLS9gC",
  "key11": "5GFNs9XfTWXW3mMyJAaKy1U22YhcSZoJn5TaUMis5qffJpuyC8kPJzs9UCGwP5mRqQZxe5W2QGsVSn3zgfJKyca2",
  "key12": "3Yo4qPrPuvPmE41oTLmtZNXrqNhXMdzcbfTmynXyBzrrNmQBA8VCkjQABAAdtZk8GY3Ai9RZmj33Vhcx8urbR5yP",
  "key13": "5HZCVnrBoX8VM6WBUZL1rjCKMN4bQhYxsVzteX5rRYNjxmWuzoZa3h7CzY1zX5yfFMvdyRATZUy9sM6nExQmNsGH",
  "key14": "52z3TX9PjDXTLJxjJMReqqePeQMgVQvcHaUJsNcRWug1hgEwYKMrJHqzeAjHAPTwDDSHi3KthL8d1y3WNbQP579S",
  "key15": "3gJ8AQ5wGYYr7s3RrwbTvE1o2Fbrz5taLTCcz7UdZ5QBBHLQkDwPCQA3PNyXZbuQfXN8TrZ6ymEUcrk1tsq8XKi3",
  "key16": "2d8po853FdRkf8kkoiGfAH119ifs2o7PLppCTkMiZCyqY1he3QyJ4wBc2eujNcYXVDxwXRaLB8aiXNPfsCzZdAvB",
  "key17": "f1zGgUG8e8mFPZajwVy8nAiMawZEKBPM5bJVQe6RPZguuNFToMfo1fc6WGFwR2ZAJbu6grJJdXuStzZT96fMMth",
  "key18": "4xV4i3duZV3XnY7Jvs5q5tTeivyyuDiNAkiyB6UmBTmLJbcHCPbnigdWhLSHsaf3hgusxnSn8LE9r7Eq7oajWh9z",
  "key19": "3KEosUuVP8kdRLcKdztW6jHtxivNqzhqtunuRaAkLhzebUoqHuMjLMMAeuwcUVXhoxC2S51pTwYLiHMqnsitbpek",
  "key20": "4yfTUw5cxkWuTuTiSUz4N5mQiNMPLPscLGswNY3i1t6QzwvszcnfvYWR3bmzLwbX5dPaAE8yWjyMxhhwtZp7ZgpU",
  "key21": "2hKaMAJErw4EnxCi3FnvBPUbgTkN5BcQKdZ9CaRfr3rRgxe79eQ6aYTdhZU9fcKChH9KmZDg8JApbkC2YdrVQDXj",
  "key22": "4M8nr3cnfWxawEbw52wUYHogbadsybCTr6DvQtFXF4rR1ifuo71Z63La2RwjXz7vpJR7e5x4cnVAA6WDNY876bN7",
  "key23": "56FvRZB3knWEH3NMGEtAXvEBDi1QJmU2RFvNzJ2yJEEa2nAMBmyNH9TVHpJbZDLqfF4L8Q8YM1YUaYeJkvKZwF9E",
  "key24": "5xybccVouSzZDBLxnB5CgqqA4ScQzkSx9KbjGNRmvh1UnfFsuKbMAN39S5SfkyG26Br2ALgZZhdrqbKKqLAPozLR",
  "key25": "4iTMKKNjE1ULRjWgMhqD3937sKUjSJj95th2fb96k6ZcqpefDiZqFX4ZeMiR3R3JHj9uMA6DNgxbgXiUUF61fBXN",
  "key26": "2BYNpNGTWtdqjn9857ZxiKnoMzQ7Eo8zJUvc2yf4hmm97m3TKaMFy8kfjA6NQxQesm4juEi5UzAif4AogQxpYMd9",
  "key27": "48uDc387Vrdkz8XQrrqpUtHquw6gpJyz1wFbtYuGYEyV5kPpcyawsmqSMfaVs75YUeAoAyKZ4kWZJMEmdPrYy7kU",
  "key28": "62qvmpkPz5HjTtZNmad6miGHJQUErzGzJpiGTumqVhboKmCneMi3yXrJztYMrjkvFSe642au2abN5qPLWDwF2xjZ",
  "key29": "2ivFDhneAunpdyECwvoq84YFfaoaqxJFgFRZrmVkZFseiXzmgJBjMRA3v8fxnB9SXHv3NBZXM43VeYqxpAcg8PZ2",
  "key30": "49k6umjadgR9ri4kmYkFeaYrR8mSoopyNt8xActPmjHAFYHLjbvERwnajZnfuGrKBgJ5EqungxFNLuiz7recdAui",
  "key31": "2LfzmFEGnjECsx1gkG4s3ipERZCAyHzMMuP93ZkZKXkYSRAJQ81HScMa8FsDCxZeocGJRG6ZBtNRosG3PMfC9ZRL",
  "key32": "3WdMX1SkCTGkrWLyHNrZg93rvqgC6xqd3GkQkojG5uQXe54iyzLyxrzvkBLvNtqhBW5if2xqqXm2AMydtnvo5gAb",
  "key33": "WFQMmwBHDGG8K9KSefbmHDesntT6fSmXTEZcvSrCardx6BWDYHCsKdJXbjMqH4LJUFZx5r9QqXh3L7pSqKFh4nE",
  "key34": "3vyPB7MKUACgUXiRXNZGqJj9S8B4k9ETxwpPTWjKoVa2gneufo6h6s8EdPpAh7mnrWNBo7ztFADsRiGT1QjpCpQE",
  "key35": "iiDsdMG4zK8LcheBLPGYXU24cjzX67JVULgGft66vWNuxygh8sNiLxPx3BHFqduRpb4pbpocaZVesjjqaM6R2ho"
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
