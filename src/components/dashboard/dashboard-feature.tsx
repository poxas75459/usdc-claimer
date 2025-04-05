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
    "5gYpT4Ej7UwUfBcd7DBN57Xf4gWerBhfAmmXpY2yrR1XQbhyCSSf3NJXhNwefAsgjEJfKT4LArVYPknwJmSpE8iq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VANqscPFxmTBg6mLe9KgLekY4nyBq1rrcYE9X3yLtegeN7t465vSaP9xACwbyHZqxjYp4thAsDrXzyRBShKKTWQ",
  "key1": "37ts7xUjPpri2aHwRgfX4raoLmwU2MpCXUKJe2mACer584UXmxcPayHTeY2p6TQYUD1U9d5S1tWR6NJHhzrduxTY",
  "key2": "512iigu8p85EZFGH1zATPisfYJovy1dkds8ff2s4K6TaJ9XD98pMRyvJgvjf9QpAAFnBGJEviPYpXsCGSagjuEyv",
  "key3": "4FUVLZjG8wqVSYPzR1FXZizdKdeEZUEMu5A2ogF88WrSYLH9bya3u49ci7o2WVnf91RGZG9rst4gM5QeGMGoU7gs",
  "key4": "4dVfbZsR8bzErfHCVWUURCFVYBr9MDqzdEwEfE4K3FWQUT9L1TwLdCwQkwbx3ZAZESz5KdfeKcQxK7MVJrBm1AN4",
  "key5": "3f5ycNqqsvRRfG4oSRwwDMUGsu98B16WjC2TeYMa9NDEQfYTNzgWgRcnnnXhAkuPi25aCbrj4oBF424MuoqxrTU3",
  "key6": "4XXgCwNTyZU1mCKQ5W85MxwyN7a9AneuNnmc1wZjHPbHBiZn4hsttRMbn7K2UWCkPwGqdv4Y6sWrbWJhMHYpHkY7",
  "key7": "37vwhBbHL2FhsF8zLuruo3ovCtq8y1BwJLpm14tte2zKmaGD3tyDKNN6ppBR15MEzXRrsN2QXknYuF4pjn1tTweM",
  "key8": "5A3myzX3GTu4VBPqET21mKFALYz4DrVe8j5ivqiaKE6DqjcfVLnyk2ZwuKRocHgtjXcv5gS83az15TBSQqEYvVc9",
  "key9": "QsrwXT4r8oQ6JNBmLaf7Nf7TfRxybE6Bkis9zfRpuARdNct1ziPD9WFsGhX6qYp9JRc7dZcMQneXLGrcDAZdgSs",
  "key10": "NwAovedbSYLhRx1RCH5mwWnSH1ectt4aGjufZcC14gbzCMzyZ2pxfupBQxSrGFnzp74NWmrF3499mjw9CofQz3Z",
  "key11": "3qDXjGdNH64vpfa9Cc8c5nmYFMRcYh7xFkaXbnpRMrkqbQGxG3uM2drYfAMFPqRd4HEQBCFpHgTBhny5WfBFRyws",
  "key12": "5DtwYWNWgmCwHjWX3ptTyApnSDprU92vdYHKBMANxfHxFsZaBBz6qCWs2fcJmtiDS9GQmFy16M5RaAXB7wkysxkg",
  "key13": "3yjXLTkqMP2fqm6br7QyrGtCgthWBhw3TpT4zJKq3de9wC1RJRQjqJGk6fYb2T8aSqrBLw3iEjAr2wfc4acwtWze",
  "key14": "4ihYPdteBAXFW7ygz5kZxmvyRM1aTej5CPiWR8T8tk6yFgYg5MhMDmd56QMEzjnSJfRPPhWqTUUmkSuVeRLbt5eq",
  "key15": "2v5f5pJvre7Xp8cAyXnhCTsGUuQy4W7rqq9tZ7PvWLw2bLErXyCqDGuaLaokuyFuXReMapz9uvgKgtMMb1wm34VZ",
  "key16": "5KVujQGncVegaW8aiCB8jUJFfD35URx9wZhwHhZqSQPHFAzkZCJ2uLf52uZdWayAtSFyKuUYJNuz4QCcaN7BMEDh",
  "key17": "4M8MjeXbN1uhW87PRkYicjr7nQ4wDZD9KW6g8UqD6yxYMjc8FC1RPVHiPJXkNHw1kjXpyz1uyrJuTw1CARHPaZDJ",
  "key18": "3nKW9gyfJVRHaShPW1Aot8FfYy4WHo8zkmy8geQiYBjoeo7P9CZFWF64usmPhQJkqAwq5x9esBvmNWhTuJfu1HJc",
  "key19": "3f74gn747Tybc1sKsG4i5d15cKs3gLVcSjVhRwWPanomw8r9uVyUwE9SER9r9vDwbjCvFHwTK5sNCoP6K9SictUw",
  "key20": "3ktp3wzBxVeCujEs6EiCgD3LMMsc3vPQZviXk2jhXiNbaZg54VhiyK9Bd7jPZhGF1PFUmzdkFFQAo5F3xn3XGckL",
  "key21": "5aBootsWvCqbD2G2aApfgNhYP7eVT8Ee5NYYmQJk5KmD3uuY6ZocP27bRueeffCXBkj4ZzN97UcAjtbjrMawUi4",
  "key22": "3RdATajLYa38tWCPYXXEsz9Rg6gH1VvP54VDxBj1NM7TgHWRb6Zo9HdcD9izX8hm3DQxDdtpg7ZPzTUMvwiPS6MH",
  "key23": "2z9LtpLVgfJRJdoK8kvw1FvsWco8L1zkmuQqfVRtEhzmseLLGvSjTT18mrGd7VPzoE9vyUbEimLbp5KniZHaUyZk",
  "key24": "2d32yrFwyKP2cdD3ocAZdwZdTTW3KHUcrWH9yAxngv7PDuMEq6BqkHWTFNcoZdoeYN2bCX9Kreh7rJBa8Xzs5NrX",
  "key25": "DNSzZ4Z38c8nU36dKQXKSZeGY4fcyYfpPFfhmpowPdPi2DBKfRUopy1TDKGfenjRY48odfJ3moSfber5QoxS5Px",
  "key26": "3tdcJet6ke7ShwAmwPwWK5okZTPHrtV3ZTn2iPuJyvP3CtKTFdbTV5b2yWfkRtdEk6wWt8mj1qdLSRkThwo5uTeR",
  "key27": "3p6285BXaKvrYFPorxaMN7N9VCDRPj94goWZeQHgKWCKSkenTP6bsuTijz4JdBaQ4fiujQ3C7hVhLzjRSVPzpNY1",
  "key28": "2oG8wmJPL3MSmLei6ZXtyhRNA5SPMNMRJCKzjrXwa6dNbfsv5EfaQYZA8oWZhzPwfYQfXmZhJtQDrb99Q6XMAHDj",
  "key29": "4rgN7MnyqgPv9xWZ2fDVA59yv4BRNUxAemicwLGy2XbM1s1LYLoM8CPoLHDaHmgZ5upf88sBr7f1cNeGXD12LGtA",
  "key30": "TSac7qg7Ft7rdzZaBGx5CFXikhRhrm6dEARhjrUQNigomSTXTrRK2rQZBPYKxQVY1CuxbLi4oSkadMqAU6uDqtk",
  "key31": "2oigULSJfrLLVAncC7dNT5Cah3a4XU2rvjvrwjoBmuosncKLgxLN2DmiKdHk7qeqgQJr2YCCnRh7GejZvCc88KGb",
  "key32": "2wopiqPMEtpLVNUe9dk3SZ4hiWoyxoWoUK5aADQFP6YYuhQw3jfYwBiCPYryF6o79cifQJjeegn2e7bKhgCyooQN",
  "key33": "4bzYL9fMc5WrCp4gG15UDqpLmTnVD5f7qTPCvRv8nB4imHT22ojTxsiCTp3wjwjfBCarxcH63NWnmmJL9WAHh371",
  "key34": "3fwPQ5VTZc8HCVcbicLwzbWfJoKgJdNLWeAhDF8qc6F6vMEmQ4zM8SV4aEH75AqrzyjoExpGc4KcrYfGrGReq6sc",
  "key35": "57reEGBPRzTGWcZ6nMrupMBpbKZR1oPy6PzW72GxbKsRWDm7XcskrYJrPS5uZezALUP8SeAPrm1YH7v7KdBDjFP6",
  "key36": "t7sZ28mdN1GDaQz14MBeCzoHk75VYvZnkiTaNJvtCgLggFXGPjKJUxke4TfPGvqLp1ZGnK4wUSCZeMtrX5UHDhd",
  "key37": "3pt5nzSvexAKGzzgk1Joejp834PMwY62MfQjbDUEQKHCgLUnZdq3rW4kr3s591bzZBAmj27SfVzmKdGdN5ACKETU",
  "key38": "35sMtTHZCM3rnjjDPTsKVrFiajyNKQeLFsVzA4gFM3m9TtNs1Akj2eubzoonEyVRVcWVHd86rLwN7mL22RCq5Khy"
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
