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
    "UTq4J4aPiGi49tHgc6g7QSE4tVd5ufNxtX2F7WtceZSM2F2CCoqFMXmcfB517mLZhx1bgHvBeNdk7FwATK4HBfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W634MQ28Z8x1y7oefEqo6Mkrbny9BN2aMKK27MqU1GdBSBJCaAtuhwgKoV9GkmJrAH7hSiCnrE3MR6sC1nBN8ST",
  "key1": "3GuWQheRB8B8wo8k5TqHxfLjq1qUkEAi1t71oXcokjrAaa7WaZ93GwgcMuZEMrMuYCgPznW29UeRy5oeyL2uu1PV",
  "key2": "39opM7XihE4aEDbEK11GgB6s1C5JsWexfPU6Pw1f12wpxxf6fjeuqjC9L2TGjhQjPHKS6kqvNwFaugobvEZtQxYu",
  "key3": "4ao5aYorfkTuzdA79nXuiLmFGUyMSEThTvxGgJC93DVxL8fZgdymGUpBqQ4nL48KSXiL6hX9ALrL7mNv4oB5m2JX",
  "key4": "4sUvNWfxSPeRXZ9KBp2hnZ2uHnVeUUYS3eF8o4jhWLFWSvGJpRwV7T6X5C2LsGMxWe5Df8V57ZM1crmTDJYnfyUo",
  "key5": "2AkXgmVvGJuC6fH1g1ovrvVWnLdWxrpmDt2ezsztTwZ6GiRw184bFAvqo1DswHsZyB4zebNamuwCQKq2fRtE9QQw",
  "key6": "4b2Gkne39NV8KUMhvz3wvaeuS3WPpbS4vhf6wrBdGRVHdTb6ts8zfwE5uKcvUUeCR7x1dWimo2SAiQRs6a3FZ9YS",
  "key7": "2iJ76UG1WYzhH6akFjukY9fuRTTaWztjjFVPhEAYA14WTJperZHwCKjfpZY7xqZA11erDS8zX6tbwfV4s8J5ibT3",
  "key8": "2gUYzspL2wZTWfMQNkaD4ZzBT5BzUrrx2JWFNDsSUGsLyQWf3gPiEpjE99KCfBQh1GCjWWWs8REHVGNY1dopt5BU",
  "key9": "5jg1foeWfJ8aqL4Vtj9friXmqMcwk9XKPAQ3TY2d7Snec7oW8H2FqRFS2a9M9TJNwJCG23VrCR8PD9Bn8rohxPsQ",
  "key10": "23jpqHbnQ6hnFaz8jWrwV6r5AYSNeSzZvEiGkHxFHuEyyvmiCRSbT6yPJQLptfRurS2mRyucybZaB6XuiPLM37aX",
  "key11": "3GFtNVVzU7YEJTjLfhppcQSvrvwBqqG6zUfjb9r2EaX3HLRPqHTHMUxjviNXnEdLGn37CEa8kegEMnQcAn68RoCH",
  "key12": "3LGuEyyA97LLBcLz6SvYfQwFRx7gZnAXkCmaKrJ6wTreQmVXjCE9XVPRsZA1P2RhVevdvbKcP3ChQ5ZdABHhc8kK",
  "key13": "YfbcqUHBPHo5n8CTDXoZQhM7wP2kuZNoSvT5otr8ihtJh2pv6Lhc5Q9LRSk1nUKxj798rqVDFgvmnYDwiaC6bXt",
  "key14": "4E3CRrxCXsfcwTksYvLV7iLUbKfNQXoa5SibRW39j8saezxvSg3CAqbvcsfsZMvxASQ9FugerHYeVtTeoaFkd81U",
  "key15": "64AGAkhMxD1xaoa8k9HGTB4d5bEpu1RXiGi3MnyeGV9ZRgAXTyaioygKeyd1QqPMstcjiZrtESXFhTTzXTSt9UVr",
  "key16": "3qRrJ8FKEJszrzw4A8LTk8YXBdwQXqbBryCZufRD6681pvbh9xN6XcZUwQn3Vn7GgV2qosKbkiPGxKLNXFtTJ9k4",
  "key17": "33DDkoPfVTLzXrEV8TKRYNw9hD5cUFghpvPy3fkLzzYvgTDds3f2pFQW2Zudyc3ykjsftjPyxNT7fdsGWG9MsAdj",
  "key18": "hM3SAxo6zGm5kQyQaYcPNdVHg4XHHTZgi73MwoKdVGmJPPyh2MmPgJ4BtJMs7imSna1R1Wwc1oyLiPLaP9Suv8X",
  "key19": "zX21R6pTne19PUrr6XJQ3HYPBUqDCKiFiru1XpLSDJZtU1BHQYmzjSLWL9TkC73Gh9vdyEqgvx9sBWeMSaXj5vr",
  "key20": "DjMJdKHaK3J5JhabfgnLot4XyYTAfZ9MxDm8aT7ZGhqtaKWq3FazGnKqhYQ2Np4uXvT2XQpnT6bJjWMqSqG3JY5",
  "key21": "2A1QThjdLApb8zNUhyYnqb6QxuVdWpQP5megCMzQvw2XFbwi1Qx69gPPLQFu1KQs5cVoaXR7uFcDg9r7om4FM6mB",
  "key22": "gp3HUyCdg1tVL6pJ8fPQHtLJBhTqE35Fstgc2DpUgPzBXQopEAynKuooTkumbMXGhQBnKmcMeY2VBRAfceeu3XN",
  "key23": "N8mjX9B9xRNwu9Y2DgEUgrCUgy5aeCCJqzDV3PB4XzA3w3XDSKj9ocVX5G9xjRCPbKC58BJThXuEPskTiGZs6nd",
  "key24": "3QJHSdDw7L3BcPns8c8LtjgpnnoG2Tc5GBNmV8FUBfQ5QUEzRoBKVyNXyCUTRkgkjgNFKdyUh2pGfbkZLdcLd3jV",
  "key25": "3LzR6kcL8BHFgymdjAfHS4PNkEpgEuCTpNW5VnsMbdDnzdW7GAZHMesJUYfj1fVY3m3HYooZVtTzSTNRKUS9ectB",
  "key26": "3bHoPGorLLWRb49azJWhUeAonhDWA7R8W4qj7dyjGqT6X2YiQwemkeZBy669myLoKXZNuLaqoubzSq39JUnGdToe",
  "key27": "h9uQpdX61zaKAVZFmAVbPAywi9bYPQqBwaS8SDowF5y9Wp8cFKWYPTznMGJ7qofb4SvCzQnt9yQBXVYFJ7oxVok",
  "key28": "7G53SxMp1Avg9WNnVv8UFgMVLDh9og4rg5dpRjDmHKTf3EJ4dan3fCXjrFqbV3PE8JVQWYwRUjvttrjm6BgGjLt",
  "key29": "3cNFnme5HjPRJsaSY3MqtzCfzPeyzQpFr1a2E4KKcnK9YJHmGLeFco3T3M4NNZ18eAtNjbEtxxf8BpjwK75uWmYv",
  "key30": "5eGBX2xwc7RXVeDeLuAizKyXq7DQMCPfnFKMB1mLJEMtDvFJ9xhZ3xpTrzqs9Sr7Ean1rDgR3xNpcgXopncWXYbY",
  "key31": "5ccP6teD46WtMTrAbNUprEdVZA5qctS5tpn49BK5TnVBKUQqNiPS41TzwKoiYagV5qmp6aigB2vcQ7nQJxGXyqy3",
  "key32": "4JMP5YjbVfCAW3mwYmxsveVQC4JWTjZALseMGy3mqzYGmRbx5AonwW8wEAYWdoWRcukn3puC6xdQbpKNYuLLQ4yv",
  "key33": "63ABPTfN3VsBRGQ6C49rpJnwRA6nvTDmrf6ky1rd5CqYEPJQ2WJJnuxfYDgoibQq7M949RpXJQbSND4ewSbwfyAV",
  "key34": "23nuJi9BbHNoYDafPzbdq5nAyqA9FPFhwV91HxHiWPmdCSzTNHbu82QnkAHJywiLZ4xipjdkcUANL5wuk5pzFMXK",
  "key35": "4V8LnwzXcu9nthUrU1jB3pGQZ3YJvNz2H8VE6KohREQ48WjwVFvJmRKuuyFoFmquLMef2yemZj4dprbhirmjyuyr",
  "key36": "226aCGGutMYXYkKQ4k9oiVHTXXvy3WftqH9fHqTjfB63rsEeY5Y2obTCavC3h6cuwfiu5XfQLJoh5TQEBC2wesJj",
  "key37": "4y3iCCXAunxqzy4k9UqxNjnKPKnLSvmh5WHTSuq3nM51mxudgkZNDaW1nnG58y15dmhpoTJQRbJAXG2oCVZbvK6J",
  "key38": "22mWDJy25ErPuxbmtwqzk5Sxdq8jfJGK9UWVuhG7ai4vK8YmYuuejw8eHvT3u6T1q1pz6YpsBYCPtUyT9XfJbBEr",
  "key39": "4offsoCbB8YzpSMnrsod4FpJu6rGWNMb5xs4onNkdjR5Zuohzc4mKpoWijuFhT9WfMCaPu26nDLMnSt3RMce8K4T",
  "key40": "5T2BSPZstbxnwURdfwLtyzGdUH3dHQU29UpT7qZJkX2KyC9o1T2EFJzRPcGzz584pyBEk8xUFfCFKS1kgYhdNAfB",
  "key41": "43eEZW7ttg4vnHhKryex3EipemrZFCyGBkVspiTEb9xpKagE8theoiXx97up7gyTvJ7AnyeuM9DEBjLkqup1dPYR",
  "key42": "4Ms3nKpoCpNbiH3RpjwUuTAT7vSgosZeSqf9vstHLE6BJojkA8MsqwG9nxDPCybNtpGi31tFvcRyhCekknWdr3dP",
  "key43": "29NwQcojiWq5KmzWKdmjH7cgE1m944GHcZSyrA9NF2932XS7KsF4jpGAkiffCteBoXVx6kbBnqHx51SGVZ1Gs947",
  "key44": "2CnUzhYFj82QjSQC5mFGED3a4REf5uyKi67GPteXvSi9Px7V1ugSGsxo8WZHRN8Ae21qWWZeQpjRHYStBjZy4cs7",
  "key45": "2JKnpd2bnB1x51Q7WtwLJibJNHb42Rr8LXF394tpCTozbMsRDT5qrV3csRf44K1nckUUpf4dA256rXFj55Veoh4m"
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
