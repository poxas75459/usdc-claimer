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
    "4jTUT48jD1cuct97ukk2XMcHxSnB6P4bZVUxU71R8HBpKSW1frBFoX54EGbH1KhLBufrbkuxAm2Fz8dyqgStgsbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvdib1iEvGdjtvk9GvLtq9wFmwHJrvsnK7iuuMFWvGYcT1GCagy9YAWyVRkJhPnHymHUSYohcGdBuDMorrCihrv",
  "key1": "22qMEKYGQWdE6LRmi7tvCGzJZj713Je9o9QZnXLR9eUV2emSJJFys4sZKDjdeq5zrfEx7Py5JhLMaZeCnxj55Dba",
  "key2": "3CWHS6hj3yPNiRf7w9oeC7UvnFXna9cA6uocrpwXmVAKkNY7kmYKrS4iiLvQoXQUbTLpfHEdKexp1tiDwdwMEgWs",
  "key3": "452cxsBGNBSrPZ6yvhJSnEzHaaZWwq5go5EPumL3Ff1uy9p9otThqqf3eeQUD1cBxdP4qjCcFUY7DjgtMJ9trgcB",
  "key4": "2ZHzP21nPRMpgGrshHnBCS2jZQ32G6kwuQxY3ttGTkzPhFDpU2KcRsgXPb6LFSqDZHk1y7AaYNQKe6mz8zxf6332",
  "key5": "4PnvSVZXuaHk2WqroJSmoHRkWxwNYDsEFiYcKwsdpGGKQURHjDQztqcZFcv6Xzp8hKFPjk3VzBq8REQcLNtW1mXw",
  "key6": "48vEiZUmsBVY7f1eeXKjWBLeML74J47KDc1GxxYiGCQL2zpEEowp2Whu9RyaDi3ba6yc2hMqETxCGZDgjRVxD3q1",
  "key7": "3CRKf86whzmjiktZXP2d3cALMpsEexGhKaFsU1s9qyhQzywU3SuivifAekoFfJxebp5BxyBMBwdc66jsvUUP7zHJ",
  "key8": "37MV1Rg782wgqDrFJHEX33eeduTRwai7txdZZ9QUpxGQHPZBiJadoLv1u444qqAGRVFh9vQp3SHAy6aUvp9BLgKx",
  "key9": "4XNBkwfpqsbvzW8xThshmznyKXmsWywWfWrKvZp7TQh4pMPABjHGkffSb6tG6y9LaEXigCfXnTJCs5Aaz7Ewdawh",
  "key10": "3RqY416bzZWPqjjr6gk4nERc3dPMpzEwomf4mcKtqzGonpBn24GgvJbTznDvHa6ejiqMEwAoboSX3d3rt6w6jrfK",
  "key11": "b2DfDTYSzentNJFjf486QMNPAyPX99FV4Li8gCzcwga4VefCtZymJrS9skEba99ke9yPeudjaDBjeZRzJuKWzEx",
  "key12": "3mwnB2UC97au5tQpJmQKTiyUVwXXtzW83upD998QT28GdS1WLbdDwALqKDXR3YKCr6dRGcP8UuejrzDR2izYBCtx",
  "key13": "y9FuxBdQLabWZrX4K1eG4U6nHrNWKjUchUXxAgqHAJfkr39xwTRkcDaTTiSZYfayLvJeiUG9XrTyBfDr3cDH4C6",
  "key14": "4J4PGxnb1ReyVf6RKy8TL9W8S5Gfn8msqutyiwvAcrmMreEonbJHCwtCsRAbFqnZPnG4woEf4WZW1iPj92T7fkQm",
  "key15": "2GHyUSuh7GRZh7pfwUmj2mLn7mW4PwSfpfvhJL2Egw2f2XXusj7SD7uXaYRxisfYQhQKTXiKdt1UVkZH2ScfH2xQ",
  "key16": "3KTpGAM2upAmCirzZYg9FYkRKivtms66QCHtpGNoqkPzpJcJ5q6PmTYZnfnFdfXEqhmftYcvUhsF7TbEHwt1KFyv",
  "key17": "2rLqgjBbBqRNjo4wr5euEgyGHCCf4tga1eijYbfZmqMrtsASHeFajk3D4m1MTBPjuXGqGKsdNrBwz6WurWdmK5vd",
  "key18": "SA6Dm1THYWLx8bqnUqoVXT3LXzNcfseBUKc2AbWVGcHQs85jyzqqKGAvCWqKSniVcEkkP68GXp63GG2tz9LkiRW",
  "key19": "4C4TWeh1g2r4uRB7XCJbHDBP2No53ai3Hsi3WzvgPDb6xQB6PUATokjakvinKwqm3ZmYdtSFJNWgadoJUDhq8tm8",
  "key20": "284KXAyau22dbqZL8Zw4R8qrUq5xDdrviCjn1WZsh1H8sy2bK6ymnXSbZAaGooHv7BFebciRXVEvNNdXUKWtmJVd",
  "key21": "42SPcDvtd2nSa9jvdoqahEtFsreEcS64BFeZrFkzP3U5fcprsFQBtYd7F3N3mEoZVqJdoYNSP7H2EbXBnARmvcpr",
  "key22": "2qdmtZKz4L8hdg7woCLW8MSCJQaumbYXJPsvQPuzrSPdMeidaU1nFhY28ABqQRDJmD9HsCqQTtqYKj8JdNwjVmPq",
  "key23": "3NVzQmh6f9yW9Jgkm7mNkRZq8MMSiqZc3BqxEWpsLMeu9GCVjSPYDFNaBTw9KaKDKrsLAJRTuH1TcF6qCPsbnufH",
  "key24": "4i3jeChjPG5962MDhmyLTKnQLawYDDYe2QzPxszdxPFzXvNFK3vLZ2D7PhaunPkM6WYqbAzVQieg4Y6CE7Uggs7B",
  "key25": "4ufqAC8LC52W7eWKUHKyL126ACgCYqoHuR2EqiSued5ERhZ8DyUrxY37SaoCEraWvT1EQcc1uj5dRsLxTiEKvMe5",
  "key26": "2pXsJZokp4zk2tbFVwJchMoBmUpaLSeUUm6bXqCpa32fDDXCLF3amHTsp31SgSKKrWq6ktjiYqwH6sqQx2XU4tAj",
  "key27": "wuSxnhpeqa4JqBVCcaLR4trm3QvTCCn7aigYwGyTLSDt1RmU3uZSefRMNcXnXQ28c3hnnHHvF28uoGv8QjaGhhh",
  "key28": "25Ftdn68BDBefVDjTnwHJuBBhxXa4rnGhVVRwG6Tc9e1BkbQoq2Xgj75zWyUEhjvX893HNWe6M2i3NnEiyV3ABz6",
  "key29": "326aTnVLxqfAQYXCZANQpUGu8AUocCCVKvyHTGEVZencPpnat6paSSK1QkQvtrwMwYqShKcAvCP9Nm6Fk1fAEM9h",
  "key30": "wG5Xdasa6mZcEg5SHZomB7sQRqohvmdtWXC5hrS6hgsVfzqn2o65Ennzgx1tLV5YH6Xz7vrHbggVQfjihwTLVJ8",
  "key31": "2o4R1DpjY7KKc5KKHN6tbJvUJ1msHQhNd4oRbjc4tiJ4aBoSMKXpXo2V1jGZfVbTBecnyc1hhfMnECWVMgXfUYXE",
  "key32": "5AmUbKjv6tSEKQ8x8Yy7kvhbJGk53bEVvnkNtFWgGdUFYRFCoywNoyRxZxVP4HpxK9pKZc98erpAxVvSEU6sNdN5",
  "key33": "47GZgAmpJRXQrYvwudJqUGHQXyioqtfRPB2eJNxLVgibctqAs9qeNLs2ZN2Vhr5HnbkXao3wrjxbkVtFDm1P8XVB"
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
