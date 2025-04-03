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
    "2NcZWmzohHDbKSs3aSPLidmMbh4XjeSaajcPQkDkcd2ZBsNNp8iYPvabebHNVpY2R4s3Vzs1yLJDZ84AtxBf77j8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kmw2neGNuYthSncEMc95UWT9Yk5dZwK5yr4qQY6QpLSGeWvqkBg6qjbFGpsy6zJVXwAdX119giWKXVvqk7h7aiJ",
  "key1": "455u69xWssSKB3GqYuvLiGtiPp6anLjKzXctCZ5SMPp2JuzSG2cPgkNwuZhjYxpYHBu49EoK6pz1TEYrPiaUaLrG",
  "key2": "3XHrAti5CP9usH5YXvAr27sFtWzKVMmirB8fTsNp1kGzRfZBeD8SXbj1m78fNrHus4ZooPQNEuzSZXaFWjyxMraL",
  "key3": "2JjrVL8V8xd2s5GAYpt5UUYAXNzdAAWjYwzGrzLAdVnz7aSEyrJwWxTGDvSd8MD34EuzzxRuMizoRoguoRXvVZZQ",
  "key4": "MZGoECwgyYAiPYRqR3mSPysEMdJbd2SE1mzqzgMLMjp7muX1hgpKu3yu8UET5cZZCNhUVKmqLNuhZkhgSbw8GpY",
  "key5": "5cTAoznZEPco9R8vZJpNZa8appkbzLGiBUpK3B3DiNmaz6LWsB8vXpMDQ2f7Awit2RLA9nKZngFivdxMEnDRXXkV",
  "key6": "2oW8JdJTwcokyLCzo2zmQFoiqrNjJywSysEfA3FWhR5TxfoEkX5mw4omM6cj9jyi8dcCCjhHrgzkBpVnxh7CabAt",
  "key7": "4EGtkLucaE5iNMPV2e9oGjho4NX3DESpFPCXwpeofMbgJJQeakvU6GKRZtg6s7tyKbFtF2UK2NcAqVhqxhrx7Qgn",
  "key8": "4cCM6aY4wiSXY5DYvhbufd3QPfJoznCQXLwRCUQ8CK81NoKTmG6skad5zGwjDb34PQvUBHzrghnjPnDiqUK1dA6J",
  "key9": "3GAuVwtj5ShJaLJ8wqzjA19NuVZ265rjJZjcCTtsiafhEKwZD4ddY3iS716a4tFqaiubbpusz2GtfeF5KpDXMYaS",
  "key10": "2tPQte2FgNZxQ3KzKkk9mticK6sqNo2aE25eLQzvUwQPfYawrZmm991toLXr88mrsZ5GujkJUr31GC1pcqjMtyLL",
  "key11": "2RLAa4tbxmnD8eDs3dwj34rkPNymxtaizzGUvs4hmKn5RafukAY5TEhu8wG2rxGsSeWJsheXVbHxaD3aB3UBUrb8",
  "key12": "2aZE7JpvzdX2dW9dXbPAdAoHXQb5ABfmeeqgna5f3PyHTckkbAyiBMWSjUUopk3viJ6veKL7jE2M7eG6xuwfzn8Q",
  "key13": "5ghVMLbLHtrUpd2Wb8GpzJoJkqwAbqAPkxc6PL4wyBHUdJo9d6rBxd7hGEgdKfAYVDkGhKj8bhD5F4L6RMYiHqbe",
  "key14": "znqxByGHoyMG7c8YVZMffAKKefKUgcLyWGqUaWtS9Yn5RQRA36B98Cb9G7C63GCRtovFdqp1AVeMd7eRrDQhCRx",
  "key15": "3rmHY9Fd9AH8duGL96Hta4KrhUeEDf9JPXcNnmTjPR6ZeqmgQNUjDhEMAnM7xYpvrMHAKXGCvJCCAipwLHWYHnjA",
  "key16": "5jUfC2XbeRUe75htRunfVN9isUz5NsrK8TnnuEKSzdvuVd2f6mtZXd8nkGfG1LqKpWk68PXMshbxSqU74N5XjpKn",
  "key17": "ac15C3xRboJF6JM57No5cvZtVHhyMo14rcPjhwcfHYX1eEjaeuQADnT7tcPxwtrYMbztw6iSiu3wCbU3WfX8Zc5",
  "key18": "3y9UceAQQocD11pt9cTa64RtYfZL1ZTUxVcUBTYE7qcUfV9ApBu11dkdQscwxvwnPvRFkB1Yc6KaP9mC14vbUPv1",
  "key19": "4hqsdq55tbTt9oonzLL1jbocnbDKSfBPimCWVwmDSqZTDh49GtVqDBWeW1V2npSj74C4tHq4tJGcVaFeEiXbtjzK",
  "key20": "4gaXw1hWsKkpHHXdhY5LaxAZ12uGf3JbSbcY3oCPWLoDTFcCn6B4KJ7RjidU8dxguqc6krJDAF2s7cghGMJU1TbW",
  "key21": "2rUkhKdXCQvBBa8LUKsdMDYZ42hjyBKC3fqtkBJHWwXdj5LEXRRKURq3b2EeRnxbYcn4j92kyEaH8RiBAuhTPPVh",
  "key22": "4QxhoatvNrHmCBULAVdEgd63GTsiQ2o5wJWq6MunnDeMWc174TD3grWFFHB2ZNDGFhCy8jDbLoLTAEzUHWXZiwR9",
  "key23": "3b3ZXWpVj3zjiyGSyvrPh5VA9jfQvdrEYd9Rqk44GMBpPBNDfbfrsghdA8jktZ3sQcDMu4FsGZKJkZCu2JxRF9dU",
  "key24": "53DLifa1T8RQpPSKDfP3DyvptUq7dBCpLGrdz335Tozb24tSvwTzt29otsu3MV58FfmtRGMchm5FT9ZuF7xUL1d1",
  "key25": "5GTxBWbCxSoxuTQ89zRJe6zJ88Z1fK68ZNjghcQrfVSmC6oweRcF8aBEaQudpd1kKeD7w13sC3EuP1aUSswXVWHd",
  "key26": "3p3FjDRvZPCtc9ZFXth4Xr3A5ooiBcX5cqFwN5gHeK6wFsdmysQnBYcw5PoN79tm89HzG7xq9xNbWtoKos4fhoBu",
  "key27": "5aXbt6XvZexqHDFNGCCs33umw7fV7crud4xQyLjxdGRu1sYJR4sndDpiFtZxf6H6Z6TvUFMuXUPsjaq5SVv5vTzJ",
  "key28": "2CD7qUbEMht5YY28UJi6yY1nXzPStCRiFdVExHREgnZpcAwZQq2aurymQgq3vtmnpnbnVUFCbxL6axAXz9ekvRSt",
  "key29": "5oEV5fHM6gAe5XxXTvBLd2YxV4j7E8UVKeQn5KGR7D874ZMU2y7cHqMe42rb2s3tF1dQxRq71sHk3rHBwYuE7mLE",
  "key30": "54dPJ5dQQcY55thMtPAf3ARhSCJuzhoBg7W6jFdibVzBvZHyDBJwFwaPXFi4AtJkBwtimrDiW1B4w3QS3krkbpqd",
  "key31": "3TaovGSk7V12rZwuyKf4C16RNQLCPsYMqjwEA3oRwGG7HDSiBz1vjFM9PG8Kpvssi1Uk8ysAPKkcz26P8bcoUa9z",
  "key32": "qWJD1u62smPrbtvCqqDPukskgcChkuER2Gp3ZdvspavdKbVF15AQmWEVUg8nZWeicRfTw4jcJRoWLWceTA1YXhp",
  "key33": "2aj9PtxzqcKgp2iukLxEbSzt9YWu39bufBdX9ftELCgQj2tcm5veWDUQV36Lohn33zyfoPXBWLCcCQ5KWFwqxcjY",
  "key34": "47fkRnwqn12NfB4bJ4u8FHNMcxYS5ZjuzC8WXXzMosKGLNVa5NpdWrPGD6Xbautt5NQJKebqGPuQ614mct7qjcud",
  "key35": "3xPeSpBAoDAkSL232AHWaTkhq7SjgVeDdzG2QBcvgiHJprKYJndjXGtSkBGnZqqD2TRF6VmVvkRW8js3Nmk2RVua",
  "key36": "4d7PTqFdyovjW6ej89nbpbj1zqsFCkkjwCmWkde8hKf7SSAkTyFPmEtxnTUEVJK2JWfj1UqJ3pPx7r3xJBK2KxPc",
  "key37": "3tj8E9G6WwbfdaXEkA1WXvJJHKa7kK55rqv46sdiMFLmpypHnGifJEH9axay8nqG9xvTuQpz1LebNeF7pfveFpeE",
  "key38": "3HKe2jutf43DgZPLCr9pj4HqQRwHr5UvFtvxY93MCNiciQcV42jxt7esLP88GnP44z92BN6SWkmuDmHAvzeAdCYP",
  "key39": "3HvAH8kdJgxjMcyRAjChEDwsuCt45hqdFuk8xagYtyw75ihsArEAQ6e1JCpksz5YWqPYR6p2Rr3vedyNg2UFZWSg",
  "key40": "431ucWESF5D4E2o4GFePTrfyiEMdsJ8BnB4Jb769BSEfyNJDvJRZJhWgqjJZJEQJPRukUyjVsTZQpGL1r2z9qgVe",
  "key41": "5zDN1V6B63yBX3xCpNaJFqQVqxVa53NVXr5PiugM7K832ZcLf6Gpadgwb8JebHN752NpFxopf1qtyUtHbJxzn1HH",
  "key42": "3H1cXTy9jNwcn8HfUkwCYUKUxLJUqxnGopK58xQpoCKt7reJGMQnBQk4K9FpVvE9YE1er2PUbDgof4KqHMxayn5B",
  "key43": "4jkNm2AqKcs21Z83Xd6PYWeTdpve72okzV5Rt3ZDFmL22uZ5urABxzQdV4EcoKWDjxFB6odUv3bLzZ5G5VyTKErw",
  "key44": "2DPveGzYg8DsGgFRg8Dgb8vWhn8gCNYCnag4HYUisWufH7crTaLhzjjiAxaw6vWWyhyCyXv2jNWda2A9bd7YybGN",
  "key45": "4wfBiymQDf7WjEf1xTtsTyqZtf7fJLmCqbFxU7nSEKsKqgcwY3mYq4143w84JcLenYcYaGQuxKeQezELw6nsTBX6",
  "key46": "cNfyNiRQFXzeERhEXG3kdPfRdSt44fAAArb5ghJdi4A2Fj3NGL1apHNqhq8g3sNsSNRRMF8vAeQnPJqUrkoEVW3",
  "key47": "4CkYBtsK8qn4qVtGqcffohrHQ85LguWsxJJctHA4zdrkwXdL5X4dgtCzy1uxJSnjqqkiyS4GNxZpKn1TefqRqH6s",
  "key48": "2XUTwzz3pNSK75F97eu1DpTYenbrL36EVnfhsV2W62kcXr1Dno1bVgoZVY3oW5XQrA7W8EiBu9FvFq52HxqdNmh1",
  "key49": "59WFqRBNvTh1GR1kTiN5fakTr8SFqZR8tSRupHXL1xnJu8emNTkPeqPhiGqsmVucwToZD14RqmyJVxA81YH9jQGu"
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
