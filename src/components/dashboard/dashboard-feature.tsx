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
    "5no19dyQwLZ3q3rrrqRja1HNfGevRJKJaJijNdhATDfhSk9Gr24aXArXjDKCpjbksBCGfuWTrDKfnsj1F3mBzTRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8T4ARPXRgrKxHx7pH5NeyNyoYSMdi2eCnxPdNGZD5sU88XMS8SwvX9N6NfizRsVPS1JZZWW7AwMdgqbPmxtXqw",
  "key1": "5mTihCGQTRWaMgSWo4E3S4p5BTTYs4sWByeNSodJ2gLGW1yQ941aHwj5a9dey5KcxMg363BTNAtp5xV3MnAcsSw6",
  "key2": "4LszNfa2ioWsdhb2dD5PZShRuhkJXqcd9MZcYwXe2YCoUmjTAbZQFzH6oMaZ99kF21msHrSp2RrAdv6YJFVgMs1j",
  "key3": "fDg2dxzKrpge6bjFCSfTXkn6pGgVP8n1mv2HrNfWZASXvFZzE3tQH4PjAPxzC98aG5ajVJoa1MbPD2CYQtLy1sK",
  "key4": "5mKBERuN1HuKvSjp9MKiCYcH8DzU9FhQ2wBxtDYwhMtiXWDBKszbuokuyo3BCviyiHahAwD9q35LSU6wGQMRzQnF",
  "key5": "5QeTWBqruQmCade6CxyVJ8DdLvFZp6bcwZxvRM8uSvk6xvGGGygw8YytHWG7PstLabxWVQJAghvfuigsmEXFNfdC",
  "key6": "2DJiHCtXcjM5WLnYGsVPkvf7JHkTmPQaG6rbWDUoQa2WkLsENVt6NKuuQsbicZcX2zFVQrZVJYS2rWnbskWjVuKQ",
  "key7": "5UUsNVcM4DiQG8YYfsUmxEwmDCdSv37SyveNqTNiQe7CnS7GX1P6yheboBGmHr2eE33WG66gx5JuL4VS85SNEx2o",
  "key8": "2nxQZnZvJy3pVvgZC9Hku3yYr2B4VcLz5Xj1afJwCmej6k7aZSAueWHGZnPH5qg8DJtnQSXZ5txRi4G9dJU9H9mt",
  "key9": "4z3jA4Yc19R8eENc1vWnJBw8CmymifLb5aFF4myDMcBcrSCgXzEZQ3t8d3hJVSi7sn4y7HnMmWpZxphRzomfPAA3",
  "key10": "5hVCJuf63Dw9MryqJiSZWMJsreW2urHRcCtmzLU9bJ9PpzkUSiJPhBvyueZJturfdfWXPyEzo3iqiL27tYgtcxki",
  "key11": "5Zjjnie2WQ2Thu1LH61Mt9iMk1jYaM762esu6UrJ1dubBJ7ALEQMkRrWLsWVTQcpYvMzDgvdeB9vGpq4XgECiTv9",
  "key12": "3duzKAhANi5bYDNeYLBHXN6qAbxB7kRqmEfVExKfZE7rZ6cf9DrGvguq5dJ4qtuKaDSK1fRYpi2yBdo1JpBfGN41",
  "key13": "3oEFecTT4BHcnwG3Bnwm26cC2WHhXDmn3gcduvoQgvTU97Jb8H11CaGqGZXkzahhMxLnZAggawKDLsw1a6bxmMX8",
  "key14": "2pLcKoXPKJbtwxiHbBkzfUaJHP76CmvNjWBFzLS3YYJGCgeQpHdveFRRg5ZSZgVmmNFoxKrPnBrfMiN6AWnTVFvR",
  "key15": "j6V45RvLGQLz7n6xmabzmorbBo5isuqGpmBcQ9crBHKECZq1cMj1zdRap4pjJMY6AYERnhzZoEghBfDoY8goMV1",
  "key16": "3rY8EPKWTjzzZTBfrJU1G3q34oyFQ3juF3z2FZLWspNzP6w58BtCA3gW51jSDkRwFHzjh8fhuhAzNuHrTfAiqCvd",
  "key17": "2BfxD8Wbrt8GiQYGtSWhHx5vrTZfz2GbTqwfyGi3vd3yjpjKsZ8ETPfejbRZEf1hT8qsWRH9KtGLxaRCasw2Su93",
  "key18": "5g1tbiZPtv5M5fVp8x54wphiu1uiPicirx2sgCYcQKd1c4EMa4mgpzpDXEqoKjxnjvsZgskUrVrbu2L8fCBsoqDA",
  "key19": "42AzDQNbpvWNKLPVwCsQDMtcrhXT9jiDPyVcJnasao1BPcPmfdzhbT99BKc8q1HbKca9kD8HyeWjZXvk36ooATci",
  "key20": "4tS8uHQt9gy27c3z1NkZdVGAUaECBip7Z7QsceJAVUFAEMrpVVYnyVLb3vYmt1XqQiEsTBdBoaKENQmi26HXaEwU",
  "key21": "2JMYsyPFkB6ksXMBXYdRXBdvGH3D8CRNwZDAyKdogyo4fiZbHLP9fhzCeTfJtSgJqfMCaNiThAvbtexzwHjdJxZ2",
  "key22": "3BVh2inVZvwgXsYYkgPpwa6jiBva5Urv926HttBgi6xft37bni1CT8a9URHzkHUbbfwxr7Fg3twtNJJbAKDsWN76",
  "key23": "418mZQAkBBmQjxL9HnmYBwjeafZpVUwVNqdL7URUbkqX7kk2H9YduJMVkaVpPXo884yitLFeMxfKb9x8PYoGmJrk",
  "key24": "4zx7yrRqE85MMQ3LVLHx68goXTfRQPVgSDXw2hLt8VJR3WBCAzA7Egtg7fHzkSkewUCGJ9WqfHxozNwzKKQ2MmsH",
  "key25": "5qRgfSinVdGdnaBs4tdcKYtQMTVLcZFdwgJ8kbBrThcmpNqva6RQ6DnBXaWjJSmqZSNRkSqZWJB4joR8GaNhnonw",
  "key26": "4eXtWKuTxVJhgZKgYwYGcDPPegbhPEJu6SQDbfpLfPcGkfqX1LaumX7Jr6F9LtgzPDSXe5aDo94mnPz8vXuTxtQg",
  "key27": "bqs6Bpqtf8GufWeoWNujYUBDS8Dv1NfzkaX38RtrY2SyuhJkDgmikenVn1fKwXzXE9ptFnVihtrPjVjXBD7tQpz",
  "key28": "3BrjCKwTrT3iyma4FLiZoZWHKtmJAvbWTJmeDLnFeroQFJBCKGY2V2XqKDXhhwSMLyUvgLexm72RJUuPJo5L4So3",
  "key29": "wZcmeQAQyENxJPS7nyJiQrRmR7SVgxRpsB2AiBomn9FSz7bptgQ7nFxrt8qF4sYLzcGcVJE7acag72nxE2v3vA9",
  "key30": "67GDX19fhLWX9v4M4sCZZaZhescNo46hevQzuy4v8v3WikDMyc6MiSKeV71rPAZifrUyK2vPPiN5LndTosBPEpTL",
  "key31": "5ZhuetGxavUKfFyD9Q21Q3NpaGZQtVWEMFjtpftGhEApnDf73FBMfNvF5BJR1VjqF7MTpD5sHnkY89yP8YRUvQ1e",
  "key32": "4F2hCw3MxFtuEv8SP4R5V9ar2Jwjwq2BJq5xB6zVn4fcnNzTtjzErqsYxbaJKPEmeUQpFDxUfwu3iWa8aakkF2j6",
  "key33": "5UMjRuxZNSkPPpGxT7fQsgeLmnaQqb2F7Dzjk25bkhNMNqW7xUbZwsb5zeDybMFatZFkp5tVLkG5uUng2gtfrRqU",
  "key34": "4zLjNbdQnYCSTKsEcEH9mrtC1nh5HNJZrQFw8Qnn2Tbax7LU5Nji4zkSdfHWTmWELHqPvGZmVvCnEgJKdHZLfC5A",
  "key35": "2M69u7esbxBc2n6pFRzK66ceH54BcKX3JKixoKfWPWhNCBvNf6oBNjcEeYwXLa9zuhWQW77DZdpY9gQKuqHxkNnB"
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
