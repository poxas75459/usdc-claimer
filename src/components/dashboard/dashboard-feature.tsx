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
    "4PKa4i2e1AaH76h8n7CrsiadtmqFyrVo9maiXKivrmpk6WcS9qRqVCqzq6eNJeTnqdryv5Jz6vafYR7T8Dkw9Sx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VJqvHMW5vbM4Arbk2EXBUurQkfBqM9VKVhSFSrHheCgneVo2WsyjDHbtFK27YA3UnZXShi6gqM9B9MiAMdCeCVn",
  "key1": "W9QQtuMyJEEQSAvaEupVfu1H1U7AKXiTDjzeejHUdH28GnnKxHpe7JjAdDNkNYdgctvv5e23N6JDSRrryPhCFi7",
  "key2": "43Y6Dhbyeuu3pjzvM1r9UzRftwYCHY2hJvLn6iKHEf9kzkXPWeiB35yuc4bHDmCkgYuUMmU42bpHShKJKz2QLgxb",
  "key3": "5Y4dzwgGaBwegSUXE1mFpiTDRBV4FUUSZuNRj4RZWvo96oD7f3QRzFZXgZkobf232BXjanfpRo6bdMhePXtmCVi1",
  "key4": "3pHkMswk2GoMzFCX56N77EFCzvtHk9WJSyybjDRfDG8YLppPLDt8iuB5ReGJFxMoMfvQgG9RkaPf4zwuiEaHbXv3",
  "key5": "48wU5ASzhj9GhxoF9XCRyVc9AS193rCFxkQCqXBjmQWvicZgDetSvfd8YdxpwttJXrWhWzuxYXp4CnJDiofeutPN",
  "key6": "2mcpt9aT7JqhsF3J29uziQHtj7GjeeRkMxtUFNkZA9uYMdoKCCFEA9dByDXJiHnaajSa7Zbi7VgkhxHvhFrc7BZN",
  "key7": "241aXDLUwMxWPbENEK9rBqGLQcemsgAfn8bMdATtjK6edgoQGuyjPAzr8EX55Bfp2Fza2prxkvxdik3wQ1mNPYES",
  "key8": "gwGEg2qrimuGvkq3F2MJmWLyBACu1cn9HQYQ61k9ENRXtRWDLLFM2HqEFyC3Jmtq32HAmLemgSTkcgB2kFeBPTH",
  "key9": "3UYMCf4bKv69Dks8HBm9wFBKN3MgQiSHHtDihDstjZRZb1NSjXZ6j9ERWLU6tUvPwTz2WahyjNEMHLez8ojD2hup",
  "key10": "5KDYp458i71RGN8SUFgG5Aj7Sfr4zXZEBjbaVHx2oHYiPdZboP1uLLAoJts8kH8JtgJJ7AkL4L82uaAwPUkEcioX",
  "key11": "3UAizxzbMtt7mkRYrjrgdchqMXPnR48PgbGsamjpG9J6XtxqbivkUZ5bfQomvWYbwivXebpyJRFnpEX7R4uPHKEs",
  "key12": "2hn5HQaFAoGpk5Lrmmfq6bs331fPnsJEnxnsZp1FFGAd2Q56w7uRRRH56ZyGeACThxfytQf4b7S7Kbjc4t2rsEjg",
  "key13": "3gYKEGs9eaaDziNvkwQ74iNrVmh9DoBCFciR3ebK8zgLgUpBavXXTHocV1FLU9t1jymrxDtqzr7PWzeF8xc4qZLu",
  "key14": "5EnJEcBJuAf1zJqzCF4Ge1ZWE7pmASPU23RQ82QDxHsFgdpGqaigXjSbnPx8toELBgAeLDgvob61WidLsYaBtodM",
  "key15": "3B8AspRy5v3LXxY4B5FXgH4thQhnTJ6QG3oq95FE9TwK1hgKR3SkmGQQ8CSbQoDHj9vbjXjdQG89n46ffFzq5hRf",
  "key16": "24JNERk1VYfnZHRtxYLKKsGubb6iW2XQRXpvYyRAbAJNV51vNUiewx2HmkBdKd7XJkhfvPoH3aoG5YkVsJnXjdQv",
  "key17": "5DyxqozRJPYDjqvwysf9iXWoPrttdSbVRZeQ52ugkeYUDdUJPZ69SFVdG4PJtuCBkDCATpcdcaSEQfkAQL2KV4jL",
  "key18": "5oKcPtzbQXkMAqnV8cQTeA7QGuqAuN8oi8MdL1SEMHrfYF4gy4uNr41af7HsdWszXE5FysGtojKf6DvaTTzpbvNc",
  "key19": "5nUXNc8aCDgjGMpLwWrieMCdHPPgUZZvKAFUjsP45rxSm9rLnHwux9bz4zZEnz2oM46pHFtLKvQeyw1GZPDZpNx",
  "key20": "52vrtgE1meLQt9MXY35QDJfT8wj6QbJRTJ7ghbJm7tsPGhxoVY5T8GM2gcgbYjVtdxwyUQgqeqV9or6kwnd1J61p",
  "key21": "5tYu551qdVpmMZC5YpQJuh53JXjLLaactCax1HWRbgTS5judJyMhnrrt739HcGjncQMcyHLtSjnSNTEVbX643Kvd",
  "key22": "4AGtSfMEppbTe3JFXWXDAqs5GvvJAL8tVF8CGLiwGSyZ4JZtjNgBmVuTkbCNeCPK83Bh2xJWdrtLrfBCw1Viqc28",
  "key23": "u1MBxK74n8M1zHr2ogJJ9hmPBKy7PNRuRCJEWYothS9SSZRMWoEAcoUdnDAN3hN9Sqzsd1vBqpAEqHXt5LocDth",
  "key24": "5iLNK5c6CaLmDkNss45KrSTor5JGbrKvmjD2vTf5citwAvQixqaFtb6aTxZiZXJfqDHmGJ9HfvgcKYsEAJfqsj8n",
  "key25": "pniU9PgreX6mqLMBdn8inMqyN9mAjhsS3ELbpjmEQ3faGiDZWu5oAgMBhBP3ou2VQ7kLobmSWmnPfUQLqo562Co",
  "key26": "3WuF7bcB6KKc5e47CQYeTH4J9RD4EPEyuN4HuHHPW4b59aYxDrcFw6pAhqkTfN5wC9By9b7PbHAYPfJeMgrJYQqd"
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
