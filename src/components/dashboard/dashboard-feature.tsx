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
    "3r4SnFV529hxoaDtx6FRZPvQG5XA9sfVpT2jQeNKXFXogBEttAHQG9FQi2f37GSfzgg95DBuLTngp7os9RbpuN6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8xB44oVfT1XgiywHYNayryyMH35vRtrV26phxg8fQYzrg1RzPpdTWvXLVyfYbpegFkqmgLhM5rSpeoXtNwstJC",
  "key1": "3DaGsir8Mg39orrQKGwYjsLcAVi6qucaB3uEHUT678qWpBDhPSSuFVnc8wKURTNxJ63qoZ4HndkDLn7dYmQwdD26",
  "key2": "QHGaiZZneCeD1q6E3qsFPpmgHg7SLAYpnCAh3uqAZAf74QxZfw75Eh2DhcgxXqt48PVq93yqCg8rjTi915G1sgs",
  "key3": "5GXomiGfVK9uABwYnaqmaZTSKXaCm1mRSmQgkhxAh4rcU3P5VvntxAJjZrtk4A9kZG6ZEd4t4aWy1Q8jChh6qdhE",
  "key4": "5gzAn9qyiGdiN7RjicBW3L44guKUGKLfDkrqBN3LK7hSz8hZCbT7ENsaeAFurHeEtKERTnBCJGG82rineMNBsR9j",
  "key5": "5ji6R5pPJfJoUqxLoXRCNArAsAwHG357gi61S9H1WfebDdqvu7U5yzmBv3HSsKnJQ6FjidQh2YJLjU9qbPqsdcMi",
  "key6": "4ajoYeXjGcARW9rGPqntBd2vkY3dbx4eoYToV8WgavqEgAEod2CJ6k1iUSR48jUgFwdhtww6qyZkLg5GXmVDNET7",
  "key7": "25FBJQ1pLLJHjA72P3aPBKV99jHTcwnBnWJuedD3RzHyoXgSXD8x2gYt6jDJLHtmLAPsMhnLHQdZWgFgk7yi98BJ",
  "key8": "4WPDAS9YEn8LM4TgUPaiySUaod2swxkUVayd9S2HmV6pVMFYbvv8UP9AJQb2mYY3k9LH8ALKFZHPwYY5WjeRgZUL",
  "key9": "3Eh5cC1BhotQB5W5SHEsPwzWrZTaGi8LFYPf6NUtkVnZBDGTdj16dLonsWYVmAWBqmY4LLx4Nrc4xtRrMKEu48j3",
  "key10": "2VA5jF8aErWx3g15fo5NGbMkddeeiXSHf1Quwu42P74FUBHDN7pZ7zhs3HS31crYzXpkZfJXxBEB38k7qLnw26MN",
  "key11": "4oF1HUGycUsTYtqPnzwoBR5xAS6kVGKcbhjh1wh1j3U6NmKiJCj4t4h1Q6vDvcby1hvnFrqsjDNKcz9Zp9jubPda",
  "key12": "6EiZLBBnXKuuGdRWn65szANCGjQDSYK1BuUWCGHrWKEdJwZbNXWBzriNAnBhC23A1h75fBhvxCWMZD1yAxmKDDQ",
  "key13": "5Ct7HwenmZidRpfSBjfvnwvUxwAmp24ryYuxpE1SA7NuLi9dhsC3tqjmPB6H7Cngqs795YgmNstk65Sm812DJgi5",
  "key14": "2EQVQhrLhAVePd9VbN151VhU81Kd85hmWivsENTp3RtwdM2Pt4DesqJQkjtdQuwuzxz7adSxR5PRR3hjzkQaDpZx",
  "key15": "5Dk3hBJHy1ZbM2dkvA5fg4BSfkjMGpVzBg7mSm6U8nrLT3ixtXy17yN91XrqmLMGM7MK76UoaaNRGuQ5DgrbfJAb",
  "key16": "2VXb3gQ7n3RpNX9CAse7PS6fbG9JTpgYRaxUcoi5ouUrT5qRo43o9gvpoRS5sLCisPhVUakA6HPtQfTs19MKVS6Z",
  "key17": "BcL1vepDx1MQQEkhYgUd93dZMTjV77ov5fPAbQi7jh3uvQ5RZYFxd5K7ptg3MhEaGFPuiuR1baHe9ZsQmbbEvR4",
  "key18": "JA62QaYXrjFwtJRyKsxXAdjkN5dfpMnSC8qm56KBP7bfhnqduXZitxXHcEbXodY4KDqcKw5kkN9B9cxHnxAeSQX",
  "key19": "4ktXroSDczRqsG7PYmSDEtf8iVR4ikgYFiSTbh1irMUYP56vcJ5gzLCLg9DPX6oEB6g4dMfsqY7o8RA9tmvWsGJv",
  "key20": "2VszeVyW3nLry2BD8UBsvbik3957mr4oo1rYBaP8RnuP4YbonG73eZ56YDtgLFJvUu96P4LFAjDVGeT8LhDz2SDS",
  "key21": "32ikHJz3pDPZZjcfUV1zQBKveWiY6YmTLt7itxebASegZejvq3oC7LamNFPZoNdaQmrq6RtCznPmo5VnyfMdhrSH",
  "key22": "LD51UBttUopRqU8dgRphLsAppvKaTzH9WeCxfcpj2zqbDt94LGEwhJb7qKCGfLFD72MJBKXfiR8euVbupUSuKwc",
  "key23": "2FPQNaCcyYQPd6j8pDs1zgs4tfTPDzirBYuqwwipXrKArcWTEwVBgNFpnZ3Zygt7MtGikqRV9txn3iuSW1Xfd3UQ",
  "key24": "4fV6KT177wk4eng8uCVKbwYiKoXQM1byZm4eYXhBB8kHjTaWpopX43rovw4jKKHDiHNgvGNUcRGqSAxNjokVYttX",
  "key25": "5rkb76MVFNfeykiCVndYHRwfwbhG4JYnHhhrSN1wjZDRqzdr3wKBnUG3CY3ASibtL9Ywe7vcswbmtgAUigdAc6Qs",
  "key26": "CkgEhoJ2y8rWL7WRuWiFTaNQyDF71iegCeAL4ycacXJDqkaWhjVsTQc2JYgQjYx1TZn5AJ72nEdVzN5d2FZXvgQ",
  "key27": "45Xp82UZ4Nn5pPfksnciNYa8Wb66QkvJ9eVbe6FgSPg93kRWqH3jSLdVtx4KGyh3n7fo8cVfWUtts9SHmakZEC83"
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
