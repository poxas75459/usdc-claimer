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
    "34iFGpJYeDZ7tNnpditVXTTjS2pg5xeMCSCeqV5t5DChEQLzvhhQ9CkfYX9Ymze1y5C4nXrdeaFKgv8kv9kqahbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21njiU7gCk6cx47xS59EdtWCjwDg6nie94MdvJPeGdmeaW68WNKktx4hQnQiRqXnqjB2upVee8awu8HFfYZJpT9h",
  "key1": "2WXSgGWQugVXUKXBFzqyEqnmWyXun8VEVNBBeZMQpY9G536mXqY6MUdRxD4sc8DM3gXgw6Eajep2BQvhh2GdWTEF",
  "key2": "2xYH41TdxawLk16NQNCUdbq1FtCDXPzHGCqBXMY1kuYVC8W2KN1eCntzW1jtPCduFWuarUu85Z7MCkKLNmaGMdAe",
  "key3": "59MEvLxYJfrs6U5L1JoVt6cyBtTHUCE6aSYibnduUVLw3oTf6m9GeQZvVg1ZHxZ8vYqon3NPnN5y61u3vWpMkcE7",
  "key4": "3pi5pbzc2BgpFw8ARMoLxx6WRsspNoqTuiro7EhbURxiFWkQuSdNJ13X7nPUKLwiJxfVMTkUFd7s547tChtGsV9w",
  "key5": "3HaH8aWtrGZz7afREnLxhBcKT3rj9gZ9i7PEu7PtZX77ph6kKAJrcsJJThJnJnaAVR4Uqfgs6SfvJBtfCfEMtM8D",
  "key6": "ANKnQE3iwcvCDwtMYGRV7e6z53neJTva5LovugkM39iAZPnTwrk9oYtd7ymN2sADmVSvS8JLRUN94GH5qcyR6xg",
  "key7": "3Ye8nPSsjMmK48VCpZjZEEWjJAXAD97BLmXy8sgmkAwHBTiQdoATLv43Aeg27BrArDLbngQvX5NnRpQ8DEFvB1S2",
  "key8": "BaA9qrdEu4rw3hK6kaevGJLBxDnWkRgyihtmzLqxneeF1fTXefA9kezqpajPUZVp7kHa2tqFyzKGLp8SxReMapb",
  "key9": "32oMPUdJFN1aiBiZffBCLQcAhcZFg3J9kwmxNK6mPKLmRRdNXRupnNRJPiDkRXbJrzq7zNnqS3UZyqvPjqFSi7Hk",
  "key10": "4R7iK5K2cKBCZrt93SSRVa8dKdLLrj3gZGhvqzgyZogbv5ZUdpn3CLtUPHpWGMJ4EMWPEyR9XyccyFnPWwZdixeQ",
  "key11": "ThXzLYiFkmHWdqFzmijCfyDhXUtGV9jx5Uqxt95WTokk3cXvBJz8c1Fnigsa8KQ1c58Tu5494EKQcG1qvNHdahq",
  "key12": "chnCDCaJUbRKNUsk4vtEtdDN8HpGs7DUWzqdeo4ZdW4jqVsc6Vo9mdHEwTqLmL1JtnvcDerbEqzk41nrz7PQXWa",
  "key13": "UqEX2JjfEUUYVF4XfvHKKrz8XjF9L8ReADCkEXiukN4PYk2iC8teLcRRut8RUz2tJayGjVsBkMhH2cbpKnxRn5z",
  "key14": "46MMNnxoE3w7cQ1iyBnVCZatmnX4uwB5UtqxcZFUyjoxprW6ryCmJNnNjuKwvFeT766uyf6p142wFWiTmTybiZWm",
  "key15": "46C4saLRoiCRRzF49ma7ZvemgHfBxTrjcQch6qmpmUp1YWTnchxBbwGMSfcz8kQp661bafiY8diaxULH6S8KagPW",
  "key16": "YLXe3ZGvYfUe9KMcG3D5cM1BQhqiR59ectJU5rEJ3nQEjTzAP26cjYcUaewCLboojA11z7UrY79uQoqhy2pTF7H",
  "key17": "5wsKSwd28QKnTFLZEaGZNbSSRoeouprk9Y7qRVxicLZ8Qjcak9j7nvTYNCwuhyMnevE7AYqNYQJhnmWYoWfKvTWY",
  "key18": "3UjhbZP5mhcvJfeGkuv5N3pJiLW4DnXQfzTXWZxjnfEZP5QgKDB7fPSv2qPmr9Y2shCk3Y2HubJmZwr2WrEehnzX",
  "key19": "5hjQgnzKj8AYAWVw31QVP4KFSKunaz1P2we8rqRNYQb5MGY3Rg3U5hN9sHzufzHvEqsvoMNqZNDm4xXpmM8PSHyR",
  "key20": "3F1V3zBcUQt8P4sVTPZC6pcyJSgS52eXM13M8gcTmobkquWKSyXBFnu3M1xFnSP8hGBt6Lysok8TizKppmemJi8w",
  "key21": "2Qs68nd5ADpYSy7Tkky4VU7YWU4JhzofZcrsorZRKXcDTsoMB71dvQn69gvUVgzfZLJuAuXFSyuD8hNz7UBLYsBp",
  "key22": "44cM5fqBDzhCb7Ct84Uvqcpq8NQLefYwvSS7ZtnQWDrA7RSQZmZxqTdE4ayANBCbXUPYVLNsLpiMiAj3PJ3QJeNs",
  "key23": "3RSmSaqKWHVFyoXwVApfHCNC66S2oVbquoVQ1ExeniAqSfJgE9U45hVz7T89Kv4m4aBCRtziyiN7k1nacSjg4xGn",
  "key24": "2XCujUvTv3HTfYRycuJPhcCU7R2yN1oGXsUp6UAHawL1xRgriWc2BMQEFagMAfxvSPGQa7jwb3RSejH2cFJouWop",
  "key25": "2dRhzYVm7kyrDY5ZfNcBRyKpZKs4zUoUL2cKPCknuCyxd6TPKYiWgfwJP8A61MJ96tUUbNHEZz9Uei1fyQvZceEF",
  "key26": "2kZQm8i7qsaHFcDimy29Dg5xuKpYWhnh8DopgWj7KMT3dsQmFqyUMGPXkn6ke6khyDHjoqRcgfvMGT6jXV9znvxW",
  "key27": "2NzHaTC6GhDY9se9qq2cUy3yExmPmsHLx9LteKjQNezEqF22PSA6kwVFDSjSw2YSG3bQSw2yf3MdgbmbAzSnSiDe",
  "key28": "3UBgS2T7E6T3pGeqNy1RwFvrG8ja1JidbUNEwSUH1Wys5ydgJLteUPuvMyjoKf9F1wjwCwoioM9c8L6K5MD5L4SX",
  "key29": "37sA43BVdUnkWPraAPpEmZUdnMjbxdCmmVoihtosyeg7dnkqR55ir4suWjxeds5MrZY9APQueq83BaGxcCBGpyTU",
  "key30": "5oEk4eDa1nxqwL4DeButVBJxo7Pp1DJozp2k2yn71SHQUtDhsH3YdnUrnWZBpqt6ZdHcZqkXePjzcN8nCQfjoMYj",
  "key31": "5emtaqz2opnzxJoL3orRjm9y3Fp3w3sa5c3ue862XXGACnWBJ2FNdTstRaD9b552CSVXnXTyUXVGqyJ8jgfXHQb3",
  "key32": "3MLt4zJj51Lpqw91zAMfRS1BVtSthv1wm6RCPkw7SgqZ9mFiFb75k2U3Tw7AXvWdzrKKG1JizgiqUaKaxuohxjkb",
  "key33": "2YGC9EPVChiFTLSJkt9a59qbWa9hvFrGn3M32Tt3zQQFSAh5Ddx4isxdwPwPCRxvh3xL5sKbcGZVGFebi8j4ZRwv",
  "key34": "2rc7UzXhRMdb43PWLZDBKnhNtp7zRVDPdtzFh5nE2ZmBhd29TW11iWxLexxWhUxMmAmMfkyAmPfw4TLEi4LjFtSW",
  "key35": "3nFbV9EUmYvuPgS11cWDVB4q9oAM8NbowtJRHREVH1kAzFQ8RnSNzQdjdFTB2rAg926jPMa9Yoff8K5SHyTPJCM3",
  "key36": "YfbhSNa4cWCr8P6GcAJyKAnV9nDJQgq6ShkvLNAt32X48jft3iSZUWG4EgFcNDtKVBYadnbgD7gpbhhNW9UqQgm"
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
