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
    "4rMKTFDP6HmhzCEf5vknbzTq9ZBaswfUopv3eH5tnUB7cBski3TAamDLpkrg5oq72Kpet9VnRdZHF52iXwukxfMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sm6xMVSndijv6RCYxp1cVwH1m8raRZhMC4j8DQpH1AMBXbSLUkE3QzgXLxYb4pSybfPBVvV3S5sjZZbjf1Ygy1b",
  "key1": "31KVKyC1v6S1Mymx25Fdhj2sLYeB8BnjAUtcios9qFMrPsPEQoXj4hjXmVdDwX5gcyePMZPoodrDXK1UmrcvyoSQ",
  "key2": "3HoQB4ssgY9xFbFSG8rHjPeUmYAUBoqVM9SVX1Sa3J4qZDe4kosxAVQihACtpprrd7dbsk9Zdguev8aZK8c2a1wL",
  "key3": "5hhAwpvVbw3sgEHFoLpqeij1dqHJb3GtTvjDgkLciX8CndnE1XcXh6R9n5EEQbdp7dGgQSFqXckjfjgSSzD3hm4Y",
  "key4": "28jr2wYYRDtbMDjUgmGbMvWG7yUe9kHCQ8iqABJXhAXqoWfNWjwWhKBsK9XZa97iVeXJBw6ej9bPLwY6gJKyMdJf",
  "key5": "HcnqrcowXnDy7LjcoemtPDSKMRSqjTy9ZE24myCX2qkXS7Uq7rw7tkofbHpazGtySjnSCJKiLdY6veh38MGiKUL",
  "key6": "2QtC8HiWGyxXMvWV2uoXFJExmGDvCwUASJX6nQJr8656h1Pwuv7ECK2qK1uhAXYBK57pbPfdCbceb1LNyiZc6Vdm",
  "key7": "5h7a3b1Z3VdoVHZyu62wUaFQRyD4cMPBe9Xf6gRfQUigginRpd4kaMcYv8jW6i31zaJUH7rBpNRs7jtDkYT137HQ",
  "key8": "2B7Uf4Dnic92MuwzwhsAfKzQfmFD1TukhKqKeQkSaoKUaCumBexpFY37aApxocRuynX5Fk7XgEFHcCbsUxXcoEiG",
  "key9": "66ZUmqwgSFS3ETfw4TncxrpHHQ3J1UNwF9CxPkrpMYfADWKqNYsHWGpJyZ7YPLKkijNndJ5UBfqEAyAZqVYcWQHV",
  "key10": "3gUNMJ5P6d96zgZucWvD2U5gGYuxSzorujpnsgnfHTUEgizGhUWCQwbrWZYcyELEFUFnPSoGjUriHxwR34xRdj22",
  "key11": "2weZSjkjRucHozpftXuuB7g84imjBxTKMBfqxTxLL9WR2JvymqXtDGbsUfthCzyLUXtyhd7HLzNKiCBod5NCiKVU",
  "key12": "3MDYrjmYshzJwT3JVCQEwm3a1vEME1zkFNfo1HxvU9nv8jHvu56mQ6tn4i3yBfYPhFVEKvatyQQPLVR338ASbjbC",
  "key13": "3zNvFFjfkjxtKWDeaYafmKoHkT1LmiYN4dw8kA1Jvpt2U9qhNk5NYn8eSqratk1qfTYaK1E7GND6BbABp8o6reV3",
  "key14": "5pyXypVKSKb3gVdSDy3uL6Bcj6jkDtgBquXxT7haPKZ5xa6yNeH2hvzHP5qsGNgnD8ymiUfjfGAcebJrXwy4YHNX",
  "key15": "3wjNayf1LtxoH8sPf5ucV8DfZ6ZcZuVC1CTmtppZBPVX8QupGCFCShvCmzg5CXyrrtPrv7CoqMyMp7sSH8fFgSQu",
  "key16": "PeYjkZQxeRTujHmyhs66eBdzAW5DvytvnkB23SbLBrGbRyPifdGWgPWYiiEcv9bdVAEjJxEPxTa3y4TrBLjiMRW",
  "key17": "5wy1JXGEEmtn3uUurQgcQoznQrVskhLtGgr6yAKqcdVYKNWQShUf5Y5v7z8d6um7pXPj2rkqd4b7EX1wqNzzM683",
  "key18": "4K7b4ScXWyDXz8NshTP2vxsZQovxzp5QSjAKnkmNVzvpXhFnhgcwmg63Ch3WbT2CrZtX2CcEYRd3bDzXx4fT9yFQ",
  "key19": "EofjXeHiXgzA1kbpTaH6r9WkRh4mQhX79x7EWuzzAgqPRpxRcbuhHrwC6WeKRkKgss9atDC1iE5hzZWpZ22dcuu",
  "key20": "3DMb3TMtT94M4piiurF9bAgNp11hNS4CNtArtZCTzx5q67F764qVfXw53dDdvrEJ7CF5DyeEJ2uirLSZgJY1RBGP",
  "key21": "4TAHbcB41XueVo2kjV4oHaB3iRhxkJjWLsjWPJQQSvMAKCpn1Q47LGC4jLbPpTWFLySXmbTtMrTviqJvhn1t8Asm",
  "key22": "aw1TJffuzBXx3CfRajoy1jBsfTD9eizLDrPss7KCKjaYVFTJZYbzn9TxpE5myQwnQVuFuyLPUknsXQ4yQVmhFAb",
  "key23": "Nh9jiS6EtYJvzwMYBFANngChyrysQkXZFXJMN1Fu2MpbbSPrjWuonHVG33e4Ak77fmY5P2g8kcKwJu18bnnRMRt",
  "key24": "3kAaYxZa8NjoxnoQKLnreAw8VRvwecQ9y9VTrtY8ffiZCkWgHjcQunNFrgxPndhbMuxxEdaEAHxNKL5XNgJZSLZ7",
  "key25": "5z2zbjUFDGnVFbtKLCkdXhFgQR6xNhJhrcbizbCEadNRWNBHbirLq7fdGvC7RdVQUSdPmnkr7TPvzqJJsVNfsU9X",
  "key26": "35WWw1poif7G9Lv3jPAMxcfHY8M8iejfMVsZPdqJLUJ4U68Lb2t7LQTEGAHM8uGo9Mtwi8YNrxbAgPnmnm8YECFT",
  "key27": "3m4JZu3mpZr7KioANicBHNHwFKk5HFEJxWEMrKQs2woAtFQXZxqUhmkMoBryJwRyUqZTCiaYTq6JmBkAg8iVt1wS",
  "key28": "5JzaQafeNpVvz3QTZo5wtmSRuKUsvUtQu2WTMDip7uSoWqn5cztjmrFoCTmTbYFjgHXE2XVznnbBxY1tbRXRB2J2",
  "key29": "2MLSvTJigY1U4r2oi5MR2UdXQefBzHHpSjy9vK46kMxUajM9VFUMxfX4t8q75vGtE6jZ7PMVUFoxc6AFLW58XzBs",
  "key30": "2Nprv4muvTxZSor6gYuCo9z2oC1REAovnB9uc6u45t8SifH9pytcaXeRz27qwEn91S9GCDJop2NUzPN1eJ7MM1is",
  "key31": "3jGXG9xy4v6zcfKBdaLwpYmsRCdb7sA8bcHZjtNX5dnZdhY7NjaWurSJJHAy6gPtk4W58YHqjm2EpeNBeavbo7UV",
  "key32": "3xnFD6mfd5jG4T7gv8aWLoVSbhKWEKqWQhGpzKqqhkWeb4AmMM8xU7BbxizweQEqGq3pehRFpg1i342khvc7WKcf",
  "key33": "hvxnnahTiBMj492JB3Ssv3yzpQmNKuAgA3AKynMSVfd8kKhXfK27LrfyPakJe8ggLNCV6BJcSqpnnFY1kqgeyhq",
  "key34": "3VTzVVDrAgRd1YanxHuzWpPkub1sHwf8uFHWtg6kUz1mQzwbDWHhBxGB5aPx6iwurWSDVHXqCbtop37a2g6PMrMQ",
  "key35": "Z3G89u9fSDCojkreNqvwpjH8bQLUURmB2R68u3DMR6tx8wT5DCn7nW3n3dsFtydez79HsarCWYZsjpxnJr8hb69",
  "key36": "2F9fkTKHcaTSYQ8aqpP5svxJWEcHcDJLCYyuHxkadrBvSrVh9ZQ2Ydr2pPASGADrEJw7oSrvcUxfAZKpv4Z4pYRF",
  "key37": "5coztsW3ioTzsTfQ4UA2AHpjEM58gYegu1EVjKzRzEfuendVrTLGuERNfMHs5rCAMMwx84Cx79JuwXD46Hw1psVw",
  "key38": "Wsk5jokMy9qJG3WRvzvr1pe2hkDjX7j5JgwMqVaTWH3a5xNnKe5k3SmUxG4JRDJpviNcrp3qpLfRM3aM3xNzYSc",
  "key39": "m1SFk6MgKrLG5p15o99Ri7SzdAdYvsRcfcN6AQodsNePF1JwhNyWZxodyySPbhwkqYgyLZCXcEz1tJ3dMgZA2xH",
  "key40": "5YjWoCzB852z3ofL6zQKSTgJrTC23QCQxtHkunMZbw6C9MJdjAis9vDmVbxvoSHxXmpNAo8FyWX7VnUXhD3pk2Qs",
  "key41": "2yCreYNQy1w7QdnFbmG7rwFC6xukE5qxkZAPeXcSPtLAkEXvKB6pGWNXBEfqdpANBcV3cphndfrA2KRmHVFKnWdo",
  "key42": "S4wFsPfUjmCtJK8tLCH1SQqULH45u13q7zCmGjxpv8bEqa9TNZtxhNiYb3rzDWMv8iKvbiKmkGeGSsywN35Jc74",
  "key43": "3BHGaFkiRXs1kQMRccEsKLvVoKasyTUw8QBHNNKeVyKkj9e9PKMWiyvJYWeBJRN19jCt5yF27udU1vSBsd4AYp6y",
  "key44": "3o38AzFW5f9ZFEABm7tKaVMEEjjCEPkFGu6BZPB6uTCJyojPudLUpKXzymGoumW7nTVA8d67DSVVeGcrQavb7mM5",
  "key45": "rb9JA5jH9NbhghfSES3EX3CGfGTWbK3w6p35KUadNLxGvUwzaCJgrpMTTggvAifb5Ykjxr5N1RTNrRSbCbncFN1"
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
