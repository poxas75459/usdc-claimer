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
    "4ndbuDFgP8SRJmpPYT2SQzPy4qZjrwn2g6a7qfh5bPEt7n7dgjfhaRmqm2c2kdpvDjq9jpFfxs91oFUmzDYGsFPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVSPQLDRbZ27fxM2vsonxyFPcsQjEN31EAoGbRsT6JCGcrT6RUEpXhWNaPQGgLk7NHMRTdcDsMVNgRsR2XZBLiM",
  "key1": "z51q3tBZ6QTJ4UzBK3fgESQghsQbpbMgnSovUC2VmuMhxQ7rD6v3DUNR7geFqxCcQ3uA5jD1UurhCorfQGYXwQ6",
  "key2": "66ZRf14z6MUryHMZKgqc13QXdRQbRtevPshyXQrACNiJNgwz1Ai8j688Wci2aFQJKobhxCWPfBYfRCzggG1bJp3s",
  "key3": "2Z3tFteyapjBsPU7h3JUk62JAqoBRdcAc8kh1Qw7jMU2jEtv7cyMtyt3owMeUHhbYqo4Qya1ZJW5DJXJC45R9stA",
  "key4": "x6yqeukhhfFRPncSZXqs4LaNa1W4X1gPZeguKLuQKu5gXh8jcxNYnwj23kbTaZxru9X2E8xDyeMKz7cHVYZjsGy",
  "key5": "5LdhhsJxbcbrQagcmvoX6pX1zaPXnEiiCrbyrU9M1bSfVgWdrJCM1aYxN4AFtEcfsti3nqVF86YifvyHWhqep1vT",
  "key6": "2p2sWrMQNh2TX5XPZ7GJGVTsZCUeJb2oetmmH3cW5noEnc3CuWHmxjo8VRjx59S8vTQ349Cqo1NDKK7pDiRLfhJP",
  "key7": "2sPU2FAi9GuUy2XKLsVTKxg1e1kD6WKu6ZZeDAwpmePiHrEJNss87vsQxaug5SaLBYQbqp6VzjzpyiwkY45yMffF",
  "key8": "bxUVq79Zm6NfEz7Qc2di7pHqBtAmPqbU5FZoByHF6bfmper3aGu6REfdw9zKyt5aSH8DjcG5eHBrAN4YL5QTwkT",
  "key9": "3v1dVKFxaCHo2d9A9jm3WDbgJwFaES5xaTcz4i5RuFYoGcxm7B48in7YC2rco7RjzzmzLeKsKwYQ8xhexCT6y446",
  "key10": "X5gQ7mHnDH7D9xiZKWMjikjidd7KaxnTp6hgRSA6xMxJKGqVQfNQJPE1SisQiHwTN3G1PdiL9adAcEUeLzrAKyd",
  "key11": "2fs1yGFuX6EJ95gDTNXkyh1nnbBneKLp4Cob3iQm1mNfNBWzjk1ENKXJNGsft5QEnqoNyhzRHk9G7WXqgPNzVoz9",
  "key12": "3hUgseJVqmdqhKQHXM7Hm3vDeWsM9JS8vBcJC5yZQfHeQYGG4eDwRs28KgZR1xtBDNsB4HXbG8yEp8tvXh6s8eJd",
  "key13": "5w5gAP5Vko5gLAP5j1jpW7VWWMdWUa7cgGjmH5kukutwYEpQcTmnVNtCuAvZcVj5tEyt5oWcbKSKRBmAtQWVWrtc",
  "key14": "41vxBXyV2sYmW1LRyYSPA45bSfGTc4UFwWgi5e94jR4Ci8kw3c5rx6UG34Gj74CiL19FxgWXgqMBFJjAEQ3Fv8mx",
  "key15": "4JFDuhG2JtJJPwaooJ4yUXgnaAF2pjxd4vTKsZmR8TfG9PhxytedaBgL2DfyQj4wirgpaGMyDt5siEyQ1cq6bXmP",
  "key16": "2xpzttajaqFwp5EeH9Thna7EZ5c9pdjYKatifp6gRUmhsMnMYw7Je8nshJAtV1DUvpCsipHUvHSmx4SFmG6LZpG2",
  "key17": "2cp3j2LRkbPA8A9iRVAm2UBdVGvQvZm6krajqwCGsSgGzFHgXqwsek848UnEBS1qocpxSfszyEsKTNFcVvQPbZjd",
  "key18": "pRWwuFwJPB7pgLu8CJb9DB85mnwPy5QA6G2GpySNLQsUTKsmP7d9J68YD3AAb6xf1pAWDVRad5Br1oCu7Mj1bKd",
  "key19": "U3synd3tguAeKfm3comzTAmMi3YDxX39Py6biTGoLJ3Mj1FsDPt5DWgSvPqiocPdmyJAaYtvbgox7DNdu29pmj2",
  "key20": "2APFSeXTU8Recu2v2egCXuRZoUjvMC6UvHpLRPG1mpAwUNcA7YwJr6siXKwMVnnCSSg111b5SR1sA9bBvQTFzM5u",
  "key21": "2L5zphAf8eqZWPeEtHDtSo7nJLA1UZ9n9t6Fytac1tXEDiMmRyZ3MVrYvyMMQRELriizMctxRR1jzKp8MgmtQdJk",
  "key22": "B5b6hQW4VwCmrJ6aNpCKzbqyjMxp7SD2JCoEjv2495zkEjzvjMvFQy9d9Rfw44fgzNuRxhmeUn5S4hEzW6h3Wjn",
  "key23": "4ksiMHWUmBz4j1ZvndF4C3M2qq5JVBpbTEzngRkj5J3T7bSwVujPZ8YQftez7PG7uWKCYq7CnsD18mUmfAQA5oXi",
  "key24": "DrcJQoZr4vr2rLGpzwsq4mdnK8t613XcmqbuuJpa1VjijN3qE8Q5brkXxKDyStnmKx4TgwobEMcXxGaepHq6v67",
  "key25": "3BMWZVWBnMPvtmRW15m4HkVWuoxAbj4PUEJhb7u7i8W3v25sneKbcS7QDDdM6XpAy8Z6zJey6uwsGY3AJSPxCsFj",
  "key26": "3BkaE2bKZzfkMCmwHmoTKPsqRUDuXKt12EJRdjeGS4CKFHmZSJYDY2JszaSLwTvx3aDhi7KXtTSmhYzEppdsPEcV",
  "key27": "2muhgYtrcty2VgxwS255dvinaS3P3ejAvQ6EqQjUPLoLts2Nhfytsce8YzVq1oVV9SVFVnM284CDCBPRS2uJjA5t",
  "key28": "3N5GQb4TZhdXKSgaUgYfC5fBrY1M4o1f8LmwufJyiiLBR9QsMc7yEqu94EqkXLbjjJv2qzU8JthbKM3BjdNSRkjD",
  "key29": "3kLyCmaUywuA78XuVqeYKYQas7a8AR177F8e3gmGq37herce95h3xAaMp8LHYjTNUJMhRKVJB1BSppAfL9HMPAy6",
  "key30": "4k4CzoL3GXYQnmYPzNLEUU17sqAbAop9d16Yrq2D1sJo7ZoDB7kJ1Npf3g3sek3ed27WFcPFaJhhVyQSv9XWrE6w",
  "key31": "NTBM7UCvuftopSnR9SU5V7BF6dfy8hn6wwaCGvM93KJg34XMnxffnqMr9kpaof2RFAQDAX4sc4qDCGXD3CPvgCc",
  "key32": "54xLAKtPoKMVVT8i3TfcmaF3PyJn5duUYFDXDANu1tTBuKEt4W8qEXb3otDbsAYZtygyGs57STvpA5FKQBPHHAbx",
  "key33": "5qBrn7mnUbJ3AKRHTtm6mKrKbHvHWZfVMjS8GfZ6Y8LC8P8pj7eRn4dmsMLoaCjrTowrJJQpyQFQTmxwQVWh9Cha",
  "key34": "3GfZwc9S1rYJ9M2iQgCApVQyS92GB2DEUcHVyjcWKjRxCx5RGDMB2ZWyJaBZpYVZ9KtA6TJtQ3UFFzuRmKvjf7fh",
  "key35": "3hjKrd4Y475WHVRXTcV8EeazhQv3D3ME1hKbdHJdzekbwuEHqATvNq6VuvGum2gZk27XfLYrJ3MqCA6Rdr4x5BmB",
  "key36": "eV5JxGNzxy9wNZ1pXuHgFuzDszKR1WveCvoSBn9qrT5N9DikAb6rLYVD6zF8s2VNQPnHXJCkpQ2oQ7tw53NGutB",
  "key37": "4gZYwFj7icztodWDCVSdLWnhBRdgsWRMnsfNpN3ESyFJmdn2uPaHZfga28jzT3F6G6fWG8JWek5z9EPh3M86nux9",
  "key38": "32GQD8DT6vyfSRR497DyknXK2aLLY7ShXCtBr9PDU2dvJFGpGvgs6QVkufEGF5W9quEgUMuJ5pQpj3W6rwhj3Nhd",
  "key39": "xYykd2mA6W3LB1T8ud5JeTd7njQ63gaxTqU6tPLP8yL2m47atNrPJQiKLMp1d5WVjbeBp5yQJXXaVNpuX7sGBbB",
  "key40": "5GQqvBoCKCX6KbC5UqCCYttSwJdddG6iz1VwKfVazWpGaN8uSuekX4C3esxwaBmVvd5vYTgV72asuzwxXB5vQsNd",
  "key41": "5cP9krGSqiAAKGpngZR6yADSnsYSYV1yEcXFJHFKcKcAduAVjGc6a69C7v4zjv7LvWKz13TKJYBLwJZzZuu7ZY4Z",
  "key42": "2SBaHGmbqpdyM1fspDn7qREaXw1zc3QeqN1Ak7Me9kNXkrkPUHHt4LJXW6xPU7oWzwVBxtr6pgNns4CETxb89ayj",
  "key43": "4nJn8hfEFAttcfCrbB1oyoTPThhCj8KR9hjgTwbWwUkwcyqws3zxUeKHsd23YsuFL9cywKb4EvrN9gHhjGx4oZhg",
  "key44": "4GhkTpXuFTtA1xJQQxsGqey9Ux2AteawKfroqZE8d7uf24uknY5JiD56HZJBREF7yVWcwMBqcpUC8gBKfwmv4xsS",
  "key45": "QbTTCP8PD9D5JYku8nYUw4Y634GippUxk5Jmb95dsfUdwrv9munkWBRbhzhG7F66v39av7T9eoQ3kFrGLbyYeWo",
  "key46": "3EaTH3hJL1iqUHxrmQCCK3RZJw7ssKdMugtnKzDTUPayt2fTyFYN1vso4zhUTodGeiUZkCwn4vVLHVD5zQEJVubz",
  "key47": "b6FSBofi1fZqSgCmbwjmWJ3o7144NtZsheAyZCnpwJv1nqKMbMZv4tLgJZBn7q3ULjqemcTeNnLwvYuqJQPm48o",
  "key48": "4reYAeeG2HjKukxebNq6uK2J8W9G8xJFD8KgbkStC7CdsY67KzH4njHfzt9H2pRdtrptqr74zvYHJsMst4BGcUHD",
  "key49": "28yGNktzPp4xVskwY5gyWDs5MbZWQxYsgTwa11gbzFFiea7qJ284RdmgTqzNSR9T3vnPiMGs5cNL3bfz62LQCjjU"
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
