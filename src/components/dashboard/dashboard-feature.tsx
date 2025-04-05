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
    "5S8HfG5zkq28NrDCwPYnmoMDmTi914YTZuLbTzi1uPEA6CTqEipSt7Cr9Yxyt3hDeLv6RujpUKd4BuJ5LGX2Ee4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ChxuYQSXTDNBn8E46J99ALQrwhDnk1ruwDoFxwp2tfXCVuJm36JrWXFq6AwqoNobXgUZRCjX19Txt6nwsbaE5c7",
  "key1": "aAHdSytC3ZCYBUAksJP9UbCgQfGx6qZUJMNZ3PsvZaskf58DvNvo9WZDcSVoFwPSf1ypLZRjUD9BDRSvoBGFFsV",
  "key2": "5e56TRvmUSsqnaRy7SLDs4Mz7vkkKmqyWSws7nTyesPxc3bw6D113fGrDNg1TCNBd7uksjZZouBzovsJCqn4nmk7",
  "key3": "4p7A4pMvdgdfbiifVndJoQ3tJ7eSRWjvZh1j2VP3aqcSyY5m6rSGNv4QkuoCq2xDMVfbYRKApYZXQuhMD4TaVJdg",
  "key4": "2cX7PWYdHPfDWPqfwMXG7D7NKjZR61jbwXgKbCz6GbbrrAa5wWLDodDoZNSUiFusQhSWxfCT7BTfLa7nxcUGAmUM",
  "key5": "Qs7tUWoNrKq8FDqUyo1Gb7wXxLF1E3Ak7zPzVJcppYHh6nibYtFQCJxQzB2b8Zo9M9LMDNyAopJqLHA1cok36Nf",
  "key6": "3GQ541tzpC7EaDg5ekTfcm5ppFjL9yDBrBZGcuUFVHE14rsqhqC2BxpVytUEogZDbqQ4vFnmczDp5VBMPm66qU1K",
  "key7": "BEso7eSSZiyreKTf3wDycN3BdEiSwmaMjcAGfYiRaSyZYFAjzxDU2fGznqST1XxZUDxr5p9dNkxdHkA4cKLsVqZ",
  "key8": "3pmr8QN6FWp7GEmG7GAD5TmejoxhcxyiH2ADMekjV6E5kW9uGds2vt3SSaaAtsNogmudKdyxYw7DgdhY1p7afK17",
  "key9": "3LDF6pPYnXqmuV5kodynWdCvNhSMA1RATqar63Ykw3jqqZ97Udvo3zKqMHSRwiKq4XSX1iUFEnxFEXtYXtRVFFiX",
  "key10": "21UnoHDDnoG46aWSPLP8jU2BHXkRpQwuMpBRqZf4aG9oyNbx4YT7ipeiqoqLXvcfHPQdnihktRnazV4ohDNVZUf1",
  "key11": "8CF1k9Gg9mNuYstsrmZhXjMmTAxVmS59cKLz8VqnHAhQ15vnefADQWbz6uhgMwqBxfnHBrKbJ9Wum4uFxJWpERg",
  "key12": "395ufxHodEMHaJGzPYeNsh8FRb5HePXtqHjKBMuCbyGWcfD5RRKhYD1cq2rPFLfPgn8Tb1343Z94G1MrQeLKXpX2",
  "key13": "5SLk9ESc268e6gq5P5mkSg2ArjkkzEt6veKsY83FmLRtvoecfq5VE49F8NSRGUaQF1hWnPv6JS8iZFuRXbYAfdaZ",
  "key14": "5tw3Po8tu7yr228BohRtDWx2281yX99d359pkfd6CumJtV8xhD8bu1bdw1JE1qHBdLuwqya8SsGjd2pipLX6NsLW",
  "key15": "599Dh3ZAqZKmRSxfgkHAAgMCCEiNwsrj5FYLx9iYQdit5Th6WmqswFjiY9VxMDiAFcKxzw3fEXPHuDmVSZQ55HHF",
  "key16": "SLeCfF2CMquAYiShFXvznTNaKqEfTyENMYiUD7BzA7eCCzmoS6heBDNQAVvB8khzHHLNLbwDXSxPCas4XiopoUP",
  "key17": "5eTp4VihPLfnxVapKp7guGkje4EyBpazK4Z8ZW6swS3BLhGxtieBYpziGQBnXqyoxQJDy35wNqvqpbZrfyiBC5d8",
  "key18": "4NKDA8JPjLrEfL24s6oQ9Rju6wNSYHKrgdu8RrveEji697cMc4bCZWbV4j5yenyDBa4zf2wbZZ9Xk6HQ5Uaqq2Pf",
  "key19": "Z3YAKL7B9WgBnHnpUmq8V541Fg1gt6Ee3NhZWSMuwkJcWy9Dr6jmvmpJrks9ayjbRYaRKXHmgzqU8pQsPyMySW4",
  "key20": "3nWcbPe4TudcSRz1GwP6CqXmGhGMCkXMoPnSzcBJzDLEyVToR8e7K819LnDYY39ZJFsES34XhASUKn5t7Vo9NgFn",
  "key21": "3qTs12Jv5CvZyrdMNqNfv9fpRAN69oiEB1wtBxXFG7L2cnv33a59neMMmJU3johsuo449r992LkFW3NkBgJ8JrZG",
  "key22": "2piDNVMCShoxfQYJpfWdWwXZmDyXLRGgQ2Ra6YQ3jZsmtNAL2x9VS6NUtv3nBWQXmAuyvDApQGuAGnUik66Vr3eT",
  "key23": "38t2BwBQmA5xpmHic2DpuC3ABYzYNsQP6zGUrPw7wupUeUuLaSN1xU8dK9L3TrHxcLHPpxriiEzWjsYotTubWfpr",
  "key24": "2JUXARx7CnAzAz9s8NPjs8DMSU8stX9QNr6M8h7y3yk5oeihLv7MS4XKTm1wDqv59fdGfrbWvaFFvLF1nSWLwyEA",
  "key25": "4CuCSs8NzDz5avadpCPU743neeanfZsbDGyWXv7bYDytSBfiyz3f64b1mese5kXTVfyVfzHZnsuJZQngUcA9fpgt",
  "key26": "52HqiYnBEBfnXpWpeeK4qv3UXUrxjuQqVaQV8r2SVgJFMbAzcouRagAULouawX61Tv5vcjkHArauobasKTzhCztn",
  "key27": "2NvbC17Cta9pLFvsp1yhMLBewhxEmZj9ZhbPKwWUidbL9kbFk1soRSeDue4hHA6b8Nmod9BY1yZiSX8dNpD69LK4",
  "key28": "2RpnsdNJHehhzJi4vYRKoNiZnTwWWjDMrrN5ACtyiLsDAJmKMv6Ssrs3Fb4EkVdcKhguXWhdntGMwDkPHDFzzH3E",
  "key29": "39EkRL3wogZoqffx2QTF1WnYJbqzSDNG6VqnFRZvzGpDG3kr2g5pamDp5PdHZGJ5AquKsZTw8b8KkEYTpMUdniwE",
  "key30": "m2v5jnWzcijVKuV4bmP7Gym5obzGSy8SfTYBvuoixf6x3kjgwyWAJLUGNdwS2yL9RTSHeRncW34pV1b4gSirttz",
  "key31": "UMyHDthBHtR2HLrWeJEDPyumCZcaf7hR7iqrdyiCgK9E688AokG9RgWcyh6QHojJUgMMECvpR1ZRyUygkH4tdok",
  "key32": "43TcnFbi2F2DGhuBg47AUMWsPQU7TXT5APbveAsa9UGx5EJYDyDm6EbetSW1zNnxt8BVGFXtwY1LxYEEioZfpYYb"
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
