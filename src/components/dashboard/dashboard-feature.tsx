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
    "2uYCzaULns9DKYtabTaZd1ty7SaXFUeMDSvVN3Kvx6fP8eo2mBKJZhvXuf4q6Wimw9GgH2nYcW1NLDbhGDwJrEDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33t37ZGPrhVy27AF52MbT63664vaYGhD4TD8N9atJJ6me4yvi2vuMumZbf5oybuhUCc9SSMMpH121oFpavgyvuvU",
  "key1": "2i6uTyEmuMLzu5GcaCwcFm4xDTh85MRLwbHAXidba8TwydXbXQ7N9K9ERK6U5jvhHGmiqKTP5kQzyPyTemXDBhVx",
  "key2": "4LBhvephnGrnwWnQ3E5u2yAZ9ZnngaAoj8hdyEG6foycc9Fzgyvj9FZFw9tXGx2Wq9K8GHHkpUET36dUmLc46KZb",
  "key3": "4iWCAr7QsSebbjSC4rcUyutMDNpErq86xE67QdEyDXoSMSRQMu4sfEvnGHvDvGfAXuQzSriT7WTbZJAzqbxLBCjD",
  "key4": "5XXx89Zp8wvwZCD5SWxjL9ANjU6Yv1NUxKkWejgm4FqhZNUAJESkG2mQGjB2YfpqV8e47SUm1u68MuSd1eaRTUTn",
  "key5": "DBXczWirMNaTCxMowQoCVgfvkbe13mTw1NGbXk2xg1G2Tpd9UGqLsiL4TFAuTm2iyQ3xa1dS7i6TtUsifErQoUF",
  "key6": "ECyf3Hc9nDqvSqxhJBHoVdGpW8UfqacbMLt9uesF65gjv4PJbkcQpxRLeZwjJErdNStmYCTgrDtUehconVrKw2E",
  "key7": "2XeFo6wJfT77TH86XNMeLFupX4gwNMiRDQBBhS77baRHidRQ7XiFU71cVjtqV4W3i9oemgZDvSh8K5Fcgj5eQLtp",
  "key8": "4znVd2q5yeF2NYv3afLzxrxrmrA9qceT7u8jEfPEd3d9cjeHwt5Ay8wug2MUDMo5skEaA8yEWSLrD8bNuBAbQ1SW",
  "key9": "5av3Krt1epZhbny5c9efHpVhs3PQdvmbAYTB36JDCBMQ9KQh8UK3nCnSgWyS4SmuNApj3X1tEmGaKKq6s9vDToMu",
  "key10": "2KMyrMk2LQAhbj1QGkTPL4SyczcsrxVsSccCdr4y54kAa1BUfRYZ75yd3PiBHLFAkPPURxQZYKHR1syQMYcJwF1i",
  "key11": "5wirXw64djYwGV6qgmWXhKQNLAPHSi6nHQzbuFKZhPHzD1sCbWGXRBnMhnS9XeqL2VQkeUdVYunLcQb84aQ7fEY1",
  "key12": "4xjsQZha6RBqtG4DkSfeAHX5mCWz3Ua34r5mbdk1JfJLzEzNKaGrNERKKo7uayMxugRnzSrokerugGG6Nd1baKv4",
  "key13": "3oyds4kZWnaSjcXFzCtshGA9oaWSSgc5PybXa51Epibfs3xE9tYttBUK5MhC7YieZUTkvE8XeVe1tXayZB86w5iM",
  "key14": "3KRjBQtSTVfdak7jFD2jULAN4CgER7fejvgiMifX6zWMhczqnfpV4SQaQNZvrV6hxH53nyNJioNW2G87m1AZr8rd",
  "key15": "2Tb1D26PqRxsZ2kaJSth5uwDXaCfWJ1zRkJzHQ8NxSshvmRe8BeUoUAsU2PxdLoZ1d1durp3rZ2rQr8nnBoAiVUS",
  "key16": "RcFyYmzhWxvREndN3jfti3taur9i9umT6qf3YBUAzqbzJpV9PWmQ2Y4zftrGh49oxqdaYHb4qsCpUrrfaTzeJQH",
  "key17": "2QKeuGJo48Snws1DiaWyMNGhGp1FqhxSjQKzCnazcV37eWBNDSX86xAKFuf16JEpNAG5SgKtwsdh3wQqU3v3Vkdc",
  "key18": "3proCG7z1n3g4wY6WMNaEsDmNPthLBPL8af7DbTFzxcZ2J1HJqwphtHQvsSjRRL4tVpG1e3wci5hnUEtuN5NP1hG",
  "key19": "5rEozm5DJWjmQ6fcgKjdQTs97zyagKunQpGGZWQRjELWcZbSSeLVfitKw7vttRiZ6sbNQT7MLYD48MgZpeCuGToJ",
  "key20": "puJsxA1QyfWyskm9WT8FpVKwbFMPXZeXvMTdydkvQdk38aYxPHx6ebAxL8bsjt4GEXZcbHgGrY8ide1mCvGBpZL",
  "key21": "bCgHSmQc7hxDyYedgnjzq8nVUq8mYw4qiwJBHMCrVHa1P5P11Aoo5rLXR6qQxiLnvUqz6L7V73EdsmhnUn14WYY",
  "key22": "2Vb5Yyvdhidivzvt7mRKBFjo6XLrTXeK5RTDooS8WLANTGKKQVssv16iFjfoHNzNFAAThZz9fSFhmHR4p3WWRfoT",
  "key23": "53Lx18xRKLhKkoUbzwjoPeZKaUbs7Smp4h8Tv7fCiuJeNM1Bikv8K1TEuSe5qhNNzs4kAqdT5CcMQ7SxSmFWJNmy",
  "key24": "2tQcKK3AA52pXSGME3sxMturZ7dnVBmBebhLAkvc6jZEhADG8tar8HqfGbQtQsqVuKuZVoXxufA3NJcBjPNeRFFj",
  "key25": "3XrYPfDZbmrjkJ5YrEGfJSE7yuqvZ3C8qNZ2pn21K6ogpQo6DwWtHvDTaBDPoms7VwadqYteg9hWJ8KBN9eJAnVf",
  "key26": "3qWjL9wVxbJbdnj11NQv5WqjrEWyHws6Epgo2cr369qip8dJ7MkyBSXjh7S3uGNxiBH7YbRDLMLrQMypRrW1PMGC",
  "key27": "3FQZV9w9A8zZsp81NbpMhVgD5Kg6wDm26tor7fyyjcLv3CyJ2wVjj7WgDSqdPJUZFU6Rj9cBGgSNptUUWGLBp9bz",
  "key28": "2B3D2M7itQi3DVeDQXWnj3oQ8sfW4iJfjZH2gaDWgfZh6t9SFxSFr6ZuZBb1R7RqGicYwL2Sipk32sDHvgZjmYVC",
  "key29": "3oVBfEyu3C9UmDPjN4m2rXLMKP52gUPPMvwAaxREthrXXxMXbFmMjxysdKCehwL6nyZJBp1LMj9JMPkBpm8Gsq34",
  "key30": "kAodeBFHpcVnYaXmpQNCjXNnwjCpjXntRvzk8e9hLbWoNwYPynQy6fY2NS8EZmuFs4tiTLuFAdqhkqvQ75yJc9z",
  "key31": "4KoGjb4MU6T8FYjmCDLgZA9SNhx36TXai6qFNH1tH6WsUyEK34sNQYXsJL9XTcX8CXgvu59cvqf3uyFfsDU7rjUe",
  "key32": "wH2nsxyDbKoefDaR98MGidCUZymqpgbLotrRY93LDPGEaK1t7VsgcJdEeUUDD9HBbGQaauo4KSMTdDMusfL4poU",
  "key33": "4QQAVZx4M3T3A4tyxXgRrwrfYBA2X3oXAYHY4pKH48bLB3naMtFrhvAkikdRhY8RvAvGmDSAPnQ99GNL8eRwNtSz",
  "key34": "5UcyM1hp48D9Ag5qhaWN3rPTsruvMj26KpGtugpFWehaEyAfEgpBcB3xVj8hsZBNzSpkqkTsHMzXagQrUxZ522zj",
  "key35": "2WAgvkZZ1oj8FeSPiii8vQX8xrDWYwn9WYuw9RenHeZxjDzS3vdPaX3fBMXaPQrrT29b47WaQFSctZyz8Xt4cjVH",
  "key36": "2isK5hM6rdUhVMa59o8qH4JNC9ZBRBqGppB1eqMSQXfcgLQYnLd9PS5YchgUBBWQ6zXQqXCxsy7fYVs7nXn1QkMn",
  "key37": "Tix8KgbNXvLN3CZHAmnjhZ5SfJjVq8psryzqLR5mPHS9LCkMp8r7pBRHTJfdhgoKYQJykRt514G8n8b4qbX2yLu",
  "key38": "4oevNhfuVhtg9sHix7wQp4EB3DHSwRsnYJj3nEGb5p5sdmkS4LRBMq7Xy18TCwYaTURiK7KK4SZXmxwijmcHujsn",
  "key39": "2KRCZWoTtusyrWg7tc25GS8Mr3xErHZwsZsbhdYb1N3jKcqCzVtTyY8kn5wE77B8HHnbK7KsG1xVEhBvdrDgbQoz",
  "key40": "5F6tBTQzLyeb5KwreZxBZSPCvmAR9HJqzbd7zi6hLTBpTG4PGgGaWqqE6tAGkFGwVr78XwX8SKpTEqEawKCDYjMu",
  "key41": "3ocQwuU4e8rPghuJBf9MLRSnLhJixzWzoUcxMnZSHeGP91TwCR6DV9ve4xurhrCudip27kaqcNogjbnimff2wazt",
  "key42": "3Faqz89irpL8LQxddw6w3K6ofoBwZtr6K9AjpuDjLY4gQ73StwfxjMcpBriQjNzVn75quCRfVxvxYQ3VAhJoXHYq",
  "key43": "4n7US3PtjErAja99Dpj7zR4U1Spb7ttaYGoB8BxY7CP8B4wUeqUCsFrJRVDJFjRQk3aN2KopAmdTGZBAE3tfLpDq"
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
