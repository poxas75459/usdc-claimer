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
    "5Z9v6QsoRU43eTPndhpu21RYS74YHmtwzWRJgyrudBZUFRraEujNQkUZktb7pJt5NcdMeoeTDZctUd4ndAseeyMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vqtk2dAjqMW8xf7YcEsJAjy3FDq1ENmXFxwNpr44t9rzeS1RWEsoqFREnMYqkUQAYVdUSmKpWqG6yggSH2DaYVs",
  "key1": "2wGvKrnrjDtPp7nffTjhnsApy4yoiMTu7xUmdHiUaPvyJWy9jCZYu9vMU7tdMEF4FJcrhSRtcjTAdQKfsqDEUT9L",
  "key2": "2tt1EYDat7TTb93wUo58DdzzusUCvomq4xS9rADC4Kav9esGtwoKwHAZBC9NGK9HuPumUXBtqWgs1PzchdfqZmfx",
  "key3": "5we7d1bib15Ndb1zrYZVUuYkcRfm3CzUGUYVvyMnm9TnWEF7KE6KWzgkDvR6bXHpyaNv6LwbkkhfqcTpXv2n6oed",
  "key4": "2NgFm9yHUSatbMRkUCwk9JiYjz61oWRUtG9yvZEW6bJ28ForESJUyA943A6QC1uyuaVu4dLtzdBpacjUGTtFJt6V",
  "key5": "3vcjBxtQdnokZReLzxEHjbhGKyfSsfshVvkrf1ThbykdirAJKtHbPgWbToUspKuRubjJvRW8X8EP9NHjBb95Ft1m",
  "key6": "5uWVq8dVYG8f61WD9wuur2qgX7gTAYCcLcFNUdW5Cv9ZJYT4iCwfCf3tueQpat7JNSwRofMu1tcYDHXBTxYv7Av",
  "key7": "3zXGEPcFopQV3sgSZvqhiLiLW5kRewvrdnpdoK3fvjU6QR7p8g13LtDqT16w9M8Bw2jHV8pvR75XH6qrr7epEjLg",
  "key8": "pp47e1h6KdKcsPhCQJostdSYhaXg4r6rRNf4SUUMaAMTTw2EReWaczrqkYJuLPvZc8HFz74HbGEA7aSLCsMds6F",
  "key9": "7giaP7XsAzatXGmNMy3E816MaXyi3dQrePv2U91HzvCvjE1ejrPbf5WvMGFD1qhf37W4o185126VrkVQ23dJH4m",
  "key10": "3J2yZgL8tdC9wBVhgniboBZiHKskCm4EN8addJQzPP26uQDq7cUfrsXdsnNKXQWW7HCT618dWBEMD2BJLNrDh6KX",
  "key11": "4CjP4oqF5GU7C76xSiXHHLKtZ4dkgMECPSqPMKAZaLQJgqrMskC1JNseLvxhjzrUAckkMmwAoDwktd2uD9pMqsdX",
  "key12": "4dXyXgpWMHVC7dFYrkTLM6DSNJEVCsg8JYCts4gz5cFu8uLaqs7ca8EQyFUmSuaCiqzoybNB2yDGAdeP9EMZjhTj",
  "key13": "44bSf15paUs1i9BRhHKLQkdGk6gJTkx27HEYoq9CHehRbQhHzcQDKgVMd8R8AdZgEctMNLUAKVRtRBnuYSc4H7xd",
  "key14": "4ZDBMe2wdyYMHpwZDEPVXPaD6oxPhKgRiYssuu5jwYUqGtzs1pqpfJh18XcrwmrU6MF8GP1o7u5Cc6paa7MGohxU",
  "key15": "ctPm3b3UrSgJTayeJtLQWSKKf3KHemv2zq4cUqQVkNzCF54GhWzjpCjJFD7vM9UNEkdS8VcWv63EceharwocTvx",
  "key16": "dASLsot5cpqhdEaFPBstEYe3Um2kbF7edQUechoLa1DW2244RRu4sSoMMo6GfwqsjXcS3R4m3d8LgmCHF9aMhyz",
  "key17": "JTpzULdNrvTdeJDQeLFihaxUUrcAMvjwebn8qHhykifH9XMZRg6bwPd79L5nzK1znRQjhZ1vU84bdMYwNRiuZaw",
  "key18": "3ew3hzShYCnGyZauSLuLWaFKgimCPSzRnx4A7Kpa4PQqMz14q7qGb2joyfKXjT5Q2kDNw1dNgL7UMbWVmTzZSCTx",
  "key19": "54xdzr3x3Gigk25kNJeRc6VFphDq3wTuyiu85FncKKma8C7kYXLvTDdR1k2HuEmenXH6vNs5hiEcYaBywzEXjLvc",
  "key20": "24tJN42E7k4xVCdjaUppZwB2SmpCDpuDBFLZ65kbDo2NEp8zC4VkE9qvYhuRXkkYPY4v6o6FspLwyfv6xbt7gDPr",
  "key21": "36Bo1qmHTHyN5joASjL2UvAXcKWhpeFUhr3fbgGrYq2pL6FMd2GDTSZFiQAbojMF9L37eLwpKshWzaGhCssQX8wt",
  "key22": "3hFmnHjFWi2WfaaCSRWQgSgtPomwkipMPoch9nAskXXjqSxXWsXVoTUbbPZRaw2Tt3ZrBb9hAqyDyGxd8EsaiQEy",
  "key23": "2W6siiQqPBDNxguhr4kxPrAWqRbuwHc5Ab6hhfucMFD3GHxhwNLZp7c8PCoetdQKsuvEyrxXMn11HgiYndNB7u5d",
  "key24": "5Eq7fPhmcysUWvVCCZNq8VLn8uF9nQAxF7CD2t5Lhf4QByNGeEVGdvjNuogTR3SMTNCd2uzdrRTCzy13D4cRNMRp",
  "key25": "3SpxVDVUdZVYH9UgnkUYpsrtGSSg6RWESVZdtGXLDmzdEPiLCGqxNTfW1RYsAUJhFWSx5UDGRmbS3YBCGCqvCNb",
  "key26": "44MjvNmcWd9MXknnNWS4wocqzRN4r7UR1NvkYkm8hhye7WCganMDF9sJq5UVHCvx1G6B3KJU2hsUHBcKWEf8Es5A",
  "key27": "2mHvycNYVgxW6CSdDG7BDLCsVfKvCkkRTn9zssuduGxrikzYPU78r6rRvcXbbm484bDet6d3b8DfQogHBU7BWfjX",
  "key28": "35bpmrobKSfEvPiDLa8q8sBnncfvQAFeKHfvrHTxfJo5sxWY7BvmhtQLZBwdyoXQtfDU9w4zT6TJFmqZjcsnHaJu",
  "key29": "5n6PNswcvug3F8QxCcgShEgW4AABmwqaDDEkazjKXpGzAMBC4sYmcrJUBSWrTRDaPWLAUCZFt2nXQdeGEKybuPDT",
  "key30": "SAs9jZF4Po5Goj5AvEUJTYxr9mgECzpHZaL5mf1foHGXbhqB355uRjW79R2vRh8VCAfzkDdDUP9u83Bwca9WmCK",
  "key31": "25QARbiH5F1vg1QUWJ9vy8aRw5ihpctbbGASB7UZ8nfYb9guvVQ1tcDpGx1qMGGvrNuNy83ag7XK1N3FPL7DEbyd",
  "key32": "xdNctJ6ZQtojjSkcHpGun6bAhnCcG4KYr6gdv9P9U96CDmeGz2oyUWXEbbVPAg2oVRBVrzN4hMNtsm7o8txBmzM",
  "key33": "2hSmHVBK1RNsuB3MYSD6FpwtedmjADkTGp5sR1MuiFr9c4xTKQCvNXC7ATooNSTkpNrw9uTwYsGLeBitU5UzJAsa",
  "key34": "2xj4f3RiKdasJ2ktpki1NqSVWtXYXnfGHrhfxEB51KA26DD7ESiLaSU2ueSfGv28zW2qzGZXKP7kDG2eWTmw5tgb",
  "key35": "4Pmis2jLw3noCS3ksyA7yhhNqPZyF9kASXkpyo7AojfrbiUyuiAvbb7J3s3bLbfM11kUCDJ1BcD5pbQ983x1QcVa",
  "key36": "2xzf5jUxYnEec6goVFSG9XecG1gc3RbigvS75b6KJTpNYSHC76WvW9K3i7kffQTwFrvBhEyrtWCu1VEvgCqd7tBc",
  "key37": "2WbRXdLgjpYdFCh19f9bVVAX9rQgiozdqo6dUrf7BEZpM9cCM29WRZDsXw81sJAzoHFruTgBaMVKrre5SjwFkUst",
  "key38": "4YWyEUjR6LHo2guuoUijhVoTnzRJd9PNJQZ9183YjoxtGKETBa1Qdd9Dnk7gmBej9rC2frTfKJzrCUsMXWi6eoFe",
  "key39": "5qr7vg3DKPWyHDXWmuUtmbdoFvCUNFH4fxyk8kbu93x55WVYb2s1Fq4MyAqh7ywBoe8QccNuBvUdZ91dZY11jZy6",
  "key40": "joWktaDNzHbQEnza1DJR4UqCUHKAEYiaQ1tgpuaeV9XpUB7JZfsviaU9oVGpx68WqZJmyubnwPHk3cvKcAiZmpk",
  "key41": "5p8T3yHNTdGKxaUwpwvemivo1mwgsnAxQ36Qfz5PjhvmjLLX29p7bKBHSCWvwfoBtyFtJZQFuxRGicAao11QBxCD"
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
