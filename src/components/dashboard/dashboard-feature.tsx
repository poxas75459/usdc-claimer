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
    "3JPFCREYM2nSmCy16r7rbuQ2qQmsNPytxiLXv23domRt1w3LRcBGWmyv8egowZemy2NqeMCePP4WpgGew1goaPVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UA13ZnbTcsfwnkeC8YNU1ijQzRGv73UCR7PYNK8s7jtbEzu2EnCM55tqZFjf9DmS3k2cfsUhEDR9qQikeQ4wo9m",
  "key1": "4AsECqpYs5iBV8h5PaWrv2EaVwevQM4QcFZKLAKEzf3TPS2vq9X1mDH5MFZ237x9QaAq1MoRPXEYNdDiCG5EfNmn",
  "key2": "4Ux2BUzipTfG4JpFsiwPaSkyaqx7HtMqmS4cn8VE8SiyNdXBQQRzUNVJatUUCPGouunV2BurChyLTWbVRc3qt2RA",
  "key3": "rfp5Mr9T4VJTkiwti9LzLcLKvxHRLBTHMUT3vSyiBbcWq27ee5bFjprrSKCFqKGdjLLLNrvyikAZzrKDgSKAsue",
  "key4": "5TJK9xX6JMfT7H6QUCZpedwBz72pK3WZurJyR2XDB8YMmAjc2jCowtUf8z2XVj2NNSzYvL9NEdvqxJ1fxNnPmx7d",
  "key5": "4p1GM8CqZT1nC14KXtZwFpixUjnRv1h8xvY9Ujtmi7mzqsJTmThhZeCrkgkysiUJj9jvYDHJWgysKswMaDqf8x3n",
  "key6": "5iRUsLKC58Skkva3pGeepC5gTdZb2hFMX92jP3VZKBp5TgwfqV87VB7RqEe91a238ysNF4wefYGKu47uSvutpYip",
  "key7": "3AatVt3wDrAUQBdtRBUJp5vf4zNUizEpw1CGEs5h9eKKdkY29Z9wcf6GnQJJm8wRVPxsNFNWfwkLMDhdjx5YQxyy",
  "key8": "5uvNXmYQ27aUZ1Ac7TYd5Wdq6idP1xP4iaiANJjqmN88VtgFSsozfKLAci68uMynCkaibXY26CDChmnN5QVAU4Pc",
  "key9": "62UCEKVnT26XuxBm2mGxESuyR1QkEQqJwghEaaNMgAkyu2NAjs5YohR33ZGzkc7uYRmU5ry5jcjDBRG8GerV23eo",
  "key10": "C6etbhfiTLy2t7eaArJXs9JnujwmTcvhVFQGBnaTmczcDBE5YUEjRn6wLsPjxWCxZCfq5LaPFUrt8bLa64GbvFR",
  "key11": "mwVUcAP2gpB8rwqaFqm7HjtUqZr8NMvd5Q1yvRZHbYg91hbh4iQDLSSC8mFLsz98XEQHGg6shz6Q86wdukPBSk4",
  "key12": "49Nbsn1vhF6Xn6fcChWuMBPB7r4naHVMmkdTWuh9Vk75B6qaJNhi13bJVv9wQsMfqXrVq3ow8uULQX7r3CWwmguM",
  "key13": "AKqZXCSy58BKxdMG77W3ttmHov6Ci53oDn3MoiS6RPbShBaD1PNJAWvTtEPrQkwC9Dq3tXDpmyHGfo4hz2g2nN4",
  "key14": "2rp3CwZH1W6jigM1B4Ay89pAuDdkoSLvhHR3ZXiz6cQLQezNotdxxc4ejqE1xHPX8AEaiv2i8aZNtvdsd5herE9y",
  "key15": "2Dtc3akoc6SCtGJz14g1WGgsUFPuR6Dtb1mM1jDiBdLtJxSaKmY4NJSqX9osgHyEZtffQwZXMVAUR4ySWJsFrib6",
  "key16": "4oxys2fyEcYVBj2CPuY7Y25bnh1JKst3oKjyVuon8hqjqLHV9ffG6PA7btmTzj21QzNWL3EE2sR4yqCuHTMoD3CM",
  "key17": "3wC5tyYzckikt3tpKKMihL9jLJcZL6bbG62m88sNC6fGuJa9tEKWEVfpudYxEd9qS4xpAubXem988CmoMn3TAYwC",
  "key18": "7XjW8ZKq8bJY34eSHVW8q3cZLdbUvcUF4bBN9tpQ8JVYf4aLa1KCkmoQeJjj4T9ksHXz5BLikpvbRC7dqm2UWbP",
  "key19": "52BG4iV1UQWK1fCvD1BRcycfDBL3wsCQL9RwNRJGA82o48KUsaz3GxGPYcA31qnDMjYrfDVLmQnigWkpv7yNtCE1",
  "key20": "4CDFft5xs53GRhUxLs7c8Y3UrRK3KfzezyHRbBypUpHN9ceTUBLW6RKNGAuMFghUaYiv85xxWir9T8xDUpY99RnM",
  "key21": "5s5zA4M6B4h3iwa1PTeeqUHQNY5qNyaXkTVkz6hed2usggEgkn3qTsXKzV5g1iHNybkZ7wwYVXyVzdb9Dw4ey3sm",
  "key22": "35w25HxsFaNynFsumGkuRiAgVr6HosS5J9YnX6VcrJEGjZPDhJpqC7ugsXKGJRXbWCm3WNZ3cPkCPgD19YPRLcx4",
  "key23": "39msLA69wgDvPVFTyBP8owE4xSKFf4LExY9jSALWcHbp9W98xwY3QfPPTVmX2FTssXMFpZEy4e2tpVpiD1vpCg5M",
  "key24": "3rkboJzCj8L25KmxR4WJhNrVmNinYov3uC6DKPmtmY6YsRCYVzksdLLkSNFHFr6bbxtRMt3R72vZ4zuatbCVnbJf",
  "key25": "27rGyWvUUU1H5xzF3TPvXt2Thj2qqCfHyZVGXGtXa124coqWtpSR9EHakKVVr773JLweQX3KMCVGYgbEK9WcsB5p",
  "key26": "3nDoLXZABUdY3NMijLRZxqLtwTtoZnVYCxuNZnCdNKuqAaKNNqHzmwoj6f2d5pY8VnsPs6ar7uRu7Fvv95weS6p8",
  "key27": "2gN2YQ2PYaMZZEmWU31HFAghnbUfY3ShPoqKuJNJqsZ9RwRXHh1yrJco9fNHGkgxtK3MYBRYwzYFqv4LZSUkotc9",
  "key28": "5JXZ6GXXNtqKDCJzBm7vaKLdJ7meDuDjtqH8RbNfPLt2ocd3AUDHMnpehNG7vJDUD3kUjuSfiSWU3rXLAFn1fUCd",
  "key29": "5pbuoeQ66XZFrLqyX1gy664Z8H3besRMMSQuMsVFEKmbjt6QGYC9SSAL68RU3WHedf1p9c2rj2n5ygAd5YZzBoGr",
  "key30": "2zdxrTb6iVqETga2m1BHA4iKxFSukHVwr26uzP71WwftNT7T878WX179gjTY73wgkHsQpCYjEMDxaPfyP6gMDKSV",
  "key31": "4xj3tEh2fWWrkon9ChSatXmx8i9d7nttPGvvodnjsAS5YHpCUA5T8ZzuzzJcDDwAeBPk1yCCQak3uzg65oyiD8gD",
  "key32": "5CSPKjCKc6KPLu1KBSqTWxPTSxb86bZ1WYzDgc6eNGm15PySH8LnJzLAxgzPyMKVRy4jK7zmN9sYLDG5ZwtKoDTi",
  "key33": "5yGDyEpwePqutpqsJtp8NYB6qA4wL2nbBpZCn6AgEdJx7fraDpNd8bh1VtBhWQWfELccCca6E8aGbwBhryrhjFNN",
  "key34": "5wKvfVfce6QLTjiFYFqVfJNBau81oyg1yTKTVigiqT3mjiY6bW1ezwjrRUQwG3PGR5anq8n1FnSWYH2DxJrMuu5M",
  "key35": "2XaUc21BonBJeNtVS3ehRVqVbsXBQ7UCzF2bPPGYySSnNp572A7pXUNNUSg4gwBA9uKk3hfFmpaZNDQM8ZFWFc3x",
  "key36": "3T9EfSUubv6hR8KD3t3DeBUSjRZEVWv16Lwa4aTm9nUJG9kRL4Hroc16bFWFmDhtnrmaxCvtDewYUa2a2Ja1PTMC",
  "key37": "2eL3Q68ng2593hmHgMZoCb5bdQgS5LyZ4p5da6jB9AH2TsRDbgqT3FAb2frtbWwV5XoknsVrJwngcBTkYtRqSaL1",
  "key38": "E3EywjGaDD2NaUH93urmaj2y7EdksJJEsvSxyVTSTMEQLAtr5gLbac79C7My9gTmoBqGXsXZSsybqzoCkKyzVp8",
  "key39": "64kkArHcWXe6BMjsqKRtMdTJ5dzPtVw2JG6bGu8QwT2dZ6D6xy1z16AEfJbSjj5C7ynbEHdgQAzw2aXMGRxcCVLq",
  "key40": "5EbWrKkKU3MzTjnuPyGydXYJub5Su2HsqpUNN46p9urcU9vFufdtjAD6W6aNeKGDa1CgNxUbWWH7L1nhQGhPnbJq",
  "key41": "2mH6Xs233Xsok39B16iujiKdztS79s1WqhvEKAPDfRxJi7sf4WnhhECBCy8BYAgb3qVXxrjkGDx3Wu3cYC32s13g",
  "key42": "2sJg4SHvAmyMoPCLSoummBYV19zHjr9jMJrw4Uee1QiXxZsjygGF6rqLxfeRKrXfKB34YZtUAqXombkLwJnqC6RB",
  "key43": "YcVD3FccVBV8cyTm6eBvDQEK57LyH8Lcb617X3YcXBYe8EN7DmadStecv6RmvFT37GuKCbJqd7m2CzQncj5qaEw",
  "key44": "4HRntXrNkkKPtHVdzKVzrk8oLRA7yrXSYbwM74KniDBidqfh6PGjYKH9sgv77qDPgx8Ufo1swYdT9B19zHVAcj2K",
  "key45": "4FHuuTCtaXztwFRoLsZ6q3drgSZsTjW7am8wdc1SCVqxgkmRAvo5ZQJWyn3bVMogDXWUdrNgYPY3sR7bznfM3vXw"
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
