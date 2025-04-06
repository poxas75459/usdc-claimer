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
    "2tCez3oLReFFpQwr57PLG7gqbeuh9u6hpbDQE2AETUUP1pwg69hWGEXp7Tj8NW5KbX99DnX5EV4ZzFiZHRCvSbXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48RBtjN9bVFGD44rQUEzNcA8kfZDJFzMubPRfWiGJLjaatc8npok8UdHkPyhQCHQdsHWj8MxUmPFwRakNcWu4ybk",
  "key1": "5AQrB1znYb8h4kk3e5ZoK8JtvBmBeyMmh7AbJvr3evAFGt5kj273Vyhzpf1AuXA8GBKnxpqyQDL4a8xNF51dKruk",
  "key2": "31Dcx7Lqqfcu1oif6uw3Vo59WhA4atcfgqEXPeizdvUL8s6WRA51sJB3xFq8ccUVww8xxe7muu7XKfjTsW75a3ZN",
  "key3": "3yaAAj1tLfy7wZEJb39YmnZjGe2L2PVV5T6GZtQPyDXLBPpNzrFmKFsZhhqQEFEVpy2jurNMjVx2DmMgruUoMutz",
  "key4": "5rqRsRGgA7oSHDMwA9RGQUkHTLsB3ufWq2KhHpdGhHiqF77y4cscZeS6x2HGFNY4etHE5LqTqQPSYu4sy6EQjdqE",
  "key5": "45sK8VRncS9iPtGJo2QnEqAGEP2yjpeb9tgfNz6e8351T5f4QpP7AYSYKGPhKyNRcFLx8vyebV4phK72hjbcxMi5",
  "key6": "5WkxYhC9s8cg5uNvoGhAYqbVc4Z5uBUMaaWNJXf2nzYkxNu7oyU2eunz9Cn3zR1dRmE6jcChxq3q1KWoGKWAxHxT",
  "key7": "3fvQZjqL36uV3yp3nEk5nsrWFRRVTQQaUVjZWCWnFhxeGGdouXoVJG8sEuhQVS8BMSVCejTmBcRZJodW6iWrPjVS",
  "key8": "3qjtdZmJYtGUXF7Qy5zdZ9WMs3z2752xzBicGorXyPmitXszgh2hqJaa1bfJN7tr8NN14DhJ62SiyTjrjTYPd5Nn",
  "key9": "3bUMXBcp1HXXM6d1tmTkqkPFc3wJwVdPGqf4kVNyewaJeDUVeXDJnTqNgr6tkEcDG8vw42h4tU6RDZHwpgws5Tsd",
  "key10": "2o4Lx1VLuU4pZZTodfy4y2KLDtvguMMHDw7ErhEuYWDBDubEHTQcqkHTg8owwNUgRwVNwZNmmChtX1Sta64edoiX",
  "key11": "3zEvWB1BZRim942cY1F1j8CtnB64kg6tsr2d3nbAJre78ZDBTEZRNLSMwXgDCWbp3JUgToZ1Wr5hRnwCD4xwRy8j",
  "key12": "3noPywEG3pd34Vut29BGX1fLAJbkHCt8JFQWDQY9zVMvd3Zqo1TNG8f9QoypqVvmJTi38XSsCw24n2v1WQgyqAA4",
  "key13": "nWZ8VJQzzGSSG2goF9wkbmJKvfoKeU8BZt7W7d3yDcFMYaXNGx7wjPPtoaSPEPzdLJyT38B7fepH36HUy2YTuY6",
  "key14": "5Z1t1G2zG296PckLDE9C7xwnP6dwbQEHEkTmDEiXy5RT1MWPktkJqpeQW5FhUd2WHhA3jdxGS5fbA9bD5sHQGutA",
  "key15": "JH3SnqSNoM7RACWxeZyrrsYPT9vD5vqp8CXSf8d5sNRUn4zfEveFZvvb21fNE43PfQNvpkinMBt9Gqh7qNin7Zs",
  "key16": "3s4YPepcGW7Y4nUujwaGZDJq2JFE3R3fc3fFYxRsqwXNBK5hXWCa9Pmx1y2Jnh5q45S15UmZSRmWnAHjXXW79mWj",
  "key17": "45mLUPpCirczNvTR4hCsNA2dfrxPyNSWmmHxg12kLPYuiv8vGyVNfr6YiK6Fytn1cfCwdUqq8LumsspeyyCjXwAj",
  "key18": "mJZo4EhX9FkXqCf367Tc5ULFVxLBHu8mEevJsQVratFGc5xPMvirmGZMu2PTCtwxeFzyfyqES2ix1cRUHEpbNP8",
  "key19": "3Ff5WU8mVSCcLFvdAGgi5h4zFp6bfbhW7DXgbgWDzkyV4h12c4HeMW3ZbsNjUAEwe48ze92jb62QksAfBmQGwvZ6",
  "key20": "56DUpJmszwmq2uDw5quLzgFkN5kN7Y93fKJLnmsoKiBj9Wy4Xh9Qd53TH7ZjkACwGi4rGJp586JMzWR4GnEsGrJQ",
  "key21": "3bsUjwjH5eWnuPoPDuvNCFDBYXBsKhauz3ZsM5AqbyHYTFnipU1vP1UKMY5sviRs1Wk3BV4DrEjBPLeRy4ih7Q55",
  "key22": "5sevDkTo8pJcLRfCTejZVCwDhnWPK9iM8awCHAEWpRPt5SqkfLRsXZMtZv7CDGz4UuMubgvxrMQ1RghrMJPqpXYw",
  "key23": "66dpW2h27q8NBg3g9WSndxBhBTocjBk4NMpaL618JwSpD4c5FHavWdXGU1Xc8YjfEXdALrKmTos9EA6A7VB3hsh9",
  "key24": "5mnUJaY7ZgdyNbckPNnjuv15hzNpihbcAN3SGwispJWpZyjbx6qRitnE9hmZppjV4wEa2PeeCsDpEwE1KwMMSu6B",
  "key25": "5ycQVhCK7tVfbhPRSBVSRWRPpei67L8zDWZsxSpD1qKyC6XDiBbZYyfbt6wzJbgVDPnd5GuDctkBwUuFNs5FDxVc",
  "key26": "4atV4kTYPrryVRGfbX3N4Xx8cAy8yomb1kq3hq4cckksheYYu4EjMSKfYpkQuLgr3qxYsZBKHAxwDn2L5SwJZPCk",
  "key27": "2KaYqCeamdYsXqkXZNiPHwPRrS2xToCtidcVygQkqKJkRdxgS8DFZVGwP25D22ZLWFNvadr6hWvGA1UBgiWRPy1G",
  "key28": "3Z7KAsJyTGcFh5H3Xj2HhCQwS1XKuGYRJ87JVESYs4C7hpEjF9hS1LALMWKA99KnCY4JPoh3rMXmfR4KLDknYgNQ",
  "key29": "2yRKydgAHqTH3NLTphRNXWgWfLCYFieb6nzkeGhn2U3DnP8PuU9SRwvSTrjJaM3tJLJHWVotqab7AsYwD9r8z84U",
  "key30": "Ecswf3xdy3zwQHKRX2muMA66RDnyWWkV3ASu9Vi4pe3XLS91X4kHXEvsfxNpsjTKiDx4VX4CxjTeUhzAG3zq726",
  "key31": "E57LGr8Bd6N2VaLL8tpYqKXryeRLSsa4xhNFwvpww7KzUHLbK68vr5Cqhjp4yURu9ky23JGSoAD4uBdp7NQKvrz",
  "key32": "5Yrf7xXdxeoTFQ2CnSHmmtCq17CrKWT5KRPr3Didj7ejF4kLatMKXKu5vSiBa7bnDTR948u49nMhd9oFK3vJ2ASu",
  "key33": "2cZw8pwivgv49Q5uL8HGiLho2nDxWJvPw7UB3hw4Rhe6dSMGvNK15gP6r81nrdgfTJ3AJy9Wmc2UmkStMb1NshB5",
  "key34": "3fSpSaXRe8nHRETdRBUvCyxvMT5T1siWsHpSkdBtsj8rXKStSvtRMKhquAoAuJxjGUbrutcmGmEzT5zCHhwnh75K",
  "key35": "2zKNALJB4vqJbFUgdhNC1TpqXEy2ZCNtYqvEhJiKYfye9dyyLM8QDeHKoirPCo5gxuuRrqDyMmQ8eYt41ozVGEQi",
  "key36": "4xFkaqmWsZU2uuDeVuceiEzYsCrTB1kudT7XwUrfYvP8D38qbUvzDNuuxmmJAthkjCzjjkUdhjvWKhMbe1u9h7ge",
  "key37": "5RnacBJrnpbbVLg4UwA6JQWFabFh4C1nZEQa3Zhy12abAaBGJKxmTrgakH9Jf9Ria3X8pnhctrrtuJSD8NWS7973",
  "key38": "5qs13CPEA4KVkDRuPMq9gpzKVgcU1JofHYf7H9uxPc79rG99jT7qBXeNVJMzfjuEb9RXBHSCjj4C2w58WjnT79J7",
  "key39": "36M9ckN6138okyy5vNmALF8nagUcrQ98paW66GmYbkUNWB4cC6kERhnQ9MYe9ip1C26ACKZhpzJSo6onBSeHQJev",
  "key40": "57HEJSyQ5GnDXg9b8MvWYhtfrEBkFap9fgjeGj3y8DVqXNDeZ5dNg7WgviU1G1z23q3ZLxsR5oNGf9JoijYngBLq"
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
