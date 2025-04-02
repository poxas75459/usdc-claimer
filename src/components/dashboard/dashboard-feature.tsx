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
    "32MSEKqt5BFF6iHpac1ZX9L8VaX8sXVN1egkmneRK5JKUMgRMfUCKVvJh8xALDCEk9Zn6pxWTYxgGoun1ERMtDQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b6HZMJbxzRhAYcmAfx7gquKTvN6q3LCGe9Zbtj63ocgnP1fATPywSAPn3hSDGTQUKk2bVW5gX8BWuc3JRp4Bjbt",
  "key1": "2Q8kE3kCXZKHULwd1gyBaV6UYpVMuQvaw5G39s5j8Dj4XjFySMtg6LphySbd7MZZWM265HEwRkFQmKofG28TU1PW",
  "key2": "3M7F2SEz5cVVzf4N12KPKJsdEhhcodP89Z8LZGCmVVGEr8iYpXXsBiuH7zuYA5Dx6qG8oH9TNGg6jWJomxicWhGG",
  "key3": "AD8BHdkbVTgrNgPMu4UVbVP8qccRs6gMiDsPFHrthkyLazppWa629c9tvvn8MXesC5oCN7xa2oTpGFmZQ48H9dD",
  "key4": "3NJw2jms768fMwYABf7cVJh3hMgWbn9dTWupj6X8kAhBezaYK4ekrtmLBDzha7xZ2seFWjwyj8neP1M6MVEb5JUT",
  "key5": "KHeKKKMHnFpNmHmBUxg28LPXRmhAMkE2V8dxcz8TPcBHvGgKwwJTbKVQsPfGe9m5UxErrV6CjMxvUdiJ9rLp4zM",
  "key6": "3rbHf4UK5R1KBQEbByyANYWYm5Q5KW2in4SkRQDUHDe3o7uvyJ8dQATWi95k6EHa5ufT7f5AJgVWaUpA95fbGiMy",
  "key7": "4An5dDU1tAFqLp8Y9jmR91Yqxqsk1ytjE7EaKhRircYgehAVwkaw8PPk4wdL1Po1rzE4uWXMZVCoKEKUUF1zW5as",
  "key8": "2TxBtRW1Xm3aF9wadsQWgWyLwLED5KRB8Cf2c4pMiLkn1CGvTP6VKPikgkii96LzPBDeouUCjS4N5iPwn2MuYsRu",
  "key9": "219J9TbQxTaUiSqnXAjVuFWWdovFqfzgyqCubgJ9arDS4ftPnBGLbazT39NjJUfzwExPXnFKqqgjRA9C4V6KEAP9",
  "key10": "47psQcPJtdDoxWnbLbwudauQXsfLxoHjekgDAgA5XMWVAWhsHGiH1sVGc7wnZAWCNkxTAYrJBWQnHpSZFEF2xJbV",
  "key11": "4u8TjhhkpfqFbq4kkdcghRLyyA213gUczVLJ7pgJUpypGJqqP5XM478MoRZELqagqPdBbnMdyBkxwx77hv6fCGKH",
  "key12": "51BWrTRxkySfPLirnEzbSM7UhB3zs6WdDb8UkWoyjQaq4pHHhkwHu5tmW8j1FUf2bCc7dCRn9CiMXoVnNBtJbM4f",
  "key13": "2BevX1jwhNHPpGuJeQeD4Nkm4hsT4ZNWmLVA3A6sYxEYG1Dh39AGbMB1Maa2BNbzcdeurc5iV5qKaayisPG48fFp",
  "key14": "5gZY6wPosoJm8i4WnhSapWiZBbH8KTDqvd2sWoqUmJKMD4u91kwSxA9H4sKABz5cHsBPUYZPhPwDE7PmXoG2MpQr",
  "key15": "31nPMWUU3wCKfk9pwAKV5u6Mxe8DNJcrK1kQiZMjQBZjHEh3hQ979A1vY8iB73FMJsEVqGi7gRnv28NpsKHrSyVM",
  "key16": "2GrRkvd4t12bUmJQfCVdY4bBqZvTbGbsw3e5ZrT3DKV7DKZrjy4amhnakXP9oYNqX86HsvbXvrzE7C12jb199fAb",
  "key17": "EtbEJRqtjZ6qLvPQaMq3MZy25g9kgFaSCgzH1NF1Bo87tU8nP36NeZyh4bxTKz7SKCp9ENMjVebnbyhBvEve1Yd",
  "key18": "3AoE76q81atJZxox3sVhuoXyh76qj13UXsLYiYoA7Q6FYvw3iqw4uTz5rPX3KcDtBGeaZDfTFCtD5Sexhhd9AbCc",
  "key19": "4H33uSAETknPKMBcj4aYVKEysuMXgMx2NrxBTiVvjDWdhNTU8jJCxizkgoTkHAMW6otscZ8XpzX6wCU64nEU59c4",
  "key20": "2TW64w4MEvJfatGLqWKztTxfzJe3AhWVbPkz5AYKGwVkGqa5eahR1pUknbKLRqizUiSi2oXgi91QzxPELTfneM3b",
  "key21": "UJyx8MTjbhoFUE8xeSd56hKKd6ENhXQ44LHjWNVy8TMCvVABmGUe4WXvjzpeFZ5h8YLhU5cjVti3PzH7V6hHnmY",
  "key22": "3qzymKdSKv2LdqG2f5gBt626iKV5VmiXUov9dYThpEqEFzrQHYqZ48tCWkMh1PdnYvRc4PBgfsS8aaPeB8JhJUSr",
  "key23": "4Jrb8oyeLdAMwiaESwk6JEFQR7y4KsXdyHwgmz5nuzwzK21TzFbrSz12EfNjRu79nmo285DGZB8uLC87yLGjhdDG",
  "key24": "3qJNiaMJRpkxSSv6FDzxb1Kqwj9z6AaKvXFJNyLApyGWaVmQNhFbbZaf8edqgF2pYMkMzT4Aq1i1j6quA1ixF7iD",
  "key25": "4U4UpJxTjS3kfPTeUnTkyHz4GUB8d5pGTX2rg1xxetxNU5JCaNMTWcwbvsrxyBmrwDEEVvyAYAWqMGXfYRYHeFAg",
  "key26": "3bgn44yJdgvNY6AG8rPhfhXQTyTjz8ebyBYBmEmk1iBmN8ks3VZthEYkATA4Wu55DMgLUoJSu5yijtpTFUQLtfQp",
  "key27": "5QjnqspZTawdiMiEXbc6o9PRT5cTApJa8vU3irx4UnnshjieEbfDRnYTnjVXeKSpNEqDqRu164hhvgQ5D9irPNwk",
  "key28": "3gDg4YJdQvXGMBRtjDfEsfVGH4pEuTWQK5CMma9BKAAXqyYSVo7qja5KqQwViZyKvJbUcb2GK1yNBF3tDPh1mEKc",
  "key29": "4RJX8oHuXf7uUi9gmZSaWKsdqyhH2CXxfooAMMCTNoRsHWszECgQvJLUKm67DaKqJuHUAELNgdcUQYxCNHXUWsat",
  "key30": "3xkKhdncXYmMKLT9Dbjsj4eqg8fcFRPgBRid4tPHKfC88GkKkNx9KeGkYKBQcSJWvfEnpZw7M7EaFnD4rVDZ6dyu",
  "key31": "4sJ7WiKC9xpanAveu6qwRyzMAwktAnmqNZQWXrQuPZcohnTVMkvWjhhLdLEKZviggDqJFdLfexrv2ps8z7uEispX",
  "key32": "3vf52K6UTE2FicNmM9nU76TBVzepVaCBpjkvvxnbsRCWUVmdz7taNgEtYxbzVJvBfZYtAFqcUYYaijpYFfpif814",
  "key33": "5RaFmt9RQxwtbP9MostpxRUXkCjJ5vJxX7A9EYZbGR5XnzxAmYKocVhhPfETU8RsYzYWYQZtJ6b2BbWgBA2VoRxj",
  "key34": "97tmqpEUydgzAsNz18VrMmG8vBiCuUtpVzasJhSxEfUKYwbmvyA2LH8YLTiJ8inbx5rGAzhjnXFhfvGaB2ZDnz4",
  "key35": "5qgDQbkD7j9LcHSL1kLBvaGuSuywc5YVyvdUhs6uw2vu6uDqAuJQVU5CaekhTAwVWCB3p5E63aYTRcsfTuUpL2B2",
  "key36": "4vYiYuw8rYMm8DgH9wpnCYuXiEnVVB9zPJ56snhZFDWgVHeWZcJmCejgamx6u6vBhkGM3bYYpGpHx9Nje8pRxNKt",
  "key37": "29U5bDHTcyBMWFaYMVUF45N7vGbqDPKmb82w5qf96WXuVy64rktNdcEDijjsDUNVbBU6yFayLwwgxpWoQGoAhYb9",
  "key38": "3ZvPQg22XUcVqoPovk7mR7TA2NUPhRSSQvGVTwnx2pBPcbbJQfhePspvH8x6QScxEH5rMHQrPQV3hsQoPFUuCoBx",
  "key39": "eoXKt6CQs7P6pZHfHHHV1Wte3LL7yN6xhZ3ZwWV1z23shnQWWMv6QhBTs4Y2M8sAJMDuqoK1mqgfp39o17agwcG",
  "key40": "2GGUnUQj6WeQNK3BtPR1f1yucPyMXEakDaHZxfXZLaXryXy1KVNhMHpPoEw3mHK1AgE7QFtFxRfDww9KR57CTJhm",
  "key41": "5MdaMfYeYhbjhR2cy6fMFMhC448PLNyvY7mBcay74MLexCvaBmkHnf9GiSNY9RfVPJke9sAgHr21Sf7bZF4LMzSC",
  "key42": "4ndfYLnMKp8dAEpVwVJGHi5jPapiAxCUSfSjP136Cn6fPt3KrjgNz2CuNtFQoaoAum3fFNp4b6xHELZYBKat8gYq",
  "key43": "51iVWYzixqUTGh7fojyyFjz5kmABLv5wkNSM7nbMr52svfcbMzZsV2MNTvd9jf15nFjNbY1RNroevkV5xtrAazMc",
  "key44": "4U5G1CaiXCmMfGiTqa2NzQUbPNa6dxn68KkJw1Ppte3d5v8ugp2ovtLQ6sfpRSCo9fBmBTLmzv64sGTWkuBgcSQ6",
  "key45": "3u3cq19ZE6D5e47b8yPPYKRYSjf2Uu4tTBK1SEynBa3NdcMnrR9AhNgL7SxtznwqndMNe3W29b4GCUKtya2txTLZ",
  "key46": "3YfrpCT8uvHgh1kmwRayd2cQQoXSEUdEByLbjXDnzGDgUbGDntndPkKb3u98oxrRgKY6Q4kvhSBvryC4cqP8UHPB",
  "key47": "663hyfArxXMq2v3wXNQFmkv3bSEmtqpu3nsHUiqvpXJvDg22zSmVUz3xCocqaUGSCtFWQPE3YbM6vhZHAWwyxaNh",
  "key48": "3WfvK2fo23gxx1TJ2FYVwWgsQrUA5i2mwvNeiYY9unnbwS1tZuRW9GDNRFgrskbyi7GSu8PJ4bxh72hoNDuDhGge"
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
