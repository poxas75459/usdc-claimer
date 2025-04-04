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
    "2EJ4nv7yavcxLAvPUsJzG25wcjMEbEYQGAn22mVADFttwMxsc9P5x5Z6mvDK2SLQF4Hpz1GkvfwQp46wQhfWGbDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hPr7svQYkZMYqLUCv4eqZ5gUrMtGbccCfKgzkN9uy5cAbsQzKoHxJrEnNcexYcjxzM1SxmVhEzveCDmSwQi8BfH",
  "key1": "pfBKvMgtq4Jd1pXGxzvGYtxejd5jqsYepAcCVJ3wEcwmcfjpWBYW8CHD7oXwTx5cMy4fL6hEbjcpnSYR8oZzyYH",
  "key2": "Zoo3RFnGZGCjZBuPcaFW87mn7hRbH3ZDYeApSvdGnvGpNTShh6isDi3jGVmLQ3CZL8N6aHusxzw4kGP1n8xCi51",
  "key3": "5e4GqKemGnjTvSRUR8c9M7AGubPStdW4ZvUe3a11FnFHKk8f9XkEHdU9LX9HCwNimUQaT1vTuJLcKfAimy85LCAg",
  "key4": "a2xqg4QrWX8UJvvszJnUZC9KeGnwDQx1ZU2GZuao2AdtxZjN2Z1qXFsLRJAiZAVg3mot9a6NBWnDKfazyLe9rYB",
  "key5": "LQvNL6wbGxrGJYUvXZeCtxVteDnPwjbChDZm79EsPj3wjboKqf51hy5ouQhYPU9X2yLw12UaaeQcjJew5oyP7HZ",
  "key6": "5vEdYjhxn6URBhcZ32KZzBaV7QApBJeqWKcaVALnqPksZMyhSTgDZ783uFp5cuXU8ZDGBLZNoYNfKKWR5LVscRX7",
  "key7": "55HujtJAMeL5jGLJFjPnRGWFWGdfCieV1tmcyA4hYTYjJzp1N9E4NFPbUyPu5yyvJ3LF1KBZPfFS699r2MzdFQsu",
  "key8": "3B7yz6rXzQT961nWkLKZCsMwrfLvmBXxojAvPgJ6Z9giYq8Y9B6AaD8wkcKEjNdMKmZ8hCPDUUf9eMPFDD5n3vGc",
  "key9": "3Br3itxu8BNvd9CTVLgo95v2LTmPdDrT3RBtMjvRCHNnDcX7aB2GSqnsZsSDd58jjbkYhQnvXXKSU5QP3weg8ePh",
  "key10": "3UX4LrDXkj14TxnUxAfduBG36rJnkcGGfLsbw8BkiHqsCVeKJjY8puA4vMwooz5J4hhkKDV3fDjmAZc4yKRupoxV",
  "key11": "42RJVxbDSrjN1jj5LVq9ZNN3NyaupN3iuyNTgfH1PiuGxJ6594HUgJEATKdd3TTBtD1R7M4MB6SfjRasCUwMJNQq",
  "key12": "4eG6cikDJ2WZWJHVViTGdeNN4VNxwjJS7Goq4gPbJxrUE4LAkRJkRuk4C24AW9JdnP52rpBjE1yEEeBPosWRpxai",
  "key13": "4TaVWPVjvuBJprNc12CM1eHEEEgkcwGUFCSQjuRqpar9TdP5nbtr5RUqQ5Z28SEUCviiz5MbA4zydL3WktEgwkPt",
  "key14": "PeXbWEEH4pVCUycsn8Tv3DkfCLLusyuzk2tD29QxFwdP8wCRuAKx2MFAM2VwffF5QnU8qr4ZYMv9tGDTTiAu2nK",
  "key15": "4DdaNzJeoXxrpcpTyyMd2YL2EQ2aEKjggNpnfQvQXgWMYPZ2FqvVW4o6FHDsoojuyx2Wc7tpje581KMYPBDAV88H",
  "key16": "57HATvhPznebzfP48842PE1TRf9gGRnsSJKuva7wJpDADSrjsbaHR9nWE8RiapoTK2zFqNsrDSLnx2HYsGBvdJwc",
  "key17": "36Pf8eYpgbonB7f4BrVMemJ6jQe2g9xsyF94Lra2ui9kYbeWCXWEGRH9GtQ55933SHh2JBmxdbkKi52zLV1hbV1q",
  "key18": "24UjnubTdJuKPviXTBnukY2DB2n3Qdzs4aFfJgmUvkrQAomrvDWsw8ctbuKAzSA2bv2XEkdz2SF7sEGjVpZbxQXQ",
  "key19": "5BWaQMdqT1XVXnfrnWLBxKsrGYPz86Pc4GWhzbAqzQJ37w1bpKDLJY3a9gyxD2dBdq1HhAEDjSMRzAvEk8JEYA1Z",
  "key20": "4pYucxABtenLfT3xPK2grA4p5A6v39vqGuX3x6evtY7PKEAFFriUj4J8mwTMKs7jLuBFnyi6E3hMErZ3VSyTn58",
  "key21": "dfMm2gwHgjVSj8ATbD6EXM43rQgJr8WpkSok8uiXVt2q7doTDnaBP5joFi6rTynXcg8bsPngN1GrEa4BPtVrrnp",
  "key22": "5cZUcvmrPaboG5xS59pKGkiFpj4292pLa9cYDRX3Rij9wgMwZ9T4Fsw9QkyQSmvTSUxXAJuCxzg2SCtBMyD5UCav",
  "key23": "5mWK6xwKD9E8hnqxfRu2FL4EbViKizUHWAY8wkb3jP86EyB9AmJKDyVqmZGFvucAnb8HDf3yzFX1M15WK4hWLBgN",
  "key24": "4VDgyih4mSK7uPhAc4T2TsCSsEfw57NYBBv9ddP6pyDjaBVTgztZMF1GHU3qKNAfddbijohtizophgjFhWW4AwKW",
  "key25": "32cpx7g94aMLLYgwrQwCXBpsKMPLiYi3T9DkRk52NgJ1eT6pUefLqhTVWuGUwuiRc3HHGHpNo3HzH665Liwx3M6e",
  "key26": "5fL7VwQztHU5GvQbR3pZ5fnJJ2VXeaFGRwDrQaAkruiktRLKXNrAieh6eJMGeUwwFsVVmwyjQ1m3rZQFEahQQ2rN",
  "key27": "3P4vfeqWzg6RYkRKrRhXFTFhQJy7s7JWsYq8vQX5vkgEpeEdzeNZmSZBhUzjGr5C5UfUW7AS7biBre6hitoyUqb6",
  "key28": "2ntCVKHxcYuzAm5UEKfXwm3VvHes7KsvXDTnzoAerJ1Coz94xTYxHKHkRUM8yrWGGVpRbroWXJa9qhjDZvgDk7XE",
  "key29": "54sdnBjy6LAKtFR9XG42DnMYheCXHBzpdtKBiDsWEFzSeUgtxQ7qedy163UheUoAwfZk7RhuN5JwcxtLgE4pBULx",
  "key30": "2JaZXHL6swXwMpNhrQfVFUY7AZRZbvzQtx7Z2vuF91EZ1LZrm9tQYSvxQwTW97rdWSPs7oheBGZUFbzYmkVV5mGh",
  "key31": "2WeM5Gud7vbZeZ3qbQu2z9i6eg2fpFdsgEXBDupEq95FeHj5914nSVokfC9oCsijre4jbDTncfgFimXyB9iqNPQL",
  "key32": "w3vASPkdcxEfmzyesz75kqbUmYPGtVNs3Xt7q7fUpAByX65vB8fYTDW8cyBBfLDqsKRrMFyDzbWzVRxaFHECPWq",
  "key33": "3jzPFCoKGTaC8QN9bMKPi7mpuwuX96ichyQVjvcMuF5LVojhpNJmLet8EHcrDSEQaywWQC5ddSPeu499P4V4oNVv",
  "key34": "5BSp1Pjo58CFsuzsquuxU4GEDq8B45Tqit9fpFjdGJTkKpoAfRiC9q61HunLrUSiEjtn32vsGcRz6ax9QKFZFGZF",
  "key35": "2icm7E6VoyjYtuyoX7rqMNZdM7oTDraFmxqJcjxirchuD3yySq6tfnQwroCXZh3qS4zKmpZrCATrNu3CFKRguXmJ",
  "key36": "3PEQfZ6rpMysmm8KADppiSQTGWxgqA59v47inxzmgRo22rKWppbE9AtAKnJYU8YMjyAgJDZreJvn3MCHjACkGE66",
  "key37": "5dvxFjcAcYnYqFEoayJv2PZqp4dZAFF8RTRF8ZQkMbXysFPmUYVZJMJEYSiiiWq4kDJKnTSi9hTRZswEh3eHKaw7",
  "key38": "4RzUVg4eYSxRAiANDVK5nA5FvQnNa7oQpCDex98EinThVZBFUgwh1Pe9k1U3VouyQC3Twt2js5VvextrLmR3Ygp7",
  "key39": "5RYR9VAnc2YxA9dkwPmADTJ7i7vsNSr3vTvDWX8k938NdMMUU96z6dVbe6QEoPcLgJUiEFz5y3QzF12hswNVPqGY",
  "key40": "3ePPmWEYjKfQy7cxHvFJdMcaUQqSbkfZbfV9X73viPDMRQ7BqYB2quvxdF6ySwV56qFdFxbp3zGhKFHMiuoPk1Wp",
  "key41": "Dt2662mpUEyLUmjZ3Rrm3g6mpeMM2UDVitVDrwahVpTaecySgjgfdE7hWUs5ff84rn8z8hAjKFGUy91jBjP9aja",
  "key42": "YoASyaQvmxxCNacaUE2JC3MByWnxZJRbLbJwrXvW9a4Lj61rKih3vrD8qFbbBGkd4N1XVrFgPQmP15iKLeSgf6A",
  "key43": "3VVzh5idJMfozRypGYaAJChcctN45iqBcdcLaqhXQR8VRvnopZUmNxjH9dBfsQVNS4frf7QAvVw842Qs97PTC4Z8",
  "key44": "M7AzfxhW4AYeXWjwxXysxRTSNyYqbDDoMFWDrqVSG1Qj3CHsj5CKZQAF1Ga35JPkvQwzSqeccL6JWbpENEhDoz6",
  "key45": "LZ4oGzyBXfdngGzJQVgcZhH6WJKsr6Eyxw9Bd8UMzrZgbjdBPF9v4mERNvqNzkmCzXFtWCQdxqXRHEJhiBFSE7n",
  "key46": "5DGGjcVN7AagyTpnb7HkfDY7r5vBBgbiyuS9B8y8bpQiCr8EbPpoXAmXZvowjaE2wStsHw3iYKjTiiQLuVneVsoC",
  "key47": "xTmmTyHrS7crRsBn2d3nqD7YG5cQXHctHcogZm37bKpj5kpSxCWNg912zgm73ZCPMscH5YS1M9Yi1MVHcvkT4vb"
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
