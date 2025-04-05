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
    "4hB2hZq558enP1Yh7dbRvDMk2nWfrjYW3kshwU9ds6PnxZ2ERQHEwC6QH5wfycLsb4ByzQ766cYj9gRiB7cWY4ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uMHMiNsARhg24ff4tJvVLjBXT5hzTfuZNxGa4iUEpZf2jLJmszdtfo5XHaV2MRaMr8Jy7X3zUJBVUgNP8t3ZfK4",
  "key1": "52ixWHLP1bWdJBpR4HSRJop9VSCxCJTBCAoDDWaSQMLQ8ozYijBiLaNBtUpKhJZxYUF1FuWQt2LNm41Za6D69oZk",
  "key2": "3GV1PeXtKTdykKVEM9wUcSpK64TzBWiuD5gYfPxoongMXWmHJcoRFNSmZcmr3teXYJ67MazaqNqAUWY3WbBNnb6X",
  "key3": "k8yPv4gaZgZU3Vsb7d2d9wuWKa8mEDX1SgdHVaB1ATh76uyqBPjCGzv78xTRvkcHBY231Wm3MAzRewLZVt2wQC6",
  "key4": "kJwxrH6oYFK94wzaV7XqzSBqTbaFxbJmHb6JkormM6NA6TcMDn1UeZg1tdZa7vM6RRFZGSk7JNs9Kh3noPEJTno",
  "key5": "397s1GU8kbn6pJSWbY2WPG3bh3UA5fn9rNSFSaWnUyYx5tbbza1YrNvPBy8RK8MePYZrXuE7Xn8ev88UNNCWcKTD",
  "key6": "348wBMe3zAybEsDYh8N2n3xSfUqSeC3iRWvLRNZ7X8fdrQgygxNP8FZYYimb3PBzRZhiMfZXHNWTLZkiNHWrn2fC",
  "key7": "2zgNK9ecn8qhCk25wDfRXR8RnQRa1kqT8dGC7pdnhCWgNXUkp2nK19Uj2tr1hwmLMGpUNkCwy2RbGncvWQeW5VDs",
  "key8": "33A1jSKVrYV3ipM7pktRDYrjhk2vqMbhJ2A2ujMdCS9kFRJaHdseREu43w9gwvSPjDmtsDD17PBgGDLDUDM9JPNt",
  "key9": "3jkK4y1vXukMTEBUavDyTTgFmVPGSYfviAU1wP3zs2SJw2WRkWZyyZsruukdEmsMgWhyt315YBsihESp3ger2jag",
  "key10": "3Zy94Tj9LHWjXmbwhh61B19xXZMRk5oinukkWXZ9kp78XzGCDzsY9nUaQVsQBvjV7RBrn5nBjJ2d2cyQDU6TY2jF",
  "key11": "3qG793Grmht5GUJhBBxf5EPcJ5EYpC7LwemRXKqqB3pSab6SS9iNaik2iDAyaX16BznJMzL71kwP8HjA6TgcBf5D",
  "key12": "3rKuKYtz3dQ44AGm7TdUWULrQLn4xeXGmKHMLN6vtqfui8jituJyQPArTk4uSnUvgNbsyqWjyrhAJyCcyCoScGXA",
  "key13": "5CTfqmG2ipLfAJ3imp9adfjwUgugaNWdRFHPYqgSVQuDEqefx1YqokbFGWqY4ExUFp6GQN51aqpYrPxBWTaw76DQ",
  "key14": "5eJ5kPPct6r89kPfmiriZ92qCVVzddtbuAvbHSfbQ79ckQpwuq7Yc7keB3WLqK9ft4zpEvA3Z29jiMCUe3LU3nzS",
  "key15": "2HEEsgBaVqo2U2KgoCpERCKSGgrD3MB6RjkPUcetpoR3h8ZtAYDDg4xvDsm3cR3UQhQtUxRpmkfC4fDSg58aoBZh",
  "key16": "4ZPZd2VgPQPTr4Zk6nA4MNPxMyd2qCr3eUMLNuiFMtkFuNeqmKp6jwzVTFmhdbP5VEhS8uqEFn1frdUxn3tv1xBJ",
  "key17": "26R8GvDVDVQuhQn23gzz11f7xSDjXfLRUXy2PAjLuKWVzbQVHA1Ept5wigpgdMdW7ZkUGG1UXT8gSqtvciCSjsPv",
  "key18": "4ctuzHDMKCTHVEpataKdaZ4LbrYcMWu6yGBw5jKyK1szCJYX11wL8n7ZQ3bht5nvq8mnW5wcAv2ug5nwqUhCnVaV",
  "key19": "63kHaBbhphreMXdVxRfGNZAj3HcVwABXV8VT4twy3iBQYYAuYpUrApqJg9tyN6cxY63aCF2mbRxsVm6Lgzi8QdKC",
  "key20": "3KoWnWSYNg92g6jcvcUbz1CZ9FBWCQXs51macPF7tgCRuwtBq8WxsTuG6ma7TEy4EWVc2chsJ25ZvV2cD5iTYTRx",
  "key21": "67eUNbASrM7Di3t4tVasFdK58BgXRVZ3SJFTvsz7WUyirZgNV9y1PxdGjDHZkP5s5vhaNFfZDJ8WUXQ97g5VsJkG",
  "key22": "52ntcx5nyNqLSr8akzwRMA8kEvuYYNdZyhc2wpFmKLX1eNcjBJeZ5APNJWmPBJ6x8S7k6QmaauBisQdCX3ANr2Pj",
  "key23": "3vtJivxC5sxc4mG7E2oVAV14TEUf1yLy22AML91q3oqCWNJDXQVkMU9KTAweUj8cDpVotGe6jGBDyBzGGLAzD1Ez",
  "key24": "2mHx5mZEJr4Z4yz8GNUXG7DJc6KoA5CrR2K2LjqiewUkuRVtggvLWgfRs632Dni3vtAinU8ZPLNBMUaZjp9b1hik",
  "key25": "ioS1DDBGzjAp8ik2UvpcGVk3sKLs1xfvgFnxtsUcQgG5Mm255PxbG9mrSDBp5cmSFq63T2E8PZ5EHy7bnKKx6LR",
  "key26": "4eZd1RhZnyuBPfk7fmZx3qZ7A3vrdDdu9TtREfQKWgmF4afGUy4rMQk5zj7MfjVtk5fs8Gq792yY7JgF85vvBpwa",
  "key27": "2EoUg5AFJeLjuK4Dnc9sCdLK68h7V5UqL8XnexXxz3tqKrqkHLtEY9EBmbqsU2y4XnpURmhV8i2BcWYfuoyAiV7p",
  "key28": "3oh3E88qPsxNncsFUn4qqy9YChuLa9SXewQZZb6jBVaoVF2QptdBNNdAaf6ciL5hry4Tb3WmTPxBWjM45qDsx8np",
  "key29": "4HXotHQSRQgPHp9sAz6usF5SvnbcJWK7qjsrXMg26YnooYifFBdzAWiNTKmqgDmgJ5eZNMPy6fXFcX8z5iY652ZW",
  "key30": "2uDQgqQmjVfDrknRVTMNxDnJfEYnK89Cq8qe8q56wZBQEoApqd5pBP1HcqFxnjMLjHfVLg6j74i7TgyjGdAGPEXb",
  "key31": "EzvjApFuDAEr4AhgBJ8U42a3Pgeaabe98xw86xNfCHe1s6Shx2pN9xF3tMsPvVDGQeTrBYY2yFAbFawVZYSamAy",
  "key32": "4McMXy6JLUovN5fW79GMgwKp37JcHSawaYAg8RngmQYxGPFdUcqiwhgbuk6U2GNUTwvKWvpEwKCkUUK81qxqu7HK",
  "key33": "4rESXXNkvFDzaFosPWNgh3azQ1xjRwnXjSkzYMHQsHEKuZfbncqKGdbXFkx3DW42xD5eNpFuTJEgGodfCm7r1BRP",
  "key34": "9nCrdEgLJAjcYuTrHs9hMnFBgJjsXXyGZR386VxdKun7jKNZjBJKTPfM9EjB7ShNccs7bLKfaXwjqj66uAPguM8",
  "key35": "5GoRbAWc92VuX9FE3aCLNKWN8f7YZF7WuC5QcfxTA29XYFxPe7kKR9tLT9wz9z5SwWvUM9odcEqdfDd2Uno9uUXM"
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
