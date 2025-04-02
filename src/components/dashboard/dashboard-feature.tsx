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
    "38PGr3JujefbeeomvY932vTtzDyJnQ2LjGeqwWYJLar3kGmTRQtS6KqGnVoTLEEW2NTnnaJSCzEPJtii5kZpQACJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dtA76Pvvx6cyPXQCVRX1xVqHHAJLsjUerhVSUJKbSwhAQi8zFY2fPQmggE31BCvcmHzyConCCiSt25UGf7FgQZh",
  "key1": "5mVxKizethH8qzRtZWcin8cRUPAx7ZY17juEGTgco4MtpKATyN9bYdUvdJ3hPfXgmPHSfH9DVzvyDSnXDN1Ca4qR",
  "key2": "JNdrJCp7cQPJ1ffuHr84teX6nrMUQ2uUTDCTnA6uBcn2gXpqEk2VvHPgYfyE8z8PPbJNKS5AyP9fsiPanh5mDbm",
  "key3": "4JpaA86DuCjyCMvMJbqYRZLWiDPHExpR8ynVAmu5Jc3WgxKKKPBj3iBYVDnLcRohtnH6TsXkrQW9ej4cwBbfEGW4",
  "key4": "U6U7tZukmnb1mFPHKyFvQbiuJyu4vCjjRDjQ8NWeRh7wxFsNXrsdaZi8RSvipgUoNkcG4wwXkCV7wDPjfH9eUUF",
  "key5": "4u9f6Dw1Xfcyho7RFV2LwnTVUfgW6biixHHT9dA6hhXAp48GzM89CfYh2ZB55dyW1xhUSTpMNj7QxrrWcH6JN6h9",
  "key6": "3fvKQLjoLLfaYMFYXNS4g4sWo4yH8Ny5hzrbAu4zJqAoM88QM4qmRYD5kjpL8K9VjpV6ArqTVmihYvjpmYTLccuj",
  "key7": "34D65x187otw5wio6AkRZH9VFTvL2Df96XG6MKiiaQcLH6qfzQ575ZuCQPhjMYDX7m4Q29VN5n12VvDvjm6gENzq",
  "key8": "CzQCFc5NmfDCt3oEC4JS8sUVeYFfVtvdA9VhroiZXCnSjXWDYuBJjWbeqvBURqLsHvXz5VmDGxrHC9cKja7feTT",
  "key9": "2MGkKw1v1yn2FHTxfB1Cb2h1SfTytTx9zssTppQ7qY4aepnz9EUAfCiv6Ka6CiD69xQ4CqWskXGrwFNTpW3UjWmj",
  "key10": "mhR2dcBwP5ontxkULaBhka9LE4erMHKTymV9jD9aKgXVMBY2rfkSBeKDcQ8rhkgsE5qAYR6AG8wZXrgZwGrmExF",
  "key11": "3ePBjKrwNAEoKBS7KsbPum8FTsNkGG3qWDXpQEMKxULdfBa1N7Th5v8psRVWQJnSjF3PBiWcmYUBWJX4TnBrU9J",
  "key12": "4go6g69pzo52xp9Yh5RQZtPRaKARtwxY5fEPVyr25GxVPMrvgoTuXnU3Xx9K3zzoS4WYqCCh1CnLMCsZrsm4kmxp",
  "key13": "3aNkBdUQoYqsKoJcUrvWhkixHyj3SJALQz5BbxTXLhJmDLC2Up3S2Dre9feZNXt8H3AGB7hVCcx9UipK11zWUQ61",
  "key14": "2g7R2zm3nSmTR3iY8wKG1k9nAtouz1ig9xSarVVMsxSaYK8aasDMNGYFjMJJTLK4c9jX1KB1c1fBRLCwfPrfhrDY",
  "key15": "4VVV3Ur4518Fzz2XGpSX5t9nyvXpAvcVGWZL8mojXgy3oEdVWhdqQtFrLjaFSXmRWFwGQ3hWTWywnJnGSRhYyWoe",
  "key16": "HKwfwZpM28CSeXvEK7cH1ZUxV7dEic7Q7agqfVHcpFNHyXVEnsPsQQdJDLmV1NkBAj2uBF8HxnVqFrEser9ekaX",
  "key17": "5KqYoo7UNQwGyW4jp6uW6qdyhdAPUaexUPmhkekZpP4YqZkttPLYKxFXBQaiG3bjgQWRNmunhXg7RA3mUTHsW29K",
  "key18": "3U1uEyYJyUHen5QspDJPhhTKcsq2e9cN6JgPoEUufjZuzyeyPQmBCZF1t1EnYE6L6gi2kpsJroRZLgz2vcjp9G8A",
  "key19": "4o6LVk57dy5QAwVskXtRJKaaJQHNaToA3eB4yxxpUQf6SutY6nm6YtRPdnw2dFfHtfpU5ia7ivAZaSoRMNKcQhx9",
  "key20": "5DM5JeFAp6g19UPJhB5vvve6uvf2iKFLc1aavDJuKn7qWTjfrKD5FJGaaZLvsNVGVRNf8SfzLzxN6HRvtgqQM4xQ",
  "key21": "FkuTpSEoJDRCgYBh9hTvCCyuNdK41WBk4CFHuw3nBqck2otuLMHCsijVmcfHJN4QWa1EfkBMbGVE6773AR4kHMD",
  "key22": "66z8bwgA8xQZdKTRJsTvBhfnN6f8hhsorXxdydHqcXWLkD3BhaVatcUaMZc81Kdygs1kt28U7z2GcwBS7uGXGVq9",
  "key23": "3iTEX8Mqkm71odbCfa92WGreY9nqaEYQnRei4DM87SMJMT6mYHJ6ZqaEWpqmJbACDHhXZFwrVRpsR44NpHjUEPZQ",
  "key24": "4wz64hp3oqcSpQQfVTKrnQmw5NSLgD14CXJz5bsdYHkGJVdEgDvtdMFTCGqvHRYX7e6sS53g2cBrGEUJ2q3ZgsS",
  "key25": "23fwKkJPzS3YXeEBxp4NAej3sYwvTXdHtw2KQ4wd1Sp1uRbChoy1eb966euLH921oSYCcpdhbnZqaaF2NC4GLd54",
  "key26": "zwGxpGSsK61ma7uxfQHNGErQnd8vtx4AaXxuvzvdgxUQNxyBJwGuJVKUMEKYmyV4NKuNoX3vnEqjHrX8DkZ2oGM",
  "key27": "25i9NJ2W429ZX9c6SZkMqatq2oVSXUbiAt4KM1uYoZCVuNA244v89B4nusyX6CFo5wdZPZVM3MhSvPkA3wfU4u1q",
  "key28": "4JSNJs71dVdUjg2jT4m1MZJWLrueBPMrwUhnvSnhYaH7SM5UxNiD5JQGJEfjt1z9VoktDCHzYpMAbvL4rucoUwDu",
  "key29": "5VusD4fEeZCdYXiEZxyN2vviB32sVne1VqMMQNWsxYpB5XYqgMYtZ81qS9JJh75M3f8LRmxPkGg4ZtNxzwMVCX76",
  "key30": "5c4imA9g2Fe3qT8TZh1KZq3zCg5AmEQA3Y2rhCpCcjTKgBvReew4i1fn4X3YFtSkU9UCB5HjVPLL1cqeSZbxTakK",
  "key31": "5JXic1zZc3t3gGuD1ebWrCsavk2QVUAHz11jXz27g1f5iAeoBzgn6qv2yEC8V6ysm4eqMeJegFWfX7MUhPKGN65q",
  "key32": "5n5PnKgQXLNNxCRcY8snGUjX4KszEKTkFWE4a5fXovTfNCy8PtQ6bf15WqmdfxQw8gFe1xvENf4oY9EkUKSYPDoD",
  "key33": "4jXK3SsKf7GNWMKsqn7kySLXGk5eo1sAhTzjo37He8ay2DnUrP98tL4HnbbUNuP6PAHsbhsz8w4wb5WH7vao2YQw",
  "key34": "cTWWSDq1LgN9LFkgjkQ8t5pCaWZrGXV7KRFf9VoW3im7k8MXFL7ZBNR9uoxcvoBTdALQbKirVBZ5VutSRrbPBnd",
  "key35": "5TfqKh1yWxTWtkbMrhQY3txi6bKTJ7Hh4MRefscxkkUCGii3pou3WyV6PWQ3TCKkU1ESMjpHRjbL26qJ4cEE9W7Y",
  "key36": "2TYB8gNroLCECEkhMtuac6zrMTz1uEHG3YBZx1Wz16i39EYfD2Cz2Pthfw1VKAcZ8nrU9HME2tchGf7SRXCGt2pu",
  "key37": "4sM1215qWWtePKc8S8Mu2Ayj2hBX9QiC5cbEnHVoLjZSbPVzkiqgjbfJmEiwYoWYrKTC7hTmmekjo5cevDWttKHf",
  "key38": "4ZqcG2GD5FoQyrxd5LfdJ19ZvQsYqMY2i2mZmt2U8hmKjsUdXQ7WHdSUdF6bmov8AfPPZNr5g19gKtgUqpZLCbny",
  "key39": "2sU1oz74VUYtZqFitNjxmDfxhiJB52ovyP7zL3EnqNh4XxRJDXgTUZeSoWpXfmfGPm9A3iG5oRWHkGQU9CuL49ME",
  "key40": "25cBTecGSTYus1ArtMNJFqfTbb8cKr5svLjvQQTMAhJA6t2rypcstTuqXt4j7ctRaSJLp2q1ggxLQuWxZSoG1bcw",
  "key41": "MXPQz8kQZ4kwfAo61K186Aqhat8GWATh8c2hRMnos3EZKzHVLhVkU4MEmCEndKvCuSqWj9LaMLckEd4JnB2iZug",
  "key42": "67WfDzCNoK2LPS5gop6RnmHm1ut7cEmB8TrN12CgLEWchKPkeHUHUSBv4a9fLMLgSWqUfmnHLWk9bWEzpMCNc6rn",
  "key43": "2tBtQPtuFiMod72CFnwfw5P39qhFFpG2bS9QNoAiJTqQZDsnVvXXbNfUxbnm2wgyKVG5jSLWMtUV9h6gn69W2XzG",
  "key44": "4anudSGXLoJhprkfTvcV5xoyY6JFjftFFp35BVEDtY6urtqTeFwr6c8S53oeWHL4UMQSCCtGsbSy833HMNDUxPcx",
  "key45": "KnLLDcwwUffxx49vbrHGWa7XPg9oSao9yUFX3gkvnqETNUZHJpvRXVzbdtnH85NXjBvnoKss2fantpxbqXtmsZL",
  "key46": "ZdUSLb7r2ud2tuyW6vXzTU14N8fmmru6gVHvgsYZVfbp7ws5ja5gyHXuM7BiR7Fp4oN1g5zU4ySnZbF7AyfCET2",
  "key47": "2zqA1q3h52iNo3CoMyTCS8wUJQxi6fVHPQ5DpVKGdJsLjvtrrnDYdJq22g7x9mw8p3QjjYAXhVNybj6qB25HwDY4",
  "key48": "3V7NYYQWXNZkcLE5ZcocwhWJ4z7XfVf7qA519aekZFnrp5T11DR3n3jhPoxgo5DLz3VVKKhZWgzmAb2istXQQ5WD",
  "key49": "28z8XBpcGG4FpnnCjjHpXnifKpXPoMSQ81jpTn2fc8pp9Uwvfrnod9V4PAWXt7JWBsdJydc5ETt9ppFi68wsp73U"
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
