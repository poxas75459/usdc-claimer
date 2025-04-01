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
    "yYZyHCSH6esqPDJvRgwZeZzjzf4aXBKSLcgVb6upsxKAEKVoPvpemoh9FeJJo9Wximz2enL9Sr3J72aVrTkccmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Zuw94DhjvC5buAYA8dTAsZBStK8c8HETjCAmgY9sX61cZQuanXUMbaC1EXKukuJogRN1cqaQEYyFnFag1BAotr",
  "key1": "5pArauuzWZwSifpinyzpaZ7aoWjaCB6SWMb54gRWW6GT4ubMkCnUEJY4E9xdKR7HCEAvsSpvginUjLi2jHkJQJwS",
  "key2": "2XFn8BvyHboz6DUSZ6Dti7zfyzLEyScqGHu59RjjHbhC1AwUmWfQLTmbJRXVWdF7QdSSfCTxkQoHyeFATCkT8kSh",
  "key3": "iiVYSWq6go4oM1Rpvk6saYrjDXZgy7tcuz6zph71YyPHkbJQrXWiRoRJhTbBhLMNJPVguqPnY4tdfbxK5itSFdd",
  "key4": "3YDjqFBhvgNHKZgL2DkqetVn6xVqNKoP2jgG5HdQ7wZpVJXRRJa37ED2bbsktDzSu4WaMaNPBE7KTwxE1TnWdGkz",
  "key5": "UCTMU4pQyZbvqRnqkWkXvaRmhsG19WsiHNNLsDL7w1TnAUuQWGYUFBXvqWp6u221E15ZkfBHDMEAVQAQzDut12u",
  "key6": "PhbCDYbvgBQzVEKTtNJRFL9XhN73iZVP1LQagcwc1jneqLQQaok16qrW6kJoShAu9tGZVhhDWLF4zARHRmEBfpF",
  "key7": "26zJS4n53tCnKBqLsYE35ywXCWjrS3dcM7Y7oMQY3UrK3Xy3FzYf33sDMhCH3GYbtPaphPRF4mDKrxAjf8XANMhi",
  "key8": "2jr2tAbYPE9cdwb7nrhSYSTB2Kfsjs4qzwxdy6veXHezGeqNgvPtDtULa1VMsdvpUXECxn2RbEgqVpVPeKGuoaHP",
  "key9": "5UkKgoGH6mnz7tGq8yGAsgqHoZtMcfSA2XC7JrtxvGbjWD7oNPjtF5rAgrEkCxu19SteDK6s8UaRyfEFagiSv6BS",
  "key10": "2sqK6s9BCpLHDBgfK3enQxyS3Dr5r6YtY4iktHLiGEkdPEuWo77sJGGoM52RhFTshjXka5RChELEtoFkKVTCTcFo",
  "key11": "gQYVoNCtzdaaTmK9fHMW5pN1w8uJ7jHeSmkN7kJhDzY16rL2ozscPuRxgPJ636BW9BSXH4emX7ZDeq7FDXPdcVL",
  "key12": "3WF5sAo9vM3ncyUKE1XjZ7bKkjwk8V88XHuY9An6e9M82FYfDeC2yoVprR9pXUEWPBnLdsydgGLoUnxPmrtu2X2F",
  "key13": "BqHBgKwzTpyjgNJG7a2z9JgvShYE1TQHNW8afVTyF9p7WVNF4aVCNPeQ3zRg6ZEFUaJURnKMGSVrXzbrJ4PL42c",
  "key14": "3vLiLst9jyvyXFqJ3YKLstkqje99E992pmQLXh9oqZANJRSQpXY6ppbxHrk1kz19ZXXGg7V5QJM2ACTjX4VacjCt",
  "key15": "3oPqzD9Jr4mjQjYdiBEg9yz4M1F8YG6mWxrb7AAGsqxm9UGCaMzFsynJcLv7oZ9rLHjmKXQJgi9KvRnhAcpCAycP",
  "key16": "qB2Tn2grF4oqceQRhPtTYL3axDdYG92PHM1yDuVFd9AHyZGotBXkKrbA8fkW5ygzCbiis9N7LeDX3Z9C8PVhKeo",
  "key17": "3b97o329c6smtznVM4tCi2zrtnsnfAbcNY3nq6CCUXzEd2BPDtivwrAx1yN4UqbZ1NX6yGAqiovfucuXUEWydcX5",
  "key18": "377itMzqjW9qLHjZPUEdwUaSqSq2D9fE3KDSaGfeN1pJkVvMZMUWC9QbLTMGh8JVWFxQLJ2Ee74xdBZSoMSAjQUE",
  "key19": "d3QwennDMG2XZmPbSs4MvsisPRVDgWu1iBqgmWEBkV44DceB9niaA5JJF4eBSiotnqPHv9GhFXmauaLFDoLVhif",
  "key20": "28Jgsh9rrG2sHxssV6TmBAYM3qjNCWRUkhUUWJzGzAwPE9bu2cYdAaZXodrPgywsvNxH6FUMz3V3FBLstcSzyMq3",
  "key21": "2G8Ya1ZPofFRRt2HvJrgoHFQzNp5DTzyeFVymwfKMCZxku6d1Fkv62abST1ehVq8Znh7LNyCbKrc1wT5yG5jJeQd",
  "key22": "4G4BhfnnehTTUiJzjG6NmdqpugEUJHUcWwsQ2GgWxbkJc9zDJcw85oLvsSKmykHhmY2e642i4nac21cdkD7ZdBme",
  "key23": "3CsGv9XfiCmJPD7K7sad38sFr39GnS6HAGtveV9AiynsVEs6sd2kAoPr9tvpgkqziJJ6vusuCZke9MjjP28uKiWu",
  "key24": "4H2EAQniR4oiy6tiVAjx2SfyoKHAG8QnbRqtWv4GRBJr6Zk8y23qYyjWCBSbHWPvGcp3VyyrsLGLroT9X8VRmAGx",
  "key25": "4gADryUCuPeH4D5ChYK88sgxfDwYo1te2MS7smWhBejyBCYXG33QZjzstz4eotiY6nnJUKxroWLRskbDDGL95C2",
  "key26": "6tFpj1fHMcRN3sZz6zT5kyGyjJjTczi9FkzMpfuVE1xqKmeCJGk6gUAun4HTrjHZLhyZ5Xdpc7z3chj2XmPsXV4",
  "key27": "5C8TbdsfVGrcJvXyt9n5qij3FFzobzvo1EQwZH25urykLMe2Ksei9PFXySRBrNkaJnu8tHbmB2nGbTdD33LpCMh",
  "key28": "fVLA7peqUBJ7HBvKCPtgh3nn5TYp32N9dNe6Bwjhsb2ay3rSj92ZCDWuztWTnVgfD5W9xc4qgLzAk91uc874hGY",
  "key29": "31BC1MS9XR8miBr2kMYhwqkta9SVAPwf6cg7RQGDqKG2Tigi8Uh4p3H88AKmJZhu6Pkg1EE2ej6Uvi8nZxKTJuB8",
  "key30": "4fECZcz1CYyoyYxbCkATin3ezgcesbMB9bK738ojGSMom6BfD5AWg3m58WrGkjWhCJYJj6Xe9rcmiS4BbskPmruB",
  "key31": "aEtEyePcNKCgnt5ZgPv4UPqvJCZHbW6uNUqtauoYRpwshn9KP2aqQCHdNsjV4dJdJrGTKXx83qGDScdbqt5VuMY",
  "key32": "27uVCY3gP7PKVh1R141Fxvgt2tYjXGnsT9RRShoKnLEK8eVNxmgSyTYb8Ak65vcysmKoEUVvbDJ6zwN2zQLFXjd8",
  "key33": "3NGv8wf7gXeLUBzcTFEz1Cc4jYy4u5B8i97T4AKrzfDUzWjLmXPLt2JrjG7CofLvf49QTBcVpWiMJypTQ7dxgXDf",
  "key34": "4F9FU6TJe4CmReJFbCW56mZiXNebFKemK62jjrgLhLFDuW24MYJKUtscu9KpRXCne1HRHRu48yt8a8RQfjpAA8JH",
  "key35": "2tm9y84AH5irMuVJzZDHEGDeCztYykoqxN6QRyJyNxt4kQqxqzoFmu7viGzLu2Wa3WgDBaY5GJP3wvD6p3k8giU9",
  "key36": "5cUmUKgL12Yff79SWZpoQQ5ctPdvayHaW9U97zJqSxamBvpMEfzU3pggULYf5944x16un4LkG7DyZFaJfBXjggGu",
  "key37": "59wpULb7QeegMq1NDqZqZgeu1ycfbGtxL2VWR9hSUVyvXjZ9sRGb6ef8p5UxAHuhvzCb287eEKePD2Qn3XRLfEYz",
  "key38": "qL8GrUXhTnAJXro6A71p8kPs8PayXnxU9CehTgQ3xJupsv8acZ4HjbzXR5E8ojbgCDfEW4XYfAiAmrafzL51cRF",
  "key39": "4pozfzqNBpMLgSsNpxjeKpNqmi9xPiDSovDJzaHUtoD4MUY12y39kjKZSxTuAnGA6fcya2JAxWYfsmhMLP3AJZiQ",
  "key40": "F2ZALCxZBJxrZfA9kEjJbMsy1cAoL8i9uzN9gJKTnoubAtjp79MrepGd5v4WskNQxk2KS5pC3qmVhEyVarPYeTX"
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
