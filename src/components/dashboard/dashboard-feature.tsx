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
    "2TFYZxr1WxzyBhD2pYKYn8xErRQSA55DSbUYYzQ8LuihYe5z8ZtDHjt7u3qCsnz45vqhkHdiVh7Do6B4w8VSfnjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3fXMxf8zv4GUD8cLm9ETQBqwLerjF4S3TawgtFu1LFfeD3PToZKbYV5vTkSEzht7zs5hnjoG7X7VBCZiEt4Uju",
  "key1": "56bXXMMKRzjLS9TiwKjwYbDeiqLPXDAiRJcuz1B56cmxkXBJATL5EzhzVFWpGnkLVBoUEvgNPS5cHUQN5YWefFn1",
  "key2": "4yc5vyDwa93fFsfVWB9JvKBoFXiqFmjVbM4ysKCq1Bm9Q8gM6hxYGyj8aQUpfAtwZRJ8wDbiQ3Zb5pT95jMqsQRx",
  "key3": "3tou6bSPTSEzRKpSq1m3givapRWJZs9W3hfUJsK1C1efeapebDQrtNXex1ehZW2PPWz9ZGPETb6PvLDQLQPdxvFt",
  "key4": "2W1wzrHmdTwJUTSakqoFtLvw69meagksvjtUcP49Qbq8N4ij3yHSNosqhCNUUSst9pjKATwaVyqy1Wnue1XFw48W",
  "key5": "5rjtGEPwVU4tWSELNEy8GnfLWfwbH6WcoQHjuVPKGdvfWyznrsafdM9ZAxm1G1UGfCgYW9AevvRJoewn9fnNi57m",
  "key6": "4kLFJXjTPaQ5xxbKTSMUiVnEJp4htNTCurzvMjVSTpA4C7E4bCU4nB5DvWKE7WVDG8FjFFwyEBdUvHBY5wNJB2xe",
  "key7": "2bdavPCjA6XkwcAvw8yuFXq4XzYsUBurJauU4vxiYVuNzmtGAPa6hAvtKntT8CyXEuaHanGkhgZATNJGYPgUQSEt",
  "key8": "BMP2r6pkPWdbx4b5usKz68LdJ2e68jKYcLsLT7HtBSgX2jFzDHBukWZxJKJBMDe6JnWhCVBQQmhhJE6paTVqkNd",
  "key9": "5pzgKQXeWHCEwnaUKhXY7hrjnHK8pu4ZpsDQ5xK49tdCGCfar5VB7bSLYsZTHRfDFuXkSuubT9vjm48MoiLUSmQc",
  "key10": "45LHwAk8rbW75o56wgXqs3mW1TumnaPjG2t737PeA5zQCvJFzqcsq5LCWhMQwyqg6HkTLdt2WGwWJSQ1JujWJUyv",
  "key11": "651iy5uyMxsrrg9ZSHaVNnzhSo5A1W97WUcd9JPK4zSWopLGr8j1hioACZMaKmNcWJZJ5aX38ibQ3GdpoPYHMy9P",
  "key12": "KcgdA43cB9DkqdJTNvqjoGqazDVuv7AZhYAnYdQyvwadTSFq6nghdiwBzpg5RbdjhmUnMT3xXmsD2ZkTzB2vpuy",
  "key13": "27KkdbPqok1Ehgf6jbuemw2iJvp6KF1hYNsEKCapyH7hSZKkDAfnAwXJMnsqffBLGYUtHdt3FD5bx9ptxCQ4YXEw",
  "key14": "3rFn7HJXptGeLBtcKuuU8pqk3T7TM28FD4dvZswJ5GG9EYBPYRcpvCu5YeDBxDsy3Jca66vQu9gksM6PXzFWo5VL",
  "key15": "39FwxFRbahD9vodTruPgPnPkPNGjJjksW17ePG8HfT9iGBayMQ1rW9Evx9dAxGWQM4DsM7SrQr8yDhtsPoP7zisL",
  "key16": "3Vams7vpfGjzCgsyPJY2SU6rnjzaA66KpZAZthkMmEi2zug8R8bTKRswVac4Akdz3rRN3dN1H1sNzf6THwyGo7ip",
  "key17": "3dMFzKqF2BG2HUerkQiQtxWLZpCtjSYpFjqUDG4K1QmYqjja8XU9TbdmTZWTrZgJbHxN7fw21Ko5NYBWdJK9VKYq",
  "key18": "3sGhu1yghbjVK9w2CdCc82HN2sqy2r9uG3GmR3fPpqdu5fNw8tLMQkEXk4VLg9CG9eRjFEKDQo46qGgd1q56KXm7",
  "key19": "3GvuhpUkayN7cWUJ3Z1M2p59N4wsy51jjGUXmqh6CdXodG4bL72mbeFiVo1xHmxX81V5hfFQ6fLaqy6hHhn9vh6y",
  "key20": "VA7BHSRvoTRw1VBKcShoHx5FDqUCMu3iSYWaMTvnEpWLni2Wm3v83YnWiAPnkB2722tLiWpv4np6waUPNm3iYsA",
  "key21": "2w17iYTSVZ4w8EVH7SDc7GkVSR9caCw7QXBrUaaSAqixiHa6vSzWYHo9aqRT4GBDaavfvS6qdcpCqhQhHPNKhM8t",
  "key22": "67ZbJ7sMHQbV29tYaxbxbKYaSPudp6RMn5pjZ5XxoAJtCB9jzcuUH6ik9KRVvuY69QzXFngWGfKfAYa2s41DHme8",
  "key23": "4cBCpwyNCy2u9KW9g7WT3T7fk9B65pirsAEANEeJdMLpFJS4HNyCb2oeicS8soQfJmdeCtGZHN43qtKy7j7TK83f",
  "key24": "4cQQ2n7NoqeHg4puHEnaSHajAkDkiyDzzpi9T6oA6K3EAXWHMAtBPGez72LWuzceGiPAjZGhodimV484xFsd8HUi",
  "key25": "2qLLg1AT2aboYuiC78gN4xXZnmSS9McEAuFz8n2dwh4wzYnhKB7TZCMDWoa4BegGQ9xdYiAPGjQw3B2Yb4a2dvTG",
  "key26": "GYEohRiNjzHyJkdt1R37yBB5Tm8pfKorgsFYy923rpK81ubCDmAxFnf34HphS6ux7M1ASjg8Y4k8NzkR6Seq47P",
  "key27": "4AK1DUs5pswKvSPiUnUJ79Q4EuBBN74qppRGULXPvgGUBYtnRYL4ba67vthQRENWQ4sY66PoqL8dsebL8qquJ7xb",
  "key28": "3HArX6BAtjv6Lh2VW1W2sm2Vv4F2U69jtn1s9wVqSQ2uLs6LRbYiTkESaUmLSk8krHfXo819Ta3TsmLuTnJp1SA5",
  "key29": "2oWfhkcGLCcdyitXgD5GXNiwmySbLXv3YS1jxbDyPo8uZirRCRSBNKZqCQ2C1uNa9wwV27cW55XQVBakj8Q3TyAB",
  "key30": "2zSkg44iFevd9gr6dcZSxroUGC6b9dT5zsZe5adY11nStUkS2YuhqRdmkV2etrXzHGTK1e3NKLRxG6KVNQXBpJNj",
  "key31": "64H8mzRCczVGp2wtkz5Ls2ZMkfZcVc7jH3zr8cGHxiFmfBmYV5UvY2hEEc9ZvHGdQu8u8VzLB1jBjCx3k8wxFuhw",
  "key32": "5qmaQWfYarZRdd3JSMcQRPnYjkNa7ZmhMN8WGvCagkwb2C4FZ3gSYN3pxFj8LzB5BZvBJ3que6QLpj4DrpZfKFYT",
  "key33": "48kzwp9wZppWUgnB4Nv4PXwfiAAUvaXweDGeheioJCW2CBfQo7Gh8pnmuSDuS8ctv3RMaKd12VrKHUj9iZFmtSvy",
  "key34": "3xWUGAtJyz5AY9KNiqXSw3cvWC1HXp3zcq95fkvGuhcftb6HP8gBBVYX1pzQVxjA5PsGU9M6RXpf5TBB3ZjsTUTB",
  "key35": "4ZVZTAbY9kgsTDJcLV9Vg8JGdYHE4BAvqPmYT2EXdLpqAP7sH5e5Vdt3Q8KFbxHwGxk6ZaY1Jtq9GQnon7NgU9uv",
  "key36": "2po5HtHRfh4vXxXV9RB6643efxtMLkTfZm5CAZDWvYFS3ixRjv8n4XBwyj5GmXAJtrxjLXh8BTWFdTv4zkkzddmv",
  "key37": "3LXUsnAT8DhicrcbCFZnPXYtH28E33Ws4rrL7QX7s52gtUd7wstgw7DzkCf4qKTHDHyTQXaPfxuhpKXSxct5LNuv",
  "key38": "3YiPiv3dwq4iGc8RQss9ezTUEV23eYqStCiuVUtALJ3NUXoH7Fg8ZKq6ynkLpobPRzBRQ6KT2kAUBngN9rdFQoxj",
  "key39": "42P8cSNjyDE7q9riueWuzg9i9Srf5qrD7Hm13fGPey41drcHttSoetyNZxZXeTxHT9fFeZx3SdU9VS9LJQQq72Qx",
  "key40": "4Nqew2ToetuHZAuMaWKdAFWra8pjxFfKhkdjP4Nd1Tx4qsi5AEWW51Hc8SzCgC1cnsxZfD5uBdUsgJNZf3mWhVmF"
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
