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
    "zrFL6n2YcaWLN1Ge4Qbd4a3TmM5VdjcC4oAWGE4knGLTEF9EHz27o55uKzeKiCd3qbJgjwjMzwFFu5YMXdofNPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bB1Ufz7Z4yQAwsbD4RhnZqnCJRWdbmFKh9tBSmtSsRd4To62r1HEQ2mp5C6MW2Ekt4VQT2ZRiEzkMFJtTCyF8h4",
  "key1": "4HmYyQzdKVay9bSodAN42UVo7PJmz4rxr3r1PLha45w1kC1eNVSUhUhKmGnCtW3aEHDkUwqHPhp9WAZS9jKT6PVW",
  "key2": "tLvRmeeWJRKszYfQuKVJHDVKN6b4Lf62p8PET75UNq7WLssTPGpnRWnfSz8Roxju1kYo5JVV4JSmqZQDGS1r1vn",
  "key3": "2mmTFxbwauGaZMbjujerbRWQSKdE81HPqWCj7gtK1otrMZnQjmQXp6eFVu6AU3UBJ6EDwyyWuSwmnVEfToTpuwxA",
  "key4": "4iNNdBYFdz9RDC8yu1nh9nDWyjBZ7e4kDXL97itKWqKb7FevjoDcXHMt8eowdKXB3jooutyKZbewfgTeEXoZs98V",
  "key5": "ndBta6CNAvH6HmoCfAxtGmrwx2MBUT7jQ99pYuxCwEowCjJy7Sf69tXm8914F6WXgEVD2KAw4BGKdGpe7sbJs69",
  "key6": "456kBoWSCaCC9bwreyGuVxHruhq4N4j2kZ2W9GChuRj2wy2wWcXmhBJ5LFVAe6g5Znm8wP2gvNkoYatH5QdG1vrP",
  "key7": "2mnNSa2qDwdLyaUSfTNh15um6pcg3YymKPSbeezQWxJXzcJryRLXKxK2hJ7Mw8zgZhAcSxJhZFi4hsW22vw7Fbp2",
  "key8": "2f74yNiY28ZQzuRYT66XvazxDQYxv9BrjXpkv18hyJ14uACc5zrxQqYcGPbSgcQkGQkK1iZVVuVdXvtas6m4unbY",
  "key9": "4C2vN8JJsaeYeCrg1sDH8itBXxr9TTsLGZhtweJsbhB62kKJVfHA8xBq8RqYM6u4wBWmKoAbf2XWK2t5K97cQabe",
  "key10": "2KVgHupKLY1f4eUXvKDCnz6FqCaiadPx6gEsrpeZWyJVMmc8qwm5XmxKbjLmiN31PjzWSDFQuU1LoeXAjLynyZZ3",
  "key11": "5x5SguNxN5voSd8e7eoaTWrvS4GxUY3GwcD3xVzMCm9DHokyeCdGZfdfTVG531QhLWYE2faz8zvm1suE3RymDGvn",
  "key12": "v2xMN1ZWEjJPiqUJQLc9sh4y5j1F2VQHcRzHd2AY7ntE1oiHJhsHM8hf4pdRTh3ad6AyaBqYPEjJZVag4X4cJWk",
  "key13": "5i5dvcRY7Y6LkAJXh8K5Bxvkm7PLcfpJpHhqgnyDGDnBYDCsbxgcR9f1xHy3biXMRdVMtfK8n5yQyTB3mmVKXTUN",
  "key14": "4yUF9pP5q43erMxRC5nfiz97ArJeXCkCBXtemm91eXmruBA27Rz97chP7kiVHnqo7aK5ewnRKomikvD7mMBo329g",
  "key15": "4cin5qLtP5EsBKGdHtzrQP7pHxdaQy725PsczVFzWSEiLfUsCNba1NMycwxLqedgGwwcPWp3nKW1j3qfBXkiG2ad",
  "key16": "5PzbvpLRAL19w4Ni8mQYV3GKrJrHLXybZKVgo3Kcc39GxfeJKbjbtsknJkFe1CtvvT77dGnakVDrXFECjFd4Bsik",
  "key17": "YPJBPKS5dvyZ9eEh8FqcDLZjgjNVaJSyk3Xac6hyed4LNNQMVLCenGE6VuKuYvUz2ERJ3VuHfoSWGHRN6VBY2MC",
  "key18": "35j9qRcn4edmA3qPdSxgKyNtBEnAWYk4LdXzH7nSXwavQWx6Gh8xRvGZWtEYzBvrGijYB2tX97TCQiRbeLAWYG2G",
  "key19": "3wamhRdGeYryogELYgtVxEfniasHuZ4sJms9AjbkhFvYjJUK7JtAjz3dQxVcxLLG6SQbuPHxKgAN3Pk7aXysc6cB",
  "key20": "5pY33CARm6c8SY6Y6cK9zULYsSNJqoKv5qqFti7dA295phMhgzAz3EF8726o1cuqMFFHg5Eih6k76EXKSagdeMN",
  "key21": "2yA9W3cMArntpYwTrhj9aHtKkC9H9hnVMcuBeW425ejMC5qpSZ3brZN2F689yno8GBHRjDxpfmaZXVce8oCaBXKL",
  "key22": "5akJWVgoS5V3fPAv7P5mzKTiWWyk3GaSvYFV8fGh5MuS7vdxZPjod5GNjoNtgzavwYyP8N7xpHmfTjx9aYA6FJzn",
  "key23": "XDbFxdKad2YHTyhnRRqwzBnBgYbJeNE9hm7h9m87CkxE36wHY8dediSJYrSFuiuWgpapfaE7sqeAhho3PbmhYPs",
  "key24": "3uHdrmEvsdSVPHCL9v4qizq5hrwohSFmpwKJSBjBzbzuQiL4GrTi6KdzThpeJpwPkMNbXikXbdgZj5W5bWfM6kG9",
  "key25": "64uQQJCo1adiGBaax5cNvELh3yK7zpphEBywE5cddPYX82RKqA5diAuMQWya9zFpE3x2R7PEE9mWeemtjSXocCpe",
  "key26": "5rt5ndCKcoc6ndCh89RhqyquwZ6VWeyEUDL8yy2VbLrogHyDqtts4vAqTCySxq3xD1C1ZnETzUunbLJqFzvQ97Mi",
  "key27": "CmEwzSDkGQBwRTXU1zztaHy4n5ERh2QhENbL5mx8RAKY78N7BdzqZhKasD2WzW7frDNzybZvf8KkGLqB2KJpLdZ",
  "key28": "4aH3zBRpK4CsM4MVpgaYdP5iUmXmkFBBPVTwiAKcpB6icWDL9QyB1pQEhu41cGRsnf9qs2ahDzYn2QQhZaYqdjL8",
  "key29": "aMNiNJiptYSzk5uPsFMXsz6jZtiRAqDJfNA78uvatR8vTZhkkDAJovxf2PnuRxha31XriQsb38aC8a1n6FJYHHF",
  "key30": "2VnGDQezetzqewqXffqw6duVSmjRqvhoUceounBJ2FSc6R39LSYneHU6PXMm2fzevMhGFhvrn3RY77KiVzFCwVL7",
  "key31": "2fxFZEMyFLf6cFti348ZMRbemTVdC16ULr89p7USpz1je76ZfgscdMLL7gVGA65DExWwKE9Dso98xEpwNLEkcZYK",
  "key32": "4xGQdVf7yyG3xkZCFsMQtowshvtqyUfh6Ds7twSwQBvhkbjuWoZqUzFg3Mc6eRt8DRMA2Ls9yqoYWn4cSRYRwME1",
  "key33": "3giF46QQ9oLNS5CnMHaa52F8XSERrq8ZMHg5PcTTu4aCAtoUX5gENphoEudg8zyArhmQtHZSUzPgMXAU7UV5bDbk",
  "key34": "4Ebw7XgSm7vKuMqWphK16GtCzqxJ87rVG8FbfWgvBKXtJ2gWxK9RRT8cdwDnPTQgfUeunU8eA2b1X3mznpSLmsFB",
  "key35": "5f4ahX7f5JuTCwnGmewaFqCgJ5mkc4hPr99CNK1LxZV4SYPzikWGyGXMbzfcKYc3QQLDM4ccs1EbtKmkSQLhjcCA",
  "key36": "4k9HCpvQE9tzf11GVWqqVtpJx2v78TJkF6QxHicyUuMxNADsT9ZBYmy1JsYgXu3VTHSc1qwZRcqBFgUhkfBwhhWm",
  "key37": "4xQzSYHRDpYNj4dULCoy31wFb6Mc5EQoyXZmZq6JYF3TR46fMh9KrWRMihoC3Tm4HbwQTrzE7oXaZncmX3Ero3g5",
  "key38": "5h8SVrcNHDMQoEtuUCjwCyQb8qbySKRTz97jGzgssnskSyrMf8V6FaVJ1C1iSKgaFYfMsTPYypg9X8jB6cqwZ5Yy",
  "key39": "2CVWfbgagLU9QwqAe1F8kdxKhYytqykdLiTvZFAQoqKQtM73coN6LV5sMvH6aWfckzjEetr8Ex61yyk6o1rkE2EP",
  "key40": "4VeeyTYYQp8JEx4CCNn4kMzZZ4omAhUm7ZrVZQzvpGegRLRdvuQWBVx2R1tagu9XZjzgLJLV4w59S8LqwtRpukHe",
  "key41": "W1gbRug4dnhEVxh6qwoSRLGwxLZzzWibBHGq1oUEm3FMy52ZgMKGXB3HcYNVXHd1bZ2oL17hnucTWzfpv9fB1W3",
  "key42": "58cdFdy8FkoAkyDaDBp7t1Vr8WSpRCice1R6bQznMqsoCFLyLTebr7hnKAALyKWHfpHHx2juEUPhVuxwxWkzqcV",
  "key43": "5V8eGDmoeER8a9Q9P1qmoQ2kSdZQi1PtGMnFyBGmiqaWzuQD5C84oRuqaj5G2KqSxZctBsZZFLofNicPK5LpGwXX",
  "key44": "KnGYEaFcUSR7DA5DHwX5ijzu9tp1yxyqX3YBPrF4JL2ZsHi3Fp6tBtLLU61nmCS9SLr8EmEWWg993G5thTDGqTh",
  "key45": "5jPp6uRbhE2ZXXVFiugq6JNvcUTugSoxJjVdZjCqNhajhq3JMEW7pydH9ko64VfJc6r6xen78C91qdPPMWGGfEZY",
  "key46": "45SBjfrZJwHf4orBw5EdQiysk2syQH1znyS4ezA3wbndwmGGLSN8oifJ8S6JPDkSPpJu6vaUHZtZ7pXJi72UWtG2",
  "key47": "3fD6zobexmWMMSwnAHLfjRUe1R4Vdx6zKLXLoYaf3GT5kZWnpCLgKgY3D8No4Md3gfUTQEYZYqGuZivWVr7wA5ph",
  "key48": "46kmEAwWjRVpAHso6hg8NUUfJ5TWxrGbng7kG2eYQU1Tn72ZWSrn62oVAgaB21qAKdzpZpxSfGn4jYLeeUHP7Fcq",
  "key49": "5EF6Aiuoq5AkJjby7JU5DY7zD7xeDWZgsRjVY5wrJ1NB5DrL25wSMNA9C7LJdG7ee1gs5J6uN9hrpetJpc7tkJdg"
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
