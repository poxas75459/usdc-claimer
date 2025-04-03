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
    "uKTRRAoo8Q4QcdR5VadCGMp4LiJnwb8nKpvuK39vGVzZvzAEkazhpwPv8S18AkEiQsBNyt7qvYWVbwQwjyV3pgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xv5VbGwbZygQC2tutZkW3kdUJPW3fBEG3yYvXFhqi5jJcWzHX3ziDVgCPReFp9YSTvS8vcTJ4ogbBpPqzaj4riq",
  "key1": "5PbKSrChS1U7q1zfaKyxWhA9Vmdqyzbf7Ts377XfNqp5ontbgs77H2mpGVPTDpHJcbKPNpEUBodpP6NJGNTyRXKz",
  "key2": "ZLUjDt2XRjJY9eMoKk74SzE61SZKZ1d79UHtRZYNH8cAgsHveeDFzuzu8dUcRsNnz9RrYtLwaeQ3EapFfwr5cuz",
  "key3": "5QRsnq6fcmriCohANXMQ7GnRRYy747pfxazEhqFTYZdrbqgYzBz6ooEBzaBj4rYqSc8jqG5YYUbJLe8fd5Eo9eRh",
  "key4": "5P3gMptUfwt47BQCVkAxD3RqMS8vVgvsGsaWF96pcBNiJcPxRW7xwFijyqXznNADYPR7cqXUXBnqFEbz5ma7M15C",
  "key5": "32FJ5G7NjtxLK4YX4o18nFoXU9h3AMrbLPWjJfLs4CtfsiUUbdsP8tEcL3H9wXaxb3eFCJEmX6kF3CpHnQbPTJhy",
  "key6": "WVQX1MNofYi9NNQjdLwubrPxB6JfRJ5tg9Sock42zDcJ2oog2C8JsRQymaKZPR9c9jjxY6zZwLxqz3VxnhWkZAM",
  "key7": "51Dj87UXxGsupFQucuaPqGiUhQBhJ79fyWxnbg3dSZr7bjDSj6qMxCnyfPajn3LGkUY2RSVkgXgPyzHYD7D8NPPz",
  "key8": "5pjAdp3AtHeyUufwnS2JA6tjq4ooQaJeKQEnsH9V7wjyENXAE2NLQKTugKMtom5QDJeYoMefWD5L6o4hqgDaBd2L",
  "key9": "4AYU7xHv9KshRZWkfCouVrMJ3LkvjNaAUY7GjMtuHnfgeF9mbkQdfey3MZp2rbhQxCEsEdRpQeyvLEDgSV2tNq5u",
  "key10": "4LdfgJ9gkgsSQZY5j41XLhUohmc41RVD1eP7v6swH83cRa6UNTa6WQYYxvJfKxp5D5xvS8QmuUaEzHqV711JMXec",
  "key11": "61VigGz1hU31HKhqoWyiLKX78WT5bMoxW3QqTxBKa5GzEqS95DCLNrHaAiFNRQBtvaesTMTJpWWdGKAyEBzsY5P5",
  "key12": "3tumhRD9NvkiWX1sz4xeVsCvRADPdCBfiL8vDtsJx5srjxgyqZTycNoQmjXp4wnCSNr87EVMmGFeaNbxpQyUKvY2",
  "key13": "3kirhQVvWK51aJmLVmahBfodXZnDvg45Z3u6LiStkjTTk1gktEFozzRSyi4G5ruLP7FVriT1TbjGFATy4Mmor3Dj",
  "key14": "2yiyDHKVnfZjL12dGhwriRkX47ehLfDGH4VXbgdJQ5an5w2GWY137duSMhSbv69kSqSiT4MNFvjcCz5FFMiNQPrP",
  "key15": "2KhXSBWeqUHX3sRBXMksK7pCtMRhjax87j5m6UcLvSaxfxKcqadvDCCMTXxsZQb1aGTs8BhfUnaRAHw9JMudorUF",
  "key16": "4JkWzMQC7Xp7Zvg7VBWkeLBvj9afu3qpD47xdVL5TjpDvNe4eUWWJn4VX7QpgF6w1PKtwNpysGNdqWunSytroUaz",
  "key17": "5ABm78P3isVoyMBnVju3M8fQp1tagz8nsrBwGhj71JLwg1MY1MbgFR3ZiDUMDPZgjXBxweAQGbcgsHFRsbqYt1C",
  "key18": "2a8jo25ouj4hLnGMLZ6L6QfJSetY83oner4bmxzhz7ewy4gubBTvuAA7VWyvij7saDpJ9PjybPixZ2u8ApUUFTWs",
  "key19": "HhfGmkzQrx5bgWieyDt1eiwNH1pUktJz5E9ttXEKgdhM8o9tRp9WZuzK6qgmGATTWYMRBhQ4D56YvaQ8h4kwD8a",
  "key20": "5fb5Aen9BzgFyikbYkrHGtSZjyi14qCudendzDbJqkJKw2PGi4r7ZdhqmZSsvy2A1f3GE11VYTXiLKi9mBREUsCR",
  "key21": "531nMt4N2wnSEo5LeDyM3Emc56NhBciwYxXYBcQvz7JYqo7oZMrMVLLvs6xQuGePAqPs82TkDetE33iQKCAeaH3i",
  "key22": "5rkg5uJZzpnF9GaCJKx9fTfS9GsKucgm4A5hfUV69RxVLpG3rdukzcCm4vdxU1ZBcWWVTGJLXqHFZmmDFNNqzBLZ",
  "key23": "n6pTDfWL8yNNSxUPLe7wSjxTXP5iXk7ifCpoeuxcRb832n6qJpKPrrkGfSw51x3Mz3EPvndnxcbAcPk1BcoBRsJ",
  "key24": "4zRY7KA8a36PC6XFeimAN3zWv42x4NyKTsAUZ4jbM4Z11Ap1yE1fEPEifBTB4ufrHgrX6TrFMpUjN5ESyj93Tjm1",
  "key25": "QpoQjLeL5XRoFodZGL9dXqetzmjo6hkHzphW8K4BYt2HEvhSSN6Z9jqcmqLeXdnyUyu881yqGrrPiDmA5eNg9t6",
  "key26": "2FB85xSPGXem48CF8E88WGqR5c3dZvvwyCa4e98xE3gqkwTifyzfJrKxXy1xA5qptDhHRt9HPQSBCF74DNFPjXvQ",
  "key27": "3rxxJLSwm2cr1BpTxKYZf1MMfC1QbgBpCNAY9pyazUUZeXvo2yvA4TVNh32xFe37HFYRGtckBWGH7ZEJeuWkPBfC",
  "key28": "54fwqaoUh2pKVG7xqnmjs3CMTVE9CAj7bGYqgfGP8WXyzRbt1YS8Q8dnWW3qJaEjMPbFSUhRWgDBEsWatVU4D6zr",
  "key29": "5oo97jWzHFYBoAUMeByrZBkJANhXWxPjN4T4yxTLuVj5DqntZ9T62gr5qu6xjXp4pggfAWvWpoMrQnzYhx8pMJph",
  "key30": "8tJV9q6dqnKfgVNBm6ETi6uYC5CM6AFi8Tii3ACZhmTS2eyLg4xHzhEwwPgpFcHg2vECQd3WT7yjzx9nThRk81y",
  "key31": "a25Jpd75GsvAskoe8S8runYZiwaB4pRZVyyhAuRC8PgCBt8TVoahjYpUXE4hRiB4Bd7CfuM7G1uhvPoRW4PzZ3z",
  "key32": "5U93ZHDAsFAN3EU3bsuUyHRStkDcioBqdqrfttiAhCvMe5WH9UAx8muobN37dBi4jgtzhYZ7ywE5muov3uTve5Tr",
  "key33": "2xPBm7MVmpxfWrFkNBSNZxb4eSUcagDjGvkwM6wiDqE3y6pbswfYq18f24358VxDvvwWjD5jcjVbQgmnRiEs5qR1",
  "key34": "2bHpsS1Yri3GbN7HZr8SjxKGaZVq5xeyvcaj32UeSHcNKbXWnioL1kuZ8yG7qX6F84iUcojiaDBhJyv2HpCpSTY2",
  "key35": "5j6hUM8cNSQgGLYGi6Qhji2t8LxmFzNg14V3Und323tX8dTNSLwodj3GFUdLrNkWVq4tnnoehZbzvyzX9j2Pym51",
  "key36": "5JosGR32g3ENoK4JvYesc1HSKF2jdBn3mNw4Cce1wyrQNWub1tgbZTkvuFc2ZANdw6QULTGp4k7SSx3qGZhEvkAb",
  "key37": "v9dXVPa4xkqxF9D4Eq4A8xcso21G6XiyRxAifjdxUt8pyjexiWwjvCrK3XLrtrD1oEJWUJrCVJKkXm8jumbTQxk",
  "key38": "3VkHH9hDEpBmg2GYJMYUx2yeyxo7MRN5bPA8a1qc3XkB3YA9gQRSBq4Dzy3SZAR7YM5y1WMXLHqRJHpHvYBrP3i9",
  "key39": "2eJ5rrk5kD4nxPDtUccMcqkL8Lh3oPsxV5SxD45ba1dBdS9TVSnQTwvGc5SAsj3LUXg3Mhz1okL3KFG7moGsKqkX",
  "key40": "5eZhq8EbqEW5GGTcQ9F6BnzAW4ePMUSfNAL6e4U5Ro2KQT4YxyC7WHPzLg8dWNfJVSrrLLn869QFM8yix5vGsU5m",
  "key41": "3NfdYJ9jE3rWviKUoA9eB4K8qM5nyGJJh34GMDWp7pa5VtZTJzKpUWrJvr9qAZmqDq69N73aUMCSBzKeuK2NwLhA",
  "key42": "4vZYqaPHuxL3rB4tqqibkBQYf3wTWK1vTpLUx4z7qJJepydfZaJsyUaYueVX6iJ3gnfKGXsL67ZPmgy9dpiwexQM",
  "key43": "5qjwYBug2cRVUTr3Dz8SRiVcyhKGRVxCPWf7qb4APb7o21i2a7a7Amu8PoiDKF7RL6qMLaWyq5Z7aMGbdsT7mBLJ",
  "key44": "TXMT6Z6Wm362bVvL92do1Zeqj6WVbvbWLKoqidx4VDSirRH579h8tRDbbuDjSorUwJ39Pw9VXkkc9uCc3HgR64S",
  "key45": "61Vky42tRzNkc2owZDDPTyfqqUkoS16GRUzwhq4Bh7g13HuY6sYK5C9A4g4Wm7LGVwLMLxnrWJy8ASxidwy8CgNw",
  "key46": "5YGvgkhu9LkCidutXcj4CDJXZowSHqu7KpFC3jkdS3JxewiV4NwVMHrtUYhG4YCwetr2TWqotMJ1MBTZM1muwK8H",
  "key47": "4VcfpY6czWqFiDbhqRchXdDNhc12Ry8hJSXnss8koZ4HFhpFX2Zpgjj6dwHpSJX9tVAip2z2DMynt3cCUPzENxyK",
  "key48": "5PsS9ZRq2G9CCrnuiF37qtqeFdc2PervFbnCfWRJp2qhqfYCD3drYySr44bioRHTSwZW2gx33XVZkM6JgvGgNjyC"
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
