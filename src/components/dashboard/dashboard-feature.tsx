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
    "285fXzbc4fJc9XNNhcbXTAiG9diMQZqDmPaYJQemR9LGjPVhijvHna4mRQ2P8skpaqSXhyTAkFPnxp3VKNjz82b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "98uiUeWdyDsu5kS2rQ6RRRGyXE85v8UazxdKZ8UDvW66Ti5bFGJhDPSUSbZd2eapzAtYzejM5RyZL8KkxgLnHsq",
  "key1": "5iPXdXEcnMNVq5mAA3t3Nxh6A7oWR4HSA5ckx292q6Nq6iAn4uA6nzp9Lthrb2LYaAeJzDky2xLJNLtRh6sQ77Yq",
  "key2": "3qRSqCRtYRFQNi1furZwYZcs5Y5NH6VbUWxzop4Bzu9zcmvVDpj56HWgbAt9ZqiFgwKrTS7kePnkQbVKdvDzLVK8",
  "key3": "4i67RHeuDZw5PxjpTGKoUz5oNPDYLNph55wGWcMNiDoU2K7u2jjHXyEpJ5NYR6JRgrmrSDoFbTY8gMN4NQoMTsN1",
  "key4": "514TRFix65P3Jr5gNvyMh1GFuUembwwN3HSwEc4ViFrHjoptUmjUhEY1pig8vfNtYQKHqZ9L7GhTyQEfoXQS25eE",
  "key5": "3piJ21q5fMazxUkKq4VNQbNwWnDGKomGP9AqX8WMw21GTK5w7a3ukFSpfYBemfipJB1ENscHoiXR2NoKp5LmRvt9",
  "key6": "2tdnGKfAPonfhVjiWFaZR5JvNGeuDq37PGfDpEavbsLG4ejYdyg34XU9U7q79hhrqfDEysoxUPnFSLQQeJ3g2U5k",
  "key7": "94XyQWxZVHPCefTeLDyFBtkQc234LXbzitqGtiA4tusCzr6F6y3HZyygCQVUkCpNyDykwivRMWTQXb1ogjC8XhJ",
  "key8": "dzYunJUSy5EJz8cNhqoCeaLbYjvdN5XJiZyDQxuH1MhHKF85it58ky2UEUq7dNsQqFxXfZkaHrN8EBnKxf2msmy",
  "key9": "tGry9KwC5qtE5KhoogTPib8pto2iBRLQEr7WBp4SfmZYZUqXxi1tQ2my5yZXZP5eEtmJMp9Nw5TuB4UNegonesT",
  "key10": "4wzoD5s1WpUYxDVmPnv8jghKFtGxY4q6S383DG8yTsYHcDpRyN5D4eoKVh5pE3SNCfzPmQEvrATpxzpyrq1cYwei",
  "key11": "2xWUWEiuBA7Fp5nD7zQbU1M9KH5TzcHd99ixdsnKsvma35HFn9d9jpBHqYR9Eu1TvHCabEa7NEVPii3uReFuHrFL",
  "key12": "3ahLD4GZgrJpgLUrtRDtqo4FvQ2xKq2BX5v9XPYsPCxXPsiWNRWiTgLxJ6kX6KCc1f2d3gU9Mm7XEom5DwNhRxgy",
  "key13": "2TsThKDc2QMjvARzNy4JEA9ZQXbstMZSpGFYz47oaTUnrvhJhUE1fUvQodqTrUX3FUbWLhDm1ffkLyGxYraHWvwQ",
  "key14": "4c2dNZp7UMfcmbLjqvB3w1ATmrBUEtDqUZu7zQGuoy2McWUsWRBeUwtNADhhEqXiUjkU5BpCg34gE7kqZcbDHNrx",
  "key15": "4Cmo46CqvFsmSpAVocHHmStMHejEPasXsQjGssHFFbivPiYuNLZMnfoK1QcEpJdautQx15WWwxD6wM3TM86kp3k1",
  "key16": "4dqgwbDndRYgxiUrzYafqneKFrXqGd5SqDbstRrn7xRRdKfBgst9rQs4xb2PoUMhRyrsPEYLE2X4pqXH37oYHdYu",
  "key17": "4LvH9kShKkXKhRCg1BJJDibrbT3gK9LcMhwnkoRzR1oebXMJsqTrP2EGvP7mLpaempscFK3scS9nkuykQsA5n7f1",
  "key18": "5JyPxZkAGtAakaHaqv59YtrKY9rSLHkRHU5f9XEWtV4rYWK2XpTGJheAkhtcK3ormkBNGv6ZEVP8N3jnmYf8pbVL",
  "key19": "2Fh78L17dbx3VTkacBmpbcPmJAwAhuBNt5Hbwu7QJZ5fwb8dRR65EKzUyDvXb2YdJpSrLha9y6QzXUJmDHBdY9uL",
  "key20": "9UnYeHh8N8roq8ohv7uv8JAZh5JCicNUYWFYT8sGbu63q9xaRaEt3qjWYVa268mc1aw9jwex5XUU9m1EKE9LGWh",
  "key21": "2bjwSHAzbyzyfsNAeJGQf6k8sn8A2iXb2WpUoRTxSpimYmkEPyCNTnN5TGQA5K3wy9qaenKtr14vbbPBfd8K47xM",
  "key22": "35RXJbkH9S73LV2gbyoxgwvLAe8v9sSfwUURbbw4CFTD7KmzmLF1D9YbMnw3m69QdHazd8spvxro75xfrPuvgxuw",
  "key23": "3JsoM1sVwGEBX2H7Hfndgi2L9YgP5oQL1JDA7Zb9tE62dfgnYQTBojF6QjUAamt7nXBpaPvbKNJP8AQm7Jp4FBUq",
  "key24": "4T6MtcpHXAXD3ES6qwnWVA8k4omKRZrvob2i2DH9VE3vCd9P7nKvjbmPnvhCjTp3Pd7rBy2KesY9Tgd5pVqE23z8"
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
